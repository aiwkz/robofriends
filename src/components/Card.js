import React  from "react";

const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br3 ma3 grow bw2 shadow-5'>
            <img 
                className='w-60'
                alt='robot' 
                src={`https://robohash.org/${id}`} 
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
