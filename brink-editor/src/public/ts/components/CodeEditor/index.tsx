import React from "react";
import { config } from "./config";
import { Drawer, Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import Highlight from "react-highlight.js";

interface IState {
  open: boolean;
}

//@ts-ignore
@HotkeysTarget
export class CodeEditor extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: window.localStorage.getItem(config.localStorageKey) === "true"
    };
    this.setOpen = this.setOpen.bind(this);
  }

  private setOpen(open: boolean) {
    window.localStorage.setItem(config.localStorageKey, open.toString());
    this.setState({ open: open });
  }

  render() {
    return (
      <Drawer
        className="bp3-dark"
        title={config.title}
        onClose={() => this.setOpen(false)}
        position="left"
        hasBackdrop={false}
        canOutsideClickClose={false}
        size={Drawer.SIZE_SMALL}
        isOpen={this.state.open}
      >
        <Highlight language="xml">
          {[
            "<Page>",
            '<Headline3 margin="12px">Test</Headline3>',
            "<Body2>Test</Body2>",
            "</Page>"
          ].join("\n")}
        </Highlight>
      </Drawer>
    );
  }

  public renderHotkeys() {
    return (
      <Hotkeys>
        <Hotkey
          global={true}
          combo={config.hotkey}
          label={`Show ${config.title}`}
          onKeyDown={() => this.setOpen(!this.state.open)}
        />
      </Hotkeys>
    );
  }
}
