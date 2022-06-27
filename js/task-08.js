const form = document.querySelector(".login-form");

form.addEventListener("submit", formEl);

function formEl(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "") {
    return alert("Потрібен Email");
  } else if (password.value === "") {
    return alert("Потрібен password");
  }
  const obj = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  console.log(obj);
  event.currentTarget.reset();
}

// formEl.addEventListener("input", onFormEl);

// function onFormEl(event) {
//   const formElemets = event.currentTarget.elements;

//   const emeil = formElemets.email.value;
//   const password = formElemets.password.value;

//   const elementFor = { emeil, password };

//   console.log(elementFor);

//   event.perentDefault();
//   console.log(event.currentTarget);
// }
//     if (email.value === "" || password.value === "") {
//         return alert("Напиши Щось в поле");
// }

//     const {
//         element: { email, password },
//     } = event.currentTarget;

//
//     }
// };
//   });
// console.log(email.value, password.value);
//   event.currentTarget.reset();
