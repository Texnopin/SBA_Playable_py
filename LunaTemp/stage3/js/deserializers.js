var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7826 = root || request.c( 'UnityEngine.JointSpring' )
  var i7827 = data
  i7826.spring = i7827[0]
  i7826.damper = i7827[1]
  i7826.targetPosition = i7827[2]
  return i7826
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7828 = root || request.c( 'UnityEngine.JointMotor' )
  var i7829 = data
  i7828.m_TargetVelocity = i7829[0]
  i7828.m_Force = i7829[1]
  i7828.m_FreeSpin = i7829[2]
  return i7828
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7830 = root || request.c( 'UnityEngine.JointLimits' )
  var i7831 = data
  i7830.m_Min = i7831[0]
  i7830.m_Max = i7831[1]
  i7830.m_Bounciness = i7831[2]
  i7830.m_BounceMinVelocity = i7831[3]
  i7830.m_ContactDistance = i7831[4]
  i7830.minBounce = i7831[5]
  i7830.maxBounce = i7831[6]
  return i7830
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7832 = root || request.c( 'UnityEngine.JointDrive' )
  var i7833 = data
  i7832.m_PositionSpring = i7833[0]
  i7832.m_PositionDamper = i7833[1]
  i7832.m_MaximumForce = i7833[2]
  i7832.m_UseAcceleration = i7833[3]
  return i7832
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7834 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7835 = data
  i7834.m_Spring = i7835[0]
  i7834.m_Damper = i7835[1]
  return i7834
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7836 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7837 = data
  i7836.m_Limit = i7837[0]
  i7836.m_Bounciness = i7837[1]
  i7836.m_ContactDistance = i7837[2]
  return i7836
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7838 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7839 = data
  i7838.m_ExtremumSlip = i7839[0]
  i7838.m_ExtremumValue = i7839[1]
  i7838.m_AsymptoteSlip = i7839[2]
  i7838.m_AsymptoteValue = i7839[3]
  i7838.m_Stiffness = i7839[4]
  return i7838
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7840 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7841 = data
  i7840.m_LowerAngle = i7841[0]
  i7840.m_UpperAngle = i7841[1]
  return i7840
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7842 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7843 = data
  i7842.m_MotorSpeed = i7843[0]
  i7842.m_MaximumMotorTorque = i7843[1]
  return i7842
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7844 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7845 = data
  i7844.m_DampingRatio = i7845[0]
  i7844.m_Frequency = i7845[1]
  i7844.m_Angle = i7845[2]
  return i7844
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7846 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7847 = data
  i7846.m_LowerTranslation = i7847[0]
  i7846.m_UpperTranslation = i7847[1]
  return i7846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7849 = data
  i7848.position = new pc.Vec3( i7849[0], i7849[1], i7849[2] )
  i7848.scale = new pc.Vec3( i7849[3], i7849[4], i7849[5] )
  i7848.rotation = new pc.Quat(i7849[6], i7849[7], i7849[8], i7849[9])
  return i7848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i7850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i7851 = data
  i7850.enabled = !!i7851[0]
  i7850.sortingLayerIndex = i7851[1]
  i7850.sortingOrder = i7851[2]
  i7850.sortingLayerName = i7851[3]
  return i7850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7853 = data
  i7852.enabled = !!i7853[0]
  request.r(i7853[1], i7853[2], 0, i7852, 'sharedMaterial')
  var i7855 = i7853[3]
  var i7854 = []
  for(var i = 0; i < i7855.length; i += 2) {
  request.r(i7855[i + 0], i7855[i + 1], 2, i7854, '')
  }
  i7852.sharedMaterials = i7854
  i7852.receiveShadows = !!i7853[4]
  i7852.shadowCastingMode = i7853[5]
  i7852.sortingLayerID = i7853[6]
  i7852.sortingOrder = i7853[7]
  i7852.lightmapIndex = i7853[8]
  i7852.lightmapSceneIndex = i7853[9]
  i7852.lightmapScaleOffset = new pc.Vec4( i7853[10], i7853[11], i7853[12], i7853[13] )
  i7852.lightProbeUsage = i7853[14]
  i7852.reflectionProbeUsage = i7853[15]
  i7852.color = new pc.Color(i7853[16], i7853[17], i7853[18], i7853[19])
  request.r(i7853[20], i7853[21], 0, i7852, 'sprite')
  i7852.flipX = !!i7853[22]
  i7852.flipY = !!i7853[23]
  i7852.drawMode = i7853[24]
  i7852.size = new pc.Vec2( i7853[25], i7853[26] )
  i7852.tileMode = i7853[27]
  i7852.adaptiveModeThreshold = i7853[28]
  i7852.maskInteraction = i7853[29]
  i7852.spriteSortPoint = i7853[30]
  return i7852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7859 = data
  i7858.name = i7859[0]
  i7858.tagId = i7859[1]
  i7858.enabled = !!i7859[2]
  i7858.isStatic = !!i7859[3]
  i7858.layer = i7859[4]
  return i7858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7860 = root || new pc.UnityMaterial()
  var i7861 = data
  i7860.name = i7861[0]
  request.r(i7861[1], i7861[2], 0, i7860, 'shader')
  i7860.renderQueue = i7861[3]
  i7860.enableInstancing = !!i7861[4]
  var i7863 = i7861[5]
  var i7862 = []
  for(var i = 0; i < i7863.length; i += 1) {
    i7862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7863[i + 0]) );
  }
  i7860.floatParameters = i7862
  var i7865 = i7861[6]
  var i7864 = []
  for(var i = 0; i < i7865.length; i += 1) {
    i7864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7865[i + 0]) );
  }
  i7860.colorParameters = i7864
  var i7867 = i7861[7]
  var i7866 = []
  for(var i = 0; i < i7867.length; i += 1) {
    i7866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7867[i + 0]) );
  }
  i7860.vectorParameters = i7866
  var i7869 = i7861[8]
  var i7868 = []
  for(var i = 0; i < i7869.length; i += 1) {
    i7868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7869[i + 0]) );
  }
  i7860.textureParameters = i7868
  var i7871 = i7861[9]
  var i7870 = []
  for(var i = 0; i < i7871.length; i += 1) {
    i7870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7871[i + 0]) );
  }
  i7860.materialFlags = i7870
  return i7860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7875 = data
  i7874.name = i7875[0]
  i7874.value = i7875[1]
  return i7874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7879 = data
  i7878.name = i7879[0]
  i7878.value = new pc.Color(i7879[1], i7879[2], i7879[3], i7879[4])
  return i7878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7883 = data
  i7882.name = i7883[0]
  i7882.value = new pc.Vec4( i7883[1], i7883[2], i7883[3], i7883[4] )
  return i7882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7887 = data
  i7886.name = i7887[0]
  request.r(i7887[1], i7887[2], 0, i7886, 'value')
  return i7886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7891 = data
  i7890.name = i7891[0]
  i7890.enabled = !!i7891[1]
  return i7890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7893 = data
  i7892.name = i7893[0]
  i7892.width = i7893[1]
  i7892.height = i7893[2]
  i7892.mipmapCount = i7893[3]
  i7892.anisoLevel = i7893[4]
  i7892.filterMode = i7893[5]
  i7892.hdr = !!i7893[6]
  i7892.format = i7893[7]
  i7892.wrapMode = i7893[8]
  i7892.alphaIsTransparency = !!i7893[9]
  i7892.alphaSource = i7893[10]
  i7892.graphicsFormat = i7893[11]
  i7892.sRGBTexture = !!i7893[12]
  i7892.desiredColorSpace = i7893[13]
  i7892.wrapU = i7893[14]
  i7892.wrapV = i7893[15]
  return i7892
}

Deserializers["_Project.Code.Core.Character.CharacterInstaller"] = function (request, data, root) {
  var i7894 = root || request.c( '_Project.Code.Core.Character.CharacterInstaller' )
  var i7895 = data
  request.r(i7895[0], i7895[1], 0, i7894, '_mover')
  request.r(i7895[2], i7895[3], 0, i7894, '_castingDetector')
  request.r(i7895[4], i7895[5], 0, i7894, '_animator')
  var i7897 = i7895[6]
  var i7896 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Inventory.ItemInventory')))
  for(var i = 0; i < i7897.length; i += 2) {
  request.r(i7897[i + 0], i7897[i + 1], 1, i7896, '')
  }
  i7894._storages = i7896
  return i7894
}

Deserializers["_Project.Code.Core.Collision.OverlapCollisionDetector"] = function (request, data, root) {
  var i7900 = root || request.c( '_Project.Code.Core.Collision.OverlapCollisionDetector' )
  var i7901 = data
  i7900.detectionRadius = i7901[0]
  i7900.collisionMask = UnityEngine.LayerMask.FromIntegerValue( i7901[1] )
  return i7900
}

Deserializers["_Project.Code.Core.Character.Mover"] = function (request, data, root) {
  var i7902 = root || request.c( '_Project.Code.Core.Character.Mover' )
  var i7903 = data
  i7902._speed = i7903[0]
  i7902.isMoving = !!i7903[1]
  request.r(i7903[2], i7903[3], 0, i7902, '_rigidbody')
  request.r(i7903[4], i7903[5], 0, i7902, '_footstepAudioSource')
  return i7902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i7904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i7905 = data
  i7904.bodyType = i7905[0]
  request.r(i7905[1], i7905[2], 0, i7904, 'material')
  i7904.simulated = !!i7905[3]
  i7904.useAutoMass = !!i7905[4]
  i7904.mass = i7905[5]
  i7904.drag = i7905[6]
  i7904.angularDrag = i7905[7]
  i7904.gravityScale = i7905[8]
  i7904.collisionDetectionMode = i7905[9]
  i7904.sleepMode = i7905[10]
  i7904.constraints = i7905[11]
  return i7904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i7906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i7907 = data
  i7906.radius = i7907[0]
  i7906.enabled = !!i7907[1]
  i7906.isTrigger = !!i7907[2]
  i7906.usedByEffector = !!i7907[3]
  i7906.density = i7907[4]
  i7906.offset = new pc.Vec2( i7907[5], i7907[6] )
  request.r(i7907[7], i7907[8], 0, i7906, 'material')
  return i7906
}

Deserializers["_Project.Code.Core.Character.CharacterAnimator"] = function (request, data, root) {
  var i7908 = root || request.c( '_Project.Code.Core.Character.CharacterAnimator' )
  var i7909 = data
  request.r(i7909[0], i7909[1], 0, i7908, '_walkAnimator')
  request.r(i7909[2], i7909[3], 0, i7908, '_idleAnimator')
  request.r(i7909[4], i7909[5], 0, i7908, '_backpackAnimator')
  return i7908
}

