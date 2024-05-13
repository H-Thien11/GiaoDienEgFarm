import React from 'react';
import {Svg, Path} from 'react-native-svg';
import * as d3 from 'd3';

const LineChart = ({data}) => {
  // Định nghĩa kích thước và padding cho SVG
  const SVGHeight = 300;
  const SVGWidth = 300;
  const padding = 20;

  // Tạo một scale cho trục x và y
  const scaleX = d3
    .scaleLinear()
    .domain([0, data.length - 1]) // Dữ liệu x từ 0 đến độ dài dữ liệu - 1
    .range([padding, SVGWidth - padding]); // Khoảng cách hiển thị trên SVG

  const scaleY = d3
    .scaleLinear()
    .domain([0, d3.max(data)]) // Dữ liệu y từ 0 đến giá trị lớn nhất trong dữ liệu
    .range([SVGHeight - padding, padding]); // Đảo ngược vì SVG (0,0) ở góc trên bên trái

  // Tạo một d3 line generator
  const line = d3
    .line()
    .x((d, i) => scaleX(i)) // Chuyển đổi index thành tọa độ x
    .y(d => scaleY(d)) // Chuyển đổi giá trị thành tọa độ y
    // .curve(d3.curveBasis); // Sử dụng curve để làm mượt đường

  // Tạo path dựa trên dữ liệu
  const pathData = line(data);

  return (
    <Svg height={SVGHeight} width={SVGWidth}>
      <Path d={pathData} fill="none" stroke="blue" strokeWidth={2} />
    </Svg>
  );
};

export default LineChart;
