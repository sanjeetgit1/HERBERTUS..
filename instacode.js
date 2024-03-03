function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();

function navbar(){
     var  splitH1= document.querySelector("#herbertus").textContent

   var splitedted = splitH1.split("")

   var clutter =" "
   splitedted.forEach(function(elem){
    clutter += `<span>${elem}</span>`
   }) 
document.querySelector("#herbertus").innerHTML = clutter
gsap.from('#main-navbar a h1',{
  x:-100,

  opacity:0,
    duration:1,
    // stagger:1
    
})
gsap.to("#loading_page",{
  width:"100%",
  // opacity:1,
  scale:1.02,
 duration:3,
 delay:3
})

gsap.to("#herbertus span",{
  stagger:0.2,
   
   color:"white",
   opacity:0,
   duration:.3,
   delay:1,
     scrollTrigger:{
      trigger:"#herbertus span",
      // markers:true,
      scroller:"#main",
      start:"top -2%",
      end:"top -10%",
      scrub:1,
     
    
   }
  
})
gsap.to("#main-navbar a h2 ",{
   x:-10,
   opacity:1,
   duration:.3,
   delay:0.5,
     scrollTrigger:{
      trigger:"#main-navbar a h2",
      // markers:true,
      scroller:"#main",
      start:"top -6%",
      end:"top 6%",
      scrub:1,
     
   }
  
})
}
navbar();


var timeline = gsap.timeline();

timeline.to(" #herbertus1 h1",{
  y:-10,
  duration:1,
  opacity:0,
  delay:0.5
 
  })
timeline.to("#herbertus1 ",{
  y:-10,
  duration:1,
  opacity:0,
  delay:1.5
 
  })
gsap.to("#Tailored_digital h1 , #your_business h1,#solutions h1,.home_footer img",{
  y:-10,
  duration:1,
  stagger:0.2
  })
function hello(){
  

}
 hello();

 function cursor1() {
  var crsr1 = document.querySelector("#cursor1");
  var vi1 = document.querySelectorAll(".image_row img");

  vi1.forEach(function (img) {
    img.addEventListener("mousemove", function (dets) {
      crsr1.style.left = dets.x  -5+ "px";
      crsr1.style.top = dets.y -5+ "px";
    });

    img.addEventListener("mouseenter", function (dets) {
      crsr1.style.opacity = 1;
      crsr1.style.left = dets.x + "px";
      crsr1.style.top = dets.y + "px";
    });

    img.addEventListener("mouseleave", function () {
      crsr1.style.opacity = 0;
    });
  });
}

cursor1();

gsap.from(".image_row img", {
  opacity:0,
  stagger: 1,
  duration:1,
  delay:3,
  scrollTrigger: {
    trigger: (".image_row img "),
    scroller: ("#main"),
    // markers: true,
    start: "top 60%",
    end: "top -200%",
    scrub: 2,
  }
});



gsap.to(" #what_we_do_row", {

  background:"#E5E5E5",
  opacity:1,
  duration:1,
  delay:3,
  scrollTrigger: {
    trigger: ("#what_we_do_row "),
    scroller: ("#main"),
    // markers: true,
    start: "top 0%",
    end: "top 40%",
    scrub: 2,
  }
},Animation);


gsap.to("#main-navbar", {

color:"black",
  
  duration:1,
  delay:3,
  scrollTrigger: {
    trigger: ("#what_we_do_row "),
    scroller: ("#main"),
    // markers: true,
    start: "top 0%",
    end: "top 90%",
    scrub: 2,
  }
},Animation);

gsap.to("#main-navbar", {

color:"white",
  
  duration:1,
  delay:3,
  scrollTrigger: {
    trigger: ("#product "),
    scroller: ("#main"),
    // markers: true,
    start: "top 0%",
    end: "top -10%",
    scrub: 1,
  }
});

gsap.from("#main-navbar", {

color:"black",
  
  duration:1,
  delay:3,
  scrollTrigger: {
    trigger: ("#product "),
    scroller: ("#main"),
    // markers: true,
    start: "top 0%",
    end: "top -10%",
    scrub: 1,
  }
});

gsap.to(" .decoline", {

background:"black",
 
  duration:1,
  delay:3,
  scrollTrigger: {
    trigger: (" .decoline "),
    scroller: ("#main"),
    // markers: true,
    start: "top -470%",
    end: "top 10%",
    scrub: 2,
  }
});




function landing(){
  let t1 = document.querySelector(".landing_page h1").textContent
     let  splitedted = t1.split("")

   let clutter =""
   splitedted.forEach(function(elem){
    clutter += `<span>${elem}</span>`
   })
  
 
document.querySelector(".landing_page h1").innerHTML = clutter
let t =gsap.timeline();

t.to(".landing_page h1 span",{
  stagger:0.3,
  y:-40,
  opacity:0,
  color:"black",
  rotate:90,
  
   
})

t.to(".landing_page",{
  y:"-100%",
  duration:1,
  delay:0.5,

})
}
landing();
