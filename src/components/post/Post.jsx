import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"
import { useState } from "react";


export default function Post({post}) {

    const [like, setlike] = useState(post.like);
    const [isLinked, setIsLinked] = useState(false);

    const likeHandler = ()=>{
        setlike(isLinked ? like-1 : like+1)
        setIsLinked(!isLinked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopleft">
                    <img className='postProfileImg'
                     src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} 
                     alt="" />
                    <span className="postUserName">
                        {Users.filter((u)=> u.id === post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <spam className="postText">{post?.desc}</spam>
                <img className='PostImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler} />
                    <img className='likeIcon    ' src="/assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLinkeCounter">{like}people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
