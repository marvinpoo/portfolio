(async function() {
    const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    const data = 
    {
        labels: [
            'Scrum',
            'Kanban',
            'Scrummaster',
            'Staging',
            'Dokumentation',
            'Teammanagement',
            'Outsourcing'
          ],
          datasets: [{
            label: 'Jahre der Erfahrung',
            data: [14, 14, 2, 10, 5, 2, 4],
            backgroundColor: [
                'rgba(54, 57, 59, 1)',
                'rgba(54, 57, 59, 1)',
                'rgba(54, 57, 59, 0.6)',
                'rgba(54, 57, 59, 0.9)',
                'rgba(54, 57, 59, 0.8)',
                'rgba(54, 57, 59, 0.6)',
                'rgba(54, 57, 59, 0.7)'
            ],
            borderColor: '#F5E3E0',
            hoverBorderColor: '#FF5449',
          }]
    }

  new Chart(
    document.getElementById('projektmanagement'),
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
                text: 'DevOps/PM-Erfahrung (in Jahre)',
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