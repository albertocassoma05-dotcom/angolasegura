# Angola Marketplace

import React, { useState } from 'react'; import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';



const produtos = [ { id: '1', nome: 'Tênis Nike', preco: 15000, imagem: 'https://via.placeholder.com/100' }, { id: '2', nome: 'Camiseta Adidas', preco: 5000, imagem: 'https://via.placeholder.com/100' }, { id: '3', nome: 'Calça Jeans', preco: 12000, imagem: 'https://via.placeholder.com/100' }, { id: '4', nome: 'Boné', preco: 3000, imagem: 'https://via.placeholder.com/100' }, { id: '5', nome: 'Relógio', preco: 20000, imagem: 'https://via.placeholder.com/100' }, { id: '6', nome: 'Mochila', preco: 8000, imagem: 'https://via.placeholder.com/100' }, { id: '7', nome: 'Chinelo', preco: 2500, imagem: 'https://via.placeholder.com/100' }, { id: '8', nome: 'Jaqueta', preco: 18000, imagem: 'https://via.placeholder.com/100' }, { id: '9', nome: 'Óculos', preco: 7000, imagem: 'https://via.placeholder.com/100' }, { id: '10', nome: 'Carteira', preco: 4000, imagem: 'https://via.placeholder.com/100' }, { id: '11', nome: 'Cinto', preco: 3500, imagem: 'https://via.placeholder.com/100' }, { id: '12', nome: 'Fone de Ouvido', preco: 9000, imagem: 'https://via.placeholder.com/100' }, { id: '13', nome: 'Telemóvel Samsung', preco: 85000, imagem: 'https://via.placeholder.com/100' }, { id: '14', nome: 'Tablet Lenovo', preco: 120000, imagem: 'https://via.placeholder.com/100' }, { id: '15', nome: 'Laptop HP', preco: 350000, imagem: 'https://via.placeholder.com/100' }, { id: '16', nome: 'Tênis Puma', preco: 14000, imagem: 'https://via.placeholder.com/100' }, { id: '17', nome: 'Camiseta Nike', preco: 6000, imagem: 'https://via.placeholder.com/100' }, { id: '18', nome: 'Calça Social', preco: 13000, imagem: 'https://via.placeholder.com/100' }, { id: '19', nome: 'Boné Adidas', preco: 3500, imagem: 'https://via.placeholder.com/100' }, { id: '20', nome: 'Relógio Digital', preco: 18000, imagem: 'https://via.placeholder.com/100' }, { id: '21', nome: 'Mochila Escolar', preco: 7500, imagem: 'https://via.placeholder.com/100' }, { id: '22', nome: 'Chinelo Nike', preco: 3000, imagem: 'https://via.placeholder.com/100' }, { id: '23', nome: 'Jaqueta Jeans', preco: 20000, imagem: 'https://via.placeholder.com/100' }, { id: '24', nome: 'Óculos Escuros', preco: 6500, imagem: 'https://via.placeholder.com/100' }, { id: '25', nome: 'Carteira Couro', preco: 5000, imagem: 'https://via.placeholder.com/100' }, { id: '26', nome: 'Cinto Couro', preco: 4000, imagem: 'https://via.placeholder.com/100' }, { id: '27', nome: 'Fone Bluetooth', preco: 12000, imagem: 'https://via.placeholder.com/100' }, { id: '28', nome: 'iPhone', preco: 250000, imagem: 'https://via.placeholder.com/100' }, { id: '29', nome: 'Tablet Samsung', preco: 130000, imagem: 'https://via.placeholder.com/100' }, { id: '30', nome: 'Laptop Dell', preco: 400000, imagem: 'https://via.placeholder.com/100' }, { id: '31', nome: 'Smartwatch', preco: 45000, imagem: 'https://via.placeholder.com/100' }, { id: '32', nome: 'Caixa de Som', preco: 22000, imagem: 'https://via.placeholder.com/100' }, { id: '33', nome: 'Teclado', preco: 10000, imagem: 'https://via.placeholder.com/100' }, { id: '34', nome: 'Mouse Gamer', preco: 9000, imagem: 'https://via.placeholder.com/100' }, { id: '35', nome: 'Monitor', preco: 95000, imagem: 'https://via.placeholder.com/100' }, { id: '36', nome: 'Impressora', preco: 80000, imagem: 'https://via.placeholder.com/100' }, { id: '37', nome: 'Câmara', preco: 150000, imagem: 'https://via.placeholder.com/100' }, { id: '38', nome: 'Power Bank', preco: 12000, imagem: 'https://via.placeholder.com/100' }, { id: '39', nome: 'Carregador', preco: 5000, imagem: 'https://via.placeholder.com/100' }, { id: '40', nome: 'Tripé', preco: 11000, imagem: 'https://via.placeholder.com/100' }, { id: '41', nome: 'Ventoinha', preco: 18000, imagem: 'https://via.placeholder.com/100' }, { id: '42', nome: 'Televisão', preco: 300000, imagem: 'https://via.placeholder.com/100' }, { id: '43', nome: 'Frigorífico', preco: 500000, imagem: 'https://via.placeholder.com/100' }, { id: '44', nome: 'Fogão', preco: 200000, imagem: 'https://via.placeholder.com/100' }, { id: '45', nome: 'Microondas', preco: 90000, imagem: 'https://via.placeholder.com/100' }, { id: '46', nome: 'Liquidificador', preco: 25000, imagem: 'https://via.placeholder.com/100' }, { id: '47', nome: 'Panela Elétrica', preco: 30000, imagem: 'https://via.placeholder.com/100' }, { id: '48', nome: 'Ferro de Passar', preco: 15000, imagem: 'https://via.placeholder.com/100' }, { id: '49', nome: 'Aspirador', preco: 60000, imagem: 'https://via.placeholder.com/100' }, { id: '50', nome: 'Ar Condicionado', preco: 450000, imagem: 'https://via.placeholder.com/100' } ];



