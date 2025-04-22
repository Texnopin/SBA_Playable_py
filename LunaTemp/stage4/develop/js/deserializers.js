var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6622 = root || request.c( 'UnityEngine.JointSpring' )
  var i6623 = data
  i6622.spring = i6623[0]
  i6622.damper = i6623[1]
  i6622.targetPosition = i6623[2]
  return i6622
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6624 = root || request.c( 'UnityEngine.JointMotor' )
  var i6625 = data
  i6624.m_TargetVelocity = i6625[0]
  i6624.m_Force = i6625[1]
  i6624.m_FreeSpin = i6625[2]
  return i6624
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6626 = root || request.c( 'UnityEngine.JointLimits' )
  var i6627 = data
  i6626.m_Min = i6627[0]
  i6626.m_Max = i6627[1]
  i6626.m_Bounciness = i6627[2]
  i6626.m_BounceMinVelocity = i6627[3]
  i6626.m_ContactDistance = i6627[4]
  i6626.minBounce = i6627[5]
  i6626.maxBounce = i6627[6]
  return i6626
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6628 = root || request.c( 'UnityEngine.JointDrive' )
  var i6629 = data
  i6628.m_PositionSpring = i6629[0]
  i6628.m_PositionDamper = i6629[1]
  i6628.m_MaximumForce = i6629[2]
  i6628.m_UseAcceleration = i6629[3]
  return i6628
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6630 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6631 = data
  i6630.m_Spring = i6631[0]
  i6630.m_Damper = i6631[1]
  return i6630
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6632 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6633 = data
  i6632.m_Limit = i6633[0]
  i6632.m_Bounciness = i6633[1]
  i6632.m_ContactDistance = i6633[2]
  return i6632
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6634 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6635 = data
  i6634.m_ExtremumSlip = i6635[0]
  i6634.m_ExtremumValue = i6635[1]
  i6634.m_AsymptoteSlip = i6635[2]
  i6634.m_AsymptoteValue = i6635[3]
  i6634.m_Stiffness = i6635[4]
  return i6634
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6636 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6637 = data
  i6636.m_LowerAngle = i6637[0]
  i6636.m_UpperAngle = i6637[1]
  return i6636
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6638 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6639 = data
  i6638.m_MotorSpeed = i6639[0]
  i6638.m_MaximumMotorTorque = i6639[1]
  return i6638
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6640 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6641 = data
  i6640.m_DampingRatio = i6641[0]
  i6640.m_Frequency = i6641[1]
  i6640.m_Angle = i6641[2]
  return i6640
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6642 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6643 = data
  i6642.m_LowerTranslation = i6643[0]
  i6642.m_UpperTranslation = i6643[1]
  return i6642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6645 = data
  i6644.position = new pc.Vec3( i6645[0], i6645[1], i6645[2] )
  i6644.scale = new pc.Vec3( i6645[3], i6645[4], i6645[5] )
  i6644.rotation = new pc.Quat(i6645[6], i6645[7], i6645[8], i6645[9])
  return i6644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i6646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i6647 = data
  i6646.enabled = !!i6647[0]
  i6646.sortingLayerIndex = i6647[1]
  i6646.sortingOrder = i6647[2]
  i6646.sortingLayerName = i6647[3]
  return i6646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6649 = data
  i6648.enabled = !!i6649[0]
  request.r(i6649[1], i6649[2], 0, i6648, 'sharedMaterial')
  var i6651 = i6649[3]
  var i6650 = []
  for(var i = 0; i < i6651.length; i += 2) {
  request.r(i6651[i + 0], i6651[i + 1], 2, i6650, '')
  }
  i6648.sharedMaterials = i6650
  i6648.receiveShadows = !!i6649[4]
  i6648.shadowCastingMode = i6649[5]
  i6648.sortingLayerID = i6649[6]
  i6648.sortingOrder = i6649[7]
  i6648.lightmapIndex = i6649[8]
  i6648.lightmapSceneIndex = i6649[9]
  i6648.lightmapScaleOffset = new pc.Vec4( i6649[10], i6649[11], i6649[12], i6649[13] )
  i6648.lightProbeUsage = i6649[14]
  i6648.reflectionProbeUsage = i6649[15]
  i6648.color = new pc.Color(i6649[16], i6649[17], i6649[18], i6649[19])
  request.r(i6649[20], i6649[21], 0, i6648, 'sprite')
  i6648.flipX = !!i6649[22]
  i6648.flipY = !!i6649[23]
  i6648.drawMode = i6649[24]
  i6648.size = new pc.Vec2( i6649[25], i6649[26] )
  i6648.tileMode = i6649[27]
  i6648.adaptiveModeThreshold = i6649[28]
  i6648.maskInteraction = i6649[29]
  i6648.spriteSortPoint = i6649[30]
  return i6648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6655 = data
  i6654.name = i6655[0]
  i6654.tagId = i6655[1]
  i6654.enabled = !!i6655[2]
  i6654.isStatic = !!i6655[3]
  i6654.layer = i6655[4]
  return i6654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6656 = root || new pc.UnityMaterial()
  var i6657 = data
  i6656.name = i6657[0]
  request.r(i6657[1], i6657[2], 0, i6656, 'shader')
  i6656.renderQueue = i6657[3]
  i6656.enableInstancing = !!i6657[4]
  var i6659 = i6657[5]
  var i6658 = []
  for(var i = 0; i < i6659.length; i += 1) {
    i6658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6659[i + 0]) );
  }
  i6656.floatParameters = i6658
  var i6661 = i6657[6]
  var i6660 = []
  for(var i = 0; i < i6661.length; i += 1) {
    i6660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6661[i + 0]) );
  }
  i6656.colorParameters = i6660
  var i6663 = i6657[7]
  var i6662 = []
  for(var i = 0; i < i6663.length; i += 1) {
    i6662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6663[i + 0]) );
  }
  i6656.vectorParameters = i6662
  var i6665 = i6657[8]
  var i6664 = []
  for(var i = 0; i < i6665.length; i += 1) {
    i6664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6665[i + 0]) );
  }
  i6656.textureParameters = i6664
  var i6667 = i6657[9]
  var i6666 = []
  for(var i = 0; i < i6667.length; i += 1) {
    i6666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6667[i + 0]) );
  }
  i6656.materialFlags = i6666
  return i6656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6671 = data
  i6670.name = i6671[0]
  i6670.value = i6671[1]
  return i6670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6675 = data
  i6674.name = i6675[0]
  i6674.value = new pc.Color(i6675[1], i6675[2], i6675[3], i6675[4])
  return i6674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6679 = data
  i6678.name = i6679[0]
  i6678.value = new pc.Vec4( i6679[1], i6679[2], i6679[3], i6679[4] )
  return i6678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6683 = data
  i6682.name = i6683[0]
  request.r(i6683[1], i6683[2], 0, i6682, 'value')
  return i6682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6687 = data
  i6686.name = i6687[0]
  i6686.enabled = !!i6687[1]
  return i6686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6689 = data
  i6688.name = i6689[0]
  i6688.width = i6689[1]
  i6688.height = i6689[2]
  i6688.mipmapCount = i6689[3]
  i6688.anisoLevel = i6689[4]
  i6688.filterMode = i6689[5]
  i6688.hdr = !!i6689[6]
  i6688.format = i6689[7]
  i6688.wrapMode = i6689[8]
  i6688.alphaIsTransparency = !!i6689[9]
  i6688.alphaSource = i6689[10]
  i6688.graphicsFormat = i6689[11]
  i6688.sRGBTexture = !!i6689[12]
  i6688.desiredColorSpace = i6689[13]
  i6688.wrapU = i6689[14]
  i6688.wrapV = i6689[15]
  return i6688
}

Deserializers["_Project.Code.Core.Character.CharacterInstaller"] = function (request, data, root) {
  var i6690 = root || request.c( '_Project.Code.Core.Character.CharacterInstaller' )
  var i6691 = data
  request.r(i6691[0], i6691[1], 0, i6690, '_mover')
  request.r(i6691[2], i6691[3], 0, i6690, '_castingDetector')
  request.r(i6691[4], i6691[5], 0, i6690, '_animator')
  var i6693 = i6691[6]
  var i6692 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Inventory.ItemInventory')))
  for(var i = 0; i < i6693.length; i += 2) {
  request.r(i6693[i + 0], i6693[i + 1], 1, i6692, '')
  }
  i6690._storages = i6692
  return i6690
}

Deserializers["_Project.Code.Core.Collision.OverlapCollisionDetector"] = function (request, data, root) {
  var i6696 = root || request.c( '_Project.Code.Core.Collision.OverlapCollisionDetector' )
  var i6697 = data
  i6696.detectionRadius = i6697[0]
  i6696.collisionMask = UnityEngine.LayerMask.FromIntegerValue( i6697[1] )
  return i6696
}

Deserializers["_Project.Code.Core.Character.Mover"] = function (request, data, root) {
  var i6698 = root || request.c( '_Project.Code.Core.Character.Mover' )
  var i6699 = data
  i6698._speed = i6699[0]
  i6698.isMoving = !!i6699[1]
  request.r(i6699[2], i6699[3], 0, i6698, '_rigidbody')
  request.r(i6699[4], i6699[5], 0, i6698, '_footstepAudioSource')
  return i6698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i6700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i6701 = data
  i6700.bodyType = i6701[0]
  request.r(i6701[1], i6701[2], 0, i6700, 'material')
  i6700.simulated = !!i6701[3]
  i6700.useAutoMass = !!i6701[4]
  i6700.mass = i6701[5]
  i6700.drag = i6701[6]
  i6700.angularDrag = i6701[7]
  i6700.gravityScale = i6701[8]
  i6700.collisionDetectionMode = i6701[9]
  i6700.sleepMode = i6701[10]
  i6700.constraints = i6701[11]
  return i6700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i6702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i6703 = data
  i6702.radius = i6703[0]
  i6702.enabled = !!i6703[1]
  i6702.isTrigger = !!i6703[2]
  i6702.usedByEffector = !!i6703[3]
  i6702.density = i6703[4]
  i6702.offset = new pc.Vec2( i6703[5], i6703[6] )
  request.r(i6703[7], i6703[8], 0, i6702, 'material')
  return i6702
}

Deserializers["_Project.Code.Core.Character.CharacterAnimator"] = function (request, data, root) {
  var i6704 = root || request.c( '_Project.Code.Core.Character.CharacterAnimator' )
  var i6705 = data
  request.r(i6705[0], i6705[1], 0, i6704, '_walkAnimator')
  request.r(i6705[2], i6705[3], 0, i6704, '_idleAnimator')
  request.r(i6705[4], i6705[5], 0, i6704, '_backpackAnimator')
  return i6704
}

Deserializers["_Project.Code.Core.Character.TopDownAnimator"] = function (request, data, root) {
  var i6706 = root || request.c( '_Project.Code.Core.Character.TopDownAnimator' )
  var i6707 = data
  request.r(i6707[0], i6707[1], 0, i6706, '_config')
  request.r(i6707[2], i6707[3], 0, i6706, '_animator')
  request.r(i6707[4], i6707[5], 0, i6706, '_flipBody')
  return i6706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6709 = data
  request.r(i6709[0], i6709[1], 0, i6708, 'clip')
  request.r(i6709[2], i6709[3], 0, i6708, 'outputAudioMixerGroup')
  i6708.playOnAwake = !!i6709[4]
  i6708.loop = !!i6709[5]
  i6708.time = i6709[6]
  i6708.volume = i6709[7]
  i6708.pitch = i6709[8]
  i6708.enabled = !!i6709[9]
  return i6708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6711 = data
  request.r(i6711[0], i6711[1], 0, i6710, 'animatorController')
  request.r(i6711[2], i6711[3], 0, i6710, 'avatar')
  i6710.updateMode = i6711[4]
  i6710.hasTransformHierarchy = !!i6711[5]
  i6710.applyRootMotion = !!i6711[6]
  var i6713 = i6711[7]
  var i6712 = []
  for(var i = 0; i < i6713.length; i += 2) {
  request.r(i6713[i + 0], i6713[i + 1], 2, i6712, '')
  }
  i6710.humanBones = i6712
  i6710.enabled = !!i6711[8]
  return i6710
}

Deserializers["_Project.Code.Core.Character.SortingGroupAnimator"] = function (request, data, root) {
  var i6716 = root || request.c( '_Project.Code.Core.Character.SortingGroupAnimator' )
  var i6717 = data
  i6716._order = i6717[0]
  return i6716
}

Deserializers["_Project.Code.Core.Items.Inventory.ItemInventory"] = function (request, data, root) {
  var i6718 = root || request.c( '_Project.Code.Core.Items.Inventory.ItemInventory' )
  var i6719 = data
  i6718._type = i6719[0]
  i6718._inventory = i6719[1]
  i6718._capacity = i6719[2]
  request.r(i6719[3], i6719[4], 0, i6718, '_musicItemAdded')
  return i6718
}

Deserializers["_Project.Code.Core.Items.Inventory.ColumnInventoryView"] = function (request, data, root) {
  var i6720 = root || request.c( '_Project.Code.Core.Items.Inventory.ColumnInventoryView' )
  var i6721 = data
  var i6723 = i6721[0]
  var i6722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6723.length; i += 2) {
  request.r(i6723[i + 0], i6723[i + 1], 1, i6722, '')
  }
  i6720._columnPoints = i6722
  i6720._destroyOnEmptied = !!i6721[1]
  request.r(i6721[2], i6721[3], 0, i6720, '_inventory')
  return i6720
}

Deserializers["MusicItemAdded"] = function (request, data, root) {
  var i6726 = root || request.c( 'MusicItemAdded' )
  var i6727 = data
  request.r(i6727[0], i6727[1], 0, i6726, 'musicSource')
  request.r(i6727[2], i6727[3], 0, i6726, 'musicClip_coin')
  request.r(i6727[4], i6727[5], 0, i6726, 'musicClip_corn')
  request.r(i6727[6], i6727[7], 0, i6726, 'musicClip_popcorn')
  return i6726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6729 = data
  i6728.pivot = new pc.Vec2( i6729[0], i6729[1] )
  i6728.anchorMin = new pc.Vec2( i6729[2], i6729[3] )
  i6728.anchorMax = new pc.Vec2( i6729[4], i6729[5] )
  i6728.sizeDelta = new pc.Vec2( i6729[6], i6729[7] )
  i6728.anchoredPosition3D = new pc.Vec3( i6729[8], i6729[9], i6729[10] )
  i6728.rotation = new pc.Quat(i6729[11], i6729[12], i6729[13], i6729[14])
  i6728.scale = new pc.Vec3( i6729[15], i6729[16], i6729[17] )
  return i6728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6731 = data
  i6730.cullTransparentMesh = !!i6731[0]
  return i6730
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6732 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6733 = data
  i6732.m_hasFontAssetChanged = !!i6733[0]
  request.r(i6733[1], i6733[2], 0, i6732, 'm_baseMaterial')
  i6732.m_maskOffset = new pc.Vec4( i6733[3], i6733[4], i6733[5], i6733[6] )
  i6732.m_text = i6733[7]
  i6732.m_isRightToLeft = !!i6733[8]
  request.r(i6733[9], i6733[10], 0, i6732, 'm_fontAsset')
  request.r(i6733[11], i6733[12], 0, i6732, 'm_sharedMaterial')
  var i6735 = i6733[13]
  var i6734 = []
  for(var i = 0; i < i6735.length; i += 2) {
  request.r(i6735[i + 0], i6735[i + 1], 2, i6734, '')
  }
  i6732.m_fontSharedMaterials = i6734
  request.r(i6733[14], i6733[15], 0, i6732, 'm_fontMaterial')
  var i6737 = i6733[16]
  var i6736 = []
  for(var i = 0; i < i6737.length; i += 2) {
  request.r(i6737[i + 0], i6737[i + 1], 2, i6736, '')
  }
  i6732.m_fontMaterials = i6736
  i6732.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6733[17], i6733[18], i6733[19], i6733[20])
  i6732.m_fontColor = new pc.Color(i6733[21], i6733[22], i6733[23], i6733[24])
  i6732.m_enableVertexGradient = !!i6733[25]
  i6732.m_colorMode = i6733[26]
  i6732.m_fontColorGradient = request.d('TMPro.VertexGradient', i6733[27], i6732.m_fontColorGradient)
  request.r(i6733[28], i6733[29], 0, i6732, 'm_fontColorGradientPreset')
  request.r(i6733[30], i6733[31], 0, i6732, 'm_spriteAsset')
  i6732.m_tintAllSprites = !!i6733[32]
  request.r(i6733[33], i6733[34], 0, i6732, 'm_StyleSheet')
  i6732.m_TextStyleHashCode = i6733[35]
  i6732.m_overrideHtmlColors = !!i6733[36]
  i6732.m_faceColor = UnityEngine.Color32.ConstructColor(i6733[37], i6733[38], i6733[39], i6733[40])
  i6732.m_fontSize = i6733[41]
  i6732.m_fontSizeBase = i6733[42]
  i6732.m_fontWeight = i6733[43]
  i6732.m_enableAutoSizing = !!i6733[44]
  i6732.m_fontSizeMin = i6733[45]
  i6732.m_fontSizeMax = i6733[46]
  i6732.m_fontStyle = i6733[47]
  i6732.m_HorizontalAlignment = i6733[48]
  i6732.m_VerticalAlignment = i6733[49]
  i6732.m_textAlignment = i6733[50]
  i6732.m_characterSpacing = i6733[51]
  i6732.m_wordSpacing = i6733[52]
  i6732.m_lineSpacing = i6733[53]
  i6732.m_lineSpacingMax = i6733[54]
  i6732.m_paragraphSpacing = i6733[55]
  i6732.m_charWidthMaxAdj = i6733[56]
  i6732.m_enableWordWrapping = !!i6733[57]
  i6732.m_wordWrappingRatios = i6733[58]
  i6732.m_overflowMode = i6733[59]
  request.r(i6733[60], i6733[61], 0, i6732, 'm_linkedTextComponent')
  request.r(i6733[62], i6733[63], 0, i6732, 'parentLinkedComponent')
  i6732.m_enableKerning = !!i6733[64]
  i6732.m_enableExtraPadding = !!i6733[65]
  i6732.checkPaddingRequired = !!i6733[66]
  i6732.m_isRichText = !!i6733[67]
  i6732.m_parseCtrlCharacters = !!i6733[68]
  i6732.m_isOrthographic = !!i6733[69]
  i6732.m_isCullingEnabled = !!i6733[70]
  i6732.m_horizontalMapping = i6733[71]
  i6732.m_verticalMapping = i6733[72]
  i6732.m_uvLineOffset = i6733[73]
  i6732.m_geometrySortingOrder = i6733[74]
  i6732.m_IsTextObjectScaleStatic = !!i6733[75]
  i6732.m_VertexBufferAutoSizeReduction = !!i6733[76]
  i6732.m_useMaxVisibleDescender = !!i6733[77]
  i6732.m_pageToDisplay = i6733[78]
  i6732.m_margin = new pc.Vec4( i6733[79], i6733[80], i6733[81], i6733[82] )
  i6732.m_isUsingLegacyAnimationComponent = !!i6733[83]
  i6732.m_isVolumetricText = !!i6733[84]
  request.r(i6733[85], i6733[86], 0, i6732, 'm_Material')
  i6732.m_Maskable = !!i6733[87]
  i6732.m_Color = new pc.Color(i6733[88], i6733[89], i6733[90], i6733[91])
  i6732.m_RaycastTarget = !!i6733[92]
  i6732.m_RaycastPadding = new pc.Vec4( i6733[93], i6733[94], i6733[95], i6733[96] )
  return i6732
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6738 = root || request.c( 'TMPro.VertexGradient' )
  var i6739 = data
  i6738.topLeft = new pc.Color(i6739[0], i6739[1], i6739[2], i6739[3])
  i6738.topRight = new pc.Color(i6739[4], i6739[5], i6739[6], i6739[7])
  i6738.bottomLeft = new pc.Color(i6739[8], i6739[9], i6739[10], i6739[11])
  i6738.bottomRight = new pc.Color(i6739[12], i6739[13], i6739[14], i6739[15])
  return i6738
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6740 = root || request.c( 'UnityEngine.UI.Image' )
  var i6741 = data
  request.r(i6741[0], i6741[1], 0, i6740, 'm_Sprite')
  i6740.m_Type = i6741[2]
  i6740.m_PreserveAspect = !!i6741[3]
  i6740.m_FillCenter = !!i6741[4]
  i6740.m_FillMethod = i6741[5]
  i6740.m_FillAmount = i6741[6]
  i6740.m_FillClockwise = !!i6741[7]
  i6740.m_FillOrigin = i6741[8]
  i6740.m_UseSpriteMesh = !!i6741[9]
  i6740.m_PixelsPerUnitMultiplier = i6741[10]
  request.r(i6741[11], i6741[12], 0, i6740, 'm_Material')
  i6740.m_Maskable = !!i6741[13]
  i6740.m_Color = new pc.Color(i6741[14], i6741[15], i6741[16], i6741[17])
  i6740.m_RaycastTarget = !!i6741[18]
  i6740.m_RaycastPadding = new pc.Vec4( i6741[19], i6741[20], i6741[21], i6741[22] )
  return i6740
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i6742 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i6743 = data
  request.r(i6743[0], i6743[1], 0, i6742, 'm_Texture')
  i6742.m_UVRect = UnityEngine.Rect.MinMaxRect(i6743[2], i6743[3], i6743[4], i6743[5])
  request.r(i6743[6], i6743[7], 0, i6742, 'm_Material')
  i6742.m_Maskable = !!i6743[8]
  i6742.m_Color = new pc.Color(i6743[9], i6743[10], i6743[11], i6743[12])
  i6742.m_RaycastTarget = !!i6743[13]
  i6742.m_RaycastPadding = new pc.Vec4( i6743[14], i6743[15], i6743[16], i6743[17] )
  return i6742
}

