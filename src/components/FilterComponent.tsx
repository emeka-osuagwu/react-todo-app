import React from "react";
import * as RB from "react-bootstrap";

function Component({ searchFilter }: any) {
    return (
        <RB.Form>
            <RB.Row>
                <RB.Col sm={6}>
                    <RB.Form.Group controlId="exampleRB.Form.ControlInput1">
                        <RB.Form.Label>keyword...</RB.Form.Label>
                        <RB.Form.Control
                            onChange={(event: any) =>
                                searchFilter(event.target.value)
                            }
                            type="text"
                            placeholder="keyword..."
                        />
                    </RB.Form.Group>
                </RB.Col>
                <RB.Col sm={6}>
                    <RB.Form.Group controlId="exampleRB.Form.ControlSelect1">
                        <RB.Form.Label>Example select</RB.Form.Label>
                        <RB.Form.Control as="select">
                            <option>Yes</option>
                            <option>No</option>
                        </RB.Form.Control>
                    </RB.Form.Group>
                </RB.Col>
            </RB.Row>
        </RB.Form>
    );
}

export default Component;
