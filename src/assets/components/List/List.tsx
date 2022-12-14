import { Props } from "../types/tarefa";
import { Item } from "./Item/Item";
import style from "./List.module.scss";

export function List({ tarefas, selecionaTarefa }: Props) {
  return (
    <>
      <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>

        <ul>
          {tarefas.map((item) => (
            <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
          ))}
        </ul>
      </aside>
    </>
  );
}
