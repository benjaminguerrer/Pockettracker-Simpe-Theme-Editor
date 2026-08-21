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

const picker1 = new ColorPicker(colorBackground, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker2 = new ColorPicker(row4th, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker3 = new ColorPicker(rowCursor, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker4 = new ColorPicker(rowPlay, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker5 = new ColorPicker(rowSelect, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker6 = new ColorPicker(txtTitle, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker7 = new ColorPicker(txtParam, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker8 = new ColorPicker(txtValue, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker9 = new ColorPicker(txtCursor, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker10 = new ColorPicker(txtEmpty, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker11 = new ColorPicker(vizBG, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker12 = new ColorPicker(vizLine, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker13 = new ColorPicker(vizWave, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker14 = new ColorPicker(mtrBG, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker15 = new ColorPicker(mtrLow, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

const picker16 = new ColorPicker(mtrMid, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})
const picker17 = new ColorPicker(mtrHigh, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
})

picker1.setColor('#0A0A0A');
picker2.setColor('#151515');
picker3.setColor('#333333');
picker4.setColor('#001144');
picker5.setColor('#002266');
picker6.setColor('#88ceff');
picker7.setColor('#4488AA');
picker8.setColor('#AADDFF');
picker9.setColor('#00FFFF');
picker10.setColor('#224466');
picker11.setColor('#0a0a0a');
picker12.setColor('#112244');
picker13.setColor('#0088ff');
picker14.setColor('#1a1a1a');
picker15.setColor('#0088CC');
picker16.setColor('#0044cc');
picker17.setColor('#8800cc');



toggleLight.addEventListener('click', (event) => {
    if (toggleState == false) {
        document.querySelector('body').style.color = "#000000";
        document.querySelector('body').style.background = "#ffffff";
        document.querySelector('#toggle').style.background = "#000000"
        document.documentElement.dataset.cpTheme = "light";
        document.documentElement.dataset.bsTheme = "light";
        toggleState = true;
    } else if (toggleState == true) {
        document.querySelector('body').style.color = "#ffffff";
        document.querySelector('body').style.background = "#000000";
        document.querySelector('#toggle').style.background = "#ffffff"
        document.documentElement.dataset.cpTheme = "dark";
        document.documentElement.dataset.bsTheme = "dark";
        toggleState = true;
        toggleState = false;
    }
})

picker1.on('pick', (event) => {
    const selectedColor = event
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

picker2.on('pick', (event) => {
    const selectedColor = event
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

picker3.on('pick', (event) => {
    const selectedColor = event
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

picker4.on('pick', (event) => {
    const selectedColor = event
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

picker5.on('pick', (event) => {
    const selectedColor = event
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

picker6.on('pick', (event) => {
    const selectedColor = event
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

picker7.on('pick', (event) => {
    const selectedColor = event
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

picker8.on('pick', (event) => {
    const selectedColor = event
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

picker9.on('pick', (event) => {
    const selectedColor = event
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

picker10.on('pick', (event) => {
    const selectedColor = event
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

picker11.on('pick', (event) => {
    const selectedColor = event
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

picker12.on('pick', (event) => {
    const selectedColor = event
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

picker13.on('pick', (event) => {
    const selectedColor = event
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

picker14.on('pick', (event) => {
    const selectedColor = event
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

picker15.on('pick', (event) => {
    const selectedColor = event
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

picker16.on('pick', (event) => {
    const selectedColor = event
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

picker17.on('pick', (event) => {
    const selectedColor = event
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