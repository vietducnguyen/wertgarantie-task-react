import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {CountryDetails} from "@/types/CountryDetails";

export class CountryStore {
    countryDetails?: CountryDetails;

    constructor() {
        makeAutoObservable(this)
    }

    async fetchCountryData(countryName: string) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/name/${countryName}`);
            const data = await response.json();
            this.countryDetails = data[0]
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
