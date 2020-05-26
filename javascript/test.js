
// var textWrapper = document.querySelector('.ml6 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml6',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

// const progressBar= document.getElementsByClassName('myprogress')[0]
//     setInterval(() =>{
//  const computedStyle= getComputedStyle(progressBar)
//  const width= parseFloat(computedStyle.getPropertyValue ('--width')) || 0
//  progressBar.style.setProperty('--width', width+ 0.1)
//     },5)

$(document).ready(()=>{
  setTimeout(()=>{
      $(".indicator").css("width","50%")
  }, 500)
})
var modal=document.getElementById("portfolio-single");
var btn=document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
