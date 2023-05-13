import { useSelector } from "react-redux";

function CardTask(props) {
    const {title, description, status, UserId} = props;
    const {userName} = useSelector(({users}) => {
        return {userName: users.get(UserId).name}
    });
    return (
        <div className="bg-main p-4 rounded shadow-all">
            <h2 className="w-full font-quicksand text-xl font-bold text-stone-600">{userName}</h2>
            <p className="justify-self-center py-1">{title}</p>
            <p className="justify-self-center py-1">{description}</p>
            <p className="justify-self-center py-1">{status}</p>
        </div>
    );
}

export default CardTask;