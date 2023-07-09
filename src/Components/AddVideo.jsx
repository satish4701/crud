import React, { useEffect, useState } from 'react'
import Shop from './Shop'

const AddVideo = ({addvideo,editVideoStat ,updateData}) => {
    const [newVideo, setNewVideo] = useState({
        title: "",
        views: "",
        date: "2 Month ago"
    })
    const inputValue = (e) => {
       setNewVideo({...newVideo,[e.target.name]:e.target.value})
    }
    // const editData = (editHandler) => {
    //     const videoEdit = newVideo.findIndex((video)=> video.id === editHandler)
    //     setNewVideo(videoEdit)
    // }
    const handleSubmit = (e) => {
     e.preventDefault()
    if(newVideo.title == '' || newVideo.views == ''){
        alert('Plese add the  value in the below input.')
    }else{
        if(editVideoStat){
            updateData(newVideo)
            setNewVideo({
              title: "",
              views: "",
              date: "2 Month ago"
          })
          }
         
          else{
              addvideo({...newVideo,id:(Math.round(Math.random()*999)).toString()});
              setNewVideo({
                  title: "",
                  views: "",
                  date: "2 Month ago"
              })
          }
    }

    }
    useEffect(()=>{
        if(editVideoStat){
            setNewVideo(editVideoStat)
        }
    },[editVideoStat])
    return (
        <>
            <div className="row align-items-start justify-content-center py-2">
                <div className="col-5">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 my-2">
                                <label htmlFor="titles">Title</label>
                                <input name='title'
                                 onChange={inputValue} className='form-control'
                                 type="text" placeholder='Enter Your Title'
                                 value={newVideo.title}
                                />
                                
                            </div>
                            <div className="col-12 my-2">
                                <label htmlFor="viewss">views</label>
                                <input
                                 name='views' 
                                 onChange={inputValue} className='form-control'
                                  type="text" placeholder='Enter Your views' 
                                  value={newVideo.views}
                                  />
                                    
                            </div>
                            <div className="col-12 my-2">
                                <button type="submit" className='btn btn-primary'>{
                                    editVideoStat ? 'Update' : 'Add'
                                }</button>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="col-lg-2">
                    <Shop/>
                </div>
            </div>
        </>
    )
}

export default AddVideo
