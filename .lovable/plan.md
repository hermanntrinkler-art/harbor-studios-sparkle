## Gefundene Lovable-Referenzen

Beim Durchsuchen des Projekts habe ich noch mehrere Stellen gefunden, die entfernt/ersetzt werden sollten (gemäß Brand-Regel "keine Lovable-Erwähnungen").

### 1. Sichtbar auf der Website (Frontend)

- **`src/pages/PixieGuardVPNDetails.tsx`** (Zeile 147) — Tech-Stack-Badge zeigt "Lovable Cloud" → ersetzen durch z. B. "Cloud Backend" oder "Supabase" (oder einfach entfernen).
- **6 Sprachdateien** (`src/i18n/locales/{de,en,es,fr,it,pt}.json`) — Captain's-Log-Beschreibung enthält "Lovable Cloud" → ersetzen durch "Cloud Backend" in allen 6 Sprachen.

### 2. SEO / Social Sharing (sichtbar beim Teilen)

- **`index.html`** — Open-Graph- und Twitter-Meta-Tags verweisen auf Lovable:
  - `og:image` → `https://lovable.dev/opengraph-image-p98pqg.png`
  - `twitter:site` → `@lovable_dev`
  - `twitter:image` → `https://lovable.dev/opengraph-image-p98pqg.png`
  → Auf Harbor-Studios-eigenes OG-Bild + Twitter-Handle ändern (oder Tags entfernen). Hier brauche ich von dir: gewünschtes OG-Bild (URL/Pfad) und ggf. Twitter-Handle. Fallback: ich generiere ein neutrales OG-Bild mit Harbor-Studios-Branding und entferne `twitter:site`.

### 3. Repo-intern (nicht öffentlich sichtbar)

- **`README.md`** — Standard-Lovable-README mit mehreren Links zu `lovable.dev/projects/...`. Wird nicht ausgeliefert, taucht aber bei GitHub-Sync/ZIP-Download auf. → Durch eine Harbor-Studios-README ersetzen.

### 4. Bereits ok

- **"Edit with Lovable"-Badge** auf Published-Site ist bereits **versteckt** (hide_badge=true).
- Keine Lovable-Links in Footer, Navigation oder Komponenten gefunden.

### Umsetzung (nach deiner Freigabe)

1. PixieGuard-Tag und alle 6 Locale-Beschreibungen anpassen.
2. `index.html` Meta-Tags säubern (mit deinem Wunsch-OG-Bild).
3. README.md ersetzen.

### Frage an dich

Für den OG-/Twitter-Block in `index.html`: soll ich
- (a) ein neues Harbor-Studios-OG-Bild generieren und einbinden, oder
- (b) die Tags komplett entfernen, oder
- (c) hast du ein eigenes Bild + Twitter-Handle, das ich nutzen soll?
