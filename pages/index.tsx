import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import GameBoard from '@/components/GameBoard'
import Supoku from '@/components/Supoku'
import GameHeader from '@/components/GameHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SuPoKu</title>
        <meta name="description" content="supoku" />
        <meta name="description" content="sudoku poker" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <GameHeader />
        <Supoku />
        
      </main>
    </>
  )
}
