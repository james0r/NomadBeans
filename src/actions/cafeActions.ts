'use server'

import db from "@/db/drizzle"
import { cafe } from "@/db/schema"
import { asc, eq, not } from "drizzle-orm"
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }).max(40, {
    message: 'Name must be less than 40 characters',
  })
})

export const addCafeAction = async (prevData: FormData, formData: FormData) => {

  const validatedFields = schema.safeParse({
    name: formData.get('name'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  let result: any

  try {
    await db.insert(cafe).values({
      name: validatedFields.data.name,
    })
    result = {
      success: true,
    }
  } catch (e) {
    result = {
      errors: {
        general: 'An error occurred while processing your request. Please try again.',
      },
      success: false,
    }
  }

  revalidatePath('/cafes')

  // console.log('result', result) 

  return result
}

export const addCafe = async (name: string) => {
  await db.insert(cafe).values({
    // id: id,
    name: name,
  })

  revalidatePath('/cafes')
}

export const getData = async () => {
  const data = await db.select().from(cafe).orderBy(asc(cafe.createdAt))

  // revalidatePath('/cafes')

  return data
}


export const editCafe = async (id: string, name: string) => {
  await db
    .update(cafe)
    .set({
      name: name
    })
    .where(eq(cafe.id, id))
}

export const deleteCafe = async (id: string) => {
  await db.delete(cafe).where(eq(cafe.id, id))

  revalidatePath("/cafes")
}