Deserializers["_Project.Code.Selling.Customer"] = function (request, data, root) {
  var i6744 = root || request.c( '_Project.Code.Selling.Customer' )
  var i6745 = data
  request.r(i6745[0], i6745[1], 0, i6744, '_bubbleView')
  return i6744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6747 = data
  i6746.enabled = !!i6747[0]
  i6746.planeDistance = i6747[1]
  i6746.referencePixelsPerUnit = i6747[2]
  i6746.isFallbackOverlay = !!i6747[3]
  i6746.renderMode = i6747[4]
  i6746.renderOrder = i6747[5]
  i6746.sortingLayerName = i6747[6]
  i6746.sortingOrder = i6747[7]
  i6746.scaleFactor = i6747[8]
  request.r(i6747[9], i6747[10], 0, i6746, 'worldCamera')
  i6746.overrideSorting = !!i6747[11]
  i6746.pixelPerfect = !!i6747[12]
  i6746.targetDisplay = i6747[13]
  i6746.overridePixelPerfect = !!i6747[14]
  return i6746
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6748 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6749 = data
  i6748.m_UiScaleMode = i6749[0]
  i6748.m_ReferencePixelsPerUnit = i6749[1]
  i6748.m_ScaleFactor = i6749[2]
  i6748.m_ReferenceResolution = new pc.Vec2( i6749[3], i6749[4] )
  i6748.m_ScreenMatchMode = i6749[5]
  i6748.m_MatchWidthOrHeight = i6749[6]
  i6748.m_PhysicalUnit = i6749[7]
  i6748.m_FallbackScreenDPI = i6749[8]
  i6748.m_DefaultSpriteDPI = i6749[9]
  i6748.m_DynamicPixelsPerUnit = i6749[10]
  i6748.m_PresetInfoIsWorld = !!i6749[11]
  return i6748
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6750 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6751 = data
  i6750.m_IgnoreReversedGraphics = !!i6751[0]
  i6750.m_BlockingObjects = i6751[1]
  i6750.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6751[2] )
  return i6750
}

Deserializers["_Project.Code.Selling.Line.BubbleView"] = function (request, data, root) {
  var i6752 = root || request.c( '_Project.Code.Selling.Line.BubbleView' )
  var i6753 = data
  request.r(i6753[0], i6753[1], 0, i6752, '_text')
  request.r(i6753[2], i6753[3], 0, i6752, '_body')
  return i6752
}

Deserializers["_Project.Code.Core.Items.Item"] = function (request, data, root) {
  var i6754 = root || request.c( '_Project.Code.Core.Items.Item' )
  var i6755 = data
  request.r(i6755[0], i6755[1], 0, i6754, '_collider')
  i6754._type = i6755[2]
  return i6754
}

Deserializers["_Project.Code.Core.Harvesting.Field"] = function (request, data, root) {
  var i6756 = root || request.c( '_Project.Code.Core.Harvesting.Field' )
  var i6757 = data
  i6756._state = i6757[0]
  request.r(i6757[1], i6757[2], 0, i6756, '_plant')
  return i6756
}

Deserializers["_Project.Code.Core.Items.InventoryInitializer"] = function (request, data, root) {
  var i6758 = root || request.c( '_Project.Code.Core.Items.InventoryInitializer' )
  var i6759 = data
  request.r(i6759[0], i6759[1], 0, i6758, '_inventory')
  i6758._count = i6759[2]
  return i6758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6761 = data
  i6760.enabled = !!i6761[0]
  i6760.aspect = i6761[1]
  i6760.orthographic = !!i6761[2]
  i6760.orthographicSize = i6761[3]
  i6760.backgroundColor = new pc.Color(i6761[4], i6761[5], i6761[6], i6761[7])
  i6760.nearClipPlane = i6761[8]
  i6760.farClipPlane = i6761[9]
  i6760.fieldOfView = i6761[10]
  i6760.depth = i6761[11]
  i6760.clearFlags = i6761[12]
  i6760.cullingMask = i6761[13]
  i6760.rect = i6761[14]
  request.r(i6761[15], i6761[16], 0, i6760, 'targetTexture')
  i6760.usePhysicalProperties = !!i6761[17]
  i6760.focalLength = i6761[18]
  i6760.sensorSize = new pc.Vec2( i6761[19], i6761[20] )
  i6760.lensShift = new pc.Vec2( i6761[21], i6761[22] )
  i6760.gateFit = i6761[23]
  i6760.commandBufferCount = i6761[24]
  i6760.cameraType = i6761[25]
  return i6760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i6762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i6763 = data
  i6762.enabled = !!i6763[0]
  i6762.isTrigger = !!i6763[1]
  i6762.usedByEffector = !!i6763[2]
  i6762.density = i6763[3]
  i6762.offset = new pc.Vec2( i6763[4], i6763[5] )
  request.r(i6763[6], i6763[7], 0, i6762, 'material')
  i6762.usedByComposite = !!i6763[8]
  i6762.autoTiling = !!i6763[9]
  var i6765 = i6763[10]
  var i6764 = []
  for(var i = 0; i < i6765.length; i += 1) {
  var i6767 = i6765[i + 0]
  var i6766 = []
  for(var i = 0; i < i6767.length; i += 2) {
    i6766.push( new pc.Vec2( i6767[i + 0], i6767[i + 1] ) );
  }
    i6764.push( i6766 );
  }
  i6762.points = i6764
  return i6762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i6774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i6775 = data
  i6774.usedByComposite = !!i6775[0]
  i6774.autoTiling = !!i6775[1]
  i6774.size = new pc.Vec2( i6775[2], i6775[3] )
  i6774.edgeRadius = i6775[4]
  i6774.enabled = !!i6775[5]
  i6774.isTrigger = !!i6775[6]
  i6774.usedByEffector = !!i6775[7]
  i6774.density = i6775[8]
  i6774.offset = new pc.Vec2( i6775[9], i6775[10] )
  request.r(i6775[11], i6775[12], 0, i6774, 'material')
  return i6774
}

Deserializers["_Project.Code.Camera.Follower"] = function (request, data, root) {
  var i6776 = root || request.c( '_Project.Code.Camera.Follower' )
  var i6777 = data
  i6776._speed = i6777[0]
  request.r(i6777[1], i6777[2], 0, i6776, '_target')
  return i6776
}

Deserializers["_Project.Code.Camera.CameraInBordersZoom"] = function (request, data, root) {
  var i6778 = root || request.c( '_Project.Code.Camera.CameraInBordersZoom' )
  var i6779 = data
  request.r(i6779[0], i6779[1], 0, i6778, '_borders')
  i6778._defaultCameraSize = i6779[2]
  return i6778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6781 = data
  i6780.name = i6781[0]
  i6780.index = i6781[1]
  i6780.startup = !!i6781[2]
  return i6780
}

Deserializers["_Project.Code.Entry.EntryPoint"] = function (request, data, root) {
  var i6782 = root || request.c( '_Project.Code.Entry.EntryPoint' )
  var i6783 = data
  request.r(i6783[0], i6783[1], 0, i6782, '_joystick')
  var i6785 = i6783[2]
  var i6784 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Item')))
  for(var i = 0; i < i6785.length; i += 2) {
  request.r(i6785[i + 0], i6785[i + 1], 1, i6784, '')
  }
  i6782._itemPrefabs = i6784
  return i6782
}

Deserializers["_Project.Code.Services.CoroutineRunner.CoroutineRunner"] = function (request, data, root) {
  var i6788 = root || request.c( '_Project.Code.Services.CoroutineRunner.CoroutineRunner' )
  var i6789 = data
  return i6788
}

Deserializers["_Project.Code.Core.Buyables.EndScreenShower"] = function (request, data, root) {
  var i6790 = root || request.c( '_Project.Code.Core.Buyables.EndScreenShower' )
  var i6791 = data
  request.r(i6791[0], i6791[1], 0, i6790, '_fieldBuyable')
  request.r(i6791[2], i6791[3], 0, i6790, '_ui')
  request.r(i6791[4], i6791[5], 0, i6790, '_moveInput')
  request.r(i6791[6], i6791[7], 0, i6790, 'joystick')
  request.r(i6791[8], i6791[9], 0, i6790, '_audioSource')
  return i6790
}

Deserializers["_Project.Code.Tutorial.Tutorial"] = function (request, data, root) {
  var i6792 = root || request.c( '_Project.Code.Tutorial.Tutorial' )
  var i6793 = data
  request.r(i6793[0], i6793[1], 0, i6792, '_tutorialCollider')
  request.r(i6793[2], i6793[3], 0, i6792, '_tutorialText')
  request.r(i6793[4], i6793[5], 0, i6792, '_tutorialInventory')
  request.r(i6793[6], i6793[7], 0, i6792, '_joystick')
  request.r(i6793[8], i6793[9], 0, i6792, '_arrow')
  request.r(i6793[10], i6793[11], 0, i6792, '_point1')
  request.r(i6793[12], i6793[13], 0, i6792, '_point2')
  request.r(i6793[14], i6793[15], 0, i6792, '_buyable')
  return i6792
}

Deserializers["ArrowAnimator"] = function (request, data, root) {
  var i6794 = root || request.c( 'ArrowAnimator' )
  var i6795 = data
  return i6794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i6796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i6797 = data
  i6796.enabled = !!i6797[0]
  i6796.isTrigger = !!i6797[1]
  i6796.usedByEffector = !!i6797[2]
  i6796.density = i6797[3]
  i6796.offset = new pc.Vec2( i6797[4], i6797[5] )
  request.r(i6797[6], i6797[7], 0, i6796, 'material')
  i6796.edgeRadius = i6797[8]
  var i6799 = i6797[9]
  var i6798 = []
  for(var i = 0; i < i6799.length; i += 2) {
    i6798.push( new pc.Vec2( i6799[i + 0], i6799[i + 1] ) );
  }
  i6796.points = i6798
  i6796.useAdjacentStartPoint = !!i6797[10]
  i6796.adjacentStartPoint = new pc.Vec2( i6797[11], i6797[12] )
  i6796.useAdjacentEndPoint = !!i6797[13]
  i6796.adjacentEndPoint = new pc.Vec2( i6797[14], i6797[15] )
  return i6796
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6800 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6801 = data
  i6800.m_ShowMaskGraphic = !!i6801[0]
  return i6800
}

Deserializers["_Project.Code.Core.Buyables.CoinsViewUpdater"] = function (request, data, root) {
  var i6802 = root || request.c( '_Project.Code.Core.Buyables.CoinsViewUpdater' )
  var i6803 = data
  request.r(i6803[0], i6803[1], 0, i6802, '_text')
  request.r(i6803[2], i6803[3], 0, i6802, '_inventory')
  return i6802
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i6804 = root || request.c( 'VariableJoystick' )
  var i6805 = data
  i6804.moveThreshold = i6805[0]
  i6804.joystickType = i6805[1]
  request.r(i6805[2], i6805[3], 0, i6804, 'background')
  i6804.handleRange = i6805[4]
  i6804.deadZone = i6805[5]
  i6804.axisOptions = i6805[6]
  i6804.snapX = !!i6805[7]
  i6804.snapY = !!i6805[8]
  request.r(i6805[9], i6805[10], 0, i6804, '_handle')
  return i6804
}

Deserializers["_Project.Code.Core.Animations.BreathAnimation"] = function (request, data, root) {
  var i6806 = root || request.c( '_Project.Code.Core.Animations.BreathAnimation' )
  var i6807 = data
  i6806._scaleFactor = i6807[0]
  return i6806
}

