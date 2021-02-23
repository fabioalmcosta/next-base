import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartResult = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
    );
}

export default LineChartResult;