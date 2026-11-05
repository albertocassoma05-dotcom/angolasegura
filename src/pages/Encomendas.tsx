import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { formatPreco } from '@/data/produtos';

interface Encomenda { id: string; created_at: string; total: number; estado: string; metodo_pagamento: string; bairro: string; municipio: string; itens: { nome: string; quantidade: number }[] }

export default function Encomendas() {
  const { user, loading } = useAuth();
  const [lista, setLista] = useState<Encomenda[] | null>(null);

  useEffect(() => {
    if (!user) return;
    supabase.from('encomendas').select('*').order('created_at', { ascending: false }).then(({ data }) => setLista((data as unknown as Encomenda[]) ?? []));
  }, [user]);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary px-4 py-3 shadow-lg">
        <Link to="/" className="container mx-auto flex items-center gap-2 font-semibold text-primary-foreground"><ArrowLeft className="h-5 w-5" /> Voltar à loja</Link>
      </header>
      <main className="container mx-auto max-w-3xl px-4 py-6">
        <h1 className="mb-4 text-2xl font-extrabold text-foreground">As minhas encomendas</h1>
        {!loading && !user && <p className="text-muted-foreground"><Link to="/auth" className="font-bold text-primary underline">Entre na sua conta</Link> para ver as encomendas.</p>}
        {user && lista === null && <p className="text-muted-foreground">A carregar...</p>}
        {lista?.length === 0 && (
          <div className="rounded-2xl border border-border bg-card p-10 text-center">
            <Package className="mx-auto h-10 w-10 text-primary" />
            <p className="mt-3 text-muted-foreground">Ainda não fez nenhuma encomenda.</p>
          </div>
        )}
        <div className="space-y-3">
          {lista?.map(e => (
            <div key={e.id} className="rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{new Date(e.created_at).toLocaleString('pt-AO')}</p>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold capitalize text-secondary-foreground">{e.estado}</span>
              </div>
              <p className="mt-2 text-sm text-foreground">{e.itens.map(i => `${i.nome} x${i.quantidade}`).join(', ')}</p>
              <p className="mt-1 text-xs text-muted-foreground">{e.bairro}, {e.municipio} · {e.metodo_pagamento}</p>
              <p className="mt-2 text-lg font-extrabold text-primary">{formatPreco(Number(e.total))}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
