CREATE TABLE public.encomendas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  itens jsonb NOT NULL DEFAULT '[]'::jsonb,
  subtotal numeric NOT NULL DEFAULT 0,
  taxa_entrega numeric NOT NULL DEFAULT 0,
  total numeric NOT NULL DEFAULT 0,
  nome text NOT NULL,
  telefone text NOT NULL,
  provincia text NOT NULL,
  municipio text NOT NULL,
  bairro text NOT NULL,
  referencia text,
  metodo_pagamento text NOT NULL,
  estado text NOT NULL DEFAULT 'pendente',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.encomendas TO authenticated;
GRANT ALL ON public.encomendas TO service_role;
ALTER TABLE public.encomendas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own orders" ON public.encomendas FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users create own orders" ON public.encomendas FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);