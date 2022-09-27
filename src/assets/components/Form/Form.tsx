import { Button } from "../Button/Button";
import "./style.scss";

export function Form() {
  return (
    <>
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione uma nova tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            step={"1"}
            min={"00:00:00"}
            max={"01:30:00"}
            required
          />
        </div>
        <Button />
      </form>
    </>
  );
}
