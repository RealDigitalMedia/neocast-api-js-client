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

  attrs: {
    modelClassName: attr(),
  },
})

const GranularPermission = ApplicationRecord.extend({
  static: {
    jsonapiType: 'granular_permissions',
  },
  attrs: {
    user: belongsTo(),
    permissable: belongsTo(),
    permissableName: attr(),

    userId: attr(),
    permissableId: attr(),
    permissableType: attr(),
    permission: attr(),
  },
})

const ContentExclusion = ApplicationRecord.extend({
  static: {
    jsonapiType: 'content_exclusions',
  },

  attrs: {
    mediaId: attr(),
    customerId: attr(),
    excluderType: attr(),
    excluderId: attr(),

    media: belongsTo(),
    customer: belongsTo(),
    excluder: belongsTo(),
  },
})

const Customer = ApplicationRecord.extend({
  static: {
    jsonapiType: 'customers',
  },

  attrs: {
    name: attr(),

    customFields: hasMany(),
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
    presentationOnDemandMediaId: attr(),
    presentationOnDemandMediaType: attr(),
    presentationOnDemandMediaName: attr(),
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
    presentationOnDemandMediaId: attr(),
    presentationOnDemandMediaType: attr(),
    presentationOnDemandMediaName: attr(),

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

    roleNames: attr(),

    password: attr(),
    passwordConfirmation: attr(),

    isAdmin: attr(),
    isSuperUser: attr(),
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
    type: attr(),

    allPresentations: attr({ persist: false }),

    activeInterfaceHumanReadable: attr(),
    activatedAt: attr(),
    deActivatedAt: attr(),
    addressStreetLine1: attr(),
    addressStreetLine2: attr(),
    callInFrequencyMinutes: attr(),
    callInUrl: attr(),
    changePendingOnServer: attr(),
    city: attr(),
    clientAddressableHostname: attr(),
    clockDelta: attr(),
    country: attr(),
    controlDuringOpenCloseHours: attr(),
    createdAt: attr(),
    createdByName: attr(),
    diskUsageBytes: attr(),
    diskUsageDetails: attr(),
    diskUsagePercentage: attr(),
    displayCommunicationHasErrors: attr(),
    displayCommunicationHasReads: attr(),
    displayCommunicationHasWrites: attr(),
    displayConfigurationObject: attr(),
    displayConfigurationId: attr(),
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
    isActive: attr(),
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
    presentationOnDemandMediaId: attr(),
    presentationOnDemandMediaType: attr(),
    presentationOnDemandMediaName: attr(),
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

    assignedFiles: hasMany(),
    binAssignments: hasMany(),
    contentExclusions: hasMany(),
    customFieldValues: hasMany(),
    customer: belongsTo(),
    directoryFiles: hasMany(),
    displayConfiguration: belongsTo(),
    location: belongsTo(),
    network: belongsTo(),
    playerDialectPreferences: hasMany(),
    videoOutputs: hasMany(),
  },
})

const PlayerDialectPreference = ApplicationRecord.extend({
  static: {
    jsonapiType: 'player_dialect_preferences',
  },

  attrs: {
    playerId: attr(),
    dialectId: attr(),
    position: attr(),
    player: belongsTo(),
    dialect: belongsTo(),
  },
})

const AssignedFile = ApplicationRecord.extend({
  static: {
    jsonapiType: 'assigned_files',
  },
  attrs: {
    directoryId: attr(),
    deviceId: attr(),
    onDeviceName: attr(),
    length: attr(),
    checksumType: attr(),
    checksumValue: attr(),
    deliveryMechanismId: attr(),
    awaitingDownload: attr(),
    deviceType: attr(),
    downloadableType: attr(),
    downloadableId: attr(),
    earliestNeedByDate: attr(),
    updatedAt: attr(),
    createdAt: attr(),
    category: attr(),
    explicitUrl: attr(),
    failedDownloadAttempts: attr(),
  },
})

