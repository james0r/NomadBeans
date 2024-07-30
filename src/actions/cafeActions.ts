'use server'

import db from "@/db/drizzle"
import { cafe } from "@/db/schema"
import { asc, eq, not } from "drizzle-orm"
import { revalidatePath } from 'next/cache'

export const getData = async () => {
  const data = await db.select().from(cafe).orderBy(asc(cafe.createdAt))
  
  // revalidatePath('/cafes')

  return data
}

export const addCafe = async (name: string) => {
  await db.insert(cafe).values({
    // id: id,
    name: name,
  })

  revalidatePath('/cafes')
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