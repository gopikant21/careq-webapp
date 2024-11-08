import React from 'react';
import {DataTableDemo} from '@/components/ui/history';

const DashboardPage: React.FC = () => {
    return (
        <div>
            <div className='text-md font-bold'>Appointment History</div>
            <div className='text-sm text-gray-500'>View your appointment history</div>
            <DataTableDemo/>
        </div>
    );
};

export default DashboardPage;