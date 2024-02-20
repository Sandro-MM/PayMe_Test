import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from "react-native";
import HomeImage from '../assets/home.png';
import ActivityImage from '../assets/activity.png';
import ActionImage from '../assets/action.png';
import OfferImage from '../assets/offer.png';
import MoreImage from '../assets/more.png';
export const NavBar = () => {
    return (
        <View style={[styles.container, styles.shadowStyle]}>
            <View style={{alignItems:'center'}}>
               <Image
                   source={HomeImage}>
               </Image>
               <Text style={[styles.text, {color: '#14DC9C'}]}>Home</Text>
           </View>
            <View style={{alignItems:'center'}}>
               <Image
                   source={ActivityImage}>
               </Image>
               <Text style={styles.text}>Activities</Text>
           </View>
            <View style={{alignItems:'center'}}>
               <Image
                   source={ActionImage}>
               </Image>
                <Text style={styles.text}>Actions</Text>
           </View>
            <View style={{alignItems:'center'}}>
               <Image
                   source={OfferImage}>
               </Image>
                <Text style={styles.text}>Offers</Text>
           </View>
            <View style={{alignItems:'center'}}>
               <Image
                   source={MoreImage}>
               </Image>
               <Text style={styles.text}>More</Text>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        width:'100%',
        textAlign:"center",
        height:81,
        paddingTop:16,
        flexDirection:'row',
        paddingHorizontal:24,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        backgroundColor:'#ffffff',
        position:'absolute',
        bottom:0,
        left:0,
    },
    text:{
        fontSize:12,
        fontWeight:'500',
        color:'#7C7C7C'
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
