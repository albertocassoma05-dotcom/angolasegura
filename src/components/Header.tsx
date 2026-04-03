import { ShoppingCart, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { UserMenu } from '@/components/UserMenu';
import type { User } from '@supabase/supabase-js';

interface HeaderProps {
  totalItens: number;
  pesquisa: string;
  setPesquisa: (v: string) => void;
  onCarrinhoClick: () => void;
  user: User | null;
  onSignOut: () => void;
}

export function Header({ totalItens, pesquisa, setPesquisa, onCarrinhoClick, user, onSignOut }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Angola Segura" width={44} height={44} className="rounded-lg" />
          <h1 className="text-xl font-bold text-primary-foreground hidden sm:block">Angola Segura</h1>
        </div>

        <div className="relative flex-1 max-w-md mx-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            value={pesquisa}
            onChange={e => setPesquisa(e.target.value)}
            className="w-full rounded-full bg-background pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <UserMenu user={user} onSignOut={onSignOut} />
          ) : (
            <button
              onClick={() => navigate('/auth')}
              className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
            >
              Entrar
            </button>
          )}
          <button
            onClick={onCarrinhoClick}
            className="relative flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Carrinho</span>
            {totalItens > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                {totalItens}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
