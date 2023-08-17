(async function() {
    const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    const data = 
    {
        labels: [
            'Webdesign',
            'Mockup',
            'Prototyping',
            'Styleguide',
            'HTML',
            'CSS',
            'A11Y'
          ],
          datasets: [{
            label: 'Jahre der Erfahrung',
            data: [14, 12, 7, 13, 18, 18, 12],
            backgroundColor: [
              'rgba(255, 84, 73, 0.9)',
              'rgba(255, 84, 73, 0.7)',
              'rgba(255, 84, 73, 0.6)',
              'rgba(255, 84, 73, 0.8)',
              'rgba(255, 84, 73, 1)',
              'rgba(255, 84, 73, 1)',
              'rgba(255, 84, 73, 0.7)'
            ],
            borderColor: '#F5E3E0',
            hoverBorderColor: '#FF5449',
          }]
    }

  new Chart(
    document.getElementById('webdesign'),
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
                text: 'Webdesignerfahrung (in Jahre)',
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