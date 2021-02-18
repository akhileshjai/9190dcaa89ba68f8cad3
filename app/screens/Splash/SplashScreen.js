/**
 * Splash Screen
 */
import React , { useEffect } from 'react';
import { 
    View,
    Text, 
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './SplashScreenStyle';

const SplashScreen = ({navigation, route}) => {
    useEffect(() => {
        setTimeout( async() => {
           navigation.replace('Home')
        }, 5000);
      }, []);
    

    return (
        <ImageBackground source={require('../../assets/images/Astroid.png')} style={styles.container}>
            <Animatable.View useNativeDriver animation="zoomInDown" duraton="1500" style={styles.header}>
                <Text style={styles.testStyle}>Asteroid Project</Text>
            </Animatable.View>
        </ImageBackground>
    );
};

export default SplashScreen;

