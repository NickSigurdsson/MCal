import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import * as d3 from 'd3';

function BarChart() {
    const svgRef = useRef(null);

    useEffect(() => {
        // Sample data
        const data = [
            { name: 'Sun', value: 3500 },
            { name: 'Mon', value: 2700 },
            { name: 'Tue', value: 2900 },
            { name: 'Wed', value: 2000 },
            { name: 'Thu', value: 1800 },
            { name: 'Fri', value: 2400 },
            { name: 'Sat', value: 2900 }
        ];

        const svg = d3.select(svgRef.current);
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Create scales
        const xScale = d3.scaleBand()
            .rangeRound([0, width])
            .padding(0.1)
            .domain(data.map(d => d.name));

        const yScale = d3.scaleLinear()
            .rangeRound([height, 0])
            .domain([0, d3.max(data, d => d.value)]);

        // Create axes
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        // Clear previous renders
        svg.selectAll("*").remove();

        // Append group for the chart and translate it
        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Append rectangles for the bar chart
        g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => xScale(d.name))
            .attr('y', d => yScale(d.value))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d.value));

        // Append the x-axis
        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(xAxis);

        // Append the y-axis
        g.append('g')
            .call(yAxis);

    }, []); // Empty dependency array means this useEffect will run once, similar to componentDidMount

    return (
        <div style={{
            marginBottom: '50px',
            marginLeft: '40px'
        }}>
            <Typography variant="h6">
                <Box sx={{ fontWeight: 'bold'}}>Weekly Calorie Intake</Box>
            </Typography>
            <Box border={1} borderColor="grey.300" boxShadow={3} p={2} borderRadius={4} width={600}>
                <svg ref={svgRef} width="600" height="390"></svg>
            </Box>
        </div>
    );
}

export default BarChart;
