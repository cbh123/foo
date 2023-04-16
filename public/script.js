const socket = io();
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const index = cell.dataset.index;
        socket.emit("playerMove", index);
    });
});

socket.on("updateBoard", (board) => {
    board.forEach((player, index) => {
        if (player !== "") {
            cells[index].innerText = player;
        }
    });
});
