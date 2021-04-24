import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { ImFolderDownload } from 'react-icons/im';
import { Line } from 'react-chartjs-2';

const ApplicationRecieved = () => {
  return (
    <div className='application-recieved panel-card'>
      <div className='top'>
        <span>Applications Recieved</span>
        <div className='menu'>
          <span>This Year</span>
          <span>This Week</span>
          <span>Today</span>
          <span>
            <ImFolderDownload className='icon' />
            Download Report
          </span>
          <span>
            <BsThreeDots className='icon' />
          </span>
        </div>
      </div>
      <div className='main'>
        <Line
          width={500}
          data={{
            labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Applicants',
                data: [12, 19, 3, 5, 10, 3],
                fill: false,
                borderColor: '#FC525F',
                tension: 0.1,
              },
              {
                label: 'Shortlisted',
                data: [5, 15, 9, 20, 18, 5],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ApplicationRecieved;
