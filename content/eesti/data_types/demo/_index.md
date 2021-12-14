---
title: Plots demo
plotly: true
lodash: true
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
<div id="plotly-plot-age"></div>
<div id="plotly-plot-gender"></div>

<script src="/plotly-plot.js"></script>
