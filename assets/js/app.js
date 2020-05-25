window.addEventListener('load', start);

function start() {
  let = boxPreview = document.querySelector('.box-preview');

  let redRange = document.querySelector('#red-range');
  let blueRange = document.querySelector('#blue-range');
  let greenRange = document.querySelector('#green-range');

  addEvnt(redRange);
  addEvnt(blueRange);
  addEvnt(greenRange);

  let redOutput = document.querySelector('#red-output');
  let greenOutput = document.querySelector('#green-output');
  let blueOutput = document.querySelector('#blue-output');

  redOutput.value = redRange.value;
  blueOutput.value = blueRange.value;
  greenOutput.value = greenRange.value;

  let colorRgb = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
  boxPreview.style.background = colorRgb;

  let outputColor = document.querySelector('.output-color');
  outputColor.value = colorRgb;

  let btnCopy = document.querySelector('.button-copy');
  btnCopy.addEventListener('click', () => {
    let copy = outputColor;
    copy.select();
    copy.setSelectionRange(0, 1000);
    document.execCommand('copy');
    document.querySelector('.span-copy').innerHTML = 'Copied: ' + copy.value;
    console.log(copy.value);
  });
}

function addEvnt(range) {
  range.addEventListener('input', start);
}
