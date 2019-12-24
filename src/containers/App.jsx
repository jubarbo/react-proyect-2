import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => { 
    const initialState = useInitialState(API);

    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />
            { initialState.mylist.length > 0 &&

            <Categories title="Lista 1">
                <Carousel>
                    <CarouselItem />
                 
                </Carousel>
            </Categories>
            }
            
    
            <Categories title="Lista 4">
                <Carousel>
                    {initialState.trends.map(item =>
                    <CarouselItem key={item.id} {...item} />
                    )}
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