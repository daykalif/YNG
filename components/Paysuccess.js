import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
import { connect } from 'react-redux'
import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome'
import { order } from '../actions/index';


const mapStateToProps = (state)=>{
    return {
     
    }
  }

class Paysuccess extends React.Component{
    render(){
      return(
          <View style={styles.box}>
                <Text style={{ width:90,height:90,borderRadius:50,backgroundColor:'red',textAlign:"center",lineHeight:90,marginTop:50}}>
                  <Icon name={'check'} size={50} style={{ color:'white'}} />
                </Text>
                <Text style={{ fontSize:22,marginTop:20,marginBottom:30}}>支付成功</Text>
                <View style={{width:Dimensions.get('window').width,padding:20,borderTopColor:'#eee',borderTopWidth:1}}>
                  <Text style={{fontSize:20}}>送货信息</Text>
                  <Text style={{ fontSize:14,lineHeight:25,marginTop:10}}>
                    我们将尽快安排发货，请买家保持手机通讯畅通，以便快递哥哥能第一时间联系到你
                  </Text>
                  <View style={{ display:'flex',flexDirection:"row",justifyContent:'center',marginTop:20}}>
                    <Text style={[styles.twobutton,{marginRight:30 }]}
                      onPress={()=>Actions.root()}
                    >继续购物</Text>
                    <Text style={styles.twobutton} onPress={()=>Actions.orderlist()}>查看订单</Text>
                  </View>
                </View>
          </View>
              
      )
    }
  }

const CounterContainer = connect(mapStateToProps, { order})(Paysuccess);
export default CounterContainer

const styles = StyleSheet.create({
  box:{
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'white'
  },
  twobutton:{
    width:120,height:36,lineHeight:36,backgroundColor:'red',textAlign:'center',borderRadius:18,color:'white'
  }

})