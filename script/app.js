const modal = document.getElementById("modal");
const imageWrappers = document.querySelectorAll(".imageWrapper img");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");


imageWrappers.forEach(imageWrapper => {
    imageWrapper.addEventListener("click", () => {
        // when we click on each image wrapper figure, this arrow function executes
        modal.classList.add("open");
        // we add class open to the modal image so that we can give it transitio when modal is being clicked
        //meaning now image has animation
        modalImg.classList.add("open");

        // change image of modal dynamically
        // get src of modal img from data-original attribute and put it in img src so the img changes as each imageWrapper is being clicked
        const dynamicImgSrc = imageWrapper.getAttribute("data-original");
        console.log(dynamicImgSrc);
        modalImg.src=dynamicImgSrc;

        // now we change text of modal using alt of img
        const altText = imageWrapper.alt;
        modalCaption.textContent = altText;
    })
})

modal.addEventListener("click", e => {
    if(e.target.classList.contains("modal")){
        // if you click on a place which has a class of modal, modal will be removed
        //you know that black part has the class of modal
        modal.classList.remove("open");  
        // we remove open class from modal img so that it fades with transition
        modalImg.classList.remove("open");    
    }
})