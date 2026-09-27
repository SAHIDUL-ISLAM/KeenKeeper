import React from 'react';
import Link from 'next/link';
import friends from '../../../public/friends.json';
import FriendsCard from '@/components/FriendsCard';

const cardpage = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 px-4 py-3.5'>
            {friends.map((person) => (
                <Link key={person.id} href={`/card/${person.id}`}>
                    <FriendsCard person={person} />
                </Link>
            ))}
        </div>
    );
};

export default cardpage;