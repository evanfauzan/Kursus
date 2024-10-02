// Tambahkan JavaScript untuk toggle menu
document.getElementById('menu-toggle-checkbox').addEventListener('change', function() {
  var navList = document.querySelector('.nav-list');
  if (this.checked) {
    navList.style.display = 'flex';
  } else {
    navList.style.display = 'none';
  }
});
// Selektor elemen
let burung = document.querySelector('.burung');
let matahari = document.querySelector('.matahari');
let bulu = document.querySelector('.bulu');
let gunung = document.querySelector('.gunung');
let pohon = document.querySelector('.pohon');

// Fungsi scroll
window.addEventListener('scroll', function() {
  let y = window.scrollY;
  burung.style.transform = `translateX(${y / 1.5}px) translateY(${y / 1.5}px)`;
  
  // Tambahkan efek parallax pada elemen lain
  matahari.style.transform = `translateX(-${y / 1}px)`;
  bulu.style.transform = `translateX(${y / 3}px) translateY(${y / 3}px)`;
  gunung.style.transform = `translateY(${y / 3}px)`;
  pohon.style.transform = `translateY(${y / 2}px)`; // Increased speed
 
});