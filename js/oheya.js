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



// 少し動かすやつ


window.addEventListener('scroll', function () {
  let imgs = document.querySelectorAll('.move');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = 'translateY(' + window.scrollY * 0.04 + 'px)';
  } 
});



/* ふわっと浮かび上がる */


const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is_show');
      io.unobserve(e.target);
    }
  });
});

document.querySelectorAll('.fade').forEach(el => io.observe(el));