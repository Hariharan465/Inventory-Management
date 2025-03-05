
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useDashboardDataQuery } from '../../../provider/queries/Users.query';
import Loader from '../../../components/Loader';
import { useLocation } from 'react-router-dom';

export default function PieChartDemo() {

    const { data , isLoading , isError , isFetching } = useDashboardDataQuery({})
    const location = useLocation()


    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {

        if(!data){
            return
        }


        const documentStyle = getComputedStyle(document.documentElement);
        const chartData = {
            labels: ['sight', 'Material', 'Material Costs'],
            datasets: [
                {
                    data: [ data.consumers , data.orders , data.sell ],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
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
            <Chart type="doughnut" className='w-full mt-10 ml-4 mr-4 lg:w-[40%]' data={chartData} options={chartOptions}  />
    )
}
        