type HeaderFormProps = {
  numberFreeDays: number;
  priceMonthly: number;
};

const HeaderForm = ({ numberFreeDays, priceMonthly }: HeaderFormProps) => {
  return (
    <div className="w-full h-20 py-4 px-1 rounded-lg bg-secondaryColor shadow-[0_8px_0_0_rgba(0,0,0,0.15)]">
      <p className="h-full flex flex-col justify-center items-center">
        <b>Try it free {numberFreeDays} days</b> then ${priceMonthly}/mo.
        thereafter
      </p>
    </div>
  );
};

export default HeaderForm;
