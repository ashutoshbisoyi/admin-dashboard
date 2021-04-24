import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { BsThreeDots } from 'react-icons/bs';

const OpenPositions = () => {
  return (
    <div className='panel-card open-positions '>
      <div className='top'>
        <span>Open positions by department</span>
        <BsThreeDots />
      </div>
      <div className='main'>
        <Doughnut
          width={350}
          width={350}
          data={{
            labels: ['Dep1', 'Dep2', 'Dep3'],
            datasets: [
              {
                label: 'Applicants',
                data: [30, 25, 45],
                backgroundColor: ['#fc525f', 'rgb(54, 162, 235)', '#6643B5'],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default OpenPositions;
