import CategoryItem from "../../components/categoriesItem/category-item.component";
import CategoriesContainer from "../../components/categoriesContainer/categories-container";

type categoryType = {
  title: string;
  id: number;
  imageUrl: string;
};

type categoriesType = categoryType[];

const categories: categoriesType = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const Home = () => {
  return (
    <CategoriesContainer>
      {categories.map((item) => (
        <CategoryItem category={item} key={item.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Home;
