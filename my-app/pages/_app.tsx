import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
     <>
            <div className="container m-4 mx-auto font-sans">
                <Navbar />
                <main className="pb-32">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </>
  </>
  // 2:57:22
  )
}

export default MyApp
