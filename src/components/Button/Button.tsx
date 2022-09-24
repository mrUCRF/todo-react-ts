export enum BtnStyleType {
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}

export enum BtnSizeType {
  ADD_TASK = "mb-2 col-sm-2",
  EDIT_SAVE_DELETE = "col-sm-10",
}

export interface IButtonProps {
  onClick?: (e: any) => void;
  buttonText: string;
  btnStyle: BtnStyleType;
  btnSize?: BtnSizeType;
}

export const CustomButton: React.FC<IButtonProps> = ({
  onClick,
  buttonText,
  btnStyle,
  btnSize,
}) => {
  return (
    <button className={`btn ${btnSize} btn-${btnStyle}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};
