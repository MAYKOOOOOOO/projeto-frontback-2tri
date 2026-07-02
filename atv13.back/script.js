
const usuarios = [
  {
    id: 1,
    nome: 'Anís fundos',
    email: 'ana.isfundos@escola.com',
    perfil: 'aluna'
  },
  {
    id: 2,
    nome: 'alan',
    email: 'alan.martins@escola.com',
    perfil: 'mendigo'
  },
  {
    id: 3,
    nome: 'gigis',
    email: 'gigi.s@escola.com',
    perfil: 'provedora'
  }
];

const avisos = [
  {
    id: 1,
    titulo: 'Beber Água',
    conteudo: 'Mantenha-se hidratado',
    dataPublicacao: '2026-07-01'
  },
  {
    id: 2,
    titulo: 'tem q cume',
    conteudo: 'ké cume strogonofi',
    dataPublicacao: '2026-07-02'
  },
  {
    id: 3,
    titulo: 'brasil vai ser hexa',
    conteudo: 'brasil vai ser hexa querendo ou nao',
    dataPublicacao: '2026-07-02'
  },
  {
    id: 4,
    titulo: 'insccriçao pra desistir da faculdade',
    conteudo: 'ja pode desistir, as inscriçoes estao abertas!',
    dataPublicacao: '2026-07-03'
  }
];


const tarefas = [
  {
    id: 1,
    titulo: 'Exercícios de Matemática',
    disciplina: 'Álgebra',
    dataEntrega: '2026-07-05',
    status: 'pendente'
  },
  {
    id: 2,
    titulo: 'Redação enem',
    disciplina: 'Português',
    dataEntrega: '2026-07-08',
    status: 'em andamento'
  },
  {
    id: 3,
    titulo: 'Leitura do livro de portogays',
    disciplina: 'portogays',
    dataEntrega: '2026-07-03',
    status: 'concluida'
  }
];


const reservasSala = [
  {
    id: 1,
    sala: 'Laboratório de Informática ',
    professor: 'matheus borboleta da silva meidel',
    data: '2026-07-06',
    horario: 'agora, literalmente'
  },
  {
    id: 2,
    sala: 'Sala de arte',
    professor: 'o felix',
    data: '2026-07-06',
    horario: '10:00 - 11:40'
  }
];


console.log('--- USUÁRIOS ---');
console.log(usuarios);

console.log('\n--- AVISOS ---');
console.log(avisos);

console.log('\n--- TAREFAS ---');
console.log(tarefas);

console.log('\n--- RESERVAS DE SALA ---');
console.log(reservasSala);
