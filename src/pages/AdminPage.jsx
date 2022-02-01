import React from 'react';
import { ToastContainer } from 'react-toastify';
import TableAdmin from '../components/TableAdmin';

const AdminPage = () => {
    return (
        <div className="admin-pannel">
            <h2>Admin page</h2>
            <TableAdmin />
            <ToastContainer />
        </div>
    );
};

export default AdminPage;