const colors = [
    '#AB63FA', '#636EFA', '#EF553B', '#00CC96', '#FFA15A', '#19D3F3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52',
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
    '#AB63FA', '#636EFA', '#EF553B', '#00CC96', '#FFA15A', '#19D3F3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52',
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
];

const clades = [
    "20H (Beta, V2)",
    "20I (Alpha, V1)",

    "20J (Gamma, V3)",
    "21A (Delta)",
    "21I (Delta)",
    "21J (Delta)",

    "21B (Kappa)",
    "21C (Epsilon)",
    "21D (Eta)",
    "21E (Theta)",
    "21F (Iota)",
    "21G (Lambda)",
    "21H (Mu)",
    "21K (Omicron)",
    "21L (Omicron)",
    "21M (Omicron)",

    "22B (Omicron)",
    "22C (Omicron)",
    "22D (Omicron)",
    "22E (Omicron)",

    "19A",
    "19B",
    "20A",
    "20C",
    "20G",
    "20B",
    "20D",
    "20F",
    "20E (EU1)"
];

const colorscheme = {
    "20H (Beta, V2)": "rgb(119, 37, 198)",
    "20I (Alpha, V1)": "rgb(91, 54, 229)",

    "20J (Gamma, V3)": "rgb(79, 87, 252)",
    "21A (Delta)": "rgb(79, 124, 255)",
    "21I (Delta)": "rgb(86, 158, 255)",
    "21J (Delta)": "rgb(97, 184, 241)",

    "21C (Epsilon)": "rgb(129, 219, 189)",
    "21D (Eta)": "rgb(149, 229, 161)",
    "21F (Iota)": "rgb(198, 240, 113)",
    "21G (Lambda)": "rgb(224, 238, 97)",
    "21H (Mu)": "rgb(248, 233, 87)",
    "21K (Omicron)": "rgb(255, 222, 79)",
    "21L (Omicron)": "rgb(255, 203, 73)",
    "21M (Omicron)": "rgb(255, 175, 67)",
    "22A (Omicron)": "rgb(255, 139, 61)",

    "22B (Omicron)": "rgb(255, 95, 52)",
    "22C (Omicron)": "rgb(255,83,44)",
    "22D (Omicron)": "rgb(255,64,42)",
    "22E (Omicron)": "rgb(255,42,25)",

    "19A": "#d6dde0",
    "19B": "#ced5d9",
    "20A": "#c7ced2",
    "20C": "#bfc6cb",
    "20G": "#b9bfc5",
    "20B": "#b2b9be",
    "20D": "#abb1b8",
    "20F": "#a4aab1",
    "20E (EU1)": "#a0a2ac"
};

let data, test_results;

let date_from = "2021-05-01";
let date_to = "2022-10-25";

let domestic = true;
let imported = true;


function getDateOfWeek(w, y) {
    let date = new Date(y, 0, (1 + (w) * 7));
    date.setDate(date.getDate() + (2 - date.getDay()));
    return date
}

function barPlot2(el, title, test_results, data) {

    let columns = _(data)
        .map(v => v["epiweek"])
        .uniq()
        .sortBy()
        .value();

    let rows = ['Sekveneeritud', 'Positiivne']

    let d = data;

    var bars = [];

    let i = 0;

    let weeks_labels = _.map(columns, (epiweek, i) => {
        let [year, w] = epiweek.split('-')
        return w + "<br>" + getDateOfWeek(Number(w), Number(year)).toISOString().split('T')[0];
    });



    for (let row of rows) {
        let counts = [];


        if (row === 'Sekveneeritud') {
            for (let column of columns) {
                counts.push(
                    _.filter(d, v => (v["epiweek"]) === column && (v["epiweek"] + "") !== 'null').length
                );
            }
        } else if (row === 'Positiivne') {
            for (let column of columns) {
                counts.push(
                    _.filter(test_results, v => (v["epiweek"]) === column && (v["ResultValue"] + "") === 'P')[0]['0']
                );
            }
        }




        bars.push({
            x: weeks_labels,
            y: counts,
            type: 'bar',
            name: row,
            marker: {
                line: {
                    color: 'white',
                    width: 1
                },
                color: colors[i]
            },

        });


        i += 1;

    }

    Plotly.newPlot(el, bars, {
        barmode: 'stack',
        height: 600,
        title: title,
        xaxis: {
            ticklen: 5,
            tickcolor: '#ccc',
            tickangle: 30,
        },
        hovermode: "x",
        yaxis: {
            type: "linear",
            ticklen: 5,
            tickcolor: '#ccc',
            // hoverformat: ".2%",
            tickformat: ",d"
        },
        margin:{
            t: 50,
            b: 150
        },
        legend: {
            traceorder: 'normal',
            orientation: 'h',
            y: -0.2,
        }

    }, {
        'modeBarButtons': [
            [
                'toImage',
                // 'zoom2d',
                // 'pan2d',
                // 'zoomIn2d',
                // 'zoomOut2d',
                // 'autoScale2d',
                // 'resetScale2d',
                // 'toggleSpikelines',
                'hoverClosestCartesian',
                'hoverCompareCartesian'
            ]
        ]
    });



}

