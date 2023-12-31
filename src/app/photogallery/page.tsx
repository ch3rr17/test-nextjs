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
import ellie from '../assets/img/prints/portraits/ellie-portfolio.jpg';
import jo from '../assets/img/prints/portraits/jess-olivia-portfolio.jpg';
import k1 from '../assets/img/prints/portraits/knueven1.jpeg';
import k2 from '../assets/img/prints/portraits/knueven2.jpeg';
import k3 from '../assets/img/prints/portraits/knueven3.jpeg';


// import { CldImage } from 'next-cloudinary';
// import "@fortawesome/fontawesome-svg-core/styles.css"; 

// import { config } from "@fortawesome/fontawesome-svg-core";
// // Tell Font Awesome to skip adding the CSS automatically 
// // since it's already imported above
// config.autoAddCss = false; 

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// // import the icons you need
// import {
//   faSearch,
//   faAmbulance,
//   faAnchor,
//   faInstagram
// } from "@fortawesome/free-solid-svg-icons";

console.log(ellie);
console.log(jo);
console.log(k1);
console.log(k2);
console.log(k3);
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
   }
 ];

 const portraits = [
  {
     src: "/_next/static/media/ellie-portfolio.817d6031.jpg",
     width: 500,
     height: 700,
  },
  {
     src: "/_next/static/media/jess-olivia-portfolio.cad0c308.jpg",
     width: 500,
     height: 700,
  },
  {
     src: "/_next/static/media/knueven1.3ee17458.jpeg",
     width: 700,
     height: 500,
  },
  {
     src: "/_next/static/media/knueven2.d7ffc42f.jpeg",
     width: 500,
     height: 500,
  },
  {
     src: "/_next/static/media/knueven3.e1db7aa1.jpeg",
     width: 500,
     height: 700,
  }
];

export default function GalleryPage() {
    
  return (
   <main className={styles["gallery-container"]}>
      <p>Maintenance mode - be back soon!</p>
      <div className={styles.gallery}>
         <h1>Gallery</h1>
         <section>
            <h2>Landscape</h2>
            <Gallery images={images} />
         </section>
         <section>
            <h2>Portrait</h2>
            <Gallery images={portraits} />
         </section>
      </div>
   </main>
        
  

  )
}
