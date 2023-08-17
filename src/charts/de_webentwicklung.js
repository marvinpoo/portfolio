(async function() {
    const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    const data = 
    {
        labels: [
            'PHP',
            'Wordpress',
            'Javascript/JSON',
            'JS Frameworks',
            'Atomic Design',
            'REST',
            'GIT',
            'API'
          ],
          datasets: [{
            label: 'Jahre der Erfahrung',
            data: [13, 14, 3, 4, 11, 3, 10, 3],
            backgroundColor: [
              'rgba(198, 241, 64, 0.9)',
              'rgba(198, 241, 64, 1)',
              'rgba(198, 241, 64, 0.5)',
              'rgba(198, 241, 64, 0.6)',
              'rgba(198, 241, 64, 0.8)',
              'rgba(198, 241, 64, 0.5)',
              'rgba(198, 241, 64, 0.7)',
              'rgba(198, 241, 64, 0.5)'
            ],
            borderColor: '#F5E3E0',
            hoverBorderColor: '#FF5449',
          }]
    }

  new Chart(
    document.getElementById('webentwicklung'),
    {
        type: 'polarArea',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                position: 'top',
                labels: {
                  color: '#36393B'
                }
                },
                title: {
                display: true,
                text: 'Webentwicklungserfahrung (in Jahre)',
                color: '#36393B',
                font: {
                  size: 22,
                  family: 'inter'
                  }
                }
            },
            scale: {
                ticks: {
                    z:3
                }
            }
        },
    }
  );
})();