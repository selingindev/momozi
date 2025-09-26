import './App.css';
import foto from './fotos/momoEeuMURAL5.jpg'
import foto1 from './fotos/momoEeuMural4.jpg'
import f1 from './fotos/f1.jpg'


import Card from './components/card';

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="muralContainer">
          <Card title={"Cinema"} image={foto}></Card>
          <Card title={"Foda"} image={f1}></Card>
          <Card title={"Foda"} image={foto1}></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