Deserializers["CTA"] = function (request, data, root) {
  var i6808 = root || request.c( 'CTA' )
  var i6809 = data
  return i6808
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6810 = root || request.c( 'UnityEngine.UI.Button' )
  var i6811 = data
  i6810.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6811[0], i6810.m_OnClick)
  i6810.m_Navigation = request.d('UnityEngine.UI.Navigation', i6811[1], i6810.m_Navigation)
  i6810.m_Transition = i6811[2]
  i6810.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6811[3], i6810.m_Colors)
  i6810.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6811[4], i6810.m_SpriteState)
  i6810.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6811[5], i6810.m_AnimationTriggers)
  i6810.m_Interactable = !!i6811[6]
  request.r(i6811[7], i6811[8], 0, i6810, 'm_TargetGraphic')
  return i6810
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6812 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6813 = data
  i6812.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6813[0], i6812.m_PersistentCalls)
  return i6812
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6814 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6815 = data
  var i6817 = i6815[0]
  var i6816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6817.length; i += 1) {
    i6816.add(request.d('UnityEngine.Events.PersistentCall', i6817[i + 0]));
  }
  i6814.m_Calls = i6816
  return i6814
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6820 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6821 = data
  request.r(i6821[0], i6821[1], 0, i6820, 'm_Target')
  i6820.m_TargetAssemblyTypeName = i6821[2]
  i6820.m_MethodName = i6821[3]
  i6820.m_Mode = i6821[4]
  i6820.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6821[5], i6820.m_Arguments)
  i6820.m_CallState = i6821[6]
  return i6820
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6822 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6823 = data
  request.r(i6823[0], i6823[1], 0, i6822, 'm_ObjectArgument')
  i6822.m_ObjectArgumentAssemblyTypeName = i6823[2]
  i6822.m_IntArgument = i6823[3]
  i6822.m_FloatArgument = i6823[4]
  i6822.m_StringArgument = i6823[5]
  i6822.m_BoolArgument = !!i6823[6]
  return i6822
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6824 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6825 = data
  i6824.m_Mode = i6825[0]
  i6824.m_WrapAround = !!i6825[1]
  request.r(i6825[2], i6825[3], 0, i6824, 'm_SelectOnUp')
  request.r(i6825[4], i6825[5], 0, i6824, 'm_SelectOnDown')
  request.r(i6825[6], i6825[7], 0, i6824, 'm_SelectOnLeft')
  request.r(i6825[8], i6825[9], 0, i6824, 'm_SelectOnRight')
  return i6824
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6826 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6827 = data
  i6826.m_NormalColor = new pc.Color(i6827[0], i6827[1], i6827[2], i6827[3])
  i6826.m_HighlightedColor = new pc.Color(i6827[4], i6827[5], i6827[6], i6827[7])
  i6826.m_PressedColor = new pc.Color(i6827[8], i6827[9], i6827[10], i6827[11])
  i6826.m_SelectedColor = new pc.Color(i6827[12], i6827[13], i6827[14], i6827[15])
  i6826.m_DisabledColor = new pc.Color(i6827[16], i6827[17], i6827[18], i6827[19])
  i6826.m_ColorMultiplier = i6827[20]
  i6826.m_FadeDuration = i6827[21]
  return i6826
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6828 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6829 = data
  request.r(i6829[0], i6829[1], 0, i6828, 'm_HighlightedSprite')
  request.r(i6829[2], i6829[3], 0, i6828, 'm_PressedSprite')
  request.r(i6829[4], i6829[5], 0, i6828, 'm_SelectedSprite')
  request.r(i6829[6], i6829[7], 0, i6828, 'm_DisabledSprite')
  return i6828
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6830 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6831 = data
  i6830.m_NormalTrigger = i6831[0]
  i6830.m_HighlightedTrigger = i6831[1]
  i6830.m_PressedTrigger = i6831[2]
  i6830.m_SelectedTrigger = i6831[3]
  i6830.m_DisabledTrigger = i6831[4]
  return i6830
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6832 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6833 = data
  request.r(i6833[0], i6833[1], 0, i6832, 'm_FirstSelected')
  i6832.m_sendNavigationEvents = !!i6833[2]
  i6832.m_DragThreshold = i6833[3]
  return i6832
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6834 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6835 = data
  i6834.m_HorizontalAxis = i6835[0]
  i6834.m_VerticalAxis = i6835[1]
  i6834.m_SubmitButton = i6835[2]
  i6834.m_CancelButton = i6835[3]
  i6834.m_InputActionsPerSecond = i6835[4]
  i6834.m_RepeatDelay = i6835[5]
  i6834.m_ForceModuleActive = !!i6835[6]
  i6834.m_SendPointerHoverToParent = !!i6835[7]
  return i6834
}

Deserializers["PrintCopacity"] = function (request, data, root) {
  var i6836 = root || request.c( 'PrintCopacity' )
  var i6837 = data
  request.r(i6837[0], i6837[1], 0, i6836, '_textMeshPro')
  request.r(i6837[2], i6837[3], 0, i6836, 'itemInventory')
  return i6836
}

Deserializers["_Project.Code.Core.Buyables.Buyable"] = function (request, data, root) {
  var i6838 = root || request.c( '_Project.Code.Core.Buyables.Buyable' )
  var i6839 = data
  request.r(i6839[0], i6839[1], 0, i6838, '_itemInventory')
  i6838._price = i6839[2]
  request.r(i6839[3], i6839[4], 0, i6838, '_activateOnBought')
  var i6841 = i6839[5]
  var i6840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6841.length; i += 2) {
  request.r(i6841[i + 0], i6841[i + 1], 1, i6840, '')
  }
  i6838._deactivateOnBought = i6840
  return i6838
}

Deserializers["_Project.Code.Core.Buyables.InventorViewDestroyer"] = function (request, data, root) {
  var i6844 = root || request.c( '_Project.Code.Core.Buyables.InventorViewDestroyer' )
  var i6845 = data
  request.r(i6845[0], i6845[1], 0, i6844, '_inventory')
  return i6844
}

Deserializers["_Project.Code.Core.Workers.Worker"] = function (request, data, root) {
  var i6846 = root || request.c( '_Project.Code.Core.Workers.Worker' )
  var i6847 = data
  request.r(i6847[0], i6847[1], 0, i6846, '_animator')
  request.r(i6847[2], i6847[3], 0, i6846, '_detector')
  var i6849 = i6847[4]
  var i6848 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Harvesting.Field')))
  for(var i = 0; i < i6849.length; i += 2) {
  request.r(i6849[i + 0], i6849[i + 1], 1, i6848, '')
  }
  i6846._fields = i6848
  request.r(i6847[5], i6847[6], 0, i6846, '_inventory')
  return i6846
}

Deserializers["_Project.Code.Core.PopcornFarm.CornFarm"] = function (request, data, root) {
  var i6852 = root || request.c( '_Project.Code.Core.PopcornFarm.CornFarm' )
  var i6853 = data
  request.r(i6853[0], i6853[1], 0, i6852, '_fillImage')
  request.r(i6853[2], i6853[3], 0, i6852, '_resource')
  request.r(i6853[4], i6853[5], 0, i6852, '_final')
  return i6852
}

Deserializers["_Project.Code.Selling.Line.Line"] = function (request, data, root) {
  var i6854 = root || request.c( '_Project.Code.Selling.Line.Line' )
  var i6855 = data
  request.r(i6855[0], i6855[1], 0, i6854, '_customerPrefab')
  var i6857 = i6855[2]
  var i6856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.Animations.AnimatorController')))
  for(var i = 0; i < i6857.length; i += 2) {
  request.r(i6857[i + 0], i6857[i + 1], 1, i6856, '')
  }
  i6854._customerAnimatorControllers = i6856
  var i6859 = i6855[3]
  var i6858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6859.length; i += 2) {
  request.r(i6859[i + 0], i6859[i + 1], 1, i6858, '')
  }
  i6854._spawnPoints = i6858
  return i6854
}

