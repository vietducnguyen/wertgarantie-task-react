'use client'
import React from 'react';
import {observer} from "mobx-react-lite";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import CountryJsonDetailsTable from "@/components/CountryJsonDetailsTable";
import {useCountryStore} from "@/stores/CountryStore";
import CountryDetailsTable from "@/components/CountryDetailsTable";


const FormSchema = z.object({
    search: z.string()
})

const CountrySearchForm = observer(() => {
    const store = useCountryStore();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            search: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        await store.fetchCountryData(data.search);
    }

    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="search"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input placeholder="Country" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            {store.countryDetails && (
                <CountryDetailsTable details={store.countryDetails} className="mb-10"/>
            )}
            {store.countryDetails && (
                <CountryJsonDetailsTable countryData={store.countryDetails}/>
            )}
        </div>
    );
});

export default CountrySearchForm;
