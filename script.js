/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

let students = [
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
    let average = ((note1 + note2 + note3)/3).toFixed(2)
    return average
  }

for( let name of students) {
  IndividualAvarage = averageNote(name.note1, name.note2, name.note3)
  let passOrNot = IndividualAvarage < 7 ? 'Infelizmente não foi dessa vez. Estude Mais' : 'Parabéns pela sua aprovação'
}
 alert( `A média de ${students.name} é ${IndividualAvarage}.${passOrNot}`)
  