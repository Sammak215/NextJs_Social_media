const  arrowButton = () => {
    return (
        <>
           <button className="button is-primary button-arrow"> 
    <span>Delete</span>
    <span className="icon is-small">
    <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
        <g class="arrow-head">
          <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="2"/>
        </g>
        <g class="arrow-body">
          <path d="M3.5 4.5H0" stroke="currentColor" stroke-width="2"/>
        </g>
      </svg>    
    </span>
  </button>
  
        </>
     
    )
}

export default arrowButton;