Deserializers["_Project.Code.Selling.Seller"] = function (request, data, root) {
  var i6862 = root || request.c( '_Project.Code.Selling.Seller' )
  var i6863 = data
  request.r(i6863[0], i6863[1], 0, i6862, '_moneyPrefab')
  request.r(i6863[2], i6863[3], 0, i6862, '_lineMb')
  request.r(i6863[4], i6863[5], 0, i6862, '_productInventory')
  request.r(i6863[6], i6863[7], 0, i6862, '_moneyInventory')
  return i6862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6865 = data
  i6864.ambientIntensity = i6865[0]
  i6864.reflectionIntensity = i6865[1]
  i6864.ambientMode = i6865[2]
  i6864.ambientLight = new pc.Color(i6865[3], i6865[4], i6865[5], i6865[6])
  i6864.ambientSkyColor = new pc.Color(i6865[7], i6865[8], i6865[9], i6865[10])
  i6864.ambientGroundColor = new pc.Color(i6865[11], i6865[12], i6865[13], i6865[14])
  i6864.ambientEquatorColor = new pc.Color(i6865[15], i6865[16], i6865[17], i6865[18])
  i6864.fogColor = new pc.Color(i6865[19], i6865[20], i6865[21], i6865[22])
  i6864.fogEndDistance = i6865[23]
  i6864.fogStartDistance = i6865[24]
  i6864.fogDensity = i6865[25]
  i6864.fog = !!i6865[26]
  request.r(i6865[27], i6865[28], 0, i6864, 'skybox')
  i6864.fogMode = i6865[29]
  var i6867 = i6865[30]
  var i6866 = []
  for(var i = 0; i < i6867.length; i += 1) {
    i6866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6867[i + 0]) );
  }
  i6864.lightmaps = i6866
  i6864.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6865[31], i6864.lightProbes)
  i6864.lightmapsMode = i6865[32]
  i6864.mixedBakeMode = i6865[33]
  i6864.environmentLightingMode = i6865[34]
  i6864.ambientProbe = new pc.SphericalHarmonicsL2(i6865[35])
  i6864.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6865[36])
  i6864.useReferenceAmbientProbe = !!i6865[37]
  request.r(i6865[38], i6865[39], 0, i6864, 'customReflection')
  request.r(i6865[40], i6865[41], 0, i6864, 'defaultReflection')
  i6864.defaultReflectionMode = i6865[42]
  i6864.defaultReflectionResolution = i6865[43]
  i6864.sunLightObjectId = i6865[44]
  i6864.pixelLightCount = i6865[45]
  i6864.defaultReflectionHDR = !!i6865[46]
  i6864.hasLightDataAsset = !!i6865[47]
  i6864.hasManualGenerate = !!i6865[48]
  return i6864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6871 = data
  request.r(i6871[0], i6871[1], 0, i6870, 'lightmapColor')
  request.r(i6871[2], i6871[3], 0, i6870, 'lightmapDirection')
  return i6870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6872 = root || new UnityEngine.LightProbes()
  var i6873 = data
  return i6872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6881 = data
  var i6883 = i6881[0]
  var i6882 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6883.length; i += 1) {
    i6882.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6883[i + 0]));
  }
  i6880.ShaderCompilationErrors = i6882
  i6880.name = i6881[1]
  i6880.guid = i6881[2]
  var i6885 = i6881[3]
  var i6884 = []
  for(var i = 0; i < i6885.length; i += 1) {
    i6884.push( i6885[i + 0] );
  }
  i6880.shaderDefinedKeywords = i6884
  var i6887 = i6881[4]
  var i6886 = []
  for(var i = 0; i < i6887.length; i += 1) {
    i6886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6887[i + 0]) );
  }
  i6880.passes = i6886
  var i6889 = i6881[5]
  var i6888 = []
  for(var i = 0; i < i6889.length; i += 1) {
    i6888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6889[i + 0]) );
  }
  i6880.usePasses = i6888
  var i6891 = i6881[6]
  var i6890 = []
  for(var i = 0; i < i6891.length; i += 1) {
    i6890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6891[i + 0]) );
  }
  i6880.defaultParameterValues = i6890
  request.r(i6881[7], i6881[8], 0, i6880, 'unityFallbackShader')
  i6880.readDepth = !!i6881[9]
  i6880.isCreatedByShaderGraph = !!i6881[10]
  i6880.compiled = !!i6881[11]
  return i6880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6895 = data
  i6894.shaderName = i6895[0]
  i6894.errorMessage = i6895[1]
  return i6894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6900 = root || new pc.UnityShaderPass()
  var i6901 = data
  i6900.id = i6901[0]
  i6900.subShaderIndex = i6901[1]
  i6900.name = i6901[2]
  i6900.passType = i6901[3]
  i6900.grabPassTextureName = i6901[4]
  i6900.usePass = !!i6901[5]
  i6900.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[6], i6900.zTest)
  i6900.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[7], i6900.zWrite)
  i6900.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[8], i6900.culling)
  i6900.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6901[9], i6900.blending)
  i6900.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6901[10], i6900.alphaBlending)
  i6900.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[11], i6900.colorWriteMask)
  i6900.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[12], i6900.offsetUnits)
  i6900.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[13], i6900.offsetFactor)
  i6900.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[14], i6900.stencilRef)
  i6900.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[15], i6900.stencilReadMask)
  i6900.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6901[16], i6900.stencilWriteMask)
  i6900.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6901[17], i6900.stencilOp)
  i6900.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6901[18], i6900.stencilOpFront)
  i6900.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6901[19], i6900.stencilOpBack)
  var i6903 = i6901[20]
  var i6902 = []
  for(var i = 0; i < i6903.length; i += 1) {
    i6902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6903[i + 0]) );
  }
  i6900.tags = i6902
  var i6905 = i6901[21]
  var i6904 = []
  for(var i = 0; i < i6905.length; i += 1) {
    i6904.push( i6905[i + 0] );
  }
  i6900.passDefinedKeywords = i6904
  var i6907 = i6901[22]
  var i6906 = []
  for(var i = 0; i < i6907.length; i += 1) {
    i6906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6907[i + 0]) );
  }
  i6900.passDefinedKeywordGroups = i6906
  var i6909 = i6901[23]
  var i6908 = []
  for(var i = 0; i < i6909.length; i += 1) {
    i6908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6909[i + 0]) );
  }
  i6900.variants = i6908
  var i6911 = i6901[24]
  var i6910 = []
  for(var i = 0; i < i6911.length; i += 1) {
    i6910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6911[i + 0]) );
  }
  i6900.excludedVariants = i6910
  i6900.hasDepthReader = !!i6901[25]
  return i6900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6913 = data
  i6912.val = i6913[0]
  i6912.name = i6913[1]
  return i6912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6915 = data
  i6914.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6915[0], i6914.src)
  i6914.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6915[1], i6914.dst)
  i6914.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6915[2], i6914.op)
  return i6914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6917 = data
  i6916.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6917[0], i6916.pass)
  i6916.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6917[1], i6916.fail)
  i6916.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6917[2], i6916.zFail)
  i6916.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6917[3], i6916.comp)
  return i6916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6921 = data
  i6920.name = i6921[0]
  i6920.value = i6921[1]
  return i6920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6925 = data
  var i6927 = i6925[0]
  var i6926 = []
  for(var i = 0; i < i6927.length; i += 1) {
    i6926.push( i6927[i + 0] );
  }
  i6924.keywords = i6926
  i6924.hasDiscard = !!i6925[1]
  return i6924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6931 = data
  i6930.passId = i6931[0]
  i6930.subShaderIndex = i6931[1]
  var i6933 = i6931[2]
  var i6932 = []
  for(var i = 0; i < i6933.length; i += 1) {
    i6932.push( i6933[i + 0] );
  }
  i6930.keywords = i6932
  i6930.vertexProgram = i6931[3]
  i6930.fragmentProgram = i6931[4]
  i6930.exportedForWebGl2 = !!i6931[5]
  i6930.readDepth = !!i6931[6]
  return i6930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6937 = data
  request.r(i6937[0], i6937[1], 0, i6936, 'shader')
  i6936.pass = i6937[2]
  return i6936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6941 = data
  i6940.name = i6941[0]
  i6940.type = i6941[1]
  i6940.value = new pc.Vec4( i6941[2], i6941[3], i6941[4], i6941[5] )
  i6940.textureValue = i6941[6]
  i6940.shaderPropertyFlag = i6941[7]
  return i6940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6943 = data
  i6942.name = i6943[0]
  request.r(i6943[1], i6943[2], 0, i6942, 'texture')
  i6942.aabb = i6943[3]
  i6942.vertices = i6943[4]
  i6942.triangles = i6943[5]
  i6942.textureRect = UnityEngine.Rect.MinMaxRect(i6943[6], i6943[7], i6943[8], i6943[9])
  i6942.packedRect = UnityEngine.Rect.MinMaxRect(i6943[10], i6943[11], i6943[12], i6943[13])
  i6942.border = new pc.Vec4( i6943[14], i6943[15], i6943[16], i6943[17] )
  i6942.transparency = i6943[18]
  i6942.bounds = i6943[19]
  i6942.pixelsPerUnit = i6943[20]
  i6942.textureWidth = i6943[21]
  i6942.textureHeight = i6943[22]
  i6942.nativeSize = new pc.Vec2( i6943[23], i6943[24] )
  i6942.pivot = new pc.Vec2( i6943[25], i6943[26] )
  i6942.textureRectOffset = new pc.Vec2( i6943[27], i6943[28] )
  return i6942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6945 = data
  i6944.name = i6945[0]
  return i6944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6947 = data
  i6946.name = i6947[0]
  i6946.wrapMode = i6947[1]
  i6946.isLooping = !!i6947[2]
  i6946.length = i6947[3]
  var i6949 = i6947[4]
  var i6948 = []
  for(var i = 0; i < i6949.length; i += 1) {
    i6948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6949[i + 0]) );
  }
  i6946.curves = i6948
  var i6951 = i6947[5]
  var i6950 = []
  for(var i = 0; i < i6951.length; i += 1) {
    i6950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6951[i + 0]) );
  }
  i6946.events = i6950
  i6946.halfPrecision = !!i6947[6]
  i6946._frameRate = i6947[7]
  i6946.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6947[8], i6946.localBounds)
  i6946.hasMuscleCurves = !!i6947[9]
  var i6953 = i6947[10]
  var i6952 = []
  for(var i = 0; i < i6953.length; i += 1) {
    i6952.push( i6953[i + 0] );
  }
  i6946.clipMuscleConstant = i6952
  i6946.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6947[11], i6946.clipBindingConstant)
  return i6946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6957 = data
  i6956.path = i6957[0]
  i6956.hash = i6957[1]
  i6956.componentType = i6957[2]
  i6956.property = i6957[3]
  i6956.keys = i6957[4]
  var i6959 = i6957[5]
  var i6958 = []
  for(var i = 0; i < i6959.length; i += 1) {
    i6958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6959[i + 0]) );
  }
  i6956.objectReferenceKeys = i6958
  return i6956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6963 = data
  i6962.time = i6963[0]
  request.r(i6963[1], i6963[2], 0, i6962, 'value')
  return i6962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6967 = data
  i6966.functionName = i6967[0]
  i6966.floatParameter = i6967[1]
  i6966.intParameter = i6967[2]
  i6966.stringParameter = i6967[3]
  request.r(i6967[4], i6967[5], 0, i6966, 'objectReferenceParameter')
  i6966.time = i6967[6]
  return i6966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6969 = data
  i6968.center = new pc.Vec3( i6969[0], i6969[1], i6969[2] )
  i6968.extends = new pc.Vec3( i6969[3], i6969[4], i6969[5] )
  return i6968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6973 = data
  var i6975 = i6973[0]
  var i6974 = []
  for(var i = 0; i < i6975.length; i += 1) {
    i6974.push( i6975[i + 0] );
  }
  i6972.genericBindings = i6974
  var i6977 = i6973[1]
  var i6976 = []
  for(var i = 0; i < i6977.length; i += 1) {
    i6976.push( i6977[i + 0] );
  }
  i6972.pptrCurveMapping = i6976
  return i6972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6979 = data
  i6978.name = i6979[0]
  i6978.ascent = i6979[1]
  i6978.originalLineHeight = i6979[2]
  i6978.fontSize = i6979[3]
  var i6981 = i6979[4]
  var i6980 = []
  for(var i = 0; i < i6981.length; i += 1) {
    i6980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6981[i + 0]) );
  }
  i6978.characterInfo = i6980
  request.r(i6979[5], i6979[6], 0, i6978, 'texture')
  i6978.originalFontSize = i6979[7]
  return i6978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6985 = data
  i6984.index = i6985[0]
  i6984.advance = i6985[1]
  i6984.bearing = i6985[2]
  i6984.glyphWidth = i6985[3]
  i6984.glyphHeight = i6985[4]
  i6984.minX = i6985[5]
  i6984.maxX = i6985[6]
  i6984.minY = i6985[7]
  i6984.maxY = i6985[8]
  i6984.uvBottomLeftX = i6985[9]
  i6984.uvBottomLeftY = i6985[10]
  i6984.uvBottomRightX = i6985[11]
  i6984.uvBottomRightY = i6985[12]
  i6984.uvTopLeftX = i6985[13]
  i6984.uvTopLeftY = i6985[14]
  i6984.uvTopRightX = i6985[15]
  i6984.uvTopRightY = i6985[16]
  return i6984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6987 = data
  i6986.name = i6987[0]
  var i6989 = i6987[1]
  var i6988 = []
  for(var i = 0; i < i6989.length; i += 1) {
    i6988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6989[i + 0]) );
  }
  i6986.layers = i6988
  var i6991 = i6987[2]
  var i6990 = []
  for(var i = 0; i < i6991.length; i += 1) {
    i6990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6991[i + 0]) );
  }
  i6986.parameters = i6990
  i6986.animationClips = i6987[3]
  i6986.avatarUnsupported = i6987[4]
  return i6986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6995 = data
  i6994.name = i6995[0]
  i6994.defaultWeight = i6995[1]
  i6994.blendingMode = i6995[2]
  i6994.avatarMask = i6995[3]
  i6994.syncedLayerIndex = i6995[4]
  i6994.syncedLayerAffectsTiming = !!i6995[5]
  i6994.syncedLayers = i6995[6]
  i6994.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6995[7], i6994.stateMachine)
  return i6994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6997 = data
  i6996.id = i6997[0]
  i6996.name = i6997[1]
  i6996.path = i6997[2]
  var i6999 = i6997[3]
  var i6998 = []
  for(var i = 0; i < i6999.length; i += 1) {
    i6998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6999[i + 0]) );
  }
  i6996.states = i6998
  var i7001 = i6997[4]
  var i7000 = []
  for(var i = 0; i < i7001.length; i += 1) {
    i7000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7001[i + 0]) );
  }
  i6996.machines = i7000
  var i7003 = i6997[5]
  var i7002 = []
  for(var i = 0; i < i7003.length; i += 1) {
    i7002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7003[i + 0]) );
  }
  i6996.entryStateTransitions = i7002
  var i7005 = i6997[6]
  var i7004 = []
  for(var i = 0; i < i7005.length; i += 1) {
    i7004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7005[i + 0]) );
  }
  i6996.exitStateTransitions = i7004
  var i7007 = i6997[7]
  var i7006 = []
  for(var i = 0; i < i7007.length; i += 1) {
    i7006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7007[i + 0]) );
  }
  i6996.anyStateTransitions = i7006
  i6996.defaultStateId = i6997[8]
  return i6996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7011 = data
  i7010.id = i7011[0]
  i7010.name = i7011[1]
  i7010.cycleOffset = i7011[2]
  i7010.cycleOffsetParameter = i7011[3]
  i7010.cycleOffsetParameterActive = !!i7011[4]
  i7010.mirror = !!i7011[5]
  i7010.mirrorParameter = i7011[6]
  i7010.mirrorParameterActive = !!i7011[7]
  i7010.motionId = i7011[8]
  i7010.nameHash = i7011[9]
  i7010.fullPathHash = i7011[10]
  i7010.speed = i7011[11]
  i7010.speedParameter = i7011[12]
  i7010.speedParameterActive = !!i7011[13]
  i7010.tag = i7011[14]
  i7010.tagHash = i7011[15]
  i7010.writeDefaultValues = !!i7011[16]
  var i7013 = i7011[17]
  var i7012 = []
  for(var i = 0; i < i7013.length; i += 2) {
  request.r(i7013[i + 0], i7013[i + 1], 2, i7012, '')
  }
  i7010.behaviours = i7012
  var i7015 = i7011[18]
  var i7014 = []
  for(var i = 0; i < i7015.length; i += 1) {
    i7014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7015[i + 0]) );
  }
  i7010.transitions = i7014
  return i7010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7021 = data
  i7020.fullPath = i7021[0]
  i7020.canTransitionToSelf = !!i7021[1]
  i7020.duration = i7021[2]
  i7020.exitTime = i7021[3]
  i7020.hasExitTime = !!i7021[4]
  i7020.hasFixedDuration = !!i7021[5]
  i7020.interruptionSource = i7021[6]
  i7020.offset = i7021[7]
  i7020.orderedInterruption = !!i7021[8]
  i7020.destinationStateId = i7021[9]
  i7020.isExit = !!i7021[10]
  i7020.mute = !!i7021[11]
  i7020.solo = !!i7021[12]
  var i7023 = i7021[13]
  var i7022 = []
  for(var i = 0; i < i7023.length; i += 1) {
    i7022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7023[i + 0]) );
  }
  i7020.conditions = i7022
  return i7020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7029 = data
  i7028.destinationStateId = i7029[0]
  i7028.isExit = !!i7029[1]
  i7028.mute = !!i7029[2]
  i7028.solo = !!i7029[3]
  var i7031 = i7029[4]
  var i7030 = []
  for(var i = 0; i < i7031.length; i += 1) {
    i7030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7031[i + 0]) );
  }
  i7028.conditions = i7030
  return i7028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7035 = data
  i7034.mode = i7035[0]
  i7034.parameter = i7035[1]
  i7034.threshold = i7035[2]
  return i7034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7039 = data
  i7038.defaultBool = !!i7039[0]
  i7038.defaultFloat = i7039[1]
  i7038.defaultInt = i7039[2]
  i7038.name = i7039[3]
  i7038.nameHash = i7039[4]
  i7038.type = i7039[5]
  return i7038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7041 = data
  i7040.name = i7041[0]
  i7040.bytes64 = i7041[1]
  i7040.data = i7041[2]
  return i7040
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i7042 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i7043 = data
  i7042.hashCode = i7043[0]
  request.r(i7043[1], i7043[2], 0, i7042, 'material')
  i7042.materialHashCode = i7043[3]
  request.r(i7043[4], i7043[5], 0, i7042, 'atlas')
  i7042.normalStyle = i7043[6]
  i7042.normalSpacingOffset = i7043[7]
  i7042.boldStyle = i7043[8]
  i7042.boldSpacing = i7043[9]
  i7042.italicStyle = i7043[10]
  i7042.tabSize = i7043[11]
  i7042.m_Version = i7043[12]
  i7042.m_SourceFontFileGUID = i7043[13]
  request.r(i7043[14], i7043[15], 0, i7042, 'm_SourceFontFile_EditorRef')
  request.r(i7043[16], i7043[17], 0, i7042, 'm_SourceFontFile')
  i7042.m_AtlasPopulationMode = i7043[18]
  i7042.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7043[19], i7042.m_FaceInfo)
  var i7045 = i7043[20]
  var i7044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i7045.length; i += 1) {
    i7044.add(request.d('UnityEngine.TextCore.Glyph', i7045[i + 0]));
  }
  i7042.m_GlyphTable = i7044
  var i7047 = i7043[21]
  var i7046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i7047.length; i += 1) {
    i7046.add(request.d('TMPro.TMP_Character', i7047[i + 0]));
  }
  i7042.m_CharacterTable = i7046
  var i7049 = i7043[22]
  var i7048 = []
  for(var i = 0; i < i7049.length; i += 2) {
  request.r(i7049[i + 0], i7049[i + 1], 2, i7048, '')
  }
  i7042.m_AtlasTextures = i7048
  i7042.m_AtlasTextureIndex = i7043[23]
  i7042.m_IsMultiAtlasTexturesEnabled = !!i7043[24]
  i7042.m_ClearDynamicDataOnBuild = !!i7043[25]
  var i7051 = i7043[26]
  var i7050 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7051.length; i += 1) {
    i7050.add(request.d('UnityEngine.TextCore.GlyphRect', i7051[i + 0]));
  }
  i7042.m_UsedGlyphRects = i7050
  var i7053 = i7043[27]
  var i7052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7053.length; i += 1) {
    i7052.add(request.d('UnityEngine.TextCore.GlyphRect', i7053[i + 0]));
  }
  i7042.m_FreeGlyphRects = i7052
  i7042.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i7043[28], i7042.m_fontInfo)
  i7042.m_AtlasWidth = i7043[29]
  i7042.m_AtlasHeight = i7043[30]
  i7042.m_AtlasPadding = i7043[31]
  i7042.m_AtlasRenderMode = i7043[32]
  var i7055 = i7043[33]
  var i7054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i7055.length; i += 1) {
    i7054.add(request.d('TMPro.TMP_Glyph', i7055[i + 0]));
  }
  i7042.m_glyphInfoList = i7054
  i7042.m_KerningTable = request.d('TMPro.KerningTable', i7043[34], i7042.m_KerningTable)
  i7042.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i7043[35], i7042.m_FontFeatureTable)
  var i7057 = i7043[36]
  var i7056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7057.length; i += 2) {
  request.r(i7057[i + 0], i7057[i + 1], 1, i7056, '')
  }
  i7042.fallbackFontAssets = i7056
  var i7059 = i7043[37]
  var i7058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7059.length; i += 2) {
  request.r(i7059[i + 0], i7059[i + 1], 1, i7058, '')
  }
  i7042.m_FallbackFontAssetTable = i7058
  i7042.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i7043[38], i7042.m_CreationSettings)
  var i7061 = i7043[39]
  var i7060 = []
  for(var i = 0; i < i7061.length; i += 1) {
    i7060.push( request.d('TMPro.TMP_FontWeightPair', i7061[i + 0]) );
  }
  i7042.m_FontWeightTable = i7060
  var i7063 = i7043[40]
  var i7062 = []
  for(var i = 0; i < i7063.length; i += 1) {
    i7062.push( request.d('TMPro.TMP_FontWeightPair', i7063[i + 0]) );
  }
  i7042.fontWeights = i7062
  return i7042
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7064 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7065 = data
  i7064.m_FaceIndex = i7065[0]
  i7064.m_FamilyName = i7065[1]
  i7064.m_StyleName = i7065[2]
  i7064.m_PointSize = i7065[3]
  i7064.m_Scale = i7065[4]
  i7064.m_UnitsPerEM = i7065[5]
  i7064.m_LineHeight = i7065[6]
  i7064.m_AscentLine = i7065[7]
  i7064.m_CapLine = i7065[8]
  i7064.m_MeanLine = i7065[9]
  i7064.m_Baseline = i7065[10]
  i7064.m_DescentLine = i7065[11]
  i7064.m_SuperscriptOffset = i7065[12]
  i7064.m_SuperscriptSize = i7065[13]
  i7064.m_SubscriptOffset = i7065[14]
  i7064.m_SubscriptSize = i7065[15]
  i7064.m_UnderlineOffset = i7065[16]
  i7064.m_UnderlineThickness = i7065[17]
  i7064.m_StrikethroughOffset = i7065[18]
  i7064.m_StrikethroughThickness = i7065[19]
  i7064.m_TabWidth = i7065[20]
  return i7064
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i7068 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i7069 = data
  i7068.m_Index = i7069[0]
  i7068.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7069[1], i7068.m_Metrics)
  i7068.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7069[2], i7068.m_GlyphRect)
  i7068.m_Scale = i7069[3]
  i7068.m_AtlasIndex = i7069[4]
  i7068.m_ClassDefinitionType = i7069[5]
  return i7068
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7070 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7071 = data
  i7070.m_Width = i7071[0]
  i7070.m_Height = i7071[1]
  i7070.m_HorizontalBearingX = i7071[2]
  i7070.m_HorizontalBearingY = i7071[3]
  i7070.m_HorizontalAdvance = i7071[4]
  return i7070
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7072 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7073 = data
  i7072.m_X = i7073[0]
  i7072.m_Y = i7073[1]
  i7072.m_Width = i7073[2]
  i7072.m_Height = i7073[3]
  return i7072
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i7076 = root || request.c( 'TMPro.TMP_Character' )
  var i7077 = data
  i7076.m_ElementType = i7077[0]
  i7076.m_Unicode = i7077[1]
  i7076.m_GlyphIndex = i7077[2]
  i7076.m_Scale = i7077[3]
  return i7076
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7082 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7083 = data
  i7082.Name = i7083[0]
  i7082.PointSize = i7083[1]
  i7082.Scale = i7083[2]
  i7082.CharacterCount = i7083[3]
  i7082.LineHeight = i7083[4]
  i7082.Baseline = i7083[5]
  i7082.Ascender = i7083[6]
  i7082.CapHeight = i7083[7]
  i7082.Descender = i7083[8]
  i7082.CenterLine = i7083[9]
  i7082.SuperscriptOffset = i7083[10]
  i7082.SubscriptOffset = i7083[11]
  i7082.SubSize = i7083[12]
  i7082.Underline = i7083[13]
  i7082.UnderlineThickness = i7083[14]
  i7082.strikethrough = i7083[15]
  i7082.strikethroughThickness = i7083[16]
  i7082.TabWidth = i7083[17]
  i7082.Padding = i7083[18]
  i7082.AtlasWidth = i7083[19]
  i7082.AtlasHeight = i7083[20]
  return i7082
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7086 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7087 = data
  i7086.id = i7087[0]
  i7086.x = i7087[1]
  i7086.y = i7087[2]
  i7086.width = i7087[3]
  i7086.height = i7087[4]
  i7086.xOffset = i7087[5]
  i7086.yOffset = i7087[6]
  i7086.xAdvance = i7087[7]
  i7086.scale = i7087[8]
  return i7086
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7088 = root || request.c( 'TMPro.KerningTable' )
  var i7089 = data
  var i7091 = i7089[0]
  var i7090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7091.length; i += 1) {
    i7090.add(request.d('TMPro.KerningPair', i7091[i + 0]));
  }
  i7088.kerningPairs = i7090
  return i7088
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7094 = root || request.c( 'TMPro.KerningPair' )
  var i7095 = data
  i7094.xOffset = i7095[0]
  i7094.m_FirstGlyph = i7095[1]
  i7094.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7095[2], i7094.m_FirstGlyphAdjustments)
  i7094.m_SecondGlyph = i7095[3]
  i7094.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7095[4], i7094.m_SecondGlyphAdjustments)
  i7094.m_IgnoreSpacingAdjustments = !!i7095[5]
  return i7094
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i7096 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i7097 = data
  var i7099 = i7097[0]
  var i7098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i7099.length; i += 1) {
    i7098.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i7099[i + 0]));
  }
  i7096.m_GlyphPairAdjustmentRecords = i7098
  return i7096
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7102 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i7103 = data
  i7102.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i7103[0], i7102.m_FirstAdjustmentRecord)
  i7102.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i7103[1], i7102.m_SecondAdjustmentRecord)
  i7102.m_FeatureLookupFlags = i7103[2]
  return i7102
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7104 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i7105 = data
  i7104.m_GlyphIndex = i7105[0]
  i7104.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i7105[1], i7104.m_GlyphValueRecord)
  return i7104
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i7106 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i7107 = data
  i7106.m_XPlacement = i7107[0]
  i7106.m_YPlacement = i7107[1]
  i7106.m_XAdvance = i7107[2]
  i7106.m_YAdvance = i7107[3]
  return i7106
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i7110 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i7111 = data
  i7110.sourceFontFileName = i7111[0]
  i7110.sourceFontFileGUID = i7111[1]
  i7110.pointSizeSamplingMode = i7111[2]
  i7110.pointSize = i7111[3]
  i7110.padding = i7111[4]
  i7110.packingMode = i7111[5]
  i7110.atlasWidth = i7111[6]
  i7110.atlasHeight = i7111[7]
  i7110.characterSetSelectionMode = i7111[8]
  i7110.characterSequence = i7111[9]
  i7110.referencedFontAssetGUID = i7111[10]
  i7110.referencedTextAssetGUID = i7111[11]
  i7110.fontStyle = i7111[12]
  i7110.fontStyleModifier = i7111[13]
  i7110.renderMode = i7111[14]
  i7110.includeFontFeatures = !!i7111[15]
  return i7110
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7114 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7115 = data
  request.r(i7115[0], i7115[1], 0, i7114, 'regularTypeface')
  request.r(i7115[2], i7115[3], 0, i7114, 'italicTypeface')
  return i7114
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig"] = function (request, data, root) {
  var i7116 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig' )
  var i7117 = data
  var i7119 = i7117[0]
  var i7118 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Character.DirectedAnimation')))
  for(var i = 0; i < i7119.length; i += 1) {
    i7118.add(request.d('_Project.Code.Core.Character.DirectedAnimation', i7119[i + 0]));
  }
  i7116.Animations = i7118
  return i7116
}

