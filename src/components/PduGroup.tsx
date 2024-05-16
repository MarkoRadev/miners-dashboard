import { MinerI } from '../types/types';
import MinerComponent from './MinerComponent';

function PDUGroup(props: { pduKey: string; miners: MinerI[] }) {
  let slotsArray: (MinerI | null)[] = [];
  const totalSlotsPerRow = 9;
  const emptySlots = 18 - props.miners.length;
  const firstRow: (MinerI | null)[] = new Array(totalSlotsPerRow).fill(null);
  const secondRow: (MinerI | null)[] = new Array(totalSlotsPerRow).fill(null);

  function fillSlotsArray(): void {
    if (emptySlots < totalSlotsPerRow) {
      // Fill the first row with first 9 - emptySlots miners
      const minersInFirstRow = totalSlotsPerRow - emptySlots;
      for (let i = 0; i < minersInFirstRow; i++) {
        firstRow[i] = props.miners[i];
      }
      // Fill the second row with the rest of the miners
      for (let i = 0; i < props.miners.length - minersInFirstRow; i++) {
        secondRow[i] = props.miners[minersInFirstRow + i];
      }
    } else {
      // Leave first row empty, fill second row with miners
      for (let i = 0; i < props.miners.length; i++) {
        secondRow[i] = props.miners[i];
      }
    }

    slotsArray = [...firstRow, ...secondRow];
  };

  fillSlotsArray();

  return (
    <div className="pdu">
      <div className="pdu-title">PDU {props.pduKey}</div>
      <div className="miners">
        {slotsArray.map((miner, index) => (
          miner ? 
          <MinerComponent key={miner.port} miner={miner} /> : 
          <div key={`empty-${index}`} className="miner-empty" />
        ))}
      </div>
    </div>
  );
}

export default PDUGroup;