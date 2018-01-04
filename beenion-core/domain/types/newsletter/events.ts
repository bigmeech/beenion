import { type, literal, union, map } from 'io-ts'
import * as input from '../input'
import { UserEvent } from '../user/events'

export const NewsletterEvent = union([
  type({
    type: literal('NewsletterCreated'),
    payload: type({
      newsletterId: input.NewsletterId,
      ownerId: input.UserId,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterDeleted'),
    payload: type({
      userId: input.UserId,
      newsletterId: input.NewsletterId,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterTitleDefined'),
    payload: type({
      newsletterId: input.NewsletterId,
      title: input.Title,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterDescriptionDefined'),
    payload: type({
      newsletterId: input.NewsletterId,
      description: input.Description,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterRankEventDefined'),
    payload: type({
      newsletterId: input.NewsletterId,
      userEventType: map(t => t.type, UserEvent),
      factor: input.RankFactor,
      group: input.RankGroup,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterRankEventRemoved'),
    payload: type({
      newsletterId: input.NewsletterId,
      userEventType: map(t => t.type, UserEvent),
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterRankGroupDefined'),
    payload: type({
      newsletterId: input.NewsletterId,
      group: input.RankGroup,
      rankRange: input.RankRange,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterRankGroupRemoved'),
    payload: type({
      newsletterId: input.NewsletterId,
      group: input.RankGroup,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterPrivilegeDefined'),
    payload: type({
      newsletterId: input.NewsletterId,
      privilege: input.NewsletterPrivilege,
      permission: input.NewsletterPermission,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterPrivilegeRemoved'),
    payload: type({
      newsletterId: input.NewsletterId,
      privilege: input.NewsletterPrivilege,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterStageRuleDefined'),
    payload: type({
      newsletterId: input.NewsletterId,
      stage: input.Stage,
      stageRule: input.StageRule,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterStageRuleRemoved'),
    payload: type({
      newsletterId: input.NewsletterId,
      stage: input.Stage,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterEditorAdded'),
    payload: type({
      newsletterId: input.NewsletterId,
      userId: input.UserId,
      editorInfo: input.UserInfo,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterEditorConfirmed'),
    payload: type({
      editorId: input.UserId,
      editorInfo: input.UserInfo,
      newsletterId: input.NewsletterId,
      timestamp: input.Timestamp
    })
  }),

  type({
    type: literal('NewsletterEditorRemoved'),
    payload: type({
      newsletterId: input.NewsletterId,
      userId: input.UserId,
      editorId: input.UserId,
      timestamp: input.Timestamp
    })
  })
])
