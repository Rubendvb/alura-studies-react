import { Button } from "../Button/Button";
import { Watch } from "./Watch/Watch";

import style from "./StopWatch.module.scss";

export function StopWatch() {
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
