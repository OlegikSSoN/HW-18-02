function changeTextToCapitalize(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function showPersonalInfo(content, id) {
if (id === 'first_name' || id === 'father_name') {
  content = content[0].toUpperCase() + ".";
}
  const ELEMENT = document.getElementById(`output_${id}`);
  ELEMENT.innerHTML = changeTextToCapitalize(content);
}

function getPersonalInfo(e) {
const VALUE = e.target.value;
const ID_ELEMENT = e.target.id;
showPersonalInfo(VALUE, ID_ELEMENT);
}