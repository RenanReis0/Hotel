var senha = 2678;
var nome;
var nomeHotel = "hotel Stars Hollow";
var quartos = []
for (var i = 1; i <= 20; i++) {
    quartos.push(i + " - livre.");
}
function inicio(){
    alert('Bem-vindo ao Hotel Stars Hollow!');
    nome = prompt('Por favor, informe seu nome:');
    var senhaInformada = parseInt(prompt('Por favor, informe a senha de acesso:'));
    while (senhaInformada !== senha) {
        alert('Senha incorreta! Tente novamente.');
        senhaInformada = parseInt(prompt('Por favor, informe a senha de acesso:'));
    }
    alert("Bem-vindo ao "+nomeHotel+", "+nome+"! É um imenso prazer ter você por aqui!");
    menu();
}
function menu() {

    var escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Eventos 4.) Mais opções 5.) Sair'));

    switch (escolha) {
        case 1:
            reserva_quartos();
            break;
        case 2:
            cadastro_hospedes();
            break;
        case 3:
            hotel_eventos();
            break;
        case 4:
            mais_opcoes();
            break;
        case 5:
            sair();
            break;
        default:
            erro();
    }
}		

function reserva_quartos() {
    var diaria = parseInt(prompt("Qual o valor padrão da diária?"));
    while(diaria <= 0) {
        alert('Valor inválido,'+nome+'.');
        diaria = parseInt(prompt("Qual o valor padrão da diária?"));
    }
    var dias = parseInt(prompt("Quantos dias o hóspede ficará?"));
    while(dias <= 0 && dias > 30) {
        alert('Valor inválido,'+nome+'.');
        dias = parseInt(prompt("Quantos dias o hóspede ficará?"));
    }
    alert("O valor "+dias+" dias de hospedagem é de R$" + (diaria * dias) + ",00.");
    var nomeHospede = prompt("Qual o nome do hóspede?");
    while(nomeHospede == "" || nomeHospede == null) {
        alert('Valor inválido,'+nome+'.');
        nomeHospede = prompt("Qual o nome do hóspede?");
    }
    quartoReserva = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"));
    while(quartoReserva < 1 || quartoReserva > 20) {
        alert('Valor inválido,'+nome+'.');
        quartoReserva = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"));
    }
    while (quartos[quartoReserva - 1].includes("ocupado")) {
        alert('Quarto está ocupado. Escolha outro.');
        quartoReserva = parseInt(prompt("Qual o quarto para reserva? (1 - 20)?"));
    }
    alert('Quarto livre.');
    
    var confirma = confirm(nome+", você confirma a hospedagem para "+nomeHospede+" por "+dias+" dias para o quarto "+quartoReserva+" por R$" + (diaria * dias) + ",00? S/N");
    if (confirma) {
        alert(nome+', reserva efetuada para '+nomeHospede+".");
        quartos[quartoReserva - 1] = quartoReserva + " - ocupado.";
    } else {
        alert('Reserva cancelada!');
    }

    alert("Lista de quartos e suas ocupações:\n" + quartos.join("; "));

    menu();
}
function hotel_eventos() {
    auditorio_laranja = 150;
    auditorio_laranja_maisvagas = 70;
    auditorio_colorado = 350;

    let numero_convidados = parseInt(prompt("Quantos convidados?"));
    while (numero_convidados <= 0) {
        alert('Número de convidados inválido');
        numero_convidados = parseInt(prompt("Quantos convidados?"));
    }
    while(numero_convidados > 350) {
        alert('Quantidade de convidados superior à capacidade máxima');
        numero_convidados = parseInt(prompt("Quantos convidados?"));
    }
    
    if (numero_convidados <= auditorio_laranja){
        alert("O evento será realizado no auditório Laranja.");
    } else if (numero_convidados > auditorio_laranja && numero_convidados <= auditorio_laranja_maisvagas+auditorio_laranja){
        let incluir_cadeiras = numero_convidados - auditorio_laranja;
        alert("Use o auditório Laranja (inclua mais "+ incluir_cadeiras+" cadeiras)");
        alert("Agora vamos ver a agenda do evento.")
    } else if (numero_convidados > auditorio_laranja_maisvagas+auditorio_laranja && numero_convidados <= auditorio_colorado){
        alert("O evento será realizado no auditório Colorado.");
        alert("Agora vamos ver a agenda do evento.")
    } else if (numero_convidados > auditorio_colorado){
        alert("Quantidade de convidados superior à capacidade máxima");
    }

    while(true){
        let dia_evento = prompt("Qual o dia da semana do evento?");
        while (dia_evento == "" || dia_evento == null) {
            alert('Valor inválido,'+nome+'.');
            dia_evento = prompt("Qual o dia da semana do evento?");
        }
        let horario_evento = parseInt(prompt("Qual o horário do evento?"));
        while (horario_evento == "" || horario_evento == null) {
            alert('Valor inválido,'+nome+'.');
            horario_evento = prompt("Qual o horário do evento?");
        }
        if (dia_evento == "Sábado" || "Sabado" || "sábado" || "sabado" || "Domingo" || "domingo"){
            if (horario_evento >= 7 && horario_evento <= 15){
                let nome_empresa = prompt("Qual o nome da empresa?");
                while (nome_empresa == "" || nome_empresa == null) {
                    alert('Valor inválido,'+nome+'.');
                    nome_empresa = prompt("Qual o nome da empresa?");
                }
                alert("Auditório reservado para "+nome_empresa+". "+dia_evento+" às "+horario_evento+" horas.");
                break;
            } else {
                alert("Auditório indisponivel para o evento.");
                break
            }
        }
        if (dia_evento == "Segunda" || "Terça" || "Quarta" || "Quinta" || "Sexta"){
            if (horario_evento >= 7 && horario_evento <= 23){
                let nome_empresa = prompt("Qual o nome da empresa?");
                while (nome_empresa == "" || nome_empresa == null) {
                    alert('Valor inválido,'+nome+'.');
                    nome_empresa = prompt("Qual o nome da empresa?");
                }
                alert("Auditório reservado para "+nome_empresa+". "+dia_evento+" às "+horario_evento+" horas.");
            } else {
                alert("Auditório indisponivel para o evento.");
                break
            }
        }
        
    }
    let duraçãoEvento = parseInt(prompt("Qual a duração do evento?"));
        let garconSalarioHora = 10.50;
        let quantidadeGarcon = Math.ceil(numero_convidados / 12) + (duraçãoEvento / 2);
        let valorGarcon = garconSalarioHora * quantidadeGarcon * duraçãoEvento;

        while (duraçãoEvento <= 0) {
            alert('Valor inválido,'+nome+'.');
            duraçãoEvento = parseInt(prompt("Qual a duração do evento?"));
        }
        alert(`São necessários ${quantidadeGarcon} garçons`);
        alert(`Custo: R$ ${valorGarcon.toFixed(2)}`);
        alert(`Agora vamos calcular o valor do buffet do hotel para o evento.`);

        let quantidadeSalgados = numero_convidados * 7;
        let quantidadeAgua = numero_convidados * 0.5;
        let quantidadeCafe = numero_convidados * 0.2;

        alert(`Quantidade de salgados: ${quantidadeSalgados}; Quantidade de água: ${quantidadeAgua}; Quantidade de café: ${quantidadeCafe}.`);
        let valorSalgados = 34 * (quantidadeSalgados / 100);
        let valorAgua = 0.40 * quantidadeAgua;
        let valorCafe = 0.8 * quantidadeCafe;

        alert(`O evento precisará de ${quantidadeCafe} litros de café, ${quantidadeAgua} litros de água e ${quantidadeSalgados} salgados.`);

        alert(``)
    menu();
}


