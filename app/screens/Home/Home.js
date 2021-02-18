/**
 * Home Screen
 */
import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    TextInput,
    ImageBackground,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Icon, Text, Item, Input } from 'native-base';
import COLOR_CONST from '../../theme/ColorConstants';
import styles from './HomeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Scale from '../../utils/Scale';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroid: '',
            asteroidData: null,
        }
    }

    onPressSubmitButton = async () => {
        try {
            let response = await fetch(
                `https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroid}?api_key=lQvuM95cqVdzpzlpebKz7b2kiewdQiQXAOhYj5iK`
            );
            let json = await response.json();
            this.setState({ asteroidData: json }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return;
                }

                this.props.navigation.navigate('AsteroidListScreen', { asteroidData: this.state.asteroidData })
            })
            console.log('@@@ JSON ============', json);
        } catch (error) {
            console.log('@@@ Error ============', error);
            alert('Invalid Asteroid ID')
        }
    }

    onPressRandomButton = async () => {
        try {
            let response = await fetch(
                `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=lQvuM95cqVdzpzlpebKz7b2kiewdQiQXAOhYj5iK`
            );
            let json = await response.json();
            this.setState({ asteroidList: json.near_earth_objects }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return;
                }

                this.props.navigation.navigate('AsteroidDataListScreen', { asteroidList: this.state.asteroidList })
            })
            console.log('@@@ Random data JSON ============', json);
        } catch (error) {
            console.log('@@@ Error ============', error);
        }
    }

    renderForm = () => {
        return (
            <View style={styles.inputFormHeader}>
                <Animatable.Text animation='zoomInUp' style={styles.formText}>Search Asteroid Details</Animatable.Text>
                <Animatable.View animation='fadeInLeftBig'>
                    {
                        this.state.asteroid.trim().length === 0 ?
                            <Item disabled style={{ width: Scale(200), alignSelf: 'center', borderColor: 'white' }}>
                                <Input
                                    style={styles.inputStyle1}
                                    placeholder='Enter Asteroid ID'
                                    placeholderTextColor='white'
                                    value={this.state.asteroid}
                                    onChangeText={(value) => this.setState({ asteroid: value })} />
                            </Item> :
                            <Item style={{ width: Scale(200), alignSelf: 'center', borderColor: 'white', }}>
                                <Input
                                    style={styles.inputStyle}
                                    placeholder='Enter Asteroid ID'
                                    value={this.state.asteroid}
                                    onChangeText={(value) => this.setState({ asteroid: value })} />
                            </Item>
                    }
                </Animatable.View>
                {
                    this.state.asteroid.trim().length === 0 ?
                        <Button large disabled style={styles.submitButton}>
                            <Text style={styles.submit1}>Submit</Text>
                        </Button> :
                        <Button large iconLeft style={styles.submitButton} onPress={() => this.onPressSubmitButton()}>
                            
                            <Text>Submit</Text>
                        </Button>

                }
                <Animatable.View animation='slideInUp'>
                    <Button bordered success style={[styles.submitButton]} onPress={() => this.onPressRandomButton()}>
                        <Text style={[styles.submitText, { color: '#ffffff' }]} >Random Asteroid</Text>
                    </Button>
                </Animatable.View>
            </View>
        )
    }

    render() {
        return (
            
            <ImageBackground source={require('../../assets/images/Astroid5.jpeg')} style={[styles.container]}>
                <StatusBar barStyle="light-content" backgroundColor= "black" />
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        {this.renderForm()}
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        );
    }
};

export default Home;

