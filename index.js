let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let decrementBtn = document.getElementById("decrement-btn")
let saveBtn = document.getElementById("save-btn")

decrementBtn.disabled = true
saveBtn.disabled = true

function increment() {
    decrementBtn.disabled = false
    saveBtn.disabled = false
    count ++
    countEl.textContent = count 
}

function decrement() {
    if (count > 1) {
        count --
        countEl.textContent = count
    } else {
        alert("Zero or negative numbers are not valid for the entry")
    }
}

function save() {
    let countString = count + ' - '
    saveEl.textContent += countString
    count = 0
    countEl.innerText = 0
    decrementBtn.disabled = true
    saveBtn.disabled = true
}

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = ""
    decrementBtn.disabled = true
    saveBtn.disabled = true
}