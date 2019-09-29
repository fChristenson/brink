import { makeAction } from "../../store/action";
import { CanvasEvents } from "./events";

export const ZoomCanvas = makeAction(CanvasEvents.ZOOM);
export const AddRootNode = makeAction(CanvasEvents.ADD_ROOT_NODE);
