/*3. Transforme os exercícios anteriores em pacotes individuais do Node (crie uma pasta para cada um)*/

const tarefas = ["Varrer o chão", "Lavar a louça", "passar" ];
const tarefa = process.argv[2]

tarefas.push(tarefa)

console.log(`A tarefa ${tarefa}, foi adicionada com sucesso!`);
console.log(`A nova lista de tarefas é ${tarefas}`)