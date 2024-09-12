import React from 'react';

import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import Button from "../components/BricksButton";
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const moveBricksCreate = () => { navigate('/create') };

    return (
        <div>
            {/*<h1>메인</h1>*/}
            {/*<p>이곳은 메인이에요. 로그인 후에 보이는 페이지 입니다.</p>*/}
            {/*<div>1. 오늘의 질문은?</div>*/}
            {/*<div>2. i-Bricks 목록</div>*/}
            <div>
                <TodoTemplate>
                    <TodoHead />
                    <TodoList />
                    <TodoCreate />
                </TodoTemplate>
            </div>
            <div style={{display:"flex"}}>
                <div style={{margin: "auto", marginTop: "30px"}}>
                    <Button onClick={moveBricksCreate}>Bricks 쓰기</Button>
                </div>
            </div>
        </div>
    );
};

export default Main;