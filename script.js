const num = document.getElementById('num')
const lowBtn = document.getElementById('low-btn')
const addBtn = document.getElementById('add-btn')

lowBtn.addEventListener('click', () => numFn(false))
addBtn.addEventListener('click', () => numFn(true))

function numFn (style){
    let getNum = +num.innerText
    if(style){
        num.innerText = getNum += 1
    }else{
        num.innerText = getNum -= 1
        console.log(getNum)
    }
    if(getNum === 0){
        num.style.color = 'black'
    }else if(getNum > 0){
        num.style.color = 'green'
    }else{
        num.style.color = 'red'
    }
}
