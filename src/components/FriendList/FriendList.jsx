import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            
                <FriendListItem key={friends.id}
                    avatar={friends.avatar}
                    name={friends.name}
                    isOnline={friends.isOnline}
                />
            
            
</ul> 
    )
}

FriendList.propTypes = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
    }),
}