Deserializers["_Project.Code.Core.Character.TopDownAnimator"] = function (request, data, root) {
  var i7910 = root || request.c( '_Project.Code.Core.Character.TopDownAnimator' )
  var i7911 = data
  request.r(i7911[0], i7911[1], 0, i7910, '_config')
  request.r(i7911[2], i7911[3], 0, i7910, '_animator')
  request.r(i7911[4], i7911[5], 0, i7910, '_flipBody')
  return i7910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7913 = data
  request.r(i7913[0], i7913[1], 0, i7912, 'clip')
  request.r(i7913[2], i7913[3], 0, i7912, 'outputAudioMixerGroup')
  i7912.playOnAwake = !!i7913[4]
  i7912.loop = !!i7913[5]
  i7912.time = i7913[6]
  i7912.volume = i7913[7]
  i7912.pitch = i7913[8]
  i7912.enabled = !!i7913[9]
  return i7912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7915 = data
  request.r(i7915[0], i7915[1], 0, i7914, 'animatorController')
  request.r(i7915[2], i7915[3], 0, i7914, 'avatar')
  i7914.updateMode = i7915[4]
  i7914.hasTransformHierarchy = !!i7915[5]
  i7914.applyRootMotion = !!i7915[6]
  var i7917 = i7915[7]
  var i7916 = []
  for(var i = 0; i < i7917.length; i += 2) {
  request.r(i7917[i + 0], i7917[i + 1], 2, i7916, '')
  }
  i7914.humanBones = i7916
  i7914.enabled = !!i7915[8]
  return i7914
}

Deserializers["_Project.Code.Core.Character.SortingGroupAnimator"] = function (request, data, root) {
  var i7920 = root || request.c( '_Project.Code.Core.Character.SortingGroupAnimator' )
  var i7921 = data
  i7920._order = i7921[0]
  return i7920
}

Deserializers["_Project.Code.Core.Items.Inventory.ItemInventory"] = function (request, data, root) {
  var i7922 = root || request.c( '_Project.Code.Core.Items.Inventory.ItemInventory' )
  var i7923 = data
  i7922._type = i7923[0]
  i7922._inventory = i7923[1]
  i7922._capacity = i7923[2]
  request.r(i7923[3], i7923[4], 0, i7922, '_musicItemAdded')
  return i7922
}

Deserializers["_Project.Code.Core.Items.Inventory.ColumnInventoryView"] = function (request, data, root) {
  var i7924 = root || request.c( '_Project.Code.Core.Items.Inventory.ColumnInventoryView' )
  var i7925 = data
  var i7927 = i7925[0]
  var i7926 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i7927.length; i += 2) {
  request.r(i7927[i + 0], i7927[i + 1], 1, i7926, '')
  }
  i7924._columnPoints = i7926
  i7924._destroyOnEmptied = !!i7925[1]
  request.r(i7925[2], i7925[3], 0, i7924, '_inventory')
  return i7924
}

Deserializers["MusicItemAdded"] = function (request, data, root) {
  var i7930 = root || request.c( 'MusicItemAdded' )
  var i7931 = data
  request.r(i7931[0], i7931[1], 0, i7930, 'musicSource')
  request.r(i7931[2], i7931[3], 0, i7930, 'musicClip_coin')
  request.r(i7931[4], i7931[5], 0, i7930, 'musicClip_corn')
  request.r(i7931[6], i7931[7], 0, i7930, 'musicClip_popcorn')
  return i7930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7933 = data
  i7932.pivot = new pc.Vec2( i7933[0], i7933[1] )
  i7932.anchorMin = new pc.Vec2( i7933[2], i7933[3] )
  i7932.anchorMax = new pc.Vec2( i7933[4], i7933[5] )
  i7932.sizeDelta = new pc.Vec2( i7933[6], i7933[7] )
  i7932.anchoredPosition3D = new pc.Vec3( i7933[8], i7933[9], i7933[10] )
  i7932.rotation = new pc.Quat(i7933[11], i7933[12], i7933[13], i7933[14])
  i7932.scale = new pc.Vec3( i7933[15], i7933[16], i7933[17] )
  return i7932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7935 = data
  i7934.cullTransparentMesh = !!i7935[0]
  return i7934
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7936 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7937 = data
  i7936.m_hasFontAssetChanged = !!i7937[0]
  request.r(i7937[1], i7937[2], 0, i7936, 'm_baseMaterial')
  i7936.m_maskOffset = new pc.Vec4( i7937[3], i7937[4], i7937[5], i7937[6] )
  i7936.m_text = i7937[7]
  i7936.m_isRightToLeft = !!i7937[8]
  request.r(i7937[9], i7937[10], 0, i7936, 'm_fontAsset')
  request.r(i7937[11], i7937[12], 0, i7936, 'm_sharedMaterial')
  var i7939 = i7937[13]
  var i7938 = []
  for(var i = 0; i < i7939.length; i += 2) {
  request.r(i7939[i + 0], i7939[i + 1], 2, i7938, '')
  }
  i7936.m_fontSharedMaterials = i7938
  request.r(i7937[14], i7937[15], 0, i7936, 'm_fontMaterial')
  var i7941 = i7937[16]
  var i7940 = []
  for(var i = 0; i < i7941.length; i += 2) {
  request.r(i7941[i + 0], i7941[i + 1], 2, i7940, '')
  }
  i7936.m_fontMaterials = i7940
  i7936.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7937[17], i7937[18], i7937[19], i7937[20])
  i7936.m_fontColor = new pc.Color(i7937[21], i7937[22], i7937[23], i7937[24])
  i7936.m_enableVertexGradient = !!i7937[25]
  i7936.m_colorMode = i7937[26]
  i7936.m_fontColorGradient = request.d('TMPro.VertexGradient', i7937[27], i7936.m_fontColorGradient)
  request.r(i7937[28], i7937[29], 0, i7936, 'm_fontColorGradientPreset')
  request.r(i7937[30], i7937[31], 0, i7936, 'm_spriteAsset')
  i7936.m_tintAllSprites = !!i7937[32]
  request.r(i7937[33], i7937[34], 0, i7936, 'm_StyleSheet')
  i7936.m_TextStyleHashCode = i7937[35]
  i7936.m_overrideHtmlColors = !!i7937[36]
  i7936.m_faceColor = UnityEngine.Color32.ConstructColor(i7937[37], i7937[38], i7937[39], i7937[40])
  i7936.m_fontSize = i7937[41]
  i7936.m_fontSizeBase = i7937[42]
  i7936.m_fontWeight = i7937[43]
  i7936.m_enableAutoSizing = !!i7937[44]
  i7936.m_fontSizeMin = i7937[45]
  i7936.m_fontSizeMax = i7937[46]
  i7936.m_fontStyle = i7937[47]
  i7936.m_HorizontalAlignment = i7937[48]
  i7936.m_VerticalAlignment = i7937[49]
  i7936.m_textAlignment = i7937[50]
  i7936.m_characterSpacing = i7937[51]
  i7936.m_wordSpacing = i7937[52]
  i7936.m_lineSpacing = i7937[53]
  i7936.m_lineSpacingMax = i7937[54]
  i7936.m_paragraphSpacing = i7937[55]
  i7936.m_charWidthMaxAdj = i7937[56]
  i7936.m_enableWordWrapping = !!i7937[57]
  i7936.m_wordWrappingRatios = i7937[58]
  i7936.m_overflowMode = i7937[59]
  request.r(i7937[60], i7937[61], 0, i7936, 'm_linkedTextComponent')
  request.r(i7937[62], i7937[63], 0, i7936, 'parentLinkedComponent')
  i7936.m_enableKerning = !!i7937[64]
  i7936.m_enableExtraPadding = !!i7937[65]
  i7936.checkPaddingRequired = !!i7937[66]
  i7936.m_isRichText = !!i7937[67]
  i7936.m_parseCtrlCharacters = !!i7937[68]
  i7936.m_isOrthographic = !!i7937[69]
  i7936.m_isCullingEnabled = !!i7937[70]
  i7936.m_horizontalMapping = i7937[71]
  i7936.m_verticalMapping = i7937[72]
  i7936.m_uvLineOffset = i7937[73]
  i7936.m_geometrySortingOrder = i7937[74]
  i7936.m_IsTextObjectScaleStatic = !!i7937[75]
  i7936.m_VertexBufferAutoSizeReduction = !!i7937[76]
  i7936.m_useMaxVisibleDescender = !!i7937[77]
  i7936.m_pageToDisplay = i7937[78]
  i7936.m_margin = new pc.Vec4( i7937[79], i7937[80], i7937[81], i7937[82] )
  i7936.m_isUsingLegacyAnimationComponent = !!i7937[83]
  i7936.m_isVolumetricText = !!i7937[84]
  request.r(i7937[85], i7937[86], 0, i7936, 'm_Material')
  i7936.m_Maskable = !!i7937[87]
  i7936.m_Color = new pc.Color(i7937[88], i7937[89], i7937[90], i7937[91])
  i7936.m_RaycastTarget = !!i7937[92]
  i7936.m_RaycastPadding = new pc.Vec4( i7937[93], i7937[94], i7937[95], i7937[96] )
  return i7936
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7942 = root || request.c( 'TMPro.VertexGradient' )
  var i7943 = data
  i7942.topLeft = new pc.Color(i7943[0], i7943[1], i7943[2], i7943[3])
  i7942.topRight = new pc.Color(i7943[4], i7943[5], i7943[6], i7943[7])
  i7942.bottomLeft = new pc.Color(i7943[8], i7943[9], i7943[10], i7943[11])
  i7942.bottomRight = new pc.Color(i7943[12], i7943[13], i7943[14], i7943[15])
  return i7942
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7944 = root || request.c( 'UnityEngine.UI.Image' )
  var i7945 = data
  request.r(i7945[0], i7945[1], 0, i7944, 'm_Sprite')
  i7944.m_Type = i7945[2]
  i7944.m_PreserveAspect = !!i7945[3]
  i7944.m_FillCenter = !!i7945[4]
  i7944.m_FillMethod = i7945[5]
  i7944.m_FillAmount = i7945[6]
  i7944.m_FillClockwise = !!i7945[7]
  i7944.m_FillOrigin = i7945[8]
  i7944.m_UseSpriteMesh = !!i7945[9]
  i7944.m_PixelsPerUnitMultiplier = i7945[10]
  request.r(i7945[11], i7945[12], 0, i7944, 'm_Material')
  i7944.m_Maskable = !!i7945[13]
  i7944.m_Color = new pc.Color(i7945[14], i7945[15], i7945[16], i7945[17])
  i7944.m_RaycastTarget = !!i7945[18]
  i7944.m_RaycastPadding = new pc.Vec4( i7945[19], i7945[20], i7945[21], i7945[22] )
  return i7944
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i7946 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i7947 = data
  request.r(i7947[0], i7947[1], 0, i7946, 'm_Texture')
  i7946.m_UVRect = UnityEngine.Rect.MinMaxRect(i7947[2], i7947[3], i7947[4], i7947[5])
  request.r(i7947[6], i7947[7], 0, i7946, 'm_Material')
  i7946.m_Maskable = !!i7947[8]
  i7946.m_Color = new pc.Color(i7947[9], i7947[10], i7947[11], i7947[12])
  i7946.m_RaycastTarget = !!i7947[13]
  i7946.m_RaycastPadding = new pc.Vec4( i7947[14], i7947[15], i7947[16], i7947[17] )
  return i7946
}

