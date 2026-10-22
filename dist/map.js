const viewport = document.querySelector("#map-viewport");
const canvas = document.querySelector("#map-canvas");
const mapImage = canvas.querySelector("img");
const zoomInButton = document.querySelector("#zoom-in");
const zoomOutButton = document.querySelector("#zoom-out");
const zoomStatus = document.querySelector("#map-zoom-status");

const minimumZoom = 1;
const maximumZoom = 4;
const zoomStep = 0.5;

let zoom = minimumZoom;
let offsetX = 0;
let offsetY = 0;
let dragStartX = 0;
let dragStartY = 0;
let startingOffsetX = 0;
let startingOffsetY = 0;
let activePointerId = null;

const clampOffsets = () => {
  const maxX = Math.max(0, (mapImage.offsetWidth * zoom - viewport.clientWidth) / 2);
  const maxY = Math.max(0, (mapImage.offsetHeight * zoom - viewport.clientHeight) / 2);

  offsetX = Math.max(-maxX, Math.min(maxX, offsetX));
  offsetY = Math.max(-maxY, Math.min(maxY, offsetY));
};

const renderMap = () => {
  clampOffsets();
  canvas.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(${zoom})`;
  zoomInButton.disabled = zoom >= maximumZoom;
  zoomOutButton.disabled = zoom <= minimumZoom;
  zoomStatus.textContent = `${Math.round(zoom * 100)}% zoom`;
  viewport.classList.toggle("is-zoomed", zoom > minimumZoom);
};

const setZoom = (nextZoom) => {
  zoom = Math.max(minimumZoom, Math.min(maximumZoom, nextZoom));

  if (zoom === minimumZoom) {
    offsetX = 0;
    offsetY = 0;
  }

  renderMap();
};

zoomInButton.addEventListener("click", () => setZoom(zoom + zoomStep));
zoomOutButton.addEventListener("click", () => setZoom(zoom - zoomStep));

viewport.addEventListener("pointerdown", (event) => {
  if (zoom === minimumZoom || event.button !== 0 || event.target.closest(".map-controls")) return;

  activePointerId = event.pointerId;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  startingOffsetX = offsetX;
  startingOffsetY = offsetY;
  viewport.setPointerCapture(event.pointerId);
  viewport.classList.add("is-dragging");
});

viewport.addEventListener("pointermove", (event) => {
  if (event.pointerId !== activePointerId) return;

  offsetX = startingOffsetX + event.clientX - dragStartX;
  offsetY = startingOffsetY + event.clientY - dragStartY;
  renderMap();
});

const stopDragging = (event) => {
  if (event.pointerId !== activePointerId) return;

  activePointerId = null;
  viewport.classList.remove("is-dragging");
};

viewport.addEventListener("pointerup", stopDragging);
viewport.addEventListener("pointercancel", stopDragging);

viewport.addEventListener("keydown", (event) => {
  const panAmount = 45;
  let handled = true;

  switch (event.key) {
    case "+":
    case "=":
      setZoom(zoom + zoomStep);
      break;
    case "-":
    case "_":
      setZoom(zoom - zoomStep);
      break;
    case "ArrowLeft":
      offsetX += panAmount;
      renderMap();
      break;
    case "ArrowRight":
      offsetX -= panAmount;
      renderMap();
      break;
    case "ArrowUp":
      offsetY += panAmount;
      renderMap();
      break;
    case "ArrowDown":
      offsetY -= panAmount;
      renderMap();
      break;
    default:
      handled = false;
  }

  if (handled) event.preventDefault();
});

window.addEventListener("resize", renderMap);
mapImage.addEventListener("load", renderMap);
renderMap();
