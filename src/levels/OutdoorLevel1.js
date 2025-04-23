import { events } from "../Events.js";
import { gridCells } from "../helpers/grid.js";
import { Exit } from "../objects/Exit/Exit.js";
import { Hero } from "../objects/Hero/Hero.js";
import { Level } from "../objects/Level/Level.js";
import { Npc } from "../objects/NPC/Npc.js";
import { Rod } from "../objects/Rod/Rod.js";
import { resources } from "../Resource.js";
import { Sprite } from "../Sprite.js";
import { TALKED_TO_A, TALKED_TO_B } from "../StoryFlags.js";
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
        
        const rod = new Rod(gridCells(9), gridCells(5))
        this.addChild(rod);

        const npc1 = new Npc(gridCells(5), gridCells(3), {
            content: [
                {
                    string: "Be careful.",
                    requires: [TALKED_TO_A],
                },
                {
                    string: "You're not prepared for the caves.",
                    addsFlag: TALKED_TO_A
                }
            ],
            portraitFrame: 1
        })
        this.addChild(npc1);

        const npc2 = new Npc(gridCells(13), gridCells(3), {
            content: [
                {
                    string: "Items are still a work in progress.",
                    requires: [],
                    addsFlag: TALKED_TO_B
                }
            ],
            portraitFrame: 1
        })
        this.addChild(npc2);
        
        this.walls = new Set();

        this.walls.add(`48,32`); // tree
        this.walls.add(`240,32`); // tree
        this.walls.add(`48,16`); // top barrier left to right
        this.walls.add(`64,16`); // top barrier
        this.walls.add(`80,16`); // top barrier
        this.walls.add(`96,16`); // top barrier
        this.walls.add(`112,16`); // top barrier
        this.walls.add(`128,16`); // top barrier
        this.walls.add(`144,16`); // top barrier
        this.walls.add(`160,16`); // top barrier
        this.walls.add(`176,16`); // top barrier
        this.walls.add(`192,16`); // top barrier
        this.walls.add(`208,16`); // top barrier
        this.walls.add(`224,16`); // top barrier
        this.walls.add(`256,48`); // right barrier top to bottom
        this.walls.add(`256,64`); // right barrier
        this.walls.add(`256,80`); // right barrier
        this.walls.add(`256,96`); // right barrier
        this.walls.add(`240,112`); // bottom barrier right to left
        this.walls.add(`224,112`); // bottom barrier
        this.walls.add(`208,112`); // bottom barrier
        this.walls.add(`192,112`); // bottom barrier
        this.walls.add(`176,112`); // bottom barrier
        this.walls.add(`160,112`); // bottom barrier
        this.walls.add(`144,112`); // bottom barrier
        this.walls.add(`128,112`); // bottom barrier
        this.walls.add(`112,112`); // bottom barrier
        this.walls.add(`96,112`); // bottom barrier
        this.walls.add(`80,112`); // bottom barrier
        this.walls.add(`64,112`); // bottom barrier
        this.walls.add(`48,112`); // bottom barrier
        this.walls.add(`32,32`); // left barrier top to bottom
        this.walls.add(`32,48`); // left barrier 
        this.walls.add(`32,64`); // left barrier 
        this.walls.add(`32,80`); // left barrier 
        this.walls.add(`32,96`); // left barrier 
    }

    ready() {
        events.on("HERO_EXITS", this, () => {
            events.emit("CHANGE_LEVEL", new CaveLevel1({
                heroPosition: new Vector2(gridCells(2), gridCells(2))
            }))
        })
    }
}