import interact from "interactjs";

function dragMoveListener(event: any) {
  const target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
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
