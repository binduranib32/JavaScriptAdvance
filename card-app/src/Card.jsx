
import profilePic from './assets/img2.jpg'

function Card() {
    return(
        <div className='card'>
            <img className='card-image' src={profilePic} alt="Profile Pictute"></img>
            <h2 className='card-title' >Card Component...</h2>
            <p className='card-text' >Welcome to Card Component using ReactJS</p>
        </div>
    );
}

export default Card