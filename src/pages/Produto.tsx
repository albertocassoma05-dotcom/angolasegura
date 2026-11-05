import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Minus, Plus, ShieldCheck, ShoppingCart, Truck } from 'lucide-react';
import { produtos, formatPreco } from '@/data/produtos';
import { getDetalhes } from '@/data/detalhes';
import { useCarrinho } from '@/hooks/useCarrinho';
import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';
import { toast } from 'sonner';

export default function ProdutoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const carrinho = useCarrinho();
  const [qtd, setQtd] = useState(1);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Produto não encontrado</p>
        <Link to="/" className="text-primary font-semibold">Voltar à loja</Link>
      </div>
    );
  }
  const d = getDetalhes(produto);
  const relacionados = produtos.filter(p => p.categoria === produto.categoria && p.id !== produto.id).slice(0, 4);

  const adicionar = () => { carrinho.adicionar(produto, qtd); toast.success(`${produto.nome} adicionado ao carrinho`); };
  const comprar = () => { carrinho.adicionar(produto, qtd); navigate('/checkout'); };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-primary shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-primary-foreground font-semibold">
            <ArrowLeft className="h-5 w-5" /> Voltar
          </button>
          <Link to="/checkout" className="relative text-primary-foreground">
            <ShoppingCart className="h-6 w-6" />
            {carrinho.totalItens > 0 && (
              <span className="absolute -top-2 -right-2 rounded-full bg-secondary px-1.5 text-xs font-bold text-secondary-foreground">{carrinho.totalItens}</span>
            )}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-2xl bg-muted border border-border">
            <img src={produto.imagem.replace('w=400&h=400', 'w=900&h=900')} alt={produto.nome} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">{produto.categoria}</p>
            <h1 className="mt-1 text-3xl font-extrabold text-foreground">{produto.nome}</h1>
            <p className="mt-3 text-3xl font-extrabold text-primary">{formatPreco(produto.preco)}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{d.descricao}</p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm font-semibold text-foreground">Quantidade</span>
              <div className="flex items-center rounded-lg border border-border">
                <button onClick={() => setQtd(q => Math.max(1, q - 1))} className="p-2"><Minus className="h-4 w-4" /></button>
                <span className="w-10 text-center font-bold">{qtd}</span>
                <button onClick={() => setQtd(q => q + 1)} className="p-2"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button onClick={adicionar} className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary py-3 font-bold text-primary hover:bg-primary/10 transition">
                <ShoppingCart className="h-4 w-4" /> Adicionar ao carrinho
              </button>
              <button onClick={comprar} className="rounded-xl bg-primary py-3 font-bold text-primary-foreground hover:opacity-90 transition">
                Comprar agora
              </button>
            </div>

            <div className="mt-6 grid gap-2 text-sm">
              <p className="flex items-center gap-2 text-foreground"><Truck className="h-4 w-4 text-primary" /> Entrega ao domicílio em Luanda em 24–48h</p>
              <p className="flex items-center gap-2 text-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> Produto original com garantia</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">O que este produto faz</h2>
            <ul className="mt-4 space-y-2">
              {d.funcionalidades.map(f => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground"><Check className="mt-0.5 h-4 w-4 text-primary shrink-0" />{f}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">Especificações</h2>
            <dl className="mt-4 divide-y divide-border">
              {d.especificacoes.map(e => (
                <div key={e.rotulo} className="flex justify-between py-2 text-sm">
                  <dt className="text-muted-foreground">{e.rotulo}</dt>
                  <dd className="font-semibold text-foreground">{e.valor}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {relacionados.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-foreground">Produtos relacionados</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {relacionados.map(p => <ProductCard key={p.id} produto={p} onAdicionar={x => { carrinho.adicionar(x); toast.success('Adicionado ao carrinho'); }} />)}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
