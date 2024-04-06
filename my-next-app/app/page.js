'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [twoProduct, setTwoProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=2')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTwoProducts(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  function onClick(){
    alert('qale')
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h1>Home Page</h1>
        <div className="all-card-wrapper">
          <div className={styles.cardwrapper}>
            {products.map(product => (
              <div key={product.id} className={styles.card}>
                <div className={styles.img}>
                  <Image
                    className={styles.image}
                    src={product.image}
                    alt={product.title}
                    width={356}
                    height={262}
                  />
                </div>

                <div className="text">
                  <div className={styles.onetext}>
                    <h2>{product.category}</h2>
                  </div>
                  <div className={styles.twotext}>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, perferendis.</h3>
                  </div>
                  <div className={styles.sana}>
                    <h3>{product.date}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.bottomcard}>
            {twoProduct.map(product => (
              <div key={product.id} className={styles.disp}>
                <div className={styles.cardss}>
                <div className="imgg">
                  <Image
                   onClick={onClick}
                    className={styles.image}
                    src={product.image}
                    alt={product.title}
                    width={306}
                    height={262}
                  />
                </div>
                <div className={styles.texts}>
                  <div className={styles.design}>
                    <h2>{product.category}</h2>
                  </div>
                  <div className={styles.descc}>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, tenetur?</h3>
                  </div>
                  <div className={styles.sanaa}>
                    <h4>{product.date}</h4>
                  </div>
                </div>
                </div>
              
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
