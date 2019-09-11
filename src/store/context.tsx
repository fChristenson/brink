import React from "react";

const context = React.createContext({});

export interface IContext {
  state: any;
  onUpdate(key: string, value: any): void;
}

export class Provider extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.onUpdate = this.onUpdate.bind(this);
  }

  public render() {
    return (
      <context.Provider value={{ state: this.state, onUpdate: this.onUpdate }}>
        {this.props.children}
      </context.Provider>
    );
  }

  private onUpdate(key: string, value: any) {
    this.setState({ [key]: value });
  }
}

export const withAppContext = (Component: React.ReactNode) => {
  //TODO: type secure
  return (props: any) => (
    <context.Consumer>
      {(contextObj: any) => {
        // @ts-ignore
        window.__BRINK_STATE__ = contextObj.state;
        return (
          // @ts-ignore
          <Component
            onUpdate={contextObj.onUpdate}
            state={contextObj.state}
            {...props}
          />
        );
      }}
    </context.Consumer>
  );
};
