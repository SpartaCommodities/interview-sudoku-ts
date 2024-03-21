import { expect, test } from "bun:test";
import { validateSudoku } from ".";

test("should fail when empty", () => {
  const result = validateSudoku([[]]);
  expect(result).toBe(false);
});

test("board should be within Sudoku range", () => {
  const boardWithEmptyCells = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, -10, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 999, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  const result = validateSudoku(boardWithEmptyCells);
  expect(result).toBe(false);
});

test("invalid board with incorrect column is not solved", () => {
  const invalidBoard = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, /* wrong */ 9, 7 /* wrong */],
  ];

  const result = validateSudoku(invalidBoard);
  expect(result).toBe(false);
});

test("invalid board is not solved", () => {
  const invalidBoard = [
      [8, 8, 8, 8, 8, 8, 8, 8, 8],
      [2, 2, 2, 2, 2, 2, 2, 2, 2],
      [4, 4, 4, 4, 4, 4, 4, 4, 4],
      [5, 5, 5, 5, 5, 5, 5, 5, 5],
      [6, 6, 6, 6, 6, 6, 6, 6, 6],
      [7, 7, 7, 7, 7, 7, 7, 7, 7],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [3, 3, 3, 3, 3, 3, 3, 3, 3],
  ];

  const result = validateSudoku(invalidBoard);
  expect(result).toBe(false);
});

test("invalid board with incorrect row is not solved", () => {
  const invalidBoard = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 9 /* wrong */],
      [3, 4, 5, 2, 8, 6, 1, 7, 5 /* wrong */],
  ];

  const result = validateSudoku(invalidBoard);
  expect(result).toBe(false);
});

test("invalid board with incorrect square is not solved", () => {
  const invalidBoard = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [3, 4, 5, 2, 8, 6, 1, 7, 9], /* wrong, should be last row */
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
  ];

  const result = validateSudoku(invalidBoard);
  expect(result).toBe(false);
});

test("full board is solved", () => {
  const solvedBoard = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  const result = validateSudoku(solvedBoard);
  expect(result).toBe(true);
});
