import './App.css';
import PDUGroup from './components/PduGroup';
import { DataFormat, MinerI } from './types/types';
import data from './data/miners.json'

function App() {
  const containerData: DataFormat = data;
  const values: MinerI[] = containerData["19"].values;
  
  // Group data by PDU
  const groupByPdu = values.reduce((acc: Record<number, MinerI[]>, miner: MinerI) => {
    if (miner.s !== undefined) {
      acc[miner.pdu] = acc[miner.pdu] || [];
      acc[miner.pdu].push(miner);
    }
    return acc;
  }, {});

  return (
    <div className="App">
      <div className="container">
        <div className="container-title">
          <span className="title-text">{containerData["19"].name}</span>
        </div>
        <div className="pdu-container">
          {Object.entries(groupByPdu).map(([pduKey, miners]) => (
            <PDUGroup key={pduKey} pduKey={pduKey} miners={miners} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
