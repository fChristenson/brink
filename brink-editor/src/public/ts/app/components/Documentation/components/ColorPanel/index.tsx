import React from "react";
import { IPanelProps } from "@blueprintjs/core";
import { Color } from "brink-core";

export const ColorPanel: React.FunctionComponent<
  IPanelProps & { enabled: boolean }
> = () => {
  const props = Object.keys(Color).map(n => ({
    name: n,
    // @ts-ignore
    value: Color[n]
  }));

  return (
    <div className="documentation__props">
      <h3 className="documentation__props-h3">Colors</h3>
      <ul className="documentation__props-ul">
        {props.map((prop, i) => (
          <li key={i} className="documentation__props-li">
            <p className="documentation__props-color-p">{prop.name}</p>
            <p
              style={{
                background: prop.value,
                height: "34px",
                border: "1px solid white"
              }}
            />
            <pre className="documentation__props-pre">{prop.value}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};
