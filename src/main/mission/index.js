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
    setRunnersList(api.runnerData.runners)
    setLoading(false)
  }, []);

  return (
    <div className="max-w-full max-h-full flex flex-col">
      <div className="w-screen flex flex-col gap-4 items-center">
        <div className="text-center text-white">
          <Typography variant="h1">Heading</Typography>
          <Typography variant="h5">Information on what we are doing</Typography>
        </div>
        <div className='w-5/6 flex flex-col align-center mt-10'>
          {loading ? null : runnersList.map(runner => {
            return (
              <RunnerCard runner={runner} size={'xl'} key={runner.name}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
