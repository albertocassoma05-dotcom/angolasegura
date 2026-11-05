import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Truck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-12 bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-extrabold"><Truck className="h-5 w-5" /> Serviço de Entrega ao Domicílio</h3>
          <p className="mt-2 text-sm opacity-80">Compre online e receba em sua casa, com segurança e rapidez em toda Angola.</p>
        </div>
        <div>
          <h4 className="font-bold">Loja</h4>
          <ul className="mt-2 space-y-1 text-sm opacity-90">
            <li><Link to="/">Produtos</Link></li>
            <li><Link to="/checkout">Carrinho</Link></li>
            <li><Link to="/encomendas">As minhas encomendas</Link></li>
            <li><Link to="/auth">Entrar / Criar conta</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Contacto</h4>
          <ul className="mt-2 space-y-1 text-sm opacity-90">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +244 953 074 372</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> geral@entregadomicilio.ao</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Luanda, Angola</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-80">
        © {new Date().getFullYear()} Serviço de Entrega ao Domicílio. Todos os direitos reservados.
      </div>
    </footer>
  );
}
