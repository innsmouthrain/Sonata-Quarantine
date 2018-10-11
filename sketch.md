        ,,,,_____....
    ----\\\\ MUD ////----
        ```` ''' ´´´´
            -|||-

feature list:
- a website
    - with styling
    - menus
    - animation
    - forms
- message board / forum
- Back-end API
- Lore
- coin moneys
- Hidden MUD world
    - rooms, movement
    - descriptions
    - persistent multiplayer environment
    - powers, items, quests
    - multiplayer factions


ok lol let's go

MUD features:
- rooms
- moving around
- descriptions
- persistence
- multiple users

I like RPG elements
getting powers, items
doing quests
having factions

oh man this could be so weird

so I want to make a

    W E B S I T E

with somewhat typical website interfaces

menus! let's have menus

forms! Yes, let's also have fucking forms

a message board! Fuck yes! Let's make a message board!

I like the vending machine from that TDD tutorial, let's
have money and actually COINS

let's have an API

let's have lore
I'm putting the feature list on top

"let's have an API" lul

okay let's go, where do we start?
we start by creating tests
for what
for a MUD

message board
has:
- users
- threads
- messages
- submission form

with my silly pet project MUD
I might find it more rewarding to
focus on the MUD aspects

MUD features:
- Character objects
  - playable
  - non-playable
- environment
  - rooms
  - objects in the rooms

Character Object Specification draft:
- Methods
  - Travel
    - Walk
    - Teleport
  - Communicate
    - Emote
    - Talk
    - Shout
    - Visible actions
  - Receive Events
    - On specified channels
      - Local
      - Remote
- Properties
  - Position coords
  - Inventory
    - Money
    - Backpack
    - Wearables

Map specification
- 3d coord. system
- Room objects take up one coord

Room object spec.
- Methods
  - Mutate state
    - Description
    - Inventory
- Properties
    - Co-ordinates
    - Description
    - State
      - Room inventory
      - Other properties
    - Exits
      - up to 4 directions
