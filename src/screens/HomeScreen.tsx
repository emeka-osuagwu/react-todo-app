import React from "react";
import * as RB from "react-bootstrap";

import { connect } from "react-redux";
import * as actions from "../store/actions";

import Todo from "../components/Todo";

function Component(props: any) {
    const { getTodos, todoReducer } = props;

    const { todos } = todoReducer;

    React.useEffect(() => {
        getTodos();
    }, [true]);

    return (
        <RB.Container>
            <RB.Row>
                <RB.Col>
                    1 of 1<h1>Docler FE Homework</h1>
                    <Todo todos={[1, 2, 3]}></Todo>
                </RB.Col>
            </RB.Row>
        </RB.Container>
    );
}

const mapStateToProps = ({ todoReducer }: any) => ({
    todoReducer,
});

export default connect(mapStateToProps, actions)(Component);
