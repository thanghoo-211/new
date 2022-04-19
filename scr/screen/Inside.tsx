import * as React from 'react'
import { View, Text } from 'react-native'
import { Header, Button, ButtonGroup, withTheme } from '@rneui/themed';


import Icon from 'react-native-vector-icons/FontAwesome';
const Inside : React.FC =() => {
    return (
        <View>
            <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
            <Button
              title={'React Native Elements'}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
        </View>
    )
}

export default Inside