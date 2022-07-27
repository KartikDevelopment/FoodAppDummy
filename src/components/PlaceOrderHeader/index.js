import * as React from 'react';
import { View, Text,SafeAreaView,Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Profile from '../../imgs/ProfileImgs'
import DropIcon from '../../imgs/DropIcon';
import BackIcon from '../../imgs/BackIcon'
import WhiteStar from '../../imgs/WhiteStar'
const PlaceOrderHeader = ({navigation}) =>{
    
    return(
        <>
            <View style={style.Header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={style.BoxStyle}>
                    <Image style={style.Images} source={BackIcon}/>
                </TouchableOpacity>
                <View style={[style.BoxStyle,{left:-10,backgroundColor:'#F5CA48',borderWidth:0}]}>
                    <Image style={style.DropIcon} source={WhiteStar}/>
                </View>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    Header:{
        height:'5%',
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:20,
        marginBottom:20

    },
    BoxStyle:{
        width:40,
        height:40,
        borderWidth:2,
        borderColor:'#CDCDCD',
        borderRadius:10,
        justifyContent:'center',
        backgroundColor:'white',
        left:20
    },
    Images:{
        width:5,
        height:8,
        alignSelf:'center',
       
    },
    DropIcon:{
        width:12,
        height:12,
        margin:10,
        alignSelf:'center',
    }
})
export default PlaceOrderHeader;