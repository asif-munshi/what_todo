import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <TooltipProvider>
        <Tooltip delayDuration={500}>
          <TooltipTrigger asChild>
            <Button variant="default">Click Here</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </main>
  );
}
