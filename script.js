/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
let inputVolumeEl = document.getElementById("input-volume")
let inputMassEl = document.getElementById("input-mass")
20 meters = 65.616 feet | 20 feet = 6.096 meters
*/

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderInput()
})

function renderInput(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        let feet = myLeads[i] * 0.3047
        listItems = inputEl.value + " meters = " + myLeads[i] * 3.2812 + " feet | " + inputEl.value + " feet = " + feet
    }
    

ulEl.innerHTML = listItems  

}




