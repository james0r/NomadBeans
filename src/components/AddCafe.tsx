'use client'

import { ChangeEvent, FC, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  createCafe: (value: string) => void
}

const AddCafe: FC<Props> = ({ createCafe }) => {
  const [input, setInput] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createCafe(input)
    setInput("")
  }

  return (
    <div className="w-full flex gap-2 mt-4">
      {/* Input field for entering new todo text */}
      <input
        type="text"
        className="input input-bordered w-full"
        onChange={handleInput}
        value={input}
      />
      {/* Button for adding a new todo */}
      <button
        className="btn btn-primary"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  )
}

export default AddCafe