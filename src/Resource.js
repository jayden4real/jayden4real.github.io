class Resources {
    constructor() {
        // Everything we plan to download
        this.toLoad = {
            // Outdoor
            sky: "public/sprites/Sky.png",
            ground: "public/sprites/Ground.png",
            tree: "public/sprites/Tree.png",
            // Hero
            hero: "public/sprites/Hero-Sheet.png",
            shadow: "public/sprites/Shadow.png",
            rod: "public/sprites/Rod.png",
            // Cave
            exit: "public/sprites/Exit.png",
            cave: "public/sprites/Cave.png",
            caveGround: "public/sprites/Cave-Ground.png",
            // NPCs
            knight: "public/sprites/Knight-Sheet.png",
            // HUD
            textBox: "public/sprites/Text-Box.png",
            fontWhite: "public/sprites/Sprite-Font-White.png",
            portraits: "public/sprites/tempportraits-sheet.png",
        };

        // A bucket to keep all of our images
        this.images = {};

        // Load each image
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        })
    }
};

// Create one instance for the whole app to use
export const resources = new Resources();
