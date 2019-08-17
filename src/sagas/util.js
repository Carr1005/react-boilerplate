export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getImageStream = url =>
  fetch(url)
    .then(r => r.blob())
    .then(blobFile => URL.createObjectURL(blobFile));

export const getDownloadImage = imgData => {
  let a = document.createElement("a");
  document.body.appendChild(a);
  a.download = "collage";
  a.href = imgData;
  a.click();
};
