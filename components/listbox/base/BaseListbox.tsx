import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export interface IBaseListbox {
  labels: any[];
  value: any;
  setValue: any;
  buttonStyle?: string | null;
  optionStyle?: string | null;
}

const BaseListbox: React.FC<IBaseListbox> = ({
  labels,
  value,
  setValue,
  buttonStyle,
  optionStyle,
}) => {
  return (
    <Listbox name="category" value={value} onChange={setValue}>
      <div className="relative w-full inline-block text-left">
        <Listbox.Button
          className={`flex ${buttonStyle} w-full bg-zinc-900 border border-white/20 rounded-none bg-transparent py-0.5 px-2 items-center justify-center`}
        >
          <span className="ml-1 truncate">{value}</span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`absolute  ${optionStyle} w-full bg-zinc-900 border border-white/20 rounded-none bg-transparent py-0.5 px-2 mt-1 origin-center max-h-min items-center justify-center p-1  text-center shadow-md z-20`}
          >
            {labels.map((label, labelIdx) => (
              <Listbox.Option
                key={labelIdx}
                className={({ active }) =>
                  `relative items-center justify-center cursor-default rounded-none select-none py-0.5 ${
                    active && 'bg-secondary-600 text-zinc-900'
                  }`
                }
                value={label}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected && ''}`}>
                      {label}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default BaseListbox;
