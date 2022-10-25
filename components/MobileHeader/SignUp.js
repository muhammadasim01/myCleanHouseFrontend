function SignUp() {
  return (
    <div className="flex flex-col h-[880px] border-2 items-center">
      <h2 className="font-heading text-3xl font-bold py-8 px-5">
        Sign In or Sign Up
      </h2>
      <form>
        <div className="flex w-[100%]">
          <div className="w-[50%]">
            <p className="text-left font-subHeading text-2xl font-bold my-2">
              First Name
            </p>
            <input type="text" className="bg-[#E8EDF5] py-2 px-4 rounded-md" />
          </div>
          <divc className="w-[50%]">
            <p className="text-left font-subHeading text-2xl font-bold my-2">
              Last Name
            </p>
            <input type="text" className="bg-[#E8EDF5] py-2 px-4 rounded-md" />
          </divc>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
