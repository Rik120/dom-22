import { arr } from "./module/db.js";

// let btn = document.querySelectorAll('.btn')
let hOne = document.getElementById('hOne')
let hTwo = document.getElementById('hTwo')
let numberOne = document.querySelector('.counterONE')
let numberTwo = document.querySelector('.counterTWO')
let numberThree = document.querySelector('.counterTHREE')
let boxBtn1 = document.querySelector('.boxBtn1')
let boxBtn2 = document.querySelector('.boxBtn2')
let boxBtn3 = document.querySelector('.boxBtn3')
let infoDay = document.querySelectorAll('.infoDay')
let welcomeText = document.querySelector('.welcomeText')
let infoText = document.querySelector('.infoText')
let checkboxs = document.querySelectorAll('.checkbox')
let nbrOne = document.querySelectorAll(".boxBtn1 .maseng")
let nbrTwo = document.querySelectorAll(".boxBtn2 .maseng")
let nbrThree = document.querySelectorAll(".boxBtn3 .maseng")



function reload(arr) {
    boxBtn1.innerHTML = ''
    boxBtn2.innerHTML = ''
    boxBtn3.innerHTML = ''

    for (let item of arr) {

        let maseng = document.createElement('div')
        let content = document.createElement('div')
        let label = document.createElement('label')
        let inp = document.createElement('input')
        let fake = document.createElement('span')
        let textCheck = document.createElement('span')
        let p = document.createElement('p')
        let timer = document.createElement('span')
        let month = document.createElement('div')
        let date = document.createElement('div')

        maseng.classList.add('maseng')
        content.classList.add('content')
        label.classList.add('label')
        inp.classList.add('checkbox')
        fake.classList.add('fake')
        textCheck.classList.add('textCheck')
        timer.classList.add('timer')
        month.classList.add('month')
        date.classList.add('date')
        inp.type = 'checkbox'
        textCheck.innerHTML = 'Buy S Plaid!'
        p.innerHTML = item.title

        maseng.append(content)
        content.append(label, p, timer)
        timer.append(month, date)
        label.append(inp, fake, textCheck)

        let today = new Date();
        today.setDate(today.getDate() + item.left)
        let options = { month: 'long', day: 'numeric' };
        let now = today.toLocaleString('en', options);

        if (item.left <= 0) {
            boxBtn1.append(maseng)
            date.innerHTML = now
        } else if (item.left <= 1) {
            boxBtn2.append(maseng)
            date.innerHTML = now
        } else if (item.left >= 3) {
            boxBtn3.append(maseng)
            timer.innerHTML = now
        }
    }
}

checkboxs.forEach((checkbox) => {
    checkbox.onclick = () => {
        console.log("sdf");
    }
})
reload(arr)

hOne.onclick = () => {
    hTwo.classList.remove('active')
    hOne.classList.add('active')
    infoDay.forEach(e => {
        e.style.display = 'block'
    })
    boxBtn2.style.display = 'block'
    boxBtn3.style.display = 'block'
    welcomeText.style.display = 'block'
    infoText.innerHTML = 'ALL TODOS'
}

hTwo.onclick = () => {
    hOne.classList.remove('active')
    hTwo.classList.add('active')
    infoDay.forEach(e => {
        e.style.display = 'none'
    })
    boxBtn2.style.display = 'none'
    boxBtn3.style.display = 'none'
    welcomeText.style.display = 'none'
    infoText.innerHTML = 'ONLY TODAY TODOS'
}

numberOne.innerHTML = nbrOne.length
numberTwo.innerHTML = nbrTwo.length
numberThree.innerHTML = nbrThree.length