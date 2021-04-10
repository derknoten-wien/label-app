import React from 'react';
import LabelForm from "./LabelForm";
import SignForm from "./SignForm";

export default function Content(props) {
    console.log(props.mode); 
    if(props.mode===true){
        return (
            <SignForm></SignForm>
        )
    }else{
        return(
            <LabelForm></LabelForm>
        )
    }

}
