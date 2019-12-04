import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

const App = () => {

    const [videos , setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
        .then(response => response.json())
        .then(data => setVideos(data))
    }, []);
    console.log(videos.trends.length);
    return (
        <div className="App">
            <Header />
            <Search />
        
        
            <Categories title="Lista 1">
                <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />

                 
                </Carousel>
            </Categories>
            }
    
            <Categories title="Lista 4">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
    
            <Categories title="Lista veinticinco">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
    
            <Footer />
        </div>
    );
}

export default App;