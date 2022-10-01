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

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Inicia cronometro</p>

      <p>Tempo: {tempo}</p>

      <div className={style.relogioWrapper}>
        <Watch />
      </div>

      <Button texto="Começar" />
    </div>
  );
}
