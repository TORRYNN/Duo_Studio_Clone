
// Function for Scrolltrigger and GSAP
function init() {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
// Calling the function
init()

// TimeLine 1 for page1 animation
var tl = gsap.timeline({
    scrollTrigger: {
        // h1 is goind to be triggered.
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 150px",
        end: "top 0",
        scrub: 3
    }
})
// It will move the h1 to -100px left
tl.to(".page1 h1", {
    x: -100,
}, "anim")
// It will move the h2 to 100px right
tl.to(".page1 h2", {
    x: 100
}, "anim")

tl.to(".page1 video", {
    width: "90%",
    
    

}, "anim")

// Timeline 2 for page2 

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -175%",
        end: "top -150%",
        scrub: 3
    }
})

tl2.to(".main", {
    backgroundColor: "#fff",
    duration:0.1,
    ease: "power1.inOut",
});


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers:true,
        start: "top -260%",
        end: "top -230%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor: "#0F0d0d",
    
    duration:0.1,
    ease: "power1.inOut",
});


// Cursor effect

// Using EventListener to record the event
var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");

document.addEventListener("mousemove", function(dets) {
    gsap.to(crsr, { 
        duration: 0.1, 
        left: dets.x - 10 + "px", 
        top: dets.y - 10 + "px",
        ease: "power2.out"
    });
});



// Mouseleave event listener to hide cursor
document.addEventListener("mouseleave", function() {
    crsr.style.display = "none";
});

// Mouseenter event listener to show cursor
main.addEventListener("mouseenter", function() {
    crsr.style.display = "block";
});



// Selecting all the boxes
var boxes=document.querySelectorAll(".box")

// Loop for selecting the boxes

boxes.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(){
        var att=elem.getAttribute("data-image")
        crsr.style.width="300px",
        crsr.style.height="300px",
        crsr.style.borderRadius="0",
        crsr.style.backgroundImage=`url(${att})`
                
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.width="20px",
        crsr.style.height="20px",
        crsr.style.borderRadius="50%",
        crsr.style.backgroundImage="none"
    })
})



var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})

function cursorOnVideo(video, text1, text2) {
  crsr.classList.add("cursor-active");
  if (video.muted) {
    crsr.innerHTML = text1;
  } else {
    crsr.innerHTML = text2;
  }
}

videos.forEach((video) => {
  video.addEventListener("mousemove", function () {
    cursorOnVideo(video, "sound on", "sound off");
  });
});

videos.forEach((video) => {
  video.addEventListener("mouseenter", function () {
    cursorOnVideo(video, "sound on", "sound off");
  });
});

videos.forEach((video) => {
  video.addEventListener("click", function () {
    video.muted = !video.muted;
  });
});

videos.forEach((video) => {
  video.addEventListener("mouseleave", function () {
    crsr.classList.remove("cursor-active");
    crsr.innerHTML = "";
  });
});
