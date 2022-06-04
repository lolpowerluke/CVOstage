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
  var elementToolsList =  document.getElementById('tools-list');
  if (typeof(elementToolsList) != 'undefined' && elementToolsList != null)
  {
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
  var elementAddmembers =  document.getElementById('classmemberinput');
  if (typeof(elementAddmembers) != 'undefined' && elementAddmembers != null)
  {
    var memberInput = document.getElementById("classmemberinput");
    memberInput.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        addmember(e);
      }
    });
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
  if(document.getElementById("classmemberinput").value == "") {
    document.getElementById("classmemberinput").classList.add('error');
  } else {
    document.getElementById("classmemberinput").classList.remove('error');
    document.getElementById('classList').innerHTML = '';
    ArrayClass.push(document.getElementById("classmemberinput").value);
    document.getElementById("classmemberinput").value = '';
    let listElement = document.createElement('ul'),
    numberOfListItems = ArrayClass.length,
    listItem,
    i;
    document.getElementById("classList").appendChild(listElement);
    for (i = 0; i < numberOfListItems; ++i) {
      listItem = document.createElement('li');
      listItem.innerHTML = ArrayClass[i];
      listElement.appendChild(listItem);
      var button = document.createElement("button");
      listItem.appendChild(button);
      button.innerHTML = "remove";
      button.setAttribute("onclick","window.click(this);");
      button.setAttribute("data-index", i);
    }
  }
}
function click(btn) {
  let dataIndex = btn.getAttribute("data-index");
  ArrayClass.splice(dataIndex, 1);
  document.getElementById('classList').innerHTML = '';
  let listElement = document.createElement('ul'),
  numberOfListItems = ArrayClass.length,
  listItem,
  i;
  document.getElementById("classList").appendChild(listElement);
  for (i = 0; i < numberOfListItems; ++i) {
    listItem = document.createElement('li');
    listItem.innerHTML = ArrayClass[i];
    listElement.appendChild(listItem);
    var button = document.createElement("button");
    listItem.appendChild(button);
    button.innerHTML = "remove";
    button.setAttribute("onclick","window.click(this);");
    button.setAttribute("data-index", i);
  }
}