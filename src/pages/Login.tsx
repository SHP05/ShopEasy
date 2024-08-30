import LoginForm from '../components/authentication/LoginForm';

const Login = () => {
  window.localStorage.setItem('loggedIn', 'true');
  return (
    <>
      <div className="flex flex-col md:flex-row lg:w-full mx-auto">
        <div className="md:w-1/2">
          <img src="auth1.jpg" alt="LoginImage" className="h-fit mx-auto" />
        </div>
        <LoginForm />
      </div>
    </>
  );
};

// id : shyamjp@gmail.com , suman@gmail.com
// password: shyamjp , 123
export default Login;
