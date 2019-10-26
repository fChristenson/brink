import React from "react";
import { styles, formStyles } from "./styles";
import { withAppContext } from "../../store";
import { applyStyles } from "../../libs/utils/applyStyles";
import { IProps } from "./props";

export const PageComponent: React.FunctionComponent<IProps> = ({
  children,
  onSubmit,
  backgroundColor
}) => {
  const style = applyStyles(styles, { background: backgroundColor });
  return (
    <main style={style}>
      <form style={formStyles} onSubmit={onSubmit}>
        {children}
      </form>
    </main>
  );
};

export const Page = withAppContext(PageComponent);
