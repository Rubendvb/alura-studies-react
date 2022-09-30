import { useState } from "react";
import Form from "../Form/Form";
import { List } from "../List/List";
import { StopWatch } from "../StopWatch/StopWatch";
import { ITarefa } from "../types/tarefa";

import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <StopWatch />
    </div>
  );
}

export default App;
