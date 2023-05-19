import './rightbar.css'
import {Users} from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
        <div className="brithdayContainer">
            <img className="brithdayImg" src="assets/gift.png" alt="" />
            <span className='birthdayText'>
              <b>Pola Foster</b> and <b>3 other friend have</b> a brithday today .</span>
         </div>
         <img src="/assets/ad.png" alt="" className="rightbarAd" />
         <h4 className="rightbarTitle">Online Friends</h4>
         <ul className="rightbarFriendList">
         {Users.map(u=>(
            <Online key={u.id} user={u}/>
         ))}
         </ul>
      </>
    )
  }

  const  ProfileRightbar = () =>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfod">
            <div className="rightbarInfoItem">
              <span className="rightbarInfokey">City:</span>
              <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfokey">From:</span>
              <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfokey">Relationship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
        </div>
        <h4 className="rightbarTitle">User Information</h4>
        <div className='rightbarFollowings'>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
      )
  }

  return (
    <div className='rigthbar'>
       <div className="rightbarWrapper">
         {profile ? <ProfileRightbar/> : <HomeRightbar/>}
       </div>
    </div>
  )
}
