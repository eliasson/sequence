//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//
import * as fs from 'fs';
import * as path from 'path';
import * as doT from 'dot';
import { getInstalledPathSync } from 'get-installed-path';

export const DEFAULT_SIZES = {
    participantWidth:             120,
    participantHeight:             80,
    participantMargin:             80,
    messageLaneHeight:             80,
    sequenceMargin:               160,
};

/**
 * Resolve the absolute path to the SVG template file. Prioritize a local
 * template over an installed package version to allow for development.
 *
 * It is needed since the template will be read from various locations when
 * sequence is used as a CLI program.
 *
 * @param {string} template The template file to resolve path to
 * @returns The absolute path to the template file
 */
function resolveTemplate(template) {
    // Favour a local file if existing
    let templatePath = path.join('./templates/', template);
    if (fs.existsSync(templatePath)) return templatePath;

    try {
        const packagePath = getInstalledPathSync('@eliasson/sequence');
        templatePath = path.join(packagePath, path.join('templates/', template));
    }
    catch(e) {
        throw new Error(`No template file found either in installed package or locally (templates/${template})`);
    }
    return templatePath;
}

/**
 * Transform the Sequence AST into SVG and return as a string. Calculate positions and sizes
 * here to keep the templates simple.
 */
export class SVGTransformer {
    constructor(ast) {
        this.ast = ast;
        this.size = DEFAULT_SIZES;
    }

    /**
     * Generate a context with all objects needed to render the list of sequences.
     */
    generateContext() {
        let ctx = {
            name: this.ast.getNameNode().getString().getUnquoted()
        };
        this.addParticipantsToContext(ctx);
        this.addSequencesToContext(ctx);
        return ctx;
    }

    addParticipantsToContext(ctx) {
        let offsetX = 0;
        let offsetY = 0;
        const process = (participants) => participants.map(p => {
            const participant = {
                name: p.getIdentifier().value,
                description: p.getDescription() ? p.getDescription().getUnquoted() : '',
                position: { x: offsetX, y: 0}
            };
            offsetX += this.size.participantWidth + this.size.participantMargin;
            return participant;
        });
        ctx['actors'] = process(this.ast.getActors());
        ctx['objects'] = process(this.ast.getObjects());
    }

    addSequencesToContext(ctx) {
        // Declared here since it is altered in `processMessage`
        let innerSequenceStartY;
        const participants = ctx.actors.concat(ctx.objects);

        const xFoParticipant = (name) => {
            const results = participants.filter(p => p.name == name)
            return results.length > 0 ? (results[0].position.x ) : 0;
        };

        const processMessage = (messageNode) => {
            const participantOffset = this.size.participantWidth / 2;
            const startPosition = { x: xFoParticipant(messageNode.getSourceIdentifier().value) + participantOffset, y: innerSequenceStartY };
            const endPosition = { x: xFoParticipant(messageNode.getDestinationIdentifier().value) + participantOffset, y: innerSequenceStartY };
            const m = {
                source: messageNode.getSourceIdentifier().value,
                destination: messageNode.getDestinationIdentifier().value,
                message: messageNode.getString() ?  messageNode.getString().getUnquoted() : '',
                type: messageNode.getMessageType(),
                startPosition: startPosition,
                endPosition: endPosition,
                directionRight: (() => endPosition.x > startPosition.x)()
            }
            innerSequenceStartY += this.size.messageLaneHeight;
            return m;
        }

        let sequencesStartY = 0;
        const sequences = this.ast.getSequences().map((seq) => {
            // Each sequence will have the participants drawn first
            innerSequenceStartY = this.size.participantHeight + (this.size.messageLaneHeight / 2);

            const s = {
                name: seq.getIdentifier().value,
                baseX: 0, // Currently all sequences start at X(0)
                baseY: sequencesStartY,
                // NOTE: Messages *must* mbe last since it alters the Y value!
                messages: seq.getMessages().map(processMessage),
                height: innerSequenceStartY + 0,
            };
            sequencesStartY += s.height + this.size.participantHeight;
            return s;
        });
        ctx['sequences'] = sequences;
    }

    transform(template='default.svg') {
        const sourceXML = fs.readFileSync(resolveTemplate(template), 'utf-8');
        const templateFn = doT.template(sourceXML);
        return templateFn(this.generateContext());
    }
}
