import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import {ThemeProvider, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const theme = {
  Input: {
    inputStyle: {textAlign:'center'}
  },
};


export default class Receita extends Component {
    /*static navigationOptions = {
        title: 'Receita',
    };*/
    //static valormediogasto;
    state = {
      valormediogasto : "0",
      numClientes: "0",
      numDiasSemana: "5",
    };
    render() {
        return (
          <View style={{flex: 1, justifyContent: 'space-around'}}>          
            <View style={styles.inputContainer}> 
              <View style={styles.inputBox}>
                <Input
                  keyboardType='numeric'
                  label='Valor gasto por cliente:'
                  onChangeText = {(text) => this.setState({valormediogasto: text})}
                  value={this.state.valormediogasto}
                  inputStyle = {{textAlign: 'center'}}
                />
              </View>
              <View style={styles.inputBox}>
                <Input
                  keyboardType='numeric'
                  label='Clientes por dia:'
                  onChangeText = {(text) => this.setState({numClientes: text})}
                  value={this.state.numClientes}
                  inputStyle = {{textAlign: 'center'}}
                />
              </View>
              <View style={styles.inputBox}>
                <Input
                  keyboardType='numeric'
                  label='Dias de funcionamento por semana:'
                  onChangeText = {(text) => this.setState({numDiasSemana: text})}
                  value={this.state.numDiasSemana}
                  inputStyle = {{textAlign: 'center'}}
                />
              </View>
            </View>
            <View style={styles.outputContainer}>
              <Text style={{fontSize:20}}>Receita mensal (R$): {this.state.numClientes*this.state.valormediogasto*this.state.numDiasSemana*4}</Text>
              <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('Despesas')}}
                style={styles.despesasButton}>
                  <Text style={{color: "#FFF", fontSize: 20}}>>>></Text>
              </TouchableOpacity>
            </View> 
          </View>
        );
    }
}

const styles = StyleSheet.create(
  {
    inputContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor : "#fafafa",
      padding: 20,
    },
    inputBox:{
      width: 300,
      backgroundColor: "#FFF",
      borderWidth:1,
      borderColor: "#DDD",
      borderRadius: 5,
      marginBottom:30,
      padding: 20
    },
    outputContainer: {
      borderTopWidth:1,
      borderColor: '#333',
      maxHeight: 150,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor : "#fafafa",
      padding: 20,
    },
    despesasButton:{
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal:0,
      width: 300,
      backgroundColor: "blue",
      borderRadius:10
    }
  }
)