function cadastro_hospedes() {
    gratuidade = 0;
    meia = 0;
    meiaPaga = 0;
    hospedesCadastrados = 0;
    var diaria = parseInt(prompt("Qual o valor padrão da diária?"));
    while(diaria <= 0) {
        alert('Valor inválido,'+nome+'.');
        diaria = parseInt(prompt("Qual o valor padrão da diária?"));
    }
    if (lista_hospedes.length >= 15){
        alert("Máximo de cadastros atingido")
    }
    while(lista_hospedes.length <=15) {
        var nomeHospede = prompt("Qual o nome do hóspede?");
        lista_hospedes.push(nomeHospede);
        if(nomeHospede == "PARE"){
            diariaTotal = diaria * hospedesCadastrados;
            gratuidadePaga = gratuidade * diaria;
            alert(nome+", o valor total das hospedagens é: R$" + (diariaTotal-gratuidadePaga-meiaPaga) + ",00; \n"+gratuidade+" gratuidade(s); "+meia+" meia(s).");
            lista_hospedes.pop("PARE");
            break;
        }
        while(nomeHospede == "" || nomeHospede == null) {
            alert('Valor inválido,'+nome+'.');
            nomeHospede = prompt("Qual o nome do hóspede?");
        }
        var idadeHospede = parseInt(prompt("Qual a idade do hóspede?"));
        while(idadeHospede <= 0) {
            alert('Valor inválido,'+nome+'.');
            idadeHospede = parseInt(prompt("Qual a idade do hóspede?"));
        }
        if (idadeHospede <= 6){
            alert(nomeHospede+" cadastrado(a) com sucesso! "+nomeHospede+" possui gratuidade.")
            gratuidade += 1;
        } else if (idadeHospede >= 60){
            alert(nomeHospede+" cadastrado(a) com sucesso! "+nomeHospede+" paga meia.");
            meiaPaga = diaria / 2;
            meia += 1;
        } else {
            alert(nomeHospede+" cadastrado(a) com sucesso!");
        }
        hospedesCadastrados += 1;
        
    }
    mais_opcoes();
}
let lista_hospedes = [];
function abastecer_carros() {
    let alcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"))
    let gasolinaWayne = parseFloat(prompt("Qual o valor do gasolina no posto Wayne Oil?"))
    let alcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"))
    let gasolinaStark = parseFloat(prompt("Qual o valor do gasolina no posto Wayne Oil?"))

    let alcoolBaratoW = (30*gasolinaWayne)/100
    let alcoolBaratoS = (30*gasolinaStark)/100

    if(gasolinaStark > gasolinaWayne){
        if((gasolinaWayne-alcoolWayne)>= alcoolBaratoW){
            alert(`${nome}, é mais barato abastecer com o àlcool no posto Wayne Oil.`)
        } else{
            alert(`${nome}, é mais barato abastecer com o gasolina no posto Wayne Oil.`)
        }
    } else{
        if((gasolinaStark-alcoolStark)>= alcoolBaratoS){
            alert(`${nome}, é mais barato abastecer com o àlcool no posto Stark Petrol.`)
        } else{
            alert(`${nome}, é mais barato abastecer com o gasolina no posto Stark Petrol.`)
        }
    }
    menu();
}





