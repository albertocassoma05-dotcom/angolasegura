import { useCallback, useSyncExternalStore } from 'react';
import type { Produto } from '@/data/produtos';

export interface ItemCarrinho extends Produto {
  quantidade: number;
}

const KEY = 'carrinho-entrega';
let itensStore: ItemCarrinho[] = (() => {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
})();
const listeners = new Set<() => void>();
function setStore(fn: (prev: ItemCarrinho[]) => ItemCarrinho[]) {
  itensStore = fn(itensStore);
  localStorage.setItem(KEY, JSON.stringify(itensStore));
  listeners.forEach(l => l());
}
const subscribe = (l: () => void) => { listeners.add(l); return () => listeners.delete(l); };

export function useCarrinho() {
  const itens = useSyncExternalStore(subscribe, () => itensStore);

  const adicionar = useCallback((produto: Produto, qtd = 1) => {
    setStore(prev => {
      const existe = prev.find(i => i.id === produto.id);
      if (existe) return prev.map(i => i.id === produto.id ? { ...i, quantidade: i.quantidade + qtd } : i);
      return [...prev, { ...produto, quantidade: qtd }];
    });
  }, []);

  const remover = useCallback((id: string) => setStore(prev => prev.filter(i => i.id !== id)), []);

  const alterarQuantidade = useCallback((id: string, quantidade: number) => {
    setStore(prev => quantidade <= 0 ? prev.filter(i => i.id !== id) : prev.map(i => i.id === id ? { ...i, quantidade } : i));
  }, []);

  const total = itens.reduce((s, i) => s + i.preco * i.quantidade, 0);
  const totalItens = itens.reduce((s, i) => s + i.quantidade, 0);
  const limpar = useCallback(() => setStore(() => []), []);

  return { itens, adicionar, remover, alterarQuantidade, total, totalItens, limpar };
}
