declare global {
  interface CanvasRenderingContext2D {
    wrapText(text: string, x: number, y: number, maxWidth: number, lineHeight: any): any;
  }
}

CanvasRenderingContext2D.prototype.wrapText = function (
  text: string, x: number, y: number, maxWidth: number, lineHeight: any,
) {
  const lines = text.split('\n');
  const xx = x;
  let yy = y;

  for (let i = 0; i < lines.length; i += 1) {
    const words = lines[i].split(' ');
    let line = '';

    for (let n = 0; n < words.length; n += 1) {
      const testLine = `${line} ${words[n]}`;
      const metrics = this.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        this.fillText(line, xx, yy);
        line = `${words[n]} `;
        yy += lineHeight;
      } else {
        line = testLine;
      }
    }

    this.fillText(line, xx, yy);
    yy += lineHeight;
  }
};

export function loadCanvas(element: string, dataURL: string, w: any, h: any, text: string) {
  const canvas : any = document.getElementById(element);
  const ctx = canvas.getContext('2d');
  let width = w;
  let height = h;

  if (w > 1000) {
    width = 1000;
    height = (h * 1000) / w;
  }

  canvas.width = width;
  canvas.height = height;

  // load image from data url
  const imageObj = new Image();

  imageObj.onload = function () {
    ctx.drawImage(imageObj, 0, 0, width, height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.wrapText(text, width / 2, 50, width, 40);
  };

  imageObj.src = dataURL;
}
