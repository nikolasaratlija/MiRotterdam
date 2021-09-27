class Draggable {
    constructor(src, x, y, w, h) {
        this.src = src;
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.dragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    update() {
        if (this.dragging) {
            let newX = mouseX - this.offsetX;
            let newY = mouseY - this.offsetY;

            if (newX > 0 && newX < width - this.src.width)
                this.x = newX;

            if (newY > 0 && newY < height - this.src.height)
                this.y = newY;
        }
    }

    show() {
        image(this.src, this.x, this.y, this.w, this.h);
    }

    pressed() {
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            this.dragging = true;
            this.offsetX = mouseX - this.x;
            this.offsetY = mouseY - this.y;
        }
    }

    released() {
        this.dragging = false;
    }
}