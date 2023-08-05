'use client'
import Image from 'next/image'
import styles from '/src/app/page.module.css'
import Link from 'next/link';
import type { Route } from 'next';
import profilePic from './assets/img/cherr.jpg';
import logo from './assets/img/swichep-logo-700-by-250.png';
import moments from './assets/img/view-moments.jpg'
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
import { Gallery } from "react-grid-gallery";
import  laJolla  from '../assets/img/prints/la-jolla-sunset-1.jpg';
import solana from '../assets/img/prints/surf-solana-beach.jpg'
import bostonMarina from '../assets/img/prints/boston-marina-exposure-1.jpg';
import bostonTrain from '../assets/img/prints/boston-orange-train.jpg';
import bostonStreet from '../assets/img/prints/boston-street-1.jpg';
import bostonLibrary from '../assets/img/prints/boston-public-library.jpg';
import caboPier from '../assets/img/prints/cabo-pier-bird-stretch.jpg';
import jt from '../assets/img/prints/joshua-tree-sunrise.jpg';
import lj2 from '../assets/img/prints/la-jolla-sunset-2.jpg';
import falls from '../assets/img/prints/multnomah.jpg';
import { CldImage } from 'next-cloudinary';



console.log(laJolla)
console.log(solana);
console.log(lj2);
console.log(jt);
console.log(bostonMarina);
console.log(bostonTrain);
console.log(bostonStreet);
console.log(bostonLibrary);
console.log(caboPier);
console.log(falls);
const images = [
    {
       src: '/_next/static/media/la-jolla-sunset-1.c8c3da24.jpg',
       width: 500,
       height: 320,
       caption: "La Jolla Sunset",
    },
    {
       src: "/_next/static/media/surf-solana-beach.afb32f94.jpg",
       width: 500,
       height: 320,
      //  tags: [
      //     { value: "Ocean", title: "Ocean" },
      //     { value: "People", title: "People" },
      //  ],
       alt: "Surf Solana Beach",
    },
    {
       src: "/_next/static/media/la-jolla-sunset-2.3f626b7b.jpg",
       width: 500,
       height: 320,
    },
    {
      src: "/_next/static/media/joshua-tree-sunrise.3913b6f6.jpg",
      width: 500,
      height: 320,
   },
   {
      src: "/_next/static/media/boston-marina-exposure-1.e22658b3.jpg",
      width: 500,
      height: 320,
   },
   {
      src: "/_next/static/media/boston-orange-train.e5a325d1.jpg",
      width: 1400,
      height: 2000,
   },
   {
      src: "/_next/static/media/joshua-tree-sunrise.3913b6f6.jpg",
      width: 500,
      height: 320,
   },
   {
      src: "/_next/static/media/boston-street-1.1e7b2553.jpg",
      width: 500,
      height: 700,
   },
   {
      src: "/_next/static/media/boston-public-library.8ae4e21a.jpg",
      width: 500,
      height: 320,
   },
   {
      src: "/_next/static/media/cabo-pier-bird-stretch.f4d221e0.jpg",
      width: 500,
      height: 320,
   },
   {
      src: "/_next/static/media/multnomah.bb3d1e80.jpg",
      width: 500,
      height: 700,
   },
 ];

export default function GalleryPage() {
    
  return (
   <main className={styles["gallery-container"]}>
      <div className={styles.gallery}>
         <h1>Gallery</h1>
         <section>
            <h2>Landscape</h2>
            <Gallery images={images} />
         </section>
         <br />
         <h2>Portraits</h2>
         <br />
         <section>
            <div>
            <CldImage className={styles["portrait-img"]}
               width="250"
               height="350"
               alt='ellie'
               src="https://res.cloudinary.com/drm1stgyj/image/upload/v1690585049/portraits/ellie-portfolio_rddpdm.jpg" />
            <CldImage className={styles["portrait-img"]}
               width="250"
               height="350"
               alt='jessandolivia'
               src="https://res.cloudinary.com/drm1stgyj/image/upload/v1690585048/portraits/jess-olivia-portfolio_rkmb8t.jpg" />
             <CldImage className={styles["portrait-img"]}
               width="250"
               height="350"
               alt='day'
               src="https://res.cloudinary.com/drm1stgyj/image/upload/v1690485946/portraits/DSC07816_bstq0q.jpg" />
             <CldImage
               width="250"
               height="350"
               alt='mamaandbaby'
               src="https://res.cloudinary.com/drm1stgyj/image/upload/v1690485946/portraits/i-wpFFxPF-X3_kd1hyi.jpg" />
            <CldImage className={styles["portrait-img"]}
               width="350"
               height="350"
               alt='dadaandbaby'
               src="https://res.cloudinary.com/drm1stgyj/image/upload/v1690485946/portraits/i-QzMBWng-X2_frecnx.jpg" />
            <CldImage className={styles["portrait-img"]}
               width="500"
               height="350"
               alt='baby'
               src="https://res.cloudinary.com/drm1stgyj/image/upload/v1690485946/portraits/i-3PTvFCP-L_ew6xso.jpg" />
            {/* <CldImage
               width="250"
               height="350"
               alt='camel'
               src="https://res.cloudinary.com/drm1stgyj/image/upload/v1690585048/portraits/jess-olivia-portfolio_rkmb8t.jpg" /> */}
            </div>
            
         </section>
      </div>
   </main>
        
  

  )
}