Deserializers["_Project.Code.Core.Character.DirectedAnimation"] = function (request, data, root) {
  var i7122 = root || request.c( '_Project.Code.Core.Character.DirectedAnimation' )
  var i7123 = data
  request.r(i7123[0], i7123[1], 0, i7122, 'Clip')
  i7122.Direction = new pc.Vec2( i7123[2], i7123[3] )
  i7122.Flip = !!i7123[4]
  return i7122
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7124 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7125 = data
  i7124.useSafeMode = !!i7125[0]
  i7124.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7125[1], i7124.safeModeOptions)
  i7124.timeScale = i7125[2]
  i7124.unscaledTimeScale = i7125[3]
  i7124.useSmoothDeltaTime = !!i7125[4]
  i7124.maxSmoothUnscaledTime = i7125[5]
  i7124.rewindCallbackMode = i7125[6]
  i7124.showUnityEditorReport = !!i7125[7]
  i7124.logBehaviour = i7125[8]
  i7124.drawGizmos = !!i7125[9]
  i7124.defaultRecyclable = !!i7125[10]
  i7124.defaultAutoPlay = i7125[11]
  i7124.defaultUpdateType = i7125[12]
  i7124.defaultTimeScaleIndependent = !!i7125[13]
  i7124.defaultEaseType = i7125[14]
  i7124.defaultEaseOvershootOrAmplitude = i7125[15]
  i7124.defaultEasePeriod = i7125[16]
  i7124.defaultAutoKill = !!i7125[17]
  i7124.defaultLoopType = i7125[18]
  i7124.debugMode = !!i7125[19]
  i7124.debugStoreTargetId = !!i7125[20]
  i7124.showPreviewPanel = !!i7125[21]
  i7124.storeSettingsLocation = i7125[22]
  i7124.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7125[23], i7124.modules)
  i7124.createASMDEF = !!i7125[24]
  i7124.showPlayingTweens = !!i7125[25]
  i7124.showPausedTweens = !!i7125[26]
  return i7124
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7126 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7127 = data
  i7126.logBehaviour = i7127[0]
  i7126.nestedTweenFailureBehaviour = i7127[1]
  return i7126
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7128 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7129 = data
  i7128.showPanel = !!i7129[0]
  i7128.audioEnabled = !!i7129[1]
  i7128.physicsEnabled = !!i7129[2]
  i7128.physics2DEnabled = !!i7129[3]
  i7128.spriteEnabled = !!i7129[4]
  i7128.uiEnabled = !!i7129[5]
  i7128.textMeshProEnabled = !!i7129[6]
  i7128.tk2DEnabled = !!i7129[7]
  i7128.deAudioEnabled = !!i7129[8]
  i7128.deUnityExtendedEnabled = !!i7129[9]
  i7128.epoOutlineEnabled = !!i7129[10]
  return i7128
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7130 = root || request.c( 'TMPro.TMP_Settings' )
  var i7131 = data
  i7130.m_enableWordWrapping = !!i7131[0]
  i7130.m_enableKerning = !!i7131[1]
  i7130.m_enableExtraPadding = !!i7131[2]
  i7130.m_enableTintAllSprites = !!i7131[3]
  i7130.m_enableParseEscapeCharacters = !!i7131[4]
  i7130.m_EnableRaycastTarget = !!i7131[5]
  i7130.m_GetFontFeaturesAtRuntime = !!i7131[6]
  i7130.m_missingGlyphCharacter = i7131[7]
  i7130.m_warningsDisabled = !!i7131[8]
  request.r(i7131[9], i7131[10], 0, i7130, 'm_defaultFontAsset')
  i7130.m_defaultFontAssetPath = i7131[11]
  i7130.m_defaultFontSize = i7131[12]
  i7130.m_defaultAutoSizeMinRatio = i7131[13]
  i7130.m_defaultAutoSizeMaxRatio = i7131[14]
  i7130.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7131[15], i7131[16] )
  i7130.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7131[17], i7131[18] )
  i7130.m_autoSizeTextContainer = !!i7131[19]
  i7130.m_IsTextObjectScaleStatic = !!i7131[20]
  var i7133 = i7131[21]
  var i7132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7133.length; i += 2) {
  request.r(i7133[i + 0], i7133[i + 1], 1, i7132, '')
  }
  i7130.m_fallbackFontAssets = i7132
  i7130.m_matchMaterialPreset = !!i7131[22]
  request.r(i7131[23], i7131[24], 0, i7130, 'm_defaultSpriteAsset')
  i7130.m_defaultSpriteAssetPath = i7131[25]
  i7130.m_enableEmojiSupport = !!i7131[26]
  i7130.m_MissingCharacterSpriteUnicode = i7131[27]
  i7130.m_defaultColorGradientPresetsPath = i7131[28]
  request.r(i7131[29], i7131[30], 0, i7130, 'm_defaultStyleSheet')
  i7130.m_StyleSheetsResourcePath = i7131[31]
  request.r(i7131[32], i7131[33], 0, i7130, 'm_leadingCharacters')
  request.r(i7131[34], i7131[35], 0, i7130, 'm_followingCharacters')
  i7130.m_UseModernHangulLineBreakingRules = !!i7131[36]
  return i7130
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7134 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7135 = data
  i7134.hashCode = i7135[0]
  request.r(i7135[1], i7135[2], 0, i7134, 'material')
  i7134.materialHashCode = i7135[3]
  request.r(i7135[4], i7135[5], 0, i7134, 'spriteSheet')
  var i7137 = i7135[6]
  var i7136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7137.length; i += 1) {
    i7136.add(request.d('TMPro.TMP_Sprite', i7137[i + 0]));
  }
  i7134.spriteInfoList = i7136
  var i7139 = i7135[7]
  var i7138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7139.length; i += 2) {
  request.r(i7139[i + 0], i7139[i + 1], 1, i7138, '')
  }
  i7134.fallbackSpriteAssets = i7138
  i7134.m_Version = i7135[8]
  i7134.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7135[9], i7134.m_FaceInfo)
  var i7141 = i7135[10]
  var i7140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7141.length; i += 1) {
    i7140.add(request.d('TMPro.TMP_SpriteCharacter', i7141[i + 0]));
  }
  i7134.m_SpriteCharacterTable = i7140
  var i7143 = i7135[11]
  var i7142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7143.length; i += 1) {
    i7142.add(request.d('TMPro.TMP_SpriteGlyph', i7143[i + 0]));
  }
  i7134.m_SpriteGlyphTable = i7142
  return i7134
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7146 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7147 = data
  i7146.name = i7147[0]
  i7146.hashCode = i7147[1]
  i7146.unicode = i7147[2]
  i7146.pivot = new pc.Vec2( i7147[3], i7147[4] )
  request.r(i7147[5], i7147[6], 0, i7146, 'sprite')
  i7146.id = i7147[7]
  i7146.x = i7147[8]
  i7146.y = i7147[9]
  i7146.width = i7147[10]
  i7146.height = i7147[11]
  i7146.xOffset = i7147[12]
  i7146.yOffset = i7147[13]
  i7146.xAdvance = i7147[14]
  i7146.scale = i7147[15]
  return i7146
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7152 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7153 = data
  i7152.m_Name = i7153[0]
  i7152.m_HashCode = i7153[1]
  i7152.m_ElementType = i7153[2]
  i7152.m_Unicode = i7153[3]
  i7152.m_GlyphIndex = i7153[4]
  i7152.m_Scale = i7153[5]
  return i7152
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7156 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7157 = data
  request.r(i7157[0], i7157[1], 0, i7156, 'sprite')
  i7156.m_Index = i7157[2]
  i7156.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7157[3], i7156.m_Metrics)
  i7156.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7157[4], i7156.m_GlyphRect)
  i7156.m_Scale = i7157[5]
  i7156.m_AtlasIndex = i7157[6]
  i7156.m_ClassDefinitionType = i7157[7]
  return i7156
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7158 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7159 = data
  var i7161 = i7159[0]
  var i7160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7161.length; i += 1) {
    i7160.add(request.d('TMPro.TMP_Style', i7161[i + 0]));
  }
  i7158.m_StyleList = i7160
  return i7158
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7164 = root || request.c( 'TMPro.TMP_Style' )
  var i7165 = data
  i7164.m_Name = i7165[0]
  i7164.m_HashCode = i7165[1]
  i7164.m_OpeningDefinition = i7165[2]
  i7164.m_ClosingDefinition = i7165[3]
  i7164.m_OpeningTagArray = i7165[4]
  i7164.m_ClosingTagArray = i7165[5]
  i7164.m_OpeningTagUnicodeArray = i7165[6]
  i7164.m_ClosingTagUnicodeArray = i7165[7]
  return i7164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7167 = data
  var i7169 = i7167[0]
  var i7168 = []
  for(var i = 0; i < i7169.length; i += 1) {
    i7168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7169[i + 0]) );
  }
  i7166.files = i7168
  i7166.componentToPrefabIds = i7167[1]
  return i7166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7173 = data
  i7172.path = i7173[0]
  request.r(i7173[1], i7173[2], 0, i7172, 'unityObject')
  return i7172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7175 = data
  var i7177 = i7175[0]
  var i7176 = []
  for(var i = 0; i < i7177.length; i += 1) {
    i7176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7177[i + 0]) );
  }
  i7174.scriptsExecutionOrder = i7176
  var i7179 = i7175[1]
  var i7178 = []
  for(var i = 0; i < i7179.length; i += 1) {
    i7178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7179[i + 0]) );
  }
  i7174.sortingLayers = i7178
  var i7181 = i7175[2]
  var i7180 = []
  for(var i = 0; i < i7181.length; i += 1) {
    i7180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7181[i + 0]) );
  }
  i7174.cullingLayers = i7180
  i7174.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7175[3], i7174.timeSettings)
  i7174.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7175[4], i7174.physicsSettings)
  i7174.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7175[5], i7174.physics2DSettings)
  i7174.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7175[6], i7174.qualitySettings)
  i7174.enableRealtimeShadows = !!i7175[7]
  i7174.enableAutoInstancing = !!i7175[8]
  i7174.enableDynamicBatching = !!i7175[9]
  i7174.lightmapEncodingQuality = i7175[10]
  i7174.desiredColorSpace = i7175[11]
  var i7183 = i7175[12]
  var i7182 = []
  for(var i = 0; i < i7183.length; i += 1) {
    i7182.push( i7183[i + 0] );
  }
  i7174.allTags = i7182
  return i7174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7187 = data
  i7186.name = i7187[0]
  i7186.value = i7187[1]
  return i7186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7191 = data
  i7190.id = i7191[0]
  i7190.name = i7191[1]
  i7190.value = i7191[2]
  return i7190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7195 = data
  i7194.id = i7195[0]
  i7194.name = i7195[1]
  return i7194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7197 = data
  i7196.fixedDeltaTime = i7197[0]
  i7196.maximumDeltaTime = i7197[1]
  i7196.timeScale = i7197[2]
  i7196.maximumParticleTimestep = i7197[3]
  return i7196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7199 = data
  i7198.gravity = new pc.Vec3( i7199[0], i7199[1], i7199[2] )
  i7198.defaultSolverIterations = i7199[3]
  i7198.bounceThreshold = i7199[4]
  i7198.autoSyncTransforms = !!i7199[5]
  i7198.autoSimulation = !!i7199[6]
  var i7201 = i7199[7]
  var i7200 = []
  for(var i = 0; i < i7201.length; i += 1) {
    i7200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7201[i + 0]) );
  }
  i7198.collisionMatrix = i7200
  return i7198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7205 = data
  i7204.enabled = !!i7205[0]
  i7204.layerId = i7205[1]
  i7204.otherLayerId = i7205[2]
  return i7204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7207 = data
  request.r(i7207[0], i7207[1], 0, i7206, 'material')
  i7206.gravity = new pc.Vec2( i7207[2], i7207[3] )
  i7206.positionIterations = i7207[4]
  i7206.velocityIterations = i7207[5]
  i7206.velocityThreshold = i7207[6]
  i7206.maxLinearCorrection = i7207[7]
  i7206.maxAngularCorrection = i7207[8]
  i7206.maxTranslationSpeed = i7207[9]
  i7206.maxRotationSpeed = i7207[10]
  i7206.baumgarteScale = i7207[11]
  i7206.baumgarteTOIScale = i7207[12]
  i7206.timeToSleep = i7207[13]
  i7206.linearSleepTolerance = i7207[14]
  i7206.angularSleepTolerance = i7207[15]
  i7206.defaultContactOffset = i7207[16]
  i7206.autoSimulation = !!i7207[17]
  i7206.queriesHitTriggers = !!i7207[18]
  i7206.queriesStartInColliders = !!i7207[19]
  i7206.callbacksOnDisable = !!i7207[20]
  i7206.reuseCollisionCallbacks = !!i7207[21]
  i7206.autoSyncTransforms = !!i7207[22]
  var i7209 = i7207[23]
  var i7208 = []
  for(var i = 0; i < i7209.length; i += 1) {
    i7208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7209[i + 0]) );
  }
  i7206.collisionMatrix = i7208
  return i7206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7213 = data
  i7212.enabled = !!i7213[0]
  i7212.layerId = i7213[1]
  i7212.otherLayerId = i7213[2]
  return i7212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7215 = data
  var i7217 = i7215[0]
  var i7216 = []
  for(var i = 0; i < i7217.length; i += 1) {
    i7216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7217[i + 0]) );
  }
  i7214.qualityLevels = i7216
  var i7219 = i7215[1]
  var i7218 = []
  for(var i = 0; i < i7219.length; i += 1) {
    i7218.push( i7219[i + 0] );
  }
  i7214.names = i7218
  i7214.shadows = i7215[2]
  i7214.anisotropicFiltering = i7215[3]
  i7214.antiAliasing = i7215[4]
  i7214.lodBias = i7215[5]
  i7214.shadowCascades = i7215[6]
  i7214.shadowDistance = i7215[7]
  i7214.shadowmaskMode = i7215[8]
  i7214.shadowProjection = i7215[9]
  i7214.shadowResolution = i7215[10]
  i7214.softParticles = !!i7215[11]
  i7214.softVegetation = !!i7215[12]
  i7214.activeColorSpace = i7215[13]
  i7214.desiredColorSpace = i7215[14]
  i7214.masterTextureLimit = i7215[15]
  i7214.maxQueuedFrames = i7215[16]
  i7214.particleRaycastBudget = i7215[17]
  i7214.pixelLightCount = i7215[18]
  i7214.realtimeReflectionProbes = !!i7215[19]
  i7214.shadowCascade2Split = i7215[20]
  i7214.shadowCascade4Split = new pc.Vec3( i7215[21], i7215[22], i7215[23] )
  i7214.streamingMipmapsActive = !!i7215[24]
  i7214.vSyncCount = i7215[25]
  i7214.asyncUploadBufferSize = i7215[26]
  i7214.asyncUploadTimeSlice = i7215[27]
  i7214.billboardsFaceCameraPosition = !!i7215[28]
  i7214.shadowNearPlaneOffset = i7215[29]
  i7214.streamingMipmapsMemoryBudget = i7215[30]
  i7214.maximumLODLevel = i7215[31]
  i7214.streamingMipmapsAddAllCameras = !!i7215[32]
  i7214.streamingMipmapsMaxLevelReduction = i7215[33]
  i7214.streamingMipmapsRenderersPerFrame = i7215[34]
  i7214.resolutionScalingFixedDPIFactor = i7215[35]
  i7214.streamingMipmapsMaxFileIORequests = i7215[36]
  i7214.currentQualityLevel = i7215[37]
  return i7214
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7222 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7223 = data
  i7222.xPlacement = i7223[0]
  i7222.yPlacement = i7223[1]
  i7222.xAdvance = i7223[2]
  i7222.yAdvance = i7223[3]
  return i7222
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[39],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[13],"93":[13],"94":[13],"95":[13],"96":[13],"97":[13],"98":[13],"99":[13],"100":[13],"101":[13],"102":[13],"103":[13],"104":[13],"105":[39],"106":[107],"108":[109],"110":[109],"33":[24],"111":[47],"45":[47],"31":[2],"21":[1],"112":[113],"114":[2],"115":[113],"116":[24],"117":[24],"35":[33],"29":[25,24],"118":[24],"34":[33],"119":[24],"120":[24],"121":[24],"122":[24],"123":[24],"124":[24],"125":[24],"54":[24],"126":[24],"30":[25,24],"127":[24],"128":[24],"129":[24],"130":[24],"131":[25,24],"132":[24],"133":[59],"134":[59],"60":[59],"135":[59],"136":[39],"137":[39],"138":[139],"140":[39],"141":[24],"142":[107,24],"27":[24,25],"143":[24],"144":[25,24],"145":[107],"146":[25,24],"147":[24],"148":[113]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","_Project.Code.Core.Character.CharacterInstaller","_Project.Code.Core.Character.Mover","_Project.Code.Core.Collision.OverlapCollisionDetector","_Project.Code.Core.Character.CharacterAnimator","_Project.Code.Core.Items.Inventory.ItemInventory","UnityEngine.Rigidbody2D","UnityEngine.AudioSource","UnityEngine.CircleCollider2D","_Project.Code.Core.Character.TopDownAnimator","_Project.Code.Core.Character.TopDownAnimationConfig","UnityEngine.Animator","UnityEngine.AudioClip","UnityEditor.Animations.AnimatorController","_Project.Code.Core.Character.SortingGroupAnimator","MusicItemAdded","_Project.Code.Core.Items.Inventory.ColumnInventoryView","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.UI.RawImage","_Project.Code.Selling.Customer","_Project.Code.Selling.Line.BubbleView","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","_Project.Code.Core.Items.Item","_Project.Code.Core.Harvesting.Field","_Project.Code.Core.Items.InventoryInitializer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","_Project.Code.Camera.Follower","_Project.Code.Camera.CameraInBordersZoom","_Project.Code.Entry.EntryPoint","VariableJoystick","_Project.Code.Services.CoroutineRunner.CoroutineRunner","_Project.Code.Core.Buyables.EndScreenShower","_Project.Code.Core.Buyables.Buyable","UnityEngine.GameObject","_Project.Code.Tutorial.Tutorial","UnityEngine.EdgeCollider2D","ArrowAnimator","UnityEngine.UI.Mask","_Project.Code.Core.Buyables.CoinsViewUpdater","_Project.Code.Core.Animations.BreathAnimation","CTA","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PrintCopacity","_Project.Code.Core.Buyables.InventorViewDestroyer","_Project.Code.Core.Workers.Worker","_Project.Code.Core.PopcornFarm.CornFarm","_Project.Code.Selling.Line.Line","_Project.Code.Selling.Seller","UnityEngine.Font","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","_Project.Code.Entry.Entry","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "SpongeBob-Playable";

Deserializers.lunaInitializationTime = "04/21/2025 08:42:21";

Deserializers.lunaDaysRunning = "0.4";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "61cef7f24d3707143bd49e25874dc417";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1730";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4385";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "ddf160d7-0654-42ac-af57-0d7c3dcafeb4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

