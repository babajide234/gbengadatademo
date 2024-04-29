'use client'
import AddMemberForm from "@/components/AddMemberForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import {  MoreHorizontal, PlusCircle } from "lucide-react";
import {  AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";


const Members =  () => {
    const [add, setAdd] = useState(false);

    
    const { isLoading, error, data } = useQuery({
            queryKey: ["members"],
            queryFn: async () => {
                const response = await fetch('/api/members');
                
                return response.json();
            }
        }      
    );

    console.log(data)
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="flex items-center">
                <div className="ml-auto flex items-center gap-2">
                        <Button onClick={()=> setAdd(!add)} size="sm" className="h-8 gap-1">
                            {
                                add && (
                                    <>
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                            Back
                                        </span>
                                    </>
                                )
                            }
                            {
                                !add && (
                                    <>
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                            Add Member
                                        </span>
                                    </>
                                )
                            }
                        </Button>
                    
                </div>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
                {
                   add && (
                    <>
                        <CardHeader>
                            <CardTitle>Add Members Form</CardTitle>
                            <CardDescription>
                                Manage your Members and view their profiles.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AddMemberForm back={()=> setAdd(!add)}/>
                        </CardContent>
                    </>
                    )
                }
                {
                    !add && (
                        <>
                            <CardHeader>
                                <CardTitle>Members</CardTitle>
                                <CardDescription>
                                    Manage your Members and view their profiles.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                            <Table>
                                <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Gender</TableHead>
                                    <TableHead>Phone Number</TableHead>
                                    <TableHead>Email</TableHead>
                                
                                    <TableHead>
                                    <span className="sr-only">Actions</span>
                                    </TableHead>
                                </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        !isLoading && !error && data?.map((member: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; firstName: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; otherName: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; surname: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; gender: string; phoneNumber: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; emailAddress: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; })=>(
                                            <TableRow key={member.id}>
                                                <TableCell className="hidden sm:table-cell capitalize">
                                                    {member.title}
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    {member.firstName} {member.otherName} {member.surname}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">
                                                        { member.gender === "M" ? "Male":"Female"}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    {member.phoneNumber}
                                                </TableCell>
                                                <TableCell>
                                                    {member.emailAddress}
                                                </TableCell>
                                                <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                    <Button
                                                        aria-haspopup="true"
                                                        size="icon"
                                                        variant="ghost"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Toggle menu</span>
                                                    </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>Details</DropdownMenuItem>
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem className=" text-red-600 ">Delete</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                
                                </TableBody>
                            </Table>
                            </CardContent>
                            <CardFooter>
                            <div className="text-xs text-muted-foreground">
                                Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                                products
                            </div>
                            </CardFooter>
                        </>
                    )
                }
              </Card>
        </main>
    );
}

export default Members;