const contacts = [];

function updateList() {
  const list = document.getElementById("contactList");
  list.innerHTML = ""; // Clear existing list

  contacts.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

function addContact() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  // Maintain a maximum of 7 contacts
  if (contacts.length >= 7) {
    contacts.shift(); // Remove the first contact
  }

  contacts.push(name); // Add new contact at the end
  updateList();
  input.value = ""; // Clear the input
}

function removeContact() {
  if (contacts.length === 0) {
    alert("The contacts list is already empty.");
    return;
  }

  contacts.pop(); // Remove last contact
  updateList();
}
