import React from 'react'
const Pagination = (props) => {
  function paginationClicked(index) {
    props.paginationClicked(index+1)
  }
  const buttons = []
  for(let i=0; i<props.totalCountries/props.pageSize; i++) {
    const attrs = {}
    if (props.page === i+1) {
      attrs.disabled = "disabled"
    }
    buttons.push(<button key={i} {...attrs} onClick={()=>paginationClicked(i)}>{i+1}</button>)
  }
  return (
    <div className="fr">
      {buttons.map(button => button)}
    </div>

  )
}

export default Pagination