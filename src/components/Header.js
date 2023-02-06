// import  Footer from './Footer';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';

import './styles/Header.css'; 

export  function Header({ onNavItemClick}) {
    return (
        <div className='headerContainer'>
            <h1>Arinze Mike Etoama</h1>
            <nav> 
                <ul>
                    {
                        NAV_ITEMS.map(item =>{
                            return (
                                <li 
                                    key={item.itemName} 
                                    onClick={() => onNavItemClick(item.itemName)}
                                    >
                                    {item.itemName}
                                </li>

                            )
                        })
                    }
                   
                   
                </ul>
            </nav>
        </div>
    )
}

export const NAV_ITEMS = [
{
    itemName: 'About Me',
    component: <AboutMe />
}, 
{
    itemName: 'Portfolio',
    component: <Portfolio />
},
{
    itemName: 'Contact',
    component: <Contact />
},
{
    itemName: 'Resume',
    component: <Resume />
}
]
