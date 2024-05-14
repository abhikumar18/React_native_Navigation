import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseListScreen from './screens/CourseScreenList';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition:"below-icon",
                tabBarShowLabel:true,
                tabBarActiveTintColor:"purple",
                tabBarInactiveTintColor:"red"
            }}>
                <Tab.Screen name="Course List" component={CourseListScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel:"My Profile",
                }}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}