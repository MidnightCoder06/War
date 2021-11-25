
server side render the home page (wizard news as an example)
the home page can just be an image background with a 'start game' button in the center

======


typically played by two players using a standard playing card deck
watch Preston's lecture on game logic to get advice on the best way to create the player objects
read up on best way to create card deck

The objective of the game is to win all of the cards (all 52).

The deck is divided evenly among the players (each player receiving 26 cards), giving each a down stack.
In unison, each player reveals the top card of their deck—this is a "battle"
—and the player with the higher card takes both of the cards played and moves them to their stack.
Aces are high, and suits are ignored.

If the two cards played are of equal value, then there is a "war".
Both players place the next three cards face down and then another card face-up.
The owner of the higher face-up card wins the war and adds all the cards on the table (all 6) to the bottom of their deck.

If the face-up cards are again equal then the battle repeats with a set of face-down/up cards. (2 each)
This repeats until one player's face-up card is higher than their opponent's.
(takes all 10 cards, and so on.)

If a player runs out of cards during a war - that player immediately loses.


======


Player Object

properties:
  noOfCards (int)
  hand (list of card objects)




Game class?
  calls all the util functions?
  assigns cards to the appropriate player
  holds the key value pair of string to int value?



Card Object:
4 A
4 J
4 Q
4 K
4 sets of 2 through 10

properties:
  card-value -> example "ace"
  game-value -> assign an int value
  up-or-down





Database

Table
-> LifeTimeWins

Rows
playerID | numberOfWins



======
