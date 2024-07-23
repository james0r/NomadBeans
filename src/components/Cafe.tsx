'use client'

import { FC, useState, ChangeEvent } from 'react'
import { cafeType } from '@/types'

interface Props {
  cafe: cafeType
  changeCafeName: (id: number, name: string) => void
  deleteCafeItem: (id: number) => void
}

const Cafe: FC<Props> = ({
  cafe,
  changeCafeName,
  deleteCafeItem
}) => {

  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(cafe.name)

  // Event handler for text input change
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true)
  }
  // Event handler for saving the edited text
  const handleSave = async () => {
    changeCafeName(cafe.id, name)
    setEditing(false)
  }
  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false)
    setName(cafe.name)
  }
  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteCafeItem(cafe.id)
    }
  }

  return (
    <div className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
      {/* Input field for todo text */}
      <div>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          readOnly={!editing}
          className={`outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
        />
        <div>
          {cafe.createdAt}
        </div>
      </div>
      {/* Action buttons for editing, saving, canceling, and deleting */}
      <div className="flex gap-1 ml-auto">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Edit
          </button>
        )}
        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Close
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default Cafe