import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styles from "../../component/Login/Login.module.scss";
import LayoutCommon from './LayoutCommon';

const EnterLayout = () => {

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(delay);
    }, []);
    return (
        <>
            {/* {loading ? (
                <div className={styles.loader}>
                    Loading...
                </div>
            ) : ( */}
            <div className={styles.mainContainer}>
                <div className='row'>
                    <div className='col-6'>
                        <LayoutCommon />
                    </div>
                    <div className='col-6'>
                        <div className={styles.logins}>
                            <div className={styles.loginDiv}>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default EnterLayout