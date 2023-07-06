import Header from "../components/Header"

import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'

import home from '../assets/home.svg'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header 
        title="Site da Deby" 
        image={home} 
      />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Alien size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>escrever sobre mim </p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>falar o porque de estar na programacao </p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>Entre em Contatinho </p>
        </div>
      </div>
      
    </>
  )
}

export default Home
