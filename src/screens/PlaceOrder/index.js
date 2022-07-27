import * as React from 'react';
import BigPizza from '../../imgs/BigPizza';
import { View,Image,TouchableOpacity, Text,SafeAreaView, StyleSheet, ScrollView, TouchableOpacityBase } from 'react-native';
import Pizza from '../../imgs/Pizza';
import PlaceOrderHeader from '../../components/PlaceOrderHeader';
const PlaceOrder = ({navigation,Price='5.99'})=>{
    const IngredientsList = ()=>{
        return(
            <View style={style.IngredientsList}>
                <Image style={{width:80,height:55,alignSelf:'center'}} source={Pizza}/>
            </View>
        )
    }
    const Button =()=>{
        return(
            <TouchableOpacity
             style={style.Button}>
                <Text style={style.ButtonText}>{'Place an order >'}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#E5E5E5'}}>        
            <PlaceOrderHeader navigation={navigation}/>
            <ScrollView>
            <View style={{width:'90%',alignSelf:'center'}}>
                <Text style={style.Title}>{'Primavera\nPizzas'}</Text>
                <Text style={style.Price}>{'$'+Price}</Text>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <View>
                        <Text style={style.DetaileTitle}>Size</Text>
                        <Text style={style.Detail}>Medium 14"</Text>
                    </View>
                    <View>
                        <Text style={style.DetaileTitle}>Crust</Text>
                        <Text style={style.Detail}>Thin Crust</Text>
                    </View>
                    <View>
                        <Text style={style.DetaileTitle}>Delivery in</Text>
                        <Text style={style.Detail}>30 min</Text>
                    </View>
                </View>
                <View style={{flex:1.5,height:240,justifyContent:'center',overflow:'hidden',alignSelf:'center'}}>
                    <Image source={BigPizza} style={{width:296,height:176,}}/>
                </View>
            </View>
            <Text style={style.Ingredients}>Ingredients</Text>
            <View style={{width:'110%',alignSelf:'center'}}>
                <ScrollView horizontal={true}>
                    <IngredientsList/>
                    <IngredientsList/>
                    <IngredientsList/>
                    <IngredientsList/>
                    <IngredientsList/>
                    <IngredientsList/>
                </ScrollView>
            </View>
            
            </View>
            
            </ScrollView>
            <Button/>
        </SafeAreaView>
    )
}
const style=StyleSheet.create({
    Title:{
        fontWeight:"700",
        fontSize:32,
        lineHeight:39,
        color:'#313234',
        marginTop:30
    },
    Price:{
        fontWeight:"600",
        fontSize:32,
        lineHeight:39,
        color:'#E4723C',
        marginTop:20
    },
    DetaileTitle:{
        fontWeight:"500",
        fontSize:14,
        lineHeight:17,
        color:'#CDCDCD',
        marginTop:20
    },
    Detail:{
        fontWeight:"600",
        fontSize:16,
        lineHeight:19.5,
        color:'#000000',
        marginTop:10
    },
    Ingredients:{
        fontWeight:"700",
        fontSize:16,
        lineHeight:20,
        color:'#000000',
        marginTop:10
    },
    IngredientsList:{
        width:100,
        height:80,
        backgroundColor:'white',
        borderRadius:15,
        justifyContent:'center',
        elevation:5,
        margin:10,
    },
    Button:{
        width:335,
        height:62,
        backgroundColor:'#F5CA48',
        borderRadius:50,
        position:'absolute',
        bottom:48,
        alignSelf:'center',
        justifyContent:'center'
    },
    ButtonText:{
        fontWeight:"700",
        fontSize:14,
        lineHeight:17,
        color:'#000000',
        alignSelf:'center'
    }
})
export default PlaceOrder;