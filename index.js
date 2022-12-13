//Setting up all variables.
const boxes = 
[
    document.getElementById("row1box1"),
    document.getElementById("row1box2"),
    document.getElementById("row1box3"),
    document.getElementById("row2box1"),
    document.getElementById("row2box2"),
    document.getElementById("row2box3"),
    document.getElementById("row3box1"),
    document.getElementById("row3box2"),
    document.getElementById("row3box3")
]
  const nextTurn = ['X','O']
  let current = 'X'

  var winnerText = 'The winner is: '

  for (let i = 0; i < boxes.length; i++) 
  {
    boxes[i].addEventListener('click', clicked)
  }
  document.getElementById("reset").addEventListener('click', reset)

  //The clicked action for the event listener.
function clicked(e){
    if(e.target.value == "")
    {
        e.target.value = current
        checkVal(nextTurn.indexOf(current),nextTurn)
        e.target.blur()
        winner()
    }
}

//Gets the current value so we know what the next value will be.
  function checkVal(index, arr){
    if(index == 1)
    {
        current = arr[0]
    }
    else
    {
        current = arr[1]
    }
  }

  //resets the tic-tac-toe board
  function reset(){
    for (let i = 0; i < boxes.length; i++) 
    {
        boxes[i].value = ""
        boxes[i].addEventListener('click', clicked)
    }
  }

  function checker(val1, val2, val3){
    if (val1 == val2 && val2 == val3 && val1 != ''){
        window.alert(winnerText.concat(' ', val1))
        reset()
    }
  }
//Checks if there is a winner with all possabilities. If not, just returns nothing.
  function winner(){
       checker(boxes[0].value,boxes[1].value,boxes[2].value)
       checker(boxes[3].value,boxes[4].value,boxes[5].value)
       checker(boxes[6].value, boxes[7].value,boxes[8].value)
       checker(boxes[2].value,boxes[5].value,boxes[8].value)
       checker(boxes[1].value,boxes[4].value ,boxes[7].value)
       checker(boxes[0].value,boxes[3].value,boxes[6].value)
       checker(boxes[0].value,boxes[4].value,boxes[8].value)
       checker(boxes[2].value,boxes[4].value,boxes[6].value)
  }