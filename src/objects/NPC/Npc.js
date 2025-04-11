import { GameObject } from "../../GameObject.js";
import { Vector2 } from "../../Vector2.js";
import { resources } from "../../Resource.js";
import { Sprite } from "../../Sprite.js"

export class Npc extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });

        // Opt into being solid
        this.isSolid = true;

        // Shadow under feet
        const shadow = new Sprite({
            resource: resources.images.shadow,
            frameSize: new Vector2(32, 32),
            position: new Vector2(-8, -19),
        })
        this.addChild(shadow);

        // Body Sprite
        const body = new Sprite({
            resource: resources.images.knight,
            frameSize: new Vector2(32, 32),
            hFrames: 2,
            vFrames: 1,
            position: new Vector2(-8, -20),
        })
        this.addChild(body);


    }
}