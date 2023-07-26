import './globals.css'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import type { Route } from 'next';
import logo from './assets/img/swichep-logo-700-by-250.png';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Swiche Photography',
  description: 'Portfolio and Services',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className={styles.navigation}>
            <div className={styles.container}>
                <div className={styles["logo-container"]}>
                    <Link href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        height={145}
                        sizes="(max-width: 100%)"
                    />
                    </Link>
                    <Link href="/photogallery">Sample Work</Link>
                    <a href="https://www.swichepix.com/" target={'_blank'}>Print Gallery</a>
                </div>
            </div>
        </div>
        <div>
          {children}
        </div>
        
        <footer>
          <div>
              ©  {year} Swiche Photography. All rights reserved.
          </div>
        </footer>
      </body>
     
    </html>
  )
}


