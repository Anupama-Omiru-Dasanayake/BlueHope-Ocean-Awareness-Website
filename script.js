// ---- Global Java Script ----------
//-------------------------------------------
//| Template Developed by - @Anupama Omiru  | 
//-------------------------------------------
//

/* Croll To Top Function */
const scrollBtn = document.getElementById("scroll-top-btn");

        window.addEventListener("scroll", () => {

            if (window.scrollY > 600){
                scrollBtn.style.opacity = "1";
                scrollBtn.style.zIndex = "5000"
            } else {
                scrollBtn.style.opacity = "0";
                scrollBtn.style.zIndex = "-1000"
            }

        });

       
/* Navigation Bar Respositionaing when scrolling */
const navigationBar = document.getElementById("navigation-panel");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200){
        navigationBar.style.top = "10px";
    }else{
        navigationBar.style.top = "25px";
    }
});

// ---- Global Java Script ----------
//-------------------------------------------
//| Template Developed by - @Anupama Omiru  | 
//-------------------------------------------
//