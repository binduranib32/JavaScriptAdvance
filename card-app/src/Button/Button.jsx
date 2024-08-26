import styles from './Button.module.css'

function Button(){
    return(
        //using external css className declaration
   // <button className="button" >Click Me</button>
     
    //using modules css className declaration
    <button className={styles.button} >Click Me</button>
  
    );
}

export default Button