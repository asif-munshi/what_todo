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
import { ChevronDown, Home, Plus } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "/",
    path: "/",
    icon: (
      <Home
        className="mr-2 h-5 w-5 fill-none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      />
    ),
  },
  {
    id: 2,
    text: "Create Todo",
    href: "/create",
    path: "create",
    icon: (
      <Plus
        className="mr-2 h-5 w-5 fill-none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      />
    ),
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="box-border flex h-9 w-full min-w-[72px] max-w-[270px] flex-grow items-center justify-between rounded border border-transparent p-0 px-2 hover:border-[#EDEFF1] hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <div className="flex h-full w-full flex-row items-center gap-2">
            {pathname.match(/^[/]$/) && (
              <>
                <Home className="h-5 w-5" />
                <span className="text-base">Home</span>
              </>
            )}
            {pathname.match("/create") && (
              <>
                <Plus className="h-5 w-5" />
                <span className="text-base">Create Todo</span>
              </>
            )}
          </div>
          <ChevronDown
            className={`h-5 w-5 ${
              open
                ? "rotate-180 transition duration-150 ease-in-out"
                : "rotate-0 transition duration-150 ease-in-out"
            }`}
            strokeWidth={1.2}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[270px] rounded rounded-tl-none rounded-tr-none border border-[#EDEFF1] p-0">
        <DropdownMenuGroup>
          {navLinks.map((nav) => (
            <DropdownMenuItem key={nav.id} className="p-0">
              <Link
                href={nav.href}
                className="flex h-full w-full flex-row items-center px-6 py-2"
                onClick={() => setOpen(false)}
              >
                {nav.icon}
                <span className="text-sm">{nav.text}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
