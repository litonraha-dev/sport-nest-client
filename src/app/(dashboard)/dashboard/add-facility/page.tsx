'use client';

import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Building2, CalendarCheck, CircleCheck, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { popularSports } from '@/lib/dummy-data';
import { toast } from '@/components/ui/toast';

type FacilityFormState = {
    name: string;
    sportType: string;
    imageUrl: string;
    location: string;
    pricePerHour: string;
    capacity: string;
    description: string;
};

const initialForm: FacilityFormState = {
    name: '',
    sportType: '',
    imageUrl: '',
    location: '',
    pricePerHour: '',
    capacity: '',
    description: '',
};

// Edit these if the field layout changes.
const numericFields: Array<{ key: 'pricePerHour' | 'capacity'; label: string; icon: LucideIcon; min: number; step?: number }> = [
    { key: 'pricePerHour', label: 'Price Per Hour (৳)', icon: CalendarCheck, min:1 },
    { key: 'capacity', label: 'Capacity (players)', icon: Users, min: 1 },
];

const fieldStyles = 'h-11 w-full text-base';

const AddFacilityPage = () => {
    const [form, setForm] = useState<FacilityFormState>(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSportTypeChange = (value: string | null) => {
        setForm((prev) => ({ ...prev, sportType: value ?? '' }));
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: send this payload to the API when the backend is ready.
        const form = e.currentTarget;
        const formData = new FormData(form);
        const facility = Object.fromEntries(formData.entries());
        const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/facilities`, {
            method:"POST",
            headers:{
                "Content-Type":'application/json',
            },
            body: JSON.stringify(facility),
        })
          const data = await result.json();
          console.log(data, "from form");
          if(data.acknowledged){
            toast.add({
                title:"Facility Added Successfully",
                description:"Your facility has been added to the platform",
                type:"success"
            })
          }
    };
  

    return (
        <div className='mx-auto max-w-2xl space-y-8'>
            <div className='space-y-1'>
                <h1 className='text-2xl font-bold tracking-tight text-slate-900'>
                    Add Facility
                </h1>
                <p className='text-sm text-slate-500'>
                    List a new sports facility. It will go live on the platform
                    once approved.
                </p>
            </div>

            {submitted && (
                <div className='flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800'>
                    <CircleCheck className='mt-0.5 size-5 shrink-0 text-emerald-600' />
                    <div>
                        <p className='font-medium'>
                            &ldquo;{form.name}&rdquo; was saved locally.
                        </p>
                        <p className='text-emerald-700'>
                            API submission comes later — for now the payload is
                            logged to the console.
                        </p>
                    </div>
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className='space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'
            >
                <div className='space-y-2'>
                    <Label htmlFor='name' className='text-slate-700'>
                        Facility Name
                    </Label>
                    <Input
                        id='name'
                        name='name'
                        placeholder='e.g. Green Arena'
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={fieldStyles}
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='sportType' className='text-slate-700'>
                        Sport Type
                    </Label>
                    <Select
                        name='sportType'
                        value={form.sportType || null}
                        onValueChange={handleSportTypeChange}
                        items={popularSports.map((sport) => ({
                            value: sport.name,
                            label: sport.name,
                        }))}
                    >
                        <SelectTrigger className={`${fieldStyles} w-full`}>
                            <SelectValue placeholder='Select a sport' />
                        </SelectTrigger>
                        <SelectContent>
                            {popularSports.map((sport) => (
                                <SelectItem key={sport.name} value={sport.name}>
                                    {sport.emoji} {sport.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='imageUrl' className='text-slate-700'>
                        Image URL
                    </Label>
                    <Input
                        id='imageUrl'
                        name='imageUrl'
                        type='url'
                        placeholder='https://example.com/facility.jpg'
                        required
                        value={form.imageUrl}
                        onChange={handleChange}
                        className={fieldStyles}
                    />
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='location' className='text-slate-700'>
                        Location
                    </Label>
                    <Input
                        id='location'
                        name='location'
                        placeholder='e.g. Dhanmondi, Dhaka'
                        required
                        value={form.location}
                        onChange={handleChange}
                        className={fieldStyles}
                    />
                </div>

                <div className='grid gap-5 sm:grid-cols-2'>
                    {numericFields.map((field) => (
                        <div className='space-y-2' key={field.key}>
                            <Label
                                htmlFor={field.key}
                                className='text-slate-700'
                            >
                                <field.icon className='size-4' />
                                {field.label}
                            </Label>
                            <Input
                                id={field.key}
                                name={field.key}
                                type='number'
                                min={field.min}
                                step={field.step}
                                required
                                value={form[field.key]}
                                onChange={handleChange}
                                className={fieldStyles}
                            />
                        </div>
                    ))}
                </div>

                <div className='space-y-2'>
                    <Label htmlFor='description' className='text-slate-700'>
                        <Building2 className='size-4' />
                        Description
                    </Label>
                    <Textarea
                        id='description'
                        name='description'
                        placeholder='Describe the turf/court quality, amenities, parking, timings…'
                        required
                        rows={5}
                        value={form.description}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex items-center justify-end gap-3 border-t border-slate-200 pt-5'>
                    <Button
                        type='button'
                        variant='outline'
                        onClick={() => {
                            setForm(initialForm);
                            setSubmitted(false);
                        }}
                    >
                        Clear
                    </Button>
                    <Button type='submit'>Add Facility</Button>
                </div>
            </form>
        </div>
    );
};

export default AddFacilityPage;
