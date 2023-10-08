import Herobody from "@/components/Herobody";
import HeaderForm from "@/components/HeaderForm";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <div className="min-w-[320px] h-full md:h-screen px-6 md:px-10 pt-20 pb-12 flex flex-col md:flex-row gap-16 md:gap-8 items-center justify-center">
      <Herobody />
      <div className="container max-w-lg flex flex-col gap-6">
        <HeaderForm numberFreeDays={7} priceMonthly={20} />
        <RegisterForm />
      </div>
    </div>
  );
}
