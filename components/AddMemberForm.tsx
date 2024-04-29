'use client'

import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Controller, useForm } from 'react-hook-form';
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

async function createMember(data: any) {
    const url = '/api/members'; // Replace with your API endpoint
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indicate JSON data
      },
      body: JSON.stringify(data), // Convert data object to JSON string
    });
  
    if (!response.ok) {
      throw new Error(`Failed to create member: ${response.statusText}`);
    }
  
    const memberData = await response.json();
    return memberData;
}

const AddMemberForm =({ back}:{ back: ()=> void}) => {
    const { register, handleSubmit, setValue, watch, control } = useForm();


    const categories = [
       " NATIONAL OFFICER",
        "FORMER PRESIDENT AND VICE PRESIDENT",
        "GOVERNORS",
        "STATE CHAIRMEN",
        "NATIONAL ASSEMBLY MEMBERS (SENATE)",
        "NATIONAL ASSEMBLY MEMBERS",
        "FORMER PRINCIPAL OFFICERS OF NASS",
        "FORMER GOVERNORS",
        "FORMER NWC MEMBERS",
        "BOARD OF TRUSTEES MEMBERS",
        "NATIONAL EX-OFFICIO",
    ]

    const handleCheckboxChange = (category: string, isChecked: any) => {
        setValue("categories", isChecked
          ? [...(watch("categories") || []), category] // Add category if checked
          : (watch("categories") || []).filter((c: any) => c !== category) // Remove category if unchecked
        );
    };
    
    const mutation = useMutation({
        mutationFn: createMember, 
        onSuccess: (data : any) => {
          console.log('Member created:', data);
        //   toast.success("Member created Successfully")
          back();
          // Handle success scenario (e.g., clear form, show success message)
        },
        onError: (error: any) => {
          console.error('Error creating member:', error);
        //   toast.error('Error creating member:', error)
          // Handle error scenario (e.g., display error message)
        },
    });
    
    const onSubmit = (data: any) => {
        const userId = "clvkseb8v0000wpf5m8nbhfwe"

        // Add userId to data object
        const updatedData = { ...data, userId };
      
        mutation.mutate(updatedData);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className=" flex flex-col gap-5">
                <div className=" grid grid-cols-12 gap-3">
                    <div className=" col-span-2 ">
                        <Label >Title</Label>
                        <Controller 
                            control={control}
                            name="title"
                            render={({ field }) => {
                            return (
                                <Select onValueChange={field.onChange} {...field}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Title" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mr">Mr</SelectItem>
                                        <SelectItem value="mrs">Mrs</SelectItem>
                                        <SelectItem value="chief">Chief</SelectItem>
                                        <SelectItem value="bar">Bar</SelectItem>
                                        <SelectItem value="engr">Engr</SelectItem>
                                    </SelectContent>
                                </Select>
                        )}}></Controller>
                    </div>
                    <div className="col-span-3">
                        <Label>Surname</Label>
                        <Input {...register('surname')} />
                    </div>
                    <div className="col-span-3">
                        <Label>First Name</Label>
                        <Input {...register('firstName')} />
                    </div>
                    <div className="col-span-3">
                        <Label>Other Names</Label>
                        <Input {...register('otherNames')} />
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-3">
                    <div className=" col-span-2 ">
                        <Label >Gender</Label>
                        <Controller 
                            control={control}
                            name="gender"
                            render={({ field }) => {
                            return (
                                <Select onValueChange={field.onChange} {...field}> 
                                    <SelectTrigger>
                                        <SelectValue placeholder="Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="M">Male</SelectItem>
                                        <SelectItem value="F">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}}>
                        </Controller>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4">
                        <Label>Phone Number</Label>
                        <Input {...register('phoneNumber')} />
                    </div>
                    <div className="col-span-6">
                        <Label>Email</Label>
                        <Input {...register('emailAddress')} />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12">
                        <Label>Address</Label>
                        <Textarea {...register('address')} />
                    </div>
                    <div className="col-span-6">
                        <Label>State</Label>
                        <Input {...register('state')} />
                    </div>
                    <div className="col-span-6">
                        <Label>LGA</Label>
                        <Input {...register('lga')} />
                    </div>
                    <div className="col-span-6">
                        <Label>Ward</Label>
                        <Input {...register('ward')} />
                    </div>
                    <div className="col-span-2">
                        <Label>Ward Code</Label>
                        <Input {...register('wardCode')} />
                    </div>
                    <div className="col-span-4">
                        <Label>Polling Unit (Code)</Label>
                        <Input {...register('pollingUnitCode')} />
                    </div>
                    <div className="col-span-6">
                        <Label>Inec Voting Card Number</Label>
                        <Input {...register('inecVotingCardNumber')} />
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-3">
                    <div className=" col-span-12 flex flex-col gap-5 ">
                        <div className=" bg-slate-950 px-2 py-2 w-fit text-white rounded-md">
                            <h2 className="">Category(Tick all that apply) </h2>
                        </div>
                        <div className="  grid grid-cols-9 gap-5 px-10 py-16 ">
                        {categories.map((category) => (
                            <div key={category} className="flex items-center gap-4 col-span-3">
                            <Checkbox
                              id={category.toLowerCase().replace(/\s+/g, '')}
                            //   onChange={''}
                            />
                            <label
                              htmlFor={category.toLowerCase().replace(/\s+/g, '')}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                            
                            
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <Button 
                        type="submit" 
                        size="lg" 
                        className="h-12 gap-1" 
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? (
                            <Loader2 className="animate-spin "/>
                        ) : (
                            <span className="sm:not-sr-only sm:whitespace-nowrap">Add Member</span>
                        )}
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default AddMemberForm;