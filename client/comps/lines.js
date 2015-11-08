import React from 'react'

var lastLine = document.querySelector('.last-line'),
    userList = document.querySelector('.Users'),
    userChar = document.querySelectorAll('.me .letter').innerHTML;

function tagHighlight(){
  lastLine.addClass('highlight');
  userList.removeClass('highlight')
}
function highlight(line, currentChar, otherChar){
  return line.split('').map(char => {
    var classCurrent = char === currentChar? 'letter-current':'';
    var classOther = otherChar.indexOf(char) > -1? 'letter-other':'';
    return `<span class="letter ${classCurrent}${classOther}">${char}</span>`
  }).join('');
  userList.addClass('highlight');
  setTimeout('tagHighlight()', 1);
}

const Lines = props => (
  <div className='Lines'>
    {props.lines.map((line, i) => (
      <div
        key={line.index}
        className={'line'}
        dangerouslySetInnerHTML={{
          __html: highlight(line.content, 'b', ['s','e','i','n'])
        }}
      />
    ))}
  </div>
)

export default Lines
