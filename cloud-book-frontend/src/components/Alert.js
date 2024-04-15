import React from 'react'

const Alert = (props) => {
    function capitalize(word) {
        if (word === 'danger') {
            word = 'error';
        }
        let worrd = word;
        return worrd.charAt(0).toUpperCase()+worrd.slice(1)
    }
    return (
     <div style={{height:'28px', padding:'0px'}} className='alert alertFix'>
      {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show alert`} role="alert">
        <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg} 
    </div>}
     </div>
  )
}

export default Alert
