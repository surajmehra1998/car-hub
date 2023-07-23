import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    btnType?:"submit" | "button";
    textStyles?:string;
    rightIcon?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}

export interface OptionsInterface{
title:string;
value:string;
}

export interface CUstomFIlterProps{
    title:string;
    options:OptionsInterface[];
}

export interface SearchManuFactureProps{
    manuFacture: string;
    setManuFacture:(manuFacture:string)=>void;
}

export interface CarProps{
    city_mpg: number;
      class: string;
      combination_mpg: number;
      cylinders:number;
      displacement: number;
      drive: string;
      fuel_type: string;
      highway_mpg: number;
      make: string
      model: string;
      transmission: string;
      year: number;
}

export interface FilterProps{
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}