//tslint:disable
import * as ts from "typescript";

const program = ts.createProgram(process.argv.slice(2), {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
});

const walk = (node: ts.Node) => {
  if (ts.isParameter(node)) {
    ts.forEachChild(node, printParams);
  } else {
    ts.forEachChild(node, walk);
  }
};

const printParams = (node: ts.Node) => {
  if (ts.isIdentifier(node)) {
    console.log(node.text);
  } else {
    ts.forEachChild(node, printParams);
  }
};

for (const sourceFile of program.getSourceFiles()) {
  if (!sourceFile.isDeclarationFile) {
    // Walk the tree to search for classes
    ts.forEachChild(sourceFile, walk);
  }
}
