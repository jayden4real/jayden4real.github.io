import { Camera } from "../../Camera.js";
import { events } from "../../Events.js";
import { GameObject } from "../../GameObject.js";
import { Input } from "../../Input.js";
import { Inventory } from "../Inventory/Inventory.js";
import { SpriteTextString } from "../SpriteTextString/SpriteTextString.js";

export class Main extends GameObject {
    constructor() {
        super({});
        this.level = null;
        this.input = new Input();
        this.camera = new Camera();
    }

    ready() {

        const inventory = new Inventory();
        this.addChild(inventory);

        // Change Level handler
        events.on("CHANGE_LEVEL", this, newLevelInstance => {
            this.setLevel(newLevelInstance);
        })

        // Launch Text Box handler
        events.on("HERO_REQUESTS_ACTION", this, () => {

            const textbox = new SpriteTextString("Hello, friend!");
            this.addChild(textbox);
            events.emit("START_TEXT_BOX")

        })
    }

    setLevel(newLevelInstance) {
        if(this.level) {
            this.level.destroy()
        }
        this.level = newLevelInstance;
        this.addChild(this.level);
    }
    
    drawBackground(ctx) {
        this.level?.background.drawImage(ctx, 0, 0);
    }

    drawObjects(ctx) {
        this.children.forEach(child => {
            if (child.drawLayer !== "HUD") {
                child.draw(ctx, 0, 0)
            }
        })
    }

    drawForeground(ctx) {
        this.children.forEach(child => {
            if (child.drawLayer === "HUD") {
                child.draw(ctx, 0, 0)
            }
        })
    }

}