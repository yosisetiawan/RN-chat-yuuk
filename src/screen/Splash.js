import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Splash extends Component{
    constructor(props){
        super(props)
        setTimeout(() => {
            this.props.navigation.push('Home')
        }, 3500)
    }

    render(){
        return(
            <View style={styles.splashMainContainer}>
                <Text style={styles.splashMainText}>Chat Yuuk</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    splashMainContainer:{
        flex: 1,
        display: 'flex',
        backgroundColor: '#0E9AA7',
        justifyContent: 'center'
    },
    splashMainText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 36,
        color: '#ffffff'
    }
})

export default Splash;