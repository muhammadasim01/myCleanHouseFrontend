function ServiceCard({ text, background }) {
  return (
    <div
      className={`h-[250px] w-[300px] ${background} bg-primaryColor bg-center flex justify-center items-center rounded-sm bg-grayscale my-10`}
    >
      <h3 className="font-subHeading text-3xl font-bold text-lightColor">
        {text}
      </h3>
    </div>
  );
}

export default ServiceCard;
