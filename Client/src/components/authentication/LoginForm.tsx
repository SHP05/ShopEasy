import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../../services/apiAuth';
import { Link } from 'react-router-dom';

function LoginForm() {
  const Schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().max(8).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  interface login {
    email: string;
    password: string;
  }
  const onSubmit = (data: login) => {
    login(data);
  };
  return (
    <div className="flex flex-wrap">
      <div className="imgContainer w-1/2">
        <img src="auth1.jpg" alt="LoginImage" className="h-fit" />
      </div>
      <form
        className="flex cardContainer w-1/2 justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-2/3 h-auto rounded-lg my-auto p-10">
          <h1 className="text-2xl font-bold mb-5 mx-auto text-center">Login</h1>
          <div className="mb-6 flex flex-col">
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded-lg text-lg p-2 w-full"
              type="email"
              // name="email"
              placeholder="Email..."
              {...register('email')}
            />
            <p className="text-red-600 text-sm">{errors.email?.message}</p>
          </div>
          <div className="mb-6 flex flex-col">
            <label className="text-lg" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded-lg text-lg p-2 w-full"
              type="password"
              // name="password"
              placeholder="Password..."
              {...register('password')}
            />
            <p className="text-red-600 text-sm">{errors.password?.message}</p>
          </div>
          <div className="flex justify-center">
            <button type="submit">
              <p className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                Login
              </p>
            </button>
          </div>
          <div className="flex items-center justify-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Link rel="stylesheet" to="/signup">
            Create new Account
          </Link>
          <br />
          <Link rel="stylesheet" to="/home">
            Back to Home Page
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
