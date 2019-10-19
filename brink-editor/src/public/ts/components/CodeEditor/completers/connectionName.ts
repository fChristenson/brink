import { IConnection } from "../../Canvas/components/RootNode/Connection";

export const makeConnectionCompleter = (connections: IConnection[]) => {
  return {
    getCompletions: (_: any, _1: any, _2: any, _3: any, callback: any) => {
      const wordList = connections.map(c => c.name);
      callback(
        null,
        wordList.map(word => {
          return {
            caption: word,
            value: word,
            meta: "transitions"
          };
        })
      );
    }
  };
};
