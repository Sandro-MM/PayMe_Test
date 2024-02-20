import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from "react-native";


export const CardCollectingFund = ({ ImageFileLeft, ImageFileRight}) => {
    return (
        <View style={[styles.card, styles.shadowStyle]}>
            <View style={styles.cardTop}>
                <Image
                    source={ImageFileLeft}>
                </Image>
                <View>
                    <Text style={{marginLeft:10, fontSize:12, fontWeight:'500'}}>
                        My Startup Donations
                    </Text>
                    <Text style={styles.cardDonations}>
                        Donations (50)
                    </Text>
                </View>

            </View>
            <Text style={styles.cardMid}>
                € 562.52/
                <Text style={styles.cardBottomText}>
                    €800.00
                </Text>
            </Text>
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
        marginTop:16,
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
    cardDonations:{
        marginLeft:10,
        fontSize:12,
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
