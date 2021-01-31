export const fetchAll = (callback) => {
  fetch("http://localhost:8080/feed/countries", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      callback(responseData.countries);
    })
    .catch(err => {
      throw err;
    })
}

export const getActivities = (callback) => {
  fetch("http://localhost:8080/feed/activities", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(responseData => { 
      callback(responseData.activities);
    })
    .catch(err => {
      throw err;
    })
}

export const postActivity = (props) => {
  fetch('http://localhost:8080/feed/createActivities', {
      method: 'POST',
      body: JSON.stringify({
        text: props.myText,
        tags: props.tags
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(resData => console.log(resData.message))
    .catch(err => console.log(err));
}