if ( TRACE ) { TRACE( JSON.parse( '["_Project.Code.Camera.CameraInBordersZoom#init","_Project.Code.Camera.CameraInBordersZoom#Awake","_Project.Code.Camera.CameraInBordersZoom#Update","_Project.Code.Camera.CameraInBordersZoom#CalculateFactor","_Project.Code.Camera.CameraInBordersZoom#GetScreenSizeInWorld","_Project.Code.Camera.Follower#Update","_Project.Code.Core.Animations.BreathAnimation#init","_Project.Code.Core.Animations.BreathAnimation#Animate","_Project.Code.Core.Animations.BreathAnimation#OnEnable","_Project.Code.Core.Animations.BreathAnimation#OnDisable","_Project.Code.Core.Buyables.CoinsViewUpdater#init","_Project.Code.Core.Buyables.CoinsViewUpdater#Awake","_Project.Code.Core.Buyables.CoinsViewUpdater#OnCoinRemoved","_Project.Code.Core.Buyables.CoinsViewUpdater#OnCoinAdded","_Project.Code.Core.Buyables.CoinsViewUpdater#UpdateView","_Project.Code.Core.Buyables.EndScreenShower#init","_Project.Code.Core.Buyables.EndScreenShower#Start","_Project.Code.Core.Buyables.EndScreenShower#Update","_Project.Code.Core.Buyables.EndScreenShower#EndGame","_Project.Code.Core.Buyables.EndScreenShower#EndMusic","_Project.Code.Core.Items.Inventory.BaseInventoryView#ItemsCount#get","_Project.Code.Core.Items.Inventory.BaseInventoryView#OnEnable","_Project.Code.Core.Items.Inventory.BaseInventoryView#OnDisable","_Project.Code.Core.Character.CharacterAnimator#init","_Project.Code.Core.Character.CharacterAnimator#Update","_Project.Code.Core.Character.CharacterInstaller#Start","_Project.Code.Core.Character.CharacterInstaller#Update","_Project.Code.Core.Character.DirectedAnimation#init","_Project.Code.Core.Character.DirectedAnimation#equals","_Project.Code.Core.Character.Mover#init","_Project.Code.Core.Character.Mover#Direction#get","_Project.Code.Core.Character.Mover#init","_Project.Code.Core.Character.Mover#Start","_Project.Code.Core.Character.Mover#Init","_Project.Code.Core.Character.Mover#Update","_Project.Code.Core.Character.Mover#FixedUpdate","_Project.Code.Core.Character.SortingGroupAnimator#OnValidate","_Project.Code.Core.Character.SortingGroupAnimator#Awake","_Project.Code.Core.Character.SortingGroupAnimator#Update","_Project.Code.Core.Character.TopDownAnimationConfig#init","_Project.Code.Core.Character.TopDownAnimator#init","_Project.Code.Core.Character.TopDownAnimator#Update","_Project.Code.Core.Character.TopDownAnimator#OnDisable","_Project.Code.Core.Character.TopDownAnimator#Flip","_Project.Code.Core.Character.TopDownAnimator#GetClosestAnimation","_Project.Code.Core.Harvesting.Field#init","_Project.Code.Core.Harvesting.Field#CanHarvest#get","_Project.Code.Core.Harvesting.Field#init","_Project.Code.Core.Harvesting.Field#Start","_Project.Code.Core.Harvesting.Field#OnDestroy","_Project.Code.Core.Harvesting.Field#Harvest","_Project.Code.Core.Harvesting.Field#Abort","_Project.Code.Core.Harvesting.Field#SetState","_Project.Code.Core.Harvesting.FieldsDropper#ctor","_Project.Code.Core.Harvesting.FieldsDropper#OnHarvested","_Project.Code.Core.Harvesting.Harvester#IsHarvesting#get","_Project.Code.Core.Harvesting.Harvester#ctor","_Project.Code.Core.Harvesting.Harvester#Dispose","_Project.Code.Core.Harvesting.Harvester#OnTriggered","_Project.Code.Core.Harvesting.Harvester#Cleanup","_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#ctor","_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#Dispose","_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#OnTriggered","_Project.Code.Core.Items.Handlers.ItemCollisionHandler#ctor","_Project.Code.Core.Items.Handlers.ItemCollisionHandler#Dispose","_Project.Code.Core.Items.Handlers.ItemCollisionHandler#OnTriggered","_Project.Code.Core.Items.Inventory.InventoryProvider#ctor","_Project.Code.Core.Items.Inventory.InventoryProvider#HasStorage","_Project.Code.Core.Items.Inventory.InventoryProvider#TryGetStorage","_Project.Code.Core.Items.Inventory.StackInventoryView#init","_Project.Code.Core.Items.Inventory.StackInventoryView#OnEnable","_Project.Code.Core.Items.Inventory.StackInventoryView#OnDisable","_Project.Code.Core.Items.Inventory.StackInventoryView#OnRemoved","_Project.Code.Core.Items.Inventory.StackInventoryView#OnAdded","_Project.Code.Core.Items.Inventory.TableStorageUpdater#init","_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnEnable","_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnDisable","_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnAdded","_Project.Code.Core.Items.Inventory.TableStorageUpdater#ShowCustomers","_Project.Code.Core.Items.InventoryInitializer#Start","_Project.Code.Core.Items.Item#Type#get","_Project.Code.Core.Items.Item#OnEnable","_Project.Code.Core.Items.Item#OnDisable","_Project.Code.Core.Items.Transfering.InventoryTransferer#HasConnection#get","_Project.Code.Core.Items.Transfering.InventoryTransferer#Connection#get","_Project.Code.Core.Items.Transfering.InventoryTransferer#Connection#set","_Project.Code.Core.Items.Transfering.InventoryTransferer#ctor","_Project.Code.Core.Items.Transfering.InventoryTransferer#HasConnectionFor","_Project.Code.Core.Items.Transfering.InventoryTransferer#TrySetConnection","_Project.Code.Core.Items.Transfering.InventoryTransferer#Disconnect","_Project.Code.Core.Items.Transfering.InventoryTransferer#TransferingAll","_Project.Code.Core.Items.Transfering.InventoryTransferer#CanTransfer","_Project.Code.Core.Items.Transfering.InventoryTransferer#OnDisconnected","_Project.Code.Core.Items.Transfering.InventoryTransferer#OnConnected","_Project.Code.Core.Items.Transfering.ItemTransferer#init","_Project.Code.Core.Items.Transfering.ItemTransferer#TryTransfer","_Project.Code.Core.Items.Transfering.ItemTransferer#Transfer","_Project.Code.Core.Items.Transfering.ItemTransferer#CanTransfer","_Project.Code.Core.Items.Transfering.ItemTransferer#GetReservedCount","_Project.Code.Core.Items.Transfering.Transfer#ctor","_Project.Code.Core.Items.Transfering.TransferFactory#TryCreate","_Project.Code.Core.Items.Transfering.TransferFactory#DoItemTypesMatch","_Project.Code.Core.Items.Transfering.TransferFactory#CanGet","_Project.Code.Core.Items.Transfering.TransferFactory#CanGive","_Project.Code.Core.PopcornFarm.CornFarm#Start","_Project.Code.Core.PopcornFarm.CornFarm#OnEnable","_Project.Code.Core.PopcornFarm.CornFarm#OnDisable","_Project.Code.Core.PopcornFarm.CornFarm#OnAdded","_Project.Code.Core.PopcornFarm.CornFarm#Update","_Project.Code.Core.PopcornFarm.CornFarm#ProduceCorn","_Project.Code.Core.PopcornFarm.CornFarm#AnimateCircle","_Project.Code.Core.Workers.Worker#Awake","_Project.Code.Core.Workers.Worker#Update","_Project.Code.Core.Workers.Worker#OnEnable","_Project.Code.Core.Workers.Worker#OnDisable","_Project.Code.Core.Workers.Worker#Working","_Project.Code.Entry.Entry#Awake","_Project.Code.Entry.Entry#OnDestroy","_Project.Code.Entry.EntryPoint#Awake","_Project.Code.Entry.EntryPoint#OnDestroy","_Project.Code.Entry.EntryPoint#GetFields","_Project.Code.Selling.Customer#Awake","_Project.Code.Selling.Customer#Init","_Project.Code.Selling.Customer#OnEnable","_Project.Code.Selling.Customer#OnDisable","_Project.Code.Selling.Line.BubbleView#SetText","_Project.Code.Selling.Line.BubbleView#OnEnable","_Project.Code.Selling.Seller#Awake","_Project.Code.Selling.Seller#Update","_Project.Code.Selling.Seller#Serve","_Project.Code.Selling.Seller#GetPaid","_Project.Code.Selling.Seller#OnServed","_Project.Code.Services.ItemsCreation.Dropper#ctor","_Project.Code.Services.ItemsCreation.Dropper#CreateDrop","_Project.Code.Services.ItemsCreation.Dropper#Animate","_Project.Code.Services.ItemsCreation.ItemsCreator#ctor","_Project.Code.Services.ItemsCreation.ItemsCreator#Create","_Project.Code.Services.ServiceLocator.L#Container#get","_Project.Code.Services.ServiceLocator.L#Container#set","_Project.Code.Services.ServiceLocator.L#Init","_Project.Code.Services.ServiceLocator.L#Reg","_Project.Code.Services.ServiceLocator.L#Resolve","_Project.Code.Tutorial.StorageTrashView#OnEnable","_Project.Code.Tutorial.StorageTrashView#OnDisable","_Project.Code.Tutorial.StorageTrashView#OnRemoved","_Project.Code.Tutorial.StorageTrashView#OnAdded","_Project.Code.Tutorial.Tutorial#Start","_Project.Code.Tutorial.Tutorial#TutorialCoroutine","_Project.Code.Tutorial.WaitForJoystickMove#keepWaiting#get","_Project.Code.Tutorial.WaitForJoystickMove#ctor","_Project.Code.Tutorial.WaitForJoystickStop#keepWaiting#get","_Project.Code.Tutorial.WaitForJoystickStop#ctor","_Project.Code.UI.CoinsCounterUpdater#init","_Project.Code.UI.CoinsCounterUpdater#OnEnable","_Project.Code.UI.CoinsCounterUpdater#OnDisable","_Project.Code.UI.CoinsCounterUpdater#OnCoinRemoved","_Project.Code.UI.CoinsCounterUpdater#OnCoinAdded","_Project.Code.UI.CoinsCounterUpdater#UpdateView","ArrowAnimator#Start","ArrowAnimator#Update","Assets.CourseGame.Develop.DI.DIContainer#init","Assets.CourseGame.Develop.DI.DIContainer#ctor","Assets.CourseGame.Develop.DI.DIContainer#$ctor1","Assets.CourseGame.Develop.DI.DIContainer#RegisterAsSingle","Assets.CourseGame.Develop.DI.DIContainer#IsAlreadyRegister","Assets.CourseGame.Develop.DI.DIContainer#Resolve","Assets.CourseGame.Develop.DI.DIContainer#Initialize","Assets.CourseGame.Develop.DI.DIContainer#Dispose","Assets.CourseGame.Develop.DI.DIContainer#CreateFrom","Assets.CourseGame.Develop.DI.DIContainer.Registration#$ctor1","Assets.CourseGame.Develop.DI.DIContainer.Registration#ctor","Assets.CourseGame.Develop.DI.DIContainer.Registration#NonLazy","CTA#Click","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#OnPointerUp","Joystick#ScreenPointToAnchoredPosition","GlobalEvents#init","GlobalEvents#SendOnAddCoin","GlobalEvents#SendOnAddCorn","GlobalEvents#SendOnAddPopcorn","GlobalEvents#SendOnEndScreen","MusicItemAdded#Awake","MusicItemAdded#MusicCoin","MusicItemAdded#MusicCorn","MusicItemAdded#MusicPopcorn","PrintCopacity#Update","_Project.Code.Core.Buyables.Buyable#IsBought#get","_Project.Code.Core.Buyables.Buyable#init","_Project.Code.Core.Buyables.Buyable#Awake","_Project.Code.Core.Buyables.Buyable#OnEnable","_Project.Code.Core.Buyables.Buyable#OnAdded","_Project.Code.Core.Buyables.Buyable#OnDisable","_Project.Code.Core.Buyables.Buyable#GetCapacity","_Project.Code.Core.Buyables.Buyable#Buy","_Project.Code.Core.Buyables.InventorViewDestroyer#OnRemoved","_Project.Code.Core.Buyables.InventorViewDestroyer#OnAdded","_Project.Code.Core.Collision.CollisionDetector#OnTriggerEnter2D","_Project.Code.Core.Collision.CollisionDetector#OnTriggerStay2D","_Project.Code.Core.Collision.CollisionDetector#OnTriggerExit2D","_Project.Code.Core.Collision.CollisionDetector#Handle","_Project.Code.Core.Collision.OverlapCollisionDetector#init","_Project.Code.Core.Collision.OverlapCollisionDetector#FixedUpdate","_Project.Code.Core.Collision.OverlapCollisionDetector#DetectCollisions","_Project.Code.Core.Collision.OverlapCollisionDetector#Handle","_Project.Code.Core.Collision.OverlapCollisionDetector#OnDrawGizmos","_Project.Code.Core.Items.Inventory.ColumnInventoryView#Height#get","_Project.Code.Core.Items.Inventory.ColumnInventoryView#init","_Project.Code.Core.Items.Inventory.ColumnInventoryView#Awake","_Project.Code.Core.Items.Inventory.ColumnInventoryView#OnRemoved","_Project.Code.Core.Items.Inventory.ColumnInventoryView#OnAdded","_Project.Code.Core.Items.Inventory.ItemInventory#ItemType#get","_Project.Code.Core.Items.Inventory.ItemInventory#InventoryType#get","_Project.Code.Core.Items.Inventory.ItemInventory#Count#get","_Project.Code.Core.Items.Inventory.ItemInventory#IsEmpty#get","_Project.Code.Core.Items.Inventory.ItemInventory#RemainingCapacity#get","_Project.Code.Core.Items.Inventory.ItemInventory#Capacity#get","_Project.Code.Core.Items.Inventory.ItemInventory#init","_Project.Code.Core.Items.Inventory.ItemInventory#CanAdd","_Project.Code.Core.Items.Inventory.ItemInventory#CanGet","_Project.Code.Core.Items.Inventory.ItemInventory#Add","_Project.Code.Core.Items.Inventory.ItemInventory#SetCapacity","_Project.Code.Core.Items.Inventory.ItemInventory#Get","_Project.Code.Core.Items.Inventory.ItemInventory#TryGet","_Project.Code.Core.Items.Inventory.ItemInventory#SetType","_Project.Code.Core.Items.Inventory.ItemInventory#SetOperation","_Project.Code.Entry.StorageFabric#CreateNew","_Project.Code.Entry.StorageFabric#Instantiate","_Project.Code.Selling.Line.Line#init","_Project.Code.Selling.Line.Line#OnEnable","_Project.Code.Selling.Line.Line#Init","_Project.Code.Selling.Line.Line#CreateNewCustomer","_Project.Code.Selling.Line.Line#TryGetCustomer","_Project.Code.Selling.Line.Line#OnCustomerServed","_Project.Code.Selling.Line.Line#RequestCreation$1","_Project.Code.Selling.Line.Line#RequestCreation","_Project.Code.Selling.Line.Line#CreatingCustomers","_Project.Code.Selling.Line.Line#MoveCustomers","_Project.Code.Services.CoroutineRunner.CoroutineRunner#Launch","_Project.Code.Services.CoroutineRunner.CoroutineRunner#Stop","_Project.Code.Services.Input.KeyboardMoveInput#Direction#get","_Project.Code.Services.Input.MoveInput#Direction#get","_Project.Code.Services.Input.MoveInput#init","_Project.Code.Services.Input.MoveInput#ctor","_Project.Code.Services.Input.MoveInput#GetDirection","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#UpdateFixedPosition","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput"]' ) ); }
/**
 * @version 1.0.9254.22179
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*_Project.Code.Camera.CameraInBordersZoom start.*/
    Bridge.define("_Project.Code.Camera.CameraInBordersZoom", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _borders: null,
            _defaultCameraSize: 0,
            _camera: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#init", this ); }

                this._defaultCameraSize = 8;
            }
        },
        methods: {
            /*_Project.Code.Camera.CameraInBordersZoom.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#Awake", this ); }

                this._camera = UnityEngine.Camera.main;
            },
            /*_Project.Code.Camera.CameraInBordersZoom.Awake end.*/

            /*_Project.Code.Camera.CameraInBordersZoom.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#Update", this ); }

                var screenSize = this.GetScreenSizeInWorld();
                var boundsSize = UnityEngine.Vector2.FromVector3(this._borders.bounds.halfExtents.$clone().scale( 2 ).$clone());

                var factor = this.CalculateFactor(screenSize.$clone(), boundsSize.$clone());

                if (factor > 1) {
                    this._camera.orthographicSize /= factor;
                    //_virtualCamera.m_Lens.OrthographicSize -= 0.1f;
                }

                var size = this._camera.orthographicSize;

                if (size < this._defaultCameraSize) {
                    var nextSize = size + 0.5;
                    var multiplier = nextSize / size;

                    if (this.CalculateFactor(screenSize.$clone().scale( multiplier ), boundsSize.$clone()) > 1) {
                        return;
                    }

                    this._camera.orthographicSize = nextSize;
                }
            },
            /*_Project.Code.Camera.CameraInBordersZoom.Update end.*/

            /*_Project.Code.Camera.CameraInBordersZoom.CalculateFactor start.*/
            CalculateFactor: function (screenSize, boundsSize) {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#CalculateFactor", this ); }

                return screenSize.x / boundsSize.x;
            },
            /*_Project.Code.Camera.CameraInBordersZoom.CalculateFactor end.*/

            /*_Project.Code.Camera.CameraInBordersZoom.GetScreenSizeInWorld start.*/
            GetScreenSizeInWorld: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#GetScreenSizeInWorld", this ); }

                var topLeft = this._camera.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(new pc.Vec2( 0, UnityEngine.Screen.height )));
                var bottomRight = this._camera.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(new pc.Vec2( UnityEngine.Screen.width, 0 )));

                return new pc.Vec2( bottomRight.x - topLeft.x, topLeft.y - bottomRight.y );
            },
            /*_Project.Code.Camera.CameraInBordersZoom.GetScreenSizeInWorld end.*/


        }
    });
    /*_Project.Code.Camera.CameraInBordersZoom end.*/

    /*_Project.Code.Camera.Follower start.*/
    Bridge.define("_Project.Code.Camera.Follower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _speed: 0,
            _target: null
        },
        methods: {
            /*_Project.Code.Camera.Follower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.Follower#Update", this ); }

                var targetPosition = pc.Vec3.moveTowards( this.transform.position, this._target.position, this._speed * UnityEngine.Time.deltaTime );

                targetPosition.z = this.transform.position.z;

                this.transform.position = targetPosition.$clone();
            },
            /*_Project.Code.Camera.Follower.Update end.*/


        }
    });
    /*_Project.Code.Camera.Follower end.*/

    /*_Project.Code.Core.Animations.BreathAnimation start.*/
    Bridge.define("_Project.Code.Core.Animations.BreathAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _scaleFactor: 0,
            _tweener: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.BreathAnimation#init", this ); }

                this._scaleFactor = 1.2;
            }
        },
        methods: {
            /*_Project.Code.Core.Animations.BreathAnimation.Animate start.*/
            Animate: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.BreathAnimation#Animate", this ); }

                this._tweener = DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( this._scaleFactor ), 0.5), DG.Tweening.Ease.Linear), -1, DG.Tweening.LoopType.Yoyo));
            },
            /*_Project.Code.Core.Animations.BreathAnimation.Animate end.*/

            /*_Project.Code.Core.Animations.BreathAnimation.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.BreathAnimation#OnEnable", this ); }

                this.Animate();
            },
            /*_Project.Code.Core.Animations.BreathAnimation.OnEnable end.*/

            /*_Project.Code.Core.Animations.BreathAnimation.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.BreathAnimation#OnDisable", this ); }

                DG.Tweening.TweenExtensions.Kill(this._tweener);
                this._tweener = null;
            },
            /*_Project.Code.Core.Animations.BreathAnimation.OnDisable end.*/


        }
    });
    /*_Project.Code.Core.Animations.BreathAnimation end.*/

    /*_Project.Code.Tutorial.IBuyable start.*/
    Bridge.define("_Project.Code.Tutorial.IBuyable", {
        $kind: 3
    });
    /*_Project.Code.Tutorial.IBuyable end.*/

    /*_Project.Code.Core.Buyables.CoinsViewUpdater start.*/
    Bridge.define("_Project.Code.Core.Buyables.CoinsViewUpdater", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _text: null,
            _inventory: null,
            _counter: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#init", this ); }

                this._counter = 0;
            }
        },
        methods: {
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#Awake", this ); }

                this._inventory.addAdded(Bridge.fn.cacheBind(this, this.OnCoinAdded));
                this._inventory.addRemoved(Bridge.fn.cacheBind(this, this.OnCoinRemoved));
                this.UpdateView();
            },
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.Awake end.*/

            /*_Project.Code.Core.Buyables.CoinsViewUpdater.OnCoinRemoved start.*/
            OnCoinRemoved: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#OnCoinRemoved", this ); }

                this._counter = (this._counter - 1) | 0;
                this.UpdateView();
            },
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.OnCoinRemoved end.*/

            /*_Project.Code.Core.Buyables.CoinsViewUpdater.OnCoinAdded start.*/
            OnCoinAdded: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#OnCoinAdded", this ); }

                this._counter = (this._counter + 1) | 0;
                this.UpdateView();
            },
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.OnCoinAdded end.*/

            /*_Project.Code.Core.Buyables.CoinsViewUpdater.UpdateView start.*/
            UpdateView: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#UpdateView", this ); }

                this._text.text = Bridge.toString(this._counter);
            },
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.UpdateView end.*/


        }
    });
    /*_Project.Code.Core.Buyables.CoinsViewUpdater end.*/

    /*_Project.Code.Core.Buyables.EndScreenShower start.*/
    Bridge.define("_Project.Code.Core.Buyables.EndScreenShower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _fieldBuyable: null,
            _ui: null,
            _moveInput: null,
            joystick: null,
            _audioSource: null,
            _isFinished: false,
            timerCoroutine: null,
            timer: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#init", this ); }

                this.timer = 0.0;
            }
        },
        methods: {
            /*_Project.Code.Core.Buyables.EndScreenShower.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#Start", this ); }

                GlobalEvents.OnEndScreenEvent.AddListener(Bridge.fn.cacheBind(this, this.EndMusic));
            },
            /*_Project.Code.Core.Buyables.EndScreenShower.Start end.*/

            /*_Project.Code.Core.Buyables.EndScreenShower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#Update", this ); }

                if (this._moveInput.isMoving) {
                }

                if (this._isFinished) {
                    return;
                }

                if (this._fieldBuyable.IsBought) {
                    this._isFinished = true;
                    this.StartCoroutine$1(this.EndGame());
                }



                /* if (_moveInput.isMoving)
                {
                   // Сброс таймера при движении
                   if (timerCoroutine != null)
                   {
                       StopCoroutine(timerCoroutine);
                       timerCoroutine = null;
                       timer = 0f; // Сброс времени
                   }
                }
                else
                {
                   // Запуск или продолжение таймера при остановке
                   if (timerCoroutine == null)
                   {
                       timerCoroutine = StartCoroutine(CountdownTimer());
                   }
                }*/
            },
            /*_Project.Code.Core.Buyables.EndScreenShower.Update end.*/

            /*_Project.Code.Core.Buyables.EndScreenShower.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#EndGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(3.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._moveInput._speed = 0.0;
                                        this.joystick.SetActive(false);
                                        this._ui.SetActive(true);
                                        GlobalEvents.SendOnEndScreen();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Buyables.EndScreenShower.EndGame end.*/

            /*_Project.Code.Core.Buyables.EndScreenShower.EndMusic start.*/
            EndMusic: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#EndMusic", this ); }

                this._audioSource.Play();
            },
            /*_Project.Code.Core.Buyables.EndScreenShower.EndMusic end.*/


        }
    });
    /*_Project.Code.Core.Buyables.EndScreenShower end.*/

    /*_Project.Code.Core.Items.Inventory.BaseInventoryView start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.BaseInventoryView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _inventory: null
        },
        props: {
            ItemsCount: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.BaseInventoryView#ItemsCount#get", this ); }

                    return this._inventory.Count;
                }
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.BaseInventoryView.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.BaseInventoryView#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._inventory, null)) {
                    return;
                }

                this._inventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                this._inventory.addRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
            },
            /*_Project.Code.Core.Items.Inventory.BaseInventoryView.OnEnable end.*/

            /*_Project.Code.Core.Items.Inventory.BaseInventoryView.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.BaseInventoryView#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._inventory, null)) {
                    return;
                }

                this._inventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                this._inventory.removeRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
            },
            /*_Project.Code.Core.Items.Inventory.BaseInventoryView.OnDisable end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.BaseInventoryView end.*/

    /*_Project.Code.Core.Character.CharacterAnimator start.*/
    Bridge.define("_Project.Code.Core.Character.CharacterAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _walkAnimator: null,
            _idleAnimator: null,
            _backpackAnimator: null,
            Direction: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterAnimator#init", this ); }

                this.Direction = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*_Project.Code.Core.Character.CharacterAnimator.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterAnimator#Update", this ); }

                var isMoving = this.Direction.length() > 0.1;

                this._walkAnimator.enabled = isMoving;
                this._idleAnimator.enabled = !isMoving;

                //if (!isMoving) return;

                this._walkAnimator.Direction = this.Direction.$clone();
                this._idleAnimator.Direction = this._walkAnimator.Direction.$clone();
                this._backpackAnimator.Direction = this._idleAnimator.Direction.$clone();
            },
            /*_Project.Code.Core.Character.CharacterAnimator.Update end.*/


        }
    });
    /*_Project.Code.Core.Character.CharacterAnimator end.*/

    /*_Project.Code.Core.Character.CharacterInstaller start.*/
    Bridge.define("_Project.Code.Core.Character.CharacterInstaller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _mover: null,
            _castingDetector: null,
            _animator: null,
            _storages: null
        },
        methods: {
            /*_Project.Code.Core.Character.CharacterInstaller.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterInstaller#Start", this ); }

                var input = _Project.Code.Services.ServiceLocator.L.Resolve(_Project.Code.Services.Input.MoveInput);
                var coroutineRunner = _Project.Code.Services.ServiceLocator.L.Resolve(_Project.Code.Services.CoroutineRunner.CoroutineRunner);

                this._mover.Init(input);

                var provider = new _Project.Code.Core.Items.Inventory.InventoryProvider(this._storages);

                var harvester = new _Project.Code.Core.Harvesting.Harvester(this._castingDetector);

                var itemTransferer = new _Project.Code.Core.Items.Transfering.ItemTransferer();
                var inventoryTransferer = new _Project.Code.Core.Items.Transfering.InventoryTransferer(coroutineRunner);

                var itemHandler = new _Project.Code.Core.Items.Handlers.ItemCollisionHandler(this._castingDetector, provider, itemTransferer);
                var inventoryHandler = new _Project.Code.Core.Items.Handlers.InventoryCollisionHandler(this._castingDetector, provider, inventoryTransferer);
            },
            /*_Project.Code.Core.Character.CharacterInstaller.Start end.*/

            /*_Project.Code.Core.Character.CharacterInstaller.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterInstaller#Update", this ); }

                this._animator.Direction = this._mover.Direction.$clone();
            },
            /*_Project.Code.Core.Character.CharacterInstaller.Update end.*/


        }
    });
    /*_Project.Code.Core.Character.CharacterInstaller end.*/

    /*_Project.Code.Core.Character.DirectedAnimation start.*/
    Bridge.define("_Project.Code.Core.Character.DirectedAnimation", {
        fields: {
            Clip: null,
            Direction: null,
            Flip: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.DirectedAnimation#init", this ); }

                this.Direction = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*_Project.Code.Core.Character.DirectedAnimation.equals start.*/
            equals: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.DirectedAnimation#equals", this ); }

                var animation;
                return ((animation = Bridge.as(obj, _Project.Code.Core.Character.DirectedAnimation))) != null && pc.Vec2.equals( this.Direction, animation.Direction ) && this.Flip === animation.Flip;
            },
            /*_Project.Code.Core.Character.DirectedAnimation.equals end.*/


        },
        overloads: {
            "Equals(object)": "equals"
        }
    });
    /*_Project.Code.Core.Character.DirectedAnimation end.*/

    /*_Project.Code.Core.Character.Mover start.*/
    Bridge.define("_Project.Code.Core.Character.Mover", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                SpeedScaleFactor: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#init", this ); }

                    this.SpeedScaleFactor = 0.1;
                }
            }
        },
        fields: {
            _speed: 0,
            _rigidbody: null,
            _footstepAudioSource: null,
            _input: null,
            previousPosition: null,
            isMoving: false
        },
        props: {
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#Direction#get", this ); }

                    return this._input._Project$Code$Services$Input$IMoveInput$Direction.$clone();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#init", this ); }

                this.previousPosition = new UnityEngine.Vector2();
                this._speed = 10.0;
            }
        },
        methods: {
            /*_Project.Code.Core.Character.Mover.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#Start", this ); }

                this.previousPosition = this._rigidbody.position.$clone();
            },
            /*_Project.Code.Core.Character.Mover.Start end.*/

            /*_Project.Code.Core.Character.Mover.Init start.*/
            Init: function (input) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#Init", this ); }

                this._input = input;
            },
            /*_Project.Code.Core.Character.Mover.Init end.*/

            /*_Project.Code.Core.Character.Mover.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#Update", this ); }

                if (this.isMoving && !this._footstepAudioSource.isPlaying) {
                    this._footstepAudioSource.Play();
                } else if (!this.isMoving && this._footstepAudioSource.isPlaying) {
                    this._footstepAudioSource.Stop();
                }
            },
            /*_Project.Code.Core.Character.Mover.Update end.*/

            /*_Project.Code.Core.Character.Mover.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#FixedUpdate", this ); }

                if (this._input == null) {
                    this._input = new _Project.Code.Services.Input.KeyboardMoveInput();
                }

                var targetPosition = this._rigidbody.position.$clone().add( this.Direction.$clone().scale( (this._speed * _Project.Code.Core.Character.Mover.SpeedScaleFactor * UnityEngine.Time.fixedDeltaTime) ) );

                this._rigidbody.MovePosition(targetPosition);






                var targetPosition_2 = this._rigidbody.position.$clone().add( this.Direction.$clone().scale( (this._speed * _Project.Code.Core.Character.Mover.SpeedScaleFactor * UnityEngine.Time.fixedDeltaTime) ) );
                this._rigidbody.MovePosition(targetPosition_2);

                this.isMoving = !pc.Vec2.equals( this._rigidbody.position, this.previousPosition );
                this.previousPosition = this._rigidbody.position.$clone();
            },
            /*_Project.Code.Core.Character.Mover.FixedUpdate end.*/


        }
    });
    /*_Project.Code.Core.Character.Mover end.*/

    /*_Project.Code.Core.Character.SortingGroupAnimator start.*/
    Bridge.define("_Project.Code.Core.Character.SortingGroupAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _order: 0,
            _sortingGroup: null
        },
        methods: {
            /*_Project.Code.Core.Character.SortingGroupAnimator.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.SortingGroupAnimator#OnValidate", this ); }

                this._sortingGroup = this.GetComponent(UnityEngine.Rendering.SortingGroup);
                this._sortingGroup.sortingOrder = this._order;
            },
            /*_Project.Code.Core.Character.SortingGroupAnimator.OnValidate end.*/

            /*_Project.Code.Core.Character.SortingGroupAnimator.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.SortingGroupAnimator#Awake", this ); }

                this._sortingGroup = this.GetComponent(UnityEngine.Rendering.SortingGroup);
            },
            /*_Project.Code.Core.Character.SortingGroupAnimator.Awake end.*/

            /*_Project.Code.Core.Character.SortingGroupAnimator.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.SortingGroupAnimator#Update", this ); }

                this._sortingGroup.sortingOrder = this._order;
            },
            /*_Project.Code.Core.Character.SortingGroupAnimator.Update end.*/


        }
    });
    /*_Project.Code.Core.Character.SortingGroupAnimator end.*/

    /*_Project.Code.Core.Character.TopDownAnimationConfig start.*/
    Bridge.define("_Project.Code.Core.Character.TopDownAnimationConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            Animations: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimationConfig#init", this ); }

                this.Animations = function (_o1) {
                        var $t;
                        _o1.add(($t = new _Project.Code.Core.Character.DirectedAnimation(), $t.Clip = null, $t.Direction = new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.DirectedAnimation(), $t.Clip = null, $t.Direction = new pc.Vec2( -pc.Vec2.RIGHT.x, pc.Vec2.RIGHT.y ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.DirectedAnimation(), $t.Clip = null, $t.Direction = pc.Vec2.UP.clone(), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.DirectedAnimation(), $t.Clip = null, $t.Direction = pc.Vec2.RIGHT.clone(), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.DirectedAnimation(), $t.Clip = null, $t.Direction = new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ).add( new pc.Vec2( -pc.Vec2.RIGHT.x, pc.Vec2.RIGHT.y ) ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.DirectedAnimation(), $t.Clip = null, $t.Direction = pc.Vec2.UP.clone().add( new pc.Vec2( -pc.Vec2.RIGHT.x, pc.Vec2.RIGHT.y ) ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.DirectedAnimation(), $t.Clip = null, $t.Direction = pc.Vec2.UP.clone().add( pc.Vec2.RIGHT.clone() ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.DirectedAnimation(), $t.Clip = null, $t.Direction = new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ).add( pc.Vec2.RIGHT.clone() ), $t));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(_Project.Code.Core.Character.DirectedAnimation)).ctor());
            }
        }
    });
    /*_Project.Code.Core.Character.TopDownAnimationConfig end.*/

    /*_Project.Code.Core.Character.TopDownAnimator start.*/
    Bridge.define("_Project.Code.Core.Character.TopDownAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _config: null,
            _animator: null,
            _flipBody: null,
            _currentAnimation: null,
            Direction: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#init", this ); }

                this.Direction = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*_Project.Code.Core.Character.TopDownAnimator.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#Update", this ); }

                var animation = this.GetClosestAnimation(this.Direction);

                if (animation == null || animation.equals(this._currentAnimation)) {
                    return;
                }

                this.Flip(animation.Flip);

                this._animator.Play$2(animation.Clip.name);

                this._currentAnimation = animation;
            },
            /*_Project.Code.Core.Character.TopDownAnimator.Update end.*/

            /*_Project.Code.Core.Character.TopDownAnimator.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#OnDisable", this ); }

                this._animator.Rebind();
                this._animator.Update(0);

                this._animator.SetTrigger$1("Reset");
            },
            /*_Project.Code.Core.Character.TopDownAnimator.OnDisable end.*/

            /*_Project.Code.Core.Character.TopDownAnimator.Flip start.*/
            Flip: function (flip) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#Flip", this ); }

                if (UnityEngine.Component.op_Equality(this._flipBody, null)) {
                    return;
                }

                this._flipBody.localScale = flip ? new pc.Vec3( -1, 1, 1 ) : new pc.Vec3( 1, 1, 1 );
            },
            /*_Project.Code.Core.Character.TopDownAnimator.Flip end.*/

            /*_Project.Code.Core.Character.TopDownAnimator.GetClosestAnimation start.*/
            GetClosestAnimation: function (direction) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#GetClosestAnimation", this ); }

                var closest = System.Linq.Enumerable.from(this._config.Animations, _Project.Code.Core.Character.DirectedAnimation).orderByDescending(function (x) {
                        return direction.clone().normalize().dot( x.Direction.clone().normalize() );
                    }).first();

                return closest;
            },
            /*_Project.Code.Core.Character.TopDownAnimator.GetClosestAnimation end.*/


        }
    });
    /*_Project.Code.Core.Character.TopDownAnimator end.*/

    /*_Project.Code.Core.Collision.ICollisionDetector start.*/
    Bridge.define("_Project.Code.Core.Collision.ICollisionDetector", {
        $kind: 3
    });
    /*_Project.Code.Core.Collision.ICollisionDetector end.*/

    /*_Project.Code.Core.Collision.CollisionType start.*/
    Bridge.define("_Project.Code.Core.Collision.CollisionType", {
        $kind: 6,
        statics: {
            fields: {
                Enter: 0,
                Stay: 1,
                Exit: 2
            }
        }
    });
    /*_Project.Code.Core.Collision.CollisionType end.*/

    /*_Project.Code.Core.Harvesting.Field start.*/
    Bridge.define("_Project.Code.Core.Harvesting.Field", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                IsAbortive: false
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#init", this ); }

                    this.IsAbortive = false;
                }
            }
        },
        fields: {
            _state: 0,
            _plant: null,
            _harvestingTween: null,
            _harvestedTween: null,
            _growingTween: null,
            _defaultScale: null
        },
        events: {
            Harvested: null
        },
        props: {
            CanHarvest: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#CanHarvest#get", this ); }

                    return this._state === _Project.Code.Core.Harvesting.FieldState.Grown;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#init", this ); }

                this._defaultScale = new UnityEngine.Vector3();
                this._state = _Project.Code.Core.Harvesting.FieldState.Grown;
                Bridge.event(this, "Harvested", function () { });
            }
        },
        methods: {
            /*_Project.Code.Core.Harvesting.Field.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#Start", this ); }

                this._defaultScale = this._plant.localScale.$clone();

                this._growingTween = DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._plant, this._defaultScale.$clone(), 1), 10.0), DG.Tweening.Ease.OutBack), Bridge.fn.bind(this, function () {
                    this._plant.localScale = pc.Vec3.ZERO.clone();
                })), Bridge.fn.bind(this, function () {
                    this.SetState(_Project.Code.Core.Harvesting.FieldState.Grown);
                })), false);

                this._harvestingTween = DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._plant, this._defaultScale.$clone().clone().scale( 1.2 ), 0.01), DG.Tweening.Ease.Linear), 6, DG.Tweening.LoopType.Yoyo), Bridge.fn.bind(this, function () {
                    DG.Tweening.TweenExtensions.Restart(this._harvestedTween);
                })), false);

                this._harvestedTween = DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._plant, pc.Vec3.ZERO.clone(), 0.3), Bridge.fn.bind(this, function () {
                    !Bridge.staticEquals(this.Harvested, null) ? this.Harvested() : null;
                    this.SetState(_Project.Code.Core.Harvesting.FieldState.Growing);
                })), false);

                this.SetState(this._state);
            },
            /*_Project.Code.Core.Harvesting.Field.Start end.*/

            /*_Project.Code.Core.Harvesting.Field.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#OnDestroy", this ); }

                DG.Tweening.TweenExtensions.Kill(this._harvestingTween);
                DG.Tweening.TweenExtensions.Kill(this._harvestedTween);
                DG.Tweening.TweenExtensions.Kill(this._growingTween);
            },
            /*_Project.Code.Core.Harvesting.Field.OnDestroy end.*/

            /*_Project.Code.Core.Harvesting.Field.Harvest start.*/
            Harvest: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#Harvest", this ); }

                if (this._state !== _Project.Code.Core.Harvesting.FieldState.Grown) {
                    throw new System.InvalidOperationException.$ctor1("Field is not grown");
                }

                this.SetState(_Project.Code.Core.Harvesting.FieldState.Harvesting);
            },
            /*_Project.Code.Core.Harvesting.Field.Harvest end.*/

            /*_Project.Code.Core.Harvesting.Field.Abort start.*/
            Abort: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#Abort", this ); }

                if (this._state !== _Project.Code.Core.Harvesting.FieldState.Harvesting) {
                    throw new System.InvalidOperationException.$ctor1("Field is not harvesting");
                }

                if (true) {
                    return;
                }


            },
            /*_Project.Code.Core.Harvesting.Field.Abort end.*/

            /*_Project.Code.Core.Harvesting.Field.SetState start.*/
            SetState: function (state) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#SetState", this ); }

                this._state = state;
                UnityEngine.Debug.Log$1(System.String.format("State: {0}", [Bridge.box(this._state, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState))]));

                switch (state) {
                    case _Project.Code.Core.Harvesting.FieldState.Harvesting: 
                        DG.Tweening.TweenExtensions.Restart(this._harvestingTween);
                        DG.Tweening.TweenExtensions.Complete(this._harvestingTween);
                        break;
                    case _Project.Code.Core.Harvesting.FieldState.Growing: 
                        DG.Tweening.TweenExtensions.Restart(this._growingTween);
                        break;
                }
            },
            /*_Project.Code.Core.Harvesting.Field.SetState end.*/


        }
    });
    /*_Project.Code.Core.Harvesting.Field end.*/

    /*_Project.Code.Core.Harvesting.FieldsDropper start.*/
    Bridge.define("_Project.Code.Core.Harvesting.FieldsDropper", {
        fields: {
            _dropper: null
        },
        ctors: {
            ctor: function (dropper, fields) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.FieldsDropper#ctor", this ); }

                this.$initialize();
                this._dropper = dropper;

                fields.ForEach(Bridge.fn.bind(this, function (f) {
                    f.addHarvested(Bridge.fn.bind(this, function () {
                        this.OnHarvested(f.transform.position.$clone());
                    }));
                }));
            }
        },
        methods: {
            /*_Project.Code.Core.Harvesting.FieldsDropper.OnHarvested start.*/
            OnHarvested: function (position) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.FieldsDropper#OnHarvested", this ); }

                this._dropper.CreateDrop(_Project.Code.Core.Items.ItemType.Corn, position, 2);
            },
            /*_Project.Code.Core.Harvesting.FieldsDropper.OnHarvested end.*/


        }
    });
    /*_Project.Code.Core.Harvesting.FieldsDropper end.*/

    /*_Project.Code.Core.Harvesting.FieldState start.*/
    Bridge.define("_Project.Code.Core.Harvesting.FieldState", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Grown: 1,
                Growing: 2,
                Harvesting: 3
            }
        }
    });
    /*_Project.Code.Core.Harvesting.FieldState end.*/

    /*_Project.Code.Core.Harvesting.Harvester start.*/
    Bridge.define("_Project.Code.Core.Harvesting.Harvester", {
        inherits: [System.IDisposable],
        fields: {
            _detector: null,
            _harvestingField: null
        },
        props: {
            IsHarvesting: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#IsHarvesting#get", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(this._harvestingField, null);
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function (detector) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#ctor", this ); }

                this.$initialize();
                this._detector = detector;

                this._detector._Project$Code$Core$Collision$ICollisionDetector$addTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            }
        },
        methods: {
            /*_Project.Code.Core.Harvesting.Harvester.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#Dispose", this ); }

                this._detector._Project$Code$Core$Collision$ICollisionDetector$removeTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            },
            /*_Project.Code.Core.Harvesting.Harvester.Dispose end.*/

            /*_Project.Code.Core.Harvesting.Harvester.OnTriggered start.*/
            OnTriggered: function (collider, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#OnTriggered", this ); }

                var field = { };
                if (!collider.TryGetComponent$1(_Project.Code.Core.Harvesting.Field, field)) {
                    return;
                }

                if (type === _Project.Code.Core.Collision.CollisionType.Exit && UnityEngine.MonoBehaviour.op_Equality(this._harvestingField, field.v)) {
                    field.v.Abort();

                    this._harvestingField.removeHarvested(Bridge.fn.cacheBind(this, this.Cleanup));

                    this.Cleanup();
                } else if (!this.IsHarvesting && field.v.CanHarvest) {
                    field.v.Harvest();

                    this._harvestingField = field.v;

                    this._harvestingField.addHarvested(Bridge.fn.cacheBind(this, this.Cleanup));
                }
            },
            /*_Project.Code.Core.Harvesting.Harvester.OnTriggered end.*/

            /*_Project.Code.Core.Harvesting.Harvester.Cleanup start.*/
            Cleanup: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#Cleanup", this ); }

                this._harvestingField = null;
            },
            /*_Project.Code.Core.Harvesting.Harvester.Cleanup end.*/


        }
    });
    /*_Project.Code.Core.Harvesting.Harvester end.*/

    /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler start.*/
    Bridge.define("_Project.Code.Core.Items.Handlers.InventoryCollisionHandler", {
        inherits: [System.IDisposable],
        fields: {
            _detector: null,
            _provider: null,
            _inventoryTransferer: null
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function (detector, provider, inventoryTransferer) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#ctor", this ); }

                this.$initialize();
                this._provider = provider;
                this._detector = detector;
                this._inventoryTransferer = inventoryTransferer;

                this._detector._Project$Code$Core$Collision$ICollisionDetector$addTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#Dispose", this ); }

                this._detector._Project$Code$Core$Collision$ICollisionDetector$removeTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            },
            /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler.Dispose end.*/

            /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler.OnTriggered start.*/
            OnTriggered: function (obj, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#OnTriggered", this ); }

                var inventory = { };
                if (!obj.TryGetComponent$1(_Project.Code.Core.Items.Inventory.ItemInventory, inventory) || !inventory.v.enabled) {
                    return;
                }

                if (type === _Project.Code.Core.Collision.CollisionType.Exit && this._inventoryTransferer.HasConnectionFor(inventory.v)) {
                    this._inventoryTransferer.Disconnect();
                    return;
                }
                var provided = { };

                if (this._provider.TryGetStorage(inventory.v.ItemType, provided) === false) {
                    return;
                }

                var result = this._inventoryTransferer.TrySetConnection(provided.v, inventory.v);

                UnityEngine.Debug.Log$1((System.String.format("Connecting {0} to {1}: ", Bridge.box(inventory.v.ItemType, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType)), Bridge.box(provided.v.ItemType, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))) || "") + ((result ? "Connected" : "Failed") || ""));
            },
            /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler.OnTriggered end.*/


        }
    });
    /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler end.*/

    /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler start.*/
    Bridge.define("_Project.Code.Core.Items.Handlers.ItemCollisionHandler", {
        inherits: [System.IDisposable],
        fields: {
            _detector: null,
            _provider: null,
            _transferer: null
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function (detector, provider, transferer) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.ItemCollisionHandler#ctor", this ); }

                this.$initialize();
                this._transferer = transferer;
                this._provider = provider;
                this._detector = detector;
                this._transferer = transferer;

                this._detector._Project$Code$Core$Collision$ICollisionDetector$addTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.ItemCollisionHandler#Dispose", this ); }

                this._detector._Project$Code$Core$Collision$ICollisionDetector$removeTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            },
            /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler.Dispose end.*/

            /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler.OnTriggered start.*/
            OnTriggered: function (obj, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.ItemCollisionHandler#OnTriggered", this ); }

                if (type === _Project.Code.Core.Collision.CollisionType.Exit) {
                    return;
                }
                var item = { };

                if (!obj.TryGetComponent$1(_Project.Code.Core.Items.Item, item) || !item.v.enabled) {
                    return;
                }
                var storage = { };

                if (this._provider.TryGetStorage(item.v.Type, storage) === false) {
                    return;
                }

                var result = this._transferer.TryTransfer(item.v, storage.v);

                UnityEngine.Debug.Log$1((System.String.format("Transfering {0} to {1}: ", Bridge.box(item.v.Type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType)), Bridge.box(storage.v.ItemType, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))) || "") + ((result ? "success" : "failed") || ""));
            },
            /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler.OnTriggered end.*/


        }
    });
    /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler end.*/

    /*_Project.Code.Core.Items.Inventory.InventoryProvider start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.InventoryProvider", {
        fields: {
            _storages: null
        },
        ctors: {
            ctor: function (storages) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.InventoryProvider#ctor", this ); }

                this.$initialize();
                this._storages = storages;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.InventoryProvider.HasStorage start.*/
            HasStorage: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.InventoryProvider#HasStorage", this ); }

                return System.Linq.Enumerable.from(this._storages, _Project.Code.Core.Items.Inventory.ItemInventory).any(function (s) {
                        return s.ItemType === type;
                    });
            },
            /*_Project.Code.Core.Items.Inventory.InventoryProvider.HasStorage end.*/

            /*_Project.Code.Core.Items.Inventory.InventoryProvider.TryGetStorage start.*/
            TryGetStorage: function (type, inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.InventoryProvider#TryGetStorage", this ); }

                inventory.v = System.Linq.Enumerable.from(this._storages, _Project.Code.Core.Items.Inventory.ItemInventory).firstOrDefault(Bridge.fn.bind(this, function (s) {
                        return s.ItemType === type;
                    }), null);

                return UnityEngine.MonoBehaviour.op_Inequality(inventory.v, null);
            },
            /*_Project.Code.Core.Items.Inventory.InventoryProvider.TryGetStorage end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.InventoryProvider end.*/

    /*_Project.Code.Core.Items.Inventory.InventoryType start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.InventoryType", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Receiver: 1,
                Sender: 2,
                Both: 3
            }
        }
    });
    /*_Project.Code.Core.Items.Inventory.InventoryType end.*/

    /*_Project.Code.Tutorial.IStorage start.*/
    Bridge.define("_Project.Code.Tutorial.IStorage", {
        $kind: 3
    });
    /*_Project.Code.Tutorial.IStorage end.*/

    /*_Project.Code.Core.Items.Inventory.StackInventoryView start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.StackInventoryView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _itemInventory: null,
            _spacing: 0,
            _attachTo: null,
            _destroyOnEmptied: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#init", this ); }

                this._spacing = 0.2;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._itemInventory, null)) {
                    return;
                }

                this._itemInventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                this._itemInventory.addRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
            },
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnEnable end.*/

            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._itemInventory, null)) {
                    return;
                }

                this._itemInventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                this._itemInventory.removeRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
            },
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnDisable end.*/

            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnRemoved start.*/
            OnRemoved: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#OnRemoved", this ); }

                if (this._itemInventory.Count === 0 && this._destroyOnEmptied) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnRemoved end.*/

            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnAdded start.*/
            OnAdded: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#OnAdded", this ); }

                item.transform.parent = this._attachTo;
                item.transform.rotation = pc.Quat.IDENTITY.clone();

                var height = (((this._itemInventory.Count - 1) | 0)) * this._spacing;

                item.transform.localPosition = new pc.Vec3( 0, height, 0 );

                UnityEngine.Debug.Log$1(System.String.format("Collected {0}", [Bridge.box(item.Type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))]));
            },
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnAdded end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.StackInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.TableStorageUpdater start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.TableStorageUpdater", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _itemInventory: null,
            _price: 0,
            _buyZone: null,
            _table: null,
            _customers: null,
            _counter: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#init", this ); }

                this._price = 10;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._itemInventory, null)) {
                    return;
                }
                this._itemInventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnEnable end.*/

            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._itemInventory, null)) {
                    return;
                }
                this._itemInventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnDisable end.*/

            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnAdded start.*/
            OnAdded: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnAdded", this ); }

                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(obj.transform, pc.Vec3.ZERO.clone(), 0.5)), function () {
                    obj.gameObject.SetActive(false);
                });

                this._counter = (this._counter + 1) | 0;

                if (this._counter >= this._price) {
                    this._itemInventory.SetOperation(_Project.Code.Core.Items.Inventory.InventoryType.None);
                    this._buyZone.SetActive(false);

                    this._table.transform.localScale = pc.Vec3.ZERO.clone();
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._table.transform, new pc.Vec3( 1, 1, 1 ), 0.5));
                    this._table.SetActive(true);

                    this.StartCoroutine$1(this.ShowCustomers());
                }
            },
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnAdded end.*/

            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.ShowCustomers start.*/
            ShowCustomers: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#ShowCustomers", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    customer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $t = Bridge.getEnumerator(this._customers);
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ($t.moveNext()) {
                                            customer = $t.Current;
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 4;
                                    continue;
                                }
                                case 2: {
                                    customer.SetActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 1;
                                    continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.ShowCustomers end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.TableStorageUpdater end.*/

    /*_Project.Code.Core.Items.InventoryInitializer start.*/
    Bridge.define("_Project.Code.Core.Items.InventoryInitializer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _inventory: null,
            _count: 0,
            _itemsCreator: null
        },
        methods: {
            /*_Project.Code.Core.Items.InventoryInitializer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.InventoryInitializer#Start", this ); }

                this._itemsCreator = _Project.Code.Services.ServiceLocator.L.Resolve(_Project.Code.Services.ItemsCreation.ItemsCreator);

                var type = this._inventory.ItemType;

                for (var i = 0; i < this._count; i = (i + 1) | 0) {
                    var item = this._itemsCreator.Create(type);
                    item.enabled = false;
                    this._inventory.Add(item);
                }
            },
            /*_Project.Code.Core.Items.InventoryInitializer.Start end.*/


        }
    });
    /*_Project.Code.Core.Items.InventoryInitializer end.*/

    /*_Project.Code.Core.Items.Item start.*/
    Bridge.define("_Project.Code.Core.Items.Item", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _collider: null,
            _type: 0
        },
        props: {
            Type: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Item#Type#get", this ); }

                    return this._type;
                }
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Item.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Item#OnEnable", this ); }

                this._collider.enabled = true;
            },
            /*_Project.Code.Core.Items.Item.OnEnable end.*/

            /*_Project.Code.Core.Items.Item.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Item#OnDisable", this ); }

                this._collider.enabled = false;
            },
            /*_Project.Code.Core.Items.Item.OnDisable end.*/


        }
    });
    /*_Project.Code.Core.Items.Item end.*/

    /*_Project.Code.Core.Items.ItemType start.*/
    Bridge.define("_Project.Code.Core.Items.ItemType", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Corn: 1,
                Coin: 2,
                Popcorn: 3
            }
        }
    });
    /*_Project.Code.Core.Items.ItemType end.*/

    /*_Project.Code.Core.Items.Transfering.InventoryTransferer start.*/
    Bridge.define("_Project.Code.Core.Items.Transfering.InventoryTransferer", {
        fields: {
            _coroutineRunner: null,
            _transferFactory: null,
            _connection: null
        },
        props: {
            HasConnection: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#HasConnection#get", this ); }

                    return this.Connection != null;
                }
            },
            Connection: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#Connection#get", this ); }

                    return this._connection;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#Connection#set", this ); }

                    this._connection = value;
                    if (value == null) {
                        this.OnDisconnected();
                    } else {
                        this.OnConnected();
                    }
                }
            }
        },
        ctors: {
            ctor: function (coroutineRunner) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#ctor", this ); }

                this.$initialize();
                this._coroutineRunner = coroutineRunner;
                this._transferFactory = new _Project.Code.Core.Items.Transfering.TransferFactory();
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.HasConnectionFor start.*/
            HasConnectionFor: function (inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#HasConnectionFor", this ); }

                if (!this.HasConnection) {
                    return false;
                }

                return UnityEngine.MonoBehaviour.op_Equality(this.Connection.Sender, inventory) || UnityEngine.MonoBehaviour.op_Equality(this.Connection.Receiver, inventory);
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.HasConnectionFor end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.TrySetConnection start.*/
            TrySetConnection: function (storage1, storage2) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#TrySetConnection", this ); }

                if (this.HasConnection) {
                    return false;
                }
                var connection = { };

                if (this._transferFactory.TryCreate(storage1, storage2, connection) === false) {
                    return false;
                }

                this.Connection = connection.v;

                return true;
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.TrySetConnection end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.Disconnect start.*/
            Disconnect: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#Disconnect", this ); }

                if (!this.HasConnection) {
                    throw new System.InvalidOperationException.$ctor1("No connection set");
                }

                this.Connection = null;
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.Disconnect end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.TransferingAll start.*/
            TransferingAll: function (from, to) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#TransferingAll", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    collectable,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.HasConnection ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 1: {
                                    if (this.CanTransfer(from, to) === false) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 2: {
                                    this.Disconnect();
                                        return false;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    collectable = from.Get();
                                        collectable.transform.parent = null;

                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(collectable.transform, to.transform.position.$clone(), 0.01)));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    if (from.ItemType === _Project.Code.Core.Items.ItemType.Coin) {
                                            GlobalEvents.SendOnAddCoin();
                                        } else if (from.ItemType === _Project.Code.Core.Items.ItemType.Corn) {
                                            GlobalEvents.SendOnAddCorn();
                                        } else {
                                            GlobalEvents.SendOnAddPopcorn();
                                        }

                                        to.Add(collectable);
                                        UnityEngine.Debug.Log$1("Transfered unit");

                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.TransferingAll end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.CanTransfer start.*/
            CanTransfer: function (from, to) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#CanTransfer", this ); }

                return from.CanGet() && to.CanAdd();
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.CanTransfer end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.OnDisconnected start.*/
            OnDisconnected: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#OnDisconnected", this ); }

                UnityEngine.Debug.Log$1("Disconnected");
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.OnDisconnected end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.OnConnected start.*/
            OnConnected: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#OnConnected", this ); }

                UnityEngine.Debug.Log$1("Connected");
                this._coroutineRunner._Project$Code$Services$CoroutineRunner$ICoroutineRunner$Launch(this.TransferingAll(this.Connection.Sender, this.Connection.Receiver));
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.OnConnected end.*/


        }
    });
    /*_Project.Code.Core.Items.Transfering.InventoryTransferer end.*/

    /*_Project.Code.Core.Items.Transfering.ItemTransferer start.*/
    Bridge.define("_Project.Code.Core.Items.Transfering.ItemTransferer", {
        fields: {
            _reservations: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#init", this ); }

                this._reservations = new (System.Collections.Generic.Dictionary$2(_Project.Code.Core.Items.Inventory.ItemInventory,System.Int32)).ctor();
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.TryTransfer start.*/
            TryTransfer: function (item, inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#TryTransfer", this ); }

                if (this.CanTransfer(item, inventory)) {
                    this.Transfer(item, inventory);
                    return true;
                }

                return false;
            },
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.TryTransfer end.*/

            /*_Project.Code.Core.Items.Transfering.ItemTransferer.Transfer start.*/
            Transfer: function (item, to) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#Transfer", this ); }

                var count = { };
                if (this._reservations.tryGetValue(to, count)) {
                    this._reservations.setItem(to, (this._reservations.getItem(to) + 1) | 0);
                } else {
                    this._reservations.add(to, 1);
                }

                item.transform.parent = null;
                item.enabled = false;
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(item.transform, to.transform.position.$clone(), 0.1)), Bridge.fn.bind(this, function () {
                    to.Add(item);
                    this._reservations.setItem(to, (this._reservations.getItem(to) - 1) | 0);
                    //Debug.Log($"Transfered {item.Type} to {to}.");
                }));
            },
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.Transfer end.*/

            /*_Project.Code.Core.Items.Transfering.ItemTransferer.CanTransfer start.*/
            CanTransfer: function (item, inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#CanTransfer", this ); }

                return item.Type === inventory.ItemType && inventory.CanAdd() && ((this.GetReservedCount(inventory) + inventory.Count) | 0) < inventory.Capacity;
            },
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.CanTransfer end.*/

            /*_Project.Code.Core.Items.Transfering.ItemTransferer.GetReservedCount start.*/
            GetReservedCount: function (inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#GetReservedCount", this ); }

                return this._reservations.containsKey(inventory) ? this._reservations.getItem(inventory) : 0;
            },
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.GetReservedCount end.*/


        }
    });
    /*_Project.Code.Core.Items.Transfering.ItemTransferer end.*/

    /*_Project.Code.Core.Items.Transfering.Transfer start.*/
    Bridge.define("_Project.Code.Core.Items.Transfering.Transfer", {
        fields: {
            Sender: null,
            Receiver: null
        },
        ctors: {
            ctor: function (sender, receiver) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.Transfer#ctor", this ); }

                this.$initialize();
                this.Sender = sender;
                this.Receiver = receiver;
            }
        }
    });
    /*_Project.Code.Core.Items.Transfering.Transfer end.*/

    /*_Project.Code.Core.Items.Transfering.TransferFactory start.*/
    Bridge.define("_Project.Code.Core.Items.Transfering.TransferFactory", {
        methods: {
            /*_Project.Code.Core.Items.Transfering.TransferFactory.TryCreate start.*/
            TryCreate: function (storage1, storage2, connection) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.TransferFactory#TryCreate", this ); }

                connection.v = null;

                if (UnityEngine.MonoBehaviour.op_Equality(storage1, storage2)) {
                    return false;
                }

                if (!this.DoItemTypesMatch(storage1, storage2)) {
                    return false;
                }

                if (this.CanGive(storage1) && this.CanGet(storage2)) {
                    connection.v = new _Project.Code.Core.Items.Transfering.Transfer(storage1, storage2);
                    return true;
                }

                if (this.CanGive(storage2) && this.CanGet(storage1)) {
                    connection.v = new _Project.Code.Core.Items.Transfering.Transfer(storage2, storage1);
                    return true;
                }

                return false;
            },
            /*_Project.Code.Core.Items.Transfering.TransferFactory.TryCreate end.*/

            /*_Project.Code.Core.Items.Transfering.TransferFactory.DoItemTypesMatch start.*/
            DoItemTypesMatch: function (storage1, storage2) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.TransferFactory#DoItemTypesMatch", this ); }

                if (storage1.ItemType === _Project.Code.Core.Items.ItemType.None || storage2.ItemType === _Project.Code.Core.Items.ItemType.None) {
                    return storage1.ItemType !== storage2.ItemType;
                }

                return storage1.ItemType === storage2.ItemType;
            },
            /*_Project.Code.Core.Items.Transfering.TransferFactory.DoItemTypesMatch end.*/

            /*_Project.Code.Core.Items.Transfering.TransferFactory.CanGet start.*/
            CanGet: function (itemInventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.TransferFactory#CanGet", this ); }

                return itemInventory.InventoryType === _Project.Code.Core.Items.Inventory.InventoryType.Receiver || itemInventory.InventoryType === _Project.Code.Core.Items.Inventory.InventoryType.Both;
            },
            /*_Project.Code.Core.Items.Transfering.TransferFactory.CanGet end.*/

            /*_Project.Code.Core.Items.Transfering.TransferFactory.CanGive start.*/
            CanGive: function (itemInventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.TransferFactory#CanGive", this ); }

                return itemInventory.InventoryType === _Project.Code.Core.Items.Inventory.InventoryType.Sender || itemInventory.InventoryType === _Project.Code.Core.Items.Inventory.InventoryType.Both;
            },
            /*_Project.Code.Core.Items.Transfering.TransferFactory.CanGive end.*/


        }
    });
    /*_Project.Code.Core.Items.Transfering.TransferFactory end.*/

    /*_Project.Code.Core.PopcornFarm.CornFarm start.*/
    Bridge.define("_Project.Code.Core.PopcornFarm.CornFarm", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _fillImage: null,
            _resource: null,
            _final: null,
            _itemsCreator: null,
            _count: 0,
            _isWorking: false
        },
        methods: {
            /*_Project.Code.Core.PopcornFarm.CornFarm.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#Start", this ); }


                this._fillImage.fillAmount = 0;
                this._itemsCreator = _Project.Code.Services.ServiceLocator.L.Resolve(_Project.Code.Services.ItemsCreation.ItemsCreator);
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.Start end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#OnEnable", this ); }

                this._resource.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.OnEnable end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#OnDisable", this ); }

                this._resource.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.OnDisable end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.OnAdded start.*/
            OnAdded: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#OnAdded", this ); }

                obj.gameObject.SetActive(false);
                this._count = (this._count + 1) | 0;
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.OnAdded end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#Update", this ); }

                if (this._count > 0 && !this._isWorking) {
                    this.StartCoroutine$1(this.AnimateCircle(Bridge.fn.bind(this, function () {
                        this.ProduceCorn();
                        this.ProduceCorn();
                    })));
                }
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.Update end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.ProduceCorn start.*/
            ProduceCorn: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#ProduceCorn", this ); }

                UnityEngine.Debug.Log$1("Produced");

                var popcorn = this._itemsCreator.Create(_Project.Code.Core.Items.ItemType.Popcorn);

                popcorn.enabled = false;

                this._final.Add(popcorn);

                this._count = (this._count - 1) | 0;
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.ProduceCorn end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.AnimateCircle start.*/
            AnimateCircle: function (onFinished) {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#AnimateCircle", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (onFinished === void 0) { onFinished = null; }

                                        this._isWorking = true;

                                        duration = 0.5;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( this._fillImage.fillAmount < 1 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this._fillImage.fillAmount += UnityEngine.Time.deltaTime / duration;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._fillImage.fillAmount = 0;

                                        this._isWorking = false;

                                        !Bridge.staticEquals(onFinished, null) ? onFinished() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.AnimateCircle end.*/


        }
    });
    /*_Project.Code.Core.PopcornFarm.CornFarm end.*/

    /*_Project.Code.Core.Workers.Worker start.*/
    Bridge.define("_Project.Code.Core.Workers.Worker", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animator: null,
            _detector: null,
            _fields: null,
            _inventory: null,
            _isUp: false,
            _isMoving: false
        },
        methods: {
            /*_Project.Code.Core.Workers.Worker.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.Worker#Awake", this ); }

                var handler = new _Project.Code.Core.Items.Handlers.ItemCollisionHandler(this._detector, new _Project.Code.Core.Items.Inventory.InventoryProvider(Bridge.fn.bind(this, function (_o1) {
                        _o1.add(this._inventory);
                        return _o1;
                    })(new (System.Collections.Generic.List$1(_Project.Code.Core.Items.Inventory.ItemInventory)).ctor())), new _Project.Code.Core.Items.Transfering.ItemTransferer());

                this._fields.Sort$2(Bridge.fn.bind(this, function (f1, f2) {
                    return Bridge.compare(pc.Vec3.distance( this.transform.position, f1.transform.position ), pc.Vec3.distance( this.transform.position, f2.transform.position ));
                }));
            },
            /*_Project.Code.Core.Workers.Worker.Awake end.*/

            /*_Project.Code.Core.Workers.Worker.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.Worker#Update", this ); }

                this._animator.SetBool$1("IsMoving", this._isMoving);
                //_animator.SetBool("IsUp", _isUp);

                this.transform.localScale = this._isUp ? new pc.Vec3( 1, 1, 1 ) : new pc.Vec3( -1, 1, 1 );
            },
            /*_Project.Code.Core.Workers.Worker.Update end.*/

            /*_Project.Code.Core.Workers.Worker.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.Worker#OnEnable", this ); }

                this.StartCoroutine$1(this.Working());
            },
            /*_Project.Code.Core.Workers.Worker.OnEnable end.*/

            /*_Project.Code.Core.Workers.Worker.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.Worker#OnDisable", this ); }

                this.StopAllCoroutines();
            },
            /*_Project.Code.Core.Workers.Worker.OnDisable end.*/

            /*_Project.Code.Core.Workers.Worker.Working start.*/
            Working: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.Worker#Working", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    index,
                    field,
                    distance,
                    direction,
                    randomDelay,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    index = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if (index >= this._fields.Count) {
                                            index = 0;
                                        }

                                        field = this._fields.getItem(index);

                                        index = (index + 1) | 0;

                                        if (!field.CanHarvest) {
                                            $step = 1;
                                            continue;
                                        }

                                        distance = pc.Vec3.distance( this.transform.position, field.transform.position );

                                        direction = field.transform.position.$clone().sub( this.transform.position );

                                        this._isUp = direction.y > 0;

                                        randomDelay = UnityEngine.Random.Range$1(0.2, 0.8);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(randomDelay);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this._isMoving = true;

                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, field.transform.position.$clone(), distance), DG.Tweening.Ease.Linear)));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this._isMoving = false;

                                        field.Harvest();

                                        $step = 1;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Workers.Worker.Working end.*/


        }
    });
    /*_Project.Code.Core.Workers.Worker end.*/

    /*_Project.Code.Entry.Entry start.*/
    Bridge.define("_Project.Code.Entry.Entry", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _joystick: null
        },
        methods: {
            /*_Project.Code.Entry.Entry.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.Entry#Awake", this ); }

                _Project.Code.Services.ServiceLocator.L.Container = new Assets.CourseGame.Develop.DI.DIContainer.ctor();

                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.CoroutineRunner.CoroutineRunner, Bridge.fn.bind(this, function (_) {
                    return this.GetComponent(_Project.Code.Services.CoroutineRunner.CoroutineRunner);
                }));
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.Input.MoveInput, Bridge.fn.bind(this, function (_) {
                    return new _Project.Code.Services.Input.MoveInput(this._joystick);
                }));

                _Project.Code.Services.ServiceLocator.L.Container.Initialize();
            },
            /*_Project.Code.Entry.Entry.Awake end.*/

            /*_Project.Code.Entry.Entry.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.Entry#OnDestroy", this ); }

                _Project.Code.Services.ServiceLocator.L.Container.Dispose();
                _Project.Code.Services.ServiceLocator.L.Container = null;
            },
            /*_Project.Code.Entry.Entry.OnDestroy end.*/


        }
    });
    /*_Project.Code.Entry.Entry end.*/

    /*_Project.Code.Entry.EntryPoint start.*/
    Bridge.define("_Project.Code.Entry.EntryPoint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _joystick: null,
            _itemPrefabs: null,
            _coroutineRunner: null
        },
        methods: {
            /*_Project.Code.Entry.EntryPoint.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.EntryPoint#Awake", this ); }

                _Project.Code.Services.ServiceLocator.L.Container = new Assets.CourseGame.Develop.DI.DIContainer.ctor();

                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.CoroutineRunner.CoroutineRunner, Bridge.fn.bind(this, function (_) {
                    return this.GetComponent(_Project.Code.Services.CoroutineRunner.CoroutineRunner);
                }));
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.Input.MoveInput, Bridge.fn.bind(this, function (_) {
                    return new _Project.Code.Services.Input.MoveInput(this._joystick);
                }));

                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.ItemsCreation.ItemsCreator, Bridge.fn.bind(this, function (_) {
                    return new _Project.Code.Services.ItemsCreation.ItemsCreator(this._itemPrefabs);
                }));
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.ItemsCreation.Dropper, function (c) {
                    return new _Project.Code.Services.ItemsCreation.Dropper(c.Resolve(_Project.Code.Services.ItemsCreation.ItemsCreator));
                });
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Core.Harvesting.FieldsDropper, Bridge.fn.bind(this, function (c) {
                    return new _Project.Code.Core.Harvesting.FieldsDropper(c.Resolve(_Project.Code.Services.ItemsCreation.Dropper), this.GetFields());
                })).NonLazy();

                _Project.Code.Services.ServiceLocator.L.Container.Initialize();
            },
            /*_Project.Code.Entry.EntryPoint.Awake end.*/

            /*_Project.Code.Entry.EntryPoint.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.EntryPoint#OnDestroy", this ); }

                _Project.Code.Services.ServiceLocator.L.Container.Dispose();
                _Project.Code.Services.ServiceLocator.L.Container = null;
            },
            /*_Project.Code.Entry.EntryPoint.OnDestroy end.*/

            /*_Project.Code.Entry.EntryPoint.GetFields start.*/
            GetFields: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.EntryPoint#GetFields", this ); }

                var $t;
                return ($t = _Project.Code.Core.Harvesting.Field, System.Linq.Enumerable.from(UnityEngine.Object.FindObjectsOfType(_Project.Code.Core.Harvesting.Field), $t).toList($t));
            },
            /*_Project.Code.Entry.EntryPoint.GetFields end.*/


        }
    });
    /*_Project.Code.Entry.EntryPoint end.*/

    /*_Project.Code.Tutorial.IStorageFabric start.*/
    Bridge.define("_Project.Code.Tutorial.IStorageFabric", {
        $kind: 3
    });
    /*_Project.Code.Tutorial.IStorageFabric end.*/

    /*_Project.Code.Selling.Customer start.*/
    Bridge.define("_Project.Code.Selling.Customer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _bubbleView: null,
            _animator: null,
            OrderSize: 0,
            Money: 0
        },
        methods: {
            /*_Project.Code.Selling.Customer.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Customer#Awake", this ); }

                this._animator = this.GetComponent(UnityEngine.Animator);
            },
            /*_Project.Code.Selling.Customer.Awake end.*/

            /*_Project.Code.Selling.Customer.Init start.*/
            Init: function (animatorController, orderSize, money) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Customer#Init", this ); }

                this.OrderSize = orderSize;
                this.Money = money;

                this._animator.runtimeAnimatorController = animatorController;
                this._bubbleView.SetText(Bridge.toString(orderSize));
            },
            /*_Project.Code.Selling.Customer.Init end.*/

            /*_Project.Code.Selling.Customer.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Customer#OnEnable", this ); }

                this.transform.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, new pc.Vec3( 1, 1, 1 ), 0.5)), Bridge.fn.bind(this, function () {
                    this._bubbleView.gameObject.SetActive(true);
                }));
            },
            /*_Project.Code.Selling.Customer.OnEnable end.*/

            /*_Project.Code.Selling.Customer.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Customer#OnDisable", this ); }

                this._bubbleView.gameObject.SetActive(false);
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, pc.Vec3.ZERO.clone(), 0.5));
            },
            /*_Project.Code.Selling.Customer.OnDisable end.*/


        }
    });
    /*_Project.Code.Selling.Customer end.*/

    /*_Project.Code.Selling.ILine start.*/
    Bridge.define("_Project.Code.Selling.ILine", {
        $kind: 3
    });
    /*_Project.Code.Selling.ILine end.*/

    /*_Project.Code.Selling.Line.BubbleView start.*/
    Bridge.define("_Project.Code.Selling.Line.BubbleView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _text: null,
            _body: null
        },
        methods: {
            /*_Project.Code.Selling.Line.BubbleView.SetText start.*/
            SetText: function (text) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.BubbleView#SetText", this ); }

                this._text.text = text;
            },
            /*_Project.Code.Selling.Line.BubbleView.SetText end.*/

            /*_Project.Code.Selling.Line.BubbleView.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.BubbleView#OnEnable", this ); }

                this._body.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._body, new pc.Vec3( 1, 1, 1 ), 1.0));
            },
            /*_Project.Code.Selling.Line.BubbleView.OnEnable end.*/


        }
    });
    /*_Project.Code.Selling.Line.BubbleView end.*/

    /*_Project.Code.Selling.Seller start.*/
    Bridge.define("_Project.Code.Selling.Seller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _moneyPrefab: null,
            _lineMb: null,
            _line: null,
            _productInventory: null,
            _moneyInventory: null,
            _currentCustomer: null
        },
        methods: {
            /*_Project.Code.Selling.Seller.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#Awake", this ); }

                this._line = this._lineMb;
            },
            /*_Project.Code.Selling.Seller.Awake end.*/

            /*_Project.Code.Selling.Seller.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._currentCustomer, null)) {
                    return;
                }
                var customer = { };

                if (!this._line._Project$Code$Selling$ILine$TryGetCustomer(customer) || !customer.v.enabled) {
                    return;
                }

                if (customer.v.OrderSize > this._productInventory.Count) {
                    return;
                }

                this._currentCustomer = customer.v;

                this.Serve();
            },
            /*_Project.Code.Selling.Seller.Update end.*/

            /*_Project.Code.Selling.Seller.Serve start.*/
            Serve: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#Serve", this ); }

                var sequence = DG.Tweening.DOTween.Sequence();

                DG.Tweening.TweenSettingsExtensions.AppendInterval(sequence, 0.5);

                for (var i = 0; i < this._currentCustomer.OrderSize; i = (i + 1) | 0) {
                    var item = { v : this._productInventory.Get() };

                    var tween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(item.v.transform, this._currentCustomer.transform.position.$clone(), 0.5), (function ($me, item) {
                        return function () {
                            UnityEngine.MonoBehaviour.Destroy(item.v.gameObject);
                        };
                    })(this, item));

                    DG.Tweening.TweenSettingsExtensions.Join(sequence, tween);
                }
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, Bridge.fn.cacheBind(this, this.GetPaid)));
            },
            /*_Project.Code.Selling.Seller.Serve end.*/

            /*_Project.Code.Selling.Seller.GetPaid start.*/
            GetPaid: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#GetPaid", this ); }

                var count = (this._currentCustomer.Money + UnityEngine.Random.Range(0, 6)) | 0;

                var sequence = DG.Tweening.DOTween.Sequence();

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var money = { v : UnityEngine.Object.Instantiate(_Project.Code.Core.Items.Item, this._moneyPrefab) };

                    money.v.enabled = false;

                    money.v.transform.position = this._currentCustomer.transform.position.$clone();

                    var tween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(money.v.transform, this._moneyInventory.transform.position.$clone(), 0.5), (function ($me, money) {
                        return Bridge.fn.bind($me, function () {
                            this._moneyInventory.Add(money.v);
                        });
                    })(this, money));

                    DG.Tweening.TweenSettingsExtensions.Join(sequence, tween);
                }
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, Bridge.fn.cacheBind(this, this.OnServed)));
            },
            /*_Project.Code.Selling.Seller.GetPaid end.*/

            /*_Project.Code.Selling.Seller.OnServed start.*/
            OnServed: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#OnServed", this ); }

                var customer = this._currentCustomer;
                this._currentCustomer = null;

                this._line._Project$Code$Selling$ILine$OnCustomerServed(customer);
            },
            /*_Project.Code.Selling.Seller.OnServed end.*/


        }
    });
    /*_Project.Code.Selling.Seller end.*/

    /*_Project.Code.Services.CoroutineRunner.ICoroutineRunner start.*/
    Bridge.define("_Project.Code.Services.CoroutineRunner.ICoroutineRunner", {
        $kind: 3
    });
    /*_Project.Code.Services.CoroutineRunner.ICoroutineRunner end.*/

    /*_Project.Code.Services.Input.IMoveInput start.*/
    Bridge.define("_Project.Code.Services.Input.IMoveInput", {
        $kind: 3
    });
    /*_Project.Code.Services.Input.IMoveInput end.*/

    /*_Project.Code.Services.ItemsCreation.Dropper start.*/
    Bridge.define("_Project.Code.Services.ItemsCreation.Dropper", {
        fields: {
            _creator: null
        },
        ctors: {
            ctor: function (creator) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.Dropper#ctor", this ); }

                this.$initialize();
                this._creator = creator;
            }
        },
        methods: {
            /*_Project.Code.Services.ItemsCreation.Dropper.CreateDrop start.*/
            CreateDrop: function (type, position, count) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.Dropper#CreateDrop", this ); }

                if (count === void 0) { count = 4; }
                var items = new (System.Collections.Generic.List$1(_Project.Code.Core.Items.Item)).$ctor2(count);

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var item = this._creator.Create(type);

                    item.transform.position = position.$clone();
                    item.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, UnityEngine.Random.Range(0, 360) );
                    item.enabled = false;

                    items.add(item);
                }

                this.Animate(items, function () {
                    items.ForEach(function (i1) {
                        i1.enabled = true;
                    });
                });
            },
            /*_Project.Code.Services.ItemsCreation.Dropper.CreateDrop end.*/

            /*_Project.Code.Services.ItemsCreation.Dropper.Animate start.*/
            Animate: function (items, onCompleted) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.Dropper#Animate", this ); }

                var $t;
                if (onCompleted === void 0) { onCompleted = null; }
                var duration = 0.3;
                var radius = 0.3;
                var power = 0.3;
                var jumps = 1;

                var sequence = DG.Tweening.DOTween.Sequence();

                $t = Bridge.getEnumerator(items, _Project.Code.Core.Items.Item);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        var pointOnCircle = UnityEngine.Vector3.FromVector2(UnityEngine.Random.insideUnitCircle.clone().normalize().$clone());

                        var targetPosition = item.transform.position.$clone().add( pointOnCircle.$clone().clone().scale( radius ) );

                        DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.ShortcutExtensions.DOJump(item.transform, targetPosition.$clone(), power, jumps, duration));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, function () {
                    !Bridge.staticEquals(onCompleted, null) ? onCompleted() : null;
                }));
            },
            /*_Project.Code.Services.ItemsCreation.Dropper.Animate end.*/


        }
    });
    /*_Project.Code.Services.ItemsCreation.Dropper end.*/

    /*_Project.Code.Services.ItemsCreation.ItemsCreator start.*/
    Bridge.define("_Project.Code.Services.ItemsCreation.ItemsCreator", {
        fields: {
            _prefabs: null
        },
        ctors: {
            ctor: function (prefabs) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.ItemsCreator#ctor", this ); }

                this.$initialize();
                this._prefabs = prefabs;
            }
        },
        methods: {
            /*_Project.Code.Services.ItemsCreation.ItemsCreator.Create start.*/
            Create: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.ItemsCreator#Create", this ); }

                var prefab = System.Linq.Enumerable.from(this._prefabs, _Project.Code.Core.Items.Item).firstOrDefault(Bridge.fn.bind(this, function (p) {
                        return p.Type === type;
                    }), null);

                if (UnityEngine.MonoBehaviour.op_Equality(prefab, null)) {
                    throw new System.NullReferenceException.$ctor1("No prefab for type " + System.Enum.toString(_Project.Code.Core.Items.ItemType, type));
                }

                return UnityEngine.Object.Instantiate$2(_Project.Code.Core.Items.Item, prefab, pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
            },
            /*_Project.Code.Services.ItemsCreation.ItemsCreator.Create end.*/


        }
    });
    /*_Project.Code.Services.ItemsCreation.ItemsCreator end.*/

    /*_Project.Code.Services.ServiceLocator.L start.*/
    Bridge.define("_Project.Code.Services.ServiceLocator.L", {
        statics: {
            fields: {
                _container: null
            },
            props: {
                Container: {
                    get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Container#get", this ); }

                        return _Project.Code.Services.ServiceLocator.L._container || (function () {
                            throw new System.InvalidOperationException.$ctor1("ServiceLocator not initialized.");
                        })();
                    },
                    set: function (value) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Container#set", this ); }

                        _Project.Code.Services.ServiceLocator.L._container = value;
                    }
                }
            },
            methods: {
                /*_Project.Code.Services.ServiceLocator.L.Init:static start.*/
                Init: function (container) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Init", this ); }

                    _Project.Code.Services.ServiceLocator.L._container = container;
                },
                /*_Project.Code.Services.ServiceLocator.L.Init:static end.*/

                /*_Project.Code.Services.ServiceLocator.L.Reg:static start.*/
                Reg: function (TService, creator) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Reg", this ); }

                    return _Project.Code.Services.ServiceLocator.L._container.RegisterAsSingle(TService, creator);
                },
                /*_Project.Code.Services.ServiceLocator.L.Reg:static end.*/

                /*_Project.Code.Services.ServiceLocator.L.Resolve:static start.*/
                Resolve: function (TService) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Resolve", this ); }

                    return _Project.Code.Services.ServiceLocator.L._container.Resolve(TService);
                },
                /*_Project.Code.Services.ServiceLocator.L.Resolve:static end.*/


            }
        }
    });
    /*_Project.Code.Services.ServiceLocator.L end.*/

    /*_Project.Code.Tutorial.StorageTrashView start.*/
    Bridge.define("_Project.Code.Tutorial.StorageTrashView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _inventory: null
        },
        methods: {
            /*_Project.Code.Tutorial.StorageTrashView.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.StorageTrashView#OnEnable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._inventory, null)) {
                    return;
                }

                this._inventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                this._inventory.addRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
            },
            /*_Project.Code.Tutorial.StorageTrashView.OnEnable end.*/

            /*_Project.Code.Tutorial.StorageTrashView.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.StorageTrashView#OnDisable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._inventory, null)) {
                    return;
                }

                this._inventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                this._inventory.removeRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
            },
            /*_Project.Code.Tutorial.StorageTrashView.OnDisable end.*/

            /*_Project.Code.Tutorial.StorageTrashView.OnRemoved start.*/
            OnRemoved: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.StorageTrashView#OnRemoved", this ); }
 },
            /*_Project.Code.Tutorial.StorageTrashView.OnRemoved end.*/

            /*_Project.Code.Tutorial.StorageTrashView.OnAdded start.*/
            OnAdded: function (collectable) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.StorageTrashView#OnAdded", this ); }

                UnityEngine.MonoBehaviour.Destroy(collectable.gameObject);
            },
            /*_Project.Code.Tutorial.StorageTrashView.OnAdded end.*/


        }
    });
    /*_Project.Code.Tutorial.StorageTrashView end.*/

    /*_Project.Code.Tutorial.Tutorial start.*/
    Bridge.define("_Project.Code.Tutorial.Tutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _tutorialCollider: null,
            _tutorialText: null,
            _tutorialInventory: null,
            _joystick: null,
            _arrow: null,
            _point1: null,
            _point2: null,
            _buyable: null
        },
        methods: {
            /*_Project.Code.Tutorial.Tutorial.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.Tutorial#Start", this ); }

                this._tutorialText.gameObject.SetActive(true);
                this._tutorialCollider.enabled = true;
                this._arrow.gameObject.SetActive(false);
                this._tutorialInventory.gameObject.SetActive(false);
                this.StartCoroutine$1(this.TutorialCoroutine());
            },
            /*_Project.Code.Tutorial.Tutorial.Start end.*/

            /*_Project.Code.Tutorial.Tutorial.TutorialCoroutine start.*/
            TutorialCoroutine: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.Tutorial#TutorialCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new _Project.Code.Tutorial.WaitForJoystickMove(this._joystick);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._tutorialText.gameObject.SetActive(false);

                                        this._tutorialInventory.gameObject.SetActive(true);
                                        this._arrow.gameObject.SetActive(true);

                                        this._arrow.transform.position = this._point1.position.$clone();

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if ( true ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    if (this._tutorialInventory.IsEmpty) {
                                            this._arrow.transform.position = this._point2.position.$clone();
                                            $step = 5;
                                            continue;
                                        }

                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    if ( true ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    if (this._buyable.IsBought) {
                                            UnityEngine.Debug.Log$1("Buyed");
                                            this._arrow.gameObject.SetActive(false);
                                            $step = 8;
                                            continue;
                                        }

                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this._tutorialCollider.enabled = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Tutorial.Tutorial.TutorialCoroutine end.*/


        }
    });
    /*_Project.Code.Tutorial.Tutorial end.*/

    /*_Project.Code.Tutorial.WaitForJoystickMove start.*/
    Bridge.define("_Project.Code.Tutorial.WaitForJoystickMove", {
        inherits: [UnityEngine.CustomYieldInstruction],
        fields: {
            _joystick: null,
            _threshold: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.WaitForJoystickMove#keepWaiting#get", this ); }

                    return this._joystick.Direction.length() <= this._threshold;
                }
            }
        },
        ctors: {
            ctor: function (joystick, threshold) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.WaitForJoystickMove#ctor", this ); }

                if (threshold === void 0) { threshold = 0.05; }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this._joystick = joystick;
                this._threshold = threshold;
            }
        }
    });
    /*_Project.Code.Tutorial.WaitForJoystickMove end.*/

    /*_Project.Code.Tutorial.WaitForJoystickStop start.*/
    Bridge.define("_Project.Code.Tutorial.WaitForJoystickStop", {
        inherits: [UnityEngine.CustomYieldInstruction],
        fields: {
            _joystick: null,
            _threshold: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.WaitForJoystickStop#keepWaiting#get", this ); }

                    return this._joystick.Direction.length() >= this._threshold;
                }
            }
        },
        ctors: {
            ctor: function (joystick, threshold) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.WaitForJoystickStop#ctor", this ); }

                if (threshold === void 0) { threshold = 0.05; }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this._joystick = joystick;
                this._threshold = threshold;
            }
        }
    });
    /*_Project.Code.Tutorial.WaitForJoystickStop end.*/

    /*_Project.Code.UI.CoinsCounterUpdater start.*/
    Bridge.define("_Project.Code.UI.CoinsCounterUpdater", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _text: null,
            _inventory: null,
            _counter: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#init", this ); }

                this._counter = 0;
            }
        },
        methods: {
            /*_Project.Code.UI.CoinsCounterUpdater.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#OnEnable", this ); }

                this._inventory.addAdded(Bridge.fn.cacheBind(this, this.OnCoinAdded));
                this._inventory.addRemoved(Bridge.fn.cacheBind(this, this.OnCoinRemoved));
            },
            /*_Project.Code.UI.CoinsCounterUpdater.OnEnable end.*/

            /*_Project.Code.UI.CoinsCounterUpdater.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#OnDisable", this ); }

                this._inventory.removeAdded(Bridge.fn.cacheBind(this, this.OnCoinAdded));
                this._inventory.removeRemoved(Bridge.fn.cacheBind(this, this.OnCoinRemoved));
            },
            /*_Project.Code.UI.CoinsCounterUpdater.OnDisable end.*/

            /*_Project.Code.UI.CoinsCounterUpdater.OnCoinRemoved start.*/
            OnCoinRemoved: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#OnCoinRemoved", this ); }

                this._counter = (this._counter - 1) | 0;
                this.UpdateView();
            },
            /*_Project.Code.UI.CoinsCounterUpdater.OnCoinRemoved end.*/

            /*_Project.Code.UI.CoinsCounterUpdater.OnCoinAdded start.*/
            OnCoinAdded: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#OnCoinAdded", this ); }

                this._counter = (this._counter + 1) | 0;
                this.UpdateView();
            },
            /*_Project.Code.UI.CoinsCounterUpdater.OnCoinAdded end.*/

            /*_Project.Code.UI.CoinsCounterUpdater.UpdateView start.*/
            UpdateView: function () {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#UpdateView", this ); }

                this._text.text = Bridge.toString(this._counter);
            },
            /*_Project.Code.UI.CoinsCounterUpdater.UpdateView end.*/


        }
    });
    /*_Project.Code.UI.CoinsCounterUpdater end.*/

    /*ArrowAnimator start.*/
    Bridge.define("ArrowAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*ArrowAnimator.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ArrowAnimator#Start", this ); }


            },
            /*ArrowAnimator.Start end.*/

            /*ArrowAnimator.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ArrowAnimator#Update", this ); }

                this.transform.localPosition = pc.Vec3.UP.clone().clone().scale( (Math.sin(UnityEngine.Time.time * 7.0) * 0.1) );
            },
            /*ArrowAnimator.Update end.*/


        }
    });
    /*ArrowAnimator end.*/

    /*Assets.CourseGame.Develop.DI.DIContainer start.*/
    Bridge.define("Assets.CourseGame.Develop.DI.DIContainer", {
        inherits: [System.IDisposable],
        fields: {
            _container: null,
            _parent: null,
            _requests: null
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#init", this ); }

                this._container = new (System.Collections.Generic.Dictionary$2(System.Type,Assets.CourseGame.Develop.DI.DIContainer.Registration)).ctor();
                this._requests = new (System.Collections.Generic.List$1(System.Type)).ctor();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#ctor", this ); }

                Assets.CourseGame.Develop.DI.DIContainer.$ctor1.call(this, null);
            },
            $ctor1: function (parent) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#$ctor1", this ); }

                this.$initialize();
                this._parent = parent;
            }
        },
        methods: {
            /*Assets.CourseGame.Develop.DI.DIContainer.RegisterAsSingle start.*/
            RegisterAsSingle: function (T, creator) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#RegisterAsSingle", this ); }

                if (this.IsAlreadyRegister(T)) {
                    throw new System.InvalidOperationException.$ctor1(System.String.format("{0} already register", [T]));
                }

                var registration = new Assets.CourseGame.Develop.DI.DIContainer.Registration.ctor(function (container) {
                    return creator(container);
                });
                this._container.setItem(T, registration);
                return registration;
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.RegisterAsSingle end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.IsAlreadyRegister start.*/
            IsAlreadyRegister: function (T) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#IsAlreadyRegister", this ); }

                if (this._container.containsKey(T)) {
                    return true;
                }

                if (this._parent != null) {
                    return this._parent.IsAlreadyRegister(T);
                }

                return false;
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.IsAlreadyRegister end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.Resolve start.*/
            Resolve: function (T) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#Resolve", this ); }

                if (this._requests.contains(T)) {
                    throw new System.InvalidOperationException.$ctor1(System.String.format("Cycle resolve for {0}", [T]));
                }

                this._requests.add(T);

                try {
                    var registration = { };
                    if (this._container.tryGetValue(T, registration)) {
                        return this.CreateFrom(T, registration.v);
                    }

                    if (this._parent != null) {
                        return this._parent.Resolve(T);
                    }
                } finally {
                    this._requests.remove(T);
                }

                throw new System.InvalidOperationException.$ctor1(System.String.format("Registration for {0} not exist", [T]));
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.Resolve end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#Initialize", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._container.Values);
                try {
                    while ($t.moveNext()) {
                        var registration = $t.Current;
                        if (registration.Instance == null && registration.IsNonLazy) {
                            registration.Instance = registration.Creator(this);
                        }

                        if (registration.Instance != null) {
                            var initializable;
                            if (((initializable = Bridge.as(registration.Instance, Assets.CourseGame.Develop.DI.IInitializable))) != null) {
                                initializable.Assets$CourseGame$Develop$DI$IInitializable$Initialize();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.Initialize end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#Dispose", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._container.Values);
                try {
                    while ($t.moveNext()) {
                        var registration = $t.Current;
                        if (registration.Instance != null) {
                            var disposable;
                            if (((disposable = Bridge.as(registration.Instance, System.IDisposable))) != null) {
                                disposable.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.Dispose end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.CreateFrom start.*/
            CreateFrom: function (T, registration) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#CreateFrom", this ); }

                if (registration.Instance == null && !Bridge.staticEquals(registration.Creator, null)) {
                    registration.Instance = registration.Creator(this);
                }

                return Bridge.cast(Bridge.unbox(registration.Instance, T), T);
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.CreateFrom end.*/


        }
    });
    /*Assets.CourseGame.Develop.DI.DIContainer end.*/

    /*Assets.CourseGame.Develop.DI.DIContainer+Registration start.*/
    Bridge.define("Assets.CourseGame.Develop.DI.DIContainer.Registration", {
        $kind: 1002,
        fields: {
            Creator: null,
            Instance: null,
            IsNonLazy: false
        },
        ctors: {
            $ctor1: function (instance) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer.Registration#$ctor1", this ); }

                this.$initialize();
                this.Instance = instance;
            },
            ctor: function (creator) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer.Registration#ctor", this ); }

                this.$initialize();
                this.Creator = creator;
            }
        },
        methods: {
            /*Assets.CourseGame.Develop.DI.DIContainer+Registration.NonLazy start.*/
            NonLazy: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer.Registration#NonLazy", this ); }

                this.IsNonLazy = true;
            },
            /*Assets.CourseGame.Develop.DI.DIContainer+Registration.NonLazy end.*/


        }
    });
    /*Assets.CourseGame.Develop.DI.DIContainer+Registration end.*/

    /*Assets.CourseGame.Develop.DI.IInitializable start.*/
    Bridge.define("Assets.CourseGame.Develop.DI.IInitializable", {
        $kind: 3
    });
    /*Assets.CourseGame.Develop.DI.IInitializable end.*/

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: 6,
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*CTA start.*/
    Bridge.define("CTA", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*CTA.Click start.*/
            Click: function () {
if ( TRACE ) { TRACE( "CTA#Click", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*CTA.Click end.*/


        }
    });
    /*CTA end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            _handle: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Horizontal#get", this ); }

                    return (this.snapX) ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return (this.snapY) ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#HandleRange#get", this ); }

                    return this.handleRange;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#HandleRange#set", this ); }

                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#DeadZone#get", this ); }

                    return this.deadZone;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#DeadZone#set", this ); }

                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#get", this ); }

                    return this.AxisOptions;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#set", this ); }

                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapX#get", this ); }

                    return this.snapX;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapX#set", this ); }

                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapY#get", this ); }

                    return this.snapY;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapY#set", this ); }

                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.input = new UnityEngine.Vector2();
                this.handleRange = 1;
                this.deadZone = 0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Joystick#Start", this ); }

                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }

                var center = new pc.Vec2( 0.5, 0.5 );
                this.background.pivot = center.$clone();
                this._handle.anchorMin = center.$clone();
                this._handle.anchorMax = center.$clone();
                this._handle.pivot = center.$clone();
                this._handle.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                this.OnDrag(eventData);
            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position);
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize(), radius, this.cam);
                this._handle.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "Joystick#FormatInput", this ); }

                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else {
                    if (this.axisOptions === AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0) {
                    return value;
                }

                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    if (snapAxis === AxisOptions.Horizontal) {
                        if (angle < 22.5 || angle > 157.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    } else if (snapAxis === AxisOptions.Vertical) {
                        if (angle > 67.5 && angle < 112.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    }
                    return value;
                } else {
                    if (value > 0) {
                        return 1;
                    }
                    if (value < 0) {
                        return -1;
                    }
                }
                return 0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this._handle.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*GlobalEvents start.*/
    Bridge.define("GlobalEvents", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                OnAddCoinEvent: null,
                OnAddCornEvent: null,
                OnAddPopcornEvent: null,
                OnEndScreenEvent: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GlobalEvents#init", this ); }

                    this.OnAddCoinEvent = new UnityEngine.Events.UnityEvent();
                    this.OnAddCornEvent = new UnityEngine.Events.UnityEvent();
                    this.OnAddPopcornEvent = new UnityEngine.Events.UnityEvent();
                    this.OnEndScreenEvent = new UnityEngine.Events.UnityEvent();
                }
            },
            methods: {
                /*GlobalEvents.SendOnAddCoin:static start.*/
                SendOnAddCoin: function () {
if ( TRACE ) { TRACE( "GlobalEvents#SendOnAddCoin", this ); }

                    GlobalEvents.OnAddCoinEvent.Invoke();
                },
                /*GlobalEvents.SendOnAddCoin:static end.*/

                /*GlobalEvents.SendOnAddCorn:static start.*/
                SendOnAddCorn: function () {
if ( TRACE ) { TRACE( "GlobalEvents#SendOnAddCorn", this ); }

                    GlobalEvents.OnAddCornEvent.Invoke();
                },
                /*GlobalEvents.SendOnAddCorn:static end.*/

                /*GlobalEvents.SendOnAddPopcorn:static start.*/
                SendOnAddPopcorn: function () {
if ( TRACE ) { TRACE( "GlobalEvents#SendOnAddPopcorn", this ); }

                    GlobalEvents.OnAddPopcornEvent.Invoke();
                },
                /*GlobalEvents.SendOnAddPopcorn:static end.*/

                /*GlobalEvents.SendOnEndScreen:static start.*/
                SendOnEndScreen: function () {
if ( TRACE ) { TRACE( "GlobalEvents#SendOnEndScreen", this ); }

                    GlobalEvents.OnEndScreenEvent.Invoke();
                },
                /*GlobalEvents.SendOnEndScreen:static end.*/


            }
        }
    });
    /*GlobalEvents end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: 6,
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*MusicItemAdded start.*/
    Bridge.define("MusicItemAdded", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            musicSource: null,
            musicClip_coin: null,
            musicClip_corn: null,
            musicClip_popcorn: null
        },
        methods: {
            /*MusicItemAdded.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MusicItemAdded#Awake", this ); }

                GlobalEvents.OnAddCoinEvent.AddListener(Bridge.fn.cacheBind(this, this.MusicCoin));
                GlobalEvents.OnAddCornEvent.AddListener(Bridge.fn.cacheBind(this, this.MusicCorn));
                GlobalEvents.OnAddPopcornEvent.AddListener(Bridge.fn.cacheBind(this, this.MusicPopcorn));
            },
            /*MusicItemAdded.Awake end.*/

            /*MusicItemAdded.MusicCoin start.*/
            MusicCoin: function () {
if ( TRACE ) { TRACE( "MusicItemAdded#MusicCoin", this ); }

                if (Bridge.referenceEquals(this.musicSource.clip, this.musicClip_coin) && this.musicSource.isPlaying) {
                    return;
                }

                if (Bridge.referenceEquals(this.musicSource.clip, this.musicClip_coin) && !this.musicSource.isPlaying) {
                    this.musicSource.clip = this.musicClip_coin;
                    this.musicSource.Play();
                }

            },
            /*MusicItemAdded.MusicCoin end.*/

            /*MusicItemAdded.MusicCorn start.*/
            MusicCorn: function () {
if ( TRACE ) { TRACE( "MusicItemAdded#MusicCorn", this ); }

                if (Bridge.referenceEquals(this.musicSource.clip, this.musicClip_corn) && this.musicSource.isPlaying) {
                    return;
                }

                if (Bridge.referenceEquals(this.musicSource.clip, this.musicClip_corn) && !this.musicSource.isPlaying) {
                    this.musicSource.clip = this.musicClip_corn;
                    this.musicSource.Play();
                }

            },
            /*MusicItemAdded.MusicCorn end.*/

            /*MusicItemAdded.MusicPopcorn start.*/
            MusicPopcorn: function () {
if ( TRACE ) { TRACE( "MusicItemAdded#MusicPopcorn", this ); }

                if (Bridge.referenceEquals(this.musicSource.clip, this.musicClip_popcorn) && this.musicSource.isPlaying) {
                    return;
                }

                if (Bridge.referenceEquals(this.musicSource.clip, this.musicClip_popcorn) && !this.musicSource.isPlaying) {
                    this.musicSource.clip = this.musicClip_popcorn;
                    this.musicSource.Play();
                }

            },
            /*MusicItemAdded.MusicPopcorn end.*/


        }
    });
    /*MusicItemAdded end.*/

    /*PrintCopacity start.*/
    Bridge.define("PrintCopacity", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _textMeshPro: null,
            itemInventory: null
        },
        methods: {
            /*PrintCopacity.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PrintCopacity#Update", this ); }

                this._textMeshPro.text = Bridge.toString(this.itemInventory.RemainingCapacity);
            },
            /*PrintCopacity.Update end.*/


        }
    });
    /*PrintCopacity end.*/

    /*_Project.Code.Core.Buyables.Buyable start.*/
    Bridge.define("_Project.Code.Core.Buyables.Buyable", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Tutorial.IBuyable],
        fields: {
            _itemInventory: null,
            _price: 0,
            _activateOnBought: null,
            _deactivateOnBought: null
        },
        props: {
            IsBought: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#IsBought#get", this ); }

                    return this.gameObject.activeSelf === false;
                }
            }
        },
        alias: [
            "IsBought", "_Project$Code$Tutorial$IBuyable$IsBought",
            "Buy", "_Project$Code$Tutorial$IBuyable$Buy"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#init", this ); }

                this._price = 10;
            }
        },
        methods: {
            /*_Project.Code.Core.Buyables.Buyable.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#Awake", this ); }

                this._itemInventory.SetType(_Project.Code.Core.Items.ItemType.Coin);
                this._itemInventory.SetOperation(_Project.Code.Core.Items.Inventory.InventoryType.Receiver);
                this._itemInventory.SetCapacity(this.GetCapacity());
            },
            /*_Project.Code.Core.Buyables.Buyable.Awake end.*/

            /*_Project.Code.Core.Buyables.Buyable.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#OnEnable", this ); }

                this._itemInventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.Buyables.Buyable.OnEnable end.*/

            /*_Project.Code.Core.Buyables.Buyable.OnAdded start.*/
            OnAdded: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#OnAdded", this ); }

                if (this._itemInventory.Count === this._itemInventory.Capacity) {
                    this.Buy();
                }
            },
            /*_Project.Code.Core.Buyables.Buyable.OnAdded end.*/

            /*_Project.Code.Core.Buyables.Buyable.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#OnDisable", this ); }

                this._itemInventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.Buyables.Buyable.OnDisable end.*/

            /*_Project.Code.Core.Buyables.Buyable.GetCapacity start.*/
            GetCapacity: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#GetCapacity", this ); }

                return this._price;
            },
            /*_Project.Code.Core.Buyables.Buyable.GetCapacity end.*/

            /*_Project.Code.Core.Buyables.Buyable.Buy start.*/
            Buy: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#Buy", this ); }

                UnityEngine.GameObject.op_Inequality(this._activateOnBought, null) ? this._activateOnBought.SetActive(true) : null;
                this._deactivateOnBought.ForEach(function (g) {
                    g.SetActive(false);
                });
            },
            /*_Project.Code.Core.Buyables.Buyable.Buy end.*/


        }
    });
    /*_Project.Code.Core.Buyables.Buyable end.*/

    /*_Project.Code.Core.Buyables.InventorViewDestroyer start.*/
    Bridge.define("_Project.Code.Core.Buyables.InventorViewDestroyer", {
        inherits: [_Project.Code.Core.Items.Inventory.BaseInventoryView],
        methods: {
            /*_Project.Code.Core.Buyables.InventorViewDestroyer.OnRemoved start.*/
            OnRemoved: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.InventorViewDestroyer#OnRemoved", this ); }
 },
            /*_Project.Code.Core.Buyables.InventorViewDestroyer.OnRemoved end.*/

            /*_Project.Code.Core.Buyables.InventorViewDestroyer.OnAdded start.*/
            OnAdded: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.InventorViewDestroyer#OnAdded", this ); }

                UnityEngine.MonoBehaviour.Destroy(item.gameObject);
            },
            /*_Project.Code.Core.Buyables.InventorViewDestroyer.OnAdded end.*/


        }
    });
    /*_Project.Code.Core.Buyables.InventorViewDestroyer end.*/

    /*_Project.Code.Core.Collision.CollisionDetector start.*/
    Bridge.define("_Project.Code.Core.Collision.CollisionDetector", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Core.Collision.ICollisionDetector],
        events: {
            Triggered: null,
            TriggerEnter: null,
            TriggerStay: null,
            TriggerExit: null
        },
        alias: [
            "addTriggered", "_Project$Code$Core$Collision$ICollisionDetector$addTriggered",
            "removeTriggered", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggered",
            "addTriggerEnter", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerEnter",
            "removeTriggerEnter", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerEnter",
            "addTriggerStay", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerStay",
            "removeTriggerStay", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerStay",
            "addTriggerExit", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerExit",
            "removeTriggerExit", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerExit"
        ],
        methods: {
            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.CollisionDetector#OnTriggerEnter2D", this ); }

                this.Handle(other, _Project.Code.Core.Collision.CollisionType.Enter);
            },
            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerEnter2D end.*/

            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerStay2D start.*/
            OnTriggerStay2D: function (other) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.CollisionDetector#OnTriggerStay2D", this ); }

                this.Handle(other, _Project.Code.Core.Collision.CollisionType.Stay);
            },
            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerStay2D end.*/

            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerExit2D start.*/
            OnTriggerExit2D: function (other) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.CollisionDetector#OnTriggerExit2D", this ); }

                this.Handle(other, _Project.Code.Core.Collision.CollisionType.Exit);
            },
            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerExit2D end.*/

            /*_Project.Code.Core.Collision.CollisionDetector.Handle start.*/
            Handle: function (other, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.CollisionDetector#Handle", this ); }

                !Bridge.staticEquals(this.Triggered, null) ? this.Triggered(other, type) : null;

                switch (type) {
                    case _Project.Code.Core.Collision.CollisionType.Enter: 
                        !Bridge.staticEquals(this.TriggerEnter, null) ? this.TriggerEnter(other) : null;
                        break;
                    case _Project.Code.Core.Collision.CollisionType.Stay: 
                        !Bridge.staticEquals(this.TriggerStay, null) ? this.TriggerStay(other) : null;
                        break;
                    case _Project.Code.Core.Collision.CollisionType.Exit: 
                        !Bridge.staticEquals(this.TriggerExit, null) ? this.TriggerExit(other) : null;
                        break;
                }
            },
            /*_Project.Code.Core.Collision.CollisionDetector.Handle end.*/


        }
    });
    /*_Project.Code.Core.Collision.CollisionDetector end.*/

    /*_Project.Code.Core.Collision.OverlapCollisionDetector start.*/
    Bridge.define("_Project.Code.Core.Collision.OverlapCollisionDetector", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Core.Collision.ICollisionDetector],
        fields: {
            detectionRadius: 0,
            collisionMask: null,
            _previousColliders: null,
            _currentColliders: null
        },
        events: {
            Triggered: null,
            TriggerEnter: null,
            TriggerStay: null,
            TriggerExit: null
        },
        alias: [
            "addTriggered", "_Project$Code$Core$Collision$ICollisionDetector$addTriggered",
            "removeTriggered", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggered",
            "addTriggerEnter", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerEnter",
            "removeTriggerEnter", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerEnter",
            "addTriggerStay", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerStay",
            "removeTriggerStay", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerStay",
            "addTriggerExit", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerExit",
            "removeTriggerExit", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerExit"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#init", this ); }

                this.collisionMask = new UnityEngine.LayerMask();
                this.detectionRadius = 1.0;
                this._previousColliders = System.Array.init(40, null, UnityEngine.Collider2D);
                this._currentColliders = System.Array.init(40, null, UnityEngine.Collider2D);
            }
        },
        methods: {
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#FixedUpdate", this ); }

                this.DetectCollisions();
            },
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.FixedUpdate end.*/

            /*_Project.Code.Core.Collision.OverlapCollisionDetector.DetectCollisions start.*/
            DetectCollisions: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#DetectCollisions", this ); }

                var $t;
                System.Array.copy(this._currentColliders, 0, this._previousColliders, 0, this._currentColliders.length);
                System.Array.fill(this._currentColliders, null, 0, this._currentColliders.length);

                var count = UnityEngine.Physics2D.OverlapCircleNonAlloc(UnityEngine.Vector2.FromVector3(this.transform.position), this.detectionRadius, this._currentColliders, UnityEngine.LayerMask.op_Implicit(this.collisionMask.$clone()));

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var collider = this._currentColliders[i];
                    if (System.Array.indexOfT(this._previousColliders, collider) === -1) {
                        this.Handle(collider, _Project.Code.Core.Collision.CollisionType.Enter);
                    } else {
                        this.Handle(collider, _Project.Code.Core.Collision.CollisionType.Stay);
                    }
                }

                $t = Bridge.getEnumerator(this._previousColliders);
                try {
                    while ($t.moveNext()) {
                        var prevCollider = $t.Current;
                        if (UnityEngine.Component.op_Inequality(prevCollider, null) && System.Array.indexOfT(this._currentColliders, prevCollider) === -1) {
                            this.Handle(prevCollider, _Project.Code.Core.Collision.CollisionType.Exit);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.DetectCollisions end.*/

            /*_Project.Code.Core.Collision.OverlapCollisionDetector.Handle start.*/
            Handle: function (other, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#Handle", this ); }

                //Debug.Log($"Collision {type} with {other.name}");

                !Bridge.staticEquals(this.Triggered, null) ? this.Triggered(other, type) : null;

                switch (type) {
                    case _Project.Code.Core.Collision.CollisionType.Enter: 
                        !Bridge.staticEquals(this.TriggerEnter, null) ? this.TriggerEnter(other) : null;
                        break;
                    case _Project.Code.Core.Collision.CollisionType.Stay: 
                        !Bridge.staticEquals(this.TriggerStay, null) ? this.TriggerStay(other) : null;
                        break;
                    case _Project.Code.Core.Collision.CollisionType.Exit: 
                        !Bridge.staticEquals(this.TriggerExit, null) ? this.TriggerExit(other) : null;
                        break;
                }
            },
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.Handle end.*/

            /*_Project.Code.Core.Collision.OverlapCollisionDetector.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#OnDrawGizmos", this ); }

                pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 0, 0, 1 );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
            },
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.OnDrawGizmos end.*/


        }
    });
    /*_Project.Code.Core.Collision.OverlapCollisionDetector end.*/

    /*_Project.Code.Core.Items.Inventory.ColumnInventoryView start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.ColumnInventoryView", {
        inherits: [_Project.Code.Core.Items.Inventory.BaseInventoryView],
        fields: {
            _columnPoints: null,
            _destroyOnEmptied: false,
            _rowIndex: 0,
            _columnIndex: 0
        },
        props: {
            Height: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#Height#get", this ); }

                    return this._columnIndex * 0.2;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#init", this ); }

                this._rowIndex = -1;
                this._columnIndex = 0;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#Awake", this ); }

                if (this._columnPoints.Count < 1) {
                    throw new System.NullReferenceException.$ctor1("No column points");
                }
            },
            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.Awake end.*/

            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.OnRemoved start.*/
            OnRemoved: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#OnRemoved", this ); }

                this._rowIndex = (this._rowIndex - 1) | 0;

                if (this._rowIndex < 0) {
                    this._rowIndex = (this._columnPoints.Count - 1) | 0;
                    this._columnIndex = (this._columnIndex - 1) | 0;
                }

                item.transform.parent = null;

                if (this._destroyOnEmptied && this.ItemsCount === 0) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.OnRemoved end.*/

            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.OnAdded start.*/
            OnAdded: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#OnAdded", this ); }

                this._rowIndex = (this._rowIndex + 1) | 0;

                if (this._rowIndex >= this._columnPoints.Count) {
                    this._rowIndex = 0;
                    this._columnIndex = (this._columnIndex + 1) | 0;
                }

                item.transform.parent = this._columnPoints.getItem(this._rowIndex);

                item.transform.localPosition = pc.Vec3.ZERO.clone().add( pc.Vec3.UP.clone().clone().scale( this.Height ) );
                item.transform.rotation = pc.Quat.IDENTITY.clone();
            },
            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.OnAdded end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.ColumnInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.ItemInventory start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.ItemInventory", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Tutorial.IStorage],
        fields: {
            _collectables: null,
            _type: 0,
            _inventory: 0,
            _capacity: 0,
            _musicItemAdded: null
        },
        events: {
            Added: null,
            Removed: null
        },
        props: {
            ItemType: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#ItemType#get", this ); }

                    return this._type;
                }
            },
            InventoryType: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#InventoryType#get", this ); }

                    return this._inventory;
                }
            },
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#Count#get", this ); }

                    return this._collectables.Count;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#IsEmpty#get", this ); }

                    return this.Count <= 0;
                }
            },
            RemainingCapacity: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#RemainingCapacity#get", this ); }

                    return ((this._capacity - this._collectables.Count) | 0);
                }
            },
            Capacity: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#Capacity#get", this ); }

                    return this._capacity;
                }
            }
        },
        alias: ["IsEmpty", "_Project$Code$Tutorial$IStorage$IsEmpty"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#init", this ); }

                this._collectables = new (System.Collections.Generic.Stack$1(_Project.Code.Core.Items.Item)).ctor();
                this._capacity = 50;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.ItemInventory.CanAdd start.*/
            CanAdd: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#CanAdd", this ); }

                return this._collectables.Count < this._capacity;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.CanAdd end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.CanGet start.*/
            CanGet: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#CanGet", this ); }

                return this._collectables.Count > 0;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.CanGet end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.Add start.*/
            Add: function (collectable) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#Add", this ); }

                UnityEngine.Debug.Log$1(System.String.format("Adding {0} to {1} storage", Bridge.box(collectable.Type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType)), Bridge.box(this._type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))));

                if (!this.CanAdd()) {
                    throw new System.OperationCanceledException.$ctor1(System.String.format("Cant add to {0} storage", [Bridge.box(this._type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))]));
                }

                collectable.transform.localScale = pc.Vec3.ZERO.clone();

                if (this._type === _Project.Code.Core.Items.ItemType.Coin) {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(collectable.transform, new pc.Vec3( 0.19, 0.19, 0.19 ), 0.1));
                } else {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(collectable.transform, new pc.Vec3( 1, 1, 1 ), 0.1));
                }



                this._collectables.Push(collectable);

                !Bridge.staticEquals(this.Added, null) ? this.Added(collectable) : null;

                if (UnityEngine.MonoBehaviour.op_Inequality(this._musicItemAdded, null)) {
                    if (this._type === _Project.Code.Core.Items.ItemType.Corn) {
                        GlobalEvents.SendOnAddCorn();
                    }
                }
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.Add end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetCapacity start.*/
            SetCapacity: function (capacity) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#SetCapacity", this ); }

                this._capacity = capacity;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetCapacity end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.Get start.*/
            Get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#Get", this ); }

                if (!this.CanGet()) {
                    throw new System.InvalidOperationException.$ctor1("Storage is empty");
                }

                var collectable = this._collectables.Pop();

                !Bridge.staticEquals(this.Removed, null) ? this.Removed(collectable) : null;


                return collectable;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.Get end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.TryGet start.*/
            TryGet: function (collectable) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#TryGet", this ); }

                if (!this.CanGet()) {
                    collectable.v = null;
                    return false;
                }

                collectable.v = this._collectables.Pop();
                return true;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.TryGet end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetType start.*/
            SetType: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#SetType", this ); }

                this._type = type;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetType end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetOperation start.*/
            SetOperation: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#SetOperation", this ); }

                this._inventory = type;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetOperation end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.ItemInventory end.*/

    /*_Project.Code.Entry.StorageFabric start.*/
    Bridge.define("_Project.Code.Entry.StorageFabric", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Tutorial.IStorageFabric],
        fields: {
            _inventoryPrefab: null,
            _coinPrefab: null
        },
        alias: ["CreateNew", "_Project$Code$Tutorial$IStorageFabric$CreateNew"],
        methods: {
            /*_Project.Code.Entry.StorageFabric.CreateNew start.*/
            CreateNew: function (position, type, count) {
if ( TRACE ) { TRACE( "_Project.Code.Entry.StorageFabric#CreateNew", this ); }

                var storage = UnityEngine.Object.Instantiate$2(_Project.Code.Core.Items.Inventory.ItemInventory, this._inventoryPrefab, position, pc.Quat.IDENTITY.clone());

                storage.SetType(type);
                storage.SetOperation(_Project.Code.Core.Items.Inventory.InventoryType.Sender);

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    storage.Add(this.Instantiate(type));
                }

                return storage;
            },
            /*_Project.Code.Entry.StorageFabric.CreateNew end.*/

            /*_Project.Code.Entry.StorageFabric.Instantiate start.*/
            Instantiate: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Entry.StorageFabric#Instantiate", this ); }

                return UnityEngine.Object.Instantiate(_Project.Code.Core.Items.Item, this._coinPrefab);
            },
            /*_Project.Code.Entry.StorageFabric.Instantiate end.*/


        }
    });
    /*_Project.Code.Entry.StorageFabric end.*/

    /*_Project.Code.Selling.Line.Line start.*/
    Bridge.define("_Project.Code.Selling.Line.Line", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Selling.ILine],
        fields: {
            _customerPrefab: null,
            _customerAnimatorControllers: null,
            _spawnPoints: null,
            _customers: null,
            _reservedCount: 0,
            _spawnRequests: 0,
            _lastGeneratedIndex: 0
        },
        alias: [
            "TryGetCustomer", "_Project$Code$Selling$ILine$TryGetCustomer",
            "OnCustomerServed", "_Project$Code$Selling$ILine$OnCustomerServed"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#init", this ); }

                this._customerAnimatorControllers = new (System.Collections.Generic.List$1(UnityEditor.Animations.AnimatorController)).ctor();
                this._spawnPoints = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this._customers = new (System.Collections.Generic.Queue$1(_Project.Code.Selling.Customer)).ctor();
                this._lastGeneratedIndex = -1;
            }
        },
        methods: {
            /*_Project.Code.Selling.Line.Line.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#OnEnable", this ); }

                this.Init();
            },
            /*_Project.Code.Selling.Line.Line.OnEnable end.*/

            /*_Project.Code.Selling.Line.Line.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#Init", this ); }

                this.RequestCreation$1(this._spawnPoints.Count);

                this.StartCoroutine$1(this.CreatingCustomers());
            },
            /*_Project.Code.Selling.Line.Line.Init end.*/

            /*_Project.Code.Selling.Line.Line.CreateNewCustomer start.*/
            CreateNewCustomer: function (i) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#CreateNewCustomer", this ); }

                var point = this._spawnPoints.getItem(i);
                var customer = UnityEngine.Object.Instantiate$1(_Project.Code.Selling.Customer, this._customerPrefab, point, true);

                customer.transform.localPosition = pc.Vec3.ZERO.clone();

                var index;

                do {
                    index = UnityEngine.Random.Range(0, this._customerAnimatorControllers.Count);
                } while (index === this._lastGeneratedIndex);

                this._lastGeneratedIndex = index;

                var animator = this._customerAnimatorControllers.getItem(index);

                var orderSize = UnityEngine.Random.Range(1, 10);

                customer.Init(animator, orderSize, orderSize);

                this._customers.Enqueue(customer);

                return customer;
            },
            /*_Project.Code.Selling.Line.Line.CreateNewCustomer end.*/

            /*_Project.Code.Selling.Line.Line.TryGetCustomer start.*/
            TryGetCustomer: function (customer) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#TryGetCustomer", this ); }

                customer.v = this._customers.Count > 0 ? this._customers.Peek() : null;

                return UnityEngine.MonoBehaviour.op_Inequality(customer.v, null);
            },
            /*_Project.Code.Selling.Line.Line.TryGetCustomer end.*/

            /*_Project.Code.Selling.Line.Line.OnCustomerServed start.*/
            OnCustomerServed: function (customer) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#OnCustomerServed", this ); }

                var dequeued = this._customers.Dequeue();

                if (UnityEngine.MonoBehaviour.op_Inequality(customer, dequeued)) {
                    throw new System.InvalidOperationException.$ctor1("Customer is not the same as dequeued");
                }

                dequeued.enabled = false;

                this.MoveCustomers(Bridge.fn.cacheBind(this, this.RequestCreation));
            },
            /*_Project.Code.Selling.Line.Line.OnCustomerServed end.*/

            /*_Project.Code.Selling.Line.Line.RequestCreation$1 start.*/
            RequestCreation$1: function (count) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#RequestCreation$1", this ); }

                this._spawnRequests = (this._spawnRequests + count) | 0;
            },
            /*_Project.Code.Selling.Line.Line.RequestCreation$1 end.*/

            /*_Project.Code.Selling.Line.Line.RequestCreation start.*/
            RequestCreation: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#RequestCreation", this ); }

                this.RequestCreation$1(1);
            },
            /*_Project.Code.Selling.Line.Line.RequestCreation end.*/

            /*_Project.Code.Selling.Line.Line.CreatingCustomers start.*/
            CreatingCustomers: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#CreatingCustomers", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    pointIndex,
                    customer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.gameObject.activeSelf ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 1: {
                                    if (this._spawnRequests < 1 && this._customers.Count >= this._spawnPoints.Count) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 0;
                                        continue;
                                }
                                case 4: {
                                    pointIndex = this._customers.Count;
                                        customer = this.CreateNewCustomer(pointIndex);

                                        this._spawnRequests = (this._spawnRequests - 1) | 0;

                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 6: {
                                    //    customer.gameObject.SetActive(false);
                                        //    customer.enabled = false;

                                        //    customer.gameObject.SetActive(true);
                                        //    customer.enabled = true;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Selling.Line.Line.CreatingCustomers end.*/

            /*_Project.Code.Selling.Line.Line.MoveCustomers start.*/
            MoveCustomers: function (onFinished) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#MoveCustomers", this ); }

                if (onFinished === void 0) { onFinished = null; }
                var customersArray = this._customers.ToArray();
                this._customers.Clear();

                var sequence = DG.Tweening.DOTween.Sequence();

                for (var i = 0; i < ((customersArray.length + this._reservedCount) | 0); i = (i + 1) | 0) {
                    var customer = customersArray[i];

                    if (i < this._spawnPoints.Count) {
                        customer.transform.parent = this._spawnPoints.getItem(i);
                        DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.ShortcutExtensions.DOLocalMove(customer.transform, pc.Vec3.ZERO.clone(), 0.5));
                    }

                    this._customers.Enqueue(customer);
                }
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, function () {
                    !Bridge.staticEquals(onFinished, null) ? onFinished() : null;
                }));
            },
            /*_Project.Code.Selling.Line.Line.MoveCustomers end.*/


        },
        overloads: {
            "RequestCreation(int)": "RequestCreation$1"
        }
    });
    /*_Project.Code.Selling.Line.Line end.*/

    /*_Project.Code.Services.CoroutineRunner.CoroutineRunner start.*/
    Bridge.define("_Project.Code.Services.CoroutineRunner.CoroutineRunner", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Services.CoroutineRunner.ICoroutineRunner],
        alias: [
            "Launch", "_Project$Code$Services$CoroutineRunner$ICoroutineRunner$Launch",
            "Stop", "_Project$Code$Services$CoroutineRunner$ICoroutineRunner$Stop"
        ],
        methods: {
            /*_Project.Code.Services.CoroutineRunner.CoroutineRunner.Launch start.*/
            Launch: function (coroutine) {
if ( TRACE ) { TRACE( "_Project.Code.Services.CoroutineRunner.CoroutineRunner#Launch", this ); }

                this.StartCoroutine$1(coroutine);
            },
            /*_Project.Code.Services.CoroutineRunner.CoroutineRunner.Launch end.*/

            /*_Project.Code.Services.CoroutineRunner.CoroutineRunner.Stop start.*/
            Stop: function (coroutine) {
if ( TRACE ) { TRACE( "_Project.Code.Services.CoroutineRunner.CoroutineRunner#Stop", this ); }

                this.StopCoroutine(coroutine);
            },
            /*_Project.Code.Services.CoroutineRunner.CoroutineRunner.Stop end.*/


        }
    });
    /*_Project.Code.Services.CoroutineRunner.CoroutineRunner end.*/

    /*_Project.Code.Services.Input.KeyboardMoveInput start.*/
    Bridge.define("_Project.Code.Services.Input.KeyboardMoveInput", {
        inherits: [_Project.Code.Services.Input.IMoveInput],
        props: {
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.KeyboardMoveInput#Direction#get", this ); }

                    return new pc.Vec2( UnityEngine.Input.GetAxis("Horizontal"), UnityEngine.Input.GetAxis("Vertical") ).clone().normalize().$clone();
                }
            }
        },
        alias: ["Direction", "_Project$Code$Services$Input$IMoveInput$Direction"]
    });
    /*_Project.Code.Services.Input.KeyboardMoveInput end.*/

    /*_Project.Code.Services.Input.MoveInput start.*/
    Bridge.define("_Project.Code.Services.Input.MoveInput", {
        inherits: [_Project.Code.Services.Input.IMoveInput],
        fields: {
            Enabled: false,
            _joystick: null,
            _keyboardMoveInput: null
        },
        props: {
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.MoveInput#Direction#get", this ); }

                    return this.GetDirection();
                }
            }
        },
        alias: ["Direction", "_Project$Code$Services$Input$IMoveInput$Direction"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.MoveInput#init", this ); }

                this.Enabled = true;
                this._keyboardMoveInput = new _Project.Code.Services.Input.KeyboardMoveInput();
            },
            ctor: function (joystick) {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.MoveInput#ctor", this ); }

                this.$initialize();
                this._joystick = joystick;
            }
        },
        methods: {
            /*_Project.Code.Services.Input.MoveInput.GetDirection start.*/
            GetDirection: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.MoveInput#GetDirection", this ); }

                if (!this.Enabled) {
                    return pc.Vec2.ZERO.clone();
                }

                var joystick = this._joystick.Direction.$clone();
                var keyboard = new pc.Vec2( UnityEngine.Input.GetAxis("Horizontal"), UnityEngine.Input.GetAxis("Vertical") ).clone().normalize().$clone();

                if (joystick.length() > 0.1) {
                    return joystick.$clone();
                }

                if (keyboard.length() > 0.1) {
                    return keyboard.$clone();
                }

                return pc.Vec2.ZERO.clone();
            },
            /*_Project.Code.Services.Input.MoveInput.GetDirection end.*/


        }
    });
    /*_Project.Code.Services.Input.MoveInput end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#init", this ); }

                this.moveThreshold = 1;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#Start", this ); }

                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "DynamicJoystick#HandleInput", this ); }

                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised, radius, cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "VariableJoystick#init", this ); }

                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
if ( TRACE ) { TRACE( "VariableJoystick#SetMode", this ); }

                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VariableJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.UpdateFixedPosition start.*/
            UpdateFixedPosition: function () {
if ( TRACE ) { TRACE( "VariableJoystick#UpdateFixedPosition", this ); }

                this.fixedPosition = this.background.anchoredPosition.$clone();
            },
            /*VariableJoystick.UpdateFixedPosition end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerDown", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.gameObject.SetActive(false);
                }

                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "VariableJoystick#HandleInput", this ); }

                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised, radius, cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.EventSystems","UnityEngine.Events","TMPro","_Project.Code.Core.Items.Inventory","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","UnityEngine.UI","System.Globalization","DG.Tweening.Plugins.Options","Assets.CourseGame.Develop.DI","System.Collections.Generic","_Project.Code.Core.Items","_Project.Code.Services.ItemsCreation","_Project.Code.Services.Input","System.Collections","_Project.Code.Tutorial","_Project.Code.Core.Buyables","_Project.Code.Services.CoroutineRunner","UnityEditor.Animations","_Project.Code.Selling.Line","_Project.Code.Selling","_Project.Code.Core.Collision","_Project.Code.Core.Items.Transfering","_Project.Code.Core.Harvesting","_Project.Code.Core.Character","UnityEngine.Rendering"];

    /*CTA start.*/
    $m("CTA", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Click","t":8,"sn":"Click","rt":$n[0].Void}]}; }, $n);
    /*CTA end.*/

    /*ArrowAnimator start.*/
    $m("ArrowAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*ArrowAnimator end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("handle"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_handle","t":4,"rt":$n[1].RectTransform,"sn":"_handle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[1].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"input","t":4,"rt":$n[1].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Joystick end.*/

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UpdateFixedPosition","t":8,"sn":"UpdateFixedPosition","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[1].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*GlobalEvents start.*/
    $m("GlobalEvents", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SendOnAddCoin","is":true,"t":8,"sn":"SendOnAddCoin","rt":$n[0].Void},{"a":2,"n":"SendOnAddCorn","is":true,"t":8,"sn":"SendOnAddCorn","rt":$n[0].Void},{"a":2,"n":"SendOnAddPopcorn","is":true,"t":8,"sn":"SendOnAddPopcorn","rt":$n[0].Void},{"a":2,"n":"SendOnEndScreen","is":true,"t":8,"sn":"SendOnEndScreen","rt":$n[0].Void},{"a":2,"n":"OnAddCoinEvent","is":true,"t":4,"rt":$n[3].UnityEvent,"sn":"OnAddCoinEvent"},{"a":2,"n":"OnAddCornEvent","is":true,"t":4,"rt":$n[3].UnityEvent,"sn":"OnAddCornEvent"},{"a":2,"n":"OnAddPopcornEvent","is":true,"t":4,"rt":$n[3].UnityEvent,"sn":"OnAddPopcornEvent"},{"a":2,"n":"OnEndScreenEvent","is":true,"t":4,"rt":$n[3].UnityEvent,"sn":"OnEndScreenEvent"}]}; }, $n);
    /*GlobalEvents end.*/

    /*MusicItemAdded start.*/
    $m("MusicItemAdded", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"MusicCoin","t":8,"sn":"MusicCoin","rt":$n[0].Void},{"a":2,"n":"MusicCorn","t":8,"sn":"MusicCorn","rt":$n[0].Void},{"a":2,"n":"MusicPopcorn","t":8,"sn":"MusicPopcorn","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicClip_coin","t":4,"rt":$n[1].AudioClip,"sn":"musicClip_coin"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicClip_corn","t":4,"rt":$n[1].AudioClip,"sn":"musicClip_corn"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicClip_popcorn","t":4,"rt":$n[1].AudioClip,"sn":"musicClip_popcorn"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicSource","t":4,"rt":$n[1].AudioSource,"sn":"musicSource"}]}; }, $n);
    /*MusicItemAdded end.*/

    /*PrintCopacity start.*/
    $m("PrintCopacity", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_textMeshPro","t":4,"rt":$n[4].TMP_Text,"sn":"_textMeshPro"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"itemInventory","t":4,"rt":$n[5].ItemInventory,"sn":"itemInventory"}]}; }, $n);
    /*PrintCopacity end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[8].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[8].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[8].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[8].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[8].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[10].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[8].Tweener,"p":[$n[10].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[8].Tweener,"p":[$n[10].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[11].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[7].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[10].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[11].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[10].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[10].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[10].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[10].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[8].Tweener,"p":[$n[10].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[8].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[10].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[8].Tweener,"p":[$n[10].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[10].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[10].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[8].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[8].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[8].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[8].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[8].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[7].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[10].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[8].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[10].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[8].Tweener,"p":[$n[10].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[8].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[8].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[8].DOTweenCYInstruction.WaitForCompletion,$n[8].DOTweenCYInstruction.WaitForRewind,$n[8].DOTweenCYInstruction.WaitForKill,$n[8].DOTweenCYInstruction.WaitForElapsedLoops,$n[8].DOTweenCYInstruction.WaitForPosition,$n[8].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[8].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[8].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[8].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[12].PathOptions,"ps":0},{"n":"t","pt":$n[8].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[12].PathOptions,$n[8].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Assets.CourseGame.Develop.DI.IInitializable start.*/
    $m("Assets.CourseGame.Develop.DI.IInitializable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Initialize","t":8,"sn":"Assets$CourseGame$Develop$DI$IInitializable$Initialize","rt":$n[0].Void}]}; }, $n);
    /*Assets.CourseGame.Develop.DI.IInitializable end.*/

    /*Assets.CourseGame.Develop.DI.DIContainer start.*/
    $m("Assets.CourseGame.Develop.DI.DIContainer", function () { return {"nested":[$n[13].DIContainer.Registration],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[13].DIContainer],"pi":[{"n":"parent","pt":$n[13].DIContainer,"ps":0}],"sn":"$ctor1"},{"a":1,"n":"CreateFrom","t":8,"pi":[{"n":"registration","pt":$n[13].DIContainer.Registration,"ps":0}],"tpc":1,"tprm":["T"],"sn":"CreateFrom","rt":System.Object,"p":[$n[13].DIContainer.Registration]},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":2,"n":"IsAlreadyRegister","t":8,"tpc":1,"tprm":["T"],"sn":"IsAlreadyRegister","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RegisterAsSingle","t":8,"pi":[{"n":"creator","pt":Function,"ps":0}],"tpc":1,"tprm":["T"],"sn":"RegisterAsSingle","rt":$n[13].DIContainer.Registration,"p":[Function]},{"a":2,"n":"Resolve","t":8,"tpc":1,"tprm":["T"],"sn":"Resolve","rt":System.Object},{"a":1,"n":"_container","t":4,"rt":$n[14].Dictionary$2(System.Type,Assets.CourseGame.Develop.DI.DIContainer.Registration),"sn":"_container","ro":true},{"a":1,"n":"_parent","t":4,"rt":$n[13].DIContainer,"sn":"_parent","ro":true},{"a":1,"n":"_requests","t":4,"rt":$n[14].List$1(System.Type),"sn":"_requests","ro":true}]}; }, $n);
    /*Assets.CourseGame.Develop.DI.DIContainer end.*/

    /*Assets.CourseGame.Develop.DI.DIContainer+Registration start.*/
    $m("Assets.CourseGame.Develop.DI.DIContainer.Registration", function () { return {"td":$n[13].DIContainer,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Function],"pi":[{"n":"creator","pt":Function,"ps":0}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Object],"pi":[{"n":"instance","pt":$n[0].Object,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"NonLazy","t":8,"sn":"NonLazy","rt":$n[0].Void},{"a":2,"n":"Creator","t":16,"rt":Function,"g":{"a":2,"n":"get_Creator","t":8,"rt":Function,"fg":"Creator"},"fn":"Creator"},{"a":2,"n":"Instance","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[0].Object,"fg":"Instance"},"s":{"a":2,"n":"set_Instance","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"Instance"},"fn":"Instance"},{"a":2,"n":"IsNonLazy","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsNonLazy","t":8,"rt":$n[0].Boolean,"fg":"IsNonLazy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsNonLazy","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsNonLazy"},"fn":"IsNonLazy"},{"a":1,"backing":true,"n":"<Creator>k__BackingField","t":4,"rt":Function,"sn":"Creator"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","t":4,"rt":$n[0].Object,"sn":"Instance"},{"a":1,"backing":true,"n":"<IsNonLazy>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsNonLazy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Assets.CourseGame.Develop.DI.DIContainer+Registration end.*/

    /*_Project.Code.UI.CoinsCounterUpdater start.*/
    $m("_Project.Code.UI.CoinsCounterUpdater", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCoinAdded","t":8,"pi":[{"n":"obj","pt":$n[15].Item,"ps":0}],"sn":"OnCoinAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnCoinRemoved","t":8,"pi":[{"n":"obj","pt":$n[15].Item,"ps":0}],"sn":"OnCoinRemoved","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"UpdateView","t":8,"sn":"UpdateView","rt":$n[0].Void},{"a":1,"n":"_counter","t":4,"rt":$n[0].Int32,"sn":"_counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[5].ItemInventory,"sn":"_inventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_text","t":4,"rt":$n[4].TMP_Text,"sn":"_text"}]}; }, $n);
    /*_Project.Code.UI.CoinsCounterUpdater end.*/

    /*_Project.Code.Services.ServiceLocator.L start.*/
    $m("_Project.Code.Services.ServiceLocator.L", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","is":true,"t":8,"pi":[{"n":"container","pt":$n[13].DIContainer,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[$n[13].DIContainer]},{"a":2,"n":"Reg","is":true,"t":8,"pi":[{"n":"creator","pt":Function,"ps":0}],"tpc":1,"tprm":["TService"],"sn":"Reg","rt":$n[13].DIContainer.Registration,"p":[Function]},{"a":2,"n":"Resolve","is":true,"t":8,"tpc":1,"tprm":["TService"],"sn":"Resolve","rt":System.Object},{"a":2,"n":"Container","is":true,"t":16,"rt":$n[13].DIContainer,"g":{"a":2,"n":"get_Container","t":8,"rt":$n[13].DIContainer,"fg":"Container","is":true},"s":{"a":2,"n":"set_Container","t":8,"p":[$n[13].DIContainer],"rt":$n[0].Void,"fs":"Container","is":true},"fn":"Container"},{"a":1,"n":"_container","is":true,"t":4,"rt":$n[13].DIContainer,"sn":"_container"}]}; }, $n);
    /*_Project.Code.Services.ServiceLocator.L end.*/

    /*_Project.Code.Services.ItemsCreation.Dropper start.*/
    $m("_Project.Code.Services.ItemsCreation.Dropper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[16].ItemsCreator],"pi":[{"n":"creator","pt":$n[16].ItemsCreator,"ps":0}],"sn":"ctor"},{"a":1,"n":"Animate","t":8,"pi":[{"n":"items","pt":$n[14].IEnumerable$1(_Project.Code.Core.Items.Item),"ps":0},{"n":"onCompleted","dv":null,"o":true,"pt":Function,"ps":1}],"sn":"Animate","rt":$n[0].Void,"p":[$n[14].IEnumerable$1(_Project.Code.Core.Items.Item),Function]},{"a":2,"n":"CreateDrop","t":8,"pi":[{"n":"type","pt":$n[15].ItemType,"ps":0},{"n":"position","pt":$n[1].Vector3,"ps":1},{"n":"count","dv":4,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"CreateDrop","rt":$n[0].Void,"p":[$n[15].ItemType,$n[1].Vector3,$n[0].Int32]},{"a":1,"n":"_creator","t":4,"rt":$n[16].ItemsCreator,"sn":"_creator","ro":true}]}; }, $n);
    /*_Project.Code.Services.ItemsCreation.Dropper end.*/

    /*_Project.Code.Services.ItemsCreation.ItemsCreator start.*/
    $m("_Project.Code.Services.ItemsCreation.ItemsCreator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[14].List$1(_Project.Code.Core.Items.Item)],"pi":[{"n":"prefabs","pt":$n[14].List$1(_Project.Code.Core.Items.Item),"ps":0}],"sn":"ctor"},{"a":2,"n":"Create","t":8,"pi":[{"n":"type","pt":$n[15].ItemType,"ps":0}],"sn":"Create","rt":$n[15].Item,"p":[$n[15].ItemType]},{"a":1,"n":"_prefabs","t":4,"rt":$n[14].List$1(_Project.Code.Core.Items.Item),"sn":"_prefabs"}]}; }, $n);
    /*_Project.Code.Services.ItemsCreation.ItemsCreator end.*/

    /*_Project.Code.Services.Input.IMoveInput start.*/
    $m("_Project.Code.Services.Input.IMoveInput", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"ab":true,"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"_Project$Code$Services$Input$IMoveInput$Direction"},"fn":"_Project$Code$Services$Input$IMoveInput$Direction"},{"a":1,"backing":true,"n":"<Direction>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"_Project$Code$Services$Input$IMoveInput$Direction"}]}; }, $n);
    /*_Project.Code.Services.Input.IMoveInput end.*/

    /*_Project.Code.Services.Input.KeyboardMoveInput start.*/
    $m("_Project.Code.Services.Input.KeyboardMoveInput", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"}]}; }, $n);
    /*_Project.Code.Services.Input.KeyboardMoveInput end.*/

    /*_Project.Code.Services.Input.MoveInput start.*/
    $m("_Project.Code.Services.Input.MoveInput", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Joystick],"pi":[{"n":"joystick","pt":Joystick,"ps":0}],"sn":"ctor"},{"a":2,"n":"GetDirection","t":8,"sn":"GetDirection","rt":$n[1].Vector2},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"Enabled","t":4,"rt":$n[0].Boolean,"sn":"Enabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick","ro":true},{"a":1,"n":"_keyboardMoveInput","t":4,"rt":$n[17].KeyboardMoveInput,"sn":"_keyboardMoveInput","ro":true}]}; }, $n);
    /*_Project.Code.Services.Input.MoveInput end.*/

    /*_Project.Code.Services.CoroutineRunner.CoroutineRunner start.*/
    $m("_Project.Code.Services.CoroutineRunner.CoroutineRunner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Launch","t":8,"pi":[{"n":"coroutine","pt":$n[18].IEnumerator,"ps":0}],"sn":"Launch","rt":$n[0].Void,"p":[$n[18].IEnumerator]},{"a":2,"n":"Stop","t":8,"pi":[{"n":"coroutine","pt":$n[18].IEnumerator,"ps":0}],"sn":"Stop","rt":$n[0].Void,"p":[$n[18].IEnumerator]}]}; }, $n);
    /*_Project.Code.Services.CoroutineRunner.CoroutineRunner end.*/

    /*_Project.Code.Services.CoroutineRunner.ICoroutineRunner start.*/
    $m("_Project.Code.Services.CoroutineRunner.ICoroutineRunner", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Launch","t":8,"pi":[{"n":"coroutine","pt":$n[18].IEnumerator,"ps":0}],"sn":"_Project$Code$Services$CoroutineRunner$ICoroutineRunner$Launch","rt":$n[0].Void,"p":[$n[18].IEnumerator]},{"ab":true,"a":2,"n":"Stop","t":8,"pi":[{"n":"coroutine","pt":$n[18].IEnumerator,"ps":0}],"sn":"_Project$Code$Services$CoroutineRunner$ICoroutineRunner$Stop","rt":$n[0].Void,"p":[$n[18].IEnumerator]}]}; }, $n);
    /*_Project.Code.Services.CoroutineRunner.ICoroutineRunner end.*/

    /*_Project.Code.Tutorial.IBuyable start.*/
    $m("_Project.Code.Tutorial.IBuyable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Buy","t":8,"sn":"_Project$Code$Tutorial$IBuyable$Buy","rt":$n[0].Void},{"ab":true,"a":2,"n":"IsBought","t":16,"rt":$n[0].Boolean,"g":{"ab":true,"a":2,"n":"get_IsBought","t":8,"rt":$n[0].Boolean,"fg":"_Project$Code$Tutorial$IBuyable$IsBought","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"_Project$Code$Tutorial$IBuyable$IsBought"},{"a":1,"backing":true,"n":"<IsBought>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"_Project$Code$Tutorial$IBuyable$IsBought","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Tutorial.IBuyable end.*/

    /*_Project.Code.Tutorial.IStorage start.*/
    $m("_Project.Code.Tutorial.IStorage", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"ab":true,"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"_Project$Code$Tutorial$IStorage$IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"_Project$Code$Tutorial$IStorage$IsEmpty"},{"a":1,"backing":true,"n":"<IsEmpty>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"_Project$Code$Tutorial$IStorage$IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Tutorial.IStorage end.*/

    /*_Project.Code.Tutorial.IStorageFabric start.*/
    $m("_Project.Code.Tutorial.IStorageFabric", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"CreateNew","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"type","pt":$n[15].ItemType,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"_Project$Code$Tutorial$IStorageFabric$CreateNew","rt":$n[19].IStorage,"p":[$n[1].Vector3,$n[15].ItemType,$n[0].Int32]}]}; }, $n);
    /*_Project.Code.Tutorial.IStorageFabric end.*/

    /*_Project.Code.Tutorial.StorageTrashView start.*/
    $m("_Project.Code.Tutorial.StorageTrashView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"collectable","pt":$n[15].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnRemoved","t":8,"pi":[{"n":"obj","pt":$n[15].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[15].Item]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[5].ItemInventory,"sn":"_inventory"}]}; }, $n);
    /*_Project.Code.Tutorial.StorageTrashView end.*/

    /*_Project.Code.Tutorial.Tutorial start.*/
    $m("_Project.Code.Tutorial.Tutorial", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TutorialCoroutine","t":8,"sn":"TutorialCoroutine","rt":$n[18].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arrow","t":4,"rt":$n[1].Transform,"sn":"_arrow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buyable","t":4,"rt":$n[20].Buyable,"sn":"_buyable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_point1","t":4,"rt":$n[1].Transform,"sn":"_point1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_point2","t":4,"rt":$n[1].Transform,"sn":"_point2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tutorialCollider","t":4,"rt":$n[1].Collider2D,"sn":"_tutorialCollider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tutorialInventory","t":4,"rt":$n[5].ItemInventory,"sn":"_tutorialInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tutorialText","t":4,"rt":$n[4].TMP_Text,"sn":"_tutorialText"}]}; }, $n);
    /*_Project.Code.Tutorial.Tutorial end.*/

    /*_Project.Code.Tutorial.WaitForJoystickMove start.*/
    $m("_Project.Code.Tutorial.WaitForJoystickMove", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Joystick,$n[0].Single],"pi":[{"n":"joystick","pt":Joystick,"ps":0},{"n":"threshold","dv":0.05,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick","ro":true},{"a":1,"n":"_threshold","t":4,"rt":$n[0].Single,"sn":"_threshold","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Tutorial.WaitForJoystickMove end.*/

    /*_Project.Code.Tutorial.WaitForJoystickStop start.*/
    $m("_Project.Code.Tutorial.WaitForJoystickStop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Joystick,$n[0].Single],"pi":[{"n":"joystick","pt":Joystick,"ps":0},{"n":"threshold","dv":0.05,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick","ro":true},{"a":1,"n":"_threshold","t":4,"rt":$n[0].Single,"sn":"_threshold","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Tutorial.WaitForJoystickStop end.*/

    /*_Project.Code.Entry.Entry start.*/
    $m("_Project.Code.Entry.Entry", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(_Project.Code.Services.CoroutineRunner.CoroutineRunner)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"}]}; }, $n);
    /*_Project.Code.Entry.Entry end.*/

    /*_Project.Code.Entry.EntryPoint start.*/
    $m("_Project.Code.Entry.EntryPoint", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(_Project.Code.Services.CoroutineRunner.CoroutineRunner)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetFields","t":8,"sn":"GetFields","rt":$n[14].List$1(_Project.Code.Core.Harvesting.Field)},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"_coroutineRunner","t":4,"rt":$n[21].CoroutineRunner,"sn":"_coroutineRunner"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemPrefabs","t":4,"rt":$n[14].List$1(_Project.Code.Core.Items.Item),"sn":"_itemPrefabs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"}]}; }, $n);
    /*_Project.Code.Entry.EntryPoint end.*/

    /*_Project.Code.Entry.StorageFabric start.*/
    $m("_Project.Code.Entry.StorageFabric", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CreateNew","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"type","pt":$n[15].ItemType,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"CreateNew","rt":$n[19].IStorage,"p":[$n[1].Vector3,$n[15].ItemType,$n[0].Int32]},{"a":2,"n":"Instantiate","t":8,"pi":[{"n":"type","pt":$n[15].ItemType,"ps":0}],"sn":"Instantiate","rt":$n[15].Item,"p":[$n[15].ItemType]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinPrefab","t":4,"rt":$n[15].Item,"sn":"_coinPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventoryPrefab","t":4,"rt":$n[5].ItemInventory,"sn":"_inventoryPrefab"}]}; }, $n);
    /*_Project.Code.Entry.StorageFabric end.*/

    /*_Project.Code.Selling.Customer start.*/
    $m("_Project.Code.Selling.Customer", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.SpriteRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"animatorController","pt":$n[22].AnimatorController,"ps":0},{"n":"orderSize","pt":$n[0].Int32,"ps":1},{"n":"money","pt":$n[0].Int32,"ps":2}],"sn":"Init","rt":$n[0].Void,"p":[$n[22].AnimatorController,$n[0].Int32,$n[0].Int32]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"Money","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Money","t":8,"rt":$n[0].Int32,"fg":"Money","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Money","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Money"},"fn":"Money"},{"a":2,"n":"OrderSize","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_OrderSize","t":8,"rt":$n[0].Int32,"fg":"OrderSize","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_OrderSize","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"OrderSize"},"fn":"OrderSize"},{"a":1,"n":"_animator","t":4,"rt":$n[1].Animator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bubbleView","t":4,"rt":$n[23].BubbleView,"sn":"_bubbleView"},{"a":1,"backing":true,"n":"<Money>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Money","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<OrderSize>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"OrderSize","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Selling.Customer end.*/

    /*_Project.Code.Selling.ILine start.*/
    $m("_Project.Code.Selling.ILine", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"OnCustomerServed","t":8,"pi":[{"n":"customer","pt":$n[24].Customer,"ps":0}],"sn":"_Project$Code$Selling$ILine$OnCustomerServed","rt":$n[0].Void,"p":[$n[24].Customer]},{"ab":true,"a":2,"n":"TryGetCustomer","t":8,"pi":[{"n":"customer","out":true,"pt":$n[24].Customer,"ps":0}],"sn":"_Project$Code$Selling$ILine$TryGetCustomer","rt":$n[0].Boolean,"p":[$n[24].Customer],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Selling.ILine end.*/

    /*_Project.Code.Selling.Seller start.*/
    $m("_Project.Code.Selling.Seller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetPaid","t":8,"sn":"GetPaid","rt":$n[0].Void},{"a":1,"n":"OnServed","t":8,"sn":"OnServed","rt":$n[0].Void},{"a":1,"n":"Serve","t":8,"sn":"Serve","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_currentCustomer","t":4,"rt":$n[24].Customer,"sn":"_currentCustomer"},{"a":1,"n":"_line","t":4,"rt":$n[24].ILine,"sn":"_line"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_lineMb","t":4,"rt":$n[23].Line,"sn":"_lineMb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moneyInventory","t":4,"rt":$n[5].ItemInventory,"sn":"_moneyInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moneyPrefab","t":4,"rt":$n[15].Item,"sn":"_moneyPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_productInventory","t":4,"rt":$n[5].ItemInventory,"sn":"_productInventory"}]}; }, $n);
    /*_Project.Code.Selling.Seller end.*/

    /*_Project.Code.Selling.Line.BubbleView start.*/
    $m("_Project.Code.Selling.Line.BubbleView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"SetText","t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"SetText","rt":$n[0].Void,"p":[$n[0].String]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_body","t":4,"rt":$n[1].Transform,"sn":"_body"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_text","t":4,"rt":$n[4].TMP_Text,"sn":"_text"}]}; }, $n);
    /*_Project.Code.Selling.Line.BubbleView end.*/

    /*_Project.Code.Selling.Line.Line start.*/
    $m("_Project.Code.Selling.Line.Line", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CreateNewCustomer","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"CreateNewCustomer","rt":$n[24].Customer,"p":[$n[0].Int32]},{"a":1,"n":"CreatingCustomers","t":8,"sn":"CreatingCustomers","rt":$n[18].IEnumerator},{"a":1,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"MoveCustomers","t":8,"pi":[{"n":"onFinished","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"MoveCustomers","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"OnCustomerServed","t":8,"pi":[{"n":"customer","pt":$n[24].Customer,"ps":0}],"sn":"OnCustomerServed","rt":$n[0].Void,"p":[$n[24].Customer]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"RequestCreation","t":8,"sn":"RequestCreation","rt":$n[0].Void},{"a":1,"n":"RequestCreation","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"RequestCreation$1","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"TryGetCustomer","t":8,"pi":[{"n":"customer","out":true,"pt":$n[24].Customer,"ps":0}],"sn":"TryGetCustomer","rt":$n[0].Boolean,"p":[$n[24].Customer],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_customerAnimatorControllers","t":4,"rt":$n[14].List$1(UnityEditor.Animations.AnimatorController),"sn":"_customerAnimatorControllers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_customerPrefab","t":4,"rt":$n[24].Customer,"sn":"_customerPrefab"},{"a":1,"n":"_customers","t":4,"rt":$n[14].Queue$1(_Project.Code.Selling.Customer),"sn":"_customers"},{"a":1,"n":"_lastGeneratedIndex","t":4,"rt":$n[0].Int32,"sn":"_lastGeneratedIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_reservedCount","t":4,"rt":$n[0].Int32,"sn":"_reservedCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnPoints","t":4,"rt":$n[14].List$1(UnityEngine.Transform),"sn":"_spawnPoints"},{"a":1,"n":"_spawnRequests","t":4,"rt":$n[0].Int32,"sn":"_spawnRequests","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Selling.Line.Line end.*/

    /*_Project.Code.Core.Workers.Worker start.*/
    $m("_Project.Code.Core.Workers.Worker", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"Working","t":8,"sn":"Working","rt":$n[18].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[1].Animator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_detector","t":4,"rt":$n[25].OverlapCollisionDetector,"sn":"_detector"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fields","t":4,"rt":$n[14].List$1(_Project.Code.Core.Harvesting.Field),"sn":"_fields"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[5].ItemInventory,"sn":"_inventory"},{"a":1,"n":"_isMoving","t":4,"rt":$n[0].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isUp","t":4,"rt":$n[0].Boolean,"sn":"_isUp","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Core.Workers.Worker end.*/

    /*_Project.Code.Core.PopcornFarm.CornFarm start.*/
    $m("_Project.Code.Core.PopcornFarm.CornFarm", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCircle","t":8,"pi":[{"n":"onFinished","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"AnimateCircle","rt":$n[18].IEnumerator,"p":[Function]},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"obj","pt":$n[15].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ProduceCorn","t":8,"sn":"ProduceCorn","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_count","t":4,"rt":$n[0].Int32,"sn":"_count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fillImage","t":4,"rt":$n[10].Image,"sn":"_fillImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_final","t":4,"rt":$n[5].ItemInventory,"sn":"_final"},{"a":1,"n":"_isWorking","t":4,"rt":$n[0].Boolean,"sn":"_isWorking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemsCreator","t":4,"rt":$n[16].ItemsCreator,"sn":"_itemsCreator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_resource","t":4,"rt":$n[5].ItemInventory,"sn":"_resource"}]}; }, $n);
    /*_Project.Code.Core.PopcornFarm.CornFarm end.*/

    /*_Project.Code.Core.Items.InventoryInitializer start.*/
    $m("_Project.Code.Core.Items.InventoryInitializer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_count","t":4,"rt":$n[0].Int32,"sn":"_count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[5].ItemInventory,"sn":"_inventory"},{"a":1,"n":"_itemsCreator","t":4,"rt":$n[16].ItemsCreator,"sn":"_itemsCreator"}]}; }, $n);
    /*_Project.Code.Core.Items.InventoryInitializer end.*/

    /*_Project.Code.Core.Items.Item start.*/
    $m("_Project.Code.Core.Items.Item", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"Type","t":16,"rt":$n[15].ItemType,"g":{"a":2,"n":"get_Type","t":8,"rt":$n[15].ItemType,"fg":"Type","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},"fn":"Type"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collider","t":4,"rt":$n[1].Collider2D,"sn":"_collider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":$n[15].ItemType,"sn":"_type","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}}]}; }, $n);
    /*_Project.Code.Core.Items.Item end.*/

    /*_Project.Code.Core.Items.ItemType start.*/
    $m("_Project.Code.Core.Items.ItemType", function () { return {"att":8449,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Coin","is":true,"t":4,"rt":$n[15].ItemType,"sn":"Coin","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},{"a":2,"n":"Corn","is":true,"t":4,"rt":$n[15].ItemType,"sn":"Corn","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[15].ItemType,"sn":"None","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},{"a":2,"n":"Popcorn","is":true,"t":4,"rt":$n[15].ItemType,"sn":"Popcorn","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}}]}; }, $n);
    /*_Project.Code.Core.Items.ItemType end.*/

    /*_Project.Code.Core.Items.Transfering.InventoryTransferer start.*/
    $m("_Project.Code.Core.Items.Transfering.InventoryTransferer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[21].ICoroutineRunner],"pi":[{"n":"coroutineRunner","pt":$n[21].ICoroutineRunner,"ps":0}],"sn":"ctor"},{"a":1,"n":"CanTransfer","t":8,"pi":[{"n":"from","pt":$n[5].ItemInventory,"ps":0},{"n":"to","pt":$n[5].ItemInventory,"ps":1}],"sn":"CanTransfer","rt":$n[0].Boolean,"p":[$n[5].ItemInventory,$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Disconnect","t":8,"sn":"Disconnect","rt":$n[0].Void},{"a":2,"n":"HasConnectionFor","t":8,"pi":[{"n":"inventory","pt":$n[5].ItemInventory,"ps":0}],"sn":"HasConnectionFor","rt":$n[0].Boolean,"p":[$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnConnected","t":8,"sn":"OnConnected","rt":$n[0].Void},{"a":1,"n":"OnDisconnected","t":8,"sn":"OnDisconnected","rt":$n[0].Void},{"a":1,"n":"TransferingAll","t":8,"pi":[{"n":"from","pt":$n[5].ItemInventory,"ps":0},{"n":"to","pt":$n[5].ItemInventory,"ps":1}],"sn":"TransferingAll","rt":$n[18].IEnumerator,"p":[$n[5].ItemInventory,$n[5].ItemInventory]},{"a":2,"n":"TrySetConnection","t":8,"pi":[{"n":"storage1","pt":$n[5].ItemInventory,"ps":0},{"n":"storage2","pt":$n[5].ItemInventory,"ps":1}],"sn":"TrySetConnection","rt":$n[0].Boolean,"p":[$n[5].ItemInventory,$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Connection","t":16,"rt":$n[26].Transfer,"g":{"a":1,"n":"get_Connection","t":8,"rt":$n[26].Transfer,"fg":"Connection"},"s":{"a":1,"n":"set_Connection","t":8,"p":[$n[26].Transfer],"rt":$n[0].Void,"fs":"Connection"},"fn":"Connection"},{"a":1,"n":"HasConnection","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_HasConnection","t":8,"rt":$n[0].Boolean,"fg":"HasConnection","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasConnection"},{"a":1,"n":"_connection","t":4,"rt":$n[26].Transfer,"sn":"_connection"},{"a":1,"n":"_coroutineRunner","t":4,"rt":$n[21].ICoroutineRunner,"sn":"_coroutineRunner","ro":true},{"a":1,"n":"_transferFactory","t":4,"rt":$n[26].TransferFactory,"sn":"_transferFactory","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Transfering.InventoryTransferer end.*/

    /*_Project.Code.Core.Items.Transfering.ItemTransferer start.*/
    $m("_Project.Code.Core.Items.Transfering.ItemTransferer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CanTransfer","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0},{"n":"inventory","pt":$n[5].ItemInventory,"ps":1}],"sn":"CanTransfer","rt":$n[0].Boolean,"p":[$n[15].Item,$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"GetReservedCount","t":8,"pi":[{"n":"inventory","pt":$n[5].ItemInventory,"ps":0}],"sn":"GetReservedCount","rt":$n[0].Int32,"p":[$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Transfer","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0},{"n":"to","pt":$n[5].ItemInventory,"ps":1}],"sn":"Transfer","rt":$n[0].Void,"p":[$n[15].Item,$n[5].ItemInventory]},{"a":2,"n":"TryTransfer","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0},{"n":"inventory","pt":$n[5].ItemInventory,"ps":1}],"sn":"TryTransfer","rt":$n[0].Boolean,"p":[$n[15].Item,$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_reservations","t":4,"rt":$n[14].Dictionary$2(_Project.Code.Core.Items.Inventory.ItemInventory,System.Int32),"sn":"_reservations","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Transfering.ItemTransferer end.*/

    /*_Project.Code.Core.Items.Transfering.Transfer start.*/
    $m("_Project.Code.Core.Items.Transfering.Transfer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].ItemInventory,$n[5].ItemInventory],"pi":[{"n":"sender","pt":$n[5].ItemInventory,"ps":0},{"n":"receiver","pt":$n[5].ItemInventory,"ps":1}],"sn":"ctor"},{"a":2,"n":"Receiver","t":16,"rt":$n[5].ItemInventory,"g":{"a":2,"n":"get_Receiver","t":8,"rt":$n[5].ItemInventory,"fg":"Receiver"},"fn":"Receiver"},{"a":2,"n":"Sender","t":16,"rt":$n[5].ItemInventory,"g":{"a":2,"n":"get_Sender","t":8,"rt":$n[5].ItemInventory,"fg":"Sender"},"fn":"Sender"},{"a":1,"backing":true,"n":"<Receiver>k__BackingField","t":4,"rt":$n[5].ItemInventory,"sn":"Receiver"},{"a":1,"backing":true,"n":"<Sender>k__BackingField","t":4,"rt":$n[5].ItemInventory,"sn":"Sender"}]}; }, $n);
    /*_Project.Code.Core.Items.Transfering.Transfer end.*/

    /*_Project.Code.Core.Items.Transfering.TransferFactory start.*/
    $m("_Project.Code.Core.Items.Transfering.TransferFactory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CanGet","t":8,"pi":[{"n":"itemInventory","pt":$n[5].ItemInventory,"ps":0}],"sn":"CanGet","rt":$n[0].Boolean,"p":[$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CanGive","t":8,"pi":[{"n":"itemInventory","pt":$n[5].ItemInventory,"ps":0}],"sn":"CanGive","rt":$n[0].Boolean,"p":[$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"DoItemTypesMatch","t":8,"pi":[{"n":"storage1","pt":$n[5].ItemInventory,"ps":0},{"n":"storage2","pt":$n[5].ItemInventory,"ps":1}],"sn":"DoItemTypesMatch","rt":$n[0].Boolean,"p":[$n[5].ItemInventory,$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryCreate","t":8,"pi":[{"n":"storage1","pt":$n[5].ItemInventory,"ps":0},{"n":"storage2","pt":$n[5].ItemInventory,"ps":1},{"n":"connection","out":true,"pt":$n[26].Transfer,"ps":2}],"sn":"TryCreate","rt":$n[0].Boolean,"p":[$n[5].ItemInventory,$n[5].ItemInventory,$n[26].Transfer],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Core.Items.Transfering.TransferFactory end.*/

    /*_Project.Code.Core.Items.Inventory.BaseInventoryView start.*/
    $m("_Project.Code.Core.Items.Inventory.BaseInventoryView", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":3,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"ab":true,"a":3,"n":"OnRemoved","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[15].Item]},{"a":3,"n":"ItemsCount","t":16,"rt":$n[0].Int32,"g":{"a":3,"n":"get_ItemsCount","t":8,"rt":$n[0].Int32,"fg":"ItemsCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"ItemsCount"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[5].ItemInventory,"sn":"_inventory"}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.BaseInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.ColumnInventoryView start.*/
    $m("_Project.Code.Core.Items.Inventory.ColumnInventoryView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"ov":true,"a":3,"n":"OnRemoved","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"Height","t":16,"rt":$n[0].Single,"g":{"a":1,"n":"get_Height","t":8,"rt":$n[0].Single,"fg":"Height","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Height"},{"a":1,"n":"_columnIndex","t":4,"rt":$n[0].Int32,"sn":"_columnIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_columnPoints","t":4,"rt":$n[14].List$1(UnityEngine.Transform),"sn":"_columnPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_destroyOnEmptied","t":4,"rt":$n[0].Boolean,"sn":"_destroyOnEmptied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_rowIndex","t":4,"rt":$n[0].Int32,"sn":"_rowIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.ColumnInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.InventoryProvider start.*/
    $m("_Project.Code.Core.Items.Inventory.InventoryProvider", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[14].List$1(_Project.Code.Core.Items.Inventory.ItemInventory)],"pi":[{"n":"storages","pt":$n[14].List$1(_Project.Code.Core.Items.Inventory.ItemInventory),"ps":0}],"sn":"ctor"},{"a":2,"n":"HasStorage","t":8,"pi":[{"n":"type","pt":$n[15].ItemType,"ps":0}],"sn":"HasStorage","rt":$n[0].Boolean,"p":[$n[15].ItemType],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryGetStorage","t":8,"pi":[{"n":"type","pt":$n[15].ItemType,"ps":0},{"n":"inventory","out":true,"pt":$n[5].ItemInventory,"ps":1}],"sn":"TryGetStorage","rt":$n[0].Boolean,"p":[$n[15].ItemType,$n[5].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_storages","t":4,"rt":$n[14].List$1(_Project.Code.Core.Items.Inventory.ItemInventory),"sn":"_storages","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.InventoryProvider end.*/

    /*_Project.Code.Core.Items.Inventory.InventoryType start.*/
    $m("_Project.Code.Core.Items.Inventory.InventoryType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":$n[5].InventoryType,"sn":"Both","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[5].InventoryType,"sn":"None","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},{"a":2,"n":"Receiver","is":true,"t":4,"rt":$n[5].InventoryType,"sn":"Receiver","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},{"a":2,"n":"Sender","is":true,"t":4,"rt":$n[5].InventoryType,"sn":"Sender","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.InventoryType end.*/

    /*_Project.Code.Core.Items.Inventory.ItemInventory start.*/
    $m("_Project.Code.Core.Items.Inventory.ItemInventory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"collectable","pt":$n[15].Item,"ps":0}],"sn":"Add","rt":$n[0].Void,"p":[$n[15].Item]},{"a":2,"n":"CanAdd","t":8,"sn":"CanAdd","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CanGet","t":8,"sn":"CanGet","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Get","t":8,"sn":"Get","rt":$n[15].Item},{"a":2,"n":"SetCapacity","t":8,"pi":[{"n":"capacity","pt":$n[0].Int32,"ps":0}],"sn":"SetCapacity","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetOperation","t":8,"pi":[{"n":"type","pt":$n[5].InventoryType,"ps":0}],"sn":"SetOperation","rt":$n[0].Void,"p":[$n[5].InventoryType]},{"a":2,"n":"SetType","t":8,"pi":[{"n":"type","pt":$n[15].ItemType,"ps":0}],"sn":"SetType","rt":$n[0].Void,"p":[$n[15].ItemType]},{"a":2,"n":"TryGet","t":8,"pi":[{"n":"collectable","out":true,"pt":$n[15].Item,"ps":0}],"sn":"TryGet","rt":$n[0].Boolean,"p":[$n[15].Item],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Capacity","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Capacity","t":8,"rt":$n[0].Int32,"fg":"Capacity","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Capacity"},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"InventoryType","t":16,"rt":$n[5].InventoryType,"g":{"a":2,"n":"get_InventoryType","t":8,"rt":$n[5].InventoryType,"fg":"InventoryType","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},"fn":"InventoryType"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"ItemType","t":16,"rt":$n[15].ItemType,"g":{"a":2,"n":"get_ItemType","t":8,"rt":$n[15].ItemType,"fg":"ItemType","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},"fn":"ItemType"},{"a":2,"n":"RemainingCapacity","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_RemainingCapacity","t":8,"rt":$n[0].Int32,"fg":"RemainingCapacity","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"RemainingCapacity"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_capacity","t":4,"rt":$n[0].Int32,"sn":"_capacity","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_collectables","t":4,"rt":$n[14].Stack$1(_Project.Code.Core.Items.Item),"sn":"_collectables"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[5].InventoryType,"sn":"_inventory","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_musicItemAdded","t":4,"rt":MusicItemAdded,"sn":"_musicItemAdded"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":$n[15].ItemType,"sn":"_type","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},{"a":2,"n":"Added","t":2,"ad":{"a":2,"n":"add_Added","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addAdded","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Added","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeAdded","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"Removed","t":2,"ad":{"a":2,"n":"add_Removed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addRemoved","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Removed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeRemoved","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.ItemInventory end.*/

    /*_Project.Code.Core.Items.Inventory.StackInventoryView start.*/
    $m("_Project.Code.Core.Items.Inventory.StackInventoryView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnRemoved","t":8,"pi":[{"n":"obj","pt":$n[15].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[15].Item]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_attachTo","t":4,"rt":$n[1].Transform,"sn":"_attachTo"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_destroyOnEmptied","t":4,"rt":$n[0].Boolean,"sn":"_destroyOnEmptied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemInventory","t":4,"rt":$n[5].ItemInventory,"sn":"_itemInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spacing","t":4,"rt":$n[0].Single,"sn":"_spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.StackInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.TableStorageUpdater start.*/
    $m("_Project.Code.Core.Items.Inventory.TableStorageUpdater", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"obj","pt":$n[15].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ShowCustomers","t":8,"sn":"ShowCustomers","rt":$n[18].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buyZone","t":4,"rt":$n[1].GameObject,"sn":"_buyZone"},{"a":1,"n":"_counter","t":4,"rt":$n[0].Int32,"sn":"_counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_customers","t":4,"rt":$n[14].List$1(UnityEngine.GameObject),"sn":"_customers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemInventory","t":4,"rt":$n[5].ItemInventory,"sn":"_itemInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_price","t":4,"rt":$n[0].Int32,"sn":"_price","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_table","t":4,"rt":$n[1].GameObject,"sn":"_table"}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.TableStorageUpdater end.*/

    /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler start.*/
    $m("_Project.Code.Core.Items.Handlers.InventoryCollisionHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[25].ICollisionDetector,$n[5].InventoryProvider,$n[26].InventoryTransferer],"pi":[{"n":"detector","pt":$n[25].ICollisionDetector,"ps":0},{"n":"provider","pt":$n[5].InventoryProvider,"ps":1},{"n":"inventoryTransferer","pt":$n[26].InventoryTransferer,"ps":2}],"sn":"ctor"},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":1,"n":"OnTriggered","t":8,"pi":[{"n":"obj","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[25].CollisionType,"ps":1}],"sn":"OnTriggered","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[25].CollisionType]},{"a":1,"n":"_detector","t":4,"rt":$n[25].ICollisionDetector,"sn":"_detector","ro":true},{"a":1,"n":"_inventoryTransferer","t":4,"rt":$n[26].InventoryTransferer,"sn":"_inventoryTransferer","ro":true},{"a":1,"n":"_provider","t":4,"rt":$n[5].InventoryProvider,"sn":"_provider","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler end.*/

    /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler start.*/
    $m("_Project.Code.Core.Items.Handlers.ItemCollisionHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[25].ICollisionDetector,$n[5].InventoryProvider,$n[26].ItemTransferer],"pi":[{"n":"detector","pt":$n[25].ICollisionDetector,"ps":0},{"n":"provider","pt":$n[5].InventoryProvider,"ps":1},{"n":"transferer","pt":$n[26].ItemTransferer,"ps":2}],"sn":"ctor"},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":1,"n":"OnTriggered","t":8,"pi":[{"n":"obj","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[25].CollisionType,"ps":1}],"sn":"OnTriggered","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[25].CollisionType]},{"a":1,"n":"_detector","t":4,"rt":$n[25].ICollisionDetector,"sn":"_detector","ro":true},{"a":1,"n":"_provider","t":4,"rt":$n[5].InventoryProvider,"sn":"_provider","ro":true},{"a":1,"n":"_transferer","t":4,"rt":$n[26].ItemTransferer,"sn":"_transferer","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler end.*/

    /*_Project.Code.Core.Harvesting.Field start.*/
    $m("_Project.Code.Core.Harvesting.Field", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Abort","t":8,"sn":"Abort","rt":$n[0].Void},{"a":2,"n":"Harvest","t":8,"sn":"Harvest","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"SetState","t":8,"pi":[{"n":"state","pt":$n[27].FieldState,"ps":0}],"sn":"SetState","rt":$n[0].Void,"p":[$n[27].FieldState]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"CanHarvest","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_CanHarvest","t":8,"rt":$n[0].Boolean,"fg":"CanHarvest","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CanHarvest"},{"a":1,"n":"IsAbortive","is":true,"t":4,"rt":$n[0].Boolean,"sn":"IsAbortive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_defaultScale","t":4,"rt":$n[1].Vector3,"sn":"_defaultScale"},{"a":1,"n":"_growingTween","t":4,"rt":$n[8].Tween,"sn":"_growingTween"},{"a":1,"n":"_harvestedTween","t":4,"rt":$n[8].Tween,"sn":"_harvestedTween"},{"a":1,"n":"_harvestingTween","t":4,"rt":$n[8].Tween,"sn":"_harvestingTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_plant","t":4,"rt":$n[1].Transform,"sn":"_plant"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_state","t":4,"rt":$n[27].FieldState,"sn":"_state","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}},{"a":2,"n":"Harvested","t":2,"ad":{"a":2,"n":"add_Harvested","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addHarvested","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Harvested","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeHarvested","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Harvesting.Field end.*/

    /*_Project.Code.Core.Harvesting.FieldsDropper start.*/
    $m("_Project.Code.Core.Harvesting.FieldsDropper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[16].Dropper,$n[14].List$1(_Project.Code.Core.Harvesting.Field)],"pi":[{"n":"dropper","pt":$n[16].Dropper,"ps":0},{"n":"fields","pt":$n[14].List$1(_Project.Code.Core.Harvesting.Field),"ps":1}],"sn":"ctor"},{"a":1,"n":"OnHarvested","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0}],"sn":"OnHarvested","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"_dropper","t":4,"rt":$n[16].Dropper,"sn":"_dropper","ro":true}]}; }, $n);
    /*_Project.Code.Core.Harvesting.FieldsDropper end.*/

    /*_Project.Code.Core.Harvesting.FieldState start.*/
    $m("_Project.Code.Core.Harvesting.FieldState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Growing","is":true,"t":4,"rt":$n[27].FieldState,"sn":"Growing","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}},{"a":2,"n":"Grown","is":true,"t":4,"rt":$n[27].FieldState,"sn":"Grown","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}},{"a":2,"n":"Harvesting","is":true,"t":4,"rt":$n[27].FieldState,"sn":"Harvesting","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[27].FieldState,"sn":"None","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}}]}; }, $n);
    /*_Project.Code.Core.Harvesting.FieldState end.*/

    /*_Project.Code.Core.Harvesting.Harvester start.*/
    $m("_Project.Code.Core.Harvesting.Harvester", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[25].ICollisionDetector],"pi":[{"n":"detector","pt":$n[25].ICollisionDetector,"ps":0}],"sn":"ctor"},{"a":1,"n":"Cleanup","t":8,"sn":"Cleanup","rt":$n[0].Void},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":1,"n":"OnTriggered","t":8,"pi":[{"n":"collider","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[25].CollisionType,"ps":1}],"sn":"OnTriggered","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[25].CollisionType]},{"a":1,"n":"IsHarvesting","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_IsHarvesting","t":8,"rt":$n[0].Boolean,"fg":"IsHarvesting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsHarvesting"},{"a":1,"n":"_detector","t":4,"rt":$n[25].ICollisionDetector,"sn":"_detector","ro":true},{"a":1,"n":"_harvestingField","t":4,"rt":$n[27].Field,"sn":"_harvestingField"}]}; }, $n);
    /*_Project.Code.Core.Harvesting.Harvester end.*/

    /*_Project.Code.Core.Collision.CollisionDetector start.*/
    $m("_Project.Code.Core.Collision.CollisionDetector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Handle","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[25].CollisionType,"ps":1}],"sn":"Handle","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[25].CollisionType]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"OnTriggerExit2D","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerExit2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"OnTriggerStay2D","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerStay2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":2,"n":"TriggerEnter","t":2,"ad":{"a":2,"n":"add_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerEnter","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerEnter","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TriggerExit","t":2,"ad":{"a":2,"n":"add_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerExit","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerExit","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TriggerStay","t":2,"ad":{"a":2,"n":"add_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerStay","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerStay","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"Triggered","t":2,"ad":{"a":2,"n":"add_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggered","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Collision.CollisionDetector end.*/

    /*_Project.Code.Core.Collision.CollisionType start.*/
    $m("_Project.Code.Core.Collision.CollisionType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Enter","is":true,"t":4,"rt":$n[25].CollisionType,"sn":"Enter","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Collision.CollisionType, System.Enum.toStringFn(_Project.Code.Core.Collision.CollisionType));}},{"a":2,"n":"Exit","is":true,"t":4,"rt":$n[25].CollisionType,"sn":"Exit","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Collision.CollisionType, System.Enum.toStringFn(_Project.Code.Core.Collision.CollisionType));}},{"a":2,"n":"Stay","is":true,"t":4,"rt":$n[25].CollisionType,"sn":"Stay","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Collision.CollisionType, System.Enum.toStringFn(_Project.Code.Core.Collision.CollisionType));}}]}; }, $n);
    /*_Project.Code.Core.Collision.CollisionType end.*/

    /*_Project.Code.Core.Collision.ICollisionDetector start.*/
    $m("_Project.Code.Core.Collision.ICollisionDetector", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"TriggerEnter","t":2,"ad":{"ab":true,"a":2,"n":"add_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$addTriggerEnter","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$removeTriggerEnter","rt":$n[0].Void,"p":[Function]}},{"ab":true,"a":2,"n":"TriggerExit","t":2,"ad":{"ab":true,"a":2,"n":"add_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$addTriggerExit","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$removeTriggerExit","rt":$n[0].Void,"p":[Function]}},{"ab":true,"a":2,"n":"TriggerStay","t":2,"ad":{"ab":true,"a":2,"n":"add_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$addTriggerStay","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$removeTriggerStay","rt":$n[0].Void,"p":[Function]}},{"ab":true,"a":2,"n":"Triggered","t":2,"ad":{"ab":true,"a":2,"n":"add_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$addTriggered","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$removeTriggered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Collision.ICollisionDetector end.*/

    /*_Project.Code.Core.Collision.OverlapCollisionDetector start.*/
    $m("_Project.Code.Core.Collision.OverlapCollisionDetector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DetectCollisions","t":8,"sn":"DetectCollisions","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Handle","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[25].CollisionType,"ps":1}],"sn":"Handle","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[25].CollisionType]},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[0].Void},{"a":1,"n":"_currentColliders","t":4,"rt":System.Array.type(UnityEngine.Collider2D),"sn":"_currentColliders"},{"a":1,"n":"_previousColliders","t":4,"rt":System.Array.type(UnityEngine.Collider2D),"sn":"_previousColliders"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collisionMask","t":4,"rt":$n[1].LayerMask,"sn":"collisionMask"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"detectionRadius","t":4,"rt":$n[0].Single,"sn":"detectionRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TriggerEnter","t":2,"ad":{"a":2,"n":"add_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerEnter","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerEnter","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TriggerExit","t":2,"ad":{"a":2,"n":"add_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerExit","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerExit","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TriggerStay","t":2,"ad":{"a":2,"n":"add_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerStay","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerStay","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"Triggered","t":2,"ad":{"a":2,"n":"add_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggered","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Collision.OverlapCollisionDetector end.*/

    /*_Project.Code.Core.Character.CharacterAnimator start.*/
    $m("_Project.Code.Core.Character.CharacterAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"s":{"a":2,"n":"set_Direction","t":8,"p":[$n[1].Vector2],"rt":$n[0].Void,"fs":"Direction"},"fn":"Direction"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_backpackAnimator","t":4,"rt":$n[28].TopDownAnimator,"sn":"_backpackAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_idleAnimator","t":4,"rt":$n[28].TopDownAnimator,"sn":"_idleAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_walkAnimator","t":4,"rt":$n[28].TopDownAnimator,"sn":"_walkAnimator"},{"a":1,"backing":true,"n":"<Direction>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"Direction"}]}; }, $n);
    /*_Project.Code.Core.Character.CharacterAnimator end.*/

    /*_Project.Code.Core.Character.CharacterInstaller start.*/
    $m("_Project.Code.Core.Character.CharacterInstaller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[28].CharacterAnimator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_castingDetector","t":4,"rt":$n[25].OverlapCollisionDetector,"sn":"_castingDetector"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mover","t":4,"rt":$n[28].Mover,"sn":"_mover"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storages","t":4,"rt":$n[14].List$1(_Project.Code.Core.Items.Inventory.ItemInventory),"sn":"_storages"}]}; }, $n);
    /*_Project.Code.Core.Character.CharacterInstaller end.*/

    /*_Project.Code.Core.Character.DirectedAnimation start.*/
    $m("_Project.Code.Core.Character.DirectedAnimation", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Equals","t":8,"pi":[{"n":"obj","pt":$n[0].Object,"ps":0}],"sn":"equals","rt":$n[0].Boolean,"p":[$n[0].Object],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("Animation")],"a":2,"n":"Clip","t":4,"rt":$n[1].AnimationClip,"sn":"Clip"},{"a":2,"n":"Direction","t":4,"rt":$n[1].Vector2,"sn":"Direction"},{"a":2,"n":"Flip","t":4,"rt":$n[0].Boolean,"sn":"Flip","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Core.Character.DirectedAnimation end.*/

    /*_Project.Code.Core.Character.Mover start.*/
    $m("_Project.Code.Core.Character.Mover", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"input","pt":$n[17].IMoveInput,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[$n[17].IMoveInput]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":1,"n":"SpeedScaleFactor","is":true,"t":4,"rt":$n[0].Single,"sn":"SpeedScaleFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_footstepAudioSource","t":4,"rt":$n[1].AudioSource,"sn":"_footstepAudioSource"},{"a":1,"n":"_input","t":4,"rt":$n[17].IMoveInput,"sn":"_input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rigidbody","t":4,"rt":$n[1].Rigidbody2D,"sn":"_rigidbody"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"isMoving","t":4,"rt":$n[0].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"previousPosition","t":4,"rt":$n[1].Vector2,"sn":"previousPosition"}]}; }, $n);
    /*_Project.Code.Core.Character.Mover end.*/

    /*_Project.Code.Core.Character.SortingGroupAnimator start.*/
    $m("_Project.Code.Core.Character.SortingGroupAnimator", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Rendering.SortingGroup)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_order","t":4,"rt":$n[0].Int32,"sn":"_order","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_sortingGroup","t":4,"rt":$n[29].SortingGroup,"sn":"_sortingGroup"}]}; }, $n);
    /*_Project.Code.Core.Character.SortingGroupAnimator end.*/

    /*_Project.Code.Core.Character.TopDownAnimationConfig start.*/
    $m("_Project.Code.Core.Character.TopDownAnimationConfig", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "AnimationConfig", menuName: "Configs/AnimationConfig"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Animations","t":4,"rt":$n[14].List$1(_Project.Code.Core.Character.DirectedAnimation),"sn":"Animations"}]}; }, $n);
    /*_Project.Code.Core.Character.TopDownAnimationConfig end.*/

    /*_Project.Code.Core.Character.TopDownAnimator start.*/
    $m("_Project.Code.Core.Character.TopDownAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Flip","t":8,"pi":[{"n":"flip","pt":$n[0].Boolean,"ps":0}],"sn":"Flip","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"GetClosestAnimation","t":8,"pi":[{"n":"direction","pt":$n[1].Vector2,"ps":0}],"sn":"GetClosestAnimation","rt":$n[28].DirectedAnimation,"p":[$n[1].Vector2]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"s":{"a":2,"n":"set_Direction","t":8,"p":[$n[1].Vector2],"rt":$n[0].Void,"fs":"Direction"},"fn":"Direction"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[1].Animator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_config","t":4,"rt":$n[28].TopDownAnimationConfig,"sn":"_config"},{"a":1,"n":"_currentAnimation","t":4,"rt":$n[28].DirectedAnimation,"sn":"_currentAnimation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_flipBody","t":4,"rt":$n[1].Transform,"sn":"_flipBody"},{"a":1,"backing":true,"n":"<Direction>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"Direction"}]}; }, $n);
    /*_Project.Code.Core.Character.TopDownAnimator end.*/

    /*_Project.Code.Core.Buyables.Buyable start.*/
    $m("_Project.Code.Core.Buyables.Buyable", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Buy","t":8,"sn":"Buy","rt":$n[0].Void},{"a":1,"n":"GetCapacity","t":8,"sn":"GetCapacity","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"IsBought","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsBought","t":8,"rt":$n[0].Boolean,"fg":"IsBought","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsBought"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_activateOnBought","t":4,"rt":$n[1].GameObject,"sn":"_activateOnBought"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_deactivateOnBought","t":4,"rt":$n[14].List$1(UnityEngine.GameObject),"sn":"_deactivateOnBought"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemInventory","t":4,"rt":$n[5].ItemInventory,"sn":"_itemInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_price","t":4,"rt":$n[0].Int32,"sn":"_price","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Core.Buyables.Buyable end.*/

    /*_Project.Code.Core.Buyables.CoinsViewUpdater start.*/
    $m("_Project.Code.Core.Buyables.CoinsViewUpdater", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnCoinAdded","t":8,"pi":[{"n":"obj","pt":$n[15].Item,"ps":0}],"sn":"OnCoinAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"OnCoinRemoved","t":8,"pi":[{"n":"obj","pt":$n[15].Item,"ps":0}],"sn":"OnCoinRemoved","rt":$n[0].Void,"p":[$n[15].Item]},{"a":1,"n":"UpdateView","t":8,"sn":"UpdateView","rt":$n[0].Void},{"a":1,"n":"_counter","t":4,"rt":$n[0].Int32,"sn":"_counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[5].ItemInventory,"sn":"_inventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_text","t":4,"rt":$n[4].TMP_Text,"sn":"_text"}]}; }, $n);
    /*_Project.Code.Core.Buyables.CoinsViewUpdater end.*/

    /*_Project.Code.Core.Buyables.EndScreenShower start.*/
    $m("_Project.Code.Core.Buyables.EndScreenShower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[18].IEnumerator},{"a":1,"n":"EndMusic","t":8,"sn":"EndMusic","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioSource","t":4,"rt":$n[1].AudioSource,"sn":"_audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fieldBuyable","t":4,"rt":$n[20].Buyable,"sn":"_fieldBuyable"},{"a":1,"n":"_isFinished","t":4,"rt":$n[0].Boolean,"sn":"_isFinished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moveInput","t":4,"rt":$n[28].Mover,"sn":"_moveInput"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ui","t":4,"rt":$n[1].GameObject,"sn":"_ui"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystick","t":4,"rt":$n[1].GameObject,"sn":"joystick"},{"a":1,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timerCoroutine","t":4,"rt":$n[1].Coroutine,"sn":"timerCoroutine"}]}; }, $n);
    /*_Project.Code.Core.Buyables.EndScreenShower end.*/

    /*_Project.Code.Core.Buyables.InventorViewDestroyer start.*/
    $m("_Project.Code.Core.Buyables.InventorViewDestroyer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[15].Item]},{"ov":true,"a":3,"n":"OnRemoved","t":8,"pi":[{"n":"item","pt":$n[15].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[15].Item]}]}; }, $n);
    /*_Project.Code.Core.Buyables.InventorViewDestroyer end.*/

    /*_Project.Code.Core.Animations.BreathAnimation start.*/
    $m("_Project.Code.Core.Animations.BreathAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Animate","t":8,"sn":"Animate","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_scaleFactor","t":4,"rt":$n[0].Single,"sn":"_scaleFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_tweener","t":4,"rt":$n[8].Tweener,"sn":"_tweener"}]}; }, $n);
    /*_Project.Code.Core.Animations.BreathAnimation end.*/

    /*_Project.Code.Camera.CameraInBordersZoom start.*/
    $m("_Project.Code.Camera.CameraInBordersZoom", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CalculateFactor","t":8,"pi":[{"n":"screenSize","pt":$n[1].Vector2,"ps":0},{"n":"boundsSize","pt":$n[1].Vector2,"ps":1}],"sn":"CalculateFactor","rt":$n[0].Single,"p":[$n[1].Vector2,$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetScreenSizeInWorld","t":8,"sn":"GetScreenSizeInWorld","rt":$n[1].Vector2},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_borders","t":4,"rt":$n[1].Collider2D,"sn":"_borders"},{"a":1,"n":"_camera","t":4,"rt":$n[1].Camera,"sn":"_camera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_defaultCameraSize","t":4,"rt":$n[0].Single,"sn":"_defaultCameraSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Camera.CameraInBordersZoom end.*/

    /*_Project.Code.Camera.Follower start.*/
    $m("_Project.Code.Camera.Follower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_target","t":4,"rt":$n[1].Transform,"sn":"_target"}]}; }, $n);
    /*_Project.Code.Camera.Follower end.*/

    }});
