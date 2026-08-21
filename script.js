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
        toggleState = false;
    }
})



function setColorBackground(color) {
    console.log(color);
    let affectedElements = [
        document.querySelectorAll(".projectScreen"),
        document.querySelectorAll(".songScreen"),
        document.querySelectorAll(".mixerScreen"),
        document.querySelectorAll(".instrumentScreen")
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
        }
    }
    document.querySelector(".color1").innerHTML = color;
}

function setRow4th(color) {
    let affectedElements = [
        document.querySelectorAll(".sequenceFourth")
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
        }
    }
    document.querySelector(".color2").innerHTML = color;
}

function setRowCursor(color) {
    let affectedElements = [
        document.querySelectorAll(".sequenceMarked"),
        document.querySelectorAll("#marker"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
        }
    }
    let borderedElements = document.querySelectorAll("#selected")
    borderedElements.forEach(element => {
        element.style.borderColor = color;
    });
    document.querySelector(".color3").innerHTML = color;
}

function setRowPlay(color) {
    let affectedElements = [
        document.querySelectorAll(".sequencePlayhead"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
        }
    }
    document.querySelector(".color4").innerHTML = color;
}

function setRowSelect(color) {
     let affectedElements = [
        document.querySelectorAll(".sequenceSelect"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
        }
    }
    document.querySelector(".color5").innerHTML = color;
}

function setTxtTitle(color) {
    let affectedElements = [
        document.querySelectorAll(".songTitle"),
        document.querySelectorAll(".projectTitle"),
        document.querySelectorAll(".mixerTitle"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = color;
        }
    }
    document.querySelector(".color6").innerHTML = color;
}

function setTxtParam(color) {
    let affectedElements = [
        document.querySelectorAll("#param"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = color;
        }
    }
    document.querySelector(".color7").innerHTML = color;
}

function setTxtValue(color) {
    let affectedElements = [
        document.querySelectorAll("#value"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = color;
        }
    }
    document.querySelector(".color8").innerHTML = color;
}

function setTxtCursor(color) {
    let affectedElements = [
        document.querySelectorAll("#txtCursor"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = color;
            affectedElements[i][j].style.borderColor = color;
        }
    }
    document.querySelector(".color9").innerHTML = color;
}

function setTxtEmpty(color) {
    let affectedElements = [
        document.querySelectorAll("#txtEmpty"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.color = color;
            
        }
    }
    document.querySelector(".color10").innerHTML = color;
}

function setVizBg(color) {
    let affectedElements = [
        document.querySelectorAll(".meterBackground"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
            
        }
    }
    document.querySelector(".color11").innerHTML = color;
}

function setVizLine(color) {
    let affectedElements = [
        document.querySelectorAll(".meterCenterLine"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
            
        }
    }
    document.querySelector(".color12").innerHTML = color;
}

function setVizWave(color) {
    let affectedElements = [
        document.querySelectorAll(".meterWave"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
            
        }
    }
    document.querySelector(".color13").innerHTML = color;
}

function setMtrBg(color) {
    let affectedElements = [
        document.querySelectorAll(".leftChannel"),
        document.querySelectorAll(".rightChannel"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
            
        }
    }
    document.querySelector(".color14").innerHTML = color;
}

function setMtrLow(color) {
    let affectedElements = [
        document.querySelectorAll(".low"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
            
        }
    }
    document.querySelector(".color15").innerHTML = color;
}

function setMtrMid(color) {
    let affectedElements = [
        document.querySelectorAll(".mid"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
            
        }
    }
    document.querySelector(".color16").innerHTML = color;
}

function setMtrHigh(color) {
    let affectedElements = [
        document.querySelectorAll(".high"),
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.background = color;
            
        }
    }
    document.querySelector(".color17").innerHTML = color;
}

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

setColorBackground(picker1.color.string('hex'));
picker1.on('pick', (event) => {
    setColorBackground(event);
})

setRow4th(picker2.color.string('hex'))
picker2.on('pick', (event) => {
    setRow4th(event);
})

setRowCursor(picker3.color.string('hex'))
picker3.on('pick', (event) => {
    setRowCursor(event);
})

setRowPlay(picker4.color.string('hex'))
picker4.on('pick', (event) => {
    setRowPlay(event)
})

setRowSelect(picker5.color.string('hex'))
picker5.on('pick', (event) => {
    setRowSelect(event);
})

setTxtTitle(picker6.color.string('hex'))
picker6.on('pick', (event) => {
    setTxtTitle(event);
})

setTxtParam(picker7.color.string('hex'))
picker7.on('pick', (event) => {
   setTxtParam(event);
})

setTxtValue(picker8.color.string('hex'))
picker8.on('pick', (event) => {
    setTxtValue(event);
})

setTxtCursor(picker9.color.string('hex'))
picker9.on('pick', (event) => {
    setTxtCursor(event);
})

setTxtEmpty(picker10.color.string('hex'))
picker10.on('pick', (event) => {
    setTxtEmpty(event);
})

setVizBg(picker11.color.string('hex'))
picker11.on('pick', (event) => {
    setVizBg(event);
})

setVizLine(picker12.color.string('hex'))
picker12.on('pick', (event) => {
    setVizLine(event);
})

setVizWave(picker13.color.string('hex'))
picker13.on('pick', (event) => {
    setVizWave(event);
})

setMtrBg(picker14.color.string('hex'))
picker14.on('pick', (event) => {
    setMtrBg(event);
})

setMtrLow(picker15.color.string('hex'))
picker15.on('pick', (event) => {
    setMtrLow(event);
})

setMtrMid(picker16.color.string('hex'))
picker16.on('pick', (event) => {
    setMtrMid(event);
})

setMtrHigh(picker17.color.string('hex'))
picker17.on('pick', (event) => {
    setMtrHigh(event);
})