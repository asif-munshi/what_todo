import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CardTodo() {
  return (
    <div className="box-border w-[640px] rounded border border-[#ccc] bg-white p-2 hover:border-[#898989] xl:rounded">
      <div className="flex flex-col gap-2 pt-2">
        <div className="flex w-full flex-row items-center justify-start text-xs font-normal">
          <Link href={"/"}>
            <Avatar className="mr-1 h-5 w-5 rounded-[50%]">
              <AvatarImage
                src="https://github.com/asif-munshi.png"
                alt="@asif"
              />
              <AvatarFallback className="rounded-full bg-slate-600 text-white">
                AM
              </AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex h-full flex-row gap-2">
            <Link href={"/"} className="hover:underline">
              asif-munshi
            </Link>
            <div className="text-[#787C7E]">Time Stamp</div>
          </div>
        </div>
        <Link href={"/create"} className="flex flex-col pt-2">
          <div className="pr-[5px] text-lg font-medium leading-[22px] text-[#222]">
            Title
          </div>
          <div className="pb-[10px] pt-[5px]">Description</div>
        </Link>
        <div>Bottom</div>
      </div>
    </div>
  );
}
