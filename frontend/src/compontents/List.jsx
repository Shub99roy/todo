import React from 'react'
import { useEffect, useState ,Fragment } from 'react'
import { Link } from "react-router-dom";

function List() {
    const [taskData, setTaskData] = useState();
    useEffect(() => {
        getListData();
    }, {})
    const getListData = async () => {
        let list = await fetch('http://localhost:3200/tasks');
        list = await list.json()
        if (list.success) {
            setTaskData(list.result)
        }

    }
    const deleteTask= async(id)=>{
        let item = await fetch('http://localhost:3200/delete/'+id,{method:'delete'});
        item = await item.json()
        if (item.success) {
            getListData()
    }}
    return (
        <div className="min-h-screen  bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-6">

            <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

                <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide">
                    ✨ TO DO LIST
                </h1>


                <div className="grid grid-cols-4 bg-white/10 text-white font-semibold text-lg rounded-2xl p-4 mb-4 border border-white/10">
                    <h2 className="text-center">S.No</h2>
                    <h2 className="text-center">Title</h2>
                    <h2 className="text-center">Description</h2>
                    <h2 className="text-center">Action</h2>
                </div>


                <div className="space-y-4">

                    {
                        taskData && taskData.map((item, index) => (
                            <Fragment key={item._id}>

                                <div
                                    key={index}
                                    className="grid grid-cols-4 items-center bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 rounded-2xl p-4 text-white shadow-lg hover:scale-[1.01]"
                                >


                                    <div className="flex justify-center">
                                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-md">
                                            {index + 1}
                                        </span>
                                    </div>


                                    <div className="text-center font-semibold text-lg">
                                        {item.title}
                                    </div>


                                    <div className="text-center text-gray-300">
                                        {item.description}
                                    </div>


                                    <div className="flex justify-center gap-4">

                                        <button
                                            onClick={()=>deleteTask(item._id)}
                                            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                                        >
                                            Delete
                                        </button>
                                        <Link to={"update/"+item._id} className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 no-underline">Update</Link>

                                    </div>

                                </div>
                            </Fragment>

                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default List
