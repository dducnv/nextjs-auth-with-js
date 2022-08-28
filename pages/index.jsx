import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAuth } from '../hooks/use-auth'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const {login, profile, logout, error} = useAuth({
    revalidateOnMount:false
  });

  async function handleLogin(e){
    e.preventDefault();
    try{
      let dataSend = {
        email:"duc@gmail.com",
        password:"dduc0712"
      }
      await login(dataSend);
      router.push('/auth-page');
    }catch(err){
      console.log(err)
    }
  }

  async function handleLoginAdmin(){
    try{
      let dataSend = {
        email:"admin@gmail.com",
        password:"admin"
      }
      await login(dataSend);
      router.push('/admin-page');
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLoginAdmin}>Login with admin</button>
    <button>Logout</button>
    </>
  )
}
