import React, { useState } from 'react';
// import Table from '../Table/Table';
import './ReactTabs.css';
import FormA from './FormA';
import FormB from './FormB';
import NextBtn from './NextBtn';

function TabForm() {
    const [activeTab, setActiveTab] = useState(0);
    const [maxTabCount, setMaxTabCount] = useState(2);


    const handleTabClick = (index) => {
        console.log('index', index)
        if (index === activeTab) return;
        if (index === activeTab + 1) {
            if (activeTab + 1 >= maxTabCount) {
                setMaxTabCount(activeTab + 2);
            }
        } else if (index === activeTab - 1) {
            if (activeTab - 1 < maxTabCount - 2) {
                setMaxTabCount(activeTab - 1);
            }
        }
        setActiveTab(index);
    };

    const renderNextButton = () => {
        console.log('called')
        if (activeTab === maxTabCount - 1) {
            return (
                <button className='btn btn-primary' onClick={() => handleSubmit(tableData[activeTab])}>
                    Submit
                </button>
            );
        } else {
            return (
                <button type='button' className='btn btn-primary' onClick={() => handleTabClick(activeTab + 1)}>
                    Next
                </button>
            );
        }
    };

    const handleTabs = () => {
        handleTabClick(activeTab + 1)
    }


    const [tableData, setTableData] = useState([
        {
            name: 'John Doe',
            email: 'john@example.com',
            phone: '123-456-7890',
            gender: 'Male',
            city: '',
            input: '',
            error: {
                city: false,
                input: false,
            },
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '987-654-3210',
            gender: 'Female',
            city: '',
            input: '',
            error: {
                city: false,
                input: false,
            },
        },
    ]);
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: (row) => row.phone,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: (row) => row.gender,
            sortable: true,
        },
        {
            name: 'City',
            cell: (row) => {
                return (
                    <select
                        value={row.city}
                        onChange={(e) => handleCityChange(row, e.target.value)}
                        className={row.error.city ? 'error' : ''}

                    >
                        <option value="">Select</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>
                        <option value="Miami">Miami</option>
                    </select>
                );
            },
        },
        {
            name: 'Input Field',
            cell: (row) => (
                <input
                    type="text"
                    value={row.input}
                    onChange={(e) => handleInputFieldChange(row, e.target.value)}
                    className={row.error.input ? 'error' : ''}
                />
            ),
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <>
                        <button
                            className='btn btn-danger'
                            type='button'
                            onClick={() => handleSubmit(row)}
                        >
                            Submit
                        </button>
                    </>
                );
            },
        },
    ];

    const handleCityChange = (row, value) => {
        const updatedData = [...tableData];
        const updatedRow = { ...row, city: value, error: { ...row.error, city: false } };
        const index = updatedData.indexOf(row);
        updatedData[index] = updatedRow;
        setTableData(updatedData);
    };

    const handleInputFieldChange = (row, value) => {
        const updatedData = [...tableData];
        const updatedRow = { ...row, input: value, error: { ...row.error, input: false } };
        const index = updatedData.indexOf(row);
        updatedData[index] = updatedRow;
        setTableData(updatedData);
    };

    // const handleSubmit = (row) => {
    //     console.log('row', row)
    //     if (row.city === '' || row.input === '') {
    //         const updatedData = [...tableData];
    //         const updatedRow = {
    //             ...row,
    //             error: {
    //                 city: row.city === '',
    //                 input: row.input === '',
    //             },
    //         };
    //         const index = updatedData.indexOf(row);
    //         updatedData[index] = updatedRow;
    //         setTableData(updatedData);
    //     } else {
    //         const updatedData = [...tableData];
    //         const updatedRow = { ...row, error: { city: false, input: false } };
    //         const index = updatedData.indexOf(row);
    //         updatedData[index] = updatedRow;
    //         setTableData(updatedData);
    //     }
    // };


    // const handleSubmitFormA = (values, { setSubmitting }) => {
    //     console.log('Form A submitted with values:', values);
    //     setSubmitting(false); // Set isSubmitting to false to allow form submission
    // };


    return (
        <div className="tab-panel container mt-5">
            <ul className="tab-list">
                <li
                    className={activeTab === 0 ? "active" : "activestab"}
                    onClick={() => handleTabClick(0)}
                >
                    Tab 1
                </li>
                <li
                    className={activeTab === 1 ? "active" : "activestab"}
                    onClick={() => handleTabClick(1)}
                >
                    Tab 2
                </li>
            </ul>

            <div className="tab-content">
                <div
                    className={`tab-pane ${activeTab === 0 ? "active" : ""}`}
                >
                    {/* <Table columns={columns} data={tableData} /> */}
                    {/* <FormA handleSubmits={handleSub}/> */}
                    <FormA handleTabClick={handleTabs} />


                </div>
                <div
                    className={`tab-pane ${activeTab === 1 ? "active" : ""}`}
                >
                    <FormB />
                </div>

            </div>
            {/* <button onClick={() => handleTabClick(activeTab + 1)}>Next</button> */}
            {/* <button type='submit' className='btn btn-danger'>Save</button> */}
            {/* {renderNextButton()} */}

        </div>
    );
}

export default TabForm;
