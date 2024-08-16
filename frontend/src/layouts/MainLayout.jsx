import Header from "@/components/Header"

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {
  return (
    <>
   <Header />
   {children}
    </>
  )
}

export default MainLayout