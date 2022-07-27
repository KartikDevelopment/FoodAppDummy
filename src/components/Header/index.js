import * as React from 'react';
import { View,Image, Text,SafeAreaView,StyleSheet } from 'react-native';
import Profile from '../../imgs/ProfileImgs'
import DropIcon from '../../imgs/DropIcon';
const Header = () =>{
    return(
        <>
            <View style={style.Header}>
                <Image style={style.Images} source={Profile}/>
                <Image style={style.DropIcon} source={DropIcon}/>
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
    Images:{
        width:40,
        height:40,
        margin:10,
        borderRadius:20,
        alignSelf:'center',
       
    },
    DropIcon:{
        width:24,
        height:12,
        margin:10,
        alignSelf:'center',
    }
})
export default Header;