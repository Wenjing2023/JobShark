import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Icon from "../atoms/icon";
import IconKind from "../types/enums/iconkind";

interface MenuSelectProps {
  labelText: string;
  options: string[];
}
interface Filtertype {
  name: string;
}

const MenuSelect = ({ labelText, options }: MenuSelectProps) => {
  const selection: Filtertype[] = options.map((option) => ({ name: option }));
  const [selected, setSelected] = useState<Filtertype>(selection[0]);

  return (
    <div className="w-full max-w-md">
      <label className="block mb-2 text-sm font-semibold">{labelText}</label>
      <Listbox value={selected} onChange={setSelected}>
        {/* <label className="py-2 pl-3 pr-10 text-center sm:text-sm font-semibold">
          {lableText}
        </label> */}
        <div className="relative mt-1 ">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-jaws-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ">
              <Icon iconKind={IconKind.Updown} onClick={() => {}} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {selection.map((filtertype, filtertypeIdx) => (
                <Listbox.Option
                  key={filtertypeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={filtertype}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          active ? "font-medium" : "font-normal"
                        }`}
                      >
                        {filtertype.name}
                      </span>
                      {active && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <Icon
                            iconKind={IconKind.Checked}
                            onClick={() => {}}
                          />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default MenuSelect;
