import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../dataComponents/user.json';
import data from '../dataComponents/data.json';
import friends from '../dataComponents/friends.json';
import transaction from '../dataComponents/transactions.json';

export const App = () => {
    return (
        <>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
                stats={user.stats}
            />

                <Statistics
                title="Upload stats"
                stats={data} />
           
        
            
            {friends.map(friend => (
                <FriendList
                    key={friend.id}
                friends={friend} />
            ))}
           
            
                <TransactionHistory
                items={transaction} />
            
            
        </>
    )
};