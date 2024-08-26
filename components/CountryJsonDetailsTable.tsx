import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import React from "react";
import {CountryDetails} from "@/types/CountryDetails";

type CountryDetailsTableProps = {
    countryData: CountryDetails
} & React.HTMLAttributes<HTMLTableElement>;

const CountryJsonDetailsTable = ({countryData}: CountryDetailsTableProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Object.entries(countryData).map(([key, value]) => (
                    <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{JSON.stringify(value)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CountryJsonDetailsTable;
