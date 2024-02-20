import {Animated, Image, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import Frame45Image from './assets/Frame45.png';
import Frame47Image from './assets/Frame47.png';
import GiftImage from './assets/gift.png';
import XImage from './assets/x.png';
import GEImage from './assets/georgia.png';
import VisaImage from './assets/visa.png';
import MasterCardImage from './assets/masterCard.png';
import EUImage from './assets/european-union.png';
import RocketImage from './assets/roket.png';
import BOGIMage from './assets/bog.png';
import TBCIMage from './assets/tbc.png';
import {Card} from "./components/card";
import {CardCollectingFund} from "./components/cardCollectingFund";
import {Account} from "./components/account";
import {NavBar} from "./components/navigation";
import {useRef} from "react";
export default function App() {
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerTextSize = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [32, 18],
      extrapolate: 'clamp',
    });
  const subHeaderTextSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [16, 0],
    extrapolate: 'clamp',
  });

    const subHeaderTextOpacity = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

  const headerTextTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -40],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.TopContent}>
        <Text  style={styles.nameText}>Hi john</Text>
        <View style={{flexDirection:'row'}}>
          <Image
              style={styles.headerImg}
              source={Frame45Image} >
          </Image>
          <Image
              style={styles.headerImg}
              source={Frame47Image} >
          </Image>
        </View>
      </View>
      <View style={{position:'absolute', top:100, zIndex:5}}>
        <Animated.Text style={[styles.animateSubText, { opacity: subHeaderTextOpacity, fontSize: subHeaderTextSize, transform: [{ translateY: headerTextTranslateY }]  }]}>
          Available Balance
        </Animated.Text>
        <Animated.Text style={[styles.animateText, { fontSize: headerTextSize, transform: [{ translateY: headerTextTranslateY }] }]}>
          ₾ 4,562.52
        </Animated.Text>
      </View>
      <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
          contentContainerStyle={{paddingBottom: 0 }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
          scrollEventThrottle={16}>
          <View style={[styles.contentContainer,{paddingHorizontal:16}]}>
        <View style={[styles.gift, styles.shadowStyle]}>
          <Image
              source={GiftImage} >
          </Image>
          <View style={{flex:1, paddingLeft:12, justifyContent:'center'}}>
            <Text style={{fontSize:14, fontWeight:'500'}}>
              Zero free first purchase
            </Text>
            <Text style={{fontSize:12, fontWeight:'500'}}>
              For new users.
              <Text style={{color:'#14DC9C', textDecorationLine:'underline', marginLeft:2}}>Learn more</Text>
            </Text>
          </View>
          <Image
              style={{position:'absolute', top:22, right:16}}
              source={XImage} >
          </Image>
       </View>
        <View  style={[styles.categories, styles.shadowStyle]}>
          <Text style={[styles.navText,{ backgroundColor:'#14DC9C', color:'#ffffff', }]}>
            Accounts
          </Text>
          <Text  style={styles.navText}>
            Crypto
          </Text>
          <Text  style={styles.navText}>
            NFT
          </Text>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            My Cards
          </Text>
          <Text style={styles.addTitle}>
            + Get a card
          </Text>
        </View>
       <Card ImageFileLeft={GEImage} text={ 'My Mastercard in GEL'}  balance={'₾ 2,562.52'} ImageFileRight={MasterCardImage}/>
        <Card ImageFileLeft={EUImage} text={'My Visa in EUR'} balance={'€ 562.52'} ImageFileRight={VisaImage}/>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Collecting Funds
          </Text>
        </View>
        <CardCollectingFund ImageFileLeft={RocketImage}/>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Other
          </Text>
          <Text style={styles.addTitle}>
            + Link
          </Text>
        </View>
            <Card text={'My TBC Card'} accountNumber={'TBGB12341213412345678'} ImageFileLeft={TBCIMage} ImageFileRight={MasterCardImage}/>
            <Card text={'My BOG Card'} accountNumber={'BOGB12341213412345678'}  ImageFileLeft={BOGIMage} ImageFileRight={VisaImage}/>
            <Account  text={'My TBC Account'} ImageFileLeft={TBCIMage} accountNumber={'TBGB12341213412345678'}/>
          </View>
      </ScrollView>
      <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C183',
    alignItems: 'center',
    justifyContent: 'center',

  },
  TopContent: {
    marginTop:30,
    height:80,
    paddingHorizontal:16,
    width:'100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    height:1275,
    flex: 1,
    width:'100%',
    paddingTop:12,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
  },
  scrollContainer: {
    paddingBottom:100,
    paddingTop:80,
    height:1325,
  },
  headerImg:{
    marginLeft:12
  },
  nameText:{
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'600'
  },
  gift:{
    flexDirection:'row',
    height:67,
    width:'100%',
    borderRadius:10,
    backgroundColor:'#FFFFFF',
  },
  categories:{
    marginTop:24,
    flexDirection:'row',
    height:42,
    width:'100%',
    borderRadius:10,
    backgroundColor:'#FFFFFF',
  },
  navText:{
    flex:1,
    paddingHorizontal:29,
    paddingVertical:12,
    textAlign:'center',
    borderRadius:10,
    fontWeight:'500'
  },
  titleBox:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width:'100%',
    marginTop:24
  },

  title:{
    fontSize: 18,
    fontWeight:'500'
  },
  addTitle:{
    fontSize:14,
    fontWeight:'500',
    color: '#14DC9C',
  },
  animateSubText:{
    textAlign:"center",
    fontSize:14,
    fontWeight:'500',
    color: '#FFFFFF',
  },
  animateText:{
    textAlign:"center",
    fontSize:32,
    fontWeight:'600',
    color: '#FFFFFF',
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
});


