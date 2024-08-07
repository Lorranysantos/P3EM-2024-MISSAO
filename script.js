const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " big data são dados que contêm maior variedade, chegando em volumes crescentes e com mais velocidade, quer saber mais?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "com certeza",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " qual a utilidade do big data?",
        alternativas: [
            {
                texto: " tem a capacidade de cruzar informações de diferentes fontes, como bancos de dados, cadastros de consumidores, históricos de mensagens e de interações com os clientes.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que se refere à Big Data?",
        alternativas: [
            {
                texto: "ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "coleções extremamente grandes e diversas de dados estruturados, não estruturados e semiestruturados que continuam a crescer exponencialmente com o tempo.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quem utiliza Big Data?",
        alternativas: [
            {
                texto: "grandes empresas digitais como a Amazon, a Uber e a Netflix",
                afirmacao: "afirmação"
            },
            {
                texto: "pequenas empresas e escolas",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Porque o Big Data é importante?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat, uma forma de contribuir com o trabalho.",
                afirmacao: "afirmação"
            },
            {
                texto: "permite tomar decisões informadas com base nos dados disponíveis.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "fim.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
