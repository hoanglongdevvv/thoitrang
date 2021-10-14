import React, { useState, useEffect } from 'react';
// import fire from '../config/Fire';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Section from './Section';
import { DataProvider } from './Context'
import './css/loading.scss'
import PropagateLoader from "react-spinners/PropagateLoader";
import Slider from './Slider/Slider';
import Footer from './Footer';

function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [])

    return (
        <>
            <DataProvider>
                <div className="app">
                {
                    loading ? (
                    <PropagateLoader
                    color={"#00a8ff"}
                    loading={loading} 
                    size={30} 
                    />
                    ): (
                            <Router>
                                <Home/>
                                <Header />
                                 <Slider />
                                <Section />
                                <Footer />
                            </Router>
                    )
                }
                </div>
            </DataProvider>

        </>

    )

}

// class Home extends Component {
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false)
//         }, 2000);
//     },[])

//     render() {
//         return (
//             <>
//                 <DataProvider>
//                     <div className="app">
//                         <Router>
//                             <Header />
//                             <Section />
//                         </Router>
//                     </div>
//                 </DataProvider>

//             </>
//         )
//     }
// }

export default Home;