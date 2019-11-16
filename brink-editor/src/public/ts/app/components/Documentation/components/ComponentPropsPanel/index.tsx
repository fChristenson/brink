import React from "react";
import { IPanelProps, ITreeNode } from "@blueprintjs/core";
import docs from "brink-core/docs.json";

interface IProps {
  node: ITreeNode;
}

export const ComponentPropsPanel: React.FunctionComponent<
  IProps & IPanelProps & { enabled: boolean }
> = ({ node }) => {
  const componentDocs = docs.find(d => d.name === node.label);
  if (!componentDocs) throw new Error(`No docs found for ${node.label}`);
  const props = Object.keys(componentDocs.docs);

  return (
    <div className="documentation__props">
      <h3 className="documentation__props-h3">Properties</h3>
      <ul className="documentation__props-ul">
        {props.map((prop, i) => (
          <li key={i} className="documentation__props-li">
            <h4 className="documentation__props-h4">{prop}</h4>
            <p className="documentation__props-p">
              {
                // @ts-ignore
                componentDocs.docs[prop].description
              }
            </p>
            <p>Example values:</p>
            <pre className="documentation__props-pre">
              <code
                dangerouslySetInnerHTML={{
                  // @ts-ignore
                  __html: componentDocs.docs[prop].exampleValues.join("<br />")
                }}
              />
            </pre>
          </li>
        ))}
      </ul>
    </div>
  );
};
