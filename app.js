// ! 🔥 💪🏻 Bn Ramadan frontend project 5 ( one piece slider ) 💪🏻 🔥
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function(){
    showSlider("next");
}
prevDom.onclick = function(){
    showSlider("prev");
}
let timeRunning = 500;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

if (!document.querySelector(".carousel .list .item.active")) {
    document.querySelector(".carousel .list .item").classList.add("active");
}
function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let thumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    itemSlider.forEach(item => item.classList.remove("active"));

    if (type === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(thumbnail[0]);
        itemSlider[1].classList.add("active");
        carouselDom.classList.add("next");
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(thumbnail[positionLastItem]);
        itemSlider[0].classList.add("active");
        carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

// ! " The end of this project is the completing of future successes and creativity , Just strive, be patient, commit and keep going. " -->
//  !🔥 💪🏻 Always forward! 💪🏻 🔥 -->
