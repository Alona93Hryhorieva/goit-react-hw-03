
export default function ContactList{
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}></li>
            ))}
        </ ul >
   )
}