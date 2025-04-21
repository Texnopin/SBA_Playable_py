var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.JointSpring' )
  var i1807 = data
  i1806.spring = i1807[0]
  i1806.damper = i1807[1]
  i1806.targetPosition = i1807[2]
  return i1806
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointMotor' )
  var i1809 = data
  i1808.m_TargetVelocity = i1809[0]
  i1808.m_Force = i1809[1]
  i1808.m_FreeSpin = i1809[2]
  return i1808
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.JointLimits' )
  var i1811 = data
  i1810.m_Min = i1811[0]
  i1810.m_Max = i1811[1]
  i1810.m_Bounciness = i1811[2]
  i1810.m_BounceMinVelocity = i1811[3]
  i1810.m_ContactDistance = i1811[4]
  i1810.minBounce = i1811[5]
  i1810.maxBounce = i1811[6]
  return i1810
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.JointDrive' )
  var i1813 = data
  i1812.m_PositionSpring = i1813[0]
  i1812.m_PositionDamper = i1813[1]
  i1812.m_MaximumForce = i1813[2]
  i1812.m_UseAcceleration = i1813[3]
  return i1812
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1815 = data
  i1814.m_Spring = i1815[0]
  i1814.m_Damper = i1815[1]
  return i1814
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1817 = data
  i1816.m_Limit = i1817[0]
  i1816.m_Bounciness = i1817[1]
  i1816.m_ContactDistance = i1817[2]
  return i1816
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1819 = data
  i1818.m_ExtremumSlip = i1819[0]
  i1818.m_ExtremumValue = i1819[1]
  i1818.m_AsymptoteSlip = i1819[2]
  i1818.m_AsymptoteValue = i1819[3]
  i1818.m_Stiffness = i1819[4]
  return i1818
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1821 = data
  i1820.m_LowerAngle = i1821[0]
  i1820.m_UpperAngle = i1821[1]
  return i1820
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1822 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1823 = data
  i1822.m_MotorSpeed = i1823[0]
  i1822.m_MaximumMotorTorque = i1823[1]
  return i1822
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1824 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1825 = data
  i1824.m_DampingRatio = i1825[0]
  i1824.m_Frequency = i1825[1]
  i1824.m_Angle = i1825[2]
  return i1824
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1827 = data
  i1826.m_LowerTranslation = i1827[0]
  i1826.m_UpperTranslation = i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1829 = data
  i1828.position = new pc.Vec3( i1829[0], i1829[1], i1829[2] )
  i1828.scale = new pc.Vec3( i1829[3], i1829[4], i1829[5] )
  i1828.rotation = new pc.Quat(i1829[6], i1829[7], i1829[8], i1829[9])
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1831 = data
  i1830.enabled = !!i1831[0]
  i1830.sortingLayerIndex = i1831[1]
  i1830.sortingOrder = i1831[2]
  i1830.sortingLayerName = i1831[3]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1833 = data
  i1832.enabled = !!i1833[0]
  request.r(i1833[1], i1833[2], 0, i1832, 'sharedMaterial')
  var i1835 = i1833[3]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 2) {
  request.r(i1835[i + 0], i1835[i + 1], 2, i1834, '')
  }
  i1832.sharedMaterials = i1834
  i1832.receiveShadows = !!i1833[4]
  i1832.shadowCastingMode = i1833[5]
  i1832.sortingLayerID = i1833[6]
  i1832.sortingOrder = i1833[7]
  i1832.lightmapIndex = i1833[8]
  i1832.lightmapSceneIndex = i1833[9]
  i1832.lightmapScaleOffset = new pc.Vec4( i1833[10], i1833[11], i1833[12], i1833[13] )
  i1832.lightProbeUsage = i1833[14]
  i1832.reflectionProbeUsage = i1833[15]
  i1832.color = new pc.Color(i1833[16], i1833[17], i1833[18], i1833[19])
  request.r(i1833[20], i1833[21], 0, i1832, 'sprite')
  i1832.flipX = !!i1833[22]
  i1832.flipY = !!i1833[23]
  i1832.drawMode = i1833[24]
  i1832.size = new pc.Vec2( i1833[25], i1833[26] )
  i1832.tileMode = i1833[27]
  i1832.adaptiveModeThreshold = i1833[28]
  i1832.maskInteraction = i1833[29]
  i1832.spriteSortPoint = i1833[30]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.tagId = i1839[1]
  i1838.enabled = !!i1839[2]
  i1838.isStatic = !!i1839[3]
  i1838.layer = i1839[4]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1840 = root || new pc.UnityMaterial()
  var i1841 = data
  i1840.name = i1841[0]
  request.r(i1841[1], i1841[2], 0, i1840, 'shader')
  i1840.renderQueue = i1841[3]
  i1840.enableInstancing = !!i1841[4]
  var i1843 = i1841[5]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1843[i + 0]) );
  }
  i1840.floatParameters = i1842
  var i1845 = i1841[6]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1845[i + 0]) );
  }
  i1840.colorParameters = i1844
  var i1847 = i1841[7]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1847[i + 0]) );
  }
  i1840.vectorParameters = i1846
  var i1849 = i1841[8]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1849[i + 0]) );
  }
  i1840.textureParameters = i1848
  var i1851 = i1841[9]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1851[i + 0]) );
  }
  i1840.materialFlags = i1850
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.value = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1859 = data
  i1858.name = i1859[0]
  i1858.value = new pc.Color(i1859[1], i1859[2], i1859[3], i1859[4])
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.value = new pc.Vec4( i1863[1], i1863[2], i1863[3], i1863[4] )
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1867 = data
  i1866.name = i1867[0]
  request.r(i1867[1], i1867[2], 0, i1866, 'value')
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1871 = data
  i1870.name = i1871[0]
  i1870.enabled = !!i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1873 = data
  i1872.name = i1873[0]
  i1872.width = i1873[1]
  i1872.height = i1873[2]
  i1872.mipmapCount = i1873[3]
  i1872.anisoLevel = i1873[4]
  i1872.filterMode = i1873[5]
  i1872.hdr = !!i1873[6]
  i1872.format = i1873[7]
  i1872.wrapMode = i1873[8]
  i1872.alphaIsTransparency = !!i1873[9]
  i1872.alphaSource = i1873[10]
  i1872.graphicsFormat = i1873[11]
  i1872.sRGBTexture = !!i1873[12]
  i1872.desiredColorSpace = i1873[13]
  i1872.wrapU = i1873[14]
  i1872.wrapV = i1873[15]
  return i1872
}

Deserializers["_Project.Code.Core.Character.CharacterInstaller"] = function (request, data, root) {
  var i1874 = root || request.c( '_Project.Code.Core.Character.CharacterInstaller' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, '_mover')
  request.r(i1875[2], i1875[3], 0, i1874, '_castingDetector')
  request.r(i1875[4], i1875[5], 0, i1874, '_animator')
  var i1877 = i1875[6]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Inventory.ItemInventory')))
  for(var i = 0; i < i1877.length; i += 2) {
  request.r(i1877[i + 0], i1877[i + 1], 1, i1876, '')
  }
  i1874._storages = i1876
  return i1874
}

Deserializers["_Project.Code.Core.Collision.OverlapCollisionDetector"] = function (request, data, root) {
  var i1880 = root || request.c( '_Project.Code.Core.Collision.OverlapCollisionDetector' )
  var i1881 = data
  i1880.detectionRadius = i1881[0]
  i1880.collisionMask = UnityEngine.LayerMask.FromIntegerValue( i1881[1] )
  return i1880
}

Deserializers["_Project.Code.Core.Character.Mover"] = function (request, data, root) {
  var i1882 = root || request.c( '_Project.Code.Core.Character.Mover' )
  var i1883 = data
  i1882._speed = i1883[0]
  i1882.isMoving = !!i1883[1]
  request.r(i1883[2], i1883[3], 0, i1882, '_rigidbody')
  request.r(i1883[4], i1883[5], 0, i1882, '_footstepAudioSource')
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1885 = data
  i1884.bodyType = i1885[0]
  request.r(i1885[1], i1885[2], 0, i1884, 'material')
  i1884.simulated = !!i1885[3]
  i1884.useAutoMass = !!i1885[4]
  i1884.mass = i1885[5]
  i1884.drag = i1885[6]
  i1884.angularDrag = i1885[7]
  i1884.gravityScale = i1885[8]
  i1884.collisionDetectionMode = i1885[9]
  i1884.sleepMode = i1885[10]
  i1884.constraints = i1885[11]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1887 = data
  i1886.radius = i1887[0]
  i1886.enabled = !!i1887[1]
  i1886.isTrigger = !!i1887[2]
  i1886.usedByEffector = !!i1887[3]
  i1886.density = i1887[4]
  i1886.offset = new pc.Vec2( i1887[5], i1887[6] )
  request.r(i1887[7], i1887[8], 0, i1886, 'material')
  return i1886
}

Deserializers["_Project.Code.Core.Character.CharacterAnimator"] = function (request, data, root) {
  var i1888 = root || request.c( '_Project.Code.Core.Character.CharacterAnimator' )
  var i1889 = data
  request.r(i1889[0], i1889[1], 0, i1888, '_walkAnimator')
  request.r(i1889[2], i1889[3], 0, i1888, '_idleAnimator')
  request.r(i1889[4], i1889[5], 0, i1888, '_backpackAnimator')
  return i1888
}

Deserializers["_Project.Code.Core.Character.TopDownAnimator"] = function (request, data, root) {
  var i1890 = root || request.c( '_Project.Code.Core.Character.TopDownAnimator' )
  var i1891 = data
  request.r(i1891[0], i1891[1], 0, i1890, '_config')
  request.r(i1891[2], i1891[3], 0, i1890, '_animator')
  request.r(i1891[4], i1891[5], 0, i1890, '_flipBody')
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'clip')
  request.r(i1893[2], i1893[3], 0, i1892, 'outputAudioMixerGroup')
  i1892.playOnAwake = !!i1893[4]
  i1892.loop = !!i1893[5]
  i1892.time = i1893[6]
  i1892.volume = i1893[7]
  i1892.pitch = i1893[8]
  i1892.enabled = !!i1893[9]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'animatorController')
  request.r(i1895[2], i1895[3], 0, i1894, 'avatar')
  i1894.updateMode = i1895[4]
  i1894.hasTransformHierarchy = !!i1895[5]
  i1894.applyRootMotion = !!i1895[6]
  var i1897 = i1895[7]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1894.humanBones = i1896
  i1894.enabled = !!i1895[8]
  return i1894
}

