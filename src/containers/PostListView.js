import React from 'react';
import Posts from '../components/Posts';

class PostList extends React.Component {

    state = {
        post: []
    }

    // This needs to be changed to be the selected posts
    async componentDidMount() {
      //axios.get('https://shared-world.appspot.com/api/post') 
      const uid = this.props.match.params.user;
      const countryID = this.props.match.params.country;
      const res = await fetch(`https://shared-world-dataproc.storage.googleapis.com/order/${uid}/${countryID}/result.json`)
      const exampleReader = ndjsonStream(res.body).getReader();

      let result;                
      while (!result || !result.done) {
        result = await exampleReader.read();
        if (result.value) {
          this.setState({
            post: this.state.post.concat(result.value)
          })
        }
      //console.log(result.done, result.value); //result.value is one line of your NDJSON data
      }
    }

    render() {
        return (
            <div>
                <Posts data={this.state.post} />
                <br />
            </div>
        )
    }
}

export default PostList;