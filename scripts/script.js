// features hover effects
const allFeatures = document.querySelectorAll('.features .features__type .item');




const addHover = () =>{
    allFeatures.forEach(single=>{
        const hover_bg = document.createElement('span');
        single.appendChild(hover_bg)
    }
       
     )
}
window.onload = addHover();

// slider
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items:2,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        margin:20,
        dots:false,
        responsive:{
           
            600:{
                items:2,
                nav:false
            },
            400:{
                items:1
            }
            
        }
        
    });
  });