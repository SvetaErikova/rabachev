let footer = document.querySelector('.footer')
if(footer){
  let footer_height = footer.getBoundingClientRect().height
  document.documentElement.style.setProperty('--footerHeight', `${footer_height}px`)
}

