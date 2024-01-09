import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../component/sidebar/SideBar';
import '../../component/sidebar/SideBar.css'
const MainLayout = () => {
    const [open, setOpen] = useState(false)

    const increaseLengthFun = () => {
        open === true ? setOpen(false) : setOpen(true)
    }
    return (
        <>
            <div className='mainDiv'>
                <Sidebar increaseLengthFun={increaseLengthFun} open={open} />
                <div className={open ? 'sidebarLayout activeSideLayout' : 'sidebarLayout container-fluid'}>
                    <Outlet />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    )
}

export default MainLayout