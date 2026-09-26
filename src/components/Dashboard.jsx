import FriendsCard from './FriendsCard';

const Dashboard = async() => {
    const res = await fetch("https://keen-keeper-git-main-collaborate2.vercel.app/friends.json");
    const friends = await res.json();
    return (
        <div className=''>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {friends.map(person=> <FriendsCard key={person.id} person={person}/>)}
            </div>
        </div>
    );
};

export default Dashboard;