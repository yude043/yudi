const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você define saúde mental e emocional?",
        alternativas: [
            {
                texto: "Saúde mental e emocional é a capacidade de lidar com os desafios do dia a dia de forma equilibrada.",
                afirmacao: "Manter a saúde mental implica em desenvolver estratégias para enfrentar o estresse, superar adversidades e manter o equilíbrio emocional. Isso é essencial para o bem-estar geral. "
            },
            {
                texto: "Saúde mental e emocional envolve estar em harmonia com seus sentimentos e com as pessoas ao seu redor.",
                afirmacao: "A saúde mental e emocional também está relacionada à qualidade das relações interpessoais e à forma como se lida com as emoções. Entender e expressar sentimentos de maneira saudável é crucial para o bem-estar."
            }
        ]
    },
    {
        enunciado: "Quais são os principais fatores que impactam negativamente a saúde mental e emocional?",
        alternativas: [
            {
                texto: "Estresse excessivo e falta de suporte social são fatores que prejudicam a saúde mental.",
                afirmacao: "O estresse crônico, causado por problemas no trabalho, nas relações ou na vida pessoal, pode levar a problemas de saúde mental, como ansiedade e depressão. Sem suporte social, esses desafios se tornam ainda mais difíceis de enfrentar."
            },
            {
                texto: "A pressão social e a autocobrança exagerada afetam profundamente o bem-estar emocional.",
                afirmacao: "A pressão para atender expectativas, seja no trabalho ou na vida pessoal, pode gerar sentimentos de insuficiência, aumentando o risco de esgotamento emocional."
            }
        ]
    },
    {
        enunciado: "Quais estratégias você utiliza para manter sua saúde mental e emocional em equilíbrio?",
        alternativas: [
            {
                texto: "Práticas de autocuidado, como meditação e exercício físico, ajudam a manter o equilíbrio mental.",
                afirmacao: "Atividades como meditação e exercício físico liberam hormônios que promovem bem-estar e reduzem o estresse, ajudando a manter a mente equilibrada."
            },
            {
                texto: "Conversar sobre sentimentos com amigos ou familiares é uma maneira eficaz de cuidar da saúde emocional.",
                afirmacao: "O apoio emocional de amigos e familiares pode fornecer uma rede de suporte, aliviando a carga emocional e permitindo um espaço seguro para expressar sentimentos."
            }
        ]
    },
    {
        enunciado: "Como a saúde mental e emocional pode impactar o desempenho no trabalho ou nos estudos?",
        alternativas: [
            {
                texto: "Um estado mental saudável aumenta a produtividade e a criatividade no trabalho.",
                afirmacao: "Quando a mente está saudável, é mais fácil se concentrar, resolver problemas e ter uma atitude positiva no trabalho ou nos estudos, o que pode aumentar a eficiência e a criatividade."
            },
            {
                texto: "Problemas de saúde mental podem levar à falta de concentração e ao baixo rendimento acadêmico.",
                afirmacao: "Por outro lado, problemas de saúde mental, como ansiedade ou depressão, podem afetar a capacidade de focar e se engajar nas tarefas, resultando em um desempenho abaixo do esperado."
            }
        ]
    },
    {
        enunciado: "Quais medidas a sociedade pode tomar para promover a saúde mental e emocional?",
        alternativas: [
            {
                texto: "Promover campanhas de conscientização sobre saúde mental pode ajudar a reduzir o estigma.",
                afirmacao: "A conscientização sobre a importância da saúde mental e a redução do estigma associado a transtornos mentais pode encorajar mais pessoas a buscar ajuda e falar abertamente sobre suas dificuldades."
            },
            {
                texto: "Oferecer suporte psicológico acessível a todos é essencial para uma sociedade mais saudável.",
                afirmacao: "A disponibilidade de serviços de saúde mental acessíveis e de qualidade é crucial para garantir que todos tenham a oportunidade de cuidar de sua saúde emocional e mental."
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
    caixaPerguntas.textContent = "Como está sua saúde mental hoje...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "A saúde mental e emocional é fundamental para o bem-estar geral, impactando todas as áreas da vida, desde o trabalho e os estudos até as relações interpessoais. Entender o que influencia a saúde mental e as formas de mantê-la em equilíbrio é essencial para promover uma vida mais plena e saudável. A sociedade também desempenha um papel importante ao criar um ambiente de apoio e compreensão, incentivando o cuidado com a saúde mental e emocional como uma prioridade. Ao refletir sobre essas questões, é possível reconhecer a importância de cuidar da mente tanto quanto do corpo, buscando equilíbrio e bem-estar em todas as esferas da vida.";
}

mostraPergunta();
