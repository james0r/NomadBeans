'use client'

import { FC, useState } from 'react'
import { cafeType } from '@/types'
import Cafe from './Cafe'
import { addCafe, deleteCafe, editCafe } from '@/actions/cafeActions'
import AddCafe from '@/components/AddCafe'

interface Props {
  cafes: cafeType[]
}

const Cafes: FC<Props> = ({ cafes }) => {
  const [cafeItems, setCafeItems] = useState<cafeType[]>(cafes)

  const createCafe = (name: string) => {
    const id = (cafeItems.at(-1)?.id || 0) + 1
    addCafe(id, name)
    // Get the current date
    let currentDate = new Date()

    // Extract and format year, month, and day using template literals
    let dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`

    setCafeItems((prev) => [...prev, { id: id, name: name, createdAt: dateString }])
  }
  // Function to change the text of a todo item
  const changeCafeName = (id: number, name: string) => {
    setCafeItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, name } : todo))
    )
    editCafe(id, name)
  }
  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    setCafeItems((prev) => prev.filter((cafe) => cafe.id !== id))
    deleteCafe(id)
  }

  console.log(cafeItems)

  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium">Cafe App</div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {/* Mapping through todoItems and rendering Todo component for each */}
        {cafeItems.map((todo) => (
          <Cafe
            key={todo.id}
            cafe={todo}
            changeCafeName={changeCafeName}
            deleteCafeItem={deleteTodoItem}
          />
        ))}
      </div>
      {/* Adding Todo component for creating new todos */}
      <AddCafe createCafe={createCafe} />
    </main>
  )
}

export default Cafes