function ServiceCard() {
  return (
    <div className="border-2 border-darkColor bg-secondaryColor bg-opacity-20 p-5 rounded-md my-6 md:w-[350px] mx-2 lg:w-[480px] lg:h-[300px] xl:w-[600px] ">
      <div className=" h-12 w-12 bg-secondaryColor p-2 rounded-full flex items-center justify-center text-2xl text-lightColor">
        1
      </div>
      <h3 className="text-xl font-bold text-left pt-5 font-heading lg:pl-20">
        Find a cleaner
      </h3>
      <p className="text-left font-text pt-5 text-base font-normal lg:pl-20">
        Just enter your postcode on our website or click on the Find A Cleaner
        below. The system will automatically pair you with the best local
        cleaner based on your location and needs. You can also check out reviews
        and ratings to find the perfect match.{" "}
      </p>
    </div>
  );
}

export default ServiceCard;
