const heading = document.getElementById('text')
// const heading2 = document.getElementsByTagName('h2')[0] старий метод
//const heading2 = document.getElementsByClassName('H2-class')[0]  старий метод
// const heading2 = document.querySelector('h2-class')
const heading2 = document.querySelector('#h2-id')
const heading3 = heading2.nextElementSibling
console.log(heading2)
console.log(heading3)

setTimeout(()=>{
    addStyleToText(heading, 'In short future', 'yellow', 'blue')
}, 500)

setTimeout(()=>{
    addStyleToText(heading2, 'I`l be', 'blue', 'yellow')
}, 1000)

setTimeout(()=>{
    addStyleToText(heading3.children[0], 'Java Script developer!','green', 'orange', '2rem')
}, 1500)

function addStyleToText(node, text, color = 'black', backColor = 'red', fontSIze) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = backColor
    node.style.padding = '2rem'
    node.style.width = '100%'
    node.style.display = 'block'
    if(fontSIze){
        node.style.fontSize = fontSIze
    }
}

function changeVue(node2, text, color, backColor, fontSize){
    node2.textContent = text
    node2.style.color = color
    node2.style.textAlign = 'center'
    node2.style.backgroundColor = backColor
    node2.style.padding = '2rem'
    node2.style.fontSize = fontSize
    node2.style.borderRadius = '15%'

}

heading.onclick = () => {
    if(heading.style.color=== 'yellow'){
        changeVue(heading, 'May be very soon', 'blue', 'yellow', '2rem')
    } else{
        addStyleToText(heading, 'In short future', 'yellow', 'blue')
    }
}
// heading2.onclick = () => {
//     if(heading2.style.color=== 'blue'){
//         changeVue(heading2, 'I`l have', 'yellow', 'blue', '2rem')
//     }else{
//         addStyleToText(heading2, 'I`l be', 'blue', 'yellow')
//     }
// }
heading2.addEventListener('dblclick', ()=>{
    if(heading2.style.color=== 'blue'){
        changeVue(heading2, 'I`l have', 'yellow', 'blue', '2rem')
    }else{
        addStyleToText(heading2, 'I`l be', 'blue', 'yellow')
    }
})

// heading3.onclick = () => {
//     if(heading3.style.color=== 'green') {
//         changeVue(heading3, 'a new life', 'orange', 'green', '2rem')
//     }else {
//         addStyleToText(heading3, 'Java Script developer!','green', 'orange', '2rem')
//     }
// }
// heading3.addEventListener('click', ()=>{
//     if(heading3.style.color=== 'green') {
//         changeVue(heading3, 'a new life', 'orange', 'green', '2rem')
//     }else {
//         addStyleToText(heading3, 'Java Script developer!','green', 'orange', '2rem')
//     }
// })



