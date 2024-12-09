gsap.to(".slide",{
    transform:'translate(-300%)',
    duration:2,
    scrollTrigger:{
        trigger:".slide",
        start:"top 0",
        end:"+=1600",
        scrub:0.3
    }
})


// var tl = gsap.timeline()

// tl.to(".banner-img",{
//     transform:'translateX(-100%)',
//     duraton:1,
//     ease:"ease"
// },"+=3")
// tl.to(".banner-img",{
//     transform:'translateX(-200%)',
//     duraton:1,
//     ease:"power4"
// },"+=3")
// tl.to(".banner-img",{
//     transform:'translateX(-300%)',
//     duraton:1,
//     ease:"power4"
// },"+=3")
// tl.to(".banner-img",{
//     transform:'translateX(-400%)',
//     duraton:1,
//     ease:"power4"
// },"+=3")