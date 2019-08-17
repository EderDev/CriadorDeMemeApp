import React, {Component} from 'react'
import {View, StyleSheet, Text, TextInput, Image} from 'react-native'

export default class CriadorDeMeme extends Component{
  constructor(props){
    super(props)
    this.state = {texto1:'', texto2:''}
    
    this.escrever = this.escrever.bind(this)
  }
  escrever(t){
    let s = this.state
    if(t.length > 0){
      s.texto1 = 'AAAIIINNNN'
      s.texto2 = `Não pode ${t}`
    }else{
      s.texto1 = ''
      s.texto2 = ``
    }
    

    this.setState(s)
  }
  render(){
    return(
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Mimimi</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder='Digite o seu Mimimi' onChangeText={this.escrever}/>
        </View>
        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1}</Text>
          <Image style={styles.ramon} source={require('./images/SeuMadruga.jpg')}/>
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#999',
    flex:1,
    flexDirection:'column',
    alignItems: 'center'
  },
  titulo:{
    fontSize:30,
    color: '#FFF'
  },
  inputArea:{
    alignSelf:'stretch'
  },
  input:{
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor:'#eee',
    color:'#000',
    height: 40,
    margin:20,
    padding: 10
  },
  area:{
    width:300,
    height: 300,
    marginTop:10
  },
  ramon:{
    width:300,
    height:300,
    marginTop:-70,
    zIndex:-1
  },
  texto:{
    color:'#FFF',
    fontSize:22,
    fontWeight: 'bold',
    textAlign:'center',
    padding:10,
    backgroundColor:'transparent',
    height:80
  },
  texto1:{
    fontSize:35
  },
  texto2:{
    marginTop:-80
  }
})