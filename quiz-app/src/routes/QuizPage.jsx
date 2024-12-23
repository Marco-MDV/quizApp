import React, { useEffect } from 'react'
import {setText}from '../redux/sliceLinksNavbar'
import { useDispatch } from 'react-redux'

export default function QuizPage() {
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(setText('QuizPage'));
    },[])
  return (
    <div>QuizPage</div>
  )
}
