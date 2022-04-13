import React from 'react';
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';

const Datatable = () => {

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: () => {
            return (
                <div className='cellAction'>
                    <div className='viewButton'>View</div>
                    <div className='deleteButton'>Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='datatable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={3}
                rowsPerPageOptions={[3]}
                checkboxSelection
            />
        </div>
    );
}

export default Datatable;