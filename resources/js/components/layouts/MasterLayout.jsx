import React from "react";
import Header from './Header'
import Footer from './Footer'

const MasterLayout = () => {
    return (
    <div>
        <Header />
        <main>
            Master Page Content
        </main>
        <Footer />
    </div>
    );
};

export default MasterLayout;
