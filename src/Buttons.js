
function Buttons({newHouses}) {
return(
<div className="wrapper">
   <div className="filter-title">
      <h1>Filter by the rooms:</h1>
   </div>
   <div className="buttons-position">
      <button className="btn" onClick={() => newHouses('four')}>4 rooms</button>
      <button className="btn" onClick={() => newHouses('five')}>5 rooms</button>
      <button className="btn" onClick={() => newHouses('six')}>6 rooms</button>
      <button className="btn" onClick={() => newHouses('seven')}>7 rooms</button>
   </div>
</div>
)
}
export default Buttons;