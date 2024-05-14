import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Pressable,Text } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title:"Welcome Home",
            headerStyle:{
              backgroundColor:"#6a51ae",
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
              fontWeight:"bold"
            },
            headerRight:() => (
              <Pressable onPress={()=>alert("Menu button pressed!")}>
                <Text style={{color:"#fff",fontSize:16}}>Menu</Text>
              </Pressable>
            )
          }}
          />
        <Stack.Screen 
          name="About" 
          component={AboutScreen}
          initialParams={{
            name:"Guest"
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;