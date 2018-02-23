# Sequence

A custom languange for expressing sequence diagram as text and transform those
into SVG files.

The following syntax:

```
Name "Sequence demo"

Actor User
Object Alpha
Object Bravo

Sequence Test
    User tell Alpha "A synchronous message"
    Alpha ask Bravo "An asynchronous mesage"
    Bravo replies Alpha "A response message"
    Alpha replies User "OK"
```

Will produce the following SVG output:

![Example sequence flow](/example/demo.svg)

_Please note that while at a usable state, sequence is still under development,
especially error reporting and verification of syntax is under construction._


## Using

Currently sequence is only a command line tool that prints the generated
SVG to standard out.

    # Install sequence locally
    $ npm install @eliasson/sequence
    
    # Generate a SVG to standard out
    $ sequence example.seq
    
    # Or using a local installation
    $ npm install @eliasson/sequence
    
    # Generate a SVG to standard out
    $ ./node_modules/.bin/sequence example.seq


## Inspiration

I often find myself creating sequence diagrams, whether it is to designing a
system, explaining some details for a collegue or just when trying to
understand something for myself. The last few years I have used the excellent
service http://websequencediagrams.com - but I have two problems with that
serivice:

1) Version control, I needed to manually keep my source files under version
control and copy paste into the web editor.

2) Online only, I do a fair share of work while travelling and in the deep
forests of Sweden you're not always connected to the Internet.

Recently, I got to work on creating a DSL and an associated compiler at work.
I expected it to be hard and complex, but it turned out that there are some
great tool available when creating a DSL and the tools needed.

My plan is to write a series of small articles illustrating what is required
to build a small DLS with the accompanying tools - sequence is the driver for
these articles. Thus some features might be a stretch for such a small project
and some features are kept out if they are out of the focused area.


## Development

Sequence uses two toolchains, ANTLR for defining the grammar and generating
a parser and the traditional JavaScript toolchain for building the transformer
(i.e. compiler). All ANTLR generated files is stored under the directory
`parser` and kept separate from the other source code.

### Generating a ANTLR parser

If you plan to make changes to the grammar you need to install ANTLR4 to do
so. ANTLR is a Java program, so you will need to install Java on your
computer. Once you have Java installed goto http://www.antlr.org/ and follow
the instructions to install ANTLR.

Once ANTLR is installed you can use the following commands to generate a
new version of the parser based on the grammar (defined in
`parser/Sequence.g4`)

    # The following command use the alias defined when installing ANTLR
    $ antlr4 -Dlanguage=JavaScript ./parser/Sequence.g4

    # Which is the equvivalent of this command
    $ java -Xmx500M -cp "/usr/local/lib/antlr-4.7-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript ./parser/Sequence.g4

### Building the transformer

To run tests and to generate the distribution uses:

    # Runs all tests
    $ npm test
    
    # Transpile and bundle the distribition
    $ npm run build

    # Transform one of the tests files to SVG (stdout)
    $ ./bin/sequence.js __tests__/integration/source/greeting.seq


## Contributing

If you wish to contribute you are welcome to do so, but please:

1. Open a github issue both for defects and feature requests
2. Make sure your code has tests for grammar, AST and integration


## Licensing

Sequence is licensed under MIT, see `LICENCE` for details.

The grammar definition IDENT and DEDENT support is a copy from the Python3
grammar by Bart Kiers licenced under MIT available at
https://github.com/antlr/grammars-v4/blob/master/python3-js/Python3.g4
