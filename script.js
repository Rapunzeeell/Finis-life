const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual bala Fini você prefere?",
        alternativas: [
            {
                texto: "Dentadura!",
                afirmacao: "Parabéns, você virou um vampire!"
            },
            {
                texto: "Beijinhos!",
                afirmacao: "Parabéns, você continua solteiro!"
            }
        ]
    },
    {
        enunciado: "Hora da luta de Fini, se arme rapido!",
        alternativas: [
            {
                texto: "Bananinhas.",
                afirmacao: "Seu adversário caiu na bananada."
            },
            {
                texto: "Amoras",
                afirmacao: "Seu adversário comeu suas amoras."
            }
        ]
    },
    {
        enunciado: "Você está passando fome, ache uma Fini rápido",
        alternativas: [
            {
                texto: "Minhoca normal.",
                afirmacao: "Você não esta mais com fome."
            },
            {
                texto: "Mihoca Cítrica",
                afirmacao: "Você se alimentou mal"
            }
        ]
    },
    {
        enunciado: "Você encontrou um viado, alimente ele!",
        alternativas: [
            {
                texto: "De tubes de morango.",
                afirmacao: "Ele adorou sua fini "
            },
            {
                texto: "De tubes de uva",
                afirmacao: "Ele odiou sua fini"
            }
        ]
    },
    {
    enunciado: "Escolha seu companheiro para a jornada da vida.",
        alternativas: [
            {
                texto: "Polvo.",
                afirmacao: ".Ele te largou pela polva"
            },
            {
                texto: "Sapo.",
                afirmacao: "Ele pulos os obstáculos da vida com você. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