Deserializers["_Project.Code.Selling.Customer"] = function (request, data, root) {
  var i7948 = root || request.c( '_Project.Code.Selling.Customer' )
  var i7949 = data
  request.r(i7949[0], i7949[1], 0, i7948, '_bubbleView')
  return i7948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7951 = data
  i7950.enabled = !!i7951[0]
  i7950.planeDistance = i7951[1]
  i7950.referencePixelsPerUnit = i7951[2]
  i7950.isFallbackOverlay = !!i7951[3]
  i7950.renderMode = i7951[4]
  i7950.renderOrder = i7951[5]
  i7950.sortingLayerName = i7951[6]
  i7950.sortingOrder = i7951[7]
  i7950.scaleFactor = i7951[8]
  request.r(i7951[9], i7951[10], 0, i7950, 'worldCamera')
  i7950.overrideSorting = !!i7951[11]
  i7950.pixelPerfect = !!i7951[12]
  i7950.targetDisplay = i7951[13]
  i7950.overridePixelPerfect = !!i7951[14]
  return i7950
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7952 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7953 = data
  i7952.m_UiScaleMode = i7953[0]
  i7952.m_ReferencePixelsPerUnit = i7953[1]
  i7952.m_ScaleFactor = i7953[2]
  i7952.m_ReferenceResolution = new pc.Vec2( i7953[3], i7953[4] )
  i7952.m_ScreenMatchMode = i7953[5]
  i7952.m_MatchWidthOrHeight = i7953[6]
  i7952.m_PhysicalUnit = i7953[7]
  i7952.m_FallbackScreenDPI = i7953[8]
  i7952.m_DefaultSpriteDPI = i7953[9]
  i7952.m_DynamicPixelsPerUnit = i7953[10]
  i7952.m_PresetInfoIsWorld = !!i7953[11]
  return i7952
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7954 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7955 = data
  i7954.m_IgnoreReversedGraphics = !!i7955[0]
  i7954.m_BlockingObjects = i7955[1]
  i7954.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7955[2] )
  return i7954
}

Deserializers["_Project.Code.Selling.Line.BubbleView"] = function (request, data, root) {
  var i7956 = root || request.c( '_Project.Code.Selling.Line.BubbleView' )
  var i7957 = data
  request.r(i7957[0], i7957[1], 0, i7956, '_text')
  request.r(i7957[2], i7957[3], 0, i7956, '_body')
  return i7956
}

Deserializers["_Project.Code.Core.Items.Item"] = function (request, data, root) {
  var i7958 = root || request.c( '_Project.Code.Core.Items.Item' )
  var i7959 = data
  request.r(i7959[0], i7959[1], 0, i7958, '_collider')
  i7958._type = i7959[2]
  return i7958
}

Deserializers["_Project.Code.Core.Harvesting.Field"] = function (request, data, root) {
  var i7960 = root || request.c( '_Project.Code.Core.Harvesting.Field' )
  var i7961 = data
  i7960._state = i7961[0]
  request.r(i7961[1], i7961[2], 0, i7960, '_plant')
  return i7960
}

Deserializers["_Project.Code.Core.Items.InventoryInitializer"] = function (request, data, root) {
  var i7962 = root || request.c( '_Project.Code.Core.Items.InventoryInitializer' )
  var i7963 = data
  request.r(i7963[0], i7963[1], 0, i7962, '_inventory')
  i7962._count = i7963[2]
  return i7962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7965 = data
  i7964.enabled = !!i7965[0]
  i7964.aspect = i7965[1]
  i7964.orthographic = !!i7965[2]
  i7964.orthographicSize = i7965[3]
  i7964.backgroundColor = new pc.Color(i7965[4], i7965[5], i7965[6], i7965[7])
  i7964.nearClipPlane = i7965[8]
  i7964.farClipPlane = i7965[9]
  i7964.fieldOfView = i7965[10]
  i7964.depth = i7965[11]
  i7964.clearFlags = i7965[12]
  i7964.cullingMask = i7965[13]
  i7964.rect = i7965[14]
  request.r(i7965[15], i7965[16], 0, i7964, 'targetTexture')
  i7964.usePhysicalProperties = !!i7965[17]
  i7964.focalLength = i7965[18]
  i7964.sensorSize = new pc.Vec2( i7965[19], i7965[20] )
  i7964.lensShift = new pc.Vec2( i7965[21], i7965[22] )
  i7964.gateFit = i7965[23]
  i7964.commandBufferCount = i7965[24]
  i7964.cameraType = i7965[25]
  return i7964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i7966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i7967 = data
  i7966.enabled = !!i7967[0]
  i7966.isTrigger = !!i7967[1]
  i7966.usedByEffector = !!i7967[2]
  i7966.density = i7967[3]
  i7966.offset = new pc.Vec2( i7967[4], i7967[5] )
  request.r(i7967[6], i7967[7], 0, i7966, 'material')
  i7966.usedByComposite = !!i7967[8]
  i7966.autoTiling = !!i7967[9]
  var i7969 = i7967[10]
  var i7968 = []
  for(var i = 0; i < i7969.length; i += 1) {
  var i7971 = i7969[i + 0]
  var i7970 = []
  for(var i = 0; i < i7971.length; i += 2) {
    i7970.push( new pc.Vec2( i7971[i + 0], i7971[i + 1] ) );
  }
    i7968.push( i7970 );
  }
  i7966.points = i7968
  return i7966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i7978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i7979 = data
  i7978.usedByComposite = !!i7979[0]
  i7978.autoTiling = !!i7979[1]
  i7978.size = new pc.Vec2( i7979[2], i7979[3] )
  i7978.edgeRadius = i7979[4]
  i7978.enabled = !!i7979[5]
  i7978.isTrigger = !!i7979[6]
  i7978.usedByEffector = !!i7979[7]
  i7978.density = i7979[8]
  i7978.offset = new pc.Vec2( i7979[9], i7979[10] )
  request.r(i7979[11], i7979[12], 0, i7978, 'material')
  return i7978
}

Deserializers["_Project.Code.Camera.Follower"] = function (request, data, root) {
  var i7980 = root || request.c( '_Project.Code.Camera.Follower' )
  var i7981 = data
  i7980._speed = i7981[0]
  request.r(i7981[1], i7981[2], 0, i7980, '_target')
  return i7980
}

Deserializers["_Project.Code.Camera.CameraInBordersZoom"] = function (request, data, root) {
  var i7982 = root || request.c( '_Project.Code.Camera.CameraInBordersZoom' )
  var i7983 = data
  request.r(i7983[0], i7983[1], 0, i7982, '_borders')
  i7982._defaultCameraSize = i7983[2]
  return i7982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7985 = data
  i7984.name = i7985[0]
  i7984.index = i7985[1]
  i7984.startup = !!i7985[2]
  return i7984
}

Deserializers["_Project.Code.Entry.EntryPoint"] = function (request, data, root) {
  var i7986 = root || request.c( '_Project.Code.Entry.EntryPoint' )
  var i7987 = data
  request.r(i7987[0], i7987[1], 0, i7986, '_joystick')
  var i7989 = i7987[2]
  var i7988 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Item')))
  for(var i = 0; i < i7989.length; i += 2) {
  request.r(i7989[i + 0], i7989[i + 1], 1, i7988, '')
  }
  i7986._itemPrefabs = i7988
  return i7986
}

Deserializers["_Project.Code.Services.CoroutineRunner.CoroutineRunner"] = function (request, data, root) {
  var i7992 = root || request.c( '_Project.Code.Services.CoroutineRunner.CoroutineRunner' )
  var i7993 = data
  return i7992
}

Deserializers["_Project.Code.Core.Buyables.EndScreenShower"] = function (request, data, root) {
  var i7994 = root || request.c( '_Project.Code.Core.Buyables.EndScreenShower' )
  var i7995 = data
  request.r(i7995[0], i7995[1], 0, i7994, '_fieldBuyable')
  request.r(i7995[2], i7995[3], 0, i7994, '_ui')
  request.r(i7995[4], i7995[5], 0, i7994, '_moveInput')
  request.r(i7995[6], i7995[7], 0, i7994, 'joystick')
  request.r(i7995[8], i7995[9], 0, i7994, '_audioSource')
  return i7994
}

Deserializers["_Project.Code.Tutorial.Tutorial"] = function (request, data, root) {
  var i7996 = root || request.c( '_Project.Code.Tutorial.Tutorial' )
  var i7997 = data
  request.r(i7997[0], i7997[1], 0, i7996, '_tutorialCollider')
  request.r(i7997[2], i7997[3], 0, i7996, '_tutorialText')
  request.r(i7997[4], i7997[5], 0, i7996, '_tutorialInventory')
  request.r(i7997[6], i7997[7], 0, i7996, '_joystick')
  request.r(i7997[8], i7997[9], 0, i7996, '_arrow')
  request.r(i7997[10], i7997[11], 0, i7996, '_point1')
  request.r(i7997[12], i7997[13], 0, i7996, '_point2')
  request.r(i7997[14], i7997[15], 0, i7996, '_buyable')
  return i7996
}

Deserializers["ArrowAnimator"] = function (request, data, root) {
  var i7998 = root || request.c( 'ArrowAnimator' )
  var i7999 = data
  return i7998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i8000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i8001 = data
  i8000.enabled = !!i8001[0]
  i8000.isTrigger = !!i8001[1]
  i8000.usedByEffector = !!i8001[2]
  i8000.density = i8001[3]
  i8000.offset = new pc.Vec2( i8001[4], i8001[5] )
  request.r(i8001[6], i8001[7], 0, i8000, 'material')
  i8000.edgeRadius = i8001[8]
  var i8003 = i8001[9]
  var i8002 = []
  for(var i = 0; i < i8003.length; i += 2) {
    i8002.push( new pc.Vec2( i8003[i + 0], i8003[i + 1] ) );
  }
  i8000.points = i8002
  i8000.useAdjacentStartPoint = !!i8001[10]
  i8000.adjacentStartPoint = new pc.Vec2( i8001[11], i8001[12] )
  i8000.useAdjacentEndPoint = !!i8001[13]
  i8000.adjacentEndPoint = new pc.Vec2( i8001[14], i8001[15] )
  return i8000
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i8004 = root || request.c( 'UnityEngine.UI.Mask' )
  var i8005 = data
  i8004.m_ShowMaskGraphic = !!i8005[0]
  return i8004
}

