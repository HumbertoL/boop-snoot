
const images = [
    { x: 1, y: 1, image: require('./snoots/1-1-001.jpg') },
    { x: 1, y: 2, image: require('./snoots/2-1-001.jpg') },
    { x: 1, y: 3, image: require('./snoots/3-1-001.jpg') },
    { x: 1, y: 4, image: require('./snoots/4-1-001.jpg') },
    { x: 2, y: 1, image: require('./snoots/1-2-001.jpg') },
    { x: 2, y: 2, image: require('./snoots/2-2-001.jpg') },
    { x: 2, y: 3, image: require('./snoots/3-2-001.jpg') },
    { x: 2, y: 4, image: require('./snoots/4-2-001.jpg') },
    { x: 3, y: 1, image: require('./snoots/1-3-001.jpg') },
    { x: 3, y: 2, image: require('./snoots/2-3-001.jpg') },
    { x: 3, y: 3, image: require('./snoots/3-3-001.jpg') },
    { x: 3, y: 4, image: require('./snoots/4-3-001.jpg') },
    { x: 4, y: 1, image: require('./snoots/1-4-001.jpg') },
    { x: 4, y: 2, image: require('./snoots/2-4-001.jpg') },
    { x: 4, y: 3, image: require('./snoots/3-4-001.jpg') },
    { x: 4, y: 4, image: require('./snoots/4-4-001.jpg') },
]

export const loadImageFromCoordinates = (x, y) => {
    const matches = images.filter(img => img.x === x && img.y === y)

    // TODO: handle multiple matches or no matches
    return matches[0].image;
}