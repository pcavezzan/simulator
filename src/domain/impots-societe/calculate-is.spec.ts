import { expect } from 'chai';
import { calculateIS, calculateRevenuInTranche, ISTranche } from './calculate-is';

describe('caculate IS', () => {
  describe('calculate revenus in tranches', () => {
    it('should return 30000 of revenu in tranche when maximum is 30000 and revenu is 30000', () => {
      const tranche = calculateRevenuInTranche(30000, 30000);

      expect(tranche).to.deep.equal({
        leftRevenu: 0,
        revenuInTranche: 30000
      });
    });

    it('should return revenu in tranche when maximum is 38120 and revenu is 30000', () => {
      const tranche = calculateRevenuInTranche(30000, 38120);

      expect(tranche).to.deep.equal({
        leftRevenu: 0,
        revenuInTranche: 30000
      });
    });

    it('should return revenu in tranche when maximum is 38120 and revenu is 40000', () => {
      const tranche = calculateRevenuInTranche(40000, 38120);

      expect(tranche).to.deep.equal({
        leftRevenu: 1880,
        revenuInTranche: 38120
      });
    });
  });

  it('should return IS when revenu is 30000', () => {
    const is = calculateIS(30000);

    console.log(is);

    expect(is).to.deep.equal({
      tranches: [
        { percent: 15, amount: 4500 },
        { percent: 25, amount: 0 }
      ],
      total: 4500
    });
  });
});