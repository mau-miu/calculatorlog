import React from 'react';
import {message, notification} from 'antd';
import {countAnd} from "../core";

const Keyboard = (props) => {



    const addToExpression = (variable) => {
        var buff = props.expression;
        buff = buff + variable;
        props.changeExpression(buff);
        console.log(buff);
        console.log('')
    }

    const deleteLastSymbol = () => {
        if(props.expression) {
            var buf = props.expression;
            buf = buf.substring(0, buf.length - 1);
            props.changeExpression(buf);
        }
       else{
           message.error('Пусто!')
        }

    }

    const count = (e) =>{
       if(props.expression)
       {
           if(props.expression.includes('\u2227')){
               const result = countAnd()
               message.success(result)
           }
           else{
               message.success('Ваш ')
           }
       }

        else
           message.error('Пусто!')

    }

    return (
       <>
           <div className="operators">
               {
                   props.variables.map(variable =>
                       <button onClick={()=>{addToExpression(variable)}}>{variable}</button>)}
               <button onClick={()=>{deleteLastSymbol()}}>DEL</button>
           </div>
           <div className="digits">
               {
                   props.operations.map(oper =>
                       <button onClick={()=>{addToExpression(oper)}}>{oper}</button>
                   )}
               <button onClick={()=>{count(props.expression)}}>=</button>
           </div>

       </>

    );
};

export default Keyboard;
