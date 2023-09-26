"use client";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="box-border flex h-full min-w-[72px] max-w-[270px] flex-grow items-center justify-center">
      <div className="flex h-9 w-full items-center justify-between rounded border border-transparent px-2 hover:cursor-pointer hover:border-[#EDEFF1]">
        <div>Navigation</div>
        <div>Arrow</div>
      </div>
    </div>
  );
}
