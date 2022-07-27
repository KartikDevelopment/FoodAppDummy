import * as React from 'react';
import { View,Image, Text,SafeAreaView,StyleSheet } from 'react-native';
import Pizza from '../../imgs/Pizza';
import ArrowIcon from '../../imgs/ArrowIcon';
const CategoriesView = ({color='white',image=Pizza,text='Pizza',iconColor='#F26C68'}) =>{
    return(
        <>
            <View style={[style.View,{backgroundColor:color,marginRight:20}]}>
                <Image style={style.ImageStyle} source={image}/>
                <Text style={style.Text}>{text}</Text>
                <View style={[style.ArrowIcon,{backgroundColor:iconColor,justifyContent:'center',alignSelf:'center',marginTop:29}]}>
                <Image style={{height:8,width:8,alignSelf:'center'}} source={ArrowIcon}/>
                </View>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    View:{
        width:105,
        height:177,
        backgroundColor:'red',
        borderRadius:20,
        elevation:10,
        margin:20,
    },
    ImageStyle:{
        width:60,
        height:60,
        alignSelf:'center',
        marginTop:24
    },
    Text:{
        fontWeight:'600',
        fontSize:14,
        lineHeight:17.5,
        color:'#313234',
        alignSelf:'center',
        marginTop:10,
    },
    ArrowIcon:{
        width:26,
        height:26,
        borderRadius:13,
        backgroundColor:'white'
    }
})
export default CategoriesView;