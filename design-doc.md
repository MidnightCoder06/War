
server side render the home page (wizard news as an example)
the home page can just be an image background with a 'start game' button in the center
  * that should
      - shuffle the deck
      - split deck in half amongst players

======

UI:
                        'Player Turn:''  * shows either a 1 or 2 * (top center)

    'Player 1'                                                                    'Player 2'
    'card count':                       'initiate battle' button                  'card count':



              player x has won! * when someone wins *                      start over button (bottom right)




initiaite battle should
* trigger some animation
* display current card value (a string, not an image) of each player
* pause for a bit
* display text of which player won the battle
* update the card count

- same process for initiate war 


======

typically played by two players using a standard playing card deck

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



Database

Table
-> LifeTimeWins

Rows
player1 (string) | numberOfWins (int)
player2 (string) | numberOfWins (int)



======
