import React, { useState, useMemo } from "react";
import camera from '../../assets/camera.svg'
import './style.css'
import Api from '../../services/api'

export default function New({ history }) {
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')
    const [thumb, setThumb] = useState(null)

    const preview = useMemo(
        () => { return thumb ? URL.createObjectURL(thumb) : null }, [thumb]
    )

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        data.append('thumbnail', thumb)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)

        const user_id = localStorage.getItem('user')
        await Api.post('/spot', data, {
            headers: { user_id }
        })

        history.push('/dashboards')
    }

    return (
        <form onSubmit={handleSubmit}>

            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumb ? 'has-thumb' : ''}
            >
                <input type="file"
                    onChange={ev => setThumb(ev.target.files[0])} />

                <img src={camera}
                    alt='select img' />
            </label>

            <label htmlFor="company">Empresa</label>
            <input
                type="text"
                id="company"
                value={company}
                onChange={ev => setCompany(ev.target.value)}
                placeholder="Nome da empresa" />

            <label htmlFor="company">Tecnologias(separada por virgula)</label>
            <input
                type="text"
                id="techs"
                value={techs}
                onChange={ev => setTechs(ev.target.value)}
                placeholder="Quais tecnologias" />


            <label htmlFor="company">Valor da diaria</label>
            <input
                type="text"
                id="price"
                value={price}
                onChange={ev => setPrice(ev.target.value)}
                placeholder="Preço" />

            <button type='submit' className='btn'>Cadastrar</button>
        </form>

    )
}