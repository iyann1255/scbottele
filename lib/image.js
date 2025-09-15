// coverRotator.js  (tempatkan di root project)
const covers = [
  './image/1.jpg',
  './image/2.jpg',
  './image/3.jpg',
  './image/4.jpg',
  './image/5.jpg'
];

let index = 0;                        // hanya dibuat 1× seumur proses

function nextCover() {
  const file = covers[index];
  index = (index + 1) % covers.length;
  return file;
}

module.exports = nextCover;