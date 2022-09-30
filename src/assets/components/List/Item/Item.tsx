import { ITarefa } from "../../types/tarefa";
import style from "../List.module.scss";

export function Item(props: ITarefa) {
  console.log("item atual", props);

  return (
    <li className={style.item}>
      <h3>{props.tarefa}</h3>
      <span>{props.tempo}</span>
    </li>
  );
}
