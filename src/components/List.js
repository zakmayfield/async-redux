import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchApi } from '../store/actions'

const List = props => {
  useEffect(() => {
    props.fetchApi()
  }, [])

  function getPhoto () {
    props.fetchApi()
  }

  return (
    <main>
      <h2>CATZ</h2>

      {props.isFetching && <h4>Loading...</h4>}

      {props.imageUrl && (
        <div style={{display: 'flex', flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
          <button onClick={getPhoto}>See another</button>
          <img className='catImg' src={props.imageUrl} alt='cat' />
        </div>
      )}

      {props.error && <p>{props.error}</p>}
    </main>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.apiReducer.isFetching,
    imageUrl: state.apiReducer.imageUrl,
    error: state.apiReducer.error
  }
}

export default connect(mapStateToProps, { fetchApi })(List)
