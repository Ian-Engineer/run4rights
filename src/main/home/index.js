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
    fetch("https://lhecgihqf43th4rstngwaprc7a0zdubd.lambda-url.us-east-2.on.aws/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {setRunnersList(data.runners.sort(() => Math.random() - 0.5)); setLoading(false)})
      .catch(error => console.error("Error connecting to Lambda:", error));
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
