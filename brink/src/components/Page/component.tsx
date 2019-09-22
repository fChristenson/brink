import React from "react";
import { Color } from "../../configs/colors/colors";
import { styles, formStyles } from "./styles";
import { withAppContext, IOnSubmit } from "../../store";
import { applyStyles } from "../../libs/utils/applyStyles";

interface IPageProps {
  backgroundColor?: Color;
  onSubmit: IOnSubmit;
}

export const PageComponent: React.FunctionComponent<IPageProps> = ({
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
