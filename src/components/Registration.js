import React, { useEffect } from 'react'

export default function Registration () {
  
  useEffect(() => {
    window.memberstack.init(); // mount
    return () => {
      window.memberstack.destroy(); // unmount
    }
  }, [])

  return (
    <form data-ms-form="signup">
    </form>
  )

}