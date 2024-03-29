const generateWinner = () => {
    const teams = ["mu", "city", "munchen"];
    const scores = {
      mu: 0,
      city: 0,
      munchen: 0,
    };
  
    const matchList = [
      ["mu", "city"],
      ["munchen", "mu"],
      ["city", "munchen"],
    ];
  
    // Loop through each match
    for (let i = 0; i < matchList.length; i++) {
      const currentMatch = matchList[i];
      const [team1, team2] = currentMatch;
      const team1Index = teams.indexOf(team1);
      const team2Index = teams.indexOf(team2);
  
      // Check which team won
      if (team1Index > team2Index) {
        scores[team1] += 3;
      } else if (team1Index < team2Index) {
        scores[team2] += 3;
      } else {
        scores[team1] += 1;
        scores[team2] += 1;
      }
    }
  
    // Find the winning score
    let highestScore = 0;
    let winningTeam = "";
  
    // Loop through each team's score
    for (const team in scores) {
      if (scores[team] > highestScore) {
        highestScore = scores[team];
        winningTeam = team;
      }
    }
  
    return winningTeam;
  }
  
  const winner = generateWinner();
  console.log(winner);
  