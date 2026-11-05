import type { Produto } from './produtos';

export interface DetalhesProduto {
  descricao: string;
  funcionalidades: string[];
  especificacoes: { rotulo: string; valor: string }[];
}

const porCategoria: Record<string, (p: Produto) => DetalhesProduto> = {
  Moda: p => ({
    descricao: `${p.nome} é uma peça de vestuário de qualidade, confortável e resistente, ideal para o dia-a-dia em Angola. Combina estilo moderno com materiais duráveis.`,
    funcionalidades: ['Material confortável e respirável', 'Acabamento resistente e durável', 'Fácil de lavar e manter', 'Disponível em vários tamanhos'],
    especificacoes: [
      { rotulo: 'Categoria', valor: 'Moda' },
      { rotulo: 'Tamanhos', valor: 'P, M, G, GG' },
      { rotulo: 'Garantia', valor: '30 dias para trocas' },
      { rotulo: 'Origem', valor: 'Importado' },
    ],
  }),
  'Acessórios': p => ({
    descricao: `${p.nome} é um acessório prático e elegante que completa o seu visual e facilita o seu dia. Produto original com excelente acabamento.`,
    funcionalidades: ['Design elegante e moderno', 'Materiais de alta qualidade', 'Leve e fácil de transportar', 'Ótimo para oferecer como presente'],
    especificacoes: [
      { rotulo: 'Categoria', valor: 'Acessórios' },
      { rotulo: 'Garantia', valor: '3 meses' },
      { rotulo: 'Estado', valor: 'Novo, na embalagem' },
    ],
  }),
  'Electrónica': p => ({
    descricao: `${p.nome} é um equipamento electrónico original, com tecnologia moderna e desempenho fiável. Perfeito para trabalho, estudo e lazer.`,
    funcionalidades: ['Produto original e selado', 'Alto desempenho e eficiência energética', 'Compatível com os principais dispositivos', 'Inclui carregador/cabos de origem'],
    especificacoes: [
      { rotulo: 'Categoria', valor: 'Electrónica' },
      { rotulo: 'Garantia', valor: '12 meses' },
      { rotulo: 'Voltagem', valor: '220V / Bivolt' },
      { rotulo: 'Estado', valor: 'Novo, selado' },
    ],
  }),
  Casa: p => ({
    descricao: `${p.nome} é um electrodoméstico/artigo para casa que traz conforto e praticidade ao seu lar. Fácil de usar e construído para durar.`,
    funcionalidades: ['Fácil de instalar e utilizar', 'Baixo consumo de energia', 'Construção robusta e durável', 'Entrega e montagem ao domicílio'],
    especificacoes: [
      { rotulo: 'Categoria', valor: 'Casa' },
      { rotulo: 'Garantia', valor: '12 meses' },
      { rotulo: 'Voltagem', valor: '220V' },
      { rotulo: 'Entrega', valor: 'Ao domicílio' },
    ],
  }),
};

export function getDetalhes(p: Produto): DetalhesProduto {
  return (porCategoria[p.categoria] ?? porCategoria['Acessórios'])(p);
}
