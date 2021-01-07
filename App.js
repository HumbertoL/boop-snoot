import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { loadImageFromCoordinates } from './image-loader';

const CELLS = 7;

const getCell = (width, offset) => {
  const segmentWidth = width / CELLS;
  const cell = offset / segmentWidth;
  return Math.floor(cell) + 1;
}

const getXLocation = (event) => {
  const nativeEvent = event.nativeEvent;
  // Android/IOS use locationX. Web used offsetX
  return nativeEvent.locationX || nativeEvent.offsetX
}

const getYLocation = (event) => {
  // Android/IOS use locationX. Web used offsetX
  const nativeEvent = event.nativeEvent;
  return nativeEvent.locationY || nativeEvent.offsetY
}

export default function App() {
  const [isSnootBooped, setIsSnootBooped] = useState(false);
  const [imageWidth, setImageWidth] = useState(400);
  const [imageHeight, setImageHeight] = useState(400);
  const [coordinates, setCoordinates] = useState([0, 0]);

  const handlePress = (event) => {
    // Get pixels offsets from top left corner
    const offsetX = getXLocation(event);
    const offsetY = getYLocation(event);
    // const width = event.currentTarget.clientWidth;
    // const height = event.currentTarget.clientHeight;

    // Use pixel count to decide which cell the user touched
    const x = getCell(imageWidth, offsetX);
    const y = getCell(imageHeight, offsetY);

    // Save coordinates
    setCoordinates([x, y]);
    setIsSnootBooped(true);
  }

  const setDimensions = (event) => {
    // Save image height and width. This method is the most compatible with multiple platforms
    const layout = event.nativeEvent.layout;
    const { width, height } = layout;
    setImageWidth(width);
    setImageHeight(height);
  }

  const instructions = isSnootBooped ? "Touch a different spot to boop a different snoot" : "Touch a random spot in the square to boop a snoot"

  return (
    <View style={styles.container}>
      <Image resizeMethod="scale" style={styles.logo} source={require('./assets/boop.png')} />
      <TouchableHighlight onPress={handlePress} onLayout={setDimensions} >
        <Image style={styles.imagestyle} source={loadImageFromCoordinates(coordinates[0], coordinates[1])} />
      </TouchableHighlight>
      <Text style={styles.textStyle}>{instructions}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    borderWidth: 3,
    borderColor: 'black',
    width: 400,
    height: 400
  },
  logo: {
    paddingBottom: 12,
    height: 100,
    width: 350,
  },
  textStyle: {
    paddingTop: 16
  }
});
