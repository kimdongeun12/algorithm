const solution = (players, callings) => {
  const playerObj = players.reduce((acc , cur , idx) => {
    acc[cur] = idx;
    return acc
  },{});
  callings.forEach((el) => {
    const frontPlayer = players[playerObj[el] - 1];
    players[playerObj[el]] = frontPlayer;
    players[playerObj[el] - 1] = el;
    
    playerObj[el] -= 1;
    playerObj[frontPlayer] += 1;
    
  })
  return players;
}