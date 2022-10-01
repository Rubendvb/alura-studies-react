import { Button } from "../Button/Button";
import { Watch } from "./Watch/Watch";

import style from "./StopWatch.module.scss";

import { tempoParaSegundos } from "../../common/utils/date";

export function StopWatch() {
  console.log("Conversão: ", tempoParaSegundos("01:01:01"));

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Inicia cronometro</p>

      <div className={style.relogioWrapper}>
        <Watch />
      </div>

      <Button texto="Começar" />
    </div>
  );
}
