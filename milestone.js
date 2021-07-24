
const data = [
    { date: '7/1/2021', value: 10 },
    { date: '7/2/2021', value: 8 },
    { date: '7/3/2021', value: 6 },
    { date: '7/4/2021', value: 14 },
    { date: '7/6/2021', value: 16 },
    { date: '7/7/2021', value: 16 },
    { date: '7/8/2021', value: 14 },
    { date: '8/6/2021', value: 16 },
    { date: '9/7/2021', value: 16 }
]

const width = '100%'
const timeline = d3.select('#milestone')

const maxDate = new Date(d3.max(data.map(d => d.date)))
const minDate = new Date(d3.min(data.map(d => d.date)))

let x = d3.scaleLinear()
    .domain([minDate, maxDate])
    .range([0, width]);

// let y = d3.scaleLinear()
//     .range([height, 0]);

// let xScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.width])
// let yScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.height])

console.log(minDate.getTime(), maxDate.getTime())

timeline
    .append("line")
    .attr('stroke', 'blue')
    .attr('stroke-width', '5')
    .attr('x1', x(minDate))
    .attr('x2', x(maxDate))
    .attr('y1', 100)
    .attr('y2', 100)