"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { firebaseCreateUser } from "@/api/authentication";
import ErrorMessage from "@/components/ErrorMessage";

type formData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const schemaFormData = z.object({
  firstName: z.string().nonempty("First Name cannot be empty"),
  lastName: z.string().nonempty("Last Name cannot be empty"),
  email: z
    .string()
    .nonempty("Email cannot be empty")
    .email("Looks like this is not an email"),
  password: z.string().nonempty("Password cannot be empty").min(6),
});

const styleInputs =
  "py-3 px-4 mt-4 md:mt-5 w-full rounded-md border-[1px] border-[#DEDEDE] text-[#3D3B48] font-semibold text-sm";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schemaFormData) });

  const handleCreateUserAuthentication = async ({
    firstName,
    lastName,
    email,
    password,
  }: formData) => {
    const { data, error } = await firebaseCreateUser(email, password);
    console.log(data, error);
  };

  const onSubmit = (data: formData) => {
    // alert(JSON.stringify(data));
    handleCreateUserAuthentication(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 md:p-10 w-full flex flex-col bg-white rounded-lg shadow-[0_8px_0_0_rgba(0,0,0,0.15)]"
    >
      <input
        className={`${styleInputs} ${
          errors.firstName
            ? "outline-primaryColor border-primaryColor"
            : " outline-secondaryColor"
        } `}
        type="text"
        placeholder="First Name"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && ErrorMessage(errors.firstName.message)}

      <input
        className={`${styleInputs} ${
          errors.lastName
            ? "outline-primaryColor border-primaryColor"
            : " outline-secondaryColor"
        } `}
        type="text"
        placeholder="Last Name"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && ErrorMessage(errors.lastName.message)}

      <input
        className={`${styleInputs} ${
          errors.email
            ? "outline-primaryColor border-primaryColor"
            : " outline-secondaryColor"
        } `}
        type="email"
        placeholder="Email Address"
        {...register("email", { required: true })}
      />
      {errors.email && ErrorMessage(errors.email.message)}

      <input
        className={`${styleInputs} ${
          errors.password
            ? "outline-primaryColor border-primaryColor"
            : " outline-secondaryColor"
        } `}
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && ErrorMessage(errors.password.message)}

      <button
        className="py-4 px-2 my-4 bg-btnColor hover:bg-btnColorHover rounded-md uppercase shadow-[0_-4px_0_0_rgba(0,0,0,0.09)_inset] cursor-pointer"
        type="submit"
      >
        claim your free trial
      </button>

      <p className="text-xs text-[#BAB7D4] text-center">
        By clicking the button, you are agreeing to our
        <b className="text-primaryColor"> Terms and Services</b>
      </p>
    </form>
  );
};

export default RegisterForm;
