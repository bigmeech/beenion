import { User, Publication, PrivilegeConditions } from './types/model'
import calcRank from './calcRank'
import beenionRankConditions from './beenionRankConditions'

export const isInAccessList =
  (privilegeCond: PrivilegeConditions, user: User) =>
    privilegeCond.userAccessList &&
    privilegeCond.userAccessList.includes(user.userId)

export const hasBeenionRank =
  (privilegeCond: PrivilegeConditions, user: User) =>
    privilegeCond.beenionRank !== undefined &&
      calcRank(
        user.beenionAnalytics,
        beenionRankConditions
      ) >= privilegeCond.beenionRank

export const hasPublicationRank =
  (privilegeCond: PrivilegeConditions, user: User, pub: Publication) =>
    privilegeCond.publicationRank !== undefined &&
    user.publicationAnalytics[pub.publicationId] !== undefined &&
    calcRank(
      user.publicationAnalytics[pub.publicationId],
      pub.rankConditions
    ) >= privilegeCond.publicationRank