import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Profile() {
  const router = useRouter()
  const [data, setData] = useState(null)
  const [users, setUsers] = useState<any[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://reqres.in/api/users?page=1')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data)
        setUsers(data.data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!users) return <p>No profile data</p>

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button type="button" onClick={() => router.push('/teste2')}>
        teste2
      </button>
      <main className={styles.main}>
        {
          users.map((user) => {
            return(
              <div key={user.email}>
                <h3>{user.first_name}</h3>
                <p>{user.email}</p>
              </div>
            )
          })
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
