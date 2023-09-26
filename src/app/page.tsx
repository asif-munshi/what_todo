import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#DAE0E6] pt-12">
      <div className="flex w-full flex-col items-start">
        <TooltipProvider>
          <Tooltip delayDuration={500}>
            <TooltipTrigger asChild>
              <Button variant="primary">Click Here</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </main>
  );
}