Deserializers["_Project.Code.Core.Character.SortingGroupAnimator"] = function (request, data, root) {
  var i1900 = root || request.c( '_Project.Code.Core.Character.SortingGroupAnimator' )
  var i1901 = data
  i1900._order = i1901[0]
  return i1900
}

Deserializers["_Project.Code.Core.Items.Inventory.ItemInventory"] = function (request, data, root) {
  var i1902 = root || request.c( '_Project.Code.Core.Items.Inventory.ItemInventory' )
  var i1903 = data
  i1902._type = i1903[0]
  i1902._inventory = i1903[1]
  i1902._capacity = i1903[2]
  request.r(i1903[3], i1903[4], 0, i1902, '_musicItemAdded')
  return i1902
}

Deserializers["_Project.Code.Core.Items.Inventory.ColumnInventoryView"] = function (request, data, root) {
  var i1904 = root || request.c( '_Project.Code.Core.Items.Inventory.ColumnInventoryView' )
  var i1905 = data
  var i1907 = i1905[0]
  var i1906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1907.length; i += 2) {
  request.r(i1907[i + 0], i1907[i + 1], 1, i1906, '')
  }
  i1904._columnPoints = i1906
  i1904._destroyOnEmptied = !!i1905[1]
  request.r(i1905[2], i1905[3], 0, i1904, '_inventory')
  return i1904
}

Deserializers["MusicItemAdded"] = function (request, data, root) {
  var i1910 = root || request.c( 'MusicItemAdded' )
  var i1911 = data
  request.r(i1911[0], i1911[1], 0, i1910, 'musicSource')
  request.r(i1911[2], i1911[3], 0, i1910, 'musicClip_coin')
  request.r(i1911[4], i1911[5], 0, i1910, 'musicClip_corn')
  request.r(i1911[6], i1911[7], 0, i1910, 'musicClip_popcorn')
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1913 = data
  i1912.pivot = new pc.Vec2( i1913[0], i1913[1] )
  i1912.anchorMin = new pc.Vec2( i1913[2], i1913[3] )
  i1912.anchorMax = new pc.Vec2( i1913[4], i1913[5] )
  i1912.sizeDelta = new pc.Vec2( i1913[6], i1913[7] )
  i1912.anchoredPosition3D = new pc.Vec3( i1913[8], i1913[9], i1913[10] )
  i1912.rotation = new pc.Quat(i1913[11], i1913[12], i1913[13], i1913[14])
  i1912.scale = new pc.Vec3( i1913[15], i1913[16], i1913[17] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1915 = data
  i1914.cullTransparentMesh = !!i1915[0]
  return i1914
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1916 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1917 = data
  i1916.m_hasFontAssetChanged = !!i1917[0]
  request.r(i1917[1], i1917[2], 0, i1916, 'm_baseMaterial')
  i1916.m_maskOffset = new pc.Vec4( i1917[3], i1917[4], i1917[5], i1917[6] )
  i1916.m_text = i1917[7]
  i1916.m_isRightToLeft = !!i1917[8]
  request.r(i1917[9], i1917[10], 0, i1916, 'm_fontAsset')
  request.r(i1917[11], i1917[12], 0, i1916, 'm_sharedMaterial')
  var i1919 = i1917[13]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 2) {
  request.r(i1919[i + 0], i1919[i + 1], 2, i1918, '')
  }
  i1916.m_fontSharedMaterials = i1918
  request.r(i1917[14], i1917[15], 0, i1916, 'm_fontMaterial')
  var i1921 = i1917[16]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 2) {
  request.r(i1921[i + 0], i1921[i + 1], 2, i1920, '')
  }
  i1916.m_fontMaterials = i1920
  i1916.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1917[17], i1917[18], i1917[19], i1917[20])
  i1916.m_fontColor = new pc.Color(i1917[21], i1917[22], i1917[23], i1917[24])
  i1916.m_enableVertexGradient = !!i1917[25]
  i1916.m_colorMode = i1917[26]
  i1916.m_fontColorGradient = request.d('TMPro.VertexGradient', i1917[27], i1916.m_fontColorGradient)
  request.r(i1917[28], i1917[29], 0, i1916, 'm_fontColorGradientPreset')
  request.r(i1917[30], i1917[31], 0, i1916, 'm_spriteAsset')
  i1916.m_tintAllSprites = !!i1917[32]
  request.r(i1917[33], i1917[34], 0, i1916, 'm_StyleSheet')
  i1916.m_TextStyleHashCode = i1917[35]
  i1916.m_overrideHtmlColors = !!i1917[36]
  i1916.m_faceColor = UnityEngine.Color32.ConstructColor(i1917[37], i1917[38], i1917[39], i1917[40])
  i1916.m_fontSize = i1917[41]
  i1916.m_fontSizeBase = i1917[42]
  i1916.m_fontWeight = i1917[43]
  i1916.m_enableAutoSizing = !!i1917[44]
  i1916.m_fontSizeMin = i1917[45]
  i1916.m_fontSizeMax = i1917[46]
  i1916.m_fontStyle = i1917[47]
  i1916.m_HorizontalAlignment = i1917[48]
  i1916.m_VerticalAlignment = i1917[49]
  i1916.m_textAlignment = i1917[50]
  i1916.m_characterSpacing = i1917[51]
  i1916.m_wordSpacing = i1917[52]
  i1916.m_lineSpacing = i1917[53]
  i1916.m_lineSpacingMax = i1917[54]
  i1916.m_paragraphSpacing = i1917[55]
  i1916.m_charWidthMaxAdj = i1917[56]
  i1916.m_enableWordWrapping = !!i1917[57]
  i1916.m_wordWrappingRatios = i1917[58]
  i1916.m_overflowMode = i1917[59]
  request.r(i1917[60], i1917[61], 0, i1916, 'm_linkedTextComponent')
  request.r(i1917[62], i1917[63], 0, i1916, 'parentLinkedComponent')
  i1916.m_enableKerning = !!i1917[64]
  i1916.m_enableExtraPadding = !!i1917[65]
  i1916.checkPaddingRequired = !!i1917[66]
  i1916.m_isRichText = !!i1917[67]
  i1916.m_parseCtrlCharacters = !!i1917[68]
  i1916.m_isOrthographic = !!i1917[69]
  i1916.m_isCullingEnabled = !!i1917[70]
  i1916.m_horizontalMapping = i1917[71]
  i1916.m_verticalMapping = i1917[72]
  i1916.m_uvLineOffset = i1917[73]
  i1916.m_geometrySortingOrder = i1917[74]
  i1916.m_IsTextObjectScaleStatic = !!i1917[75]
  i1916.m_VertexBufferAutoSizeReduction = !!i1917[76]
  i1916.m_useMaxVisibleDescender = !!i1917[77]
  i1916.m_pageToDisplay = i1917[78]
  i1916.m_margin = new pc.Vec4( i1917[79], i1917[80], i1917[81], i1917[82] )
  i1916.m_isUsingLegacyAnimationComponent = !!i1917[83]
  i1916.m_isVolumetricText = !!i1917[84]
  request.r(i1917[85], i1917[86], 0, i1916, 'm_Material')
  i1916.m_Maskable = !!i1917[87]
  i1916.m_Color = new pc.Color(i1917[88], i1917[89], i1917[90], i1917[91])
  i1916.m_RaycastTarget = !!i1917[92]
  i1916.m_RaycastPadding = new pc.Vec4( i1917[93], i1917[94], i1917[95], i1917[96] )
  return i1916
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1922 = root || request.c( 'TMPro.VertexGradient' )
  var i1923 = data
  i1922.topLeft = new pc.Color(i1923[0], i1923[1], i1923[2], i1923[3])
  i1922.topRight = new pc.Color(i1923[4], i1923[5], i1923[6], i1923[7])
  i1922.bottomLeft = new pc.Color(i1923[8], i1923[9], i1923[10], i1923[11])
  i1922.bottomRight = new pc.Color(i1923[12], i1923[13], i1923[14], i1923[15])
  return i1922
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.UI.Image' )
  var i1925 = data
  request.r(i1925[0], i1925[1], 0, i1924, 'm_Sprite')
  i1924.m_Type = i1925[2]
  i1924.m_PreserveAspect = !!i1925[3]
  i1924.m_FillCenter = !!i1925[4]
  i1924.m_FillMethod = i1925[5]
  i1924.m_FillAmount = i1925[6]
  i1924.m_FillClockwise = !!i1925[7]
  i1924.m_FillOrigin = i1925[8]
  i1924.m_UseSpriteMesh = !!i1925[9]
  i1924.m_PixelsPerUnitMultiplier = i1925[10]
  request.r(i1925[11], i1925[12], 0, i1924, 'm_Material')
  i1924.m_Maskable = !!i1925[13]
  i1924.m_Color = new pc.Color(i1925[14], i1925[15], i1925[16], i1925[17])
  i1924.m_RaycastTarget = !!i1925[18]
  i1924.m_RaycastPadding = new pc.Vec4( i1925[19], i1925[20], i1925[21], i1925[22] )
  return i1924
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'm_Texture')
  i1926.m_UVRect = UnityEngine.Rect.MinMaxRect(i1927[2], i1927[3], i1927[4], i1927[5])
  request.r(i1927[6], i1927[7], 0, i1926, 'm_Material')
  i1926.m_Maskable = !!i1927[8]
  i1926.m_Color = new pc.Color(i1927[9], i1927[10], i1927[11], i1927[12])
  i1926.m_RaycastTarget = !!i1927[13]
  i1926.m_RaycastPadding = new pc.Vec4( i1927[14], i1927[15], i1927[16], i1927[17] )
  return i1926
}

