import * as React from 'react'
import { View, Text } from 'react-native'
import { Header } from '@rneui/themed';
const Chat : React.FC =() => {
    return (
        <View>
             <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
            <Text>Screen1</Text>
        </View>
    )
}

export default Chat