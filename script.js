var story = $('.story');
var kerk = $('.kerk');
var storyP = story.position();
var storyHeight = story.css("height").replace(/[^-\d\.]/g, '') - $( window ).height();
var storyHeight2 = story.css("height").replace(/[^-\d\.]/g, '');
var scenario1 = $('.scenario1');
var scenario2 = $('.scenario2');
var scenario3 = $('.scenario3');
var fadeScroll = {
    fadeIn: false,
    fadeOut: false
};


var inhoud1 = document.getElementById('inhoud1');

var knop1 = document.getElementById('k1');



var sections=[{min:0,max:0.125},{min:0.125,max:0.25},{min:0.25,max:0.375},{min:0.375,max:0.5},{min:0.5,max:0.625},{min:0.625,max:0.75},{min:0.75,max:0.875},{min:0.875,max:1}];

function calcTime()
{
    var scroll = $(window).scrollTop();

    var margin = scroll-storyP.top;
    // stel er vier sections/keys
    var time= margin/storyHeight; // deze is tussen 0 en 1.
    if(time<0) time=0;
    if(time>1) time=1;
    for(var i=0;i<sections.length;i++)
    {
        var s=sections[i]
        var t=(time-s.min)/(s.max-s.min); // t<0 kan en t> 1 kan ook..
        if(t<0) t=0;
        if(t>1) t=1;
        s.time=t; // altijd tussen 0 en 1..
    }

}
$(window).scroll(function (event) {
    calcTime();

    var margin = scroll-storyP.top;
    var scroll = $(window).scrollTop();
    if(margin<0) return;

    if (scroll < storyP.top){
            kerk.css("position","relative");
            scenario1.css("position","relative");
            scenario1.css("left",-800 + "px");
            scenario1.css("top", 320 + "px");
    }

    if (storyP.top > scroll) {
        if (!fadeScroll.fadeOut) {
            $('.headOver').animate({
                top: "0"
            }, 500);

            fadeScroll.fadeOut = true;
            fadeScroll.fadeIn = false;
        }
    } else if (storyP.top < scroll) {
        if (!fadeScroll.fadeIn) {
            $('.headOver').animate({
                top: "-100%"
            }, 500);
            fadeScroll.fadeIn = true;
            fadeScroll.fadeOut = false;
        }
    }

    if (sections[0].time > 0 && sections[0].time < 1) {
        kerk.css("position", "fixed");
        kerk.css("top", "0");
        var time = sections[0].time;
        var start1 = -1970;
        var end1 = -1170;
        var start2 = -1170;
        var end2 = -370;
        var start3 = -870;
        var end3 = 570;


        scenario1.css("position", "fixed");
        scenario2.css("position", "fixed");
        scenario3.css("position", "fixed");
        scenario1.css("top", "320px");
        scenario1.css("left", (start1 + time * (end1 - start1)) + "px");
        scenario2.css("top", "320px");
        scenario2.css("left", (start2 + time * (end2 - start2)) + "px");
        scenario3.css("top", "320px");
        scenario3.css("left", (start3 + time * (end3 - start3)) + "px");

    }

    if (sections[1].time > 0 && sections[1].time < 1) {
        kerk.css("position", "fixed");
        kerk.css("top", "0");
        var time = sections[1].time;

        scenario1.css("position", "fixed");
        scenario2.css("position", "fixed");
        scenario3.css("position", "fixed");
        scenario3.css("left", "570px");
    }

    if (sections[2].time > 0 && sections[2].time < 1) {
        kerk.css("position", "fixed");
        kerk.css("top", "0");
        var time = sections[2].time;
        var start1 = -1170;
        var end1 = -370;
        var start2 = -370;
        var end2 = 570;
        var start3 = 570;
        var end3 = 1370;


        scenario1.css("position", "fixed");
        scenario2.css("position", "fixed");
        scenario3.css("position", "fixed");
        scenario1.css("top", "320px");
        scenario1.css("left", (start1 + time * (end1 - start1)) + "px");
        scenario2.css("top", "320px");
        scenario2.css("left", (start2 + time * (end2 - start2)) + "px");
        scenario3.css("top", "320px");
        scenario3.css("left", (start3 + time * (end3 - start3)) + "px");
    }

    if (sections[3].time > 0 && sections[3].time < 1) {
        kerk.css("position", "fixed");
        kerk.css("top", "0");
        var time = sections[3].time;

        scenario1.css("position", "fixed");
        scenario2.css("position", "fixed");
        scenario3.css("position", "fixed");
        scenario2.css("left", "570px");
    }

    if (sections[4].time > 0 && sections[4].time < 1) {
        kerk.css("position", "fixed");
        kerk.css("top", "0");
        var time = sections[4].time;
        var start1 = -370;
        var end1 = 570;
        var start2 = 570;
        var end2 = 1370;
        var start3 =  1370;
        var end3 = 2170;


        scenario1.css("position", "fixed");
        scenario2.css("position", "fixed");
        scenario3.css("position", "fixed");
        scenario1.css("top", "320px");
        scenario1.css("left", (start1 + time * (end1 - start1)) + "px");
        scenario2.css("top", "320px");
        scenario2.css("left", (start2 + time * (end2 - start2)) + "px");
        scenario3.css("top", "320px");
        scenario3.css("left", (start3 + time * (end3 - start3)) + "px");
    }

    if (sections[5].time > 0 && sections[5].time < 1) {
        kerk.css("position", "fixed");
        kerk.css("top", "0");
        var time = sections[5].time;

        scenario1.css("position", "fixed");
        scenario2.css("position", "fixed");
        scenario3.css("position", "fixed");
        scenario1.css("left", "570px");
    }

    if (sections[6].time > 0 && sections[6].time < 1) {
        kerk.css("position", "fixed");
        kerk.css("top", "0");
        var time = sections[6].time;
        var start1 = 570;
        var end1 = 2170;
        var start2 = 1370;
        var end2 = 2170;
        var start3 =  2170;
        var end3 = 2170;


        scenario1.css("position", "fixed");
        scenario2.css("position", "fixed");
        scenario3.css("position", "fixed");
        scenario1.css("top", "320px");
        scenario1.css("left", (start1 + time * (end1 - start1)) + "px");
        scenario2.css("top", "320px");
        scenario2.css("left", (start2 + time * (end2 - start2)) + "px");
        scenario3.css("top", "320px");
        scenario3.css("left", (start3 + time * (end3 - start3)) + "px");
    }

    if (sections[7].time > 0 && sections[7].time < 1) {
        kerk.css("position", "fixed");
        kerk.css("top", "0");
        var time = sections[7].time;

        scenario1.css("position", "fixed");
        scenario2.css("position", "fixed");
        scenario3.css("position", "fixed");
        scenario1.css("left", "2170px");
        scenario2.css("left", "2170px");
        scenario3.css("left", "2170px");
    }

    if (scroll > storyHeight2){
        kerk.css("position","relative");
        scenario1.css("left", "2170px");
        scenario2.css("left", "2170px");
        scenario3.css("left", "2170px");
        kerk.css("top",storyHeight+"px");
    }






});

inhoud1.parentNode.removeChild(inhoud1);

knop1.addEventListener('click', function() {
    modaal.open(inhoud1);
});


