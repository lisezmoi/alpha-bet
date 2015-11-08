import React from 'react'
import Logo from './logo'

var lastLine = document.querySelector('.last-line'),
    userList = document.querySelector('.Users'),
    userChar = document.querySelectorAll('.me .letter').innerHTML;
function tagHighlight(){
  lastLine.addClass('highlight');
   userList.removeClass('highlight')
};
function highlight(line, currentChar, otherChar){
  return line.split('').map(char => {
    var classCurrent = char === currentChar? 'letter-current':'';
    var classOther = otherChar.indexOf(char) > -1? 'letter-other':'';
    return `<span class="letter ${classCurrent}${classOther}">${char}</span>`
  }).join('');
  userList.addClass('highlight');
  setTimeout('tagHighlight()', 1);
}


const Main = props => (
  <div className='Main'>
    <div className='Main-lines'>
    {props.lines.map((lineObject, i) => (
      <div className="line" key={i} dangerouslySetInnerHTML={{__html: highlight(lineObject.line,'b',['s','e','i','n'])}} />
    ))}
    </div>
    <Logo
      onToggleAbout={props.onToggleAbout}
    />
  </div>
)

export default Main
