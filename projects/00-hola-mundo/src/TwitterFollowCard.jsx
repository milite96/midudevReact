export function TwitterFollowCard ({ userName, name, isFollowing  }){
    console.log(`is ${userName} following you: ${isFollowing}`);
    
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt="img random" 
            src="https://unavatar.io/kikobeats?ttl=1h" />
            <div className='tw-followCard-info'>
                <strong>{name? name: 'Unknown'}</strong>
                <span className='tw-followCard-infoUserName'>@{userName? userName:'notRegistered'}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>Seguir</button>
        </aside>
    </article> 
    )
}