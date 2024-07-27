
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

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.4
})
// Timeline 2 for page2 

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -150%",
        end: "top -145%",
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
        // markers:true,
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

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";

  crsr.animate(
    {
      left: `${dets.x}px`,
      top: `${dets.y}px`,
    },
    { duration: 1500, fill: "forwards" }
  );
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

boxes.forEach(function(box) {
    box.addEventListener("mouseenter", function(){
        var att=box.getAttribute("data-image")
        crsr.style.width="470px",
        crsr.style.height="370px",
        crsr.style.borderRadius="25px",
        crsr.classList.add('cursor-blend'),
        crsr.classList.add('cursor-img'),
        box.style.color="#green",
        
        crsr.style.backgroundImage=`url(${att})`
                
    })
    box.addEventListener("mouseleave", function(){
        box.style.backgroundColor = "transparent"
        crsr.style.width="17px",
        crsr.style.height="17px",
        crsr.style.borderRadius="50%",
        crsr.style.backgroundImage="none",
        crsr.classList.remove('cursor-blend');
        
        box.style.color="red"
    })
})

// Navigation bar animation

// Variable to select  the value of h4
var h4 = document.querySelectorAll("#nav-part2 a h4 ")
var purple = document.querySelector("#purple")

var navhoverH1 = document.querySelectorAll('#purple h1');

// Function for text animaton
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

// Loop for selecting the h4 or navigation elements
h4.forEach((element, idx) => {
  if (idx == -1) return;

  element.addEventListener('mouseenter', function() {
      navhoverH1.forEach((h1) => {
        // Creating a string of non breakspace h1
          h1.innerHTML = "&nbsp;" + element.innerHTML + " " + element.innerHTML + " " + element.innerHTML + " " + element.innerHTML + " " + element.innerHTML;
      });
      purple.style.display = "block";
      purple.style.opacity = "1";
  });
});

document.querySelector('nav').addEventListener('mouseleave', function() {
  purple.style.display = "none";
  purple.style.opacity = "0";
  
});
