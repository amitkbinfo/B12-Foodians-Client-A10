import React, { use } from 'react';
import ReviewCard from './ReviewCard';
import { Link } from 'react-router';


const FeaturedReviews = ({featuredReviews}) => {
    const reviews = use(featuredReviews);
    return (
        <div className='mx-5'>
            <h1 className='text-center font-bold text-2xl'>Featured Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                {
                    reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
            </div>
            <div className='flex justify-center mt-5'>
                <Link to={"/all-reviews"} className='btn btn-success hover:btn-neutral hover:shadow-none hover:border-none shadow-none text-black hover:text-white'>Show All</Link>
            </div>
        </div>
    );
};

export default FeaturedReviews;