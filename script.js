// Função para converter números em letras
function numeroParaPalavra(num) {
    const palavras = [
        "0", "10", "20", "30", "40", "50",
        "60", "70", "80", "90", "100", "110", "120",
        "130", "140", "150", "160", "170",
        "180", "190", "200"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tradicional', 'Extraforte', 'Superior', 'Gourmet', 'Especial'],
        datasets: [{
            label: 'Vendas',
            data: [280, 500, 120, 310, 190], // Números originais
            backgroundColor: [
                'rgba(255, 127, 80, 0.2)', // Vermelho
                'rgba(255, 127, 80, 0.2)', // Azul
                'rgba(255, 127, 80, 0.2)', // Amarelo
                'rgba(255, 127, 80, 0.2)', // Verde-água
                'rgba(255, 127, 80, 0.2)' // Roxo
            ],
            borderColor: [
                'rgba(255, 127, 80, 1)', // Vermelho
                'rgba(255, 127, 80, 1)', // Azul
                'rgba(255, 127, 80, 1)', // Amarelo
                'rgba(255, 127, 80, 1)', // Verde-água
                'rgba(255, 127, 80, 1)' // Roxo
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#FF7F50' // Cor vermelha para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: 'red', // Cor do texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#FF7F50' // Cor vermelha para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Livros',
                    color: '#FF7F50'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FF7F50', // Cor vermelha para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Vendas',
                    color: '#FF7F50'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
