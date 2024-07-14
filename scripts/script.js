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