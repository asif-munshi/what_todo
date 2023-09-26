import { Bell } from "lucide-react";
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
            <div className="flex h-10 w-full items-center justify-center rounded-full border border-[#EDEFF1] bg-[#F6F7F8]">
              Search
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <div>
            <Bell />
          </div>
          <UserDropdownMenu />
        </div>
      </div>
    </header>
  );
}
