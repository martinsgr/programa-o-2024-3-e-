async function visualizarInformacoesGlobais() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

    const res = await fetch(url)
    const dados = await res.json()
    const totalPessoas = (dados.total_pessoas_mundo) / 1e9
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas)*60)
    const porcentagemConectada = ((pessoasConectadas / totalPessoas ) * 100).toFixed(2)


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `<span>Você sabia ???</span> 
      <br>Que no Mundo existem cerca de <span>${totalPessoas}</span> bilhões de pessoas?
      <br>Que <span>${pessoasConectadas}</span> bilhões estão conectadas em alguma rede social e que elas passam em média <span>${horas}</span> horas <span>${minutos}</span> e minutos conectadas a essas redes. 
      
      <br><br>
      Esse número representa que <span>${porcentagemConectada} %</span> das pessoas estão conectadas a alguma rede social.
      `

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)


}

visualizarInformacoesGlobais()