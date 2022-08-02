import { useEffect, useState } from 'react';
import './App.css';

const inicial = {red: 0, blue: 0, green: 0}

function App() {

  const [cor, setCor] = useState({...inicial})
  const [hexa, setHexa] = useState('')
  const {red, blue, green} = {...cor}

  function CorParaHexa(color) {
    var hexadecimal = color.toString(16)
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal
  }
  
  function rgbParaHexa() {
     setHexa("#" + CorParaHexa(red) + CorParaHexa(green) + CorParaHexa(blue))
  }


  useEffect(()=>{
    rgbParaHexa(red,green,blue)

  }, [red,blue,green])




  return (
    <div className="App">
     
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{width: 300, height: 300, backgroundColor: `rgb(${red},${green},${blue})`}} ></div>

        <p>{red}</p>
        <input type={'range'} max={255} step={1} min={0} value={red} onChange={(e) => setCor({...cor, red:Number(e.target.value)})} style={{width: 500, accentColor: '#ff0000'}}/>
        <p>{blue}</p>
        <input type={'range'} max={255} step={1} min={0} value={blue} onChange={(e) => setCor({...cor, blue: Number(e.target.value)})} style={{width: 500, accentColor: '#0000ff'}}/>
        <p>{green}</p>
        <input type={'range'} max={255} step={1} min={0}  value={green} onChange={(e) => setCor({...cor, green: Number(e.target.value)})} style={{width: 500, accentColor:'#39ff14'}}/>
        <p>Hexadecimal: {hexa}</p>

      
      </div>
    </div>
  );
}

export default App;
