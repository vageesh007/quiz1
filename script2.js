let timeEnd;
function count(s) {
  clearInterval(timeEnd);
  timeEnd = setInterval(() => {
    document.querySelector(".timer").textContent = `00:${s}`;
    s--;
    if (s <= 0) {
      clearInterval(timeEnd);
      document.querySelector(".timer").textContent = "time up";
    }
    if (s <= 30 && s >= 15) {
      document.querySelector(".timer").style.backgroundColor = "#02A4096E";
      document.body.style.backgroundColor = "#CCE2C2";
    }
    if (s <= 14 && s >= 5) {
      document.querySelector(".timer").style.backgroundColor = "#C5B1006E";
      document.body.style.backgroundColor = "#E4E5C7";
    }
    if (s <= 4 && s >= 0) {
      document.querySelector(".timer").style.backgroundColor = "#C50C006E";
      document.body.style.backgroundColor = "#DBADAD";
    }
  }, 1000);
}

const arr = [
  {
    question: "What does 'NaN' stand for in JavaScript?",
    options: [
      "Not a Number",
      "Not a Null",
      "New Array Notation",
      "Number and Null",
    ],
    correct_answer: "Not a Number",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correct_answer: "All of the above",
  },
  {
    question: "Which method is used to parse a string into an integer?",
    options: ["parseFloat()", "toString()", "parseInt()", "Number()"],
    correct_answer: "parseInt()",
  },
  {
    question: "What will `console.log(typeof [])` output?",
    options: ["array", "object", "list", "undefined"],
    correct_answer: "object",
  },
  {
    question: "How can you check if a variable `x` is an array?",
    options: [
      "x.isArray()",
      "typeof x === 'array'",
      "Array.isArray(x)",
      "x instanceof Array",
    ],
    correct_answer: "Array.isArray(x)",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/*", "##", "--"],
    correct_answer: "//",
  },
  {
    question: "What does `null` represent in JavaScript?",
    options: [
      "An empty value",
      "A non-existent object",
      "A variable with no value",
      "Both A and C",
    ],
    correct_answer: "Both A and C",
  },
  {
    question: "What is the result of `5 + '5'` in JavaScript?",
    options: ["55", "10", "NaN", "Error"],
    correct_answer: "55",
  },
  {
    question: "Which function is used to execute code after a certain delay?",
    options: [
      "setTimeout()",
      "setInterval()",
      "clearTimeout()",
      "clearInterval()",
    ],
    correct_answer: "setTimeout()",
  },
  {
    question: "What will `console.log(0 == '0')` output?",
    options: ["true", "false", "undefined", "NaN"],
    correct_answer: "true",
  },
  {
    question: "What does the `this` keyword refer to in a method?",
    options: [
      "The method itself",
      "The object the method is a property of",
      "The global object",
      "The function's local scope",
    ],
    correct_answer: "The object the method is a property of",
  },
  {
    question: "How do you create an object in JavaScript?",
    options: [
      "{} syntax",
      "new Object()",
      "Object.create()",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    question:
      "Which operator is used to compare values for both value and type?",
    options: ["==", "=", "===", "!="],
    correct_answer: "===",
  },
  {
    question: "What is the result of `typeof NaN`?",
    options: ["number", "NaN", "undefined", "object"],
    correct_answer: "number",
  },
  {
    question: "How can you add a new property to an object?",
    options: [
      "object.property = value",
      "object['property'] = value",
      "Object.assign(object, {property: value})",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function with private variables",
      "A block of code with its own scope",
      "A function that returns another function",
      "A special type of loop",
    ],
    correct_answer: "A function that returns another function",
  },
  {
    question: "How do you define a function in JavaScript?",
    options: [
      "function name() {}",
      "const name = function() {}",
      "const name = () => {}",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    question: "What is the purpose of the `bind()` method?",
    options: [
      "To bind a function to an object",
      "To create a new function with a specific `this` value",
      "To bind two functions together",
      "Both A and B",
    ],
    correct_answer: "Both A and B",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correct_answer: "pop()",
  },
  {
    question: "How do you convert a string to a number in JavaScript?",
    options: [
      "Number(string)",
      "parseInt(string)",
      "parseFloat(string)",
      "All of the above",
    ],
    correct_answer: "All of the above",
  },
  {
    question:
      "What is the default value of a variable that has not been assigned a value?",
    options: ["undefined", "null", "0", "NaN"],
    correct_answer: "undefined",
  },
  {
    question: "What is the result of `[] == ![]`?",
    options: ["true", "false", "undefined", "TypeError"],
    correct_answer: "true",
  },
  {
    question: "Which method is used to merge two arrays?",
    options: ["concat()", "merge()", "push()", "join()"],
    correct_answer: "concat()",
  },
  {
    question: "What is event delegation?",
    options: [
      "Attaching an event handler to a parent element",
      "Creating custom events",
      "Removing event listeners",
      "Binding events to multiple elements",
    ],
    correct_answer: "Attaching an event handler to a parent element",
  },
  {
    question: "What is the purpose of the `async` keyword?",
    options: [
      "To define a function that returns a promise",
      "To execute code synchronously",
      "To handle synchronous errors",
      "To pause code execution",
    ],
    correct_answer: "To define a function that returns a promise",
  },
];

let para;
let x;

function first(y) {
  count(30);
  document.querySelector(".ques").textContent = arr[y].question;

  document.querySelector(".number").textContent = `${y + 1}/25`;

  document.querySelector(".option1").textContent = arr[y].options[0];
  document.querySelector(".option2").textContent = arr[y].options[1];
  document.querySelector(".option3").textContent = arr[y].options[2];
  document.querySelector(".option4").textContent = arr[y].options[3];

  para = document.querySelectorAll("p");

  for (const e of para) {
    if (e.innerText === arr[y].correct_answer) {
      x = "#" + e.parentElement.id;
      // console.log(e.parentElement);
    }
  }
}
first(0);

var a = 1;
let interval;
let c;

function start(a) {
  interval = setInterval(() => {
    count(30);

    document.querySelector(".ques").textContent = arr[a].question;
    if(a==1){
      a++;
    }
      
    document.querySelector(".number").textContent = `${a}/25`;

    document.querySelector(".option1").textContent = arr[a].options[0];
    document.querySelector(".option2").textContent = arr[a].options[1];
    document.querySelector(".option3").textContent = arr[a].options[2];
    document.querySelector(".option4").textContent = arr[a].options[3];
    a++;

    // para = document.querySelectorAll("p");
    // for (const e of para) {
    //   if (e.innerText === arr[a].correct_answer) {
    //     x = "." + e.parentElement.className;
    //     console.log(e.parentElement);
    //   }
    // }
  }, 30000);
}
start(a);
let counter = 0;

document.querySelector(".option1").addEventListener("click", (event) => {
  if (event.currentTarget.innerText !== arr[a - 1].correct_answer) {
    event.currentTarget.parentElement.style.border = "4px solid red";
  } else {
    counter++;
  }
  document.querySelector(x).style.border = "4px solid green";
  a++;
  timeout();
});

document.querySelector(".option2").addEventListener("click", (event) => {
  if (event.currentTarget.innerText !== arr[a - 1].correct_answer) {
    event.currentTarget.parentElement.style.border = "4px solid red";
  } else {
    counter++;
  }
  document.querySelector(x).style.border = "4px solid green";
  a++;
  timeout();
});

document.querySelector(".option3").addEventListener("click", (event) => {
  if (event.currentTarget.innerText !== arr[a - 1].correct_answer) {
    event.currentTarget.parentElement.style.border = "4px solid red";
  } else {
    counter++;
  }
  console.log(event.currentTarget.innerText);
  console.log(arr[a - 1].correct_answer);

  document.querySelector(x).style.border = "4px solid green";
  a++;
  timeout();
});

document.querySelector(".option4").addEventListener("click", (event) => {
  if (event.currentTarget.innerText !== arr[a - 1].correct_answer) {
    event.currentTarget.parentElement.style.border = "4px solid red";
  } else {
    counter++;
  }
  document.querySelector(x).style.border = "4px solid green";
  a++;
  timeout();
});

var marks;

function timeout() {
  setTimeout(() => {
    let list = document.querySelectorAll(".ans-tag");
    list.forEach((e) => {
      e.style.border = "3px solid #D9D9D9";
    });
    if (a <= 25) {
      clearInterval(timeEnd);
      clearInterval(interval);
      first(a - 1);
      start(a);
      if (a == 25) {
        document.querySelector(".next").textContent = "Submit";
      }
    } else {
      localStorage.setItem("quizMarks", counter);
      window.location.href = "../third-page/index3.html";
    }
  }, 1000);
}

document.querySelector(".next").addEventListener("click", () => {
  if (a < 25) {
    clearInterval(timeEnd);
    clearInterval(interval);
    first(a);
    start(a + 1);
    if (a == 24) {
      document.querySelector(".next").textContent = "Submit";
    }
    a++;
  } else if (a == 25) {
    localStorage.setItem("quizMarks",counter);
    window.location.href = "../third-page/index3.html";
  }
});
