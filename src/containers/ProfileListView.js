import React from 'react';
import axios from 'axios';
import Profiles from '../components/Profiles';

class ProfileList extends React.Component {

    state = {
        profile: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/profile/')
            .then(res => {
                this.setState({
                    profile: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Profiles data={this.state.profile} />
                <br />
            </div>
        )
    }
}

export default ProfileList;