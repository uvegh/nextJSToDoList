 import {prisma} from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"
const createTodo=async(data:FormData)=>{
"use server"//this function only runs on the server

const title=data.get("title")?.valueOf()
if(typeof title!=="string"|| title?.length===0){
    throw new Error("invalid title")
   
}
await prisma.todo.create({
    data:{
        title:title,
        complete:false
    }

})
redirect("/")
console.log(title)

}



 export default function Page(){
    return(
        <>
        <header className="flex justify-between items-center mb-4 w-3/4 mx-auto my-auto">
<h1 className="text-2xl">   New </h1>
</header>
<form action={createTodo} className="flex gap-2 flex-col w-3/4 mx-auto my-auto">
    <input type="text" name="title" 
    className=" border border-gray-400 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" />
      
        {/* <input type="text" name="title" 
    className=" mt-1 border border-gray-400 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" /> */}

    <div className="flex gap-1 justify-end">
        <Link href=".." className="border ms-2 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus:within:bg-slate-700"

        // onClick={()=>{
        //  let val=   document.getElementsByName("title")
        // console.log("values is",val)
        // }}
        >Cancel</Link>
        <button type="submit" className="border ms-2 border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus:within:bg-slate-700">Submit</button>
       </div>
</form>
   
       
      
        
        
        
        </>
    )
 }