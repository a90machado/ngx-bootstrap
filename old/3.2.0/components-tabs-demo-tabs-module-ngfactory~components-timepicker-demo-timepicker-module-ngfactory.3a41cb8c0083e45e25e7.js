(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{fHIT:function(e,t,n){"use strict";n.d(t,"b",function(){return A}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return O}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return V});var i=n("CcnG"),s=n("mrSG"),o=n("26FU"),r=n("MwfX"),c=(n("gIcY"),function(){function e(){}return e.prototype.writeValue=function(t){return{type:e.WRITE_VALUE,payload:t}},e.prototype.changeHours=function(t){return{type:e.CHANGE_HOURS,payload:t}},e.prototype.changeMinutes=function(t){return{type:e.CHANGE_MINUTES,payload:t}},e.prototype.changeSeconds=function(t){return{type:e.CHANGE_SECONDS,payload:t}},e.prototype.setTime=function(t){return{type:e.SET_TIME_UNIT,payload:t}},e.prototype.updateControls=function(t){return{type:e.UPDATE_CONTROLS,payload:t}},e.WRITE_VALUE="[timepicker] write value from ng model",e.CHANGE_HOURS="[timepicker] change hours",e.CHANGE_MINUTES="[timepicker] change minutes",e.CHANGE_SECONDS="[timepicker] change seconds",e.SET_TIME_UNIT="[timepicker] set time unit",e.UPDATE_CONTROLS="[timepicker] update controls",e}()),u=10,a=24,h=12,d=60,p=60;function l(e){return!!e&&!(e instanceof Date&&isNaN(e.getHours()))&&("string"!=typeof e||l(new Date(e)))}function m(e,t){return!(e.min&&t<e.min||e.max&&t>e.max)}function f(e){return"number"==typeof e?e:parseInt(e,u)}function g(e,t){void 0===t&&(t=!1);var n=f(e);return isNaN(n)||n<0||n>(t?h:a)?NaN:n}function y(e){var t=f(e);return isNaN(t)||t<0||t>d?NaN:t}function v(e){var t=f(e);return isNaN(t)||t<0||t>p?NaN:t}function S(e){return"string"==typeof e?new Date(e):e}function M(e,t){if(!e)return M(w(new Date,0,0,0),t);var n=e.getHours(),i=e.getMinutes(),s=e.getSeconds();return t.hour&&(n=(n+f(t.hour))%a)<0&&(n+=a),t.minute&&(i+=f(t.minute)),t.seconds&&(s+=f(t.seconds)),w(e,n,i,s)}function w(e,t,n,i){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),t,n,i,e.getMilliseconds())}function N(e){var t=e.toString();return t.length>1?t:"0"+t}function _(e,t){return!isNaN(g(e,t))}function b(e){return!isNaN(y(e))}function T(e){return!isNaN(v(e))}function H(e,t,n,i){return void 0===t&&(t="0"),void 0===n&&(n="0"),_(e,i)&&b(t)&&T(n)}function I(e,t){if(e.readonlyInput||e.disabled)return!1;if(t){if("wheel"===t.source&&!e.mousewheel)return!1;if("key"===t.source&&!e.arrowkeys)return!1}return!0}function D(e){return{hourStep:e.hourStep,minuteStep:e.minuteStep,secondsStep:e.secondsStep,readonlyInput:e.readonlyInput,disabled:e.disabled,mousewheel:e.mousewheel,arrowkeys:e.arrowkeys,showSpinners:e.showSpinners,showMeridian:e.showMeridian,showSeconds:e.showSeconds,meridians:e.meridians,min:e.min,max:e.max}}var E=function(){this.hourStep=1,this.minuteStep=5,this.secondsStep=10,this.showMeridian=!0,this.meridians=["AM","PM"],this.readonlyInput=!1,this.disabled=!1,this.mousewheel=!0,this.arrowkeys=!0,this.showSpinners=!0,this.showSeconds=!1,this.showMinutes=!0},C={value:null,config:new E,controls:{canIncrementHours:!0,canIncrementMinutes:!0,canIncrementSeconds:!0,canDecrementHours:!0,canDecrementMinutes:!0,canDecrementSeconds:!0,canToggleMeridian:!0}};function k(e,t){switch(void 0===e&&(e=C),t.type){case c.WRITE_VALUE:return Object.assign({},e,{value:t.payload});case c.CHANGE_HOURS:if(!I(e.config,t.payload)||(l=e.controls,!(p=t.payload).step||p.step>0&&!l.canIncrementHours||p.step<0&&!l.canDecrementHours))return e;var n=M(e.value,{hour:t.payload.step});return!e.config.max&&!e.config.min||m(e.config,n)?Object.assign({},e,{value:n}):e;case c.CHANGE_MINUTES:return I(e.config,t.payload)&&function(e,t){return!(!e.step||e.step>0&&!t.canIncrementMinutes||e.step<0&&!t.canDecrementMinutes)}(t.payload,e.controls)?(n=M(e.value,{minute:t.payload.step}),!e.config.max&&!e.config.min||m(e.config,n)?Object.assign({},e,{value:n}):e):e;case c.CHANGE_SECONDS:return I(e.config,t.payload)&&function(e,t){return!(!e.step||e.step>0&&!t.canIncrementSeconds||e.step<0&&!t.canDecrementSeconds)}(t.payload,e.controls)?(n=M(e.value,{seconds:t.payload.step}),!e.config.max&&!e.config.min||m(e.config,n)?Object.assign({},e,{value:n}):e):e;case c.SET_TIME_UNIT:return I(e.config)?(o=e.value,u=g((r=t.payload).hour),a=y(r.minute),d=v(r.seconds)||0,r.isPM&&(u+=h),n=o?isNaN(u)||isNaN(a)?o:w(o,u,a,d):isNaN(u)||isNaN(a)?o:w(new Date,u,a,d),Object.assign({},e,{value:n})):e;case c.UPDATE_CONTROLS:var i=function(e,t){var n=t.min,i=t.max,s=t.hourStep,o=t.minuteStep,r=t.secondsStep,c=t.showSeconds,u={canIncrementHours:!0,canIncrementMinutes:!0,canIncrementSeconds:!0,canDecrementHours:!0,canDecrementMinutes:!0,canDecrementSeconds:!0,canToggleMeridian:!0};if(!e)return u;if(i){var a=M(e,{hour:s});if(u.canIncrementHours=i>a,!u.canIncrementHours){var h=M(e,{minute:o});u.canIncrementMinutes=c?i>h:i>=h}if(!u.canIncrementMinutes){var d=M(e,{seconds:r});u.canIncrementSeconds=i>=d}e.getHours()<12&&(u.canToggleMeridian=M(e,{hour:12})<i)}return n&&(a=M(e,{hour:-s}),u.canDecrementHours=n<a,u.canDecrementHours||(h=M(e,{minute:-o}),u.canDecrementMinutes=c?n<h:n<=h),u.canDecrementMinutes||(d=M(e,{seconds:-r}),u.canDecrementSeconds=n<=d),e.getHours()>=12&&(u.canToggleMeridian=M(e,{hour:-12})>n)),u}(e.value,t.payload),s={value:e.value,config:t.payload,controls:i};return e.config.showMeridian!==s.config.showMeridian&&e.value&&(s.value=new Date(e.value)),Object.assign({},e,s);default:return e}var o,r,u,a,d,p,l}var O=function(e){function t(){var t=new o.a({type:"[mini-ngrx] dispatcher init"}),n=new r.a(C,t,k);return e.call(this,t,k,n)||this}return Object(s.c)(t,e),t}(r.b),A=function(){function e(e,t,n,s){var o=this;this._cd=t,this._store=n,this._timepickerActions=s,this.isValid=new i.m,this.invalidHours=!1,this.invalidMinutes=!1,this.invalidSeconds=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype,Object.assign(this,e),this.timepickerSub=n.select(function(e){return e.value}).subscribe(function(e){o._renderTime(e),o.onChange(e),o._store.dispatch(o._timepickerActions.updateControls(D(o)))}),n.select(function(e){return e.controls}).subscribe(function(e){o.isValid.emit(H(o.hours,o.minutes,o.seconds,o.isPM())),Object.assign(o,e),t.markForCheck()})}return Object.defineProperty(e.prototype,"isSpinnersVisible",{get:function(){return this.showSpinners&&!this.readonlyInput},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEditable",{get:function(){return!(this.readonlyInput||this.disabled)},enumerable:!0,configurable:!0}),e.prototype.resetValidation=function(){this.invalidHours=!1,this.invalidMinutes=!1,this.invalidSeconds=!1},e.prototype.isPM=function(){return this.showMeridian&&this.meridian===this.meridians[1]},e.prototype.prevDef=function(e){e.preventDefault()},e.prototype.wheelSign=function(e){return-1*Math.sign(e.deltaY)},e.prototype.ngOnChanges=function(e){this._store.dispatch(this._timepickerActions.updateControls(D(this)))},e.prototype.changeHours=function(e,t){void 0===t&&(t=""),this.resetValidation(),this._store.dispatch(this._timepickerActions.changeHours({step:e,source:t}))},e.prototype.changeMinutes=function(e,t){void 0===t&&(t=""),this.resetValidation(),this._store.dispatch(this._timepickerActions.changeMinutes({step:e,source:t}))},e.prototype.changeSeconds=function(e,t){void 0===t&&(t=""),this.resetValidation(),this._store.dispatch(this._timepickerActions.changeSeconds({step:e,source:t}))},e.prototype.updateHours=function(e){if(this.resetValidation(),this.hours=e,!_(this.hours,this.isPM())||!this.isValidLimit())return this.invalidHours=!0,this.isValid.emit(!1),void this.onChange(null);this._updateTime()},e.prototype.updateMinutes=function(e){if(this.resetValidation(),this.minutes=e,!b(this.minutes)||!this.isValidLimit())return this.invalidMinutes=!0,this.isValid.emit(!1),void this.onChange(null);this._updateTime()},e.prototype.updateSeconds=function(e){if(this.resetValidation(),this.seconds=e,!T(this.seconds)||!this.isValidLimit())return this.invalidSeconds=!0,this.isValid.emit(!1),void this.onChange(null);this._updateTime()},e.prototype.isValidLimit=function(){return e={hour:this.hours,minute:this.minutes,seconds:this.seconds,isPM:this.isPM()},t=this.max,n=this.min,i=M(new Date,e),!(t&&i>t||n&&i<n);var e,t,n,i},e.prototype._updateTime=function(){if(!H(this.hours,this.showMinutes?this.minutes:void 0,this.showSeconds?this.seconds:void 0,this.isPM()))return this.isValid.emit(!1),void this.onChange(null);this._store.dispatch(this._timepickerActions.setTime({hour:this.hours,minute:this.minutes,seconds:this.seconds,isPM:this.isPM()}))},e.prototype.toggleMeridian=function(){this.showMeridian&&this.isEditable&&this._store.dispatch(this._timepickerActions.changeHours({step:12,source:""}))},e.prototype.writeValue=function(e){l(e)?this._store.dispatch(this._timepickerActions.writeValue(S(e))):null==e&&this._store.dispatch(this._timepickerActions.writeValue(null))},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.setDisabledState=function(e){this.disabled=e,this._cd.markForCheck()},e.prototype.ngOnDestroy=function(){this.timepickerSub.unsubscribe()},e.prototype._renderTime=function(e){if(!l(e))return this.hours="",this.minutes="",this.seconds="",void(this.meridian=this.meridians[0]);var t=S(e),n=t.getHours();this.showMeridian&&(this.meridian=this.meridians[n>=12?1:0],0==(n%=12)&&(n=12)),this.hours=N(n),this.minutes=N(t.getMinutes()),this.seconds=N(t.getUTCSeconds())},e}(),V=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[E,c,O]}},e}()}}]);