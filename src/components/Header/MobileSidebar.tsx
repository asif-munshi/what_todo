"use client";

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
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileSidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          {/* Menu Button */}
          <Button variant="ghost">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="flex h-screen flex-col justify-between pt-12"
        >
          <SheetHeader>
            <SheetTitle>What Todo</SheetTitle>
            <SheetDescription>
              Make changes to your profile here.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Link href={"/"} className="text-lg font-bold">
        WT
      </Link>
    </>
  );
}
