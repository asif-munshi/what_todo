"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import UserAvater from "./UserAvater";

export default function UserDropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="ml-2 box-border flex h-[44px] w-[203px] items-center rounded border border-transparent px-0 py-[2px] hover:border-[#EDEFF1] hover:bg-transparent"
        >
          <div className="flex h-[38px] w-full flex-row items-center justify-between">
            <div className="flex h-full w-full flex-row items-center gap-2">
              <UserAvater />
              <div className="flex h-full w-full flex-col items-start justify-center">
                <span className="text-xs">Asif-Munshi</span>
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 ${
                open
                  ? "rotate-180 transition duration-150 ease-in-out"
                  : "rotate-0 transition duration-150 ease-in-out"
              }`}
              strokeWidth={1.2}
            />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="p-0">
            <Link href={"/"} className="flex h-full w-full flex-row p-2">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link href={"/"} className="flex h-full w-full flex-row p-2">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <Link href={"/"} className="flex h-full w-full flex-row p-2">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
