import promptSync from "prompt-sync";

const input = promptSync();

function printInfo() {
  console.log("Contact Management System");
  console.log("-------------------------");
  console.log("1. Add a Contact");
  console.log("2. Delete a Contact");
  console.log("3. View a Contact");
  console.log("4. Search Contacts");
  console.log("5. Exit");
}

function addContact() {
  const name = input("Name: ");
  const email = input("Email: ");
  const contact = {
    name: name,
    email: email,
  };

  contacts.push(contact);
  console.log("Added!");
}

function deleteContact() {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log((i + 1).toString() + ":", contact.name);
  }
  const number = parseInt(input("Enter an ID: "));
  if (isNaN(number) || number > contacts.length) {
    console.log("Invalid");
    return;
  }

  contacts.splice(number - 1, 1);
  console.log("removed.");
}

function listContacts(contacts) {
  /*   for (let i = 0; i<contacts.length; i++) {
        console.log(contacts[i]);
    } */

  if (contacts.length == 0) {
    console.log("Your contact list is empty!");
  }

  for (let contact of contacts) {
    console.log("--------------------");
    console.log("Name:", contact.name);
    console.log("Email:", contact.email);
  }
}

function searchContact() {
  const searchString = input("Search: ").toLowerCase();

  const result = [];
  for (const contact of contacts) {
    const contactLower = contact.name.toLowerCase();
    if (contactLower.includes(searchString)) {
      result.push(contact);
    }
  }

  listContacts(result);
}

printInfo();

const contacts = [];
let status = true;

while (status) {
  const number = input("Enter (1-5): ");
  console.log();
  switch (number) {
    case "1":
      addContact();
      break;
    case "2":
      deleteContact();
      break;
    case "3":
      listContacts(contacts);
      break;
    case "4":
      searchContact();
      break;
    case "5":
      status = false;
      break;
    default:
      console.log("Unknown");
      break;
  }
}
