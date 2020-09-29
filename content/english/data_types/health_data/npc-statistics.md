---
title: National Pandemic Centre SARS-CoV-2 (COVID-19) test statistics
menu:
    main:
        identifier: npc-statistics
        parent: health_data
        weight: 10
---

#### Total NPC test numbers

The total number of SARS-CoV-2 (COVID-19) tests run at NPC since
the start, split up into positive, negative and invalid/inconclusive
results.

<div class="d-lg-none alert alert-info">
  Scroll the plot sideways to view all data.
</div>

<div class="plot_wrapper">
  <div id="total-numbers-chart"></div>
</div>

#### Daily NPC test numbers

The number of SARS-CoV-2 (COVID-19) tests run daily, split up into
positive, negative and invalid/inconclusive results.

<div class="d-lg-none alert alert-info">
  Scroll the plot sideways to view all data.
</div>

<div class="plot_wrapper">
  <div id="stacked-bar-chart"></div>
</div>

#### Daily NPC tests positive fraction

The fraction of daily SARS-CoV-2 (COVID-19) tests that are positive,
as percent of all tests (excluding invalid/inconclusive).

<div class="d-lg-none alert alert-info">
  Scroll the plot sideways to view all data.
</div>

<div class="plot_wrapper">
  <div id="positive-bar-chart"></div>
</div>

_*Note that as the number of reported analyses vary, some days may have a low number of samples, affecting the statistics a lot for that day, e.g. August 24th where only seven samples were reported, all positive._

#### Cumulative NPC test numbers

The sum of all SARS-CoV-2 (COVID-19) virus tests run at NPC since the
start, as a function of date, and split up into positive, negative
and invalid/inconclusive results.

<div class="d-lg-none alert alert-info">
  Scroll the plot sideways to view all data.
</div>

<div class="plot_wrapper">
  <div id="cumulative-plot"></div>
</div>

The National Pandemic Centre (NPC) is a lab for
[SARS-CoV-2 (COVID-19) testing](https://ki.se/mtc/ctmr-and-covid-19)
set up within the
[Centre for Translational Microbiome Research (CTMR)](https://ki.se/en/research/centre-for-translational-microbiome-research-ctmr)
at [Karolinska Institutet (KI)](https://ki.se/en)/
[SciLifeLab](https://www.scilifelab.se/).
At the end of March 2020 the large-scale microbiome research lab was
quickly converted into a center that can assist Sweden in
analyzing SARS-CoV-2 tests.
This was made possible through a donation by the
[Knut and Alice Wallenberg Foundation (KAW)](https://kaw.wallenberg.org/en)
in combination with a previously established collaboration with
[MGI Tech.](https://en.mgitech.cn/) in Shenzen, China.
Initially providing assistance with RNA-extraction capacity to
Karolinska Universitetslaboratoriet, the National Pandemic Center
at KI/SciLifeLab quickly expanded into providing a facility providing
increased SARS-CoV-2 testing capacity to all regions of Sweden.

The current capacity of the National Pandemic Center at KI/SciLifeLab
is approximately 5000 test per day, with results typically returned
within 24 hours from the sample arriving to the lab. Please note that
only PCR-based analysis is performed at NPC, not serological
(antibody-based) analysis.

These numbers are compiled automatically and might not correspond to
the numbers reported through other sources for different reasons.
The data are updated once daily, and backdated changes to numbers might occur.

The dataset visualized in the graphs is available
[here](https://datagraphics.dckube.scilifelab.se/dataset/bbbaf64a25a1452287a8630503f07418) and is updated daily.
The source code for the graphs are
[here](https://datagraphics.dckube.scilifelab.se/graphic/ba0b27320fe74ad0aef59a26be6c37f1),
[here](https://datagraphics.dckube.scilifelab.se/graphic/ddb1119aefce47d58d0b3a49e98b4fcc),
[here](https://datagraphics.dckube.scilifelab.se/graphic/b31c50be59c84c93986c25b052115a65)
and [here](https://datagraphics.dckube.scilifelab.se/graphic/9145856246004419983d39fcf56d9eb6).

<script src="https://cdn.jsdelivr.net/npm/vega@5.12.1"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@4.12.2"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.8.0"></script>

<script src="https://datagraphics.dckube.scilifelab.se/graphic/ba0b27320fe74ad0aef59a26be6c37f1.js?id=total-numbers-chart"></script>

<script src="https://datagraphics.dckube.scilifelab.se/graphic/ddb1119aefce47d58d0b3a49e98b4fcc.js?id=stacked-bar-chart"></script>

<script src="https://datagraphics.dckube.scilifelab.se/graphic/b31c50be59c84c93986c25b052115a65.js?id=positive-bar-chart"></script>

<script src="https://datagraphics.dckube.scilifelab.se/graphic/9145856246004419983d39fcf56d9eb6.js?id=cumulative-plot"></script>
