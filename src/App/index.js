import React, {Component} from 'react'

import LastBlogPost from '../routes/LastBlogPost'

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className="App" style={{height: '100%', width: '100%'}}>
        <LastBlogPost />
      </div>
    )
  }
}

export default App
