import { prisma } from "@/db"
import Link from "next/link"
import { TodoItem } from "@/components/TodoItem"
export default async function Home() {

  const getTodos=async()=>{
return  await prisma.todo.findMany()//get data from db from todo table
  }

  const todos =await getTodos()


const toggleTodo=async(id:string,complete:boolean)=>{
  "use server"
  console.log(id,complete)
  await prisma.todo.update({
    where:{id},data:{
      complete
    }
  })
  console.log("updated")
}
 

  return (
   <>
   <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">Todos</h1>
    <Link 
    className="border border-slate-300 text-slate-300  text-xl rounded hover:bg-slate-700 focus-within:bg-slate-900 outline-none py-1 px-2"
    href="/new">New
</Link>
   </header>
   

   <ul className="pl-4">
{
  todos?.length==0?(
    <>
    Nothing on your to do list</>
  ):todos?.map((todo)=>(
<TodoItem key={todo?.id} {...todo} toggleTodo={toggleTodo}/>
  ))
}
   </ul>
   </>
  )
}
