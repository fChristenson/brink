import docs from "brink-core/docs.json";

export const componentNameCompleter = {
  getCompletions: (_: any, _1: any, _2: any, _3: any, callback: any) => {
    const wordList = docs.map(d => d.name);
    callback(
      null,
      wordList.map(word => {
        return {
          caption: `<${word} />`,
          value: word,
          meta: "component"
        };
      })
    );
  }
};
