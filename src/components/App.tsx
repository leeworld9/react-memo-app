
import { useState, FC, ChangeEvent, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App : FC = () => {

    // 사용자 정의 훅으로 각각 얻기
    const {memos, addTodo, deleteTodo} = useMemoList();

    // 텍스트 박스 state
    const [text, setText] = useState<string>("");

    // [추가] 클릭시 동작
    const onClickAdd = () => {
        addTodo(text);
        setText("");
    }

    // [삭제] 버튼 클릭시 동작
    const onClickDelete = useCallback((index: number) => {
        deleteTodo(index)
    }, [deleteTodo]);


    /*
        e의 타입을 any로 사용하는 것보다 ChangeEvent를 사용하는게 더 정확하다.
        참고 : https://merrily-code.tistory.com/157
    */
    const textChange = (e : ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
    <>
    <h1>간단 메모 애플리케이션</h1>
    <div>
        <SInput type="text" value={text} onChange={textChange}></SInput>
        <SButton onClick={onClickAdd}>추가</SButton>
    </div>
        <MemoList memos={memos} onClickDelete={onClickDelete} />
    </>
    );

}
const SInput = styled.input`
    margin-left: 10px;
    width: 250px;
`;

const SButton = styled.button`
    margin-left: 16px
`;
