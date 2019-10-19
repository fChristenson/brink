import * as Brink from "brink-core/out/components";

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

interface ICursor {
  column: number;
  row: number;
}

interface ISession {
  doc: {
    $lines: string[];
  };
}

export const propertyNameCompleter = {
  getCompletions: (
    editor: any,
    session: ISession,
    pos: ICursor,
    prefix: string,
    callback: any
  ) => {
    //TODO: add show prop names
    const wordList: string[] = [];
    callback(
      null,
      wordList.map(word => {
        return {
          caption: word,
          value: word,
          meta: "properties"
        };
      })
    );
  }
};
