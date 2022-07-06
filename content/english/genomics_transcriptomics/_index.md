---
title: Genomics & transcriptomics data
menu:
    main:
        name: Published data
        identifier: genomics_transcriptomics_data
        parent: genomics_transcriptomics
        weight: 10
        pre: <i class="fas fa-dna"></i>
    horizontal:
        name: Genomics
        identifier: genomics_transcriptomics_data
        weight: 10
plotly: true
lodash: true
---

###### See also: [Guidelines for submitting genomics & transcriptomics data](../guidelines) | [Services: genomics & transcriptomics](../services)

## Published Data

#### Data available on the European COVID-19 Data Portal

Published raw and assembled sequences related to the COVID-19 outbreak, including outbreak isolates and records relating to coronavirus biology:

* [Raw and assembled sequence and analysis of SARS-CoV-2 and other coronaviruses](https://www.covid19dataportal.org/sequences?db=embl-covid19) (> 2 830 000 deposited items as of Dec 2021)
* [Raw and assembled sequence and analysis of human and other hosts](https://www.covid19dataportal.org/host-sequences?db=hostSequences) (> 19 000 deposited items as of Dec 2021)

---

#### KoroGeno-EST virus genome sequencing

The aim of the KoroGeno-EST study is to sequence (determine the composition of the genome) and analyze the complete genomes of SARS-CoV-2 that have caused and are causing infections in Estonia and to perform a molecular epidemiological analysis on them. The KoroGeno-EST survey is conducted in cooperation with the University of Tartu, the Health Board and SYNLAB Eesti OÜ.
Here are the main findings of the study on the proportions of SARS-CoV-2 clades and variants of concern that can be observed by the visitor over time.
To do this, you can:
* In the drawings, select the time period for which the data is displayed
* Choose whether to display travel-related events or domestic.

---
KoroGeno-EST is a collaboration between:

<img width="200" src="/img/logos/ut_logo.png">
<img width="200" style="margin-top: -20px;" src="/img/logos/synlab_logo.png">
<img width="200" style="margin-left: 30px;" src="/img/logos/terviseamet_logo.png">

<strong>Funded by the European Union COVID-19 Pandemic Response</strong>
<img width="200" src="/img/logos/eu-ee_logo.jpg">

---


<label for="date-from">Date from:</label>
<input type="date" id="date-from" name="date-from"
value="2021-01-01">

<label for="date-to">Date to:</label>
<input type="date" id="date-to" name="date-to"
value="2021-01-01">

<input type="checkbox" id="domestic" name="source" value="domestic" checked>
  <label for="domestic"> Domestic</label>&nbsp;&nbsp;&nbsp;
<input type="checkbox" id="imported" name="source" value="imported" checked>
  <label for="imported"> Imported</label><br>

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

<script src="/plotly-plot.js?updated=2022-07-05"></script>

* The corresponding absolute sample numbers are given above each figure
* Like living organisms in the wild, viruses (including SARS-CoV-2 variants) can be divided into different groups based on genetic similarity. From a certain point of view, all such groupings are similar, although they use different numerical values ​​to draw boundaries (Nexclade glass, Pangolin strain, VOC, the latter being defined by functional properties). Such grouping can be performed with varying degrees of accuracy. In this case, a degree of precision has been used that allows the whole image to be seen visually - it is glass. It is also indicated in brackets which VOCs (variant of concern) belong to the corresponding glass. We have alpha, beta, gamma, delta and now omicrons in VOCs.

---

* The similarity based on the sequences of the samples collected in Estonia can be viewed in the [Nextrain auspice application](https://auspice.biit.cs.ut.ee/ncov/est)
* Analysis of virus strains found in the sequencing data of samples collected in Estonia [Observable application](https://covid19dataportal.ee/observable)

---

Data is updated once a week.

/2022-07-05/
