import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase';

export default function HomeScreen() {
  //Hooks de estado
  const [productList,setProductList]= React.useState([]);
  const [productName,setProductName]= React.useState('');
  const [productPrice,setProductPrice]= React.useState('');
  const [productDescription,setProductDescription]= React.useState('');
  
  // Hooks de efecto
  //Nos ayuda a visualizar lo primero de la app

  useEffect(()=> {
    let list=[]
    async function getProducts(){
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
       list.push (doc.data());
        console.log(doc.id,"=>" ,doc.data());
      });
      setProductList(list);

    }
    getProducts();
    
  }, [])
  

  
  const renderItem=()=> ({item}) => {
    <View style={styles.item} key={item.id}>
      <View style={styles.img}>
        <Image
        style={styles.imageProducts}
        source={require('../../../assets/caja.png')}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.textName}>{item.productName}</Text>
        <Text style={styles.textDescription}>{item.productDescription}</Text>
        <Text style={styles.textPrice}>$ {item.productPrice}</Text>

      </View>

    </View>
  }
  return (
    <SafeAreaView style={styles.container}>
      {
      productList.lenght > 0 ? (
        <FiatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        />
      ) : (
        <Text style={styles.textNoProducts}>NO EXISTEN PRODUCTOS</Text>
      )
      }
      
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c2",
    alignItems: "center",
    justifyContent:"center",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
    width: 360,
    height: 100,
    borderRadius: 5,
  },
  img:{
    width: "30%",

  },
  info:{
    width: "50%",
  },
  imageProducts:{
    width: 80,
    height: 70,
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDescription:{
    fontSize:15,
  },
  textPrice:{
    fontSize: 20,
    textAlign:"right",
    color: "#02ccff",
    fontWeight: 'bold',
  },
  textNoProducts:{
    color:"#fff",
    fonSize:22,

  }
})