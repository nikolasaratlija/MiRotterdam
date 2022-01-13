import {BaseChart} from "./BaseChart.js";

const ctx = document.getElementById('location-data').getContext('2d');

export function DesignsPerLocationChart(designOccurrences) {
    const labels = Object.keys(designOccurrences)
    const data = Object.values(designOccurrences)

    const Chart = BaseChart(ctx, 'Top 5 locaties met meeste ontwerpen')
    Chart(data, labels)
}

