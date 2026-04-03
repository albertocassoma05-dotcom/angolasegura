import { LogOut, User as UserIcon } from 'lucide-react';
import type { User } from '@supabase/supabase-js';

interface Props {
  user: User;
  onSignOut: () => void;
}

export function UserMenu({ user, onSignOut }: Props) {
  const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Utilizador';
  const avatar = user.user_metadata?.avatar_url;

  return (
    <div className="flex items-center gap-2">
      {avatar ? (
        <img src={avatar} alt={name} className="h-8 w-8 rounded-full border-2 border-secondary" />
      ) : (
        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
          <UserIcon className="h-4 w-4 text-secondary-foreground" />
        </div>
      )}
      <span className="text-primary-foreground text-sm font-medium hidden sm:block max-w-[100px] truncate">{name}</span>
      <button onClick={onSignOut} className="p-1.5 rounded-full hover:bg-primary-foreground/10 transition" title="Sair">
        <LogOut className="h-4 w-4 text-primary-foreground" />
      </button>
    </div>
  );
}
