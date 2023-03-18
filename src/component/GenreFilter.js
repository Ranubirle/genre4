import React from 'react'
const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];

function onSearch(){
   
    console.log("user has selected the genre");
   


    }
    const GenreFilter=()=>{

    return (
    <div class="filter">
        <h1>Filter by Genre</h1>
    
        
        <button class="b1" onClick={onSearch}>{genres[0]}</button>&nbsp;&nbsp;
        <button class="b1">{genres[1]}</button>&nbsp;&nbsp;
        <button class="b1">{genres[2]}</button>&nbsp;&nbsp;
        <button class="b1">{genres[3]}</button>&nbsp;&nbsp;
        <button class="b1">{genres[4]}</button>&nbsp;&nbsp;
        <button class="b1">{genres[5]}</button>&nbsp;&nbsp;
        <button class="b1">{genres[6]}</button>&nbsp;&nbsp;
        <button class="b1">{genres[7]}</button>&nbsp;&nbsp;
        <button class="b1">{genres[8]}</button>
      
    </div>
  
  )
    }


export default GenreFilter
