import { Intent, IconName } from "@blueprintjs/core";

export const TOAST_DISMISS_TIME = 1500;

export interface IToast {
  icon: IconName;
  message: string;
  intent: Intent;
}

const makeToastFunc = (icon: IconName, intent: Intent) => (
  message: string
): IToast => {
  return {
    icon,
    message,
    intent
  };
};

export const SuccessToast = makeToastFunc("tick-circle", "success");