function barPlot(el, variable1, variable2, title, data) {

    let rows = _(data)
        .groupBy(variable1)
        .map((items, name) => ({name, count: items.length}))
        .sortBy('count')
        .reverse()
        .map(v => v.name)
        // .filter(v => v !== 'null')
        .value();

    let columns = _(data)
        .groupBy(variable2)
        .map((items, name) => ({name, count: items.length}))
        .sortBy('name')
        // .reverse()
        .map(v => v.name)
        .filter()
        // .filter(v => v !== 'null')
        .value();


    if (columns.indexOf('Muu') > 0) {
        columns.splice(columns.indexOf('Muu'), 1);
        columns.push('Muu');
    }
    if (columns.indexOf('null') > 0) {
        columns.splice(columns.indexOf('null'), 1);
        columns.push('null');
    }


    let d = data;

    var bars = [];

    let i = 0;
    let totals = [];

    for (let row of rows) {
        let counts = [];
        totals = [];

        for (let column of columns) {
            let total = _.filter(d, v => (v[variable2] + "") === column && (v[variable1] + "") !== 'null').length;

            totals.push(total);

            counts.push(
                _.filter(d, v => ((v[variable1] + "") === row) && ((v[variable2] + "") === column)).length / total
            );
        }

        bars.push({
            x: _.map(columns,column => column === 'null' ? "N/A" : column),
            y: counts,
            type: 'bar',
            name: row,
            legendrank: clades.indexOf(row),
            hoverinfo: _.map(counts, datum => datum ? 'name+y' : 'skip'),
            marker: {
                line: {
                    color: 'white',
                    width: 1
                },
                color: colorscheme[row]
            },
        });

        bars.push({
            x: columns,
            y: columns,
            type: 'bar',
            xaxis: 'x2',
            name: row,
            showlegend: false,
            marker: {
                line: {
                    color: 'white',
                    width: 1
                },
                color: colorscheme[row]
            },
        });

        i += 1;

    }

    Plotly.newPlot(el, bars, {
        barmode: 'stack',
        height: 600,
        title: title,
        xaxis: {
            ticklen: 5,
            tickcolor: '#ccc'
        },
        hovermode: "x",
        yaxis: {
            type: "linear",
            ticklen: 5,
            tickcolor: '#ccc',
            hoverformat: ".2%",
            tickformat: ".0%"
        },
        xaxis2: {
            tickmode: 'array',
            titlefont: {color: 'grey'},
            tickfont: {color: 'grey'},

            tickvals: _.map(columns, (c, i) => i),
            ticktext: totals,


            overlaying: 'x',

            position: 0.96,
            side: 'top',
            anchor: 'free',
        },
        margin:{
            t: 50,
            b: 150
        },
        legend: {
            traceorder: 'normal',
            orientation: 'h',
            y: variable2 === 'Maakond_standard' ? -0.3 : -0.1,
        }

    }, {
        'modeBarButtons': [
            [
                'toImage',
                // 'zoom2d',
                // 'pan2d',
                // 'zoomIn2d',
                // 'zoomOut2d',
                // 'autoScale2d',
                // 'resetScale2d',
                // 'toggleSpikelines',
                'hoverClosestCartesian',
                'hoverCompareCartesian'
            ]
        ]
    });
}

