


const header= document.querySelector('.header');
const btn = document.querySelector('.menu_open');
const menu = document.querySelector('.hamb_menu');
const hamb = document.querySelector('.hamb_swich');
const first_swich=document.querySelector('.first_swich');
const sento_btn = document.querySelector('.page_btn');
window.addEventListener('scroll',()=>{
    if(scrollY >1600){
    first_swich.classList.add('is_invisible');
    header.classList.remove('is_invisible');
    }else{
        first_swich.classList.remove('is_invisible');
        header.classList.add('is_invisible');
    }
})


//スクロールが１６００以下でクリックしたとき 
first_swich.addEventListener('click',()=>{
    menu.classList.remove('is_invisible');
    first_swich.classList.add('is_invisible');
})

// ハンバーガーメニューのボタンを押したとき
hamb.addEventListener('click',()=>{
    menu.classList.add('is_invisible');
    if(scrollY<1600){
        first_swich.classList.remove('is_invisible');
    }
    else if(scrollY >1600){
        header.classList.remove('is_invisible');
    }
    
})

// ヘッダーのボタンを押したとき
btn.addEventListener('click',()=>{
    menu.classList.remove('is_invisible');
    header.classList.add('is_invisible');
})

// 「先頭に戻る」ボタンの表示・非表示
window.addEventListener('scroll',()=>{
    if(window.scrollY >1000){
      
      sento_btn.classList.remove('is_invisible');
    }
    else{
      sento_btn.classList.add('is_invisible');
      
      
    }
})


// 少し動かすやつ

window.addEventListener('scroll', function () {
  let imgs = document.querySelectorAll('.move');
  for (let i = 0; i < imgs.length; i++) {
    console.log(scrollY)
    imgs[i].style.transform = 'translateY(' + window.scrollY * 0.15 + 'px)';
  } 
});




/* ふわっと浮かび上がる */



const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is_show');
      io.unobserve(e.target)
    }
  });
});

document.querySelectorAll('.fade').forEach(el => io.observe(el));



//ロード画面（トップページ専用） 
const loading = document.getElementById("loading");

// 最大2秒で消す
setTimeout(()=>{
  loading.classList.add("hide");
}, 2000);




