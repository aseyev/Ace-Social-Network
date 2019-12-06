import React from "react";
import * as axios from "axios";
// import MyPosts from "./MyPosts/MyPosts";
// import Post from "../Profile/MyPosts/Post/Post";
import s from "./Users.module.css";
import userTemplatePic from "../../assets/images/cat-avatar.png"

class Users extends React.Component {
    constructor (props) {
        super(props);  //remember where props inherited (from React.Component)

        // if (this.props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    // } 

}
    render () {
        return <div className={s.usersBG}>
        {
            this.props.users.map(u =>
                <div key={u.id} className={s.userBlock} >
                    <div className={s.userLeft} >
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userTemplatePic} alt={u.name}/>
                            

                        </div>
                        <div>
                            {u.follow
                                ? <button onClick={() => { this.props.unfollow(u.id) }} >unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }} >follow</button>
                            }
                        </div>

                    </div>
                    <div>
                        <div className={s.userCenter}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.userRight}>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </div>
                    </div>
                </div>
                    )// end of mapping
                }
            </div>
}
    }

    

export default Users;
