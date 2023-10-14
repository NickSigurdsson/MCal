import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import * as d3 from 'd3';


function Donutchart () {
    const ref = useRef();

    useEffect(() => {
        const data = [
            { label: 'A', value: 10 },
            { label: 'B', value: 20 },
            { label: 'C', value: 30 },
            { label: 'D', value: 40 }
        ];

        const width = 300;
        const height = 300;
        const radius = Math.min(width, height) / 2;
        const donutWidth = 50;

        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.label))
            .range(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3']);

        const svg = d3.select(ref.current)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const arc = d3.arc()
            .innerRadius(radius - donutWidth)
            .outerRadius(radius);

        const pie = d3.pie()
            .value(d => d.value)
            .sort(null);

        const path = svg.selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', d => color(d.data.label));

    }, []);

    return (
        <div style={{
            marginBottom: '50px',
            marginLeft: '40px'
        }}>
            <Box border={1} borderColor="grey.300" boxShadow={3} p={2} borderRadius={4} width={600}>
                <Typography variant="h6">
                    <Box sx={{ fontWeight: 'light'}}>Weekly Macros</Box>
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '390px' }}>
                    <svg ref={ref} width="300" height="300"></svg>
                </div>
            </Box>
        </div>
    );
}

export default Donutchart;
