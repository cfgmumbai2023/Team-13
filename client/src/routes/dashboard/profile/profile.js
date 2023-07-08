const Profile = (props) => {
  return (
    <>
    { props.data &&
        <div>
          <div className="image"><image src={props.data.imageLink} /></div>
          <div className="name">{props.data.firstName + " " + props.data.lastName}</div>
          <div className="age">{props.data.age}</div>
          <div className="email">{props.data.emailID}</div>
        </div>
    }
    </>
  )
};

export default Profile;
