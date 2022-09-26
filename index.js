let bars = document.getElementById("bars");
let aside = document.getElementById("aside");
let ipaid= document.querySelector("#iPaid ")
let ytAside =document.getElementById("yt-aside")
bars.addEventListener('click', function () {
    if (ytAside.style.display ==="none") {
        ytAside.style.display = "none";
        ipaid.style.display="none"
          }
    else {
        ytAside.style.display = "block"
        ipaid.style.display="block"
    }
})


// document.querySelectorAll('.yt-img-element').forEach(elem => {
    
//     elem.addEventListener('mouseover', function(e){
//         e.target.classList.add('is-hovering')
//     });

//     elem.addEventListener('mouseleave', function(e){
//         e.target.classList.remove('is-hovering')
//     });
// });
