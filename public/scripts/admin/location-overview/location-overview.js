fetch('/api/locations') //haalt de locatie data op
    .then(result => result.json()) //Data converteren naar JSON
    .then(json => toonOpDashboard(json)) //Toont JSON in html pagina div


//Functie om alle locaties te tonen op het dashboard
function toonOpDashboard(locaties){
    let locatiesHTML = ""   //variabel waar alle html in komt
    console.log("Inside toondashboard functie");

    locaties.forEach(locatie => { //loop over alle locaties
        console.log(locatie)
        //Maakt een nieuwe html element aan met locatie data
        locatiesHTML += `
            <div class="locatie-card">
            <p>Locatie</p>
                <img src="${locatie.image}" alt="">
                <p>Locatie: ${locatie.location}</p>
            </div>`
    })

    //Zet alle data in de html div dmv
    document.getElementById('locatiesDiv').innerHTML += locatiesHTML
}