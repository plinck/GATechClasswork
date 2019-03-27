// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉

const logMessage = message => {
  console.log(message ? message : "Hello World!");
};

logMessage("bye");

// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)

const logTired = (beenWorkingAllDay) => {
  let message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";

  console.log(message);
};

logTired(true);
