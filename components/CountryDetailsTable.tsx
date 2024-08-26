import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import React, {HTMLAttributes} from "react";
import {CountryDetails, CountryTranslations} from "@/types/CountryDetails";
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {cn} from "@/lib/utils";

type TableProps = {
    details: CountryDetails
} & React.HTMLAttributes<HTMLDivElement>;

const CountryDetailsTable = ({details, className}: TableProps) => {
    console.log(JSON.stringify(details.currencies));
    return (
        <div className={cn(className, "flex-col")}>
            <Image src={details.flags["png"]} alt={"flag"} width={320} height={320} className="m-10"/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Flag</TableCell>
                        <TableCell>{details.flag}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Common name</TableCell>
                        <TableCell>{details.name.common}</TableCell>
                    </TableRow>
                    {
                        Object.entries(details.name.nativeName).map(([key, value]) => (
                            <TableRow>
                                <TableCell>Native name</TableCell>
                                <TableCell>{value.common}</TableCell>
                            </TableRow>
                        ))
                    }
                    {
                        Object.entries(details.currencies).map(([key, value]) => (
                            <>
                                <TableRow>
                                    <TableCell>Currency name</TableCell>
                                    <TableCell>{value.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Currency symbol</TableCell>
                                    <TableCell>{value.symbol}</TableCell>
                                </TableRow>
                            </>
                        ))
                    }
                </TableBody>
            </Table>
            <CountryTranslationsTable translations={details.translations} className="mt-10"/>
        </div>
    )
}

type TranslationsProps = {
    translations: CountryTranslations
} & HTMLAttributes<HTMLDivElement>;
const CountryTranslationsTable = ({translations, className}: TranslationsProps) => {
    return (
        <div className={cn(className)}>
            <Label>Translations</Label>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Language code</TableHead>
                        <TableHead>Translation</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        Object.entries(translations).map(([key, value]) => (
                            <TableRow>
                                <TableCell>{key}</TableCell>
                                <TableCell>{value.common}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CountryDetailsTable;
