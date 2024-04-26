'use client'

import { Home, LineChart, Package, Package2, Settings, ShoppingCart, User2, Users2 } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
// import { useRouter } from 'next/navigation'

export default function Sidebar() {
    const linkItems = [
        { 
            href: "/dashboard", 
            label: "Dashboard" ,
            icon:  <Home className="h-5 w-5" />,
        },
        { 
            href: "/dashboard/members", 
            label: "Members",
            icon: <Users2 className="h-5 w-5" />,
        },
    ];
    const pathname = usePathname()
    console.log(pathname)

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
                href="#"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <TooltipProvider>
                {
                    linkItems.map((item) => (
                        <Tooltip key={item.href}>
                            <TooltipTrigger asChild>
                                <Link  href={item.href} className={
                                    cn("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8", {
                                        "bg-accent text-accent-foreground": pathname === item.href,
                                    })
                                }
                                >
                                    {item.icon}
                                    <span className="sr-only">{item.label}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">{item.label}</TooltipContent>
                        </Tooltip>
                    ))
                }
            
            </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </nav>
      </aside>
    );
}