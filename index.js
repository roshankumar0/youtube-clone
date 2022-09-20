let bars = document.getElementById("bars");
let aside = document.getElementById("aside")
bars.addEventListener('click', function () {
    if (aside.style.display === "none") {
        aside.style.display = "block";
        // aside.style.transform = "translateX(100%)"

    }
    else {
        aside.style.display = "none"
    }
})






document.querySelectorAll('.yt-img-element').forEach(elem => {
    
    elem.addEventListener('mouseover', function(e){
        e.target.classList.add('is-hovering')
    });

    elem.addEventListener('mouseleave', function(e){
        e.target.classList.remove('is-hovering')
    });
});
