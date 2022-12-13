interface SelectFieldProps {
  id: string;
  label: string;
  fields: string[];
  value: string;
  onChange: any;
}

export default function SelectField({
  id,
  label,
  fields,
  value,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="pb-4">
      <label className="block font-latoBold text-sm pb-2" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 outline-none tablet:w-full"
      >
        {fields.map((field, index) => (
          <option key={index} value={field}>
            {field}
          </option>
        ))}
      </select>
    </div>
  );
}
