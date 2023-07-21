'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"
import { account } from "../helper/datas";

export default function Login({ username, password, onSetUsername, onSetPassword }: any) {
  
  const router = useRouter();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleUsernameChange = (e: any) => {
    onSetUsername(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    onSetPassword(e.target.value)
  }

  const handleLogin = (e: any) => {
    e.preventDefault();

    try {
      const userAccount = account.map((data: any) => {
        return {
          username: data.username,
          password: data.password
        }
      });
  
      const accountUsername = userAccount.find((data: any) => data.username === username);
      const accountPassword = userAccount.find((data: any) => data.password === password);
      
      if (accountUsername && accountPassword) {
        const isLoggedIn = true;
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        router.push('/dashboard');
      } else {
        alert('Incorrect username or password');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {isLoggedIn ? router.push('/dashboard') :  
        <div className="flex flex-col justify-center w-96 gap-8">
          <form action="" className='space-y-4' onSubmit={handleLogin}>
            <label htmlFor="" className="flex flex-col">
              Username
              <input className="text-gray-900" type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <label htmlFor="" className="flex flex-col">
              Password
              <input className="text-gray-900" type="password" value={password} onChange={handlePasswordChange} />
            </label>
          </form>
          <button type="submit" className='bg-gray-700' onClick={handleLogin}>Login</button>
        </div>
      }
    </>
  )
}
