    const webTitile = document.querySelector("#main-title");
    webTitile.textContent = "Welcome to the Cozy Cafe"
    webTitile.style.textAlign = "center";

    const btnColor = document.querySelector("#bg-color-btn");
    btnColor.addEventListener("click", () => {
        if(document.body.style.backgroundColor !== "lightsteelblue")
            document.body.style.backgroundColor = "lightsteelblue"
        else
            document.body.style.backgroundColor = ""
    });

    const dayQoute = document.querySelector("#quote-of-the-day");
    dayQoute.textContent = "Life happens, coffee helps.";

    const titleEls = document.querySelectorAll(".highlight-title");
    
    titleEls.forEach(e => {
        e.style.fontStyle = "italic";
    });

    const menuItems = document.querySelector("#past-menu-items");
    const newItem = document.createElement("li");
    newItem.textContent = "Rose Cake";
    menuItems.append(newItem);

    const cafeSpecial = document.querySelector("#cafe-specialties");
    const newSpecial = document.createElement("li");
    newSpecial.textContent = "Karak Tea is on offer now";

    cafeSpecial.append(newSpecial);

    const divBlog = document.createElement("div");
    divBlog.classList = "blog-post";

    const headEvent = document.createElement("h3");
    headEvent.textContent = "Karak Tea Teasing Event"

    const textEvent = document.createElement("p");
    textEvent.textContent = "The Karak tea is sepcial and amazing"

    divBlog.append(headEvent);
    divBlog.append(textEvent);

    const blogs = document.querySelector("#blogs");
    blogs.append(divBlog)

    //Level 8
    const pastMenu = document.querySelector("#past-menu-items");
    const fishTacos = document.querySelectorAll("#past-menu-items li")
    
    fishTacos.forEach(e => {
        if(e.textContent === "Fish Tacos")
            pastMenu.removeChild(e)
    })