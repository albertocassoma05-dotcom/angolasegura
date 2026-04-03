import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import { Mail, Phone, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import logo from '@/assets/logo.png';
import { toast } from 'sonner';

type AuthMode = 'login' | 'register' | 'phone';

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'register') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: nome },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        toast.success('Conta criada! Verifique o seu email para confirmar.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/');
      }
    } catch (err: any) {
      toast.error(err.message || 'Erro ao autenticar');
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formattedPhone = telefone.startsWith('+') ? telefone : `+244${telefone}`;
      const { error } = await supabase.auth.signInWithOtp({ phone: formattedPhone });
      if (error) throw error;
      setOtpSent(true);
      toast.success('Código enviado por SMS!');
    } catch (err: any) {
      toast.error(err.message || 'Erro ao enviar código');
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formattedPhone = telefone.startsWith('+') ? telefone : `+244${telefone}`;
      const { error } = await supabase.auth.verifyOtp({ phone: formattedPhone, token: otp, type: 'sms' });
      if (error) throw error;
      navigate('/');
    } catch (err: any) {
      toast.error(err.message || 'Código inválido');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth('google', {
        redirect_uri: window.location.origin,
      });
      if (result.error) throw result.error;
    } catch (err: any) {
      toast.error(err.message || 'Erro ao entrar com Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Angola Segura" className="w-20 h-20 mx-auto rounded-2xl mb-4" />
          <h1 className="text-3xl font-bold text-foreground">Angola Segura</h1>
          <p className="text-muted-foreground mt-1">Compras online seguras em Angola</p>
        </div>

        <div className="bg-card rounded-2xl shadow-xl border border-border p-6 space-y-5">
          {mode !== 'phone' ? (
            <>
              <form onSubmit={handleEmailAuth} className="space-y-4">
                {mode === 'register' && (
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Nome completo</label>
                    <input
                      type="text"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      placeholder="O seu nome"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Senha</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                      required
                      minLength={6}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? 'Aguarde...' : mode === 'login' ? 'ENTRAR' : 'CADASTRAR-SE'}
                </button>
              </form>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">ou</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 rounded-lg border border-border bg-background py-3 text-sm font-medium text-foreground transition hover:bg-muted disabled:opacity-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continuar com Google
              </button>

              <button
                onClick={() => setMode('phone')}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 rounded-lg border border-border bg-background py-3 text-sm font-medium text-foreground transition hover:bg-muted disabled:opacity-50"
              >
                <Phone className="h-5 w-5 text-primary" />
                Entrar com número de telefone
              </button>

              <p className="text-center text-sm text-muted-foreground">
                {mode === 'login' ? (
                  <>Não tem conta? <button onClick={() => setMode('register')} className="text-primary font-semibold hover:underline">Cadastre-se</button></>
                ) : (
                  <>Já tem conta? <button onClick={() => setMode('login')} className="text-primary font-semibold hover:underline">Entrar</button></>
                )}
              </p>
            </>
          ) : (
            <>
              <button onClick={() => { setMode('login'); setOtpSent(false); }} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                <ArrowLeft className="h-4 w-4" /> Voltar
              </button>
              {!otpSent ? (
                <form onSubmit={handlePhoneSendOtp} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Número de telefone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="tel"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                        placeholder="9XX XXX XXX"
                        className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Código +244 adicionado automaticamente</p>
                  </div>
                  <button type="submit" disabled={loading} className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-50">
                    {loading ? 'Enviando...' : 'Enviar código SMS'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handlePhoneVerifyOtp} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Código de verificação</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={e => setOtp(e.target.value)}
                      placeholder="000000"
                      maxLength={6}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground text-center tracking-[0.5em] placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                      required
                    />
                  </div>
                  <button type="submit" disabled={loading} className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-50">
                    {loading ? 'Verificando...' : 'Verificar'}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
