
const images = [
    { x: 1, y: 1, image: require('./snoots/1-1-001.jpg') },
    { x: 1, y: 2, image: require('./snoots/1-2-001.jpg') },
    { x: 1, y: 3, image: require('./snoots/1-3-001.jpg') },
    { x: 1, y: 4, image: require('./snoots/1-4-001.jpg') },
    { x: 1, y: 5, image: require('./snoots/1-5-001.jpg') },
    { x: 1, y: 6, image: require('./snoots/1-6-001.jpg') },
    { x: 1, y: 7, image: require('./snoots/1-7-001.jpg') },
    { x: 2, y: 1, image: require('./snoots/2-1-001.jpg') },
    { x: 2, y: 2, image: require('./snoots/2-2-001.jpg') },
    { x: 2, y: 3, image: require('./snoots/2-3-001.jpg') },
    { x: 2, y: 4, image: require('./snoots/2-4-001.jpg') },
    { x: 2, y: 5, image: require('./snoots/2-5-001.jpg') },
    { x: 2, y: 6, image: require('./snoots/2-6-001.jpg') },
    { x: 2, y: 7, image: require('./snoots/2-7-001.jpg') },
    { x: 3, y: 1, image: require('./snoots/3-1-001.jpg') },
    { x: 3, y: 2, image: require('./snoots/3-2-001.jpg') },
    { x: 3, y: 3, image: require('./snoots/3-3-001.jpg') },
    { x: 3, y: 4, image: require('./snoots/3-4-001.jpg') },
    { x: 3, y: 5, image: require('./snoots/3-5-001.jpg') },
    { x: 3, y: 6, image: require('./snoots/3-6-001.jpg') },
    { x: 3, y: 7, image: require('./snoots/3-7-001.jpg') },
    { x: 4, y: 1, image: require('./snoots/4-1-001.jpg') },
    { x: 4, y: 2, image: require('./snoots/4-2-001.jpg') },
    { x: 4, y: 3, image: require('./snoots/4-3-001.jpg') },
    { x: 4, y: 4, image: require('./snoots/4-4-001.jpg') },
    { x: 4, y: 5, image: require('./snoots/4-5-001.jpg') },
    { x: 4, y: 6, image: require('./snoots/4-6-001.jpg') },
    { x: 4, y: 7, image: require('./snoots/4-7-001.jpg') },
    { x: 5, y: 1, image: require('./snoots/5-1-001.jpg') },
    { x: 5, y: 2, image: require('./snoots/5-2-001.jpg') },
    { x: 5, y: 3, image: require('./snoots/5-3-001.jpg') },
    { x: 5, y: 4, image: require('./snoots/5-4-001.jpg') },
    { x: 5, y: 5, image: require('./snoots/5-5-001.jpg') },
    { x: 5, y: 6, image: require('./snoots/5-6-001.jpg') },
    { x: 5, y: 7, image: require('./snoots/5-7-001.jpg') },
    { x: 6, y: 1, image: require('./snoots/6-1-001.jpg') },
    { x: 6, y: 2, image: require('./snoots/6-2-001.jpg') },
    { x: 6, y: 3, image: require('./snoots/6-3-001.jpg') },
    { x: 6, y: 4, image: require('./snoots/6-4-001.jpg') },
    { x: 6, y: 5, image: require('./snoots/6-5-001.jpg') },
    { x: 6, y: 6, image: require('./snoots/6-6-001.jpg') },
    { x: 6, y: 7, image: require('./snoots/6-7-001.jpg') },
    { x: 7, y: 1, image: require('./snoots/7-1-001.jpg') },
    { x: 7, y: 2, image: require('./snoots/7-2-001.jpg') },
    { x: 7, y: 3, image: require('./snoots/7-3-001.jpg') },
    { x: 7, y: 4, image: require('./snoots/7-4-001.jpg') },
    { x: 7, y: 5, image: require('./snoots/7-5-001.jpg') },
    { x: 7, y: 6, image: require('./snoots/7-6-001.jpg') },
    { x: 7, y: 7, image: require('./snoots/7-7-001.jpg') },
]

// Goes through image array and finds an image with matching coordinates
export const loadImageFromCoordinates = (x, y) => {
    if(x < 1 || y < 1) {
        return null;
    }

    const matches = images.filter(img => img.x === x && img.y === y)

    // TODO: handle multiple matches or no matches
    return matches[0].image;
}

// Generates image import code. React Native requires imports to be static, so we have to 
// load each image individually ahead of time. 
const generateLoader = () => {
    for (var i = 1; i < 8; i++) {
        for (var j = 1; j < 8; j++) {
            console.log(`{   x: ${i},   y: ${j},       image: require('./snoots/${i}-${j}-001.jpg')},`)
        }
    }

}