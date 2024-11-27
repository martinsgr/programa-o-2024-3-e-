import { getCSS, geraGrafico, incluiAnalise } from "./common.js"

async function objetivosUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const objetivosUsuarios = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
  const data = [
    {
      labels: objetivosUsuarios,
      values: quantidadeUsuarios,
      type: 'pie'
    }
  ]
  
  const layout = 
  {
    height: 700,
    width: 870,
    plot_bgcolor: getCSS('--cor-fundo'),
    paper_bgcolor: getCSS('--cor-fundo'),
    title: {
      text: 'Objetivos dos usuários nas Redes Sociais',
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
  
  incluiAnalise(`Apesar de o <span>Contato com Amigos e Família</span> ser o principal objetivo apontado na pesquisa é interessante ver que não há, de modo geral, um uso prioritário para as redes sociais.
  <br>Essa informação nos permite inferir que é bastante provável que os públicos das redes sociais sejam igualmente <span>diversos</span>.`)


  }
  
  objetivosUsuarios()