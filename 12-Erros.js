//Activity-1
//Task-1
function ErrorThrow() {
  throw new Error("problem with task 1");
}

function handleError() {
  try {
    ErrorThrow();
  } catch (error) {
    console.log(error.message);
  }
}

handleError();

//task-2

function ErrorThrow2() {
  throw new Error("Denominator can't be zero");
}

function divide(numer, denom) {
  try {
    if (denom == 0) {
      ErrorThrow2();
    } else {
      console.log("result is :", numer / denom);
    }
  } catch (error) {
    console.log(error.message);
  }
}
divide(8, 0);

//Activity-2
//Task-3
try {
  console.log("executed try");
  throw new Error("An error");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("gone through all");
}

//Activity-3
//Task-4
class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "customError";
  }
}

function throrNewError() {
  throw new customError("Custom Error Occured");
}

function handleCustonError() {
  try {
    throrNewError();
  } catch (error) {
    if (error instanceof customError) {
      console.log("customErrorcaught:", error.message);
    } else {
      console.log("random error caught", error.message);
    }
  }
}

handleCustonError();

//task-5

let string = "";
function stringvalidation(string) {
  try {
    if (string.length < 5) {
      throw new Error("String should of min length 5");
    } else {
      console.log(string);
    }
  } catch (error) {
    console.log(error.message);
  }
}

stringvalidation(string);

//Activity-4
//Task-6
function randomPromise() {
  return new Promise((resolve, reject) => {
    const val = Math.random();

    if (val < 0.5) {
      resolve("Promise Resolved Randomly");
    } else {
      reject(new Error("Promise Rejected randomly"));
    }
  });
}

function handlepromise() {
  randomPromise()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

handlepromise();

//Task-7
async function handlePromise2() {
  try {
    let res = await randomPromise();
    console.log(res);
  } catch (error) {
    console.log("catched", error.message);
  }
}

handlePromise2();

//Activity-5
//Task-8

var url = "https://api.sunrisesunse.io/json?lat=38.907192&lng=-77.036873";
function handleUrl() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network Error :", response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("fetch Error :", error.message);
    });
}

handleUrl(url);

//Task-9
async function handleUrl2(url) {
  try {
    const response2 = await fetch(url);

    if (!response2.ok) {
      throw new Error("Network Connection Error", response2.statusText);
    } else {
      const data2 = await response2.json();
      console.log(data2);
    }
  } catch (error) {
    console.log("fetch error:", error.message);
  }
}

handleUrl2(url);
