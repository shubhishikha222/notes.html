let noteTitle = document.querySelector("#title")
let input  = document.querySelector("#userInput")
let btn = document.querySelector("#btn")
let notes = document.querySelector(".notes")


btn.addEventListener("click",function(){
    console.log(noteTitle.value)
    console.log(input.value)
    let para= document.createElement('p')
    para.setAttribute('id',"para1")
    para.innerText= input.value
    
    let para2 = document.createElement('h3')
    para2.setAttribute('id',"heading")
    para2.innerText= noteTitle.value

    notes.append(para2)
    notes.append(para)
    input.value=''
    noteTitle.value=''
    para.addEventListener('click',function(){
        para.style.textDecorationColor="grey";
        para.style.backgroundColor="yellow";

    })        


})
