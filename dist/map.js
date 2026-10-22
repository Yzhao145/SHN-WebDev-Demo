// Cache the interactive map elements once so the event handlers below can reuse them.
const viewport = document.querySelector("#map-viewport");
const canvas = document.querySelector("#map-canvas");
const mapImage = canvas.querySelector("img");
const zoomInButton = document.querySelector("#zoom-in");
const zoomOutButton = document.querySelector("#zoom-out");
const zoomStatus = document.querySelector("#map-zoom-status");

// Zoom is stored as a multiplier: 1 = 100%, 2 = 200%, and 4 = 400%.
const minimumZoom = 1;
const maximumZoom = 4;
const zoomStep = 0.5;

// Current map position and the temporary values used while a drag is active.
let zoom = minimumZoom;
let offsetX = 0;
let offsetY = 0;
let dragStartX = 0;
let dragStartY = 0;
let startingOffsetX = 0;
let startingOffsetY = 0;
let activePointerId = null;

/**
 * Keep the map inside its viewport.
 *
 * The amount the map may move depends on how much larger its zoomed dimensions
 * are than the visible viewport. At 100% zoom both maximum offsets are zero, so
 * the map remains centered. Math.max prevents negative movement limits when one
 * dimension of the image is still smaller than the viewport.
 */
const clampOffsets = () => {
  const maxX = Math.max(0, (mapImage.offsetWidth * zoom - viewport.clientWidth) / 2);
  const maxY = Math.max(0, (mapImage.offsetHeight * zoom - viewport.clientHeight) / 2);

  offsetX = Math.max(-maxX, Math.min(maxX, offsetX));
  offsetY = Math.max(-maxY, Math.min(maxY, offsetY));
};

/**
 * Apply the current zoom and pan state to the canvas.
 *
 * CSS initially positions the canvas at top: 50% and left: 50%. The first
 * translate centers it, the pixel offsets pan it, and scale applies the zoom.
 * This function also keeps the buttons and screen-reader status synchronized.
 */
const renderMap = () => {
  clampOffsets();
  canvas.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(${zoom})`;
  zoomInButton.disabled = zoom >= maximumZoom;
  zoomOutButton.disabled = zoom <= minimumZoom;
  zoomStatus.textContent = `${Math.round(zoom * 100)}% zoom`;
  viewport.classList.toggle("is-zoomed", zoom > minimumZoom);
};

// Change the zoom while enforcing the allowed range. Returning to 100% also
// resets the pan offsets so the complete map is centered again.
const setZoom = (nextZoom) => {
  zoom = Math.max(minimumZoom, Math.min(maximumZoom, nextZoom));

  if (zoom === minimumZoom) {
    offsetX = 0;
    offsetY = 0;
  }

  renderMap();
};

// The visible + and - controls adjust the map in 50% increments.
zoomInButton.addEventListener("click", () => setZoom(zoom + zoomStep));
zoomOutButton.addEventListener("click", () => setZoom(zoom - zoomStep));

// Start a drag only for the primary mouse/touch pointer and only after zooming.
// setPointerCapture keeps sending movement events to the viewport even if the
// pointer temporarily moves outside its bounds.
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

// Move the map by the distance travelled since the drag began. renderMap then
// clamps the result so users cannot drag the map completely out of view.
viewport.addEventListener("pointermove", (event) => {
  if (event.pointerId !== activePointerId) return;

  offsetX = startingOffsetX + event.clientX - dragStartX;
  offsetY = startingOffsetY + event.clientY - dragStartY;
  renderMap();
});

// Pointer-up and pointer-cancel share the same drag cleanup logic.
const stopDragging = (event) => {
  if (event.pointerId !== activePointerId) return;

  activePointerId = null;
  viewport.classList.remove("is-dragging");
};

viewport.addEventListener("pointerup", stopDragging);
viewport.addEventListener("pointercancel", stopDragging);

// Keyboard controls make the same interactions available without a mouse:
// +/- change zoom, while the arrow keys move the viewed area by 45 pixels.
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

// Recalculate the allowed pan range whenever the viewport or image dimensions
// become available or change. The final call initializes the controls at 100%.
window.addEventListener("resize", renderMap);
mapImage.addEventListener("load", renderMap);
renderMap();
