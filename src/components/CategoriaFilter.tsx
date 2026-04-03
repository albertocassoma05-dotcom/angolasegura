import { categorias } from '@/data/produtos';

interface Props {
  categoriaAtiva: string;
  onChange: (c: string) => void;
}

export function CategoriaFilter({ categoriaAtiva, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto py-4 px-4 scrollbar-hide">
      {categorias.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all ${
            categoriaAtiva === cat
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-card text-foreground border border-border hover:bg-muted'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
