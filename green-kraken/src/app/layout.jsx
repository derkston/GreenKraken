import './reset.css'
import './index.css'
import './media.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function RootLayout({children,}) {

  return (
    <html lang="ru">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}