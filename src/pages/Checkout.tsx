import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useCarrinho } from '@/hooks/useCarrinho';
import { formatPreco } from '@/data/produtos';

export const TAXA_ENTREGA = 2000;
const metodos = ['Multicaixa Express', 'Transferência bancária', 'Pagamento na entrega'];
const provincias = ['Luanda', 'Benguela', 'Huambo', 'Huíla', 'Cabinda', 'Bié', 'Malanje', 'Uíge', 'Namibe', 'Cuanza Sul', 'Cuanza Norte', 'Zaire', 'Lunda Norte', 'Lunda Sul', 'Moxico', 'Cunene', 'Bengo', 'Cuando Cubango'];

export default function Checkout() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const carrinho = useCarrinho();
  const [enviando, setEnviando] = useState(false);
  const [f, setF] = useState({ nome: '', telefone: '', provincia: 'Luanda', municipio: '', bairro: '', referencia: '', metodo: metodos[0] });

  useEffect(() => {
    if (!user) return;
    supabase.from('profiles').select('nome_completo, telefone, morada').eq('user_id', user.id).maybeSingle().then(({ data }) => {
      if (data) setF(prev => ({ ...prev, nome: data.nome_completo || prev.nome, telefone: data.telefone || prev.telefone, bairro: data.morada || prev.bairro }));
    });
  }, [user]);

  const total = carrinho.total + (carrinho.itens.length ? TAXA_ENTREGA : 0);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const confirmar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) { navigate('/auth'); return; }
    if (!f.nome.trim() || !f.telefone.trim() || !f.municipio.trim() || !f.bairro.trim()) { toast.error('Preencha todos os campos obrigatórios'); return; }
    setEnviando(true);
    const { error } = await supabase.from('encomendas').insert({
      user_id: user.id,
      itens: carrinho.itens.map(i => ({ id: i.id, nome: i.nome, preco: i.preco, quantidade: i.quantidade, imagem: i.imagem })),
      subtotal: carrinho.total, taxa_entrega: TAXA_ENTREGA, total,
      nome: f.nome.trim(), telefone: f.telefone.trim(), provincia: f.provincia, municipio: f.municipio.trim(),
      bairro: f.bairro.trim(), referencia: f.referencia.trim() || null, metodo_pagamento: f.metodo,
    });
    setEnviando(false);
    if (error) { toast.error('Não foi possível registar a encomenda'); return; }
    carrinho.limpar();
    toast.success('Encomenda confirmada! Entraremos em contacto.');
    navigate('/encomendas');
  };

  const input = 'w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring';

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary px-4 py-3 shadow-lg">
        <Link to="/" className="container mx-auto flex items-center gap-2 font-semibold text-primary-foreground"><ArrowLeft className="h-5 w-5" /> Continuar a comprar</Link>
      </header>
      <main className="container mx-auto grid gap-6 px-4 py-6 lg:grid-cols-[1fr_380px]">
        <form onSubmit={confirmar} className="space-y-4 rounded-2xl border border-border bg-card p-5">
          <h1 className="text-2xl font-extrabold text-foreground">Entrega ao domicílio</h1>
          {!loading && !user && (
            <p className="rounded-lg bg-secondary/20 p-3 text-sm text-foreground">Precisa de <Link to="/auth" className="font-bold text-primary underline">entrar na sua conta</Link> para confirmar a encomenda.</p>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            <input className={input} placeholder="Nome completo *" value={f.nome} onChange={set('nome')} maxLength={100} />
            <input className={input} placeholder="Telefone *" value={f.telefone} onChange={set('telefone')} maxLength={20} />
            <select className={input} value={f.provincia} onChange={set('provincia')}>{provincias.map(p => <option key={p}>{p}</option>)}</select>
            <input className={input} placeholder="Município *" value={f.municipio} onChange={set('municipio')} maxLength={80} />
            <input className={input} placeholder="Bairro / Rua *" value={f.bairro} onChange={set('bairro')} maxLength={150} />
            <input className={input} placeholder="Ponto de referência" value={f.referencia} onChange={set('referencia')} maxLength={150} />
          </div>
          <div>
            <h2 className="mb-2 font-bold text-foreground">Método de pagamento</h2>
            <div className="grid gap-2 sm:grid-cols-3">
              {metodos.map(m => (
                <label key={m} className={`cursor-pointer rounded-lg border-2 p-3 text-sm font-semibold ${f.metodo === m ? 'border-primary bg-primary/10 text-primary' : 'border-border text-foreground'}`}>
                  <input type="radio" className="sr-only" checked={f.metodo === m} onChange={() => setF({ ...f, metodo: m })} />{m}
                </label>
              ))}
            </div>
          </div>
          <button disabled={enviando || carrinho.itens.length === 0} className="w-full rounded-xl bg-primary py-3 font-bold text-primary-foreground disabled:opacity-50">
            {enviando ? 'A confirmar...' : `Confirmar encomenda · ${formatPreco(total)}`}
          </button>
        </form>

        <aside className="h-fit space-y-3 rounded-2xl border border-border bg-card p-5">
          <h2 className="text-lg font-bold text-foreground">Resumo ({carrinho.totalItens})</h2>
          {carrinho.itens.length === 0 && <p className="py-6 text-center text-muted-foreground">O carrinho está vazio</p>}
          {carrinho.itens.map(i => (
            <div key={i.id} className="flex items-center gap-3">
              <img src={i.imagem} alt={i.nome} className="h-14 w-14 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{i.nome}</p>
                <p className="text-sm font-bold text-primary">{formatPreco(i.preco * i.quantidade)}</p>
              </div>
              <button type="button" onClick={() => carrinho.alterarQuantidade(i.id, i.quantidade - 1)} className="rounded bg-muted p-1"><Minus className="h-3 w-3" /></button>
              <span className="w-5 text-center text-sm">{i.quantidade}</span>
              <button type="button" onClick={() => carrinho.alterarQuantidade(i.id, i.quantidade + 1)} className="rounded bg-muted p-1"><Plus className="h-3 w-3" /></button>
              <button type="button" onClick={() => carrinho.remover(i.id)} className="p-1 text-accent"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
          {carrinho.itens.length > 0 && (
            <div className="space-y-1 border-t border-border pt-3 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPreco(carrinho.total)}</span></div>
              <div className="flex justify-between"><span>Taxa de entrega</span><span>{formatPreco(TAXA_ENTREGA)}</span></div>
              <div className="flex justify-between text-lg font-extrabold"><span>Total</span><span className="text-primary">{formatPreco(total)}</span></div>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}
