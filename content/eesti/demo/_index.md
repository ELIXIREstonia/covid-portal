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

<div id="plotly-plot-experimental"></div>
<hr>
<figure id="clades">
    <picture>
        <svg xmlns="http://www.w3.org/2000/svg" class="d3-component" style="font-family:sans-serif;font-size:1.15rem" viewBox="0 0 1550 950"><g transform="translate(120,0)"><path fill="none" stroke="#ccc" stroke-width="3px" d="M 180 593.75
                  C 90 593.75,
                    90 617.5,
                    0 617.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 180 641.25
                  C 90 641.25,
                    90 617.5,
                    0 617.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 360 285
                  C 270 285,
                    270 593.75,
                    180 593.75"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 360 522.5
                  C 270 522.5,
                    270 593.75,
                    180 593.75"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 360 712.5
                  C 270 712.5,
                    270 593.75,
                    180 593.75"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 360 760
                  C 270 760,
                    270 593.75,
                    180 593.75"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 360 807.5
                  C 270 807.5,
                    270 593.75,
                    180 593.75"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 360 855
                  C 270 855,
                    270 593.75,
                    180 593.75"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 360 902.5
                  C 270 902.5,
                    270 593.75,
                    180 593.75"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 166.25
                  C 450 166.25,
                    450 285,
                    360 285"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 213.75
                  C 450 213.75,
                    450 285,
                    360 285"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 261.25
                  C 450 261.25,
                    450 285,
                    360 285"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 308.75
                  C 450 308.75,
                    450 285,
                    360 285"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 356.25
                  C 450 356.25,
                    450 285,
                    360 285"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 403.75
                  C 450 403.75,
                    450 285,
                    360 285"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 498.75
                  C 450 498.75,
                    450 522.5,
                    360 522.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 546.25
                  C 450 546.25,
                    450 522.5,
                    360 522.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 641.25
                  C 450 641.25,
                    450 712.5,
                    360 712.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 688.75
                  C 450 688.75,
                    450 712.5,
                    360 712.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 736.25
                  C 450 736.25,
                    450 712.5,
                    360 712.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 540 783.75
                  C 450 783.75,
                    450 712.5,
                    360 712.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 142.5
                  C 630 142.5,
                    630 166.25,
                    540 166.25"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 190
                  C 630 190,
                    630 166.25,
                    540 166.25"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 403.75
                  C 630 403.75,
                    630 403.75,
                    540 403.75"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 900 47.5
                  C 810 47.5,
                    810 142.5,
                    720 142.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 900 95
                  C 810 95,
                    810 142.5,
                    720 142.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 900 142.5
                  C 810 142.5,
                    810 142.5,
                    720 142.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 900 190
                  C 810 190,
                    810 142.5,
                    720 142.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 900 237.5
                  C 810 237.5,
                    810 142.5,
                    720 142.5"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 1080 95
                  C 990 95,
                    990 95,
                    900 95"></path><g class="node" transform="translate(0,617.5)"><circle class="node" r="15" style="fill: rgb(215, 215, 215); stroke: rgb(186, 186, 186);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">19A (B)</text></g><g class="node" transform="translate(180,593.75)"><circle class="node" r="15" style="fill: rgb(198, 198, 198); stroke: rgb(171, 171, 171);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">20A (B.1)</text></g><g class="node" transform="translate(180,641.25)"><circle class="node" r="15" style="fill: rgb(206, 206, 206); stroke: rgb(179, 179, 179);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">19B (A)</text></g><g class="node" transform="translate(360,285)"><circle class="node" r="15" style="fill: rgb(189, 189, 189); stroke: rgb(164, 164, 164);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">20B (B.1.1)</text></g><g class="node" transform="translate(360,522.5)"><circle class="node" r="15" style="fill: rgb(68, 92, 221); stroke: rgb(59, 80, 192);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">21A (Delta, B.1.617.2)</text></g><g class="node" transform="translate(360,712.5)"><circle class="node" r="15" style="fill: rgb(180, 180, 180); stroke: rgb(156, 156, 156);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">20C</text></g><g class="node" transform="translate(360,760)"><circle class="node" r="15" style="fill: rgb(175, 204, 93); stroke: rgb(152, 177, 81);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21H (Mu, B.1.621)</text></g><g class="node" transform="translate(360,807.5)"><circle class="node" r="15" style="fill: rgb(107, 185, 164); stroke: rgb(93, 160, 142);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21D (Eta, B.1.525)</text></g><g class="node" transform="translate(360,855)"><circle class="node" r="15" style="fill: rgb(84, 160, 203); stroke: rgb(73, 139, 176);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21B (Kappa, B.1.617.1)</text></g><g class="node" transform="translate(360,902.5)"><circle class="node" r="15" style="fill: rgb(163, 163, 163); stroke: rgb(142, 142, 142);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20E (EU1, B.1.177)</text></g><g class="node" transform="translate(540,166.25)"><circle class="node" r="15" style="fill: rgb(227, 191, 68); stroke: rgb(196, 166, 59);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">21M (Omicron, B.1.1.529)</text></g><g class="node" transform="translate(540,213.75)"><circle class="node" r="15" style="fill: rgb(121, 193, 144); stroke: rgb(105, 168, 125);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21E (Theta, P.3)</text></g><g class="node" transform="translate(540,261.25)"><circle class="node" r="15" style="fill: rgb(69, 66, 212); stroke: rgb(60, 57, 183);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20J (Gamma, V3, P.1)</text></g><g class="node" transform="translate(540,308.75)"><circle class="node" r="15" style="fill: rgb(79, 43, 192); stroke: rgb(69, 37, 167);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20I (Alpha, V1, B.1.1.7)</text></g><g class="node" transform="translate(540,356.25)"><circle class="node" r="15" style="fill: rgb(155, 155, 155); stroke: rgb(134, 134, 134);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20F (D.2)</text></g><g class="node" transform="translate(540,403.75)"><circle class="node" r="15" style="fill: rgb(172, 172, 172); stroke: rgb(149, 149, 149);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">20D (B.1.1.1)</text></g><g class="node" transform="translate(540,498.75)"><circle class="node" r="15" style="fill: rgb(70, 117, 221); stroke: rgb(61, 101, 192);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21I (Delta)</text></g><g class="node" transform="translate(540,546.25)"><circle class="node" r="15" style="fill: rgb(75, 141, 215); stroke: rgb(65, 122, 186);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21J (Delta)</text></g><g class="node" transform="translate(540,641.25)"><circle class="node" r="15" style="fill: rgb(137, 199, 124); stroke: rgb(119, 172, 107);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21F (Iota, B.1.526)</text></g><g class="node" transform="translate(540,688.75)"><circle class="node" r="15" style="fill: rgb(95, 174, 185); stroke: rgb(82, 151, 160);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21C (Epsilon, B.1.427/429)</text></g><g class="node" transform="translate(540,736.25)"><circle class="node" r="15" style="fill: rgb(101, 31, 169); stroke: rgb(88, 27, 146);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20H (Beta, V2, B.1.351)</text></g><g class="node" transform="translate(540,783.75)"><circle class="node" r="15" style="fill: rgb(146, 146, 146); stroke: rgb(127, 127, 127);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20G (B.1.2)</text></g><g class="node" transform="translate(720,142.5)"><circle class="node" r="15" style="fill: rgb(212, 199, 74); stroke: rgb(183, 172, 64);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">21L (Omicron, ~BA.2)</text></g><g class="node" transform="translate(720,190)"><circle class="node" r="15" style="fill: rgb(194, 203, 82); stroke: rgb(169, 176, 71);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21K (Omicron, BA.1)</text></g><g class="node" transform="translate(720,403.75)"><circle class="node" r="15" style="fill: rgb(156, 202, 107); stroke: rgb(135, 175, 93);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21G (Lambda, C.37)</text></g><g class="node" transform="translate(900,47.5)"><circle class="node" r="15" style="fill: rgb(238, 178, 63); stroke: rgb(207, 155, 55);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22A (Omicron, BA.4)</text></g><g class="node" transform="translate(900,95)"><circle class="node" r="15" style="fill: rgb(246, 161, 60); stroke: rgb(213, 140, 52);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">22B (Omicron, BA.5)</text></g><g class="node" transform="translate(900,142.5)"><circle class="node" r="15" style="fill: rgb(247, 136, 55); stroke: rgb(214, 118, 47);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22C (Omicron, BA.2.12.1)</text></g><g class="node" transform="translate(900,190)"><circle class="node" r="15" style="fill: rgb(245, 107, 49); stroke: rgb(212, 93, 43);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22D (Omicron, BA.2.75)</text></g><g class="node" transform="translate(900,237.5)"><circle class="node" r="15" style="fill: rgb(235, 43, 38); stroke: rgb(204, 37, 33);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22F (Omicron, XBB)</text></g><g class="node" transform="translate(1080,95)"><circle class="node" r="15" style="fill: rgb(239, 75, 43); stroke: rgb(208, 65, 37);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22E (Omicron, BQ.1)</text></g></g></svg>
    </picture>
    <figcaption style="text-align: center">
        <small>
            <span>Phylogenetic relationships of Nextstrain SARS-CoV-2 clades (</span><a target="_blank" rel="noopener noreferrer" href="https://github.com/nextstrain/ncov-clades-schema"><span>source</span> <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"></path></svg></span></a><span>). Please credit/link to </span><a target="_blank" rel="noopener noreferrer" href="https://nextstrain.org"><span>Nextstrain</span> <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"></path></svg></span></a><span> if using this figure.</span></small>
    </figcaption>
</figure>
<hr>
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

<script src="/plotly-plot.js?updated=2022-12-07"></script>

* Vastavad proovide absoluutarvud on toodud iga joonise kohal
* Nii nagu elus looduses organisme, nii saab ka viiruseid (sealhulgas SARS-CoV-2 variante) geneetilise sarnasuse järgi erinevatesse rühmadesse jagada. Teatud vaatenurgast on kõik sellised rühmitamised sarnased, kuigi kasutavad erinevaid arvulisi väärtusi piiride tõmbamiseks (Nexclade klaad, Pangolin’i tüvi, VOC, viimane on küll defineeritud funktsionaalsete omaduse järgi). Sellist rühmitamist saab teha eri täpsusastmega. Antud juhul on kasutatud sellist täpsusastet, mis võimaldab kogu pilti veel visuaalselt hoomata – selleks on klaad. Ka on toodud sulgudes milliste VOC-de (variant of concern ehk muret tekitavad tüved) vastav klaad kuulub. VOC-dest on meil esinenud alfa, beta, gamma, delta ja nüüd omikron.

---

* Eestis kogutud proovide sekventsidel põhinevat omavahelist sarnasust saab vaadata [Nextrain auspice rakenduses](https://auspice.biit.cs.ut.ee/ncov/est)
* Eestis kogutud proovide sekveneerimisandmetest leitud viirustüvede analüüs [Observable rakenduses](https://covid19dataportal.ee/observable)

---

Andmeid uuendatakse kord nädalas.

/2022-12-07/
