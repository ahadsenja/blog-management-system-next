'use client'
import { useEffect, useState } from 'react';
import Dashboard from './Dashboard'
import { useRouter } from 'next/navigation';

export default function page() {
  return (
    <>
      <Dashboard />
    </>
  )
}
