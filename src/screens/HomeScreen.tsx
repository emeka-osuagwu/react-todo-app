import React from "react";
import * as RB from "react-bootstrap";

import { connect } from "react-redux";
import * as actions from "../store/actions";

import Todo from "../components/Todo";
import FilterComponent from "../components/FilterComponent";

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
                    <h1>Todos</h1>
                    <FilterComponent />
                    <Todo todos={todos} />
                </RB.Col>
            </RB.Row>
        </RB.Container>
    );
}

const mapStateToProps = ({ todoReducer }: any) => ({
    todoReducer,
});

export default connect(mapStateToProps, actions)(Component);
