const preloader = document.getElementById('preloader');
const brand = document.getElementById('brand');

const preloaderTimer = setTimeout(() => {
  preloader.classList.add('visible');
}, 200);

Promise.all([
  document.fonts.load("700 1em 'Oswald'"),
  new Promise((resolve) => {
    const img = document.getElementById('logo');
    if (img.complete) {
      resolve();
    } else {
      img.addEventListener('load', resolve);
      img.addEventListener('error', resolve);
    }
  })
]).then(() => {
  clearTimeout(preloaderTimer);
  preloader.classList.remove('visible');
  brand.classList.add('visible');
});
