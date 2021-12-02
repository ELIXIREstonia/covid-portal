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
    "20H (Beta, V2)": "#5330cd",
    "20I (Alpha, V1)": "#4756e7",

    "20J (Gamma, V3)": "#4a80e9",
    "21A (Delta)": "#55a2da",
    "21I (Delta)": "#67bbbf",
    "21J (Delta)": "#7bcb9d",

    "21B (Kappa)": "#97d27e",
    "21C (Epsilon)": "#b5d864",
    "21D (Eta)": "#d3d553",
    "21E (Theta)": "#edcb49",
    "21F (Iota)": "#ffb442",
    "21G (Lambda)": "#fe903a",
    "21H (Mu)": "#ff6132",
    "21K (Omicron)": "#f82e27",

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

let data;

let date_from = "2021-05-01";
let date_to = new Date().toLocaleDateString('en-CA');

let domestic = true;
let imported = true;


function getDateOfWeek(w, y) {
    let date = new Date(y, 0, (1 + (w) * 7));
    date.setDate(date.getDate() + (2 - date.getDay()));
    return date
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
        }

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
        .map(v => v["Nädal_nr"])
        .uniq()
        .sortBy()
        .value();

    let weeks_labels = _.map(weeks, w => {
        return w + "<br>" + getDateOfWeek(Number(w), 2021).toISOString().split('T')[0];
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


        i += 1;

        let d = _.filter(data, v => v[variable] === lineage);

        for (let week of weeks) {
            let count = _.filter(d, v => v["Nädal_nr"] === week).length;

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
        title: "Ülevaade",
        height: 600,
        xaxis: {
            ticklen: 5,
            tickcolor: '#ccc',
            tickangle: 30,
        },
        yaxis: {
            ticklen: 5,
            tickcolor: '#ccc',
            hoverformat: ".2%",
            tickformat: ".0%"
        },
        margin: {
            t: 50,
            b: 150
        },
        legend: {
            traceorder: 'normal',
            orientation: 'h',
            y: -0.3,
        }
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

    filtered_data = _.filter(filtered_data, v => {
        let w = v["Nädal_nr"];
        return getDateOfWeek(Number(w), 2021).getTime() >= new Date(date_from).getTime() &&
            getDateOfWeek(Number(w), 2021).getTime() <= new Date(date_to).getTime();
    });

    areaPlot(document.getElementById('plotly-plot-clade'), "Clade_rerun", filtered_data);

    barPlot(document.getElementById('plotly-plot-county'), "Clade_rerun", "Maakond_standard", "Maakondade kaupa", filtered_data);
    barPlot(document.getElementById('plotly-plot-age'), "Clade_rerun", "Vanus_10", "Vanusegruppide kaupa", filtered_data);
    // barPlot(document.getElementById('plotly-plot-gender'), "Clade_rerun", "Sugu", "", filtered_data);
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
        url: "/biobanks/seqdata_all_public.json",
        dataType: "json",
        success: function (split) {
            let columns = split.columns;

            data = _.map(split.data, values => {
                return Object.fromEntries(new Map(_.zip(columns, values)));
            });

            render();
        }
    });
});
