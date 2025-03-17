let button = document.querySelector("button");
button.addEventListener("mouseover" , (e)=>{
    let image = document.querySelector("img");
    image.src= "pexels-skyriusmarketing-2224861.jpg";
    image.alt = "New York";
    button.innerText = "New York";
})
button.addEventListener("mouseout" , (e)=>{
    
        let image = document.querySelector("img");
        image.src= "pexels-dominikagregus-672532.jpg";
        image.alt = "London";
        button.innerText = "London";

})

