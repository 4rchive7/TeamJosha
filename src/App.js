import "./App.css";
import { useEffect, useState } from "react";
import { Box, Paper, Button, Grid, makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
  CalcRoot:{
    height:'70vh',
    width:'100vw',
    backgroundColor : '#8BA6E9'
  },
  DisplayArea: {
    marginTop: theme.spacing(2),
    height:'10vh',
    width:'92vw',
    backgroundColor : '#D7B7BC'
  }, 
  Display:{
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontSize:'36px',
    fontWeight:'bold',
    height:'92%',
    width:'96%',
    backgroundColor: '#F7E4E0' 
  },
  KeyArea: {
    paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(2),
    height:'54vh',
    width:'92vw',
    backgroundColor : '#D7B7BC'
  },  
  KeyFrame : {
    height:'23%',    
    width:'96%',
  },
  Key: {
    fontSize:'30px',
    
    height:'86%',
    width:'23%',
    backgroundColor : '#F7E4E0'
  },
}))

/**
 * 과제
 * 1. Display 영역 왼쪽에 연산자를 표시하시오.
 * 2. KeyArea에 한 줄을 더 추가하고 4개의 버튼을 추가하고 연산이 가능하도록 하시오.
 *    ('소수점', '제곱연산', '지수연산', '루트')
 */

const App = () => {

  const classes = useStyles();
  const firstLine = ['C', 0, '=', '/'];
  const secondLine = [1, 2, 3, 'x'];
  const thirdLine = [4, 5, 6, '-'];
  const fourthLine = [7, 8, 9, '+'];

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [operand, setOperand] = useState(null);
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(()=>{
    if(firstValue != 0 && secondValue == 0){
      setDisplayValue(firstValue);
      setSecondValue(0);
    }
    if(firstValue != 0 && secondValue != 0){
      setDisplayValue(secondValue);
    }
  },[firstValue, secondValue]);

  const onClickHandler = event => {
    if(event.target.id === 'C'){
      setFirstValue(0);
      setSecondValue(0);
      setDisplayValue(0);
      setOperand(null);
    }else if(event.target.id === '='){
      if(operand == '+'){
        setFirstValue(firstValue + secondValue);
        setSecondValue(0);
      }else if(operand == '-'){        
        setFirstValue(firstValue - secondValue);
        setSecondValue(0);
      }else if(operand == 'x'){
        setFirstValue(firstValue * secondValue);
        setSecondValue(0);
      }else if(operand == '/'){
        setFirstValue(firstValue / secondValue);
        setSecondValue(0);
        
      }
    }else if(event.target.id === '+'){
      setOperand('+');
    }else if(event.target.id === '-'){
      setOperand('-');
    }else if(event.target.id === 'x'){
      setOperand('x');
    }else if(event.target.id === '/'){
      setOperand('/');
    }else{
      !operand 
      ? setFirstValue(firstValue * 10 + parseInt(event.target.id)) 
      : setSecondValue(secondValue * 10 + parseInt(event.target.id));
    }
    
  }

  return (
    <>
      <Grid
        container
        className={classes.CalcRoot}
        justifyContent='center'
        alignItems='flex-start'
      >
        <Grid
          container
          className={classes.DisplayArea}
          justifyContent='center'
          alignItems='center'

        >
          <Grid            
            container
            className={classes.Display}
            justifyContent='flex-end'
            alignItems='center'
          >
            {displayValue}
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.KeyArea}
          justifyContent='center'
        >
          <Grid          
            container
            className={classes.KeyFrame}
            direction='row'
            justifyContent='space-around'
            alignItems='center'
          >
            {
              fourthLine.map((node, index) => {
                return(
                  <Grid
                    id={node}
                    container
                    className={classes.Key}
                    justifyContent='center'
                    alignItems='center'
                    onClick={onClickHandler}
                  >
                    {node}
                  </Grid>
                );
              })
            }
          </Grid>
          <Grid          
            container
            className={classes.KeyFrame}
            direction='row'
            justifyContent='space-around'
            alignItems='center'
          >
            {
              thirdLine.map((node, index) => {
                return(
                  <Grid
                    id={node}
                    container
                    className={classes.Key}
                    justifyContent='center'
                    alignItems='center'
                    onClick={onClickHandler}
                  >
                    {node}
                  </Grid>
                );
              })
            }
          </Grid>
          <Grid          
            container
            className={classes.KeyFrame}
            direction='row'
            justifyContent='space-around'
            alignItems='center'
          >
            {
              secondLine.map((node, index) => {
                return(
                  <Grid
                  
                    id={node}
                    container
                    className={classes.Key}
                    justifyContent='center'
                    alignItems='center'
                    onClick={onClickHandler}
                  >
                    {node}
                  </Grid>
                );
              })
            }
          </Grid>
          <Grid          
            container
            className={classes.KeyFrame}
            direction='row'
            justifyContent='space-around'
            alignItems='center'
          >
            {
              firstLine.map((node, index) => {
                return(
                  <Grid                  
                    id={node}
                    container
                    className={classes.Key}
                    justifyContent='center'
                    alignItems='center'
                    onClick={onClickHandler}
                  >
                    {node}
                  </Grid>
                );
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
