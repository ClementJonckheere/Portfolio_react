import React from 'react'

export default function Cell({details,updateFlag,revealcell}) {
    const style={
        cellStyle:{
            width:40,height:40,backgroundColor:'#bdc3c7',border:'1px solid white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            cursor:'pointer',
        },
    }
    
    return (
        <div style={style.cellStyle} onClick={()=>{revealcell(details.x,details.y)}} onContextMenu={(e)=>updateFlag(e,details.x,details.y)}>
            {details.revealed ? details.value : ""}
        </div>
    )
}