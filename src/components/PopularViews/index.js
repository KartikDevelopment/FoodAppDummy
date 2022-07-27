import * as React from 'react';
import { View,Image, Text,SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Crown from '../../imgs/Crown'
import Profile from '../../imgs/ProfileImgs';
import BigPizza from '../../imgs/BigPizza';
import PlusSign from '../../imgs/plusSign'
import Star from '../../imgs/Star'
const PopularView =({title='Primavera Pizza',weight='540',Rating='5.0',AddItem=()=>{console.log('default')}})=>{
    return(
    <>
        <View style={style.View}>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',marginTop:24,left:25}}>
                    <Image style={{height:8.5,width:12,alignSelf:'center',right:10}} source={Crown}/>
                    <Text style={style.Text}>top of the week</Text>
                </View>
                <Text style={style.Title}>{title}</Text>
                <Text style={style.weight}>{'Weight '+weight+ ' gr'}</Text>    
            <View style={{flex:1}}>
                <TouchableOpacity onPress={AddItem} style={style.Button}>
                    <Image style={style.AddImg} source={PlusSign}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <Image style={{height:10,left:120,width:10,alignSelf:'center'}} source={Star}/>
                <Text style={style.RatingText}>{Rating}</Text>
            </View>
            </View>
            <View style={{flex:1,justifyContent:'center',overflow:'hidden'}}>
                <Image style={style.Image} source={BigPizza}/>
            </View>
        </View>
    </>)
}
const style = StyleSheet.create({
    View:{
        height:200,
        width:'100%',
        backgroundColor:'white',
        borderRadius:25,
        flexDirection:'row',
        overflow:'hidden',
        marginBottom:20
    },
    Text:{
        fontWeight:'600',
        color:'black',
        fontSize:14,
        lineHeight:17,
    },
    Image:{
        height:125,
        width:210,
        resizeMode:'stretch',
        alignSelf:'center',
        left:20
    },
    Title:{
        fontSize:14,
        fontWeight:'600',
        lineHeight:17,
        left:22,
        marginTop:20,
        color:'#313234'
    },
    weight:{
        fontSize:12,
        fontWeight:'500',
        lineHeight:14.5,
        left:22,
        marginTop:5,
        color:'#C4C4C4'
    },
    Button:{
        backgroundColor:'#F5CA48',
        bottom:0,
        marginTop:50,
        height:53,
        width:90,
        borderTopRightRadius:25,
        justifyContent:'center'
    },
    AddImg:{
        alignSelf:'center',
        height:10,
        width:10
    },
    RatingText:{
        fontSize:12,
        fontWeight:'600',
        lineHeight:17,
        left:125,
        marginTop:20,
        color:'#000000',
        marginBottom:19
    }
})
export default PopularView;