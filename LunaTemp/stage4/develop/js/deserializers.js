var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointSpring' )
  var i603 = data
  i602.spring = i603[0]
  i602.damper = i603[1]
  i602.targetPosition = i603[2]
  return i602
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointMotor' )
  var i605 = data
  i604.m_TargetVelocity = i605[0]
  i604.m_Force = i605[1]
  i604.m_FreeSpin = i605[2]
  return i604
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointLimits' )
  var i607 = data
  i606.m_Min = i607[0]
  i606.m_Max = i607[1]
  i606.m_Bounciness = i607[2]
  i606.m_BounceMinVelocity = i607[3]
  i606.m_ContactDistance = i607[4]
  i606.minBounce = i607[5]
  i606.maxBounce = i607[6]
  return i606
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointDrive' )
  var i609 = data
  i608.m_PositionSpring = i609[0]
  i608.m_PositionDamper = i609[1]
  i608.m_MaximumForce = i609[2]
  i608.m_UseAcceleration = i609[3]
  return i608
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i611 = data
  i610.m_Spring = i611[0]
  i610.m_Damper = i611[1]
  return i610
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i613 = data
  i612.m_Limit = i613[0]
  i612.m_Bounciness = i613[1]
  i612.m_ContactDistance = i613[2]
  return i612
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i615 = data
  i614.m_ExtremumSlip = i615[0]
  i614.m_ExtremumValue = i615[1]
  i614.m_AsymptoteSlip = i615[2]
  i614.m_AsymptoteValue = i615[3]
  i614.m_Stiffness = i615[4]
  return i614
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i617 = data
  i616.m_LowerAngle = i617[0]
  i616.m_UpperAngle = i617[1]
  return i616
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i619 = data
  i618.m_MotorSpeed = i619[0]
  i618.m_MaximumMotorTorque = i619[1]
  return i618
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i621 = data
  i620.m_DampingRatio = i621[0]
  i620.m_Frequency = i621[1]
  i620.m_Angle = i621[2]
  return i620
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i623 = data
  i622.m_LowerTranslation = i623[0]
  i622.m_UpperTranslation = i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i625 = data
  i624.position = new pc.Vec3( i625[0], i625[1], i625[2] )
  i624.scale = new pc.Vec3( i625[3], i625[4], i625[5] )
  i624.rotation = new pc.Quat(i625[6], i625[7], i625[8], i625[9])
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i627 = data
  i626.enabled = !!i627[0]
  i626.sortingLayerIndex = i627[1]
  i626.sortingOrder = i627[2]
  i626.sortingLayerName = i627[3]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i629 = data
  i628.enabled = !!i629[0]
  request.r(i629[1], i629[2], 0, i628, 'sharedMaterial')
  var i631 = i629[3]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.sharedMaterials = i630
  i628.receiveShadows = !!i629[4]
  i628.shadowCastingMode = i629[5]
  i628.sortingLayerID = i629[6]
  i628.sortingOrder = i629[7]
  i628.lightmapIndex = i629[8]
  i628.lightmapSceneIndex = i629[9]
  i628.lightmapScaleOffset = new pc.Vec4( i629[10], i629[11], i629[12], i629[13] )
  i628.lightProbeUsage = i629[14]
  i628.reflectionProbeUsage = i629[15]
  i628.color = new pc.Color(i629[16], i629[17], i629[18], i629[19])
  request.r(i629[20], i629[21], 0, i628, 'sprite')
  i628.flipX = !!i629[22]
  i628.flipY = !!i629[23]
  i628.drawMode = i629[24]
  i628.size = new pc.Vec2( i629[25], i629[26] )
  i628.tileMode = i629[27]
  i628.adaptiveModeThreshold = i629[28]
  i628.maskInteraction = i629[29]
  i628.spriteSortPoint = i629[30]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i635 = data
  i634.name = i635[0]
  i634.tagId = i635[1]
  i634.enabled = !!i635[2]
  i634.isStatic = !!i635[3]
  i634.layer = i635[4]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i636 = root || new pc.UnityMaterial()
  var i637 = data
  i636.name = i637[0]
  request.r(i637[1], i637[2], 0, i636, 'shader')
  i636.renderQueue = i637[3]
  i636.enableInstancing = !!i637[4]
  var i639 = i637[5]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i639[i + 0]) );
  }
  i636.floatParameters = i638
  var i641 = i637[6]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i641[i + 0]) );
  }
  i636.colorParameters = i640
  var i643 = i637[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i643[i + 0]) );
  }
  i636.vectorParameters = i642
  var i645 = i637[8]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i645[i + 0]) );
  }
  i636.textureParameters = i644
  var i647 = i637[9]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i647[i + 0]) );
  }
  i636.materialFlags = i646
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i651 = data
  i650.name = i651[0]
  i650.value = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i655 = data
  i654.name = i655[0]
  i654.value = new pc.Color(i655[1], i655[2], i655[3], i655[4])
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i659 = data
  i658.name = i659[0]
  i658.value = new pc.Vec4( i659[1], i659[2], i659[3], i659[4] )
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i663 = data
  i662.name = i663[0]
  request.r(i663[1], i663[2], 0, i662, 'value')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i667 = data
  i666.name = i667[0]
  i666.enabled = !!i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i669 = data
  i668.name = i669[0]
  i668.width = i669[1]
  i668.height = i669[2]
  i668.mipmapCount = i669[3]
  i668.anisoLevel = i669[4]
  i668.filterMode = i669[5]
  i668.hdr = !!i669[6]
  i668.format = i669[7]
  i668.wrapMode = i669[8]
  i668.alphaIsTransparency = !!i669[9]
  i668.alphaSource = i669[10]
  i668.graphicsFormat = i669[11]
  i668.sRGBTexture = !!i669[12]
  i668.desiredColorSpace = i669[13]
  i668.wrapU = i669[14]
  i668.wrapV = i669[15]
  return i668
}

Deserializers["_Project.Code.Core.Character.CharacterInstaller"] = function (request, data, root) {
  var i670 = root || request.c( '_Project.Code.Core.Character.CharacterInstaller' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, '_mover')
  request.r(i671[2], i671[3], 0, i670, '_castingDetector')
  request.r(i671[4], i671[5], 0, i670, '_animator')
  var i673 = i671[6]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Inventory.ItemInventory')))
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 1, i672, '')
  }
  i670._storages = i672
  return i670
}

Deserializers["_Project.Code.Core.Collision.OverlapCollisionDetector"] = function (request, data, root) {
  var i676 = root || request.c( '_Project.Code.Core.Collision.OverlapCollisionDetector' )
  var i677 = data
  i676.detectionRadius = i677[0]
  i676.collisionMask = UnityEngine.LayerMask.FromIntegerValue( i677[1] )
  return i676
}

Deserializers["_Project.Code.Core.Character.Mover"] = function (request, data, root) {
  var i678 = root || request.c( '_Project.Code.Core.Character.Mover' )
  var i679 = data
  i678._speed = i679[0]
  i678.isMoving = !!i679[1]
  request.r(i679[2], i679[3], 0, i678, '_rigidbody')
  request.r(i679[4], i679[5], 0, i678, '_footstepAudioSource')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i681 = data
  i680.bodyType = i681[0]
  request.r(i681[1], i681[2], 0, i680, 'material')
  i680.simulated = !!i681[3]
  i680.useAutoMass = !!i681[4]
  i680.mass = i681[5]
  i680.drag = i681[6]
  i680.angularDrag = i681[7]
  i680.gravityScale = i681[8]
  i680.collisionDetectionMode = i681[9]
  i680.sleepMode = i681[10]
  i680.constraints = i681[11]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i683 = data
  i682.radius = i683[0]
  i682.enabled = !!i683[1]
  i682.isTrigger = !!i683[2]
  i682.usedByEffector = !!i683[3]
  i682.density = i683[4]
  i682.offset = new pc.Vec2( i683[5], i683[6] )
  request.r(i683[7], i683[8], 0, i682, 'material')
  return i682
}

Deserializers["_Project.Code.Core.Character.CharacterAnimator"] = function (request, data, root) {
  var i684 = root || request.c( '_Project.Code.Core.Character.CharacterAnimator' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, '_walkAnimator')
  request.r(i685[2], i685[3], 0, i684, '_idleAnimator')
  request.r(i685[4], i685[5], 0, i684, '_backpackAnimator')
  return i684
}

Deserializers["_Project.Code.Core.Character.TopDownAnimator"] = function (request, data, root) {
  var i686 = root || request.c( '_Project.Code.Core.Character.TopDownAnimator' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, '_config')
  request.r(i687[2], i687[3], 0, i686, '_animator')
  request.r(i687[4], i687[5], 0, i686, '_flipBody')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'clip')
  request.r(i689[2], i689[3], 0, i688, 'outputAudioMixerGroup')
  i688.playOnAwake = !!i689[4]
  i688.loop = !!i689[5]
  i688.time = i689[6]
  i688.volume = i689[7]
  i688.pitch = i689[8]
  i688.enabled = !!i689[9]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'animatorController')
  request.r(i691[2], i691[3], 0, i690, 'avatar')
  i690.updateMode = i691[4]
  i690.hasTransformHierarchy = !!i691[5]
  i690.applyRootMotion = !!i691[6]
  var i693 = i691[7]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690.humanBones = i692
  i690.enabled = !!i691[8]
  return i690
}

