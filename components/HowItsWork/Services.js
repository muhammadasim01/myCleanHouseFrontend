import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div>
      {/* <h2>Services Section</h2>
      <p>Select a service below to find out more about how it works:</p> */}
      <div className="flex flex-col items-center justify-center my-5 bg-lightShade md:flex-row md:flex-wrap">
        <ServiceCard
          text="kitchen"
          background={"bg-[url('../public/assets/subtract1.png')]"}
        />
        <ServiceCard
          text="bathroom"
          background={"bg-[url('../public/assets/subtract1.png')]"}
        />
        <ServiceCard
          text="bedroom"
          background={"bg-[url('../public/assets/subtract1.png')]"}
        />
        <ServiceCard
          text="living area"
          background={"bg-[url('../public/assets/subtract1.png')]"}
        />
      </div>
    </div>
  );
}

export default Services;
