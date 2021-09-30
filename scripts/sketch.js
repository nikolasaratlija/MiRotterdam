let bg;

let table;
let tree;

let slider;

let loadedImages = []
let canvasImages = []

function preload() {
    bg = loadImage('assets/bg.png')

    files.forEach(file => {
        const parts = file.split('\/')
        loadedImages[parts[parts.length - 1]] = loadImage(file)

        let image = document.createElement('img')
        image.src = file
        image.width = 100

        document.querySelector('.menu').appendChild(image)
    })
}

function setup() {
    createCanvas(750, 750);

    // slider for scale
    slider = createSlider(0, 100, 100);
    slider.position(750, 250);
    slider.style('width', '120px');

    document.querySelectorAll('.menu > img')
        .forEach(el => el.addEventListener('click', e => {
            const parts = e.target.src.split('\/')
            const search = parts[parts.length - 1]
            let object = loadedImages[search]

            object.resize(200, 0)
            canvasImages.push(new Draggable(object, 300, 300, object.width, object.height))
        }))
}

function draw() {
    background(bg)

    canvasImages.forEach(object => {
        const v = slider.value();
        object.w = object.w * (v / 100);

        object.update();
        object.show();
    })
}

function mousePressed() {
    canvasImages.forEach(object => object.pressed())
}

function mouseReleased() {
    canvasImages.forEach(object => object.released())
}

function keyPressed() {
    if (key === 'x') save("screenshot.png");
}
