import React, { useState, createContext, useEffect } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const videoArray = [
    {
      id: 1,
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ],
      subtitle: "By Blender Foundation",
      thumb:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      title: "Big Buck Bunny",
    },
    {
      id: 2,
      description: "The first Blender Open Movie from 2006",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
      subtitle: "By Blender Foundation",
      thumb:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      title: "Elephant Dream",
    },
    {
      id: 3,
      description:
        "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      ],
      subtitle: "By Google",
      thumb:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      title: "For Bigger Blazes",
    },
    {
      id: 4,
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      ],
      subtitle: "By Google",
      thumb:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
      title: "For Bigger Escape",
    },
    {
      id: 5,
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      ],
      subtitle: "By Google",
      thumb:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
      title: "For Bigger Fun",
    },
    {
      id: 6, 
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      ],
      subtitle: "By Google",
      thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
      title: "For Bigger Joyrides",
    },
  ];
  const [name, setName] = useState("");
  const [videos, setVideos] = useState(videoArray);
  // const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    console.log("APP CONTEXT");
    // console.log('SELECTED VIDEO', selectedVideo)
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
    if (responseGoogle) {
      setName(response.profileObj.name);
    }
  };

  // const playVideo = (video) => {
  //   setSelectedVideo(video)
  // }

  return (
    <AppContext.Provider value={{ name, responseGoogle, videos }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
