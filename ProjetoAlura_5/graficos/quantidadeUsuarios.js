import { getCSS, tickConfig, geraGrafico } from "./common.js"

async function quantidadeUsuarios() {

    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()

    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-principal')
            }
        }
    ]

    const layout = 
    {
      height: 700,
      width: 870,
      plot_bgcolor: getCSS('--cor-fundo'),
      paper_bgcolor: getCSS('--cor-fundo'),
      title: {
        text: 'Redes Sociais com mais usuários no mundo',
        x: 0,
        font: {
            color: getCSS('--cor-principal'),
            family: getCSS('--font-principal'),
            size: 40
        }
      },
      xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Nome da Rede Social',
            font: {
                color: getCSS('--cor-destaque')
            }
        }

      },
      yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'milhões de usuários ativos',
            font: {
                color: getCSS('--cor-destaque')
            }
        }

      }
    }

    geraGrafico(data, layout)
}

quantidadeUsuarios()