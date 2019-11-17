import docs from "brink-core/docs.json";

export const colorNameCompleter = {
  getCompletions: (_: any, _1: any, _2: any, _3: any, callback: any) => {
    const doc = docs.find(d => d.docs.color);
    if (!doc || !doc.docs.color)
      throw new Error("Could not find documentation with colors");

    const wordList = doc.docs.color.exampleValues;
    callback(
      null,
      wordList.map(word => {
        return {
          caption: word,
          value: word,
          meta: "color"
        };
      })
    );
  }
};
