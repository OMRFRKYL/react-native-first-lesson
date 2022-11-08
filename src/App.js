import { View, Text, SafeAreaView, StyleSheet, Button,TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './components/Card/Card';

const App = ()=>{
  return(
    <SafeAreaView style={style.container}>
      <Card title="Edward Stark" text="Winter is Coming..."/>
      <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım.Evet tarafından.."/>
      <Card title="Serbest" text="İlhami abi sen söyle,ben başka bir ilde miyim?"/>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#e0e0e0"
  },
});

export default App;



//*Yukarıda harici Card Componenti sayesinde bir card oluşturduk ve dinamik bir page oluşturduk.
//*Stillendirme için ayrı bir js dosyası oluşturduk ve import ederek birleştirdik.



//!Hello world yazma./Stillendirme İşlemleri./ flex yapısı..
// const App = () => {
//   return (
//     <SafeAreaView style={styles.fullContainer}>
//     <View style={styles.container}>
//       <Text>No Pain No Gain.Don't Lose faıth..</Text>
//       <Text>Merhabalar!!!</Text>
//     </View>
//     <Text style={styles.texts}>Hello</Text>
//     </SafeAreaView>
//   )
// }

// const styles =StyleSheet.create({
//   fullContainer:{
//     flex:1,
//     backgroundColor:"aqua"
//   },
//   container:{
//     flex:1,
//     backgroundColor:"red",
//     margin:10,
//     padding:5,
//     borderRadius:5,
//   },
//   texts:{
//     flex:3,
//     color:"gray",
//     backgroundColor:"orange",
//     fontSize:35,
//     margin:10,
//     textAlign:"center",
//     borderRadius:10,
//     height:100
//   }
// })

// export default App