function blackTheme()
{
    const options = document.getElementsByClassName("hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col");

    for (let i = 0; i < options.length; i++)
    {
        options[i].style.backgroundColor = "black";
    }

    const user_elements = document.getElementsByClassName("w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800");

    for (let i = 0; i < user_elements.length; i++)
    {
        user_elements[i].style.backgroundColor = "black";
    }

    const bot_elements = document.getElementsByClassName("w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]");

    for (let i = 0; i < bot_elements.length; i++)
    {
        bot_elements[i].style.backgroundColor = "#0A0A0A";
    }

    const code_blocks = document.getElementsByClassName("flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans");

    for (let i = 0; i < code_blocks.length; i++)
    {
        code_blocks[i].style.backgroundColor = "#1A1A1A";
    }

    const space = document.getElementsByClassName("flex flex-col items-center text-sm h-full dark:bg-gray-800");

    for (let i = 0; i < space.length; i++)
    {
        space[i].style.backgroundColor = "black";
    }

    const buttons = document.getElementsByClassName("btn flex justify-center gap-2 btn-neutral");

    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].style.backgroundColor = "#3A3A3A";
    }

    const input = document.getElementsByClassName("flex flex-col w-full py-2 pl-3 md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]");
    
    for (let i = 0; i < input.length; i++)
    {
        input[i].style.backgroundColor = "#1A1A1A";
    }

    // lower bar
    document.getElementsByClassName("absolute bottom-0 left-0 w-full dark:border-transparent bg-vert-light-gradient dark:bg-vert-dark-gradient")[0].className = "absolute bottom-0 left-0 w-full";

    // shrink
    document.getElementsByClassName("w-full h-48 flex-shrink-0")[0].style.backgroundColor = "black";
}
  
setInterval(blackTheme, 500);
document.addEventListener("keydown", blackTheme);
  