/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
20 meters = 65.616 feet | 20 feet = 6.096 meters
inputEl.value + " meters = " + myLeads[i] * 3.2812 + " feet | " + inputEl.value + " feet = " + feet
*/

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let inputVolumeEl = document.getElementById("input-volume")
let inputMassEl = document.getElementById("input-mass")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderInput1()
    renderInput2()
    renderInput3()
})

function renderInput1(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        let feet = myLeads[i] * 0.3047
        listItems = `${inputEl.value} meters = ${myLeads[i] * 3.2812.toFixed(2)} feet | 
        ${inputEl.value} feet = ${feet.toFixed(2)} meters`
}
ulEl.innerHTML = listItems  

}

function renderInput2(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        let gallon = myLeads[i] * 3.7854
        listItems = `${inputEl.value} liters = ${myLeads[i] * 0.264.toFixed(2)} gallons | ${inputEl.value} gallons = ${gallon.toFixed(2)} liters`
}
inputVolumeEl.innerHTML = listItems  

}

function renderInput3(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        let pound = myLeads[i] * 0.4536
        listItems = `${inputEl.value} kilograms = ${myLeads[i] * 2.204.toFixed(2)} pounds | ${inputEl.value} pounds = ${pound.toFixed(2)} kilograms`
}
inputMassEl.innerHTML = listItems  

}



