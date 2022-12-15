import React from 'react';
import {message, notification} from 'antd';

const Keyboard = (props) => {



    const addToExpression = (variable) => {
        var buff = props.expression;
        buff = buff + variable;
        props.changeExpression(buff);
        console.log(buff);
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
           message.success('Ваш запрос обрабатывается')
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
