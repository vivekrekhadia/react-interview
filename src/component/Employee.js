import './Home.css'
export const Employee = ({ value, setValue }) => {
    return (<div className="Home-container">
    <label>Employee</label>
    <input type="text" style={{ margin: '0 auto', width:'50%'}} className="form-control"value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
    );
  };