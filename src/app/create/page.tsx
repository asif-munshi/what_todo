import CreateTodoForm from "@/components/Forms/CreateTodoForm";

export default function Create() {
  return (
    <main className="min-h-screen bg-[#DAE0E6] pt-12">
      <div className="flex flex-col">
        <div className="z-[3]">
          <div className="flex justify-center px-6 py-5">
            <div className="w-[640px] max-w-[740px]">
              <div className="flex w-full flex-col gap-4">
                <div className="flex border-b border-b-[#EDEFF1] p-1">
                  <span className="h-[34px] flex-shrink flex-grow basis-[0%] text-lg font-medium leading-[22px] text-[#1c1c1c]">
                    Create What Todo
                  </span>
                </div>
                <div className="mb-[15px] flex flex-col gap-4 rounded-[5px] bg-white">
                  <CreateTodoForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
