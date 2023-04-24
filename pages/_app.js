import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import Footer from '@/components/layout/Footer'
import Loading from '@/components/Loading'
import { Router } from 'next/router'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { AuthProvider } from '@/context/AuthContext'

 
const poppins = Poppins({weight: '400', subsets: ['latin'] })

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    Router.events.on('routeChangeStart', (url, { shallow }) => !shallow && setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
  }, [Router.events])

  if(loading) {
    return <Loading/>
  }

  return (
    <>
    <AuthProvider>
    <Provider store={store}>
    <main className={poppins.className}>
    <Header/>
    <Toaster position="top-left" reverseOrder={false} />
    <Component {...pageProps} />
    <Footer/>
    </main>
    </Provider>
    </AuthProvider>
    </>
  )
}
