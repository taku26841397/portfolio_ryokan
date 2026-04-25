const header= document.querySelector('.header')
const btn = document.querySelector('.menu_open')
const menu = document.querySelector('.hamb_menu')
const hamb = document.querySelector('.hamb_swich')
const first_swich=document.querySelector('.first_swich')

header.classList.remove('is_invisible')
first_swich.classList.add('is_invisible')



// ハンバーガーメニューのボタンを押したとき
hamb.addEventListener('click',()=>{
    menu.classList.add('is_invisible')
    header.classList.remove('is_invisible')
})

// ヘッダーのボタンを押したとき
btn.addEventListener('click',()=>{
    menu.classList.remove('is_invisible')
    header.classList.add('is_invisible')
})



// 横に1度ずつ流す(あとで統合、3つ作成)

const track = document.querySelector('.flow_slide');

const img_width = 700;
const gap = 40;
const step = img_width + gap;

let index = 0;
const max_index = (track.children.length - 2) / 2;
console.log(track.children.length)
setInterval(() => {
  index++;

  if (index > max_index) {
    index = 0;

    
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';

    
    // setTimeout(() => {
    //   track.style.transition = 'transform 0.9s ease';
    // }, 20);
    track.style.transition = 'transform 0.9s ease';
    
  } else {
    track.style.transform = `translateX(-${step * index}px)`;
  }

}, 3500);


const track2 = document.querySelector('.flow_slide2');
console.log(track2)
const img_width2 = 700;
const gap2 = 40;
const step2 = img_width2 + gap2;

let index2 = 0;
const max_index2 = (track2.children.length - 2) / 2;
console.log(track2.children.length)
setInterval(() => {
  index2++;

  if (index2 > max_index2) {
    index2 = 0;

    
    track2.style.transition = 'none';
    track2.style.transform = 'translateX(0)';

    
    // setTimeout(() => {
    //   track2.style.transition = 'transform 0.9s ease';
    // }, 20);
    track2.style.transition = 'transform 0.9s ease';

  } else {
    track2.style.transform = `translateX(-${step2 * index2}px)`;
  }

}, 3500);


const track3 = document.querySelector('.flow_slide3');

const img_width3 = 700;
const gap3 = 40;
const step3 = img_width3 + gap3;

let index3 = 0;
const max_index3 = (track3.children.length - 2) / 2;
console.log(track3.children.length)
setInterval(() => {
  index3++;

  if (index3 > max_index3) {
    index3 = 0;

    
    track3.style.transition = 'none';
    track3.style.transform = 'translateX(0)';

    
    // setTimeout(() => {
    //   track3.style.transition = 'transform 0.9s ease';
    // }, 20);
    track3.style.transition = 'transform 0.9s ease';

  } else {
    track3.style.transform = `translateX(-${step3 * index3}px)`;
  }

}, 3500);


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