Deserializers["_Project.Code.Selling.Customer"] = function (request, data, root) {
  var i1928 = root || request.c( '_Project.Code.Selling.Customer' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, '_bubbleView')
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1931 = data
  i1930.enabled = !!i1931[0]
  i1930.planeDistance = i1931[1]
  i1930.referencePixelsPerUnit = i1931[2]
  i1930.isFallbackOverlay = !!i1931[3]
  i1930.renderMode = i1931[4]
  i1930.renderOrder = i1931[5]
  i1930.sortingLayerName = i1931[6]
  i1930.sortingOrder = i1931[7]
  i1930.scaleFactor = i1931[8]
  request.r(i1931[9], i1931[10], 0, i1930, 'worldCamera')
  i1930.overrideSorting = !!i1931[11]
  i1930.pixelPerfect = !!i1931[12]
  i1930.targetDisplay = i1931[13]
  i1930.overridePixelPerfect = !!i1931[14]
  return i1930
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1933 = data
  i1932.m_UiScaleMode = i1933[0]
  i1932.m_ReferencePixelsPerUnit = i1933[1]
  i1932.m_ScaleFactor = i1933[2]
  i1932.m_ReferenceResolution = new pc.Vec2( i1933[3], i1933[4] )
  i1932.m_ScreenMatchMode = i1933[5]
  i1932.m_MatchWidthOrHeight = i1933[6]
  i1932.m_PhysicalUnit = i1933[7]
  i1932.m_FallbackScreenDPI = i1933[8]
  i1932.m_DefaultSpriteDPI = i1933[9]
  i1932.m_DynamicPixelsPerUnit = i1933[10]
  i1932.m_PresetInfoIsWorld = !!i1933[11]
  return i1932
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1934 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1935 = data
  i1934.m_IgnoreReversedGraphics = !!i1935[0]
  i1934.m_BlockingObjects = i1935[1]
  i1934.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1935[2] )
  return i1934
}

Deserializers["_Project.Code.Selling.Line.BubbleView"] = function (request, data, root) {
  var i1936 = root || request.c( '_Project.Code.Selling.Line.BubbleView' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, '_text')
  request.r(i1937[2], i1937[3], 0, i1936, '_body')
  return i1936
}

Deserializers["_Project.Code.Core.Items.Item"] = function (request, data, root) {
  var i1938 = root || request.c( '_Project.Code.Core.Items.Item' )
  var i1939 = data
  request.r(i1939[0], i1939[1], 0, i1938, '_collider')
  i1938._type = i1939[2]
  return i1938
}

Deserializers["_Project.Code.Core.Harvesting.Field"] = function (request, data, root) {
  var i1940 = root || request.c( '_Project.Code.Core.Harvesting.Field' )
  var i1941 = data
  i1940._state = i1941[0]
  request.r(i1941[1], i1941[2], 0, i1940, '_plant')
  return i1940
}

Deserializers["_Project.Code.Core.Items.InventoryInitializer"] = function (request, data, root) {
  var i1942 = root || request.c( '_Project.Code.Core.Items.InventoryInitializer' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, '_inventory')
  i1942._count = i1943[2]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.aspect = i1945[1]
  i1944.orthographic = !!i1945[2]
  i1944.orthographicSize = i1945[3]
  i1944.backgroundColor = new pc.Color(i1945[4], i1945[5], i1945[6], i1945[7])
  i1944.nearClipPlane = i1945[8]
  i1944.farClipPlane = i1945[9]
  i1944.fieldOfView = i1945[10]
  i1944.depth = i1945[11]
  i1944.clearFlags = i1945[12]
  i1944.cullingMask = i1945[13]
  i1944.rect = i1945[14]
  request.r(i1945[15], i1945[16], 0, i1944, 'targetTexture')
  i1944.usePhysicalProperties = !!i1945[17]
  i1944.focalLength = i1945[18]
  i1944.sensorSize = new pc.Vec2( i1945[19], i1945[20] )
  i1944.lensShift = new pc.Vec2( i1945[21], i1945[22] )
  i1944.gateFit = i1945[23]
  i1944.commandBufferCount = i1945[24]
  i1944.cameraType = i1945[25]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1947 = data
  i1946.enabled = !!i1947[0]
  i1946.isTrigger = !!i1947[1]
  i1946.usedByEffector = !!i1947[2]
  i1946.density = i1947[3]
  i1946.offset = new pc.Vec2( i1947[4], i1947[5] )
  request.r(i1947[6], i1947[7], 0, i1946, 'material')
  i1946.usedByComposite = !!i1947[8]
  i1946.autoTiling = !!i1947[9]
  var i1949 = i1947[10]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
  var i1951 = i1949[i + 0]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 2) {
    i1950.push( new pc.Vec2( i1951[i + 0], i1951[i + 1] ) );
  }
    i1948.push( i1950 );
  }
  i1946.points = i1948
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1959 = data
  i1958.usedByComposite = !!i1959[0]
  i1958.autoTiling = !!i1959[1]
  i1958.size = new pc.Vec2( i1959[2], i1959[3] )
  i1958.edgeRadius = i1959[4]
  i1958.enabled = !!i1959[5]
  i1958.isTrigger = !!i1959[6]
  i1958.usedByEffector = !!i1959[7]
  i1958.density = i1959[8]
  i1958.offset = new pc.Vec2( i1959[9], i1959[10] )
  request.r(i1959[11], i1959[12], 0, i1958, 'material')
  return i1958
}

Deserializers["_Project.Code.Camera.Follower"] = function (request, data, root) {
  var i1960 = root || request.c( '_Project.Code.Camera.Follower' )
  var i1961 = data
  i1960._speed = i1961[0]
  request.r(i1961[1], i1961[2], 0, i1960, '_target')
  return i1960
}

Deserializers["_Project.Code.Camera.CameraInBordersZoom"] = function (request, data, root) {
  var i1962 = root || request.c( '_Project.Code.Camera.CameraInBordersZoom' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, '_borders')
  i1962._defaultCameraSize = i1963[2]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1965 = data
  i1964.name = i1965[0]
  i1964.index = i1965[1]
  i1964.startup = !!i1965[2]
  return i1964
}

Deserializers["_Project.Code.Entry.EntryPoint"] = function (request, data, root) {
  var i1966 = root || request.c( '_Project.Code.Entry.EntryPoint' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, '_joystick')
  var i1969 = i1967[2]
  var i1968 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Item')))
  for(var i = 0; i < i1969.length; i += 2) {
  request.r(i1969[i + 0], i1969[i + 1], 1, i1968, '')
  }
  i1966._itemPrefabs = i1968
  return i1966
}

Deserializers["_Project.Code.Services.CoroutineRunner.CoroutineRunner"] = function (request, data, root) {
  var i1972 = root || request.c( '_Project.Code.Services.CoroutineRunner.CoroutineRunner' )
  var i1973 = data
  return i1972
}

Deserializers["_Project.Code.Core.Buyables.EndScreenShower"] = function (request, data, root) {
  var i1974 = root || request.c( '_Project.Code.Core.Buyables.EndScreenShower' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, '_fieldBuyable')
  request.r(i1975[2], i1975[3], 0, i1974, '_ui')
  request.r(i1975[4], i1975[5], 0, i1974, '_moveInput')
  request.r(i1975[6], i1975[7], 0, i1974, 'joystick')
  request.r(i1975[8], i1975[9], 0, i1974, '_audioSource')
  return i1974
}

Deserializers["_Project.Code.Tutorial.Tutorial"] = function (request, data, root) {
  var i1976 = root || request.c( '_Project.Code.Tutorial.Tutorial' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, '_tutorialCollider')
  request.r(i1977[2], i1977[3], 0, i1976, '_tutorialText')
  request.r(i1977[4], i1977[5], 0, i1976, '_tutorialInventory')
  request.r(i1977[6], i1977[7], 0, i1976, '_joystick')
  request.r(i1977[8], i1977[9], 0, i1976, '_arrow')
  request.r(i1977[10], i1977[11], 0, i1976, '_point1')
  request.r(i1977[12], i1977[13], 0, i1976, '_point2')
  request.r(i1977[14], i1977[15], 0, i1976, '_buyable')
  return i1976
}

Deserializers["ArrowAnimator"] = function (request, data, root) {
  var i1978 = root || request.c( 'ArrowAnimator' )
  var i1979 = data
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i1981 = data
  i1980.enabled = !!i1981[0]
  i1980.isTrigger = !!i1981[1]
  i1980.usedByEffector = !!i1981[2]
  i1980.density = i1981[3]
  i1980.offset = new pc.Vec2( i1981[4], i1981[5] )
  request.r(i1981[6], i1981[7], 0, i1980, 'material')
  i1980.edgeRadius = i1981[8]
  var i1983 = i1981[9]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 2) {
    i1982.push( new pc.Vec2( i1983[i + 0], i1983[i + 1] ) );
  }
  i1980.points = i1982
  i1980.useAdjacentStartPoint = !!i1981[10]
  i1980.adjacentStartPoint = new pc.Vec2( i1981[11], i1981[12] )
  i1980.useAdjacentEndPoint = !!i1981[13]
  i1980.adjacentEndPoint = new pc.Vec2( i1981[14], i1981[15] )
  return i1980
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1985 = data
  i1984.m_ShowMaskGraphic = !!i1985[0]
  return i1984
}

Deserializers["_Project.Code.Core.Buyables.CoinsViewUpdater"] = function (request, data, root) {
  var i1986 = root || request.c( '_Project.Code.Core.Buyables.CoinsViewUpdater' )
  var i1987 = data
  request.r(i1987[0], i1987[1], 0, i1986, '_text')
  request.r(i1987[2], i1987[3], 0, i1986, '_inventory')
  return i1986
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1988 = root || request.c( 'VariableJoystick' )
  var i1989 = data
  i1988.moveThreshold = i1989[0]
  i1988.joystickType = i1989[1]
  request.r(i1989[2], i1989[3], 0, i1988, 'background')
  i1988.handleRange = i1989[4]
  i1988.deadZone = i1989[5]
  i1988.axisOptions = i1989[6]
  i1988.snapX = !!i1989[7]
  i1988.snapY = !!i1989[8]
  request.r(i1989[9], i1989[10], 0, i1988, '_handle')
  return i1988
}

