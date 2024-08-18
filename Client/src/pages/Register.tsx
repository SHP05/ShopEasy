import RegisterForm from '../components/authentication/RegisterForm';

function Register() {
  return (
    <div className="flex flex-col md:flex-row lg:w-full mx-auto">
      <div className="md:w-1/2">
        <img src="auth3.jpg" alt="LoginImage" className="h-fit mx-auto" />
      </div>
      <RegisterForm />
    </div>
  );
}

export default Register;
