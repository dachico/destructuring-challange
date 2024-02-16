const chessIcons = {
  king: "♚",
  queen: "♛",
  rook: "♜",
  knight: "♞",
  bishop: "♝",
  pawn: "♟️",
};

const chessPiecesHashMap = {
  0: null, // empty cell
  1: { "white|king": chessIcons.king },
  2: { "white|queen": chessIcons.queen },
  3: { "white|knight": chessIcons.knight },
  4: { "white|bishop": chessIcons.bishop },
  5: { "white|rook": chessIcons.rook },
  6: { "white|pawn": chessIcons.pawn },
  7: { "black|king": chessIcons.king },
  8: { "black|queen": chessIcons.queen },
  9: { "black|knight": chessIcons.knight },
  10: { "black|bishop": chessIcons.bishop },
  11: { "black|rook": chessIcons.rook },
  12: { "black|pawn": chessIcons.pawn },
};

function getPieceDetails(index) {
  if (
    arguments.length !== 1 ||
    !Number.isInteger(index) ||
    index < 0 ||
    index > 12
  ) {
    throw new Error(
      "`The function getPieceDetails expects a single integer between 0 and 12`"
    );
  }

  if (index === 0) {
    return { index: 0, color: null, name: null, icon: null };
  }
  const [entry] = Object.entries(chessPiecesHashMap[index]);
  const [colorName, icon] = entry;
  const [color, name] = colorName.split("|");

  return { index, color, name, icon };
}

console.log(getPieceDetails(0));
console.log(getPieceDetails(1));
console.log(getPieceDetails(2));
console.log(getPieceDetails(5));
console.log(getPieceDetails(10));
console.log(getPieceDetails(12));

// Error test
console.log(getPieceDetails(13));
console.log(getPieceDetails(3.5));
console.log(getPieceDetails(""));
