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
<figure id="clades">
    <div class="figure-title">
        Peamiste Nextstraini klaadide, WHO poolt kasutatavate nimetuste ja Pango liinide omavahelised vastavused ning skemaatilised evolutsioonilised seosed
    </div>
    <picture>
        <svg xmlns="http://www.w3.org/2000/svg" class="d3-component" style="font-family:sans-serif;font-size:1.2rem" viewBox="0 0 1800 1150"><g transform="translate(120,0)"><path fill="none" stroke="#ccc" stroke-width="3px" d="M 240 696.0526315789474
              C 120 696.0526315789474,
                120 726.3157894736842,
                0 726.3157894736842"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 240 756.578947368421
              C 120 756.578947368421,
                120 726.3157894736842,
                0 726.3157894736842"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 480 302.63157894736844
              C 360 302.63157894736844,
                360 696.0526315789474,
                240 696.0526315789474"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 480 605.2631578947369
              C 360 605.2631578947369,
                360 696.0526315789474,
                240 696.0526315789474"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 480 847.3684210526316
              C 360 847.3684210526316,
                360 696.0526315789474,
                240 696.0526315789474"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 480 907.8947368421053
              C 360 907.8947368421053,
                360 696.0526315789474,
                240 696.0526315789474"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 480 968.421052631579
              C 360 968.421052631579,
                360 696.0526315789474,
                240 696.0526315789474"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 480 1028.9473684210527
              C 360 1028.9473684210527,
                360 696.0526315789474,
                240 696.0526315789474"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 480 1089.4736842105262
              C 360 1089.4736842105262,
                360 696.0526315789474,
                240 696.0526315789474"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 151.31578947368422
              C 600 151.31578947368422,
                600 302.63157894736844,
                480 302.63157894736844"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 211.8421052631579
              C 600 211.8421052631579,
                600 302.63157894736844,
                480 302.63157894736844"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 272.36842105263156
              C 600 272.36842105263156,
                600 302.63157894736844,
                480 302.63157894736844"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 332.89473684210526
              C 600 332.89473684210526,
                600 302.63157894736844,
                480 302.63157894736844"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 393.42105263157896
              C 600 393.42105263157896,
                600 302.63157894736844,
                480 302.63157894736844"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 453.94736842105266
              C 600 453.94736842105266,
                600 302.63157894736844,
                480 302.63157894736844"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 575
              C 600 575,
                600 605.2631578947369,
                480 605.2631578947369"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 635.5263157894736
              C 600 635.5263157894736,
                600 605.2631578947369,
                480 605.2631578947369"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 756.578947368421
              C 600 756.578947368421,
                600 847.3684210526316,
                480 847.3684210526316"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 817.1052631578948
              C 600 817.1052631578948,
                600 847.3684210526316,
                480 847.3684210526316"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 877.6315789473684
              C 600 877.6315789473684,
                600 847.3684210526316,
                480 847.3684210526316"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 720 938.1578947368421
              C 600 938.1578947368421,
                600 847.3684210526316,
                480 847.3684210526316"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 960 121.05263157894737
              C 840 121.05263157894737,
                840 151.31578947368422,
                720 151.31578947368422"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 960 181.57894736842104
              C 840 181.57894736842104,
                840 151.31578947368422,
                720 151.31578947368422"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 960 453.94736842105266
              C 840 453.94736842105266,
                840 453.94736842105266,
                720 453.94736842105266"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 1200 60.526315789473685
              C 1080 60.526315789473685,
                1080 181.57894736842104,
                960 181.57894736842104"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 1200 121.05263157894737
              C 1080 121.05263157894737,
                1080 181.57894736842104,
                960 181.57894736842104"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 1200 181.57894736842104
              C 1080 181.57894736842104,
                1080 181.57894736842104,
                960 181.57894736842104"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 1200 242.10526315789474
              C 1080 242.10526315789474,
                1080 181.57894736842104,
                960 181.57894736842104"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 1200 302.63157894736844
              C 1080 302.63157894736844,
                1080 181.57894736842104,
                960 181.57894736842104"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 1440 60.526315789473685
              C 1320 60.526315789473685,
                1320 60.526315789473685,
                1200 60.526315789473685"></path><path fill="none" stroke="#ccc" stroke-width="3px" d="M 1440 242.10526315789474
              C 1320 242.10526315789474,
                1320 242.10526315789474,
                1200 242.10526315789474"></path><g class="node" transform="translate(0,726.3157894736842)"><circle class="node" r="15" style="fill: rgb(215, 215, 215); stroke: rgb(186, 186, 186);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">19A (B)</text></g><g class="node" transform="translate(240,696.0526315789474)"><circle class="node" r="15" style="fill: rgb(198, 198, 198); stroke: rgb(171, 171, 171);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">20A (B.1)</text></g><g class="node" transform="translate(240,756.578947368421)"><circle class="node" r="15" style="fill: rgb(206, 206, 206); stroke: rgb(179, 179, 179);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">19B (A)</text></g><g class="node" transform="translate(480,302.63157894736844)"><circle class="node" r="15" style="fill: rgb(189, 189, 189); stroke: rgb(164, 164, 164);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">20B (B.1.1)</text></g><g class="node" transform="translate(480,605.2631578947369)"><circle class="node" r="15" style="fill: rgb(68, 88, 220); stroke: rgb(59, 76, 191);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">21A (Delta, B.1.617.2)</text></g><g class="node" transform="translate(480,847.3684210526316)"><circle class="node" r="15" style="fill: rgb(180, 180, 180); stroke: rgb(156, 156, 156);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">20C</text></g><g class="node" transform="translate(480,907.8947368421053)"><circle class="node" r="15" style="fill: rgb(164, 203, 100); stroke: rgb(142, 176, 87);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21H (Mu, B.1.621)</text></g><g class="node" transform="translate(480,968.421052631579)"><circle class="node" r="15" style="fill: rgb(102, 181, 172); stroke: rgb(88, 157, 149);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21D (Eta, B.1.525)</text></g><g class="node" transform="translate(480,1028.9473684210527)"><circle class="node" r="15" style="fill: rgb(82, 155, 206); stroke: rgb(71, 134, 179);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21B (Kappa, B.1.617.1)</text></g><g class="node" transform="translate(480,1089.4736842105262)"><circle class="node" r="15" style="fill: rgb(163, 163, 163); stroke: rgb(142, 142, 142);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20E (EU1, B.1.177)</text></g><g class="node" transform="translate(720,151.31578947368422)"><circle class="node" r="15" style="fill: rgb(218, 198, 71); stroke: rgb(189, 171, 61);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">21M (Omicron, B.1.1.529)</text></g><g class="node" transform="translate(720,211.8421052631579)"><circle class="node" r="15" style="fill: rgb(115, 190, 152); stroke: rgb(100, 165, 132);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21E (Theta, P.3)</text></g><g class="node" transform="translate(720,272.36842105263156)"><circle class="node" r="15" style="fill: rgb(69, 62, 210); stroke: rgb(60, 54, 183);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20J (Gamma, P.1)</text></g><g class="node" transform="translate(720,332.89473684210526)"><circle class="node" r="15" style="fill: rgb(79, 42, 191); stroke: rgb(69, 36, 166);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20I (Alpha, B.1.1.7)</text></g><g class="node" transform="translate(720,393.42105263157896)"><circle class="node" r="15" style="fill: rgb(155, 155, 155); stroke: rgb(134, 134, 134);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20F (D.2)</text></g><g class="node" transform="translate(720,453.94736842105266)"><circle class="node" r="15" style="fill: rgb(172, 172, 172); stroke: rgb(149, 149, 149);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">20D (B.1.1.1)</text></g><g class="node" transform="translate(720,575)"><circle class="node" r="15" style="fill: rgb(70, 113, 222); stroke: rgb(61, 98, 193);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21I (Delta)</text></g><g class="node" transform="translate(720,635.5263157894736)"><circle class="node" r="15" style="fill: rgb(74, 135, 218); stroke: rgb(64, 117, 189);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21J (Delta)</text></g><g class="node" transform="translate(720,756.578947368421)"><circle class="node" r="15" style="fill: rgb(130, 197, 133); stroke: rgb(113, 170, 115);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21F (Iota, B.1.526)</text></g><g class="node" transform="translate(720,817.1052631578948)"><circle class="node" r="15" style="fill: rgb(91, 170, 190); stroke: rgb(79, 147, 165);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21C (Epsilon, B.1.427/429)</text></g><g class="node" transform="translate(720,877.6315789473684)"><circle class="node" r="15" style="fill: rgb(101, 31, 169); stroke: rgb(88, 27, 146);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20H (Beta, B.1.351)</text></g><g class="node" transform="translate(720,938.1578947368421)"><circle class="node" r="15" style="fill: rgb(146, 146, 146); stroke: rgb(127, 127, 127);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">20G (B.1.2)</text></g><g class="node" transform="translate(960,121.05263157894737)"><circle class="node" r="15" style="fill: rgb(183, 203, 88); stroke: rgb(158, 176, 76);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21K (Omicron, BA.1)</text></g><g class="node" transform="translate(960,181.57894736842104)"><circle class="node" r="15" style="fill: rgb(201, 202, 78); stroke: rgb(174, 175, 68);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">21L (Omicron, ~BA.2)</text></g><g class="node" transform="translate(960,453.94736842105266)"><circle class="node" r="15" style="fill: rgb(147, 201, 115); stroke: rgb(128, 174, 100);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">21G (Lambda, C.37)</text></g><g class="node" transform="translate(1200,60.526315789473685)"><circle class="node" r="15" style="fill: rgb(239, 74, 43); stroke: rgb(208, 64, 37);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">22F (Omicron, XBB)</text></g><g class="node" transform="translate(1200,121.05263157894737)"><circle class="node" r="15" style="fill: rgb(247, 132, 54); stroke: rgb(214, 115, 47);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22D (Omicron, BA.2.75)</text></g><g class="node" transform="translate(1200,181.57894736842104)"><circle class="node" r="15" style="fill: rgb(247, 157, 59); stroke: rgb(214, 136, 51);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22C (Omicron, BA.2.12.1)</text></g><g class="node" transform="translate(1200,242.10526315789474)"><circle class="node" r="15" style="fill: rgb(241, 174, 62); stroke: rgb(209, 151, 54);"></circle><text dy=".35em" x="-20" text-anchor="end" fill="#777" font-weight="700">22B (Omicron, BA.5)</text></g><g class="node" transform="translate(1200,302.63157894736844)"><circle class="node" r="15" style="fill: rgb(231, 188, 67); stroke: rgb(200, 163, 58);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22A (Omicron, BA.4)</text></g><g class="node" transform="translate(1440,60.526315789473685)"><circle class="node" r="15" style="fill: rgb(235, 43, 38); stroke: rgb(204, 37, 33);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">23A (Omicron, XBB.1.5)</text></g><g class="node" transform="translate(1440,242.10526315789474)"><circle class="node" r="15" style="fill: rgb(244, 104, 48); stroke: rgb(211, 90, 42);"></circle><text dy=".35em" x="20" text-anchor="start" fill="#777" font-weight="700">22E (Omicron, BQ.1)</text></g></g></svg>
    </picture>
    <figcaption style="text-align: center">
        <small>
            <span>Phylogenetic relationships of Nextstrain SARS-CoV-2 clades (</span><a target="_blank" rel="noopener noreferrer" href="https://github.com/nextstrain/ncov-clades-schema"><span>source</span> <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"></path></svg></span></a><span>). Please credit/link to </span><a target="_blank" rel="noopener noreferrer" href="https://nextstrain.org"><span>Nextstrain</span> <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"></path></svg></span></a><span> if using this figure.</span></small>
    </figcaption>
</figure>
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

<script src="/plotly-plot.js?updated=2023-03-25"></script>

* Vastavad proovide absoluutarvud on toodud iga joonise kohal
* Nii nagu elus looduses organisme, nii saab ka viiruseid (sealhulgas SARS-CoV-2 variante) geneetilise sarnasuse järgi erinevatesse rühmadesse jagada. Teatud vaatenurgast on kõik sellised rühmitamised sarnased, kuigi kasutavad erinevaid arvulisi väärtusi piiride tõmbamiseks (Nextstraini klaad, Pango liin, VOC, viimane on küll defineeritud funktsionaalsete omaduse järgi). Sellist rühmitamist saab teha eri täpsusastmega. Antud juhul on kasutatud sellist täpsusastet, mis võimaldab kogu pilti veel visuaalselt hoomata – selleks on klaad. Ka on toodud sulgudes milliste VOC-de (variant of concern ehk muret tekitavad tüved) vastav klaad kuulub. VOC-dest on meil esinenud alfa, beta, gamma, delta ja nüüd omikron.

---

* Eestis kogutud proovide sekventsidel põhinevat omavahelist sarnasust saab vaadata [Nextrain auspice rakenduses](https://auspice.biit.cs.ut.ee/ncov/est)
* Eestis kogutud proovide sekveneerimisandmetest leitud viirustüvede analüüs [Observable rakenduses](https://covid19dataportal.ee/observable)

---

Andmeid uuendatakse kord nädalas.

/2023-03-25/
