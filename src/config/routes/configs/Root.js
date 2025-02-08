import NavigationBar from "../../../main/_components/Navigation";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "../../../main/landing";
import { setUser } from "../../userSlice";
import { useDispatch } from "react-redux";
import api from "../../../api";

const Root = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    // used to set the view height based on orientation of a mobile device
    const setViewHeight = () => {
      const vh = window.innerHeight*0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setViewHeight();

    window.addEventListener('resize', setViewHeight);

    return () => {
      window.removeEventListener('resize', setViewHeight)
    }
  },[])

  return (
    <div className="max-h-screen h-screen max-w-screen w-screen flex flex-col flex-grow">
      {loading ? <LandingPage />
      :
      <>
      <div className="flex-grow flex overflow-y-auto w-full justify-center m-auto">
        <Outlet />
      </div>
      <NavigationBar />
      </>
      }
    </div>
  );
};

export default Root;
