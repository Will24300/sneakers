const links = document.querySelectorAll("#links");
const slider = document.querySelector(".slider");


const products = [
    {
        id: 1,
        title: "Air jordan",
        price: 121,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            }
        ]
    },
    {
        id: 2,
        title: "Blazer",
        price: 91,
        colors: [
            {
                code: "white",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            }
        ]
    },
    {
        id: 3,
        title: "Crater",
        price: 136,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "white",
                img: "./img/crater2.png",
            }
        ]
    },
    {
        id: 4,
        title: "Hippie",
        price: 103,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            }
        ]
    }, 
    {
        id: 5,
        title: "Jordan 1",
        price: 66,
        colors: [
            {
                code: "white",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            }
        ]
    }
]

let product = products[0];

let currentImg = document.querySelector("#currentImg");
let currentTitle = document.querySelector("#productTitle");
let currentPrice = document.querySelector("#currentPrice");
let changeColor = document.querySelectorAll("#change");
let currentSizes = document.querySelectorAll("#sizes");


links.forEach((link, index)=> {
    link.addEventListener("click", ()=> {
        slider.style.transform = `translateX(${-100 * index}vw)`;
        
        //change the current products
        product = products[index];
        currentImg.src = product.colors[0].img;
        currentTitle.textContent = product.title;
        currentPrice.textContent = "$" + product.price;
        changeColor.forEach((color, index)=> {
            color.style.backgroundColor = product.colors[index].code;
        })
        
    })
})

changeColor.forEach((color, index)=> {
    color.addEventListener("click", ()=> {
        currentImg.src = product.colors[index].img;
    })
})
//change the size's background
currentSizes.forEach((size, index)=> {
    size.addEventListener("click", ()=> {
        currentSizes.forEach((size, index)=> {
            size.style.backgroundColor = "rgb(194, 193, 193)";
        })
        size.style.backgroundColor = "white";
        
    })
})

links.forEach((link, index)=> {
    link.addEventListener("click", ()=> {
        links.forEach((link, index)=> {
            link.style.opacity = ".8";
            link.style.transform = "scale(1)";
        })
        link.style.opacity = "1";
        link.style.transform = "scale(1.1)";
    })
    
})

const buyButton = document.querySelector("#buyButton");
const payScreen = document.querySelector("#payScreen");
const cancel = document.querySelector("#cancel");

buyButton.addEventListener("click", ()=> {
        payScreen.style.display = "block";
})
cancel.addEventListener("click", ()=> {
    payScreen.style.display = "none";
})

window.addEventListener("click", (e)=> {
    if(e.target === payScreen){
        payScreen.style.display = "none";
    }
})

const loader = document.querySelector("#loader");

window.addEventListener("load", ()=> {
    loader.style.display = "none";
})