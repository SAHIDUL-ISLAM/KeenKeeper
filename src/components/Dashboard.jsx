import FriendsCard from './FriendsCard';
import friends from '../../public/friends.json';

const Dashboard = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 px-4'>
                {friends.map(person => <FriendsCard key={person.id} person={person}/>)}
            </div>
        </div>
    );
};

export default Dashboard;