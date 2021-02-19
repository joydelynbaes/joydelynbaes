let imagesLoad = document.querySelectorAll ("img[data-src]");

const loadImages = (image) => {
    image.setAttribute ("src", image.getAttribute("data-src"));
    image.onload = () => {
    image.removeAttribute("data-src");
    };
};

if("intersectionObserver" in window){
    const observer = new intersectionObserver ((items, observer) =>{
        items.forEach ((item) => {
            if (item.isIntersecting){
                loadImages(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
    }


