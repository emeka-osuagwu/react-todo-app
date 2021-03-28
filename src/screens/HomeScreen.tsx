import React from "react";
import * as RB from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { RootStore } from "../store";
import * as actions from "../store/actions";
import * as TYPES from "../store/types";
import axios from "../utility/axios";

import Todo from "../components/Todo";
import FilterComponent from "../components/FilterComponent";
import LoadingComponent from "../components/LoadingComponent";
import NotificationComponent from "../components/NotificationComponent";

function Component() {
    const dispatch = useDispatch();

    const todoReducer = useSelector((state: RootStore) => state.todoReducer);
    const [error, setError] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [todos, setTodo] = React.useState<TYPES.TodoInterface[]>([]);

    React.useEffect(() => {
        const getRemoteData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get("/todos");
                setTodo(data);
                dispatch(actions.updateTodoState(data));
            } catch (error) {}
            setLoading(false);
        };

        getRemoteData();
    }, []);

    const searchFilter: TYPES.searchFilterInterface = (text: string) => {
        if (text == null || text == "") {
            setTodo(todoReducer.todos);
            setError(false);
        } else {
            const result = todoReducer.todos.filter((todo: any) =>
                todo.title
                    .trim()
                    .toLowerCase()
                    .includes(text.trim().toLowerCase())
            );

            setTodo(result);
            setError(result.length ? false : true);
        }
    };

    const statusFilter: TYPES.statusFilterInterface = (status: boolean) => {
        setError(false);
        const result = todoReducer.todos.filter(
            (todo: any) => todo.completed == status
        );
        setTodo(result.length ? result : todos);
    };

    return (
        <RB.Container>
            <RB.Row>
                <RB.Col>
                    <h1 style={{ marginTop: 40, marginBottom: 30 }}>Todos</h1>
                    <FilterComponent
                        statusFilter={statusFilter}
                        searchFilter={searchFilter}
                    />
                    {loading && <LoadingComponent />}
                    {error && <NotificationComponent />}
                    <Todo todos={todos} />
                </RB.Col>
            </RB.Row>
        </RB.Container>
    );
}

export default Component;
