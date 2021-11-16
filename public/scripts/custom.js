function loadDesign() {
    let url = window.location.href;
    if (screen.width >= 730) {
        document.location = "index.html";
    } else if (screen.width < 730 && url.includes('locatie')) {
        let urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams.get('location'))
        document.getElementById('cityname').innerHTML = "Locatie: " + urlParams.get('locatie');
        console.log("verified")
    } else {
        document.location = "index.html";
    }
}

function showAbout() {
    document.getElementById('about').style.display = "block";
}

function showServices() {
    document.getElementById('services').style.display = "block";
    document.getElementById('aboutGradient').style.display = "block";
}

function servicesButton() {
    document.getElementById('servicesbutton').style.display = "block";
}

function showDesign() {
    document.getElementById('design').style.display = "block";
    document.getElementById('serviceGradient').style.display = "block";
}
 
