
// About Opener
$('.about-button').click(function(){
    $('#about').toggleClass('opened');
});

var lastLine = $('.last-line'),
    userList = $('.Users'),
    userChar = $('.me .letter').html();
function tagHighlight(){
  lastLine.addClass('highlight');
   userList.removeClass('highlight')
};
function highlight(currentChar, otherChar){
  lastLine.html(lastLine.text().split('').map(char => {
    var classCurrent = char === currentChar? 'letter-current':'';
    var classOther = otherChar.indexOf(char) > -1? 'letter-other':'';
    return `<span class="letter ${classCurrent}${classOther}">${char}</span>`
  }).join(''));
  if (userChar === currentChar) {
  }
    userList.addClass('highlight');
  setTimeout('tagHighlight()', 1);
}
highlight('b',['s','e','i','n']);
