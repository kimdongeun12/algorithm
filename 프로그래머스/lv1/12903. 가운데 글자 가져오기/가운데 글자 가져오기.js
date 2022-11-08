function solution(s) {
    return (parseInt(s.length/2) !== s.length/2 ? (
        s[parseInt(s.length/2)]
    ) : (
        s[parseInt(s.length/2) - 1] + s[parseInt(s.length/2)]
    )
   );
}