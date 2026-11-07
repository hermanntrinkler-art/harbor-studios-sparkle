# Captain’s Suite auf Harbor Studios

Auftrag Hermann, 07.11.2026. Bezug T-BRAND-SUITE-RENAME-1 im zentralen Captain’s-Log-Master. Basis 4aa19d9035e1006a4315d4c84a915c83e75a8478.

Sichtbaren Namen in Projektübersicht, sechs Produktseiten, sechs Übersetzungsdateien, Footer und den bestehenden Datenschutz-/Nutzungsbedingungen umgestellt. Nur Produktname in Rechtstexten geändert; technische IDs, URLs, Mailadressen, Dateinamen und Routennamen erhalten.

Produktbeschreibung auf digitales Logbuch, GPS-Aufzeichnung, Ankerwache, Bordorganisation sowie Routenplanung und kompatible Verbindungen erweitert. Erweiterte Segelplanung ausdrücklich Pilot, keine Zusage einer allgemeinen Freischaltung oder amtlicher Navigation. Veraltete Logbuch-only-Abgrenzung, Beta-Aufruf, sieben Sprachen und Lifetime-Neukauf korrigiert; Monats-/Jahresabos ohne neue Preise. Website hat weiterhin sechs Sprachen; die beworbene App hat acht inklusive DA.

Prüfung: npm ci erfolgreich; npm run build erfolgreich (bestehende Bundle-Größenwarnung); alle sechs Detailseiten mit Vite SSR und ReactDOMServer erfolgreich gerendert, Markenname und Play-ID geprüft. Kein SSR-Produktumbau: nur lokaler Prüfharness, Router warnt dort erwartungsgemäß über useLayoutEffect. Alle URLs der 21 geänderten Quelldateien automatisch mit den Originalen verglichen: identisch. Alle JSON-Dateien parsebar. React-Prüfung: nur Texte und statischer Feature-Eintrag, keine Hooks/Auth-/Datenflussänderung, bestehende semantische Komponenten und Linkattribute erhalten.

Browser-/Mobile-Layoutprüfung offen: Playwright verfügbar, Browser fehlt; Download des Browsers aus dieser Umgebung lieferte ungültiges ZIP. Kein Browser-/Gerätetest behauptet. Öffentliche Bilder wurden beim lokalen Quellenbuild nicht vollständig übernommen; keine visuelle Bildabnahme. Vor Produktionsfreigabe Vercel-Vorschau und Darstellung insbesondere bei 320/360 px prüfen. Keine Produktionsveröffentlichung, kein nativer Build.
