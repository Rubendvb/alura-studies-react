export interface ITarefa {
  tarefa: string;
  tempo: string;
  selecionado: boolean;
  completado: boolean;
  id: string;
}

export interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}
