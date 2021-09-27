let bg;
let bench;
let tree;
let slider;
let objects = []

function preload() {
    bg = loadImage('assets/bg.png')
    bench = loadImage('assets/bench.png');
    tree = loadImage('assets/tree.png');
}

function setup() {
    createCanvas(750, 750);

    slider = createSlider(0, 100, 75);
    slider.position(750, 250);
    slider.style('width', '120px');

    bench.resize(200, 0)
    tree.resize(150, 0)

    document.querySelectorAll('.menu > img')
        .forEach(el => el.addEventListener('click', e => {
            let object;

            if (el.src.includes('tree'))
                object = tree
            else if (el.src.includes('bench'))
                object = bench

            objects.push(new Draggable(object, 300, 300, object.width, object.height))
        }))
}

function draw() {
    background(bg)

    objects.forEach(object => {
        const v = slider.value();
        object.w = object.w * (v / 100);

        object.update();
        object.show();
    })
}

function mousePressed() {
    objects.forEach(object => object.pressed())
}

function mouseReleased() {
    objects.forEach(object => object.released())
}

function keyPressed() {
    if (key === 'x') save("screenshot.png");
}