import Image from "next/image";

const FriendsCard = ({person}) => {
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm items-center text-center p-6">
                <figure className="w-24 h-24 rounded-full overflow-hidden border">
                    <Image src={person.picture}
                        height={96}
                        width={96}
                        alt={person.name}
                        className="object-cover w-full h-full"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{person.name}</h2>
                    <p className="text-gray-400 -mt-3">{person.days_since_contact}d ago</p>
                    <div className="card-actions flex flex-col justify-center items-center">
                        <div className='tags flex gap-1'>
                        {person.tags?.slice(0, 2).map((tag) => (
                                <span key={tag} className="badge bg-emerald-100 text-emerald-700 border-none px-4 py-3">
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>
                        <div className='badges'>
                            <span className={`badge border-none px-4 py-3 text-white
                            ${person.status === "overdue" ? "bg-red-500" : ""}
                            ${person.status === "almost due" ? "bg-amber-500" : ""}
                            ${person.status === "on-track" ? "bg-emerald-500" : ""}
                        `}>
                            {person.status === "almost due" ? "Almost Due" : person.status === "on-track" ? "On Track" : "Overdue"}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsCard;