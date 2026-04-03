export interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
}

export const produtos: Produto[] = [
  { id: '1', nome: 'Tênis Nike', preco: 15000, categoria: 'Moda' },
  { id: '2', nome: 'Camiseta Adidas', preco: 5000, categoria: 'Moda' },
  { id: '3', nome: 'Calça Jeans', preco: 12000, categoria: 'Moda' },
  { id: '4', nome: 'Boné', preco: 3000, categoria: 'Moda' },
  { id: '5', nome: 'Relógio', preco: 20000, categoria: 'Acessórios' },
  { id: '6', nome: 'Mochila', preco: 8000, categoria: 'Acessórios' },
  { id: '7', nome: 'Chinelo', preco: 2500, categoria: 'Moda' },
  { id: '8', nome: 'Jaqueta', preco: 18000, categoria: 'Moda' },
  { id: '9', nome: 'Óculos', preco: 7000, categoria: 'Acessórios' },
  { id: '10', nome: 'Carteira', preco: 4000, categoria: 'Acessórios' },
  { id: '11', nome: 'Cinto', preco: 3500, categoria: 'Acessórios' },
  { id: '12', nome: 'Fone de Ouvido', preco: 9000, categoria: 'Electrónica' },
  { id: '13', nome: 'Telemóvel Samsung', preco: 85000, categoria: 'Electrónica' },
  { id: '14', nome: 'Tablet Lenovo', preco: 120000, categoria: 'Electrónica' },
  { id: '15', nome: 'Laptop HP', preco: 350000, categoria: 'Electrónica' },
  { id: '16', nome: 'Tênis Puma', preco: 14000, categoria: 'Moda' },
  { id: '17', nome: 'Camiseta Nike', preco: 6000, categoria: 'Moda' },
  { id: '18', nome: 'Calça Social', preco: 13000, categoria: 'Moda' },
  { id: '19', nome: 'Boné Adidas', preco: 3500, categoria: 'Moda' },
  { id: '20', nome: 'Relógio Digital', preco: 18000, categoria: 'Acessórios' },
  { id: '21', nome: 'Mochila Escolar', preco: 7500, categoria: 'Acessórios' },
  { id: '22', nome: 'Chinelo Nike', preco: 3000, categoria: 'Moda' },
  { id: '23', nome: 'Jaqueta Jeans', preco: 20000, categoria: 'Moda' },
  { id: '24', nome: 'Óculos Escuros', preco: 6500, categoria: 'Acessórios' },
  { id: '25', nome: 'Carteira Couro', preco: 5000, categoria: 'Acessórios' },
  { id: '26', nome: 'Cinto Couro', preco: 4000, categoria: 'Acessórios' },
  { id: '27', nome: 'Fone Bluetooth', preco: 12000, categoria: 'Electrónica' },
  { id: '28', nome: 'iPhone', preco: 250000, categoria: 'Electrónica' },
  { id: '29', nome: 'Tablet Samsung', preco: 130000, categoria: 'Electrónica' },
  { id: '30', nome: 'Laptop Dell', preco: 400000, categoria: 'Electrónica' },
  { id: '31', nome: 'Smartwatch', preco: 45000, categoria: 'Electrónica' },
  { id: '32', nome: 'Caixa de Som', preco: 22000, categoria: 'Electrónica' },
  { id: '33', nome: 'Teclado', preco: 10000, categoria: 'Electrónica' },
  { id: '34', nome: 'Mouse Gamer', preco: 9000, categoria: 'Electrónica' },
  { id: '35', nome: 'Monitor', preco: 95000, categoria: 'Electrónica' },
  { id: '36', nome: 'Impressora', preco: 80000, categoria: 'Electrónica' },
  { id: '37', nome: 'Câmara', preco: 150000, categoria: 'Electrónica' },
  { id: '38', nome: 'Power Bank', preco: 12000, categoria: 'Electrónica' },
  { id: '39', nome: 'Carregador', preco: 5000, categoria: 'Electrónica' },
  { id: '40', nome: 'Tripé', preco: 11000, categoria: 'Acessórios' },
  { id: '41', nome: 'Ventoinha', preco: 18000, categoria: 'Casa' },
  { id: '42', nome: 'Televisão', preco: 300000, categoria: 'Casa' },
  { id: '43', nome: 'Frigorífico', preco: 500000, categoria: 'Casa' },
  { id: '44', nome: 'Fogão', preco: 200000, categoria: 'Casa' },
  { id: '45', nome: 'Microondas', preco: 90000, categoria: 'Casa' },
  { id: '46', nome: 'Liquidificador', preco: 25000, categoria: 'Casa' },
  { id: '47', nome: 'Panela Elétrica', preco: 30000, categoria: 'Casa' },
  { id: '48', nome: 'Ferro de Passar', preco: 15000, categoria: 'Casa' },
  { id: '49', nome: 'Aspirador', preco: 60000, categoria: 'Casa' },
  { id: '50', nome: 'Ar Condicionado', preco: 450000, categoria: 'Casa' },
];

export const categorias = ['Todos', 'Moda', 'Acessórios', 'Electrónica', 'Casa'];

export function formatPreco(preco: number): string {
  return new Intl.NumberFormat('pt-AO').format(preco) + ' Kz';
}
