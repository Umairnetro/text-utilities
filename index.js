const txt = document.querySelector("#text")

const btn = document.querySelectorAll(".btn")



const dummyText = () => {
    txt.value = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea, quas! Qui eius hic blanditiis. textutils is app for transform your text. the id ipsam modi necessitatibus, corrupti rem rerum suscipit doloremque ad deserunt nesciunt harum. harum perspiciatis id mollitia. netro is working on project. the corporis.Optio earum illo iure cumque reiciendis, suscipit ex ab quas, possimus excepturi recusandae! Molestiae tempora assumenda totam eveniet ?";
}

const capitalize = () => {
    let cpi = txt.value;
    let str = cpi.split(". ")
    let empty = [];
    str.forEach((e) => {
        let capital = e[0].toUpperCase()
        let rest = e.slice(1);
        let word = capital + rest + ". "
        return empty.push(word)
    })
    let capitalize = empty.join("")
    txt.value = capitalize;
}

const textUpperCase = () => {
    txt.value = txt.value.toUpperCase()
}

const textLowerCase = () => {
    txt.value = txt.value.toLowerCase()
}

const clearText = () => {
    txt.value = ""
}

btn[0].addEventListener("click", dummyText)
btn[1].addEventListener("click", capitalize)
btn[2].addEventListener("click", textUpperCase)
btn[3].addEventListener("click", textLowerCase)
btn[4].addEventListener("click", clearText)