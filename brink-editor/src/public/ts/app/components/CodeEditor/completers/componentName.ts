import * as Brink from "brink-core/out/src/components";

export const componentNameCompleter = {
  getCompletions: (_: any, _1: any, _2: any, _3: any, callback: any) => {
    const wordList = Object.keys(Brink);
    callback(
      null,
      wordList.map(word => {
        return {
          caption: `<${word} />`,
          value: word,
          meta: "components"
        };
      })
    );
  }
};
