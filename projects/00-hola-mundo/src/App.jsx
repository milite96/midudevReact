import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <div className='App'>
            <TwitterFollowCard name={"Rafael Castro"} isFollowing={false}/>
            <TwitterFollowCard name={"Victor Rodriguez"} userName={"vicrod"} isFollowing/>
        </div>
    )
}