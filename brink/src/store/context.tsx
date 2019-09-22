import React from "react";

export const context = React.createContext({});

export type IOnSubmit = (event: any) => false;

export type IOnUpdate = (key: string, value: any) => void;

export interface IContext {
  state: any;
  onSubmit: IOnSubmit;
  onUpdate(key: string, value: any): void;
}

export const withAppContext = (Component: React.ReactNode) => {
  //TODO: type secure
  return (props: any) => (
    <context.Consumer>
      {(contextObj: any) => {
        return (
          // @ts-ignore
          <Component
            validators={contextObj.validators}
            onClicks={contextObj.onClicks}
            onUpdate={contextObj.onUpdate}
            onSubmit={contextObj.onSubmit}
            state={contextObj.state}
            {...props}
          />
        );
      }}
    </context.Consumer>
  );
};
