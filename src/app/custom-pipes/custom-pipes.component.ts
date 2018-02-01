import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {
text = `
warn-once.js:10 BsDatepickerModule is under development,
      BREAKING CHANGES are possible,
      PLEASE, read changelog
warnOnce @ warn-once.js:10
BsDatepickerModule @ bs-datepicker.module.js:37
_createClass @ core.js:10913
_createProviderInstance$1 @ core.js:10889
initNgModule @ core.js:10842
NgModuleRef_ @ core.js:12096
createNgModuleRef @ core.js:12086
debugCreateNgModuleRef @ core.js:14430
NgModuleFactory_.create @ core.js:15575
(anonymous) @ core.js:5492
ZoneDelegate.invoke @ zone.js:388
onInvoke @ core.js:4753
ZoneDelegate.invoke @ zone.js:387
Zone.run @ zone.js:138
NgZone.run @ core.js:4570
PlatformRef.bootstrapModuleFactory @ core.js:5490
(anonymous) @ core.js:5569
ZoneDelegate.invoke @ zone.js:388
Zone.run @ zone.js:138
(anonymous) @ zone.js:870
ZoneDelegate.invokeTask @ zone.js:421
Zone.runTask @ zone.js:188
drainMicroTaskQueue @ zone.js:594
Promise resolved (async)
scheduleMicroTask @ zone.js:577
ZoneDelegate.scheduleTask @ zone.js:410
Zone.scheduleTask @ zone.js:232
Zone.scheduleMicroTask @ zone.js:252
scheduleResolveOrReject @ zone.js:868
ZoneAwarePromise.then @ zone.js:978
PlatformRef.bootstrapModule @ core.js:5569
(anonymous) @ main.ts:11
../../../../../src/main.ts @ main.bundle.js:326
__webpack_require__ @ inline.bundle.js:55
0 @ main.bundle.js:348
__webpack_require__ @ inline.bundle.js:55
webpackJsonpCallback @ inline.bundle.js:26
(anonymous) @ main.bundle.js:1
core.es5.js:138 Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming
MatCommonModule._checkThemeIsPresent @ core.es5.js:138
MatCommonModule @ core.es5.js:84
_createClass @ core.js:10915
_createProviderInstance$1 @ core.js:10889
initNgModule @ core.js:10842
NgModuleRef_ @ core.js:12096
createNgModuleRef @ core.js:12086
debugCreateNgModuleRef @ core.js:14430
NgModuleFactory_.create @ core.js:15575
(anonymous) @ core.js:5492
ZoneDelegate.invoke @ zone.js:388
onInvoke @ core.js:4753
ZoneDelegate.invoke @ zone.js:387
Zone.run @ zone.js:138
NgZone.run @ core.js:4570
PlatformRef.bootstrapModuleFactory @ core.js:5490
(anonymous) @ core.js:5569
ZoneDelegate.invoke @ zone.js:388
Zone.run @ zone.js:138
(anonymous) @ zone.js:870
ZoneDelegate.invokeTask @ zone.js:421
Zone.runTask @ zone.js:188
drainMicroTaskQueue @ zone.js:594
Promise resolved (async)
scheduleMicroTask @ zone.js:577
ZoneDelegate.scheduleTask @ zone.js:410
Zone.scheduleTask @ zone.js:232
Zone.scheduleMicroTask @ zone.js:252
scheduleResolveOrReject @ zone.js:868
ZoneAwarePromise.then @ zone.js:978
PlatformRef.bootstrapModule @ core.js:5569
(anonymous) @ main.ts:11
../../../../../src/main.ts @ main.bundle.js:326
__webpack_require__ @ inline.bundle.js:55
0 @ main.bundle.js:348
__webpack_require__ @ inline.bundle.js:55
webpackJsonpCallback @ inline.bundle.js:26
(anonymous) @ main.bundle.js:1
core.js:3660 Angular is running in the development mode. Call enableProdMode() to enable the production mode.
common.js:6230 Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".
CurrencyPipe.transform @ common.js:6230
checkAndUpdatePureExpressionInline @ core.js:13221
checkAndUpdateNodeInline @ core.js:13931
checkAndUpdateNode @ core.js:13870
debugCheckAndUpdateNode @ core.js:14763
debugCheckRenderNodeFn @ core.js:14742
(anonymous) @ PipeComponent.html:9
debugUpdateRenderer @ core.js:14727
checkAndUpdateView @ core.js:13841
callViewAction @ core.js:14187
execComponentViewsAction @ core.js:14119
checkAndUpdateView @ core.js:13842
callViewAction @ core.js:14187
execEmbeddedViewsAction @ core.js:14145
checkAndUpdateView @ core.js:13837
callViewAction @ core.js:14187
execComponentViewsAction @ core.js:14119
checkAndUpdateView @ core.js:13842
callWithDebugContext @ core.js:15090
debugCheckAndUpdateView @ core.js:14627
ViewRef_.detectChanges @ core.js:11601
(anonymous) @ core.js:5908
ApplicationRef.tick @ core.js:5908
(anonymous) @ core.js:5741
ZoneDelegate.invoke @ zone.js:388
onInvoke @ core.js:4753
ZoneDelegate.invoke @ zone.js:387
Zone.run @ zone.js:138
NgZone.run @ core.js:4570
next @ core.js:5741
schedulerFn @ core.js:4339
SafeSubscriber.__tryOrUnsub @ Subscriber.js:240
SafeSubscriber.next @ Subscriber.js:187
Subscriber._next @ Subscriber.js:128
Subscriber.next @ Subscriber.js:92
Subject.next @ Subject.js:56
EventEmitter.emit @ core.js:4319
checkStable @ core.js:4718
onHasTask @ core.js:4766
ZoneDelegate.hasTask @ zone.js:441
ZoneDelegate._updateTaskCount @ zone.js:461
Zone._updateTaskCount @ zone.js:285
Zone.runTask @ zone.js:205
drainMicroTaskQueue @ zone.js:594
Promise resolved (async)
scheduleMicroTask @ zone.js:577
ZoneDelegate.scheduleTask @ zone.js:410
Zone.scheduleTask @ zone.js:232
Zone.scheduleMicroTask @ zone.js:252
scheduleResolveOrReject @ zone.js:868
ZoneAwarePromise.then @ zone.js:978
PlatformRef.bootstrapModule @ core.js:5569
(anonymous) @ main.ts:11
../../../../../src/main.ts @ main.bundle.js:326
__webpack_require__ @ inline.bundle.js:55
0 @ main.bundle.js:348
__webpack_require__ @ inline.bundle.js:55
webpackJsonpCallback @ inline.bundle.js:26
(anonymous) @ main.bundle.js:1
common.js:6230 Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".
`;
  constructor() { }

  ngOnInit() {
  }

}
