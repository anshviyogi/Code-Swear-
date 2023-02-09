import { useRouter } from 'next/router';
import React from 'react'

const Slug = () => {
    // Dynamic page route in next js using slug.
    const router = useRouter()
    const {slug} = router.query;
  return (
    <div>Slug is :{slug}</div>
  )
}

export default Slug