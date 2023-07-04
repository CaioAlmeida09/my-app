import React from "react"
import {Button} from "./style"


function ButtonFunction({ children, ...props}){
return( <Button {...props}> {children} </Button>)
}

export default ButtonFunction