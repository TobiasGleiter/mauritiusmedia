export interface IBaseInput {
  id: string;
  name: string;
  label: string;
  value: string;
  setValue: any;
}

const BaseInput: React.FC<IBaseInput> = ({
  id,
  name,
  label,
  value,
  setValue,
}) => {
  return (
    <div className="flex flex-col w-full ">
      <label
        htmlFor={name}
        className=" antialiased text-base text-secondary-600"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
      />
    </div>
  );
};

export default BaseInput;
