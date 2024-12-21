var a=document.querySelector(".lay")
var b=document.querySelector(".box")

var addbutton=document.getElementById("+button")

addbutton.addEventListener("click",function(){
    a.style.display="block"
    b.style.display="block"
})

var cancelpopup=document.getElementById("cancel-popup ")
 cancelpopup.addEventListener("click",function(){
    a.style.display="none"
    b.style.display="none"
 })

//selete contant,add-book,book-title-input,book-author-input,book-descripition-input

 var container=document.querySelector(".contant")
 var addbook=document.getElementById("add-book")
 var titleinput=document.getElementById("book-title-input")
 var authorinput=document.getElementById ("book-author-input")
 var descripitioninput=document.getElementById("book-descripition-input")

 addbook.addEventListener("click",function(){
    
    var div=document.createElement("div")
    div.setAttribute("class","book-con")
    div.innerHTML=`<h2>${titleinput.value}</h2>
            <h4>${authorinput.value}</h4>
            <p>${descripitioninput.value}</p>
            <button  onclick="deletebook(event)">delete</button>`
            container.append(div)
            a.style.display="none"
            b.style.display="none"

 })

 function deletebook(event)
 {
   alert("Your post Delete to it?")
   event.target.parentElement.remove()
   //a.style.display="block"
 }

 function alertmessage(){
   alert("Your Post Add TO It??")

 }
