function checkDarkLightCookie() {
  if(document.cookie.split("; ").find(row => row.startsWith("dark"))) {
    document.getElementById("body").className = "dark";
    document.getElementById("darklightswitch").textContent="switch to light mode";
  } else if(document.cookie.split("; ").find(row => row.startsWith("light"))) {
    document.getElementById("body").className = "light";
    document.getElementById("darklightswitch").textContent="switch to dark mode";
  } else {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie="dark; expires=" + tomorrow + "; path=/";
    document.getElementById("body").className = "dark";
  }
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("tools-list");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("button");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
function darklight() {
  if (document.getElementById("body").classList.contains('dark')) {
    document.getElementById("body").classList.remove('dark');
    document.getElementById("body").classList.add('light');
    document.getElementById("darklightswitch").textContent="switch to dark mode";
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie="light; expires=" + tomorrow + "; path=/";
  } else {
    document.getElementById("body").className = "dark";
    document.getElementById("darklightswitch").textContent="switch to light mode";
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.cookie="dark; expires=" + tomorrow + "; path=/";
  }
}
function quizYes() {
  document.getElementById("quiz").classList.add("answered");
  document.getElementById("lessonup").classList.add("dp-none");
}
function quizNo() {
  document.getElementById("quiz").classList.add("answered");
  document.getElementById("quizlet").classList.add("dp-none");
}
function resetQuestionList() {
  Array.from(document.querySelectorAll('.dp-none')).forEach(function(el) {
    el.classList.remove('dp-none');
  });
  Array.from(document.querySelectorAll('.answered')).forEach(function(el) {
    el.classList.remove('answered');
  });
}
let ArrayClass = [];
function addmember() {
  document.getElementById('classList').innerHTML = '';
  ArrayClass.push(document.getElementById("classmemberinput").value);
  document.getElementById("classmemberinput").value = '';
  // Make the list
  let listElement = document.createElement('ul'),

  // Set up a loop that goes through the items in listItems one at a time
  numberOfListItems = ArrayClass.length,
  listItem,
  i;

  // Add it to the page
  document.getElementById("classList").appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
    // Create an item for each one
    listItem = document.createElement('li');

    // Add the item text
    listItem.innerHTML = ArrayClass[i];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
    var button = document.createElement("button");
    listItem.appendChild(button);
    button.innerHTML = "remove";
    button.setAttribute("onclick","yes");
    button.setAttribute("data-index", i);
  }
}