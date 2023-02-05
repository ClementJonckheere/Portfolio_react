import React,{useState,useEffect} from "react";
import Cell from "./Cell";
import CreateBoard from "./CreateBoard";
import { revealed } from "./reveal";


function Board() {
    const [grid,setGrid]=useState([]);
    const [nonMinecount,setNonMinecount]=useState(0);
    const [mineLocation,setmineLocation]=useState([]);
    
    const style={
        display : 'flex',
        flexDirection : 'row',

    }

    useEffect(()=>{
        const freshBoard = () => {
            const newBoard=CreateBoard(10,10,20);
            setNonMinecount(10*10-20);
            // console.log(newBoard.mineLocation);
            setmineLocation(newBoard.mineLocation);
            setGrid(newBoard.board);
        }
        freshBoard();
    },[]);
    
    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        // deep copy of the object
        let newGrid=JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged=true;
        console.log(newGrid[x][y]);
        setGrid(newGrid);
    }
    //revealing all cells and the minelocation with all mines when clicked on mines
    const revealcell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            alert("you clicked mine")
            for(let i=0;i<mineLocation.length;i++){
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed=true;
            }
            setGrid(newGrid);
        }
        else{
            let revealedboard=revealed(newGrid,x,y,nonMinecount);
            setGrid(revealedboard.arr);
            setNonMinecount(revealedboard.newNonMines);
        }
        
    }
    
    return (
        <div className="parent">
            <div style={{color:"white",textAlign:"center",fontSize:"35px"}}>Non-Mines : {nonMinecount}</div>
            <div className="board-game">
                
                {grid.map((singlerow,index1)=>{
                    return (
                        <div style={style} key={index1}>
                            {singlerow.map((singlecol,index2)=>{
                            return  <Cell details={singlecol} key={index2} updateFlag={updateFlag} revealcell={revealcell}/>
                            })}
                        </div>
                    )
                })}
            </div>
          
        </div>
    ) 
    
}
export default Board;
