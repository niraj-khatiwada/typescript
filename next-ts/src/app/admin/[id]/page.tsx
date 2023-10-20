'use client'

import React from 'react'
import ReactDOM from 'react-dom'

function Admin1() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
    ? ReactDOM.createPortal(
        <p>Hello Portal</p>,
        document.getElementById('portal')!
      )
    : null
}

export default Admin1
