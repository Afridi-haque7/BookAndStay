import React, {Suspense} from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
const Featured = React.lazy(() => import("../../components/featured/Featured"));
const PropertyList = React.lazy(() => import("../../components/propertyList/PropertyList"));
const FeaturedProperties = React.lazy(() => import("../../components/featuredProperties/FeaturedProperties"));
const MailList = React.lazy(() => import("../../components/mailList/MailList"))
const Footer = React.lazy(() => import("../../components/footer/Footer"))



const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <Suspense fallback = {<p>This is loading...</p>}>
          <Featured />
          <h2 className="homeTitle">Browse by property type</h2>
          <PropertyList/>
          
          <h2 className="homeTitle">Browse by highest rating</h2>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
          </Suspense>
        </div>
        
    </div>
  )
}

export default Home
