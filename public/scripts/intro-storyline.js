//verhaallijn
function showAbout() {
    document.getElementById('about').style.display = "block";
    document.getElementById('herobox').style.display = "none";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function kijkenBtn() {
    await sleep(160);
    document.getElementById('kijkendiv').style.display = "none";
    document.getElementById('luisterdiv').style.display = "block";
}

async function luisterBtn() {
    await sleep(160);
    document.getElementById('luisterdiv').style.display = "none";
    document.getElementById('inspireerdiv').style.display = "block";
}
