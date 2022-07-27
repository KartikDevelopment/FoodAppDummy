import * as React from 'react';
import { View,Image,TextInput, Text,SafeAreaView,StyleSheet } from 'react-native';
import SearchIcon from '../../imgs/SearchIcon';
const SearchTab =()=>{
    return (
        <>
            <View style={style.View}>
                <Image style={style.IconStyle} source={SearchIcon}/>
                <TextInput placeholderTextColor='#CDCDCD' placeholder='Search' style={style.TextInput}/>
            </View>
        </>
    )
}
const style=StyleSheet.create({
    View:{
        width:'100%',
        height:40,
        marginTop:10,
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    IconStyle:{
        width:20,
        height:20,
        alignSelf:'center'
    },
    TextInput:{
        width:'90%',
        height:40,
        fontSize:16,
        borderBottomWidth:1,
        borderColor:'#CDCDCD',
    }
})
export default SearchTab;