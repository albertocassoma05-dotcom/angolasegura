import { useState, useCallback } from 'react';
import type { Produto } from '@/data/produtos';

export interface ItemCarrinho extends Produto {
  quantidade: number;
}

export function useCarrinho() {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  const adicionar = useCallback((produto: Produto) => {
    setItens(prev => {
      const existe = prev.find(i => i.id === produto.id);
      if (existe) {
        return prev.map(i => i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i);
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }, []);

  const remover = useCallback((id: string) => {
    setItens(prev => prev.filter(i => i.id !== id));
  }, []);

  const alterarQuantidade = useCallback((id: string, quantidade: number) => {
    if (quantidade <= 0) {
      setItens(prev => prev.filter(i => i.id !== id));
    } else {
      setItens(prev => prev.map(i => i.id === id ? { ...i, quantidade } : i));
    }
  }, []);

  const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  const totalItens = itens.reduce((soma, item) => soma + item.quantidade, 0);

  const limpar = useCallback(() => setItens([]), []);

  return { itens, adicionar, remover, alterarQuantidade, total, totalItens, limpar };
}
