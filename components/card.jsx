import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from "react-native";


export const Card = ({ ImageFileLeft, ImageFileRight, text, balance, accountNumber}) => {
    return (
        <View style={[styles.card, styles.shadowStyle]}>
            <View style={styles.cardTop}>
                <Image
                    source={ImageFileLeft}>
                </Image>
                <Text style={{marginLeft:10, fontSize:12, fontWeight:'500'}}>
                    {text}
                </Text>
                <Image
                    style={{position:'absolute', top:0, right:0}}
                    source={ImageFileRight}>
                </Image>
            </View>
            { balance &&
            <Text style={styles.cardMid}>
                {balance}
            </Text>}
            { accountNumber &&
            <Text style={[styles.cardBottomText,{marginTop:6}]}>
                {accountNumber}
            </Text>}
            <View style={styles.cardBottom}>
                <Text style={styles.cardBottomText}>
                    **** 2124
                </Text>
                <Text style={styles.cardBottomText}>
                    06/25
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#ffffff',
        padding:16,
        width:'100%',
        height:118,
        marginTop:16,
        borderRadius:15,
    },
    cardTop:{
        alignItems:'center',
        width:'100%',
        flexDirection:'row'
    },
    cardMid:{
        marginTop:6,
        width:'100%',
        flexDirection:'row',
        fontSize:18,
        fontWeight:'600'
    },
    cardBottom:{
        marginTop:6,
        justifyContent: 'space-between',
        width:'100%',
        flexDirection:'row'
    },
    cardBottomText:{
        fontSize:14,
        fontWeight:'300',
        color: '#212121'
    },

    shadowStyle: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
            },
            android: {
                elevation: 8,
            },
            web: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
            },
        }),
    },
})
