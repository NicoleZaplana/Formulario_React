import { useState } from 'react'
import styles from '@/styles/Home.module.css'

export default function Home() {

  const [fullname, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

   const handleSignupForm=(event)=>{
    event.preventDefault()
    console.log({fullname, email, password})
   }

  return (
    <div className={styles.container}>
      <form className={styles.forms} onSubmit={handleSignupForm}>
        <h1>Formulário de Cadastro</h1>

        <input
          type='text' 
          placeholder='Nome Completo' 
          required
          value={fullname}
          onChange={(event)=>setName(event.target.value)}>
        </input>
        <input 
          type='email' 
          placeholder='E-mail' 
          required
          value={email}
          onChange={(event)=>setEmail(event.target.value)}>
        </input>
        <input 
          type='password' 
          placeholder='Senha'
          required
          value={password}
          onChange={(event)=>setPassword(event.target.value)}>
          </input>
        <button type='submit'>Enviar</button>
      </form>
    </div>
   
  )
}
