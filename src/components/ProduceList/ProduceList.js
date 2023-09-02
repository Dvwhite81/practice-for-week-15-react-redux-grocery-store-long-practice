import { useSelector } from 'react-redux';
import ProduceDetails from './ProduceDetails';
import './ProduceList.css';

function ProduceList() {
  const produceArr = useSelector(getAllProduce);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export const getAllProduce = (state) => Object.values(state.produce);

export default ProduceList;
