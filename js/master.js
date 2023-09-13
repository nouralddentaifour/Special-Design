// links open
let link = document.querySelector(".links i")
link.onclick = function () {
    document.querySelector(".links ul").classList.toggle("open")
}
// open setting box
let icon = document.querySelector(".setting-box .icon")
icon.onclick = function () {
    document.querySelector(".setting-box").classList.toggle("open")
}
// show bullets

document.querySelectorAll(".show-bullets .button span").forEach(ele =>{
    ele.addEventListener("click",function(span){
            span.target.parentElement.querySelectorAll(".active").forEach((el)=>{
                el.classList.remove("active")
            })
            ele.classList.add("active")
            if(ele.classList.contains("no")){
                document.querySelector(".header .bullets").style.display ="none";
                localStorage.setItem("show-bull",false)
            }
            else if(ele.classList.contains("yes")){
                document.querySelector(".header .bullets").style.display ="block";
                localStorage.setItem("show-bull",true)
            }
        })
    })
if (localStorage.getItem("show-bull") != null) {
    document.querySelectorAll(".show-bullets .button span").forEach((ele)=>{
        ele.classList.remove("active")
        if(localStorage.getItem("show-bull")==="true"){
            document.querySelector(".show-bullets .button .yes").classList.add("active")
        }
        else if(localStorage.getItem("show-bull")==="false")
        {
            document.querySelector(".header .bullets").style.display ="none";
            document.querySelector(".show-bullets .button .no").classList.add("active")
        }
    })
}
// main-color
document.querySelectorAll(".setting-box .color ul li").forEach((li)=>{
    li.addEventListener("click" , function (ele) {
        ele.target.parentElement.querySelectorAll(".active").forEach((el)=>{
            el.classList.remove("active")
        })
        li.classList.add("active")
        console.log(li.dataset.color);
        localStorage.setItem("main-color",li.dataset.color)
        document.documentElement.style.setProperty("--main-color",li.dataset.color)

    })
})
if(localStorage.getItem("main-color") != null){
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("main-color"))
    document.querySelectorAll(".setting-box .color ul li").forEach((li)=>{
        li.classList.remove("active")
        if( li.dataset.color === localStorage.getItem("main-color")){
            li.classList.add("active")
        }
    })
}
// img
document.querySelectorAll(".gallery .content .box img").forEach((img)=>{
    img.addEventListener("click" , function (box) {
        let overlay = document.createElement("div")
        overlay.className = "overlay"
        document.body.appendChild(overlay)
        let div = document.createElement("div")
        div.className = "photo"
        let photo = document.createElement("img")
        let span = document.createElement("span")
        span.className = "span"
        span.innerHTML = "x"
        photo.src = img.src
        overlay.appendChild(span)
        div.appendChild(photo)
        overlay.appendChild(div)
    })
})
addEventListener("click" , function(ele){
    if(ele.srcElement.className === 'span'){
        ele.target.parentElement.remove()
    }
})
// random background
document.querySelectorAll(".random-backgroumd .button  span").forEach((span) =>{
    span.addEventListener("click", function (ele) {
        ele.target.parentElement.querySelectorAll(".active").forEach((el)=>{
            el.classList.remove("active")
        })
        span.classList.add("active")
        if (span.classList.contains("yes")) {
            loopImg();
            localStorage.setItem("random-img",true)
        }
        else if(span.classList.contains("no")){
            clearInterval(inter)
            localStorage.setItem("random-img",false)
        }

    })
})
let inter
let arrayImg = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"]
function loopImg() {
    inter = setInterval(() => {
        document.querySelector(".header").style.backgroundImage = 'url("img/'+arrayImg[Math.floor(Math.random() * arrayImg.length)]+'")'
    },3000);
}
if(localStorage.getItem("random-img") != null){
    document.querySelectorAll(".random-backgroumd .button  span").forEach((span)=>{
        span.classList.remove("active")
        if (localStorage.getItem("random-img") === 'true') {
            document.querySelector(".random-backgroumd .button .yes").classList.add("active")
            loopImg();
        }
        if (localStorage.getItem("random-img") === 'false') {
            document.querySelector(".random-backgroumd .button .no").classList.add("active")
        }
    })

}
console.log(localStorage.getItem("random-img"));
