<<<<<<< HEAD
import React from 'react';
import FillerText from "./FillerText"

export default class Webpage extends React.Component{
  render(){
    return(
    	<div>
	        <title> The world's coolest webpage </title>
	          <FillerText />
	          <FillerText />
        </div>
=======
import FillerText from "./FillerText"

class FillerText extends React.Component{
  render(){
    return(
        <title> The worlds coolest webpage </title>
        <FillerText/>
        <FillerText/>
>>>>>>> 0884dbe0dfa7306812806b9461b2d318d126d77d
    )
  }

}