Deserializers["_Project.Code.Core.Character.SortingGroupAnimator"] = function (request, data, root) {
  var i696 = root || request.c( '_Project.Code.Core.Character.SortingGroupAnimator' )
  var i697 = data
  i696._order = i697[0]
  return i696
}

Deserializers["_Project.Code.Core.Items.Inventory.ItemInventory"] = function (request, data, root) {
  var i698 = root || request.c( '_Project.Code.Core.Items.Inventory.ItemInventory' )
  var i699 = data
  i698._type = i699[0]
  i698._inventory = i699[1]
  i698._capacity = i699[2]
  request.r(i699[3], i699[4], 0, i698, '_musicItemAdded')
  return i698
}

Deserializers["_Project.Code.Core.Items.Inventory.ColumnInventoryView"] = function (request, data, root) {
  var i700 = root || request.c( '_Project.Code.Core.Items.Inventory.ColumnInventoryView' )
  var i701 = data
  var i703 = i701[0]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 1, i702, '')
  }
  i700._columnPoints = i702
  i700._destroyOnEmptied = !!i701[1]
  request.r(i701[2], i701[3], 0, i700, '_inventory')
  return i700
}

Deserializers["MusicItemAdded"] = function (request, data, root) {
  var i706 = root || request.c( 'MusicItemAdded' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'musicSource')
  request.r(i707[2], i707[3], 0, i706, 'musicClip_coin')
  request.r(i707[4], i707[5], 0, i706, 'musicClip_corn')
  request.r(i707[6], i707[7], 0, i706, 'musicClip_popcorn')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i709 = data
  i708.pivot = new pc.Vec2( i709[0], i709[1] )
  i708.anchorMin = new pc.Vec2( i709[2], i709[3] )
  i708.anchorMax = new pc.Vec2( i709[4], i709[5] )
  i708.sizeDelta = new pc.Vec2( i709[6], i709[7] )
  i708.anchoredPosition3D = new pc.Vec3( i709[8], i709[9], i709[10] )
  i708.rotation = new pc.Quat(i709[11], i709[12], i709[13], i709[14])
  i708.scale = new pc.Vec3( i709[15], i709[16], i709[17] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i711 = data
  i710.cullTransparentMesh = !!i711[0]
  return i710
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i712 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i713 = data
  i712.m_hasFontAssetChanged = !!i713[0]
  request.r(i713[1], i713[2], 0, i712, 'm_baseMaterial')
  i712.m_maskOffset = new pc.Vec4( i713[3], i713[4], i713[5], i713[6] )
  i712.m_text = i713[7]
  i712.m_isRightToLeft = !!i713[8]
  request.r(i713[9], i713[10], 0, i712, 'm_fontAsset')
  request.r(i713[11], i713[12], 0, i712, 'm_sharedMaterial')
  var i715 = i713[13]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.m_fontSharedMaterials = i714
  request.r(i713[14], i713[15], 0, i712, 'm_fontMaterial')
  var i717 = i713[16]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i712.m_fontMaterials = i716
  i712.m_fontColor32 = UnityEngine.Color32.ConstructColor(i713[17], i713[18], i713[19], i713[20])
  i712.m_fontColor = new pc.Color(i713[21], i713[22], i713[23], i713[24])
  i712.m_enableVertexGradient = !!i713[25]
  i712.m_colorMode = i713[26]
  i712.m_fontColorGradient = request.d('TMPro.VertexGradient', i713[27], i712.m_fontColorGradient)
  request.r(i713[28], i713[29], 0, i712, 'm_fontColorGradientPreset')
  request.r(i713[30], i713[31], 0, i712, 'm_spriteAsset')
  i712.m_tintAllSprites = !!i713[32]
  request.r(i713[33], i713[34], 0, i712, 'm_StyleSheet')
  i712.m_TextStyleHashCode = i713[35]
  i712.m_overrideHtmlColors = !!i713[36]
  i712.m_faceColor = UnityEngine.Color32.ConstructColor(i713[37], i713[38], i713[39], i713[40])
  i712.m_fontSize = i713[41]
  i712.m_fontSizeBase = i713[42]
  i712.m_fontWeight = i713[43]
  i712.m_enableAutoSizing = !!i713[44]
  i712.m_fontSizeMin = i713[45]
  i712.m_fontSizeMax = i713[46]
  i712.m_fontStyle = i713[47]
  i712.m_HorizontalAlignment = i713[48]
  i712.m_VerticalAlignment = i713[49]
  i712.m_textAlignment = i713[50]
  i712.m_characterSpacing = i713[51]
  i712.m_wordSpacing = i713[52]
  i712.m_lineSpacing = i713[53]
  i712.m_lineSpacingMax = i713[54]
  i712.m_paragraphSpacing = i713[55]
  i712.m_charWidthMaxAdj = i713[56]
  i712.m_enableWordWrapping = !!i713[57]
  i712.m_wordWrappingRatios = i713[58]
  i712.m_overflowMode = i713[59]
  request.r(i713[60], i713[61], 0, i712, 'm_linkedTextComponent')
  request.r(i713[62], i713[63], 0, i712, 'parentLinkedComponent')
  i712.m_enableKerning = !!i713[64]
  i712.m_enableExtraPadding = !!i713[65]
  i712.checkPaddingRequired = !!i713[66]
  i712.m_isRichText = !!i713[67]
  i712.m_parseCtrlCharacters = !!i713[68]
  i712.m_isOrthographic = !!i713[69]
  i712.m_isCullingEnabled = !!i713[70]
  i712.m_horizontalMapping = i713[71]
  i712.m_verticalMapping = i713[72]
  i712.m_uvLineOffset = i713[73]
  i712.m_geometrySortingOrder = i713[74]
  i712.m_IsTextObjectScaleStatic = !!i713[75]
  i712.m_VertexBufferAutoSizeReduction = !!i713[76]
  i712.m_useMaxVisibleDescender = !!i713[77]
  i712.m_pageToDisplay = i713[78]
  i712.m_margin = new pc.Vec4( i713[79], i713[80], i713[81], i713[82] )
  i712.m_isUsingLegacyAnimationComponent = !!i713[83]
  i712.m_isVolumetricText = !!i713[84]
  request.r(i713[85], i713[86], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[87]
  i712.m_Color = new pc.Color(i713[88], i713[89], i713[90], i713[91])
  i712.m_RaycastTarget = !!i713[92]
  i712.m_RaycastPadding = new pc.Vec4( i713[93], i713[94], i713[95], i713[96] )
  return i712
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.VertexGradient' )
  var i719 = data
  i718.topLeft = new pc.Color(i719[0], i719[1], i719[2], i719[3])
  i718.topRight = new pc.Color(i719[4], i719[5], i719[6], i719[7])
  i718.bottomLeft = new pc.Color(i719[8], i719[9], i719[10], i719[11])
  i718.bottomRight = new pc.Color(i719[12], i719[13], i719[14], i719[15])
  return i718
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.Image' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'm_Sprite')
  i720.m_Type = i721[2]
  i720.m_PreserveAspect = !!i721[3]
  i720.m_FillCenter = !!i721[4]
  i720.m_FillMethod = i721[5]
  i720.m_FillAmount = i721[6]
  i720.m_FillClockwise = !!i721[7]
  i720.m_FillOrigin = i721[8]
  i720.m_UseSpriteMesh = !!i721[9]
  i720.m_PixelsPerUnitMultiplier = i721[10]
  request.r(i721[11], i721[12], 0, i720, 'm_Material')
  i720.m_Maskable = !!i721[13]
  i720.m_Color = new pc.Color(i721[14], i721[15], i721[16], i721[17])
  i720.m_RaycastTarget = !!i721[18]
  i720.m_RaycastPadding = new pc.Vec4( i721[19], i721[20], i721[21], i721[22] )
  return i720
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'm_Texture')
  i722.m_UVRect = UnityEngine.Rect.MinMaxRect(i723[2], i723[3], i723[4], i723[5])
  request.r(i723[6], i723[7], 0, i722, 'm_Material')
  i722.m_Maskable = !!i723[8]
  i722.m_Color = new pc.Color(i723[9], i723[10], i723[11], i723[12])
  i722.m_RaycastTarget = !!i723[13]
  i722.m_RaycastPadding = new pc.Vec4( i723[14], i723[15], i723[16], i723[17] )
  return i722
}

Deserializers["_Project.Code.Selling.Customer"] = function (request, data, root) {
  var i724 = root || request.c( '_Project.Code.Selling.Customer' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, '_bubbleView')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i727 = data
  i726.enabled = !!i727[0]
  i726.planeDistance = i727[1]
  i726.referencePixelsPerUnit = i727[2]
  i726.isFallbackOverlay = !!i727[3]
  i726.renderMode = i727[4]
  i726.renderOrder = i727[5]
  i726.sortingLayerName = i727[6]
  i726.sortingOrder = i727[7]
  i726.scaleFactor = i727[8]
  request.r(i727[9], i727[10], 0, i726, 'worldCamera')
  i726.overrideSorting = !!i727[11]
  i726.pixelPerfect = !!i727[12]
  i726.targetDisplay = i727[13]
  i726.overridePixelPerfect = !!i727[14]
  return i726
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i729 = data
  i728.m_UiScaleMode = i729[0]
  i728.m_ReferencePixelsPerUnit = i729[1]
  i728.m_ScaleFactor = i729[2]
  i728.m_ReferenceResolution = new pc.Vec2( i729[3], i729[4] )
  i728.m_ScreenMatchMode = i729[5]
  i728.m_MatchWidthOrHeight = i729[6]
  i728.m_PhysicalUnit = i729[7]
  i728.m_FallbackScreenDPI = i729[8]
  i728.m_DefaultSpriteDPI = i729[9]
  i728.m_DynamicPixelsPerUnit = i729[10]
  i728.m_PresetInfoIsWorld = !!i729[11]
  return i728
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i731 = data
  i730.m_IgnoreReversedGraphics = !!i731[0]
  i730.m_BlockingObjects = i731[1]
  i730.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i731[2] )
  return i730
}

