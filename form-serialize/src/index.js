window.onload = function () {
  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(serialize(form));
  });
};

function serialize(form) {
  const fields = {};
  let field = null;

  for (let i = 0, len = form.elements.length; i < len; i++) {
    field = form.elements[i];

    switch (field.type) {
      case undefined:
      case "file":
      case "submit":
      case "reset":
      case "button":
        break;

      case "radio":
      case "checkbox":
        if (!field.checked) {
          break;
        }

      default:
        if (field.name.length) {
          fields[field.name] = field.value;
        }
    }
  }

  return fields;
}
