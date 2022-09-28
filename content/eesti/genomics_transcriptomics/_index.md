---
title: Genoomika ja transkriptoomika andmed
menu:
    main:
        name: Avalikud andmed
        identifier: genomics_transcriptomics_data
        parent: genomics_transcriptomics
        weight: 10
        pre: <i class="fas fa-dna"></i>
    horizontal:
        name: Genoomika
        identifier: genomics_transcriptomics_data
        weight: 10
plotly: true
lodash: true
---

###### Vaata ka: [Juhendid kuidas genoomika ja transkriptoomika andmeid jagada](../guidelines) | [Teenused: genoomika ja transkriptoomika](../services)

## Avalikud andmed

#### Andmed Euroopa COVID-19 Andmeportaalis

COVID-19 puhanguga seotud toor- ja assambleeritud SARS-CoV-2 järjestused, sealhulgas haiguspuhangu isolaadid ja koronaviiruse bioloogiaga seotud kirjed:

* [SARS-COV-2 viiruse toor- ja assambleeritud järjestused](https://www.covid19dataportal.org/sequences?db=embl-covid19) (> 2 830 000 järjestust seisuga Detsember 2021)
* [SARS-COV-2 peremeesorganismide (s..h inimese) toor- ja assambleeritud järjestused](https://www.covid19dataportal.org/host-sequences?db=hostSequences) (> 19 000 järjestust seisuga Detsember 2021)

---

#### KoroGeno-EST viiruse genoomi sekveneerimine

KoroGeno-EST uuringu eesmärgiks on sekveneerida (määrata genoomi koostis) ja analüüsida Eestis nakkusi põhjustanud ja põhjustavat SARS-CoV-2 täisgenoome ning viia neile läbi molekulaar-epidemioloogiline analüüs. KoroGeno-EST uuring toimub Tartu Ülikooli, Terviseameti ja SYNLAB Eesti OÜ koostöös.
Siin on ära toodud uuringu peamised tulemused SARS-CoV-2 klaadide ja muret tekitavate variantide osakaalude kohta, mida saab külastaja ajas jälgida.
Selleks saab:
* joonistel valida ajavahemikku, mille kohta andmed kuvatakse
* valida, kas kuvatakse reisimisega seotud juhud või riigisisesed.

---
KoroGeno-EST uuringus raames teevad koostööd:

<img width="200" src="/img/logos/ut_logo.png">
<img width="200" style="margin-top: -20px;" src="/img/logos/synlab_logo.png">
<img width="200" style="margin-left: 30px;" src="/img/logos/terviseamet_logo.png">

<strong>Rahastatakse Euroopa Liidu COVID-19 pandeemiale reageerimise raames</strong>
<img width="200" src="/img/logos/eu-ee_logo.jpg">

---


<label for="date-from">Kuupäev alates:</label>
<input type="date" id="date-from" name="date-from"
value="2021-01-01">

<label for="date-to">Kuupäev kuni:</label>
<input type="date" id="date-to" name="date-to"
value="2021-01-01">

<input type="checkbox" id="domestic" name="source" value="domestic" checked>
  <label for="domestic"> Riigisisene</label>&nbsp;&nbsp;&nbsp;
<input type="checkbox" id="imported" name="source" value="imported" checked>
  <label for="imported"> Sissetoodud</label><br>

<div id="plotly-plot-clade"></div>
<hr>
<div id="plotly-plot-pos"></div>
<hr>
<div id="plotly-plot-county"></div>
<hr>
<div id="plotly-plot-region"></div>
<hr>
<div id="plotly-plot-age"></div>
<hr>
<div id="plotly-plot-gender"></div>

<script src="/plotly-plot.js?updated=2022-09-27"></script>

* Vastavad proovide absoluutarvud on toodud iga joonise kohal
* Nii nagu elus looduses organisme, nii saab ka viiruseid (sealhulgas SARS-CoV-2 variante) geneetilise sarnasuse järgi erinevatesse rühmadesse jagada. Teatud vaatenurgast on kõik sellised rühmitamised sarnased, kuigi kasutavad erinevaid arvulisi väärtusi piiride tõmbamiseks (Nexclade klaad, Pangolin’i tüvi, VOC, viimane on küll defineeritud funktsionaalsete omaduse järgi). Sellist rühmitamist saab teha eri täpsusastmega. Antud juhul on kasutatud sellist täpsusastet, mis võimaldab kogu pilti veel visuaalselt hoomata – selleks on klaad. Ka on toodud sulgudes milliste VOC-de (variant of concern ehk muret tekitavad tüved) vastav klaad kuulub. VOC-dest on meil esinenud alfa, beta, gamma, delta ja nüüd omikron.

---

* Eestis kogutud proovide sekventsidel põhinevat omavahelist sarnasust saab vaadata [Nextrain auspice rakenduses](https://auspice.biit.cs.ut.ee/ncov/est)
* Eestis kogutud proovide sekveneerimisandmetest leitud viirustüvede analüüs [Observable rakenduses](https://covid19dataportal.ee/observable)

---

Andmeid uuendatakse kord nädalas.

/2022-09-27/
