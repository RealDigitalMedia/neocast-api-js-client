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


const DisplayConfiguration = ApplicationRecord.extend({
  static: {
    jsonapiType: 'display_configurations',
  },

  attrs: {
    name: attr(),
    screenResolutionX: attr(),
    screenResolutionY: attr(),
    screenArrayX: attr(),
    screenArrayY: attr(),
    orientation: attr(),
  }
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

const PlayerDistribution = ApplicationRecord.extend({
  static: {
    jsonapiType: 'player_distributions',
  },
  attrs: {
    networks: hasMany(),
    locations: hasMany(),
    players: hasMany(),
    playerGroups: hasMany(),
    smartGroups: hasMany(),

    playerCount: attr(),
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
    activeInterfaceHumanReadable: attr(),
    addressStreetLine1: attr(),
    addressStreetLine2: attr(),
    callInFrequencyMinutes: attr(),
    callInUrl: attr(),
    changePendingOnServer: attr(),
    city: attr(),
    clientAddressableHostname: attr(),
    clockDelta: attr(),
    country: attr(),
    createdAt: attr(),
    createdByName: attr(),
    diskUsageBytes: attr(),
    diskUsageDetails: attr(),
    diskUsagePercentage: attr(),
    displayCommunicationHasErrors: attr(),
    displayCommunicationHasReads: attr(),
    displayCommunicationHasWrites: attr(),
    displayConfigurationObject: attr(),
    displayControlFrequency: attr(),
    displayModel: attr(),
    displayOrientation: attr(),
    displaySource: attr(),
    displayStatus: attr(),
    displayVolume: attr(),
    displayVolumeMaximum: attr(),
    displayVolumeMinimum: attr(),
    downloadHoursFrom: attr(),
    downloadHoursTimeblock: attr(),
    downloadHoursTimeblockEffective: attr(),
    downloadHoursTimeblockInherited: attr(),
    downloadHoursSingleLine: attr(),
    downloadMaxFileSize: attr(),
    downloadSize: attr(),
    downloadStatus: attr(),
    email: attr(),
    eth1authentication: attr(),
    firmwareVersion: attr(),
    firstSeen: attr(),
    gateway: attr(),
    hasCopyOnBoot: attr(),
    hoursOpenPerWeek: attr(),
    housekeepingFrequencyMinutes: attr(),
    httpProxyUrl: attr(),
    id: attr(),
    inDownloadHours: attr(),
    inEmergencyShutdownMode: attr(),
    inOperatingHours: attr(),
    installedOn: attr(),
    ipAddress: attr(),
    lastDeliveredLogPlayertime: attr(),
    lastDownloadedPresentationJsonServertime: attr(),
    lastHeartbeatServertime: attr(),
    lastHousekeepingServertime: attr(),
    lastPowerOn: attr(),
    lastRetrieveSpeedtestServertime: attr(),
    lastRetrievedLogsServertime: attr(),
    lastRetrievedStatusServertime: attr(),
    lastSeen: attr(),
    lastSeenIp: attr(),
    lastSynchronizedConfigurationServertime: attr(),
    lastSynchronizedContentServertime: attr(),
    lastSynchronizedOnDemandContentServertime: attr(),
    lastSynchronizedPluginsServertime: attr(),
    linkLevel: attr(),
    linkNoise: attr(),
    linkQuality: attr(),
    locationName: attr(),
    macAddress: attr(),
    modelNumber: attr(),
    name: attr(),
    needsPresentationJsonDownload: attr(),
    neocastDataNeedsUpdate: attr(),
    newFileName: attr(),
    ntpServers: attr(),
    onDemandNeedsRefresh: attr(),
    onDemandRemoteName: attr(),
    online: attr(),
    operatingHoursFrom: attr(),
    operatingHoursTimeblock: attr(),
    operatingHoursTimeblockEffective: attr(),
    operatingHoursTimeblockInherited: attr(),
    operatingHoursSingleLine: attr(),
    operatingSystem: attr(),
    pendingDownloadsTotalByteCount: attr(),
    pendingDownloadsTotalFileCount: attr(),
    pendingFirmwareUpdateFilename: attr(),
    pendingFirmwareUpdateStarttime: attr(),
    phone: attr(),
    playerTime: attr(),
    postalCode: attr(),
    pusherAccessCode: attr(),
    rebootPending: attr(),
    retrieveLogsFrequencyMinutes: attr(),
    retrieveMuninDataFrequencyMinutes: attr(),
    retrieveSpeedtestFrequencyMinutes: attr(),
    retrieveStatusFrequencyMinutes: attr(),
    screenShotPending: attr(),
    speedTestDownloadMbps: attr(),
    speedTestPing: attr(),
    speedTestUploadMbps: attr(),
    speedTestUrl: attr(),
    stateOrProvince: attr(),
    storeDistrict: attr(),
    storeNumber: attr(),
    synchronizeConfigurationFrequencyMinutes: attr(),
    synchronizeContentFrequencyMinutes: attr(),
    synchronizeOnDemandContentFrequencyMinutes: attr(),
    synchronizePluginsFrequencyMinutes: attr(),
    tagList: attr(),
    thumbnailUrl: attr(),
    timezone: attr(),
    triggerListenerEnabled: attr(),
    triggerListenerPort: attr(),
    tunnelRequestCount: attr(),
    uncompletedDeviceFileDeletionCount: attr(),
    updatedAge: attr(),
    updatedAt: attr(),
    updatedByName: attr(),
    uptime: attr(),
    videoOutputMode: attr(),
    watchdogIntervalSeconds: attr(),
  }
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
    aspectRatio: attr(),
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
    expired: attr(),
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
    mediaUrl: attr(),
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
    used: attr(),
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

const DuplicateSmartGroup = ApplicationRecord.extend({
  static: {
    jsonapiType: 'duplicate_smart_groups',
  },

  attrs: {
    smartGroup: belongsTo(),
    smartGroupId: attr(),
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

  methods: {
    // Returns a new smart group id, or false if unable to duplicate
    duplicate: async function() {
      const newSmartGroup = new DuplicateSmartGroup()
      newSmartGroup.smartGroupId = this.id

      const success = await newSmartGroup.save()
      if (success) {
        return newSmartGroup.smartGroupId
      } else {
        return false
      }
    },
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
    mediaGroupId: attr(),
  }
})

const MediaGroup = ApplicationRecord.extend({
  static: {
    jsonapiType: 'media_groups',
  },
  attrs: {
    groupCategory: belongsTo(),
    groupCategoryId: attr(),

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

  methods: {
    // Returns a new media group id, or false if unable to duplicate
    duplicate: async function() {
      const newMediaGroup = new DuplicateMediaGroup()
      newMediaGroup.mediaGroupId = this.id

      const success = await newMediaGroup.save()
      if (success) {
        return newMediaGroup.mediaGroupId
      } else {
        return false
      }
    },
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
    playerDistribution: belongsTo(),

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
  loginWithJWT,

  CustomField,
  CustomFieldValue,
  Dialect,
  DisplayConfiguration,
  DuplicateMediaGroup,
  DuplicateSmartGroup,
  FeedItem,
  Font,
  GroupCategory,
  Location,
  Media,
  MediaGroup,
  MediaGroupItem,
  Network,
  Player,
  PlayerDistribution,
  PlayerGroup,
  Preference,
  SmartGroup,
  SmartGroupCondition,
  SpotSwapItem,
  Subtitle,
  Tag,
  TagGroup,
  Tagging,
}
