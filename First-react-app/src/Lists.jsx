export default function Lists() {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    const tasks = [
        {id: 1, title: "Task 1", completed: false},
        {id: 2, title: "Task 2", completed: true},
        {id: 3, title: "Task 3", completed: false},
    ]

    return (
        <>
          <ul>
            {fruits.map((fruit) => (
            <li>{fruit}</li>
            ))}
          </ul>
          <h2>My tasks</h2>
          <ul>
            {tasks.map((task) => (
                <li key = {task.id}>{task.title}</li>
            ))}
          </ul>
        </>
    );
}