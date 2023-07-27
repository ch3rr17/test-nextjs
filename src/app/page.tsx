'use client'
import Image from 'next/image'
import styles from './page.module.css'
import profilePic from './assets/img/cherr.jpg';
import logo from './assets/img/swichep-logo-700-by-250.png';
import moments from './assets/img/view-moments.jpg'
import Link from 'next/link';
import type { Route } from 'next';
// import { useRouter } from 'next/navigation'


export default function Home() {

    // const router = useRouter()
    const video_id = '-nk_K4rNF5g'
    
  return (
    <main>
       
        <div className={styles["banner-container"]}>
            <div className={styles["film-banner-container"]}>
                <div className={styles.pic}>
                <div className={styles["pic-col"]}>
                    <Image        
                        src={profilePic}
                        alt="Cherr"
                        width={0}
                        height={0}
                        priority
                        />
                    <h1 className={styles["intro-title"]}>Capturing Moments</h1>
                </div>
                <div className={styles["pic-col"]}>
                <Image        
                        src={moments}
                        alt="Cherr"
                        width={0}
                        height={0}
                        priority
                        />
                </div>
                </div>
            </div>
            
        </div>
        <div className={styles.yt}>
        <iframe
  src={"https://www.youtube.com/embed/" + video_id}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
          {/* <iframe src="https://www.youtube.com/embed/-nk_K4rNF5g" title="Story"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    </main>

  )
}
