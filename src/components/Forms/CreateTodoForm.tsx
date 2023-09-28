import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CreateTodoForm() {
  return (
    <Tabs defaultValue="post" className="w-full">
      <TabsList className="grid h-[51px] w-full grid-cols-2 p-0">
        <TabsTrigger
          value="post"
          className={`flex h-full w-full items-center justify-center border-b-2 border-r border-b-transparent border-r-[#ccc] data-[state=active]:border-b-2 data-[state=active]:border-b-[#0079D3] data-[state=active]:text-[#0079D3]`}
        >
          Post
        </TabsTrigger>
        <TabsTrigger
          value="url"
          className={`flex h-full w-full items-center justify-center border-b-2 border-b-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#0079D3] data-[state=active]:text-[#0079D3]`}
        >
          Url
        </TabsTrigger>
      </TabsList>
      <TabsContent value="post">
        <Card className="rounded border-none">
          <CardContent className="space-y-2 pt-4">
            <div className="relative">
              <Textarea
                contentEditable={"true"}
                maxLength={300}
                rows={1}
                placeholder="Title"
                className="box-border block min-h-[39px] w-full resize-none overflow-hidden overflow-x-hidden break-words rounded pr-[68px] text-[#1c1c1c] focus-visible:border focus-visible:border-[#1A1A1B] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="space-y-1">
              <Textarea
                contentEditable
                id="description"
                placeholder="Description (optional)"
                className="box-border block min-h-[122px] w-full overflow-hidden break-words rounded text-[#1c1c1c] focus-visible:border focus-visible:border-[#1A1A1B] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            {/* <p contentEditable="true">
              This is a paragraph. It is editable. Try to change this text.
            </p> */}
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              variant={"primary"}
              className="h-8 rounded-full text-sm font-bold"
            >
              Todo
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="url">
        <Card className="rounded border-none">
          <CardContent className="space-y-2">
            <div className="space-y-1">
              {/* <Label htmlFor="current">Current password</Label> */}
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              {/* <Label htmlFor="new">New password</Label> */}
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              variant={"primary"}
              className="h-8 rounded-full text-sm font-bold"
            >
              Todo
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
