"use client"
import Image from "next/image"
import React, { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
export default function Goal() {
    const [goal, setGoal] = useState("");
    const [time, setTime] = useState("");
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [show, setShow] = useState(false);
  const submit = () => {
    setTime(parseInt(time) )
  setShow(true)
    toast("Goal Saved Successfully")
    

}
 useEffect(() => {
    if (show && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 60000); // 1 minute

      return () => clearInterval(interval); // Cleanup on unmount or re-render
    }
  }, [show, time]);

const deletegoal = () => {
    setGoal("");
    setTime("");    }
    return(
<div className="Goalsinput flex w-screen shadow-md hover:shadow-lg my-8 flex-col py-8 gap-4 p-2 h-[90%] items-center">
        <h1 className="text-xl font-bold">Enter Your Goal:</h1>
        <div className="input flex w-[100%] gap-4 p-3 sm:flex-row flex-col">
          <div className="Goal sm:w-[60%] w-[100%] gap-2 justify-center items-center flex">
            <label htmlFor="Goals">Goal:</label>
            <input
              id="Goals"
              placeholder="Enter Your Goal"
              className="w-[100%] border sm:h-10 h-20 rounded-md"
              type="text"
              value={goal}
              name="Goals"
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
          <div className="Time flex sm:w-[40%] gap-2 md:w-[20%] w-[70%] justify-center items-center">
            <label htmlFor="Time">Time:</label>
            <input
              id="Time"
              placeholder="Enter Time in Minutes"
              className="w-[100%] border rounded-md h-10"
              type="text"
              value={time}
              name="Time"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <button
          type="button"
          className="text-gray-900 sm:w-[30%] w-[60%] bg-gradient-to-r from-teal-200 to-lime-200 button hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-lg px-5 py-3 text-center me-2 mb-2"
       onClick={()=>submit()} >
          {goal && time ? "Submit" : "Please Fill All The Fields"}
        </button>
       {checkboxChecked===false&& show && <div className="output flex w-[80%] border justify-evenly items-center h-min gap-5 overflow-x-hidden overflow-y-scroll p-3 sm:h-auto">
          <input
            id="checkbox"
            width="150"
            height="150"
            className="w-8 h-8"
            type="checkbox"
            name="checkbox"
            checked={checkboxChecked}
            onChange={(e) => setCheckboxChecked(!checkboxChecked)}
          />
          <span className="w-[40%] overflow-scroll overflow-x-hidden overflow-y-scroll">
            {goal}
          </span>
          <span>{time}</span>
          <button onClick={()=>deletegoal()}>
            <Image
              alt="trash-bin"
              loading="lazy"
              width="50"
              height="50"
              decoding="async"
              src="/trash-bin.gif"
            />
          </button>
        </div>}
      </div>)}
