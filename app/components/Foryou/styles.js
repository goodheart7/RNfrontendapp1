import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    burgermenu: {
        paddingLeft: 10, 
        paddingTop: 10, 
        flex: 1, 
        justifyContent: 'center', 
        backgroundColor: 'transparent'
    },
    title: {
        paddingTop: 10, 
        flex: 5, 
        justifyContent: 'center', 
        backgroundColor: 'transparent'
    },
    user: {
        paddingRight: 10, 
        paddingTop: 10, 
        flex: 1, 
        justifyContent: 'center', 
        backgroundColor: 'transparent'
    },
    usericon: {
        width: 45, 
        height: 45, 
        resizeMode: 'contain'
    },
    textmeal: {
        marginLeft: 20, 
        fontSize: 17, 
        color: '#888888'
    },
    textspinace: {
        marginLeft: 20, 
        marginTop: 5, 
        fontSize: 20, 
        color: '#888888'
    },
    imagenext: {
        marginTop: -7, 
        width: 15, 
        height: 15, 
        resizeMode: 'contain'
    },
    peoplemincal: {
        marginTop: 10, 
        paddingLeft: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        width: '85%'
    },
    textpeoplemincal: {
        fontSize: 10, 
        color: '#888888'
    },
    imagepeople: {
        width: 20, 
        height: 20, 
        resizeMode: 'contain'
    },
    imagemin: {
        width: 15, 
        height: 15, 
        resizeMode: 'contain'
    },
    imagecal: {
        width: 18, 
        height: 18, 
        resizeMode: 'contain'
    },
    newsfeed: {
        flex: 1, 
        paddingLeft: 20, 
        backgroundColor: '#FFFFFF'
    },
    textnewsfeed: {
        color: '#888888', 
        fontSize: 17
    },
    imagenewsitem1: {
        marginTop: -20, 
        marginLeft: -10, 
        width: 220, 
        height: 200, 
        resizeMode: 'contain'
    },
    description: {
        backgroundColor: '#EAEAEA', 
        paddingLeft: 25, 
        marginTop: -35, 
        flex: 1
    },
    textdescription: {
        color: '#888888', 
        fontSize: 10
    },
    imagenewsitem2: {
        marginTop: -25, 
        marginLeft: -40, 
        width: 215, 
        height: 195, 
        resizeMode: 'contain'
    },
    imagecircles: {
        width: 40, 
        height: 40, 
        resizeMode: 'contain'
    },
    progressbar: {
        backgroundColor: '#888888', 
        borderRadius: 5, 
        width: '95%', 
        height: 10
    },
    completeprogressbar: {
        borderRadius: 5, 
        width: '62.7%', 
        height: 10
    },
    textprogressbar: {
        marginTop: 10, 
        marginLeft: '50%', 
        color: '#888888', 
        fontSize: 10
    }
    
    
});