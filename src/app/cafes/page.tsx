import React from 'react'
import { cn } from '@/lib/utils'
import { getData } from "@/actions/cafeActions"
import Cafes from '@/components/Cafes'

export const dynamic = 'force-dynamic'

const CafesPage = async () => {
  const data = await getData()

  return (
    <div>
      <Cafes cafes={data} />
    </div>
  )
}

export default CafesPage