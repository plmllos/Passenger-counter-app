let count = 0
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")

const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")
const saveBtn = document.getElementById("save-btn")
const resetBtn = document.getElementById("reset-btn")
const allBtns = document.getElementsByClassName('btn')

incrementBtn.addEventListener('click', render)
decrementBtn.addEventListener('click', render)

function render(e) {
    saveBtn.disabled = false
    resetBtn.disabled = false
    let checkId = e.target.id
    if (checkId === "increment-btn") {
        count ++
        for (let btn of allBtns) {
            btn.classList.add('active')
        }
    } else if (checkId === "decrement-btn" && count > 0) {
        count --
    }
    countEl.innerHTML = count
}

saveBtn.addEventListener('click', function() {
    if (count > 0) {
        let countString = count + '- '
        saveEl.innerHTML +=  `
        <span> ${countString} </span>
    `
    }
    for (let btn of allBtns) {
        btn.classList.remove('active')
    }
    count = 0
    countEl.innerText = 0
})

resetBtn.addEventListener('click', function() {
    count = 0
    countEl.innerText = 0
    saveEl.textContent = 'Previous entries: '
    for (let btn of allBtns) {
        btn.classList.remove('active')
    }
    
})