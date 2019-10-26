import { IName } from "../../libs/interfaces/name";
import { IValidators } from "../../libs/interfaces/validators";
import { IOnUpdate } from "../../store";

export interface IProps extends IName, IValidators {
  onUpdate: IOnUpdate;
  invalid?: string;
  validator?: string;
}
