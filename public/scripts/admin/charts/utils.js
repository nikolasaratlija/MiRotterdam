export function designOccurrencesPerLocation(locationsData) {
    const designOccurrences = {}
    locationsData.forEach(location => designOccurrences[location.location_name] = location.designs.length)
    return designOccurrences
}

export function elementOccurrencesPerLocation(locationsData) {
    const elementOccurrences = {}

    locationsData.forEach(location => {
        elementOccurrences[location.location_name] = {}

        location.designs.forEach(design => design.elements.forEach(element => {
            elementOccurrences[location.location_name][element.element_name] =
                (elementOccurrences[location.location_name][element.element_name] || 0) + 1
        }))
    })

    return elementOccurrences
}

export function themeDistribution(data) {
    throw new Error('Not Implemented')
}