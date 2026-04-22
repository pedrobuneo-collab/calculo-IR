let salarioBruto = parseFloat(prompt("Digite o seu salario bruto mensal (ex: 15,000.00)"));
let imposto = 0;
let aliquota = "";

if (salarioBruto <= 5000.00) {
    imposto = 0;
    aliquota = "Isento";
} else if (salarioBruto > 5000.01) {
    imposto = salarioBruto * 0.075; //7.5%
    aliquota = "Aliquota de 7.5%";
}

if (salarioBruto <= 6500.00) {
    imposto = salarioBruto * 0.075;
    aliquota = "aliquota de 7,5%";
} else if (salarioBruto >= 6500.01) {
    imposto = salarioBruto * 0.15;
    aliquota = "Aliquota de 15%";
} else if (salarioBruto <= 8000.00) {
    imposto = salarioBruto * 0.15;
    aliquota = "Aliquota de 15%";
} else if (salarioBruto >= 8000.01) {
    imposto = salarioBruto * 0.225;
    aliquota = "aliquota de 22,5%";
} else {
    impsoto = salarioBruto * 0.275;
    aliquota = "Aliquota 27,5";
} 

let salarioLiquido = salarioBruto - imposto; // calcular salario liquido 
alert("---------Recebido de pagamento-------");
alert(`Salario Bruto: R$ ${salarioBruto.tofixed(2)}\nAlíquota aplicada: ${alíquota}\nValor desconto de IR: R$ ${salarioLiquido.toFixed(2)})`);