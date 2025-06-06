// WIDTHS
const DEFAULT_WIDTH = 5;
const width = new Map();

// Add overrides as needed
width.set("c", 4);
width.set("f", 5);
width.set("i", 1);
width.set("j", 4);
width.set("l", 3);
width.set("n", 4);
width.set("s", 6);

width.set("r", 4);
width.set("t", 4);
width.set("u", 4);
width.set("v", 4);
width.set("x", 4);
width.set("y", 4);
width.set("z", 4);

width.set("E", 4);
width.set("F", 4);
width.set("M", 7);
width.set("W", 7);

width.set(" ", 3);
width.set("'", 1);
width.set("!", 1);

export const getCharacterWidth = char => {
    return width.get(char) ?? DEFAULT_WIDTH;
}


// FRAMES

const frameMap = new Map();
[
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789 __",
    ".!-,?'"
].join("").split("").forEach((char, index) => {
    frameMap.set(char, index)
})

export const getCharacterFrame = (char) => {
    return frameMap.get(char) ?? 0;
}