import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput,Image, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native'
import ChatItem from './../components/home/chatItem'

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.mainView}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Hello Yosi Setiawan</Text>
                </View>
                <View style={styles.mainChat}>
                   <TextInput style={styles.inputText} placeholder="Cari Nama"></TextInput>
                    <ScrollView style={styles.containerListChat} showsVerticalScrollIndicator={false}>
                        <ChatItem/>
                        <ChatItem/>
                        <ChatItem/>
                        <ChatItem/>
                        <ChatItem/>
                        <ChatItem/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        backgroundColor: '#0E9AA7',
        flexDirection: 'column'
    },
    header:{
        height: '40%',
        padding: 20,
    },
    headerTitle:{
        fontFamily: 'Poppins-Bold',
        color: '#ffffff',
        fontSize: 24
    },  
    mainChat:{
        height: '60%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#ffffff',
        padding: 30,
        paddingHorizontal: 15,
        paddingVertical: 18
    },
    inputText:{
        backgroundColor: '#C4C4C4', 
        borderRadius: 90,
        paddingHorizontal: 20
    },
    avatarChat:{
        borderRadius: 400/2,
        height: 55,
        width: 55,
    },
    chatItem:{
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
    },
    chatName:{
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },
    containerListChat:{
        marginTop: 20,
    },
    chatDetail:{
        marginLeft: 15,
        display: 'flex'
    },
    chatText:{
        fontFamily: 'Poopins-Regular',
        fontSize: 13,
    }
})

export default Home