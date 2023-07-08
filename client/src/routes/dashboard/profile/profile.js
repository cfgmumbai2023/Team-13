const Profile=(props)=>{
    return 
    <div>
        <figure>
            <img src={props.link}></img>
        </figure>
        <p>{props.name}</p>
    </div>
}
export default Profile;
