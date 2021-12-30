const locationDataCtx = document.getElementById('location-data').getContext('2d');

new Chart(locationDataCtx, {
    type: 'bar',
    data: {
        labels: ['Beurs', 'Hofplein', 'Wilhelminaplein', 'Coolsingel', 'Retiefstraat'],
        datasets: [{
            label: 'Top 5 locaties met meeste ontwerpen',
            data: [9, 7, 5, 3, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});

const elementDataCtx = document.getElementById('element-data').getContext('2d');

new Chart(elementDataCtx, {
    type: 'bar',
    data: {
        labels: ['Bloem2', 'Bloem1', 'Picknick', 'Coolsingel', 'Retiefstraat'],
        datasets: [{
            label: 'Top 10 meest gebruikte elementen, globaal',
            data: [9, 7, 5, 3, 2, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});

const themaDataCtx = document.getElementById('thema-data').getContext('2d');

new Chart(themaDataCtx, {
    type: 'bar',
    data: {
        labels: ['Ontspanning', 'Spel & Sport', 'Groen', 'Veilig'],
        datasets: [{
            label: `Verdeling thema's`,
            data: [12, 8, 4 , 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});