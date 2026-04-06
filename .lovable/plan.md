

## Plan: Google Play Store Link bei Captain's Log einfuegen

### Was wird gemacht
Ein Google Play Store Button wird neben dem bestehenden "Zur App" Button im Hero-Bereich eingefuegt -- auf allen 6 Sprachversionen der Captain's Log Detailseite.

### Umsetzung

**Button-Design:**
- Google Play Badge/Button mit Play Store Icon (aus lucide: `Smartphone` oder ein SVG Play Store Badge)
- Neben dem "Zur App" Button, gleiche Groesse
- Link: `https://play.google.com/store/apps/details?id=com.harborstudios.captainslog`
- Text je Sprache: "Google Play" (universal) oder "Im Play Store"

**Betroffene Dateien (6 Stueck):**
1. `src/pages/CaptainsLogDetails.tsx` (DE)
2. `src/pages/CaptainsLogDetailsEN.tsx` (EN)
3. `src/pages/CaptainsLogDetailsES.tsx` (ES)
4. `src/pages/CaptainsLogDetailsFR.tsx` (FR)
5. `src/pages/CaptainsLogDetailsIT.tsx` (IT)
6. `src/pages/CaptainsLogDetailsPT.tsx` (PT)

**Aenderung pro Datei:** Im Hero-Bereich wird nach dem "Zur App" Button ein zweiter Button eingefuegt:

```tsx
<a href="https://play.google.com/store/apps/details?id=com.harborstudios.captainslog" target="_blank" rel="noopener noreferrer">
  <Button size="lg" variant="outline">
    <Smartphone className="w-5 h-5 mr-2" />
    Google Play
  </Button>
</a>
```

### Ideen fuer Extras

- **Offizielles Google Play Badge** statt einfachem Button -- ein "Jetzt bei Google Play" SVG-Badge sieht professioneller aus
- **Apple App Store Link** spaeter ergaenzen, falls die App auch dort verfuegbar ist
- **QR-Code** zum Play Store Link im Footer oder in einer separaten Sektion