Deserializers["_Project.Code.Core.Animations.BreathAnimation"] = function (request, data, root) {
  var i1990 = root || request.c( '_Project.Code.Core.Animations.BreathAnimation' )
  var i1991 = data
  i1990._scaleFactor = i1991[0]
  return i1990
}

Deserializers["CTA"] = function (request, data, root) {
  var i1992 = root || request.c( 'CTA' )
  var i1993 = data
  return i1992
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.UI.Button' )
  var i1995 = data
  i1994.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1995[0], i1994.m_OnClick)
  i1994.m_Navigation = request.d('UnityEngine.UI.Navigation', i1995[1], i1994.m_Navigation)
  i1994.m_Transition = i1995[2]
  i1994.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1995[3], i1994.m_Colors)
  i1994.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1995[4], i1994.m_SpriteState)
  i1994.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1995[5], i1994.m_AnimationTriggers)
  i1994.m_Interactable = !!i1995[6]
  request.r(i1995[7], i1995[8], 0, i1994, 'm_TargetGraphic')
  return i1994
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1997 = data
  i1996.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1997[0], i1996.m_PersistentCalls)
  return i1996
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1999 = data
  var i2001 = i1999[0]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.add(request.d('UnityEngine.Events.PersistentCall', i2001[i + 0]));
  }
  i1998.m_Calls = i2000
  return i1998
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2004 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2005 = data
  request.r(i2005[0], i2005[1], 0, i2004, 'm_Target')
  i2004.m_TargetAssemblyTypeName = i2005[2]
  i2004.m_MethodName = i2005[3]
  i2004.m_Mode = i2005[4]
  i2004.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2005[5], i2004.m_Arguments)
  i2004.m_CallState = i2005[6]
  return i2004
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2006 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2007 = data
  request.r(i2007[0], i2007[1], 0, i2006, 'm_ObjectArgument')
  i2006.m_ObjectArgumentAssemblyTypeName = i2007[2]
  i2006.m_IntArgument = i2007[3]
  i2006.m_FloatArgument = i2007[4]
  i2006.m_StringArgument = i2007[5]
  i2006.m_BoolArgument = !!i2007[6]
  return i2006
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2009 = data
  i2008.m_Mode = i2009[0]
  i2008.m_WrapAround = !!i2009[1]
  request.r(i2009[2], i2009[3], 0, i2008, 'm_SelectOnUp')
  request.r(i2009[4], i2009[5], 0, i2008, 'm_SelectOnDown')
  request.r(i2009[6], i2009[7], 0, i2008, 'm_SelectOnLeft')
  request.r(i2009[8], i2009[9], 0, i2008, 'm_SelectOnRight')
  return i2008
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2011 = data
  i2010.m_NormalColor = new pc.Color(i2011[0], i2011[1], i2011[2], i2011[3])
  i2010.m_HighlightedColor = new pc.Color(i2011[4], i2011[5], i2011[6], i2011[7])
  i2010.m_PressedColor = new pc.Color(i2011[8], i2011[9], i2011[10], i2011[11])
  i2010.m_SelectedColor = new pc.Color(i2011[12], i2011[13], i2011[14], i2011[15])
  i2010.m_DisabledColor = new pc.Color(i2011[16], i2011[17], i2011[18], i2011[19])
  i2010.m_ColorMultiplier = i2011[20]
  i2010.m_FadeDuration = i2011[21]
  return i2010
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'm_HighlightedSprite')
  request.r(i2013[2], i2013[3], 0, i2012, 'm_PressedSprite')
  request.r(i2013[4], i2013[5], 0, i2012, 'm_SelectedSprite')
  request.r(i2013[6], i2013[7], 0, i2012, 'm_DisabledSprite')
  return i2012
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2015 = data
  i2014.m_NormalTrigger = i2015[0]
  i2014.m_HighlightedTrigger = i2015[1]
  i2014.m_PressedTrigger = i2015[2]
  i2014.m_SelectedTrigger = i2015[3]
  i2014.m_DisabledTrigger = i2015[4]
  return i2014
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'm_FirstSelected')
  i2016.m_sendNavigationEvents = !!i2017[2]
  i2016.m_DragThreshold = i2017[3]
  return i2016
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2019 = data
  i2018.m_HorizontalAxis = i2019[0]
  i2018.m_VerticalAxis = i2019[1]
  i2018.m_SubmitButton = i2019[2]
  i2018.m_CancelButton = i2019[3]
  i2018.m_InputActionsPerSecond = i2019[4]
  i2018.m_RepeatDelay = i2019[5]
  i2018.m_ForceModuleActive = !!i2019[6]
  i2018.m_SendPointerHoverToParent = !!i2019[7]
  return i2018
}

Deserializers["PrintCopacity"] = function (request, data, root) {
  var i2020 = root || request.c( 'PrintCopacity' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, '_textMeshPro')
  request.r(i2021[2], i2021[3], 0, i2020, 'itemInventory')
  return i2020
}

Deserializers["_Project.Code.Core.Buyables.Buyable"] = function (request, data, root) {
  var i2022 = root || request.c( '_Project.Code.Core.Buyables.Buyable' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, '_itemInventory')
  i2022._price = i2023[2]
  request.r(i2023[3], i2023[4], 0, i2022, '_activateOnBought')
  var i2025 = i2023[5]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2025.length; i += 2) {
  request.r(i2025[i + 0], i2025[i + 1], 1, i2024, '')
  }
  i2022._deactivateOnBought = i2024
  return i2022
}

Deserializers["_Project.Code.Core.Buyables.InventorViewDestroyer"] = function (request, data, root) {
  var i2028 = root || request.c( '_Project.Code.Core.Buyables.InventorViewDestroyer' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, '_inventory')
  return i2028
}

Deserializers["_Project.Code.Core.Workers.Worker"] = function (request, data, root) {
  var i2030 = root || request.c( '_Project.Code.Core.Workers.Worker' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, '_animator')
  request.r(i2031[2], i2031[3], 0, i2030, '_detector')
  var i2033 = i2031[4]
  var i2032 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Harvesting.Field')))
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 1, i2032, '')
  }
  i2030._fields = i2032
  request.r(i2031[5], i2031[6], 0, i2030, '_inventory')
  return i2030
}

Deserializers["_Project.Code.Core.PopcornFarm.CornFarm"] = function (request, data, root) {
  var i2036 = root || request.c( '_Project.Code.Core.PopcornFarm.CornFarm' )
  var i2037 = data
  request.r(i2037[0], i2037[1], 0, i2036, '_fillImage')
  request.r(i2037[2], i2037[3], 0, i2036, '_resource')
  request.r(i2037[4], i2037[5], 0, i2036, '_final')
  return i2036
}

Deserializers["_Project.Code.Selling.Line.Line"] = function (request, data, root) {
  var i2038 = root || request.c( '_Project.Code.Selling.Line.Line' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, '_customerPrefab')
  var i2041 = i2039[2]
  var i2040 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.Animations.AnimatorController')))
  for(var i = 0; i < i2041.length; i += 2) {
  request.r(i2041[i + 0], i2041[i + 1], 1, i2040, '')
  }
  i2038._customerAnimatorControllers = i2040
  var i2043 = i2039[3]
  var i2042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2043.length; i += 2) {
  request.r(i2043[i + 0], i2043[i + 1], 1, i2042, '')
  }
  i2038._spawnPoints = i2042
  return i2038
}

