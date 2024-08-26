import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";

export interface CountryData {
    [key: string]: any;
}

export class CountryStore {
    countryData?: CountryData;

    constructor() {
        makeAutoObservable(this)
    }

    async fetchCountryData(countryName: string) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/name/${countryName}`);
            const data = await response.json();
            this.countryData = data[0];
        } catch (error) {
            console.error(error);
        }
    }
}

const CountryStoreContext = createContext<CountryStore | undefined>(undefined);

const useCountryStore = () => useContext(CountryStoreContext)!;

export {
    CountryStoreContext, useCountryStore
}
