import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    header: {
        height: 50,
    },
    footer: {
        height: 60,
        backgroundColor: '#FFFFFF'
    },
    line: {
        borderWidth: 1,
        borderColor: '#D5D5D5',
    },
    icon: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    foryou_icon: {
        width: 40, 
        height: 40, 
        resizeMode: 'contain'
    },
    mealplan_icon: {
        width: 40, 
        height: 40, 
        resizeMode: 'contain'
    },
    grocerylist_icon: {
        width: 50, 
        height: 50, 
        resizeMode: 'contain'
    },
    chat_icon: {
        width: 40, 
        height: 40, 
        resizeMode: 'contain'
    },
    selectedicon: {
        fontSize: 50, 
        color: '#444444'
    },
    extraicon: {
        fontSize: 50, 
        color: '#A2A2A2'
    },
    selectedtext: {
        color: '#444444'
    },
    textcolor: {
        color: '#A2A2A2'
    }
    
});