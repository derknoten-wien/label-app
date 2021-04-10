import React from 'react'
import { Page, Text, View, Image, Font, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import logo from './img/logo.png';
import bradley from "./img/bradhitc_bold.ttf";

export default function SignPdf(props) {
    Font.register({family: "Bradley", src: bradley});

    const data = props.data;
    const styles = StyleSheet.create({
        page:{
            maxHeight: "100%",
            maxWidth: "100%",
            display:"flex",
            justifyContent: "flex-start",
            alignContent: "center",
            fontFamily: "Bradley",
            marginLeft: "5px"
          },
          table: {
            display: "table",
            maxWidth: "100%"
          },
          tableRow:{
            margin: "20px",
            flexDirection: "row",
            flexWrap: "wrap"
          },
          tableCell:{
            width: "50%",
            display: "table",
            justifyContent: "center",
            marginBottom: "10px"
          },
          logo:{
            width: "20%",
            height: "auto",
            margin: "auto"
          },
          text:{
            display:"flex",
            justifyContent: "center",
            textAlign: "center",
          },
          ouvertura:{
            fontSize: "18"
          },
          product:{
            fontSize: 20
          },
          subtitle:{
            maxWidth: "100%",
            fontSize: 14
          }
  
    });

    const Labeldoc = () =>{
        return(
            <Document>
                <Page size="A4" orientation="landscape" style={styles.page}>
                    <View style={styles.table}>
                        
                    <View wrap={false} style={styles.tableRow}>
                                    {data.map((item)=>{

                                        return(
                                            <View style={styles.tableCell}>
                                                <Image src = {logo} style={styles.logo}></Image>
                                                <View style={styles.text}>
                                                    <Text style={styles.ouvertura}>OUVERTURA</Text>
                                                    <Text style={styles.product} wrap="true">{item.product}</Text>
                                                    <Text style={styles.subtitle} wrap="true">{item.subtitle}</Text>
                                                </View>
                                            </View>
                                        
                                        );
                                    } )}
                    </View>           
                            
                    
                    

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
