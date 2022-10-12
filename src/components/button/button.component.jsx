import { StyleButton } from "./button.styles";
const Button = ({ children, ...otherProps }) => {
  return <StyleButton {...otherProps}>{children}</StyleButton>;
};
export default Button;
