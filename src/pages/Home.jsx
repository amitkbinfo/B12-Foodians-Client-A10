import React from 'react';
import Banner from '../components/Banner';
import FeaturedReviews from './FeaturedReviews';

const featuredReviews = fetch("http://localhost:3000/featured-reviews").then(res => res.json());

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <FeaturedReviews featuredReviews={featuredReviews}></FeaturedReviews>
        </div>
    );
};

export default Home;