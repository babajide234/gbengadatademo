'use client'

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

const AddMemberForm =() => {
    return (
        <form action="" className="">
            <div className=" flex flex-col gap-5">
                <div className=" grid grid-cols-12 gap-3">
                    <div className=" col-span-2 ">
                        <Label >Title</Label>
                        <Select>
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
                    </div>
                    <div className=" col-span-3">
                        <Label>Surname</Label>
                        <Input/>
                    </div>
                    <div className="col-span-3">
                        <Label>First Name</Label>
                        <Input/>
                    </div>
                    <div className="col-span-3">
                        <Label>Other Names</Label>
                        <Input/>
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-3">
                    <div className=" col-span-2 ">
                        <Label >Gender</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="M">Male</SelectItem>
                                <SelectItem value="F">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-3">
                    <div className=" col-span-4 ">
                        <Label >Phone Number</Label>
                        <Input/>
                    </div>
                    <div className=" col-span-6 ">
                        <Label >Email</Label>
                        <Input/>
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-3">
                    <div className=" col-span-12 ">
                        <Label >Address</Label>
                        <Textarea/>
                    </div>
                    <div className=" col-span-6 ">
                        <Label >State</Label>
                        <Input/>
                    </div>
                    <div className=" col-span-6 ">
                        <Label >LGA</Label>
                        <Input/>
                    </div>
                    <div className=" col-span-6 ">
                        <Label >Ward</Label>
                        <Input/>
                    </div>
                    <div className=" col-span-2 ">
                        <Label >Ward Code</Label>
                        <Input/>
                    </div>
                    <div className=" col-span-4 ">
                        <Label >Poling Unit (Code)</Label>
                        <Input/>
                    </div>
                    <div className=" col-span-6 ">
                        <Label >Inec Voting Card Number</Label>
                        <Input/>
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-3">
                    <div className=" col-span-12 flex flex-col gap-5 ">
                        <div className=" bg-slate-950 px-2 py-2 w-fit text-white rounded-md">
                            <h2 className="">Category(Tick all that apply) </h2>
                        </div>
                        <div className="  grid grid-cols-2">
                            <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                National Officer
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-12 gap-3">
                    <Button variant="default" size="default" className="h-8 gap-1">
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add Member
                        </span>
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default AddMemberForm;