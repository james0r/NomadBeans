'use server'

import db from "@/db/drizzle"
import { cafe } from "@/db/schema"
import { asc, eq, not } from "drizzle-orm"
import { revalidatePath } from 'next/cache'

export const getData = async () => {
  const data = await db.select().from(cafe).orderBy(asc(cafe.id))

  return data
}

export const addCafe = async (id: number, name: string) => {
  await db.insert(cafe).values({
    id: id,
    name: name,
  })

  revalidatePath('/cafes')
}

export const editCafe = async (id: number, name: string) => {
  await db
    .update(cafe)
    .set({
      name: name
    })
    .where(eq(cafe.id, id))
}

export const deleteCafe = async (id: number) => {
  await db.delete(cafe).where(eq(cafe.id, id))
}