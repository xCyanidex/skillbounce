import Footer from "@/components/Footer"
import Header from "@/components/Header/Header"

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {
  return (
    <>
   <Header />
   <main className="flex-1 bg-background container">
   {children}
   </main>
   <Footer/>
    </>
  )
}

export default MainLayout