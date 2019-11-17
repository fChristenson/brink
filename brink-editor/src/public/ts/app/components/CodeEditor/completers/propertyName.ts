import docs from "brink-core/docs.json";

export const propertyNameCompleter = {
  getCompletions: (_: any, _1: any, _2: any, _3: any, callback: any) => {
    const wordList = docs
      .map(d => d.docs)
      .map(doc => Object.keys(doc))
      .reduce((acc, next) => acc.concat(next), [])
      .filter((s, i, self) => self.indexOf(s) === i);
    callback(
      null,
      wordList.map(word => {
        return {
          caption: word,
          value: word,
          meta: "property"
        };
      })
    );
  }
};
