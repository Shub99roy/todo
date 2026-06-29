import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateTask() {

    const [taskData, setTaskData] = useState();
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        getTask(id)
    },[])

    const getTask = async(id)=>{
        let task= await fetch(`http://localhost:3200/task/`+id);
        task = await task.json()
        if(task.result){
            setTaskData(task.result)
        }
    }

    const UpdateTask = async()=>{
        console.log("function called", taskData);
        let task = await fetch("http://localhost:3200/update-task",{
            method:'put',
            body:JSON.stringify(taskData),
            headers:{
                'Content-Type':'Application/Json'
            }
        });
        task = await task.json()
        if(task){
            Navigate('/')
        }
    }
    


    return (

        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-black p-6 flex items-center justify-center">

            <div className="max-w-md w-full mx-auto p-8 bg-white/10 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.45)] border border-white/20 hover:scale-[1.01] transition-all duration-500">

                <div className="mb-8 text-center">

                    <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                        Update Task Task
                    </h1>

                    <p className="text-sm text-gray-300 mt-3">
                        Fill in the details below to Update  task for your list.
                    </p>

                </div>

                {/* Title Input */}
                <div className="mb-5">

                    <label
                        htmlFor="title"
                        className="block text-sm font-semibold text-gray-200 mb-2"
                    >
                        Task Title
                    </label>

                    <input
                        value={taskData?.title}
                        onChange={(event) =>
                            setTaskData({
                                ...taskData,
                                title: event.target.value
                            })
                        }

                        type="text"
                        id="title"
                        name="title"

                        placeholder="e.g., Update landing page UI"

                        className="block w-full px-5 py-4 text-white bg-white/5 border border-white/10 rounded-2xl shadow-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 outline-none placeholder-gray-400 hover:border-cyan-300"
                    />

                </div>

                {/* Description */}
                <div className="mb-6">

                    <div className="flex justify-between items-center mb-2">

                        <label
                            htmlFor="description"
                            className="block text-sm font-semibold text-gray-200"
                        >
                            Description
                        </label>

                        <span className="text-xs text-gray-400 font-medium">
                            Optional
                        </span>

                    </div>

                    <textarea
                        value={taskData?.description}
                        onChange={(event) =>
                            setTaskData({
                                ...taskData,
                                description: event.target.value
                            })
                        }

                        id="description"
                        name="description"
                        rows="4"

                        placeholder="Add any extra details, links, or notes..."

                        className="block w-full px-5 py-4 text-white bg-white/5 border border-white/10 rounded-2xl shadow-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 outline-none placeholder-gray-400 hover:border-cyan-300 resize-none"
                    ></textarea>

                </div>

                {/* Button */}
                <div className="pt-2 flex items-center justify-between gap-4">

                    <button
                    onClick={UpdateTask}
                        
                        type="submit"

                        className="flex-1 flex justify-center py-4 px-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300 active:scale-[0.98]"
                    >
                        ✨ Update Task
                    </button>

                </div>

            </div>

        </div>
    )
}

export default UpdateTask