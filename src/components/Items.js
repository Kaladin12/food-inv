import {useState, useEffect} from 'react'

import {db} from '../firebase';
const Items = () => {
    const [items, setItems] = useState([]);
    const [mounted, setMounted]= useState(true);

    const getItems = async () =>{
        if (mounted){
            db.collection('items').onSnapshot((qS) => {
                const docs = []
                qS.forEach(query => {
                    if (query.data().quant!==0){
                        docs.push({...query.data(), id:query.id})
                    }
                })
                setItems(docs);
            })
            setMounted(false);
        }
    }
    useEffect(()=>{
        getItems();
    }, []);


    const addOrSubQuant = async (item, isPlus) => {
        const a = [{...item}];
        if (!isPlus){
            if (a[0].quant>0){
                a[0].quant--;
            }
        }
        else{
            a[0].quant++;
        }

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
                                     addOrSubQuant(item, false)}
                                    }>remove_circle</i>
                                <i className="material-icons text-danger" onClick={ ()=>{
                                     addOrSubQuant(item, true)}
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
 
export default Items;