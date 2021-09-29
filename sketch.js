let bg;
let table;
let tree;
let slider;
let objects = []

function preload() {
    bg = loadImage('assets/bg.png')

    table = loadImage('assets/elements/picknicktafel.png');
    tree = loadImage('assets/elements/Boom.png');
}

function setup() {
    createCanvas(750, 750);

    // slider for scale
    slider = createSlider(0, 100, 100);
    slider.position(750, 250);
    slider.style('width', '120px');

    document.querySelectorAll('.menu > img')
        .forEach(el => el.addEventListener('click', e => {
            let object;

            if (el.src.includes('Boom'))
                object = tree
            else if (el.src.includes('picknicktafel'))
                object = table

            object.resize(200, 0)
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
