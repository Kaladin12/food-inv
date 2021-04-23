import {db} from '../firebase';
import {useState, useEffect} from 'react'

const ZeroExistencies = () => {
    const [items, setItems] = useState([]);

    const getItems = async () =>{
        db.collection('items').onSnapshot((qS) => {
            const docs = []
            qS.forEach(query => {
                if (query.data().quant===0){
                    docs.push({...query.data(), id:query.id})
                }
            })
            setItems(docs);
        })
        
    }

    const addQuant = async (item) => {
        const a = [{...item}];
        a[0].quant++;
        let changed = [...items]
        let i = 0;
        changed.forEach(ind => {
            if (ind.id===a[0].id){
                changed[i] = a[0]
            } i++;
        })
        setItems([...changed])
        await db.collection('items').doc(a[0].id).update(a[0]);
    }


    useEffect(()=>{
        getItems();
    }, []);

    return ( 
        <div> 
           <div className="row">
               {items.map(item => {
                   return <div key={item.id} className="col-md-3" border-radius="7%">
                       <div id ="ups" className="card text-white bg-primary mb-2">
                        <div className="card-body ">
                            <h3 >{item.name}</h3>
                            <h4 className="lead">Existencias: {item.quant}</h4>
                            <div className="d-flex justify-content-between">
                                <i className="material-icons text-danger" onClick={ ()=>{
                                     addQuant(item)}
                                    }>add_circle</i>
                            </div>
                            </div>
                            <hr className="my-2"/>
                            <div className="polaroid">
                                <img width="100%" className="imgItem" src={item.url} alt=""/>
                            </div>

                        </div>
                   </div>
               })}
            </div>    
       </div>
    );
}
 
export default ZeroExistencies;