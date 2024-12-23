import React, { useEffect , useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [currentLocationInNav, setCurrentLocationInNav] = useState('')
    const location = useSelector((state)=>state.currentLocation.value)
    useEffect(()=>{
        setCurrentLocationInNav(location)
    },[location])    

    return (
        <nav className='flex mt-2 justify-around items-center'>
            <Link to="/"><button className='border-2 rounded-md px-2 py-1 bg-slate-200 text-black hover:bg-slate-400 active:bg-slate-600 active:font-bold active:border-0'>Home page</button></Link>
            <Link to="https://github.com/Marco-MDV"><button className='border-2 rounded-md p-2 hover:'>Github</button></Link>
        </nav>
    )
}
