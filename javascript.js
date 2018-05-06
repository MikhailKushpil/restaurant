

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

    $(function () {
        $("#first_food_1").click(function () {
            $("#first_food_1_img").toggle(500);
        });
    });
    $(function () {
        $("#first_food_2").click(function () {
            $("#first_food_2_img").toggle(500);
        });
    });
    $(function () {
            $("#Lunch_0").click(function () {
                $("#Lunch_0_img").slideToggle(250);
            });
    });
    $(function () {
            $("#Lunch_1").click(function () {
                $("#Lunch_1_img").slideToggle(250);
            });
    });
    $(function () {
            $("#Lunch_2").click(function () {
                $("#Lunch_2_img").slideToggle(250);
            });
    });
    $(function () {
        var button_first = $("#button_first");
        var footer_anim_1 = $("#footer_anim_1");
        var footer_anim_1_style = {fontSize: "100px"};
        footer_anim_1.click(function (e) {
            footer_anim_1.animate(footer_anim_1_style, 400);
        });
    });
    $(function () {
        var button_first = $("#button_first");
        var footer_anim_2 = $("#footer_anim_2");
        var footer_anim_2_style = {fontSize: "120px"};
        footer_anim_2.click(function (e) {
            footer_anim_2.animate(footer_anim_2_style, 400);
        });
    });
    $(function () {
        var button_first = $("#button_first");
        var footer_anim_3 = $("#footer_anim_3");
        var footer_anim_3_style = {fontSize: "110px"};
        footer_anim_3.click(function (e) {
            footer_anim_3.animate(footer_anim_3_style, 400);
            footer_anim_3.style.color ;
        });
    });
    $(function () {
        var button_first = $("#button_first");
        var footer_anim_4 = $("#footer_anim_4");
        var footer_anim_4_style = {fontSize: "100px"};
        footer_anim_4.click(function (e) {
            footer_anim_4.animate(footer_anim_4_style, 400);
            footer_anim_4.style.color ;
        });
    });
    $(function () {
        var button_first = $("#button_first");
        var footer_anim_5 = $("#footer_anim_5");
        var footer_anim_5_style = {fontSize: "120px"};
        footer_anim_5.click(function (e) {
            footer_anim_5.animate(footer_anim_5_style, 400);
            footer_anim_5.style.color ;
        });
    });
    var click_Main_Courses_0 = false;
    var click_Main_Courses_1 = false;
    var click_Main_Courses_2 = false;
    var click_Main_Courses_3 = false;

    var Main_Courses_0 = document.getElementById("Main_Courses_0");
    var Main_Courses_1 = document.getElementById("Main_Courses_1");
    var Main_Courses_2 = document.getElementById("Main_Courses_2");
    var Main_Courses_3 = document.getElementById("Main_Courses_3");

    Main_Courses_0.addEventListener("click" , function () {
        var foodFoto = document.getElementsByClassName("foodFoto");
        if ( click_Main_Courses_0 != true){
            foodFoto[5].style.display = 'block';
            click_Main_Courses_0 = true;
        }
        else {
            foodFoto[5].style.display = "none";
            click_Main_Courses_0 = false;
        }
    }, false);
    Main_Courses_1.addEventListener("click" , function () {
        var foodFoto = document.getElementsByClassName("foodFoto");
        if ( click_Main_Courses_1 != true){
            foodFoto[6].style.display = 'block';
            click_Main_Courses_1 = true;
        }
        else {
            foodFoto[6].style.display = "none";
            click_Main_Courses_1 = false;
        }
    }, false);
    Main_Courses_2.addEventListener("click" , function () {
        var foodFoto = document.getElementsByClassName("foodFoto");
        if ( click_Main_Courses_2 != true){
            foodFoto[7].style.display = 'block';
            click_Main_Courses_2 = true;
        }
        else {
            foodFoto[7].style.display = "none";
            click_Main_Courses_2 = false;
        }
    }, false);
    Main_Courses_3.addEventListener("click" , function () {
        var foodFoto = document.getElementsByClassName("foodFoto");
        if ( click_Main_Courses_3 != true){
            foodFoto[8].style.display = 'block';
            click_Main_Courses_3 = true;
        }
        else {
            foodFoto[8].style.display = "none";
            click_Main_Courses_3 = false;
        }
    }, false);

    var click_Dessert_0 = false;
    var click_Dessert_1 = false;
    var Dessert_0 = document.getElementById("Dessert_0");
    var Dessert_1 = document.getElementById("Dessert_1");


    Dessert_0.addEventListener("click" , function () {
        var foodFoto = document.getElementsByClassName("foodFoto");
        if ( click_Dessert_0 != true){
            foodFoto[9].style.display = 'block';
            click_Dessert_0 = true;
        }
        else {
            foodFoto[9].style.display = "none";
            click_Dessert_0 = false;
        }
    }, false);

    Dessert_1.addEventListener("click" , function () {
        var foodFoto = document.getElementsByClassName("foodFoto");
        if ( click_Dessert_1 != true){
            foodFoto[10].style.display = 'block';
            click_Dessert_1 = true;
        }
        else {
            foodFoto[10].style.display = "none";
            click_Dessert_1 = false;
        }
    }, false);

    var click_Drinks_0 = false;
    var click_Drinks_1 = false;

    var Drinks_0 = document.getElementById("Drinks_0");
    var Drinks_1 = document.getElementById("Drinks_1");


    Drinks_0.addEventListener("click" , function () {
        var foodFoto = document.getElementsByClassName("foodFoto");
        if ( click_Drinks_0 != true){
            foodFoto[11].style.display = 'block';
            click_Drinks_0 = true;
        }
        else {
            foodFoto[11].style.display = "none";
            click_Drinks_0 = false;
        }
    }, false);

    Drinks_1.addEventListener("click" , function () {
        var foodFoto = document.getElementsByClassName("foodFoto");
        if ( click_Drinks_1 != true){
            foodFoto[12].style.display = 'block';
            click_Drinks_1 = true;
        }
        else {
            foodFoto[12].style.display = "none";
            click_Drinks_1 = false;
        }
    }, false);
});
