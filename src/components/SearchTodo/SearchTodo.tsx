import { Fragment } from "react";
import { CustomInput, InputStyleType } from "../Input/Input";

interface Props {
  onSearch: any; //?
}
const SearchTodo: React.FC<Props> = ({ onSearch }) => {
  return (
    <Fragment>
      <CustomInput
        style={InputStyleType.SEARCH_INPUT}
        onChange={(e) => onSearch(e)}
        placeholder="Search"
      />
    </Fragment>
  );
};

export default SearchTodo;
