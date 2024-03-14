const createScratchCard=(canvasId)=>{
  let canvas = document.querySelector(canvasId);
let context = canvas.getContext("2d");

const init = () => {
  context.fillStyle = "grey";
   context.fillRect(0, 0,200,150);
  }

  const scratch = (x, y) => {
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 15, 0, Math.PI * 2);
    context.fill();    
  }
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

}
for (let i = 1; i <= 1000; i++) {
  if((i>=1&&i<=70) || i>=501 && i<=523 || i>=1001 && i<=1008)
  createScratchCard(`.scratching${i}`);
} 
// for (let j = 501; j <= 523; j++) {
//   createScratchCard(`.scratching${j}`);
// } 
// for (let k = 1001; k <= 1008; k++) {
//   createScratchCard(`.scratching${k}`);
// } 
