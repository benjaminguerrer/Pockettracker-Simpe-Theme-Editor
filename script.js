const colorBackground = document.getElementById('1');
const row4th = document.getElementById('2');
const rowCursor = document.getElementById('3');
const rowPlay = document.getElementById('4');
const rowSelect = document.getElementById('5');
const txtTitle = document.getElementById('6');
const txtParam = document.getElementById('7');
const txtValue = document.getElementById('8');
const txtCursor = document.getElementById('9');
const txtEmpty = document.getElementById('10');
const vizBG = document.getElementById('11');
const vizLine = document.getElementById('12');
const vizWave = document.getElementById('13');
const mtrBG = document.getElementById('14');
const mtrLow = document.getElementById('15');
const mtrMid = document.getElementById('16');
const mtrHigh = document.getElementById('17');
const pageBG = document.getElementById('18');
const toggleLight = document.getElementById('toggle');
let toggleState = false;

let allColors = [
    colorBackground,
    row4th,
    rowCursor,
    rowPlay,
    rowSelect,
    txtTitle,
    txtParam,
    txtValue,
    txtCursor,
    txtEmpty,
    vizBG,
    vizLine,
    vizWave,
    mtrBG,
    mtrLow,
    mtrMid,
    mtrHigh,
]

toggleLight.addEventListener('click', (event) => {
    if (toggleState == false) {
        document.querySelector('body').style.color = "#000000";
        document.querySelector('body').style.background = "#ffffff";
        document.querySelector('#toggle').style.background = "#000000"
        toggleState = true;
    } else if (toggleState == true) {
        document.querySelector('body').style.color = "#ffffff";
        document.querySelector('body').style.background = "#000000";
        document.querySelector('#toggle').style.background = "#ffffff"
        toggleState = false;
    }
})

colorBackground.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".projectScreen"),
        document.querySelectorAll(".songScreen"),
        document.querySelectorAll(".mixerScreen"),
        document.querySelectorAll(".instrumentScreen")
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
        }
    }
    document.querySelector(".color1").innerHTML = selectedColor
})

row4th.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".sequenceFourth")
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
        }
    }
    document.querySelector(".color2").innerHTML = selectedColor
})

rowCursor.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".sequenceMarked"),
        document.querySelectorAll("#marker"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
        }
    }
    let borderedElements = document.querySelectorAll("#selected")
    borderedElements.forEach(element => {
        element.style.borderColor = selectedColor;
    });
    document.querySelector(".color3").innerHTML = selectedColor
})

rowPlay.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".sequencePlayhead"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
        }
    }
    document.querySelector(".color4").innerHTML = selectedColor
})

rowSelect.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".sequenceSelect"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
        }
    }
    document.querySelector(".color5").innerHTML = selectedColor
})

txtTitle.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".songTitle"),
        document.querySelectorAll(".projectTitle"),
        document.querySelectorAll(".mixerTitle"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = selectedColor;
        }
    }
    document.querySelector(".color6").innerHTML = selectedColor
})

txtParam.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll("#param"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = selectedColor;
        }
    }
    document.querySelector(".color7").innerHTML = selectedColor
})

txtValue.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll("#value"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = selectedColor;
        }
    }
    document.querySelector(".color8").innerHTML = selectedColor
})

txtCursor.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll("#txtCursor"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = selectedColor;
            affectedElements[i][j].style.borderColor = selectedColor;
        }
    }
    document.querySelector(".color9").innerHTML = selectedColor
})

txtEmpty.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll("#txtEmpty"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = selectedColor;
            
        }
    }
    document.querySelector(".color10").innerHTML = selectedColor
})

vizBG.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".meterBackground"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
            
        }
    }
    document.querySelector(".color11").innerHTML = selectedColor
})

vizLine.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".meterCenterLine"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
            
        }
    }
    document.querySelector(".color12").innerHTML = selectedColor
})

vizWave.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".meterWave"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
            
        }
    }
    document.querySelector(".color13").innerHTML = selectedColor
})

mtrBG.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".leftChannel"),
        document.querySelectorAll(".rightChannel"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
            
        }
    }
    document.querySelector(".color14").innerHTML = selectedColor
})

mtrLow.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".low"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
            
        }
    }
    document.querySelector(".color15").innerHTML = selectedColor
})

mtrMid.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".mid"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
            
        }
    }
    document.querySelector(".color16").innerHTML = selectedColor
})

mtrHigh.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll(".high"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
            
        }
    }
    document.querySelector(".color17").innerHTML = selectedColor
})

pageBG.addEventListener('input', (event) => {
    const selectedColor = event.target.value
    let affectedElements = [
        document.querySelectorAll("body"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = selectedColor;
            
        }
    }
    document.querySelector(".color18").innerHTML = selectedColor
})