export const getComponentImports = (xml: any[]): string[] => {
  let names = [];

  for (const node of xml) {
    if (node.type === "element") names.push(node.name);
    if (Array.isArray(node.elements))
      names = names.concat(getComponentImports(node.elements));
  }

  return names.filter((name, i, self) => self.indexOf(name) === i);
};
