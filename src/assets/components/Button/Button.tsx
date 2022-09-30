import style from "./Button.module.scss";

interface Props {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button(props: Props) {
  const { type = "button" } = props;
  return (
    <>
      <button type={type} className={style.botao}>
        {props.texto}
      </button>
    </>
  );
}
