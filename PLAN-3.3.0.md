# PascalCSS 3.3.0 - Piano Prima di Procedere

## Obiettivo
Pubblicare PascalCSS 3.3.0 introducendo:
- Utility mancanti ad alto uso reale
- Naming full e autoesplicativo
- Compatibilita graduale con naming legacy (alias)
- Set container moderni (almeno 10)

## Cosa ho gia verificato
Confronto tra haufe-style.css e pascal-css.css completato.
Risultato: PascalCSS e gia piu ampio, ma mancano alcune utility legacy molto usate e serve allineare naming verso full-word.

## Principi guida 3.3.0
1. Nessun breaking change nascosto.
2. Prima aggiunte additive, poi deprecazioni soft.
3. Naming autoesplicativo: preferire nomi completi.
4. Coerenza con mentalita utility-first moderna (stile Tailwind), ma in PascalCase.

## Scope Proposto

### 1) Utility da aggiungere subito (alta priorita)
- FlexAuto
- Flex1
- Gap03
- Gap04
- Alias visibility legacy richiesti (da mappare su schema attuale)

Nota: alcune utility esistono gia con naming diverso o semantica leggermente diversa; in 3.3.0 si puo mantenere la vecchia forma come alias.

### 2) Naming full-word (alta priorita)
Proposta di standard:
- Eccezione esplicita: per Margin e Padding manteniamo abbreviazioni standard e chiare
- MarginB10, MarginL20, MarginT10, MarginR10, MarginX20, MarginY20
- PaddingB25, PaddingT10, PaddingL20, PaddingR20, PaddingX20, PaddingY20
- TextTransformUppercase, TextTransformLowercase, TextTransformCapitalize
- FlexDirectionRow, FlexDirectionColumn
- GridTemplateColumnsN

Strategia:
- Full-word per tutte le categorie, tranne Margin/Padding
- Margin/Padding restano in forma abbreviata standard (B/T/L/R/X/Y)
- Mantenere classi legacy come alias dove necessario
- Documentare deprecazioni senza rimuovere subito

### 3) Container moderni (richiesta esplicita)
Set proposto (10 classi ContentWrapper numeriche, stile haufe):
- ContentWrapper640: 640px
- ContentWrapper768: 768px
- ContentWrapper960: 960px
- ContentWrapper1024: 1024px
- ContentWrapper1140: 1140px
- ContentWrapper1260: 1260px
- ContentWrapper1366: 1366px
- ContentWrapper1450: 1450px
- ContentWrapper1600: 1600px
- ContentWrapper1920: 1920px

Regola comune:
- Tutte con margin: 0 auto e padding orizzontale responsive
- Mobile: padding 0 10px
- Da 480px in su: padding 0 30px

Per compatibilita:
- Mappare ContentWrapper1000/1260/1450/PDS su nuove classi equivalenti o alias.
- Mantenere i nomi legacy esistenti come alias per evitare rotture.

### 4) Cose da non portare tali e quali
- Regole anomale o invalide
- Utility duplicate incoerenti
- Naming ambiguo (Bot, M/L poco chiari)
- Hardcode fragili quando esiste scala coerente

## Piano di esecuzione
1. Definire naming policy ufficiale nel README.
2. Implementare nuove utility e alias in pascal-css.css.
3. Rigenerare dist/pascal-css.css via build.
4. Aggiornare changelog con Added/Changed/Deprecated.
5. Aggiungere tabella di migrazione legacy -> nuovo naming.

## Verifica prima del rilascio
- Presenza classi nuove nel sorgente e in dist
- Nessuna regressione su utility esistenti
- Coerenza responsive Sm/Md/Lg/Xl
- Coerenza scale spacing e typography

## Decisioni che ti chiedo di approvare
1. Confermi strategia alias + naming full-word?
2. Confermi il set di 10 ContentWrapper numerici proposto?
3. Confermi che in 3.3.0 non rimuoviamo nulla, ma marchiamo deprecated?
4. Vuoi includere subito mapping visibility legacy (HiddenMobile/HiddenDesktop)?

## Output che preparo dopo la tua approvazione
- Patch completa su pascal-css.css
- Build aggiornata in dist/pascal-css.css
- README con naming policy e migration table
- CHANGELOG 3.3.0 pronto
