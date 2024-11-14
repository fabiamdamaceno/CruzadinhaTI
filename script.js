
    var lista_respostas = ['registradores', 'cpu', 'i5', 'cs', 'dual core', 'dma', 'ula', 'flash', 'adress bus', 'rom', 'i7', 'quad core', 'data bus', 'memoria de massa', 'ram', 'eprom']

    var indexPergunta = 0;
    var perguntasCertas = [];

    var lista_perguntas = [
        '<span id="pergunta1"> Localizados dentro do processador, são pequenas memórias internas para rápido acesso deste. <span>',
        'É a parte do computador que executa funções e processa dados.',
        'Processador lançado em 2009 pela Intel, é mais eficiente energeticamente e menos custoso mas possui menos capacidade de processamento.',
        'A sigla do sinal que permite selecionar dispositivos no barramento SPI',
        'Processador que possui duas unidades lógicas de processamento, como o Intel Celeron G5925.',
        'É uma rota lógica, hoje integrada com o processador, para funções que acessam diretamente a memória sem necessitar ocupar recursos do processador.',
        'Compartimento do processador responsável por calcular as expressões matemáticas e booleanas.', 
        'Memória reprogramável eletricamente não-volátil, utilizada, entre outros, em smartphones e dispositivos de memória portateis.',
        'Barramento responsável por transportar os endereços que indicam a posição de memória ou o dispositivo que o processador deseja acessar',
        'Memória permanente do computador, guarda informações essenciais para o sistema, como o BIOS.',
        'Processador  lançado em 2008 pela Intel, maior capacidade de processamento, porém mais caro e com maior gasto de energia.',
        'Processador que possui quatro unidades lógicas de processamento, como o I5 750.',
        'Barramento responsável por transportar os endereços que indicam a posição de memória ou o dispositivo que o proccessaodr deseja acessar',
        'Memória não-volátil especializada em armazenar grande quantidade de informações, como o HD e o SSD.',
        'Memória volátil temporária, onde se armazena informações de rápido acesso dos programas em andamento no computador.',
        'Memória de leitura não volátil, utilizada para programas importantes que necessitam de reprogramações ocasionais.',
    ]

    // Função para passar a perguntar
    function perguntar(mudar) {
        var pergunta;

        if(mudar == 'próxima' && indexPergunta <= 14) {
            indexPergunta++;
            ipt_resposta.disabled = false;
            ipt_resposta.placeholder = `Digite sua resposta`
            ipt_resposta.style.border = "0.5px solid #a7a7a7";
            ipt_resposta.style.color = "black";
        } else if(mudar == 'anterior' && indexPergunta >= 1) {
            indexPergunta--;
            ipt_resposta.disabled = false;
            ipt_resposta.placeholder = `Digite sua resposta`
            ipt_resposta.style.border = "0.5px solid #a7a7a7";
            ipt_resposta.style.color = "black";
        }

        h1_titulo.innerHTML = `Pergunta ${indexPergunta + 1}`;
        p_pergunta.innerHTML = lista_perguntas[indexPergunta];

        if(perguntasCertas.includes(indexPergunta)) {
            p_pergunta.style.color = "green"
            ipt_resposta.disabled = true;
            ipt_resposta.placeholder = `${lista_respostas[indexPergunta]}`
        } else {
            p_pergunta.style.color = "";
        }
    };
    
    function responder() {
        var resposta = ipt_resposta.value.toLowerCase()

        // Dois styles para resetar a indicação de resposta errada
        ipt_resposta.style.border = "";
        ipt_resposta.style.color = "";
        
        // Validações para validar se a resposta é válida E se está de acordo com a pergunta na tela
        if (lista_respostas.indexOf(resposta) == 0 && indexPergunta == 0) {
            palavra12_r.style.display = 'block';
            palavra1_e.style.display = 'block';
            palavra1_g.style.display = 'block';
            palavra3_i.style.display = 'block';
            palavra4_s.style.display = 'block';
            palavra1_t.style.display = 'block';
            palavra1_r.style.display = 'block';
            palavra1_a.style.display = 'block';
            palavra1_d.style.display = 'block';
            palavra1_o.style.display = 'block';
            palavra1_r2.style.display = 'block';
            palavra14_e2.style.display = 'block';
            palavra1_s2.style.display = 'block';

            perguntasCertas.push(0)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 1 && indexPergunta == 1){
            palavra2_c.style.display = 'block';
            palavra2_p.style.display = 'block';
            palavra2_u.style.display = 'block';
            
            perguntasCertas.push(1)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 2 && indexPergunta == 2){
            palavra3_i.style.display = 'block';
            palavra3_5.style.display = 'block';
            
            perguntasCertas.push(2)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 3 && indexPergunta == 3){
            palavra4_c.style.display = 'block';
            palavra4_s.style.display = 'block';
            
            perguntasCertas.push(3)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 4 && indexPergunta == 4){
            palavra5_r.style.display = 'block';
            palavra5_u.style.display = 'block';
            palavra5_l.style.display = 'block';
            palavra5_c.style.display = 'block';
            palavra5_e.style.display = 'block';
            palavra5_a.style.display = 'block';
            palavra5_o.style.display = 'block';
            palavra5_d.style.display = 'block';
            
            perguntasCertas.push(4)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 5 && indexPergunta == 5){
            palavra6_m.style.display = 'block';
            palavra6_a.style.display = 'block';
            palavra5_d.style.display = 'block';
            
            perguntasCertas.push(5)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 6 && indexPergunta == 6){
            palavra7_u.style.display = 'block';
            palavra7_l.style.display = 'block';
            palavra7_a.style.display = 'block';
            
            perguntasCertas.push(6)
            
            perguntar('próxima');
            
        }else if (lista_respostas.indexOf(resposta) == 7 && indexPergunta == 7){
            palavra8_f.style.display = 'block';
            palavra8_l.style.display = 'block';
            palavra5_a.style.display = 'block';
            palavra8_s.style.display = 'block';
            palavra8_h.style.display = 'block';
            
            perguntasCertas.push(7)
            
            perguntar('próxima');
        }
        else if (lista_respostas.indexOf(resposta) == 8 && indexPergunta == 8){
            palavra9_s2.style.display = 'block';
            palavra9_s.style.display = 'block';
            palavra9_b.style.display = 'block';
            palavra9_e.style.display = 'block';
            palavra9_d.style.display = 'block';
            palavra2_u.style.display = 'block';
            palavra9_a.style.display = 'block';
            palavra9_r2.style.display = 'block';
            palavra9_s3.style.display = 'block';
            
            perguntasCertas.push(8)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 9 && indexPergunta == 9){
            palavra10_r.style.display = 'block';
            palavra10_o.style.display = 'block';
            palavra10_m.style.display = 'block';
            
            perguntasCertas.push(9)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 10 && indexPergunta == 10){
            palavra11_i.style.display = 'block';
            palavra11_7.style.display = 'block';
            
            perguntasCertas.push(10)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 11 && indexPergunta == 11){
            palavra12_q.style.display = 'block';
            palavra7_u.style.display = 'block';
            palavra12_a.style.display = 'block';
            palavra12_d.style.display = 'block';
            palavra12_c.style.display = 'block';
            palavra12_o.style.display = 'block';
            palavra12_r.style.display = 'block';
            palavra12_e.style.display = 'block';
            
            perguntasCertas.push(11)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 12 && indexPergunta == 12){
            palavra13_d.style.display = 'block';
            palavra13_a.style.display = 'block';
            palavra13_a2.style.display = 'block';
            palavra13_t.style.display = 'block';
            palavra13_b.style.display = 'block';
            palavra13_u.style.display = 'block';
            palavra9_s.style.display = 'block';
            
            perguntasCertas.push(12)
            
            perguntar('próxima');
        }
        else if (lista_respostas.indexOf(resposta) == 13 && indexPergunta == 13){
            palavra14_m.style.display = 'block';
            palavra14_e.style.display = 'block';
            palavra14_m2.style.display = 'block';
            palavra5_o.style.display = 'block';
            palavra14_r.style.display = 'block';
            palavra11_i.style.display = 'block';
            palavra14_d.style.display = 'block';
            palavra14_a.style.display = 'block';
            palavra14_e2.style.display = 'block';
            palavra14_m3.style.display = 'block';
            palavra14_a2.style.display = 'block';
            palavra14_s.style.display = 'block';
            palavra9_s2.style.display = 'block';
            palavra14_a3.style.display = 'block';
            
            perguntasCertas.push(13)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 14 && indexPergunta == 14){
            palavra9_r2.style.display = 'block';
            palavra15_a.style.display = 'block';
            palavra10_m.style.display = 'block';
            
            perguntasCertas.push(14)
            
            perguntar('próxima');
            
        } else if (lista_respostas.indexOf(resposta) == 15 && indexPergunta == 15){
            palavra14_e.style.display = 'block';
            palavra16_p.style.display = 'block';
            palavra16_r.style.display = 'block';
            palavra16_o.style.display = 'block';
            palavra16_m.style.display = 'block';
            
            perguntasCertas.push(15)
            
            perguntar('próxima');
            
        } else {
            // Styles para indicar que foi uma resposta errada
            ipt_resposta.style.border = "2px solid red";
            ipt_resposta.style.color = "red";
            
        };

        ipt_resposta.value = ""
        ipt_resposta.focus()

    }