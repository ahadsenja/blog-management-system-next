'use client'
import { useEffect, useState } from 'react';
import Login from './Login'
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <>
      <div className='flex justify-center min-h-[30rem]'>
        <Login 
          username={username} 
          password={password} 
          onSetUsername={setUsername} 
          onSetPassword={setPassword} 
        />
      </div>
    </>
  )
}
