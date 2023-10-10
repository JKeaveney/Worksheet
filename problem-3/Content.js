//array of images
let halloweenImages = [
    "https://i.guim.co.uk/img/media/5cbefc6ca39ec6e2aed5123400507980425652bf/0_0_7117_4268/master/7117.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0cb827433607dd6ca9309a1eae086cf9",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jack-o%27-Lantern_2003-10-31.jpg/800px-Jack-o%27-Lantern_2003-10-31.jpg",
    "https://i.pinimg.com/474x/d4/97/53/d497534697a067fb266d60fbe3178254.jpg",
    "https://images.halloweencostumes.eu/products/72005/1-1/20-poseable-skeleton.jpg",
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * halloweenImages.length)
    imgs[i].src = halloweenImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Its Spooky Season.";
}

//do the same for h2 elements
const subheaders = document.getElementsByTagName("h2");
for (let i = 0; i < subheaders.length; i++) {
    subheaders[i].innerText = "Trick or Treat.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
    p[i].innerText = "This website is spooky!.";
}

const backgroundcolours = document.getElementsByTagName("body");
    for (let i = 0; i<backgroundcolours.length; i++){
            document.body.style.backgroundColor = "#FFA500";
}
    
const fonts = document.getElementsByTagName("html");
    for (let i = 0; i<fonts.length; i++){
            document.body.style.fontFamily = "Impact,Charcoal,sans-serif";
}
