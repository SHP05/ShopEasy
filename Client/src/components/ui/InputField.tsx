import { useController } from 'react-hook-form';

function InputField({ name, label, control, type, placeholder }) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...field}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded-md text-lg py-2 px-1 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-lg ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
    </div>
  );
}

export default InputField;
