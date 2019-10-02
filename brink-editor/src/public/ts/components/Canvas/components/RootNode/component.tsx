import React from "react";
import { EditableText, Icon } from "@blueprintjs/core";
import { EditMenu } from "./components/EditMenu";
import { IRootNode, IConnection } from "./RootNode";
import { config } from "./config";
import { getTransform } from "./utils";
import { ArcherElement } from "react-archer";
import { getToId } from "../../relations";

interface IProps {
  rootNode: IRootNode;
  fromRootNode?: IRootNode;
  fromOutline?: boolean;
  toOutline?: boolean;
  children: any;
  connections: IConnection[];
  onClick(
    rootNode: IRootNode,
    connections: IConnection[],
    fromRootNode?: IRootNode
  ): void;
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
    const {
      onClick,
      onChange,
      rootNode,
      toOutline,
      fromOutline,
      fromRootNode,
      connections,
      children
    } = this.props;
    const toOutlineClass = toOutline ? "root_node--to-outline" : "";
    const fromOutlineClass = fromOutline ? "root_node--from-outline" : "";

    return (
      <div
        id={rootNode.id}
        onClick={() => onClick(rootNode, connections, fromRootNode)}
        ref="rootNode"
        className={`${fromOutlineClass} ${toOutlineClass} root_node`}
      >
        <EditableText
          defaultValue={rootNode.title}
          intent="primary"
          maxLength={config.titleMaxLength}
          onChange={text => onChange(rootNode, text)}
        />
        <div className="root_node__body">
          <EditMenu rootNode={rootNode}>
            <Icon className="root_node__cog" intent="primary" icon="cog" />
          </EditMenu>
          <ArcherElement id={getToId(rootNode.id)} />
          {children}
        </div>
      </div>
    );
  }
}
