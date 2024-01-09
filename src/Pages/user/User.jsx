import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from '../../Routing/routing';
import { Outlet } from 'react-router-dom';
import styles from '../../Component/sideBarNavigation/SidebarNavigation.module.scss'
import SidebarNavigation from '../../Component/sideBarNavigation/SidebarNavigation';
import Table from '../../Component/Table/Table';
import axios from 'axios'
import ModalFileUpload from '../Modal/ModalFileUpload';
import Modal from '../Modal/Modal'
import BasicModal from '../Modal/Modal';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllUsers } from '../../Redux/Slice/UserSlice';
import EditUserModal from '../Modal/EditUserModal';
import Loading from '../Loading/Loading';
import UserDeleteModal from '../Modal/UserDeleteModal';
import SingleUserModal from '../Modal/SingleUserModal/SingleUserModal';
// import { searchUser } from '../../Redux/Slice/UserSlice';
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-loading-skeleton/dist/skeleton.css'


const User = () => {
    let dispatch = useDispatch()
    // const { allusers, loading, filterUser } = useSelector((state) => state.users)
    // const [modalOpen, setModalOpen] = useState(false)
    // const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    // let [user, setUsers] = useState([])
    // const [rowsPerPageValue, setRowsPerPageValue] = useState(10);
    // const [count, setCount] = useState(0);
    // const [pageSelected, setPageSelected] = useState(1);
    // const [seletedData, setSelectedData] = useState({});
    // const [deleteId, setDeleteId] = useState(null);
    // const [singleUserModal, setSingleUserModal] = useState(false);
    // const [singleUser, setSingleUser] = useState(false);

    // console.log('allUsers', allusers)

    // const startIntro = () => {
    //     console.log('start')
    //     console.log(typeof introJs)
    //     if (typeof introJs !== 'undefined') {
    //         const intro = introJs();
    //         console.log('intro', intro)
    //         intro.setOptions({
    //             steps: [
    //                 {
    //                     element: document.querySelector('.form-control'),
    //                     intro: 'This is the search input field.',
    //                 },
    //                 {
    //                     element: document.querySelector('.btn.btn-danger'),
    //                     intro: 'Click this button to add a user.',
    //                 },
    //             ],
    //         });
    //         intro.start();
    //     }
    // };

    // useEffect(() => {
    //     startIntro()
    // }, [])


    const handleUpdate = (data) => {
        setSelectedData(data)
        setModalOpen(true)
    }
    const handleDelete = (data) => {
        setDeleteModalOpen(true)
        setDeleteId(data.id)

    }
    const handleAddFunction = () => {
        setSelectedData({})
        setModalOpen(true)
    }
    const handleNameClick = (row) => {
        setSingleUser(row.id)
        setSingleUserModal(true)
    };

    const columns = [
        // {
        //     name: (
        //         <div className={styles.checkboxContainer}>
        //             <input
        //                 type="checkbox"
        //                 className={styles.checkbox}
        //             />
        //         </div>
        //     ),
        //     selector: (row) => (
        //         <div className={styles.checkboxContainer}>
        //             <input
        //                 type="checkbox"
        //                 className={styles.checkbox}
        //             />
        //         </div>
        //     ),
        //     style: {
        //         position: "sticky",
        //         left: 0,
        //         zIndex: 1,
        //     },
        //     width: '60px',
        //     fixed: 'left',
        // },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Select',
            // selector: row => row,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <Button label={<i className="fa-solid fa-pen-to-square"></i>} className='btn border mx-2' onClick={() => handleUpdate(row)} />
                        <Button label={<i className="fa-solid fa-trash"></i>} className='btn border' onClick={() => handleDelete(row)} />
                    </>
                )
            },
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <Button label={<i className="fa-solid fa-pen-to-square"></i>} className='btn border mx-2' onClick={() => handleUpdate(row)} />
                        <Button label={<i className="fa-solid fa-trash"></i>} className='btn border' onClick={() => handleDelete(row)} />
                    </>
                )
            },
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <Button label={<i className="fa-solid fa-pen-to-square"></i>} className='btn border mx-2' onClick={() => handleUpdate(row)} />
                        <Button label={<i className="fa-solid fa-trash"></i>} className='btn border' onClick={() => handleDelete(row)} />
                    </>
                )
            },
        },

        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <Button label={<i className="fa-solid fa-pen-to-square"></i>} className='btn border mx-2' onClick={() => handleUpdate(row)} />
                        <Button label={<i className="fa-solid fa-trash"></i>} className='btn border' onClick={() => handleDelete(row)} />
                    </>
                )
            },
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <Button label={<i className="fa-solid fa-pen-to-square"></i>} className='btn border mx-2' onClick={() => handleUpdate(row)} />
                        <Button label={<i className="fa-solid fa-trash"></i>} className='btn border' onClick={() => handleDelete(row)} />
                    </>
                )
            },
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <Button label={<i className="fa-solid fa-pen-to-square"></i>} className='btn border mx-2' onClick={() => handleUpdate(row)} />
                        <Button label={<i className="fa-solid fa-trash"></i>} className='btn border' onClick={() => handleDelete(row)} />
                    </>
                )
            },
        },
    ];



    const handleChange = (e) => {
        const searchValue = e.target.value;
        let timer = setTimeout(() => {
            dispatch(searchUser(searchValue))
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    };


    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    return (

        <>

            <SkeletonTheme baseColor='grey'>

                {
                    singleUserModal && <SingleUserModal singleUser={singleUser} setSingleUser={setSingleUser} setSingleUserModal={setSingleUserModal} singleUserModal={singleUserModal} />
                }
                {
                    modalOpen && <EditUserModal modalOpen={modalOpen} setModalOpen={setModalOpen} seletedData={seletedData} />
                }

                {
                    deleteModalOpen && <UserDeleteModal deleteModalOpen={deleteModalOpen} setDeleteModalOpen={setDeleteModalOpen} setDeleteId={setDeleteId} deleteId={deleteId} />
                }

                <div className={styles.topDiv}>
                    <div class="mb-3">
                        <input type="search" onChange={(e) => handleChange(e)} class="form-control" id="exampleFormControlInput1" placeholder="Search" />
                    </div>
                    <Button label="Add User" className='btn btn-danger my-3 ' onClick={handleAddFunction} />
                </div>
                {
                    loading ? <Skeleton height={250} />
                        :
                        <Table
                            columns={columns}
                            data={filterUser.length == 0 ? allusers : filterUser}
                            className={styles.candidatesTable}
                            paginationProps={{
                                isPagination: true,
                                tableName: "Report",
                                currentPage: 1,
                                totalCount: count,
                                rowsPerPageValue: rowsPerPageValue,
                                setRowsPerPageValue: setRowsPerPageValue,
                                setPageSelected: setPageSelected,
                            }}
                        />

                }
            </SkeletonTheme>

            {/* {loading && <Skeleton />} */}



        </>
    )
}

export default User