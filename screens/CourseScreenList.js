import {View,Text,StyleSheet} from 'react-native';

export default function CourseScreenList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CourseScreen List </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:16,
    }
})