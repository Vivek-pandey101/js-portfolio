const items = [
  {
    id: 0,
    image: "./photos/pexels-fidan-nur-20927624.jpg",
    title: "imageOne",
    price: 250,
  },
  {
    id: 1,
    image: "./photos/pexels-marta-nogueira-17151647.jpg",
    title: "imageTwo",
    price: 350,
  },
  {
    id: 2,
    image: "./photos/pexels-seçil-sarı-7635585.jpg",
    title: "imageThree",
    price: 450,
  },
  {
    id: 3,
    image: "./photos/pexels-stanislava-zdn-20606228.jpg",
    title: "imageFour",
    price: 550,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");
  const images = document.getElementById('images');
  const download = document.getElementById('download');

  dark.addEventListener("click", () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    dark.classList.remove('enable');
    light.classList.add('disable');
    download.style.backgroundColor = 'blue';
  });

  light.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black'
    dark.classList.add('enable');
    light.classList.remove('disable');
    images.style.backgroundColor = 'black';
    images.style.borderRadius = '20px';
    download.style.backgroundColor = 'black';
  })
});

const download = document.getElementById('download');
const resume = document.getElementById('resume');
download.addEventListener('click', ()=>{
  window.open(resume);
})