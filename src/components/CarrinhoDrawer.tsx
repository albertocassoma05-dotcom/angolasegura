import { X, Minus, Plus, Trash2, MessageCircle } from 'lucide-react';
import type { ItemCarrinho } from '@/hooks/useCarrinho';
import { formatPreco } from '@/data/produtos';

interface Props {
  aberto: boolean;
  onFechar: () => void;
  itens: ItemCarrinho[];
  total: number;
  onAlterarQuantidade: (id: string, qtd: number) => void;
  onRemover: (id: string) => void;
}

export function CarrinhoDrawer({ aberto, onFechar, itens, total, onAlterarQuantidade, onRemover }: Props) {
  const abrirWhatsApp = () => {
    const numero = '244953074372';
    const lista = itens.map(i => `• ${i.nome} x${i.quantidade} - ${formatPreco(i.preco * i.quantidade)}`).join('\n');
    const mensagem = `Olá, quero fazer uma encomenda na Angola Segura:\n\n${lista}\n\nTotal: ${formatPreco(total)}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, '_blank');
  };

  return (
    <>
      {aberto && <div className="fixed inset-0 z-50 bg-foreground/40" onClick={onFechar} />}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-2xl transition-transform duration-300 ${
          aberto ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-4">
            <h2 className="text-lg font-bold text-foreground">Carrinho ({itens.length})</h2>
            <button onClick={onFechar} className="rounded-full p-2 hover:bg-muted transition">
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {itens.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">O carrinho está vazio</p>
            ) : (
              itens.map(item => (
                <div key={item.id} className="flex items-center gap-3 rounded-lg bg-card border border-border p-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{item.nome}</p>
                    <p className="text-sm font-bold text-primary">{formatPreco(item.preco * item.quantidade)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => onAlterarQuantidade(item.id, item.quantidade - 1)} className="rounded-md bg-muted p-1.5 hover:bg-border transition">
                      <Minus className="h-3 w-3 text-foreground" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-foreground">{item.quantidade}</span>
                    <button onClick={() => onAlterarQuantidade(item.id, item.quantidade + 1)} className="rounded-md bg-muted p-1.5 hover:bg-border transition">
                      <Plus className="h-3 w-3 text-foreground" />
                    </button>
                  </div>
                  <button onClick={() => onRemover(item.id)} className="rounded-md p-1.5 text-accent hover:bg-accent/10 transition">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {itens.length > 0 && (
            <div className="border-t border-border p-4 space-y-3">
              <div className="flex justify-between text-lg font-bold text-foreground">
                <span>Total:</span>
                <span className="text-primary">{formatPreco(total)}</span>
              </div>
              <button className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 active:scale-[0.98]">
                Pagar via Multicaixa
              </button>
              <button
                onClick={abrirWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-whatsapp py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
