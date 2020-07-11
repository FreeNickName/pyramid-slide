function drawPyramid (node, height) {
    let numberOfBlocks = 2;
    for (let numberOfLevels = height; numberOfLevels > 0; numberOfLevels--) {
        createLevel(node, Array(numberOfLevels).join('\u00A0') + Array(++numberOfBlocks).join('#'));
    }
}

function createLevel (root, text) {
    const level = document.createElement('p')
    level.appendChild(document.createTextNode(text))
    root.appendChild(level)
}

window.onload = function () {
    const highControl = document.getElementById('high-control')
    const highValue = document.getElementById('high-value')
    highValue.textContent  = highControl.value
    highControl.addEventListener('change', highControlOnChange)
    let construction = document.getElementById('construction')
    const pyramid = document.getElementById('pyramid')

    drawPyramid(construction, parseInt(highControl.value))

    function highControlOnChange(e) {
        highValue.textContent   = e.target.value
        construction.remove()
        construction = document.createElement('div')
        pyramid.appendChild(construction)
        drawPyramid(construction, parseInt(e.target.value))
        //console.log(e.target.value)
    }
}