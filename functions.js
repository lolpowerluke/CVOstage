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
  if (typeof(elementToolsList) != 'undefined' && elementToolsList != null) {
    var list, switching, b, shouldSwitch;
    list = document.getElementById("tools-list");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("button");
      for (var i = 0; i < (b.length - 1); i++) {
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
  if (typeof(elementAddmembers) != 'undefined' && elementAddmembers != null) {
    var memberInput = document.getElementById("classmemberinput");
    memberInput.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        addmember(e);
      }
    });
  }
  var elementTeamsizeInp =  document.getElementById('teamInput');
  if (typeof(elementTeamsizeInp) != 'undefined' && elementTeamsizeInp != null) {
    var teamSizeInp = document.getElementById("teamInput");
    teamSizeInp.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        createTeams(e);
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
function resetQuestionList() {
  Array.from(document.querySelectorAll('.dp-none')).forEach(function(el) {
    el.classList.remove('dp-none');
  });
  Array.from(document.querySelectorAll('.answered')).forEach(function(el) {
    el.classList.remove('answered');
  });
  document.getElementById("score").className = "question-dp-none";
  document.getElementById("brainstorm").className = "question-dp-none";
  document.getElementById("meerkeuzevragen").className = "question-dp-none";
  document.getElementById("interactief").className = "question-dp-none";
  document.getElementById("spelvorm").className = "question-dp-none";
  document.getElementById("samenwerken").className = "question-dp-none";
  document.getElementById("presentatie").className = "question-dp-none";
  document.getElementById("animatie").className = "question-dp-none";
  document.getElementById("interactief").className = "question-dp-none";
  document.getElementById("speurtocht").className = "question-dp-none";
}
let ArrayClass = [];
function addmember() {
  if(document.getElementById("classmemberinput").value == "" || !document.getElementById("classmemberinput").value.replace(/\s/g, "")) {
    document.getElementById("classmemberinput").classList.add('error');
  } else {
    document.getElementById("classmemberinput").classList.remove('error');
    document.getElementById('classList').innerHTML = '';
    ArrayClass.push(document.getElementById("classmemberinput").value);
    document.getElementById("classmemberinput").value = '';
    let listElement = document.createElement('ul'),
    numberOfListItems = ArrayClass.length,
    listItem;
    document.getElementById("classList").appendChild(listElement);
    for (var i = 0; i < numberOfListItems; i++) {
      listItem = document.createElement('li');
      listItem.innerHTML = ArrayClass[i];
      listElement.appendChild(listItem);
      var button = document.createElement("button");
      listItem.appendChild(button);
      button.innerHTML = "remove";
      button.setAttribute("onclick","window.remove(this);");
      button.setAttribute("data-index", i);
    }
  }
}
function remove(btn) {
  let dataIndex = btn.getAttribute("data-index");
  ArrayClass.splice(dataIndex, 1);
  document.getElementById('classList').innerHTML = '';
  let listElement = document.createElement('ul'),
  numberOfListItems = ArrayClass.length,
  listItem;
  document.getElementById("classList").appendChild(listElement);
  for (var i = 0; i < numberOfListItems; i++) {
    listItem = document.createElement('li');
    listItem.innerHTML = ArrayClass[i];
    listElement.appendChild(listItem);
    var button = document.createElement("button");
    listItem.appendChild(button);
    button.innerHTML = "remove";
    button.setAttribute("onclick","window.remove(this);");
    button.setAttribute("data-index", i);
  }
}
function switchTeamsMode() {
  if (document.getElementById("teamsMode").classList.contains("teamModeSize")) {
    document.getElementById("teamsMode").classList.remove("teamModeSize");
    document.getElementById("teamsMode").classList.add("teamModeAmount");
    document.getElementById("teamsMode").textContent = "Aantal teams: ";
    document.getElementById("switchTeamMode").textContent = "switch naar teamgrootte";
  } else if (document.getElementById("teamsMode").classList.contains("teamModeAmount")) {
    document.getElementById("teamsMode").classList.remove("teamModeAmount");
    document.getElementById("teamsMode").classList.add("teamModeSize");
    document.getElementById("teamsMode").textContent = "Teamgrootte:";
    document.getElementById("switchTeamMode").textContent = "switch naar aantal teams";
  } else {
    document.getElementById("teamsMode").classList.remove("teamModeSize");
    document.getElementById("teamsMode").classList.add("teamModeAmount");
    document.getElementById("teamsMode").textContent = "Aantal teams: ";
    document.getElementById("switchTeamMode").textContent = "switch naar teamgrootte";
  }
}
function createTeams() {
  var ArrayClassShuffle = [];
  for (var i in ArrayClass) {
    ArrayClassShuffle.push(ArrayClass[i]);
  }
  if (document.getElementById("teamInput").value < 1 || document.getElementById("teamInput").value == "" || document.getElementById("teamInput").value.includes(",") || document.getElementById("teamInput").value.includes(".")) {
    document.getElementById("teamInput").classList.add("error");
  } else {
    document.getElementById("teamInput").classList.remove("error");
    var elementTeamsizeInput =  document.getElementById("teamInput");
    if (typeof(elementTeamsizeInput) != 'undefined' && elementTeamsizeInput != null) {
      var teamSize = document.getElementById("teamInput").value;
      if (document.getElementById("teamsMode").classList.contains("teamModeSize")) {
        ArrayClassShuffle = shuffle(ArrayClassShuffle);
        var groups = [];
        var numPeople = ArrayClassShuffle.length;
        var groupNum = Number(document.getElementById("teamInput").value);
        var numGroups = (numPeople / groupNum);
        var personIndex = 0;
        while (numGroups > 0.0) {
          var newGroup = [];
          if ( numGroups < 1.0 ) {
            while( personIndex < numPeople ) {
              newGroup[newGroup.length] = ArrayClassShuffle[personIndex];
            personIndex++;
            }
          }
          else {
            for ( i = groupNum; i > 0; i-- ) {
              newGroup[newGroup.length] = ArrayClassShuffle[personIndex];
              personIndex++;
            }
          }
          groups[groups.length] = newGroup;
          numGroups--;
        }
      } else if (document.getElementById("teamsMode").classList.contains("teamModeAmount")) {
        ArrayClassShuffle = shuffle(ArrayClassShuffle);
        var groups = [];
        var numPeople = ArrayClassShuffle.length;
        var groupNum = Number(document.getElementById("teamInput").value);
        var peoplePerGroup = Math.floor( numPeople / groupNum );
        var personIndex = 0;
        while (groupNum > 0.0) {
          var newGroup = [];
          if ( groupNum <= 1.0 ) {
            while( personIndex < numPeople ) {
              newGroup[newGroup.length] = ArrayClassShuffle[personIndex];
              personIndex++;
            }
          }
          else {
          for (var i = peoplePerGroup; i > 0; i-- ) {
            newGroup[newGroup.length] = ArrayClassShuffle[personIndex];
            personIndex++;
          }
          }
          groups[groups.length] = newGroup;
          groupNum--;
        }
      }
      document.getElementById('teamsList').innerHTML = '';
      let divElementGroups = document.createElement("div"),
      numberOfulListItems = groups.length;
      document.getElementById("teamsList").appendChild(divElementGroups);
      for (var i = 0; i < numberOfulListItems; i++) {
        let ulListItemGroups = document.createElement("ul"),
        elementTitleGroups = document.createElement("span");
        divElementGroups.appendChild(ulListItemGroups);
        ulListItemGroups.appendChild(elementTitleGroups);
        elementTitleGroups.textContent = "Groep " + (i + 1);
        for (var j = 0; j < groups[i].length; j++) {
          let listItemGroups = document.createElement("li");
          listItemGroups.innerHTML = groups[i][j]; //ArrayClass[i][j];
          ulListItemGroups.appendChild(listItemGroups);
        }
      }
    }
  }
}
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
function kennisYes() {
  document.getElementById("kennis").classList.add("answered");
  document.getElementById("score").classList.remove("question-dp-none");
  document.getElementById("canva").classList.add("dp-none");
  document.getElementById("thinglink").classList.add("dp-none");
  document.getElementById("padlet").classList.add("dp-none");
  document.getElementById("actionbound").classList.add("dp-none");
  document.getElementById("nearpod").classList.add("dp-none");
  document.getElementById("lessonup").classList.add("dp-none");
  document.getElementById("mentimeter").classList.add("dp-none");
  document.getElementById("powtoon").classList.add("dp-none");
  document.getElementById("plicktochart").classList.add("dp-none");
}
function scoreYes() {
  document.getElementById("score").classList.add("answered");
  document.getElementById("meerkeuzevragen").classList.remove("question-dp-none");
  document.getElementById("kahoot").classList.add("dp-none");
  document.getElementById("quizlet").classList.add("dp-none");
}
function scoreNo() {
  document.getElementById("score").classList.add("answered");
  document.getElementById("interactief").classList.remove("question-dp-none");
  document.getElementById("quizizz").classList.add("dp-none");
}
function meerkeuzevragenYes() {
  document.getElementById("meerkeuzevragen").classList.add("answered");
  document.getElementById("formative").classList.add("dp-none");
  document.getElementById("googleForms").classList.add("dp-none");
}
function meerkeuzevragenNo() {
  document.getElementById("meerkeuzevragen").classList.add("answered");
  document.getElementById("quizizz").classList.add("dp-none");
}
function kennisNo() {
  document.getElementById("kennis").classList.add("answered");
  document.getElementById("brainstorm").classList.remove("question-dp-none");
  document.getElementById("quizlet").classList.add("dp-none");
  document.getElementById("kahoot").classList.add("dp-none");
  document.getElementById("quizizz").classList.add("dp-none");
  document.getElementById("formative").classList.add("dp-none");
  document.getElementById("googleForms").classList.add("dp-none");
  document.getElementById("quizlet").classList.add("dp-none");
}
function brainstormYes() {
  document.getElementById("brainstorm").classList.add("answered");
  document.getElementById("samenwerken").classList.remove("question-dp-none");
  document.getElementById("nearpod").classList.add("dp-none");
  document.getElementById("lessonup").classList.add("dp-none");
  document.getElementById("mentimeter").classList.add("dp-none");
  document.getElementById("powtoon").classList.add("dp-none");
  document.getElementById("actionbound").classList.add("dp-none");
}
function brainstormNo() {
  document.getElementById("brainstorm").classList.add("answered");
  document.getElementById("presentatie").classList.remove("question-dp-none");
  document.getElementById("canva").classList.add("dp-none");
  document.getElementById("plicktochart").classList.add("dp-none");
  document.getElementById("thinglink").classList.add("dp-none");
  document.getElementById("padlet").classList.add("dp-none");
}
function samenwerkenYes() {
  document.getElementById("samenwerken").classList.add("answered");
  document.getElementById("canva").classList.add("dp-none");
  document.getElementById("plicktochart").classList.add("dp-none");
  document.getElementById("thinglink").classList.add("dp-none");
}