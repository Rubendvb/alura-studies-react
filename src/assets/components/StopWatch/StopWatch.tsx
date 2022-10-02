import { Button } from "../Button/Button";
import { Watch } from "./Watch/Watch";

import style from "./StopWatch.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefa | undefined;
}

export function StopWatch({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Inicia cronometro</p>

      <div className={style.relogioWrapper}>
        <Watch tempo={tempo} />
      </div>

      <Button onClick={() => regressiva(tempo)} texto="Começar" />
    </div>
  );
}
