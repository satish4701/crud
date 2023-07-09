import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Video from './Components/Video';
import AddVideo from './Components/AddVideo';
import { useReducer, useState } from 'react';
import Counter from './Context/CounterContext';

const VideoData = [
  {
    id: '1',
    title: "React Js Developer",
    views: "100k",
    date: "2 Month ago"

  },
  {
    id: '2',
    title: "Node Js Developer",
    views: "10k",
    date: "1 Month ago"
  },
  {
    id: '3',
    title: "Angular Js Developer",
    views: "1k",
    date: "2 Month ago"
  }

]

const videoReducer = (videoData ,action) =>{
  switch (action.type) {
    case 'ADD':
      return [...videoData,action.payload];
    case 'DELETE' :
      return (videoData.filter((video)=> video.id !== action.payload));
    case 'UPDATE': 
         const index =  videoData.findIndex((video)=> video.id == action.payload.id)
      const updatedData = [...videoData]
      updatedData.splice(index,1,action.payload)
       return updatedData
      
  
    default:
      return videoData
      break;
  }

}
function App() {
  // const [videoData,setVideoData] = useState(VideoData);
   const[videoData ,dispatch]=  useReducer(videoReducer,VideoData)
  const[editVideoStat,setEditVideoStat] =useState()
  const [counter,setCounter] = useState(0)
  const addvideo = (video) =>{
    console.log(video)
    // setVideoData([...videoData,video] )
    dispatch({type:'ADD' ,payload:video})
    }
    const deleteHandler = (id) =>{
      // setVideoData(videoData.filter((video)=> video.id !== id))
      dispatch({type:'DELETE' ,payload:id})
    }
    const editHandler = (videoId) => {
      // console.log(editVideoStat)
      setEditVideoStat(videoData.find((video)=> video.id == videoId))
    }
    const updateData =(videoNAME) =>{
      // console.log(videoNAME)
      // const index =  videoData.findIndex((video)=> video.id == videoNAME.id)
      // const updatedData = [...videoData]
      // updatedData.splice(index,1,videoNAME)
      // setVideoData(updatedData)
      dispatch({type:'UPDATE',payload:videoNAME})
      setEditVideoStat(null)
    }
  const increseCountHandler = ()=>{
    setCounter(counter+1)
  }
    
  return (
    <>
    <Counter.Provider value={counter}>
     <AddVideo addvideo={addvideo} editVideoStat={editVideoStat} 
     updateData={updateData}/>
      <div className='row'>
        {
          videoData.map((video) => {
            return(
              // console.log(video)
              <Video title={video.title} 
              views={video.views} date={video.date}
               key={video.id} id={video.id} 
               deleteHandler={deleteHandler}
               editHandler={editHandler}
               increseCountHandler={increseCountHandler} />
               
            )
          })
        }
      
       
      </div>
      </Counter.Provider>

    </>
  );
}

export default App
