function BookingSummary() {
  return (
    <div className="px-2 py-6">
      <h1>Booking Summary</h1>
      <div className="border-b-2 w-full py-4 text-[#A9A9A9]"></div>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          First Clean
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6 mt-2">
          08:30 - 09:00 Tue 28 Oct
        </div>
      </p>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          How Often
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          Weekly Service
        </div>
      </p>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[70%] font-text text-lg font-normal text-darkColor">
          Hours of cleaning
        </div>
        <div className="w-[30%] font-text text-lg font-bold text-right text-darkColor leading-6">
          04.00 Hours
        </div>
      </p>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          Extra Tasks
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          0.00 Hours
        </div>
      </p>
      <div className="border-b-2 w-full py-4 text-[#A9A9A9]"></div>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          04.00 Hours at $17.00/hour
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          $68.00
        </div>
      </p>
      <div className="border-b-2 w-full py-4 text-[#A9A9A9]"></div>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-normal text-darkColor">
          Tax
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          $12.00
        </div>
      </p>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-sm font-normal text-darkColor">
          *tax based on your area/country
        </div>
        <div className="w-[50%] font-text text-sm font-bold text-right text-darkColor leading-6">
          hst 13%
        </div>
      </p>
      <div className="border-b-2 w-full py-4 text-[#A9A9A9]"></div>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[50%] font-text text-lg font-extrabold text-secondaryColor">
          Price
        </div>
        <div className="w-[50%] font-text text-lg font-bold text-right text-darkColor leading-6">
          $80.00
        </div>
      </p>
      <div className="border-b-2 w-full py-2 text-[#A9A9A9]"></div>
      <div className="border-[1px] border-secondaryColor bg-[#6762f01a] py-2 my-5 rounded-lg flex items-center justify-center">
        <p className="font-text text-xl font-bold text-darkColor">
          Edit Booking
        </p>
      </div>
      <div className="border-b-2 w-full text-[#A9A9A9]"></div>
      <p className="w-full flex items-center justify-between py-2">
        <div className="w-[70%] font-text text-lg font-normal text-darkColor">
          Your cleaner's tip
        </div>
        <div className="w-[30%] font-text text-lg font-bold text-right text-darkColor leading-6">
          $
        </div>
      </p>
      <p className="w-[100%] font-text text-sm py-4 font-normal text-darkColor">
        100% of your tip goes to the cleaner
      </p>
      <div className="border-b-2 w-full text-[#A9A9A9]"></div>
      <div className="">
        <p>Total $</p>
        <span className="border-b-2 w-3 text-secondaryColor"></span>
      </div>
    </div>
  );
}

export default BookingSummary;
