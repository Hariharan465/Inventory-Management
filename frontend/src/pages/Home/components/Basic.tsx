
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useDashboardDataQuery } from '../../../provider/queries/Users.query';
import Loader from '../../../components/Loader';
import { useLocation } from 'react-router-dom';

export default function BasicDemo() {

    const { data , isLoading , isError , isFetching } = useDashboardDataQuery({})
    const location = useLocation()


    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});


    useEffect(() => {

        if(!data){
            return
        }


        const chartData = {
            labels: ['sight', 'Material', 'Material Costs'],
            datasets: [
                {
                    label: ['Total'],
                    data: [ data.consumers , data.orders , data.sell ],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)', 
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                      ],
                      borderWidth: 1    
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(chartData);
        setChartOptions(options);
    }, [data , location]);

    if( isFetching || isLoading ){
        return <Loader />
    } 

    if( isError ){
        return <>
          Something went wrong
        </>
    } 

    return (
        <Chart type="bar" width='' className='w-full mt-10 ml-4 mr-4  lg:w-1/2 ' data={chartData} options={chartOptions} />
    )
}
        