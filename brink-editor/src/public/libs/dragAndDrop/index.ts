import interact from "interactjs";
import { config } from "../../ts/components/Canvas/components/RootNode/config";

function dragMoveListener(event: any) {
  const target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  const x =
    (parseFloat(target.getAttribute(config.xAttributeName)) || 0) + event.dx;
  const y =
    (parseFloat(target.getAttribute(config.yAttributeName)) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform = `translate(${x}px, ${y}px)`;

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