Deserializers["_Project.Code.Core.Buyables.CoinsViewUpdater"] = function (request, data, root) {
  var i8006 = root || request.c( '_Project.Code.Core.Buyables.CoinsViewUpdater' )
  var i8007 = data
  request.r(i8007[0], i8007[1], 0, i8006, '_text')
  request.r(i8007[2], i8007[3], 0, i8006, '_inventory')
  return i8006
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i8008 = root || request.c( 'VariableJoystick' )
  var i8009 = data
  i8008.moveThreshold = i8009[0]
  i8008.joystickType = i8009[1]
  request.r(i8009[2], i8009[3], 0, i8008, 'background')
  i8008.handleRange = i8009[4]
  i8008.deadZone = i8009[5]
  i8008.axisOptions = i8009[6]
  i8008.snapX = !!i8009[7]
  i8008.snapY = !!i8009[8]
  request.r(i8009[9], i8009[10], 0, i8008, '_handle')
  return i8008
}

Deserializers["_Project.Code.Core.Animations.BreathAnimation"] = function (request, data, root) {
  var i8010 = root || request.c( '_Project.Code.Core.Animations.BreathAnimation' )
  var i8011 = data
  i8010._scaleFactor = i8011[0]
  return i8010
}

Deserializers["CTA"] = function (request, data, root) {
  var i8012 = root || request.c( 'CTA' )
  var i8013 = data
  return i8012
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8014 = root || request.c( 'UnityEngine.UI.Button' )
  var i8015 = data
  i8014.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8015[0], i8014.m_OnClick)
  i8014.m_Navigation = request.d('UnityEngine.UI.Navigation', i8015[1], i8014.m_Navigation)
  i8014.m_Transition = i8015[2]
  i8014.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8015[3], i8014.m_Colors)
  i8014.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8015[4], i8014.m_SpriteState)
  i8014.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8015[5], i8014.m_AnimationTriggers)
  i8014.m_Interactable = !!i8015[6]
  request.r(i8015[7], i8015[8], 0, i8014, 'm_TargetGraphic')
  return i8014
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8016 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8017 = data
  i8016.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8017[0], i8016.m_PersistentCalls)
  return i8016
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8018 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8019 = data
  var i8021 = i8019[0]
  var i8020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8021.length; i += 1) {
    i8020.add(request.d('UnityEngine.Events.PersistentCall', i8021[i + 0]));
  }
  i8018.m_Calls = i8020
  return i8018
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8024 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8025 = data
  request.r(i8025[0], i8025[1], 0, i8024, 'm_Target')
  i8024.m_TargetAssemblyTypeName = i8025[2]
  i8024.m_MethodName = i8025[3]
  i8024.m_Mode = i8025[4]
  i8024.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8025[5], i8024.m_Arguments)
  i8024.m_CallState = i8025[6]
  return i8024
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8026 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8027 = data
  request.r(i8027[0], i8027[1], 0, i8026, 'm_ObjectArgument')
  i8026.m_ObjectArgumentAssemblyTypeName = i8027[2]
  i8026.m_IntArgument = i8027[3]
  i8026.m_FloatArgument = i8027[4]
  i8026.m_StringArgument = i8027[5]
  i8026.m_BoolArgument = !!i8027[6]
  return i8026
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8028 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8029 = data
  i8028.m_Mode = i8029[0]
  i8028.m_WrapAround = !!i8029[1]
  request.r(i8029[2], i8029[3], 0, i8028, 'm_SelectOnUp')
  request.r(i8029[4], i8029[5], 0, i8028, 'm_SelectOnDown')
  request.r(i8029[6], i8029[7], 0, i8028, 'm_SelectOnLeft')
  request.r(i8029[8], i8029[9], 0, i8028, 'm_SelectOnRight')
  return i8028
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8030 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8031 = data
  i8030.m_NormalColor = new pc.Color(i8031[0], i8031[1], i8031[2], i8031[3])
  i8030.m_HighlightedColor = new pc.Color(i8031[4], i8031[5], i8031[6], i8031[7])
  i8030.m_PressedColor = new pc.Color(i8031[8], i8031[9], i8031[10], i8031[11])
  i8030.m_SelectedColor = new pc.Color(i8031[12], i8031[13], i8031[14], i8031[15])
  i8030.m_DisabledColor = new pc.Color(i8031[16], i8031[17], i8031[18], i8031[19])
  i8030.m_ColorMultiplier = i8031[20]
  i8030.m_FadeDuration = i8031[21]
  return i8030
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8032 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8033 = data
  request.r(i8033[0], i8033[1], 0, i8032, 'm_HighlightedSprite')
  request.r(i8033[2], i8033[3], 0, i8032, 'm_PressedSprite')
  request.r(i8033[4], i8033[5], 0, i8032, 'm_SelectedSprite')
  request.r(i8033[6], i8033[7], 0, i8032, 'm_DisabledSprite')
  return i8032
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8034 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8035 = data
  i8034.m_NormalTrigger = i8035[0]
  i8034.m_HighlightedTrigger = i8035[1]
  i8034.m_PressedTrigger = i8035[2]
  i8034.m_SelectedTrigger = i8035[3]
  i8034.m_DisabledTrigger = i8035[4]
  return i8034
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8036 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8037 = data
  request.r(i8037[0], i8037[1], 0, i8036, 'm_FirstSelected')
  i8036.m_sendNavigationEvents = !!i8037[2]
  i8036.m_DragThreshold = i8037[3]
  return i8036
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8038 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8039 = data
  i8038.m_HorizontalAxis = i8039[0]
  i8038.m_VerticalAxis = i8039[1]
  i8038.m_SubmitButton = i8039[2]
  i8038.m_CancelButton = i8039[3]
  i8038.m_InputActionsPerSecond = i8039[4]
  i8038.m_RepeatDelay = i8039[5]
  i8038.m_ForceModuleActive = !!i8039[6]
  i8038.m_SendPointerHoverToParent = !!i8039[7]
  return i8038
}

Deserializers["PrintCopacity"] = function (request, data, root) {
  var i8040 = root || request.c( 'PrintCopacity' )
  var i8041 = data
  request.r(i8041[0], i8041[1], 0, i8040, '_textMeshPro')
  request.r(i8041[2], i8041[3], 0, i8040, 'itemInventory')
  return i8040
}

Deserializers["_Project.Code.Core.Buyables.Buyable"] = function (request, data, root) {
  var i8042 = root || request.c( '_Project.Code.Core.Buyables.Buyable' )
  var i8043 = data
  request.r(i8043[0], i8043[1], 0, i8042, '_itemInventory')
  i8042._price = i8043[2]
  request.r(i8043[3], i8043[4], 0, i8042, '_activateOnBought')
  var i8045 = i8043[5]
  var i8044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8045.length; i += 2) {
  request.r(i8045[i + 0], i8045[i + 1], 1, i8044, '')
  }
  i8042._deactivateOnBought = i8044
  return i8042
}

Deserializers["_Project.Code.Core.Buyables.InventorViewDestroyer"] = function (request, data, root) {
  var i8048 = root || request.c( '_Project.Code.Core.Buyables.InventorViewDestroyer' )
  var i8049 = data
  request.r(i8049[0], i8049[1], 0, i8048, '_inventory')
  return i8048
}

Deserializers["_Project.Code.Core.Workers.Worker"] = function (request, data, root) {
  var i8050 = root || request.c( '_Project.Code.Core.Workers.Worker' )
  var i8051 = data
  request.r(i8051[0], i8051[1], 0, i8050, '_animator')
  request.r(i8051[2], i8051[3], 0, i8050, '_detector')
  var i8053 = i8051[4]
  var i8052 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Harvesting.Field')))
  for(var i = 0; i < i8053.length; i += 2) {
  request.r(i8053[i + 0], i8053[i + 1], 1, i8052, '')
  }
  i8050._fields = i8052
  request.r(i8051[5], i8051[6], 0, i8050, '_inventory')
  return i8050
}

Deserializers["_Project.Code.Core.PopcornFarm.CornFarm"] = function (request, data, root) {
  var i8056 = root || request.c( '_Project.Code.Core.PopcornFarm.CornFarm' )
  var i8057 = data
  request.r(i8057[0], i8057[1], 0, i8056, '_fillImage')
  request.r(i8057[2], i8057[3], 0, i8056, '_resource')
  request.r(i8057[4], i8057[5], 0, i8056, '_final')
  return i8056
}

Deserializers["_Project.Code.Selling.Line.Line"] = function (request, data, root) {
  var i8058 = root || request.c( '_Project.Code.Selling.Line.Line' )
  var i8059 = data
  request.r(i8059[0], i8059[1], 0, i8058, '_customerPrefab')
  var i8061 = i8059[2]
  var i8060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.Animations.AnimatorController')))
  for(var i = 0; i < i8061.length; i += 2) {
  request.r(i8061[i + 0], i8061[i + 1], 1, i8060, '')
  }
  i8058._customerAnimatorControllers = i8060
  var i8063 = i8059[3]
  var i8062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8063.length; i += 2) {
  request.r(i8063[i + 0], i8063[i + 1], 1, i8062, '')
  }
  i8058._spawnPoints = i8062
  return i8058
}

