import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SubHeader from "@/components/SubHeader/SubHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#DAE0E6] pt-12">
      <div className="z-[3]">
        <div className="box-border flex max-w-full flex-row justify-center px-6 py-5">
          <div className="w-full lg:w-[640px]">
            <SubHeader />
          </div>
        </div>
      </div>
    </main>
  );
}
