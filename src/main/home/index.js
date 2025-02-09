import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "./store";
import SearchBar from "../_components/SearchBar";
import RunnerCard from './components/RunnerCard'
import api from "../../api";
import { Typography } from "@mui/material";

const HomePage = () => {
  const [ runnersList, setRunnersList ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    // make call to get runner data
    const runnerData = [
        {
            name: 'Ian',
            image: 'ian.png',
            description: 'It was once his birthday... A HUGE fan of equal rights.',
            mileage: 17,
        },
        {
            name: "Heather",
            image: 'heather.png',
            description: "Would stop ICE from coming into her school and will take her dog running.",
            mileage: 18,
        },
        {
            name: 'Kevin',
            image: 'kevin.png',
            description: 'Is a vaccine advocate running/skiing/biking advocate and is blonde.',
            mileage: 22,
        },
        {
            name: 'Nico',
            image: 'nico.png',
            description: 'Is rooting for global warming to melt the ICE.',
            mileage: 10,
        },
        {
            name: 'Lauren',
            image: 'lauren.png',
            description: 'Has good ideas and is bad at running.',
            mileage: 10,
        },
        {
            name: 'Carson',
            image: 'carson.png',
            description: 'Loves to yell about rights and loves to yell about abortion.',
            mileage: 15,
        },
        {
            name: 'Lindsey',
            image: 'lindsey.png',
            description: 'Is pro LGTBQ+ rights and is going to brunch after this.',
            mileage: 3,
        },
        {
            name: "Guests",
            image: 'guest.png',
            description: 'Friends that join us in the day to contribute!',
            mileage: 5
        }
    ]
    setRunnersList(runnerData.sort(() => Math.random() - 0.5)); 
    setLoading(false)
  }, []);

  return (
    <div className="max-w-full max-h-full flex flex-col">
      <div className="w-screen flex flex-col gap-4 items-center">
        <div className='w-5/6 flex flex-col align-center mt-8 mb-8 gap-8 snap-x items-center'>
          {loading ? null : runnersList.map(runner => {
            return (
              <div className="snap-center max-w-312.5" key={runner.name}>
              <RunnerCard runner={runner} size={'xl'} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
