import * as React from 'react';
import { View, Text,SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import SearchTab from '../../components/SearchTab';
import CategoriesView from '../../components/Categories';
import PopularView from '../../components/PopularViews';
const MainScreen = ({navigation}) =>{
    const AddItems = () =>{
        navigation.navigate('PlaceOrder')
        console.log('itemAdded')
    }
    return(
    <SafeAreaView style={{flex:1,backgroundColor:'#E5E5E5'}}>        
        <Header/>
        <ScrollView >
        <View style={{width:'90%',overflow:'visible',alignSelf:'center'}}>
            <Text style={style.Text}>Food</Text>
            <Text style={style.BoldText}>Delivery</Text>
            <SearchTab/>
            <Text style={style.CategorieText}>Categories</Text>
            <View style={{flexDirection:'row',marginBottom:15,width:'110%',alignSelf:'center'}}>
            <ScrollView horizontal={true}>
                <CategoriesView color='#F5CA48' iconColor='white'/>
                <CategoriesView color='white' text='Seafood'/>
                <CategoriesView color='white' text='Soft Drinks'/>
                <CategoriesView color='white'/>
                <CategoriesView color='white'/>            
            </ScrollView>
                
            </View>
            <Text style={style.CategorieText}>Popular</Text>
            <View style={{marginTop:11}}/>
            <PopularView AddItem={AddItems}/>
            <PopularView AddItem={AddItems}/>
            <PopularView AddItem={AddItems}/>
            <View style={{marginBottom:20}}/>
        </View>
        </ScrollView>
    </SafeAreaView>

    )
}
const style = StyleSheet.create({
    Text:{
        color:'#313234',
        fontWeight:'400',
        fontSize:16,
        lineHeight:19.5
    },
    BoldText:{
        fontWeight:'700',
        color:'#313234',
        fontSize:32,
        lineHeight:39,
        marginTop:5
    },
    CategorieText:{
        fontWeight:'700',
        color:'#313234',
        fontSize:16,
        lineHeight:19.5,
        marginTop:5
    }
})
export default MainScreen;