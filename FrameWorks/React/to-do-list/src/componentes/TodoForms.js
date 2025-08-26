import { useState } from "react";

//React DOM

//lógica do componente
const TodoForm = ({addTask}) => {
    // Controle de Estado
    const [task, setTask] = useState("");

    //Função para adicionar tarefa
    const handleSubmit = (e) => {
        // previnir o comportamento padrão do formulário
        e.preventDefault();
        // verificação se não está vazio
        if(task.trim() !== ""){
            addTask(task);  // adiciona tarefa no vetor
            setTask("");  // limpa o campo
        }
    };
    
    //renderização do componente
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite uma tarefa" value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TodoForm;