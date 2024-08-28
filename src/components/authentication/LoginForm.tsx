import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { login } from '../../services/apiAuth';
import { Link } from 'react-router-dom';
import InputField from '../ui/InputField';
import { useLogin } from './useLogin';

function LoginForm() {
  const { login, isPending } = useLogin();
  // window.localStorage.setItem('loggedIn', 'true');

  const Schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().max(8).required(),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data: loginType) => {
    login(data);
    console.log(data);
  };

  return (
    <form
      className="flex cardContainer lg:w-1/2 sm:w-full justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:w-full lg:w-2/3 h-auto rounded-lg my-auto p-5 lg:p-10">
        <h1 className="text-2xl font-bold mb-5 mx-auto text-center">Login</h1>
        <InputField
          control={control}
          type={'text'}
          label={'Email'}
          placeholder={'example@gmail.com'}
          name={'email'}
        />
        <InputField
          control={control}
          type={'password'}
          label={'Password'}
          placeholder={'******'}
          name={'password'}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            disabled={isPending}
          >
            {isPending ? 'Loging...' : 'Login'}
          </button>
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="text-center">
          <Link rel="stylesheet" to="/signup">
            Don't have an Account
            <span className="text-blue-500 font-bold"> Sign Up !</span>
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

export default LoginForm;
