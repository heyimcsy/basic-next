import React from 'react'
import { useRouter } from 'next/router'
import Button from '@/components/Button'

const ABoutById = () => {
  const router = useRouter()
  const q = router.query
  console.log(q)
  return (
    <>
      <Button></Button>헬로우우
    </>
  )
}

export default ABoutById