const DirectoryFile = ApplicationRecord.extend({
  static: {
    jsonapiType: 'directory_files',
  },
  attrs: {
    directoryId: attr(),
    deviceId: attr(),
    name: attr(),
    length: attr(),
    md5Sum: attr(),
    lastAssignedDate: attr(),
    raw: attr(),
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

const BinAssignment = ApplicationRecord.extend({
  static: {
    jsonapiType: 'bin_assignments',
  },
  attrs: {
    binId: attr(),
    distributableId: attr(),
    distributableType: attr(),
    mediaId: attr(),

    mediaName: attr(),
    mediaClass: attr(),

    media: belongsTo(),
    distributable: belongsTo(),
    bin: belongsTo(),
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
    tags: hasMany(),

    name: attr(),
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
    taggings: hasMany(),

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
  },
})

const DuplicateSmartGroup = ApplicationRecord.extend({
  static: {
    jsonapiType: 'duplicate_smart_groups',
  },

  attrs: {
    smartGroup: belongsTo(),
    smartGroupId: attr(),
  },
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
  },
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
    customFieldId: attr(),

    modelId: attr(),
    modelType: attr(),
    value: attr(),
  },
})

const VideoOutput = ApplicationRecord.extend({
  static: {
    jsonapiType: 'video_outputs',
  },
  attrs: {
    player: belongsTo(),
    videoOutputResolutions: hasMany(),

    name: attr(),
    width: attr(),
    height: attr(),
    xpos: attr(),
    ypos: attr(),
    displayOrder: attr(),
    enabled: attr(),
    connected: attr(),
    createdAt: attr(),
    updatedAt: attr(),
  },
})

const DisplayModel = ApplicationRecord.extend({
  static: {
    jsonapiType: 'display_models',
  },
  attrs: {
    name: attr(),
    displayDriver: belongsTo(),
    displayModelVendor: belongsTo(),
    displayModelSources: hasMany(),
  },
})

const DisplayModelSource = ApplicationRecord.extend({
  static: {
    jsonapiType: 'display_model_sources',
  },
  attrs: {
    name: attr(),
    modelSpecificValue: attr(),
    displayDriver: belongsTo(),
    displayModel: belongsTo(),
  },
})

const DisplayDriver = ApplicationRecord.extend({
  static: {
    jsonapiType: 'display_drivers',
  },
  attrs: {
    name: attr(),
    volumeLow: attr(),
    volumeHigh: attr(),
    displayModelVendor: belongsTo(),
    displayModelSources: hasMany(),
    displayModels: hasMany(),
  },
})

const DisplayModelVendor = ApplicationRecord.extend({
  static: {
    jsonapiType: 'display_model_vendors',
  },
  attrs: {
    name: attr(),
    displayDrivers: hasMany(),
  },
})

const VideoOutputResolution = ApplicationRecord.extend({
  static: {
    jsonapiType: 'video_output_resolutions',
  },
  attrs: {
    videoOutput: belongsTo(),

    width: attr(),
    height: attr(),
    refresh: attr(),
    active: attr(),
    createdAt: attr(),
    updatedAt: attr(),
  },
})

const Presentation = ApplicationRecord.extend({
  static: {
    jsonapiType: 'presentations',
  },
  attrs: {
    name: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    isLaunched: attr(),
    startDate: attr(),
    endDate: attr(),
    showInDirector: attr(),

    displayConfiguration: belongsTo(),
    playerDistribution: belongsTo(),
  }
})

const User = ApplicationRecord.extend({
  static: {
    jsonapiType: 'users',
  },
  attrs: {
    login: attr(),
    email: attr(),
    createdAt: attr(),
    updatedAt: attr(),
    name: attr(),
    customerId: attr(),
    lastLoginAt: attr(),
    locale: attr(),
    resetPasswordSentAt: attr(),
    signInCount: attr(),
    currentSignInAt: attr(),
    lastSignInAt: attr(),
    currentSignInIp: attr(),
    lastSignInIp: attr(),
    failedAttempts: attr(),
    unlockToken: attr(),
    lockedAt: attr(),
    mustChangePassword: attr(),
    resetPreferences: attr(),

    password: attr(),
    passwordConfirmation: attr(),
    adminPasswordForPasswordModification: attr(),

    roleNames: attr(),

    isAdmin: attr(),
    isSuperUser: attr(),

    gupViewPlayers: attr(),
    gupUpdatePlayers: attr(),
    gupDeletePlayers: attr(),
    gupViewMedia: attr(),
    gupUpdateMedia: attr(),
    gupDeleteMedia: attr(),

    customer: belongsTo(),
    granularPermissions: hasMany(),
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

  AssignedFile,
  BinAssignment,
  ContentExclusion,
  CustomField,
  CustomFieldValue,
  Dialect,
  DirectoryFile,
  DisplayConfiguration,
  DisplayDriver,
  DisplayModel,
  DisplayModelSource,
  DisplayModelVendor,
  DuplicateMediaGroup,
  DuplicateSmartGroup,
  FeedItem,
  Font,
  GranularPermission,
  GroupCategory,
  Location,
  Media,
  MediaGroup,
  MediaGroupItem,
  Network,
  Player,
  PlayerDialectPreference,
  PlayerDistribution,
  PlayerGroup,
  Preference,
  Presentation,
  SmartGroup,
  SmartGroupCondition,
  SpotSwapItem,
  Subtitle,
  Tag,
  TagGroup,
  Tagging,
  User,
  VideoOutput,
  VideoOutputResolution,
}
