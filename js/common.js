

//全サブページロード画面
const test = document.querySelector('#loading_sub');
    window.addEventListener('load', () => {
     
      setTimeout(() => {
        test.classList.add('is_test');
        document.body.classList.add('is_clear');
      }, 500);
    });