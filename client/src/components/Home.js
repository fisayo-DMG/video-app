import React, {useEffect, useContext} from "react";
import VideoList from "./VideoList";
import { AppContext } from "../appContext";

const Home = () => {

  const { teacherStatus, setAddButton } = useContext(AppContext);

  useEffect(() => {
    // if(teacherStatus) {
    //   setAddButton(true)
    // }
    setAddButton(teacherStatus)
  }, [])

  return (
    <div>
      <VideoList />
    </div>
  );
};

// const Home = () => <VideoList />


export default Home;
