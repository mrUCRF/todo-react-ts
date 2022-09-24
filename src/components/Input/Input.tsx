export enum InputStyleType {
  DEFAULT = "form-control",
  SEARCH_INPUT = "form-control mb-2",
}

export interface ICustomInput {
  style: InputStyleType;
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string;
}

export const CustomInput: React.FC<ICustomInput> = ({
  style,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <input
      type="text"
      className={style}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
