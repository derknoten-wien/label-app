import React, {useState} from 'react';
import SignPdf from "./SignPdf";



export default function SignForm() {
    const [dataArrays, setDataArray] = useState([{  product: "Produkt", 
                                                    product_id:'p0',
                                                    subtitle:'Untertitel',
                                                    subtitle_id:'s1',
                                                    position: 0}]);
    const [renderState, setRenderState] =useState(0);
    const [submit, setSubmit] = useState(false);


  
    const handleDataChange = (event)=>{
        if(submit)setSubmit(false);
        event.preventDefault();
        const pos = event.target.attributes.position.value;
        const type = event.target.attributes.type.value;
        let object = dataArrays;
        object[pos][type]=event.target.value;
        setDataArray(object);
        setRenderState(renderState+1);
    }

    const addFields = ()=>{
        if(submit)setSubmit(false);
        let array = {   product:'Produkt',
        product_id: 'p' +dataArrays.length,
        subtitle:'Untertitel',
        subtitle_id: 's'+dataArrays.length,
        position: dataArrays.length};
        setDataArray(dataArrays.concat(array)); 
              
    }

    const removeFields = (event)=>{
        if(submit)setSubmit(false);
        let array = dataArrays;
        let pos = event.target.attributes.position.value;
        array.splice(pos,1);
        setDataArray(array);
        setRenderState(renderState +1);
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      setSubmit(true);
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                {dataArrays.map(item=>(
                    <div>
                    <textarea value={item.product} onChange={handleDataChange} key={item.product_id} position={item.position} type='product'></textarea><button onClick={removeFields} position={item.position}>-</button><br/>
                    <textarea value={item.subtitle} onChange={handleDataChange} key={item.subtitle_id} position={item.position} type='subtitle'></textarea><br/>      
                    </div>
                ))}
                <button onClick={addFields}>+</button>
                <input type="submit" value="Drucken!"></input>
                <SignPdf submit={submit} data={dataArrays}></SignPdf>
            </form>
        </div>
    )
}
