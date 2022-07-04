function Questao13(){
    let montante = parseFloat(document.getElementById("montante").value);
    let porcentagemEntrada = (parseFloat(document.getElementById("porcentagemEntrada").value)) / 100;
    let parcelas = parseFloat(document.getElementById("valorMeses").value);
    let jurosEfetivos = (parseFloat(document.getElementById("valorJuros").value)) / 100;

    let valorEntrada = porcentagemEntrada * montante ;
    let valorLiquido = montante - valorEntrada;

    let parcelaPostecipada = valorLiquido/((((1+jurosEfetivos)**parcelas)-1)/(((1+jurosEfetivos)**parcelas) * jurosEfetivos));// PV - E = PMT*[(1+i)^n-1]/[(1+i)^n*i]
    let parcelaAntecipada = valorLiquido/((((1+jurosEfetivos)**parcelas)-1)/(((1+jurosEfetivos)**parcelas) * jurosEfetivos)*(1+jurosEfetivos));
    alert("Valor da parcela postecipada: " + parcelaPostecipada.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + "\nValor da parcela antecipada: " + parcelaAntecipada.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
}

function Questao12(){
    let S = parseFloat(document.getElementById("valorEmprestimo").value); // Recebe o valor do empréstimo
    let taxaEfetivaAnual = parseFloat(document.getElementById("valorTaxaEfetiva").value); // Recebe o valor da taxa efetiva anual
    let taxaEfetivaDeFundoAnual = parseFloat(document.getElementById("valorTaxaDeFundo").value); // recebe o valor da taxa efetiva de fundo anual
    let parcelas = parseFloat(document.getElementById("valorParcelas").value); // Recebe o número de parcelas

    let taxaEfetivaMensal = ((1+(taxaEfetivaAnual/100))**(1/12)-1);// Transforma a taxa efetiva para meses
    let taxaEfetivaDeFundoMensal = ((1+(taxaEfetivaDeFundoAnual/100))**(1/12)-1); // transforma o fundo mensal anual para meses

    let valorJurosMensais = S * taxaEfetivaMensal; // Calculo do juros mensal
    let valorJurosAcumulados = valorJurosMensais * parcelas; 
    let cotaFundoArmotizacao = S / ((((1+taxaEfetivaDeFundoMensal)**parcelas)-1) / taxaEfetivaDeFundoMensal)
    let desencaixes = valorJurosMensais + cotaFundoArmotizacao;
    let desencaixesAcumulado = desencaixes * parcelas;

    alert("Valor Juros mensais: " + valorJurosMensais.toLocaleString('en-US', { style: 'currency', currency: 'USD' })+"\nQuotas de Fundo de amortização: " + cotaFundoArmotizacao.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        + "\nDesencaixes: " + desencaixes.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + "\nSaldo do fundo de amortização após o sexto desencaixe: " + S.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        + "\nJuros Acumulados após sexto desencaixe: " + valorJurosAcumulados.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        + "\nDesencaixes Acumulados após o sexto termo: " + desencaixesAcumulado.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    );  
}
