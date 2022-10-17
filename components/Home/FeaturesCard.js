import FeaturesCardList from "./FeaturesCardList";
function FeaturesCard({ listItems, Title }) {
  return (
    <div className="border-2 border-secondaryColor h-[470px] w-[420px] md:h-[430px] md:w-[400px] md:m-5 relative rounded-lg my-5  shadow-black shadow-2xl">
      <h2 className="absolute top-10 left-5 font-extrabold md:top-5 md:left-5">
        {Title}
      </h2>
      <FeaturesCardList listItems={listItems} Title={Title} />
    </div>
  );
}

export default FeaturesCard;
