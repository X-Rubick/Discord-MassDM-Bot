<h1 align="center">
  <br>
  Discord Mass DM Bot 
  <br>
</h1>
This is a simple Discord bot created with JavaScript using the Discord.js library that allows users to send a message to multiple users through direct messages.

## Installation

To install and use the bot, follow these steps:

1. Clone the repository to your local machine.

2. Install the dependencies by running the following command in the terminal:
``npm install``

3. Start the bot by running the following command in the terminal:
``node index.js``

## Setting Up

In order to use the bot, you will need to create a `config.json` file. You can use the example file provided as a base. Your `config.json` file should look something like this:

```
{
  "prefix": "$", 
  "token": "YOUR_BOT_TOKEN_HERE",
  "ownerId": "YOUR_DISCORD_USER_ID_HERE"
}
```


Make sure to replace `YOUR_BOT_TOKEN_HERE` with your actual bot token. Additionally, replace `YOUR_DISCORD_USER_ID_HERE` with your personal Discord user ID, as the `$dm` command can only be run by the bot owner.

Once you have created the `config.json` file and added the necessary information, you can run the bot using your preferred programming environment or platform. 

## Usage

To use the bot, type the prefix followed by the command. The available commands are:

- `$dm <message>`: Sends the message that the bot owner executed to all users who are members of the server where the $dm command was executed.

**Please note that this command can only be used in a server text channel. It will not work in a DM convo.**

## Contributing

If you would like to contribute to the project, feel free to submit a pull request or open an issue. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


