import React from 'react';
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const Map = dynamic(
    () => import('../component/Map'),
    { ssr: false }
)
const Home = () => {
    return (
        <div className={styles.map}>
            <Map/>
        </div>
    )
}

export default Home;