export const kernelFunction = function (width, height, hue) {
  const imageSize = width * height;
  const imageDataLength = imageSize * 4;
  const i = this.thread.x;

  const y = Math.floor(i / (height * 4));
  const x = Math.floor(i / 4 - y * width);
  const channel = i % 4;

  const blackValue = 0;
  const aquaValue = Math.floor((y / height) * 156) + 99; // Persian green calculation

  if (channel === 3) {
    return 255; // Alpha channel
  } else if (channel === 0) {
    return blackValue; // Red channel (black)
  } else if (channel === 1) {
    return blackValue; // Green channel (black)
  } else if (channel === 2) {
    return aquaValue; // Blue channel (aqua)
  }
};
