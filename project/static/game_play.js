const targetWord = "TABLE";

// Initialize the first row as active
document.querySelector('.row').classList.add('active');

document.querySelectorAll('.row').forEach(function(row, rowIndex, rows) {
  const boxes = row.querySelectorAll('.letter-box');


  boxes.forEach(function(box, boxIndex) {
    box.addEventListener('input', function(event) {
      box.textContent = box.textContent.toUpperCase()
      if (box.innerText.length > 1) {
        box.innerText = box.innerText[0];
      }

      if (boxIndex < boxes.length - 1) {
        box.setAttribute('contenteditable', 'false');
        boxes[boxIndex + 1].setAttribute('contenteditable', 'true');
        boxes[boxIndex + 1].focus();
      }
    });
  });

  row.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (Array.from(boxes).every(b => b.innerText.length === 1)) {
        checkRow(row, targetWord);
        if (rowIndex < rows.length - 1) {
          rows[rowIndex + 1].querySelector('.letter-box').setAttribute('contenteditable', 'true');
          rows[rowIndex + 1].querySelector('.letter-box').focus();
        }
      }
    }
  });
});

function checkRow(row, word) {
  const letters = row.querySelectorAll('.letter-box');
  letters.forEach(function(letterBox, index) {
    const letter = letterBox.innerText;
    if (word[index] === letter) {
      letterBox.style.backgroundColor = 'green';
    } else if (word.includes(letter)) {
      letterBox.style.backgroundColor = 'yellow';
    } else {
      letterBox.style.backgroundColor = 'grey';
    }
  });
}

document.querySelectorAll('#keyboard button').forEach(button => {
  button.addEventListener('click', function() {
    const buttonValue = button.textContent;
    const currentRow = document.querySelector('.row.active');
    const filledBoxes = currentRow.querySelectorAll('.letter-box.filled');
    const lastBox = filledBoxes[filledBoxes.length - 1];

    if (buttonValue === 'Enter') {
      // Implement the logic to handle the Enter action
      if (filledBoxes.length === currentRow.children.length) {
        checkRow(currentRow, targetWord);
      }
    } else if (buttonValue === 'Del') {
      // Implement the logic to handle the Delete action
      if (lastBox) {
        lastBox.textContent = '';
        lastBox.classList.remove('filled');
      }
    } else {
      // Logic for inputting letters
      const emptyBox = currentRow.querySelector('.letter-box:not(.filled)');
      if (emptyBox) {
        emptyBox.textContent = buttonValue;
        emptyBox.classList.add('filled');
      }
    }
  });
});
