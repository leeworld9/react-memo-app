
import { useState } from "react";
import styled from "styled-components";

export const App = () => {

    const [text, setText] = useState("");
    const [memos, setMemos] = useState<string[]>([]);

    const memoCreate = () => {
        //console.log("memoCreate");
        // State 변경을 정상적으로 감지하기 위해 새로운 배열을 생성 (중요!!)
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
        setText("");
    }

    const memoDelete = (index: number) => {
        //console.log("memoDelete");
        // State 변경을 정상적으로 감지하기 위해 새로운 배열을 생성 (중요!!)
        const newMemos = [...memos];
        // 주의 : splice 말고 delete를 사용하면, 기존 index는 사라지지 않기때문에 '삭제'버튼이 계속 남아 있음.
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }

    const textChange = (e:any) => {
        //console.log("textChange : " + e.target.value);
        setText(e.target.value);
    }

    return (
    <>
    <h1>간단 메모 애플리케이션</h1>
    <div>
        <SInput type="text" value={text} onChange={textChange}></SInput>
        <SButton onClick={memoCreate}>추가</SButton>
    </div>
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
                    https://whales.tistory.com/98
                */
                memos.map((memo, index) => ( 
                    <li key={index}>
                        <SMemoWrapper>
                            {memo}
                            <SButton onClick={() => memoDelete(index)}>삭제</SButton>
                        </SMemoWrapper>
                    </li> 
                ))
            }
        </ul>
    </SContainer>
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

const SContainer = styled.div`
    border: solid 1px #ccc;
    padding: 16px;
    margin: 8px;
`;

const SMemoWrapper = styled.div`
    display: flex;
    align-items: center;
`;