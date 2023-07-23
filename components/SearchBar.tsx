"use client";
import React, { useState } from "react";
import { SearchManuFacture } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClass }: { otherClass: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [manuFacture, setManuFacture] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (model === "" && manuFacture === "") {
      alert("Please enter text");
    }
    updateSearchParam(
      model.toLocaleLowerCase(),
      manuFacture.toLocaleLowerCase()
    );
  };

  const updateSearchParam = (model: string, manuFacture: string) => {
    // 1st need to check what our URL params
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manuFacture) {
      searchParams.set("manuFacture", manuFacture);
    } else {
      searchParams.delete("manuFacture");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacture
          manuFacture={manuFacture}
          setManuFacture={setManuFacture}
        />
        <SearchButton otherClass={`sm:hidden`} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