function areaPlot(el, variable, data) {

    let lineages = _(data)
        .groupBy(variable)
        .map((items, name) => ({name, count: items.length}))
        .sortBy('count')
        .reverse()
        .map(v => v.name)
        // .filter(v => v !== 'null')
        .value();

    let weeks = _(data)
        .map(v => v["epiweek"])
        .uniq()
        .sortBy()
        .value();

    let totals = [];
    let total = 0;

    let weeks_labels = _.map(weeks, (epiweek, i) => {

        let [year, w] = epiweek.split('-');

        total = _.filter(data, v => v["epiweek"] === epiweek).length;
        totals.push(total);

        return w + "<br>" + getDateOfWeek(Number(w), Number(year)).toISOString().split('T')[0];
    });

    // let traces = [];
    let traces_percentage = [];
    // let traces_no_stack = [];
    let i = 0;

    for (let lineage of lineages) {
        let trace = {
            x: weeks_labels,
            y: [],
            name: lineage,
            mode: "lines+markers",
            marker: {
                size: [],
                color: colorscheme[lineage],
                opacity: 0,
                line: {
                    width: 0,
                }
            },
            color: colorscheme[lineage],
            fillcolor: colorscheme[lineage],
            line: {
                color: 'white',
                width: 1,
                shape: 'spline',
            },
            legendrank: clades.indexOf(lineage),
            hoverinfo: [],
            hoverlabel: {
                bgcolor: colorscheme[lineage],
            }
        };

        traces_percentage.push({
            x: weeks_labels,
            y: _.map(weeks_labels, ()=>0),
            mode: "lines",
            xaxis: 'x2',
            showlegend: false,
            hoverinfo: 'none',
            line: {
                color: 'transparent',
            },
        });


        i += 1;

        let d = _.filter(data, v => v[variable] === lineage);

        for (let week of weeks) {
            let count = _.filter(d, v => v["epiweek"] === week).length;

            trace.marker.size.push(
                (count > 0) ? 12 : 1
            );
            trace.hoverinfo.push(
                (count > 0) ? 'name+y' : 'none'
            );
            trace.y.push(count);
        }

        // traces_no_stack.push(trace);

        // traces.push({
        //     ...trace,
        //     stackgroup: 'one',
        // });

        traces_percentage.push({
            ...trace,
            stackgroup: 'one',
            groupnorm: 'fraction'
        })
    }

    Plotly.newPlot(el, traces_percentage, {
        title: "SARS-CoV-2 klaadide osakaalud proovide võtmise kuupäeva järgi",
        height: 600,
        hovermode: "x",
        xaxis: {
            ticklen: 5,
            tickcolor: '#ccc',
            tickangle: 30,
            title: 'Proovivõtu nädal ja kuupäev'
        },
        xaxis2: {
            tickmode: 'list',
            titlefont: {color: 'grey'},
            tickfont: {color: 'grey'},

            tickvals: _.map(weeks, (w,i) => i),
            ticktext: totals,
            tickangle: 45,


            overlaying: 'x',

            position: 0.95,
            side: 'top',
            anchor: 'free',
        },
        yaxis: {
            ticklen: 5,
            tickcolor: '#ccc',
            hoverformat: ".2%",
            tickformat: ".0%",
            title: 'Osakaal'
        },
        margin: {
            t: 50,
            b: 150
        },
        legend: {
            title: { text: 'Nextstrain-i klaadid (muret tekitav variant)', side: 'top' },
            traceorder: 'normal',
            orientation: 'h',
            y: -0.3,
        }
    }, {
        'modeBarButtons': [
            [
                'toImage',
                // 'zoom2d',
                // 'pan2d',
                // 'zoomIn2d',
                // 'zoomOut2d',
                // 'autoScale2d',
                // 'resetScale2d',
                // 'toggleSpikelines',
                'hoverClosestCartesian',
                'hoverCompareCartesian'
            ]
        ]
    });


}


function _nextWeek(epiweek) {
    let [year, week] = epiweek.split('-');

    year = parseInt(year);
    week = parseInt(week);

    if (week === 52) {
        year += 1;
        week = 1;
    }
    else {
        week += 1;
    }
    return year + '-' + String(week).padStart(2, '0');

}

