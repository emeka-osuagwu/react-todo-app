import React from "react";
import { Table } from "react-bootstrap";

function Component({ todos }: any) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item: any, index: any) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.completed ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Component;
