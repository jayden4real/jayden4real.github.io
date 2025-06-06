export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"

export class Input {
    constructor() {

        this.heldDirections = [];
        this.keys = {};
        this.lastKeys = {};

        document.addEventListener("keydown", (e) => {

            this.keys[e.code] = true;

            // Also check for dedicated direction list
            if(e.code === "ArrowUp" || e.code === "keyW") {
                this.onArrowPressed(UP);
            }
            if(e.code === "ArrowDown" || e.code === "keyS") {
                this.onArrowPressed(DOWN);
            }
            if(e.code === "ArrowLeft" || e.code === "keyA") {
                this.onArrowPressed(LEFT);
            }
            if(e.code === "ArrowRight" || e.code === "keyD") {
                this.onArrowPressed(RIGHT);
            }
        })

        document.addEventListener("keyup", (e) => {

            this.keys[e.code] = false;

            // Also check for dedicated direction list
            if(e.code === "ArrowUp" || e.code === "keyW") {
                this.onArrowReleased(UP);
            }
            if(e.code === "ArrowDown" || e.code === "keyS") {
                this.onArrowReleased(DOWN);
            }
            if(e.code === "ArrowLeft" || e.code === "keyA") {
                this.onArrowReleased(LEFT);
            }
            if(e.code === "ArrowRight" || e.code === "keyD") {
                this.onArrowReleased(RIGHT);
            }
        })
    }

    get direction() {
        return this.heldDirections[0];
    }

    update() {
        // Diff the keys on previous frame to know when new ones are pressed
        this.lastKeys = {...this.keys};
    }

    getActionJustPressed(keyCode) {
        let justPressed = false;
        if (this.keys[keyCode] && !this.lastKeys[keyCode]) {
            justPressed = true;
        }
        return justPressed;
    }

    onArrowPressed(direction) {
        // Add this arrow to the queue if it's new
        if(this.heldDirections.indexOf(direction) === -1) {
            this.heldDirections.unshift(direction);
        }
    }

    onArrowReleased(direction) {
        const index = this.heldDirections.indexOf(direction);
        if(index === -1) {
            return;
        }
        // Remove this key from the list
        this.heldDirections.splice(index, 1);
    }
}