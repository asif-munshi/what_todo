"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import UserDropdownMenu from "./UserDropdownMenu";

export default function Header() {
  return (
    <header className="flex h-12 w-full flex-row items-center justify-center gap-4 bg-slate-100">
      <div className="flex h-full w-[768px] flex-row items-center justify-between">
        {/* Mobile Sidebar Start */}
        <div className="flex items-center justify-start md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              {/* Menu Button */}
              <Button variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="flex h-screen flex-col justify-between"
            >
              <SheetHeader>
                <SheetTitle>What Todo</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Link href={"/"} className="text-lg font-bold text-blue-600">
            WT
          </Link>
        </div>
        {/* Mobile Sidebar End */}
        <div className="hidden h-full w-full items-center md:flex">
          <Link href={"/"} className="text-lg font-bold text-blue-600">
            What Todo
          </Link>
        </div>
        <div className="px-2">
          <UserDropdownMenu />
        </div>
      </div>
    </header>
  );
}