Deserializers["_Project.Code.Selling.Seller"] = function (request, data, root) {
  var i2046 = root || request.c( '_Project.Code.Selling.Seller' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, '_moneyPrefab')
  request.r(i2047[2], i2047[3], 0, i2046, '_lineMb')
  request.r(i2047[4], i2047[5], 0, i2046, '_productInventory')
  request.r(i2047[6], i2047[7], 0, i2046, '_moneyInventory')
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2049 = data
  i2048.ambientIntensity = i2049[0]
  i2048.reflectionIntensity = i2049[1]
  i2048.ambientMode = i2049[2]
  i2048.ambientLight = new pc.Color(i2049[3], i2049[4], i2049[5], i2049[6])
  i2048.ambientSkyColor = new pc.Color(i2049[7], i2049[8], i2049[9], i2049[10])
  i2048.ambientGroundColor = new pc.Color(i2049[11], i2049[12], i2049[13], i2049[14])
  i2048.ambientEquatorColor = new pc.Color(i2049[15], i2049[16], i2049[17], i2049[18])
  i2048.fogColor = new pc.Color(i2049[19], i2049[20], i2049[21], i2049[22])
  i2048.fogEndDistance = i2049[23]
  i2048.fogStartDistance = i2049[24]
  i2048.fogDensity = i2049[25]
  i2048.fog = !!i2049[26]
  request.r(i2049[27], i2049[28], 0, i2048, 'skybox')
  i2048.fogMode = i2049[29]
  var i2051 = i2049[30]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2051[i + 0]) );
  }
  i2048.lightmaps = i2050
  i2048.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2049[31], i2048.lightProbes)
  i2048.lightmapsMode = i2049[32]
  i2048.mixedBakeMode = i2049[33]
  i2048.environmentLightingMode = i2049[34]
  i2048.ambientProbe = new pc.SphericalHarmonicsL2(i2049[35])
  i2048.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2049[36])
  i2048.useReferenceAmbientProbe = !!i2049[37]
  request.r(i2049[38], i2049[39], 0, i2048, 'customReflection')
  request.r(i2049[40], i2049[41], 0, i2048, 'defaultReflection')
  i2048.defaultReflectionMode = i2049[42]
  i2048.defaultReflectionResolution = i2049[43]
  i2048.sunLightObjectId = i2049[44]
  i2048.pixelLightCount = i2049[45]
  i2048.defaultReflectionHDR = !!i2049[46]
  i2048.hasLightDataAsset = !!i2049[47]
  i2048.hasManualGenerate = !!i2049[48]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'lightmapColor')
  request.r(i2055[2], i2055[3], 0, i2054, 'lightmapDirection')
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2056 = root || new UnityEngine.LightProbes()
  var i2057 = data
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2065 = data
  var i2067 = i2065[0]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2067[i + 0]));
  }
  i2064.ShaderCompilationErrors = i2066
  i2064.name = i2065[1]
  i2064.guid = i2065[2]
  var i2069 = i2065[3]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( i2069[i + 0] );
  }
  i2064.shaderDefinedKeywords = i2068
  var i2071 = i2065[4]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2071[i + 0]) );
  }
  i2064.passes = i2070
  var i2073 = i2065[5]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2073[i + 0]) );
  }
  i2064.usePasses = i2072
  var i2075 = i2065[6]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2075[i + 0]) );
  }
  i2064.defaultParameterValues = i2074
  request.r(i2065[7], i2065[8], 0, i2064, 'unityFallbackShader')
  i2064.readDepth = !!i2065[9]
  i2064.isCreatedByShaderGraph = !!i2065[10]
  i2064.compiled = !!i2065[11]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2079 = data
  i2078.shaderName = i2079[0]
  i2078.errorMessage = i2079[1]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2084 = root || new pc.UnityShaderPass()
  var i2085 = data
  i2084.id = i2085[0]
  i2084.subShaderIndex = i2085[1]
  i2084.name = i2085[2]
  i2084.passType = i2085[3]
  i2084.grabPassTextureName = i2085[4]
  i2084.usePass = !!i2085[5]
  i2084.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[6], i2084.zTest)
  i2084.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[7], i2084.zWrite)
  i2084.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[8], i2084.culling)
  i2084.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2085[9], i2084.blending)
  i2084.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2085[10], i2084.alphaBlending)
  i2084.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[11], i2084.colorWriteMask)
  i2084.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[12], i2084.offsetUnits)
  i2084.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[13], i2084.offsetFactor)
  i2084.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[14], i2084.stencilRef)
  i2084.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[15], i2084.stencilReadMask)
  i2084.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[16], i2084.stencilWriteMask)
  i2084.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2085[17], i2084.stencilOp)
  i2084.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2085[18], i2084.stencilOpFront)
  i2084.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2085[19], i2084.stencilOpBack)
  var i2087 = i2085[20]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2087[i + 0]) );
  }
  i2084.tags = i2086
  var i2089 = i2085[21]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( i2089[i + 0] );
  }
  i2084.passDefinedKeywords = i2088
  var i2091 = i2085[22]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2091[i + 0]) );
  }
  i2084.passDefinedKeywordGroups = i2090
  var i2093 = i2085[23]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2093[i + 0]) );
  }
  i2084.variants = i2092
  var i2095 = i2085[24]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2095[i + 0]) );
  }
  i2084.excludedVariants = i2094
  i2084.hasDepthReader = !!i2085[25]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2097 = data
  i2096.val = i2097[0]
  i2096.name = i2097[1]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2099 = data
  i2098.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[0], i2098.src)
  i2098.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[1], i2098.dst)
  i2098.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[2], i2098.op)
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2101 = data
  i2100.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[0], i2100.pass)
  i2100.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[1], i2100.fail)
  i2100.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[2], i2100.zFail)
  i2100.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[3], i2100.comp)
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.value = i2105[1]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2109 = data
  var i2111 = i2109[0]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( i2111[i + 0] );
  }
  i2108.keywords = i2110
  i2108.hasDiscard = !!i2109[1]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2115 = data
  i2114.passId = i2115[0]
  i2114.subShaderIndex = i2115[1]
  var i2117 = i2115[2]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( i2117[i + 0] );
  }
  i2114.keywords = i2116
  i2114.vertexProgram = i2115[3]
  i2114.fragmentProgram = i2115[4]
  i2114.exportedForWebGl2 = !!i2115[5]
  i2114.readDepth = !!i2115[6]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'shader')
  i2120.pass = i2121[2]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2125 = data
  i2124.name = i2125[0]
  i2124.type = i2125[1]
  i2124.value = new pc.Vec4( i2125[2], i2125[3], i2125[4], i2125[5] )
  i2124.textureValue = i2125[6]
  i2124.shaderPropertyFlag = i2125[7]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2127 = data
  i2126.name = i2127[0]
  request.r(i2127[1], i2127[2], 0, i2126, 'texture')
  i2126.aabb = i2127[3]
  i2126.vertices = i2127[4]
  i2126.triangles = i2127[5]
  i2126.textureRect = UnityEngine.Rect.MinMaxRect(i2127[6], i2127[7], i2127[8], i2127[9])
  i2126.packedRect = UnityEngine.Rect.MinMaxRect(i2127[10], i2127[11], i2127[12], i2127[13])
  i2126.border = new pc.Vec4( i2127[14], i2127[15], i2127[16], i2127[17] )
  i2126.transparency = i2127[18]
  i2126.bounds = i2127[19]
  i2126.pixelsPerUnit = i2127[20]
  i2126.textureWidth = i2127[21]
  i2126.textureHeight = i2127[22]
  i2126.nativeSize = new pc.Vec2( i2127[23], i2127[24] )
  i2126.pivot = new pc.Vec2( i2127[25], i2127[26] )
  i2126.textureRectOffset = new pc.Vec2( i2127[27], i2127[28] )
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2129 = data
  i2128.name = i2129[0]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2131 = data
  i2130.name = i2131[0]
  i2130.wrapMode = i2131[1]
  i2130.isLooping = !!i2131[2]
  i2130.length = i2131[3]
  var i2133 = i2131[4]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2133[i + 0]) );
  }
  i2130.curves = i2132
  var i2135 = i2131[5]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2135[i + 0]) );
  }
  i2130.events = i2134
  i2130.halfPrecision = !!i2131[6]
  i2130._frameRate = i2131[7]
  i2130.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2131[8], i2130.localBounds)
  i2130.hasMuscleCurves = !!i2131[9]
  var i2137 = i2131[10]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( i2137[i + 0] );
  }
  i2130.clipMuscleConstant = i2136
  i2130.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2131[11], i2130.clipBindingConstant)
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2141 = data
  i2140.path = i2141[0]
  i2140.hash = i2141[1]
  i2140.componentType = i2141[2]
  i2140.property = i2141[3]
  i2140.keys = i2141[4]
  var i2143 = i2141[5]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2143[i + 0]) );
  }
  i2140.objectReferenceKeys = i2142
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2147 = data
  i2146.time = i2147[0]
  request.r(i2147[1], i2147[2], 0, i2146, 'value')
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2151 = data
  i2150.functionName = i2151[0]
  i2150.floatParameter = i2151[1]
  i2150.intParameter = i2151[2]
  i2150.stringParameter = i2151[3]
  request.r(i2151[4], i2151[5], 0, i2150, 'objectReferenceParameter')
  i2150.time = i2151[6]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2153 = data
  i2152.center = new pc.Vec3( i2153[0], i2153[1], i2153[2] )
  i2152.extends = new pc.Vec3( i2153[3], i2153[4], i2153[5] )
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2157 = data
  var i2159 = i2157[0]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( i2159[i + 0] );
  }
  i2156.genericBindings = i2158
  var i2161 = i2157[1]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( i2161[i + 0] );
  }
  i2156.pptrCurveMapping = i2160
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.ascent = i2163[1]
  i2162.originalLineHeight = i2163[2]
  i2162.fontSize = i2163[3]
  var i2165 = i2163[4]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2165[i + 0]) );
  }
  i2162.characterInfo = i2164
  request.r(i2163[5], i2163[6], 0, i2162, 'texture')
  i2162.originalFontSize = i2163[7]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2169 = data
  i2168.index = i2169[0]
  i2168.advance = i2169[1]
  i2168.bearing = i2169[2]
  i2168.glyphWidth = i2169[3]
  i2168.glyphHeight = i2169[4]
  i2168.minX = i2169[5]
  i2168.maxX = i2169[6]
  i2168.minY = i2169[7]
  i2168.maxY = i2169[8]
  i2168.uvBottomLeftX = i2169[9]
  i2168.uvBottomLeftY = i2169[10]
  i2168.uvBottomRightX = i2169[11]
  i2168.uvBottomRightY = i2169[12]
  i2168.uvTopLeftX = i2169[13]
  i2168.uvTopLeftY = i2169[14]
  i2168.uvTopRightX = i2169[15]
  i2168.uvTopRightY = i2169[16]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2171 = data
  i2170.name = i2171[0]
  var i2173 = i2171[1]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2173[i + 0]) );
  }
  i2170.layers = i2172
  var i2175 = i2171[2]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2175[i + 0]) );
  }
  i2170.parameters = i2174
  i2170.animationClips = i2171[3]
  i2170.avatarUnsupported = i2171[4]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.defaultWeight = i2179[1]
  i2178.blendingMode = i2179[2]
  i2178.avatarMask = i2179[3]
  i2178.syncedLayerIndex = i2179[4]
  i2178.syncedLayerAffectsTiming = !!i2179[5]
  i2178.syncedLayers = i2179[6]
  i2178.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2179[7], i2178.stateMachine)
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2181 = data
  i2180.id = i2181[0]
  i2180.name = i2181[1]
  i2180.path = i2181[2]
  var i2183 = i2181[3]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2183[i + 0]) );
  }
  i2180.states = i2182
  var i2185 = i2181[4]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2185[i + 0]) );
  }
  i2180.machines = i2184
  var i2187 = i2181[5]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2187[i + 0]) );
  }
  i2180.entryStateTransitions = i2186
  var i2189 = i2181[6]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2189[i + 0]) );
  }
  i2180.exitStateTransitions = i2188
  var i2191 = i2181[7]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2191[i + 0]) );
  }
  i2180.anyStateTransitions = i2190
  i2180.defaultStateId = i2181[8]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2195 = data
  i2194.id = i2195[0]
  i2194.name = i2195[1]
  i2194.cycleOffset = i2195[2]
  i2194.cycleOffsetParameter = i2195[3]
  i2194.cycleOffsetParameterActive = !!i2195[4]
  i2194.mirror = !!i2195[5]
  i2194.mirrorParameter = i2195[6]
  i2194.mirrorParameterActive = !!i2195[7]
  i2194.motionId = i2195[8]
  i2194.nameHash = i2195[9]
  i2194.fullPathHash = i2195[10]
  i2194.speed = i2195[11]
  i2194.speedParameter = i2195[12]
  i2194.speedParameterActive = !!i2195[13]
  i2194.tag = i2195[14]
  i2194.tagHash = i2195[15]
  i2194.writeDefaultValues = !!i2195[16]
  var i2197 = i2195[17]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 2, i2196, '')
  }
  i2194.behaviours = i2196
  var i2199 = i2195[18]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2199[i + 0]) );
  }
  i2194.transitions = i2198
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2205 = data
  i2204.fullPath = i2205[0]
  i2204.canTransitionToSelf = !!i2205[1]
  i2204.duration = i2205[2]
  i2204.exitTime = i2205[3]
  i2204.hasExitTime = !!i2205[4]
  i2204.hasFixedDuration = !!i2205[5]
  i2204.interruptionSource = i2205[6]
  i2204.offset = i2205[7]
  i2204.orderedInterruption = !!i2205[8]
  i2204.destinationStateId = i2205[9]
  i2204.isExit = !!i2205[10]
  i2204.mute = !!i2205[11]
  i2204.solo = !!i2205[12]
  var i2207 = i2205[13]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2207[i + 0]) );
  }
  i2204.conditions = i2206
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2213 = data
  i2212.destinationStateId = i2213[0]
  i2212.isExit = !!i2213[1]
  i2212.mute = !!i2213[2]
  i2212.solo = !!i2213[3]
  var i2215 = i2213[4]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2215[i + 0]) );
  }
  i2212.conditions = i2214
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2219 = data
  i2218.mode = i2219[0]
  i2218.parameter = i2219[1]
  i2218.threshold = i2219[2]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2223 = data
  i2222.defaultBool = !!i2223[0]
  i2222.defaultFloat = i2223[1]
  i2222.defaultInt = i2223[2]
  i2222.name = i2223[3]
  i2222.nameHash = i2223[4]
  i2222.type = i2223[5]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2225 = data
  i2224.name = i2225[0]
  i2224.bytes64 = i2225[1]
  i2224.data = i2225[2]
  return i2224
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2226 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2227 = data
  i2226.hashCode = i2227[0]
  request.r(i2227[1], i2227[2], 0, i2226, 'material')
  i2226.materialHashCode = i2227[3]
  request.r(i2227[4], i2227[5], 0, i2226, 'atlas')
  i2226.normalStyle = i2227[6]
  i2226.normalSpacingOffset = i2227[7]
  i2226.boldStyle = i2227[8]
  i2226.boldSpacing = i2227[9]
  i2226.italicStyle = i2227[10]
  i2226.tabSize = i2227[11]
  i2226.m_Version = i2227[12]
  i2226.m_SourceFontFileGUID = i2227[13]
  request.r(i2227[14], i2227[15], 0, i2226, 'm_SourceFontFile_EditorRef')
  request.r(i2227[16], i2227[17], 0, i2226, 'm_SourceFontFile')
  i2226.m_AtlasPopulationMode = i2227[18]
  i2226.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2227[19], i2226.m_FaceInfo)
  var i2229 = i2227[20]
  var i2228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.add(request.d('UnityEngine.TextCore.Glyph', i2229[i + 0]));
  }
  i2226.m_GlyphTable = i2228
  var i2231 = i2227[21]
  var i2230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.add(request.d('TMPro.TMP_Character', i2231[i + 0]));
  }
  i2226.m_CharacterTable = i2230
  var i2233 = i2227[22]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2226.m_AtlasTextures = i2232
  i2226.m_AtlasTextureIndex = i2227[23]
  i2226.m_IsMultiAtlasTexturesEnabled = !!i2227[24]
  i2226.m_ClearDynamicDataOnBuild = !!i2227[25]
  var i2235 = i2227[26]
  var i2234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.add(request.d('UnityEngine.TextCore.GlyphRect', i2235[i + 0]));
  }
  i2226.m_UsedGlyphRects = i2234
  var i2237 = i2227[27]
  var i2236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.add(request.d('UnityEngine.TextCore.GlyphRect', i2237[i + 0]));
  }
  i2226.m_FreeGlyphRects = i2236
  i2226.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2227[28], i2226.m_fontInfo)
  i2226.m_AtlasWidth = i2227[29]
  i2226.m_AtlasHeight = i2227[30]
  i2226.m_AtlasPadding = i2227[31]
  i2226.m_AtlasRenderMode = i2227[32]
  var i2239 = i2227[33]
  var i2238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.add(request.d('TMPro.TMP_Glyph', i2239[i + 0]));
  }
  i2226.m_glyphInfoList = i2238
  i2226.m_KerningTable = request.d('TMPro.KerningTable', i2227[34], i2226.m_KerningTable)
  i2226.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2227[35], i2226.m_FontFeatureTable)
  var i2241 = i2227[36]
  var i2240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2241.length; i += 2) {
  request.r(i2241[i + 0], i2241[i + 1], 1, i2240, '')
  }
  i2226.fallbackFontAssets = i2240
  var i2243 = i2227[37]
  var i2242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 1, i2242, '')
  }
  i2226.m_FallbackFontAssetTable = i2242
  i2226.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2227[38], i2226.m_CreationSettings)
  var i2245 = i2227[39]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('TMPro.TMP_FontWeightPair', i2245[i + 0]) );
  }
  i2226.m_FontWeightTable = i2244
  var i2247 = i2227[40]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('TMPro.TMP_FontWeightPair', i2247[i + 0]) );
  }
  i2226.fontWeights = i2246
  return i2226
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2249 = data
  i2248.m_FaceIndex = i2249[0]
  i2248.m_FamilyName = i2249[1]
  i2248.m_StyleName = i2249[2]
  i2248.m_PointSize = i2249[3]
  i2248.m_Scale = i2249[4]
  i2248.m_UnitsPerEM = i2249[5]
  i2248.m_LineHeight = i2249[6]
  i2248.m_AscentLine = i2249[7]
  i2248.m_CapLine = i2249[8]
  i2248.m_MeanLine = i2249[9]
  i2248.m_Baseline = i2249[10]
  i2248.m_DescentLine = i2249[11]
  i2248.m_SuperscriptOffset = i2249[12]
  i2248.m_SuperscriptSize = i2249[13]
  i2248.m_SubscriptOffset = i2249[14]
  i2248.m_SubscriptSize = i2249[15]
  i2248.m_UnderlineOffset = i2249[16]
  i2248.m_UnderlineThickness = i2249[17]
  i2248.m_StrikethroughOffset = i2249[18]
  i2248.m_StrikethroughThickness = i2249[19]
  i2248.m_TabWidth = i2249[20]
  return i2248
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2253 = data
  i2252.m_Index = i2253[0]
  i2252.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2253[1], i2252.m_Metrics)
  i2252.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2253[2], i2252.m_GlyphRect)
  i2252.m_Scale = i2253[3]
  i2252.m_AtlasIndex = i2253[4]
  i2252.m_ClassDefinitionType = i2253[5]
  return i2252
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2255 = data
  i2254.m_Width = i2255[0]
  i2254.m_Height = i2255[1]
  i2254.m_HorizontalBearingX = i2255[2]
  i2254.m_HorizontalBearingY = i2255[3]
  i2254.m_HorizontalAdvance = i2255[4]
  return i2254
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2257 = data
  i2256.m_X = i2257[0]
  i2256.m_Y = i2257[1]
  i2256.m_Width = i2257[2]
  i2256.m_Height = i2257[3]
  return i2256
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2260 = root || request.c( 'TMPro.TMP_Character' )
  var i2261 = data
  i2260.m_ElementType = i2261[0]
  i2260.m_Unicode = i2261[1]
  i2260.m_GlyphIndex = i2261[2]
  i2260.m_Scale = i2261[3]
  return i2260
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2266 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2267 = data
  i2266.Name = i2267[0]
  i2266.PointSize = i2267[1]
  i2266.Scale = i2267[2]
  i2266.CharacterCount = i2267[3]
  i2266.LineHeight = i2267[4]
  i2266.Baseline = i2267[5]
  i2266.Ascender = i2267[6]
  i2266.CapHeight = i2267[7]
  i2266.Descender = i2267[8]
  i2266.CenterLine = i2267[9]
  i2266.SuperscriptOffset = i2267[10]
  i2266.SubscriptOffset = i2267[11]
  i2266.SubSize = i2267[12]
  i2266.Underline = i2267[13]
  i2266.UnderlineThickness = i2267[14]
  i2266.strikethrough = i2267[15]
  i2266.strikethroughThickness = i2267[16]
  i2266.TabWidth = i2267[17]
  i2266.Padding = i2267[18]
  i2266.AtlasWidth = i2267[19]
  i2266.AtlasHeight = i2267[20]
  return i2266
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2270 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2271 = data
  i2270.id = i2271[0]
  i2270.x = i2271[1]
  i2270.y = i2271[2]
  i2270.width = i2271[3]
  i2270.height = i2271[4]
  i2270.xOffset = i2271[5]
  i2270.yOffset = i2271[6]
  i2270.xAdvance = i2271[7]
  i2270.scale = i2271[8]
  return i2270
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2272 = root || request.c( 'TMPro.KerningTable' )
  var i2273 = data
  var i2275 = i2273[0]
  var i2274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.add(request.d('TMPro.KerningPair', i2275[i + 0]));
  }
  i2272.kerningPairs = i2274
  return i2272
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2278 = root || request.c( 'TMPro.KerningPair' )
  var i2279 = data
  i2278.xOffset = i2279[0]
  i2278.m_FirstGlyph = i2279[1]
  i2278.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2279[2], i2278.m_FirstGlyphAdjustments)
  i2278.m_SecondGlyph = i2279[3]
  i2278.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2279[4], i2278.m_SecondGlyphAdjustments)
  i2278.m_IgnoreSpacingAdjustments = !!i2279[5]
  return i2278
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2280 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2281 = data
  var i2283 = i2281[0]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2283[i + 0]));
  }
  i2280.m_GlyphPairAdjustmentRecords = i2282
  return i2280
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2286 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2287 = data
  i2286.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2287[0], i2286.m_FirstAdjustmentRecord)
  i2286.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2287[1], i2286.m_SecondAdjustmentRecord)
  i2286.m_FeatureLookupFlags = i2287[2]
  return i2286
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2288 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2289 = data
  i2288.m_GlyphIndex = i2289[0]
  i2288.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2289[1], i2288.m_GlyphValueRecord)
  return i2288
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2290 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2291 = data
  i2290.m_XPlacement = i2291[0]
  i2290.m_YPlacement = i2291[1]
  i2290.m_XAdvance = i2291[2]
  i2290.m_YAdvance = i2291[3]
  return i2290
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2294 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2295 = data
  i2294.sourceFontFileName = i2295[0]
  i2294.sourceFontFileGUID = i2295[1]
  i2294.pointSizeSamplingMode = i2295[2]
  i2294.pointSize = i2295[3]
  i2294.padding = i2295[4]
  i2294.packingMode = i2295[5]
  i2294.atlasWidth = i2295[6]
  i2294.atlasHeight = i2295[7]
  i2294.characterSetSelectionMode = i2295[8]
  i2294.characterSequence = i2295[9]
  i2294.referencedFontAssetGUID = i2295[10]
  i2294.referencedTextAssetGUID = i2295[11]
  i2294.fontStyle = i2295[12]
  i2294.fontStyleModifier = i2295[13]
  i2294.renderMode = i2295[14]
  i2294.includeFontFeatures = !!i2295[15]
  return i2294
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2298 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'regularTypeface')
  request.r(i2299[2], i2299[3], 0, i2298, 'italicTypeface')
  return i2298
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig"] = function (request, data, root) {
  var i2300 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig' )
  var i2301 = data
  var i2303 = i2301[0]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Character.DirectedAnimation')))
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.add(request.d('_Project.Code.Core.Character.DirectedAnimation', i2303[i + 0]));
  }
  i2300.Animations = i2302
  return i2300
}

