// Section 2 - Selecting element--------------------------------
// Contoh 1: Mengubah warna elemen HTML
 const nama = document.getElementById('in-hd');
nama.style.color = "magenta";

// Contoh 2: Menambahkan elemen baru (p) ke dalam halaman HTML
const elemenBaru = document.createElement('p');
elemenBaru.innerHTML = 'Ini adalah contoh elemen baru';
document.body.appendChild(elemenBaru);

// Contoh 3: Menangkap event button dan menampilkan alert
let tombolTekan= document.getElementById('btnL');
tombolTekan.addEventListener('click', () => {
  let kepala = document.getElementsByTagName('p');
  alert(`Jumlah tag p ada : ${kepala.length}`)
})


// Section 3 - Traversing the DOM--------------------------------
// Contoh 1: Menelusuri elemen parent dan ditampilkan dengan warna
let myElemen = document.getElementById('img2');
let parentElemen = myElemen.parentNode;
parentElemen.style.backgroundColor = 'orange';

// Contoh 2: Menelusuri elemen sibling
let elSodar = document.getElementById('mylist');
let elSibling = elSodar.previousElementSibling;
elSibling.style.color = 'blue';


// Section 4 - Manipulating Elements--------------------------------
// Contoh 1: Mengubah isi teks dari elemen HTML
let gantiElem = document.getElementById('p1');
gantiElem.innerHTML = 'Hello, world!';

// Contoh 2: Mengubah atribut 'src' pada elemen gambar
const myImg = document.getElementById('img2');
myImg.setAttribute('src', 'img/cat.jpg');


// Section 3 - Selecting Elements
// Contoh 1: Memilih semua elemen dengan tag 'p'
// const elems = document.getElementsByTagName('p');
// for (let i = 0; i < elems.length; i++) {
//   elems[i].style.color = 'red';
// }

// // Contoh 2: Memilih elemen dengan kelas 'intro'
// const elem = document.getElementsByClassName('intro')[0];
// elem.style.fontWeight = 'bold';

// // Contoh 3: Memilih elemen berdasarkan query selector
// const elem = document.querySelector('#header .title');
// elem.style.fontSize = '24px';



// // Section 5 - Creating and Removing Elements
// // Contoh 1: Membuat elemen baru dan menambahkannya ke dalam halaman HTML
// const newElem = document.createElement('div');
// newElem.innerHTML = '<p>Contoh elemen baru</p>';
// document.body.appendChild(newElem);

// // Contoh 2: Menghapus elemen tertentu dari halaman HTML
// const elem = document.getElementById('header');
// elem.parentNode.removeChild(elem);



// // Section 7 - Events:
// // Contoh 1: Menangkap event pada tombol dan mengubah isi teks
// const btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
// const elem = document.getElementById('header');
// elem.innerHTML = 'Hello, world!';
// });

// // Contoh 2: Menangkap event pada form dan menampilkan hasil
// const form = document.getElementById('myForm');
// form.addEventListener('submit', function(e) {
// e.preventDefault();
// const input = document.getElementById('input');
// const result = document.getElementById('result');
// result.innerHTML = input.value;
// });