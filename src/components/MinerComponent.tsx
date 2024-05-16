import { MinerI } from '../types/types';

function Miner(props: { miner: MinerI }) {
  const getBackgroundColor = (s: number): string => {
    switch (s) {
      case 10: return '#00cc00';
      case 20: return '#668cff';
      case 30: return '#ffcc00';
      case 40: return 'orange';
      case 50: return '#ff8566';
      case 60: return 'red';
      default: return 'transparent';
    }
  };

  const backgroundColor: string = props.miner.s !== undefined ? getBackgroundColor(props.miner.s) : 'transparent';

  const displayMinerData = (): void => {
    alert(`
      TH5s: ${props.miner.TH5s},
      THAvg: ${props.miner.THAvg},
      tB: ${props.miner.tB},
      frequency: ${props.miner.freq},
      w: ${props.miner.w},
      s: ${props.miner.s},
      pdu: ${props.miner.pdu},
      port: ${props.miner.port},
    `);
  };

  return (
    <div className="miner" style={{ backgroundColor: backgroundColor }} onClick={displayMinerData}>
      {props.miner.port}
    </div>
  );
}

export default Miner;