Deserializers["_Project.Code.Selling.Seller"] = function (request, data, root) {
  var i8066 = root || request.c( '_Project.Code.Selling.Seller' )
  var i8067 = data
  request.r(i8067[0], i8067[1], 0, i8066, '_moneyPrefab')
  request.r(i8067[2], i8067[3], 0, i8066, '_lineMb')
  request.r(i8067[4], i8067[5], 0, i8066, '_productInventory')
  request.r(i8067[6], i8067[7], 0, i8066, '_moneyInventory')
  return i8066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8069 = data
  i8068.ambientIntensity = i8069[0]
  i8068.reflectionIntensity = i8069[1]
  i8068.ambientMode = i8069[2]
  i8068.ambientLight = new pc.Color(i8069[3], i8069[4], i8069[5], i8069[6])
  i8068.ambientSkyColor = new pc.Color(i8069[7], i8069[8], i8069[9], i8069[10])
  i8068.ambientGroundColor = new pc.Color(i8069[11], i8069[12], i8069[13], i8069[14])
  i8068.ambientEquatorColor = new pc.Color(i8069[15], i8069[16], i8069[17], i8069[18])
  i8068.fogColor = new pc.Color(i8069[19], i8069[20], i8069[21], i8069[22])
  i8068.fogEndDistance = i8069[23]
  i8068.fogStartDistance = i8069[24]
  i8068.fogDensity = i8069[25]
  i8068.fog = !!i8069[26]
  request.r(i8069[27], i8069[28], 0, i8068, 'skybox')
  i8068.fogMode = i8069[29]
  var i8071 = i8069[30]
  var i8070 = []
  for(var i = 0; i < i8071.length; i += 1) {
    i8070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8071[i + 0]) );
  }
  i8068.lightmaps = i8070
  i8068.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8069[31], i8068.lightProbes)
  i8068.lightmapsMode = i8069[32]
  i8068.mixedBakeMode = i8069[33]
  i8068.environmentLightingMode = i8069[34]
  i8068.ambientProbe = new pc.SphericalHarmonicsL2(i8069[35])
  i8068.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i8069[36])
  i8068.useReferenceAmbientProbe = !!i8069[37]
  request.r(i8069[38], i8069[39], 0, i8068, 'customReflection')
  request.r(i8069[40], i8069[41], 0, i8068, 'defaultReflection')
  i8068.defaultReflectionMode = i8069[42]
  i8068.defaultReflectionResolution = i8069[43]
  i8068.sunLightObjectId = i8069[44]
  i8068.pixelLightCount = i8069[45]
  i8068.defaultReflectionHDR = !!i8069[46]
  i8068.hasLightDataAsset = !!i8069[47]
  i8068.hasManualGenerate = !!i8069[48]
  return i8068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8075 = data
  request.r(i8075[0], i8075[1], 0, i8074, 'lightmapColor')
  request.r(i8075[2], i8075[3], 0, i8074, 'lightmapDirection')
  return i8074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8076 = root || new UnityEngine.LightProbes()
  var i8077 = data
  return i8076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8085 = data
  var i8087 = i8085[0]
  var i8086 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8087.length; i += 1) {
    i8086.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8087[i + 0]));
  }
  i8084.ShaderCompilationErrors = i8086
  i8084.name = i8085[1]
  i8084.guid = i8085[2]
  var i8089 = i8085[3]
  var i8088 = []
  for(var i = 0; i < i8089.length; i += 1) {
    i8088.push( i8089[i + 0] );
  }
  i8084.shaderDefinedKeywords = i8088
  var i8091 = i8085[4]
  var i8090 = []
  for(var i = 0; i < i8091.length; i += 1) {
    i8090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8091[i + 0]) );
  }
  i8084.passes = i8090
  var i8093 = i8085[5]
  var i8092 = []
  for(var i = 0; i < i8093.length; i += 1) {
    i8092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8093[i + 0]) );
  }
  i8084.usePasses = i8092
  var i8095 = i8085[6]
  var i8094 = []
  for(var i = 0; i < i8095.length; i += 1) {
    i8094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8095[i + 0]) );
  }
  i8084.defaultParameterValues = i8094
  request.r(i8085[7], i8085[8], 0, i8084, 'unityFallbackShader')
  i8084.readDepth = !!i8085[9]
  i8084.isCreatedByShaderGraph = !!i8085[10]
  i8084.compiled = !!i8085[11]
  return i8084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8099 = data
  i8098.shaderName = i8099[0]
  i8098.errorMessage = i8099[1]
  return i8098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8104 = root || new pc.UnityShaderPass()
  var i8105 = data
  i8104.id = i8105[0]
  i8104.subShaderIndex = i8105[1]
  i8104.name = i8105[2]
  i8104.passType = i8105[3]
  i8104.grabPassTextureName = i8105[4]
  i8104.usePass = !!i8105[5]
  i8104.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[6], i8104.zTest)
  i8104.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[7], i8104.zWrite)
  i8104.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[8], i8104.culling)
  i8104.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8105[9], i8104.blending)
  i8104.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8105[10], i8104.alphaBlending)
  i8104.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[11], i8104.colorWriteMask)
  i8104.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[12], i8104.offsetUnits)
  i8104.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[13], i8104.offsetFactor)
  i8104.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[14], i8104.stencilRef)
  i8104.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[15], i8104.stencilReadMask)
  i8104.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8105[16], i8104.stencilWriteMask)
  i8104.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8105[17], i8104.stencilOp)
  i8104.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8105[18], i8104.stencilOpFront)
  i8104.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8105[19], i8104.stencilOpBack)
  var i8107 = i8105[20]
  var i8106 = []
  for(var i = 0; i < i8107.length; i += 1) {
    i8106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8107[i + 0]) );
  }
  i8104.tags = i8106
  var i8109 = i8105[21]
  var i8108 = []
  for(var i = 0; i < i8109.length; i += 1) {
    i8108.push( i8109[i + 0] );
  }
  i8104.passDefinedKeywords = i8108
  var i8111 = i8105[22]
  var i8110 = []
  for(var i = 0; i < i8111.length; i += 1) {
    i8110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8111[i + 0]) );
  }
  i8104.passDefinedKeywordGroups = i8110
  var i8113 = i8105[23]
  var i8112 = []
  for(var i = 0; i < i8113.length; i += 1) {
    i8112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8113[i + 0]) );
  }
  i8104.variants = i8112
  var i8115 = i8105[24]
  var i8114 = []
  for(var i = 0; i < i8115.length; i += 1) {
    i8114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8115[i + 0]) );
  }
  i8104.excludedVariants = i8114
  i8104.hasDepthReader = !!i8105[25]
  return i8104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8117 = data
  i8116.val = i8117[0]
  i8116.name = i8117[1]
  return i8116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8119 = data
  i8118.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8119[0], i8118.src)
  i8118.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8119[1], i8118.dst)
  i8118.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8119[2], i8118.op)
  return i8118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8121 = data
  i8120.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8121[0], i8120.pass)
  i8120.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8121[1], i8120.fail)
  i8120.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8121[2], i8120.zFail)
  i8120.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8121[3], i8120.comp)
  return i8120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8125 = data
  i8124.name = i8125[0]
  i8124.value = i8125[1]
  return i8124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8129 = data
  var i8131 = i8129[0]
  var i8130 = []
  for(var i = 0; i < i8131.length; i += 1) {
    i8130.push( i8131[i + 0] );
  }
  i8128.keywords = i8130
  i8128.hasDiscard = !!i8129[1]
  return i8128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8135 = data
  i8134.passId = i8135[0]
  i8134.subShaderIndex = i8135[1]
  var i8137 = i8135[2]
  var i8136 = []
  for(var i = 0; i < i8137.length; i += 1) {
    i8136.push( i8137[i + 0] );
  }
  i8134.keywords = i8136
  i8134.vertexProgram = i8135[3]
  i8134.fragmentProgram = i8135[4]
  i8134.exportedForWebGl2 = !!i8135[5]
  i8134.readDepth = !!i8135[6]
  return i8134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8141 = data
  request.r(i8141[0], i8141[1], 0, i8140, 'shader')
  i8140.pass = i8141[2]
  return i8140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8145 = data
  i8144.name = i8145[0]
  i8144.type = i8145[1]
  i8144.value = new pc.Vec4( i8145[2], i8145[3], i8145[4], i8145[5] )
  i8144.textureValue = i8145[6]
  i8144.shaderPropertyFlag = i8145[7]
  return i8144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8147 = data
  i8146.name = i8147[0]
  request.r(i8147[1], i8147[2], 0, i8146, 'texture')
  i8146.aabb = i8147[3]
  i8146.vertices = i8147[4]
  i8146.triangles = i8147[5]
  i8146.textureRect = UnityEngine.Rect.MinMaxRect(i8147[6], i8147[7], i8147[8], i8147[9])
  i8146.packedRect = UnityEngine.Rect.MinMaxRect(i8147[10], i8147[11], i8147[12], i8147[13])
  i8146.border = new pc.Vec4( i8147[14], i8147[15], i8147[16], i8147[17] )
  i8146.transparency = i8147[18]
  i8146.bounds = i8147[19]
  i8146.pixelsPerUnit = i8147[20]
  i8146.textureWidth = i8147[21]
  i8146.textureHeight = i8147[22]
  i8146.nativeSize = new pc.Vec2( i8147[23], i8147[24] )
  i8146.pivot = new pc.Vec2( i8147[25], i8147[26] )
  i8146.textureRectOffset = new pc.Vec2( i8147[27], i8147[28] )
  return i8146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8149 = data
  i8148.name = i8149[0]
  return i8148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8151 = data
  i8150.name = i8151[0]
  i8150.wrapMode = i8151[1]
  i8150.isLooping = !!i8151[2]
  i8150.length = i8151[3]
  var i8153 = i8151[4]
  var i8152 = []
  for(var i = 0; i < i8153.length; i += 1) {
    i8152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8153[i + 0]) );
  }
  i8150.curves = i8152
  var i8155 = i8151[5]
  var i8154 = []
  for(var i = 0; i < i8155.length; i += 1) {
    i8154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8155[i + 0]) );
  }
  i8150.events = i8154
  i8150.halfPrecision = !!i8151[6]
  i8150._frameRate = i8151[7]
  i8150.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8151[8], i8150.localBounds)
  i8150.hasMuscleCurves = !!i8151[9]
  var i8157 = i8151[10]
  var i8156 = []
  for(var i = 0; i < i8157.length; i += 1) {
    i8156.push( i8157[i + 0] );
  }
  i8150.clipMuscleConstant = i8156
  i8150.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8151[11], i8150.clipBindingConstant)
  return i8150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8161 = data
  i8160.path = i8161[0]
  i8160.hash = i8161[1]
  i8160.componentType = i8161[2]
  i8160.property = i8161[3]
  i8160.keys = i8161[4]
  var i8163 = i8161[5]
  var i8162 = []
  for(var i = 0; i < i8163.length; i += 1) {
    i8162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8163[i + 0]) );
  }
  i8160.objectReferenceKeys = i8162
  return i8160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8167 = data
  i8166.time = i8167[0]
  request.r(i8167[1], i8167[2], 0, i8166, 'value')
  return i8166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8171 = data
  i8170.functionName = i8171[0]
  i8170.floatParameter = i8171[1]
  i8170.intParameter = i8171[2]
  i8170.stringParameter = i8171[3]
  request.r(i8171[4], i8171[5], 0, i8170, 'objectReferenceParameter')
  i8170.time = i8171[6]
  return i8170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8173 = data
  i8172.center = new pc.Vec3( i8173[0], i8173[1], i8173[2] )
  i8172.extends = new pc.Vec3( i8173[3], i8173[4], i8173[5] )
  return i8172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8177 = data
  var i8179 = i8177[0]
  var i8178 = []
  for(var i = 0; i < i8179.length; i += 1) {
    i8178.push( i8179[i + 0] );
  }
  i8176.genericBindings = i8178
  var i8181 = i8177[1]
  var i8180 = []
  for(var i = 0; i < i8181.length; i += 1) {
    i8180.push( i8181[i + 0] );
  }
  i8176.pptrCurveMapping = i8180
  return i8176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8183 = data
  i8182.name = i8183[0]
  i8182.ascent = i8183[1]
  i8182.originalLineHeight = i8183[2]
  i8182.fontSize = i8183[3]
  var i8185 = i8183[4]
  var i8184 = []
  for(var i = 0; i < i8185.length; i += 1) {
    i8184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8185[i + 0]) );
  }
  i8182.characterInfo = i8184
  request.r(i8183[5], i8183[6], 0, i8182, 'texture')
  i8182.originalFontSize = i8183[7]
  return i8182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8189 = data
  i8188.index = i8189[0]
  i8188.advance = i8189[1]
  i8188.bearing = i8189[2]
  i8188.glyphWidth = i8189[3]
  i8188.glyphHeight = i8189[4]
  i8188.minX = i8189[5]
  i8188.maxX = i8189[6]
  i8188.minY = i8189[7]
  i8188.maxY = i8189[8]
  i8188.uvBottomLeftX = i8189[9]
  i8188.uvBottomLeftY = i8189[10]
  i8188.uvBottomRightX = i8189[11]
  i8188.uvBottomRightY = i8189[12]
  i8188.uvTopLeftX = i8189[13]
  i8188.uvTopLeftY = i8189[14]
  i8188.uvTopRightX = i8189[15]
  i8188.uvTopRightY = i8189[16]
  return i8188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8191 = data
  i8190.name = i8191[0]
  var i8193 = i8191[1]
  var i8192 = []
  for(var i = 0; i < i8193.length; i += 1) {
    i8192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8193[i + 0]) );
  }
  i8190.layers = i8192
  var i8195 = i8191[2]
  var i8194 = []
  for(var i = 0; i < i8195.length; i += 1) {
    i8194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8195[i + 0]) );
  }
  i8190.parameters = i8194
  i8190.animationClips = i8191[3]
  i8190.avatarUnsupported = i8191[4]
  return i8190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8199 = data
  i8198.name = i8199[0]
  i8198.defaultWeight = i8199[1]
  i8198.blendingMode = i8199[2]
  i8198.avatarMask = i8199[3]
  i8198.syncedLayerIndex = i8199[4]
  i8198.syncedLayerAffectsTiming = !!i8199[5]
  i8198.syncedLayers = i8199[6]
  i8198.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8199[7], i8198.stateMachine)
  return i8198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8201 = data
  i8200.id = i8201[0]
  i8200.name = i8201[1]
  i8200.path = i8201[2]
  var i8203 = i8201[3]
  var i8202 = []
  for(var i = 0; i < i8203.length; i += 1) {
    i8202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8203[i + 0]) );
  }
  i8200.states = i8202
  var i8205 = i8201[4]
  var i8204 = []
  for(var i = 0; i < i8205.length; i += 1) {
    i8204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8205[i + 0]) );
  }
  i8200.machines = i8204
  var i8207 = i8201[5]
  var i8206 = []
  for(var i = 0; i < i8207.length; i += 1) {
    i8206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8207[i + 0]) );
  }
  i8200.entryStateTransitions = i8206
  var i8209 = i8201[6]
  var i8208 = []
  for(var i = 0; i < i8209.length; i += 1) {
    i8208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8209[i + 0]) );
  }
  i8200.exitStateTransitions = i8208
  var i8211 = i8201[7]
  var i8210 = []
  for(var i = 0; i < i8211.length; i += 1) {
    i8210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8211[i + 0]) );
  }
  i8200.anyStateTransitions = i8210
  i8200.defaultStateId = i8201[8]
  return i8200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8215 = data
  i8214.id = i8215[0]
  i8214.name = i8215[1]
  i8214.cycleOffset = i8215[2]
  i8214.cycleOffsetParameter = i8215[3]
  i8214.cycleOffsetParameterActive = !!i8215[4]
  i8214.mirror = !!i8215[5]
  i8214.mirrorParameter = i8215[6]
  i8214.mirrorParameterActive = !!i8215[7]
  i8214.motionId = i8215[8]
  i8214.nameHash = i8215[9]
  i8214.fullPathHash = i8215[10]
  i8214.speed = i8215[11]
  i8214.speedParameter = i8215[12]
  i8214.speedParameterActive = !!i8215[13]
  i8214.tag = i8215[14]
  i8214.tagHash = i8215[15]
  i8214.writeDefaultValues = !!i8215[16]
  var i8217 = i8215[17]
  var i8216 = []
  for(var i = 0; i < i8217.length; i += 2) {
  request.r(i8217[i + 0], i8217[i + 1], 2, i8216, '')
  }
  i8214.behaviours = i8216
  var i8219 = i8215[18]
  var i8218 = []
  for(var i = 0; i < i8219.length; i += 1) {
    i8218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8219[i + 0]) );
  }
  i8214.transitions = i8218
  return i8214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8225 = data
  i8224.fullPath = i8225[0]
  i8224.canTransitionToSelf = !!i8225[1]
  i8224.duration = i8225[2]
  i8224.exitTime = i8225[3]
  i8224.hasExitTime = !!i8225[4]
  i8224.hasFixedDuration = !!i8225[5]
  i8224.interruptionSource = i8225[6]
  i8224.offset = i8225[7]
  i8224.orderedInterruption = !!i8225[8]
  i8224.destinationStateId = i8225[9]
  i8224.isExit = !!i8225[10]
  i8224.mute = !!i8225[11]
  i8224.solo = !!i8225[12]
  var i8227 = i8225[13]
  var i8226 = []
  for(var i = 0; i < i8227.length; i += 1) {
    i8226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8227[i + 0]) );
  }
  i8224.conditions = i8226
  return i8224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8233 = data
  i8232.destinationStateId = i8233[0]
  i8232.isExit = !!i8233[1]
  i8232.mute = !!i8233[2]
  i8232.solo = !!i8233[3]
  var i8235 = i8233[4]
  var i8234 = []
  for(var i = 0; i < i8235.length; i += 1) {
    i8234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8235[i + 0]) );
  }
  i8232.conditions = i8234
  return i8232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8239 = data
  i8238.mode = i8239[0]
  i8238.parameter = i8239[1]
  i8238.threshold = i8239[2]
  return i8238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8243 = data
  i8242.defaultBool = !!i8243[0]
  i8242.defaultFloat = i8243[1]
  i8242.defaultInt = i8243[2]
  i8242.name = i8243[3]
  i8242.nameHash = i8243[4]
  i8242.type = i8243[5]
  return i8242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8245 = data
  i8244.name = i8245[0]
  i8244.bytes64 = i8245[1]
  i8244.data = i8245[2]
  return i8244
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8246 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8247 = data
  i8246.hashCode = i8247[0]
  request.r(i8247[1], i8247[2], 0, i8246, 'material')
  i8246.materialHashCode = i8247[3]
  request.r(i8247[4], i8247[5], 0, i8246, 'atlas')
  i8246.normalStyle = i8247[6]
  i8246.normalSpacingOffset = i8247[7]
  i8246.boldStyle = i8247[8]
  i8246.boldSpacing = i8247[9]
  i8246.italicStyle = i8247[10]
  i8246.tabSize = i8247[11]
  i8246.m_Version = i8247[12]
  i8246.m_SourceFontFileGUID = i8247[13]
  request.r(i8247[14], i8247[15], 0, i8246, 'm_SourceFontFile_EditorRef')
  request.r(i8247[16], i8247[17], 0, i8246, 'm_SourceFontFile')
  i8246.m_AtlasPopulationMode = i8247[18]
  i8246.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8247[19], i8246.m_FaceInfo)
  var i8249 = i8247[20]
  var i8248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8249.length; i += 1) {
    i8248.add(request.d('UnityEngine.TextCore.Glyph', i8249[i + 0]));
  }
  i8246.m_GlyphTable = i8248
  var i8251 = i8247[21]
  var i8250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8251.length; i += 1) {
    i8250.add(request.d('TMPro.TMP_Character', i8251[i + 0]));
  }
  i8246.m_CharacterTable = i8250
  var i8253 = i8247[22]
  var i8252 = []
  for(var i = 0; i < i8253.length; i += 2) {
  request.r(i8253[i + 0], i8253[i + 1], 2, i8252, '')
  }
  i8246.m_AtlasTextures = i8252
  i8246.m_AtlasTextureIndex = i8247[23]
  i8246.m_IsMultiAtlasTexturesEnabled = !!i8247[24]
  i8246.m_ClearDynamicDataOnBuild = !!i8247[25]
  var i8255 = i8247[26]
  var i8254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8255.length; i += 1) {
    i8254.add(request.d('UnityEngine.TextCore.GlyphRect', i8255[i + 0]));
  }
  i8246.m_UsedGlyphRects = i8254
  var i8257 = i8247[27]
  var i8256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8257.length; i += 1) {
    i8256.add(request.d('UnityEngine.TextCore.GlyphRect', i8257[i + 0]));
  }
  i8246.m_FreeGlyphRects = i8256
  i8246.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8247[28], i8246.m_fontInfo)
  i8246.m_AtlasWidth = i8247[29]
  i8246.m_AtlasHeight = i8247[30]
  i8246.m_AtlasPadding = i8247[31]
  i8246.m_AtlasRenderMode = i8247[32]
  var i8259 = i8247[33]
  var i8258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8259.length; i += 1) {
    i8258.add(request.d('TMPro.TMP_Glyph', i8259[i + 0]));
  }
  i8246.m_glyphInfoList = i8258
  i8246.m_KerningTable = request.d('TMPro.KerningTable', i8247[34], i8246.m_KerningTable)
  i8246.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8247[35], i8246.m_FontFeatureTable)
  var i8261 = i8247[36]
  var i8260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8261.length; i += 2) {
  request.r(i8261[i + 0], i8261[i + 1], 1, i8260, '')
  }
  i8246.fallbackFontAssets = i8260
  var i8263 = i8247[37]
  var i8262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8263.length; i += 2) {
  request.r(i8263[i + 0], i8263[i + 1], 1, i8262, '')
  }
  i8246.m_FallbackFontAssetTable = i8262
  i8246.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8247[38], i8246.m_CreationSettings)
  var i8265 = i8247[39]
  var i8264 = []
  for(var i = 0; i < i8265.length; i += 1) {
    i8264.push( request.d('TMPro.TMP_FontWeightPair', i8265[i + 0]) );
  }
  i8246.m_FontWeightTable = i8264
  var i8267 = i8247[40]
  var i8266 = []
  for(var i = 0; i < i8267.length; i += 1) {
    i8266.push( request.d('TMPro.TMP_FontWeightPair', i8267[i + 0]) );
  }
  i8246.fontWeights = i8266
  return i8246
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8268 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8269 = data
  i8268.m_FaceIndex = i8269[0]
  i8268.m_FamilyName = i8269[1]
  i8268.m_StyleName = i8269[2]
  i8268.m_PointSize = i8269[3]
  i8268.m_Scale = i8269[4]
  i8268.m_UnitsPerEM = i8269[5]
  i8268.m_LineHeight = i8269[6]
  i8268.m_AscentLine = i8269[7]
  i8268.m_CapLine = i8269[8]
  i8268.m_MeanLine = i8269[9]
  i8268.m_Baseline = i8269[10]
  i8268.m_DescentLine = i8269[11]
  i8268.m_SuperscriptOffset = i8269[12]
  i8268.m_SuperscriptSize = i8269[13]
  i8268.m_SubscriptOffset = i8269[14]
  i8268.m_SubscriptSize = i8269[15]
  i8268.m_UnderlineOffset = i8269[16]
  i8268.m_UnderlineThickness = i8269[17]
  i8268.m_StrikethroughOffset = i8269[18]
  i8268.m_StrikethroughThickness = i8269[19]
  i8268.m_TabWidth = i8269[20]
  return i8268
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8272 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8273 = data
  i8272.m_Index = i8273[0]
  i8272.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8273[1], i8272.m_Metrics)
  i8272.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8273[2], i8272.m_GlyphRect)
  i8272.m_Scale = i8273[3]
  i8272.m_AtlasIndex = i8273[4]
  i8272.m_ClassDefinitionType = i8273[5]
  return i8272
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8274 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8275 = data
  i8274.m_Width = i8275[0]
  i8274.m_Height = i8275[1]
  i8274.m_HorizontalBearingX = i8275[2]
  i8274.m_HorizontalBearingY = i8275[3]
  i8274.m_HorizontalAdvance = i8275[4]
  return i8274
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8276 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8277 = data
  i8276.m_X = i8277[0]
  i8276.m_Y = i8277[1]
  i8276.m_Width = i8277[2]
  i8276.m_Height = i8277[3]
  return i8276
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8280 = root || request.c( 'TMPro.TMP_Character' )
  var i8281 = data
  i8280.m_ElementType = i8281[0]
  i8280.m_Unicode = i8281[1]
  i8280.m_GlyphIndex = i8281[2]
  i8280.m_Scale = i8281[3]
  return i8280
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8286 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8287 = data
  i8286.Name = i8287[0]
  i8286.PointSize = i8287[1]
  i8286.Scale = i8287[2]
  i8286.CharacterCount = i8287[3]
  i8286.LineHeight = i8287[4]
  i8286.Baseline = i8287[5]
  i8286.Ascender = i8287[6]
  i8286.CapHeight = i8287[7]
  i8286.Descender = i8287[8]
  i8286.CenterLine = i8287[9]
  i8286.SuperscriptOffset = i8287[10]
  i8286.SubscriptOffset = i8287[11]
  i8286.SubSize = i8287[12]
  i8286.Underline = i8287[13]
  i8286.UnderlineThickness = i8287[14]
  i8286.strikethrough = i8287[15]
  i8286.strikethroughThickness = i8287[16]
  i8286.TabWidth = i8287[17]
  i8286.Padding = i8287[18]
  i8286.AtlasWidth = i8287[19]
  i8286.AtlasHeight = i8287[20]
  return i8286
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8290 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8291 = data
  i8290.id = i8291[0]
  i8290.x = i8291[1]
  i8290.y = i8291[2]
  i8290.width = i8291[3]
  i8290.height = i8291[4]
  i8290.xOffset = i8291[5]
  i8290.yOffset = i8291[6]
  i8290.xAdvance = i8291[7]
  i8290.scale = i8291[8]
  return i8290
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8292 = root || request.c( 'TMPro.KerningTable' )
  var i8293 = data
  var i8295 = i8293[0]
  var i8294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8295.length; i += 1) {
    i8294.add(request.d('TMPro.KerningPair', i8295[i + 0]));
  }
  i8292.kerningPairs = i8294
  return i8292
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8298 = root || request.c( 'TMPro.KerningPair' )
  var i8299 = data
  i8298.xOffset = i8299[0]
  i8298.m_FirstGlyph = i8299[1]
  i8298.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8299[2], i8298.m_FirstGlyphAdjustments)
  i8298.m_SecondGlyph = i8299[3]
  i8298.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8299[4], i8298.m_SecondGlyphAdjustments)
  i8298.m_IgnoreSpacingAdjustments = !!i8299[5]
  return i8298
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8300 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8301 = data
  var i8303 = i8301[0]
  var i8302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8303.length; i += 1) {
    i8302.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i8303[i + 0]));
  }
  i8300.m_GlyphPairAdjustmentRecords = i8302
  return i8300
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8306 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i8307 = data
  i8306.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8307[0], i8306.m_FirstAdjustmentRecord)
  i8306.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8307[1], i8306.m_SecondAdjustmentRecord)
  i8306.m_FeatureLookupFlags = i8307[2]
  return i8306
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8308 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i8309 = data
  i8308.m_GlyphIndex = i8309[0]
  i8308.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i8309[1], i8308.m_GlyphValueRecord)
  return i8308
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i8310 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i8311 = data
  i8310.m_XPlacement = i8311[0]
  i8310.m_YPlacement = i8311[1]
  i8310.m_XAdvance = i8311[2]
  i8310.m_YAdvance = i8311[3]
  return i8310
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8314 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8315 = data
  i8314.sourceFontFileName = i8315[0]
  i8314.sourceFontFileGUID = i8315[1]
  i8314.pointSizeSamplingMode = i8315[2]
  i8314.pointSize = i8315[3]
  i8314.padding = i8315[4]
  i8314.packingMode = i8315[5]
  i8314.atlasWidth = i8315[6]
  i8314.atlasHeight = i8315[7]
  i8314.characterSetSelectionMode = i8315[8]
  i8314.characterSequence = i8315[9]
  i8314.referencedFontAssetGUID = i8315[10]
  i8314.referencedTextAssetGUID = i8315[11]
  i8314.fontStyle = i8315[12]
  i8314.fontStyleModifier = i8315[13]
  i8314.renderMode = i8315[14]
  i8314.includeFontFeatures = !!i8315[15]
  return i8314
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8318 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8319 = data
  request.r(i8319[0], i8319[1], 0, i8318, 'regularTypeface')
  request.r(i8319[2], i8319[3], 0, i8318, 'italicTypeface')
  return i8318
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig"] = function (request, data, root) {
  var i8320 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig' )
  var i8321 = data
  var i8323 = i8321[0]
  var i8322 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Character.DirectedAnimation')))
  for(var i = 0; i < i8323.length; i += 1) {
    i8322.add(request.d('_Project.Code.Core.Character.DirectedAnimation', i8323[i + 0]));
  }
  i8320.Animations = i8322
  return i8320
}

