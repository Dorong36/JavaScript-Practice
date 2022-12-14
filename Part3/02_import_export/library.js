var a = 10;
var b = 20;

// ✅ 기본적으로 export 할 것 지정
// export default는 파일 당 1회 사용
// 단순 변수, 함수 등 모든 자료형 가능
// export default a;

// ✅ 여러개를 export 하고싶다면?
// 방법1
// export {a};
// export {b};
// 방법2
export {a,b};
// 방법3 => 선언부터 export
export var c = 30;

// ✅ export와 export default 같이 쓸 수 있음!
var d = 40;
export default d;