# geeklybot
A chat bot meant to be used with the GeeklyInc Twitch chat!


Required environment variables:
USERNAME - Twitch username
PASS_PATH - Path to a file contain a single line of text that is your password from https://twitchapps.com/tmi/
CHANNEL - the twitch channel to join

Requried for docker:
Run the following command
`echo "<inser password from https://twitchapps.com/tmi/ here>" | docker secret create twitch_pass -`
