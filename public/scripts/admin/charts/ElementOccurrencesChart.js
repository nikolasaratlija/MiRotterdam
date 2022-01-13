import {BaseChart} from "./BaseChart.js";

const ctx = document.getElementById('element-data').getContext('2d');

export function ElementOccurrencesChart(elementOccurrences) {
    const labels = Object.keys(elementOccurrences)
    const data = Object.values(elementOccurrences)

    const Chart = BaseChart(ctx, 'Top 10 meest gebruikte elementen, globaal')
    Chart(data, labels)
}