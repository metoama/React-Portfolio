import { useState } from 'react';
import { Header, NAV_ITEMS } from './Header';
import  Footer from './Footer';

import './styles/Navigation.css';

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState (NAV_ITEMS[0].itemName);

    const onNavItemClick = (itemName) => {
        setCurrentPage(itemName);
    }


    const renderCurrentPage = () => {
        for (const navItem of NAV_ITEMS) {
            if (currentPage === navItem.itemName) {
                return navItem.component
            }
        } 
            
    }
        

    return (
        <div className='navigation'>
            <Header onNavItemClick={onNavItemClick} />
            <section className='section'>{renderCurrentPage()}</section>
            <Footer />
        </div>
    )
}

