var noteSticky = document.getElementById("StickyNote");
var date = document.getElementById("dateInput");

var noteList = [];

if (localStorage.getItem("notes") != null) {
    noteList = JSON.parse(localStorage.getItem("notes"));
    displayNotes();
}

function addNote() {
    var notes = {
        note: noteSticky.value,
        date: date.value // Capture the date value from the input
    };
    noteList.push(notes);
    localStorage.setItem("notes", JSON.stringify(noteList));
    clearInput();
    displayNotes();
}

function clearInput() {
    noteSticky.value = '';
    date.value = ''; // Clear the date input as well
}

function displayNotes() {
    var list = ''; 

    for (let i = 0; i < noteList.length; i++) {
        list += `
            <div class="col-md-4 h-25 px-3">
                <button class="btn btn-close" onclick="deleteNotes(${i})"></button>
                <div class="inner">
                    <div class="card-body text-center py-3 bg-info-subtle">
                        ${noteList[i].note}
                    </div>
                    <span>${noteList[i].date}</span>
                </div>
            </div>
        `;
    }
    document.getElementById("data").innerHTML = list;
}

function deleteNotes(i) {
    noteList.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(noteList));
    displayNotes();
}
