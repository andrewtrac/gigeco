import React, { useEffect } from 'react'

export default function Registration () {


  useEffect(() => {
    let script = document.createElement('script');
    script.src = 'https://api.memberstack.io/static/memberstack.js?custom';
    script.setAttribute('data-memberstack-id', '335d53e2477f259d83f9b05ece497148');
    script.async = true;
    document.body.appendChild(script);
  }, [])

  return (
    <form data-ms-form="signup">
    </form>
  )

}