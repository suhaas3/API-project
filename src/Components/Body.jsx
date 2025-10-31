import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from 'react';
import Footer from "./Footer";

const Body = () => {
  return (
    <>

      <div className='flex flex-col min-h-screen'>
        {/* Navbar at top */}
        <Navbar />

        {/* Page content grows to push footer down */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer sticks at bottom */}
        <Footer />

      </div>

    </>
  )
}

export default Body
