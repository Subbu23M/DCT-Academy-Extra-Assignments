import React from 'react';

// Include recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarChartt(props) {
    // Object Destructuring - ES6
    const{moveData} = props;
    
    return (
    <>
        <BarChart
            width={400}
            height={450}
            data={moveData}
            margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom:0,
            }}
            barSize={20}
            >
            <XAxis
                dataKey='Name (Original Name)'
                scale='point'
                padding={{ left: 10, right: 5 }}
            />
            <YAxis/>
            <Tooltip/>
            <Legend />
            <CartesianGrid strokeDasharray='1 1' />
            <Bar dataKey='Total Duration (Minutes)' fill='#000' background={{ fill: '#fff' }} style={{marginTop:'-50px'}} />
        </BarChart>
    </>
    );
}

export default BarChartt;