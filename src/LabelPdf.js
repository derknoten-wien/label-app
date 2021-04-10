import React from 'react'
import { Page, Text, View, Image, Font, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import logo from './img/logo.png';
import bradley from "./img/bradhitc_bold.ttf";

export default function LabelPdf(props) {
    Font.register({family: "Bradley", src: bradley})

    let subFontSize = null;
    const numSWords = props.subtitle.split(' ').length;
    if((numSWords >= 1)&&(numSWords <= 3)){
      subFontSize = 12;
    }else if((numSWords>=4)&&(numSWords<=6)){
      subFontSize = 8;
    }else if(numSWords>6){
      subFontSize = 6;
    }

    let prodFontSize = null;
    const numPWords = props.product.split(' ').length;
    const numChar = props.product.split("").length;
    if((numPWords === 1)&&(numChar <= 8)){
      prodFontSize = 18;
    }else if((numPWords>1)||(numChar<=8)){
      prodFontSize = 12;
    }else if(numChar>12){
      prodFontSize = 10;
    }else if (numChar>18){
      prodFontSize = 8;
    }

    let rows = [];
    let nRows = Math.ceil(props.ammount / 4);
    for(let i=0;i<nRows;i++){
      rows.push(1);
    }

    const columns = [1,1,1,1];

    const styles = StyleSheet.create({
        page:{
          maxHeight: "100%",
          maxWidth: "100%",
          display:"flex",
          justifyContent: "flex-start",
          alignContent: "center",
          fontFamily: "Bradley",
          marginLeft: "10px"
        },
        table: {
          display: "table",
          maxWidth: "100%"
        },
        tableRow:{
          marginTop: "10px",
          flexDirection: "row"
        },
        tableCol:{
          width: "25%"
        },
        tableCell:{
          display: "table",
          flexDirection: "row",
          justifyContent: "flex-start"
          //margin: "10px"
        },
        logo:{
          maxWidth: "34%",
          height: "auto",
          margin: "0",
          objectFit: "scale-down"
        },
        text:{
          display:"flex",
          justifyContent: "flex-start",
          textAlign: "center",
          maxWidth: "60%",
          position: "relative"
        },
        ouvertura:{
          fontSize: "18"
        },
        product:{
          fontSize: prodFontSize
        },
        subtitle:{
          maxWidth: "100%",
          fontSize: subFontSize
        }

      });
      
    
      const Labeldoc = () =>{
        return(
          <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
              <View style={styles.table}>
                {rows.map(()=>{
                  return(
                    <View wrap={false} style={styles.tableRow}>
                      {columns.map(()=>{
                        return(
                          <View style={styles.tableCol}>
                            <View style={styles.tableCell}>
                              <Image src = {logo} style={styles.logo}></Image>
                              <View style={styles.text}>
                                <Text style={styles.ouvertura}>OUVERTURA</Text>
                                <Text style={styles.product}>{props.product}</Text>
                                <Text style={styles.subtitle} wrap="true">{props.subtitle}</Text>
                              </View>
                            </View>
                          </View>
                        )
                      })}
                    </View>
                  );
                }
                )}

             </View>
            </Page>
          </Document>
        )
    
      }

  if(!props.submit){
    return (
      <div>
      </div>
  )
  }else if(props.submit){
    return(
      <PDFViewer><Labeldoc/></PDFViewer>
    )
    
  }
}




