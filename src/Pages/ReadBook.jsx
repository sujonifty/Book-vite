
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import UseLocalStorage from '../components/Hooks/UseLocalStorage';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];






// const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// export default function ReadBookChart() {
//     const [dataFromStore] = UseLocalStorage();
//     console.log(dataFromStore)
//     return (
//         <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>

//             <BarChart
                
//                 data={dataFromStore}
//                 margin={{
//                     top: 20,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="bookName" />
//                 <YAxis />
//                 <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//                     {dataFromStore.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//                     ))}
//                 </Bar>
//             </BarChart>
//         </ResponsiveContainer>

//     );
// }

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'; // Import ResponsiveContainer
import UseLocalStorage from '../components/Hooks/UseLocalStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function ReadBookChart() {
  const [dataFromStore] = UseLocalStorage();
  console.log(dataFromStore);

  return (
    <ResponsiveContainer width="100%" height={300}> {/* Wrap your chart with ResponsiveContainer */}
      <BarChart
        data={dataFromStore}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {dataFromStore.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}


