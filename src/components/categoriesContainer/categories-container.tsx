import { ReactElement } from "react";
import "./categories-container.style.scss";

type CategoriesContainerType = {
  children: ReactElement | ReactElement[];
};

const CategoriesContainer = ({ children }: CategoriesContainerType) => {
  return <div className="categories-container">{children}</div>;
};

export default CategoriesContainer;
