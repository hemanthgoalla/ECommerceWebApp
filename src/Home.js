import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/bts/gateway/BTS20_GW_Desktop_Hero_EventHero_1x_1500x600_v3._CB410475056_.jpg"
                alt=""/>
            
            <div className="home__row">
               <Product 
               id="123456"
               title='Samsung Galaxy Buds+ Plus, True Wireless Earbuds (Wireless Charging Case included), Red – US Version' 
               price={129.99} 
               image="https://images-na.ssl-images-amazon.com/images/I/51K3-ucWelL._AC_SL1500_.jpg" 
               rating={4}/>

               <Product 
                id="12346"
                image="https://images-na.ssl-images-amazon.com/images/I/714cHoaDUpL._AC_SL1500_.jpg"
                price={795.00}
                title='Microsoft Surface Pro 7 – 12.3" Touch-Screen - 10th Gen Intel Core i5 - 8GB Memory - 128GB SSD (Latest Model) – Platinum with Black Type Cover'
                rating={3}/>

                <Product 
                id="12347"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={999.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
                rating={5}/>
            </div>

            <div className="home__row">
                <Product 
                id="12348"
                title='Kensie - Susie Printed Dotted Paint Art Décor Mildew Resistant Fabric Shower Curtain Liner For Bathroom Waterproof | Water Repellent & Antibacterial - Assorted Colors - (72 X 72 Inch - Silver)'
                price={9.76}
                image="https://images-na.ssl-images-amazon.com/images/I/71rFI2-mqPL._AC_SL1024_.jpg"
                rating={3}/>

                <Product 
                id="12349"
                title="Clarks Men's Draper Lace Oxford"
                price={29.52}
                image="https://images-na.ssl-images-amazon.com/images/I/71njTQSETQL._AC_UX575_.jpg"
                rating={4}/>
               
            </div>

            <div className="home__row">
            
            <Product 
                id="12344"
                title="Portable Monitor - Lepow 15.6 Inch Full HD 1080P USB Type-C Computer Display IPS Eye Care Screen with HDMI Type C Speakers for Laptop PC PS4 Xbox Phone Included Smart Cover & Screen Protector Black"
                price={159.88}
                image="https://images-na.ssl-images-amazon.com/images/I/71m3D2cIgML._AC_SL1000_.jpg"
                rating={4}/>
            </div>

            </div>
        </div>
    )
}

export default Home
