const createScratchCardEasy = (canvasId) => {
  let canvas = document.querySelector(canvasId);
  let context = canvas.getContext("2d");

  const init = () => {
    context.fillStyle = "grey";
    context.fillRect(0, 0, 200, 150);
  };

  const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 15, 0, Math.PI * 2);
    context.fill();
  };
  let isDrawing = false;
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    scratch(e.offsetX, e.offsetY);
  });
  canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      scratch(e.offsetX, e.offsetY);
    }
  });
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
  });
  init();
};
const createScratchCardMedium = (canvasId) => {
  let canvas = document.querySelector(canvasId);
  let context = canvas.getContext("2d");

  const init = () => {
    context.fillStyle = "grey";
    context.fillRect(0, 0, 200, 150);
  };

  const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 15, 0, Math.PI * 2);
    context.fill();
  };
  let isDrawing = false;
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    scratch(e.offsetX, e.offsetY);
  });
  canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      scratch(e.offsetX, e.offsetY);
    }
  });
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
  });
  init();
};
const createScratchCardHard = (canvasId) => {
  let canvas = document.querySelector(canvasId);
  let context = canvas.getContext("2d");

  const init = () => {
    context.fillStyle = "grey";
    context.fillRect(0, 0, 200, 150);
  };

  const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 15, 0, Math.PI * 2);
    context.fill();
  };
  let isDrawing = false;
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    scratch(e.offsetX, e.offsetY);
  });
  canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      scratch(e.offsetX, e.offsetY);
    }
  });
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
  });
  init();
};
for (let i = 1; i <=500; i++) {
  if(i>=37&&i<=500)
      continue;
    createScratchCardEasy(`.scratching${i}`);
}
for (let j = 501; j <= 1000; j++) {
  if(j>=525&&j<=1000)
  continue;
  createScratchCardMedium(`.scratching${j}`);
}
for (let k = 1001; k <= 1050; k++) {
  createScratchCardHard(`.scratching${k}`);
}
