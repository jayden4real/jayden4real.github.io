import { events } from "../Events.js";
import { gridCells } from "../helpers/grid.js";
import { Exit } from "../objects/Exit/Exit.js";
import { Hero } from "../objects/Hero/Hero.js";
import { Level } from "../objects/Level/Level.js";
import { Npc } from "../objects/NPC/Npc.js";
import { Rod } from "../objects/Rod/Rod.js";
import { resources } from "../Resource.js";
import { Sprite } from "../Sprite.js";
import { Vector2 } from "../Vector2.js";
import { CaveLevel1 } from "./CaveLevel1.js";

const DEFAULT_HERO_POSITION = new Vector2(gridCells(6), gridCells(5))

export class OutdoorLevel1 extends Level {
    constructor(params={}) {
        super({});
        this.background = new Sprite({
            resource: resources.images.sky,
            frameSize: new Vector2(320, 180)
        });


        const groundSprite = new Sprite({
            resource: resources.images.ground,
            frameSize: new Vector2(320, 180)
        });
        this.addChild(groundSprite);
        
        const treeSprite1 = new Sprite({
            resource: resources.images.tree,
            frameSize: new Vector2(16, 32),
            position: new Vector2(48, 16)
        })
        this.addChild(treeSprite1)
        const treeSprite2 = new Sprite({
            resource: resources.images.tree,
            frameSize: new Vector2(16, 32),
            position: new Vector2(240, 16)
        })
        this.addChild(treeSprite2)
        
        const exit = new Exit(gridCells(4), gridCells(2))
        this.addChild(exit);
        
        this.heroStartPosition = params.heroPosition ?? DEFAULT_HERO_POSITION;
        const hero = new Hero(this.heroStartPosition.x, this.heroStartPosition.y)
        this.addChild(hero); 
        
        const rod = new Rod(gridCells(7), gridCells(6))
        this.addChild(rod);

        const npc = new Npc(gridCells(5), gridCells(5))
        this.addChild(npc);
        
        this.walls = new Set();

        this.walls.add(`48,32`); // tree
        this.walls.add(`240,32`); // tree
        this.walls.add(`80,16`); // barrier
        this.walls.add(`96,16`); // barrier
        this.walls.add(`112,16`); // barrier
        this.walls.add(`128,16`); // barrier
        this.walls.add(`144,16`); // barrier
        this.walls.add(`160,16`); // barrier
        this.walls.add(`176,16`); // barrier
        this.walls.add(`192,16`); // barrier
        this.walls.add(`208,16`); // barrier
        this.walls.add(`224,16`); // barrier
    }

    ready() {
        events.on("HERO_EXITS", this, () => {
            events.emit("CHANGE_LEVEL", new CaveLevel1({
                heroPosition: new Vector2(gridCells(2), gridCells(2))
            }))
        })
    }
}