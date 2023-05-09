import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber,multNumber,divNumber} from "./actions/index"
function App() {
  const myState = useSelector((state)=> state. changeTheNumber);
  const myOtherState = useSelector((state)=> state. multTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>
        <a title="Decrement" onClick={()=>dispatch(decNumber())}><span> - </span></a>
        <input name="quantity" typt="text" value={myState}/>
        <a title="Increment" onClick={()=>dispatch(incNumber())}><span> + </span></a>

        <h1>Multiplication/Divide counter</h1>
        <h4>Using React and Redux</h4>
        <a title="Decrement" onClick={()=>dispatch(divNumber())}><span> / </span></a>
        <input name="quantity" typt="text" value={ myOtherState}/>
        <a title="Increment" onClick={()=>dispatch(multNumber())}><span> * </span></a>

    </div>
  );
}

export default App;
