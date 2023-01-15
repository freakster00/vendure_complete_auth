import React from 'react'

import { useSession,signIn,signOut} from 'next-auth/react'

const Home = () => {
    const { data : session }=useSession()
    const handleSubmit=(provider)=>()=>signIn(provider)
  return (
    <><div>Testing....</div>
    {session ? (
    <>
    <div><img src={session.user.image}/></div>
    <p>Hello {session.user.name}</p>
    {session.user.email}
    <br />
    <button onClick={signOut}>Sign Out</button>
    </>
    )
    :
    (
        <>
        <div>You are not  signed In</div>
        <button onClick={handleSubmit("github")}>Sign In</button>
        </>
    )}
    </>
  )
}

export default Home
