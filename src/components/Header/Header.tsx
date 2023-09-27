import { Input } from "@/components/ui/input";
import { Bell, Plus } from "lucide-react";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
import Navigation from "./Navigation";
import UserDropdownMenu from "./UserDropdownMenu";

export default function Header() {
  return (
    <header className="fixed top-0 z-[80] inline-flex h-12 w-full flex-row items-center text-[#1c1c1c]">
      <div className="box-border inline-flex h-full w-full flex-row items-center border-b-[#EDEFF1] bg-white px-5">
        {/* Mobile Sidebar */}
        <div className="flex h-full w-full items-center md:hidden">
          <MobileSidebar />
        </div>
        <div className="hidden h-full w-full items-center md:flex">
          <Link
            href={"/"}
            className="mr-4 flex h-full flex-grow-0 items-center justify-center text-lg font-bold"
          >
            What Todo
          </Link>
          <Navigation />
          <div className="flex h-full flex-grow items-center justify-center px-4">
            <div className="flex h-10 w-full items-center justify-center rounded-full border">
              <Input
                type="text"
                placeholder="Search"
                className="rounded-full focus-visible:border focus-visible:border-[#0079D3] focus-visible:bg-[#F6F7F8] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <div className="flex h-full items-center justify-center gap-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-[#1a1a1b1a]">
              <Bell className="h-5 w-5" strokeWidth={1.3} />
            </button>
            <Link
              href={"/create"}
              className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-[#1a1a1b1a]"
            >
              <Plus className="h-6 w-6" strokeWidth={1.3} />
            </Link>
          </div>
          <UserDropdownMenu />
        </div>
      </div>
    </header>
  );
}
