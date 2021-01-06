import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { loadImageFromCoordinates } from './image-loader';

const CELLS = 4;

const getCell = (width, offset) => {
  const segmentWidth = width / CELLS;
  const cell = offset / segmentWidth;
  return Math.floor(cell) + 1;
}

const getXLocation = (event) => {
  const nativeEvent = event.nativeEvent;
  return nativeEvent.locationX || nativeEvent.offsetX
}

const getYLocation = (event) => {
  const nativeEvent = event.nativeEvent;
  return nativeEvent.locationY || nativeEvent.offsetY
}

export default function App() {
  const [imageWidth, setImageWidth] = useState(500);
  const [imageHeight, setImageHeight] = useState(500);
  const [coordinates, setCoordinates] = useState([1, 1]);

  const handlePress = (event) => {
    // TODO
    const offsetX = getXLocation(event);
    const offsetY = getYLocation(event);
    // const width = event.currentTarget.clientWidth;
    // const height = event.currentTarget.clientHeight;
    const x = getCell(imageWidth, offsetX);
    const y = getCell(imageHeight, offsetY);
    setCoordinates([x, y])
  }

  const setDimensions = (event) => {
    const layout = event.nativeEvent.layout;
    const { width, height } = layout;
    setImageWidth(width);
    setImageHeight(height)
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={handlePress} onLayout={setDimensions} >
        <Image style={styles.imagestyle} source={loadImageFromCoordinates(coordinates[0], coordinates[1])} />
      </TouchableHighlight>
      <Text>Touch any spot in the picture</Text>
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
    width: 500,
    height: 500
  }
});
