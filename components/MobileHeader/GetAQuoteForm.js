import YourBookingInfo from "./YourBookingInfo";

function GetAQuoteForm() {
  return (
    <div className="border-2 border-primaryColor px-2 h-auto">
      <div className="text-right">
        <select>
          <option value="usa">USA</option>
          <option value="canada">CANADA</option>
        </select>
      </div>
      <div>
        <h2>Get Your Quote</h2>
        <div className="flex bg-lightColor h-10  border-2 border-secondaryColor justify-between items-center">
          <p className="font-text text-xs font-bold text-darkColor">
            Your Booking Info
          </p>
          <p className="font-text text-xs font-bold text-darkColor">
            Date/Time
          </p>
          <p className="font-text text-xs font-bold text-darkColor">Address</p>
          <p className="font-text text-xs font-bold text-darkColor">Payment</p>
        </div>
      </div>
      <YourBookingInfo />
    </div>
  );
}

export default GetAQuoteForm;
