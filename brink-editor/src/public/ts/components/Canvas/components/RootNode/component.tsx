import React from "react";
import { EditableText, Icon } from "@blueprintjs/core";
import { EditMenu } from "./components/EditMenu";
import { IRootNode } from "./RootNode";
import { config } from "./config";
import { getTransform } from "./getTransform";

interface IProps {
  rootNode: IRootNode;
  onChange(rootNode: IRootNode, title: string): void;
}

export class RootNode extends React.Component<IProps> {
  public componentDidMount() {
    const { id, x, y } = this.props.rootNode;
    // @ts-ignore
    this.refs.rootNode.setAttribute(config.xAttributeName, x);
    // @ts-ignore
    this.refs.rootNode.setAttribute(config.yAttributeName, y);
    // @ts-ignore
    this.refs.rootNode.setAttribute(config.idAttributeName, id);
    // @ts-ignore
    this.refs.rootNode.style.transform = getTransform(x, y);
  }

  public render() {
    return (
      <div ref="rootNode" className="root_node">
        <EditableText
          defaultValue={this.props.rootNode.title}
          intent="primary"
          maxLength={config.titleMaxLength}
          onChange={text => this.props.onChange(this.props.rootNode, text)}
        />
        <div className="root_node__body">
          <EditMenu rootNode={this.props.rootNode}>
            <Icon className="root_node__cog" intent="primary" icon="cog" />
          </EditMenu>
        </div>
      </div>
    );
  }
}
