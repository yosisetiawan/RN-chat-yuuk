import React, { Component } from 'react'
import { 
    View, 
    StyleSheet, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

class chatItem extends Component{
    constructor(props){
        super(props)
        this.clickChat = this.clickChat.bind(this)
    }

    clickChat(val){
        // console.log(val, 'INII')
        console.log(val, 'aaaa')
        // this.props.navigation.push('Chat')
    }

    render(){
        return(
            <TouchableOpacity style={styleChat.chatItemContainer} onPress={() => this.clickChat(this.props)}>
                <Image style={styleChat.avatarChat} source={require('./../../assets/images/benjamin-jurke-v6.jpg')}/>
                <View style={styleChat.chatDetail}>
                    <Text style={styleChat.chatName}>Mang Oleh</Text>
                    <Text style={styleChat.chatText}>Rasa nya seperti Iron mon</Text>
                </View>
                <Text style={styleChat.lastTime}>
                    20:50
                </Text>
            </TouchableOpacity>
        )
    }
}

const styleChat = StyleSheet.create({
    chatItemContainer:{
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
    },
    avatarChat:{
        borderRadius: 400/2,
        height: 55,
        width: 55,
    },
    chatDetail:{
        marginLeft: 15,
        width: 250,
        display: 'flex'
    },
    chatText:{
        fontFamily: 'Poopins-Regular',
        fontSize: 13,
    },
    chatName:{
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },
    lastTime:{
        fontFamily: 'Poopins-Regular',
        fontSize: 13
    }
})

export default chatItem