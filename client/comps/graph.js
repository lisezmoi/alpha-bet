import React from 'react'

const PATH_STYLE = {
  fill: 'none',
  fillOpacity: '1',
  stroke: '#ff0000',
  strokeWidth: '1',
  strokeLinecap: 'butt',
  strokeLinejoin: 'round',
  strokeMiterlimit: '4',
  strokeDasharray: 'none',
  strokeDashoffset: '0',
  strokeOpacity: '1',
}

const map = (value, istart, istop, ostart, ostop) => (
  ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
)

const pathD = values => {
  let variationValue = 0
  const variations = values.map(val => (
    variationValue = variationValue + val
  ))
  const max = Math.max(...variations)
  const min = Math.min(...variations)
  return variations.reduce((d, val, i) => {
    const y = map(val, min, max, 125, 500 - 125)
    if (i === 0) {
      return `M ${500 - 10 * i} ${y}`
    }
    return `${d} L ${500 - 10 * i} ${y}`
  }, '')
}

const Graph = props => (
  <div className='Graph'>
    <svg
      width='100%'
      height='100%'
      preserveAspectRatio='none'
      viewBox='0 0 500 500'
    >
      <path
        style={PATH_STYLE}
        d={pathD(props.betHistory)}
      />
    </svg>
  </div>
)

export default Graph
