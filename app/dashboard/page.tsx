import Link from "next/link"
import {

  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Progress } from "@/components/ui/progress"

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import prisma from "@/lib/prisma"

async function getMembers(){
    const response = await prisma.member.findMany({
        take: 5, 
        orderBy: {
          createdAt: 'desc'
        }
    });    
    return await response;
}
export default async function Dashboard() {

    const data = await getMembers();
    console.log(data)
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Nec Members</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus 
                        ut minima beatae error corporis in, dolores qui doloribus tempora.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link href={'/dashboard/memder'} className={buttonVariants()}>
                        Add New Member
                    </Link>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Total Members</CardDescription>
                  <CardTitle className="text-4xl">
                    {data.length}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
            <Card x-chunk="dashboard-05-chunk-3 col">
                  <CardHeader className="px-7">
                    <CardTitle>Members</CardTitle>
                    <CardDescription>
                      Recent Members
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {
                            data.map((member)=>(
                                <TableRow key={member.id} >
                                <TableCell>
                                    <div className="font-medium">{ member.firstName} { member.otherNames} {member.surname}</div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                    {member.emailAddress}
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <Badge className="text-xs" variant="secondary">{member.gender}</Badge>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <Badge className="text-xs" variant="secondary">
                                        {member.phoneNumber}
                                    </Badge>
                                </TableCell>
                                </TableRow>
                            ))
                        }
                        
                      </TableBody>
                    </Table>
                  </CardContent>
            </Card>
          </div>
    </main>
  )
}
