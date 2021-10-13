const fs = require('fs')

module.exports = () => {
    let filesArr = []

    fs.readdirSync('../public/assets/elements', (err, files) => {
        files.forEach(file => filesArr.push(file))
        console.log(filesArr)
    })
}
