



const header= document.querySelector('.header');
const btn = document.querySelector('.menu_open');
const menu = document.querySelector('.hamb_menu');
const hamb = document.querySelector('.hamb_swich');
const first_swich=document.querySelector('.first_swich');

header.classList.remove('is_invisible');
first_swich.classList.add('is_invisible');

//スクロールが１７００以下でクリックしたとき 
// first_swich.addEventListener('click',()=>{
//     menu.classList.remove('is_invisible')
//     first_swich.classList.add('is_invisible')
// })

// ハンバーガーメニューのボタンを押したとき
hamb.addEventListener('click',()=>{
    menu.classList.add('is_invisible');
    header.classList.remove('is_invisible');
})

// ヘッダーのボタンを押したとき
btn.addEventListener('click',()=>{
    menu.classList.remove('is_invisible');
    header.classList.add('is_invisible');
})







