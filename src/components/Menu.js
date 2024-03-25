'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './componentStyle/menu.module.css'

const Menu = ({ }) => {
  const router = useRouter();

    return (
        <div className={styles.menu_container}>
            <>
                <button type="button" onClick={() => router.push('/')}>Home</button>
                <button type="button" onClick={() => router.push('/Favs')}>Favs</button>
                <button type="button" onClick={() => router.push('/Cart')}>Cart</button>
            </>
        </div>
    );
}

export default Menu;