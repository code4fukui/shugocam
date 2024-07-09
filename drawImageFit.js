export const drawImageFit = (g, img, sw, sh, dx, dy, dw, dh) => {
  const aspect = dh / dw;
  const imgaspect = sh / sw;
  if (imgaspect > aspect) {
    const h = sw * aspect;
    const y = (sh - h) / 2;
    g.drawImage(img, 0, y, sw, h, dx, dy, dw, dh);
  } else {
    const w = sh / aspect;
    const x = (sw - w) / 2;
    g.drawImage(img, x, 0, w, sh, dx, dy, dw, dh);
  }
};
