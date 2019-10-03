import React, { useState } from 'react';
import Api from '../../services/api'

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function HandleSummit(event) {
      event.preventDefault();
      const response = await Api.post('/sessions', { email: email })
      const { _id } = response.data;
      localStorage.setItem('user', _id);
      history.push('/dashboard');
    }
  
    return (
        <>
            <p>
                Ofereça <strong>Spots</strong> para programadores
        e encontre <strong>talentos</strong> para sua empresa
      </p>

            <form onSubmit={HandleSummit}>
                <label htmlFor="email">E-Mail</label>
                <input type="email"
                    name="email"
                    id="email"
                    placeholder="seu melhor email"
                    value={email}
                    onChange={event => setEmail(event.target.value)} />
                <button className='btn' type="submit">Entrar</button>
            </form>
        </>
    )
}