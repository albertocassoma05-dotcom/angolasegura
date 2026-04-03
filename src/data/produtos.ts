export interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string;
}

export const produtos: Produto[] = [
  { id: '1', nome: 'Tênis Nike', preco: 15000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80' },
  { id: '2', nome: 'Camiseta Adidas', preco: 5000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&q=80' },
  { id: '3', nome: 'Calça Jeans', preco: 12000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop&q=80' },
  { id: '4', nome: 'Boné', preco: 3000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=400&fit=crop&q=80' },
  { id: '5', nome: 'Relógio', preco: 20000, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&q=80' },
  { id: '6', nome: 'Mochila', preco: 8000, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80' },
  { id: '7', nome: 'Chinelo', preco: 2500, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop&q=80' },
  { id: '8', nome: 'Jaqueta', preco: 18000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&q=80' },
  { id: '9', nome: 'Óculos de Sol', preco: 7000, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&q=80' },
  { id: '10', nome: 'Carteira', preco: 4000, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&q=80' },
  { id: '11', nome: 'Cinto de Couro', preco: 3500, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop&q=80' },
  { id: '12', nome: 'Fone de Ouvido', preco: 9000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80' },
  { id: '13', nome: 'Samsung Galaxy', preco: 85000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&q=80' },
  { id: '14', nome: 'Tablet', preco: 120000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&q=80' },
  { id: '15', nome: 'Laptop HP', preco: 350000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&q=80' },
  { id: '16', nome: 'Tênis Puma', preco: 14000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&q=80' },
  { id: '17', nome: 'Camiseta Nike', preco: 6000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop&q=80' },
  { id: '18', nome: 'Calça Social', preco: 13000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&q=80' },
  { id: '19', nome: 'Boné Adidas', preco: 3500, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop&q=80' },
  { id: '20', nome: 'Relógio Digital', preco: 18000, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80' },
  { id: '21', nome: 'Mochila Escolar', preco: 7500, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1581605405669-fcdf81165b14?w=400&h=400&fit=crop&q=80' },
  { id: '22', nome: 'Sandália Nike', preco: 3000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=400&h=400&fit=crop&q=80' },
  { id: '23', nome: 'Jaqueta Jeans', preco: 20000, categoria: 'Moda', imagem: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop&q=80' },
  { id: '24', nome: 'Óculos Escuros', preco: 6500, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&q=80' },
  { id: '25', nome: 'Carteira de Couro', preco: 5000, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1606503153255-59d8b2e4b0f4?w=400&h=400&fit=crop&q=80' },
  { id: '26', nome: 'Cinto Premium', preco: 4000, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1585856331426-d7b22cc9ff42?w=400&h=400&fit=crop&q=80' },
  { id: '27', nome: 'AirPods', preco: 12000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop&q=80' },
  { id: '28', nome: 'iPhone 15', preco: 250000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&q=80' },
  { id: '29', nome: 'Tablet Samsung', preco: 130000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&q=80' },
  { id: '30', nome: 'Laptop Dell', preco: 400000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=400&fit=crop&q=80' },
  { id: '31', nome: 'Apple Watch', preco: 45000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&q=80' },
  { id: '32', nome: 'JBL Speaker', preco: 22000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&q=80' },
  { id: '33', nome: 'Teclado Mecânico', preco: 10000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&q=80' },
  { id: '34', nome: 'Mouse Gamer', preco: 9000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&q=80' },
  { id: '35', nome: 'Monitor 27"', preco: 95000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&q=80' },
  { id: '36', nome: 'Impressora HP', preco: 80000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop&q=80' },
  { id: '37', nome: 'Câmara Canon', preco: 150000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop&q=80' },
  { id: '38', nome: 'Power Bank 20000mAh', preco: 12000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop&q=80' },
  { id: '39', nome: 'Carregador USB-C', preco: 5000, categoria: 'Electrónica', imagem: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&q=80' },
  { id: '40', nome: 'Tripé Profissional', preco: 11000, categoria: 'Acessórios', imagem: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=400&fit=crop&q=80' },
  { id: '41', nome: 'Ventoinha', preco: 18000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1643005002490-bfc3c6f54e8e?w=400&h=400&fit=crop&q=80' },
  { id: '42', nome: 'Smart TV 55"', preco: 300000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&q=80' },
  { id: '43', nome: 'Frigorífico', preco: 500000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop&q=80' },
  { id: '44', nome: 'Fogão 4 Bocas', preco: 200000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&q=80' },
  { id: '45', nome: 'Microondas', preco: 90000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=400&fit=crop&q=80' },
  { id: '46', nome: 'Liquidificador', preco: 25000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop&q=80' },
  { id: '47', nome: 'Panela Elétrica', preco: 30000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop&q=80' },
  { id: '48', nome: 'Ferro de Passar', preco: 15000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop&q=80' },
  { id: '49', nome: 'Aspirador Robot', preco: 60000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop&q=80' },
  { id: '50', nome: 'Ar Condicionado', preco: 450000, categoria: 'Casa', imagem: 'https://images.unsplash.com/photo-1631567091046-8fa0be4a14e3?w=400&h=400&fit=crop&q=80' },
];

export const categorias = ['Todos', 'Moda', 'Acessórios', 'Electrónica', 'Casa'];

export function formatPreco(preco: number): string {
  return new Intl.NumberFormat('pt-AO').format(preco) + ' Kz';
}
