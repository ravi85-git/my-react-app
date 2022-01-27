import logo from './logo.svg';
import './App.css';
import './styles/output.css';
import Button from './componants/Button/Button';
import HelloWorld from './componants/HelloWorld/HelloWorld';
import Posts from './componants/Posts/Posts';

function datetime(){
  return new Date().toLocaleTimeString();
}

function App() {
  return (
    <div className="container mx-auto">
      {/* <Button name="First" text="Button" />
      <Button name="Second Button" />

      <HelloWorld text="Hello world good morning" />
      <HelloWorld text="Hello world Welcome Raviraj Channel" /> */}

      <Posts />
    </div>
  );
}


export default App;
