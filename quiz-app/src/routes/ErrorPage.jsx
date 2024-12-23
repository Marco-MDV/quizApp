import React, { useEffect } from 'react'
import {setText}from '../redux/sliceLinksNavbar'
import { useDispatch } from 'react-redux'

export default function ErrorPage() {
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(setText('ErrorPage'))
    },[])
  return (
    <div>ErrorPage</div>
  )
}
