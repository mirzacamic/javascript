let submit = document.querySelector('#submit')
let field = document.querySelector('#iField')

let value, element;

submit.addEventListener('click', (e) => {
     e.preventDefault();
     value = field.value;

     if(field.value !== ""){
         element = document.createElement('li');
         element.innerHTML = `<p class="text">${value}</p><div><button class="delete" onClick="deletePost(this)">Done</button><button class="remov" onclick="removeTask(this)">Delete</button></div>`
         document.querySelector('ul').appendChild(element);
     }

     field.value = "";
})

//let dony = document.querySelector("#completed")



let deletePost = (e) => {
    let comply = document.createElement("li")
    comply.innerHTML = `${e.parentElement.parentElement.firstChild.innerHTML}`
    document.querySelector(".completed").appendChild(comply);
    e.parentElement.parentElement.remove();
}

let removeTask = (e) => {
    e.parentElement.parentElement.remove()
}


let resbut = document.querySelector("#reset")

resbut.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector("ul").innerHTML = ""
    document.querySelector(".completed").innerHTML = ""
})
