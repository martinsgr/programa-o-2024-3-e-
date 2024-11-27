import { getCSS, geraGrafico, incluiAnalise } from "./common.js"

async function redesFavoritas() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = 
    {
      height: 700,
      width: 870,
      plot_bgcolor: getCSS('--cor-fundo'),
      paper_bgcolor: getCSS('--cor-fundo'),
      title: {
        text: 'Rede Social preferida dos usuários',
        x: 0,
        font: {
            color: getCSS('--cor-principal'),
            family: getCSS('--font-principal'),
            size: 40
        }
      },
      legend: {
        font: {
            color: getCSS('--cor-principal'),
            family: getCSS('--font-principal'),
            size: 16
        }
      }
      
    }


    geraGrafico(data, layout)

    incluiAnalise(`<span>Quarta colocada</span> em volume de usuários no mundo, mas a <span>preferida dos usuários</span>, o <span>Instagram</span> possui uma inegável margem para crescimento.
    <br>Chama a atenção ainda que o <span>Youtube</span>, a segunda rede em número de usuários, sequer aparecer entre as 10 primeiras por preferência.`)

}

redesFavoritas()