let preloader = document.querySelector('.preloader'),
preloader__logo = preloader.querySelector('.preloader__logo')
gsap.to(preloader__logo, {
  scale: 1.3,
  opacity: 1,
  filter: "blur(0px)",
  duration: 2,
  onComplete: () => {

    function preloaderAfterLoad(){
      gsap.to(preloader, {  transform: 'scaleY(0)',}, );
    }
    function checkPageLoad() {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        preloaderAfterLoad()
        clearInterval(intervalId);
      }
    }
    const intervalId = setInterval(checkPageLoad, 500);
  }
});
setTimeout(() => {
  window.scroll({ top: -1, left: 0, behavior: "smooth" });
}, 300);
