#!/usr/bin/env bash

#- local functions ---------------------------------------------------------------------------------

colour_line() {
echo "\
\033[30m󰝤󰝤󰝤 \033[31m󰝤󰝤󰝤 \033[32m󰝤󰝤󰝤 \033[33m󰝤󰝤󰝤 \033[34m󰝤󰝤󰝤 \033[35m󰝤󰝤󰝤 \033[36m󰝤󰝤󰝤 \033[37m󰝤󰝤󰝤 \
\033[30m󰝤󰝤󰝤 \033[31m󰝤󰝤󰝤 \033[32m󰝤󰝤󰝤 \033[33m󰝤󰝤󰝤 \033[34m󰝤󰝤󰝤 \033[35m󰝤󰝤󰝤 \033[36m󰝤󰝤󰝤 \033[37m󰝤󰝤󰝤 \
\033[30m󰝤󰝤󰝤 \033[31m󰝤󰝤󰝤 \033[32m󰝤󰝤󰝤 \033[33m󰝤󰝤󰝤 \033[34m󰝤󰝤󰝤 \033[35m󰝤󰝤󰝤 \033[36m󰝤󰝤󰝤 \033[37m󰝤󰝤󰝤 \
"
}

all_commands() {
echo "\
List Commands:
   list systems                List all configuration options.
   list scripts                List all available scripts.
   list tools                  List all tools supported with a configuration.

Install Services:
   add script {script, ...}    Install the specified scripts.
   add system (system)         Install the specified configuration from the defined list.
   add config {tool, ...}      Install configurations for the specified tool.

Misc:
   about                       Display all information about the system.
   help                        Show all available commands.
   quit                        Exit the application."
}


#- banner ------------------------------------------------------------------------------------------

clear
colour_line
echo "\
   _    _   ______  _        _        ______      _    __  ______   ______   ______   _    _
  | |  | | | |     | |      | |      / |  | \    | |  / / | |  | | | |  | \ / |      | |  | |
  | |--| | | |---- | |   _  | |   _  | |  | |    | |-< <  | |__| | | |__| | '------. | |--| |
  |_|  |_| |_|____ |_|__|_| |_|__|_| \_|__|_/    |_|  \_\ |_|  |_| |_|  \_\  ____|_/ |_|  |_|
"
colour_line


#---------------------------------------------------------------------------------------------------

while true; do
    echo
    read -p "> " user_input

    # Check if the user wants to exit
    if [[ "$user_input" == "x" || "$user_input" == "quit" || "$user_input"  == "exit" ]]; then
        clear
        colour_line
        echo "\nGoodbye Karsh..."
        sleep 1
        break

    elif [[ "$user_input" == "help" || "$user_input" == "?" ]]; then
        all_commands

    elif [[ "$user_input" == "clear" ]]; then
        clear
        colour_line
    fi
done

