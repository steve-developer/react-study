function LikeButton(){
    // like 버튼에 상태값을 false 로 셋팅
    const [liked, setLiked] = React.useState(false);

    // 상태에 따라서 텍스트 변경
    const text = liked ? '좋아요 취소' : '좋아요';

    // react 를 반환
    return React.createElement(
        'button',    // html 에 해당하는 tag가 만들어 진다
        { onClick: () => setLiked(!liked)},
        text,
    );
}

const domContainer = document.getElementById('root')
ReactDOM.render(React.createElement(LikeButton), domContainer)


const testContainer = document.getElementById('test')
function TestList(){
    return React.createElement(
        'div',
        null,
        React.createElement('p',null,'hello'),
        React.createElement('p',null,'world'),
    );
}
ReactDOM.render(React.createElement(TestList), testContainer)