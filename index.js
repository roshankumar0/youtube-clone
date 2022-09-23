let bars = document.getElementById("bars");
let aside = document.getElementById("aside")
bars.addEventListener('click', function () {
    if (aside.style.display !=="none") {
        aside.style.display = "none";
        // aside.style.transform = "translateX(100%)"

    }
    else {
        aside.style.display = "block"
    }
})



let showcase=document.querySelector(".yt-show-now ");
showcase.addEventListener('mouseover', function show (e){
alert('its working');
e.target.id
})


// document.querySelectorAll('.yt-img-element').forEach(elem => {
    
//     elem.addEventListener('mouseover', function(e){
//         e.target.classList.add('is-hovering')
//     });

//     elem.addEventListener('mouseleave', function(e){
//         e.target.classList.remove('is-hovering')
//     });
// });
