"use client"//because of onchange
type TodoItemProps={
id:string,
title:string,
complete:boolean,
toggleTodo:(id:string,complete:boolean)=>void
}

export function  TodoItem({id,title,complete,toggleTodo}:TodoItemProps){//declare props obj in ts


    return(
         <li className="flex gap-1 items-center"> 
    <input id={id} type="checkbox" className="cursor-pointer peer rounded-sm" 
    defaultChecked={complete} 
    onChange={(e)=>{
        toggleTodo(id,e.target.checked)

    }}
    />
    <label  className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">{title}</label>
    </li>)

}