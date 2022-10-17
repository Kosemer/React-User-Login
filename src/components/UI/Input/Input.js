import React, {useRef, useImperativeHandle} from "react";
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  /*useEffect(() => {
    inputRef.current.focus(); // A fókusz elérhető módszer az Input DOM objektumon.
  },[])*/

  const activate = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, ()=> {
    return{
      focus: activate // A focus neve rajtad múlik, lehet kis cica is.
    };
  })

    return ( 
        <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor= {props.id}>{props.label}</label>
        <input
          ref={inputRef}
          type= {props.type}
          id= {props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
     );
})

export default Input;