Deserializers["_Project.Code.Core.Character.DirectedAnimation"] = function (request, data, root) {
  var i8326 = root || request.c( '_Project.Code.Core.Character.DirectedAnimation' )
  var i8327 = data
  request.r(i8327[0], i8327[1], 0, i8326, 'Clip')
  i8326.Direction = new pc.Vec2( i8327[2], i8327[3] )
  i8326.Flip = !!i8327[4]
  return i8326
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8328 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8329 = data
  i8328.useSafeMode = !!i8329[0]
  i8328.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8329[1], i8328.safeModeOptions)
  i8328.timeScale = i8329[2]
  i8328.unscaledTimeScale = i8329[3]
  i8328.useSmoothDeltaTime = !!i8329[4]
  i8328.maxSmoothUnscaledTime = i8329[5]
  i8328.rewindCallbackMode = i8329[6]
  i8328.showUnityEditorReport = !!i8329[7]
  i8328.logBehaviour = i8329[8]
  i8328.drawGizmos = !!i8329[9]
  i8328.defaultRecyclable = !!i8329[10]
  i8328.defaultAutoPlay = i8329[11]
  i8328.defaultUpdateType = i8329[12]
  i8328.defaultTimeScaleIndependent = !!i8329[13]
  i8328.defaultEaseType = i8329[14]
  i8328.defaultEaseOvershootOrAmplitude = i8329[15]
  i8328.defaultEasePeriod = i8329[16]
  i8328.defaultAutoKill = !!i8329[17]
  i8328.defaultLoopType = i8329[18]
  i8328.debugMode = !!i8329[19]
  i8328.debugStoreTargetId = !!i8329[20]
  i8328.showPreviewPanel = !!i8329[21]
  i8328.storeSettingsLocation = i8329[22]
  i8328.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8329[23], i8328.modules)
  i8328.createASMDEF = !!i8329[24]
  i8328.showPlayingTweens = !!i8329[25]
  i8328.showPausedTweens = !!i8329[26]
  return i8328
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8330 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8331 = data
  i8330.logBehaviour = i8331[0]
  i8330.nestedTweenFailureBehaviour = i8331[1]
  return i8330
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8332 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8333 = data
  i8332.showPanel = !!i8333[0]
  i8332.audioEnabled = !!i8333[1]
  i8332.physicsEnabled = !!i8333[2]
  i8332.physics2DEnabled = !!i8333[3]
  i8332.spriteEnabled = !!i8333[4]
  i8332.uiEnabled = !!i8333[5]
  i8332.textMeshProEnabled = !!i8333[6]
  i8332.tk2DEnabled = !!i8333[7]
  i8332.deAudioEnabled = !!i8333[8]
  i8332.deUnityExtendedEnabled = !!i8333[9]
  i8332.epoOutlineEnabled = !!i8333[10]
  return i8332
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8334 = root || request.c( 'TMPro.TMP_Settings' )
  var i8335 = data
  i8334.m_enableWordWrapping = !!i8335[0]
  i8334.m_enableKerning = !!i8335[1]
  i8334.m_enableExtraPadding = !!i8335[2]
  i8334.m_enableTintAllSprites = !!i8335[3]
  i8334.m_enableParseEscapeCharacters = !!i8335[4]
  i8334.m_EnableRaycastTarget = !!i8335[5]
  i8334.m_GetFontFeaturesAtRuntime = !!i8335[6]
  i8334.m_missingGlyphCharacter = i8335[7]
  i8334.m_warningsDisabled = !!i8335[8]
  request.r(i8335[9], i8335[10], 0, i8334, 'm_defaultFontAsset')
  i8334.m_defaultFontAssetPath = i8335[11]
  i8334.m_defaultFontSize = i8335[12]
  i8334.m_defaultAutoSizeMinRatio = i8335[13]
  i8334.m_defaultAutoSizeMaxRatio = i8335[14]
  i8334.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8335[15], i8335[16] )
  i8334.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8335[17], i8335[18] )
  i8334.m_autoSizeTextContainer = !!i8335[19]
  i8334.m_IsTextObjectScaleStatic = !!i8335[20]
  var i8337 = i8335[21]
  var i8336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8337.length; i += 2) {
  request.r(i8337[i + 0], i8337[i + 1], 1, i8336, '')
  }
  i8334.m_fallbackFontAssets = i8336
  i8334.m_matchMaterialPreset = !!i8335[22]
  request.r(i8335[23], i8335[24], 0, i8334, 'm_defaultSpriteAsset')
  i8334.m_defaultSpriteAssetPath = i8335[25]
  i8334.m_enableEmojiSupport = !!i8335[26]
  i8334.m_MissingCharacterSpriteUnicode = i8335[27]
  i8334.m_defaultColorGradientPresetsPath = i8335[28]
  request.r(i8335[29], i8335[30], 0, i8334, 'm_defaultStyleSheet')
  i8334.m_StyleSheetsResourcePath = i8335[31]
  request.r(i8335[32], i8335[33], 0, i8334, 'm_leadingCharacters')
  request.r(i8335[34], i8335[35], 0, i8334, 'm_followingCharacters')
  i8334.m_UseModernHangulLineBreakingRules = !!i8335[36]
  return i8334
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i8338 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i8339 = data
  i8338.hashCode = i8339[0]
  request.r(i8339[1], i8339[2], 0, i8338, 'material')
  i8338.materialHashCode = i8339[3]
  request.r(i8339[4], i8339[5], 0, i8338, 'spriteSheet')
  var i8341 = i8339[6]
  var i8340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i8341.length; i += 1) {
    i8340.add(request.d('TMPro.TMP_Sprite', i8341[i + 0]));
  }
  i8338.spriteInfoList = i8340
  var i8343 = i8339[7]
  var i8342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i8343.length; i += 2) {
  request.r(i8343[i + 0], i8343[i + 1], 1, i8342, '')
  }
  i8338.fallbackSpriteAssets = i8342
  i8338.m_Version = i8339[8]
  i8338.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8339[9], i8338.m_FaceInfo)
  var i8345 = i8339[10]
  var i8344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i8345.length; i += 1) {
    i8344.add(request.d('TMPro.TMP_SpriteCharacter', i8345[i + 0]));
  }
  i8338.m_SpriteCharacterTable = i8344
  var i8347 = i8339[11]
  var i8346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i8347.length; i += 1) {
    i8346.add(request.d('TMPro.TMP_SpriteGlyph', i8347[i + 0]));
  }
  i8338.m_SpriteGlyphTable = i8346
  return i8338
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i8350 = root || request.c( 'TMPro.TMP_Sprite' )
  var i8351 = data
  i8350.name = i8351[0]
  i8350.hashCode = i8351[1]
  i8350.unicode = i8351[2]
  i8350.pivot = new pc.Vec2( i8351[3], i8351[4] )
  request.r(i8351[5], i8351[6], 0, i8350, 'sprite')
  i8350.id = i8351[7]
  i8350.x = i8351[8]
  i8350.y = i8351[9]
  i8350.width = i8351[10]
  i8350.height = i8351[11]
  i8350.xOffset = i8351[12]
  i8350.yOffset = i8351[13]
  i8350.xAdvance = i8351[14]
  i8350.scale = i8351[15]
  return i8350
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8356 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8357 = data
  i8356.m_Name = i8357[0]
  i8356.m_HashCode = i8357[1]
  i8356.m_ElementType = i8357[2]
  i8356.m_Unicode = i8357[3]
  i8356.m_GlyphIndex = i8357[4]
  i8356.m_Scale = i8357[5]
  return i8356
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8360 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8361 = data
  request.r(i8361[0], i8361[1], 0, i8360, 'sprite')
  i8360.m_Index = i8361[2]
  i8360.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8361[3], i8360.m_Metrics)
  i8360.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8361[4], i8360.m_GlyphRect)
  i8360.m_Scale = i8361[5]
  i8360.m_AtlasIndex = i8361[6]
  i8360.m_ClassDefinitionType = i8361[7]
  return i8360
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8362 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8363 = data
  var i8365 = i8363[0]
  var i8364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8365.length; i += 1) {
    i8364.add(request.d('TMPro.TMP_Style', i8365[i + 0]));
  }
  i8362.m_StyleList = i8364
  return i8362
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8368 = root || request.c( 'TMPro.TMP_Style' )
  var i8369 = data
  i8368.m_Name = i8369[0]
  i8368.m_HashCode = i8369[1]
  i8368.m_OpeningDefinition = i8369[2]
  i8368.m_ClosingDefinition = i8369[3]
  i8368.m_OpeningTagArray = i8369[4]
  i8368.m_ClosingTagArray = i8369[5]
  i8368.m_OpeningTagUnicodeArray = i8369[6]
  i8368.m_ClosingTagUnicodeArray = i8369[7]
  return i8368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8371 = data
  var i8373 = i8371[0]
  var i8372 = []
  for(var i = 0; i < i8373.length; i += 1) {
    i8372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8373[i + 0]) );
  }
  i8370.files = i8372
  i8370.componentToPrefabIds = i8371[1]
  return i8370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8377 = data
  i8376.path = i8377[0]
  request.r(i8377[1], i8377[2], 0, i8376, 'unityObject')
  return i8376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8379 = data
  var i8381 = i8379[0]
  var i8380 = []
  for(var i = 0; i < i8381.length; i += 1) {
    i8380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8381[i + 0]) );
  }
  i8378.scriptsExecutionOrder = i8380
  var i8383 = i8379[1]
  var i8382 = []
  for(var i = 0; i < i8383.length; i += 1) {
    i8382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8383[i + 0]) );
  }
  i8378.sortingLayers = i8382
  var i8385 = i8379[2]
  var i8384 = []
  for(var i = 0; i < i8385.length; i += 1) {
    i8384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8385[i + 0]) );
  }
  i8378.cullingLayers = i8384
  i8378.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8379[3], i8378.timeSettings)
  i8378.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8379[4], i8378.physicsSettings)
  i8378.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8379[5], i8378.physics2DSettings)
  i8378.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8379[6], i8378.qualitySettings)
  i8378.enableRealtimeShadows = !!i8379[7]
  i8378.enableAutoInstancing = !!i8379[8]
  i8378.enableDynamicBatching = !!i8379[9]
  i8378.lightmapEncodingQuality = i8379[10]
  i8378.desiredColorSpace = i8379[11]
  var i8387 = i8379[12]
  var i8386 = []
  for(var i = 0; i < i8387.length; i += 1) {
    i8386.push( i8387[i + 0] );
  }
  i8378.allTags = i8386
  return i8378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8391 = data
  i8390.name = i8391[0]
  i8390.value = i8391[1]
  return i8390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8395 = data
  i8394.id = i8395[0]
  i8394.name = i8395[1]
  i8394.value = i8395[2]
  return i8394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8399 = data
  i8398.id = i8399[0]
  i8398.name = i8399[1]
  return i8398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8401 = data
  i8400.fixedDeltaTime = i8401[0]
  i8400.maximumDeltaTime = i8401[1]
  i8400.timeScale = i8401[2]
  i8400.maximumParticleTimestep = i8401[3]
  return i8400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8403 = data
  i8402.gravity = new pc.Vec3( i8403[0], i8403[1], i8403[2] )
  i8402.defaultSolverIterations = i8403[3]
  i8402.bounceThreshold = i8403[4]
  i8402.autoSyncTransforms = !!i8403[5]
  i8402.autoSimulation = !!i8403[6]
  var i8405 = i8403[7]
  var i8404 = []
  for(var i = 0; i < i8405.length; i += 1) {
    i8404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8405[i + 0]) );
  }
  i8402.collisionMatrix = i8404
  return i8402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8409 = data
  i8408.enabled = !!i8409[0]
  i8408.layerId = i8409[1]
  i8408.otherLayerId = i8409[2]
  return i8408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8411 = data
  request.r(i8411[0], i8411[1], 0, i8410, 'material')
  i8410.gravity = new pc.Vec2( i8411[2], i8411[3] )
  i8410.positionIterations = i8411[4]
  i8410.velocityIterations = i8411[5]
  i8410.velocityThreshold = i8411[6]
  i8410.maxLinearCorrection = i8411[7]
  i8410.maxAngularCorrection = i8411[8]
  i8410.maxTranslationSpeed = i8411[9]
  i8410.maxRotationSpeed = i8411[10]
  i8410.baumgarteScale = i8411[11]
  i8410.baumgarteTOIScale = i8411[12]
  i8410.timeToSleep = i8411[13]
  i8410.linearSleepTolerance = i8411[14]
  i8410.angularSleepTolerance = i8411[15]
  i8410.defaultContactOffset = i8411[16]
  i8410.autoSimulation = !!i8411[17]
  i8410.queriesHitTriggers = !!i8411[18]
  i8410.queriesStartInColliders = !!i8411[19]
  i8410.callbacksOnDisable = !!i8411[20]
  i8410.reuseCollisionCallbacks = !!i8411[21]
  i8410.autoSyncTransforms = !!i8411[22]
  var i8413 = i8411[23]
  var i8412 = []
  for(var i = 0; i < i8413.length; i += 1) {
    i8412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8413[i + 0]) );
  }
  i8410.collisionMatrix = i8412
  return i8410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8417 = data
  i8416.enabled = !!i8417[0]
  i8416.layerId = i8417[1]
  i8416.otherLayerId = i8417[2]
  return i8416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8419 = data
  var i8421 = i8419[0]
  var i8420 = []
  for(var i = 0; i < i8421.length; i += 1) {
    i8420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8421[i + 0]) );
  }
  i8418.qualityLevels = i8420
  var i8423 = i8419[1]
  var i8422 = []
  for(var i = 0; i < i8423.length; i += 1) {
    i8422.push( i8423[i + 0] );
  }
  i8418.names = i8422
  i8418.shadows = i8419[2]
  i8418.anisotropicFiltering = i8419[3]
  i8418.antiAliasing = i8419[4]
  i8418.lodBias = i8419[5]
  i8418.shadowCascades = i8419[6]
  i8418.shadowDistance = i8419[7]
  i8418.shadowmaskMode = i8419[8]
  i8418.shadowProjection = i8419[9]
  i8418.shadowResolution = i8419[10]
  i8418.softParticles = !!i8419[11]
  i8418.softVegetation = !!i8419[12]
  i8418.activeColorSpace = i8419[13]
  i8418.desiredColorSpace = i8419[14]
  i8418.masterTextureLimit = i8419[15]
  i8418.maxQueuedFrames = i8419[16]
  i8418.particleRaycastBudget = i8419[17]
  i8418.pixelLightCount = i8419[18]
  i8418.realtimeReflectionProbes = !!i8419[19]
  i8418.shadowCascade2Split = i8419[20]
  i8418.shadowCascade4Split = new pc.Vec3( i8419[21], i8419[22], i8419[23] )
  i8418.streamingMipmapsActive = !!i8419[24]
  i8418.vSyncCount = i8419[25]
  i8418.asyncUploadBufferSize = i8419[26]
  i8418.asyncUploadTimeSlice = i8419[27]
  i8418.billboardsFaceCameraPosition = !!i8419[28]
  i8418.shadowNearPlaneOffset = i8419[29]
  i8418.streamingMipmapsMemoryBudget = i8419[30]
  i8418.maximumLODLevel = i8419[31]
  i8418.streamingMipmapsAddAllCameras = !!i8419[32]
  i8418.streamingMipmapsMaxLevelReduction = i8419[33]
  i8418.streamingMipmapsRenderersPerFrame = i8419[34]
  i8418.resolutionScalingFixedDPIFactor = i8419[35]
  i8418.streamingMipmapsMaxFileIORequests = i8419[36]
  i8418.currentQualityLevel = i8419[37]
  return i8418
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8426 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8427 = data
  i8426.xPlacement = i8427[0]
  i8426.yPlacement = i8427[1]
  i8426.xAdvance = i8427[2]
  i8426.yAdvance = i8427[3]
  return i8426
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

Deserializers.creativeName = "Bob_vfrfv";

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

Deserializers.buildID = "912c3f90-f3eb-4bd3-ad80-aae19526c24f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

