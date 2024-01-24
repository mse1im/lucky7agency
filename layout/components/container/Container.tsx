import { IContainerProps } from "@/types/components/container.model";
import "./Container.scss";

const Container: React.FC<IContainerProps> = ({children}) => {
  return <div className="container">{children}</div>;
};
export default Container;