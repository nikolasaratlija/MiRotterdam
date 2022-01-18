import {DesignsPerLocationChart} from "./DesignsPerLocationChart.js";
// import {ElementOccurrencesChart} from "./ElementOccurrencesChart.js";
import {ThemeDistributionChart} from "./ThemeDistrubutionChart.js";
import * as utils from "./utils.js";

(async () => {
    const locationsRawData = await fetch('/api/locations/designs')
    const locationsData = await locationsRawData.json()

    const designOccurrences = utils.designOccurrencesPerLocation(locationsData)
    DesignsPerLocationChart(designOccurrences)

    ThemeDistributionChart()

    // const elementOccurrences = utils.elementOccurrencesPerLocation(locationsData)
    // ElementOccurrencesChart(elementOccurrences)

})()