// Global variables
const imgPath = "./assets/";
let catIndex = 0;

// Initial load
function loadCats() {
    console.log(catIndex);
    const myElements = {
        image: document.getElementById("cat-image"),
        name: document.getElementById("cat-name"),
        description: document.getElementById("cat-description"),
        pageNo: document.getElementById("page-number"),
    };

    // Cat Information
    myElements.image.src = imgPath + cats[catIndex].img;
    myElements.name.textContent = cats[catIndex].name;
    myElements.description.textContent = cats[catIndex].description;

    // Page number
    const totalCats = cats.length;
    myElements.pageNo.textContent = `${catIndex + 1}/${totalCats}`;
}

// Interaction - START ========================================
function nextCat() {
    catIndex++;
    if (catIndex >= cats.length) {
        catIndex = 0;
    }
    loadCats();
}

function previousCat() {
    catIndex--;
    if (catIndex < 0) {
        catIndex = cats.length - 1;
    }
    loadCats();
}
// Interaction - END ==========================================
