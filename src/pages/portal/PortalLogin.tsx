import { useState, type FormEvent } from "react";
import { useNavigate, useLocation, Navigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth, ADMIN_EMAIL } from "@/hooks/useAuth";

type Mode = "signin" | "signup";

const PortalLogin = () => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const from = (location.state as { from?: string })?.from;

  if (!loading && isAuthenticated) {
    return <Navigate to={from || (isAdmin ? "/admin" : "/portal")} replace />;
  }

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setInfo(null);

    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    setSubmitting(false);

    if (signInError) {
      setError("Anmeldung fehlgeschlagen. Bitte E-Mail und Passwort prüfen.");
      return;
    }

    const signedInEmail = (data.session?.user?.email || email).toLowerCase();
    const target = signedInEmail === ADMIN_EMAIL.toLowerCase() ? "/admin" : "/portal";
    navigate(from || target, { replace: true });
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setInfo(null);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: companyName ? { company_name: companyName } : undefined,
      },
    });

    setSubmitting(false);

    if (signUpError) {
      if (signUpError.message.toLowerCase().includes("already registered")) {
        setError("Für diese E-Mail-Adresse existiert bereits ein Konto. Bitte stattdessen anmelden.");
      } else {
        setError("Registrierung fehlgeschlagen: " + signUpError.message);
      }
      return;
    }

    if (data.session) {
      // E-Mail-Bestätigung ist im Supabase-Projekt deaktiviert – direkt eingeloggt.
      const signedUpEmail = (data.session.user?.email || email).toLowerCase();
      navigate(signedUpEmail === ADMIN_EMAIL.toLowerCase() ? "/admin" : "/portal", { replace: true });
      return;
    }

    setInfo(
      "Fast geschafft! Bitte bestätige deine E-Mail-Adresse über den Link, den wir dir gerade geschickt haben, und melde dich anschließend an."
    );
    setMode("signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm border-primary/20">
        <CardHeader>
          <CardTitle className="text-center">Kundenbereich</CardTitle>
          <CardDescription className="text-center">
            {mode === "signin"
              ? "Melde dich an, um deinen Projektfortschritt zu sehen."
              : "Erstelle ein kostenloses Konto für deinen Kundenbereich."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={mode === "signin" ? handleSignIn : handleSignUp} className="space-y-4">
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="companyName">Firma / Name</Label>
                <Input
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  autoComplete="organization"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {info && <p className="text-sm text-muted-foreground">{info}</p>}
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Bitte warten…" : mode === "signin" ? "Anmelden" : "Registrieren"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            {mode === "signin" ? (
              <>
                Noch kein Konto?{" "}
                <button
                  type="button"
                  className="text-primary underline underline-offset-4"
                  onClick={() => {
                    setMode("signup");
                    setError(null);
                    setInfo(null);
                  }}
                >
                  Jetzt registrieren
                </button>
              </>
            ) : (
              <>
                Bereits registriert?{" "}
                <button
                  type="button"
                  className="text-primary underline underline-offset-4"
                  onClick={() => {
                    setMode("signin");
                    setError(null);
                    setInfo(null);
                  }}
                >
                  Zum Login
                </button>
              </>
            )}
          </div>

          <div className="mt-6 text-center">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
              ← Zurück zur Startseite
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortalLogin;
