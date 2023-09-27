import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvater() {
  return (
    <Avatar className="h-8 w-8 rounded-sm">
      <AvatarImage src="https://github.com/asif-munshi.png" alt="@asif" />
      <AvatarFallback className="rounded-full bg-slate-600 text-white">
        AM
      </AvatarFallback>
    </Avatar>
  );
}
