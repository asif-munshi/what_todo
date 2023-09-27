import SubHeader from "@/components/SubHeader/SubHeader";
import CardTodo from "@/components/Cards/CardTodo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#DAE0E6] pt-12">
      <div className="z-[3]">
        <div className="box-border flex max-w-full flex-row justify-center px-6 py-5">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <SubHeader />
            <div className="grid w-full grid-cols-1 place-items-center gap-[10px] xl:grid-cols-2 xl:gap-4">
              <CardTodo />
              <CardTodo />
              <CardTodo />
              <CardTodo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
