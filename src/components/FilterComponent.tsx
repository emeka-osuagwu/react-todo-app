import React from "react";
import * as RB from "react-bootstrap";

interface FiltetComponentInterface {
    searchFilter: Function;
    statusFilter: Function;
}

function Component({ searchFilter, statusFilter }: FiltetComponentInterface) {
    return (
        <RB.Form style={{ marginBottom: 30 }}>
            <RB.Row>
                <RB.Col sm={6}>
                    <RB.Row>
                        <RB.Col sm={2}>
                            <RB.Form.Group controlId="exampleRB.Form.ControlInput1">
                                <h5 style={{ marginTop: 6 }}>Search:</h5>
                            </RB.Form.Group>
                        </RB.Col>
                        <RB.Col sm={10}>
                            <RB.Form.Group controlId="exampleRB.Form.ControlInput1">
                                <RB.Form.Control
                                    onChange={(
                                        event: React.ChangeEvent<HTMLTextAreaElement>
                                    ) => searchFilter(event.target.value)}
                                    type="text"
                                    placeholder="keyword..."
                                />
                            </RB.Form.Group>
                        </RB.Col>
                    </RB.Row>
                </RB.Col>
                <RB.Col sm={6}>
                    <RB.Row>
                        <RB.Col sm={3}>
                            <RB.Form.Group controlId="exampleRB.Form.ControlInput1">
                                <h5 style={{ marginTop: 6 }}>Completed:</h5>
                            </RB.Form.Group>
                        </RB.Col>
                        <RB.Col sm={9}>
                            <RB.Form.Group controlId="exampleRB.Form.ControlSelect1">
                                <RB.Form.Control
                                    onChange={(
                                        event: React.ChangeEvent<HTMLTextAreaElement>
                                    ) => statusFilter(event.target.value)}
                                    as="select"
                                >
                                    <option>Select</option>
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </RB.Form.Control>
                            </RB.Form.Group>
                        </RB.Col>
                    </RB.Row>
                </RB.Col>
            </RB.Row>
        </RB.Form>
    );
}

Component.defaultProps = {
    searchFilter: () => console.log("please pass right function"),
    statusFilter: () => console.log("please pass right function"),
};

export default Component;
