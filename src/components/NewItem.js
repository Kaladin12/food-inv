import {useState} from 'react'

import {db} from '../firebase';

const NewItem = () => {
    const [values, setValues] = useState({
        name : '',
        quant : 0,
        url: ''
    });

    const addTask = async (obj) =>{
        await db.collection('items').doc().set(obj);
        console.log('newTaskAdded');

    //{creating &&  <div> <div className="row"> <NewItem addOrEdit={(obj)=>{addTask(obj) }}/></div> </div>} 
    }

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        await addTask(values);
        setValues({name : '', quant : 0, url: ''});
    }

    const handleInputOnChange = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    }

    return ( 
       <div>
            <form className = "card card-body" onSubmit={handleSubmit}>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">assignment</i>
                    </div>
                    <input value ={values.name}  onChange={handleInputOnChange}  type="text" className="form-control" placeholder="Atún" name="name"/>
                </div>

                <div className="form-group input-group">
                        <div className="input-group-text bg-light">
                            <i className="material-icons">plus_one</i>
                        </div>
                        <input value ={values.quant}  onChange={handleInputOnChange} type="text" className="form-control" placeholder="1" name="quant"/>
                    </div>
                <div className="form-group input-group">
                    <div className="input-group-text bg-light">
                        <i className="material-icons">wallpaper</i>
                    </div>
                    <input value ={values.url} onChange={handleInputOnChange} type="text" className="form-control" placeholder="https://www.google.com/" name="url"/>
                </div>
                <button className="btn btn-primary">
                    Guardar
                </button>
            </form>
       </div>
     );
}
 
export default NewItem;