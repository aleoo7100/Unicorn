import React, {useEffect, useState} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function MessageAlert({showAlert}) {
  const [translateY, setTranslateY] = useState(new Animated.Value(0));

  useEffect(() => {
    if (showAlert.active) {
      showMessage();
    } else {
      closeMessage();
    }
  }, [showAlert.active]);

  const showMessage = () => {
    Animated.timing(translateY, {
      toValue: 80,
      useNativeDriver: true,
    }).start();
  };
  const closeMessage = () => {
    Animated.timing(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{...styles.cont,transform: [{ translateY }]}}>
      <LinearGradient 
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}} 
        colors={['#fea0a8', '#ff7783']} 
        style={styles.linearGradient}
      >
          <Text style={{fontSize:16, fontFamily:"Muli-Bold", color: "#fff"}}>
            {showAlert.message}
          </Text>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    height: 100,
    top: -100,
    zIndex: 10,
    position: 'absolute',
  },
  linearGradient:{
    width: '100%',
    height: 100,
    paddingHorizontal: 24,
    paddingTop: 25,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});
