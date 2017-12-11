import React, {Component} from 'react';
import * as firebase from 'firebase';
import {fire, ref} from './firebase_config.js';

class PostDetailsServices extends Component {

    componentWillMount() {
        var db =firebase.database();
        db.ref("post_details").once("value", function(snap) {
            //success
        }, function (err) {
            //Permission denied
        })
    }
//     constructor(props) {
//         super(props);
//         this.state = {
//             titles: [],
//             authors: [],
//             genres: [],
//             contents: []
//         };
//     }

//     componentWillMount() {
//         let titleRef = fire
//             .database()
//             .ref('post_detials')
//             .orderByKey()
//             .limitToLast(50);
        
//         titleRef.on('child_added', snapshot => {
//             let title = {
//                 text: snapshot.val(),
//                 id: snapshot.key
//             };
//             this.setState({
//                 titles: [title].concat(this.state.titles)
//             });
//         })
//     }

//     addTitle(e) {
//         e.preventDefault(); // <- prevent form submit from reloading the page
//         fire
//             .database()
//             .ref('titles')
//             .push(this.inputEl.value);
//         this.inputEl.value = ''; //<- clear the input
//     }

//     render() {
//         return (
//             <form onSubmit={this
//                 .addTitle
//                 .bind(this)}>
//                 <input type="text" ref={el => this.inputEl = el}/>
//                 <input type="submit"/>
//                 <ul>
//                     {/* Render the list of messages */
//                     this
//                         .state
//                         .titles
//                         .map(title => <li key={title.id}>{title.text}</li>)
// }
//                 </ul>
//             </form>
//         )
//     }
}

export default PostDetailsServices;
