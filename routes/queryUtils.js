// this function takes the sql rows and turns it into a JSON object,
// all elements are grouped per design_id
module.exports = {
    groupByDesignId: (designs) => {
        let groupedDesigns = {}

        designs.forEach(({location_id, element_name, width, position_x, position_y, design_id}) => {
            // I have no clue why this works
            groupedDesigns[design_id] = groupedDesigns[design_id] || {design_id, location_id, elements: []}

            const element = {
                'element_name': element_name,
                'width': width,
                'position_x': position_x,
                'position_y': position_y,
            }

            groupedDesigns[design_id].elements.push(element)
        })

        return Object.values(groupedDesigns)
    }
}