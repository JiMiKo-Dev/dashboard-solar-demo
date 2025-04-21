import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import '../index.css';

const data = [
    { time: '08:00', power: 50 },
    { time: '10:00', power: 100 },
    { time: '12:00', power: 200 },
    { time: '14:00', power: 300 },
    { time: '16:00', power: 400 },
];

const ChartPanelComponent = () => {
    return (
        <div className="mt-10 p-4 bg-[#12122e] rounded-2xl shadow-neon border border-neonBlue">
            <h2 className="mb-4 text-sm text-neonBlue">Power Today</h2>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#00f7ff33" />
                    <XAxis dataKey="time" stroke="#00f7ff" />
                    <YAxis stroke="#00f7ff" />
                    <Tooltip contentStyle={{ backgroundColor: '#1f1f3f', borderColor: '#00f7ff' }} />
                    <Line type="monotone" dataKey="power" stroke="#00f7ff" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};


export default ChartPanelComponent