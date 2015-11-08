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

const pathD = values => (
  values.reduce((d, val) => `${d} l ${-20} ${-val*10}`, 'M500,250 ')
)

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