function experimentalPlot(el, data) {

    let traces = [];

    let groupedByClade = _.groupBy(data, 'Clade_rerun');
    let groupedByEpiweek = _.groupBy(data, 'epiweek');

    let lineages = Object.keys(groupedByClade);

    for (let lineage of lineages) {
        let clade = groupedByClade[lineage]

        let epiweeks = _.sortBy(_.uniq(_.map(clade, v => v.epiweek)));

        let yData = [];

        let lastEpiweek = false;


        for (let epiweek of epiweeks) {
            let total = groupedByEpiweek[epiweek].length;
            let counts = _.filter(groupedByEpiweek[epiweek], v=>v['Clade_rerun'] === lineage).length;
            let fr = counts / total;

            if (lastEpiweek) {
                while (_nextWeek(lastEpiweek) !== epiweek) {
                    yData.push(0);
                    lastEpiweek = _nextWeek(lastEpiweek);
                }
            }

            yData.push(fr);
            lastEpiweek = epiweek;
        }

        traces.push({
            x: _.range(0, 50),
            y: yData,
            name: lineage,
            mode: "lines+markers",
            marker: {
                size: 2,
                color: colorscheme[lineage],
                line: {
                    width: 3,
                    color: colorscheme[lineage],
                }
            },
            line: {
                color: colorscheme[lineage],
                width: 1,
                shape: 'spline',
            },
            legendrank: clades.indexOf(lineage),
            hoverlabel: {
                bgcolor: colorscheme[lineage],
            }
        });
    }




    Plotly.newPlot(el, traces, {
        title: "Experimental plot",
        height: 600,
        hovermode: "x",
        xaxis: {
            ticklen: 5,
            tickcolor: '#ccc',
            tickangle: 30,
            title: "weeks from the variant's introduction"
        },
        yaxis: {
            ticklen: 5,
            tickcolor: '#ccc',
            hoverformat: ".2%",
            tickformat: ".0%",
            title: ''
        },
        margin: {
            t: 50,
            b: 150
        },
        legend: {
            title: { text: 'Nextstrain-i klaadid (muret tekitav variant)', side: 'top' },
            traceorder: 'normal',
            orientation: 'h',
            y: -0.3,
        }
    }, {
        'modeBarButtons': [
            [
                'toImage',
                'hoverClosestCartesian',
                'hoverCompareCartesian'
            ]
        ]
    });
}



function render() {

    let filtered_data = null;

    if (domestic && imported) {
        filtered_data = data;
    } else {
        if (domestic) {
            filtered_data = _.filter(data, v => v["Nakatumise_koht"] !== "Sissetoodud");
        } else if (imported) {
            filtered_data = _.filter(data, v => v["Nakatumise_koht"] === "Sissetoodud");
        } else {
            filtered_data = [];
        }
    }

    // console.log(filtered_data)

    filtered_data = _.filter(filtered_data, v => {
        let [year, w] = v["epiweek"].split('-');

        return getDateOfWeek(parseInt(w), parseInt(year)).getTime() >= new Date(date_from).getTime() &&
            getDateOfWeek(parseInt(w), parseInt(year)).getTime() <= new Date(date_to).getTime();
    });


    let el = document.getElementById('plotly-plot-experimental');
    if (el) {
        experimentalPlot(el, filtered_data);
    }

    areaPlot(document.getElementById('plotly-plot-clade'), "Clade_rerun", filtered_data);

    barPlot2(document.getElementById('plotly-plot-pos'), "Sekveneeritud proovide osakaal kõigist positiivsetest proovidest", test_results, filtered_data);

    barPlot(document.getElementById('plotly-plot-county'), "Clade_rerun", "Maakond_standard", "Arhiveeritud joonis. Andmed 01.05.2021-30.04.2022 maakondade lõikes.", filtered_data);

    barPlot(document.getElementById('plotly-plot-region'), "Clade_rerun", "Piirkond", "SARS-CoV-2 klaadide osakaalud piirkondades", filtered_data);

    barPlot(document.getElementById('plotly-plot-age'), "Clade_rerun", "Vanus_10", "SARS-CoV-2 klaadide osakaalud vanusegruppides", filtered_data);
}


$(document).ready(function () {

    let date_from_el = document.getElementById('date-from');
    let date_to_el = document.getElementById('date-to');

    date_from_el.value = date_from;
    date_to_el.value = date_to;

    let domestic_el = document.getElementById('domestic');
    let imported_el = document.getElementById('imported');

    domestic_el.checked = true;
    imported_el.checked = true;

    $(date_from_el).on('change', function (e) {
        date_from = e.target.value;
        render();
    })
    $(date_to_el).on('change', function (e) {
        date_to = e.target.value;
        render();
    })

    $(domestic_el).on('change', function (e) {
        domestic = e.target.checked;
        render();
    })
    $(imported_el).on('change', function (e) {
        imported = e.target.checked;
        render();
    })

    $.ajax({
        async: true,
        url: "/biobanks/seqdata_all_public.json?updated=2022-10-25",
        dataType: "json",
        success: function (split) {
            let columns = split.columns;

            data = _.map(split.data, values => {
                return Object.fromEntries(new Map(_.zip(columns, values)));
            });

            $.ajax({
                async: true,
                url: "/biobanks/test_results.json?updated=2022-10-25",
                dataType: "json",
                success: function (split) {
                    let columns = split.columns;

                    test_results = _.map(split.data, values => {
                        return Object.fromEntries(new Map(_.zip(columns, values)));
                    });

                    render();
                }
            });
        }
    });
});
