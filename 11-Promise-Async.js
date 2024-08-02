//Activity-1
//Task-1
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 2000);
});
p.then((messagge) => {
  console.log(messagge);
});

//task-2

const p2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("problem occured"));
  }, 2000);
});
p2.catch((error) => {
  console.error(error.message);
});

//Activity-2• Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
//Task-3
function fetchData(data, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

fetchData("fetching data from server 1", 1000)
  .then((message) => {
    console.log(message);
    return fetchData("fetching data from server 2", 2000);
  })
  .then((message) => {
    console.log(message);
    return fetchData("fetching data from server 3", 3000);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message);
  });

//Activity-3
//Task-4
async function delayprint(pr) {
  const result = await pr;
  console.log(result);
}

pr4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("done");
  }, 5000);
});

delayprint(pr4);

//task-5
async function errorhandle(p5) {
  try {
    const result = await p5;
    console.log(result, " ", 1);
  } catch (error) {
    console.log(error, " ", 2);
  }
}

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Full problem");
  }, 5000);
});

errorhandle(p5);

//Activity-4
//Task-6
const api = "https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873";

fetch(api)
  .then((res) => {
    if (!res.ok) {
      console.log("network error  ", res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("problem with the operation", error);
  });

//task-7
async function fetchData7() {
  try {
    const res7 = await fetch(api);

    if (!res7.ok) {
      console.log("network error  ", res7.statusText);
    }
    const data7 = await res7.json();
    console.log(data7);
  } catch (error) {
    console.log("problem with the operation", error);
  }
}
fetchData7();

//Activity-5
//Task-8
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolved 1st promise");
  }, 1000);
});
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolved 2nd promise");
  }, 1000);
});
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolved 3rd promise");
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("all promise resolved");
    values.forEach((value, index) => {
      console.log(`promise ${index + 1}:`, value);
    });
  })
  .catch((error) => {
    console.log("erroroccured");
  });
//Task-9
const promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 4 resolved");
  }, 1000);
});

const promise5 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 5 resolved");
  }, 1000);
});
const promise6 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 6 resolved");
  }, 1000);
});

Promise.race([promise4, promise5, promise6])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
