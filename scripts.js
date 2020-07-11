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

drawPyramid(document.getElementById('pyramid'), 5)
