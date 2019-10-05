import { makeAction } from "../../store/action";
import { PageBuilderEvents } from "./events";
import { IVnode } from "./Vnode";

export const SetNodeToPlace = makeAction<string>(
  PageBuilderEvents.SET_NODE_TO_PLACE
);

export const AddNode = makeAction<{ node: IVnode; targetId: string }>(
  PageBuilderEvents.ADD_NODE
);
