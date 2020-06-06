$(document).ready(()=>{
  
  setTimeout(()=>{
      $(".indicator").css("width","50%")
  }, 500)

  $("#close").click(()=>{
    $(".modal").css("display","none")
  })

  $("#openModal").click(()=>{
    $(".modal").css("display","block")
  })
});

 var modal=document.getElementById("portfolio-single");
 var btn=document.getElementById("myBtn");
 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function(){
   modal.style.display = "block";
 }
 span.onclick = function() {
   modal.style.display = "none"; 
 }