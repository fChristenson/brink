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
    _: any,
    _1: ISession,
    _2: ICursor,
    _3: string,
    callback: any
  ) => {
    // TODO: add show prop names
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
