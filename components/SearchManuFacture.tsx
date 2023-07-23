"use client";
import { useState, Fragment } from "react";
import { SearchManuFactureProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManuFacture = ({
  manuFacture,
  setManuFacture,
}: SearchManuFactureProps) => {
  const [query, setQuery] = useState("");

  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manuFacture} onChange={setManuFacture}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px] left-[14px]">
            <Image src="/car-logo.svg" width={20} height={20} alt="Car logo" />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manuFacture: string) => manuFacture}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufactures.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? `bg-primary-blue text-white` : `text-grey-900`
                    }`
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManuFacture;
