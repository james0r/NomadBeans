'use client'

import { FC, useState, useEffect } from 'react'
import { cafeType } from '@/types'
import Cafe from './Cafe'
import { addCafe, deleteCafe, editCafe, getData } from '@/actions/cafeActions'
import AddCafe from '@/components/AddCafe'

interface Props {
  cafes: cafeType[]
}

const Cafes: FC<Props> = ({ cafes }) => {
  const [cafeItems, setCafeItems] = useState<cafeType[]>(cafes)


  useEffect(() => {
    console.log('cafeItems', cafeItems)
  }, [cafeItems])

  const createCafe = async (name: string) => {

    addCafe(name)
    // Get the current date
    // let currentDate = new Date()

    const newCafes = await getData()

    // Extract and format year, month, and day using template literals
    // let dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`

    setCafeItems(newCafes)
  }
  // Function to change the text of a todo item
  const changeCafeName = (id: string, name: string) => {
    setCafeItems((prev) =>
      prev.map((cafe) => (cafe.id === id ? { ...cafe, name } : cafe))
    )

    console.log('id', id)

    editCafe(id, name)
  }
  // Function to delete a todo item
  const deleteTodoItem = (id: string) => {
    setCafeItems((prev) => prev.filter((cafe) => cafe.id !== id))
    deleteCafe(id)
  }

  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium">Cafe App</div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {/* Mapping through todoItems and rendering Todo component for each */}
        {cafeItems.map((cafe) => (
          <Cafe
            key={cafe.id}
            cafe={cafe}
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