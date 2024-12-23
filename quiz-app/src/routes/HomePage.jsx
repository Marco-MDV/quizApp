import React, { useEffect } from 'react'
import {setText}from '../redux/sliceLinksNavbar'
import { useDispatch } from 'react-redux'

export default function HomePage() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setText('HomePage'))
  },[])
  return (
    <main>
      
    </main>
  )
}
