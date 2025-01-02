function getResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (input.includes("open https://nk.com")) {
        return "Sure, opening https://nk.com for you!";
    } else if (input.includes("help")) {
        return "I'm here to help! Type 'open [website]' to visit a link.";
    }else {
        return "my developer didn't set me up like that.";
    }
}