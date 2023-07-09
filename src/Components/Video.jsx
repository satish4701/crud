import React from 'react'


const Video = ({ title, views, date, id, deleteHandler, editHandler, increseCountHandler }) => {


  return (
    <>

      <div className="col-lg-4 video_thumb  py-5">
        <div className='shadow py-5 px-4'>
          <button className='btn btn-warning' onClick={() => editHandler(id)}>Edit</button>
          <button className='btn btn-danger' onClick={() => deleteHandler(id)}>x</button>
          <img src={`https://picsum.photos/id/${id}/300/150`} alt="img" />
          <h2>{title} </h2>
          <span>{views}</span>. <span>{date}</span>

          <button type='button' className='btn btn-secondary' onClick={increseCountHandler}>+</button>
        </div>
      </div>
    </>
  )
}

export default Video