Deserializers["_Project.Code.Core.Character.DirectedAnimation"] = function (request, data, root) {
  var i2306 = root || request.c( '_Project.Code.Core.Character.DirectedAnimation' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'Clip')
  i2306.Direction = new pc.Vec2( i2307[2], i2307[3] )
  i2306.Flip = !!i2307[4]
  return i2306
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2308 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2309 = data
  i2308.useSafeMode = !!i2309[0]
  i2308.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2309[1], i2308.safeModeOptions)
  i2308.timeScale = i2309[2]
  i2308.unscaledTimeScale = i2309[3]
  i2308.useSmoothDeltaTime = !!i2309[4]
  i2308.maxSmoothUnscaledTime = i2309[5]
  i2308.rewindCallbackMode = i2309[6]
  i2308.showUnityEditorReport = !!i2309[7]
  i2308.logBehaviour = i2309[8]
  i2308.drawGizmos = !!i2309[9]
  i2308.defaultRecyclable = !!i2309[10]
  i2308.defaultAutoPlay = i2309[11]
  i2308.defaultUpdateType = i2309[12]
  i2308.defaultTimeScaleIndependent = !!i2309[13]
  i2308.defaultEaseType = i2309[14]
  i2308.defaultEaseOvershootOrAmplitude = i2309[15]
  i2308.defaultEasePeriod = i2309[16]
  i2308.defaultAutoKill = !!i2309[17]
  i2308.defaultLoopType = i2309[18]
  i2308.debugMode = !!i2309[19]
  i2308.debugStoreTargetId = !!i2309[20]
  i2308.showPreviewPanel = !!i2309[21]
  i2308.storeSettingsLocation = i2309[22]
  i2308.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2309[23], i2308.modules)
  i2308.createASMDEF = !!i2309[24]
  i2308.showPlayingTweens = !!i2309[25]
  i2308.showPausedTweens = !!i2309[26]
  return i2308
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2310 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2311 = data
  i2310.logBehaviour = i2311[0]
  i2310.nestedTweenFailureBehaviour = i2311[1]
  return i2310
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2312 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2313 = data
  i2312.showPanel = !!i2313[0]
  i2312.audioEnabled = !!i2313[1]
  i2312.physicsEnabled = !!i2313[2]
  i2312.physics2DEnabled = !!i2313[3]
  i2312.spriteEnabled = !!i2313[4]
  i2312.uiEnabled = !!i2313[5]
  i2312.textMeshProEnabled = !!i2313[6]
  i2312.tk2DEnabled = !!i2313[7]
  i2312.deAudioEnabled = !!i2313[8]
  i2312.deUnityExtendedEnabled = !!i2313[9]
  i2312.epoOutlineEnabled = !!i2313[10]
  return i2312
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2314 = root || request.c( 'TMPro.TMP_Settings' )
  var i2315 = data
  i2314.m_enableWordWrapping = !!i2315[0]
  i2314.m_enableKerning = !!i2315[1]
  i2314.m_enableExtraPadding = !!i2315[2]
  i2314.m_enableTintAllSprites = !!i2315[3]
  i2314.m_enableParseEscapeCharacters = !!i2315[4]
  i2314.m_EnableRaycastTarget = !!i2315[5]
  i2314.m_GetFontFeaturesAtRuntime = !!i2315[6]
  i2314.m_missingGlyphCharacter = i2315[7]
  i2314.m_warningsDisabled = !!i2315[8]
  request.r(i2315[9], i2315[10], 0, i2314, 'm_defaultFontAsset')
  i2314.m_defaultFontAssetPath = i2315[11]
  i2314.m_defaultFontSize = i2315[12]
  i2314.m_defaultAutoSizeMinRatio = i2315[13]
  i2314.m_defaultAutoSizeMaxRatio = i2315[14]
  i2314.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2315[15], i2315[16] )
  i2314.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2315[17], i2315[18] )
  i2314.m_autoSizeTextContainer = !!i2315[19]
  i2314.m_IsTextObjectScaleStatic = !!i2315[20]
  var i2317 = i2315[21]
  var i2316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 1, i2316, '')
  }
  i2314.m_fallbackFontAssets = i2316
  i2314.m_matchMaterialPreset = !!i2315[22]
  request.r(i2315[23], i2315[24], 0, i2314, 'm_defaultSpriteAsset')
  i2314.m_defaultSpriteAssetPath = i2315[25]
  i2314.m_enableEmojiSupport = !!i2315[26]
  i2314.m_MissingCharacterSpriteUnicode = i2315[27]
  i2314.m_defaultColorGradientPresetsPath = i2315[28]
  request.r(i2315[29], i2315[30], 0, i2314, 'm_defaultStyleSheet')
  i2314.m_StyleSheetsResourcePath = i2315[31]
  request.r(i2315[32], i2315[33], 0, i2314, 'm_leadingCharacters')
  request.r(i2315[34], i2315[35], 0, i2314, 'm_followingCharacters')
  i2314.m_UseModernHangulLineBreakingRules = !!i2315[36]
  return i2314
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2318 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2319 = data
  i2318.hashCode = i2319[0]
  request.r(i2319[1], i2319[2], 0, i2318, 'material')
  i2318.materialHashCode = i2319[3]
  request.r(i2319[4], i2319[5], 0, i2318, 'spriteSheet')
  var i2321 = i2319[6]
  var i2320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.add(request.d('TMPro.TMP_Sprite', i2321[i + 0]));
  }
  i2318.spriteInfoList = i2320
  var i2323 = i2319[7]
  var i2322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2323.length; i += 2) {
  request.r(i2323[i + 0], i2323[i + 1], 1, i2322, '')
  }
  i2318.fallbackSpriteAssets = i2322
  i2318.m_Version = i2319[8]
  i2318.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2319[9], i2318.m_FaceInfo)
  var i2325 = i2319[10]
  var i2324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.add(request.d('TMPro.TMP_SpriteCharacter', i2325[i + 0]));
  }
  i2318.m_SpriteCharacterTable = i2324
  var i2327 = i2319[11]
  var i2326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.add(request.d('TMPro.TMP_SpriteGlyph', i2327[i + 0]));
  }
  i2318.m_SpriteGlyphTable = i2326
  return i2318
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2330 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2331 = data
  i2330.name = i2331[0]
  i2330.hashCode = i2331[1]
  i2330.unicode = i2331[2]
  i2330.pivot = new pc.Vec2( i2331[3], i2331[4] )
  request.r(i2331[5], i2331[6], 0, i2330, 'sprite')
  i2330.id = i2331[7]
  i2330.x = i2331[8]
  i2330.y = i2331[9]
  i2330.width = i2331[10]
  i2330.height = i2331[11]
  i2330.xOffset = i2331[12]
  i2330.yOffset = i2331[13]
  i2330.xAdvance = i2331[14]
  i2330.scale = i2331[15]
  return i2330
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2336 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2337 = data
  i2336.m_Name = i2337[0]
  i2336.m_HashCode = i2337[1]
  i2336.m_ElementType = i2337[2]
  i2336.m_Unicode = i2337[3]
  i2336.m_GlyphIndex = i2337[4]
  i2336.m_Scale = i2337[5]
  return i2336
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2340 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'sprite')
  i2340.m_Index = i2341[2]
  i2340.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2341[3], i2340.m_Metrics)
  i2340.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2341[4], i2340.m_GlyphRect)
  i2340.m_Scale = i2341[5]
  i2340.m_AtlasIndex = i2341[6]
  i2340.m_ClassDefinitionType = i2341[7]
  return i2340
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2342 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.add(request.d('TMPro.TMP_Style', i2345[i + 0]));
  }
  i2342.m_StyleList = i2344
  return i2342
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2348 = root || request.c( 'TMPro.TMP_Style' )
  var i2349 = data
  i2348.m_Name = i2349[0]
  i2348.m_HashCode = i2349[1]
  i2348.m_OpeningDefinition = i2349[2]
  i2348.m_ClosingDefinition = i2349[3]
  i2348.m_OpeningTagArray = i2349[4]
  i2348.m_ClosingTagArray = i2349[5]
  i2348.m_OpeningTagUnicodeArray = i2349[6]
  i2348.m_ClosingTagUnicodeArray = i2349[7]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2351 = data
  var i2353 = i2351[0]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2353[i + 0]) );
  }
  i2350.files = i2352
  i2350.componentToPrefabIds = i2351[1]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2357 = data
  i2356.path = i2357[0]
  request.r(i2357[1], i2357[2], 0, i2356, 'unityObject')
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2361[i + 0]) );
  }
  i2358.scriptsExecutionOrder = i2360
  var i2363 = i2359[1]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2363[i + 0]) );
  }
  i2358.sortingLayers = i2362
  var i2365 = i2359[2]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2365[i + 0]) );
  }
  i2358.cullingLayers = i2364
  i2358.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2359[3], i2358.timeSettings)
  i2358.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2359[4], i2358.physicsSettings)
  i2358.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2359[5], i2358.physics2DSettings)
  i2358.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2359[6], i2358.qualitySettings)
  i2358.enableRealtimeShadows = !!i2359[7]
  i2358.enableAutoInstancing = !!i2359[8]
  i2358.enableDynamicBatching = !!i2359[9]
  i2358.lightmapEncodingQuality = i2359[10]
  i2358.desiredColorSpace = i2359[11]
  var i2367 = i2359[12]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( i2367[i + 0] );
  }
  i2358.allTags = i2366
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2371 = data
  i2370.name = i2371[0]
  i2370.value = i2371[1]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2375 = data
  i2374.id = i2375[0]
  i2374.name = i2375[1]
  i2374.value = i2375[2]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2379 = data
  i2378.id = i2379[0]
  i2378.name = i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2381 = data
  i2380.fixedDeltaTime = i2381[0]
  i2380.maximumDeltaTime = i2381[1]
  i2380.timeScale = i2381[2]
  i2380.maximumParticleTimestep = i2381[3]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2383 = data
  i2382.gravity = new pc.Vec3( i2383[0], i2383[1], i2383[2] )
  i2382.defaultSolverIterations = i2383[3]
  i2382.bounceThreshold = i2383[4]
  i2382.autoSyncTransforms = !!i2383[5]
  i2382.autoSimulation = !!i2383[6]
  var i2385 = i2383[7]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2385[i + 0]) );
  }
  i2382.collisionMatrix = i2384
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2389 = data
  i2388.enabled = !!i2389[0]
  i2388.layerId = i2389[1]
  i2388.otherLayerId = i2389[2]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'material')
  i2390.gravity = new pc.Vec2( i2391[2], i2391[3] )
  i2390.positionIterations = i2391[4]
  i2390.velocityIterations = i2391[5]
  i2390.velocityThreshold = i2391[6]
  i2390.maxLinearCorrection = i2391[7]
  i2390.maxAngularCorrection = i2391[8]
  i2390.maxTranslationSpeed = i2391[9]
  i2390.maxRotationSpeed = i2391[10]
  i2390.baumgarteScale = i2391[11]
  i2390.baumgarteTOIScale = i2391[12]
  i2390.timeToSleep = i2391[13]
  i2390.linearSleepTolerance = i2391[14]
  i2390.angularSleepTolerance = i2391[15]
  i2390.defaultContactOffset = i2391[16]
  i2390.autoSimulation = !!i2391[17]
  i2390.queriesHitTriggers = !!i2391[18]
  i2390.queriesStartInColliders = !!i2391[19]
  i2390.callbacksOnDisable = !!i2391[20]
  i2390.reuseCollisionCallbacks = !!i2391[21]
  i2390.autoSyncTransforms = !!i2391[22]
  var i2393 = i2391[23]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2393[i + 0]) );
  }
  i2390.collisionMatrix = i2392
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.layerId = i2397[1]
  i2396.otherLayerId = i2397[2]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2399 = data
  var i2401 = i2399[0]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2401[i + 0]) );
  }
  i2398.qualityLevels = i2400
  var i2403 = i2399[1]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( i2403[i + 0] );
  }
  i2398.names = i2402
  i2398.shadows = i2399[2]
  i2398.anisotropicFiltering = i2399[3]
  i2398.antiAliasing = i2399[4]
  i2398.lodBias = i2399[5]
  i2398.shadowCascades = i2399[6]
  i2398.shadowDistance = i2399[7]
  i2398.shadowmaskMode = i2399[8]
  i2398.shadowProjection = i2399[9]
  i2398.shadowResolution = i2399[10]
  i2398.softParticles = !!i2399[11]
  i2398.softVegetation = !!i2399[12]
  i2398.activeColorSpace = i2399[13]
  i2398.desiredColorSpace = i2399[14]
  i2398.masterTextureLimit = i2399[15]
  i2398.maxQueuedFrames = i2399[16]
  i2398.particleRaycastBudget = i2399[17]
  i2398.pixelLightCount = i2399[18]
  i2398.realtimeReflectionProbes = !!i2399[19]
  i2398.shadowCascade2Split = i2399[20]
  i2398.shadowCascade4Split = new pc.Vec3( i2399[21], i2399[22], i2399[23] )
  i2398.streamingMipmapsActive = !!i2399[24]
  i2398.vSyncCount = i2399[25]
  i2398.asyncUploadBufferSize = i2399[26]
  i2398.asyncUploadTimeSlice = i2399[27]
  i2398.billboardsFaceCameraPosition = !!i2399[28]
  i2398.shadowNearPlaneOffset = i2399[29]
  i2398.streamingMipmapsMemoryBudget = i2399[30]
  i2398.maximumLODLevel = i2399[31]
  i2398.streamingMipmapsAddAllCameras = !!i2399[32]
  i2398.streamingMipmapsMaxLevelReduction = i2399[33]
  i2398.streamingMipmapsRenderersPerFrame = i2399[34]
  i2398.resolutionScalingFixedDPIFactor = i2399[35]
  i2398.streamingMipmapsMaxFileIORequests = i2399[36]
  i2398.currentQualityLevel = i2399[37]
  return i2398
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2406 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2407 = data
  i2406.xPlacement = i2407[0]
  i2406.yPlacement = i2407[1]
  i2406.xAdvance = i2407[2]
  i2406.yAdvance = i2407[3]
  return i2406
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[39],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[13],"93":[13],"94":[13],"95":[13],"96":[13],"97":[13],"98":[13],"99":[13],"100":[13],"101":[13],"102":[13],"103":[13],"104":[13],"105":[39],"106":[107],"108":[109],"110":[109],"33":[24],"111":[47],"45":[47],"31":[2],"21":[1],"112":[113],"114":[2],"115":[113],"116":[24],"117":[24],"35":[33],"29":[25,24],"118":[24],"34":[33],"119":[24],"120":[24],"121":[24],"122":[24],"123":[24],"124":[24],"125":[24],"54":[24],"126":[24],"30":[25,24],"127":[24],"128":[24],"129":[24],"130":[24],"131":[25,24],"132":[24],"133":[59],"134":[59],"60":[59],"135":[59],"136":[39],"137":[39],"138":[139],"140":[39],"141":[24],"142":[107,24],"27":[24,25],"143":[24],"144":[25,24],"145":[107],"146":[25,24],"147":[24],"148":[113]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","_Project.Code.Core.Character.CharacterInstaller","_Project.Code.Core.Character.Mover","_Project.Code.Core.Collision.OverlapCollisionDetector","_Project.Code.Core.Character.CharacterAnimator","_Project.Code.Core.Items.Inventory.ItemInventory","UnityEngine.Rigidbody2D","UnityEngine.AudioSource","UnityEngine.CircleCollider2D","_Project.Code.Core.Character.TopDownAnimator","_Project.Code.Core.Character.TopDownAnimationConfig","UnityEngine.Animator","UnityEngine.AudioClip","UnityEditor.Animations.AnimatorController","_Project.Code.Core.Character.SortingGroupAnimator","MusicItemAdded","_Project.Code.Core.Items.Inventory.ColumnInventoryView","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.UI.RawImage","_Project.Code.Selling.Customer","_Project.Code.Selling.Line.BubbleView","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","_Project.Code.Core.Items.Item","_Project.Code.Core.Harvesting.Field","_Project.Code.Core.Items.InventoryInitializer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","_Project.Code.Camera.Follower","_Project.Code.Camera.CameraInBordersZoom","_Project.Code.Entry.EntryPoint","VariableJoystick","_Project.Code.Services.CoroutineRunner.CoroutineRunner","_Project.Code.Core.Buyables.EndScreenShower","_Project.Code.Core.Buyables.Buyable","UnityEngine.GameObject","_Project.Code.Tutorial.Tutorial","UnityEngine.EdgeCollider2D","ArrowAnimator","UnityEngine.UI.Mask","_Project.Code.Core.Buyables.CoinsViewUpdater","_Project.Code.Core.Animations.BreathAnimation","CTA","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PrintCopacity","_Project.Code.Core.Buyables.InventorViewDestroyer","_Project.Code.Core.Workers.Worker","_Project.Code.Core.PopcornFarm.CornFarm","_Project.Code.Selling.Line.Line","_Project.Code.Selling.Seller","UnityEngine.Font","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","_Project.Code.Entry.Entry","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "SpongeBob-Playable";

Deserializers.lunaInitializationTime = "04/21/2025 08:42:21";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "9f230636-6e21-4107-abba-4e36e6d17356";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

