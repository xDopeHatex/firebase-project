import "./category-item.style.scss";

type categoryPropsType = {
  category: { title: string; imageUrl: string };
};

const CategoryItem = ({ category }: categoryPropsType) => {
  const { imageUrl, title } = category;

  return (
    <>
      <div className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
