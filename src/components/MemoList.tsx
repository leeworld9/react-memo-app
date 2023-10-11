import { useState, FC } from "react";
import styled from "styled-components";

// 필요한 Props: 메모 목록과 삭제 시 실행할 함수
type Props = {
    memos: string[];
    onClickDelete: (index:number) => void;
}

export const MemoList : FC<Props> = (props) => {

    const {memos, onClickDelete} = props;

    return (
        <SContainer>
        메모목록
        <ul>
            {
                /*
                    일반적으로 map의 콜백함수로 사용되는 함수는 memos.map((memo, index) => {})와 같은 형태를 사용하나(중괄호 사용),
                    화살표 함수에서 객체를 반환하거나 JSX 요소를 반환할 경우 '{}'가 아닌 '()'로 묶어주어야 한다. (주의!!)
                */
                /*
                    아래 onClick()에서 화살표로 감싸는 이유는 아래 사이트 참고
                    참고 : https://whales.tistory.com/98
                */
                memos.map((memo, index) => ( 
                    <li key={index}>
                        <SMemoWrapper>
                            {memo}
                            <SButton onClick={() => onClickDelete(index)}>삭제</SButton>
                        </SMemoWrapper>
                    </li> 
                ))
            }
        </ul>
        </SContainer>
    )
}

const SButton = styled.button`
    margin-left: 16px
`;


const SContainer = styled.div`
    border: solid 1px #ccc;
    padding: 16px;
    margin: 8px;
`;

const SMemoWrapper = styled.div`
    display: flex;
    align-items: center;
`;