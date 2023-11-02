export interface IDateInput {
  id: string;
  name: string;
  label: string;
  value: string;
  setValue: any;
}

const DateInput: React.FC<IDateInput> = ({
  id,
  name,
  label,
  value,
  setValue,
}) => {
  return (
    <div className="DATE flex flex-col w-fit ">
      <label
        htmlFor={name}
        className=" antialiased text-base text-secondary-600"
      >
        {label}
      </label>
      <input
        type="datetime-local"
        id={id}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
      />
    </div>
  );
};

export default DateInput;
