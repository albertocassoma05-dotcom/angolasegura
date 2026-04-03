import heroBanner from '@/assets/hero-banner.jpg';

export function HeroBanner() {
  return (
    <section className="relative h-48 sm:h-64 overflow-hidden">
      <img src={heroBanner} alt="Angola Segura - Compras online" width={1920} height={640} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-primary-foreground mb-2">
            Bem-vindo à Angola Segura
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-lg max-w-md">
            As melhores ofertas com entrega segura em todo o país
          </p>
        </div>
      </div>
    </section>
  );
}
