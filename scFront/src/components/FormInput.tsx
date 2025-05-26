interface FormInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const FormInput = ({ type, name, value, onChange, label }: FormInputProps) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1">
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-black shadow"
      required
    />
  </div>
);
