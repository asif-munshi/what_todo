"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SubHeader() {
  const router = useRouter();

  return (
    <div className="lg:w-[640px]">
      <div className="flex w-full flex-row rounded border border-[#ccc] bg-white p-2">
        <Link href={"/"}>
          <Avatar className="mr-2 h-10 w-10 rounded-[50%] border border-[#EDEFF1]">
            <AvatarImage src="https://github.com/asif-munshi.png" alt="@asif" />
            <AvatarFallback className="rounded-full bg-slate-600 text-white">
              AM
            </AvatarFallback>
          </Avatar>
        </Link>
        <Input
          type="text"
          placeholder="Create Todo"
          className="rounded hover:border-[#0079D3] focus-visible:border focus-visible:bg-[#F6F7F8] focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={() => router.push("/create")}
        />
      </div>
    </div>
  );
}
