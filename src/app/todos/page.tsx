import React from 'react'
import { cn } from '@/lib/utils'
import { getData } from "@/actions/todoActions"
import AddTodo from "@/components/AddTodo"
import Todos from '@/components/Todos'
import Todo from "@/components/Todo"

const TodosPage = async () => {
  const data = await getData()
  return (
    <Todos todos={data} />
  )
}

export default TodosPage