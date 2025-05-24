document.getElementById("openPromoModal")
    .addEventListener("click", () => {
        document.getElementById("heroModal").style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    });

document.getElementById("closePromoModal")
    .addEventListener("click", () => {
        document.getElementById("heroModal").style.visibility = 'hidden';
        document.body.style.overflow = 'visible';
    });