let bg;

let slider;

let loadedImages = []
let canvasImages = []

function preload() {
    // background for canvas
    bg = loadImage('assets/bg.png')

    // 1. iterate over all image filenames and load images into p5 canvas
    // 2. creates an <img> element for each image and inserts it into the menu
    files.forEach(file => {
        // populates `loadedImages` array with loaded p5 images
        const parts = file.split('\/')
        loadedImages[parts[parts.length - 1]] = loadImage(file)

        // creates <img> elements
        let image = document.createElement('img')
        image.src = file
        image.width = 100
        document.querySelector('.menu').appendChild(image)
    })
}

function setup() {
    createCanvas(750, 750);

    // slider for adjusting the scale of an element
    slider = createSlider(0, 100, 100);
    slider.position(750, 250);
    slider.style('width', '120px');

    // click event listener on each <img> in the menu.
    document.querySelectorAll('.menu > img')
        .forEach(el => el.addEventListener('click', e => {
            // looks at the src of the clicked <img>
            // finds a loaded image in `loadedImages` by key
            const imageSource = e.target.src.split('\/')
            const imageName = imageSource[imageSource.length - 1]
            let object = loadedImages[imageName]

            object.resize(200, 0)
            // push image into canvas
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
