window.onload = init

function init () {
    const heightControl = document.getElementById('height-control')
    const heightValue = document.getElementById('height-value')
    const brickSymbol = document.getElementById('brick-symbol')
    heightControl.addEventListener('change', heightChange)
    brickSymbol.addEventListener('change', brickChange)
    let construction = document.getElementById('construction')
    const pyramid = document.getElementById('pyramid')

    buildPyramid(construction, brickSymbol.value, parseInt(heightControl.value))

    function heightChange(e) {
        rebuildPyramid(brickSymbol.value, parseInt(e.target.value))
    }

    function brickChange(e) {
        rebuildPyramid(e.target.value, parseInt(heightControl.value))
    }

    function rebuildPyramid(brick, height) {
        construction.remove()
        construction = document.createElement('div')
        buildPyramid(construction, brick, height)
        pyramid.appendChild(construction)
    }

    function buildPyramid (construction, brick, height) {
        setHeight(heightValue, height)
        return drawPyramid(construction, brick, height, addTextLine)
    }
}

function setHeight(node, height) {
    node.textContent = height
}

function drawPyramid (construction, brick, height, tool) {
    let numberOfBlocks = 2;
    for (let numberOfLevels = height; numberOfLevels > 0; numberOfLevels--) {
        tool(construction, 'p', Array(numberOfLevels).join('\u00A0') + Array(++numberOfBlocks).join(brick));
    }
}

function addTextLine (parent, type, text) {
    const level = document.createElement(type)
    level.appendChild(document.createTextNode(text))
    parent.appendChild(level)
}

function printToConsole(x, x, text) {
    console.log(text)
}