import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from '../../services/api'
import './style.css'

export default function Dashboard() {
    const [spots, setSpots] = useState([])
    //carrega infos acima que o componente é chamado.
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const respose = await Api.get('/my-spots', {
                headers: { user_id }
            });
            
            setSpots(respose.data)
        }
        loadSpots()
    }, [])
    return (
        <>
            <ul className='spot-list'>
                {spots.map(sp => (
                    <li key={sp._id}>
                        <header style={{ backgroundImage: `url(${sp.thumbnail_url})` }}>
                        </header>
                        <strong>
                            {sp.company}
                        </strong>
                        <span>
                            {sp.techs}
                        </span>
                        <span>
                            {sp.price ? `R$${sp.price}/dia` : 'Gratis'}
                        </span>
                    </li>
                ))}
            </ul>
            <Link to='/novo'>
                <button className='btn'>  Cadastrar novo Spot </button>
            </Link>
        </>
    )
}