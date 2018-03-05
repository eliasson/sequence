//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { AstVisitor, ActorNode, ObjectNode, SequenceNode, MessageNode } from "./ast";

export const DiagnosticError = 1;

export const ErrorCodes = {
    RedeclareIdentifier:  'SEQ-001',
    MissingIdentifier:  'SEQ-002',
}

export class Diagnostic {
    constructor(type, code) {
        this.type = type;
        this.code = code
        this.line = 0;
        this.column = 0;
        this.offendingSymbol = undefined;
    }
}

/**
 * Analyse an AST for declaration errors such asreusing an already used
 * identifier for declaring / defining an Actor, Object or Sequence.
 */
export class RedeclarationAnalyser extends AstVisitor {
    constructor(ast, symbols) {
        super();
        this.ast = ast;
        this.symbols = symbols;
        this.result = [];
    }

    analyse() {
        this.result = [];
        this.ast.accept(this);
        return this.result;
    }

    visit(node) {
        if((node instanceof ActorNode) || 
           (node instanceof ObjectNode) ||
           (node instanceof SequenceNode)) {

            const existingSymbol = this.symbols.resolve(node.getIdentifier().value);

            if(existingSymbol && existingSymbol.node !== node) {
                const existingType = existingSymbol.node.value;
                const existingLine = existingSymbol.node.getIdentifier().line;
                const existingColumn = existingSymbol.node.getIdentifier().column;
                const diagnostic = new Diagnostic(DiagnosticError,ErrorCodes.RedeclareIdentifier);
                diagnostic.line = node.getIdentifier().line;
                diagnostic.column = node.getIdentifier().column;
                diagnostic.offendingSymbol = node.getIdentifier().value;
                diagnostic.message = `A existing ${existingType} is declared using this name at line: ${existingLine} column: ${existingColumn}`;
                this.result.push(diagnostic);
            }
        }
    }
}

/**
 * Analyse the AST's MessageNodes to find any message using an undefined
 * participant.
 */
export class MissingDeclarationAnalyser  extends AstVisitor {
    constructor(ast, symbols) {
        super();
        this.ast = ast;
        this.symbols = symbols;
        this.result = [];
    }

    analyse() {
        this.result = [];
        this.ast.accept(this);
        return this.result;
    }

    visit(node) {
        if(node instanceof MessageNode) {
            [node.getSourceIdentifier(), node.getDestinationIdentifier()]
                .filter(n => n !== undefined)
                .map(participantNode => {
                    if(!this.symbols.contains(participantNode.value)) {
                        const diagnostic = new Diagnostic(DiagnosticError, ErrorCodes.MissingIdentifier);
                        diagnostic.line = participantNode.line;
                        diagnostic.column = participantNode.column;
                        diagnostic.offendingSymbol = participantNode.value;
                        diagnostic.message = `No participant defined ${participantNode.value} could be found`;
                        this.result.push(diagnostic);
                    }
                });
        }
    }
}
