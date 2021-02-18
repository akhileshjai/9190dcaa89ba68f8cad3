/**
 * Root Stack Screen
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';

import SplashScreen from '../Splash/SplashScreen';
import Home from '../Home/Home';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import AsteroidListScreen from '../AsteroidList/AsteroidList';
import AsteroidDataListScreen from '../AsteroidDataList/AsteroidList';
import AsteroidDetailScreen from '../AsteroidDetail/AsteroidDetail';
import { verticalScale } from '../../utils/Scale';

const RootStack = createStackNavigator();
const NewStack = createStackNavigator();



const RootStackScreen = (props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Increase Your Memory',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'black' },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="Home"
                component={Home}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: ' Get Asteroid Information ',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: "black" },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="AsteroidListScreen"
                component={AsteroidListScreen}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Name List',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: "black" },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="AsteroidDataListScreen"
                component={AsteroidDataListScreen}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Detail',
                    
                    headerTitleAlign: 'center',
                    headerTintColor: 'Black',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="AsteroidDetailScreen"
                component={AsteroidDetailScreen}
            />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;