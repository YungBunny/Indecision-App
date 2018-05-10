console.log('App.js is running!');

// JSX - Javacript XML (javascript syntax extension, new way to define templates)

/*
const user = {
    name: 'Chanel',
    age: 25,
    location: 'London town'
};

template one
var userName = 'Chanel';
var userAge =  25;
var userLocation = 'London';

function getLocation(location) {
    if (location) {
        return <p>Location : {location}</p>;
    } 
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
*/

const app = {
    title: 'fumanity',
    subtitle: 'where fashion meets humanity',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  // preventDefault will do rest of function and not refresh right away
  // want to reference this function, not call it  
  const option = e.target.elements.option.value;

  if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      renderForm();
  }
};

const removeAll = () => {
    app.options = [];
    renderForm();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0)  ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderForm();