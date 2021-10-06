import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayTasks = ['Fazer os exercicios', 'Fazer fixação', 'Pesquisar mais sobre o assunto'];

function App() {

  return <ol>
    {Task('Estudar')}
    {arrayTasks.map((task) => Task(task))}
    </ol>

}
export default App;
