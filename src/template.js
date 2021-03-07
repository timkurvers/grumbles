export default {
  type: 'Game',
  children: [
    {
      type: 'Inn',
      children: [
        { type: 'InnKey' },
        { type: 'InnDoor' },
        { type: 'Stick' },
        { type: 'Shoes' },
        {
          type: 'Player',
          children: [
            { type: 'GameManual' },
            { type: 'Letter' },
            { type: 'Floppy' },
            { type: 'Hearthstone' },
          ],
        },
      ],
    },

    {
      type: 'Courtyard',
      children: [
        { type: 'Hedge' },
        { type: 'Sign' },
        { type: 'Map' },
      ],
    },

    {
      type: 'Bar',
      children: [
        { type: 'Wine' },
        { type: 'Bartender' },
        { type: 'InsectHunters' },
        { type: 'Crystal' },
      ],
    },

    {
      type: 'Church',
      children: [
        { type: 'Insects' },
      ],
    },

    {
      type: 'ChurchLibrary',
      children: [
        { type: 'WizardyBook' },
        { type: 'BlacksmithingBook' },
        { type: 'PreciousBook1' },
        { type: 'PreciousBook2' },
      ],
    },

    {
      type: 'Forgery',
      children: [
        { type: 'ForgedDwarf' },
        { type: 'KeyBlueprint' },
        { type: 'Forge' },
      ],
    },

    {
      type: 'Bank',
      children: [
        { type: 'Goblin' },
        { type: 'GlassPane' },
        { type: 'MasterKey' },
      ],
    },

    {
      type: 'RoadToCastle',
      children: [
        { type: 'NorwegianTroll' },
        { type: 'River' },
      ],
    },

    {
      type: 'CastleEntrance',
      children: [
        { type: 'Guard' },
      ],
    },

    {
      type: 'Castle',
      children: [
        { type: 'CastleGate' },
        { type: 'Vault' },
      ],
    },
  ],
};
