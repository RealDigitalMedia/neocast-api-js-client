require('isomorphic-fetch')
const { SpraypaintBase, attr, hasOne, hasMany, belongsTo } = require('spraypaint')

let BASE_URL = ''

const ApplicationRecord = SpraypaintBase.extend({
  static: {
    baseUrl: BASE_URL,
    apiNamespace: '/api/v1',
    clientApplication: 'NEOCAST',
    // NOTE: Spraypaint automatically reads a local storage
    //       token named 'jwt' and supplies it to this callback.
    //       We simply record that we want the exact token formatted
    //       as the authorization header. If not using JWT then this
    //       is a no-op.
    generateAuthHeader: token => token,
  },
})

const Network = ApplicationRecord.extend({
  static: {
    jsonapiType: 'networks',
  },
  attrs: {
    locations: hasMany(),
    players: hasMany(),

    name: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const Location = ApplicationRecord.extend({
  static: {
    jsonapiType: 'locations',
  },
  attrs: {
    network: belongsTo(),

    name: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const CurrentUser = ApplicationRecord.extend({
  static: {
    jsonapiType: 'current_users',
  },

  attrs: {
    preference: hasOne(),

    login: attr(),
    email: attr(),
    name: attr(),
    lastLoginAt: attr(),
    locale: attr(),
    currentSignInAt: attr(),
    lastSignInAt: attr(),
    currentSignInIp: attr(),
    lastSignInIp: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const Preference = ApplicationRecord.extend({
  static: {
    jsonapiType: 'preferences',
  },

  attrs: {
    pageColumns: attr(),
    sortOrders: attr(),
    pagination: attr(),
  },
})

const Player = ApplicationRecord.extend({
  static: {
    jsonapiType: 'players',
  },
  attrs: {
    name: attr(),
    callInUrl: attr(),
    macAddress: attr(),
    online: attr(),
    firmwareVersion: attr(),
    displayStatus: attr(),
    lastSeen: attr(),
    uptime: attr(),
    modelNumber: attr(),
    diskUsagePercentage: attr(),
    storeNumber: attr(),
    country: attr(),
    activeInterfaceHumanReadable: attr(),
    addressStreetLine1: attr(),
    addressStreetLine2: attr(),
    callInFrequencyMinutes: attr(),
    changePendingOnServer: attr(),
    city: attr(),
    clientAddressableHostname: attr(),
    clockDelta: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const SpotSwapItem = ApplicationRecord.extend({
  static: {
    jsonapiType: 'spot_swap_items',
  },
  attrs: {
    media: belongsTo(),

    fileName: attr(),
    cachedFileSize: attr(),
    md5: attr(),
    startDate: attr(),
    endDate: attr(),
    originalFileName: attr(),
    description: attr(),
    cachedMd5sum: attr(),
    downloadUrl: attr(),
    distributableType: attr(),
    distributableId: attr(),
    distributableDescription: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const FeedItem = ApplicationRecord.extend({
  static: {
    jsonapiType: 'feed_items',
  },
  attrs: {
    media: belongsTo(),

    title: attr(),
    description: attr(),
    position: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const Media = ApplicationRecord.extend({
  static: {
    jsonapiType: 'media',
  },
  attrs: {
    tags: hasMany(),
    subtitles: hasMany(),
    feedItems: hasMany(),
    customFieldValues: hasMany(),
    spotSwapItems: hasMany(),

    mediaLink: belongsTo('media'),
    feedBackgroundImage: belongsTo('media'),
    feedBackgroundImageId: attr(),

    allPresentations: attr({ persist: false }),
    aspect: attr(),
    audioCodec: attr(),
    audioEncodeRateKilobitsPerSecond: attr(),
    audioSampleRateKilobitsPerSecond: attr(),
    backgroundImageFileName: attr(),
    cachedFileSize: attr(),
    cachedMd5sum: attr(),
    cachingFrequency: attr(),
    colorspace: attr(),
    custom: attr(),
    customerId: attr(),
    deletedAt: attr(),
    description: attr(),
    displaySpeed: attr(),
    displayStyle: attr(),
    duration: attr(),
    feedBackgroundColor: attr(),
    feedBackgroundImageId: attr(),
    feedFontId: attr(),
    feedFontSize: attr(),
    feedForegroundColor: attr(),
    feedFrameRate: attr(),
    feedHorizontalAlignment: attr(),
    feedHorizontalPad: attr(),
    feedItemsCount: attr(),
    feedMessageScrollRate: attr(),
    feedTickerType: attr(),
    feedVerticalAlignment: attr(),
    feedVerticalPad: attr(),
    fileName: attr(),
    height: attr(),
    httpCallbackCompleteUrl: attr(),
    httpCallbackCompleteVerb: attr(),
    httpCallbackFailureUrl: attr(),
    httpCallbackFailureVerb: attr(),
    httpCallbackProgressUrl: attr(),
    httpCallbackProgressVerb: attr(),
    httpCallbackStartingUrl: attr(),
    httpCallbackStartingVerb: attr(),
    isActive: attr(),
    isDirectorSpot: attr(),
    isSpotSwap: attr(),
    isZipCodeEnabled: attr(),
    lastCachedAt: attr(),
    linkedMediaId: attr(),
    linkedMediaType: attr(),
    localFeed: attr(),
    logable: attr(),
    mediaLinkId: attr(),
    name: attr(),
    needsPreviewGenerated: attr(),
    needsThumbnailGenerated: attr(),
    newFileName: attr(),
    newFileId: attr(),
    noLongerPlayableAt: attr(),
    playableAt: attr(),
    previewUrl: attr(),
    refreshRate: attr(),
    remoteUrl: attr(),
    rssIconFileName: attr(),
    runTime: attr(),
    runTimeMs: attr(),
    screenPosition: attr(),
    tagIds: attr(),
    thumbnailFrameNumber: attr(),
    thumbnailSpotSwapItemId: attr(),
    thumbnailUrl: attr(),
    thumbnailSrc: attr(),
    type: attr(),
    updatedAt: attr(),
    updatedBy: attr(),
    updatedByName: attr(),
    videoCodec: attr(),
    videoEncodeRateMegabitsPerSecond: attr(),
    videoFramesPerSecond: attr(),
    volume: attr(),
    webContentControlsDuration: attr(),
    width: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const TagGroup = ApplicationRecord.extend({
  static: {
    jsonapiType: 'tag_groups',
  },
  attrs: {
    name: attr(),
    tags: hasMany(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const Tag = ApplicationRecord.extend({
  static: {
    jsonapiType: 'tags',
  },
  attrs: {
    tagGroup: belongsTo(),

    name: attr(),
    tagGroupId: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const Tagging = ApplicationRecord.extend({
  static: {
    jsonapiType: 'taggings',
  },
  attrs: {
    tag: belongsTo(),
    tagId: attr(),
    taggableId: attr(),
    taggableType: attr(),
  }
})

const SmartGroup = ApplicationRecord.extend({
  static: {
    jsonapiType: 'smart_groups',
  },
  attrs: {
    smartGroupConditions: hasMany(),
    groupCategory: belongsTo(),
    groupCategoryId: attr(),

    name: attr(),
    type: attr(),
    joinType: attr(),
    useInPresentationContentLibrary: attr(),
    playbackStyle: attr(),
    targetClass: attr(),
    members: attr({ persist: false }),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const SmartGroupCondition = ApplicationRecord.extend({
  static: {
    jsonapiType: 'smart_group_conditions',
  },
  attrs: {
    smartGroup: belongsTo(),
    smartGroupId: attr(),

    comparitor: attr(),
    value: attr(),
    column: attr(),
  },
})

const DuplicateMediaGroup = ApplicationRecord.extend({
  static: {
    jsonapiType: 'duplicate_media_groups',
  },

  attrs: {
    mediaGroup: belongsTo(),
  }
})

const MediaGroup = ApplicationRecord.extend({
  static: {
    jsonapiType: 'media_groups',
  },
  attrs: {
    mediaGroupItems: hasMany(),
    duplicateMediaGroups: hasMany(),

    name: attr(),
    playbackStyle: attr(),
    isLocked: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const MediaGroupItem = ApplicationRecord.extend({
  static: {
    jsonapiType: 'media_group_items',
  },
  attrs: {
    media: belongsTo(),
    mediaId: attr(),
    mediaGroup: belongsTo(),

    position: attr(),
  },
})


const PlayerGroup = ApplicationRecord.extend({
  static: {
    jsonapiType: 'player_groups',
  },
  attrs: {
    groupCategory: belongsTo(),
    groupCategoryId: attr(),

    name: attr(),
    members: attr({ persist: false }),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const GroupCategory = ApplicationRecord.extend({
  static: {
    jsonapiType: 'group_categories',
  },
  attrs: {
    name: attr(),
    targetClass: attr(),
    members: attr({ persist: false }),
  },
})

const Dialect = ApplicationRecord.extend({
  static: {
    jsonapiType: 'dialects',
  },
  attrs: {
    subtitles: hasMany(),

    code: attr(),
    name: attr(),
  },
})

const Font = ApplicationRecord.extend({
  static: {
    jsonapiType: 'fonts',
  },
  attrs: {
    name: attr(),
    fileName: attr(),
    webuiDisplayName: attr(),
  },
})

const Subtitle = ApplicationRecord.extend({
  static: {
    jsonapiType: 'subtitles',
  },
  attrs: {
    media: belongsTo(),
    dialect: belongsTo(),

    data: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    createdByName: attr(),
    updatedByName: attr(),
  },
})

const CustomField = ApplicationRecord.extend({
  static: {
    jsonapiType: 'custom_fields',
  },
  attrs: {
    name: attr(),
    model: attr(),
  },
})

const CustomFieldValue = ApplicationRecord.extend({
  static: {
    jsonapiType: 'custom_field_values',
  },
  attrs: {
    customField: belongsTo(),

    modelId: attr(),
    modelType: attr(),
    value: attr(),
  },
})

const loginWithJWT = async (url, username, password) => {
  ApplicationRecord.baseUrl = url

  const user = {
    login: username,
    password,
  }

  const response = await fetch(`${url}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user }),
  })

  if (response.status === 200) {
    ApplicationRecord.jwt = response.headers.get('authorization')

    return true
  } else {
    return false
  }
}

module.exports = {
  CurrentUser,
  ApplicationRecord,
  CustomField,
  CustomFieldValue,
  Subtitle,
  Dialect,
  Font,
  FeedItem,
  GroupCategory,
  PlayerGroup,
  MediaGroup,
  MediaGroupItem,
  DuplicateMediaGroup,
  SmartGroup,
  SmartGroupCondition,
  Tag,
  TagGroup,
  Tagging,
  Network,
  Location,
  Player,
  Preference,
  Media,
  SpotSwapItem,
  loginWithJWT,
}
