import Card from "./Card";
function Daily({data}) {
  console.log(data);
  return (
    <div className="daily container">
        {
          data.slice(0,7).map((day)=>(
            <Card key={day.dt} data={day}/>
          ))
        }
    </div>
  )
}

export default Daily