Deserializers["_Project.Code.Selling.Line.BubbleView"] = function (request, data, root) {
  var i732 = root || request.c( '_Project.Code.Selling.Line.BubbleView' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, '_text')
  request.r(i733[2], i733[3], 0, i732, '_body')
  return i732
}

Deserializers["_Project.Code.Core.Items.Item"] = function (request, data, root) {
  var i734 = root || request.c( '_Project.Code.Core.Items.Item' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, '_collider')
  i734._type = i735[2]
  return i734
}

Deserializers["_Project.Code.Core.Harvesting.Field"] = function (request, data, root) {
  var i736 = root || request.c( '_Project.Code.Core.Harvesting.Field' )
  var i737 = data
  i736._state = i737[0]
  request.r(i737[1], i737[2], 0, i736, '_plant')
  return i736
}

Deserializers["_Project.Code.Core.Items.InventoryInitializer"] = function (request, data, root) {
  var i738 = root || request.c( '_Project.Code.Core.Items.InventoryInitializer' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, '_inventory')
  i738._count = i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i741 = data
  i740.enabled = !!i741[0]
  i740.aspect = i741[1]
  i740.orthographic = !!i741[2]
  i740.orthographicSize = i741[3]
  i740.backgroundColor = new pc.Color(i741[4], i741[5], i741[6], i741[7])
  i740.nearClipPlane = i741[8]
  i740.farClipPlane = i741[9]
  i740.fieldOfView = i741[10]
  i740.depth = i741[11]
  i740.clearFlags = i741[12]
  i740.cullingMask = i741[13]
  i740.rect = i741[14]
  request.r(i741[15], i741[16], 0, i740, 'targetTexture')
  i740.usePhysicalProperties = !!i741[17]
  i740.focalLength = i741[18]
  i740.sensorSize = new pc.Vec2( i741[19], i741[20] )
  i740.lensShift = new pc.Vec2( i741[21], i741[22] )
  i740.gateFit = i741[23]
  i740.commandBufferCount = i741[24]
  i740.cameraType = i741[25]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i743 = data
  i742.enabled = !!i743[0]
  i742.isTrigger = !!i743[1]
  i742.usedByEffector = !!i743[2]
  i742.density = i743[3]
  i742.offset = new pc.Vec2( i743[4], i743[5] )
  request.r(i743[6], i743[7], 0, i742, 'material')
  i742.usedByComposite = !!i743[8]
  i742.autoTiling = !!i743[9]
  var i745 = i743[10]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
  var i747 = i745[i + 0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
    i746.push( new pc.Vec2( i747[i + 0], i747[i + 1] ) );
  }
    i744.push( i746 );
  }
  i742.points = i744
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i755 = data
  i754.usedByComposite = !!i755[0]
  i754.autoTiling = !!i755[1]
  i754.size = new pc.Vec2( i755[2], i755[3] )
  i754.edgeRadius = i755[4]
  i754.enabled = !!i755[5]
  i754.isTrigger = !!i755[6]
  i754.usedByEffector = !!i755[7]
  i754.density = i755[8]
  i754.offset = new pc.Vec2( i755[9], i755[10] )
  request.r(i755[11], i755[12], 0, i754, 'material')
  return i754
}

Deserializers["_Project.Code.Camera.Follower"] = function (request, data, root) {
  var i756 = root || request.c( '_Project.Code.Camera.Follower' )
  var i757 = data
  i756._speed = i757[0]
  request.r(i757[1], i757[2], 0, i756, '_target')
  return i756
}

Deserializers["_Project.Code.Camera.CameraInBordersZoom"] = function (request, data, root) {
  var i758 = root || request.c( '_Project.Code.Camera.CameraInBordersZoom' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, '_borders')
  i758._defaultCameraSize = i759[2]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i761 = data
  i760.name = i761[0]
  i760.index = i761[1]
  i760.startup = !!i761[2]
  return i760
}

Deserializers["_Project.Code.Entry.EntryPoint"] = function (request, data, root) {
  var i762 = root || request.c( '_Project.Code.Entry.EntryPoint' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, '_joystick')
  var i765 = i763[2]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Item')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i762._itemPrefabs = i764
  return i762
}

Deserializers["_Project.Code.Services.CoroutineRunner.CoroutineRunner"] = function (request, data, root) {
  var i768 = root || request.c( '_Project.Code.Services.CoroutineRunner.CoroutineRunner' )
  var i769 = data
  return i768
}

Deserializers["_Project.Code.Core.Buyables.EndScreenShower"] = function (request, data, root) {
  var i770 = root || request.c( '_Project.Code.Core.Buyables.EndScreenShower' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, '_fieldBuyable')
  request.r(i771[2], i771[3], 0, i770, '_ui')
  request.r(i771[4], i771[5], 0, i770, '_moveInput')
  request.r(i771[6], i771[7], 0, i770, 'joystick')
  request.r(i771[8], i771[9], 0, i770, '_audioSource')
  return i770
}

Deserializers["_Project.Code.Tutorial.Tutorial"] = function (request, data, root) {
  var i772 = root || request.c( '_Project.Code.Tutorial.Tutorial' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, '_tutorialCollider')
  request.r(i773[2], i773[3], 0, i772, '_tutorialText')
  request.r(i773[4], i773[5], 0, i772, '_tutorialInventory')
  request.r(i773[6], i773[7], 0, i772, '_joystick')
  request.r(i773[8], i773[9], 0, i772, '_arrow')
  request.r(i773[10], i773[11], 0, i772, '_point1')
  request.r(i773[12], i773[13], 0, i772, '_point2')
  request.r(i773[14], i773[15], 0, i772, '_buyable')
  return i772
}

Deserializers["ArrowAnimator"] = function (request, data, root) {
  var i774 = root || request.c( 'ArrowAnimator' )
  var i775 = data
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i777 = data
  i776.enabled = !!i777[0]
  i776.isTrigger = !!i777[1]
  i776.usedByEffector = !!i777[2]
  i776.density = i777[3]
  i776.offset = new pc.Vec2( i777[4], i777[5] )
  request.r(i777[6], i777[7], 0, i776, 'material')
  i776.edgeRadius = i777[8]
  var i779 = i777[9]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
    i778.push( new pc.Vec2( i779[i + 0], i779[i + 1] ) );
  }
  i776.points = i778
  i776.useAdjacentStartPoint = !!i777[10]
  i776.adjacentStartPoint = new pc.Vec2( i777[11], i777[12] )
  i776.useAdjacentEndPoint = !!i777[13]
  i776.adjacentEndPoint = new pc.Vec2( i777[14], i777[15] )
  return i776
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.Mask' )
  var i781 = data
  i780.m_ShowMaskGraphic = !!i781[0]
  return i780
}

Deserializers["_Project.Code.Core.Buyables.CoinsViewUpdater"] = function (request, data, root) {
  var i782 = root || request.c( '_Project.Code.Core.Buyables.CoinsViewUpdater' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, '_text')
  request.r(i783[2], i783[3], 0, i782, '_inventory')
  return i782
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i784 = root || request.c( 'VariableJoystick' )
  var i785 = data
  i784.moveThreshold = i785[0]
  i784.joystickType = i785[1]
  request.r(i785[2], i785[3], 0, i784, 'background')
  i784.handleRange = i785[4]
  i784.deadZone = i785[5]
  i784.axisOptions = i785[6]
  i784.snapX = !!i785[7]
  i784.snapY = !!i785[8]
  request.r(i785[9], i785[10], 0, i784, '_handle')
  return i784
}

Deserializers["_Project.Code.Core.Animations.BreathAnimation"] = function (request, data, root) {
  var i786 = root || request.c( '_Project.Code.Core.Animations.BreathAnimation' )
  var i787 = data
  i786._scaleFactor = i787[0]
  return i786
}

