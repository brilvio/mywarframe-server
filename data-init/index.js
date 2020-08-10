const Items = require('warframe-items');
const items = new Items({
  category: ['Archwing', 'Arch-Gun', 'Arch-Melee', 'Melee', 'Primary', 'Relics', 'Secondary', 'Sentinels', 'Warframes'],
});

console.log(
  items.filter((el) => {
    return (
      el.tradable === true && (el.type === 'Relic' || (el.components ? el.components[0].primeSellingPrice > 0 : false))
    );
  })
);
