import { useState } from "react"

function Todo() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([
        "React学習",
        "ポートフォリオ制作",
        "転職活動"
    ])

    // 追加関数
    const addTask = () => {
        if (task == "") {
            return
        }

        setTasks([...tasks, task])
        setTask("")
    }

    // 削除関数
    const deleteTask = (index) => {
        const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index)
        setTasks(newTasks)
    }

    return (
        <>
            <h2>Todoアプリ</h2>

            <p>Todo件数：{tasks.length}件</p>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                    if (e.nativeEvent.isComposing) {
                        return
                    }

                    if (e.key === "Enter") {
                        addTask()
                    }
                }}
            />

            <button onClick={addTask}>
                追加
            </button>

            {tasks.map((todo, index) => (
                <div key={index}>
                    <span>{todo}</span>
                    <button onClick={() => deleteTask(index)}>削除</button>
                </div>
            ))}
        </>
    )
}

export default Todo