/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

const students = [
    {
      name: "Luiz",
      note1: 7.5,
      note2: 6.3,
      note3: 7.1,
    },
    {
      name: "Alexandra",
      note1: 9.5,
      note2: 8.5,
      note3: 9.0,
    },
    {
      name: "Carlos",
      note1: 5.5,
      note2: 6.5,
      note3: 7.1,
    },
  ]

  function averageNote (note1, note2, note3) {
    return ((note1 + note2 + note3)/3).toFixed(2)
  }

  if (averageNote >= 7) {
    alert(`A médida do aluno ${students.name}  é ` + averageNote `/n Parabéns, ${students.name}, você foi aprovado no curso `)
  } else

  