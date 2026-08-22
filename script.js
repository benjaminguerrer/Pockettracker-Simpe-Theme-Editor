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
const mtrBorder = document.getElementById('18');
const toggleLight = document.getElementById('toggle');
const exportButton = document.getElementById('export');
const importButton = document.getElementById('import');
const importFile = document.getElementById('importFile')
let toggleState = false;

document.querySelector('#name').value = "";

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
    mtrBorder
]

const picker1 = new ColorPicker(colorBackground, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker2 = new ColorPicker(row4th, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker3 = new ColorPicker(rowCursor, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker4 = new ColorPicker(rowPlay, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker5 = new ColorPicker(rowSelect, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker6 = new ColorPicker(txtTitle, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker7 = new ColorPicker(txtParam, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker8 = new ColorPicker(txtValue, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker9 = new ColorPicker(txtCursor, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker10 = new ColorPicker(txtEmpty, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker11 = new ColorPicker(vizBG, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker12 = new ColorPicker(vizLine, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker13 = new ColorPicker(vizWave, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker14 = new ColorPicker(mtrBG, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker15 = new ColorPicker(mtrLow, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const picker16 = new ColorPicker(mtrMid, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})
const picker17 = new ColorPicker(mtrHigh, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})
const picker18 = new ColorPicker(mtrBorder, {
  submitMode: 'instant',
  enableAlpha: false,
  enableEyedropper: true,
  dialogPlacement: 'bottom',
  formats: ['hex', 'rgb', 'hsv', 'hsl', 'oklch']
})

const pickerArr = [
    picker1,
    picker2,
    picker3,
    picker4,
    picker5,
    picker6,
    picker7,
    picker8,
    picker9,
    picker10,
    picker11,
    picker12,
    picker13,
    picker14,
    picker15,
    picker16,
    picker17,
    picker18,
]

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
picker18.setColor('#555555');


toggleLight.addEventListener('click', (event) => {
    if (toggleState == false) {
        document.querySelector('body').style.color = "#000000";
        document.querySelector('body').style.background = "#ffffff";
        document.querySelector('#toggle').style.background = "#000000";
        document.querySelector('#toggle').style.color = "#ffffff";
        document.querySelector('#name').style.background = "#ffffff";
        document.querySelector('#name').style.color = "#000000";
        document.querySelector('#name').style.borderColor = "#000000";
        document.querySelector('#name').classList.add("custom-placeholder");
        document.querySelector('#export').style.color = "#000000";
        document.querySelector('#import').style.color = "#000000";
        document.documentElement.dataset.cpTheme = "light";
        document.documentElement.dataset.bsTheme = "light";
        toggleState = true;
    } else if (toggleState == true) {
        document.querySelector('body').style.color = "#ffffff";
        document.querySelector('body').style.background = "#000000";
        document.querySelector('#toggle').style.background = "#ffffff";
        document.querySelector('#toggle').style.color = "#000000";
        document.querySelector('#name').style.background = "#000000";
        document.querySelector('#name').style.color = "#ffffff";
        document.querySelector('#name').style.borderColor = "#ffffff";
        document.querySelector('#name').classList.remove("custom-placeholder");
        document.querySelector('#export').style.color = "#ffffff";
        document.querySelector('#import').style.color = "#ffffff";
        document.documentElement.dataset.cpTheme = "dark";
        document.documentElement.dataset.bsTheme = "dark";
        toggleState = false;
    }
})



function setColorBackground(color) {
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

function setMtrBorder(color) {
    let affectedElements = [
        document.querySelectorAll("#meterBorder")
    ]
    for (let i = 0; i < affectedElements.length; i++) {
        for (let j = 0; j < affectedElements[i].length; j++){
            affectedElements[i][j].style.borderColor = color;
            
        }
    }
    document.querySelector(".color18").innerHTML = color;
}

function setSwatches() {
    const swatches = [
        picker1.color.string('hex'),
        picker2.color.string('hex'),
        picker3.color.string('hex'),
        picker4.color.string('hex'),
        picker5.color.string('hex'),
        picker6.color.string('hex'),
        picker7.color.string('hex'),
        picker8.color.string('hex'),
        picker9.color.string('hex'),
        picker10.color.string('hex'),
        picker11.color.string('hex'),
        picker12.color.string('hex'),
        picker13.color.string('hex'),
        picker14.color.string('hex'),
        picker15.color.string('hex'),
        picker16.color.string('hex'),
        picker17.color.string('hex'),
        picker18.color.string('hex'),
    ]
    for (let i = 0; i < pickerArr.length; i++) {
        pickerArr[i].setSwatches(swatches);
    }
}

setSwatches();


setColorBackground(picker1.color.string('hex'));
picker1.on('pick', (event) => {
    setColorBackground(event);
    setSwatches();
})

setRow4th(picker2.color.string('hex'))
picker2.on('pick', (event) => {
    setRow4th(event);
    setSwatches();
})

setRowCursor(picker3.color.string('hex'))
picker3.on('pick', (event) => {
    setRowCursor(event);
    setSwatches();
})

setRowPlay(picker4.color.string('hex'))
picker4.on('pick', (event) => {
    setRowPlay(event)
    setSwatches();
})

setRowSelect(picker5.color.string('hex'))
picker5.on('pick', (event) => {
    setRowSelect(event);
    setSwatches();
})

setTxtTitle(picker6.color.string('hex'))
picker6.on('pick', (event) => {
    setTxtTitle(event);
    setSwatches();
})

setTxtParam(picker7.color.string('hex'))
picker7.on('pick', (event) => {
   setTxtParam(event);
   setSwatches();
})

setTxtValue(picker8.color.string('hex'))
picker8.on('pick', (event) => {
    setTxtValue(event);
    setSwatches();
})

setTxtCursor(picker9.color.string('hex'))
picker9.on('pick', (event) => {
    setTxtCursor(event);
    setSwatches();
})

setTxtEmpty(picker10.color.string('hex'))
picker10.on('pick', (event) => {
    setTxtEmpty(event);
    setSwatches();
})

setVizBg(picker11.color.string('hex'))
picker11.on('pick', (event) => {
    setVizBg(event);
    setSwatches();
})

setVizLine(picker12.color.string('hex'))
picker12.on('pick', (event) => {
    setVizLine(event);
    setSwatches();
})

setVizWave(picker13.color.string('hex'))
picker13.on('pick', (event) => {
    setVizWave(event);
    setSwatches();
})

setMtrBg(picker14.color.string('hex'))
picker14.on('pick', (event) => {
    setMtrBg(event);
    setSwatches();
})

setMtrLow(picker15.color.string('hex'))
picker15.on('pick', (event) => {
    setMtrLow(event);
    setSwatches();
})

setMtrMid(picker16.color.string('hex'))
picker16.on('pick', (event) => {
    setMtrMid(event);
    setSwatches();
})

setMtrHigh(picker17.color.string('hex'))
picker17.on('pick', (event) => {
    setMtrHigh(event);
    setSwatches();
})

setMtrBorder(picker18.color.string('hex'))
picker18.on('pick', (event) => {
    setMtrBorder(event);
    setSwatches();
})

function hexToArgb32(hex) {
    hex = hex.replace('#', '');

    if (hex.length === 6) {
        hex = 'FF' + hex;
    }

    return parseInt(hex, 16);
}

function argb32ToHex(argb) {
    // Convert to unsigned 32-bit integer
    argb = Number(argb) >>> 0;

    // Extract RGB, ignoring alpha
    const rgb = argb & 0x00FFFFFF;

    return '#' + rgb.toString(16).padStart(6, '0').toUpperCase();
}

function exportToJSON() {
    const name = document.getElementById('name').value || "Default";

    const userData = {
        name: name, 
        background: hexToArgb32(picker1.color.string('hex')),
        rowEvery4th: hexToArgb32(picker2.color.string('hex')),
        rowCursor: hexToArgb32(picker3.color.string('hex')),
        rowPlayback: hexToArgb32(picker4.color.string('hex')),
        rowSelection: hexToArgb32(picker5.color.string('hex')),
        textTitle: hexToArgb32(picker6.color.string('hex')),
        textParam: hexToArgb32(picker7.color.string('hex')),
        textValue: hexToArgb32(picker8.color.string('hex')),
        textCursor: hexToArgb32(picker9.color.string('hex')),
        textEmpty: hexToArgb32(picker10.color.string('hex')),
        vizBackground: hexToArgb32(picker11.color.string('hex')),
        vizCenterLine: hexToArgb32(picker12.color.string('hex')),
        vizWave: hexToArgb32(picker13.color.string('hex')),
        meterBackground: hexToArgb32(picker14.color.string('hex')),
        meterLow: hexToArgb32(picker15.color.string('hex')),
        meterMid: hexToArgb32(picker16.color.string('hex')),
        meterHigh: hexToArgb32(picker17.color.string('hex')),
        meterBorder: hexToArgb32(picker18.color.string('hex')),
    };

    const jsonString = JSON.stringify(userData, null, 4);
    const blob = new Blob([jsonString], {type: "application/json"});
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.ptt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

exportButton.addEventListener('click', (event) => {
    exportToJSON();
})

function importFromJSON(data) {
    picker1.setColor(argb32ToHex(data.background));
    picker2.setColor(argb32ToHex(data.rowEvery4th));
    picker3.setColor(argb32ToHex(data.rowCursor));
    picker4.setColor(argb32ToHex(data.rowPlayback));
    picker5.setColor(argb32ToHex(data.rowSelection));

    picker6.setColor(argb32ToHex(data.textTitle));
    picker7.setColor(argb32ToHex(data.textParam));
    picker8.setColor(argb32ToHex(data.textValue));
    picker9.setColor(argb32ToHex(data.textCursor));
    picker10.setColor(argb32ToHex(data.textEmpty));

    picker11.setColor(argb32ToHex(data.vizBackground));
    picker12.setColor(argb32ToHex(data.vizCenterLine));
    picker13.setColor(argb32ToHex(data.vizWave));

    picker14.setColor(argb32ToHex(data.meterBackground));
    picker15.setColor(argb32ToHex(data.meterLow));
    picker16.setColor(argb32ToHex(data.meterMid));
    picker17.setColor(argb32ToHex(data.meterHigh));
    picker18.setColor(argb32ToHex(data.meterBorder));

    document.getElementById('name').value = data.name || "";
}

importButton.addEventListener('click', () => {
    importFile.click();
})

importFile.addEventListener('change', async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
        const text = await file.text();
        const data = JSON.parse(text);

        importFromJSON(data);

    } catch (error) {
        console.error("Failed to import .ptt file:", error);
        alert("The selected file is not a valid .ptt file.");
    }

    // Allows selecting the same file again
    event.target.value = "";
});