function mais_opcoes() {
    let escolha = parseInt(prompt('Selecione uma opção 1.) Cadastrar; 2.) Pesquisar; 3.) Listar; 4.) Abastecer carros 5.) Manutenção 6.) Menu.'));
    while (escolha < 1 || escolha > 6) {
        alert('Valor inválido,'+nome+'.');
        escolha = parseInt(prompt('Selecione uma opção 1.) Cadastrar; 2.) Pesquisar; 3.) Listar; 4.) Abastecer carros 5.) Manutenção 6.) Menu.'));
    }
    switch(escolha){
        case 1:
            cadastro_hospedes();
            break;
        case 2:
            pesquisar_hospedes();
            break;
        case 3:
            listar_hospedes();
            break;
        case 4:
            abastecer_carros();
            break;
        case 5:
            manutencao_arcondicionado();
            break
        case 6:
            menu();
            break;
        default:
            erro();
    }
}

function pesquisar_hospedes() {
    var nomeHospede = prompt("Qual o nome do hóspede?");
    while(nomeHospede == "" || nomeHospede == null) {
        alert('Valor inválido,'+nome+'.');
        nomeHospede = prompt("Qual o nome do hóspede?");
    }
    if (lista_hospedes.includes(nomeHospede)) {
        alert("Hóspede "+nomeHospede+" foi encontrado.");
    } else {
        alert("Hóspede "+nomeHospede+" não foi encontrado.");
    }
    mais_opcoes();
}

function listar_hospedes() {	
    if (lista_hospedes.length == 0) {
        alert("Nenhum hóspede cadastrado.");
    } else {
        alert("Lista de hóspedes cadastrados:\n" + lista_hospedes.join("; "));
    }
    mais_opcoes();
}

function manutencao_arcondicionado(){
    let empresas = []
    let valoresEmpresas = []
    while(true){
        
        let nomeEmpresa = prompt("Qual o nome da empresa?")
        empresas.push(nomeEmpresa)
        let valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"))
        let qntAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"))
        let desconto = parseFloat(prompt("Qual a porcentagem de desconto?"))
        let minAparelhos = parseFloat(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"))
    
        if(qntAparelhos>minAparelhos){
            descontoServico = ((valorPorAparelho*qntAparelhos)*desconto)/100
            precoServico = (valorPorAparelho*qntAparelhos)-(descontoServico)
            valoresEmpresas.push(precoServico)
        }else{
            precoServico = (valorPorAparelho*qntAparelhos)
            valoresEmpresas.push(precoServico)
        }
        
        alert(`O serviço da ${nomeEmpresa} custará R$${precoServico}`)
        let novaEmpresa = prompt(`Deseja informar novos dados, ${nome}? (S/N)`).toLowerCase()
        if(novaEmpresa == "n"){
            servicoMaisBarato = Math.min(...valoresEmpresas)
            indexServicoBarato = valoresEmpresas.indexOf(servicoMaisBarato)
            alert(`O orçamento de menor valor é da ${empresas[indexServicoBarato]} por R$${servicoMaisBarato}`)
            break
        }else{
            continue
        }
    }
    mais_opcoes();

}



function erro() {
    alert('Por favor, informe um número entre 1 e 4');
    menu();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert('Muito obrigado e até logo, ' + nome + '!');
        window.close();
    } else {
        menu();
    }
}



inicio();