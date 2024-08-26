export type CountryDetails = {
    name: CountryName;
    cca2: string;
    cca3: string;
    currencies: CurrencyData;
    capital: string;
    region: string;
    subregion: string;
    languages: Language[];
    flag: string;
    translations: CountryTranslations,
    flags: FlagImageSourceData
}

export type CountryName = CommonOfficialName & {
    nativeName: NativeName;
}

export type NativeName = {
    [languageCode: string]: CommonOfficialName;
}

export type CommonOfficialName = {
    common: string;
    official: string;
}

export type CurrencyData = {
    [key: string]: Currency;
}

export type Currency = {
    name: string;
    symbol: string;
}

export type Language = {
    [iso3Code: string]: string;
}

export type CountryTranslations = {
    [key: string]: CountryTranslation;
}

export type CountryTranslation = {
    common: string;
}

export type FlagImageSourceData = {
    [key: string]: string;
}
