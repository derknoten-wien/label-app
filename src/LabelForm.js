import React from 'react'
import {useState} from 'react'
import LabelPdf from './LabelPdf.js'

export default function LabelForm() {
    const [product, setProduct] = useState('Produkt');
    const [subtitle, setSubtitle] = useState('Untertitel');
    const [ammount, setAmmount] = useState('0')
    const [submit, setSubmit] = useState(false);
  
  
    const handleProductChange = (event)=>{
      if(submit === false){
        setProduct(event.target.value);
      }else{
        setSubmit(false);
        setProduct(event.target.value);
      }
      
    }
    const handleSubtitleChange = (event)=>{
      if(submit === false){
        setSubtitle(event.target.value);
      }else{
        setSubmit(false);
        setSubtitle(event.target.value);
    }
  }
    const handleAmmountChange = (event)=>{
      if(submit === false){
        setAmmount(event.target.value);
      }else{
        setSubmit(false);
        setAmmount(event.target.value);
    }
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      setSubmit(true);
    }
  
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea value={product} onChange={handleProductChange}></textarea>
                <textarea value={subtitle} onChange={handleSubtitleChange}></textarea>
                <label>Anzahl:</label>
                <input type="text" pattern="[0-9]*"value={ammount} onChange={handleAmmountChange}></input>
                <input type="submit" value="Drucken!"></input>
            </form>
            <LabelPdf submit={submit} product={product} subtitle={subtitle} ammount={ammount}></LabelPdf>
        </div>
    )
}
