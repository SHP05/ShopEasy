import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import InputField from '../ui/InputField';
import { register } from '../../services/apiAuth';
import { registerType } from '../../types/typesAuth';

function RegisterForm() {
  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),
    shopName: yup.string().required(),
  });

  const { handleSubmit, control, resetField } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: registerType) => {
    register(data);
    reset();
  };

  const reset = () => {
    resetField('email');
    resetField('password');
    resetField('firstName');
    resetField('lastName');
    resetField('shopName');
  };
  return (
    <form
      className="flex cardContainer lg:w-1/2 sm:w-full justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-lg my-auto p-5 lg:p-10">
        <h1 className="text-2xl font-bold mb-5 mx-auto text-center">
          Register / Sign Up
        </h1>
        <InputField
          control={control}
          name={'email'}
          placeholder={'example@gmail.com'}
          label={'Email'}
          type={'text'}
        />
        <InputField
          control={control}
          name={'firstName'}
          placeholder={'Shyam'}
          label={'First Name'}
          type={'text'}
        />
        <InputField
          control={control}
          name={'lastName'}
          placeholder={'Pankhaniya'}
          label={'Last Name'}
          type={'text'}
        />
        <InputField
          control={control}
          name={'password'}
          placeholder={'******'}
          label={'Password'}
          type={'password'}
        />
        <InputField
          control={control}
          name={'shopName'}
          placeholder={'shop'}
          label={'Shop Name'}
          type={'Shop Name'}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-gray-900  hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Register
          </button>
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="text-center">
          <Link rel="stylesheet" to="/">
            Already have an Account
            <span className="text-blue-500 font-bold"> Login !</span>
          </Link>

          <br />
          <Link className="text-blue-500 font-bold" rel="stylesheet" to="/home">
            Go Back
          </Link>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
