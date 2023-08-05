import Footer from '@/components/Footer/Footer'
import Navigation from '@/components/Navigation/Navigation'
import { PropsWithChildren } from 'react'

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
export default DefaultLayout
