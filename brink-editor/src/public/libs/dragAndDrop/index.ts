import interact from "interactjs";
import { config } from "../../ts/app/components/Canvas/components/RootNode/config";
import { store } from "../../ts/store/store";
import { MoveRootNode } from "../../ts/app/components/Canvas/actions";
import { getTransform } from "../../ts/app/components/Canvas/components/RootNode/utils";
import { RootNode } from "../../ts/app/components/Canvas/components/RootNode/RootNode";

function dragMoveListener(event: any) {
  const target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  const x =
    (parseFloat(target.getAttribute(config.xAttributeName)) || 0) + event.dx;
  const y =
    (parseFloat(target.getAttribute(config.yAttributeName)) || 0) + event.dy;
  const id = target.getAttribute(config.idAttributeName);

  store.dispatch(MoveRootNode(RootNode(x, y, id)));

  // translate the element
  target.style.webkitTransform = target.style.transform = getTransform(x, y);

  // update the posiion attributes
  target.setAttribute(config.xAttributeName, x);
  target.setAttribute(config.yAttributeName, y);
}

interact(".root_node").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrict({
      restriction: "parent",
      endOnly: true
    })
  ],
  autoScroll: true,
  onmove: dragMoveListener
});
