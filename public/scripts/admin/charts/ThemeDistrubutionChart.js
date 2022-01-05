import {BaseChart} from "./BaseChart.js";

const ctx = document.getElementById('thema-data').getContext('2d');

export function ThemeDistributionChart(data, labels) {
    const Chart = BaseChart(ctx, `Verdeling thema's`)
    Chart([12, 8, 4 , 2], ['Ontspanning', 'Spel & Sport', 'Groen', 'Veilig'])
}