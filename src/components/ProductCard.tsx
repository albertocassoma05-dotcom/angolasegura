import { ShoppingCart } from 'lucide-react';
import type { Produto } from '@/data/produtos';
import { formatPreco } from '@/data/produtos';

interface Props {
  produto: Produto;
  onAdicionar: (p: Produto) => void;
}

export function ProductCard({ produto, onAdicionar }: Props) {
  return (
    <div className="group rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-muted overflow-hidden">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
          {produto.categoria}
        </p>
        <h3 className="font-semibold text-foreground truncate">{produto.nome}</h3>
        <p className="text-lg font-bold text-primary mt-1">{formatPreco(produto.preco)}</p>
        <button
          onClick={() => onAdicionar(produto)}
          className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-95"
        >
          <ShoppingCart className="h-4 w-4" />
          Adicionar
        </button>
      </div>
    </div>
  );
}
