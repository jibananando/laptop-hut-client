import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner/Banner';
import Subscribe from './Subscribe/Subscribe';
import Testimonials from './Testimonial/Testimonial';
import FAQ from './FAQ/FAQ';
import ResaleProcess from './ResaleProcess/ResaleProcess';
import BenefitsSection from './BenefitsSection/BenefitsSection';
import SocialProof from './SocialProof/SocialProof';

import TopSellingLaptops from './TopSellingLaptops/TopSellingLaptops';
import Statistics from './Statistics/Statistics';
import SellerSuccessStories from './SellerSuccessStories/SellerSuccessStories';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <BenefitsSection></BenefitsSection>
            <Testimonials></Testimonials>
            <TopSellingLaptops></TopSellingLaptops>
            <FAQ></FAQ>
            <ResaleProcess></ResaleProcess>
            <Statistics></Statistics>
            <SocialProof></SocialProof>
            <SellerSuccessStories></SellerSuccessStories>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;