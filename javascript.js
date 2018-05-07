

$(document).ready(function(){ // виполним функцию как только загрузится документ
    $(".next").click(function(){
        var currentImage = $(".img.curry");
        var currentImageIndex = $(".img.curry").index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $(".img").eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass("curry");
        setInterval(100);

        if(nextImageIndex == ($(".img:last").index()+1)){
            $(".img").eq(0).fadeIn(1000);
            $(".img").eq(0).addClass("curry");
        }else{
            nextImage.fadeIn(1000);
            nextImage.addClass("curry");
        }
    });
    $(".prev").click(function(){
        var currentImage = $(".img.curry");
        var currentImageIndex = $(".img.curry").index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $(".img").eq(prevImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass("curry");
        prevImage.fadeIn(1000);
        prevImage.addClass("curry");
    });
    (function(){
        function toggleImg(){
            let li = document.querySelectorAll("li");
            let foodPhoto = document.querySelectorAll(".foodPhoto");
            for(let i=0; li.length > i; i++){
                li[i].addEventListener("click", function(){
                    if(foodPhoto[i].classList.contains("showImg")){
                        foodPhoto[i].classList.remove("showImg");
                    } else{
                        foodPhoto[i].classList.add("showImg");
                    }
                } );
            }
        }
        toggleImg();
    }());
    document.getElementById("defaultOpen").click();
});

function openMenu(menuName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }

        // Show the specific tab content
        document.getElementById(menuName).style.display = "block";

        // Add the specific color to the button used to open the tab content
        elmnt.style.backgroundColor = color;
}