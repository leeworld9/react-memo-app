import { useCallback, useState } from "react";

// 메모 목록에 관한 사용자 정의 훅
export const useMemoList = () => {

    // 메모 목록 state
    const [memos, setMemos] = useState<string[]>([]);

    // 메모 추가 로직
    const addTodo = useCallback((text: string) => {
        // State 변경을 정상적으로 감지하기 위해 새로운 배열을 생성 (중요!!)
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
    }, [memos])

    // 메모 삭제 로직
    const deleteTodo = useCallback((index : number) => {
        // State 변경을 정상적으로 감지하기 위해 새로운 배열을 생성 (중요!!)
        const newMemos = [...memos];
        // 주의 : splice 말고 delete를 사용하면, 기존 index는 사라지지 않기때문에 '삭제'버튼이 계속 남아 있음.
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }, [memos]);

    return {memos, addTodo, deleteTodo};
}