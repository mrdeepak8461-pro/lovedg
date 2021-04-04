function clickme() {

    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;

    if (name1 == "") {
        alert("plz.. Enter your name");
    } else if (name1.length <= 3) {
        alert("plzz. enter atlist Three caracter");
    } else if (!isNaN(name1)) {
        alert("You can use only caracter");
    }

    if (name2 == "") {
        alert("plz.. Enter your name");
    } else if (name2.length <= 3) {
        alert("Plz enter atlist 3 caracter");
    } else if (!isNaN(name2)) {
        alert("you can't right number")
    } else {
        var lovedata = Math.random() * 100;
        lovedata = Math.floor(lovedata);
        document.getElementById('lovere').value = lovedata + " %";
    }


};



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})