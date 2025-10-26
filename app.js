// Create scratch card function
const createScratchCard = (canvasId) => {
  const canvas = document.querySelector(canvasId);
  if (!canvas) return;
  const context = canvas.getContext("2d");

  const parent = canvas.parentElement;

  const resizeCanvas = () => {
    const rect = parent.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    init();
  };

  const init = () => {
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "grey";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2);
    context.fill();
  };

  let isDrawing = false;

  canvas.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDrawing = true;
    scratch(e.offsetX, e.offsetY);
  });
  canvas.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (isDrawing) scratch(e.offsetX, e.offsetY);
  });
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseleave", () => (isDrawing = false));

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
};

// Initialize cards
document.querySelectorAll("canvas").forEach((canvas, i) => {
  createScratchCard(`.${canvas.classList[0]}`);
});

/* Prevent Default Refresh / Reload */
document.addEventListener("keydown", (event) => {
  if (event.key === "F5" || (event.ctrlKey && event.key.toLowerCase() === "r")) {
    event.preventDefault();
    alert("Page refresh is disabled!");
  }
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "";
});
