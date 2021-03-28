import React from "react";
import { Table } from "react-bootstrap";

interface TodoInterface {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface PropsInterface {
    todos: Array<TodoInterface>;
}

function Component({ todos }: PropsInterface) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item: TodoInterface, index: number) => (
                        <tr data-test-id={item.id} key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

Component.defaultProps = {
    todos: [],
};

export default Component;
