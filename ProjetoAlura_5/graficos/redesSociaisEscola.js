import { geraGrafico, getCSS, incluiAnalise } from "./common.js"

async function redesSociaisFavoritasMinhaEscola() {
    const dadosLocaisString = localStorage.getItem('respotaRedesSociais')
    
    if (dadosLocaisString) {
        const dadosLocais = JSON.parse(dadosLocaisString)  
        processarDados(dadosLocais)
    } else {
        const url = '/ProjetoAlura_5/graficos/arquivosJson/redesEscola.json'
        const res = await fetch(url) 
        const dados = await res.json()
        localStorage.setItem('respotaRedesSociais', JSON.stringify(dados))
        processarDados(dados)
    }
}

function processarDados(dados) {
    const redesSociais = dados.slice(1).map(redes => redes[1])
    
    const contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
        acc[redesSociais]=(acc[redesSociais] || 0) + 1
        return acc
    }, {})
    
    const valores = Object.values(contagemRedesSociais)
    const nome_redes = Object.keys(contagemRedesSociais)

    const data = [
        {
            values: valores,
            labels: nome_redes,
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
        text: 'Rede Social preferida dos usuários na Minha Escola',
        x: 0,
        font: {
            color: getCSS('--cor-principal'),
            family: getCSS('--font-principal'),
            size: 30
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
    incluiAnalise('Assim como foi visto nos Dados Globais o <span>Instagram</span> é a rede social preferida, também na nossa escola, mas diferente das informações mundiais, que são mais distribuidas, localmente ele concentra sozinho <span>40%</span> da preferência.')

}

redesSociaisFavoritasMinhaEscola()