Deserializers["CTA"] = function (request, data, root) {
  var i788 = root || request.c( 'CTA' )
  var i789 = data
  return i788
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Button' )
  var i791 = data
  i790.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i791[0], i790.m_OnClick)
  i790.m_Navigation = request.d('UnityEngine.UI.Navigation', i791[1], i790.m_Navigation)
  i790.m_Transition = i791[2]
  i790.m_Colors = request.d('UnityEngine.UI.ColorBlock', i791[3], i790.m_Colors)
  i790.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i791[4], i790.m_SpriteState)
  i790.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i791[5], i790.m_AnimationTriggers)
  i790.m_Interactable = !!i791[6]
  request.r(i791[7], i791[8], 0, i790, 'm_TargetGraphic')
  return i790
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i793 = data
  i792.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i793[0], i792.m_PersistentCalls)
  return i792
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i795 = data
  var i797 = i795[0]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('UnityEngine.Events.PersistentCall', i797[i + 0]));
  }
  i794.m_Calls = i796
  return i794
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'm_Target')
  i800.m_TargetAssemblyTypeName = i801[2]
  i800.m_MethodName = i801[3]
  i800.m_Mode = i801[4]
  i800.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i801[5], i800.m_Arguments)
  i800.m_CallState = i801[6]
  return i800
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_ObjectArgument')
  i802.m_ObjectArgumentAssemblyTypeName = i803[2]
  i802.m_IntArgument = i803[3]
  i802.m_FloatArgument = i803[4]
  i802.m_StringArgument = i803[5]
  i802.m_BoolArgument = !!i803[6]
  return i802
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i805 = data
  i804.m_Mode = i805[0]
  i804.m_WrapAround = !!i805[1]
  request.r(i805[2], i805[3], 0, i804, 'm_SelectOnUp')
  request.r(i805[4], i805[5], 0, i804, 'm_SelectOnDown')
  request.r(i805[6], i805[7], 0, i804, 'm_SelectOnLeft')
  request.r(i805[8], i805[9], 0, i804, 'm_SelectOnRight')
  return i804
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i807 = data
  i806.m_NormalColor = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.m_HighlightedColor = new pc.Color(i807[4], i807[5], i807[6], i807[7])
  i806.m_PressedColor = new pc.Color(i807[8], i807[9], i807[10], i807[11])
  i806.m_SelectedColor = new pc.Color(i807[12], i807[13], i807[14], i807[15])
  i806.m_DisabledColor = new pc.Color(i807[16], i807[17], i807[18], i807[19])
  i806.m_ColorMultiplier = i807[20]
  i806.m_FadeDuration = i807[21]
  return i806
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_HighlightedSprite')
  request.r(i809[2], i809[3], 0, i808, 'm_PressedSprite')
  request.r(i809[4], i809[5], 0, i808, 'm_SelectedSprite')
  request.r(i809[6], i809[7], 0, i808, 'm_DisabledSprite')
  return i808
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i811 = data
  i810.m_NormalTrigger = i811[0]
  i810.m_HighlightedTrigger = i811[1]
  i810.m_PressedTrigger = i811[2]
  i810.m_SelectedTrigger = i811[3]
  i810.m_DisabledTrigger = i811[4]
  return i810
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'm_FirstSelected')
  i812.m_sendNavigationEvents = !!i813[2]
  i812.m_DragThreshold = i813[3]
  return i812
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i815 = data
  i814.m_HorizontalAxis = i815[0]
  i814.m_VerticalAxis = i815[1]
  i814.m_SubmitButton = i815[2]
  i814.m_CancelButton = i815[3]
  i814.m_InputActionsPerSecond = i815[4]
  i814.m_RepeatDelay = i815[5]
  i814.m_ForceModuleActive = !!i815[6]
  i814.m_SendPointerHoverToParent = !!i815[7]
  return i814
}

Deserializers["PrintCopacity"] = function (request, data, root) {
  var i816 = root || request.c( 'PrintCopacity' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, '_textMeshPro')
  request.r(i817[2], i817[3], 0, i816, 'itemInventory')
  return i816
}

Deserializers["_Project.Code.Core.Buyables.Buyable"] = function (request, data, root) {
  var i818 = root || request.c( '_Project.Code.Core.Buyables.Buyable' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, '_itemInventory')
  i818._price = i819[2]
  request.r(i819[3], i819[4], 0, i818, '_activateOnBought')
  var i821 = i819[5]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 1, i820, '')
  }
  i818._deactivateOnBought = i820
  return i818
}

Deserializers["_Project.Code.Core.Buyables.InventorViewDestroyer"] = function (request, data, root) {
  var i824 = root || request.c( '_Project.Code.Core.Buyables.InventorViewDestroyer' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, '_inventory')
  return i824
}

Deserializers["_Project.Code.Core.Workers.Worker"] = function (request, data, root) {
  var i826 = root || request.c( '_Project.Code.Core.Workers.Worker' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, '_animator')
  request.r(i827[2], i827[3], 0, i826, '_detector')
  var i829 = i827[4]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Harvesting.Field')))
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 1, i828, '')
  }
  i826._fields = i828
  request.r(i827[5], i827[6], 0, i826, '_inventory')
  return i826
}

Deserializers["_Project.Code.Core.PopcornFarm.CornFarm"] = function (request, data, root) {
  var i832 = root || request.c( '_Project.Code.Core.PopcornFarm.CornFarm' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, '_fillImage')
  request.r(i833[2], i833[3], 0, i832, '_resource')
  request.r(i833[4], i833[5], 0, i832, '_final')
  return i832
}

Deserializers["_Project.Code.Selling.Line.Line"] = function (request, data, root) {
  var i834 = root || request.c( '_Project.Code.Selling.Line.Line' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, '_customerPrefab')
  var i837 = i835[2]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.Animations.AnimatorController')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i834._customerAnimatorControllers = i836
  var i839 = i835[3]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 1, i838, '')
  }
  i834._spawnPoints = i838
  return i834
}

