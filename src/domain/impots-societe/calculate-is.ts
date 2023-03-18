import { BAREME_IMPOTS_SOCIETE } from './impots-societe-bareme';
import { multipleByPercent } from '../helpers/percent-calculator';

export interface ISTranche {
  percent: number,
  amount: number
}

export interface IS {
  tranches: ISTranche[],
  total: number
}

export const calculateIS = (revenu: number): IS => {
  let leftRevenu = revenu;
  return BAREME_IMPOTS_SOCIETE.reduce((acc: IS, currentValue: { percent: number, maximum: number }) => {
    const revenuInCurrentTranche = calculateRevenuInTranche(leftRevenu, currentValue.maximum);
    leftRevenu = revenuInCurrentTranche.leftRevenu;

    return {
      ...acc,
      tranches: [...acc.tranches, { percent: currentValue.percent, amount: multipleByPercent(revenuInCurrentTranche.revenuInTranche, currentValue.percent) } ],
      total: acc.total + multipleByPercent(revenuInCurrentTranche.revenuInTranche, currentValue.percent)
    }
  }, { tranches: [], total: 0 });
}

export const calculateRevenuInTranche = (revenu: number, trancheMaximum: number): { leftRevenu: number, revenuInTranche: number } => {
  const revenuOutOfTranche = revenu - trancheMaximum;
  const revenuInTranche = revenuOutOfTranche > 0 ? revenu - revenuOutOfTranche : revenu;

  return {
    leftRevenu: revenuOutOfTranche > 0 ? revenuOutOfTranche : 0,
    revenuInTranche
  }
}