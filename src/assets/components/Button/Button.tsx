import style from "./Button.module.scss";

interface Props {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export function Button(props: Props) {
  const { type = "button", onClick } = props;
  return (
    <>
      <button onClick={onClick} type={type} className={style.botao}>
        {props.texto}
      </button>
    </>
  );
}
