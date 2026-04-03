import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { CategoriaFilter } from '@/components/CategoriaFilter';
import { ProductCard } from '@/components/ProductCard';
import { CarrinhoDrawer } from '@/components/CarrinhoDrawer';
import { useCarrinho } from '@/hooks/useCarrinho';
import { useAuth } from '@/hooks/useAuth';
import { produtos } from '@/data/produtos';

const Index = () => {
  const [pesquisa, setPesquisa] = useState('');
  const [categoria, setCategoria] = useState('Todos');
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const carrinho = useCarrinho();
  const { user, signOut } = useAuth();

  const produtosFiltrados = produtos.filter(p => {
    const matchPesquisa = p.nome.toLowerCase().includes(pesquisa.toLowerCase());
    const matchCategoria = categoria === 'Todos' || p.categoria === categoria;
    return matchPesquisa && matchCategoria;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header
        totalItens={carrinho.totalItens}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        onCarrinhoClick={() => setCarrinhoAberto(true)}
        user={user}
        onSignOut={signOut}
      />
      <HeroBanner />
      <main className="container mx-auto px-4 pb-12">
        <CategoriaFilter categoriaAtiva={categoria} onChange={setCategoria} />
        <p className="text-sm text-muted-foreground mb-4">
          {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? 's' : ''} encontrado{produtosFiltrados.length !== 1 ? 's' : ''}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {produtosFiltrados.map(p => (
            <ProductCard key={p.id} produto={p} onAdicionar={carrinho.adicionar} />
          ))}
        </div>
      </main>
      <CarrinhoDrawer
        aberto={carrinhoAberto}
        onFechar={() => setCarrinhoAberto(false)}
        itens={carrinho.itens}
        total={carrinho.total}
        onAlterarQuantidade={carrinho.alterarQuantidade}
        onRemover={carrinho.remover}
      />
    </div>
  );
};

export default Index;
