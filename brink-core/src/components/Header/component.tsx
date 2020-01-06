import React from "react";
import { IProps } from "./props";
import { DivContainer } from "../DivContainer";
import { Icon } from "../Icon";
import { IconName } from "../Icon/IconNames";
import { ColorNames } from "../../configs/colors";

export const Header: React.FunctionComponent<IProps> = ({ iconColor }) => {
  return (
    <DivContainer justifyContent="space-between">
      <Icon color={iconColor || ColorNames.BLUE1} icon={IconName.ARROW_LEFT} />
      <Icon color={iconColor || ColorNames.BLUE1} icon={IconName.HELP2} />
    </DivContainer>
  );
};

Header.displayName = "Header";
