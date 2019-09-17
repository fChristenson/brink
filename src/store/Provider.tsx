import React from "react";
import { context } from "./context";

export interface IProivderProps {
  validators?: any;
  onUpdateCallback?(state: any): void;
  onSubmit?(state: any): void;
}

export class Provider extends React.Component<IProivderProps> {
  constructor(props: IProivderProps) {
    super(props);
    this.state = {};
    this.onUpdate = this.onUpdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public render() {
    return (
      <context.Provider
        value={{
          state: this.state,
          validators: this.props.validators || {},
          onUpdate: this.onUpdate,
          onSubmit: this.onSubmit
        }}
      >
        {this.props.children}
      </context.Provider>
    );
  }

  private onUpdate(key: string, value: any) {
    const newState = { ...this.state, [key]: value };
    this.setState(newState);
    if (this.props.onUpdateCallback) {
      this.props.onUpdateCallback(newState);
    }
  }

  private onSubmit(event: any) {
    event.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }

    return false;
  }
}
