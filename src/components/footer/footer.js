function footerSticky(){
  let footer = document.querySelector('.footer')
  if(footer){
    let footer_height = footer.offsetHeight
    document.documentElement.style.setProperty('--footerHeight', `${footer_height}px`)
  }
}
// window.addEventListener('resize', footerSticky);

document.addEventListener("DOMContentLoaded", (event) => {
  footerSticky()
});
