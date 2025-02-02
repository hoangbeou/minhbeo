function showLoveMessage() {
    const messages = [
        "Anh yêu em nhiều lắm! 💖",
        "Em là điều tuyệt vời nhất trong cuộc đời anh! 😘",
        "Có em bên cạnh, ngày nào cũng là ngày hạnh phúc! 🌸",
        "Anh nhớ em mỗi giây mỗi phút! 🥰",
        "Em chính là ánh sáng trong cuộc đời anh! 💫",
        "Mỗi ngày trôi qua, anh càng yêu em nhiều hơn! ❤️",
        "Em là lý do khiến anh mỉm cười mỗi ngày! 😊"
    ];

    // Chọn một tin nhắn ngẫu nhiên
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Hiển thị tin nhắn
    document.getElementById("message").innerText = randomMessage;
}
