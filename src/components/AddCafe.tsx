'use client'

import { ChangeEvent, FC, useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { addCafeAction } from '@/actions/cafeActions'
import { cn } from "@/lib/utils"

interface Props {
  createCafe: (value: string) => void
}

const initialState = {
  success: null,
  errors: null
}

const AddCafe: FC<Props> = ({ createCafe }) => {
  const [state, formAction] = useFormState(addCafeAction, initialState)
  const [input, setInput] = useState('')
  const [errors, setErrors] = useState(null as any)
  const router = useRouter()

  useEffect(() => {
    if (state?.errors) {
      setErrors(state.errors)
    }

    if (state?.success) {
      setErrors(null)
      router.refresh()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createCafe(input)
    setInput("")
  }

  return (
    <>
      <div className="w-full flex gap-2 mt-4">
        <form action={formAction} className="w-full flex gap-2 mt-4">
          <input
            type="text"
            className="input input-bordered w-full"
            // onChange={handleInput}
            // value={input}
            name="name"
          />
          {/* Button for adding a new todo */}
          <button
            className="btn btn-primary"
          // onClick={handleAdd}
          >
            Add
          </button>
        </form>
        {/* Input field for entering new todo text */}
      </div>
      {
        errors && (
          <div className="toast">
            <div className="alert alert-error">
              <span>   {Object.values(errors).map((error: any) => (
                <li key={error}>
                  {error}
                </li>
              ))}
              </span>
            </div>
          </div>
        )
      }
    </>
  )
}

export default AddCafe