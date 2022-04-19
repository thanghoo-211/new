import * as React from 'react'
import {
    Text,
    View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inside from './Inside';
import Outside from './Outside';
import Chat from './Chat';
import Home from './Home';
import myTheme from '../core/theme';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC =() => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
          <Tab.Screen  
          options={{ tabBarIcon: ({color, size}) => (<Ionicons name="home-outline" color={color} size={size}/>)  }}
          name="Home" component={Home} />
          <Tab.Screen
          options={{ tabBarIcon: ({color, size}) => (<Ionicons name="chatbubbles-outline" color={color} size={size}/>)  }}
           name="Chat" component={Chat} />
          <Tab.Screen
          options={{ tabBarIcon: ({color, size}) => (<Ionicons name="thermometer-outline" color={color} size={size}/>)  }}
          name="In" component={Inside} />
          <Tab.Screen 
          options={{ tabBarIcon: ({color, size}) => (<Ionicons name="earth-outline" color={color} size={size}/>)  }}
          name="Out" component={Outside} />
        </Tab.Navigator>
    
    )
}

export default HomeScreen