Deserializers["_Project.Code.Selling.Seller"] = function (request, data, root) {
  var i842 = root || request.c( '_Project.Code.Selling.Seller' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, '_moneyPrefab')
  request.r(i843[2], i843[3], 0, i842, '_lineMb')
  request.r(i843[4], i843[5], 0, i842, '_productInventory')
  request.r(i843[6], i843[7], 0, i842, '_moneyInventory')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i845 = data
  i844.ambientIntensity = i845[0]
  i844.reflectionIntensity = i845[1]
  i844.ambientMode = i845[2]
  i844.ambientLight = new pc.Color(i845[3], i845[4], i845[5], i845[6])
  i844.ambientSkyColor = new pc.Color(i845[7], i845[8], i845[9], i845[10])
  i844.ambientGroundColor = new pc.Color(i845[11], i845[12], i845[13], i845[14])
  i844.ambientEquatorColor = new pc.Color(i845[15], i845[16], i845[17], i845[18])
  i844.fogColor = new pc.Color(i845[19], i845[20], i845[21], i845[22])
  i844.fogEndDistance = i845[23]
  i844.fogStartDistance = i845[24]
  i844.fogDensity = i845[25]
  i844.fog = !!i845[26]
  request.r(i845[27], i845[28], 0, i844, 'skybox')
  i844.fogMode = i845[29]
  var i847 = i845[30]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i847[i + 0]) );
  }
  i844.lightmaps = i846
  i844.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i845[31], i844.lightProbes)
  i844.lightmapsMode = i845[32]
  i844.mixedBakeMode = i845[33]
  i844.environmentLightingMode = i845[34]
  i844.ambientProbe = new pc.SphericalHarmonicsL2(i845[35])
  i844.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i845[36])
  i844.useReferenceAmbientProbe = !!i845[37]
  request.r(i845[38], i845[39], 0, i844, 'customReflection')
  request.r(i845[40], i845[41], 0, i844, 'defaultReflection')
  i844.defaultReflectionMode = i845[42]
  i844.defaultReflectionResolution = i845[43]
  i844.sunLightObjectId = i845[44]
  i844.pixelLightCount = i845[45]
  i844.defaultReflectionHDR = !!i845[46]
  i844.hasLightDataAsset = !!i845[47]
  i844.hasManualGenerate = !!i845[48]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'lightmapColor')
  request.r(i851[2], i851[3], 0, i850, 'lightmapDirection')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i852 = root || new UnityEngine.LightProbes()
  var i853 = data
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i861 = data
  var i863 = i861[0]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i863[i + 0]));
  }
  i860.ShaderCompilationErrors = i862
  i860.name = i861[1]
  i860.guid = i861[2]
  var i865 = i861[3]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i860.shaderDefinedKeywords = i864
  var i867 = i861[4]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i867[i + 0]) );
  }
  i860.passes = i866
  var i869 = i861[5]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i869[i + 0]) );
  }
  i860.usePasses = i868
  var i871 = i861[6]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i871[i + 0]) );
  }
  i860.defaultParameterValues = i870
  request.r(i861[7], i861[8], 0, i860, 'unityFallbackShader')
  i860.readDepth = !!i861[9]
  i860.isCreatedByShaderGraph = !!i861[10]
  i860.compiled = !!i861[11]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i875 = data
  i874.shaderName = i875[0]
  i874.errorMessage = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i880 = root || new pc.UnityShaderPass()
  var i881 = data
  i880.id = i881[0]
  i880.subShaderIndex = i881[1]
  i880.name = i881[2]
  i880.passType = i881[3]
  i880.grabPassTextureName = i881[4]
  i880.usePass = !!i881[5]
  i880.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[6], i880.zTest)
  i880.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[7], i880.zWrite)
  i880.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[8], i880.culling)
  i880.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i881[9], i880.blending)
  i880.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i881[10], i880.alphaBlending)
  i880.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[11], i880.colorWriteMask)
  i880.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[12], i880.offsetUnits)
  i880.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[13], i880.offsetFactor)
  i880.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[14], i880.stencilRef)
  i880.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[15], i880.stencilReadMask)
  i880.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[16], i880.stencilWriteMask)
  i880.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i881[17], i880.stencilOp)
  i880.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i881[18], i880.stencilOpFront)
  i880.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i881[19], i880.stencilOpBack)
  var i883 = i881[20]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i883[i + 0]) );
  }
  i880.tags = i882
  var i885 = i881[21]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i880.passDefinedKeywords = i884
  var i887 = i881[22]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i887[i + 0]) );
  }
  i880.passDefinedKeywordGroups = i886
  var i889 = i881[23]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i889[i + 0]) );
  }
  i880.variants = i888
  var i891 = i881[24]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i891[i + 0]) );
  }
  i880.excludedVariants = i890
  i880.hasDepthReader = !!i881[25]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i893 = data
  i892.val = i893[0]
  i892.name = i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i895 = data
  i894.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i895[0], i894.src)
  i894.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i895[1], i894.dst)
  i894.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i895[2], i894.op)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i897 = data
  i896.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[0], i896.pass)
  i896.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[1], i896.fail)
  i896.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[2], i896.zFail)
  i896.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i897[3], i896.comp)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i901 = data
  i900.name = i901[0]
  i900.value = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i904.keywords = i906
  i904.hasDiscard = !!i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i911 = data
  i910.passId = i911[0]
  i910.subShaderIndex = i911[1]
  var i913 = i911[2]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i910.keywords = i912
  i910.vertexProgram = i911[3]
  i910.fragmentProgram = i911[4]
  i910.exportedForWebGl2 = !!i911[5]
  i910.readDepth = !!i911[6]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'shader')
  i916.pass = i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i921 = data
  i920.name = i921[0]
  i920.type = i921[1]
  i920.value = new pc.Vec4( i921[2], i921[3], i921[4], i921[5] )
  i920.textureValue = i921[6]
  i920.shaderPropertyFlag = i921[7]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i923 = data
  i922.name = i923[0]
  request.r(i923[1], i923[2], 0, i922, 'texture')
  i922.aabb = i923[3]
  i922.vertices = i923[4]
  i922.triangles = i923[5]
  i922.textureRect = UnityEngine.Rect.MinMaxRect(i923[6], i923[7], i923[8], i923[9])
  i922.packedRect = UnityEngine.Rect.MinMaxRect(i923[10], i923[11], i923[12], i923[13])
  i922.border = new pc.Vec4( i923[14], i923[15], i923[16], i923[17] )
  i922.transparency = i923[18]
  i922.bounds = i923[19]
  i922.pixelsPerUnit = i923[20]
  i922.textureWidth = i923[21]
  i922.textureHeight = i923[22]
  i922.nativeSize = new pc.Vec2( i923[23], i923[24] )
  i922.pivot = new pc.Vec2( i923[25], i923[26] )
  i922.textureRectOffset = new pc.Vec2( i923[27], i923[28] )
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i925 = data
  i924.name = i925[0]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i927 = data
  i926.name = i927[0]
  i926.wrapMode = i927[1]
  i926.isLooping = !!i927[2]
  i926.length = i927[3]
  var i929 = i927[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i929[i + 0]) );
  }
  i926.curves = i928
  var i931 = i927[5]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i931[i + 0]) );
  }
  i926.events = i930
  i926.halfPrecision = !!i927[6]
  i926._frameRate = i927[7]
  i926.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i927[8], i926.localBounds)
  i926.hasMuscleCurves = !!i927[9]
  var i933 = i927[10]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i926.clipMuscleConstant = i932
  i926.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i927[11], i926.clipBindingConstant)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i937 = data
  i936.path = i937[0]
  i936.hash = i937[1]
  i936.componentType = i937[2]
  i936.property = i937[3]
  i936.keys = i937[4]
  var i939 = i937[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i939[i + 0]) );
  }
  i936.objectReferenceKeys = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i943 = data
  i942.time = i943[0]
  request.r(i943[1], i943[2], 0, i942, 'value')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i947 = data
  i946.functionName = i947[0]
  i946.floatParameter = i947[1]
  i946.intParameter = i947[2]
  i946.stringParameter = i947[3]
  request.r(i947[4], i947[5], 0, i946, 'objectReferenceParameter')
  i946.time = i947[6]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i949 = data
  i948.center = new pc.Vec3( i949[0], i949[1], i949[2] )
  i948.extends = new pc.Vec3( i949[3], i949[4], i949[5] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i953 = data
  var i955 = i953[0]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( i955[i + 0] );
  }
  i952.genericBindings = i954
  var i957 = i953[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i952.pptrCurveMapping = i956
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i959 = data
  i958.name = i959[0]
  i958.ascent = i959[1]
  i958.originalLineHeight = i959[2]
  i958.fontSize = i959[3]
  var i961 = i959[4]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i961[i + 0]) );
  }
  i958.characterInfo = i960
  request.r(i959[5], i959[6], 0, i958, 'texture')
  i958.originalFontSize = i959[7]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i965 = data
  i964.index = i965[0]
  i964.advance = i965[1]
  i964.bearing = i965[2]
  i964.glyphWidth = i965[3]
  i964.glyphHeight = i965[4]
  i964.minX = i965[5]
  i964.maxX = i965[6]
  i964.minY = i965[7]
  i964.maxY = i965[8]
  i964.uvBottomLeftX = i965[9]
  i964.uvBottomLeftY = i965[10]
  i964.uvBottomRightX = i965[11]
  i964.uvBottomRightY = i965[12]
  i964.uvTopLeftX = i965[13]
  i964.uvTopLeftY = i965[14]
  i964.uvTopRightX = i965[15]
  i964.uvTopRightY = i965[16]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i967 = data
  i966.name = i967[0]
  var i969 = i967[1]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i969[i + 0]) );
  }
  i966.layers = i968
  var i971 = i967[2]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i971[i + 0]) );
  }
  i966.parameters = i970
  i966.animationClips = i967[3]
  i966.avatarUnsupported = i967[4]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i975 = data
  i974.name = i975[0]
  i974.defaultWeight = i975[1]
  i974.blendingMode = i975[2]
  i974.avatarMask = i975[3]
  i974.syncedLayerIndex = i975[4]
  i974.syncedLayerAffectsTiming = !!i975[5]
  i974.syncedLayers = i975[6]
  i974.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i975[7], i974.stateMachine)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i977 = data
  i976.id = i977[0]
  i976.name = i977[1]
  i976.path = i977[2]
  var i979 = i977[3]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i979[i + 0]) );
  }
  i976.states = i978
  var i981 = i977[4]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i981[i + 0]) );
  }
  i976.machines = i980
  var i983 = i977[5]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i983[i + 0]) );
  }
  i976.entryStateTransitions = i982
  var i985 = i977[6]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i985[i + 0]) );
  }
  i976.exitStateTransitions = i984
  var i987 = i977[7]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i987[i + 0]) );
  }
  i976.anyStateTransitions = i986
  i976.defaultStateId = i977[8]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i991 = data
  i990.id = i991[0]
  i990.name = i991[1]
  i990.cycleOffset = i991[2]
  i990.cycleOffsetParameter = i991[3]
  i990.cycleOffsetParameterActive = !!i991[4]
  i990.mirror = !!i991[5]
  i990.mirrorParameter = i991[6]
  i990.mirrorParameterActive = !!i991[7]
  i990.motionId = i991[8]
  i990.nameHash = i991[9]
  i990.fullPathHash = i991[10]
  i990.speed = i991[11]
  i990.speedParameter = i991[12]
  i990.speedParameterActive = !!i991[13]
  i990.tag = i991[14]
  i990.tagHash = i991[15]
  i990.writeDefaultValues = !!i991[16]
  var i993 = i991[17]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.behaviours = i992
  var i995 = i991[18]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i995[i + 0]) );
  }
  i990.transitions = i994
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1001 = data
  i1000.fullPath = i1001[0]
  i1000.canTransitionToSelf = !!i1001[1]
  i1000.duration = i1001[2]
  i1000.exitTime = i1001[3]
  i1000.hasExitTime = !!i1001[4]
  i1000.hasFixedDuration = !!i1001[5]
  i1000.interruptionSource = i1001[6]
  i1000.offset = i1001[7]
  i1000.orderedInterruption = !!i1001[8]
  i1000.destinationStateId = i1001[9]
  i1000.isExit = !!i1001[10]
  i1000.mute = !!i1001[11]
  i1000.solo = !!i1001[12]
  var i1003 = i1001[13]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1003[i + 0]) );
  }
  i1000.conditions = i1002
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1009 = data
  i1008.destinationStateId = i1009[0]
  i1008.isExit = !!i1009[1]
  i1008.mute = !!i1009[2]
  i1008.solo = !!i1009[3]
  var i1011 = i1009[4]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1011[i + 0]) );
  }
  i1008.conditions = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1015 = data
  i1014.mode = i1015[0]
  i1014.parameter = i1015[1]
  i1014.threshold = i1015[2]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1019 = data
  i1018.defaultBool = !!i1019[0]
  i1018.defaultFloat = i1019[1]
  i1018.defaultInt = i1019[2]
  i1018.name = i1019[3]
  i1018.nameHash = i1019[4]
  i1018.type = i1019[5]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.bytes64 = i1021[1]
  i1020.data = i1021[2]
  return i1020
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1023 = data
  i1022.hashCode = i1023[0]
  request.r(i1023[1], i1023[2], 0, i1022, 'material')
  i1022.materialHashCode = i1023[3]
  request.r(i1023[4], i1023[5], 0, i1022, 'atlas')
  i1022.normalStyle = i1023[6]
  i1022.normalSpacingOffset = i1023[7]
  i1022.boldStyle = i1023[8]
  i1022.boldSpacing = i1023[9]
  i1022.italicStyle = i1023[10]
  i1022.tabSize = i1023[11]
  i1022.m_Version = i1023[12]
  i1022.m_SourceFontFileGUID = i1023[13]
  request.r(i1023[14], i1023[15], 0, i1022, 'm_SourceFontFile_EditorRef')
  request.r(i1023[16], i1023[17], 0, i1022, 'm_SourceFontFile')
  i1022.m_AtlasPopulationMode = i1023[18]
  i1022.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1023[19], i1022.m_FaceInfo)
  var i1025 = i1023[20]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('UnityEngine.TextCore.Glyph', i1025[i + 0]));
  }
  i1022.m_GlyphTable = i1024
  var i1027 = i1023[21]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.TMP_Character', i1027[i + 0]));
  }
  i1022.m_CharacterTable = i1026
  var i1029 = i1023[22]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1022.m_AtlasTextures = i1028
  i1022.m_AtlasTextureIndex = i1023[23]
  i1022.m_IsMultiAtlasTexturesEnabled = !!i1023[24]
  i1022.m_ClearDynamicDataOnBuild = !!i1023[25]
  var i1031 = i1023[26]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('UnityEngine.TextCore.GlyphRect', i1031[i + 0]));
  }
  i1022.m_UsedGlyphRects = i1030
  var i1033 = i1023[27]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('UnityEngine.TextCore.GlyphRect', i1033[i + 0]));
  }
  i1022.m_FreeGlyphRects = i1032
  i1022.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1023[28], i1022.m_fontInfo)
  i1022.m_AtlasWidth = i1023[29]
  i1022.m_AtlasHeight = i1023[30]
  i1022.m_AtlasPadding = i1023[31]
  i1022.m_AtlasRenderMode = i1023[32]
  var i1035 = i1023[33]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('TMPro.TMP_Glyph', i1035[i + 0]));
  }
  i1022.m_glyphInfoList = i1034
  i1022.m_KerningTable = request.d('TMPro.KerningTable', i1023[34], i1022.m_KerningTable)
  i1022.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1023[35], i1022.m_FontFeatureTable)
  var i1037 = i1023[36]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1022.fallbackFontAssets = i1036
  var i1039 = i1023[37]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 1, i1038, '')
  }
  i1022.m_FallbackFontAssetTable = i1038
  i1022.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1023[38], i1022.m_CreationSettings)
  var i1041 = i1023[39]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('TMPro.TMP_FontWeightPair', i1041[i + 0]) );
  }
  i1022.m_FontWeightTable = i1040
  var i1043 = i1023[40]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('TMPro.TMP_FontWeightPair', i1043[i + 0]) );
  }
  i1022.fontWeights = i1042
  return i1022
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1045 = data
  i1044.m_FaceIndex = i1045[0]
  i1044.m_FamilyName = i1045[1]
  i1044.m_StyleName = i1045[2]
  i1044.m_PointSize = i1045[3]
  i1044.m_Scale = i1045[4]
  i1044.m_UnitsPerEM = i1045[5]
  i1044.m_LineHeight = i1045[6]
  i1044.m_AscentLine = i1045[7]
  i1044.m_CapLine = i1045[8]
  i1044.m_MeanLine = i1045[9]
  i1044.m_Baseline = i1045[10]
  i1044.m_DescentLine = i1045[11]
  i1044.m_SuperscriptOffset = i1045[12]
  i1044.m_SuperscriptSize = i1045[13]
  i1044.m_SubscriptOffset = i1045[14]
  i1044.m_SubscriptSize = i1045[15]
  i1044.m_UnderlineOffset = i1045[16]
  i1044.m_UnderlineThickness = i1045[17]
  i1044.m_StrikethroughOffset = i1045[18]
  i1044.m_StrikethroughThickness = i1045[19]
  i1044.m_TabWidth = i1045[20]
  return i1044
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1049 = data
  i1048.m_Index = i1049[0]
  i1048.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1049[1], i1048.m_Metrics)
  i1048.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1049[2], i1048.m_GlyphRect)
  i1048.m_Scale = i1049[3]
  i1048.m_AtlasIndex = i1049[4]
  i1048.m_ClassDefinitionType = i1049[5]
  return i1048
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1051 = data
  i1050.m_Width = i1051[0]
  i1050.m_Height = i1051[1]
  i1050.m_HorizontalBearingX = i1051[2]
  i1050.m_HorizontalBearingY = i1051[3]
  i1050.m_HorizontalAdvance = i1051[4]
  return i1050
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1053 = data
  i1052.m_X = i1053[0]
  i1052.m_Y = i1053[1]
  i1052.m_Width = i1053[2]
  i1052.m_Height = i1053[3]
  return i1052
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_Character' )
  var i1057 = data
  i1056.m_ElementType = i1057[0]
  i1056.m_Unicode = i1057[1]
  i1056.m_GlyphIndex = i1057[2]
  i1056.m_Scale = i1057[3]
  return i1056
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1063 = data
  i1062.Name = i1063[0]
  i1062.PointSize = i1063[1]
  i1062.Scale = i1063[2]
  i1062.CharacterCount = i1063[3]
  i1062.LineHeight = i1063[4]
  i1062.Baseline = i1063[5]
  i1062.Ascender = i1063[6]
  i1062.CapHeight = i1063[7]
  i1062.Descender = i1063[8]
  i1062.CenterLine = i1063[9]
  i1062.SuperscriptOffset = i1063[10]
  i1062.SubscriptOffset = i1063[11]
  i1062.SubSize = i1063[12]
  i1062.Underline = i1063[13]
  i1062.UnderlineThickness = i1063[14]
  i1062.strikethrough = i1063[15]
  i1062.strikethroughThickness = i1063[16]
  i1062.TabWidth = i1063[17]
  i1062.Padding = i1063[18]
  i1062.AtlasWidth = i1063[19]
  i1062.AtlasHeight = i1063[20]
  return i1062
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1067 = data
  i1066.id = i1067[0]
  i1066.x = i1067[1]
  i1066.y = i1067[2]
  i1066.width = i1067[3]
  i1066.height = i1067[4]
  i1066.xOffset = i1067[5]
  i1066.yOffset = i1067[6]
  i1066.xAdvance = i1067[7]
  i1066.scale = i1067[8]
  return i1066
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.KerningTable' )
  var i1069 = data
  var i1071 = i1069[0]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.add(request.d('TMPro.KerningPair', i1071[i + 0]));
  }
  i1068.kerningPairs = i1070
  return i1068
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.KerningPair' )
  var i1075 = data
  i1074.xOffset = i1075[0]
  i1074.m_FirstGlyph = i1075[1]
  i1074.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1075[2], i1074.m_FirstGlyphAdjustments)
  i1074.m_SecondGlyph = i1075[3]
  i1074.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1075[4], i1074.m_SecondGlyphAdjustments)
  i1074.m_IgnoreSpacingAdjustments = !!i1075[5]
  return i1074
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1077 = data
  var i1079 = i1077[0]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1079[i + 0]));
  }
  i1076.m_GlyphPairAdjustmentRecords = i1078
  return i1076
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1083 = data
  i1082.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1083[0], i1082.m_FirstAdjustmentRecord)
  i1082.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1083[1], i1082.m_SecondAdjustmentRecord)
  i1082.m_FeatureLookupFlags = i1083[2]
  return i1082
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1085 = data
  i1084.m_GlyphIndex = i1085[0]
  i1084.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1085[1], i1084.m_GlyphValueRecord)
  return i1084
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1087 = data
  i1086.m_XPlacement = i1087[0]
  i1086.m_YPlacement = i1087[1]
  i1086.m_XAdvance = i1087[2]
  i1086.m_YAdvance = i1087[3]
  return i1086
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1091 = data
  i1090.sourceFontFileName = i1091[0]
  i1090.sourceFontFileGUID = i1091[1]
  i1090.pointSizeSamplingMode = i1091[2]
  i1090.pointSize = i1091[3]
  i1090.padding = i1091[4]
  i1090.packingMode = i1091[5]
  i1090.atlasWidth = i1091[6]
  i1090.atlasHeight = i1091[7]
  i1090.characterSetSelectionMode = i1091[8]
  i1090.characterSequence = i1091[9]
  i1090.referencedFontAssetGUID = i1091[10]
  i1090.referencedTextAssetGUID = i1091[11]
  i1090.fontStyle = i1091[12]
  i1090.fontStyleModifier = i1091[13]
  i1090.renderMode = i1091[14]
  i1090.includeFontFeatures = !!i1091[15]
  return i1090
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'regularTypeface')
  request.r(i1095[2], i1095[3], 0, i1094, 'italicTypeface')
  return i1094
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig"] = function (request, data, root) {
  var i1096 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig' )
  var i1097 = data
  var i1099 = i1097[0]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Character.DirectedAnimation')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('_Project.Code.Core.Character.DirectedAnimation', i1099[i + 0]));
  }
  i1096.Animations = i1098
  return i1096
}

