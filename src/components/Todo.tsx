import React from "react";
import { Table } from "react-bootstrap";

function Component({ todos }: any) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item: any, index: any) => (
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Component;
