const header =  document.querySelector(".article__header")

header.textContent = "Welcome to the Anne blog.";

// header.classList = "article__header important"

header.classList.add("important");

console.log("class list", header.classList);

const dashed = document.querySelectorAll(".dashed")

console.log("dashed", dashed);

dashed.forEach(element => {
    console.log(element);
    element.classList.remove("dashed");
})

const golden = document.querySelector(".article__footer")
golden.classList.add("goldenrod");