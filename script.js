function loader(){
  gsap.to("#loader",{
    top:"-100%",
    delay:3,
    duration:0.5,
    ease:"linear"
  })
}
loader();


function smooth(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
smooth();


function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiper();


function cursorMove(){
  let swiperContainer=document.querySelector(".swiper")
let cursor=document.querySelector(".cursor")

window.addEventListener("mousemove",(dets) => {
  gsap.to(".cursor",{
    x:dets.x,
    y:dets.y,
    delay:0,
    duration:0.7
  })
})
swiperContainer.addEventListener("mouseenter",() => {
  cursor.style.opacity=1;
  cursor.style.height="100px";
  cursor.style.width="100px";
})
swiperContainer.addEventListener("mouseleave",() => {
  cursor.style.opacity=0;
  cursor.style.height="0px";
  cursor.style.width="0px";
})
}
cursorMove();


function hoverProjects(){
  let projectsContainer=document.querySelector(".projectsContainer")
let projects=document.querySelectorAll(".projects")
let fix=document.querySelector(".fixedImage")


projectsContainer.addEventListener("mouseenter",() => {
  fix.style.display="block";
})
projectsContainer.addEventListener("mouseleave",() => {
  fix.style.display="none";
})

projects.forEach(project => {
  project.addEventListener("mouseenter",() => {
    let image=project.getAttribute("data-hover");
    fix.style.backgroundImage=`url(${image})`
  })
});
}
hoverProjects();


function navbar(){
  
let menu=document.querySelector(".menu");
let menuScreen=document.querySelector(".menuScreen");
let menuImg=document.querySelector(".menuImage");

let menuVar=0;
menu.addEventListener("click",() => {
  if(menuVar==0){
    menuScreen.style.top=0;
    menuImg.src="./pictures/close.png";
    menuVar=1;
  }
  else{
    menuScreen.style.top="-100%";
    menuImg.src="./pictures/menu.png";
    menuVar=0;
  }
})
}
navbar();




