const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--cor-principal'),
    family: getCSS('--font-principal'),
    size: 16
}


const geraGrafico = (data, layout) => {
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    const config ={
        responsive: true,
        displayModeBar: false
    }
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout, config)
}

function incluiAnalise(texto) {
    const container = document.getElementById('graficos-container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

export {getCSS, tickConfig, geraGrafico, incluiAnalise}