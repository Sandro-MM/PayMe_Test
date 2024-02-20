import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from "react-native";


export const Account = ({ ImageFileLeft, ImageFileRight, text, balance, accountNumber}) => {
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
            { accountNumber &&
            <Text style={[styles.MidTextText,{marginTop:6}]}>
                {accountNumber}
            </Text>}
            <Text style={styles.cardFunds}>
                55.60
                <Text style={{fontSize:12, marginLeft:2}}>
                    EUR
                </Text>
            </Text>
            <View style={styles.cardBottom}>
                <Text style={styles.cardBottomText}>
                    ₾ 136.22
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
    cardBottom:{
        marginTop:6,
        justifyContent: 'flex-end',
        width:'100%',
        flexDirection:'row'
    },
    MidTextText:{
        fontSize:14,
        fontWeight:'300',
        color: '#212121'
    },
    cardBottomText:{
        fontSize:16,
        fontWeight:'300',
        color: '#212121'
    },
    cardFunds:{
        position:'absolute',
        top:28,
        right:16,
        fontSize:24,
        fontWeight:'500',
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
