function footerSticky(){
  let footer = document.querySelector('.footer__container')
  if(footer){
    let footer_height = footer.offsetHeight
    document.documentElement.style.setProperty('--footerHeight', `${footer_height}px`)
    console.log(footer_height)
  }
}
window.addEventListener('resize', footerSticky);

document.addEventListener("DOMContentLoaded", (event) => {
  footerSticky()
});

let btn_scroll_to_start = document.querySelector('.scrollToStart')
if (btn_scroll_to_start){
  btn_scroll_to_start.addEventListener('click', (e) =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
}