export default function App() { const [carrinho, setCarrinho] = useState([]); const [pesquisa, setPesquisa] = useState('');



const adicionarCarrinho = (produto) => { setCarrinho([...carrinho, produto]); };



const total = carrinho.reduce((soma, item) => soma + item.preco, 0);



const abrirWhatsApp = () => { const numero = '244953074372'; const mensagem = 'Olá, quero fazer uma encomenda na Angola Segura'; const url = https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}; Linking.openURL(url); };



return ( <View style={{ flex: 1, padding: 20 }}> <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Angola Segura</Text>



<TextInput

    placeholder="Pesquisar produtos..."

    value={pesquisa}

    onChangeText={setPesquisa}

    style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}

  />



  <FlatList

    data={produtos.filter(p => p.nome.toLowerCase().includes(pesquisa.toLowerCase()))}

    keyExtractor={(item) => item.id}

    renderItem={({ item }) => (

      <View style={{ marginVertical: 10 }}>

        <Image source={{ uri: item.imagem }} style={{ width: 100, height: 100 }} />

        <Text>{item.nome}</Text>

        <Text>Kz {item.preco}</Text>

        <TouchableOpacity onPress={() => adicionarCarrinho(item)}>

          <Text style={{ color: 'blue' }}>Adicionar ao carrinho</Text>

        </TouchableOpacity>

      </View>

    )}

  />



  <Text style={{ fontSize: 18 }}>Total: Kz {total}</Text>



  <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, marginTop: 10 }}>

    <Text style={{ color: 'white', textAlign: 'center' }}>Pagar via Multicaixa</Text>

  </TouchableOpacity>



  <TouchableOpacity onPress={abrirWhatsApp} style={{ backgroundColor: '#25D366', padding: 10, marginTop: 10 }}>

    <Text style={{ color: 'white', textAlign: 'center' }}>Falar no WhatsApp</Text>

  </TouchableOpacity>

</View>



); }



const total = carrinho.reduce((soma, item) => soma + item.preco, 0);



return ( <View style={{ flex: 1, padding: 20 }}> <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Angola Segura</Text>



<FlatList

    data={produtos}

    keyExtractor={(item) => item.id}

    renderItem={({ item }) => (

      <View style={{ marginVertical: 10 }}>

        <Image source={{ uri: item.imagem }} style={{ width: 100, height: 100 }} />

        <Text>{item.nome}</Text>

        <Text>Kz {item.preco}</Text>

        <TouchableOpacity onPress={() => adicionarCarrinho(item)}>

          <Text style={{ color: 'blue' }}>Adicionar ao carrinho</Text>

        </TouchableOpacity>

      </View>

    )}

  />



  <Text style={{ fontSize: 18 }}>Total: {total} Kz</Text>



  <TouchableOpacity style={{ backgroundColor: 'green', padding: 10 }}>

    <Text style={{ color: 'white', textAlign: 'center' }}>Finalizar Compra</Text>

  </TouchableOpacity>

</View>



); }

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://angolasegura.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/95af7e08-ffd0-445a-9b21-ee832eee64b7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