Deserializers["_Project.Code.Core.Character.DirectedAnimation"] = function (request, data, root) {
  var i1102 = root || request.c( '_Project.Code.Core.Character.DirectedAnimation' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'Clip')
  i1102.Direction = new pc.Vec2( i1103[2], i1103[3] )
  i1102.Flip = !!i1103[4]
  return i1102
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1104 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1105 = data
  i1104.useSafeMode = !!i1105[0]
  i1104.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1105[1], i1104.safeModeOptions)
  i1104.timeScale = i1105[2]
  i1104.unscaledTimeScale = i1105[3]
  i1104.useSmoothDeltaTime = !!i1105[4]
  i1104.maxSmoothUnscaledTime = i1105[5]
  i1104.rewindCallbackMode = i1105[6]
  i1104.showUnityEditorReport = !!i1105[7]
  i1104.logBehaviour = i1105[8]
  i1104.drawGizmos = !!i1105[9]
  i1104.defaultRecyclable = !!i1105[10]
  i1104.defaultAutoPlay = i1105[11]
  i1104.defaultUpdateType = i1105[12]
  i1104.defaultTimeScaleIndependent = !!i1105[13]
  i1104.defaultEaseType = i1105[14]
  i1104.defaultEaseOvershootOrAmplitude = i1105[15]
  i1104.defaultEasePeriod = i1105[16]
  i1104.defaultAutoKill = !!i1105[17]
  i1104.defaultLoopType = i1105[18]
  i1104.debugMode = !!i1105[19]
  i1104.debugStoreTargetId = !!i1105[20]
  i1104.showPreviewPanel = !!i1105[21]
  i1104.storeSettingsLocation = i1105[22]
  i1104.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1105[23], i1104.modules)
  i1104.createASMDEF = !!i1105[24]
  i1104.showPlayingTweens = !!i1105[25]
  i1104.showPausedTweens = !!i1105[26]
  return i1104
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1106 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1107 = data
  i1106.logBehaviour = i1107[0]
  i1106.nestedTweenFailureBehaviour = i1107[1]
  return i1106
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1108 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1109 = data
  i1108.showPanel = !!i1109[0]
  i1108.audioEnabled = !!i1109[1]
  i1108.physicsEnabled = !!i1109[2]
  i1108.physics2DEnabled = !!i1109[3]
  i1108.spriteEnabled = !!i1109[4]
  i1108.uiEnabled = !!i1109[5]
  i1108.textMeshProEnabled = !!i1109[6]
  i1108.tk2DEnabled = !!i1109[7]
  i1108.deAudioEnabled = !!i1109[8]
  i1108.deUnityExtendedEnabled = !!i1109[9]
  i1108.epoOutlineEnabled = !!i1109[10]
  return i1108
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.TMP_Settings' )
  var i1111 = data
  i1110.m_enableWordWrapping = !!i1111[0]
  i1110.m_enableKerning = !!i1111[1]
  i1110.m_enableExtraPadding = !!i1111[2]
  i1110.m_enableTintAllSprites = !!i1111[3]
  i1110.m_enableParseEscapeCharacters = !!i1111[4]
  i1110.m_EnableRaycastTarget = !!i1111[5]
  i1110.m_GetFontFeaturesAtRuntime = !!i1111[6]
  i1110.m_missingGlyphCharacter = i1111[7]
  i1110.m_warningsDisabled = !!i1111[8]
  request.r(i1111[9], i1111[10], 0, i1110, 'm_defaultFontAsset')
  i1110.m_defaultFontAssetPath = i1111[11]
  i1110.m_defaultFontSize = i1111[12]
  i1110.m_defaultAutoSizeMinRatio = i1111[13]
  i1110.m_defaultAutoSizeMaxRatio = i1111[14]
  i1110.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1111[15], i1111[16] )
  i1110.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1111[17], i1111[18] )
  i1110.m_autoSizeTextContainer = !!i1111[19]
  i1110.m_IsTextObjectScaleStatic = !!i1111[20]
  var i1113 = i1111[21]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 1, i1112, '')
  }
  i1110.m_fallbackFontAssets = i1112
  i1110.m_matchMaterialPreset = !!i1111[22]
  request.r(i1111[23], i1111[24], 0, i1110, 'm_defaultSpriteAsset')
  i1110.m_defaultSpriteAssetPath = i1111[25]
  i1110.m_enableEmojiSupport = !!i1111[26]
  i1110.m_MissingCharacterSpriteUnicode = i1111[27]
  i1110.m_defaultColorGradientPresetsPath = i1111[28]
  request.r(i1111[29], i1111[30], 0, i1110, 'm_defaultStyleSheet')
  i1110.m_StyleSheetsResourcePath = i1111[31]
  request.r(i1111[32], i1111[33], 0, i1110, 'm_leadingCharacters')
  request.r(i1111[34], i1111[35], 0, i1110, 'm_followingCharacters')
  i1110.m_UseModernHangulLineBreakingRules = !!i1111[36]
  return i1110
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1115 = data
  i1114.hashCode = i1115[0]
  request.r(i1115[1], i1115[2], 0, i1114, 'material')
  i1114.materialHashCode = i1115[3]
  request.r(i1115[4], i1115[5], 0, i1114, 'spriteSheet')
  var i1117 = i1115[6]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('TMPro.TMP_Sprite', i1117[i + 0]));
  }
  i1114.spriteInfoList = i1116
  var i1119 = i1115[7]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1114.fallbackSpriteAssets = i1118
  i1114.m_Version = i1115[8]
  i1114.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1115[9], i1114.m_FaceInfo)
  var i1121 = i1115[10]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('TMPro.TMP_SpriteCharacter', i1121[i + 0]));
  }
  i1114.m_SpriteCharacterTable = i1120
  var i1123 = i1115[11]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.TMP_SpriteGlyph', i1123[i + 0]));
  }
  i1114.m_SpriteGlyphTable = i1122
  return i1114
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.hashCode = i1127[1]
  i1126.unicode = i1127[2]
  i1126.pivot = new pc.Vec2( i1127[3], i1127[4] )
  request.r(i1127[5], i1127[6], 0, i1126, 'sprite')
  i1126.id = i1127[7]
  i1126.x = i1127[8]
  i1126.y = i1127[9]
  i1126.width = i1127[10]
  i1126.height = i1127[11]
  i1126.xOffset = i1127[12]
  i1126.yOffset = i1127[13]
  i1126.xAdvance = i1127[14]
  i1126.scale = i1127[15]
  return i1126
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1132 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1133 = data
  i1132.m_Name = i1133[0]
  i1132.m_HashCode = i1133[1]
  i1132.m_ElementType = i1133[2]
  i1132.m_Unicode = i1133[3]
  i1132.m_GlyphIndex = i1133[4]
  i1132.m_Scale = i1133[5]
  return i1132
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'sprite')
  i1136.m_Index = i1137[2]
  i1136.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1137[3], i1136.m_Metrics)
  i1136.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1137[4], i1136.m_GlyphRect)
  i1136.m_Scale = i1137[5]
  i1136.m_AtlasIndex = i1137[6]
  i1136.m_ClassDefinitionType = i1137[7]
  return i1136
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('TMPro.TMP_Style', i1141[i + 0]));
  }
  i1138.m_StyleList = i1140
  return i1138
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_Style' )
  var i1145 = data
  i1144.m_Name = i1145[0]
  i1144.m_HashCode = i1145[1]
  i1144.m_OpeningDefinition = i1145[2]
  i1144.m_ClosingDefinition = i1145[3]
  i1144.m_OpeningTagArray = i1145[4]
  i1144.m_ClosingTagArray = i1145[5]
  i1144.m_OpeningTagUnicodeArray = i1145[6]
  i1144.m_ClosingTagUnicodeArray = i1145[7]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1149[i + 0]) );
  }
  i1146.files = i1148
  i1146.componentToPrefabIds = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1153 = data
  i1152.path = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'unityObject')
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1157[i + 0]) );
  }
  i1154.scriptsExecutionOrder = i1156
  var i1159 = i1155[1]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1159[i + 0]) );
  }
  i1154.sortingLayers = i1158
  var i1161 = i1155[2]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1161[i + 0]) );
  }
  i1154.cullingLayers = i1160
  i1154.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1155[3], i1154.timeSettings)
  i1154.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1155[4], i1154.physicsSettings)
  i1154.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1155[5], i1154.physics2DSettings)
  i1154.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1155[6], i1154.qualitySettings)
  i1154.enableRealtimeShadows = !!i1155[7]
  i1154.enableAutoInstancing = !!i1155[8]
  i1154.enableDynamicBatching = !!i1155[9]
  i1154.lightmapEncodingQuality = i1155[10]
  i1154.desiredColorSpace = i1155[11]
  var i1163 = i1155[12]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( i1163[i + 0] );
  }
  i1154.allTags = i1162
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.value = i1167[1]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1171 = data
  i1170.id = i1171[0]
  i1170.name = i1171[1]
  i1170.value = i1171[2]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1175 = data
  i1174.id = i1175[0]
  i1174.name = i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1177 = data
  i1176.fixedDeltaTime = i1177[0]
  i1176.maximumDeltaTime = i1177[1]
  i1176.timeScale = i1177[2]
  i1176.maximumParticleTimestep = i1177[3]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1179 = data
  i1178.gravity = new pc.Vec3( i1179[0], i1179[1], i1179[2] )
  i1178.defaultSolverIterations = i1179[3]
  i1178.bounceThreshold = i1179[4]
  i1178.autoSyncTransforms = !!i1179[5]
  i1178.autoSimulation = !!i1179[6]
  var i1181 = i1179[7]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1181[i + 0]) );
  }
  i1178.collisionMatrix = i1180
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1185 = data
  i1184.enabled = !!i1185[0]
  i1184.layerId = i1185[1]
  i1184.otherLayerId = i1185[2]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'material')
  i1186.gravity = new pc.Vec2( i1187[2], i1187[3] )
  i1186.positionIterations = i1187[4]
  i1186.velocityIterations = i1187[5]
  i1186.velocityThreshold = i1187[6]
  i1186.maxLinearCorrection = i1187[7]
  i1186.maxAngularCorrection = i1187[8]
  i1186.maxTranslationSpeed = i1187[9]
  i1186.maxRotationSpeed = i1187[10]
  i1186.baumgarteScale = i1187[11]
  i1186.baumgarteTOIScale = i1187[12]
  i1186.timeToSleep = i1187[13]
  i1186.linearSleepTolerance = i1187[14]
  i1186.angularSleepTolerance = i1187[15]
  i1186.defaultContactOffset = i1187[16]
  i1186.autoSimulation = !!i1187[17]
  i1186.queriesHitTriggers = !!i1187[18]
  i1186.queriesStartInColliders = !!i1187[19]
  i1186.callbacksOnDisable = !!i1187[20]
  i1186.reuseCollisionCallbacks = !!i1187[21]
  i1186.autoSyncTransforms = !!i1187[22]
  var i1189 = i1187[23]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1189[i + 0]) );
  }
  i1186.collisionMatrix = i1188
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1193 = data
  i1192.enabled = !!i1193[0]
  i1192.layerId = i1193[1]
  i1192.otherLayerId = i1193[2]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1195 = data
  var i1197 = i1195[0]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1197[i + 0]) );
  }
  i1194.qualityLevels = i1196
  var i1199 = i1195[1]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( i1199[i + 0] );
  }
  i1194.names = i1198
  i1194.shadows = i1195[2]
  i1194.anisotropicFiltering = i1195[3]
  i1194.antiAliasing = i1195[4]
  i1194.lodBias = i1195[5]
  i1194.shadowCascades = i1195[6]
  i1194.shadowDistance = i1195[7]
  i1194.shadowmaskMode = i1195[8]
  i1194.shadowProjection = i1195[9]
  i1194.shadowResolution = i1195[10]
  i1194.softParticles = !!i1195[11]
  i1194.softVegetation = !!i1195[12]
  i1194.activeColorSpace = i1195[13]
  i1194.desiredColorSpace = i1195[14]
  i1194.masterTextureLimit = i1195[15]
  i1194.maxQueuedFrames = i1195[16]
  i1194.particleRaycastBudget = i1195[17]
  i1194.pixelLightCount = i1195[18]
  i1194.realtimeReflectionProbes = !!i1195[19]
  i1194.shadowCascade2Split = i1195[20]
  i1194.shadowCascade4Split = new pc.Vec3( i1195[21], i1195[22], i1195[23] )
  i1194.streamingMipmapsActive = !!i1195[24]
  i1194.vSyncCount = i1195[25]
  i1194.asyncUploadBufferSize = i1195[26]
  i1194.asyncUploadTimeSlice = i1195[27]
  i1194.billboardsFaceCameraPosition = !!i1195[28]
  i1194.shadowNearPlaneOffset = i1195[29]
  i1194.streamingMipmapsMemoryBudget = i1195[30]
  i1194.maximumLODLevel = i1195[31]
  i1194.streamingMipmapsAddAllCameras = !!i1195[32]
  i1194.streamingMipmapsMaxLevelReduction = i1195[33]
  i1194.streamingMipmapsRenderersPerFrame = i1195[34]
  i1194.resolutionScalingFixedDPIFactor = i1195[35]
  i1194.streamingMipmapsMaxFileIORequests = i1195[36]
  i1194.currentQualityLevel = i1195[37]
  return i1194
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1203 = data
  i1202.xPlacement = i1203[0]
  i1202.yPlacement = i1203[1]
  i1202.xAdvance = i1203[2]
  i1202.yAdvance = i1203[3]
  return i1202
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[39],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[13],"93":[13],"94":[13],"95":[13],"96":[13],"97":[13],"98":[13],"99":[13],"100":[13],"101":[13],"102":[13],"103":[13],"104":[13],"105":[39],"106":[107],"108":[109],"110":[109],"33":[24],"111":[47],"45":[47],"31":[2],"21":[1],"112":[113],"114":[2],"115":[113],"116":[24],"117":[24],"35":[33],"29":[25,24],"118":[24],"34":[33],"119":[24],"120":[24],"121":[24],"122":[24],"123":[24],"124":[24],"125":[24],"54":[24],"126":[24],"30":[25,24],"127":[24],"128":[24],"129":[24],"130":[24],"131":[25,24],"132":[24],"133":[59],"134":[59],"60":[59],"135":[59],"136":[39],"137":[39],"138":[139],"140":[39],"141":[24],"142":[107,24],"27":[24,25],"143":[24],"144":[25,24],"145":[107],"146":[25,24],"147":[24],"148":[113]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","_Project.Code.Core.Character.CharacterInstaller","_Project.Code.Core.Character.Mover","_Project.Code.Core.Collision.OverlapCollisionDetector","_Project.Code.Core.Character.CharacterAnimator","_Project.Code.Core.Items.Inventory.ItemInventory","UnityEngine.Rigidbody2D","UnityEngine.AudioSource","UnityEngine.CircleCollider2D","_Project.Code.Core.Character.TopDownAnimator","_Project.Code.Core.Character.TopDownAnimationConfig","UnityEngine.Animator","UnityEngine.AudioClip","UnityEditor.Animations.AnimatorController","_Project.Code.Core.Character.SortingGroupAnimator","MusicItemAdded","_Project.Code.Core.Items.Inventory.ColumnInventoryView","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.UI.RawImage","_Project.Code.Selling.Customer","_Project.Code.Selling.Line.BubbleView","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","_Project.Code.Core.Items.Item","_Project.Code.Core.Harvesting.Field","_Project.Code.Core.Items.InventoryInitializer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","_Project.Code.Camera.Follower","_Project.Code.Camera.CameraInBordersZoom","_Project.Code.Entry.EntryPoint","VariableJoystick","_Project.Code.Services.CoroutineRunner.CoroutineRunner","_Project.Code.Core.Buyables.EndScreenShower","_Project.Code.Core.Buyables.Buyable","UnityEngine.GameObject","_Project.Code.Tutorial.Tutorial","UnityEngine.EdgeCollider2D","ArrowAnimator","UnityEngine.UI.Mask","_Project.Code.Core.Buyables.CoinsViewUpdater","_Project.Code.Core.Animations.BreathAnimation","CTA","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PrintCopacity","_Project.Code.Core.Buyables.InventorViewDestroyer","_Project.Code.Core.Workers.Worker","_Project.Code.Core.PopcornFarm.CornFarm","_Project.Code.Selling.Line.Line","_Project.Code.Selling.Seller","UnityEngine.Font","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","_Project.Code.Entry.Entry","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "SpongeBob-Playable";

Deserializers.lunaInitializationTime = "04/21/2025 08:42:21";

Deserializers.lunaDaysRunning = "0.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1736";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4375";

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

Deserializers.buildID = "aa2d4318-fd61-4501-909d-0cafebf4559a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

