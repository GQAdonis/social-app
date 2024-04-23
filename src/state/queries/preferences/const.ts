import {DEFAULT_LOGGED_OUT_LABEL_PREFERENCES} from '#/state/queries/preferences/moderation'
import {
  ThreadViewPreferences,
  UsePreferencesQueryResponse,
} from '#/state/queries/preferences/types'

export const DEFAULT_HOME_FEED_PREFS: UsePreferencesQueryResponse['feedViewPrefs'] =
  {
    hideReplies: false,
    hideRepliesByUnfollowed: true,
    hideRepliesByLikeCount: 0,
    hideReposts: false,
    hideQuotePosts: false,
    lab_mergeFeedEnabled: false, // experimental
  }

export const DEFAULT_THREAD_VIEW_PREFS: ThreadViewPreferences = {
  sort: 'newest',
  prioritizeFollowedUsers: true,
  lab_treeViewEnabled: false,
}

const DEFAULT_PROD_FEED_PREFIX = (rkey: string) =>
  `at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.generator/${rkey}`
export const DEFAULT_PROD_FEED = {
  type: 'feed',
  value: DEFAULT_PROD_FEED_PREFIX('whats-hot'),
  pinned: true,
}

export const DEFAULT_LOGGED_OUT_PREFERENCES: UsePreferencesQueryResponse = {
  birthDate: new Date('2022-11-17'), // TODO(pwi)
  moderationPrefs: {
    adultContentEnabled: false,
    labels: DEFAULT_LOGGED_OUT_LABEL_PREFERENCES,
    labelers: [],
    mutedWords: [],
    hiddenPosts: [],
  },
  feedViewPrefs: DEFAULT_HOME_FEED_PREFS,
  threadViewPrefs: DEFAULT_THREAD_VIEW_PREFS,
  userAge: 13, // TODO(pwi)
  interests: {tags: []},
  savedFeeds: [],
}
