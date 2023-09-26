import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvater() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/asif-munshi.png" alt="@asif" />
      <AvatarFallback className="rounded-full bg-slate-600 text-white">
        AM
      </AvatarFallback>
    </Avatar>
  );
}
