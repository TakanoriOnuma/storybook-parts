import {
  __commonJS2 as __commonJS,
  __toESM,
  __toESM2,
  require_memoizerific
} from "./chunk-54QAZ5U5.js";

// ../components/dist/formatter-MOD6AG2F.mjs
var import_memoizerific = __toESM(require_memoizerific(), 1);
var require_standalone = __commonJS({
  "node_modules/prettier/standalone.js"(exports, module) {
    (function(e) {
      if (typeof exports == "object" && typeof module == "object")
        module.exports = e();
      else if (typeof define == "function" && define.amd)
        define(e);
      else {
        var f2 = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
        f2.prettier = e();
      }
    })(function() {
      var xe2 = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
      var pt2 = xe2((r0, pu) => {
        var ir2 = function(e) {
          return e && e.Math == Math && e;
        };
        pu.exports = ir2(typeof globalThis == "object" && globalThis) || ir2(typeof window == "object" && window) || ir2(typeof self == "object" && self) || ir2(typeof global == "object" && global) || function() {
          return this;
        }() || Function("return this")();
      });
      var Dt2 = xe2((n0, fu) => {
        fu.exports = function(e) {
          try {
            return !!e();
          } catch {
            return true;
          }
        };
      });
      var yt2 = xe2((u0, Du) => {
        var Mo = Dt2();
        Du.exports = !Mo(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      });
      var ar2 = xe2((s0, mu) => {
        var Ro = Dt2();
        mu.exports = !Ro(function() {
          var e = (function() {
          }).bind();
          return typeof e != "function" || e.hasOwnProperty("prototype");
        });
      });
      var At2 = xe2((i0, du) => {
        var $o = ar2(), or2 = Function.prototype.call;
        du.exports = $o ? or2.bind(or2) : function() {
          return or2.apply(or2, arguments);
        };
      });
      var vu = xe2((hu) => {
        var gu = {}.propertyIsEnumerable, yu = Object.getOwnPropertyDescriptor, Vo = yu && !gu.call({ 1: 2 }, 1);
        hu.f = Vo ? function(r) {
          var t8 = yu(this, r);
          return !!t8 && t8.enumerable;
        } : gu;
      });
      var lr2 = xe2((o0, Cu) => {
        Cu.exports = function(e, r) {
          return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
        };
      });
      var mt2 = xe2((l0, Au) => {
        var Eu = ar2(), Fu = Function.prototype, Wr = Fu.call, Wo = Eu && Fu.bind.bind(Wr, Wr);
        Au.exports = Eu ? Wo : function(e) {
          return function() {
            return Wr.apply(e, arguments);
          };
        };
      });
      var Vt2 = xe2((c0, xu) => {
        var Su = mt2(), Ho = Su({}.toString), Go = Su("".slice);
        xu.exports = function(e) {
          return Go(Ho(e), 8, -1);
        };
      });
      var Tu = xe2((p0, bu) => {
        var Uo = mt2(), Jo = Dt2(), zo = Vt2(), Hr2 = Object, Xo = Uo("".split);
        bu.exports = Jo(function() {
          return !Hr2("z").propertyIsEnumerable(0);
        }) ? function(e) {
          return zo(e) == "String" ? Xo(e, "") : Hr2(e);
        } : Hr2;
      });
      var cr2 = xe2((f0, Bu) => {
        Bu.exports = function(e) {
          return e == null;
        };
      });
      var Gr = xe2((D0, Nu) => {
        var Ko = cr2(), Yo = TypeError;
        Nu.exports = function(e) {
          if (Ko(e))
            throw Yo("Can't call method on " + e);
          return e;
        };
      });
      var pr2 = xe2((m0, wu) => {
        var Qo = Tu(), Zo = Gr();
        wu.exports = function(e) {
          return Qo(Zo(e));
        };
      });
      var Jr2 = xe2((d0, _u) => {
        var Ur2 = typeof document == "object" && document.all, el = typeof Ur2 > "u" && Ur2 !== void 0;
        _u.exports = { all: Ur2, IS_HTMLDDA: el };
      });
      var ot2 = xe2((g0, Iu) => {
        var Pu = Jr2(), tl = Pu.all;
        Iu.exports = Pu.IS_HTMLDDA ? function(e) {
          return typeof e == "function" || e === tl;
        } : function(e) {
          return typeof e == "function";
        };
      });
      var St2 = xe2((y0, Ou) => {
        var ku = ot2(), Lu = Jr2(), rl = Lu.all;
        Ou.exports = Lu.IS_HTMLDDA ? function(e) {
          return typeof e == "object" ? e !== null : ku(e) || e === rl;
        } : function(e) {
          return typeof e == "object" ? e !== null : ku(e);
        };
      });
      var Wt2 = xe2((h0, ju) => {
        var zr = pt2(), nl = ot2(), ul = function(e) {
          return nl(e) ? e : void 0;
        };
        ju.exports = function(e, r) {
          return arguments.length < 2 ? ul(zr[e]) : zr[e] && zr[e][r];
        };
      });
      var Xr2 = xe2((v0, qu) => {
        var sl = mt2();
        qu.exports = sl({}.isPrototypeOf);
      });
      var Ru = xe2((C0, Mu) => {
        var il = Wt2();
        Mu.exports = il("navigator", "userAgent") || "";
      });
      var Ju = xe2((E0, Uu) => {
        var Gu = pt2(), Kr2 = Ru(), $u = Gu.process, Vu = Gu.Deno, Wu = $u && $u.versions || Vu && Vu.version, Hu = Wu && Wu.v8, dt2, fr2;
        Hu && (dt2 = Hu.split("."), fr2 = dt2[0] > 0 && dt2[0] < 4 ? 1 : +(dt2[0] + dt2[1]));
        !fr2 && Kr2 && (dt2 = Kr2.match(/Edge\/(\d+)/), (!dt2 || dt2[1] >= 74) && (dt2 = Kr2.match(/Chrome\/(\d+)/), dt2 && (fr2 = +dt2[1])));
        Uu.exports = fr2;
      });
      var Yr2 = xe2((F0, Xu) => {
        var zu = Ju(), al = Dt2();
        Xu.exports = !!Object.getOwnPropertySymbols && !al(function() {
          var e = Symbol();
          return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && zu && zu < 41;
        });
      });
      var Qr2 = xe2((A0, Ku) => {
        var ol = Yr2();
        Ku.exports = ol && !Symbol.sham && typeof Symbol.iterator == "symbol";
      });
      var Zr2 = xe2((S0, Yu) => {
        var ll = Wt2(), cl = ot2(), pl = Xr2(), fl = Qr2(), Dl = Object;
        Yu.exports = fl ? function(e) {
          return typeof e == "symbol";
        } : function(e) {
          var r = ll("Symbol");
          return cl(r) && pl(r.prototype, Dl(e));
        };
      });
      var Dr2 = xe2((x0, Qu) => {
        var ml = String;
        Qu.exports = function(e) {
          try {
            return ml(e);
          } catch {
            return "Object";
          }
        };
      });
      var Ht2 = xe2((b0, Zu) => {
        var dl = ot2(), gl = Dr2(), yl = TypeError;
        Zu.exports = function(e) {
          if (dl(e))
            return e;
          throw yl(gl(e) + " is not a function");
        };
      });
      var mr2 = xe2((T0, es2) => {
        var hl = Ht2(), vl = cr2();
        es2.exports = function(e, r) {
          var t8 = e[r];
          return vl(t8) ? void 0 : hl(t8);
        };
      });
      var rs2 = xe2((B0, ts2) => {
        var en2 = At2(), tn2 = ot2(), rn2 = St2(), Cl = TypeError;
        ts2.exports = function(e, r) {
          var t8, s;
          if (r === "string" && tn2(t8 = e.toString) && !rn2(s = en2(t8, e)) || tn2(t8 = e.valueOf) && !rn2(s = en2(t8, e)) || r !== "string" && tn2(t8 = e.toString) && !rn2(s = en2(t8, e)))
            return s;
          throw Cl("Can't convert object to primitive value");
        };
      });
      var us2 = xe2((N0, ns2) => {
        ns2.exports = false;
      });
      var dr2 = xe2((w0, is2) => {
        var ss2 = pt2(), El = Object.defineProperty;
        is2.exports = function(e, r) {
          try {
            El(ss2, e, { value: r, configurable: true, writable: true });
          } catch {
            ss2[e] = r;
          }
          return r;
        };
      });
      var gr2 = xe2((_0, os2) => {
        var Fl = pt2(), Al = dr2(), as2 = "__core-js_shared__", Sl = Fl[as2] || Al(as2, {});
        os2.exports = Sl;
      });
      var nn2 = xe2((P0, cs2) => {
        var xl = us2(), ls2 = gr2();
        (cs2.exports = function(e, r) {
          return ls2[e] || (ls2[e] = r !== void 0 ? r : {});
        })("versions", []).push({ version: "3.26.1", mode: xl ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
      });
      var yr2 = xe2((I0, ps2) => {
        var bl = Gr(), Tl = Object;
        ps2.exports = function(e) {
          return Tl(bl(e));
        };
      });
      var Ct2 = xe2((k0, fs2) => {
        var Bl = mt2(), Nl = yr2(), wl = Bl({}.hasOwnProperty);
        fs2.exports = Object.hasOwn || function(r, t8) {
          return wl(Nl(r), t8);
        };
      });
      var un2 = xe2((L0, Ds) => {
        var _l = mt2(), Pl = 0, Il = Math.random(), kl = _l(1 .toString);
        Ds.exports = function(e) {
          return "Symbol(" + (e === void 0 ? "" : e) + ")_" + kl(++Pl + Il, 36);
        };
      });
      var bt2 = xe2((O0, hs2) => {
        var Ll = pt2(), Ol = nn2(), ms2 = Ct2(), jl = un2(), ds2 = Yr2(), ys = Qr2(), It2 = Ol("wks"), xt2 = Ll.Symbol, gs2 = xt2 && xt2.for, ql = ys ? xt2 : xt2 && xt2.withoutSetter || jl;
        hs2.exports = function(e) {
          if (!ms2(It2, e) || !(ds2 || typeof It2[e] == "string")) {
            var r = "Symbol." + e;
            ds2 && ms2(xt2, e) ? It2[e] = xt2[e] : ys && gs2 ? It2[e] = gs2(r) : It2[e] = ql(r);
          }
          return It2[e];
        };
      });
      var Fs = xe2((j0, Es) => {
        var Ml = At2(), vs = St2(), Cs2 = Zr2(), Rl = mr2(), $l = rs2(), Vl = bt2(), Wl = TypeError, Hl = Vl("toPrimitive");
        Es.exports = function(e, r) {
          if (!vs(e) || Cs2(e))
            return e;
          var t8 = Rl(e, Hl), s;
          if (t8) {
            if (r === void 0 && (r = "default"), s = Ml(t8, e, r), !vs(s) || Cs2(s))
              return s;
            throw Wl("Can't convert object to primitive value");
          }
          return r === void 0 && (r = "number"), $l(e, r);
        };
      });
      var hr2 = xe2((q0, As) => {
        var Gl = Fs(), Ul = Zr2();
        As.exports = function(e) {
          var r = Gl(e, "string");
          return Ul(r) ? r : r + "";
        };
      });
      var bs2 = xe2((M0, xs2) => {
        var Jl = pt2(), Ss2 = St2(), sn2 = Jl.document, zl = Ss2(sn2) && Ss2(sn2.createElement);
        xs2.exports = function(e) {
          return zl ? sn2.createElement(e) : {};
        };
      });
      var an2 = xe2((R0, Ts2) => {
        var Xl = yt2(), Kl = Dt2(), Yl = bs2();
        Ts2.exports = !Xl && !Kl(function() {
          return Object.defineProperty(Yl("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      });
      var on2 = xe2((Ns2) => {
        var Ql = yt2(), Zl = At2(), ec = vu(), tc = lr2(), rc = pr2(), nc = hr2(), uc = Ct2(), sc = an2(), Bs = Object.getOwnPropertyDescriptor;
        Ns2.f = Ql ? Bs : function(r, t8) {
          if (r = rc(r), t8 = nc(t8), sc)
            try {
              return Bs(r, t8);
            } catch {
            }
          if (uc(r, t8))
            return tc(!Zl(ec.f, r, t8), r[t8]);
        };
      });
      var _s2 = xe2((V0, ws2) => {
        var ic = yt2(), ac = Dt2();
        ws2.exports = ic && ac(function() {
          return Object.defineProperty(function() {
          }, "prototype", { value: 42, writable: false }).prototype != 42;
        });
      });
      var Tt2 = xe2((W0, Ps2) => {
        var oc = St2(), lc = String, cc = TypeError;
        Ps2.exports = function(e) {
          if (oc(e))
            return e;
          throw cc(lc(e) + " is not an object");
        };
      });
      var kt2 = xe2((ks2) => {
        var pc = yt2(), fc = an2(), Dc = _s2(), vr2 = Tt2(), Is2 = hr2(), mc = TypeError, ln2 = Object.defineProperty, dc = Object.getOwnPropertyDescriptor, cn2 = "enumerable", pn2 = "configurable", fn2 = "writable";
        ks2.f = pc ? Dc ? function(r, t8, s) {
          if (vr2(r), t8 = Is2(t8), vr2(s), typeof r == "function" && t8 === "prototype" && "value" in s && fn2 in s && !s[fn2]) {
            var a = dc(r, t8);
            a && a[fn2] && (r[t8] = s.value, s = { configurable: pn2 in s ? s[pn2] : a[pn2], enumerable: cn2 in s ? s[cn2] : a[cn2], writable: false });
          }
          return ln2(r, t8, s);
        } : ln2 : function(r, t8, s) {
          if (vr2(r), t8 = Is2(t8), vr2(s), fc)
            try {
              return ln2(r, t8, s);
            } catch {
            }
          if ("get" in s || "set" in s)
            throw mc("Accessors not supported");
          return "value" in s && (r[t8] = s.value), r;
        };
      });
      var Dn2 = xe2((G0, Ls) => {
        var gc = yt2(), yc = kt2(), hc = lr2();
        Ls.exports = gc ? function(e, r, t8) {
          return yc.f(e, r, hc(1, t8));
        } : function(e, r, t8) {
          return e[r] = t8, e;
        };
      });
      var qs2 = xe2((U0, js) => {
        var mn2 = yt2(), vc = Ct2(), Os2 = Function.prototype, Cc = mn2 && Object.getOwnPropertyDescriptor, dn2 = vc(Os2, "name"), Ec = dn2 && (function() {
        }).name === "something", Fc = dn2 && (!mn2 || mn2 && Cc(Os2, "name").configurable);
        js.exports = { EXISTS: dn2, PROPER: Ec, CONFIGURABLE: Fc };
      });
      var yn2 = xe2((J0, Ms2) => {
        var Ac = mt2(), Sc = ot2(), gn2 = gr2(), xc = Ac(Function.toString);
        Sc(gn2.inspectSource) || (gn2.inspectSource = function(e) {
          return xc(e);
        });
        Ms2.exports = gn2.inspectSource;
      });
      var Vs2 = xe2((z0, $s2) => {
        var bc = pt2(), Tc = ot2(), Rs2 = bc.WeakMap;
        $s2.exports = Tc(Rs2) && /native code/.test(String(Rs2));
      });
      var Gs2 = xe2((X0, Hs2) => {
        var Bc = nn2(), Nc = un2(), Ws2 = Bc("keys");
        Hs2.exports = function(e) {
          return Ws2[e] || (Ws2[e] = Nc(e));
        };
      });
      var hn2 = xe2((K0, Us2) => {
        Us2.exports = {};
      });
      var Ks2 = xe2((Y0, Xs2) => {
        var wc = Vs2(), zs2 = pt2(), _c = St2(), Pc = Dn2(), vn2 = Ct2(), Cn2 = gr2(), Ic = Gs2(), kc = hn2(), Js2 = "Object already initialized", En2 = zs2.TypeError, Lc = zs2.WeakMap, Cr2, Gt, Er2, Oc = function(e) {
          return Er2(e) ? Gt(e) : Cr2(e, {});
        }, jc = function(e) {
          return function(r) {
            var t8;
            if (!_c(r) || (t8 = Gt(r)).type !== e)
              throw En2("Incompatible receiver, " + e + " required");
            return t8;
          };
        };
        wc || Cn2.state ? (gt2 = Cn2.state || (Cn2.state = new Lc()), gt2.get = gt2.get, gt2.has = gt2.has, gt2.set = gt2.set, Cr2 = function(e, r) {
          if (gt2.has(e))
            throw En2(Js2);
          return r.facade = e, gt2.set(e, r), r;
        }, Gt = function(e) {
          return gt2.get(e) || {};
        }, Er2 = function(e) {
          return gt2.has(e);
        }) : (Bt2 = Ic("state"), kc[Bt2] = true, Cr2 = function(e, r) {
          if (vn2(e, Bt2))
            throw En2(Js2);
          return r.facade = e, Pc(e, Bt2, r), r;
        }, Gt = function(e) {
          return vn2(e, Bt2) ? e[Bt2] : {};
        }, Er2 = function(e) {
          return vn2(e, Bt2);
        });
        var gt2, Bt2;
        Xs2.exports = { set: Cr2, get: Gt, has: Er2, enforce: Oc, getterFor: jc };
      });
      var An2 = xe2((Q0, Qs2) => {
        var qc = Dt2(), Mc = ot2(), Fr2 = Ct2(), Fn2 = yt2(), Rc = qs2().CONFIGURABLE, $c = yn2(), Ys2 = Ks2(), Vc = Ys2.enforce, Wc = Ys2.get, Ar2 = Object.defineProperty, Hc = Fn2 && !qc(function() {
          return Ar2(function() {
          }, "length", { value: 8 }).length !== 8;
        }), Gc = String(String).split("String"), Uc = Qs2.exports = function(e, r, t8) {
          String(r).slice(0, 7) === "Symbol(" && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), t8 && t8.getter && (r = "get " + r), t8 && t8.setter && (r = "set " + r), (!Fr2(e, "name") || Rc && e.name !== r) && (Fn2 ? Ar2(e, "name", { value: r, configurable: true }) : e.name = r), Hc && t8 && Fr2(t8, "arity") && e.length !== t8.arity && Ar2(e, "length", { value: t8.arity });
          try {
            t8 && Fr2(t8, "constructor") && t8.constructor ? Fn2 && Ar2(e, "prototype", { writable: false }) : e.prototype && (e.prototype = void 0);
          } catch {
          }
          var s = Vc(e);
          return Fr2(s, "source") || (s.source = Gc.join(typeof r == "string" ? r : "")), e;
        };
        Function.prototype.toString = Uc(function() {
          return Mc(this) && Wc(this).source || $c(this);
        }, "toString");
      });
      var ei2 = xe2((Z0, Zs2) => {
        var Jc = ot2(), zc = kt2(), Xc = An2(), Kc2 = dr2();
        Zs2.exports = function(e, r, t8, s) {
          s || (s = {});
          var a = s.enumerable, n = s.name !== void 0 ? s.name : r;
          if (Jc(t8) && Xc(t8, n, s), s.global)
            a ? e[r] = t8 : Kc2(r, t8);
          else {
            try {
              s.unsafe ? e[r] && (a = true) : delete e[r];
            } catch {
            }
            a ? e[r] = t8 : zc.f(e, r, { value: t8, enumerable: false, configurable: !s.nonConfigurable, writable: !s.nonWritable });
          }
          return e;
        };
      });
      var ri2 = xe2((ey, ti2) => {
        var Yc = Math.ceil, Qc = Math.floor;
        ti2.exports = Math.trunc || function(r) {
          var t8 = +r;
          return (t8 > 0 ? Qc : Yc)(t8);
        };
      });
      var Sr2 = xe2((ty, ni2) => {
        var Zc = ri2();
        ni2.exports = function(e) {
          var r = +e;
          return r !== r || r === 0 ? 0 : Zc(r);
        };
      });
      var si2 = xe2((ry, ui2) => {
        var ep = Sr2(), tp = Math.max, rp = Math.min;
        ui2.exports = function(e, r) {
          var t8 = ep(e);
          return t8 < 0 ? tp(t8 + r, 0) : rp(t8, r);
        };
      });
      var ai2 = xe2((ny, ii2) => {
        var np = Sr2(), up = Math.min;
        ii2.exports = function(e) {
          return e > 0 ? up(np(e), 9007199254740991) : 0;
        };
      });
      var Lt2 = xe2((uy, oi2) => {
        var sp = ai2();
        oi2.exports = function(e) {
          return sp(e.length);
        };
      });
      var pi2 = xe2((sy, ci2) => {
        var ip = pr2(), ap = si2(), op = Lt2(), li2 = function(e) {
          return function(r, t8, s) {
            var a = ip(r), n = op(a), u = ap(s, n), i;
            if (e && t8 != t8) {
              for (; n > u; )
                if (i = a[u++], i != i)
                  return true;
            } else
              for (; n > u; u++)
                if ((e || u in a) && a[u] === t8)
                  return e || u || 0;
            return !e && -1;
          };
        };
        ci2.exports = { includes: li2(true), indexOf: li2(false) };
      });
      var mi2 = xe2((iy, Di2) => {
        var lp = mt2(), Sn2 = Ct2(), cp = pr2(), pp = pi2().indexOf, fp = hn2(), fi2 = lp([].push);
        Di2.exports = function(e, r) {
          var t8 = cp(e), s = 0, a = [], n;
          for (n in t8)
            !Sn2(fp, n) && Sn2(t8, n) && fi2(a, n);
          for (; r.length > s; )
            Sn2(t8, n = r[s++]) && (~pp(a, n) || fi2(a, n));
          return a;
        };
      });
      var gi2 = xe2((ay, di2) => {
        di2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      });
      var hi2 = xe2((yi2) => {
        var Dp = mi2(), mp = gi2(), dp = mp.concat("length", "prototype");
        yi2.f = Object.getOwnPropertyNames || function(r) {
          return Dp(r, dp);
        };
      });
      var Ci2 = xe2((vi2) => {
        vi2.f = Object.getOwnPropertySymbols;
      });
      var Fi2 = xe2((cy, Ei2) => {
        var gp = Wt2(), yp = mt2(), hp = hi2(), vp = Ci2(), Cp = Tt2(), Ep = yp([].concat);
        Ei2.exports = gp("Reflect", "ownKeys") || function(r) {
          var t8 = hp.f(Cp(r)), s = vp.f;
          return s ? Ep(t8, s(r)) : t8;
        };
      });
      var xi2 = xe2((py, Si2) => {
        var Ai2 = Ct2(), Fp = Fi2(), Ap = on2(), Sp = kt2();
        Si2.exports = function(e, r, t8) {
          for (var s = Fp(r), a = Sp.f, n = Ap.f, u = 0; u < s.length; u++) {
            var i = s[u];
            !Ai2(e, i) && !(t8 && Ai2(t8, i)) && a(e, i, n(r, i));
          }
        };
      });
      var Ti2 = xe2((fy, bi2) => {
        var xp = Dt2(), bp = ot2(), Tp = /#|\.prototype\./, Ut2 = function(e, r) {
          var t8 = Np[Bp(e)];
          return t8 == _p ? true : t8 == wp ? false : bp(r) ? xp(r) : !!r;
        }, Bp = Ut2.normalize = function(e) {
          return String(e).replace(Tp, ".").toLowerCase();
        }, Np = Ut2.data = {}, wp = Ut2.NATIVE = "N", _p = Ut2.POLYFILL = "P";
        bi2.exports = Ut2;
      });
      var Jt2 = xe2((Dy, Bi2) => {
        var xn2 = pt2(), Pp = on2().f, Ip = Dn2(), kp = ei2(), Lp = dr2(), Op = xi2(), jp = Ti2();
        Bi2.exports = function(e, r) {
          var t8 = e.target, s = e.global, a = e.stat, n, u, i, l, p, y;
          if (s ? u = xn2 : a ? u = xn2[t8] || Lp(t8, {}) : u = (xn2[t8] || {}).prototype, u)
            for (i in r) {
              if (p = r[i], e.dontCallGetSet ? (y = Pp(u, i), l = y && y.value) : l = u[i], n = jp(s ? i : t8 + (a ? "." : "#") + i, e.forced), !n && l !== void 0) {
                if (typeof p == typeof l)
                  continue;
                Op(p, l);
              }
              (e.sham || l && l.sham) && Ip(p, "sham", true), kp(u, i, p, e);
            }
        };
      });
      var bn2 = xe2((my, Ni2) => {
        var qp = Vt2();
        Ni2.exports = Array.isArray || function(r) {
          return qp(r) == "Array";
        };
      });
      var _i2 = xe2((dy, wi2) => {
        var Mp = TypeError, Rp = 9007199254740991;
        wi2.exports = function(e) {
          if (e > Rp)
            throw Mp("Maximum allowed index exceeded");
          return e;
        };
      });
      var Ii2 = xe2((gy, Pi2) => {
        var $p = Vt2(), Vp = mt2();
        Pi2.exports = function(e) {
          if ($p(e) === "Function")
            return Vp(e);
        };
      });
      var Tn2 = xe2((yy, Li2) => {
        var ki2 = Ii2(), Wp = Ht2(), Hp = ar2(), Gp = ki2(ki2.bind);
        Li2.exports = function(e, r) {
          return Wp(e), r === void 0 ? e : Hp ? Gp(e, r) : function() {
            return e.apply(r, arguments);
          };
        };
      });
      var Bn2 = xe2((hy, ji2) => {
        var Up = bn2(), Jp = Lt2(), zp = _i2(), Xp = Tn2(), Oi2 = function(e, r, t8, s, a, n, u, i) {
          for (var l = a, p = 0, y = u ? Xp(u, i) : false, h2, g; p < s; )
            p in t8 && (h2 = y ? y(t8[p], p, r) : t8[p], n > 0 && Up(h2) ? (g = Jp(h2), l = Oi2(e, r, h2, g, l, n - 1) - 1) : (zp(l + 1), e[l] = h2), l++), p++;
          return l;
        };
        ji2.exports = Oi2;
      });
      var Ri2 = xe2((vy, Mi2) => {
        var Kp = bt2(), Yp = Kp("toStringTag"), qi2 = {};
        qi2[Yp] = "z";
        Mi2.exports = String(qi2) === "[object z]";
      });
      var Nn2 = xe2((Cy, $i2) => {
        var Qp = Ri2(), Zp = ot2(), xr = Vt2(), ef = bt2(), tf = ef("toStringTag"), rf = Object, nf = xr(function() {
          return arguments;
        }()) == "Arguments", uf = function(e, r) {
          try {
            return e[r];
          } catch {
          }
        };
        $i2.exports = Qp ? xr : function(e) {
          var r, t8, s;
          return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t8 = uf(r = rf(e), tf)) == "string" ? t8 : nf ? xr(r) : (s = xr(r)) == "Object" && Zp(r.callee) ? "Arguments" : s;
        };
      });
      var Ji2 = xe2((Ey, Ui2) => {
        var sf = mt2(), af = Dt2(), Vi2 = ot2(), of = Nn2(), lf = Wt2(), cf = yn2(), Wi2 = function() {
        }, pf = [], Hi2 = lf("Reflect", "construct"), wn2 = /^\s*(?:class|function)\b/, ff = sf(wn2.exec), Df = !wn2.exec(Wi2), zt2 = function(r) {
          if (!Vi2(r))
            return false;
          try {
            return Hi2(Wi2, pf, r), true;
          } catch {
            return false;
          }
        }, Gi2 = function(r) {
          if (!Vi2(r))
            return false;
          switch (of(r)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          try {
            return Df || !!ff(wn2, cf(r));
          } catch {
            return true;
          }
        };
        Gi2.sham = true;
        Ui2.exports = !Hi2 || af(function() {
          var e;
          return zt2(zt2.call) || !zt2(Object) || !zt2(function() {
            e = true;
          }) || e;
        }) ? Gi2 : zt2;
      });
      var Yi2 = xe2((Fy, Ki2) => {
        var zi2 = bn2(), mf = Ji2(), df = St2(), gf = bt2(), yf = gf("species"), Xi2 = Array;
        Ki2.exports = function(e) {
          var r;
          return zi2(e) && (r = e.constructor, mf(r) && (r === Xi2 || zi2(r.prototype)) ? r = void 0 : df(r) && (r = r[yf], r === null && (r = void 0))), r === void 0 ? Xi2 : r;
        };
      });
      var _n2 = xe2((Ay, Qi2) => {
        var hf = Yi2();
        Qi2.exports = function(e, r) {
          return new (hf(e))(r === 0 ? 0 : r);
        };
      });
      var Zi2 = xe2(() => {
        var vf = Jt2(), Cf = Bn2(), Ef = Ht2(), Ff = yr2(), Af = Lt2(), Sf = _n2();
        vf({ target: "Array", proto: true }, { flatMap: function(r) {
          var t8 = Ff(this), s = Af(t8), a;
          return Ef(r), a = Sf(t8, 0), a.length = Cf(a, t8, t8, s, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), a;
        } });
      });
      var Pn = xe2((by, ea2) => {
        ea2.exports = {};
      });
      var ra2 = xe2((Ty, ta2) => {
        var xf = bt2(), bf = Pn(), Tf = xf("iterator"), Bf = Array.prototype;
        ta2.exports = function(e) {
          return e !== void 0 && (bf.Array === e || Bf[Tf] === e);
        };
      });
      var In2 = xe2((By, ua2) => {
        var Nf = Nn2(), na2 = mr2(), wf = cr2(), _f = Pn(), Pf = bt2(), If = Pf("iterator");
        ua2.exports = function(e) {
          if (!wf(e))
            return na2(e, If) || na2(e, "@@iterator") || _f[Nf(e)];
        };
      });
      var ia2 = xe2((Ny, sa2) => {
        var kf = At2(), Lf = Ht2(), Of = Tt2(), jf = Dr2(), qf = In2(), Mf = TypeError;
        sa2.exports = function(e, r) {
          var t8 = arguments.length < 2 ? qf(e) : r;
          if (Lf(t8))
            return Of(kf(t8, e));
          throw Mf(jf(e) + " is not iterable");
        };
      });
      var la2 = xe2((wy, oa2) => {
        var Rf = At2(), aa2 = Tt2(), $f = mr2();
        oa2.exports = function(e, r, t8) {
          var s, a;
          aa2(e);
          try {
            if (s = $f(e, "return"), !s) {
              if (r === "throw")
                throw t8;
              return t8;
            }
            s = Rf(s, e);
          } catch (n) {
            a = true, s = n;
          }
          if (r === "throw")
            throw t8;
          if (a)
            throw s;
          return aa2(s), t8;
        };
      });
      var ma2 = xe2((_y, Da2) => {
        var Vf = Tn2(), Wf = At2(), Hf = Tt2(), Gf = Dr2(), Uf = ra2(), Jf = Lt2(), ca2 = Xr2(), zf = ia2(), Xf = In2(), pa2 = la2(), Kf = TypeError, br2 = function(e, r) {
          this.stopped = e, this.result = r;
        }, fa2 = br2.prototype;
        Da2.exports = function(e, r, t8) {
          var s = t8 && t8.that, a = !!(t8 && t8.AS_ENTRIES), n = !!(t8 && t8.IS_RECORD), u = !!(t8 && t8.IS_ITERATOR), i = !!(t8 && t8.INTERRUPTED), l = Vf(r, s), p, y, h2, g, c, f2, F2, _ = function(E2) {
            return p && pa2(p, "normal", E2), new br2(true, E2);
          }, w = function(E2) {
            return a ? (Hf(E2), i ? l(E2[0], E2[1], _) : l(E2[0], E2[1])) : i ? l(E2, _) : l(E2);
          };
          if (n)
            p = e.iterator;
          else if (u)
            p = e;
          else {
            if (y = Xf(e), !y)
              throw Kf(Gf(e) + " is not iterable");
            if (Uf(y)) {
              for (h2 = 0, g = Jf(e); g > h2; h2++)
                if (c = w(e[h2]), c && ca2(fa2, c))
                  return c;
              return new br2(false);
            }
            p = zf(e, y);
          }
          for (f2 = n ? e.next : p.next; !(F2 = Wf(f2, p)).done; ) {
            try {
              c = w(F2.value);
            } catch (E2) {
              pa2(p, "throw", E2);
            }
            if (typeof c == "object" && c && ca2(fa2, c))
              return c;
          }
          return new br2(false);
        };
      });
      var ga2 = xe2((Py, da2) => {
        var Yf = hr2(), Qf = kt2(), Zf = lr2();
        da2.exports = function(e, r, t8) {
          var s = Yf(r);
          s in e ? Qf.f(e, s, Zf(0, t8)) : e[s] = t8;
        };
      });
      var ya2 = xe2(() => {
        var eD = Jt2(), tD = ma2(), rD = ga2();
        eD({ target: "Object", stat: true }, { fromEntries: function(r) {
          var t8 = {};
          return tD(r, function(s, a) {
            rD(t8, s, a);
          }, { AS_ENTRIES: true }), t8;
        } });
      });
      var Ca2 = xe2((Ly, va2) => {
        var ha2 = An2(), nD = kt2();
        va2.exports = function(e, r, t8) {
          return t8.get && ha2(t8.get, r, { getter: true }), t8.set && ha2(t8.set, r, { setter: true }), nD.f(e, r, t8);
        };
      });
      var Fa2 = xe2((Oy, Ea2) => {
        var uD = Tt2();
        Ea2.exports = function() {
          var e = uD(this), r = "";
          return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
        };
      });
      var xa2 = xe2(() => {
        var sD = pt2(), iD = yt2(), aD = Ca2(), oD = Fa2(), lD = Dt2(), Aa2 = sD.RegExp, Sa2 = Aa2.prototype, cD = iD && lD(function() {
          var e = true;
          try {
            Aa2(".", "d");
          } catch {
            e = false;
          }
          var r = {}, t8 = "", s = e ? "dgimsy" : "gimsy", a = function(l, p) {
            Object.defineProperty(r, l, { get: function() {
              return t8 += p, true;
            } });
          }, n = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
          e && (n.hasIndices = "d");
          for (var u in n)
            a(u, n[u]);
          var i = Object.getOwnPropertyDescriptor(Sa2, "flags").get.call(r);
          return i !== s || t8 !== s;
        });
        cD && aD(Sa2, "flags", { configurable: true, get: oD });
      });
      var ba2 = xe2(() => {
        var pD = Jt2(), kn2 = pt2();
        pD({ global: true, forced: kn2.globalThis !== kn2 }, { globalThis: kn2 });
      });
      var Ta2 = xe2(() => {
        ba2();
      });
      var Ba2 = xe2(() => {
        var fD = Jt2(), DD = Bn2(), mD = yr2(), dD = Lt2(), gD = Sr2(), yD = _n2();
        fD({ target: "Array", proto: true }, { flat: function() {
          var r = arguments.length ? arguments[0] : void 0, t8 = mD(this), s = dD(t8), a = yD(t8, 0);
          return a.length = DD(a, t8, t8, s, 0, r === void 0 ? 1 : gD(r)), a;
        } });
      });
      var e0 = xe2((Uy, jo) => {
        var hD = ["cliName", "cliCategory", "cliDescription"], vD = ["_"], CD = ["languageId"];
        function Hn2(e, r) {
          if (e == null)
            return {};
          var t8 = ED(e, r), s, a;
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            for (a = 0; a < n.length; a++)
              s = n[a], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (t8[s] = e[s]);
          }
          return t8;
        }
        function ED(e, r) {
          if (e == null)
            return {};
          var t8 = {}, s = Object.keys(e), a, n;
          for (n = 0; n < s.length; n++)
            a = s[n], !(r.indexOf(a) >= 0) && (t8[a] = e[a]);
          return t8;
        }
        Zi2();
        ya2();
        xa2();
        Ta2();
        Ba2();
        var FD = Object.create, _r2 = Object.defineProperty, AD = Object.getOwnPropertyDescriptor, Gn2 = Object.getOwnPropertyNames, SD = Object.getPrototypeOf, xD = Object.prototype.hasOwnProperty, ht2 = (e, r) => function() {
          return e && (r = (0, e[Gn2(e)[0]])(e = 0)), r;
        }, te2 = (e, r) => function() {
          return r || (0, e[Gn2(e)[0]])((r = { exports: {} }).exports, r), r.exports;
        }, Kt2 = (e, r) => {
          for (var t8 in r)
            _r2(e, t8, { get: r[t8], enumerable: true });
        }, Pa2 = (e, r, t8, s) => {
          if (r && typeof r == "object" || typeof r == "function")
            for (let a of Gn2(r))
              !xD.call(e, a) && a !== t8 && _r2(e, a, { get: () => r[a], enumerable: !(s = AD(r, a)) || s.enumerable });
          return e;
        }, bD = (e, r, t8) => (t8 = e != null ? FD(SD(e)) : {}, Pa2(r || !e || !e.__esModule ? _r2(t8, "default", { value: e, enumerable: true }) : t8, e)), ft2 = (e) => Pa2(_r2({}, "__esModule", { value: true }), e), wt2, ne2 = ht2({ "<define:process>"() {
          wt2 = { env: {}, argv: [] };
        } }), Ia = te2({ "package.json"(e, r) {
          r.exports = { version: "2.8.8" };
        } }), TD = te2({ "node_modules/diff/lib/diff/base.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true }), e.default = r;
          function r() {
          }
          r.prototype = { diff: function(n, u) {
            var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = i.callback;
            typeof i == "function" && (l = i, i = {}), this.options = i;
            var p = this;
            function y(N2) {
              return l ? (setTimeout(function() {
                l(void 0, N2);
              }, 0), true) : N2;
            }
            n = this.castInput(n), u = this.castInput(u), n = this.removeEmpty(this.tokenize(n)), u = this.removeEmpty(this.tokenize(u));
            var h2 = u.length, g = n.length, c = 1, f2 = h2 + g, F2 = [{ newPos: -1, components: [] }], _ = this.extractCommon(F2[0], u, n, 0);
            if (F2[0].newPos + 1 >= h2 && _ + 1 >= g)
              return y([{ value: this.join(u), count: u.length }]);
            function w() {
              for (var N2 = -1 * c; N2 <= c; N2 += 2) {
                var x2 = void 0, I2 = F2[N2 - 1], P = F2[N2 + 1], $ = (P ? P.newPos : 0) - N2;
                I2 && (F2[N2 - 1] = void 0);
                var D = I2 && I2.newPos + 1 < h2, T2 = P && 0 <= $ && $ < g;
                if (!D && !T2) {
                  F2[N2] = void 0;
                  continue;
                }
                if (!D || T2 && I2.newPos < P.newPos ? (x2 = s(P), p.pushComponent(x2.components, void 0, true)) : (x2 = I2, x2.newPos++, p.pushComponent(x2.components, true, void 0)), $ = p.extractCommon(x2, u, n, N2), x2.newPos + 1 >= h2 && $ + 1 >= g)
                  return y(t8(p, x2.components, u, n, p.useLongestToken));
                F2[N2] = x2;
              }
              c++;
            }
            if (l)
              (function N2() {
                setTimeout(function() {
                  if (c > f2)
                    return l();
                  w() || N2();
                }, 0);
              })();
            else
              for (; c <= f2; ) {
                var E2 = w();
                if (E2)
                  return E2;
              }
          }, pushComponent: function(n, u, i) {
            var l = n[n.length - 1];
            l && l.added === u && l.removed === i ? n[n.length - 1] = { count: l.count + 1, added: u, removed: i } : n.push({ count: 1, added: u, removed: i });
          }, extractCommon: function(n, u, i, l) {
            for (var p = u.length, y = i.length, h2 = n.newPos, g = h2 - l, c = 0; h2 + 1 < p && g + 1 < y && this.equals(u[h2 + 1], i[g + 1]); )
              h2++, g++, c++;
            return c && n.components.push({ count: c }), n.newPos = h2, g;
          }, equals: function(n, u) {
            return this.options.comparator ? this.options.comparator(n, u) : n === u || this.options.ignoreCase && n.toLowerCase() === u.toLowerCase();
          }, removeEmpty: function(n) {
            for (var u = [], i = 0; i < n.length; i++)
              n[i] && u.push(n[i]);
            return u;
          }, castInput: function(n) {
            return n;
          }, tokenize: function(n) {
            return n.split("");
          }, join: function(n) {
            return n.join("");
          } };
          function t8(a, n, u, i, l) {
            for (var p = 0, y = n.length, h2 = 0, g = 0; p < y; p++) {
              var c = n[p];
              if (c.removed) {
                if (c.value = a.join(i.slice(g, g + c.count)), g += c.count, p && n[p - 1].added) {
                  var F2 = n[p - 1];
                  n[p - 1] = n[p], n[p] = F2;
                }
              } else {
                if (!c.added && l) {
                  var f2 = u.slice(h2, h2 + c.count);
                  f2 = f2.map(function(w, E2) {
                    var N2 = i[g + E2];
                    return N2.length > w.length ? N2 : w;
                  }), c.value = a.join(f2);
                } else
                  c.value = a.join(u.slice(h2, h2 + c.count));
                h2 += c.count, c.added || (g += c.count);
              }
            }
            var _ = n[y - 1];
            return y > 1 && typeof _.value == "string" && (_.added || _.removed) && a.equals("", _.value) && (n[y - 2].value += _.value, n.pop()), n;
          }
          function s(a) {
            return { newPos: a.newPos, components: a.components.slice(0) };
          }
        } }), BD = te2({ "node_modules/diff/lib/diff/array.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true }), e.diffArrays = a, e.arrayDiff = void 0;
          var r = t8(TD());
          function t8(n) {
            return n && n.__esModule ? n : { default: n };
          }
          var s = new r.default();
          e.arrayDiff = s, s.tokenize = function(n) {
            return n.slice();
          }, s.join = s.removeEmpty = function(n) {
            return n;
          };
          function a(n, u, i) {
            return s.diff(n, u, i);
          }
        } }), Un2 = te2({ "src/document/doc-builders.js"(e, r) {
          ne2();
          function t8(C) {
            return { type: "concat", parts: C };
          }
          function s(C) {
            return { type: "indent", contents: C };
          }
          function a(C, o) {
            return { type: "align", contents: o, n: C };
          }
          function n(C) {
            let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return { type: "group", id: o.id, contents: C, break: Boolean(o.shouldBreak), expandedStates: o.expandedStates };
          }
          function u(C) {
            return a(Number.NEGATIVE_INFINITY, C);
          }
          function i(C) {
            return a({ type: "root" }, C);
          }
          function l(C) {
            return a(-1, C);
          }
          function p(C, o) {
            return n(C[0], Object.assign(Object.assign({}, o), {}, { expandedStates: C }));
          }
          function y(C) {
            return { type: "fill", parts: C };
          }
          function h2(C, o) {
            let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return { type: "if-break", breakContents: C, flatContents: o, groupId: d.groupId };
          }
          function g(C, o) {
            return { type: "indent-if-break", contents: C, groupId: o.groupId, negate: o.negate };
          }
          function c(C) {
            return { type: "line-suffix", contents: C };
          }
          var f2 = { type: "line-suffix-boundary" }, F2 = { type: "break-parent" }, _ = { type: "trim" }, w = { type: "line", hard: true }, E2 = { type: "line", hard: true, literal: true }, N2 = { type: "line" }, x2 = { type: "line", soft: true }, I2 = t8([w, F2]), P = t8([E2, F2]), $ = { type: "cursor", placeholder: Symbol("cursor") };
          function D(C, o) {
            let d = [];
            for (let v2 = 0; v2 < o.length; v2++)
              v2 !== 0 && d.push(C), d.push(o[v2]);
            return t8(d);
          }
          function T2(C, o, d) {
            let v2 = C;
            if (o > 0) {
              for (let S2 = 0; S2 < Math.floor(o / d); ++S2)
                v2 = s(v2);
              v2 = a(o % d, v2), v2 = a(Number.NEGATIVE_INFINITY, v2);
            }
            return v2;
          }
          function m(C, o) {
            return { type: "label", label: C, contents: o };
          }
          r.exports = { concat: t8, join: D, line: N2, softline: x2, hardline: I2, literalline: P, group: n, conditionalGroup: p, fill: y, lineSuffix: c, lineSuffixBoundary: f2, cursor: $, breakParent: F2, ifBreak: h2, trim: _, indent: s, indentIfBreak: g, align: a, addAlignmentToDoc: T2, markAsRoot: i, dedentToRoot: u, dedent: l, hardlineWithoutBreakParent: w, literallineWithoutBreakParent: E2, label: m };
        } }), Jn2 = te2({ "src/common/end-of-line.js"(e, r) {
          ne2();
          function t8(u) {
            let i = u.indexOf("\r");
            return i >= 0 ? u.charAt(i + 1) === `
` ? "crlf" : "cr" : "lf";
          }
          function s(u) {
            switch (u) {
              case "cr":
                return "\r";
              case "crlf":
                return `\r
`;
              default:
                return `
`;
            }
          }
          function a(u, i) {
            let l;
            switch (i) {
              case `
`:
                l = /\n/g;
                break;
              case "\r":
                l = /\r/g;
                break;
              case `\r
`:
                l = /\r\n/g;
                break;
              default:
                throw new Error(`Unexpected "eol" ${JSON.stringify(i)}.`);
            }
            let p = u.match(l);
            return p ? p.length : 0;
          }
          function n(u) {
            return u.replace(/\r\n?/g, `
`);
          }
          r.exports = { guessEndOfLine: t8, convertEndOfLineToChars: s, countEndOfLineChars: a, normalizeEndOfLine: n };
        } }), lt = te2({ "src/utils/get-last.js"(e, r) {
          ne2();
          var t8 = (s) => s[s.length - 1];
          r.exports = t8;
        } });
        function ND() {
          let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
          return new RegExp(r, e ? void 0 : "g");
        }
        var wD = ht2({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
          ne2();
        } });
        function _D(e) {
          if (typeof e != "string")
            throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
          return e.replace(ND(), "");
        }
        var PD = ht2({ "node_modules/strip-ansi/index.js"() {
          ne2(), wD();
        } });
        function ID(e) {
          return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
        }
        var kD = ht2({ "node_modules/is-fullwidth-code-point/index.js"() {
          ne2();
        } }), LD = te2({ "node_modules/emoji-regex/index.js"(e, r) {
          ne2(), r.exports = function() {
            return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
          };
        } }), ka2 = {};
        Kt2(ka2, { default: () => OD });
        function OD(e) {
          if (typeof e != "string" || e.length === 0 || (e = _D(e), e.length === 0))
            return 0;
          e = e.replace((0, La2.default)(), "  ");
          let r = 0;
          for (let t8 = 0; t8 < e.length; t8++) {
            let s = e.codePointAt(t8);
            s <= 31 || s >= 127 && s <= 159 || s >= 768 && s <= 879 || (s > 65535 && t8++, r += ID(s) ? 2 : 1);
          }
          return r;
        }
        var La2, jD = ht2({ "node_modules/string-width/index.js"() {
          ne2(), PD(), kD(), La2 = bD(LD());
        } }), Oa = te2({ "src/utils/get-string-width.js"(e, r) {
          ne2();
          var t8 = (jD(), ft2(ka2)).default, s = /[^\x20-\x7F]/;
          function a(n) {
            return n ? s.test(n) ? t8(n) : n.length : 0;
          }
          r.exports = a;
        } }), Yt = te2({ "src/document/doc-utils.js"(e, r) {
          ne2();
          var t8 = lt(), { literalline: s, join: a } = Un2(), n = (o) => Array.isArray(o) || o && o.type === "concat", u = (o) => {
            if (Array.isArray(o))
              return o;
            if (o.type !== "concat" && o.type !== "fill")
              throw new Error("Expect doc type to be `concat` or `fill`.");
            return o.parts;
          }, i = {};
          function l(o, d, v2, S2) {
            let b2 = [o];
            for (; b2.length > 0; ) {
              let B = b2.pop();
              if (B === i) {
                v2(b2.pop());
                continue;
              }
              if (v2 && b2.push(B, i), !d || d(B) !== false)
                if (n(B) || B.type === "fill") {
                  let k2 = u(B);
                  for (let M = k2.length, R2 = M - 1; R2 >= 0; --R2)
                    b2.push(k2[R2]);
                } else if (B.type === "if-break")
                  B.flatContents && b2.push(B.flatContents), B.breakContents && b2.push(B.breakContents);
                else if (B.type === "group" && B.expandedStates)
                  if (S2)
                    for (let k2 = B.expandedStates.length, M = k2 - 1; M >= 0; --M)
                      b2.push(B.expandedStates[M]);
                  else
                    b2.push(B.contents);
                else
                  B.contents && b2.push(B.contents);
            }
          }
          function p(o, d) {
            let v2 = /* @__PURE__ */ new Map();
            return S2(o);
            function S2(B) {
              if (v2.has(B))
                return v2.get(B);
              let k2 = b2(B);
              return v2.set(B, k2), k2;
            }
            function b2(B) {
              if (Array.isArray(B))
                return d(B.map(S2));
              if (B.type === "concat" || B.type === "fill") {
                let k2 = B.parts.map(S2);
                return d(Object.assign(Object.assign({}, B), {}, { parts: k2 }));
              }
              if (B.type === "if-break") {
                let k2 = B.breakContents && S2(B.breakContents), M = B.flatContents && S2(B.flatContents);
                return d(Object.assign(Object.assign({}, B), {}, { breakContents: k2, flatContents: M }));
              }
              if (B.type === "group" && B.expandedStates) {
                let k2 = B.expandedStates.map(S2), M = k2[0];
                return d(Object.assign(Object.assign({}, B), {}, { contents: M, expandedStates: k2 }));
              }
              if (B.contents) {
                let k2 = S2(B.contents);
                return d(Object.assign(Object.assign({}, B), {}, { contents: k2 }));
              }
              return d(B);
            }
          }
          function y(o, d, v2) {
            let S2 = v2, b2 = false;
            function B(k2) {
              let M = d(k2);
              if (M !== void 0 && (b2 = true, S2 = M), b2)
                return false;
            }
            return l(o, B), S2;
          }
          function h2(o) {
            if (o.type === "group" && o.break || o.type === "line" && o.hard || o.type === "break-parent")
              return true;
          }
          function g(o) {
            return y(o, h2, false);
          }
          function c(o) {
            if (o.length > 0) {
              let d = t8(o);
              !d.expandedStates && !d.break && (d.break = "propagated");
            }
            return null;
          }
          function f2(o) {
            let d = /* @__PURE__ */ new Set(), v2 = [];
            function S2(B) {
              if (B.type === "break-parent" && c(v2), B.type === "group") {
                if (v2.push(B), d.has(B))
                  return false;
                d.add(B);
              }
            }
            function b2(B) {
              B.type === "group" && v2.pop().break && c(v2);
            }
            l(o, S2, b2, true);
          }
          function F2(o) {
            return o.type === "line" && !o.hard ? o.soft ? "" : " " : o.type === "if-break" ? o.flatContents || "" : o;
          }
          function _(o) {
            return p(o, F2);
          }
          var w = (o, d) => o && o.type === "line" && o.hard && d && d.type === "break-parent";
          function E2(o) {
            if (!o)
              return o;
            if (n(o) || o.type === "fill") {
              let d = u(o);
              for (; d.length > 1 && w(...d.slice(-2)); )
                d.length -= 2;
              if (d.length > 0) {
                let v2 = E2(t8(d));
                d[d.length - 1] = v2;
              }
              return Array.isArray(o) ? d : Object.assign(Object.assign({}, o), {}, { parts: d });
            }
            switch (o.type) {
              case "align":
              case "indent":
              case "indent-if-break":
              case "group":
              case "line-suffix":
              case "label": {
                let d = E2(o.contents);
                return Object.assign(Object.assign({}, o), {}, { contents: d });
              }
              case "if-break": {
                let d = E2(o.breakContents), v2 = E2(o.flatContents);
                return Object.assign(Object.assign({}, o), {}, { breakContents: d, flatContents: v2 });
              }
            }
            return o;
          }
          function N2(o) {
            return E2(I2(o));
          }
          function x2(o) {
            switch (o.type) {
              case "fill":
                if (o.parts.every((v2) => v2 === ""))
                  return "";
                break;
              case "group":
                if (!o.contents && !o.id && !o.break && !o.expandedStates)
                  return "";
                if (o.contents.type === "group" && o.contents.id === o.id && o.contents.break === o.break && o.contents.expandedStates === o.expandedStates)
                  return o.contents;
                break;
              case "align":
              case "indent":
              case "indent-if-break":
              case "line-suffix":
                if (!o.contents)
                  return "";
                break;
              case "if-break":
                if (!o.flatContents && !o.breakContents)
                  return "";
                break;
            }
            if (!n(o))
              return o;
            let d = [];
            for (let v2 of u(o)) {
              if (!v2)
                continue;
              let [S2, ...b2] = n(v2) ? u(v2) : [v2];
              typeof S2 == "string" && typeof t8(d) == "string" ? d[d.length - 1] += S2 : d.push(S2), d.push(...b2);
            }
            return d.length === 0 ? "" : d.length === 1 ? d[0] : Array.isArray(o) ? d : Object.assign(Object.assign({}, o), {}, { parts: d });
          }
          function I2(o) {
            return p(o, (d) => x2(d));
          }
          function P(o) {
            let d = [], v2 = o.filter(Boolean);
            for (; v2.length > 0; ) {
              let S2 = v2.shift();
              if (S2) {
                if (n(S2)) {
                  v2.unshift(...u(S2));
                  continue;
                }
                if (d.length > 0 && typeof t8(d) == "string" && typeof S2 == "string") {
                  d[d.length - 1] += S2;
                  continue;
                }
                d.push(S2);
              }
            }
            return d;
          }
          function $(o) {
            return p(o, (d) => Array.isArray(d) ? P(d) : d.parts ? Object.assign(Object.assign({}, d), {}, { parts: P(d.parts) }) : d);
          }
          function D(o) {
            return p(o, (d) => typeof d == "string" && d.includes(`
`) ? T2(d) : d);
          }
          function T2(o) {
            let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
            return a(d, o.split(`
`)).parts;
          }
          function m(o) {
            if (o.type === "line")
              return true;
          }
          function C(o) {
            return y(o, m, false);
          }
          r.exports = { isConcat: n, getDocParts: u, willBreak: g, traverseDoc: l, findInDoc: y, mapDoc: p, propagateBreaks: f2, removeLines: _, stripTrailingHardline: N2, normalizeParts: P, normalizeDoc: $, cleanDoc: I2, replaceTextEndOfLine: T2, replaceEndOfLine: D, canBreak: C };
        } }), qD = te2({ "src/document/doc-printer.js"(e, r) {
          ne2();
          var { convertEndOfLineToChars: t8 } = Jn2(), s = lt(), a = Oa(), { fill: n, cursor: u, indent: i } = Un2(), { isConcat: l, getDocParts: p } = Yt(), y, h2 = 1, g = 2;
          function c() {
            return { value: "", length: 0, queue: [] };
          }
          function f2(x2, I2) {
            return _(x2, { type: "indent" }, I2);
          }
          function F2(x2, I2, P) {
            return I2 === Number.NEGATIVE_INFINITY ? x2.root || c() : I2 < 0 ? _(x2, { type: "dedent" }, P) : I2 ? I2.type === "root" ? Object.assign(Object.assign({}, x2), {}, { root: x2 }) : _(x2, { type: typeof I2 == "string" ? "stringAlign" : "numberAlign", n: I2 }, P) : x2;
          }
          function _(x2, I2, P) {
            let $ = I2.type === "dedent" ? x2.queue.slice(0, -1) : [...x2.queue, I2], D = "", T2 = 0, m = 0, C = 0;
            for (let k2 of $)
              switch (k2.type) {
                case "indent":
                  v2(), P.useTabs ? o(1) : d(P.tabWidth);
                  break;
                case "stringAlign":
                  v2(), D += k2.n, T2 += k2.n.length;
                  break;
                case "numberAlign":
                  m += 1, C += k2.n;
                  break;
                default:
                  throw new Error(`Unexpected type '${k2.type}'`);
              }
            return b2(), Object.assign(Object.assign({}, x2), {}, { value: D, length: T2, queue: $ });
            function o(k2) {
              D += "	".repeat(k2), T2 += P.tabWidth * k2;
            }
            function d(k2) {
              D += " ".repeat(k2), T2 += k2;
            }
            function v2() {
              P.useTabs ? S2() : b2();
            }
            function S2() {
              m > 0 && o(m), B();
            }
            function b2() {
              C > 0 && d(C), B();
            }
            function B() {
              m = 0, C = 0;
            }
          }
          function w(x2) {
            if (x2.length === 0)
              return 0;
            let I2 = 0;
            for (; x2.length > 0 && typeof s(x2) == "string" && /^[\t ]*$/.test(s(x2)); )
              I2 += x2.pop().length;
            if (x2.length > 0 && typeof s(x2) == "string") {
              let P = s(x2).replace(/[\t ]*$/, "");
              I2 += s(x2).length - P.length, x2[x2.length - 1] = P;
            }
            return I2;
          }
          function E2(x2, I2, P, $, D) {
            let T2 = I2.length, m = [x2], C = [];
            for (; P >= 0; ) {
              if (m.length === 0) {
                if (T2 === 0)
                  return true;
                m.push(I2[--T2]);
                continue;
              }
              let { mode: o, doc: d } = m.pop();
              if (typeof d == "string")
                C.push(d), P -= a(d);
              else if (l(d) || d.type === "fill") {
                let v2 = p(d);
                for (let S2 = v2.length - 1; S2 >= 0; S2--)
                  m.push({ mode: o, doc: v2[S2] });
              } else
                switch (d.type) {
                  case "indent":
                  case "align":
                  case "indent-if-break":
                  case "label":
                    m.push({ mode: o, doc: d.contents });
                    break;
                  case "trim":
                    P += w(C);
                    break;
                  case "group": {
                    if (D && d.break)
                      return false;
                    let v2 = d.break ? h2 : o, S2 = d.expandedStates && v2 === h2 ? s(d.expandedStates) : d.contents;
                    m.push({ mode: v2, doc: S2 });
                    break;
                  }
                  case "if-break": {
                    let S2 = (d.groupId ? y[d.groupId] || g : o) === h2 ? d.breakContents : d.flatContents;
                    S2 && m.push({ mode: o, doc: S2 });
                    break;
                  }
                  case "line":
                    if (o === h2 || d.hard)
                      return true;
                    d.soft || (C.push(" "), P--);
                    break;
                  case "line-suffix":
                    $ = true;
                    break;
                  case "line-suffix-boundary":
                    if ($)
                      return false;
                    break;
                }
            }
            return false;
          }
          function N2(x2, I2) {
            y = {};
            let P = I2.printWidth, $ = t8(I2.endOfLine), D = 0, T2 = [{ ind: c(), mode: h2, doc: x2 }], m = [], C = false, o = [];
            for (; T2.length > 0; ) {
              let { ind: v2, mode: S2, doc: b2 } = T2.pop();
              if (typeof b2 == "string") {
                let B = $ !== `
` ? b2.replace(/\n/g, $) : b2;
                m.push(B), D += a(B);
              } else if (l(b2)) {
                let B = p(b2);
                for (let k2 = B.length - 1; k2 >= 0; k2--)
                  T2.push({ ind: v2, mode: S2, doc: B[k2] });
              } else
                switch (b2.type) {
                  case "cursor":
                    m.push(u.placeholder);
                    break;
                  case "indent":
                    T2.push({ ind: f2(v2, I2), mode: S2, doc: b2.contents });
                    break;
                  case "align":
                    T2.push({ ind: F2(v2, b2.n, I2), mode: S2, doc: b2.contents });
                    break;
                  case "trim":
                    D -= w(m);
                    break;
                  case "group":
                    switch (S2) {
                      case g:
                        if (!C) {
                          T2.push({ ind: v2, mode: b2.break ? h2 : g, doc: b2.contents });
                          break;
                        }
                      case h2: {
                        C = false;
                        let B = { ind: v2, mode: g, doc: b2.contents }, k2 = P - D, M = o.length > 0;
                        if (!b2.break && E2(B, T2, k2, M))
                          T2.push(B);
                        else if (b2.expandedStates) {
                          let R2 = s(b2.expandedStates);
                          if (b2.break) {
                            T2.push({ ind: v2, mode: h2, doc: R2 });
                            break;
                          } else
                            for (let q = 1; q < b2.expandedStates.length + 1; q++)
                              if (q >= b2.expandedStates.length) {
                                T2.push({ ind: v2, mode: h2, doc: R2 });
                                break;
                              } else {
                                let J2 = b2.expandedStates[q], L2 = { ind: v2, mode: g, doc: J2 };
                                if (E2(L2, T2, k2, M)) {
                                  T2.push(L2);
                                  break;
                                }
                              }
                        } else
                          T2.push({ ind: v2, mode: h2, doc: b2.contents });
                        break;
                      }
                    }
                    b2.id && (y[b2.id] = s(T2).mode);
                    break;
                  case "fill": {
                    let B = P - D, { parts: k2 } = b2;
                    if (k2.length === 0)
                      break;
                    let [M, R2] = k2, q = { ind: v2, mode: g, doc: M }, J2 = { ind: v2, mode: h2, doc: M }, L2 = E2(q, [], B, o.length > 0, true);
                    if (k2.length === 1) {
                      L2 ? T2.push(q) : T2.push(J2);
                      break;
                    }
                    let Q2 = { ind: v2, mode: g, doc: R2 }, V2 = { ind: v2, mode: h2, doc: R2 };
                    if (k2.length === 2) {
                      L2 ? T2.push(Q2, q) : T2.push(V2, J2);
                      break;
                    }
                    k2.splice(0, 2);
                    let j2 = { ind: v2, mode: S2, doc: n(k2) }, Y2 = k2[0];
                    E2({ ind: v2, mode: g, doc: [M, R2, Y2] }, [], B, o.length > 0, true) ? T2.push(j2, Q2, q) : L2 ? T2.push(j2, V2, q) : T2.push(j2, V2, J2);
                    break;
                  }
                  case "if-break":
                  case "indent-if-break": {
                    let B = b2.groupId ? y[b2.groupId] : S2;
                    if (B === h2) {
                      let k2 = b2.type === "if-break" ? b2.breakContents : b2.negate ? b2.contents : i(b2.contents);
                      k2 && T2.push({ ind: v2, mode: S2, doc: k2 });
                    }
                    if (B === g) {
                      let k2 = b2.type === "if-break" ? b2.flatContents : b2.negate ? i(b2.contents) : b2.contents;
                      k2 && T2.push({ ind: v2, mode: S2, doc: k2 });
                    }
                    break;
                  }
                  case "line-suffix":
                    o.push({ ind: v2, mode: S2, doc: b2.contents });
                    break;
                  case "line-suffix-boundary":
                    o.length > 0 && T2.push({ ind: v2, mode: S2, doc: { type: "line", hard: true } });
                    break;
                  case "line":
                    switch (S2) {
                      case g:
                        if (b2.hard)
                          C = true;
                        else {
                          b2.soft || (m.push(" "), D += 1);
                          break;
                        }
                      case h2:
                        if (o.length > 0) {
                          T2.push({ ind: v2, mode: S2, doc: b2 }, ...o.reverse()), o.length = 0;
                          break;
                        }
                        b2.literal ? v2.root ? (m.push($, v2.root.value), D = v2.root.length) : (m.push($), D = 0) : (D -= w(m), m.push($ + v2.value), D = v2.length);
                        break;
                    }
                    break;
                  case "label":
                    T2.push({ ind: v2, mode: S2, doc: b2.contents });
                    break;
                }
              T2.length === 0 && o.length > 0 && (T2.push(...o.reverse()), o.length = 0);
            }
            let d = m.indexOf(u.placeholder);
            if (d !== -1) {
              let v2 = m.indexOf(u.placeholder, d + 1), S2 = m.slice(0, d).join(""), b2 = m.slice(d + 1, v2).join(""), B = m.slice(v2 + 1).join("");
              return { formatted: S2 + b2 + B, cursorNodeStart: S2.length, cursorNodeText: b2 };
            }
            return { formatted: m.join("") };
          }
          r.exports = { printDocToString: N2 };
        } }), MD = te2({ "src/document/doc-debug.js"(e, r) {
          ne2();
          var { isConcat: t8, getDocParts: s } = Yt();
          function a(u) {
            if (!u)
              return "";
            if (t8(u)) {
              let i = [];
              for (let l of s(u))
                if (t8(l))
                  i.push(...a(l).parts);
                else {
                  let p = a(l);
                  p !== "" && i.push(p);
                }
              return { type: "concat", parts: i };
            }
            return u.type === "if-break" ? Object.assign(Object.assign({}, u), {}, { breakContents: a(u.breakContents), flatContents: a(u.flatContents) }) : u.type === "group" ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents), expandedStates: u.expandedStates && u.expandedStates.map(a) }) : u.type === "fill" ? { type: "fill", parts: u.parts.map(a) } : u.contents ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents) }) : u;
          }
          function n(u) {
            let i = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ new Set();
            return p(a(u));
            function p(h2, g, c) {
              if (typeof h2 == "string")
                return JSON.stringify(h2);
              if (t8(h2)) {
                let f2 = s(h2).map(p).filter(Boolean);
                return f2.length === 1 ? f2[0] : `[${f2.join(", ")}]`;
              }
              if (h2.type === "line") {
                let f2 = Array.isArray(c) && c[g + 1] && c[g + 1].type === "break-parent";
                return h2.literal ? f2 ? "literalline" : "literallineWithoutBreakParent" : h2.hard ? f2 ? "hardline" : "hardlineWithoutBreakParent" : h2.soft ? "softline" : "line";
              }
              if (h2.type === "break-parent")
                return Array.isArray(c) && c[g - 1] && c[g - 1].type === "line" && c[g - 1].hard ? void 0 : "breakParent";
              if (h2.type === "trim")
                return "trim";
              if (h2.type === "indent")
                return "indent(" + p(h2.contents) + ")";
              if (h2.type === "align")
                return h2.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + p(h2.contents) + ")" : h2.n < 0 ? "dedent(" + p(h2.contents) + ")" : h2.n.type === "root" ? "markAsRoot(" + p(h2.contents) + ")" : "align(" + JSON.stringify(h2.n) + ", " + p(h2.contents) + ")";
              if (h2.type === "if-break")
                return "ifBreak(" + p(h2.breakContents) + (h2.flatContents ? ", " + p(h2.flatContents) : "") + (h2.groupId ? (h2.flatContents ? "" : ', ""') + `, { groupId: ${y(h2.groupId)} }` : "") + ")";
              if (h2.type === "indent-if-break") {
                let f2 = [];
                h2.negate && f2.push("negate: true"), h2.groupId && f2.push(`groupId: ${y(h2.groupId)}`);
                let F2 = f2.length > 0 ? `, { ${f2.join(", ")} }` : "";
                return `indentIfBreak(${p(h2.contents)}${F2})`;
              }
              if (h2.type === "group") {
                let f2 = [];
                h2.break && h2.break !== "propagated" && f2.push("shouldBreak: true"), h2.id && f2.push(`id: ${y(h2.id)}`);
                let F2 = f2.length > 0 ? `, { ${f2.join(", ")} }` : "";
                return h2.expandedStates ? `conditionalGroup([${h2.expandedStates.map((_) => p(_)).join(",")}]${F2})` : `group(${p(h2.contents)}${F2})`;
              }
              if (h2.type === "fill")
                return `fill([${h2.parts.map((f2) => p(f2)).join(", ")}])`;
              if (h2.type === "line-suffix")
                return "lineSuffix(" + p(h2.contents) + ")";
              if (h2.type === "line-suffix-boundary")
                return "lineSuffixBoundary";
              if (h2.type === "label")
                return `label(${JSON.stringify(h2.label)}, ${p(h2.contents)})`;
              throw new Error("Unknown doc type " + h2.type);
            }
            function y(h2) {
              if (typeof h2 != "symbol")
                return JSON.stringify(String(h2));
              if (h2 in i)
                return i[h2];
              let g = String(h2).slice(7, -1) || "symbol";
              for (let c = 0; ; c++) {
                let f2 = g + (c > 0 ? ` #${c}` : "");
                if (!l.has(f2))
                  return l.add(f2), i[h2] = `Symbol.for(${JSON.stringify(f2)})`;
              }
            }
          }
          r.exports = { printDocToDebug: n };
        } }), qe2 = te2({ "src/document/index.js"(e, r) {
          ne2(), r.exports = { builders: Un2(), printer: qD(), utils: Yt(), debug: MD() };
        } }), ja = {};
        Kt2(ja, { default: () => RD });
        function RD(e) {
          if (typeof e != "string")
            throw new TypeError("Expected a string");
          return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }
        var $D = ht2({ "node_modules/escape-string-regexp/index.js"() {
          ne2();
        } }), qa = te2({ "node_modules/semver/internal/debug.js"(e, r) {
          ne2();
          var t8 = typeof wt2 == "object" && wt2.env && wt2.env.NODE_DEBUG && /\bsemver\b/i.test(wt2.env.NODE_DEBUG) ? function() {
            for (var s = arguments.length, a = new Array(s), n = 0; n < s; n++)
              a[n] = arguments[n];
            return console.error("SEMVER", ...a);
          } : () => {
          };
          r.exports = t8;
        } }), Ma = te2({ "node_modules/semver/internal/constants.js"(e, r) {
          ne2();
          var t8 = "2.0.0", s = 256, a = Number.MAX_SAFE_INTEGER || 9007199254740991, n = 16;
          r.exports = { SEMVER_SPEC_VERSION: t8, MAX_LENGTH: s, MAX_SAFE_INTEGER: a, MAX_SAFE_COMPONENT_LENGTH: n };
        } }), VD = te2({ "node_modules/semver/internal/re.js"(e, r) {
          ne2();
          var { MAX_SAFE_COMPONENT_LENGTH: t8 } = Ma(), s = qa();
          e = r.exports = {};
          var a = e.re = [], n = e.src = [], u = e.t = {}, i = 0, l = (p, y, h2) => {
            let g = i++;
            s(p, g, y), u[p] = g, n[g] = y, a[g] = new RegExp(y, h2 ? "g" : void 0);
          };
          l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", `(${n[u.NUMERICIDENTIFIER]})\\.(${n[u.NUMERICIDENTIFIER]})\\.(${n[u.NUMERICIDENTIFIER]})`), l("MAINVERSIONLOOSE", `(${n[u.NUMERICIDENTIFIERLOOSE]})\\.(${n[u.NUMERICIDENTIFIERLOOSE]})\\.(${n[u.NUMERICIDENTIFIERLOOSE]})`), l("PRERELEASEIDENTIFIER", `(?:${n[u.NUMERICIDENTIFIER]}|${n[u.NONNUMERICIDENTIFIER]})`), l("PRERELEASEIDENTIFIERLOOSE", `(?:${n[u.NUMERICIDENTIFIERLOOSE]}|${n[u.NONNUMERICIDENTIFIER]})`), l("PRERELEASE", `(?:-(${n[u.PRERELEASEIDENTIFIER]}(?:\\.${n[u.PRERELEASEIDENTIFIER]})*))`), l("PRERELEASELOOSE", `(?:-?(${n[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[u.PRERELEASEIDENTIFIERLOOSE]})*))`), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", `(?:\\+(${n[u.BUILDIDENTIFIER]}(?:\\.${n[u.BUILDIDENTIFIER]})*))`), l("FULLPLAIN", `v?${n[u.MAINVERSION]}${n[u.PRERELEASE]}?${n[u.BUILD]}?`), l("FULL", `^${n[u.FULLPLAIN]}$`), l("LOOSEPLAIN", `[v=\\s]*${n[u.MAINVERSIONLOOSE]}${n[u.PRERELEASELOOSE]}?${n[u.BUILD]}?`), l("LOOSE", `^${n[u.LOOSEPLAIN]}$`), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", `${n[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), l("XRANGEIDENTIFIER", `${n[u.NUMERICIDENTIFIER]}|x|X|\\*`), l("XRANGEPLAIN", `[v=\\s]*(${n[u.XRANGEIDENTIFIER]})(?:\\.(${n[u.XRANGEIDENTIFIER]})(?:\\.(${n[u.XRANGEIDENTIFIER]})(?:${n[u.PRERELEASE]})?${n[u.BUILD]}?)?)?`), l("XRANGEPLAINLOOSE", `[v=\\s]*(${n[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[u.XRANGEIDENTIFIERLOOSE]})(?:${n[u.PRERELEASELOOSE]})?${n[u.BUILD]}?)?)?`), l("XRANGE", `^${n[u.GTLT]}\\s*${n[u.XRANGEPLAIN]}$`), l("XRANGELOOSE", `^${n[u.GTLT]}\\s*${n[u.XRANGEPLAINLOOSE]}$`), l("COERCE", `(^|[^\\d])(\\d{1,${t8}})(?:\\.(\\d{1,${t8}}))?(?:\\.(\\d{1,${t8}}))?(?:$|[^\\d])`), l("COERCERTL", n[u.COERCE], true), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", `(\\s*)${n[u.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", l("TILDE", `^${n[u.LONETILDE]}${n[u.XRANGEPLAIN]}$`), l("TILDELOOSE", `^${n[u.LONETILDE]}${n[u.XRANGEPLAINLOOSE]}$`), l("LONECARET", "(?:\\^)"), l("CARETTRIM", `(\\s*)${n[u.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", l("CARET", `^${n[u.LONECARET]}${n[u.XRANGEPLAIN]}$`), l("CARETLOOSE", `^${n[u.LONECARET]}${n[u.XRANGEPLAINLOOSE]}$`), l("COMPARATORLOOSE", `^${n[u.GTLT]}\\s*(${n[u.LOOSEPLAIN]})$|^$`), l("COMPARATOR", `^${n[u.GTLT]}\\s*(${n[u.FULLPLAIN]})$|^$`), l("COMPARATORTRIM", `(\\s*)${n[u.GTLT]}\\s*(${n[u.LOOSEPLAIN]}|${n[u.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", `^\\s*(${n[u.XRANGEPLAIN]})\\s+-\\s+(${n[u.XRANGEPLAIN]})\\s*$`), l("HYPHENRANGELOOSE", `^\\s*(${n[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[u.XRANGEPLAINLOOSE]})\\s*$`), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
        } }), WD = te2({ "node_modules/semver/internal/parse-options.js"(e, r) {
          ne2();
          var t8 = ["includePrerelease", "loose", "rtl"], s = (a) => a ? typeof a != "object" ? { loose: true } : t8.filter((n) => a[n]).reduce((n, u) => (n[u] = true, n), {}) : {};
          r.exports = s;
        } }), HD = te2({ "node_modules/semver/internal/identifiers.js"(e, r) {
          ne2();
          var t8 = /^[0-9]+$/, s = (n, u) => {
            let i = t8.test(n), l = t8.test(u);
            return i && l && (n = +n, u = +u), n === u ? 0 : i && !l ? -1 : l && !i ? 1 : n < u ? -1 : 1;
          }, a = (n, u) => s(u, n);
          r.exports = { compareIdentifiers: s, rcompareIdentifiers: a };
        } }), GD = te2({ "node_modules/semver/classes/semver.js"(e, r) {
          ne2();
          var t8 = qa(), { MAX_LENGTH: s, MAX_SAFE_INTEGER: a } = Ma(), { re: n, t: u } = VD(), i = WD(), { compareIdentifiers: l } = HD(), p = class {
            constructor(y, h2) {
              if (h2 = i(h2), y instanceof p) {
                if (y.loose === !!h2.loose && y.includePrerelease === !!h2.includePrerelease)
                  return y;
                y = y.version;
              } else if (typeof y != "string")
                throw new TypeError(`Invalid Version: ${y}`);
              if (y.length > s)
                throw new TypeError(`version is longer than ${s} characters`);
              t8("SemVer", y, h2), this.options = h2, this.loose = !!h2.loose, this.includePrerelease = !!h2.includePrerelease;
              let g = y.trim().match(h2.loose ? n[u.LOOSE] : n[u.FULL]);
              if (!g)
                throw new TypeError(`Invalid Version: ${y}`);
              if (this.raw = y, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > a || this.major < 0)
                throw new TypeError("Invalid major version");
              if (this.minor > a || this.minor < 0)
                throw new TypeError("Invalid minor version");
              if (this.patch > a || this.patch < 0)
                throw new TypeError("Invalid patch version");
              g[4] ? this.prerelease = g[4].split(".").map((c) => {
                if (/^[0-9]+$/.test(c)) {
                  let f2 = +c;
                  if (f2 >= 0 && f2 < a)
                    return f2;
                }
                return c;
              }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
            }
            format() {
              return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
            }
            toString() {
              return this.version;
            }
            compare(y) {
              if (t8("SemVer.compare", this.version, this.options, y), !(y instanceof p)) {
                if (typeof y == "string" && y === this.version)
                  return 0;
                y = new p(y, this.options);
              }
              return y.version === this.version ? 0 : this.compareMain(y) || this.comparePre(y);
            }
            compareMain(y) {
              return y instanceof p || (y = new p(y, this.options)), l(this.major, y.major) || l(this.minor, y.minor) || l(this.patch, y.patch);
            }
            comparePre(y) {
              if (y instanceof p || (y = new p(y, this.options)), this.prerelease.length && !y.prerelease.length)
                return -1;
              if (!this.prerelease.length && y.prerelease.length)
                return 1;
              if (!this.prerelease.length && !y.prerelease.length)
                return 0;
              let h2 = 0;
              do {
                let g = this.prerelease[h2], c = y.prerelease[h2];
                if (t8("prerelease compare", h2, g, c), g === void 0 && c === void 0)
                  return 0;
                if (c === void 0)
                  return 1;
                if (g === void 0)
                  return -1;
                if (g === c)
                  continue;
                return l(g, c);
              } while (++h2);
            }
            compareBuild(y) {
              y instanceof p || (y = new p(y, this.options));
              let h2 = 0;
              do {
                let g = this.build[h2], c = y.build[h2];
                if (t8("prerelease compare", h2, g, c), g === void 0 && c === void 0)
                  return 0;
                if (c === void 0)
                  return 1;
                if (g === void 0)
                  return -1;
                if (g === c)
                  continue;
                return l(g, c);
              } while (++h2);
            }
            inc(y, h2) {
              switch (y) {
                case "premajor":
                  this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h2);
                  break;
                case "preminor":
                  this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h2);
                  break;
                case "prepatch":
                  this.prerelease.length = 0, this.inc("patch", h2), this.inc("pre", h2);
                  break;
                case "prerelease":
                  this.prerelease.length === 0 && this.inc("patch", h2), this.inc("pre", h2);
                  break;
                case "major":
                  (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                  break;
                case "minor":
                  (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                  break;
                case "patch":
                  this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                  break;
                case "pre":
                  if (this.prerelease.length === 0)
                    this.prerelease = [0];
                  else {
                    let g = this.prerelease.length;
                    for (; --g >= 0; )
                      typeof this.prerelease[g] == "number" && (this.prerelease[g]++, g = -2);
                    g === -1 && this.prerelease.push(0);
                  }
                  h2 && (l(this.prerelease[0], h2) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [h2, 0]) : this.prerelease = [h2, 0]);
                  break;
                default:
                  throw new Error(`invalid increment argument: ${y}`);
              }
              return this.format(), this.raw = this.version, this;
            }
          };
          r.exports = p;
        } }), zn2 = te2({ "node_modules/semver/functions/compare.js"(e, r) {
          ne2();
          var t8 = GD(), s = (a, n, u) => new t8(a, u).compare(new t8(n, u));
          r.exports = s;
        } }), UD = te2({ "node_modules/semver/functions/lt.js"(e, r) {
          ne2();
          var t8 = zn2(), s = (a, n, u) => t8(a, n, u) < 0;
          r.exports = s;
        } }), JD = te2({ "node_modules/semver/functions/gte.js"(e, r) {
          ne2();
          var t8 = zn2(), s = (a, n, u) => t8(a, n, u) >= 0;
          r.exports = s;
        } }), zD = te2({ "src/utils/arrayify.js"(e, r) {
          ne2(), r.exports = (t8, s) => Object.entries(t8).map((a) => {
            let [n, u] = a;
            return Object.assign({ [s]: n }, u);
          });
        } }), XD = te2({ "node_modules/outdent/lib/index.js"(e, r) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
          function t8() {
            for (var E2 = [], N2 = 0; N2 < arguments.length; N2++)
              E2[N2] = arguments[N2];
          }
          function s() {
            return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : a();
          }
          function a() {
            return { add: t8, delete: t8, get: t8, set: t8, has: function(E2) {
              return false;
            } };
          }
          var n = Object.prototype.hasOwnProperty, u = function(E2, N2) {
            return n.call(E2, N2);
          };
          function i(E2, N2) {
            for (var x2 in N2)
              u(N2, x2) && (E2[x2] = N2[x2]);
            return E2;
          }
          var l = /^[ \t]*(?:\r\n|\r|\n)/, p = /(?:\r\n|\r|\n)[ \t]*$/, y = /^(?:[\r\n]|$)/, h2 = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, g = /^[ \t]*[\r\n][ \t\r\n]*$/;
          function c(E2, N2, x2) {
            var I2 = 0, P = E2[0].match(h2);
            P && (I2 = P[1].length);
            var $ = "(\\r\\n|\\r|\\n).{0," + I2 + "}", D = new RegExp($, "g");
            N2 && (E2 = E2.slice(1));
            var T2 = x2.newline, m = x2.trimLeadingNewline, C = x2.trimTrailingNewline, o = typeof T2 == "string", d = E2.length, v2 = E2.map(function(S2, b2) {
              return S2 = S2.replace(D, "$1"), b2 === 0 && m && (S2 = S2.replace(l, "")), b2 === d - 1 && C && (S2 = S2.replace(p, "")), o && (S2 = S2.replace(/\r\n|\n|\r/g, function(B) {
                return T2;
              })), S2;
            });
            return v2;
          }
          function f2(E2, N2) {
            for (var x2 = "", I2 = 0, P = E2.length; I2 < P; I2++)
              x2 += E2[I2], I2 < P - 1 && (x2 += N2[I2]);
            return x2;
          }
          function F2(E2) {
            return u(E2, "raw") && u(E2, "length");
          }
          function _(E2) {
            var N2 = s(), x2 = s();
            function I2($) {
              for (var D = [], T2 = 1; T2 < arguments.length; T2++)
                D[T2 - 1] = arguments[T2];
              if (F2($)) {
                var m = $, C = (D[0] === I2 || D[0] === w) && g.test(m[0]) && y.test(m[1]), o = C ? x2 : N2, d = o.get(m);
                if (d || (d = c(m, C, E2), o.set(m, d)), D.length === 0)
                  return d[0];
                var v2 = f2(d, C ? D.slice(1) : D);
                return v2;
              } else
                return _(i(i({}, E2), $ || {}));
            }
            var P = i(I2, { string: function($) {
              return c([$], false, E2)[0];
            } });
            return P;
          }
          var w = _({ trimLeadingNewline: true, trimTrailingNewline: true });
          if (e.outdent = w, e.default = w, typeof r < "u")
            try {
              r.exports = w, Object.defineProperty(w, "__esModule", { value: true }), w.default = w, w.outdent = w;
            } catch {
            }
        } }), KD = te2({ "src/main/core-options.js"(e, r) {
          ne2();
          var { outdent: t8 } = XD(), s = "Config", a = "Editor", n = "Format", u = "Other", i = "Output", l = "Global", p = "Special", y = { cursorOffset: { since: "1.4.0", category: p, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: t8`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: a }, endOfLine: { since: "1.15.0", category: l, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: t8`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: p, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: u, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: p, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: u }, parser: { since: "0.0.10", category: l, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (h2) => typeof h2 == "string" || typeof h2 == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: l, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (h2) => typeof h2 == "string" || typeof h2 == "object", cliName: "plugin", cliCategory: s }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: l, description: t8`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (h2) => typeof h2 == "string" || typeof h2 == "object", cliName: "plugin-search-dir", cliCategory: s }, printWidth: { since: "0.0.0", category: l, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: p, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t8`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: a }, rangeStart: { since: "1.4.0", category: p, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t8`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: a }, requirePragma: { since: "1.7.0", category: p, type: "boolean", default: false, description: t8`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: u }, tabWidth: { type: "int", category: l, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: l, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: l, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
          r.exports = { CATEGORY_CONFIG: s, CATEGORY_EDITOR: a, CATEGORY_FORMAT: n, CATEGORY_OTHER: u, CATEGORY_OUTPUT: i, CATEGORY_GLOBAL: l, CATEGORY_SPECIAL: p, options: y };
        } }), Xn2 = te2({ "src/main/support.js"(e, r) {
          ne2();
          var t8 = { compare: zn2(), lt: UD(), gte: JD() }, s = zD(), a = Ia().version, n = KD().options;
          function u() {
            let { plugins: l = [], showUnreleased: p = false, showDeprecated: y = false, showInternal: h2 = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = a.split("-", 1)[0], c = l.flatMap((E2) => E2.languages || []).filter(F2), f2 = s(Object.assign({}, ...l.map((E2) => {
              let { options: N2 } = E2;
              return N2;
            }), n), "name").filter((E2) => F2(E2) && _(E2)).sort((E2, N2) => E2.name === N2.name ? 0 : E2.name < N2.name ? -1 : 1).map(w).map((E2) => {
              E2 = Object.assign({}, E2), Array.isArray(E2.default) && (E2.default = E2.default.length === 1 ? E2.default[0].value : E2.default.filter(F2).sort((x2, I2) => t8.compare(I2.since, x2.since))[0].value), Array.isArray(E2.choices) && (E2.choices = E2.choices.filter((x2) => F2(x2) && _(x2)), E2.name === "parser" && i(E2, c, l));
              let N2 = Object.fromEntries(l.filter((x2) => x2.defaultOptions && x2.defaultOptions[E2.name] !== void 0).map((x2) => [x2.name, x2.defaultOptions[E2.name]]));
              return Object.assign(Object.assign({}, E2), {}, { pluginDefaults: N2 });
            });
            return { languages: c, options: f2 };
            function F2(E2) {
              return p || !("since" in E2) || E2.since && t8.gte(g, E2.since);
            }
            function _(E2) {
              return y || !("deprecated" in E2) || E2.deprecated && t8.lt(g, E2.deprecated);
            }
            function w(E2) {
              if (h2)
                return E2;
              return Hn2(E2, hD);
            }
          }
          function i(l, p, y) {
            let h2 = new Set(l.choices.map((g) => g.value));
            for (let g of p)
              if (g.parsers) {
                for (let c of g.parsers)
                  if (!h2.has(c)) {
                    h2.add(c);
                    let f2 = y.find((_) => _.parsers && _.parsers[c]), F2 = g.name;
                    f2 && f2.name && (F2 += ` (plugin: ${f2.name})`), l.choices.push({ value: c, description: F2 });
                  }
              }
          }
          r.exports = { getSupportInfo: u };
        } }), Kn2 = te2({ "src/utils/is-non-empty-array.js"(e, r) {
          ne2();
          function t8(s) {
            return Array.isArray(s) && s.length > 0;
          }
          r.exports = t8;
        } }), Pr2 = te2({ "src/utils/text/skip.js"(e, r) {
          ne2();
          function t8(i) {
            return (l, p, y) => {
              let h2 = y && y.backwards;
              if (p === false)
                return false;
              let { length: g } = l, c = p;
              for (; c >= 0 && c < g; ) {
                let f2 = l.charAt(c);
                if (i instanceof RegExp) {
                  if (!i.test(f2))
                    return c;
                } else if (!i.includes(f2))
                  return c;
                h2 ? c-- : c++;
              }
              return c === -1 || c === g ? c : false;
            };
          }
          var s = t8(/\s/), a = t8(" 	"), n = t8(",; 	"), u = t8(/[^\n\r]/);
          r.exports = { skipWhitespace: s, skipSpaces: a, skipToLineEnd: n, skipEverythingButNewLine: u };
        } }), Ra2 = te2({ "src/utils/text/skip-inline-comment.js"(e, r) {
          ne2();
          function t8(s, a) {
            if (a === false)
              return false;
            if (s.charAt(a) === "/" && s.charAt(a + 1) === "*") {
              for (let n = a + 2; n < s.length; ++n)
                if (s.charAt(n) === "*" && s.charAt(n + 1) === "/")
                  return n + 2;
            }
            return a;
          }
          r.exports = t8;
        } }), $a2 = te2({ "src/utils/text/skip-trailing-comment.js"(e, r) {
          ne2();
          var { skipEverythingButNewLine: t8 } = Pr2();
          function s(a, n) {
            return n === false ? false : a.charAt(n) === "/" && a.charAt(n + 1) === "/" ? t8(a, n) : n;
          }
          r.exports = s;
        } }), Va = te2({ "src/utils/text/skip-newline.js"(e, r) {
          ne2();
          function t8(s, a, n) {
            let u = n && n.backwards;
            if (a === false)
              return false;
            let i = s.charAt(a);
            if (u) {
              if (s.charAt(a - 1) === "\r" && i === `
`)
                return a - 2;
              if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
                return a - 1;
            } else {
              if (i === "\r" && s.charAt(a + 1) === `
`)
                return a + 2;
              if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
                return a + 1;
            }
            return a;
          }
          r.exports = t8;
        } }), YD = te2({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
          ne2();
          var t8 = Ra2(), s = Va(), a = $a2(), { skipSpaces: n } = Pr2();
          function u(i, l) {
            let p = null, y = l;
            for (; y !== p; )
              p = y, y = n(i, y), y = t8(i, y), y = a(i, y), y = s(i, y);
            return y;
          }
          r.exports = u;
        } }), Ue2 = te2({ "src/common/util.js"(e, r) {
          ne2();
          var { default: t8 } = ($D(), ft2(ja)), s = lt(), { getSupportInfo: a } = Xn2(), n = Kn2(), u = Oa(), { skipWhitespace: i, skipSpaces: l, skipToLineEnd: p, skipEverythingButNewLine: y } = Pr2(), h2 = Ra2(), g = $a2(), c = Va(), f2 = YD(), F2 = (V2) => V2[V2.length - 2];
          function _(V2) {
            return (j2, Y2, ie2) => {
              let ee2 = ie2 && ie2.backwards;
              if (Y2 === false)
                return false;
              let { length: ce2 } = j2, W2 = Y2;
              for (; W2 >= 0 && W2 < ce2; ) {
                let K2 = j2.charAt(W2);
                if (V2 instanceof RegExp) {
                  if (!V2.test(K2))
                    return W2;
                } else if (!V2.includes(K2))
                  return W2;
                ee2 ? W2-- : W2++;
              }
              return W2 === -1 || W2 === ce2 ? W2 : false;
            };
          }
          function w(V2, j2) {
            let Y2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ie2 = l(V2, Y2.backwards ? j2 - 1 : j2, Y2), ee2 = c(V2, ie2, Y2);
            return ie2 !== ee2;
          }
          function E2(V2, j2, Y2) {
            for (let ie2 = j2; ie2 < Y2; ++ie2)
              if (V2.charAt(ie2) === `
`)
                return true;
            return false;
          }
          function N2(V2, j2, Y2) {
            let ie2 = Y2(j2) - 1;
            ie2 = l(V2, ie2, { backwards: true }), ie2 = c(V2, ie2, { backwards: true }), ie2 = l(V2, ie2, { backwards: true });
            let ee2 = c(V2, ie2, { backwards: true });
            return ie2 !== ee2;
          }
          function x2(V2, j2) {
            let Y2 = null, ie2 = j2;
            for (; ie2 !== Y2; )
              Y2 = ie2, ie2 = p(V2, ie2), ie2 = h2(V2, ie2), ie2 = l(V2, ie2);
            return ie2 = g(V2, ie2), ie2 = c(V2, ie2), ie2 !== false && w(V2, ie2);
          }
          function I2(V2, j2, Y2) {
            return x2(V2, Y2(j2));
          }
          function P(V2, j2, Y2) {
            return f2(V2, Y2(j2));
          }
          function $(V2, j2, Y2) {
            return V2.charAt(P(V2, j2, Y2));
          }
          function D(V2, j2) {
            let Y2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return l(V2, Y2.backwards ? j2 - 1 : j2, Y2) !== j2;
          }
          function T2(V2, j2) {
            let Y2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, ie2 = 0;
            for (let ee2 = Y2; ee2 < V2.length; ++ee2)
              V2[ee2] === "	" ? ie2 = ie2 + j2 - ie2 % j2 : ie2++;
            return ie2;
          }
          function m(V2, j2) {
            let Y2 = V2.lastIndexOf(`
`);
            return Y2 === -1 ? 0 : T2(V2.slice(Y2 + 1).match(/^[\t ]*/)[0], j2);
          }
          function C(V2, j2) {
            let Y2 = { quote: '"', regex: /"/g, escaped: "&quot;" }, ie2 = { quote: "'", regex: /'/g, escaped: "&apos;" }, ee2 = j2 === "'" ? ie2 : Y2, ce2 = ee2 === ie2 ? Y2 : ie2, W2 = ee2;
            if (V2.includes(ee2.quote) || V2.includes(ce2.quote)) {
              let K2 = (V2.match(ee2.regex) || []).length, de2 = (V2.match(ce2.regex) || []).length;
              W2 = K2 > de2 ? ce2 : ee2;
            }
            return W2;
          }
          function o(V2, j2) {
            let Y2 = V2.slice(1, -1), ie2 = j2.parser === "json" || j2.parser === "json5" && j2.quoteProps === "preserve" && !j2.singleQuote ? '"' : j2.__isInHtmlAttribute ? "'" : C(Y2, j2.singleQuote ? "'" : '"').quote;
            return d(Y2, ie2, !(j2.parser === "css" || j2.parser === "less" || j2.parser === "scss" || j2.__embeddedInHtml));
          }
          function d(V2, j2, Y2) {
            let ie2 = j2 === '"' ? "'" : '"', ee2 = /\\(.)|(["'])/gs, ce2 = V2.replace(ee2, (W2, K2, de2) => K2 === ie2 ? K2 : de2 === j2 ? "\\" + de2 : de2 || (Y2 && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(K2) ? K2 : "\\" + K2));
            return j2 + ce2 + j2;
          }
          function v2(V2) {
            return V2.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
          }
          function S2(V2, j2) {
            let Y2 = V2.match(new RegExp(`(${t8(j2)})+`, "g"));
            return Y2 === null ? 0 : Y2.reduce((ie2, ee2) => Math.max(ie2, ee2.length / j2.length), 0);
          }
          function b2(V2, j2) {
            let Y2 = V2.match(new RegExp(`(${t8(j2)})+`, "g"));
            if (Y2 === null)
              return 0;
            let ie2 = /* @__PURE__ */ new Map(), ee2 = 0;
            for (let ce2 of Y2) {
              let W2 = ce2.length / j2.length;
              ie2.set(W2, true), W2 > ee2 && (ee2 = W2);
            }
            for (let ce2 = 1; ce2 < ee2; ce2++)
              if (!ie2.get(ce2))
                return ce2;
            return ee2 + 1;
          }
          function B(V2, j2) {
            (V2.comments || (V2.comments = [])).push(j2), j2.printed = false, j2.nodeDescription = Q2(V2);
          }
          function k2(V2, j2) {
            j2.leading = true, j2.trailing = false, B(V2, j2);
          }
          function M(V2, j2, Y2) {
            j2.leading = false, j2.trailing = false, Y2 && (j2.marker = Y2), B(V2, j2);
          }
          function R2(V2, j2) {
            j2.leading = false, j2.trailing = true, B(V2, j2);
          }
          function q(V2, j2) {
            let { languages: Y2 } = a({ plugins: j2.plugins }), ie2 = Y2.find((ee2) => {
              let { name: ce2 } = ee2;
              return ce2.toLowerCase() === V2;
            }) || Y2.find((ee2) => {
              let { aliases: ce2 } = ee2;
              return Array.isArray(ce2) && ce2.includes(V2);
            }) || Y2.find((ee2) => {
              let { extensions: ce2 } = ee2;
              return Array.isArray(ce2) && ce2.includes(`.${V2}`);
            });
            return ie2 && ie2.parsers[0];
          }
          function J2(V2) {
            return V2 && V2.type === "front-matter";
          }
          function L2(V2) {
            let j2 = /* @__PURE__ */ new WeakMap();
            return function(Y2) {
              return j2.has(Y2) || j2.set(Y2, Symbol(V2)), j2.get(Y2);
            };
          }
          function Q2(V2) {
            let j2 = V2.type || V2.kind || "(unknown type)", Y2 = String(V2.name || V2.id && (typeof V2.id == "object" ? V2.id.name : V2.id) || V2.key && (typeof V2.key == "object" ? V2.key.name : V2.key) || V2.value && (typeof V2.value == "object" ? "" : String(V2.value)) || V2.operator || "");
            return Y2.length > 20 && (Y2 = Y2.slice(0, 19) + "\u2026"), j2 + (Y2 ? " " + Y2 : "");
          }
          r.exports = { inferParserByLanguage: q, getStringWidth: u, getMaxContinuousCount: S2, getMinNotPresentContinuousCount: b2, getPenultimate: F2, getLast: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: f2, getNextNonSpaceNonCommentCharacterIndex: P, getNextNonSpaceNonCommentCharacter: $, skip: _, skipWhitespace: i, skipSpaces: l, skipToLineEnd: p, skipEverythingButNewLine: y, skipInlineComment: h2, skipTrailingComment: g, skipNewline: c, isNextLineEmptyAfterIndex: x2, isNextLineEmpty: I2, isPreviousLineEmpty: N2, hasNewline: w, hasNewlineInRange: E2, hasSpaces: D, getAlignmentSize: T2, getIndentSize: m, getPreferredQuote: C, printString: o, printNumber: v2, makeString: d, addLeadingComment: k2, addDanglingComment: M, addTrailingComment: R2, isFrontMatterNode: J2, isNonEmptyArray: n, createGroupIdMapper: L2 };
        } }), Wa = {};
        Kt2(Wa, { basename: () => za, default: () => Ka, delimiter: () => Mn2, dirname: () => Ja, extname: () => Xa, isAbsolute: () => Qn2, join: () => Ga, normalize: () => Yn2, relative: () => Ua, resolve: () => wr2, sep: () => qn2 });
        function Ha(e, r) {
          for (var t8 = 0, s = e.length - 1; s >= 0; s--) {
            var a = e[s];
            a === "." ? e.splice(s, 1) : a === ".." ? (e.splice(s, 1), t8++) : t8 && (e.splice(s, 1), t8--);
          }
          if (r)
            for (; t8--; t8)
              e.unshift("..");
          return e;
        }
        function wr2() {
          for (var e = "", r = false, t8 = arguments.length - 1; t8 >= -1 && !r; t8--) {
            var s = t8 >= 0 ? arguments[t8] : "/";
            if (typeof s != "string")
              throw new TypeError("Arguments to path.resolve must be strings");
            if (!s)
              continue;
            e = s + "/" + e, r = s.charAt(0) === "/";
          }
          return e = Ha(Zn2(e.split("/"), function(a) {
            return !!a;
          }), !r).join("/"), (r ? "/" : "") + e || ".";
        }
        function Yn2(e) {
          var r = Qn2(e), t8 = Ya(e, -1) === "/";
          return e = Ha(Zn2(e.split("/"), function(s) {
            return !!s;
          }), !r).join("/"), !e && !r && (e = "."), e && t8 && (e += "/"), (r ? "/" : "") + e;
        }
        function Qn2(e) {
          return e.charAt(0) === "/";
        }
        function Ga() {
          var e = Array.prototype.slice.call(arguments, 0);
          return Yn2(Zn2(e, function(r, t8) {
            if (typeof r != "string")
              throw new TypeError("Arguments to path.join must be strings");
            return r;
          }).join("/"));
        }
        function Ua(e, r) {
          e = wr2(e).substr(1), r = wr2(r).substr(1);
          function t8(p) {
            for (var y = 0; y < p.length && p[y] === ""; y++)
              ;
            for (var h2 = p.length - 1; h2 >= 0 && p[h2] === ""; h2--)
              ;
            return y > h2 ? [] : p.slice(y, h2 - y + 1);
          }
          for (var s = t8(e.split("/")), a = t8(r.split("/")), n = Math.min(s.length, a.length), u = n, i = 0; i < n; i++)
            if (s[i] !== a[i]) {
              u = i;
              break;
            }
          for (var l = [], i = u; i < s.length; i++)
            l.push("..");
          return l = l.concat(a.slice(u)), l.join("/");
        }
        function Ja(e) {
          var r = Ir(e), t8 = r[0], s = r[1];
          return !t8 && !s ? "." : (s && (s = s.substr(0, s.length - 1)), t8 + s);
        }
        function za(e, r) {
          var t8 = Ir(e)[2];
          return r && t8.substr(-1 * r.length) === r && (t8 = t8.substr(0, t8.length - r.length)), t8;
        }
        function Xa(e) {
          return Ir(e)[3];
        }
        function Zn2(e, r) {
          if (e.filter)
            return e.filter(r);
          for (var t8 = [], s = 0; s < e.length; s++)
            r(e[s], s, e) && t8.push(e[s]);
          return t8;
        }
        var Na2, Ir, qn2, Mn2, Ka, Ya, QD = ht2({ "node-modules-polyfills:path"() {
          ne2(), Na2 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Ir = function(e) {
            return Na2.exec(e).slice(1);
          }, qn2 = "/", Mn2 = ":", Ka = { extname: Xa, basename: za, dirname: Ja, sep: qn2, delimiter: Mn2, relative: Ua, join: Ga, isAbsolute: Qn2, normalize: Yn2, resolve: wr2 }, Ya = "ab".substr(-1) === "b" ? function(e, r, t8) {
            return e.substr(r, t8);
          } : function(e, r, t8) {
            return r < 0 && (r = e.length + r), e.substr(r, t8);
          };
        } }), ZD = te2({ "node-modules-polyfills-commonjs:path"(e, r) {
          ne2();
          var t8 = (QD(), ft2(Wa));
          if (t8 && t8.default) {
            r.exports = t8.default;
            for (let s in t8)
              r.exports[s] = t8[s];
          } else
            t8 && (r.exports = t8);
        } }), Qt2 = te2({ "src/common/errors.js"(e, r) {
          ne2();
          var t8 = class extends Error {
          }, s = class extends Error {
          }, a = class extends Error {
          }, n = class extends Error {
          };
          r.exports = { ConfigError: t8, DebugError: s, UndefinedParserError: a, ArgExpansionBailout: n };
        } }), vt2 = {};
        Kt2(vt2, { __assign: () => Nr2, __asyncDelegator: () => fm, __asyncGenerator: () => pm, __asyncValues: () => Dm, __await: () => Xt2, __awaiter: () => sm, __classPrivateFieldGet: () => ym, __classPrivateFieldSet: () => hm, __createBinding: () => am, __decorate: () => rm, __exportStar: () => om, __extends: () => em, __generator: () => im, __importDefault: () => gm, __importStar: () => dm, __makeTemplateObject: () => mm, __metadata: () => um, __param: () => nm, __read: () => Qa, __rest: () => tm, __spread: () => lm, __spreadArrays: () => cm, __values: () => Rn2 });
        function em(e, r) {
          Br(e, r);
          function t8() {
            this.constructor = e;
          }
          e.prototype = r === null ? Object.create(r) : (t8.prototype = r.prototype, new t8());
        }
        function tm(e, r) {
          var t8 = {};
          for (var s in e)
            Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (t8[s] = e[s]);
          if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var a = 0, s = Object.getOwnPropertySymbols(e); a < s.length; a++)
              r.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (t8[s[a]] = e[s[a]]);
          return t8;
        }
        function rm(e, r, t8, s) {
          var a = arguments.length, n = a < 3 ? r : s === null ? s = Object.getOwnPropertyDescriptor(r, t8) : s, u;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            n = Reflect.decorate(e, r, t8, s);
          else
            for (var i = e.length - 1; i >= 0; i--)
              (u = e[i]) && (n = (a < 3 ? u(n) : a > 3 ? u(r, t8, n) : u(r, t8)) || n);
          return a > 3 && n && Object.defineProperty(r, t8, n), n;
        }
        function nm(e, r) {
          return function(t8, s) {
            r(t8, s, e);
          };
        }
        function um(e, r) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
            return Reflect.metadata(e, r);
        }
        function sm(e, r, t8, s) {
          function a(n) {
            return n instanceof t8 ? n : new t8(function(u) {
              u(n);
            });
          }
          return new (t8 || (t8 = Promise))(function(n, u) {
            function i(y) {
              try {
                p(s.next(y));
              } catch (h2) {
                u(h2);
              }
            }
            function l(y) {
              try {
                p(s.throw(y));
              } catch (h2) {
                u(h2);
              }
            }
            function p(y) {
              y.done ? n(y.value) : a(y.value).then(i, l);
            }
            p((s = s.apply(e, r || [])).next());
          });
        }
        function im(e, r) {
          var t8 = { label: 0, sent: function() {
            if (n[0] & 1)
              throw n[1];
            return n[1];
          }, trys: [], ops: [] }, s, a, n, u;
          return u = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
            return this;
          }), u;
          function i(p) {
            return function(y) {
              return l([p, y]);
            };
          }
          function l(p) {
            if (s)
              throw new TypeError("Generator is already executing.");
            for (; t8; )
              try {
                if (s = 1, a && (n = p[0] & 2 ? a.return : p[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, p[1])).done)
                  return n;
                switch (a = 0, n && (p = [p[0] & 2, n.value]), p[0]) {
                  case 0:
                  case 1:
                    n = p;
                    break;
                  case 4:
                    return t8.label++, { value: p[1], done: false };
                  case 5:
                    t8.label++, a = p[1], p = [0];
                    continue;
                  case 7:
                    p = t8.ops.pop(), t8.trys.pop();
                    continue;
                  default:
                    if (n = t8.trys, !(n = n.length > 0 && n[n.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                      t8 = 0;
                      continue;
                    }
                    if (p[0] === 3 && (!n || p[1] > n[0] && p[1] < n[3])) {
                      t8.label = p[1];
                      break;
                    }
                    if (p[0] === 6 && t8.label < n[1]) {
                      t8.label = n[1], n = p;
                      break;
                    }
                    if (n && t8.label < n[2]) {
                      t8.label = n[2], t8.ops.push(p);
                      break;
                    }
                    n[2] && t8.ops.pop(), t8.trys.pop();
                    continue;
                }
                p = r.call(e, t8);
              } catch (y) {
                p = [6, y], a = 0;
              } finally {
                s = n = 0;
              }
            if (p[0] & 5)
              throw p[1];
            return { value: p[0] ? p[1] : void 0, done: true };
          }
        }
        function am(e, r, t8, s) {
          s === void 0 && (s = t8), e[s] = r[t8];
        }
        function om(e, r) {
          for (var t8 in e)
            t8 !== "default" && !r.hasOwnProperty(t8) && (r[t8] = e[t8]);
        }
        function Rn2(e) {
          var r = typeof Symbol == "function" && Symbol.iterator, t8 = r && e[r], s = 0;
          if (t8)
            return t8.call(e);
          if (e && typeof e.length == "number")
            return { next: function() {
              return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
            } };
          throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function Qa(e, r) {
          var t8 = typeof Symbol == "function" && e[Symbol.iterator];
          if (!t8)
            return e;
          var s = t8.call(e), a, n = [], u;
          try {
            for (; (r === void 0 || r-- > 0) && !(a = s.next()).done; )
              n.push(a.value);
          } catch (i) {
            u = { error: i };
          } finally {
            try {
              a && !a.done && (t8 = s.return) && t8.call(s);
            } finally {
              if (u)
                throw u.error;
            }
          }
          return n;
        }
        function lm() {
          for (var e = [], r = 0; r < arguments.length; r++)
            e = e.concat(Qa(arguments[r]));
          return e;
        }
        function cm() {
          for (var e = 0, r = 0, t8 = arguments.length; r < t8; r++)
            e += arguments[r].length;
          for (var s = Array(e), a = 0, r = 0; r < t8; r++)
            for (var n = arguments[r], u = 0, i = n.length; u < i; u++, a++)
              s[a] = n[u];
          return s;
        }
        function Xt2(e) {
          return this instanceof Xt2 ? (this.v = e, this) : new Xt2(e);
        }
        function pm(e, r, t8) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var s = t8.apply(e, r || []), a, n = [];
          return a = {}, u("next"), u("throw"), u("return"), a[Symbol.asyncIterator] = function() {
            return this;
          }, a;
          function u(g) {
            s[g] && (a[g] = function(c) {
              return new Promise(function(f2, F2) {
                n.push([g, c, f2, F2]) > 1 || i(g, c);
              });
            });
          }
          function i(g, c) {
            try {
              l(s[g](c));
            } catch (f2) {
              h2(n[0][3], f2);
            }
          }
          function l(g) {
            g.value instanceof Xt2 ? Promise.resolve(g.value.v).then(p, y) : h2(n[0][2], g);
          }
          function p(g) {
            i("next", g);
          }
          function y(g) {
            i("throw", g);
          }
          function h2(g, c) {
            g(c), n.shift(), n.length && i(n[0][0], n[0][1]);
          }
        }
        function fm(e) {
          var r, t8;
          return r = {}, s("next"), s("throw", function(a) {
            throw a;
          }), s("return"), r[Symbol.iterator] = function() {
            return this;
          }, r;
          function s(a, n) {
            r[a] = e[a] ? function(u) {
              return (t8 = !t8) ? { value: Xt2(e[a](u)), done: a === "return" } : n ? n(u) : u;
            } : n;
          }
        }
        function Dm(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var r = e[Symbol.asyncIterator], t8;
          return r ? r.call(e) : (e = typeof Rn2 == "function" ? Rn2(e) : e[Symbol.iterator](), t8 = {}, s("next"), s("throw"), s("return"), t8[Symbol.asyncIterator] = function() {
            return this;
          }, t8);
          function s(n) {
            t8[n] = e[n] && function(u) {
              return new Promise(function(i, l) {
                u = e[n](u), a(i, l, u.done, u.value);
              });
            };
          }
          function a(n, u, i, l) {
            Promise.resolve(l).then(function(p) {
              n({ value: p, done: i });
            }, u);
          }
        }
        function mm(e, r) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
        }
        function dm(e) {
          if (e && e.__esModule)
            return e;
          var r = {};
          if (e != null)
            for (var t8 in e)
              Object.hasOwnProperty.call(e, t8) && (r[t8] = e[t8]);
          return r.default = e, r;
        }
        function gm(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function ym(e, r) {
          if (!r.has(e))
            throw new TypeError("attempted to get private field on non-instance");
          return r.get(e);
        }
        function hm(e, r, t8) {
          if (!r.has(e))
            throw new TypeError("attempted to set private field on non-instance");
          return r.set(e, t8), t8;
        }
        var Br, Nr2, Et2 = ht2({ "node_modules/tslib/tslib.es6.js"() {
          ne2(), Br = function(e, r) {
            return Br = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t8, s) {
              t8.__proto__ = s;
            } || function(t8, s) {
              for (var a in s)
                s.hasOwnProperty(a) && (t8[a] = s[a]);
            }, Br(e, r);
          }, Nr2 = function() {
            return Nr2 = Object.assign || function(r) {
              for (var t8, s = 1, a = arguments.length; s < a; s++) {
                t8 = arguments[s];
                for (var n in t8)
                  Object.prototype.hasOwnProperty.call(t8, n) && (r[n] = t8[n]);
              }
              return r;
            }, Nr2.apply(this, arguments);
          };
        } }), Za = te2({ "node_modules/vnopts/lib/descriptors/api.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true }), e.apiDescriptor = { key: (r) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(r) ? r : JSON.stringify(r), value(r) {
            if (r === null || typeof r != "object")
              return JSON.stringify(r);
            if (Array.isArray(r))
              return `[${r.map((s) => e.apiDescriptor.value(s)).join(", ")}]`;
            let t8 = Object.keys(r);
            return t8.length === 0 ? "{}" : `{ ${t8.map((s) => `${e.apiDescriptor.key(s)}: ${e.apiDescriptor.value(r[s])}`).join(", ")} }`;
          }, pair: (r) => {
            let { key: t8, value: s } = r;
            return e.apiDescriptor.value({ [t8]: s });
          } };
        } }), vm = te2({ "node_modules/vnopts/lib/descriptors/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = (Et2(), ft2(vt2));
          r.__exportStar(Za(), e);
        } }), kr = te2({ "scripts/build/shims/chalk.cjs"(e, r) {
          ne2();
          var t8 = (s) => s;
          t8.grey = t8, t8.red = t8, t8.bold = t8, t8.yellow = t8, t8.blue = t8, t8.default = t8, r.exports = t8;
        } }), eo = te2({ "node_modules/vnopts/lib/handlers/deprecated/common.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = kr();
          e.commonDeprecatedHandler = (t8, s, a) => {
            let { descriptor: n } = a, u = [`${r.default.yellow(typeof t8 == "string" ? n.key(t8) : n.pair(t8))} is deprecated`];
            return s && u.push(`we now treat it as ${r.default.blue(typeof s == "string" ? n.key(s) : n.pair(s))}`), u.join("; ") + ".";
          };
        } }), Cm = te2({ "node_modules/vnopts/lib/handlers/deprecated/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = (Et2(), ft2(vt2));
          r.__exportStar(eo(), e);
        } }), Em = te2({ "node_modules/vnopts/lib/handlers/invalid/common.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = kr();
          e.commonInvalidHandler = (t8, s, a) => [`Invalid ${r.default.red(a.descriptor.key(t8))} value.`, `Expected ${r.default.blue(a.schemas[t8].expected(a))},`, `but received ${r.default.red(a.descriptor.value(s))}.`].join(" ");
        } }), to = te2({ "node_modules/vnopts/lib/handlers/invalid/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = (Et2(), ft2(vt2));
          r.__exportStar(Em(), e);
        } }), Fm = te2({ "node_modules/vnopts/node_modules/leven/index.js"(e, r) {
          ne2();
          var t8 = [], s = [];
          r.exports = function(a, n) {
            if (a === n)
              return 0;
            var u = a;
            a.length > n.length && (a = n, n = u);
            var i = a.length, l = n.length;
            if (i === 0)
              return l;
            if (l === 0)
              return i;
            for (; i > 0 && a.charCodeAt(~-i) === n.charCodeAt(~-l); )
              i--, l--;
            if (i === 0)
              return l;
            for (var p = 0; p < i && a.charCodeAt(p) === n.charCodeAt(p); )
              p++;
            if (i -= p, l -= p, i === 0)
              return l;
            for (var y, h2, g, c, f2 = 0, F2 = 0; f2 < i; )
              s[p + f2] = a.charCodeAt(p + f2), t8[f2] = ++f2;
            for (; F2 < l; )
              for (y = n.charCodeAt(p + F2), g = F2++, h2 = F2, f2 = 0; f2 < i; f2++)
                c = y === s[p + f2] ? g : g + 1, g = t8[f2], h2 = t8[f2] = g > h2 ? c > h2 ? h2 + 1 : c : c > g ? g + 1 : c;
            return h2;
          };
        } }), ro2 = te2({ "node_modules/vnopts/lib/handlers/unknown/leven.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = kr(), t8 = Fm();
          e.levenUnknownHandler = (s, a, n) => {
            let { descriptor: u, logger: i, schemas: l } = n, p = [`Ignored unknown option ${r.default.yellow(u.pair({ key: s, value: a }))}.`], y = Object.keys(l).sort().find((h2) => t8(s, h2) < 3);
            y && p.push(`Did you mean ${r.default.blue(u.key(y))}?`), i.warn(p.join(" "));
          };
        } }), Am = te2({ "node_modules/vnopts/lib/handlers/unknown/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = (Et2(), ft2(vt2));
          r.__exportStar(ro2(), e);
        } }), Sm = te2({ "node_modules/vnopts/lib/handlers/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = (Et2(), ft2(vt2));
          r.__exportStar(Cm(), e), r.__exportStar(to(), e), r.__exportStar(Am(), e);
        } }), Ft2 = te2({ "node_modules/vnopts/lib/schema.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
          function t8(n, u) {
            let i = new n(u), l = Object.create(i);
            for (let p of r)
              p in u && (l[p] = a(u[p], i, s.prototype[p].length));
            return l;
          }
          e.createSchema = t8;
          var s = class {
            constructor(n) {
              this.name = n.name;
            }
            static create(n) {
              return t8(this, n);
            }
            default(n) {
            }
            expected(n) {
              return "nothing";
            }
            validate(n, u) {
              return false;
            }
            deprecated(n, u) {
              return false;
            }
            forward(n, u) {
            }
            redirect(n, u) {
            }
            overlap(n, u, i) {
              return n;
            }
            preprocess(n, u) {
              return n;
            }
            postprocess(n, u) {
              return n;
            }
          };
          e.Schema = s;
          function a(n, u, i) {
            return typeof n == "function" ? function() {
              for (var l = arguments.length, p = new Array(l), y = 0; y < l; y++)
                p[y] = arguments[y];
              return n(...p.slice(0, i - 1), u, ...p.slice(i - 1));
            } : () => n;
          }
        } }), xm = te2({ "node_modules/vnopts/lib/schemas/alias.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Ft2(), t8 = class extends r.Schema {
            constructor(s) {
              super(s), this._sourceName = s.sourceName;
            }
            expected(s) {
              return s.schemas[this._sourceName].expected(s);
            }
            validate(s, a) {
              return a.schemas[this._sourceName].validate(s, a);
            }
            redirect(s, a) {
              return this._sourceName;
            }
          };
          e.AliasSchema = t8;
        } }), bm = te2({ "node_modules/vnopts/lib/schemas/any.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Ft2(), t8 = class extends r.Schema {
            expected() {
              return "anything";
            }
            validate() {
              return true;
            }
          };
          e.AnySchema = t8;
        } }), Tm = te2({ "node_modules/vnopts/lib/schemas/array.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = (Et2(), ft2(vt2)), t8 = Ft2(), s = class extends t8.Schema {
            constructor(n) {
              var { valueSchema: u, name: i = u.name } = n, l = r.__rest(n, ["valueSchema", "name"]);
              super(Object.assign({}, l, { name: i })), this._valueSchema = u;
            }
            expected(n) {
              return `an array of ${this._valueSchema.expected(n)}`;
            }
            validate(n, u) {
              if (!Array.isArray(n))
                return false;
              let i = [];
              for (let l of n) {
                let p = u.normalizeValidateResult(this._valueSchema.validate(l, u), l);
                p !== true && i.push(p.value);
              }
              return i.length === 0 ? true : { value: i };
            }
            deprecated(n, u) {
              let i = [];
              for (let l of n) {
                let p = u.normalizeDeprecatedResult(this._valueSchema.deprecated(l, u), l);
                p !== false && i.push(...p.map((y) => {
                  let { value: h2 } = y;
                  return { value: [h2] };
                }));
              }
              return i;
            }
            forward(n, u) {
              let i = [];
              for (let l of n) {
                let p = u.normalizeForwardResult(this._valueSchema.forward(l, u), l);
                i.push(...p.map(a));
              }
              return i;
            }
            redirect(n, u) {
              let i = [], l = [];
              for (let p of n) {
                let y = u.normalizeRedirectResult(this._valueSchema.redirect(p, u), p);
                "remain" in y && i.push(y.remain), l.push(...y.redirect.map(a));
              }
              return i.length === 0 ? { redirect: l } : { redirect: l, remain: i };
            }
            overlap(n, u) {
              return n.concat(u);
            }
          };
          e.ArraySchema = s;
          function a(n) {
            let { from: u, to: i } = n;
            return { from: [u], to: i };
          }
        } }), Bm = te2({ "node_modules/vnopts/lib/schemas/boolean.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Ft2(), t8 = class extends r.Schema {
            expected() {
              return "true or false";
            }
            validate(s) {
              return typeof s == "boolean";
            }
          };
          e.BooleanSchema = t8;
        } }), eu = te2({ "node_modules/vnopts/lib/utils.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          function r(c, f2) {
            let F2 = /* @__PURE__ */ Object.create(null);
            for (let _ of c) {
              let w = _[f2];
              if (F2[w])
                throw new Error(`Duplicate ${f2} ${JSON.stringify(w)}`);
              F2[w] = _;
            }
            return F2;
          }
          e.recordFromArray = r;
          function t8(c, f2) {
            let F2 = /* @__PURE__ */ new Map();
            for (let _ of c) {
              let w = _[f2];
              if (F2.has(w))
                throw new Error(`Duplicate ${f2} ${JSON.stringify(w)}`);
              F2.set(w, _);
            }
            return F2;
          }
          e.mapFromArray = t8;
          function s() {
            let c = /* @__PURE__ */ Object.create(null);
            return (f2) => {
              let F2 = JSON.stringify(f2);
              return c[F2] ? true : (c[F2] = true, false);
            };
          }
          e.createAutoChecklist = s;
          function a(c, f2) {
            let F2 = [], _ = [];
            for (let w of c)
              f2(w) ? F2.push(w) : _.push(w);
            return [F2, _];
          }
          e.partition = a;
          function n(c) {
            return c === Math.floor(c);
          }
          e.isInt = n;
          function u(c, f2) {
            if (c === f2)
              return 0;
            let F2 = typeof c, _ = typeof f2, w = ["undefined", "object", "boolean", "number", "string"];
            return F2 !== _ ? w.indexOf(F2) - w.indexOf(_) : F2 !== "string" ? Number(c) - Number(f2) : c.localeCompare(f2);
          }
          e.comparePrimitive = u;
          function i(c) {
            return c === void 0 ? {} : c;
          }
          e.normalizeDefaultResult = i;
          function l(c, f2) {
            return c === true ? true : c === false ? { value: f2 } : c;
          }
          e.normalizeValidateResult = l;
          function p(c, f2) {
            let F2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            return c === false ? false : c === true ? F2 ? true : [{ value: f2 }] : "value" in c ? [c] : c.length === 0 ? false : c;
          }
          e.normalizeDeprecatedResult = p;
          function y(c, f2) {
            return typeof c == "string" || "key" in c ? { from: f2, to: c } : "from" in c ? { from: c.from, to: c.to } : { from: f2, to: c.to };
          }
          e.normalizeTransferResult = y;
          function h2(c, f2) {
            return c === void 0 ? [] : Array.isArray(c) ? c.map((F2) => y(F2, f2)) : [y(c, f2)];
          }
          e.normalizeForwardResult = h2;
          function g(c, f2) {
            let F2 = h2(typeof c == "object" && "redirect" in c ? c.redirect : c, f2);
            return F2.length === 0 ? { remain: f2, redirect: F2 } : typeof c == "object" && "remain" in c ? { remain: c.remain, redirect: F2 } : { redirect: F2 };
          }
          e.normalizeRedirectResult = g;
        } }), Nm = te2({ "node_modules/vnopts/lib/schemas/choice.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Ft2(), t8 = eu(), s = class extends r.Schema {
            constructor(a) {
              super(a), this._choices = t8.mapFromArray(a.choices.map((n) => n && typeof n == "object" ? n : { value: n }), "value");
            }
            expected(a) {
              let { descriptor: n } = a, u = Array.from(this._choices.keys()).map((p) => this._choices.get(p)).filter((p) => !p.deprecated).map((p) => p.value).sort(t8.comparePrimitive).map(n.value), i = u.slice(0, -2), l = u.slice(-2);
              return i.concat(l.join(" or ")).join(", ");
            }
            validate(a) {
              return this._choices.has(a);
            }
            deprecated(a) {
              let n = this._choices.get(a);
              return n && n.deprecated ? { value: a } : false;
            }
            forward(a) {
              let n = this._choices.get(a);
              return n ? n.forward : void 0;
            }
            redirect(a) {
              let n = this._choices.get(a);
              return n ? n.redirect : void 0;
            }
          };
          e.ChoiceSchema = s;
        } }), no2 = te2({ "node_modules/vnopts/lib/schemas/number.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Ft2(), t8 = class extends r.Schema {
            expected() {
              return "a number";
            }
            validate(s, a) {
              return typeof s == "number";
            }
          };
          e.NumberSchema = t8;
        } }), wm = te2({ "node_modules/vnopts/lib/schemas/integer.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = eu(), t8 = no2(), s = class extends t8.NumberSchema {
            expected() {
              return "an integer";
            }
            validate(a, n) {
              return n.normalizeValidateResult(super.validate(a, n), a) === true && r.isInt(a);
            }
          };
          e.IntegerSchema = s;
        } }), _m = te2({ "node_modules/vnopts/lib/schemas/string.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Ft2(), t8 = class extends r.Schema {
            expected() {
              return "a string";
            }
            validate(s) {
              return typeof s == "string";
            }
          };
          e.StringSchema = t8;
        } }), Pm = te2({ "node_modules/vnopts/lib/schemas/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = (Et2(), ft2(vt2));
          r.__exportStar(xm(), e), r.__exportStar(bm(), e), r.__exportStar(Tm(), e), r.__exportStar(Bm(), e), r.__exportStar(Nm(), e), r.__exportStar(wm(), e), r.__exportStar(no2(), e), r.__exportStar(_m(), e);
        } }), Im = te2({ "node_modules/vnopts/lib/defaults.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Za(), t8 = eo(), s = to(), a = ro2();
          e.defaultDescriptor = r.apiDescriptor, e.defaultUnknownHandler = a.levenUnknownHandler, e.defaultInvalidHandler = s.commonInvalidHandler, e.defaultDeprecatedHandler = t8.commonDeprecatedHandler;
        } }), km = te2({ "node_modules/vnopts/lib/normalize.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Im(), t8 = eu();
          e.normalize = (a, n, u) => new s(n, u).normalize(a);
          var s = class {
            constructor(a, n) {
              let { logger: u = console, descriptor: i = r.defaultDescriptor, unknown: l = r.defaultUnknownHandler, invalid: p = r.defaultInvalidHandler, deprecated: y = r.defaultDeprecatedHandler } = n || {};
              this._utils = { descriptor: i, logger: u || { warn: () => {
              } }, schemas: t8.recordFromArray(a, "name"), normalizeDefaultResult: t8.normalizeDefaultResult, normalizeDeprecatedResult: t8.normalizeDeprecatedResult, normalizeForwardResult: t8.normalizeForwardResult, normalizeRedirectResult: t8.normalizeRedirectResult, normalizeValidateResult: t8.normalizeValidateResult }, this._unknownHandler = l, this._invalidHandler = p, this._deprecatedHandler = y, this.cleanHistory();
            }
            cleanHistory() {
              this._hasDeprecationWarned = t8.createAutoChecklist();
            }
            normalize(a) {
              let n = {}, u = [a], i = () => {
                for (; u.length !== 0; ) {
                  let l = u.shift(), p = this._applyNormalization(l, n);
                  u.push(...p);
                }
              };
              i();
              for (let l of Object.keys(this._utils.schemas)) {
                let p = this._utils.schemas[l];
                if (!(l in n)) {
                  let y = t8.normalizeDefaultResult(p.default(this._utils));
                  "value" in y && u.push({ [l]: y.value });
                }
              }
              i();
              for (let l of Object.keys(this._utils.schemas)) {
                let p = this._utils.schemas[l];
                l in n && (n[l] = p.postprocess(n[l], this._utils));
              }
              return n;
            }
            _applyNormalization(a, n) {
              let u = [], [i, l] = t8.partition(Object.keys(a), (p) => p in this._utils.schemas);
              for (let p of i) {
                let y = this._utils.schemas[p], h2 = y.preprocess(a[p], this._utils), g = t8.normalizeValidateResult(y.validate(h2, this._utils), h2);
                if (g !== true) {
                  let { value: w } = g, E2 = this._invalidHandler(p, w, this._utils);
                  throw typeof E2 == "string" ? new Error(E2) : E2;
                }
                let c = (w) => {
                  let { from: E2, to: N2 } = w;
                  u.push(typeof N2 == "string" ? { [N2]: E2 } : { [N2.key]: N2.value });
                }, f2 = (w) => {
                  let { value: E2, redirectTo: N2 } = w, x2 = t8.normalizeDeprecatedResult(y.deprecated(E2, this._utils), h2, true);
                  if (x2 !== false)
                    if (x2 === true)
                      this._hasDeprecationWarned(p) || this._utils.logger.warn(this._deprecatedHandler(p, N2, this._utils));
                    else
                      for (let { value: I2 } of x2) {
                        let P = { key: p, value: I2 };
                        if (!this._hasDeprecationWarned(P)) {
                          let $ = typeof N2 == "string" ? { key: N2, value: I2 } : N2;
                          this._utils.logger.warn(this._deprecatedHandler(P, $, this._utils));
                        }
                      }
                };
                t8.normalizeForwardResult(y.forward(h2, this._utils), h2).forEach(c);
                let _ = t8.normalizeRedirectResult(y.redirect(h2, this._utils), h2);
                if (_.redirect.forEach(c), "remain" in _) {
                  let w = _.remain;
                  n[p] = p in n ? y.overlap(n[p], w, this._utils) : w, f2({ value: w });
                }
                for (let { from: w, to: E2 } of _.redirect)
                  f2({ value: w, redirectTo: E2 });
              }
              for (let p of l) {
                let y = a[p], h2 = this._unknownHandler(p, y, this._utils);
                if (h2)
                  for (let g of Object.keys(h2)) {
                    let c = { [g]: h2[g] };
                    g in this._utils.schemas ? u.push(c) : Object.assign(n, c);
                  }
              }
              return u;
            }
          };
          e.Normalizer = s;
        } }), Lm = te2({ "node_modules/vnopts/lib/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = (Et2(), ft2(vt2));
          r.__exportStar(vm(), e), r.__exportStar(Sm(), e), r.__exportStar(Pm(), e), r.__exportStar(km(), e), r.__exportStar(Ft2(), e);
        } }), Om = te2({ "src/main/options-normalizer.js"(e, r) {
          ne2();
          var t8 = Lm(), s = lt(), a = { key: (g) => g.length === 1 ? `-${g}` : `--${g}`, value: (g) => t8.apiDescriptor.value(g), pair: (g) => {
            let { key: c, value: f2 } = g;
            return f2 === false ? `--no-${c}` : f2 === true ? a.key(c) : f2 === "" ? `${a.key(c)} without an argument` : `${a.key(c)}=${f2}`;
          } }, n = (g) => {
            let { colorsModule: c, levenshteinDistance: f2 } = g;
            return class extends t8.ChoiceSchema {
              constructor(_) {
                let { name: w, flags: E2 } = _;
                super({ name: w, choices: E2 }), this._flags = [...E2].sort();
              }
              preprocess(_, w) {
                if (typeof _ == "string" && _.length > 0 && !this._flags.includes(_)) {
                  let E2 = this._flags.find((N2) => f2(N2, _) < 3);
                  if (E2)
                    return w.logger.warn([`Unknown flag ${c.yellow(w.descriptor.value(_))},`, `did you mean ${c.blue(w.descriptor.value(E2))}?`].join(" ")), E2;
                }
                return _;
              }
              expected() {
                return "a flag";
              }
            };
          }, u;
          function i(g, c) {
            let { logger: f2 = false, isCLI: F2 = false, passThrough: _ = false, colorsModule: w = null, levenshteinDistance: E2 = null } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, N2 = _ ? Array.isArray(_) ? (T2, m) => _.includes(T2) ? { [T2]: m } : void 0 : (T2, m) => ({ [T2]: m }) : (T2, m, C) => {
              let o = C.schemas, v2 = Hn2(o, vD);
              return t8.levenUnknownHandler(T2, m, Object.assign(Object.assign({}, C), {}, { schemas: v2 }));
            }, x2 = F2 ? a : t8.apiDescriptor, I2 = l(c, { isCLI: F2, colorsModule: w, levenshteinDistance: E2 }), P = new t8.Normalizer(I2, { logger: f2, unknown: N2, descriptor: x2 }), $ = f2 !== false;
            $ && u && (P._hasDeprecationWarned = u);
            let D = P.normalize(g);
            return $ && (u = P._hasDeprecationWarned), F2 && D["plugin-search"] === false && (D["plugin-search-dir"] = false), D;
          }
          function l(g, c) {
            let { isCLI: f2, colorsModule: F2, levenshteinDistance: _ } = c, w = [];
            f2 && w.push(t8.AnySchema.create({ name: "_" }));
            for (let E2 of g)
              w.push(p(E2, { isCLI: f2, optionInfos: g, colorsModule: F2, levenshteinDistance: _ })), E2.alias && f2 && w.push(t8.AliasSchema.create({ name: E2.alias, sourceName: E2.name }));
            return w;
          }
          function p(g, c) {
            let { isCLI: f2, optionInfos: F2, colorsModule: _, levenshteinDistance: w } = c, { name: E2 } = g;
            if (E2 === "plugin-search-dir" || E2 === "pluginSearchDirs")
              return t8.AnySchema.create({ name: E2, preprocess(P) {
                return P === false || (P = Array.isArray(P) ? P : [P]), P;
              }, validate(P) {
                return P === false ? true : P.every(($) => typeof $ == "string");
              }, expected() {
                return "false or paths to plugin search dir";
              } });
            let N2 = { name: E2 }, x2, I2 = {};
            switch (g.type) {
              case "int":
                x2 = t8.IntegerSchema, f2 && (N2.preprocess = Number);
                break;
              case "string":
                x2 = t8.StringSchema;
                break;
              case "choice":
                x2 = t8.ChoiceSchema, N2.choices = g.choices.map((P) => typeof P == "object" && P.redirect ? Object.assign(Object.assign({}, P), {}, { redirect: { to: { key: g.name, value: P.redirect } } }) : P);
                break;
              case "boolean":
                x2 = t8.BooleanSchema;
                break;
              case "flag":
                x2 = n({ colorsModule: _, levenshteinDistance: w }), N2.flags = F2.flatMap((P) => [P.alias, P.description && P.name, P.oppositeDescription && `no-${P.name}`].filter(Boolean));
                break;
              case "path":
                x2 = t8.StringSchema;
                break;
              default:
                throw new Error(`Unexpected type ${g.type}`);
            }
            if (g.exception ? N2.validate = (P, $, D) => g.exception(P) || $.validate(P, D) : N2.validate = (P, $, D) => P === void 0 || $.validate(P, D), g.redirect && (I2.redirect = (P) => P ? { to: { key: g.redirect.option, value: g.redirect.value } } : void 0), g.deprecated && (I2.deprecated = true), f2 && !g.array) {
              let P = N2.preprocess || (($) => $);
              N2.preprocess = ($, D, T2) => D.preprocess(P(Array.isArray($) ? s($) : $), T2);
            }
            return g.array ? t8.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, f2 ? { preprocess: (P) => Array.isArray(P) ? P : [P] } : {}), I2), {}, { valueSchema: x2.create(N2) })) : x2.create(Object.assign(Object.assign({}, N2), I2));
          }
          function y(g, c, f2) {
            return i(g, c, f2);
          }
          function h2(g, c, f2) {
            return i(g, c, Object.assign({ isCLI: true }, f2));
          }
          r.exports = { normalizeApiOptions: y, normalizeCliOptions: h2 };
        } }), ut2 = te2({ "src/language-js/loc.js"(e, r) {
          ne2();
          var t8 = Kn2();
          function s(l) {
            var p, y;
            let h2 = l.range ? l.range[0] : l.start, g = (p = (y = l.declaration) === null || y === void 0 ? void 0 : y.decorators) !== null && p !== void 0 ? p : l.decorators;
            return t8(g) ? Math.min(s(g[0]), h2) : h2;
          }
          function a(l) {
            return l.range ? l.range[1] : l.end;
          }
          function n(l, p) {
            let y = s(l);
            return Number.isInteger(y) && y === s(p);
          }
          function u(l, p) {
            let y = a(l);
            return Number.isInteger(y) && y === a(p);
          }
          function i(l, p) {
            return n(l, p) && u(l, p);
          }
          r.exports = { locStart: s, locEnd: a, hasSameLocStart: n, hasSameLoc: i };
        } }), jm = te2({ "src/main/load-parser.js"(e, r) {
          ne2(), r.exports = () => {
          };
        } }), qm = te2({ "scripts/build/shims/babel-highlight.cjs"(e, r) {
          ne2();
          var t8 = kr(), s = { shouldHighlight: () => false, getChalk: () => t8 };
          r.exports = s;
        } }), Mm = te2({ "node_modules/@babel/code-frame/lib/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true }), e.codeFrameColumns = u, e.default = i;
          var r = qm(), t8 = false;
          function s(l) {
            return { gutter: l.grey, marker: l.red.bold, message: l.red.bold };
          }
          var a = /\r\n|[\n\r\u2028\u2029]/;
          function n(l, p, y) {
            let h2 = Object.assign({ column: 0, line: -1 }, l.start), g = Object.assign({}, h2, l.end), { linesAbove: c = 2, linesBelow: f2 = 3 } = y || {}, F2 = h2.line, _ = h2.column, w = g.line, E2 = g.column, N2 = Math.max(F2 - (c + 1), 0), x2 = Math.min(p.length, w + f2);
            F2 === -1 && (N2 = 0), w === -1 && (x2 = p.length);
            let I2 = w - F2, P = {};
            if (I2)
              for (let $ = 0; $ <= I2; $++) {
                let D = $ + F2;
                if (!_)
                  P[D] = true;
                else if ($ === 0) {
                  let T2 = p[D - 1].length;
                  P[D] = [_, T2 - _ + 1];
                } else if ($ === I2)
                  P[D] = [0, E2];
                else {
                  let T2 = p[D - $].length;
                  P[D] = [0, T2];
                }
              }
            else
              _ === E2 ? _ ? P[F2] = [_, 0] : P[F2] = true : P[F2] = [_, E2 - _];
            return { start: N2, end: x2, markerLines: P };
          }
          function u(l, p) {
            let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h2 = (y.highlightCode || y.forceColor) && (0, r.shouldHighlight)(y), g = (0, r.getChalk)(y), c = s(g), f2 = ($, D) => h2 ? $(D) : D, F2 = l.split(a), { start: _, end: w, markerLines: E2 } = n(p, F2, y), N2 = p.start && typeof p.start.column == "number", x2 = String(w).length, P = (h2 ? (0, r.default)(l, y) : l).split(a, w).slice(_, w).map(($, D) => {
              let T2 = _ + 1 + D, C = ` ${` ${T2}`.slice(-x2)} |`, o = E2[T2], d = !E2[T2 + 1];
              if (o) {
                let v2 = "";
                if (Array.isArray(o)) {
                  let S2 = $.slice(0, Math.max(o[0] - 1, 0)).replace(/[^\t]/g, " "), b2 = o[1] || 1;
                  v2 = [`
 `, f2(c.gutter, C.replace(/\d/g, " ")), " ", S2, f2(c.marker, "^").repeat(b2)].join(""), d && y.message && (v2 += " " + f2(c.message, y.message));
                }
                return [f2(c.marker, ">"), f2(c.gutter, C), $.length > 0 ? ` ${$}` : "", v2].join("");
              } else
                return ` ${f2(c.gutter, C)}${$.length > 0 ? ` ${$}` : ""}`;
            }).join(`
`);
            return y.message && !N2 && (P = `${" ".repeat(x2 + 1)}${y.message}
${P}`), h2 ? g.reset(P) : P;
          }
          function i(l, p, y) {
            let h2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            if (!t8) {
              t8 = true;
              let c = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
              if (wt2.emitWarning)
                wt2.emitWarning(c, "DeprecationWarning");
              else {
                let f2 = new Error(c);
                f2.name = "DeprecationWarning", console.warn(new Error(c));
              }
            }
            return y = Math.max(y, 0), u(l, { start: { column: y, line: p } }, h2);
          }
        } }), tu = te2({ "src/main/parser.js"(e, r) {
          ne2();
          var { ConfigError: t8 } = Qt2(), s = ut2();
          jm();
          var { locStart: n, locEnd: u } = s, i = Object.getOwnPropertyNames, l = Object.getOwnPropertyDescriptor;
          function p(g) {
            let c = {};
            for (let f2 of g.plugins)
              if (f2.parsers)
                for (let F2 of i(f2.parsers))
                  Object.defineProperty(c, F2, l(f2.parsers, F2));
            return c;
          }
          function y(g) {
            let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p(g);
            if (typeof g.parser == "function")
              return { parse: g.parser, astFormat: "estree", locStart: n, locEnd: u };
            if (typeof g.parser == "string") {
              if (Object.prototype.hasOwnProperty.call(c, g.parser))
                return c[g.parser];
              throw new t8(`Couldn't resolve parser "${g.parser}". Parsers must be explicitly added to the standalone bundle.`);
            }
          }
          function h2(g, c) {
            let f2 = p(c), F2 = Object.defineProperties({}, Object.fromEntries(Object.keys(f2).map((w) => [w, { enumerable: true, get() {
              return f2[w].parse;
            } }]))), _ = y(c, f2);
            try {
              return _.preprocess && (g = _.preprocess(g, c)), { text: g, ast: _.parse(g, F2, c) };
            } catch (w) {
              let { loc: E2 } = w;
              if (E2) {
                let { codeFrameColumns: N2 } = Mm();
                throw w.codeFrame = N2(g, E2, { highlightCode: true }), w.message += `
` + w.codeFrame, w;
              }
              throw w;
            }
          }
          r.exports = { parse: h2, resolveParser: y };
        } }), uo2 = te2({ "src/main/options.js"(e, r) {
          ne2();
          var t8 = ZD(), { UndefinedParserError: s } = Qt2(), { getSupportInfo: a } = Xn2(), n = Om(), { resolveParser: u } = tu(), i = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
          function l(h2) {
            let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = Object.assign({}, h2), f2 = a({ plugins: h2.plugins, showUnreleased: true, showDeprecated: true }).options, F2 = Object.assign(Object.assign({}, i), Object.fromEntries(f2.filter((x2) => x2.default !== void 0).map((x2) => [x2.name, x2.default])));
            if (!c.parser) {
              if (!c.filepath)
                (g.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), c.parser = "babel";
              else if (c.parser = y(c.filepath, c.plugins), !c.parser)
                throw new s(`No parser could be inferred for file: ${c.filepath}`);
            }
            let _ = u(n.normalizeApiOptions(c, [f2.find((x2) => x2.name === "parser")], { passThrough: true, logger: false }));
            c.astFormat = _.astFormat, c.locEnd = _.locEnd, c.locStart = _.locStart;
            let w = p(c);
            c.printer = w.printers[c.astFormat];
            let E2 = Object.fromEntries(f2.filter((x2) => x2.pluginDefaults && x2.pluginDefaults[w.name] !== void 0).map((x2) => [x2.name, x2.pluginDefaults[w.name]])), N2 = Object.assign(Object.assign({}, F2), E2);
            for (let [x2, I2] of Object.entries(N2))
              (c[x2] === null || c[x2] === void 0) && (c[x2] = I2);
            return c.parser === "json" && (c.trailingComma = "none"), n.normalizeApiOptions(c, f2, Object.assign({ passThrough: Object.keys(i) }, g));
          }
          function p(h2) {
            let { astFormat: g } = h2;
            if (!g)
              throw new Error("getPlugin() requires astFormat to be set");
            let c = h2.plugins.find((f2) => f2.printers && f2.printers[g]);
            if (!c)
              throw new Error(`Couldn't find plugin for AST format "${g}"`);
            return c;
          }
          function y(h2, g) {
            let c = t8.basename(h2).toLowerCase(), F2 = a({ plugins: g }).languages.filter((_) => _.since !== null).find((_) => _.extensions && _.extensions.some((w) => c.endsWith(w)) || _.filenames && _.filenames.some((w) => w.toLowerCase() === c));
            return F2 && F2.parsers[0];
          }
          r.exports = { normalize: l, hiddenDefaults: i, inferParser: y };
        } }), Rm = te2({ "src/main/massage-ast.js"(e, r) {
          ne2();
          function t8(s, a, n) {
            if (Array.isArray(s))
              return s.map((p) => t8(p, a, n)).filter(Boolean);
            if (!s || typeof s != "object")
              return s;
            let u = a.printer.massageAstNode, i;
            u && u.ignoredProperties ? i = u.ignoredProperties : i = /* @__PURE__ */ new Set();
            let l = {};
            for (let [p, y] of Object.entries(s))
              !i.has(p) && typeof y != "function" && (l[p] = t8(y, a, s));
            if (u) {
              let p = u(s, l, n);
              if (p === null)
                return;
              if (p)
                return p;
            }
            return l;
          }
          r.exports = t8;
        } }), Zt2 = te2({ "scripts/build/shims/assert.cjs"(e, r) {
          ne2();
          var t8 = () => {
          };
          t8.ok = t8, t8.strictEqual = t8, r.exports = t8;
        } }), et2 = te2({ "src/main/comments.js"(e, r) {
          ne2();
          var t8 = Zt2(), { builders: { line: s, hardline: a, breakParent: n, indent: u, lineSuffix: i, join: l, cursor: p } } = qe2(), { hasNewline: y, skipNewline: h2, skipSpaces: g, isPreviousLineEmpty: c, addLeadingComment: f2, addDanglingComment: F2, addTrailingComment: _ } = Ue2(), w = /* @__PURE__ */ new WeakMap();
          function E2(k2, M, R2) {
            if (!k2)
              return;
            let { printer: q, locStart: J2, locEnd: L2 } = M;
            if (R2) {
              if (q.canAttachComment && q.canAttachComment(k2)) {
                let V2;
                for (V2 = R2.length - 1; V2 >= 0 && !(J2(R2[V2]) <= J2(k2) && L2(R2[V2]) <= L2(k2)); --V2)
                  ;
                R2.splice(V2 + 1, 0, k2);
                return;
              }
            } else if (w.has(k2))
              return w.get(k2);
            let Q2 = q.getCommentChildNodes && q.getCommentChildNodes(k2, M) || typeof k2 == "object" && Object.entries(k2).filter((V2) => {
              let [j2] = V2;
              return j2 !== "enclosingNode" && j2 !== "precedingNode" && j2 !== "followingNode" && j2 !== "tokens" && j2 !== "comments" && j2 !== "parent";
            }).map((V2) => {
              let [, j2] = V2;
              return j2;
            });
            if (Q2) {
              R2 || (R2 = [], w.set(k2, R2));
              for (let V2 of Q2)
                E2(V2, M, R2);
              return R2;
            }
          }
          function N2(k2, M, R2, q) {
            let { locStart: J2, locEnd: L2 } = R2, Q2 = J2(M), V2 = L2(M), j2 = E2(k2, R2), Y2, ie2, ee2 = 0, ce2 = j2.length;
            for (; ee2 < ce2; ) {
              let W2 = ee2 + ce2 >> 1, K2 = j2[W2], de2 = J2(K2), ue2 = L2(K2);
              if (de2 <= Q2 && V2 <= ue2)
                return N2(K2, M, R2, K2);
              if (ue2 <= Q2) {
                Y2 = K2, ee2 = W2 + 1;
                continue;
              }
              if (V2 <= de2) {
                ie2 = K2, ce2 = W2;
                continue;
              }
              throw new Error("Comment location overlaps with node location");
            }
            if (q && q.type === "TemplateLiteral") {
              let { quasis: W2 } = q, K2 = C(W2, M, R2);
              Y2 && C(W2, Y2, R2) !== K2 && (Y2 = null), ie2 && C(W2, ie2, R2) !== K2 && (ie2 = null);
            }
            return { enclosingNode: q, precedingNode: Y2, followingNode: ie2 };
          }
          var x2 = () => false;
          function I2(k2, M, R2, q) {
            if (!Array.isArray(k2))
              return;
            let J2 = [], { locStart: L2, locEnd: Q2, printer: { handleComments: V2 = {} } } = q, { avoidAstMutation: j2, ownLine: Y2 = x2, endOfLine: ie2 = x2, remaining: ee2 = x2 } = V2, ce2 = k2.map((W2, K2) => Object.assign(Object.assign({}, N2(M, W2, q)), {}, { comment: W2, text: R2, options: q, ast: M, isLastComment: k2.length - 1 === K2 }));
            for (let [W2, K2] of ce2.entries()) {
              let { comment: de2, precedingNode: ue2, enclosingNode: Fe2, followingNode: z2, text: U2, options: Z, ast: se2, isLastComment: fe2 } = K2;
              if (Z.parser === "json" || Z.parser === "json5" || Z.parser === "__js_expression" || Z.parser === "__vue_expression" || Z.parser === "__vue_ts_expression") {
                if (L2(de2) - L2(se2) <= 0) {
                  f2(se2, de2);
                  continue;
                }
                if (Q2(de2) - Q2(se2) >= 0) {
                  _(se2, de2);
                  continue;
                }
              }
              let ge2;
              if (j2 ? ge2 = [K2] : (de2.enclosingNode = Fe2, de2.precedingNode = ue2, de2.followingNode = z2, ge2 = [de2, U2, Z, se2, fe2]), $(U2, Z, ce2, W2))
                de2.placement = "ownLine", Y2(...ge2) || (z2 ? f2(z2, de2) : ue2 ? _(ue2, de2) : F2(Fe2 || se2, de2));
              else if (D(U2, Z, ce2, W2))
                de2.placement = "endOfLine", ie2(...ge2) || (ue2 ? _(ue2, de2) : z2 ? f2(z2, de2) : F2(Fe2 || se2, de2));
              else if (de2.placement = "remaining", !ee2(...ge2))
                if (ue2 && z2) {
                  let he2 = J2.length;
                  he2 > 0 && J2[he2 - 1].followingNode !== z2 && T2(J2, U2, Z), J2.push(K2);
                } else
                  ue2 ? _(ue2, de2) : z2 ? f2(z2, de2) : F2(Fe2 || se2, de2);
            }
            if (T2(J2, R2, q), !j2)
              for (let W2 of k2)
                delete W2.precedingNode, delete W2.enclosingNode, delete W2.followingNode;
          }
          var P = (k2) => !/[\S\n\u2028\u2029]/.test(k2);
          function $(k2, M, R2, q) {
            let { comment: J2, precedingNode: L2 } = R2[q], { locStart: Q2, locEnd: V2 } = M, j2 = Q2(J2);
            if (L2)
              for (let Y2 = q - 1; Y2 >= 0; Y2--) {
                let { comment: ie2, precedingNode: ee2 } = R2[Y2];
                if (ee2 !== L2 || !P(k2.slice(V2(ie2), j2)))
                  break;
                j2 = Q2(ie2);
              }
            return y(k2, j2, { backwards: true });
          }
          function D(k2, M, R2, q) {
            let { comment: J2, followingNode: L2 } = R2[q], { locStart: Q2, locEnd: V2 } = M, j2 = V2(J2);
            if (L2)
              for (let Y2 = q + 1; Y2 < R2.length; Y2++) {
                let { comment: ie2, followingNode: ee2 } = R2[Y2];
                if (ee2 !== L2 || !P(k2.slice(j2, Q2(ie2))))
                  break;
                j2 = V2(ie2);
              }
            return y(k2, j2);
          }
          function T2(k2, M, R2) {
            let q = k2.length;
            if (q === 0)
              return;
            let { precedingNode: J2, followingNode: L2, enclosingNode: Q2 } = k2[0], V2 = R2.printer.getGapRegex && R2.printer.getGapRegex(Q2) || /^[\s(]*$/, j2 = R2.locStart(L2), Y2;
            for (Y2 = q; Y2 > 0; --Y2) {
              let { comment: ie2, precedingNode: ee2, followingNode: ce2 } = k2[Y2 - 1];
              t8.strictEqual(ee2, J2), t8.strictEqual(ce2, L2);
              let W2 = M.slice(R2.locEnd(ie2), j2);
              if (V2.test(W2))
                j2 = R2.locStart(ie2);
              else
                break;
            }
            for (let [ie2, { comment: ee2 }] of k2.entries())
              ie2 < Y2 ? _(J2, ee2) : f2(L2, ee2);
            for (let ie2 of [J2, L2])
              ie2.comments && ie2.comments.length > 1 && ie2.comments.sort((ee2, ce2) => R2.locStart(ee2) - R2.locStart(ce2));
            k2.length = 0;
          }
          function m(k2, M) {
            let R2 = k2.getValue();
            return R2.printed = true, M.printer.printComment(k2, M);
          }
          function C(k2, M, R2) {
            let q = R2.locStart(M) - 1;
            for (let J2 = 1; J2 < k2.length; ++J2)
              if (q < R2.locStart(k2[J2]))
                return J2 - 1;
            return 0;
          }
          function o(k2, M) {
            let R2 = k2.getValue(), q = [m(k2, M)], { printer: J2, originalText: L2, locStart: Q2, locEnd: V2 } = M;
            if (J2.isBlockComment && J2.isBlockComment(R2)) {
              let ie2 = y(L2, V2(R2)) ? y(L2, Q2(R2), { backwards: true }) ? a : s : " ";
              q.push(ie2);
            } else
              q.push(a);
            let Y2 = h2(L2, g(L2, V2(R2)));
            return Y2 !== false && y(L2, Y2) && q.push(a), q;
          }
          function d(k2, M) {
            let R2 = k2.getValue(), q = m(k2, M), { printer: J2, originalText: L2, locStart: Q2 } = M, V2 = J2.isBlockComment && J2.isBlockComment(R2);
            if (y(L2, Q2(R2), { backwards: true })) {
              let Y2 = c(L2, R2, Q2);
              return i([a, Y2 ? a : "", q]);
            }
            let j2 = [" ", q];
            return V2 || (j2 = [i(j2), n]), j2;
          }
          function v2(k2, M, R2, q) {
            let J2 = [], L2 = k2.getValue();
            return !L2 || !L2.comments || (k2.each(() => {
              let Q2 = k2.getValue();
              !Q2.leading && !Q2.trailing && (!q || q(Q2)) && J2.push(m(k2, M));
            }, "comments"), J2.length === 0) ? "" : R2 ? l(a, J2) : u([a, l(a, J2)]);
          }
          function S2(k2, M, R2) {
            let q = k2.getValue();
            if (!q)
              return {};
            let J2 = q.comments || [];
            R2 && (J2 = J2.filter((j2) => !R2.has(j2)));
            let L2 = q === M.cursorNode;
            if (J2.length === 0) {
              let j2 = L2 ? p : "";
              return { leading: j2, trailing: j2 };
            }
            let Q2 = [], V2 = [];
            return k2.each(() => {
              let j2 = k2.getValue();
              if (R2 && R2.has(j2))
                return;
              let { leading: Y2, trailing: ie2 } = j2;
              Y2 ? Q2.push(o(k2, M)) : ie2 && V2.push(d(k2, M));
            }, "comments"), L2 && (Q2.unshift(p), V2.push(p)), { leading: Q2, trailing: V2 };
          }
          function b2(k2, M, R2, q) {
            let { leading: J2, trailing: L2 } = S2(k2, R2, q);
            return !J2 && !L2 ? M : [J2, M, L2];
          }
          function B(k2) {
            if (k2)
              for (let M of k2) {
                if (!M.printed)
                  throw new Error('Comment "' + M.value.trim() + '" was not printed. Please report this error!');
                delete M.printed;
              }
          }
          r.exports = { attach: I2, printComments: b2, printCommentsSeparately: S2, printDanglingComments: v2, getSortedChildNodes: E2, ensureAllCommentsPrinted: B };
        } }), $m = te2({ "src/common/ast-path.js"(e, r) {
          ne2();
          var t8 = lt();
          function s(u, i) {
            let l = a(u.stack, i);
            return l === -1 ? null : u.stack[l];
          }
          function a(u, i) {
            for (let l = u.length - 1; l >= 0; l -= 2) {
              let p = u[l];
              if (p && !Array.isArray(p) && --i < 0)
                return l;
            }
            return -1;
          }
          var n = class {
            constructor(u) {
              this.stack = [u];
            }
            getName() {
              let { stack: u } = this, { length: i } = u;
              return i > 1 ? u[i - 2] : null;
            }
            getValue() {
              return t8(this.stack);
            }
            getNode() {
              let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return s(this, u);
            }
            getParentNode() {
              let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              return s(this, u + 1);
            }
            call(u) {
              let { stack: i } = this, { length: l } = i, p = t8(i);
              for (var y = arguments.length, h2 = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
                h2[g - 1] = arguments[g];
              for (let f2 of h2)
                p = p[f2], i.push(f2, p);
              let c = u(this);
              return i.length = l, c;
            }
            callParent(u) {
              let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = a(this.stack, i + 1), p = this.stack.splice(l + 1), y = u(this);
              return this.stack.push(...p), y;
            }
            each(u) {
              let { stack: i } = this, { length: l } = i, p = t8(i);
              for (var y = arguments.length, h2 = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
                h2[g - 1] = arguments[g];
              for (let c of h2)
                p = p[c], i.push(c, p);
              for (let c = 0; c < p.length; ++c)
                i.push(c, p[c]), u(this, c, p), i.length -= 2;
              i.length = l;
            }
            map(u) {
              let i = [];
              for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), y = 1; y < l; y++)
                p[y - 1] = arguments[y];
              return this.each((h2, g, c) => {
                i[g] = u(h2, g, c);
              }, ...p), i;
            }
            try(u) {
              let { stack: i } = this, l = [...i];
              try {
                return u();
              } finally {
                i.length = 0, i.push(...l);
              }
            }
            match() {
              let u = this.stack.length - 1, i = null, l = this.stack[u--];
              for (var p = arguments.length, y = new Array(p), h2 = 0; h2 < p; h2++)
                y[h2] = arguments[h2];
              for (let g of y) {
                if (l === void 0)
                  return false;
                let c = null;
                if (typeof i == "number" && (c = i, i = this.stack[u--], l = this.stack[u--]), g && !g(l, i, c))
                  return false;
                i = this.stack[u--], l = this.stack[u--];
              }
              return true;
            }
            findAncestor(u) {
              let i = this.stack.length - 1, l = null, p = this.stack[i--];
              for (; p; ) {
                let y = null;
                if (typeof l == "number" && (y = l, l = this.stack[i--], p = this.stack[i--]), l !== null && u(p, l, y))
                  return p;
                l = this.stack[i--], p = this.stack[i--];
              }
            }
          };
          r.exports = n;
        } }), Vm = te2({ "src/main/multiparser.js"(e, r) {
          ne2();
          var { utils: { stripTrailingHardline: t8 } } = qe2(), { normalize: s } = uo2(), a = et2();
          function n(i, l, p, y) {
            if (p.printer.embed && p.embeddedLanguageFormatting === "auto")
              return p.printer.embed(i, l, (h2, g, c) => u(h2, g, p, y, c), p);
          }
          function u(i, l, p, y) {
            let { stripTrailingHardline: h2 = false } = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, g = s(Object.assign(Object.assign(Object.assign({}, p), l), {}, { parentParser: p.parser, originalText: i }), { passThrough: true }), c = tu().parse(i, g), { ast: f2 } = c;
            i = c.text;
            let F2 = f2.comments;
            delete f2.comments, a.attach(F2, f2, i, g), g[Symbol.for("comments")] = F2 || [], g[Symbol.for("tokens")] = f2.tokens || [];
            let _ = y(f2, g);
            return a.ensureAllCommentsPrinted(F2), h2 ? typeof _ == "string" ? _.replace(/(?:\r?\n)*$/, "") : t8(_) : _;
          }
          r.exports = { printSubtree: n };
        } }), Wm = te2({ "src/main/ast-to-doc.js"(e, r) {
          ne2();
          var t8 = $m(), { builders: { hardline: s, addAlignmentToDoc: a }, utils: { propagateBreaks: n } } = qe2(), { printComments: u } = et2(), i = Vm();
          function l(h2, g) {
            let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, { printer: f2 } = g;
            f2.preprocess && (h2 = f2.preprocess(h2, g));
            let F2 = /* @__PURE__ */ new Map(), _ = new t8(h2), w = E2();
            return c > 0 && (w = a([s, w], c, g.tabWidth)), n(w), w;
            function E2(x2, I2) {
              return x2 === void 0 || x2 === _ ? N2(I2) : Array.isArray(x2) ? _.call(() => N2(I2), ...x2) : _.call(() => N2(I2), x2);
            }
            function N2(x2) {
              let I2 = _.getValue(), P = I2 && typeof I2 == "object" && x2 === void 0;
              if (P && F2.has(I2))
                return F2.get(I2);
              let $ = y(_, g, E2, x2);
              return P && F2.set(I2, $), $;
            }
          }
          function p(h2, g) {
            let { originalText: c, [Symbol.for("comments")]: f2, locStart: F2, locEnd: _ } = g, w = F2(h2), E2 = _(h2), N2 = /* @__PURE__ */ new Set();
            for (let x2 of f2)
              F2(x2) >= w && _(x2) <= E2 && (x2.printed = true, N2.add(x2));
            return { doc: c.slice(w, E2), printedComments: N2 };
          }
          function y(h2, g, c, f2) {
            let F2 = h2.getValue(), { printer: _ } = g, w, E2;
            if (_.hasPrettierIgnore && _.hasPrettierIgnore(h2))
              ({ doc: w, printedComments: E2 } = p(F2, g));
            else {
              if (F2)
                try {
                  w = i.printSubtree(h2, c, g, l);
                } catch (N2) {
                  if (globalThis.PRETTIER_DEBUG)
                    throw N2;
                }
              w || (w = _.print(h2, g, c, f2));
            }
            return (!_.willPrintOwnComments || !_.willPrintOwnComments(h2, g)) && (w = u(h2, w, g, E2)), w;
          }
          r.exports = l;
        } }), Hm = te2({ "src/main/range-util.js"(e, r) {
          ne2();
          var t8 = Zt2(), s = et2(), a = (f2) => {
            let { parser: F2 } = f2;
            return F2 === "json" || F2 === "json5" || F2 === "json-stringify";
          };
          function n(f2, F2) {
            let _ = [f2.node, ...f2.parentNodes], w = /* @__PURE__ */ new Set([F2.node, ...F2.parentNodes]);
            return _.find((E2) => y.has(E2.type) && w.has(E2));
          }
          function u(f2) {
            let F2 = f2.length - 1;
            for (; ; ) {
              let _ = f2[F2];
              if (_ && (_.type === "Program" || _.type === "File"))
                F2--;
              else
                break;
            }
            return f2.slice(0, F2 + 1);
          }
          function i(f2, F2, _) {
            let { locStart: w, locEnd: E2 } = _, N2 = f2.node, x2 = F2.node;
            if (N2 === x2)
              return { startNode: N2, endNode: x2 };
            let I2 = w(f2.node);
            for (let $ of u(F2.parentNodes))
              if (w($) >= I2)
                x2 = $;
              else
                break;
            let P = E2(F2.node);
            for (let $ of u(f2.parentNodes)) {
              if (E2($) <= P)
                N2 = $;
              else
                break;
              if (N2 === x2)
                break;
            }
            return { startNode: N2, endNode: x2 };
          }
          function l(f2, F2, _, w) {
            let E2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], N2 = arguments.length > 5 ? arguments[5] : void 0, { locStart: x2, locEnd: I2 } = _, P = x2(f2), $ = I2(f2);
            if (!(F2 > $ || F2 < P || N2 === "rangeEnd" && F2 === P || N2 === "rangeStart" && F2 === $)) {
              for (let D of s.getSortedChildNodes(f2, _)) {
                let T2 = l(D, F2, _, w, [f2, ...E2], N2);
                if (T2)
                  return T2;
              }
              if (!w || w(f2, E2[0]))
                return { node: f2, parentNodes: E2 };
            }
          }
          function p(f2, F2) {
            return F2 !== "DeclareExportDeclaration" && f2 !== "TypeParameterDeclaration" && (f2 === "Directive" || f2 === "TypeAlias" || f2 === "TSExportAssignment" || f2.startsWith("Declare") || f2.startsWith("TSDeclare") || f2.endsWith("Statement") || f2.endsWith("Declaration"));
          }
          var y = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), h2 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
          function g(f2, F2, _) {
            if (!F2)
              return false;
            switch (f2.parser) {
              case "flow":
              case "babel":
              case "babel-flow":
              case "babel-ts":
              case "typescript":
              case "acorn":
              case "espree":
              case "meriyah":
              case "__babel_estree":
                return p(F2.type, _ && _.type);
              case "json":
              case "json5":
              case "json-stringify":
                return y.has(F2.type);
              case "graphql":
                return h2.has(F2.kind);
              case "vue":
                return F2.tag !== "root";
            }
            return false;
          }
          function c(f2, F2, _) {
            let { rangeStart: w, rangeEnd: E2, locStart: N2, locEnd: x2 } = F2;
            t8.ok(E2 > w);
            let I2 = f2.slice(w, E2).search(/\S/), P = I2 === -1;
            if (!P)
              for (w += I2; E2 > w && !/\S/.test(f2[E2 - 1]); --E2)
                ;
            let $ = l(_, w, F2, (C, o) => g(F2, C, o), [], "rangeStart"), D = P ? $ : l(_, E2, F2, (C) => g(F2, C), [], "rangeEnd");
            if (!$ || !D)
              return { rangeStart: 0, rangeEnd: 0 };
            let T2, m;
            if (a(F2)) {
              let C = n($, D);
              T2 = C, m = C;
            } else
              ({ startNode: T2, endNode: m } = i($, D, F2));
            return { rangeStart: Math.min(N2(T2), N2(m)), rangeEnd: Math.max(x2(T2), x2(m)) };
          }
          r.exports = { calculateRange: c, findNodeAtOffset: l };
        } }), Gm = te2({ "src/main/core.js"(e, r) {
          ne2();
          var { diffArrays: t8 } = BD(), { printer: { printDocToString: s }, debug: { printDocToDebug: a } } = qe2(), { getAlignmentSize: n } = Ue2(), { guessEndOfLine: u, convertEndOfLineToChars: i, countEndOfLineChars: l, normalizeEndOfLine: p } = Jn2(), y = uo2().normalize, h2 = Rm(), g = et2(), c = tu(), f2 = Wm(), F2 = Hm(), _ = "\uFEFF", w = Symbol("cursor");
          function E2(m, C, o) {
            let d = C.comments;
            return d && (delete C.comments, g.attach(d, C, m, o)), o[Symbol.for("comments")] = d || [], o[Symbol.for("tokens")] = C.tokens || [], o.originalText = m, d;
          }
          function N2(m, C) {
            let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            if (!m || m.trim().length === 0)
              return { formatted: "", cursorOffset: -1, comments: [] };
            let { ast: d, text: v2 } = c.parse(m, C);
            if (C.cursorOffset >= 0) {
              let k2 = F2.findNodeAtOffset(d, C.cursorOffset, C);
              k2 && k2.node && (C.cursorNode = k2.node);
            }
            let S2 = E2(v2, d, C), b2 = f2(d, C, o), B = s(b2, C);
            if (g.ensureAllCommentsPrinted(S2), o > 0) {
              let k2 = B.formatted.trim();
              B.cursorNodeStart !== void 0 && (B.cursorNodeStart -= B.formatted.indexOf(k2)), B.formatted = k2 + i(C.endOfLine);
            }
            if (C.cursorOffset >= 0) {
              let k2, M, R2, q, J2;
              if (C.cursorNode && B.cursorNodeText ? (k2 = C.locStart(C.cursorNode), M = v2.slice(k2, C.locEnd(C.cursorNode)), R2 = C.cursorOffset - k2, q = B.cursorNodeStart, J2 = B.cursorNodeText) : (k2 = 0, M = v2, R2 = C.cursorOffset, q = 0, J2 = B.formatted), M === J2)
                return { formatted: B.formatted, cursorOffset: q + R2, comments: S2 };
              let L2 = [...M];
              L2.splice(R2, 0, w);
              let Q2 = [...J2], V2 = t8(L2, Q2), j2 = q;
              for (let Y2 of V2)
                if (Y2.removed) {
                  if (Y2.value.includes(w))
                    break;
                } else
                  j2 += Y2.count;
              return { formatted: B.formatted, cursorOffset: j2, comments: S2 };
            }
            return { formatted: B.formatted, cursorOffset: -1, comments: S2 };
          }
          function x2(m, C) {
            let { ast: o, text: d } = c.parse(m, C), { rangeStart: v2, rangeEnd: S2 } = F2.calculateRange(d, C, o), b2 = d.slice(v2, S2), B = Math.min(v2, d.lastIndexOf(`
`, v2) + 1), k2 = d.slice(B, v2).match(/^\s*/)[0], M = n(k2, C.tabWidth), R2 = N2(b2, Object.assign(Object.assign({}, C), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: C.cursorOffset > v2 && C.cursorOffset <= S2 ? C.cursorOffset - v2 : -1, endOfLine: "lf" }), M), q = R2.formatted.trimEnd(), { cursorOffset: J2 } = C;
            J2 > S2 ? J2 += q.length - b2.length : R2.cursorOffset >= 0 && (J2 = R2.cursorOffset + v2);
            let L2 = d.slice(0, v2) + q + d.slice(S2);
            if (C.endOfLine !== "lf") {
              let Q2 = i(C.endOfLine);
              J2 >= 0 && Q2 === `\r
` && (J2 += l(L2.slice(0, J2), `
`)), L2 = L2.replace(/\n/g, Q2);
            }
            return { formatted: L2, cursorOffset: J2, comments: R2.comments };
          }
          function I2(m, C, o) {
            return typeof C != "number" || Number.isNaN(C) || C < 0 || C > m.length ? o : C;
          }
          function P(m, C) {
            let { cursorOffset: o, rangeStart: d, rangeEnd: v2 } = C;
            return o = I2(m, o, -1), d = I2(m, d, 0), v2 = I2(m, v2, m.length), Object.assign(Object.assign({}, C), {}, { cursorOffset: o, rangeStart: d, rangeEnd: v2 });
          }
          function $(m, C) {
            let { cursorOffset: o, rangeStart: d, rangeEnd: v2, endOfLine: S2 } = P(m, C), b2 = m.charAt(0) === _;
            if (b2 && (m = m.slice(1), o--, d--, v2--), S2 === "auto" && (S2 = u(m)), m.includes("\r")) {
              let B = (k2) => l(m.slice(0, Math.max(k2, 0)), `\r
`);
              o -= B(o), d -= B(d), v2 -= B(v2), m = p(m);
            }
            return { hasBOM: b2, text: m, options: P(m, Object.assign(Object.assign({}, C), {}, { cursorOffset: o, rangeStart: d, rangeEnd: v2, endOfLine: S2 })) };
          }
          function D(m, C) {
            let o = c.resolveParser(C);
            return !o.hasPragma || o.hasPragma(m);
          }
          function T2(m, C) {
            let { hasBOM: o, text: d, options: v2 } = $(m, y(C));
            if (v2.rangeStart >= v2.rangeEnd && d !== "" || v2.requirePragma && !D(d, v2))
              return { formatted: m, cursorOffset: C.cursorOffset, comments: [] };
            let S2;
            return v2.rangeStart > 0 || v2.rangeEnd < d.length ? S2 = x2(d, v2) : (!v2.requirePragma && v2.insertPragma && v2.printer.insertPragma && !D(d, v2) && (d = v2.printer.insertPragma(d)), S2 = N2(d, v2)), o && (S2.formatted = _ + S2.formatted, S2.cursorOffset >= 0 && S2.cursorOffset++), S2;
          }
          r.exports = { formatWithCursor: T2, parse(m, C, o) {
            let { text: d, options: v2 } = $(m, y(C)), S2 = c.parse(d, v2);
            return o && (S2.ast = h2(S2.ast, v2)), S2;
          }, formatAST(m, C) {
            C = y(C);
            let o = f2(m, C);
            return s(o, C);
          }, formatDoc(m, C) {
            return T2(a(m), Object.assign(Object.assign({}, C), {}, { parser: "__js_expression" })).formatted;
          }, printToDoc(m, C) {
            C = y(C);
            let { ast: o, text: d } = c.parse(m, C);
            return E2(d, o, C), f2(o, C);
          }, printDocToString(m, C) {
            return s(m, y(C));
          } };
        } }), Um = te2({ "src/common/util-shared.js"(e, r) {
          ne2();
          var { getMaxContinuousCount: t8, getStringWidth: s, getAlignmentSize: a, getIndentSize: n, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: p, skipToLineEnd: y, skipEverythingButNewLine: h2, skipInlineComment: g, skipTrailingComment: c, hasNewline: f2, hasNewlineInRange: F2, hasSpaces: _, isNextLineEmpty: w, isNextLineEmptyAfterIndex: E2, isPreviousLineEmpty: N2, getNextNonSpaceNonCommentCharacterIndex: x2, makeString: I2, addLeadingComment: P, addDanglingComment: $, addTrailingComment: D } = Ue2();
          r.exports = { getMaxContinuousCount: t8, getStringWidth: s, getAlignmentSize: a, getIndentSize: n, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: p, skipToLineEnd: y, skipEverythingButNewLine: h2, skipInlineComment: g, skipTrailingComment: c, hasNewline: f2, hasNewlineInRange: F2, hasSpaces: _, isNextLineEmpty: w, isNextLineEmptyAfterIndex: E2, isPreviousLineEmpty: N2, getNextNonSpaceNonCommentCharacterIndex: x2, makeString: I2, addLeadingComment: P, addDanglingComment: $, addTrailingComment: D };
        } }), _t2 = te2({ "src/utils/create-language.js"(e, r) {
          ne2(), r.exports = function(t8, s) {
            let { languageId: a } = t8, n = Hn2(t8, CD);
            return Object.assign(Object.assign({ linguistLanguageId: a }, n), s(t8));
          };
        } }), Jm = te2({ "node_modules/esutils/lib/ast.js"(e, r) {
          ne2(), function() {
            function t8(l) {
              if (l == null)
                return false;
              switch (l.type) {
                case "ArrayExpression":
                case "AssignmentExpression":
                case "BinaryExpression":
                case "CallExpression":
                case "ConditionalExpression":
                case "FunctionExpression":
                case "Identifier":
                case "Literal":
                case "LogicalExpression":
                case "MemberExpression":
                case "NewExpression":
                case "ObjectExpression":
                case "SequenceExpression":
                case "ThisExpression":
                case "UnaryExpression":
                case "UpdateExpression":
                  return true;
              }
              return false;
            }
            function s(l) {
              if (l == null)
                return false;
              switch (l.type) {
                case "DoWhileStatement":
                case "ForInStatement":
                case "ForStatement":
                case "WhileStatement":
                  return true;
              }
              return false;
            }
            function a(l) {
              if (l == null)
                return false;
              switch (l.type) {
                case "BlockStatement":
                case "BreakStatement":
                case "ContinueStatement":
                case "DebuggerStatement":
                case "DoWhileStatement":
                case "EmptyStatement":
                case "ExpressionStatement":
                case "ForInStatement":
                case "ForStatement":
                case "IfStatement":
                case "LabeledStatement":
                case "ReturnStatement":
                case "SwitchStatement":
                case "ThrowStatement":
                case "TryStatement":
                case "VariableDeclaration":
                case "WhileStatement":
                case "WithStatement":
                  return true;
              }
              return false;
            }
            function n(l) {
              return a(l) || l != null && l.type === "FunctionDeclaration";
            }
            function u(l) {
              switch (l.type) {
                case "IfStatement":
                  return l.alternate != null ? l.alternate : l.consequent;
                case "LabeledStatement":
                case "ForStatement":
                case "ForInStatement":
                case "WhileStatement":
                case "WithStatement":
                  return l.body;
              }
              return null;
            }
            function i(l) {
              var p;
              if (l.type !== "IfStatement" || l.alternate == null)
                return false;
              p = l.consequent;
              do {
                if (p.type === "IfStatement" && p.alternate == null)
                  return true;
                p = u(p);
              } while (p);
              return false;
            }
            r.exports = { isExpression: t8, isStatement: a, isIterationStatement: s, isSourceElement: n, isProblematicIfStatement: i, trailingStatement: u };
          }();
        } }), so2 = te2({ "node_modules/esutils/lib/code.js"(e, r) {
          ne2(), function() {
            var t8, s, a, n, u, i;
            s = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t8 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
            function l(E2) {
              return 48 <= E2 && E2 <= 57;
            }
            function p(E2) {
              return 48 <= E2 && E2 <= 57 || 97 <= E2 && E2 <= 102 || 65 <= E2 && E2 <= 70;
            }
            function y(E2) {
              return E2 >= 48 && E2 <= 55;
            }
            a = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
            function h2(E2) {
              return E2 === 32 || E2 === 9 || E2 === 11 || E2 === 12 || E2 === 160 || E2 >= 5760 && a.indexOf(E2) >= 0;
            }
            function g(E2) {
              return E2 === 10 || E2 === 13 || E2 === 8232 || E2 === 8233;
            }
            function c(E2) {
              if (E2 <= 65535)
                return String.fromCharCode(E2);
              var N2 = String.fromCharCode(Math.floor((E2 - 65536) / 1024) + 55296), x2 = String.fromCharCode((E2 - 65536) % 1024 + 56320);
              return N2 + x2;
            }
            for (n = new Array(128), i = 0; i < 128; ++i)
              n[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i === 36 || i === 95;
            for (u = new Array(128), i = 0; i < 128; ++i)
              u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 36 || i === 95;
            function f2(E2) {
              return E2 < 128 ? n[E2] : s.NonAsciiIdentifierStart.test(c(E2));
            }
            function F2(E2) {
              return E2 < 128 ? u[E2] : s.NonAsciiIdentifierPart.test(c(E2));
            }
            function _(E2) {
              return E2 < 128 ? n[E2] : t8.NonAsciiIdentifierStart.test(c(E2));
            }
            function w(E2) {
              return E2 < 128 ? u[E2] : t8.NonAsciiIdentifierPart.test(c(E2));
            }
            r.exports = { isDecimalDigit: l, isHexDigit: p, isOctalDigit: y, isWhiteSpace: h2, isLineTerminator: g, isIdentifierStartES5: f2, isIdentifierPartES5: F2, isIdentifierStartES6: _, isIdentifierPartES6: w };
          }();
        } }), zm = te2({ "node_modules/esutils/lib/keyword.js"(e, r) {
          ne2(), function() {
            var t8 = so2();
            function s(f2) {
              switch (f2) {
                case "implements":
                case "interface":
                case "package":
                case "private":
                case "protected":
                case "public":
                case "static":
                case "let":
                  return true;
                default:
                  return false;
              }
            }
            function a(f2, F2) {
              return !F2 && f2 === "yield" ? false : n(f2, F2);
            }
            function n(f2, F2) {
              if (F2 && s(f2))
                return true;
              switch (f2.length) {
                case 2:
                  return f2 === "if" || f2 === "in" || f2 === "do";
                case 3:
                  return f2 === "var" || f2 === "for" || f2 === "new" || f2 === "try";
                case 4:
                  return f2 === "this" || f2 === "else" || f2 === "case" || f2 === "void" || f2 === "with" || f2 === "enum";
                case 5:
                  return f2 === "while" || f2 === "break" || f2 === "catch" || f2 === "throw" || f2 === "const" || f2 === "yield" || f2 === "class" || f2 === "super";
                case 6:
                  return f2 === "return" || f2 === "typeof" || f2 === "delete" || f2 === "switch" || f2 === "export" || f2 === "import";
                case 7:
                  return f2 === "default" || f2 === "finally" || f2 === "extends";
                case 8:
                  return f2 === "function" || f2 === "continue" || f2 === "debugger";
                case 10:
                  return f2 === "instanceof";
                default:
                  return false;
              }
            }
            function u(f2, F2) {
              return f2 === "null" || f2 === "true" || f2 === "false" || a(f2, F2);
            }
            function i(f2, F2) {
              return f2 === "null" || f2 === "true" || f2 === "false" || n(f2, F2);
            }
            function l(f2) {
              return f2 === "eval" || f2 === "arguments";
            }
            function p(f2) {
              var F2, _, w;
              if (f2.length === 0 || (w = f2.charCodeAt(0), !t8.isIdentifierStartES5(w)))
                return false;
              for (F2 = 1, _ = f2.length; F2 < _; ++F2)
                if (w = f2.charCodeAt(F2), !t8.isIdentifierPartES5(w))
                  return false;
              return true;
            }
            function y(f2, F2) {
              return (f2 - 55296) * 1024 + (F2 - 56320) + 65536;
            }
            function h2(f2) {
              var F2, _, w, E2, N2;
              if (f2.length === 0)
                return false;
              for (N2 = t8.isIdentifierStartES6, F2 = 0, _ = f2.length; F2 < _; ++F2) {
                if (w = f2.charCodeAt(F2), 55296 <= w && w <= 56319) {
                  if (++F2, F2 >= _ || (E2 = f2.charCodeAt(F2), !(56320 <= E2 && E2 <= 57343)))
                    return false;
                  w = y(w, E2);
                }
                if (!N2(w))
                  return false;
                N2 = t8.isIdentifierPartES6;
              }
              return true;
            }
            function g(f2, F2) {
              return p(f2) && !u(f2, F2);
            }
            function c(f2, F2) {
              return h2(f2) && !i(f2, F2);
            }
            r.exports = { isKeywordES5: a, isKeywordES6: n, isReservedWordES5: u, isReservedWordES6: i, isRestrictedWord: l, isIdentifierNameES5: p, isIdentifierNameES6: h2, isIdentifierES5: g, isIdentifierES6: c };
          }();
        } }), Xm = te2({ "node_modules/esutils/lib/utils.js"(e) {
          ne2(), function() {
            e.ast = Jm(), e.code = so2(), e.keyword = zm();
          }();
        } }), Pt2 = te2({ "src/language-js/utils/is-block-comment.js"(e, r) {
          ne2();
          var t8 = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), s = (a) => t8.has(a == null ? void 0 : a.type);
          r.exports = s;
        } }), Km = te2({ "src/language-js/utils/is-node-matches.js"(e, r) {
          ne2();
          function t8(a, n) {
            let u = n.split(".");
            for (let i = u.length - 1; i >= 0; i--) {
              let l = u[i];
              if (i === 0)
                return a.type === "Identifier" && a.name === l;
              if (a.type !== "MemberExpression" || a.optional || a.computed || a.property.type !== "Identifier" || a.property.name !== l)
                return false;
              a = a.object;
            }
          }
          function s(a, n) {
            return n.some((u) => t8(a, u));
          }
          r.exports = s;
        } }), Ke2 = te2({ "src/language-js/utils/index.js"(e, r) {
          ne2();
          var t8 = Xm().keyword.isIdentifierNameES5, { getLast: s, hasNewline: a, skipWhitespace: n, isNonEmptyArray: u, isNextLineEmptyAfterIndex: i, getStringWidth: l } = Ue2(), { locStart: p, locEnd: y, hasSameLocStart: h2 } = ut2(), g = Pt2(), c = Km(), f2 = "(?:(?=.)\\s)", F2 = new RegExp(`^${f2}*:`), _ = new RegExp(`^${f2}*::`);
          function w(O2) {
            var me2, _e2;
            return ((me2 = O2.extra) === null || me2 === void 0 ? void 0 : me2.parenthesized) && g((_e2 = O2.trailingComments) === null || _e2 === void 0 ? void 0 : _e2[0]) && F2.test(O2.trailingComments[0].value);
          }
          function E2(O2) {
            let me2 = O2 == null ? void 0 : O2[0];
            return g(me2) && _.test(me2.value);
          }
          function N2(O2, me2) {
            if (!O2 || typeof O2 != "object")
              return false;
            if (Array.isArray(O2))
              return O2.some((He2) => N2(He2, me2));
            let _e2 = me2(O2);
            return typeof _e2 == "boolean" ? _e2 : Object.values(O2).some((He2) => N2(He2, me2));
          }
          function x2(O2) {
            return O2.type === "AssignmentExpression" || O2.type === "BinaryExpression" || O2.type === "LogicalExpression" || O2.type === "NGPipeExpression" || O2.type === "ConditionalExpression" || de2(O2) || ue2(O2) || O2.type === "SequenceExpression" || O2.type === "TaggedTemplateExpression" || O2.type === "BindExpression" || O2.type === "UpdateExpression" && !O2.prefix || st2(O2) || O2.type === "TSNonNullExpression";
          }
          function I2(O2) {
            var me2, _e2, He2, Ge2, it2, Qe2;
            return O2.expressions ? O2.expressions[0] : (me2 = (_e2 = (He2 = (Ge2 = (it2 = (Qe2 = O2.left) !== null && Qe2 !== void 0 ? Qe2 : O2.test) !== null && it2 !== void 0 ? it2 : O2.callee) !== null && Ge2 !== void 0 ? Ge2 : O2.object) !== null && He2 !== void 0 ? He2 : O2.tag) !== null && _e2 !== void 0 ? _e2 : O2.argument) !== null && me2 !== void 0 ? me2 : O2.expression;
          }
          function P(O2, me2) {
            if (me2.expressions)
              return ["expressions", 0];
            if (me2.left)
              return ["left"];
            if (me2.test)
              return ["test"];
            if (me2.object)
              return ["object"];
            if (me2.callee)
              return ["callee"];
            if (me2.tag)
              return ["tag"];
            if (me2.argument)
              return ["argument"];
            if (me2.expression)
              return ["expression"];
            throw new Error("Unexpected node has no left side.");
          }
          function $(O2) {
            return O2 = new Set(O2), (me2) => O2.has(me2 == null ? void 0 : me2.type);
          }
          var D = $(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), T2 = $(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
          function m(O2) {
            let me2 = O2.getParentNode();
            return O2.getName() === "declaration" && T2(me2) ? me2 : null;
          }
          var C = $(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
          function o(O2) {
            return O2.type === "NumericLiteral" || O2.type === "Literal" && typeof O2.value == "number";
          }
          function d(O2) {
            return O2.type === "UnaryExpression" && (O2.operator === "+" || O2.operator === "-") && o(O2.argument);
          }
          function v2(O2) {
            return O2.type === "StringLiteral" || O2.type === "Literal" && typeof O2.value == "string";
          }
          var S2 = $(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), b2 = $(["FunctionExpression", "ArrowFunctionExpression"]);
          function B(O2) {
            return O2.type === "FunctionExpression" || O2.type === "ArrowFunctionExpression" && O2.body.type === "BlockStatement";
          }
          function k2(O2) {
            return de2(O2) && O2.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(O2.callee.name);
          }
          var M = $(["JSXElement", "JSXFragment"]);
          function R2(O2, me2) {
            if (O2.parentParser !== "markdown" && O2.parentParser !== "mdx")
              return false;
            let _e2 = me2.getNode();
            if (!_e2.expression || !M(_e2.expression))
              return false;
            let He2 = me2.getParentNode();
            return He2.type === "Program" && He2.body.length === 1;
          }
          function q(O2) {
            return O2.kind === "get" || O2.kind === "set";
          }
          function J2(O2) {
            return q(O2) || h2(O2, O2.value);
          }
          function L2(O2) {
            return (O2.type === "ObjectTypeProperty" || O2.type === "ObjectTypeInternalSlot") && O2.value.type === "FunctionTypeAnnotation" && !O2.static && !J2(O2);
          }
          function Q2(O2) {
            return (O2.type === "TypeAnnotation" || O2.type === "TSTypeAnnotation") && O2.typeAnnotation.type === "FunctionTypeAnnotation" && !O2.static && !h2(O2, O2.typeAnnotation);
          }
          var V2 = $(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
          function j2(O2) {
            return ue2(O2) || O2.type === "BindExpression" && Boolean(O2.object);
          }
          var Y2 = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
          function ie2(O2) {
            return O2 ? !!((O2.type === "GenericTypeAnnotation" || O2.type === "TSTypeReference") && !O2.typeParameters || Y2.has(O2.type)) : false;
          }
          function ee2(O2) {
            let me2 = /^(?:before|after)(?:Each|All)$/;
            return O2.callee.type === "Identifier" && me2.test(O2.callee.name) && O2.arguments.length === 1;
          }
          var ce2 = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
          function W2(O2) {
            return c(O2, ce2);
          }
          function K2(O2, me2) {
            if (O2.type !== "CallExpression")
              return false;
            if (O2.arguments.length === 1) {
              if (k2(O2) && me2 && K2(me2))
                return b2(O2.arguments[0]);
              if (ee2(O2))
                return k2(O2.arguments[0]);
            } else if ((O2.arguments.length === 2 || O2.arguments.length === 3) && (O2.arguments[0].type === "TemplateLiteral" || v2(O2.arguments[0])) && W2(O2.callee))
              return O2.arguments[2] && !o(O2.arguments[2]) ? false : (O2.arguments.length === 2 ? b2(O2.arguments[1]) : B(O2.arguments[1]) && ve2(O2.arguments[1]).length <= 1) || k2(O2.arguments[1]);
            return false;
          }
          var de2 = $(["CallExpression", "OptionalCallExpression"]), ue2 = $(["MemberExpression", "OptionalMemberExpression"]);
          function Fe2(O2) {
            let me2 = "expressions";
            O2.type === "TSTemplateLiteralType" && (me2 = "types");
            let _e2 = O2[me2];
            return _e2.length === 0 ? false : _e2.every((He2) => {
              if (Me2(He2))
                return false;
              if (He2.type === "Identifier" || He2.type === "ThisExpression")
                return true;
              if (ue2(He2)) {
                let Ge2 = He2;
                for (; ue2(Ge2); )
                  if (Ge2.property.type !== "Identifier" && Ge2.property.type !== "Literal" && Ge2.property.type !== "StringLiteral" && Ge2.property.type !== "NumericLiteral" || (Ge2 = Ge2.object, Me2(Ge2)))
                    return false;
                return Ge2.type === "Identifier" || Ge2.type === "ThisExpression";
              }
              return false;
            });
          }
          function z2(O2, me2) {
            return O2 === "+" || O2 === "-" ? O2 + me2 : me2;
          }
          function U2(O2, me2) {
            let _e2 = p(me2), He2 = n(O2, y(me2));
            return He2 !== false && O2.slice(_e2, _e2 + 2) === "/*" && O2.slice(He2, He2 + 2) === "*/";
          }
          function Z(O2, me2) {
            return M(me2) ? Oe2(me2) : Me2(me2, Te2.Leading, (_e2) => a(O2, y(_e2)));
          }
          function se2(O2, me2) {
            return me2.parser !== "json" && v2(O2.key) && oe2(O2.key).slice(1, -1) === O2.key.value && (t8(O2.key.value) && !(me2.parser === "babel-ts" && O2.type === "ClassProperty" || me2.parser === "typescript" && O2.type === "PropertyDefinition") || fe2(O2.key.value) && String(Number(O2.key.value)) === O2.key.value && (me2.parser === "babel" || me2.parser === "acorn" || me2.parser === "espree" || me2.parser === "meriyah" || me2.parser === "__babel_estree"));
          }
          function fe2(O2) {
            return /^(?:\d+|\d+\.\d+)$/.test(O2);
          }
          function ge2(O2, me2) {
            let _e2 = /^[fx]?(?:describe|it|test)$/;
            return me2.type === "TaggedTemplateExpression" && me2.quasi === O2 && me2.tag.type === "MemberExpression" && me2.tag.property.type === "Identifier" && me2.tag.property.name === "each" && (me2.tag.object.type === "Identifier" && _e2.test(me2.tag.object.name) || me2.tag.object.type === "MemberExpression" && me2.tag.object.property.type === "Identifier" && (me2.tag.object.property.name === "only" || me2.tag.object.property.name === "skip") && me2.tag.object.object.type === "Identifier" && _e2.test(me2.tag.object.object.name));
          }
          function he2(O2) {
            return O2.quasis.some((me2) => me2.value.raw.includes(`
`));
          }
          function we2(O2, me2) {
            return (O2.type === "TemplateLiteral" && he2(O2) || O2.type === "TaggedTemplateExpression" && he2(O2.quasi)) && !a(me2, p(O2), { backwards: true });
          }
          function ke2(O2) {
            if (!Me2(O2))
              return false;
            let me2 = s(ae(O2, Te2.Dangling));
            return me2 && !g(me2);
          }
          function Re2(O2) {
            if (O2.length <= 1)
              return false;
            let me2 = 0;
            for (let _e2 of O2)
              if (b2(_e2)) {
                if (me2 += 1, me2 > 1)
                  return true;
              } else if (de2(_e2)) {
                for (let He2 of _e2.arguments)
                  if (b2(He2))
                    return true;
              }
            return false;
          }
          function Ne2(O2) {
            let me2 = O2.getValue(), _e2 = O2.getParentNode();
            return de2(me2) && de2(_e2) && _e2.callee === me2 && me2.arguments.length > _e2.arguments.length && _e2.arguments.length > 0;
          }
          function Pe2(O2, me2) {
            if (me2 >= 2)
              return false;
            let _e2 = (Qe2) => Pe2(Qe2, me2 + 1), He2 = O2.type === "Literal" && "regex" in O2 && O2.regex.pattern || O2.type === "RegExpLiteral" && O2.pattern;
            if (He2 && l(He2) > 5)
              return false;
            if (O2.type === "Literal" || O2.type === "BigIntLiteral" || O2.type === "DecimalLiteral" || O2.type === "BooleanLiteral" || O2.type === "NullLiteral" || O2.type === "NumericLiteral" || O2.type === "RegExpLiteral" || O2.type === "StringLiteral" || O2.type === "Identifier" || O2.type === "ThisExpression" || O2.type === "Super" || O2.type === "PrivateName" || O2.type === "PrivateIdentifier" || O2.type === "ArgumentPlaceholder" || O2.type === "Import")
              return true;
            if (O2.type === "TemplateLiteral")
              return O2.quasis.every((Qe2) => !Qe2.value.raw.includes(`
`)) && O2.expressions.every(_e2);
            if (O2.type === "ObjectExpression")
              return O2.properties.every((Qe2) => !Qe2.computed && (Qe2.shorthand || Qe2.value && _e2(Qe2.value)));
            if (O2.type === "ArrayExpression")
              return O2.elements.every((Qe2) => Qe2 === null || _e2(Qe2));
            if (tt2(O2))
              return (O2.type === "ImportExpression" || Pe2(O2.callee, me2)) && Ye2(O2).every(_e2);
            if (ue2(O2))
              return Pe2(O2.object, me2) && Pe2(O2.property, me2);
            let Ge2 = { "!": true, "-": true, "+": true, "~": true };
            if (O2.type === "UnaryExpression" && Ge2[O2.operator])
              return Pe2(O2.argument, me2);
            let it2 = { "++": true, "--": true };
            return O2.type === "UpdateExpression" && it2[O2.operator] ? Pe2(O2.argument, me2) : O2.type === "TSNonNullExpression" ? Pe2(O2.expression, me2) : false;
          }
          function oe2(O2) {
            var me2, _e2;
            return (me2 = (_e2 = O2.extra) === null || _e2 === void 0 ? void 0 : _e2.raw) !== null && me2 !== void 0 ? me2 : O2.raw;
          }
          function H2(O2) {
            return O2;
          }
          function pe2(O2) {
            return O2.filepath && /\.tsx$/i.test(O2.filepath);
          }
          function X2(O2) {
            let me2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
            return O2.trailingComma === "es5" && me2 === "es5" || O2.trailingComma === "all" && (me2 === "all" || me2 === "es5");
          }
          function le2(O2, me2) {
            switch (O2.type) {
              case "BinaryExpression":
              case "LogicalExpression":
              case "AssignmentExpression":
              case "NGPipeExpression":
                return le2(O2.left, me2);
              case "MemberExpression":
              case "OptionalMemberExpression":
                return le2(O2.object, me2);
              case "TaggedTemplateExpression":
                return O2.tag.type === "FunctionExpression" ? false : le2(O2.tag, me2);
              case "CallExpression":
              case "OptionalCallExpression":
                return O2.callee.type === "FunctionExpression" ? false : le2(O2.callee, me2);
              case "ConditionalExpression":
                return le2(O2.test, me2);
              case "UpdateExpression":
                return !O2.prefix && le2(O2.argument, me2);
              case "BindExpression":
                return O2.object && le2(O2.object, me2);
              case "SequenceExpression":
                return le2(O2.expressions[0], me2);
              case "TSSatisfiesExpression":
              case "TSAsExpression":
              case "TSNonNullExpression":
                return le2(O2.expression, me2);
              default:
                return me2(O2);
            }
          }
          var Ae2 = { "==": true, "!=": true, "===": true, "!==": true }, Ee2 = { "*": true, "/": true, "%": true }, De2 = { ">>": true, ">>>": true, "<<": true };
          function A2(O2, me2) {
            return !(re2(me2) !== re2(O2) || O2 === "**" || Ae2[O2] && Ae2[me2] || me2 === "%" && Ee2[O2] || O2 === "%" && Ee2[me2] || me2 !== O2 && Ee2[me2] && Ee2[O2] || De2[O2] && De2[me2]);
          }
          var G2 = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((O2, me2) => O2.map((_e2) => [_e2, me2])));
          function re2(O2) {
            return G2.get(O2);
          }
          function ye(O2) {
            return Boolean(De2[O2]) || O2 === "|" || O2 === "^" || O2 === "&";
          }
          function Ce2(O2) {
            var me2;
            if (O2.rest)
              return true;
            let _e2 = ve2(O2);
            return ((me2 = s(_e2)) === null || me2 === void 0 ? void 0 : me2.type) === "RestElement";
          }
          var Be2 = /* @__PURE__ */ new WeakMap();
          function ve2(O2) {
            if (Be2.has(O2))
              return Be2.get(O2);
            let me2 = [];
            return O2.this && me2.push(O2.this), Array.isArray(O2.parameters) ? me2.push(...O2.parameters) : Array.isArray(O2.params) && me2.push(...O2.params), O2.rest && me2.push(O2.rest), Be2.set(O2, me2), me2;
          }
          function ze(O2, me2) {
            let _e2 = O2.getValue(), He2 = 0, Ge2 = (it2) => me2(it2, He2++);
            _e2.this && O2.call(Ge2, "this"), Array.isArray(_e2.parameters) ? O2.each(Ge2, "parameters") : Array.isArray(_e2.params) && O2.each(Ge2, "params"), _e2.rest && O2.call(Ge2, "rest");
          }
          var be2 = /* @__PURE__ */ new WeakMap();
          function Ye2(O2) {
            if (be2.has(O2))
              return be2.get(O2);
            let me2 = O2.arguments;
            return O2.type === "ImportExpression" && (me2 = [O2.source], O2.attributes && me2.push(O2.attributes)), be2.set(O2, me2), me2;
          }
          function Se2(O2, me2) {
            let _e2 = O2.getValue();
            _e2.type === "ImportExpression" ? (O2.call((He2) => me2(He2, 0), "source"), _e2.attributes && O2.call((He2) => me2(He2, 1), "attributes")) : O2.each(me2, "arguments");
          }
          function Ie(O2) {
            return O2.value.trim() === "prettier-ignore" && !O2.unignore;
          }
          function Oe2(O2) {
            return O2 && (O2.prettierIgnore || Me2(O2, Te2.PrettierIgnore));
          }
          function Je2(O2) {
            let me2 = O2.getValue();
            return Oe2(me2);
          }
          var Te2 = { Leading: 1 << 1, Trailing: 1 << 2, Dangling: 1 << 3, Block: 1 << 4, Line: 1 << 5, PrettierIgnore: 1 << 6, First: 1 << 7, Last: 1 << 8 }, je2 = (O2, me2) => {
            if (typeof O2 == "function" && (me2 = O2, O2 = 0), O2 || me2)
              return (_e2, He2, Ge2) => !(O2 & Te2.Leading && !_e2.leading || O2 & Te2.Trailing && !_e2.trailing || O2 & Te2.Dangling && (_e2.leading || _e2.trailing) || O2 & Te2.Block && !g(_e2) || O2 & Te2.Line && !D(_e2) || O2 & Te2.First && He2 !== 0 || O2 & Te2.Last && He2 !== Ge2.length - 1 || O2 & Te2.PrettierIgnore && !Ie(_e2) || me2 && !me2(_e2));
          };
          function Me2(O2, me2, _e2) {
            if (!u(O2 == null ? void 0 : O2.comments))
              return false;
            let He2 = je2(me2, _e2);
            return He2 ? O2.comments.some(He2) : true;
          }
          function ae(O2, me2, _e2) {
            if (!Array.isArray(O2 == null ? void 0 : O2.comments))
              return [];
            let He2 = je2(me2, _e2);
            return He2 ? O2.comments.filter(He2) : O2.comments;
          }
          var nt2 = (O2, me2) => {
            let { originalText: _e2 } = me2;
            return i(_e2, y(O2));
          };
          function tt2(O2) {
            return de2(O2) || O2.type === "NewExpression" || O2.type === "ImportExpression";
          }
          function Ve2(O2) {
            return O2 && (O2.type === "ObjectProperty" || O2.type === "Property" && !O2.method && O2.kind === "init");
          }
          function We(O2) {
            return Boolean(O2.__isUsingHackPipeline);
          }
          var Xe2 = Symbol("ifWithoutBlockAndSameLineComment");
          function st2(O2) {
            return O2.type === "TSAsExpression" || O2.type === "TSSatisfiesExpression";
          }
          r.exports = { getFunctionParameters: ve2, iterateFunctionParametersPath: ze, getCallArguments: Ye2, iterateCallArgumentsPath: Se2, hasRestParameter: Ce2, getLeftSide: I2, getLeftSidePathName: P, getParentExportDeclaration: m, getTypeScriptMappedTypeModifier: z2, hasFlowAnnotationComment: E2, hasFlowShorthandAnnotationComment: w, hasLeadingOwnLineComment: Z, hasNakedLeftSide: x2, hasNode: N2, hasIgnoreComment: Je2, hasNodeIgnoreComment: Oe2, identity: H2, isBinaryish: V2, isCallLikeExpression: tt2, isEnabledHackPipeline: We, isLineComment: D, isPrettierIgnoreComment: Ie, isCallExpression: de2, isMemberExpression: ue2, isExportDeclaration: T2, isFlowAnnotationComment: U2, isFunctionCompositionArgs: Re2, isFunctionNotation: J2, isFunctionOrArrowExpression: b2, isGetterOrSetter: q, isJestEachTemplateLiteral: ge2, isJsxNode: M, isLiteral: C, isLongCurriedCallExpression: Ne2, isSimpleCallArgument: Pe2, isMemberish: j2, isNumericLiteral: o, isSignedNumericLiteral: d, isObjectProperty: Ve2, isObjectType: S2, isObjectTypePropertyAFunction: L2, isSimpleType: ie2, isSimpleNumber: fe2, isSimpleTemplateLiteral: Fe2, isStringLiteral: v2, isStringPropSafeToUnquote: se2, isTemplateOnItsOwnLine: we2, isTestCall: K2, isTheOnlyJsxElementInMarkdown: R2, isTSXFile: pe2, isTypeAnnotationAFunction: Q2, isNextLineEmpty: nt2, needsHardlineAfterDanglingComment: ke2, rawText: oe2, shouldPrintComma: X2, isBitwiseOperator: ye, shouldFlatten: A2, startsWithNoLookaheadToken: le2, getPrecedence: re2, hasComment: Me2, getComments: ae, CommentCheckFlags: Te2, markerForIfWithoutBlockAndSameLineComment: Xe2, isTSTypeExpression: st2 };
        } }), jt2 = te2({ "src/language-js/print/template-literal.js"(e, r) {
          ne2();
          var t8 = lt(), { getStringWidth: s, getIndentSize: a } = Ue2(), { builders: { join: n, hardline: u, softline: i, group: l, indent: p, align: y, lineSuffixBoundary: h2, addAlignmentToDoc: g }, printer: { printDocToString: c }, utils: { mapDoc: f2 } } = qe2(), { isBinaryish: F2, isJestEachTemplateLiteral: _, isSimpleTemplateLiteral: w, hasComment: E2, isMemberExpression: N2, isTSTypeExpression: x2 } = Ke2();
          function I2(C, o, d) {
            let v2 = C.getValue();
            if (v2.type === "TemplateLiteral" && _(v2, C.getParentNode())) {
              let R2 = P(C, d, o);
              if (R2)
                return R2;
            }
            let b2 = "expressions";
            v2.type === "TSTemplateLiteralType" && (b2 = "types");
            let B = [], k2 = C.map(o, b2), M = w(v2);
            return M && (k2 = k2.map((R2) => c(R2, Object.assign(Object.assign({}, d), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted)), B.push(h2, "`"), C.each((R2) => {
              let q = R2.getName();
              if (B.push(o()), q < k2.length) {
                let { tabWidth: J2 } = d, L2 = R2.getValue(), Q2 = a(L2.value.raw, J2), V2 = k2[q];
                if (!M) {
                  let Y2 = v2[b2][q];
                  (E2(Y2) || N2(Y2) || Y2.type === "ConditionalExpression" || Y2.type === "SequenceExpression" || x2(Y2) || F2(Y2)) && (V2 = [p([i, V2]), i]);
                }
                let j2 = Q2 === 0 && L2.value.raw.endsWith(`
`) ? y(Number.NEGATIVE_INFINITY, V2) : g(V2, Q2, J2);
                B.push(l(["${", j2, h2, "}"]));
              }
            }, "quasis"), B.push("`"), B;
          }
          function P(C, o, d) {
            let v2 = C.getNode(), S2 = v2.quasis[0].value.raw.trim().split(/\s*\|\s*/);
            if (S2.length > 1 || S2.some((b2) => b2.length > 0)) {
              o.__inJestEach = true;
              let b2 = C.map(d, "expressions");
              o.__inJestEach = false;
              let B = [], k2 = b2.map((L2) => "${" + c(L2, Object.assign(Object.assign({}, o), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"), M = [{ hasLineBreak: false, cells: [] }];
              for (let L2 = 1; L2 < v2.quasis.length; L2++) {
                let Q2 = t8(M), V2 = k2[L2 - 1];
                Q2.cells.push(V2), V2.includes(`
`) && (Q2.hasLineBreak = true), v2.quasis[L2].value.raw.includes(`
`) && M.push({ hasLineBreak: false, cells: [] });
              }
              let R2 = Math.max(S2.length, ...M.map((L2) => L2.cells.length)), q = Array.from({ length: R2 }).fill(0), J2 = [{ cells: S2 }, ...M.filter((L2) => L2.cells.length > 0)];
              for (let { cells: L2 } of J2.filter((Q2) => !Q2.hasLineBreak))
                for (let [Q2, V2] of L2.entries())
                  q[Q2] = Math.max(q[Q2], s(V2));
              return B.push(h2, "`", p([u, n(u, J2.map((L2) => n(" | ", L2.cells.map((Q2, V2) => L2.hasLineBreak ? Q2 : Q2 + " ".repeat(q[V2] - s(Q2))))))]), u, "`"), B;
            }
          }
          function $(C, o) {
            let d = C.getValue(), v2 = o();
            return E2(d) && (v2 = l([p([i, v2]), i])), ["${", v2, h2, "}"];
          }
          function D(C, o) {
            return C.map((d) => $(d, o), "expressions");
          }
          function T2(C, o) {
            return f2(C, (d) => typeof d == "string" ? o ? d.replace(/(\\*)`/g, "$1$1\\`") : m(d) : d);
          }
          function m(C) {
            return C.replace(/([\\`]|\${)/g, "\\$1");
          }
          r.exports = { printTemplateLiteral: I2, printTemplateExpressions: D, escapeTemplateCharacters: T2, uncookTemplateElementValue: m };
        } }), Ym = te2({ "src/language-js/embed/markdown.js"(e, r) {
          ne2();
          var { builders: { indent: t8, softline: s, literalline: a, dedentToRoot: n } } = qe2(), { escapeTemplateCharacters: u } = jt2();
          function i(p, y, h2) {
            let c = p.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (w, E2) => "\\".repeat(E2.length / 2) + "`"), f2 = l(c), F2 = f2 !== "";
            F2 && (c = c.replace(new RegExp(`^${f2}`, "gm"), ""));
            let _ = u(h2(c, { parser: "markdown", __inJsTemplate: true }, { stripTrailingHardline: true }), true);
            return ["`", F2 ? t8([s, _]) : [a, n(_)], s, "`"];
          }
          function l(p) {
            let y = p.match(/^([^\S\n]*)\S/m);
            return y === null ? "" : y[1];
          }
          r.exports = i;
        } }), Qm = te2({ "src/language-js/embed/css.js"(e, r) {
          ne2();
          var { isNonEmptyArray: t8 } = Ue2(), { builders: { indent: s, hardline: a, softline: n }, utils: { mapDoc: u, replaceEndOfLine: i, cleanDoc: l } } = qe2(), { printTemplateExpressions: p } = jt2();
          function y(c, f2, F2) {
            let _ = c.getValue(), w = _.quasis.map((P) => P.value.raw), E2 = 0, N2 = w.reduce((P, $, D) => D === 0 ? $ : P + "@prettier-placeholder-" + E2++ + "-id" + $, ""), x2 = F2(N2, { parser: "scss" }, { stripTrailingHardline: true }), I2 = p(c, f2);
            return h2(x2, _, I2);
          }
          function h2(c, f2, F2) {
            if (f2.quasis.length === 1 && !f2.quasis[0].value.raw.trim())
              return "``";
            let w = g(c, F2);
            if (!w)
              throw new Error("Couldn't insert all the expressions");
            return ["`", s([a, w]), n, "`"];
          }
          function g(c, f2) {
            if (!t8(f2))
              return c;
            let F2 = 0, _ = u(l(c), (w) => typeof w != "string" || !w.includes("@prettier-placeholder") ? w : w.split(/@prettier-placeholder-(\d+)-id/).map((E2, N2) => N2 % 2 === 0 ? i(E2) : (F2++, f2[E2])));
            return f2.length === F2 ? _ : null;
          }
          r.exports = y;
        } }), Zm = te2({ "src/language-js/embed/graphql.js"(e, r) {
          ne2();
          var { builders: { indent: t8, join: s, hardline: a } } = qe2(), { escapeTemplateCharacters: n, printTemplateExpressions: u } = jt2();
          function i(p, y, h2) {
            let g = p.getValue(), c = g.quasis.length;
            if (c === 1 && g.quasis[0].value.raw.trim() === "")
              return "``";
            let f2 = u(p, y), F2 = [];
            for (let _ = 0; _ < c; _++) {
              let w = g.quasis[_], E2 = _ === 0, N2 = _ === c - 1, x2 = w.value.cooked, I2 = x2.split(`
`), P = I2.length, $ = f2[_], D = P > 2 && I2[0].trim() === "" && I2[1].trim() === "", T2 = P > 2 && I2[P - 1].trim() === "" && I2[P - 2].trim() === "", m = I2.every((o) => /^\s*(?:#[^\n\r]*)?$/.test(o));
              if (!N2 && /#[^\n\r]*$/.test(I2[P - 1]))
                return null;
              let C = null;
              m ? C = l(I2) : C = h2(x2, { parser: "graphql" }, { stripTrailingHardline: true }), C ? (C = n(C, false), !E2 && D && F2.push(""), F2.push(C), !N2 && T2 && F2.push("")) : !E2 && !N2 && D && F2.push(""), $ && F2.push($);
            }
            return ["`", t8([a, s(a, F2)]), a, "`"];
          }
          function l(p) {
            let y = [], h2 = false, g = p.map((c) => c.trim());
            for (let [c, f2] of g.entries())
              f2 !== "" && (g[c - 1] === "" && h2 ? y.push([a, f2]) : y.push(f2), h2 = true);
            return y.length === 0 ? null : s(a, y);
          }
          r.exports = i;
        } }), ed = te2({ "src/language-js/embed/html.js"(e, r) {
          ne2();
          var { builders: { indent: t8, line: s, hardline: a, group: n }, utils: { mapDoc: u } } = qe2(), { printTemplateExpressions: i, uncookTemplateElementValue: l } = jt2(), p = 0;
          function y(h2, g, c, f2, F2) {
            let { parser: _ } = F2, w = h2.getValue(), E2 = p;
            p = p + 1 >>> 0;
            let N2 = (d) => `PRETTIER_HTML_PLACEHOLDER_${d}_${E2}_IN_JS`, x2 = w.quasis.map((d, v2, S2) => v2 === S2.length - 1 ? d.value.cooked : d.value.cooked + N2(v2)).join(""), I2 = i(h2, g);
            if (I2.length === 0 && x2.trim().length === 0)
              return "``";
            let P = new RegExp(N2("(\\d+)"), "g"), $ = 0, D = c(x2, { parser: _, __onHtmlRoot(d) {
              $ = d.children.length;
            } }, { stripTrailingHardline: true }), T2 = u(D, (d) => {
              if (typeof d != "string")
                return d;
              let v2 = [], S2 = d.split(P);
              for (let b2 = 0; b2 < S2.length; b2++) {
                let B = S2[b2];
                if (b2 % 2 === 0) {
                  B && (B = l(B), f2.__embeddedInHtml && (B = B.replace(/<\/(script)\b/gi, "<\\/$1")), v2.push(B));
                  continue;
                }
                let k2 = Number(B);
                v2.push(I2[k2]);
              }
              return v2;
            }), m = /^\s/.test(x2) ? " " : "", C = /\s$/.test(x2) ? " " : "", o = f2.htmlWhitespaceSensitivity === "ignore" ? a : m && C ? s : null;
            return n(o ? ["`", t8([o, n(T2)]), o, "`"] : ["`", m, $ > 1 ? t8(n(T2)) : n(T2), C, "`"]);
          }
          r.exports = y;
        } }), td = te2({ "src/language-js/embed.js"(e, r) {
          ne2();
          var { hasComment: t8, CommentCheckFlags: s, isObjectProperty: a } = Ke2(), n = Ym(), u = Qm(), i = Zm(), l = ed();
          function p(D) {
            if (g(D) || _(D) || w(D) || c(D))
              return "css";
            if (x2(D))
              return "graphql";
            if (P(D))
              return "html";
            if (f2(D))
              return "angular";
            if (h2(D))
              return "markdown";
          }
          function y(D, T2, m, C) {
            let o = D.getValue();
            if (o.type !== "TemplateLiteral" || $(o))
              return;
            let d = p(D);
            if (d) {
              if (d === "markdown")
                return n(D, T2, m);
              if (d === "css")
                return u(D, T2, m);
              if (d === "graphql")
                return i(D, T2, m);
              if (d === "html" || d === "angular")
                return l(D, T2, m, C, { parser: d });
            }
          }
          function h2(D) {
            let T2 = D.getValue(), m = D.getParentNode();
            return m && m.type === "TaggedTemplateExpression" && T2.quasis.length === 1 && m.tag.type === "Identifier" && (m.tag.name === "md" || m.tag.name === "markdown");
          }
          function g(D) {
            let T2 = D.getValue(), m = D.getParentNode(), C = D.getParentNode(1);
            return C && T2.quasis && m.type === "JSXExpressionContainer" && C.type === "JSXElement" && C.openingElement.name.name === "style" && C.openingElement.attributes.some((o) => o.name.name === "jsx") || m && m.type === "TaggedTemplateExpression" && m.tag.type === "Identifier" && m.tag.name === "css" || m && m.type === "TaggedTemplateExpression" && m.tag.type === "MemberExpression" && m.tag.object.name === "css" && (m.tag.property.name === "global" || m.tag.property.name === "resolve");
          }
          function c(D) {
            return D.match((T2) => T2.type === "TemplateLiteral", (T2, m) => T2.type === "ArrayExpression" && m === "elements", (T2, m) => a(T2) && T2.key.type === "Identifier" && T2.key.name === "styles" && m === "value", ...F2);
          }
          function f2(D) {
            return D.match((T2) => T2.type === "TemplateLiteral", (T2, m) => a(T2) && T2.key.type === "Identifier" && T2.key.name === "template" && m === "value", ...F2);
          }
          var F2 = [(D, T2) => D.type === "ObjectExpression" && T2 === "properties", (D, T2) => D.type === "CallExpression" && D.callee.type === "Identifier" && D.callee.name === "Component" && T2 === "arguments", (D, T2) => D.type === "Decorator" && T2 === "expression"];
          function _(D) {
            let T2 = D.getParentNode();
            if (!T2 || T2.type !== "TaggedTemplateExpression")
              return false;
            let m = T2.tag.type === "ParenthesizedExpression" ? T2.tag.expression : T2.tag;
            switch (m.type) {
              case "MemberExpression":
                return E2(m.object) || N2(m);
              case "CallExpression":
                return E2(m.callee) || m.callee.type === "MemberExpression" && (m.callee.object.type === "MemberExpression" && (E2(m.callee.object.object) || N2(m.callee.object)) || m.callee.object.type === "CallExpression" && E2(m.callee.object.callee));
              case "Identifier":
                return m.name === "css";
              default:
                return false;
            }
          }
          function w(D) {
            let T2 = D.getParentNode(), m = D.getParentNode(1);
            return m && T2.type === "JSXExpressionContainer" && m.type === "JSXAttribute" && m.name.type === "JSXIdentifier" && m.name.name === "css";
          }
          function E2(D) {
            return D.type === "Identifier" && D.name === "styled";
          }
          function N2(D) {
            return /^[A-Z]/.test(D.object.name) && D.property.name === "extend";
          }
          function x2(D) {
            let T2 = D.getValue(), m = D.getParentNode();
            return I2(T2, "GraphQL") || m && (m.type === "TaggedTemplateExpression" && (m.tag.type === "MemberExpression" && m.tag.object.name === "graphql" && m.tag.property.name === "experimental" || m.tag.type === "Identifier" && (m.tag.name === "gql" || m.tag.name === "graphql")) || m.type === "CallExpression" && m.callee.type === "Identifier" && m.callee.name === "graphql");
          }
          function I2(D, T2) {
            return t8(D, s.Block | s.Leading, (m) => {
              let { value: C } = m;
              return C === ` ${T2} `;
            });
          }
          function P(D) {
            return I2(D.getValue(), "HTML") || D.match((T2) => T2.type === "TemplateLiteral", (T2, m) => T2.type === "TaggedTemplateExpression" && T2.tag.type === "Identifier" && T2.tag.name === "html" && m === "quasi");
          }
          function $(D) {
            let { quasis: T2 } = D;
            return T2.some((m) => {
              let { value: { cooked: C } } = m;
              return C === null;
            });
          }
          r.exports = y;
        } }), rd = te2({ "src/language-js/clean.js"(e, r) {
          ne2();
          var t8 = Pt2(), s = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), a = (u) => {
            for (let i of u.quasis)
              delete i.value;
          };
          function n(u, i, l) {
            if (u.type === "Program" && delete i.sourceType, (u.type === "BigIntLiteral" || u.type === "BigIntLiteralTypeAnnotation") && i.value && (i.value = i.value.toLowerCase()), (u.type === "BigIntLiteral" || u.type === "Literal") && i.bigint && (i.bigint = i.bigint.toLowerCase()), u.type === "DecimalLiteral" && (i.value = Number(i.value)), u.type === "Literal" && i.decimal && (i.decimal = Number(i.decimal)), u.type === "EmptyStatement" || u.type === "JSXText" || u.type === "JSXExpressionContainer" && (u.expression.type === "Literal" || u.expression.type === "StringLiteral") && u.expression.value === " ")
              return null;
            if ((u.type === "Property" || u.type === "ObjectProperty" || u.type === "MethodDefinition" || u.type === "ClassProperty" || u.type === "ClassMethod" || u.type === "PropertyDefinition" || u.type === "TSDeclareMethod" || u.type === "TSPropertySignature" || u.type === "ObjectTypeProperty") && typeof u.key == "object" && u.key && (u.key.type === "Literal" || u.key.type === "NumericLiteral" || u.key.type === "StringLiteral" || u.key.type === "Identifier") && delete i.key, u.type === "JSXElement" && u.openingElement.name.name === "style" && u.openingElement.attributes.some((h2) => h2.name.name === "jsx"))
              for (let { type: h2, expression: g } of i.children)
                h2 === "JSXExpressionContainer" && g.type === "TemplateLiteral" && a(g);
            u.type === "JSXAttribute" && u.name.name === "css" && u.value.type === "JSXExpressionContainer" && u.value.expression.type === "TemplateLiteral" && a(i.value.expression), u.type === "JSXAttribute" && u.value && u.value.type === "Literal" && /["']|&quot;|&apos;/.test(u.value.value) && (i.value.value = i.value.value.replace(/["']|&quot;|&apos;/g, '"'));
            let p = u.expression || u.callee;
            if (u.type === "Decorator" && p.type === "CallExpression" && p.callee.name === "Component" && p.arguments.length === 1) {
              let h2 = u.expression.arguments[0].properties;
              for (let [g, c] of i.expression.arguments[0].properties.entries())
                switch (h2[g].key.name) {
                  case "styles":
                    c.value.type === "ArrayExpression" && a(c.value.elements[0]);
                    break;
                  case "template":
                    c.value.type === "TemplateLiteral" && a(c.value);
                    break;
                }
            }
            if (u.type === "TaggedTemplateExpression" && (u.tag.type === "MemberExpression" || u.tag.type === "Identifier" && (u.tag.name === "gql" || u.tag.name === "graphql" || u.tag.name === "css" || u.tag.name === "md" || u.tag.name === "markdown" || u.tag.name === "html") || u.tag.type === "CallExpression") && a(i.quasi), u.type === "TemplateLiteral") {
              var y;
              (((y = u.leadingComments) === null || y === void 0 ? void 0 : y.some((g) => t8(g) && ["GraphQL", "HTML"].some((c) => g.value === ` ${c} `))) || l.type === "CallExpression" && l.callee.name === "graphql" || !u.leadingComments) && a(i);
            }
            if (u.type === "InterpreterDirective" && (i.value = i.value.trimEnd()), (u.type === "TSIntersectionType" || u.type === "TSUnionType") && u.types.length === 1)
              return i.types[0];
          }
          n.ignoredProperties = s, r.exports = n;
        } }), io2 = {};
        Kt2(io2, { EOL: () => Wn2, arch: () => nd, cpus: () => Do2, default: () => vo2, endianness: () => ao2, freemem: () => po2, getNetworkInterfaces: () => ho2, hostname: () => oo2, loadavg: () => lo2, networkInterfaces: () => yo2, platform: () => ud, release: () => go2, tmpDir: () => $n2, tmpdir: () => Vn2, totalmem: () => fo2, type: () => mo2, uptime: () => co2 });
        function ao2() {
          if (typeof Tr2 > "u") {
            var e = new ArrayBuffer(2), r = new Uint8Array(e), t8 = new Uint16Array(e);
            if (r[0] = 1, r[1] = 2, t8[0] === 258)
              Tr2 = "BE";
            else if (t8[0] === 513)
              Tr2 = "LE";
            else
              throw new Error("unable to figure out endianess");
          }
          return Tr2;
        }
        function oo2() {
          return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
        }
        function lo2() {
          return [];
        }
        function co2() {
          return 0;
        }
        function po2() {
          return Number.MAX_VALUE;
        }
        function fo2() {
          return Number.MAX_VALUE;
        }
        function Do2() {
          return [];
        }
        function mo2() {
          return "Browser";
        }
        function go2() {
          return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
        }
        function yo2() {
        }
        function ho2() {
        }
        function nd() {
          return "javascript";
        }
        function ud() {
          return "browser";
        }
        function $n2() {
          return "/tmp";
        }
        var Tr2, Vn2, Wn2, vo2, sd = ht2({ "node-modules-polyfills:os"() {
          ne2(), Vn2 = $n2, Wn2 = `
`, vo2 = { EOL: Wn2, tmpdir: Vn2, tmpDir: $n2, networkInterfaces: yo2, getNetworkInterfaces: ho2, release: go2, type: mo2, cpus: Do2, totalmem: fo2, freemem: po2, uptime: co2, loadavg: lo2, hostname: oo2, endianness: ao2 };
        } }), id = te2({ "node-modules-polyfills-commonjs:os"(e, r) {
          ne2();
          var t8 = (sd(), ft2(io2));
          if (t8 && t8.default) {
            r.exports = t8.default;
            for (let s in t8)
              r.exports[s] = t8[s];
          } else
            t8 && (r.exports = t8);
        } }), ad = te2({ "node_modules/detect-newline/index.js"(e, r) {
          ne2();
          var t8 = (s) => {
            if (typeof s != "string")
              throw new TypeError("Expected a string");
            let a = s.match(/(?:\r?\n)/g) || [];
            if (a.length === 0)
              return;
            let n = a.filter((i) => i === `\r
`).length, u = a.length - n;
            return n > u ? `\r
` : `
`;
          };
          r.exports = t8, r.exports.graceful = (s) => typeof s == "string" && t8(s) || `
`;
        } }), od = te2({ "node_modules/jest-docblock/build/index.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true }), e.extract = c, e.parse = F2, e.parseWithComments = _, e.print = w, e.strip = f2;
          function r() {
            let N2 = id();
            return r = function() {
              return N2;
            }, N2;
          }
          function t8() {
            let N2 = s(ad());
            return t8 = function() {
              return N2;
            }, N2;
          }
          function s(N2) {
            return N2 && N2.__esModule ? N2 : { default: N2 };
          }
          var a = /\*\/$/, n = /^\/\*\*?/, u = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, i = /(^|\s+)\/\/([^\r\n]*)/g, l = /^(\r?\n)+/, p = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, y = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, h2 = /(\r?\n|^) *\* ?/g, g = [];
          function c(N2) {
            let x2 = N2.match(u);
            return x2 ? x2[0].trimLeft() : "";
          }
          function f2(N2) {
            let x2 = N2.match(u);
            return x2 && x2[0] ? N2.substring(x2[0].length) : N2;
          }
          function F2(N2) {
            return _(N2).pragmas;
          }
          function _(N2) {
            let x2 = (0, t8().default)(N2) || r().EOL;
            N2 = N2.replace(n, "").replace(a, "").replace(h2, "$1");
            let I2 = "";
            for (; I2 !== N2; )
              I2 = N2, N2 = N2.replace(p, `${x2}$1 $2${x2}`);
            N2 = N2.replace(l, "").trimRight();
            let P = /* @__PURE__ */ Object.create(null), $ = N2.replace(y, "").replace(l, "").trimRight(), D;
            for (; D = y.exec(N2); ) {
              let T2 = D[2].replace(i, "");
              typeof P[D[1]] == "string" || Array.isArray(P[D[1]]) ? P[D[1]] = g.concat(P[D[1]], T2) : P[D[1]] = T2;
            }
            return { comments: $, pragmas: P };
          }
          function w(N2) {
            let { comments: x2 = "", pragmas: I2 = {} } = N2, P = (0, t8().default)(x2) || r().EOL, $ = "/**", D = " *", T2 = " */", m = Object.keys(I2), C = m.map((d) => E2(d, I2[d])).reduce((d, v2) => d.concat(v2), []).map((d) => `${D} ${d}${P}`).join("");
            if (!x2) {
              if (m.length === 0)
                return "";
              if (m.length === 1 && !Array.isArray(I2[m[0]])) {
                let d = I2[m[0]];
                return `${$} ${E2(m[0], d)[0]}${T2}`;
              }
            }
            let o = x2.split(P).map((d) => `${D} ${d}`).join(P) + P;
            return $ + P + (x2 ? o : "") + (x2 && m.length ? D + P : "") + C + T2;
          }
          function E2(N2, x2) {
            return g.concat(x2).map((I2) => `@${N2} ${I2}`.trim());
          }
        } }), ld = te2({ "src/language-js/utils/get-shebang.js"(e, r) {
          ne2();
          function t8(s) {
            if (!s.startsWith("#!"))
              return "";
            let a = s.indexOf(`
`);
            return a === -1 ? s : s.slice(0, a);
          }
          r.exports = t8;
        } }), Co2 = te2({ "src/language-js/pragma.js"(e, r) {
          ne2();
          var { parseWithComments: t8, strip: s, extract: a, print: n } = od(), { normalizeEndOfLine: u } = Jn2(), i = ld();
          function l(h2) {
            let g = i(h2);
            g && (h2 = h2.slice(g.length + 1));
            let c = a(h2), { pragmas: f2, comments: F2 } = t8(c);
            return { shebang: g, text: h2, pragmas: f2, comments: F2 };
          }
          function p(h2) {
            let g = Object.keys(l(h2).pragmas);
            return g.includes("prettier") || g.includes("format");
          }
          function y(h2) {
            let { shebang: g, text: c, pragmas: f2, comments: F2 } = l(h2), _ = s(c), w = n({ pragmas: Object.assign({ format: "" }, f2), comments: F2.trimStart() });
            return (g ? `${g}
` : "") + u(w) + (_.startsWith(`
`) ? `
` : `

`) + _;
          }
          r.exports = { hasPragma: p, insertPragma: y };
        } }), cd = te2({ "src/language-js/utils/is-type-cast-comment.js"(e, r) {
          ne2();
          var t8 = Pt2();
          function s(a) {
            return t8(a) && a.value[0] === "*" && /@(?:type|satisfies)\b/.test(a.value);
          }
          r.exports = s;
        } }), Eo2 = te2({ "src/language-js/comments.js"(e, r) {
          ne2();
          var { getLast: t8, hasNewline: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: a, getNextNonSpaceNonCommentCharacter: n, hasNewlineInRange: u, addLeadingComment: i, addTrailingComment: l, addDanglingComment: p, getNextNonSpaceNonCommentCharacterIndex: y, isNonEmptyArray: h2 } = Ue2(), { getFunctionParameters: g, isPrettierIgnoreComment: c, isJsxNode: f2, hasFlowShorthandAnnotationComment: F2, hasFlowAnnotationComment: _, hasIgnoreComment: w, isCallLikeExpression: E2, getCallArguments: N2, isCallExpression: x2, isMemberExpression: I2, isObjectProperty: P, isLineComment: $, getComments: D, CommentCheckFlags: T2, markerForIfWithoutBlockAndSameLineComment: m } = Ke2(), { locStart: C, locEnd: o } = ut2(), d = Pt2(), v2 = cd();
          function S2(De2) {
            return [H2, Fe2, Q2, q, J2, L2, ie2, he2, se2, ge2, we2, ke2, ce2, z2, U2].some((A2) => A2(De2));
          }
          function b2(De2) {
            return [R2, Fe2, V2, we2, q, J2, L2, ie2, z2, Z, fe2, ge2, Pe2, U2, X2].some((A2) => A2(De2));
          }
          function B(De2) {
            return [H2, q, J2, j2, ue2, ce2, ge2, de2, K2, pe2, U2, oe2].some((A2) => A2(De2));
          }
          function k2(De2, A2) {
            let G2 = (De2.body || De2.properties).find((re2) => {
              let { type: ye } = re2;
              return ye !== "EmptyStatement";
            });
            G2 ? i(G2, A2) : p(De2, A2);
          }
          function M(De2, A2) {
            De2.type === "BlockStatement" ? k2(De2, A2) : i(De2, A2);
          }
          function R2(De2) {
            let { comment: A2, followingNode: G2 } = De2;
            return G2 && v2(A2) ? (i(G2, A2), true) : false;
          }
          function q(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, followingNode: ye, text: Ce2 } = De2;
            if ((re2 == null ? void 0 : re2.type) !== "IfStatement" || !ye)
              return false;
            if (n(Ce2, A2, o) === ")")
              return l(G2, A2), true;
            if (G2 === re2.consequent && ye === re2.alternate) {
              if (G2.type === "BlockStatement")
                l(G2, A2);
              else {
                let ve2 = A2.type === "SingleLine" || A2.loc.start.line === A2.loc.end.line, ze = A2.loc.start.line === G2.loc.start.line;
                ve2 && ze ? p(G2, A2, m) : p(re2, A2);
              }
              return true;
            }
            return ye.type === "BlockStatement" ? (k2(ye, A2), true) : ye.type === "IfStatement" ? (M(ye.consequent, A2), true) : re2.consequent === ye ? (i(ye, A2), true) : false;
          }
          function J2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, followingNode: ye, text: Ce2 } = De2;
            return (re2 == null ? void 0 : re2.type) !== "WhileStatement" || !ye ? false : n(Ce2, A2, o) === ")" ? (l(G2, A2), true) : ye.type === "BlockStatement" ? (k2(ye, A2), true) : re2.body === ye ? (i(ye, A2), true) : false;
          }
          function L2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, followingNode: ye } = De2;
            return (re2 == null ? void 0 : re2.type) !== "TryStatement" && (re2 == null ? void 0 : re2.type) !== "CatchClause" || !ye ? false : re2.type === "CatchClause" && G2 ? (l(G2, A2), true) : ye.type === "BlockStatement" ? (k2(ye, A2), true) : ye.type === "TryStatement" ? (M(ye.finalizer, A2), true) : ye.type === "CatchClause" ? (M(ye.body, A2), true) : false;
          }
          function Q2(De2) {
            let { comment: A2, enclosingNode: G2, followingNode: re2 } = De2;
            return I2(G2) && (re2 == null ? void 0 : re2.type) === "Identifier" ? (i(G2, A2), true) : false;
          }
          function V2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, followingNode: ye, text: Ce2 } = De2, Be2 = G2 && !u(Ce2, o(G2), C(A2));
            return (!G2 || !Be2) && ((re2 == null ? void 0 : re2.type) === "ConditionalExpression" || (re2 == null ? void 0 : re2.type) === "TSConditionalType") && ye ? (i(ye, A2), true) : false;
          }
          function j2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2 } = De2;
            return P(re2) && re2.shorthand && re2.key === G2 && re2.value.type === "AssignmentPattern" ? (l(re2.value.left, A2), true) : false;
          }
          var Y2 = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
          function ie2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, followingNode: ye } = De2;
            if (Y2.has(re2 == null ? void 0 : re2.type)) {
              if (h2(re2.decorators) && !(ye && ye.type === "Decorator"))
                return l(t8(re2.decorators), A2), true;
              if (re2.body && ye === re2.body)
                return k2(re2.body, A2), true;
              if (ye) {
                if (re2.superClass && ye === re2.superClass && G2 && (G2 === re2.id || G2 === re2.typeParameters))
                  return l(G2, A2), true;
                for (let Ce2 of ["implements", "extends", "mixins"])
                  if (re2[Ce2] && ye === re2[Ce2][0])
                    return G2 && (G2 === re2.id || G2 === re2.typeParameters || G2 === re2.superClass) ? l(G2, A2) : p(re2, A2, Ce2), true;
              }
            }
            return false;
          }
          var ee2 = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
          function ce2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, text: ye } = De2;
            return re2 && G2 && n(ye, A2, o) === "(" && (re2.type === "Property" || re2.type === "TSDeclareMethod" || re2.type === "TSAbstractMethodDefinition") && G2.type === "Identifier" && re2.key === G2 && n(ye, G2, o) !== ":" || (G2 == null ? void 0 : G2.type) === "Decorator" && ee2.has(re2 == null ? void 0 : re2.type) ? (l(G2, A2), true) : false;
          }
          var W2 = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
          function K2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, text: ye } = De2;
            return n(ye, A2, o) !== "(" ? false : G2 && W2.has(re2 == null ? void 0 : re2.type) ? (l(G2, A2), true) : false;
          }
          function de2(De2) {
            let { comment: A2, enclosingNode: G2, text: re2 } = De2;
            if ((G2 == null ? void 0 : G2.type) !== "ArrowFunctionExpression")
              return false;
            let ye = y(re2, A2, o);
            return ye !== false && re2.slice(ye, ye + 2) === "=>" ? (p(G2, A2), true) : false;
          }
          function ue2(De2) {
            let { comment: A2, enclosingNode: G2, text: re2 } = De2;
            return n(re2, A2, o) !== ")" ? false : G2 && (le2(G2) && g(G2).length === 0 || E2(G2) && N2(G2).length === 0) ? (p(G2, A2), true) : ((G2 == null ? void 0 : G2.type) === "MethodDefinition" || (G2 == null ? void 0 : G2.type) === "TSAbstractMethodDefinition") && g(G2.value).length === 0 ? (p(G2.value, A2), true) : false;
          }
          function Fe2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, followingNode: ye, text: Ce2 } = De2;
            if ((G2 == null ? void 0 : G2.type) === "FunctionTypeParam" && (re2 == null ? void 0 : re2.type) === "FunctionTypeAnnotation" && (ye == null ? void 0 : ye.type) !== "FunctionTypeParam" || ((G2 == null ? void 0 : G2.type) === "Identifier" || (G2 == null ? void 0 : G2.type) === "AssignmentPattern") && re2 && le2(re2) && n(Ce2, A2, o) === ")")
              return l(G2, A2), true;
            if ((re2 == null ? void 0 : re2.type) === "FunctionDeclaration" && (ye == null ? void 0 : ye.type) === "BlockStatement") {
              let Be2 = (() => {
                let ve2 = g(re2);
                if (ve2.length > 0)
                  return a(Ce2, o(t8(ve2)));
                let ze = a(Ce2, o(re2.id));
                return ze !== false && a(Ce2, ze + 1);
              })();
              if (C(A2) > Be2)
                return k2(ye, A2), true;
            }
            return false;
          }
          function z2(De2) {
            let { comment: A2, enclosingNode: G2 } = De2;
            return (G2 == null ? void 0 : G2.type) === "LabeledStatement" ? (i(G2, A2), true) : false;
          }
          function U2(De2) {
            let { comment: A2, enclosingNode: G2 } = De2;
            return ((G2 == null ? void 0 : G2.type) === "ContinueStatement" || (G2 == null ? void 0 : G2.type) === "BreakStatement") && !G2.label ? (l(G2, A2), true) : false;
          }
          function Z(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2 } = De2;
            return x2(re2) && G2 && re2.callee === G2 && re2.arguments.length > 0 ? (i(re2.arguments[0], A2), true) : false;
          }
          function se2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, followingNode: ye } = De2;
            return (re2 == null ? void 0 : re2.type) === "UnionTypeAnnotation" || (re2 == null ? void 0 : re2.type) === "TSUnionType" ? (c(A2) && (ye.prettierIgnore = true, A2.unignore = true), G2 ? (l(G2, A2), true) : false) : (((ye == null ? void 0 : ye.type) === "UnionTypeAnnotation" || (ye == null ? void 0 : ye.type) === "TSUnionType") && c(A2) && (ye.types[0].prettierIgnore = true, A2.unignore = true), false);
          }
          function fe2(De2) {
            let { comment: A2, enclosingNode: G2 } = De2;
            return P(G2) ? (i(G2, A2), true) : false;
          }
          function ge2(De2) {
            let { comment: A2, enclosingNode: G2, followingNode: re2, ast: ye, isLastComment: Ce2 } = De2;
            return ye && ye.body && ye.body.length === 0 ? (Ce2 ? p(ye, A2) : i(ye, A2), true) : (G2 == null ? void 0 : G2.type) === "Program" && (G2 == null ? void 0 : G2.body.length) === 0 && !h2(G2.directives) ? (Ce2 ? p(G2, A2) : i(G2, A2), true) : (re2 == null ? void 0 : re2.type) === "Program" && (re2 == null ? void 0 : re2.body.length) === 0 && (G2 == null ? void 0 : G2.type) === "ModuleExpression" ? (p(re2, A2), true) : false;
          }
          function he2(De2) {
            let { comment: A2, enclosingNode: G2 } = De2;
            return (G2 == null ? void 0 : G2.type) === "ForInStatement" || (G2 == null ? void 0 : G2.type) === "ForOfStatement" ? (i(G2, A2), true) : false;
          }
          function we2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, text: ye } = De2;
            if ((re2 == null ? void 0 : re2.type) === "ImportSpecifier" || (re2 == null ? void 0 : re2.type) === "ExportSpecifier")
              return i(re2, A2), true;
            let Ce2 = (G2 == null ? void 0 : G2.type) === "ImportSpecifier" && (re2 == null ? void 0 : re2.type) === "ImportDeclaration", Be2 = (G2 == null ? void 0 : G2.type) === "ExportSpecifier" && (re2 == null ? void 0 : re2.type) === "ExportNamedDeclaration";
            return (Ce2 || Be2) && s(ye, o(A2)) ? (l(G2, A2), true) : false;
          }
          function ke2(De2) {
            let { comment: A2, enclosingNode: G2 } = De2;
            return (G2 == null ? void 0 : G2.type) === "AssignmentPattern" ? (i(G2, A2), true) : false;
          }
          var Re2 = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), Ne2 = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
          function Pe2(De2) {
            let { comment: A2, enclosingNode: G2, followingNode: re2 } = De2;
            return Re2.has(G2 == null ? void 0 : G2.type) && re2 && (Ne2.has(re2.type) || d(A2)) ? (i(re2, A2), true) : false;
          }
          function oe2(De2) {
            let { comment: A2, enclosingNode: G2, followingNode: re2, text: ye } = De2;
            return !re2 && ((G2 == null ? void 0 : G2.type) === "TSMethodSignature" || (G2 == null ? void 0 : G2.type) === "TSDeclareFunction" || (G2 == null ? void 0 : G2.type) === "TSAbstractMethodDefinition") && n(ye, A2, o) === ";" ? (l(G2, A2), true) : false;
          }
          function H2(De2) {
            let { comment: A2, enclosingNode: G2, followingNode: re2 } = De2;
            if (c(A2) && (G2 == null ? void 0 : G2.type) === "TSMappedType" && (re2 == null ? void 0 : re2.type) === "TSTypeParameter" && re2.constraint)
              return G2.prettierIgnore = true, A2.unignore = true, true;
          }
          function pe2(De2) {
            let { comment: A2, precedingNode: G2, enclosingNode: re2, followingNode: ye } = De2;
            return (re2 == null ? void 0 : re2.type) !== "TSMappedType" ? false : (ye == null ? void 0 : ye.type) === "TSTypeParameter" && ye.name ? (i(ye.name, A2), true) : (G2 == null ? void 0 : G2.type) === "TSTypeParameter" && G2.constraint ? (l(G2.constraint, A2), true) : false;
          }
          function X2(De2) {
            let { comment: A2, enclosingNode: G2, followingNode: re2 } = De2;
            return !G2 || G2.type !== "SwitchCase" || G2.test || !re2 || re2 !== G2.consequent[0] ? false : (re2.type === "BlockStatement" && $(A2) ? k2(re2, A2) : p(G2, A2), true);
          }
          function le2(De2) {
            return De2.type === "ArrowFunctionExpression" || De2.type === "FunctionExpression" || De2.type === "FunctionDeclaration" || De2.type === "ObjectMethod" || De2.type === "ClassMethod" || De2.type === "TSDeclareFunction" || De2.type === "TSCallSignatureDeclaration" || De2.type === "TSConstructSignatureDeclaration" || De2.type === "TSMethodSignature" || De2.type === "TSConstructorType" || De2.type === "TSFunctionType" || De2.type === "TSDeclareMethod";
          }
          function Ae2(De2, A2) {
            if ((A2.parser === "typescript" || A2.parser === "flow" || A2.parser === "acorn" || A2.parser === "espree" || A2.parser === "meriyah" || A2.parser === "__babel_estree") && De2.type === "MethodDefinition" && De2.value && De2.value.type === "FunctionExpression" && g(De2.value).length === 0 && !De2.value.returnType && !h2(De2.value.typeParameters) && De2.value.body)
              return [...De2.decorators || [], De2.key, De2.value.body];
          }
          function Ee2(De2) {
            let A2 = De2.getValue(), G2 = De2.getParentNode(), re2 = (ye) => _(D(ye, T2.Leading)) || _(D(ye, T2.Trailing));
            return (A2 && (f2(A2) || F2(A2) || x2(G2) && re2(A2)) || G2 && (G2.type === "JSXSpreadAttribute" || G2.type === "JSXSpreadChild" || G2.type === "UnionTypeAnnotation" || G2.type === "TSUnionType" || (G2.type === "ClassDeclaration" || G2.type === "ClassExpression") && G2.superClass === A2)) && (!w(De2) || G2.type === "UnionTypeAnnotation" || G2.type === "TSUnionType");
          }
          r.exports = { handleOwnLineComment: S2, handleEndOfLineComment: b2, handleRemainingComment: B, getCommentChildNodes: Ae2, willPrintOwnComments: Ee2 };
        } }), qt2 = te2({ "src/language-js/needs-parens.js"(e, r) {
          ne2();
          var t8 = lt(), s = Kn2(), { getFunctionParameters: a, getLeftSidePathName: n, hasFlowShorthandAnnotationComment: u, hasNakedLeftSide: i, hasNode: l, isBitwiseOperator: p, startsWithNoLookaheadToken: y, shouldFlatten: h2, getPrecedence: g, isCallExpression: c, isMemberExpression: f2, isObjectProperty: F2, isTSTypeExpression: _ } = Ke2();
          function w(D, T2) {
            let m = D.getParentNode();
            if (!m)
              return false;
            let C = D.getName(), o = D.getNode();
            if (T2.__isInHtmlInterpolation && !T2.bracketSpacing && I2(o) && P(D))
              return true;
            if (E2(o))
              return false;
            if (T2.parser !== "flow" && u(D.getValue()))
              return true;
            if (o.type === "Identifier") {
              if (o.extra && o.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o.name) || C === "left" && (o.name === "async" && !m.await || o.name === "let") && m.type === "ForOfStatement")
                return true;
              if (o.name === "let") {
                var d;
                let S2 = (d = D.findAncestor((b2) => b2.type === "ForOfStatement")) === null || d === void 0 ? void 0 : d.left;
                if (S2 && y(S2, (b2) => b2 === o))
                  return true;
              }
              if (C === "object" && o.name === "let" && m.type === "MemberExpression" && m.computed && !m.optional) {
                let S2 = D.findAncestor((B) => B.type === "ExpressionStatement" || B.type === "ForStatement" || B.type === "ForInStatement"), b2 = S2 ? S2.type === "ExpressionStatement" ? S2.expression : S2.type === "ForStatement" ? S2.init : S2.left : void 0;
                if (b2 && y(b2, (B) => B === o))
                  return true;
              }
              return false;
            }
            if (o.type === "ObjectExpression" || o.type === "FunctionExpression" || o.type === "ClassExpression" || o.type === "DoExpression") {
              var v2;
              let S2 = (v2 = D.findAncestor((b2) => b2.type === "ExpressionStatement")) === null || v2 === void 0 ? void 0 : v2.expression;
              if (S2 && y(S2, (b2) => b2 === o))
                return true;
            }
            switch (m.type) {
              case "ParenthesizedExpression":
                return false;
              case "ClassDeclaration":
              case "ClassExpression": {
                if (C === "superClass" && (o.type === "ArrowFunctionExpression" || o.type === "AssignmentExpression" || o.type === "AwaitExpression" || o.type === "BinaryExpression" || o.type === "ConditionalExpression" || o.type === "LogicalExpression" || o.type === "NewExpression" || o.type === "ObjectExpression" || o.type === "SequenceExpression" || o.type === "TaggedTemplateExpression" || o.type === "UnaryExpression" || o.type === "UpdateExpression" || o.type === "YieldExpression" || o.type === "TSNonNullExpression"))
                  return true;
                break;
              }
              case "ExportDefaultDeclaration":
                return $(D, T2) || o.type === "SequenceExpression";
              case "Decorator": {
                if (C === "expression") {
                  if (f2(o) && o.computed)
                    return true;
                  let S2 = false, b2 = false, B = o;
                  for (; B; )
                    switch (B.type) {
                      case "MemberExpression":
                        b2 = true, B = B.object;
                        break;
                      case "CallExpression":
                        if (b2 || S2)
                          return T2.parser !== "typescript";
                        S2 = true, B = B.callee;
                        break;
                      case "Identifier":
                        return false;
                      case "TaggedTemplateExpression":
                        return T2.parser !== "typescript";
                      default:
                        return true;
                    }
                  return true;
                }
                break;
              }
              case "ArrowFunctionExpression": {
                if (C === "body" && o.type !== "SequenceExpression" && y(o, (S2) => S2.type === "ObjectExpression"))
                  return true;
                break;
              }
            }
            switch (o.type) {
              case "UpdateExpression":
                if (m.type === "UnaryExpression")
                  return o.prefix && (o.operator === "++" && m.operator === "+" || o.operator === "--" && m.operator === "-");
              case "UnaryExpression":
                switch (m.type) {
                  case "UnaryExpression":
                    return o.operator === m.operator && (o.operator === "+" || o.operator === "-");
                  case "BindExpression":
                    return true;
                  case "MemberExpression":
                  case "OptionalMemberExpression":
                    return C === "object";
                  case "TaggedTemplateExpression":
                    return true;
                  case "NewExpression":
                  case "CallExpression":
                  case "OptionalCallExpression":
                    return C === "callee";
                  case "BinaryExpression":
                    return C === "left" && m.operator === "**";
                  case "TSNonNullExpression":
                    return true;
                  default:
                    return false;
                }
              case "BinaryExpression": {
                if (m.type === "UpdateExpression" || o.operator === "in" && N2(D))
                  return true;
                if (o.operator === "|>" && o.extra && o.extra.parenthesized) {
                  let S2 = D.getParentNode(1);
                  if (S2.type === "BinaryExpression" && S2.operator === "|>")
                    return true;
                }
              }
              case "TSTypeAssertion":
              case "TSAsExpression":
              case "TSSatisfiesExpression":
              case "LogicalExpression":
                switch (m.type) {
                  case "TSSatisfiesExpression":
                  case "TSAsExpression":
                    return !_(o);
                  case "ConditionalExpression":
                    return _(o);
                  case "CallExpression":
                  case "NewExpression":
                  case "OptionalCallExpression":
                    return C === "callee";
                  case "ClassExpression":
                  case "ClassDeclaration":
                    return C === "superClass";
                  case "TSTypeAssertion":
                  case "TaggedTemplateExpression":
                  case "UnaryExpression":
                  case "JSXSpreadAttribute":
                  case "SpreadElement":
                  case "SpreadProperty":
                  case "BindExpression":
                  case "AwaitExpression":
                  case "TSNonNullExpression":
                  case "UpdateExpression":
                    return true;
                  case "MemberExpression":
                  case "OptionalMemberExpression":
                    return C === "object";
                  case "AssignmentExpression":
                  case "AssignmentPattern":
                    return C === "left" && (o.type === "TSTypeAssertion" || _(o));
                  case "LogicalExpression":
                    if (o.type === "LogicalExpression")
                      return m.operator !== o.operator;
                  case "BinaryExpression": {
                    let { operator: S2, type: b2 } = o;
                    if (!S2 && b2 !== "TSTypeAssertion")
                      return true;
                    let B = g(S2), k2 = m.operator, M = g(k2);
                    return M > B || C === "right" && M === B || M === B && !h2(k2, S2) ? true : M < B && S2 === "%" ? k2 === "+" || k2 === "-" : !!p(k2);
                  }
                  default:
                    return false;
                }
              case "SequenceExpression":
                switch (m.type) {
                  case "ReturnStatement":
                    return false;
                  case "ForStatement":
                    return false;
                  case "ExpressionStatement":
                    return C !== "expression";
                  case "ArrowFunctionExpression":
                    return C !== "body";
                  default:
                    return true;
                }
              case "YieldExpression":
                if (m.type === "UnaryExpression" || m.type === "AwaitExpression" || _(m) || m.type === "TSNonNullExpression")
                  return true;
              case "AwaitExpression":
                switch (m.type) {
                  case "TaggedTemplateExpression":
                  case "UnaryExpression":
                  case "LogicalExpression":
                  case "SpreadElement":
                  case "SpreadProperty":
                  case "TSAsExpression":
                  case "TSSatisfiesExpression":
                  case "TSNonNullExpression":
                  case "BindExpression":
                    return true;
                  case "MemberExpression":
                  case "OptionalMemberExpression":
                    return C === "object";
                  case "NewExpression":
                  case "CallExpression":
                  case "OptionalCallExpression":
                    return C === "callee";
                  case "ConditionalExpression":
                    return C === "test";
                  case "BinaryExpression":
                    return !(!o.argument && m.operator === "|>");
                  default:
                    return false;
                }
              case "TSConditionalType":
              case "TSFunctionType":
              case "TSConstructorType":
                if (C === "extendsType" && m.type === "TSConditionalType") {
                  if (o.type === "TSConditionalType")
                    return true;
                  let { typeAnnotation: S2 } = o.returnType || o.typeAnnotation;
                  if (S2.type === "TSTypePredicate" && S2.typeAnnotation && (S2 = S2.typeAnnotation.typeAnnotation), S2.type === "TSInferType" && S2.typeParameter.constraint)
                    return true;
                }
                if (C === "checkType" && m.type === "TSConditionalType")
                  return true;
              case "TSUnionType":
              case "TSIntersectionType":
                if ((m.type === "TSUnionType" || m.type === "TSIntersectionType") && m.types.length > 1 && (!o.types || o.types.length > 1))
                  return true;
              case "TSInferType":
                if (o.type === "TSInferType" && m.type === "TSRestType")
                  return false;
              case "TSTypeOperator":
                return m.type === "TSArrayType" || m.type === "TSOptionalType" || m.type === "TSRestType" || C === "objectType" && m.type === "TSIndexedAccessType" || m.type === "TSTypeOperator" || m.type === "TSTypeAnnotation" && D.getParentNode(1).type.startsWith("TSJSDoc");
              case "TSTypeQuery":
                return C === "objectType" && m.type === "TSIndexedAccessType" || C === "elementType" && m.type === "TSArrayType";
              case "TypeofTypeAnnotation":
                return C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType") || C === "elementType" && m.type === "ArrayTypeAnnotation";
              case "ArrayTypeAnnotation":
                return m.type === "NullableTypeAnnotation";
              case "IntersectionTypeAnnotation":
              case "UnionTypeAnnotation":
                return m.type === "ArrayTypeAnnotation" || m.type === "NullableTypeAnnotation" || m.type === "IntersectionTypeAnnotation" || m.type === "UnionTypeAnnotation" || C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
              case "NullableTypeAnnotation":
                return m.type === "ArrayTypeAnnotation" || C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
              case "FunctionTypeAnnotation": {
                let S2 = m.type === "NullableTypeAnnotation" ? D.getParentNode(1) : m;
                return S2.type === "UnionTypeAnnotation" || S2.type === "IntersectionTypeAnnotation" || S2.type === "ArrayTypeAnnotation" || C === "objectType" && (S2.type === "IndexedAccessType" || S2.type === "OptionalIndexedAccessType") || S2.type === "NullableTypeAnnotation" || m.type === "FunctionTypeParam" && m.name === null && a(o).some((b2) => b2.typeAnnotation && b2.typeAnnotation.type === "NullableTypeAnnotation");
              }
              case "OptionalIndexedAccessType":
                return C === "objectType" && m.type === "IndexedAccessType";
              case "StringLiteral":
              case "NumericLiteral":
              case "Literal":
                if (typeof o.value == "string" && m.type === "ExpressionStatement" && !m.directive) {
                  let S2 = D.getParentNode(1);
                  return S2.type === "Program" || S2.type === "BlockStatement";
                }
                return C === "object" && m.type === "MemberExpression" && typeof o.value == "number";
              case "AssignmentExpression": {
                let S2 = D.getParentNode(1);
                return C === "body" && m.type === "ArrowFunctionExpression" ? true : C === "key" && (m.type === "ClassProperty" || m.type === "PropertyDefinition") && m.computed || (C === "init" || C === "update") && m.type === "ForStatement" ? false : m.type === "ExpressionStatement" ? o.left.type === "ObjectPattern" : !(C === "key" && m.type === "TSPropertySignature" || m.type === "AssignmentExpression" || m.type === "SequenceExpression" && S2 && S2.type === "ForStatement" && (S2.init === m || S2.update === m) || C === "value" && m.type === "Property" && S2 && S2.type === "ObjectPattern" && S2.properties.includes(m) || m.type === "NGChainedExpression");
              }
              case "ConditionalExpression":
                switch (m.type) {
                  case "TaggedTemplateExpression":
                  case "UnaryExpression":
                  case "SpreadElement":
                  case "SpreadProperty":
                  case "BinaryExpression":
                  case "LogicalExpression":
                  case "NGPipeExpression":
                  case "ExportDefaultDeclaration":
                  case "AwaitExpression":
                  case "JSXSpreadAttribute":
                  case "TSTypeAssertion":
                  case "TypeCastExpression":
                  case "TSAsExpression":
                  case "TSSatisfiesExpression":
                  case "TSNonNullExpression":
                    return true;
                  case "NewExpression":
                  case "CallExpression":
                  case "OptionalCallExpression":
                    return C === "callee";
                  case "ConditionalExpression":
                    return C === "test";
                  case "MemberExpression":
                  case "OptionalMemberExpression":
                    return C === "object";
                  default:
                    return false;
                }
              case "FunctionExpression":
                switch (m.type) {
                  case "NewExpression":
                  case "CallExpression":
                  case "OptionalCallExpression":
                    return C === "callee";
                  case "TaggedTemplateExpression":
                    return true;
                  default:
                    return false;
                }
              case "ArrowFunctionExpression":
                switch (m.type) {
                  case "BinaryExpression":
                    return m.operator !== "|>" || o.extra && o.extra.parenthesized;
                  case "NewExpression":
                  case "CallExpression":
                  case "OptionalCallExpression":
                    return C === "callee";
                  case "MemberExpression":
                  case "OptionalMemberExpression":
                    return C === "object";
                  case "TSAsExpression":
                  case "TSSatisfiesExpression":
                  case "TSNonNullExpression":
                  case "BindExpression":
                  case "TaggedTemplateExpression":
                  case "UnaryExpression":
                  case "LogicalExpression":
                  case "AwaitExpression":
                  case "TSTypeAssertion":
                    return true;
                  case "ConditionalExpression":
                    return C === "test";
                  default:
                    return false;
                }
              case "ClassExpression":
                if (s(o.decorators))
                  return true;
                switch (m.type) {
                  case "NewExpression":
                    return C === "callee";
                  default:
                    return false;
                }
              case "OptionalMemberExpression":
              case "OptionalCallExpression": {
                let S2 = D.getParentNode(1);
                if (C === "object" && m.type === "MemberExpression" || C === "callee" && (m.type === "CallExpression" || m.type === "NewExpression") || m.type === "TSNonNullExpression" && S2.type === "MemberExpression" && S2.object === m)
                  return true;
              }
              case "CallExpression":
              case "MemberExpression":
              case "TaggedTemplateExpression":
              case "TSNonNullExpression":
                if (C === "callee" && (m.type === "BindExpression" || m.type === "NewExpression")) {
                  let S2 = o;
                  for (; S2; )
                    switch (S2.type) {
                      case "CallExpression":
                      case "OptionalCallExpression":
                        return true;
                      case "MemberExpression":
                      case "OptionalMemberExpression":
                      case "BindExpression":
                        S2 = S2.object;
                        break;
                      case "TaggedTemplateExpression":
                        S2 = S2.tag;
                        break;
                      case "TSNonNullExpression":
                        S2 = S2.expression;
                        break;
                      default:
                        return false;
                    }
                }
                return false;
              case "BindExpression":
                return C === "callee" && (m.type === "BindExpression" || m.type === "NewExpression") || C === "object" && f2(m);
              case "NGPipeExpression":
                return !(m.type === "NGRoot" || m.type === "NGMicrosyntaxExpression" || m.type === "ObjectProperty" && !(o.extra && o.extra.parenthesized) || m.type === "ArrayExpression" || c(m) && m.arguments[C] === o || C === "right" && m.type === "NGPipeExpression" || C === "property" && m.type === "MemberExpression" || m.type === "AssignmentExpression");
              case "JSXFragment":
              case "JSXElement":
                return C === "callee" || C === "left" && m.type === "BinaryExpression" && m.operator === "<" || m.type !== "ArrayExpression" && m.type !== "ArrowFunctionExpression" && m.type !== "AssignmentExpression" && m.type !== "AssignmentPattern" && m.type !== "BinaryExpression" && m.type !== "NewExpression" && m.type !== "ConditionalExpression" && m.type !== "ExpressionStatement" && m.type !== "JsExpressionRoot" && m.type !== "JSXAttribute" && m.type !== "JSXElement" && m.type !== "JSXExpressionContainer" && m.type !== "JSXFragment" && m.type !== "LogicalExpression" && !c(m) && !F2(m) && m.type !== "ReturnStatement" && m.type !== "ThrowStatement" && m.type !== "TypeCastExpression" && m.type !== "VariableDeclarator" && m.type !== "YieldExpression";
              case "TypeAnnotation":
                return C === "returnType" && m.type === "ArrowFunctionExpression" && x2(o);
            }
            return false;
          }
          function E2(D) {
            return D.type === "BlockStatement" || D.type === "BreakStatement" || D.type === "ClassBody" || D.type === "ClassDeclaration" || D.type === "ClassMethod" || D.type === "ClassProperty" || D.type === "PropertyDefinition" || D.type === "ClassPrivateProperty" || D.type === "ContinueStatement" || D.type === "DebuggerStatement" || D.type === "DeclareClass" || D.type === "DeclareExportAllDeclaration" || D.type === "DeclareExportDeclaration" || D.type === "DeclareFunction" || D.type === "DeclareInterface" || D.type === "DeclareModule" || D.type === "DeclareModuleExports" || D.type === "DeclareVariable" || D.type === "DoWhileStatement" || D.type === "EnumDeclaration" || D.type === "ExportAllDeclaration" || D.type === "ExportDefaultDeclaration" || D.type === "ExportNamedDeclaration" || D.type === "ExpressionStatement" || D.type === "ForInStatement" || D.type === "ForOfStatement" || D.type === "ForStatement" || D.type === "FunctionDeclaration" || D.type === "IfStatement" || D.type === "ImportDeclaration" || D.type === "InterfaceDeclaration" || D.type === "LabeledStatement" || D.type === "MethodDefinition" || D.type === "ReturnStatement" || D.type === "SwitchStatement" || D.type === "ThrowStatement" || D.type === "TryStatement" || D.type === "TSDeclareFunction" || D.type === "TSEnumDeclaration" || D.type === "TSImportEqualsDeclaration" || D.type === "TSInterfaceDeclaration" || D.type === "TSModuleDeclaration" || D.type === "TSNamespaceExportDeclaration" || D.type === "TypeAlias" || D.type === "VariableDeclaration" || D.type === "WhileStatement" || D.type === "WithStatement";
          }
          function N2(D) {
            let T2 = 0, m = D.getValue();
            for (; m; ) {
              let C = D.getParentNode(T2++);
              if (C && C.type === "ForStatement" && C.init === m)
                return true;
              m = C;
            }
            return false;
          }
          function x2(D) {
            return l(D, (T2) => T2.type === "ObjectTypeAnnotation" && l(T2, (m) => m.type === "FunctionTypeAnnotation" || void 0) || void 0);
          }
          function I2(D) {
            switch (D.type) {
              case "ObjectExpression":
                return true;
              default:
                return false;
            }
          }
          function P(D) {
            let T2 = D.getValue(), m = D.getParentNode(), C = D.getName();
            switch (m.type) {
              case "NGPipeExpression":
                if (typeof C == "number" && m.arguments[C] === T2 && m.arguments.length - 1 === C)
                  return D.callParent(P);
                break;
              case "ObjectProperty":
                if (C === "value") {
                  let o = D.getParentNode(1);
                  return t8(o.properties) === m;
                }
                break;
              case "BinaryExpression":
              case "LogicalExpression":
                if (C === "right")
                  return D.callParent(P);
                break;
              case "ConditionalExpression":
                if (C === "alternate")
                  return D.callParent(P);
                break;
              case "UnaryExpression":
                if (m.prefix)
                  return D.callParent(P);
                break;
            }
            return false;
          }
          function $(D, T2) {
            let m = D.getValue(), C = D.getParentNode();
            return m.type === "FunctionExpression" || m.type === "ClassExpression" ? C.type === "ExportDefaultDeclaration" || !w(D, T2) : !i(m) || C.type !== "ExportDefaultDeclaration" && w(D, T2) ? false : D.call((o) => $(o, T2), ...n(D, m));
          }
          r.exports = w;
        } }), Fo = te2({ "src/language-js/print-preprocess.js"(e, r) {
          ne2();
          function t8(s, a) {
            switch (a.parser) {
              case "json":
              case "json5":
              case "json-stringify":
              case "__js_expression":
              case "__vue_expression":
              case "__vue_ts_expression":
                return Object.assign(Object.assign({}, s), {}, { type: a.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: s, comments: [], rootMarker: a.rootMarker });
              default:
                return s;
            }
          }
          r.exports = t8;
        } }), pd = te2({ "src/language-js/print/html-binding.js"(e, r) {
          ne2();
          var { builders: { join: t8, line: s, group: a, softline: n, indent: u } } = qe2();
          function i(p, y, h2) {
            let g = p.getValue();
            if (y.__onHtmlBindingRoot && p.getName() === null && y.__onHtmlBindingRoot(g, y), g.type === "File") {
              if (y.__isVueForBindingLeft)
                return p.call((c) => {
                  let f2 = t8([",", s], c.map(h2, "params")), { params: F2 } = c.getValue();
                  return F2.length === 1 ? f2 : ["(", u([n, a(f2)]), n, ")"];
                }, "program", "body", 0);
              if (y.__isVueBindings)
                return p.call((c) => t8([",", s], c.map(h2, "params")), "program", "body", 0);
            }
          }
          function l(p) {
            switch (p.type) {
              case "MemberExpression":
                switch (p.property.type) {
                  case "Identifier":
                  case "NumericLiteral":
                  case "StringLiteral":
                    return l(p.object);
                }
                return false;
              case "Identifier":
                return true;
              default:
                return false;
            }
          }
          r.exports = { isVueEventBindingExpression: l, printHtmlBinding: i };
        } }), ru = te2({ "src/language-js/print/binaryish.js"(e, r) {
          ne2();
          var { printComments: t8 } = et2(), { getLast: s } = Ue2(), { builders: { join: a, line: n, softline: u, group: i, indent: l, align: p, indentIfBreak: y }, utils: { cleanDoc: h2, getDocParts: g, isConcat: c } } = qe2(), { hasLeadingOwnLineComment: f2, isBinaryish: F2, isJsxNode: _, shouldFlatten: w, hasComment: E2, CommentCheckFlags: N2, isCallExpression: x2, isMemberExpression: I2, isObjectProperty: P, isEnabledHackPipeline: $ } = Ke2(), D = 0;
          function T2(o, d, v2) {
            let S2 = o.getValue(), b2 = o.getParentNode(), B = o.getParentNode(1), k2 = S2 !== b2.body && (b2.type === "IfStatement" || b2.type === "WhileStatement" || b2.type === "SwitchStatement" || b2.type === "DoWhileStatement"), M = $(d) && S2.operator === "|>", R2 = m(o, v2, d, false, k2);
            if (k2)
              return R2;
            if (M)
              return i(R2);
            if (x2(b2) && b2.callee === S2 || b2.type === "UnaryExpression" || I2(b2) && !b2.computed)
              return i([l([u, ...R2]), u]);
            let q = b2.type === "ReturnStatement" || b2.type === "ThrowStatement" || b2.type === "JSXExpressionContainer" && B.type === "JSXAttribute" || S2.operator !== "|" && b2.type === "JsExpressionRoot" || S2.type !== "NGPipeExpression" && (b2.type === "NGRoot" && d.parser === "__ng_binding" || b2.type === "NGMicrosyntaxExpression" && B.type === "NGMicrosyntax" && B.body.length === 1) || S2 === b2.body && b2.type === "ArrowFunctionExpression" || S2 !== b2.body && b2.type === "ForStatement" || b2.type === "ConditionalExpression" && B.type !== "ReturnStatement" && B.type !== "ThrowStatement" && !x2(B) || b2.type === "TemplateLiteral", J2 = b2.type === "AssignmentExpression" || b2.type === "VariableDeclarator" || b2.type === "ClassProperty" || b2.type === "PropertyDefinition" || b2.type === "TSAbstractPropertyDefinition" || b2.type === "ClassPrivateProperty" || P(b2), L2 = F2(S2.left) && w(S2.operator, S2.left.operator);
            if (q || C(S2) && !L2 || !C(S2) && J2)
              return i(R2);
            if (R2.length === 0)
              return "";
            let Q2 = _(S2.right), V2 = R2.findIndex((W2) => typeof W2 != "string" && !Array.isArray(W2) && W2.type === "group"), j2 = R2.slice(0, V2 === -1 ? 1 : V2 + 1), Y2 = R2.slice(j2.length, Q2 ? -1 : void 0), ie2 = Symbol("logicalChain-" + ++D), ee2 = i([...j2, l(Y2)], { id: ie2 });
            if (!Q2)
              return ee2;
            let ce2 = s(R2);
            return i([ee2, y(ce2, { groupId: ie2 })]);
          }
          function m(o, d, v2, S2, b2) {
            let B = o.getValue();
            if (!F2(B))
              return [i(d())];
            let k2 = [];
            w(B.operator, B.left.operator) ? k2 = o.call((Y2) => m(Y2, d, v2, true, b2), "left") : k2.push(i(d("left")));
            let M = C(B), R2 = (B.operator === "|>" || B.type === "NGPipeExpression" || B.operator === "|" && v2.parser === "__vue_expression") && !f2(v2.originalText, B.right), q = B.type === "NGPipeExpression" ? "|" : B.operator, J2 = B.type === "NGPipeExpression" && B.arguments.length > 0 ? i(l([n, ": ", a([n, ": "], o.map(d, "arguments").map((Y2) => p(2, i(Y2))))])) : "", L2;
            if (M)
              L2 = [q, " ", d("right"), J2];
            else {
              let ie2 = $(v2) && q === "|>" ? o.call((ee2) => m(ee2, d, v2, true, b2), "right") : d("right");
              L2 = [R2 ? n : "", q, R2 ? " " : n, ie2, J2];
            }
            let Q2 = o.getParentNode(), V2 = E2(B.left, N2.Trailing | N2.Line), j2 = V2 || !(b2 && B.type === "LogicalExpression") && Q2.type !== B.type && B.left.type !== B.type && B.right.type !== B.type;
            if (k2.push(R2 ? "" : " ", j2 ? i(L2, { shouldBreak: V2 }) : L2), S2 && E2(B)) {
              let Y2 = h2(t8(o, k2, v2));
              return c(Y2) || Y2.type === "fill" ? g(Y2) : [Y2];
            }
            return k2;
          }
          function C(o) {
            return o.type !== "LogicalExpression" ? false : !!(o.right.type === "ObjectExpression" && o.right.properties.length > 0 || o.right.type === "ArrayExpression" && o.right.elements.length > 0 || _(o.right));
          }
          r.exports = { printBinaryishExpression: T2, shouldInlineLogicalExpression: C };
        } }), fd = te2({ "src/language-js/print/angular.js"(e, r) {
          ne2();
          var { builders: { join: t8, line: s, group: a } } = qe2(), { hasNode: n, hasComment: u, getComments: i } = Ke2(), { printBinaryishExpression: l } = ru();
          function p(g, c, f2) {
            let F2 = g.getValue();
            if (F2.type.startsWith("NG"))
              switch (F2.type) {
                case "NGRoot":
                  return [f2("node"), u(F2.node) ? " //" + i(F2.node)[0].value.trimEnd() : ""];
                case "NGPipeExpression":
                  return l(g, c, f2);
                case "NGChainedExpression":
                  return a(t8([";", s], g.map((_) => h2(_) ? f2() : ["(", f2(), ")"], "expressions")));
                case "NGEmptyExpression":
                  return "";
                case "NGQuotedExpression":
                  return [F2.prefix, ": ", F2.value.trim()];
                case "NGMicrosyntax":
                  return g.map((_, w) => [w === 0 ? "" : y(_.getValue(), w, F2) ? " " : [";", s], f2()], "body");
                case "NGMicrosyntaxKey":
                  return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(F2.name) ? F2.name : JSON.stringify(F2.name);
                case "NGMicrosyntaxExpression":
                  return [f2("expression"), F2.alias === null ? "" : [" as ", f2("alias")]];
                case "NGMicrosyntaxKeyedExpression": {
                  let _ = g.getName(), w = g.getParentNode(), E2 = y(F2, _, w) || (_ === 1 && (F2.key.name === "then" || F2.key.name === "else") || _ === 2 && F2.key.name === "else" && w.body[_ - 1].type === "NGMicrosyntaxKeyedExpression" && w.body[_ - 1].key.name === "then") && w.body[0].type === "NGMicrosyntaxExpression";
                  return [f2("key"), E2 ? " " : ": ", f2("expression")];
                }
                case "NGMicrosyntaxLet":
                  return ["let ", f2("key"), F2.value === null ? "" : [" = ", f2("value")]];
                case "NGMicrosyntaxAs":
                  return [f2("key"), " as ", f2("alias")];
                default:
                  throw new Error(`Unknown Angular node type: ${JSON.stringify(F2.type)}.`);
              }
          }
          function y(g, c, f2) {
            return g.type === "NGMicrosyntaxKeyedExpression" && g.key.name === "of" && c === 1 && f2.body[0].type === "NGMicrosyntaxLet" && f2.body[0].value === null;
          }
          function h2(g) {
            return n(g.getValue(), (c) => {
              switch (c.type) {
                case void 0:
                  return false;
                case "CallExpression":
                case "OptionalCallExpression":
                case "AssignmentExpression":
                  return true;
              }
            });
          }
          r.exports = { printAngular: p };
        } }), Dd = te2({ "src/language-js/print/jsx.js"(e, r) {
          ne2();
          var { printComments: t8, printDanglingComments: s, printCommentsSeparately: a } = et2(), { builders: { line: n, hardline: u, softline: i, group: l, indent: p, conditionalGroup: y, fill: h2, ifBreak: g, lineSuffixBoundary: c, join: f2 }, utils: { willBreak: F2 } } = qe2(), { getLast: _, getPreferredQuote: w } = Ue2(), { isJsxNode: E2, rawText: N2, isCallExpression: x2, isStringLiteral: I2, isBinaryish: P, hasComment: $, CommentCheckFlags: D, hasNodeIgnoreComment: T2 } = Ke2(), m = qt2(), { willPrintOwnComments: C } = Eo2(), o = (U2) => U2 === "" || U2 === n || U2 === u || U2 === i;
          function d(U2, Z, se2) {
            let fe2 = U2.getValue();
            if (fe2.type === "JSXElement" && de2(fe2))
              return [se2("openingElement"), se2("closingElement")];
            let ge2 = fe2.type === "JSXElement" ? se2("openingElement") : se2("openingFragment"), he2 = fe2.type === "JSXElement" ? se2("closingElement") : se2("closingFragment");
            if (fe2.children.length === 1 && fe2.children[0].type === "JSXExpressionContainer" && (fe2.children[0].expression.type === "TemplateLiteral" || fe2.children[0].expression.type === "TaggedTemplateExpression"))
              return [ge2, ...U2.map(se2, "children"), he2];
            fe2.children = fe2.children.map((A2) => Fe2(A2) ? { type: "JSXText", value: " ", raw: " " } : A2);
            let we2 = fe2.children.some(E2), ke2 = fe2.children.filter((A2) => A2.type === "JSXExpressionContainer").length > 1, Re2 = fe2.type === "JSXElement" && fe2.openingElement.attributes.length > 1, Ne2 = F2(ge2) || we2 || Re2 || ke2, Pe2 = U2.getParentNode().rootMarker === "mdx", oe2 = Z.singleQuote ? "{' '}" : '{" "}', H2 = Pe2 ? " " : g([oe2, i], " "), pe2 = fe2.openingElement && fe2.openingElement.name && fe2.openingElement.name.name === "fbt", X2 = v2(U2, Z, se2, H2, pe2), le2 = fe2.children.some((A2) => ue2(A2));
            for (let A2 = X2.length - 2; A2 >= 0; A2--) {
              let G2 = X2[A2] === "" && X2[A2 + 1] === "", re2 = X2[A2] === u && X2[A2 + 1] === "" && X2[A2 + 2] === u, ye = (X2[A2] === i || X2[A2] === u) && X2[A2 + 1] === "" && X2[A2 + 2] === H2, Ce2 = X2[A2] === H2 && X2[A2 + 1] === "" && (X2[A2 + 2] === i || X2[A2 + 2] === u), Be2 = X2[A2] === H2 && X2[A2 + 1] === "" && X2[A2 + 2] === H2, ve2 = X2[A2] === i && X2[A2 + 1] === "" && X2[A2 + 2] === u || X2[A2] === u && X2[A2 + 1] === "" && X2[A2 + 2] === i;
              re2 && le2 || G2 || ye || Be2 || ve2 ? X2.splice(A2, 2) : Ce2 && X2.splice(A2 + 1, 2);
            }
            for (; X2.length > 0 && o(_(X2)); )
              X2.pop();
            for (; X2.length > 1 && o(X2[0]) && o(X2[1]); )
              X2.shift(), X2.shift();
            let Ae2 = [];
            for (let [A2, G2] of X2.entries()) {
              if (G2 === H2) {
                if (A2 === 1 && X2[A2 - 1] === "") {
                  if (X2.length === 2) {
                    Ae2.push(oe2);
                    continue;
                  }
                  Ae2.push([oe2, u]);
                  continue;
                } else if (A2 === X2.length - 1) {
                  Ae2.push(oe2);
                  continue;
                } else if (X2[A2 - 1] === "" && X2[A2 - 2] === u) {
                  Ae2.push(oe2);
                  continue;
                }
              }
              Ae2.push(G2), F2(G2) && (Ne2 = true);
            }
            let Ee2 = le2 ? h2(Ae2) : l(Ae2, { shouldBreak: true });
            if (Pe2)
              return Ee2;
            let De2 = l([ge2, p([u, Ee2]), u, he2]);
            return Ne2 ? De2 : y([l([ge2, ...X2, he2]), De2]);
          }
          function v2(U2, Z, se2, fe2, ge2) {
            let he2 = [];
            return U2.each((we2, ke2, Re2) => {
              let Ne2 = we2.getValue();
              if (Ne2.type === "JSXText") {
                let Pe2 = N2(Ne2);
                if (ue2(Ne2)) {
                  let oe2 = Pe2.split(ce2);
                  if (oe2[0] === "") {
                    if (he2.push(""), oe2.shift(), /\n/.test(oe2[0])) {
                      let pe2 = Re2[ke2 + 1];
                      he2.push(b2(ge2, oe2[1], Ne2, pe2));
                    } else
                      he2.push(fe2);
                    oe2.shift();
                  }
                  let H2;
                  if (_(oe2) === "" && (oe2.pop(), H2 = oe2.pop()), oe2.length === 0)
                    return;
                  for (let [pe2, X2] of oe2.entries())
                    pe2 % 2 === 1 ? he2.push(n) : he2.push(X2);
                  if (H2 !== void 0)
                    if (/\n/.test(H2)) {
                      let pe2 = Re2[ke2 + 1];
                      he2.push(b2(ge2, _(he2), Ne2, pe2));
                    } else
                      he2.push(fe2);
                  else {
                    let pe2 = Re2[ke2 + 1];
                    he2.push(S2(ge2, _(he2), Ne2, pe2));
                  }
                } else
                  /\n/.test(Pe2) ? Pe2.match(/\n/g).length > 1 && he2.push("", u) : he2.push("", fe2);
              } else {
                let Pe2 = se2();
                he2.push(Pe2);
                let oe2 = Re2[ke2 + 1];
                if (oe2 && ue2(oe2)) {
                  let pe2 = K2(N2(oe2)).split(ce2)[0];
                  he2.push(S2(ge2, pe2, Ne2, oe2));
                } else
                  he2.push(u);
              }
            }, "children"), he2;
          }
          function S2(U2, Z, se2, fe2) {
            return U2 ? "" : se2.type === "JSXElement" && !se2.closingElement || fe2 && fe2.type === "JSXElement" && !fe2.closingElement ? Z.length === 1 ? i : u : i;
          }
          function b2(U2, Z, se2, fe2) {
            return U2 ? u : Z.length === 1 ? se2.type === "JSXElement" && !se2.closingElement || fe2 && fe2.type === "JSXElement" && !fe2.closingElement ? u : i : u;
          }
          function B(U2, Z, se2) {
            let fe2 = U2.getParentNode();
            if (!fe2 || { ArrayExpression: true, JSXAttribute: true, JSXElement: true, JSXExpressionContainer: true, JSXFragment: true, ExpressionStatement: true, CallExpression: true, OptionalCallExpression: true, ConditionalExpression: true, JsExpressionRoot: true }[fe2.type])
              return Z;
            let he2 = U2.match(void 0, (ke2) => ke2.type === "ArrowFunctionExpression", x2, (ke2) => ke2.type === "JSXExpressionContainer"), we2 = m(U2, se2);
            return l([we2 ? "" : g("("), p([i, Z]), i, we2 ? "" : g(")")], { shouldBreak: he2 });
          }
          function k2(U2, Z, se2) {
            let fe2 = U2.getValue(), ge2 = [];
            if (ge2.push(se2("name")), fe2.value) {
              let he2;
              if (I2(fe2.value)) {
                let ke2 = N2(fe2.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), { escaped: Re2, quote: Ne2, regex: Pe2 } = w(ke2, Z.jsxSingleQuote ? "'" : '"');
                ke2 = ke2.replace(Pe2, Re2);
                let { leading: oe2, trailing: H2 } = U2.call(() => a(U2, Z), "value");
                he2 = [oe2, Ne2, ke2, Ne2, H2];
              } else
                he2 = se2("value");
              ge2.push("=", he2);
            }
            return ge2;
          }
          function M(U2, Z, se2) {
            let fe2 = U2.getValue(), ge2 = (he2, we2) => he2.type === "JSXEmptyExpression" || !$(he2) && (he2.type === "ArrayExpression" || he2.type === "ObjectExpression" || he2.type === "ArrowFunctionExpression" || he2.type === "AwaitExpression" && (ge2(he2.argument, he2) || he2.argument.type === "JSXElement") || x2(he2) || he2.type === "FunctionExpression" || he2.type === "TemplateLiteral" || he2.type === "TaggedTemplateExpression" || he2.type === "DoExpression" || E2(we2) && (he2.type === "ConditionalExpression" || P(he2)));
            return ge2(fe2.expression, U2.getParentNode(0)) ? l(["{", se2("expression"), c, "}"]) : l(["{", p([i, se2("expression")]), i, c, "}"]);
          }
          function R2(U2, Z, se2) {
            let fe2 = U2.getValue(), ge2 = fe2.name && $(fe2.name) || fe2.typeParameters && $(fe2.typeParameters);
            if (fe2.selfClosing && fe2.attributes.length === 0 && !ge2)
              return ["<", se2("name"), se2("typeParameters"), " />"];
            if (fe2.attributes && fe2.attributes.length === 1 && fe2.attributes[0].value && I2(fe2.attributes[0].value) && !fe2.attributes[0].value.value.includes(`
`) && !ge2 && !$(fe2.attributes[0]))
              return l(["<", se2("name"), se2("typeParameters"), " ", ...U2.map(se2, "attributes"), fe2.selfClosing ? " />" : ">"]);
            let he2 = fe2.attributes && fe2.attributes.some((ke2) => ke2.value && I2(ke2.value) && ke2.value.value.includes(`
`)), we2 = Z.singleAttributePerLine && fe2.attributes.length > 1 ? u : n;
            return l(["<", se2("name"), se2("typeParameters"), p(U2.map(() => [we2, se2()], "attributes")), ...q(fe2, Z, ge2)], { shouldBreak: he2 });
          }
          function q(U2, Z, se2) {
            return U2.selfClosing ? [n, "/>"] : J2(U2, Z, se2) ? [">"] : [i, ">"];
          }
          function J2(U2, Z, se2) {
            let fe2 = U2.attributes.length > 0 && $(_(U2.attributes), D.Trailing);
            return U2.attributes.length === 0 && !se2 || (Z.bracketSameLine || Z.jsxBracketSameLine) && (!se2 || U2.attributes.length > 0) && !fe2;
          }
          function L2(U2, Z, se2) {
            let fe2 = U2.getValue(), ge2 = [];
            ge2.push("</");
            let he2 = se2("name");
            return $(fe2.name, D.Leading | D.Line) ? ge2.push(p([u, he2]), u) : $(fe2.name, D.Leading | D.Block) ? ge2.push(" ", he2) : ge2.push(he2), ge2.push(">"), ge2;
          }
          function Q2(U2, Z) {
            let se2 = U2.getValue(), fe2 = $(se2), ge2 = $(se2, D.Line), he2 = se2.type === "JSXOpeningFragment";
            return [he2 ? "<" : "</", p([ge2 ? u : fe2 && !he2 ? " " : "", s(U2, Z, true)]), ge2 ? u : "", ">"];
          }
          function V2(U2, Z, se2) {
            let fe2 = t8(U2, d(U2, Z, se2), Z);
            return B(U2, fe2, Z);
          }
          function j2(U2, Z) {
            let se2 = U2.getValue(), fe2 = $(se2, D.Line);
            return [s(U2, Z, !fe2), fe2 ? u : ""];
          }
          function Y2(U2, Z, se2) {
            let fe2 = U2.getValue();
            return ["{", U2.call((ge2) => {
              let he2 = ["...", se2()], we2 = ge2.getValue();
              return !$(we2) || !C(ge2) ? he2 : [p([i, t8(ge2, he2, Z)]), i];
            }, fe2.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
          }
          function ie2(U2, Z, se2) {
            let fe2 = U2.getValue();
            if (fe2.type.startsWith("JSX"))
              switch (fe2.type) {
                case "JSXAttribute":
                  return k2(U2, Z, se2);
                case "JSXIdentifier":
                  return String(fe2.name);
                case "JSXNamespacedName":
                  return f2(":", [se2("namespace"), se2("name")]);
                case "JSXMemberExpression":
                  return f2(".", [se2("object"), se2("property")]);
                case "JSXSpreadAttribute":
                  return Y2(U2, Z, se2);
                case "JSXSpreadChild":
                  return Y2(U2, Z, se2);
                case "JSXExpressionContainer":
                  return M(U2, Z, se2);
                case "JSXFragment":
                case "JSXElement":
                  return V2(U2, Z, se2);
                case "JSXOpeningElement":
                  return R2(U2, Z, se2);
                case "JSXClosingElement":
                  return L2(U2, Z, se2);
                case "JSXOpeningFragment":
                case "JSXClosingFragment":
                  return Q2(U2, Z);
                case "JSXEmptyExpression":
                  return j2(U2, Z);
                case "JSXText":
                  throw new Error("JSXText should be handled by JSXElement");
                default:
                  throw new Error(`Unknown JSX node type: ${JSON.stringify(fe2.type)}.`);
              }
          }
          var ee2 = ` 
\r	`, ce2 = new RegExp("([" + ee2 + "]+)"), W2 = new RegExp("[^" + ee2 + "]"), K2 = (U2) => U2.replace(new RegExp("(?:^" + ce2.source + "|" + ce2.source + "$)"), "");
          function de2(U2) {
            if (U2.children.length === 0)
              return true;
            if (U2.children.length > 1)
              return false;
            let Z = U2.children[0];
            return Z.type === "JSXText" && !ue2(Z);
          }
          function ue2(U2) {
            return U2.type === "JSXText" && (W2.test(N2(U2)) || !/\n/.test(N2(U2)));
          }
          function Fe2(U2) {
            return U2.type === "JSXExpressionContainer" && I2(U2.expression) && U2.expression.value === " " && !$(U2.expression);
          }
          function z2(U2) {
            let Z = U2.getValue(), se2 = U2.getParentNode();
            if (!se2 || !Z || !E2(Z) || !E2(se2))
              return false;
            let fe2 = se2.children.indexOf(Z), ge2 = null;
            for (let he2 = fe2; he2 > 0; he2--) {
              let we2 = se2.children[he2 - 1];
              if (!(we2.type === "JSXText" && !ue2(we2))) {
                ge2 = we2;
                break;
              }
            }
            return ge2 && ge2.type === "JSXExpressionContainer" && ge2.expression.type === "JSXEmptyExpression" && T2(ge2.expression);
          }
          r.exports = { hasJsxIgnoreComment: z2, printJsx: ie2 };
        } }), ct2 = te2({ "src/language-js/print/misc.js"(e, r) {
          ne2();
          var { isNonEmptyArray: t8 } = Ue2(), { builders: { indent: s, join: a, line: n } } = qe2(), { isFlowAnnotationComment: u } = Ke2();
          function i(_) {
            let w = _.getValue();
            return !w.optional || w.type === "Identifier" && w === _.getParentNode().key ? "" : w.type === "OptionalCallExpression" || w.type === "OptionalMemberExpression" && w.computed ? "?." : "?";
          }
          function l(_) {
            return _.getValue().definite || _.match(void 0, (w, E2) => E2 === "id" && w.type === "VariableDeclarator" && w.definite) ? "!" : "";
          }
          function p(_, w, E2) {
            let N2 = _.getValue();
            return N2.typeArguments ? E2("typeArguments") : N2.typeParameters ? E2("typeParameters") : "";
          }
          function y(_, w, E2) {
            let N2 = _.getValue();
            if (!N2.typeAnnotation)
              return "";
            let x2 = _.getParentNode(), I2 = x2.type === "DeclareFunction" && x2.id === N2;
            return u(w.originalText, N2.typeAnnotation) ? [" /*: ", E2("typeAnnotation"), " */"] : [I2 ? "" : ": ", E2("typeAnnotation")];
          }
          function h2(_, w, E2) {
            return ["::", E2("callee")];
          }
          function g(_, w, E2) {
            let N2 = _.getValue();
            return t8(N2.modifiers) ? [a(" ", _.map(E2, "modifiers")), " "] : "";
          }
          function c(_, w, E2) {
            return _.type === "EmptyStatement" ? ";" : _.type === "BlockStatement" || E2 ? [" ", w] : s([n, w]);
          }
          function f2(_, w, E2) {
            return ["...", E2("argument"), y(_, w, E2)];
          }
          function F2(_, w) {
            let E2 = _.slice(1, -1);
            if (E2.includes('"') || E2.includes("'"))
              return _;
            let N2 = w.singleQuote ? "'" : '"';
            return N2 + E2 + N2;
          }
          r.exports = { printOptionalToken: i, printDefiniteToken: l, printFunctionTypeParameters: p, printBindExpressionCallee: h2, printTypeScriptModifiers: g, printTypeAnnotation: y, printRestSpread: f2, adjustClause: c, printDirective: F2 };
        } }), er2 = te2({ "src/language-js/print/array.js"(e, r) {
          ne2();
          var { printDanglingComments: t8 } = et2(), { builders: { line: s, softline: a, hardline: n, group: u, indent: i, ifBreak: l, fill: p } } = qe2(), { getLast: y, hasNewline: h2 } = Ue2(), { shouldPrintComma: g, hasComment: c, CommentCheckFlags: f2, isNextLineEmpty: F2, isNumericLiteral: _, isSignedNumericLiteral: w } = Ke2(), { locStart: E2 } = ut2(), { printOptionalToken: N2, printTypeAnnotation: x2 } = ct2();
          function I2(T2, m, C) {
            let o = T2.getValue(), d = [], v2 = o.type === "TupleExpression" ? "#[" : "[", S2 = "]";
            if (o.elements.length === 0)
              c(o, f2.Dangling) ? d.push(u([v2, t8(T2, m), a, S2])) : d.push(v2, S2);
            else {
              let b2 = y(o.elements), B = !(b2 && b2.type === "RestElement"), k2 = b2 === null, M = Symbol("array"), R2 = !m.__inJestEach && o.elements.length > 1 && o.elements.every((L2, Q2, V2) => {
                let j2 = L2 && L2.type;
                if (j2 !== "ArrayExpression" && j2 !== "ObjectExpression")
                  return false;
                let Y2 = V2[Q2 + 1];
                if (Y2 && j2 !== Y2.type)
                  return false;
                let ie2 = j2 === "ArrayExpression" ? "elements" : "properties";
                return L2[ie2] && L2[ie2].length > 1;
              }), q = P(o, m), J2 = B ? k2 ? "," : g(m) ? q ? l(",", "", { groupId: M }) : l(",") : "" : "";
              d.push(u([v2, i([a, q ? D(T2, m, C, J2) : [$(T2, m, "elements", C), J2], t8(T2, m, true)]), a, S2], { shouldBreak: R2, id: M }));
            }
            return d.push(N2(T2), x2(T2, m, C)), d;
          }
          function P(T2, m) {
            return T2.elements.length > 1 && T2.elements.every((C) => C && (_(C) || w(C) && !c(C.argument)) && !c(C, f2.Trailing | f2.Line, (o) => !h2(m.originalText, E2(o), { backwards: true })));
          }
          function $(T2, m, C, o) {
            let d = [], v2 = [];
            return T2.each((S2) => {
              d.push(v2, u(o())), v2 = [",", s], S2.getValue() && F2(S2.getValue(), m) && v2.push(a);
            }, C), d;
          }
          function D(T2, m, C, o) {
            let d = [];
            return T2.each((v2, S2, b2) => {
              let B = S2 === b2.length - 1;
              d.push([C(), B ? o : ","]), B || d.push(F2(v2.getValue(), m) ? [n, n] : c(b2[S2 + 1], f2.Leading | f2.Line) ? n : s);
            }, "elements"), p(d);
          }
          r.exports = { printArray: I2, printArrayItems: $, isConciselyPrintedArray: P };
        } }), Ao2 = te2({ "src/language-js/print/call-arguments.js"(e, r) {
          ne2();
          var { printDanglingComments: t8 } = et2(), { getLast: s, getPenultimate: a } = Ue2(), { getFunctionParameters: n, hasComment: u, CommentCheckFlags: i, isFunctionCompositionArgs: l, isJsxNode: p, isLongCurriedCallExpression: y, shouldPrintComma: h2, getCallArguments: g, iterateCallArgumentsPath: c, isNextLineEmpty: f2, isCallExpression: F2, isStringLiteral: _, isObjectProperty: w, isTSTypeExpression: E2 } = Ke2(), { builders: { line: N2, hardline: x2, softline: I2, group: P, indent: $, conditionalGroup: D, ifBreak: T2, breakParent: m }, utils: { willBreak: C } } = qe2(), { ArgExpansionBailout: o } = Qt2(), { isConciselyPrintedArray: d } = er2();
          function v2(q, J2, L2) {
            let Q2 = q.getValue(), V2 = Q2.type === "ImportExpression", j2 = g(Q2);
            if (j2.length === 0)
              return ["(", t8(q, J2, true), ")"];
            if (k2(j2))
              return ["(", L2(["arguments", 0]), ", ", L2(["arguments", 1]), ")"];
            let Y2 = false, ie2 = false, ee2 = j2.length - 1, ce2 = [];
            c(q, (z2, U2) => {
              let Z = z2.getNode(), se2 = [L2()];
              U2 === ee2 || (f2(Z, J2) ? (U2 === 0 && (ie2 = true), Y2 = true, se2.push(",", x2, x2)) : se2.push(",", N2)), ce2.push(se2);
            });
            let W2 = !(V2 || Q2.callee && Q2.callee.type === "Import") && h2(J2, "all") ? "," : "";
            function K2() {
              return P(["(", $([N2, ...ce2]), W2, N2, ")"], { shouldBreak: true });
            }
            if (Y2 || q.getParentNode().type !== "Decorator" && l(j2))
              return K2();
            let de2 = B(j2), ue2 = b2(j2, J2);
            if (de2 || ue2) {
              if (de2 ? ce2.slice(1).some(C) : ce2.slice(0, -1).some(C))
                return K2();
              let z2 = [];
              try {
                q.try(() => {
                  c(q, (U2, Z) => {
                    de2 && Z === 0 && (z2 = [[L2([], { expandFirstArg: true }), ce2.length > 1 ? "," : "", ie2 ? x2 : N2, ie2 ? x2 : ""], ...ce2.slice(1)]), ue2 && Z === ee2 && (z2 = [...ce2.slice(0, -1), L2([], { expandLastArg: true })]);
                  });
                });
              } catch (U2) {
                if (U2 instanceof o)
                  return K2();
                throw U2;
              }
              return [ce2.some(C) ? m : "", D([["(", ...z2, ")"], de2 ? ["(", P(z2[0], { shouldBreak: true }), ...z2.slice(1), ")"] : ["(", ...ce2.slice(0, -1), P(s(z2), { shouldBreak: true }), ")"], K2()])];
            }
            let Fe2 = ["(", $([I2, ...ce2]), T2(W2), I2, ")"];
            return y(q) ? Fe2 : P(Fe2, { shouldBreak: ce2.some(C) || Y2 });
          }
          function S2(q) {
            let J2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            return q.type === "ObjectExpression" && (q.properties.length > 0 || u(q)) || q.type === "ArrayExpression" && (q.elements.length > 0 || u(q)) || q.type === "TSTypeAssertion" && S2(q.expression) || E2(q) && S2(q.expression) || q.type === "FunctionExpression" || q.type === "ArrowFunctionExpression" && (!q.returnType || !q.returnType.typeAnnotation || q.returnType.typeAnnotation.type !== "TSTypeReference" || M(q.body)) && (q.body.type === "BlockStatement" || q.body.type === "ArrowFunctionExpression" && S2(q.body, true) || q.body.type === "ObjectExpression" || q.body.type === "ArrayExpression" || !J2 && (F2(q.body) || q.body.type === "ConditionalExpression") || p(q.body)) || q.type === "DoExpression" || q.type === "ModuleExpression";
          }
          function b2(q, J2) {
            let L2 = s(q), Q2 = a(q);
            return !u(L2, i.Leading) && !u(L2, i.Trailing) && S2(L2) && (!Q2 || Q2.type !== L2.type) && (q.length !== 2 || Q2.type !== "ArrowFunctionExpression" || L2.type !== "ArrayExpression") && !(q.length > 1 && L2.type === "ArrayExpression" && d(L2, J2));
          }
          function B(q) {
            if (q.length !== 2)
              return false;
            let [J2, L2] = q;
            return J2.type === "ModuleExpression" && R2(L2) ? true : !u(J2) && (J2.type === "FunctionExpression" || J2.type === "ArrowFunctionExpression" && J2.body.type === "BlockStatement") && L2.type !== "FunctionExpression" && L2.type !== "ArrowFunctionExpression" && L2.type !== "ConditionalExpression" && !S2(L2);
          }
          function k2(q) {
            return q.length === 2 && q[0].type === "ArrowFunctionExpression" && n(q[0]).length === 0 && q[0].body.type === "BlockStatement" && q[1].type === "ArrayExpression" && !q.some((J2) => u(J2));
          }
          function M(q) {
            return q.type === "BlockStatement" && (q.body.some((J2) => J2.type !== "EmptyStatement") || u(q, i.Dangling));
          }
          function R2(q) {
            return q.type === "ObjectExpression" && q.properties.length === 1 && w(q.properties[0]) && q.properties[0].key.type === "Identifier" && q.properties[0].key.name === "type" && _(q.properties[0].value) && q.properties[0].value.value === "module";
          }
          r.exports = v2;
        } }), So2 = te2({ "src/language-js/print/member.js"(e, r) {
          ne2();
          var { builders: { softline: t8, group: s, indent: a, label: n } } = qe2(), { isNumericLiteral: u, isMemberExpression: i, isCallExpression: l } = Ke2(), { printOptionalToken: p } = ct2();
          function y(g, c, f2) {
            let F2 = g.getValue(), _ = g.getParentNode(), w, E2 = 0;
            do
              w = g.getParentNode(E2), E2++;
            while (w && (i(w) || w.type === "TSNonNullExpression"));
            let N2 = f2("object"), x2 = h2(g, c, f2), I2 = w && (w.type === "NewExpression" || w.type === "BindExpression" || w.type === "AssignmentExpression" && w.left.type !== "Identifier") || F2.computed || F2.object.type === "Identifier" && F2.property.type === "Identifier" && !i(_) || (_.type === "AssignmentExpression" || _.type === "VariableDeclarator") && (l(F2.object) && F2.object.arguments.length > 0 || F2.object.type === "TSNonNullExpression" && l(F2.object.expression) && F2.object.expression.arguments.length > 0 || N2.label === "member-chain");
            return n(N2.label === "member-chain" ? "member-chain" : "member", [N2, I2 ? x2 : s(a([t8, x2]))]);
          }
          function h2(g, c, f2) {
            let F2 = f2("property"), _ = g.getValue(), w = p(g);
            return _.computed ? !_.property || u(_.property) ? [w, "[", F2, "]"] : s([w, "[", a([t8, F2]), t8, "]"]) : [w, ".", F2];
          }
          r.exports = { printMemberExpression: y, printMemberLookup: h2 };
        } }), md = te2({ "src/language-js/print/member-chain.js"(e, r) {
          ne2();
          var { printComments: t8 } = et2(), { getLast: s, isNextLineEmptyAfterIndex: a, getNextNonSpaceNonCommentCharacterIndex: n } = Ue2(), u = qt2(), { isCallExpression: i, isMemberExpression: l, isFunctionOrArrowExpression: p, isLongCurriedCallExpression: y, isMemberish: h2, isNumericLiteral: g, isSimpleCallArgument: c, hasComment: f2, CommentCheckFlags: F2, isNextLineEmpty: _ } = Ke2(), { locEnd: w } = ut2(), { builders: { join: E2, hardline: N2, group: x2, indent: I2, conditionalGroup: P, breakParent: $, label: D }, utils: { willBreak: T2 } } = qe2(), m = Ao2(), { printMemberLookup: C } = So2(), { printOptionalToken: o, printFunctionTypeParameters: d, printBindExpressionCallee: v2 } = ct2();
          function S2(b2, B, k2) {
            let M = b2.getParentNode(), R2 = !M || M.type === "ExpressionStatement", q = [];
            function J2(Ne2) {
              let { originalText: Pe2 } = B, oe2 = n(Pe2, Ne2, w);
              return Pe2.charAt(oe2) === ")" ? oe2 !== false && a(Pe2, oe2 + 1) : _(Ne2, B);
            }
            function L2(Ne2) {
              let Pe2 = Ne2.getValue();
              i(Pe2) && (h2(Pe2.callee) || i(Pe2.callee)) ? (q.unshift({ node: Pe2, printed: [t8(Ne2, [o(Ne2), d(Ne2, B, k2), m(Ne2, B, k2)], B), J2(Pe2) ? N2 : ""] }), Ne2.call((oe2) => L2(oe2), "callee")) : h2(Pe2) ? (q.unshift({ node: Pe2, needsParens: u(Ne2, B), printed: t8(Ne2, l(Pe2) ? C(Ne2, B, k2) : v2(Ne2, B, k2), B) }), Ne2.call((oe2) => L2(oe2), "object")) : Pe2.type === "TSNonNullExpression" ? (q.unshift({ node: Pe2, printed: t8(Ne2, "!", B) }), Ne2.call((oe2) => L2(oe2), "expression")) : q.unshift({ node: Pe2, printed: k2() });
            }
            let Q2 = b2.getValue();
            q.unshift({ node: Q2, printed: [o(b2), d(b2, B, k2), m(b2, B, k2)] }), Q2.callee && b2.call((Ne2) => L2(Ne2), "callee");
            let V2 = [], j2 = [q[0]], Y2 = 1;
            for (; Y2 < q.length && (q[Y2].node.type === "TSNonNullExpression" || i(q[Y2].node) || l(q[Y2].node) && q[Y2].node.computed && g(q[Y2].node.property)); ++Y2)
              j2.push(q[Y2]);
            if (!i(q[0].node))
              for (; Y2 + 1 < q.length && (h2(q[Y2].node) && h2(q[Y2 + 1].node)); ++Y2)
                j2.push(q[Y2]);
            V2.push(j2), j2 = [];
            let ie2 = false;
            for (; Y2 < q.length; ++Y2) {
              if (ie2 && h2(q[Y2].node)) {
                if (q[Y2].node.computed && g(q[Y2].node.property)) {
                  j2.push(q[Y2]);
                  continue;
                }
                V2.push(j2), j2 = [], ie2 = false;
              }
              (i(q[Y2].node) || q[Y2].node.type === "ImportExpression") && (ie2 = true), j2.push(q[Y2]), f2(q[Y2].node, F2.Trailing) && (V2.push(j2), j2 = [], ie2 = false);
            }
            j2.length > 0 && V2.push(j2);
            function ee2(Ne2) {
              return /^[A-Z]|^[$_]+$/.test(Ne2);
            }
            function ce2(Ne2) {
              return Ne2.length <= B.tabWidth;
            }
            function W2(Ne2) {
              let Pe2 = Ne2[1].length > 0 && Ne2[1][0].node.computed;
              if (Ne2[0].length === 1) {
                let H2 = Ne2[0][0].node;
                return H2.type === "ThisExpression" || H2.type === "Identifier" && (ee2(H2.name) || R2 && ce2(H2.name) || Pe2);
              }
              let oe2 = s(Ne2[0]).node;
              return l(oe2) && oe2.property.type === "Identifier" && (ee2(oe2.property.name) || Pe2);
            }
            let K2 = V2.length >= 2 && !f2(V2[1][0].node) && W2(V2);
            function de2(Ne2) {
              let Pe2 = Ne2.map((oe2) => oe2.printed);
              return Ne2.length > 0 && s(Ne2).needsParens ? ["(", ...Pe2, ")"] : Pe2;
            }
            function ue2(Ne2) {
              return Ne2.length === 0 ? "" : I2(x2([N2, E2(N2, Ne2.map(de2))]));
            }
            let Fe2 = V2.map(de2), z2 = Fe2, U2 = K2 ? 3 : 2, Z = V2.flat(), se2 = Z.slice(1, -1).some((Ne2) => f2(Ne2.node, F2.Leading)) || Z.slice(0, -1).some((Ne2) => f2(Ne2.node, F2.Trailing)) || V2[U2] && f2(V2[U2][0].node, F2.Leading);
            if (V2.length <= U2 && !se2)
              return y(b2) ? z2 : x2(z2);
            let fe2 = s(V2[K2 ? 1 : 0]).node, ge2 = !i(fe2) && J2(fe2), he2 = [de2(V2[0]), K2 ? V2.slice(1, 2).map(de2) : "", ge2 ? N2 : "", ue2(V2.slice(K2 ? 2 : 1))], we2 = q.map((Ne2) => {
              let { node: Pe2 } = Ne2;
              return Pe2;
            }).filter(i);
            function ke2() {
              let Ne2 = s(s(V2)).node, Pe2 = s(Fe2);
              return i(Ne2) && T2(Pe2) && we2.slice(0, -1).some((oe2) => oe2.arguments.some(p));
            }
            let Re2;
            return se2 || we2.length > 2 && we2.some((Ne2) => !Ne2.arguments.every((Pe2) => c(Pe2, 0))) || Fe2.slice(0, -1).some(T2) || ke2() ? Re2 = x2(he2) : Re2 = [T2(z2) || ge2 ? $ : "", P([z2, he2])], D("member-chain", Re2);
          }
          r.exports = S2;
        } }), xo = te2({ "src/language-js/print/call-expression.js"(e, r) {
          ne2();
          var { builders: { join: t8, group: s } } = qe2(), a = qt2(), { getCallArguments: n, hasFlowAnnotationComment: u, isCallExpression: i, isMemberish: l, isStringLiteral: p, isTemplateOnItsOwnLine: y, isTestCall: h2, iterateCallArgumentsPath: g } = Ke2(), c = md(), f2 = Ao2(), { printOptionalToken: F2, printFunctionTypeParameters: _ } = ct2();
          function w(N2, x2, I2) {
            let P = N2.getValue(), $ = N2.getParentNode(), D = P.type === "NewExpression", T2 = P.type === "ImportExpression", m = F2(N2), C = n(P);
            if (C.length > 0 && (!T2 && !D && E2(P, $) || C.length === 1 && y(C[0], x2.originalText) || !D && h2(P, $))) {
              let v2 = [];
              return g(N2, () => {
                v2.push(I2());
              }), [D ? "new " : "", I2("callee"), m, _(N2, x2, I2), "(", t8(", ", v2), ")"];
            }
            let o = (x2.parser === "babel" || x2.parser === "babel-flow") && P.callee && P.callee.type === "Identifier" && u(P.callee.trailingComments);
            if (o && (P.callee.trailingComments[0].printed = true), !T2 && !D && l(P.callee) && !N2.call((v2) => a(v2, x2), "callee"))
              return c(N2, x2, I2);
            let d = [D ? "new " : "", T2 ? "import" : I2("callee"), m, o ? `/*:: ${P.callee.trailingComments[0].value.slice(2).trim()} */` : "", _(N2, x2, I2), f2(N2, x2, I2)];
            return T2 || i(P.callee) ? s(d) : d;
          }
          function E2(N2, x2) {
            if (N2.callee.type !== "Identifier")
              return false;
            if (N2.callee.name === "require")
              return true;
            if (N2.callee.name === "define") {
              let I2 = n(N2);
              return x2.type === "ExpressionStatement" && (I2.length === 1 || I2.length === 2 && I2[0].type === "ArrayExpression" || I2.length === 3 && p(I2[0]) && I2[1].type === "ArrayExpression");
            }
            return false;
          }
          r.exports = { printCallExpression: w };
        } }), tr2 = te2({ "src/language-js/print/assignment.js"(e, r) {
          ne2();
          var { isNonEmptyArray: t8, getStringWidth: s } = Ue2(), { builders: { line: a, group: n, indent: u, indentIfBreak: i, lineSuffixBoundary: l }, utils: { cleanDoc: p, willBreak: y, canBreak: h2 } } = qe2(), { hasLeadingOwnLineComment: g, isBinaryish: c, isStringLiteral: f2, isLiteral: F2, isNumericLiteral: _, isCallExpression: w, isMemberExpression: E2, getCallArguments: N2, rawText: x2, hasComment: I2, isSignedNumericLiteral: P, isObjectProperty: $ } = Ke2(), { shouldInlineLogicalExpression: D } = ru(), { printCallExpression: T2 } = xo();
          function m(W2, K2, de2, ue2, Fe2, z2) {
            let U2 = d(W2, K2, de2, ue2, z2), Z = de2(z2, { assignmentLayout: U2 });
            switch (U2) {
              case "break-after-operator":
                return n([n(ue2), Fe2, n(u([a, Z]))]);
              case "never-break-after-operator":
                return n([n(ue2), Fe2, " ", Z]);
              case "fluid": {
                let se2 = Symbol("assignment");
                return n([n(ue2), Fe2, n(u(a), { id: se2 }), l, i(Z, { groupId: se2 })]);
              }
              case "break-lhs":
                return n([ue2, Fe2, " ", n(Z)]);
              case "chain":
                return [n(ue2), Fe2, a, Z];
              case "chain-tail":
                return [n(ue2), Fe2, u([a, Z])];
              case "chain-tail-arrow-chain":
                return [n(ue2), Fe2, Z];
              case "only-left":
                return ue2;
            }
          }
          function C(W2, K2, de2) {
            let ue2 = W2.getValue();
            return m(W2, K2, de2, de2("left"), [" ", ue2.operator], "right");
          }
          function o(W2, K2, de2) {
            return m(W2, K2, de2, de2("id"), " =", "init");
          }
          function d(W2, K2, de2, ue2, Fe2) {
            let z2 = W2.getValue(), U2 = z2[Fe2];
            if (!U2)
              return "only-left";
            let Z = !b2(U2);
            if (W2.match(b2, B, (he2) => !Z || he2.type !== "ExpressionStatement" && he2.type !== "VariableDeclaration"))
              return Z ? U2.type === "ArrowFunctionExpression" && U2.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
            if (!Z && b2(U2.right) || g(K2.originalText, U2))
              return "break-after-operator";
            if (U2.type === "CallExpression" && U2.callee.name === "require" || K2.parser === "json5" || K2.parser === "json")
              return "never-break-after-operator";
            if (S2(z2) || k2(z2) || q(z2) || J2(z2) && h2(ue2))
              return "break-lhs";
            let ge2 = ie2(z2, ue2, K2);
            return W2.call(() => v2(W2, K2, de2, ge2), Fe2) ? "break-after-operator" : ge2 || U2.type === "TemplateLiteral" || U2.type === "TaggedTemplateExpression" || U2.type === "BooleanLiteral" || _(U2) || U2.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
          }
          function v2(W2, K2, de2, ue2) {
            let Fe2 = W2.getValue();
            if (c(Fe2) && !D(Fe2))
              return true;
            switch (Fe2.type) {
              case "StringLiteralTypeAnnotation":
              case "SequenceExpression":
                return true;
              case "ConditionalExpression": {
                let { test: Z } = Fe2;
                return c(Z) && !D(Z);
              }
              case "ClassExpression":
                return t8(Fe2.decorators);
            }
            if (ue2)
              return false;
            let z2 = Fe2, U2 = [];
            for (; ; )
              if (z2.type === "UnaryExpression")
                z2 = z2.argument, U2.push("argument");
              else if (z2.type === "TSNonNullExpression")
                z2 = z2.expression, U2.push("expression");
              else
                break;
            return !!(f2(z2) || W2.call(() => V2(W2, K2, de2), ...U2));
          }
          function S2(W2) {
            if (B(W2)) {
              let K2 = W2.left || W2.id;
              return K2.type === "ObjectPattern" && K2.properties.length > 2 && K2.properties.some((de2) => $(de2) && (!de2.shorthand || de2.value && de2.value.type === "AssignmentPattern"));
            }
            return false;
          }
          function b2(W2) {
            return W2.type === "AssignmentExpression";
          }
          function B(W2) {
            return b2(W2) || W2.type === "VariableDeclarator";
          }
          function k2(W2) {
            let K2 = M(W2);
            if (t8(K2)) {
              let de2 = W2.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
              if (K2.length > 1 && K2.some((ue2) => ue2[de2] || ue2.default))
                return true;
            }
            return false;
          }
          function M(W2) {
            return R2(W2) && W2.typeParameters && W2.typeParameters.params ? W2.typeParameters.params : null;
          }
          function R2(W2) {
            return W2.type === "TSTypeAliasDeclaration" || W2.type === "TypeAlias";
          }
          function q(W2) {
            if (W2.type !== "VariableDeclarator")
              return false;
            let { typeAnnotation: K2 } = W2.id;
            if (!K2 || !K2.typeAnnotation)
              return false;
            let de2 = L2(K2.typeAnnotation);
            return t8(de2) && de2.length > 1 && de2.some((ue2) => t8(L2(ue2)) || ue2.type === "TSConditionalType");
          }
          function J2(W2) {
            return W2.type === "VariableDeclarator" && W2.init && W2.init.type === "ArrowFunctionExpression";
          }
          function L2(W2) {
            return Q2(W2) && W2.typeParameters && W2.typeParameters.params ? W2.typeParameters.params : null;
          }
          function Q2(W2) {
            return W2.type === "TSTypeReference" || W2.type === "GenericTypeAnnotation";
          }
          function V2(W2, K2, de2) {
            let ue2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, Fe2 = W2.getValue(), z2 = () => V2(W2, K2, de2, true);
            if (Fe2.type === "TSNonNullExpression")
              return W2.call(z2, "expression");
            if (w(Fe2)) {
              if (T2(W2, K2, de2).label === "member-chain")
                return false;
              let Z = N2(Fe2);
              return !(Z.length === 0 || Z.length === 1 && Y2(Z[0], K2)) || ee2(Fe2, de2) ? false : W2.call(z2, "callee");
            }
            return E2(Fe2) ? W2.call(z2, "object") : ue2 && (Fe2.type === "Identifier" || Fe2.type === "ThisExpression");
          }
          var j2 = 0.25;
          function Y2(W2, K2) {
            let { printWidth: de2 } = K2;
            if (I2(W2))
              return false;
            let ue2 = de2 * j2;
            if (W2.type === "ThisExpression" || W2.type === "Identifier" && W2.name.length <= ue2 || P(W2) && !I2(W2.argument))
              return true;
            let Fe2 = W2.type === "Literal" && "regex" in W2 && W2.regex.pattern || W2.type === "RegExpLiteral" && W2.pattern;
            return Fe2 ? Fe2.length <= ue2 : f2(W2) ? x2(W2).length <= ue2 : W2.type === "TemplateLiteral" ? W2.expressions.length === 0 && W2.quasis[0].value.raw.length <= ue2 && !W2.quasis[0].value.raw.includes(`
`) : F2(W2);
          }
          function ie2(W2, K2, de2) {
            if (!$(W2))
              return false;
            K2 = p(K2);
            let ue2 = 3;
            return typeof K2 == "string" && s(K2) < de2.tabWidth + ue2;
          }
          function ee2(W2, K2) {
            let de2 = ce2(W2);
            if (t8(de2)) {
              if (de2.length > 1)
                return true;
              if (de2.length === 1) {
                let Fe2 = de2[0];
                if (Fe2.type === "TSUnionType" || Fe2.type === "UnionTypeAnnotation" || Fe2.type === "TSIntersectionType" || Fe2.type === "IntersectionTypeAnnotation" || Fe2.type === "TSTypeLiteral" || Fe2.type === "ObjectTypeAnnotation")
                  return true;
              }
              let ue2 = W2.typeParameters ? "typeParameters" : "typeArguments";
              if (y(K2(ue2)))
                return true;
            }
            return false;
          }
          function ce2(W2) {
            return W2.typeParameters && W2.typeParameters.params || W2.typeArguments && W2.typeArguments.params;
          }
          r.exports = { printVariableDeclarator: o, printAssignmentExpression: C, printAssignment: m, isArrowFunctionVariableDeclarator: J2 };
        } }), Lr = te2({ "src/language-js/print/function-parameters.js"(e, r) {
          ne2();
          var { getNextNonSpaceNonCommentCharacter: t8 } = Ue2(), { printDanglingComments: s } = et2(), { builders: { line: a, hardline: n, softline: u, group: i, indent: l, ifBreak: p }, utils: { removeLines: y, willBreak: h2 } } = qe2(), { getFunctionParameters: g, iterateFunctionParametersPath: c, isSimpleType: f2, isTestCall: F2, isTypeAnnotationAFunction: _, isObjectType: w, isObjectTypePropertyAFunction: E2, hasRestParameter: N2, shouldPrintComma: x2, hasComment: I2, isNextLineEmpty: P } = Ke2(), { locEnd: $ } = ut2(), { ArgExpansionBailout: D } = Qt2(), { printFunctionTypeParameters: T2 } = ct2();
          function m(v2, S2, b2, B, k2) {
            let M = v2.getValue(), R2 = g(M), q = k2 ? T2(v2, b2, S2) : "";
            if (R2.length === 0)
              return [q, "(", s(v2, b2, true, (ie2) => t8(b2.originalText, ie2, $) === ")"), ")"];
            let J2 = v2.getParentNode(), L2 = F2(J2), Q2 = C(M), V2 = [];
            if (c(v2, (ie2, ee2) => {
              let ce2 = ee2 === R2.length - 1;
              ce2 && M.rest && V2.push("..."), V2.push(S2()), !ce2 && (V2.push(","), L2 || Q2 ? V2.push(" ") : P(R2[ee2], b2) ? V2.push(n, n) : V2.push(a));
            }), B) {
              if (h2(q) || h2(V2))
                throw new D();
              return i([y(q), "(", y(V2), ")"]);
            }
            let j2 = R2.every((ie2) => !ie2.decorators);
            return Q2 && j2 ? [q, "(", ...V2, ")"] : L2 ? [q, "(", ...V2, ")"] : (E2(J2) || _(J2) || J2.type === "TypeAlias" || J2.type === "UnionTypeAnnotation" || J2.type === "TSUnionType" || J2.type === "IntersectionTypeAnnotation" || J2.type === "FunctionTypeAnnotation" && J2.returnType === M) && R2.length === 1 && R2[0].name === null && M.this !== R2[0] && R2[0].typeAnnotation && M.typeParameters === null && f2(R2[0].typeAnnotation) && !M.rest ? b2.arrowParens === "always" ? ["(", ...V2, ")"] : V2 : [q, "(", l([u, ...V2]), p(!N2(M) && x2(b2, "all") ? "," : ""), u, ")"];
          }
          function C(v2) {
            if (!v2)
              return false;
            let S2 = g(v2);
            if (S2.length !== 1)
              return false;
            let [b2] = S2;
            return !I2(b2) && (b2.type === "ObjectPattern" || b2.type === "ArrayPattern" || b2.type === "Identifier" && b2.typeAnnotation && (b2.typeAnnotation.type === "TypeAnnotation" || b2.typeAnnotation.type === "TSTypeAnnotation") && w(b2.typeAnnotation.typeAnnotation) || b2.type === "FunctionTypeParam" && w(b2.typeAnnotation) || b2.type === "AssignmentPattern" && (b2.left.type === "ObjectPattern" || b2.left.type === "ArrayPattern") && (b2.right.type === "Identifier" || b2.right.type === "ObjectExpression" && b2.right.properties.length === 0 || b2.right.type === "ArrayExpression" && b2.right.elements.length === 0));
          }
          function o(v2) {
            let S2;
            return v2.returnType ? (S2 = v2.returnType, S2.typeAnnotation && (S2 = S2.typeAnnotation)) : v2.typeAnnotation && (S2 = v2.typeAnnotation), S2;
          }
          function d(v2, S2) {
            let b2 = o(v2);
            if (!b2)
              return false;
            let B = v2.typeParameters && v2.typeParameters.params;
            if (B) {
              if (B.length > 1)
                return false;
              if (B.length === 1) {
                let k2 = B[0];
                if (k2.constraint || k2.default)
                  return false;
              }
            }
            return g(v2).length === 1 && (w(b2) || h2(S2));
          }
          r.exports = { printFunctionParameters: m, shouldHugFunctionParameters: C, shouldGroupFunctionParameters: d };
        } }), Or2 = te2({ "src/language-js/print/type-annotation.js"(e, r) {
          ne2();
          var { printComments: t8, printDanglingComments: s } = et2(), { isNonEmptyArray: a } = Ue2(), { builders: { group: n, join: u, line: i, softline: l, indent: p, align: y, ifBreak: h2 } } = qe2(), g = qt2(), { locStart: c } = ut2(), { isSimpleType: f2, isObjectType: F2, hasLeadingOwnLineComment: _, isObjectTypePropertyAFunction: w, shouldPrintComma: E2 } = Ke2(), { printAssignment: N2 } = tr2(), { printFunctionParameters: x2, shouldGroupFunctionParameters: I2 } = Lr(), { printArrayItems: P } = er2();
          function $(b2) {
            if (f2(b2) || F2(b2))
              return true;
            if (b2.type === "UnionTypeAnnotation" || b2.type === "TSUnionType") {
              let B = b2.types.filter((M) => M.type === "VoidTypeAnnotation" || M.type === "TSVoidKeyword" || M.type === "NullLiteralTypeAnnotation" || M.type === "TSNullKeyword").length, k2 = b2.types.some((M) => M.type === "ObjectTypeAnnotation" || M.type === "TSTypeLiteral" || M.type === "GenericTypeAnnotation" || M.type === "TSTypeReference");
              if (b2.types.length - 1 === B && k2)
                return true;
            }
            return false;
          }
          function D(b2, B, k2) {
            let M = B.semi ? ";" : "", R2 = b2.getValue(), q = [];
            return q.push("opaque type ", k2("id"), k2("typeParameters")), R2.supertype && q.push(": ", k2("supertype")), R2.impltype && q.push(" = ", k2("impltype")), q.push(M), q;
          }
          function T2(b2, B, k2) {
            let M = B.semi ? ";" : "", R2 = b2.getValue(), q = [];
            R2.declare && q.push("declare "), q.push("type ", k2("id"), k2("typeParameters"));
            let J2 = R2.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
            return [N2(b2, B, k2, q, " =", J2), M];
          }
          function m(b2, B, k2) {
            let M = b2.getValue(), R2 = b2.map(k2, "types"), q = [], J2 = false;
            for (let L2 = 0; L2 < R2.length; ++L2)
              L2 === 0 ? q.push(R2[L2]) : F2(M.types[L2 - 1]) && F2(M.types[L2]) ? q.push([" & ", J2 ? p(R2[L2]) : R2[L2]]) : !F2(M.types[L2 - 1]) && !F2(M.types[L2]) ? q.push(p([" &", i, R2[L2]])) : (L2 > 1 && (J2 = true), q.push(" & ", L2 > 1 ? p(R2[L2]) : R2[L2]));
            return n(q);
          }
          function C(b2, B, k2) {
            let M = b2.getValue(), R2 = b2.getParentNode(), q = R2.type !== "TypeParameterInstantiation" && R2.type !== "TSTypeParameterInstantiation" && R2.type !== "GenericTypeAnnotation" && R2.type !== "TSTypeReference" && R2.type !== "TSTypeAssertion" && R2.type !== "TupleTypeAnnotation" && R2.type !== "TSTupleType" && !(R2.type === "FunctionTypeParam" && !R2.name && b2.getParentNode(1).this !== R2) && !((R2.type === "TypeAlias" || R2.type === "VariableDeclarator" || R2.type === "TSTypeAliasDeclaration") && _(B.originalText, M)), J2 = $(M), L2 = b2.map((j2) => {
              let Y2 = k2();
              return J2 || (Y2 = y(2, Y2)), t8(j2, Y2, B);
            }, "types");
            if (J2)
              return u(" | ", L2);
            let Q2 = q && !_(B.originalText, M), V2 = [h2([Q2 ? i : "", "| "]), u([i, "| "], L2)];
            return g(b2, B) ? n([p(V2), l]) : R2.type === "TupleTypeAnnotation" && R2.types.length > 1 || R2.type === "TSTupleType" && R2.elementTypes.length > 1 ? n([p([h2(["(", l]), V2]), l, h2(")")]) : n(q ? p(V2) : V2);
          }
          function o(b2, B, k2) {
            let M = b2.getValue(), R2 = [], q = b2.getParentNode(0), J2 = b2.getParentNode(1), L2 = b2.getParentNode(2), Q2 = M.type === "TSFunctionType" || !((q.type === "ObjectTypeProperty" || q.type === "ObjectTypeInternalSlot") && !q.variance && !q.optional && c(q) === c(M) || q.type === "ObjectTypeCallProperty" || L2 && L2.type === "DeclareFunction"), V2 = Q2 && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation"), j2 = V2 && Q2 && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation") && J2.type === "ArrowFunctionExpression";
            w(q) && (Q2 = true, V2 = true), j2 && R2.push("(");
            let Y2 = x2(b2, k2, B, false, true), ie2 = M.returnType || M.predicate || M.typeAnnotation ? [Q2 ? " => " : ": ", k2("returnType"), k2("predicate"), k2("typeAnnotation")] : "", ee2 = I2(M, ie2);
            return R2.push(ee2 ? n(Y2) : Y2), ie2 && R2.push(ie2), j2 && R2.push(")"), n(R2);
          }
          function d(b2, B, k2) {
            let M = b2.getValue(), R2 = M.type === "TSTupleType" ? "elementTypes" : "types", q = M[R2], J2 = a(q), L2 = J2 ? l : "";
            return n(["[", p([L2, P(b2, B, R2, k2)]), h2(J2 && E2(B, "all") ? "," : ""), s(b2, B, true), L2, "]"]);
          }
          function v2(b2, B, k2) {
            let M = b2.getValue(), R2 = M.type === "OptionalIndexedAccessType" && M.optional ? "?.[" : "[";
            return [k2("objectType"), R2, k2("indexType"), "]"];
          }
          function S2(b2, B, k2) {
            let M = b2.getValue();
            return [M.postfix ? "" : k2, B("typeAnnotation"), M.postfix ? k2 : ""];
          }
          r.exports = { printOpaqueType: D, printTypeAlias: T2, printIntersectionType: m, printUnionType: C, printFunctionType: o, printTupleType: d, printIndexedAccessType: v2, shouldHugType: $, printJSDocType: S2 };
        } }), jr2 = te2({ "src/language-js/print/type-parameters.js"(e, r) {
          ne2();
          var { printDanglingComments: t8 } = et2(), { builders: { join: s, line: a, hardline: n, softline: u, group: i, indent: l, ifBreak: p } } = qe2(), { isTestCall: y, hasComment: h2, CommentCheckFlags: g, isTSXFile: c, shouldPrintComma: f2, getFunctionParameters: F2, isObjectType: _, getTypeScriptMappedTypeModifier: w } = Ke2(), { createGroupIdMapper: E2 } = Ue2(), { shouldHugType: N2 } = Or2(), { isArrowFunctionVariableDeclarator: x2 } = tr2(), I2 = E2("typeParameters");
          function P(T2, m, C, o) {
            let d = T2.getValue();
            if (!d[o])
              return "";
            if (!Array.isArray(d[o]))
              return C(o);
            let v2 = T2.getNode(2), S2 = v2 && y(v2), b2 = T2.match((M) => !(M[o].length === 1 && _(M[o][0])), void 0, (M, R2) => R2 === "typeAnnotation", (M) => M.type === "Identifier", x2);
            if (d[o].length === 0 || !b2 && (S2 || d[o].length === 1 && (d[o][0].type === "NullableTypeAnnotation" || N2(d[o][0]))))
              return ["<", s(", ", T2.map(C, o)), $(T2, m), ">"];
            let k2 = d.type === "TSTypeParameterInstantiation" ? "" : F2(d).length === 1 && c(m) && !d[o][0].constraint && T2.getParentNode().type === "ArrowFunctionExpression" ? "," : f2(m, "all") ? p(",") : "";
            return i(["<", l([u, s([",", a], T2.map(C, o))]), k2, u, ">"], { id: I2(d) });
          }
          function $(T2, m) {
            let C = T2.getValue();
            if (!h2(C, g.Dangling))
              return "";
            let o = !h2(C, g.Line), d = t8(T2, m, o);
            return o ? d : [d, n];
          }
          function D(T2, m, C) {
            let o = T2.getValue(), d = [o.type === "TSTypeParameter" && o.const ? "const " : ""], v2 = T2.getParentNode();
            return v2.type === "TSMappedType" ? (v2.readonly && d.push(w(v2.readonly, "readonly"), " "), d.push("[", C("name")), o.constraint && d.push(" in ", C("constraint")), v2.nameType && d.push(" as ", T2.callParent(() => C("nameType"))), d.push("]"), d) : (o.variance && d.push(C("variance")), o.in && d.push("in "), o.out && d.push("out "), d.push(C("name")), o.bound && d.push(": ", C("bound")), o.constraint && d.push(" extends ", C("constraint")), o.default && d.push(" = ", C("default")), d);
          }
          r.exports = { printTypeParameter: D, printTypeParameters: P, getTypeParametersGroupId: I2 };
        } }), rr2 = te2({ "src/language-js/print/property.js"(e, r) {
          ne2();
          var { printComments: t8 } = et2(), { printString: s, printNumber: a } = Ue2(), { isNumericLiteral: n, isSimpleNumber: u, isStringLiteral: i, isStringPropSafeToUnquote: l, rawText: p } = Ke2(), { printAssignment: y } = tr2(), h2 = /* @__PURE__ */ new WeakMap();
          function g(f2, F2, _) {
            let w = f2.getNode();
            if (w.computed)
              return ["[", _("key"), "]"];
            let E2 = f2.getParentNode(), { key: N2 } = w;
            if (F2.quoteProps === "consistent" && !h2.has(E2)) {
              let x2 = (E2.properties || E2.body || E2.members).some((I2) => !I2.computed && I2.key && i(I2.key) && !l(I2, F2));
              h2.set(E2, x2);
            }
            if ((N2.type === "Identifier" || n(N2) && u(a(p(N2))) && String(N2.value) === a(p(N2)) && !(F2.parser === "typescript" || F2.parser === "babel-ts")) && (F2.parser === "json" || F2.quoteProps === "consistent" && h2.get(E2))) {
              let x2 = s(JSON.stringify(N2.type === "Identifier" ? N2.name : N2.value.toString()), F2);
              return f2.call((I2) => t8(I2, x2, F2), "key");
            }
            return l(w, F2) && (F2.quoteProps === "as-needed" || F2.quoteProps === "consistent" && !h2.get(E2)) ? f2.call((x2) => t8(x2, /^\d/.test(N2.value) ? a(N2.value) : N2.value, F2), "key") : _("key");
          }
          function c(f2, F2, _) {
            return f2.getValue().shorthand ? _("value") : y(f2, F2, _, g(f2, F2, _), ":", "value");
          }
          r.exports = { printProperty: c, printPropertyKey: g };
        } }), qr2 = te2({ "src/language-js/print/function.js"(e, r) {
          ne2();
          var t8 = Zt2(), { printDanglingComments: s, printCommentsSeparately: a } = et2(), n = lt(), { getNextNonSpaceNonCommentCharacterIndex: u } = Ue2(), { builders: { line: i, softline: l, group: p, indent: y, ifBreak: h2, hardline: g, join: c, indentIfBreak: f2 }, utils: { removeLines: F2, willBreak: _ } } = qe2(), { ArgExpansionBailout: w } = Qt2(), { getFunctionParameters: E2, hasLeadingOwnLineComment: N2, isFlowAnnotationComment: x2, isJsxNode: I2, isTemplateOnItsOwnLine: P, shouldPrintComma: $, startsWithNoLookaheadToken: D, isBinaryish: T2, isLineComment: m, hasComment: C, getComments: o, CommentCheckFlags: d, isCallLikeExpression: v2, isCallExpression: S2, getCallArguments: b2, hasNakedLeftSide: B, getLeftSide: k2 } = Ke2(), { locEnd: M } = ut2(), { printFunctionParameters: R2, shouldGroupFunctionParameters: q } = Lr(), { printPropertyKey: J2 } = rr2(), { printFunctionTypeParameters: L2 } = ct2();
          function Q2(U2, Z, se2, fe2) {
            let ge2 = U2.getValue(), he2 = false;
            if ((ge2.type === "FunctionDeclaration" || ge2.type === "FunctionExpression") && fe2 && fe2.expandLastArg) {
              let Pe2 = U2.getParentNode();
              S2(Pe2) && b2(Pe2).length > 1 && (he2 = true);
            }
            let we2 = [];
            ge2.type === "TSDeclareFunction" && ge2.declare && we2.push("declare "), ge2.async && we2.push("async "), ge2.generator ? we2.push("function* ") : we2.push("function "), ge2.id && we2.push(Z("id"));
            let ke2 = R2(U2, Z, se2, he2), Re2 = K2(U2, Z, se2), Ne2 = q(ge2, Re2);
            return we2.push(L2(U2, se2, Z), p([Ne2 ? p(ke2) : ke2, Re2]), ge2.body ? " " : "", Z("body")), se2.semi && (ge2.declare || !ge2.body) && we2.push(";"), we2;
          }
          function V2(U2, Z, se2) {
            let fe2 = U2.getNode(), { kind: ge2 } = fe2, he2 = fe2.value || fe2, we2 = [];
            return !ge2 || ge2 === "init" || ge2 === "method" || ge2 === "constructor" ? he2.async && we2.push("async ") : (t8.ok(ge2 === "get" || ge2 === "set"), we2.push(ge2, " ")), he2.generator && we2.push("*"), we2.push(J2(U2, Z, se2), fe2.optional || fe2.key.optional ? "?" : ""), fe2 === he2 ? we2.push(j2(U2, Z, se2)) : he2.type === "FunctionExpression" ? we2.push(U2.call((ke2) => j2(ke2, Z, se2), "value")) : we2.push(se2("value")), we2;
          }
          function j2(U2, Z, se2) {
            let fe2 = U2.getNode(), ge2 = R2(U2, se2, Z), he2 = K2(U2, se2, Z), we2 = q(fe2, he2), ke2 = [L2(U2, Z, se2), p([we2 ? p(ge2) : ge2, he2])];
            return fe2.body ? ke2.push(" ", se2("body")) : ke2.push(Z.semi ? ";" : ""), ke2;
          }
          function Y2(U2, Z, se2, fe2) {
            let ge2 = U2.getValue(), he2 = [];
            if (ge2.async && he2.push("async "), W2(U2, Z))
              he2.push(se2(["params", 0]));
            else {
              let ke2 = fe2 && (fe2.expandLastArg || fe2.expandFirstArg), Re2 = K2(U2, se2, Z);
              if (ke2) {
                if (_(Re2))
                  throw new w();
                Re2 = p(F2(Re2));
              }
              he2.push(p([R2(U2, se2, Z, ke2, true), Re2]));
            }
            let we2 = s(U2, Z, true, (ke2) => {
              let Re2 = u(Z.originalText, ke2, M);
              return Re2 !== false && Z.originalText.slice(Re2, Re2 + 2) === "=>";
            });
            return we2 && he2.push(" ", we2), he2;
          }
          function ie2(U2, Z, se2, fe2, ge2, he2) {
            let we2 = U2.getName(), ke2 = U2.getParentNode(), Re2 = v2(ke2) && we2 === "callee", Ne2 = Boolean(Z && Z.assignmentLayout), Pe2 = he2.body.type !== "BlockStatement" && he2.body.type !== "ObjectExpression" && he2.body.type !== "SequenceExpression", oe2 = Re2 && Pe2 || Z && Z.assignmentLayout === "chain-tail-arrow-chain", H2 = Symbol("arrow-chain");
            return he2.body.type === "SequenceExpression" && (ge2 = p(["(", y([l, ge2]), l, ")"])), p([p(y([Re2 || Ne2 ? l : "", p(c([" =>", i], se2), { shouldBreak: fe2 })]), { id: H2, shouldBreak: oe2 }), " =>", f2(Pe2 ? y([i, ge2]) : [" ", ge2], { groupId: H2 }), Re2 ? h2(l, "", { groupId: H2 }) : ""]);
          }
          function ee2(U2, Z, se2, fe2) {
            let ge2 = U2.getValue(), he2 = [], we2 = [], ke2 = false;
            if (function H2() {
              let pe2 = Y2(U2, Z, se2, fe2);
              if (he2.length === 0)
                he2.push(pe2);
              else {
                let { leading: X2, trailing: le2 } = a(U2, Z);
                he2.push([X2, pe2]), we2.unshift(le2);
              }
              ke2 = ke2 || ge2.returnType && E2(ge2).length > 0 || ge2.typeParameters || E2(ge2).some((X2) => X2.type !== "Identifier"), ge2.body.type !== "ArrowFunctionExpression" || fe2 && fe2.expandLastArg ? we2.unshift(se2("body", fe2)) : (ge2 = ge2.body, U2.call(H2, "body"));
            }(), he2.length > 1)
              return ie2(U2, fe2, he2, ke2, we2, ge2);
            let Re2 = he2;
            if (Re2.push(" =>"), !N2(Z.originalText, ge2.body) && (ge2.body.type === "ArrayExpression" || ge2.body.type === "ObjectExpression" || ge2.body.type === "BlockStatement" || I2(ge2.body) || P(ge2.body, Z.originalText) || ge2.body.type === "ArrowFunctionExpression" || ge2.body.type === "DoExpression"))
              return p([...Re2, " ", we2]);
            if (ge2.body.type === "SequenceExpression")
              return p([...Re2, p([" (", y([l, we2]), l, ")"])]);
            let Ne2 = (fe2 && fe2.expandLastArg || U2.getParentNode().type === "JSXExpressionContainer") && !C(ge2), Pe2 = fe2 && fe2.expandLastArg && $(Z, "all"), oe2 = ge2.body.type === "ConditionalExpression" && !D(ge2.body, (H2) => H2.type === "ObjectExpression");
            return p([...Re2, p([y([i, oe2 ? h2("", "(") : "", we2, oe2 ? h2("", ")") : ""]), Ne2 ? [h2(Pe2 ? "," : ""), l] : ""])]);
          }
          function ce2(U2) {
            let Z = E2(U2);
            return Z.length === 1 && !U2.typeParameters && !C(U2, d.Dangling) && Z[0].type === "Identifier" && !Z[0].typeAnnotation && !C(Z[0]) && !Z[0].optional && !U2.predicate && !U2.returnType;
          }
          function W2(U2, Z) {
            if (Z.arrowParens === "always")
              return false;
            if (Z.arrowParens === "avoid") {
              let se2 = U2.getValue();
              return ce2(se2);
            }
            return false;
          }
          function K2(U2, Z, se2) {
            let fe2 = U2.getValue(), ge2 = Z("returnType");
            if (fe2.returnType && x2(se2.originalText, fe2.returnType))
              return [" /*: ", ge2, " */"];
            let he2 = [ge2];
            return fe2.returnType && fe2.returnType.typeAnnotation && he2.unshift(": "), fe2.predicate && he2.push(fe2.returnType ? " " : ": ", Z("predicate")), he2;
          }
          function de2(U2, Z, se2) {
            let fe2 = U2.getValue(), ge2 = Z.semi ? ";" : "", he2 = [];
            fe2.argument && (z2(Z, fe2.argument) ? he2.push([" (", y([g, se2("argument")]), g, ")"]) : T2(fe2.argument) || fe2.argument.type === "SequenceExpression" ? he2.push(p([h2(" (", " "), y([l, se2("argument")]), l, h2(")")])) : he2.push(" ", se2("argument")));
            let we2 = o(fe2), ke2 = n(we2), Re2 = ke2 && m(ke2);
            return Re2 && he2.push(ge2), C(fe2, d.Dangling) && he2.push(" ", s(U2, Z, true)), Re2 || he2.push(ge2), he2;
          }
          function ue2(U2, Z, se2) {
            return ["return", de2(U2, Z, se2)];
          }
          function Fe2(U2, Z, se2) {
            return ["throw", de2(U2, Z, se2)];
          }
          function z2(U2, Z) {
            if (N2(U2.originalText, Z))
              return true;
            if (B(Z)) {
              let se2 = Z, fe2;
              for (; fe2 = k2(se2); )
                if (se2 = fe2, N2(U2.originalText, se2))
                  return true;
            }
            return false;
          }
          r.exports = { printFunction: Q2, printArrowFunction: ee2, printMethod: V2, printReturnStatement: ue2, printThrowStatement: Fe2, printMethodInternal: j2, shouldPrintParamsWithoutParens: W2 };
        } }), nu = te2({ "src/language-js/print/decorators.js"(e, r) {
          ne2();
          var { isNonEmptyArray: t8, hasNewline: s } = Ue2(), { builders: { line: a, hardline: n, join: u, breakParent: i, group: l } } = qe2(), { locStart: p, locEnd: y } = ut2(), { getParentExportDeclaration: h2 } = Ke2();
          function g(w, E2, N2) {
            let x2 = w.getValue();
            return l([u(a, w.map(N2, "decorators")), F2(x2, E2) ? n : a]);
          }
          function c(w, E2, N2) {
            return [u(n, w.map(N2, "declaration", "decorators")), n];
          }
          function f2(w, E2, N2) {
            let x2 = w.getValue(), { decorators: I2 } = x2;
            if (!t8(I2) || _(w.getParentNode()))
              return;
            let P = x2.type === "ClassExpression" || x2.type === "ClassDeclaration" || F2(x2, E2);
            return [h2(w) ? n : P ? i : "", u(a, w.map(N2, "decorators")), a];
          }
          function F2(w, E2) {
            return w.decorators.some((N2) => s(E2.originalText, y(N2)));
          }
          function _(w) {
            if (w.type !== "ExportDefaultDeclaration" && w.type !== "ExportNamedDeclaration" && w.type !== "DeclareExportDeclaration")
              return false;
            let E2 = w.declaration && w.declaration.decorators;
            return t8(E2) && p(w) === p(E2[0]);
          }
          r.exports = { printDecorators: f2, printClassMemberDecorators: g, printDecoratorsBeforeExport: c, hasDecoratorsBeforeExport: _ };
        } }), nr2 = te2({ "src/language-js/print/class.js"(e, r) {
          ne2();
          var { isNonEmptyArray: t8, createGroupIdMapper: s } = Ue2(), { printComments: a, printDanglingComments: n } = et2(), { builders: { join: u, line: i, hardline: l, softline: p, group: y, indent: h2, ifBreak: g } } = qe2(), { hasComment: c, CommentCheckFlags: f2 } = Ke2(), { getTypeParametersGroupId: F2 } = jr2(), { printMethod: _ } = qr2(), { printOptionalToken: w, printTypeAnnotation: E2, printDefiniteToken: N2 } = ct2(), { printPropertyKey: x2 } = rr2(), { printAssignment: I2 } = tr2(), { printClassMemberDecorators: P } = nu();
          function $(b2, B, k2) {
            let M = b2.getValue(), R2 = [];
            M.declare && R2.push("declare "), M.abstract && R2.push("abstract "), R2.push("class");
            let q = M.id && c(M.id, f2.Trailing) || M.typeParameters && c(M.typeParameters, f2.Trailing) || M.superClass && c(M.superClass) || t8(M.extends) || t8(M.mixins) || t8(M.implements), J2 = [], L2 = [];
            if (M.id && J2.push(" ", k2("id")), J2.push(k2("typeParameters")), M.superClass) {
              let Q2 = [d(b2, B, k2), k2("superTypeParameters")], V2 = b2.call((j2) => ["extends ", a(j2, Q2, B)], "superClass");
              q ? L2.push(i, y(V2)) : L2.push(" ", V2);
            } else
              L2.push(o(b2, B, k2, "extends"));
            if (L2.push(o(b2, B, k2, "mixins"), o(b2, B, k2, "implements")), q) {
              let Q2;
              C(M) ? Q2 = [...J2, h2(L2)] : Q2 = h2([...J2, L2]), R2.push(y(Q2, { id: D(M) }));
            } else
              R2.push(...J2, ...L2);
            return R2.push(" ", k2("body")), R2;
          }
          var D = s("heritageGroup");
          function T2(b2) {
            return g(l, "", { groupId: D(b2) });
          }
          function m(b2) {
            return ["superClass", "extends", "mixins", "implements"].filter((B) => Boolean(b2[B])).length > 1;
          }
          function C(b2) {
            return b2.typeParameters && !c(b2.typeParameters, f2.Trailing | f2.Line) && !m(b2);
          }
          function o(b2, B, k2, M) {
            let R2 = b2.getValue();
            if (!t8(R2[M]))
              return "";
            let q = n(b2, B, true, (J2) => {
              let { marker: L2 } = J2;
              return L2 === M;
            });
            return [C(R2) ? g(" ", i, { groupId: F2(R2.typeParameters) }) : i, q, q && l, M, y(h2([i, u([",", i], b2.map(k2, M))]))];
          }
          function d(b2, B, k2) {
            let M = k2("superClass");
            return b2.getParentNode().type === "AssignmentExpression" ? y(g(["(", h2([p, M]), p, ")"], M)) : M;
          }
          function v2(b2, B, k2) {
            let M = b2.getValue(), R2 = [];
            return t8(M.decorators) && R2.push(P(b2, B, k2)), M.accessibility && R2.push(M.accessibility + " "), M.readonly && R2.push("readonly "), M.declare && R2.push("declare "), M.static && R2.push("static "), (M.type === "TSAbstractMethodDefinition" || M.abstract) && R2.push("abstract "), M.override && R2.push("override "), R2.push(_(b2, B, k2)), R2;
          }
          function S2(b2, B, k2) {
            let M = b2.getValue(), R2 = [], q = B.semi ? ";" : "";
            return t8(M.decorators) && R2.push(P(b2, B, k2)), M.accessibility && R2.push(M.accessibility + " "), M.declare && R2.push("declare "), M.static && R2.push("static "), (M.type === "TSAbstractPropertyDefinition" || M.type === "TSAbstractAccessorProperty" || M.abstract) && R2.push("abstract "), M.override && R2.push("override "), M.readonly && R2.push("readonly "), M.variance && R2.push(k2("variance")), (M.type === "ClassAccessorProperty" || M.type === "AccessorProperty" || M.type === "TSAbstractAccessorProperty") && R2.push("accessor "), R2.push(x2(b2, B, k2), w(b2), N2(b2), E2(b2, B, k2)), [I2(b2, B, k2, R2, " =", "value"), q];
          }
          r.exports = { printClass: $, printClassMethod: v2, printClassProperty: S2, printHardlineAfterHeritage: T2 };
        } }), bo2 = te2({ "src/language-js/print/interface.js"(e, r) {
          ne2();
          var { isNonEmptyArray: t8 } = Ue2(), { builders: { join: s, line: a, group: n, indent: u, ifBreak: i } } = qe2(), { hasComment: l, identity: p, CommentCheckFlags: y } = Ke2(), { getTypeParametersGroupId: h2 } = jr2(), { printTypeScriptModifiers: g } = ct2();
          function c(f2, F2, _) {
            let w = f2.getValue(), E2 = [];
            w.declare && E2.push("declare "), w.type === "TSInterfaceDeclaration" && E2.push(w.abstract ? "abstract " : "", g(f2, F2, _)), E2.push("interface");
            let N2 = [], x2 = [];
            w.type !== "InterfaceTypeAnnotation" && N2.push(" ", _("id"), _("typeParameters"));
            let I2 = w.typeParameters && !l(w.typeParameters, y.Trailing | y.Line);
            return t8(w.extends) && x2.push(I2 ? i(" ", a, { groupId: h2(w.typeParameters) }) : a, "extends ", (w.extends.length === 1 ? p : u)(s([",", a], f2.map(_, "extends")))), w.id && l(w.id, y.Trailing) || t8(w.extends) ? I2 ? E2.push(n([...N2, u(x2)])) : E2.push(n(u([...N2, ...x2]))) : E2.push(...N2, ...x2), E2.push(" ", _("body")), n(E2);
          }
          r.exports = { printInterface: c };
        } }), To2 = te2({ "src/language-js/print/module.js"(e, r) {
          ne2();
          var { isNonEmptyArray: t8 } = Ue2(), { builders: { softline: s, group: a, indent: n, join: u, line: i, ifBreak: l, hardline: p } } = qe2(), { printDanglingComments: y } = et2(), { hasComment: h2, CommentCheckFlags: g, shouldPrintComma: c, needsHardlineAfterDanglingComment: f2, isStringLiteral: F2, rawText: _ } = Ke2(), { locStart: w, hasSameLoc: E2 } = ut2(), { hasDecoratorsBeforeExport: N2, printDecoratorsBeforeExport: x2 } = nu();
          function I2(S2, b2, B) {
            let k2 = S2.getValue(), M = b2.semi ? ";" : "", R2 = [], { importKind: q } = k2;
            return R2.push("import"), q && q !== "value" && R2.push(" ", q), R2.push(m(S2, b2, B), T2(S2, b2, B), o(S2, b2, B), M), R2;
          }
          function P(S2, b2, B) {
            let k2 = S2.getValue(), M = [];
            N2(k2) && M.push(x2(S2, b2, B));
            let { type: R2, exportKind: q, declaration: J2 } = k2;
            return M.push("export"), (k2.default || R2 === "ExportDefaultDeclaration") && M.push(" default"), h2(k2, g.Dangling) && (M.push(" ", y(S2, b2, true)), f2(k2) && M.push(p)), J2 ? M.push(" ", B("declaration")) : M.push(q === "type" ? " type" : "", m(S2, b2, B), T2(S2, b2, B), o(S2, b2, B)), D(k2, b2) && M.push(";"), M;
          }
          function $(S2, b2, B) {
            let k2 = S2.getValue(), M = b2.semi ? ";" : "", R2 = [], { exportKind: q, exported: J2 } = k2;
            return R2.push("export"), q === "type" && R2.push(" type"), R2.push(" *"), J2 && R2.push(" as ", B("exported")), R2.push(T2(S2, b2, B), o(S2, b2, B), M), R2;
          }
          function D(S2, b2) {
            if (!b2.semi)
              return false;
            let { type: B, declaration: k2 } = S2, M = S2.default || B === "ExportDefaultDeclaration";
            if (!k2)
              return true;
            let { type: R2 } = k2;
            return !!(M && R2 !== "ClassDeclaration" && R2 !== "FunctionDeclaration" && R2 !== "TSInterfaceDeclaration" && R2 !== "DeclareClass" && R2 !== "DeclareFunction" && R2 !== "TSDeclareFunction" && R2 !== "EnumDeclaration");
          }
          function T2(S2, b2, B) {
            let k2 = S2.getValue();
            if (!k2.source)
              return "";
            let M = [];
            return C(k2, b2) || M.push(" from"), M.push(" ", B("source")), M;
          }
          function m(S2, b2, B) {
            let k2 = S2.getValue();
            if (C(k2, b2))
              return "";
            let M = [" "];
            if (t8(k2.specifiers)) {
              let R2 = [], q = [];
              S2.each(() => {
                let J2 = S2.getValue().type;
                if (J2 === "ExportNamespaceSpecifier" || J2 === "ExportDefaultSpecifier" || J2 === "ImportNamespaceSpecifier" || J2 === "ImportDefaultSpecifier")
                  R2.push(B());
                else if (J2 === "ExportSpecifier" || J2 === "ImportSpecifier")
                  q.push(B());
                else
                  throw new Error(`Unknown specifier type ${JSON.stringify(J2)}`);
              }, "specifiers"), M.push(u(", ", R2)), q.length > 0 && (R2.length > 0 && M.push(", "), q.length > 1 || R2.length > 0 || k2.specifiers.some((L2) => h2(L2)) ? M.push(a(["{", n([b2.bracketSpacing ? i : s, u([",", i], q)]), l(c(b2) ? "," : ""), b2.bracketSpacing ? i : s, "}"])) : M.push(["{", b2.bracketSpacing ? " " : "", ...q, b2.bracketSpacing ? " " : "", "}"]));
            } else
              M.push("{}");
            return M;
          }
          function C(S2, b2) {
            let { type: B, importKind: k2, source: M, specifiers: R2 } = S2;
            return B !== "ImportDeclaration" || t8(R2) || k2 === "type" ? false : !/{\s*}/.test(b2.originalText.slice(w(S2), w(M)));
          }
          function o(S2, b2, B) {
            let k2 = S2.getNode();
            return t8(k2.assertions) ? [" assert {", b2.bracketSpacing ? " " : "", u(", ", S2.map(B, "assertions")), b2.bracketSpacing ? " " : "", "}"] : "";
          }
          function d(S2, b2, B) {
            let k2 = S2.getNode(), { type: M } = k2, R2 = [], q = M === "ImportSpecifier" ? k2.importKind : k2.exportKind;
            q && q !== "value" && R2.push(q, " ");
            let J2 = M.startsWith("Import"), L2 = J2 ? "imported" : "local", Q2 = J2 ? "local" : "exported", V2 = k2[L2], j2 = k2[Q2], Y2 = "", ie2 = "";
            return M === "ExportNamespaceSpecifier" || M === "ImportNamespaceSpecifier" ? Y2 = "*" : V2 && (Y2 = B(L2)), j2 && !v2(k2) && (ie2 = B(Q2)), R2.push(Y2, Y2 && ie2 ? " as " : "", ie2), R2;
          }
          function v2(S2) {
            if (S2.type !== "ImportSpecifier" && S2.type !== "ExportSpecifier")
              return false;
            let { local: b2, [S2.type === "ImportSpecifier" ? "imported" : "exported"]: B } = S2;
            if (b2.type !== B.type || !E2(b2, B))
              return false;
            if (F2(b2))
              return b2.value === B.value && _(b2) === _(B);
            switch (b2.type) {
              case "Identifier":
                return b2.name === B.name;
              default:
                return false;
            }
          }
          r.exports = { printImportDeclaration: I2, printExportDeclaration: P, printExportAllDeclaration: $, printModuleSpecifier: d };
        } }), uu = te2({ "src/language-js/print/object.js"(e, r) {
          ne2();
          var { printDanglingComments: t8 } = et2(), { builders: { line: s, softline: a, group: n, indent: u, ifBreak: i, hardline: l } } = qe2(), { getLast: p, hasNewlineInRange: y, hasNewline: h2, isNonEmptyArray: g } = Ue2(), { shouldPrintComma: c, hasComment: f2, getComments: F2, CommentCheckFlags: _, isNextLineEmpty: w } = Ke2(), { locStart: E2, locEnd: N2 } = ut2(), { printOptionalToken: x2, printTypeAnnotation: I2 } = ct2(), { shouldHugFunctionParameters: P } = Lr(), { shouldHugType: $ } = Or2(), { printHardlineAfterHeritage: D } = nr2();
          function T2(m, C, o) {
            let d = C.semi ? ";" : "", v2 = m.getValue(), S2;
            v2.type === "TSTypeLiteral" ? S2 = "members" : v2.type === "TSInterfaceBody" ? S2 = "body" : S2 = "properties";
            let b2 = v2.type === "ObjectTypeAnnotation", B = [S2];
            b2 && B.push("indexers", "callProperties", "internalSlots");
            let k2 = B.map((W2) => v2[W2][0]).sort((W2, K2) => E2(W2) - E2(K2))[0], M = m.getParentNode(0), R2 = b2 && M && (M.type === "InterfaceDeclaration" || M.type === "DeclareInterface" || M.type === "DeclareClass") && m.getName() === "body", q = v2.type === "TSInterfaceBody" || R2 || v2.type === "ObjectPattern" && M.type !== "FunctionDeclaration" && M.type !== "FunctionExpression" && M.type !== "ArrowFunctionExpression" && M.type !== "ObjectMethod" && M.type !== "ClassMethod" && M.type !== "ClassPrivateMethod" && M.type !== "AssignmentPattern" && M.type !== "CatchClause" && v2.properties.some((W2) => W2.value && (W2.value.type === "ObjectPattern" || W2.value.type === "ArrayPattern")) || v2.type !== "ObjectPattern" && k2 && y(C.originalText, E2(v2), E2(k2)), J2 = R2 ? ";" : v2.type === "TSInterfaceBody" || v2.type === "TSTypeLiteral" ? i(d, ";") : ",", L2 = v2.type === "RecordExpression" ? "#{" : v2.exact ? "{|" : "{", Q2 = v2.exact ? "|}" : "}", V2 = [];
            for (let W2 of B)
              m.each((K2) => {
                let de2 = K2.getValue();
                V2.push({ node: de2, printed: o(), loc: E2(de2) });
              }, W2);
            B.length > 1 && V2.sort((W2, K2) => W2.loc - K2.loc);
            let j2 = [], Y2 = V2.map((W2) => {
              let K2 = [...j2, n(W2.printed)];
              return j2 = [J2, s], (W2.node.type === "TSPropertySignature" || W2.node.type === "TSMethodSignature" || W2.node.type === "TSConstructSignatureDeclaration") && f2(W2.node, _.PrettierIgnore) && j2.shift(), w(W2.node, C) && j2.push(l), K2;
            });
            if (v2.inexact) {
              let W2;
              if (f2(v2, _.Dangling)) {
                let K2 = f2(v2, _.Line);
                W2 = [t8(m, C, true), K2 || h2(C.originalText, N2(p(F2(v2)))) ? l : s, "..."];
              } else
                W2 = ["..."];
              Y2.push([...j2, ...W2]);
            }
            let ie2 = p(v2[S2]), ee2 = !(v2.inexact || ie2 && ie2.type === "RestElement" || ie2 && (ie2.type === "TSPropertySignature" || ie2.type === "TSCallSignatureDeclaration" || ie2.type === "TSMethodSignature" || ie2.type === "TSConstructSignatureDeclaration") && f2(ie2, _.PrettierIgnore)), ce2;
            if (Y2.length === 0) {
              if (!f2(v2, _.Dangling))
                return [L2, Q2, I2(m, C, o)];
              ce2 = n([L2, t8(m, C), a, Q2, x2(m), I2(m, C, o)]);
            } else
              ce2 = [R2 && g(v2.properties) ? D(M) : "", L2, u([C.bracketSpacing ? s : a, ...Y2]), i(ee2 && (J2 !== "," || c(C)) ? J2 : ""), C.bracketSpacing ? s : a, Q2, x2(m), I2(m, C, o)];
            return m.match((W2) => W2.type === "ObjectPattern" && !W2.decorators, (W2, K2, de2) => P(W2) && (K2 === "params" || K2 === "parameters" || K2 === "this" || K2 === "rest") && de2 === 0) || m.match($, (W2, K2) => K2 === "typeAnnotation", (W2, K2) => K2 === "typeAnnotation", (W2, K2, de2) => P(W2) && (K2 === "params" || K2 === "parameters" || K2 === "this" || K2 === "rest") && de2 === 0) || !q && m.match((W2) => W2.type === "ObjectPattern", (W2) => W2.type === "AssignmentExpression" || W2.type === "VariableDeclarator") ? ce2 : n(ce2, { shouldBreak: q });
          }
          r.exports = { printObject: T2 };
        } }), dd = te2({ "src/language-js/print/flow.js"(e, r) {
          ne2();
          var t8 = Zt2(), { printDanglingComments: s } = et2(), { printString: a, printNumber: n } = Ue2(), { builders: { hardline: u, softline: i, group: l, indent: p } } = qe2(), { getParentExportDeclaration: y, isFunctionNotation: h2, isGetterOrSetter: g, rawText: c, shouldPrintComma: f2 } = Ke2(), { locStart: F2, locEnd: _ } = ut2(), { replaceTextEndOfLine: w } = Yt(), { printClass: E2 } = nr2(), { printOpaqueType: N2, printTypeAlias: x2, printIntersectionType: I2, printUnionType: P, printFunctionType: $, printTupleType: D, printIndexedAccessType: T2 } = Or2(), { printInterface: m } = bo2(), { printTypeParameter: C, printTypeParameters: o } = jr2(), { printExportDeclaration: d, printExportAllDeclaration: v2 } = To2(), { printArrayItems: S2 } = er2(), { printObject: b2 } = uu(), { printPropertyKey: B } = rr2(), { printOptionalToken: k2, printTypeAnnotation: M, printRestSpread: R2 } = ct2();
          function q(L2, Q2, V2) {
            let j2 = L2.getValue(), Y2 = Q2.semi ? ";" : "", ie2 = [];
            switch (j2.type) {
              case "DeclareClass":
                return J2(L2, E2(L2, Q2, V2));
              case "DeclareFunction":
                return J2(L2, ["function ", V2("id"), j2.predicate ? " " : "", V2("predicate"), Y2]);
              case "DeclareModule":
                return J2(L2, ["module ", V2("id"), " ", V2("body")]);
              case "DeclareModuleExports":
                return J2(L2, ["module.exports", ": ", V2("typeAnnotation"), Y2]);
              case "DeclareVariable":
                return J2(L2, ["var ", V2("id"), Y2]);
              case "DeclareOpaqueType":
                return J2(L2, N2(L2, Q2, V2));
              case "DeclareInterface":
                return J2(L2, m(L2, Q2, V2));
              case "DeclareTypeAlias":
                return J2(L2, x2(L2, Q2, V2));
              case "DeclareExportDeclaration":
                return J2(L2, d(L2, Q2, V2));
              case "DeclareExportAllDeclaration":
                return J2(L2, v2(L2, Q2, V2));
              case "OpaqueType":
                return N2(L2, Q2, V2);
              case "TypeAlias":
                return x2(L2, Q2, V2);
              case "IntersectionTypeAnnotation":
                return I2(L2, Q2, V2);
              case "UnionTypeAnnotation":
                return P(L2, Q2, V2);
              case "FunctionTypeAnnotation":
                return $(L2, Q2, V2);
              case "TupleTypeAnnotation":
                return D(L2, Q2, V2);
              case "GenericTypeAnnotation":
                return [V2("id"), o(L2, Q2, V2, "typeParameters")];
              case "IndexedAccessType":
              case "OptionalIndexedAccessType":
                return T2(L2, Q2, V2);
              case "TypeAnnotation":
                return V2("typeAnnotation");
              case "TypeParameter":
                return C(L2, Q2, V2);
              case "TypeofTypeAnnotation":
                return ["typeof ", V2("argument")];
              case "ExistsTypeAnnotation":
                return "*";
              case "EmptyTypeAnnotation":
                return "empty";
              case "MixedTypeAnnotation":
                return "mixed";
              case "ArrayTypeAnnotation":
                return [V2("elementType"), "[]"];
              case "BooleanLiteralTypeAnnotation":
                return String(j2.value);
              case "EnumDeclaration":
                return ["enum ", V2("id"), " ", V2("body")];
              case "EnumBooleanBody":
              case "EnumNumberBody":
              case "EnumStringBody":
              case "EnumSymbolBody": {
                if (j2.type === "EnumSymbolBody" || j2.explicitType) {
                  let ee2 = null;
                  switch (j2.type) {
                    case "EnumBooleanBody":
                      ee2 = "boolean";
                      break;
                    case "EnumNumberBody":
                      ee2 = "number";
                      break;
                    case "EnumStringBody":
                      ee2 = "string";
                      break;
                    case "EnumSymbolBody":
                      ee2 = "symbol";
                      break;
                  }
                  ie2.push("of ", ee2, " ");
                }
                if (j2.members.length === 0 && !j2.hasUnknownMembers)
                  ie2.push(l(["{", s(L2, Q2), i, "}"]));
                else {
                  let ee2 = j2.members.length > 0 ? [u, S2(L2, Q2, "members", V2), j2.hasUnknownMembers || f2(Q2) ? "," : ""] : [];
                  ie2.push(l(["{", p([...ee2, ...j2.hasUnknownMembers ? [u, "..."] : []]), s(L2, Q2, true), u, "}"]));
                }
                return ie2;
              }
              case "EnumBooleanMember":
              case "EnumNumberMember":
              case "EnumStringMember":
                return [V2("id"), " = ", typeof j2.init == "object" ? V2("init") : String(j2.init)];
              case "EnumDefaultedMember":
                return V2("id");
              case "FunctionTypeParam": {
                let ee2 = j2.name ? V2("name") : L2.getParentNode().this === j2 ? "this" : "";
                return [ee2, k2(L2), ee2 ? ": " : "", V2("typeAnnotation")];
              }
              case "InterfaceDeclaration":
              case "InterfaceTypeAnnotation":
                return m(L2, Q2, V2);
              case "ClassImplements":
              case "InterfaceExtends":
                return [V2("id"), V2("typeParameters")];
              case "NullableTypeAnnotation":
                return ["?", V2("typeAnnotation")];
              case "Variance": {
                let { kind: ee2 } = j2;
                return t8.ok(ee2 === "plus" || ee2 === "minus"), ee2 === "plus" ? "+" : "-";
              }
              case "ObjectTypeCallProperty":
                return j2.static && ie2.push("static "), ie2.push(V2("value")), ie2;
              case "ObjectTypeIndexer":
                return [j2.static ? "static " : "", j2.variance ? V2("variance") : "", "[", V2("id"), j2.id ? ": " : "", V2("key"), "]: ", V2("value")];
              case "ObjectTypeProperty": {
                let ee2 = "";
                return j2.proto ? ee2 = "proto " : j2.static && (ee2 = "static "), [ee2, g(j2) ? j2.kind + " " : "", j2.variance ? V2("variance") : "", B(L2, Q2, V2), k2(L2), h2(j2) ? "" : ": ", V2("value")];
              }
              case "ObjectTypeAnnotation":
                return b2(L2, Q2, V2);
              case "ObjectTypeInternalSlot":
                return [j2.static ? "static " : "", "[[", V2("id"), "]]", k2(L2), j2.method ? "" : ": ", V2("value")];
              case "ObjectTypeSpreadProperty":
                return R2(L2, Q2, V2);
              case "QualifiedTypeofIdentifier":
              case "QualifiedTypeIdentifier":
                return [V2("qualification"), ".", V2("id")];
              case "StringLiteralTypeAnnotation":
                return w(a(c(j2), Q2));
              case "NumberLiteralTypeAnnotation":
                t8.strictEqual(typeof j2.value, "number");
              case "BigIntLiteralTypeAnnotation":
                return j2.extra ? n(j2.extra.raw) : n(j2.raw);
              case "TypeCastExpression":
                return ["(", V2("expression"), M(L2, Q2, V2), ")"];
              case "TypeParameterDeclaration":
              case "TypeParameterInstantiation": {
                let ee2 = o(L2, Q2, V2, "params");
                if (Q2.parser === "flow") {
                  let ce2 = F2(j2), W2 = _(j2), K2 = Q2.originalText.lastIndexOf("/*", ce2), de2 = Q2.originalText.indexOf("*/", W2);
                  if (K2 !== -1 && de2 !== -1) {
                    let ue2 = Q2.originalText.slice(K2 + 2, de2).trim();
                    if (ue2.startsWith("::") && !ue2.includes("/*") && !ue2.includes("*/"))
                      return ["/*:: ", ee2, " */"];
                  }
                }
                return ee2;
              }
              case "InferredPredicate":
                return "%checks";
              case "DeclaredPredicate":
                return ["%checks(", V2("value"), ")"];
              case "AnyTypeAnnotation":
                return "any";
              case "BooleanTypeAnnotation":
                return "boolean";
              case "BigIntTypeAnnotation":
                return "bigint";
              case "NullLiteralTypeAnnotation":
                return "null";
              case "NumberTypeAnnotation":
                return "number";
              case "SymbolTypeAnnotation":
                return "symbol";
              case "StringTypeAnnotation":
                return "string";
              case "VoidTypeAnnotation":
                return "void";
              case "ThisTypeAnnotation":
                return "this";
              case "Node":
              case "Printable":
              case "SourceLocation":
              case "Position":
              case "Statement":
              case "Function":
              case "Pattern":
              case "Expression":
              case "Declaration":
              case "Specifier":
              case "NamedSpecifier":
              case "Comment":
              case "MemberTypeAnnotation":
              case "Type":
                throw new Error("unprintable type: " + JSON.stringify(j2.type));
            }
          }
          function J2(L2, Q2) {
            let V2 = y(L2);
            return V2 ? (t8.strictEqual(V2.type, "DeclareExportDeclaration"), Q2) : ["declare ", Q2];
          }
          r.exports = { printFlow: q };
        } }), gd = te2({ "src/language-js/utils/is-ts-keyword-type.js"(e, r) {
          ne2();
          function t8(s) {
            let { type: a } = s;
            return a.startsWith("TS") && a.endsWith("Keyword");
          }
          r.exports = t8;
        } }), Bo = te2({ "src/language-js/print/ternary.js"(e, r) {
          ne2();
          var { hasNewlineInRange: t8 } = Ue2(), { isJsxNode: s, getComments: a, isCallExpression: n, isMemberExpression: u, isTSTypeExpression: i } = Ke2(), { locStart: l, locEnd: p } = ut2(), y = Pt2(), { builders: { line: h2, softline: g, group: c, indent: f2, align: F2, ifBreak: _, dedent: w, breakParent: E2 } } = qe2();
          function N2(D) {
            let T2 = [D];
            for (let m = 0; m < T2.length; m++) {
              let C = T2[m];
              for (let o of ["test", "consequent", "alternate"]) {
                let d = C[o];
                if (s(d))
                  return true;
                d.type === "ConditionalExpression" && T2.push(d);
              }
            }
            return false;
          }
          function x2(D, T2, m) {
            let C = D.getValue(), o = C.type === "ConditionalExpression", d = o ? "alternate" : "falseType", v2 = D.getParentNode(), S2 = o ? m("test") : [m("checkType"), " ", "extends", " ", m("extendsType")];
            return v2.type === C.type && v2[d] === C ? F2(2, S2) : S2;
          }
          var I2 = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
          function P(D) {
            let T2 = D.getValue();
            if (T2.type !== "ConditionalExpression")
              return false;
            let m, C = T2;
            for (let o = 0; !m; o++) {
              let d = D.getParentNode(o);
              if (n(d) && d.callee === C || u(d) && d.object === C || d.type === "TSNonNullExpression" && d.expression === C) {
                C = d;
                continue;
              }
              d.type === "NewExpression" && d.callee === C || i(d) && d.expression === C ? (m = D.getParentNode(o + 1), C = d) : m = d;
            }
            return C === T2 ? false : m[I2.get(m.type)] === C;
          }
          function $(D, T2, m) {
            let C = D.getValue(), o = C.type === "ConditionalExpression", d = o ? "consequent" : "trueType", v2 = o ? "alternate" : "falseType", S2 = o ? ["test"] : ["checkType", "extendsType"], b2 = C[d], B = C[v2], k2 = [], M = false, R2 = D.getParentNode(), q = R2.type === C.type && S2.some((ue2) => R2[ue2] === C), J2 = R2.type === C.type && !q, L2, Q2, V2 = 0;
            do
              Q2 = L2 || C, L2 = D.getParentNode(V2), V2++;
            while (L2 && L2.type === C.type && S2.every((ue2) => L2[ue2] !== Q2));
            let j2 = L2 || R2, Y2 = Q2;
            if (o && (s(C[S2[0]]) || s(b2) || s(B) || N2(Y2))) {
              M = true, J2 = true;
              let ue2 = (z2) => [_("("), f2([g, z2]), g, _(")")], Fe2 = (z2) => z2.type === "NullLiteral" || z2.type === "Literal" && z2.value === null || z2.type === "Identifier" && z2.name === "undefined";
              k2.push(" ? ", Fe2(b2) ? m(d) : ue2(m(d)), " : ", B.type === C.type || Fe2(B) ? m(v2) : ue2(m(v2)));
            } else {
              let ue2 = [h2, "? ", b2.type === C.type ? _("", "(") : "", F2(2, m(d)), b2.type === C.type ? _("", ")") : "", h2, ": ", B.type === C.type ? m(v2) : F2(2, m(v2))];
              k2.push(R2.type !== C.type || R2[v2] === C || q ? ue2 : T2.useTabs ? w(f2(ue2)) : F2(Math.max(0, T2.tabWidth - 2), ue2));
            }
            let ee2 = [...S2.map((ue2) => a(C[ue2])), a(b2), a(B)].flat().some((ue2) => y(ue2) && t8(T2.originalText, l(ue2), p(ue2))), ce2 = (ue2) => R2 === j2 ? c(ue2, { shouldBreak: ee2 }) : ee2 ? [ue2, E2] : ue2, W2 = !M && (u(R2) || R2.type === "NGPipeExpression" && R2.left === C) && !R2.computed, K2 = P(D), de2 = ce2([x2(D, T2, m), J2 ? k2 : f2(k2), o && W2 && !K2 ? g : ""]);
            return q || K2 ? c([f2([g, de2]), g]) : de2;
          }
          r.exports = { printTernary: $ };
        } }), No = te2({ "src/language-js/print/statement.js"(e, r) {
          ne2();
          var { builders: { hardline: t8 } } = qe2(), s = qt2(), { getLeftSidePathName: a, hasNakedLeftSide: n, isJsxNode: u, isTheOnlyJsxElementInMarkdown: i, hasComment: l, CommentCheckFlags: p, isNextLineEmpty: y } = Ke2(), { shouldPrintParamsWithoutParens: h2 } = qr2();
          function g(x2, I2, P, $) {
            let D = x2.getValue(), T2 = [], m = D.type === "ClassBody", C = c(D[$]);
            return x2.each((o, d, v2) => {
              let S2 = o.getValue();
              if (S2.type === "EmptyStatement")
                return;
              let b2 = P();
              !I2.semi && !m && !i(I2, o) && f2(o, I2) ? l(S2, p.Leading) ? T2.push(P([], { needsSemi: true })) : T2.push(";", b2) : T2.push(b2), !I2.semi && m && E2(S2) && N2(S2, v2[d + 1]) && T2.push(";"), S2 !== C && (T2.push(t8), y(S2, I2) && T2.push(t8));
            }, $), T2;
          }
          function c(x2) {
            for (let I2 = x2.length - 1; I2 >= 0; I2--) {
              let P = x2[I2];
              if (P.type !== "EmptyStatement")
                return P;
            }
          }
          function f2(x2, I2) {
            return x2.getNode().type !== "ExpressionStatement" ? false : x2.call(($) => F2($, I2), "expression");
          }
          function F2(x2, I2) {
            let P = x2.getValue();
            switch (P.type) {
              case "ParenthesizedExpression":
              case "TypeCastExpression":
              case "ArrayExpression":
              case "ArrayPattern":
              case "TemplateLiteral":
              case "TemplateElement":
              case "RegExpLiteral":
                return true;
              case "ArrowFunctionExpression": {
                if (!h2(x2, I2))
                  return true;
                break;
              }
              case "UnaryExpression": {
                let { prefix: $, operator: D } = P;
                if ($ && (D === "+" || D === "-"))
                  return true;
                break;
              }
              case "BindExpression": {
                if (!P.object)
                  return true;
                break;
              }
              case "Literal": {
                if (P.regex)
                  return true;
                break;
              }
              default:
                if (u(P))
                  return true;
            }
            return s(x2, I2) ? true : n(P) ? x2.call(($) => F2($, I2), ...a(x2, P)) : false;
          }
          function _(x2, I2, P) {
            return g(x2, I2, P, "body");
          }
          function w(x2, I2, P) {
            return g(x2, I2, P, "consequent");
          }
          var E2 = (x2) => {
            let { type: I2 } = x2;
            return I2 === "ClassProperty" || I2 === "PropertyDefinition" || I2 === "ClassPrivateProperty" || I2 === "ClassAccessorProperty" || I2 === "AccessorProperty" || I2 === "TSAbstractPropertyDefinition" || I2 === "TSAbstractAccessorProperty";
          };
          function N2(x2, I2) {
            let { type: P, name: $ } = x2.key;
            if (!x2.computed && P === "Identifier" && ($ === "static" || $ === "get" || $ === "set" || $ === "accessor") && !x2.value && !x2.typeAnnotation)
              return true;
            if (!I2 || I2.static || I2.accessibility)
              return false;
            if (!I2.computed) {
              let D = I2.key && I2.key.name;
              if (D === "in" || D === "instanceof")
                return true;
            }
            if (E2(I2) && I2.variance && !I2.static && !I2.declare)
              return true;
            switch (I2.type) {
              case "ClassProperty":
              case "PropertyDefinition":
              case "TSAbstractPropertyDefinition":
                return I2.computed;
              case "MethodDefinition":
              case "TSAbstractMethodDefinition":
              case "ClassMethod":
              case "ClassPrivateMethod": {
                if ((I2.value ? I2.value.async : I2.async) || I2.kind === "get" || I2.kind === "set")
                  return false;
                let T2 = I2.value ? I2.value.generator : I2.generator;
                return !!(I2.computed || T2);
              }
              case "TSIndexSignature":
                return true;
            }
            return false;
          }
          r.exports = { printBody: _, printSwitchCaseConsequent: w };
        } }), wo2 = te2({ "src/language-js/print/block.js"(e, r) {
          ne2();
          var { printDanglingComments: t8 } = et2(), { isNonEmptyArray: s } = Ue2(), { builders: { hardline: a, indent: n } } = qe2(), { hasComment: u, CommentCheckFlags: i, isNextLineEmpty: l } = Ke2(), { printHardlineAfterHeritage: p } = nr2(), { printBody: y } = No();
          function h2(c, f2, F2) {
            let _ = c.getValue(), w = [];
            if (_.type === "StaticBlock" && w.push("static "), _.type === "ClassBody" && s(_.body)) {
              let N2 = c.getParentNode();
              w.push(p(N2));
            }
            w.push("{");
            let E2 = g(c, f2, F2);
            if (E2)
              w.push(n([a, E2]), a);
            else {
              let N2 = c.getParentNode(), x2 = c.getParentNode(1);
              N2.type === "ArrowFunctionExpression" || N2.type === "FunctionExpression" || N2.type === "FunctionDeclaration" || N2.type === "ObjectMethod" || N2.type === "ClassMethod" || N2.type === "ClassPrivateMethod" || N2.type === "ForStatement" || N2.type === "WhileStatement" || N2.type === "DoWhileStatement" || N2.type === "DoExpression" || N2.type === "CatchClause" && !x2.finalizer || N2.type === "TSModuleDeclaration" || N2.type === "TSDeclareFunction" || _.type === "StaticBlock" || _.type === "ClassBody" || w.push(a);
            }
            return w.push("}"), w;
          }
          function g(c, f2, F2) {
            let _ = c.getValue(), w = s(_.directives), E2 = _.body.some((I2) => I2.type !== "EmptyStatement"), N2 = u(_, i.Dangling);
            if (!w && !E2 && !N2)
              return "";
            let x2 = [];
            if (w && c.each((I2, P, $) => {
              x2.push(F2()), (P < $.length - 1 || E2 || N2) && (x2.push(a), l(I2.getValue(), f2) && x2.push(a));
            }, "directives"), E2 && x2.push(y(c, f2, F2)), N2 && x2.push(t8(c, f2, true)), _.type === "Program") {
              let I2 = c.getParentNode();
              (!I2 || I2.type !== "ModuleExpression") && x2.push(a);
            }
            return x2;
          }
          r.exports = { printBlock: h2, printBlockBody: g };
        } }), yd = te2({ "src/language-js/print/typescript.js"(e, r) {
          ne2();
          var { printDanglingComments: t8 } = et2(), { hasNewlineInRange: s } = Ue2(), { builders: { join: a, line: n, hardline: u, softline: i, group: l, indent: p, conditionalGroup: y, ifBreak: h2 } } = qe2(), { isStringLiteral: g, getTypeScriptMappedTypeModifier: c, shouldPrintComma: f2, isCallExpression: F2, isMemberExpression: _ } = Ke2(), w = gd(), { locStart: E2, locEnd: N2 } = ut2(), { printOptionalToken: x2, printTypeScriptModifiers: I2 } = ct2(), { printTernary: P } = Bo(), { printFunctionParameters: $, shouldGroupFunctionParameters: D } = Lr(), { printTemplateLiteral: T2 } = jt2(), { printArrayItems: m } = er2(), { printObject: C } = uu(), { printClassProperty: o, printClassMethod: d } = nr2(), { printTypeParameter: v2, printTypeParameters: S2 } = jr2(), { printPropertyKey: b2 } = rr2(), { printFunction: B, printMethodInternal: k2 } = qr2(), { printInterface: M } = bo2(), { printBlock: R2 } = wo2(), { printTypeAlias: q, printIntersectionType: J2, printUnionType: L2, printFunctionType: Q2, printTupleType: V2, printIndexedAccessType: j2, printJSDocType: Y2 } = Or2();
          function ie2(ee2, ce2, W2) {
            let K2 = ee2.getValue();
            if (!K2.type.startsWith("TS"))
              return;
            if (w(K2))
              return K2.type.slice(2, -7).toLowerCase();
            let de2 = ce2.semi ? ";" : "", ue2 = [];
            switch (K2.type) {
              case "TSThisType":
                return "this";
              case "TSTypeAssertion": {
                let Fe2 = !(K2.expression.type === "ArrayExpression" || K2.expression.type === "ObjectExpression"), z2 = l(["<", p([i, W2("typeAnnotation")]), i, ">"]), U2 = [h2("("), p([i, W2("expression")]), i, h2(")")];
                return Fe2 ? y([[z2, W2("expression")], [z2, l(U2, { shouldBreak: true })], [z2, W2("expression")]]) : l([z2, W2("expression")]);
              }
              case "TSDeclareFunction":
                return B(ee2, W2, ce2);
              case "TSExportAssignment":
                return ["export = ", W2("expression"), de2];
              case "TSModuleBlock":
                return R2(ee2, ce2, W2);
              case "TSInterfaceBody":
              case "TSTypeLiteral":
                return C(ee2, ce2, W2);
              case "TSTypeAliasDeclaration":
                return q(ee2, ce2, W2);
              case "TSQualifiedName":
                return a(".", [W2("left"), W2("right")]);
              case "TSAbstractMethodDefinition":
              case "TSDeclareMethod":
                return d(ee2, ce2, W2);
              case "TSAbstractAccessorProperty":
              case "TSAbstractPropertyDefinition":
                return o(ee2, ce2, W2);
              case "TSInterfaceHeritage":
              case "TSExpressionWithTypeArguments":
                return ue2.push(W2("expression")), K2.typeParameters && ue2.push(W2("typeParameters")), ue2;
              case "TSTemplateLiteralType":
                return T2(ee2, W2, ce2);
              case "TSNamedTupleMember":
                return [W2("label"), K2.optional ? "?" : "", ": ", W2("elementType")];
              case "TSRestType":
                return ["...", W2("typeAnnotation")];
              case "TSOptionalType":
                return [W2("typeAnnotation"), "?"];
              case "TSInterfaceDeclaration":
                return M(ee2, ce2, W2);
              case "TSClassImplements":
                return [W2("expression"), W2("typeParameters")];
              case "TSTypeParameterDeclaration":
              case "TSTypeParameterInstantiation":
                return S2(ee2, ce2, W2, "params");
              case "TSTypeParameter":
                return v2(ee2, ce2, W2);
              case "TSSatisfiesExpression":
              case "TSAsExpression": {
                let Fe2 = K2.type === "TSAsExpression" ? "as" : "satisfies";
                ue2.push(W2("expression"), ` ${Fe2} `, W2("typeAnnotation"));
                let z2 = ee2.getParentNode();
                return F2(z2) && z2.callee === K2 || _(z2) && z2.object === K2 ? l([p([i, ...ue2]), i]) : ue2;
              }
              case "TSArrayType":
                return [W2("elementType"), "[]"];
              case "TSPropertySignature":
                return K2.readonly && ue2.push("readonly "), ue2.push(b2(ee2, ce2, W2), x2(ee2)), K2.typeAnnotation && ue2.push(": ", W2("typeAnnotation")), K2.initializer && ue2.push(" = ", W2("initializer")), ue2;
              case "TSParameterProperty":
                return K2.accessibility && ue2.push(K2.accessibility + " "), K2.export && ue2.push("export "), K2.static && ue2.push("static "), K2.override && ue2.push("override "), K2.readonly && ue2.push("readonly "), ue2.push(W2("parameter")), ue2;
              case "TSTypeQuery":
                return ["typeof ", W2("exprName"), W2("typeParameters")];
              case "TSIndexSignature": {
                let Fe2 = ee2.getParentNode(), z2 = K2.parameters.length > 1 ? h2(f2(ce2) ? "," : "") : "", U2 = l([p([i, a([", ", i], ee2.map(W2, "parameters"))]), z2, i]);
                return [K2.export ? "export " : "", K2.accessibility ? [K2.accessibility, " "] : "", K2.static ? "static " : "", K2.readonly ? "readonly " : "", K2.declare ? "declare " : "", "[", K2.parameters ? U2 : "", K2.typeAnnotation ? "]: " : "]", K2.typeAnnotation ? W2("typeAnnotation") : "", Fe2.type === "ClassBody" ? de2 : ""];
              }
              case "TSTypePredicate":
                return [K2.asserts ? "asserts " : "", W2("parameterName"), K2.typeAnnotation ? [" is ", W2("typeAnnotation")] : ""];
              case "TSNonNullExpression":
                return [W2("expression"), "!"];
              case "TSImportType":
                return [K2.isTypeOf ? "typeof " : "", "import(", W2(K2.parameter ? "parameter" : "argument"), ")", K2.qualifier ? [".", W2("qualifier")] : "", S2(ee2, ce2, W2, "typeParameters")];
              case "TSLiteralType":
                return W2("literal");
              case "TSIndexedAccessType":
                return j2(ee2, ce2, W2);
              case "TSConstructSignatureDeclaration":
              case "TSCallSignatureDeclaration":
              case "TSConstructorType": {
                if (K2.type === "TSConstructorType" && K2.abstract && ue2.push("abstract "), K2.type !== "TSCallSignatureDeclaration" && ue2.push("new "), ue2.push(l($(ee2, W2, ce2, false, true))), K2.returnType || K2.typeAnnotation) {
                  let Fe2 = K2.type === "TSConstructorType";
                  ue2.push(Fe2 ? " => " : ": ", W2("returnType"), W2("typeAnnotation"));
                }
                return ue2;
              }
              case "TSTypeOperator":
                return [K2.operator, " ", W2("typeAnnotation")];
              case "TSMappedType": {
                let Fe2 = s(ce2.originalText, E2(K2), N2(K2));
                return l(["{", p([ce2.bracketSpacing ? n : i, W2("typeParameter"), K2.optional ? c(K2.optional, "?") : "", K2.typeAnnotation ? ": " : "", W2("typeAnnotation"), h2(de2)]), t8(ee2, ce2, true), ce2.bracketSpacing ? n : i, "}"], { shouldBreak: Fe2 });
              }
              case "TSMethodSignature": {
                let Fe2 = K2.kind && K2.kind !== "method" ? `${K2.kind} ` : "";
                ue2.push(K2.accessibility ? [K2.accessibility, " "] : "", Fe2, K2.export ? "export " : "", K2.static ? "static " : "", K2.readonly ? "readonly " : "", K2.abstract ? "abstract " : "", K2.declare ? "declare " : "", K2.computed ? "[" : "", W2("key"), K2.computed ? "]" : "", x2(ee2));
                let z2 = $(ee2, W2, ce2, false, true), U2 = K2.returnType ? "returnType" : "typeAnnotation", Z = K2[U2], se2 = Z ? W2(U2) : "", fe2 = D(K2, se2);
                return ue2.push(fe2 ? l(z2) : z2), Z && ue2.push(": ", l(se2)), l(ue2);
              }
              case "TSNamespaceExportDeclaration":
                return ue2.push("export as namespace ", W2("id")), ce2.semi && ue2.push(";"), l(ue2);
              case "TSEnumDeclaration":
                return K2.declare && ue2.push("declare "), K2.modifiers && ue2.push(I2(ee2, ce2, W2)), K2.const && ue2.push("const "), ue2.push("enum ", W2("id"), " "), K2.members.length === 0 ? ue2.push(l(["{", t8(ee2, ce2), i, "}"])) : ue2.push(l(["{", p([u, m(ee2, ce2, "members", W2), f2(ce2, "es5") ? "," : ""]), t8(ee2, ce2, true), u, "}"])), ue2;
              case "TSEnumMember":
                return K2.computed ? ue2.push("[", W2("id"), "]") : ue2.push(W2("id")), K2.initializer && ue2.push(" = ", W2("initializer")), ue2;
              case "TSImportEqualsDeclaration":
                return K2.isExport && ue2.push("export "), ue2.push("import "), K2.importKind && K2.importKind !== "value" && ue2.push(K2.importKind, " "), ue2.push(W2("id"), " = ", W2("moduleReference")), ce2.semi && ue2.push(";"), l(ue2);
              case "TSExternalModuleReference":
                return ["require(", W2("expression"), ")"];
              case "TSModuleDeclaration": {
                let Fe2 = ee2.getParentNode(), z2 = g(K2.id), U2 = Fe2.type === "TSModuleDeclaration", Z = K2.body && K2.body.type === "TSModuleDeclaration";
                if (U2)
                  ue2.push(".");
                else {
                  K2.declare && ue2.push("declare "), ue2.push(I2(ee2, ce2, W2));
                  let se2 = ce2.originalText.slice(E2(K2), E2(K2.id));
                  K2.id.type === "Identifier" && K2.id.name === "global" && !/namespace|module/.test(se2) || ue2.push(z2 || /(?:^|\s)module(?:\s|$)/.test(se2) ? "module " : "namespace ");
                }
                return ue2.push(W2("id")), Z ? ue2.push(W2("body")) : K2.body ? ue2.push(" ", l(W2("body"))) : ue2.push(de2), ue2;
              }
              case "TSConditionalType":
                return P(ee2, ce2, W2);
              case "TSInferType":
                return ["infer", " ", W2("typeParameter")];
              case "TSIntersectionType":
                return J2(ee2, ce2, W2);
              case "TSUnionType":
                return L2(ee2, ce2, W2);
              case "TSFunctionType":
                return Q2(ee2, ce2, W2);
              case "TSTupleType":
                return V2(ee2, ce2, W2);
              case "TSTypeReference":
                return [W2("typeName"), S2(ee2, ce2, W2, "typeParameters")];
              case "TSTypeAnnotation":
                return W2("typeAnnotation");
              case "TSEmptyBodyFunctionExpression":
                return k2(ee2, ce2, W2);
              case "TSJSDocAllType":
                return "*";
              case "TSJSDocUnknownType":
                return "?";
              case "TSJSDocNullableType":
                return Y2(ee2, W2, "?");
              case "TSJSDocNonNullableType":
                return Y2(ee2, W2, "!");
              case "TSInstantiationExpression":
                return [W2("expression"), W2("typeParameters")];
              default:
                throw new Error(`Unknown TypeScript node type: ${JSON.stringify(K2.type)}.`);
            }
          }
          r.exports = { printTypescript: ie2 };
        } }), hd = te2({ "src/language-js/print/comment.js"(e, r) {
          ne2();
          var { hasNewline: t8 } = Ue2(), { builders: { join: s, hardline: a }, utils: { replaceTextEndOfLine: n } } = qe2(), { isLineComment: u } = Ke2(), { locStart: i, locEnd: l } = ut2(), p = Pt2();
          function y(c, f2) {
            let F2 = c.getValue();
            if (u(F2))
              return f2.originalText.slice(i(F2), l(F2)).trimEnd();
            if (p(F2)) {
              if (h2(F2)) {
                let E2 = g(F2);
                return F2.trailing && !t8(f2.originalText, i(F2), { backwards: true }) ? [a, E2] : E2;
              }
              let _ = l(F2), w = f2.originalText.slice(_ - 3, _) === "*-/";
              return ["/*", n(F2.value), w ? "*-/" : "*/"];
            }
            throw new Error("Not a comment: " + JSON.stringify(F2));
          }
          function h2(c) {
            let f2 = `*${c.value}*`.split(`
`);
            return f2.length > 1 && f2.every((F2) => F2.trim()[0] === "*");
          }
          function g(c) {
            let f2 = c.value.split(`
`);
            return ["/*", s(a, f2.map((F2, _) => _ === 0 ? F2.trimEnd() : " " + (_ < f2.length - 1 ? F2.trim() : F2.trimStart()))), "*/"];
          }
          r.exports = { printComment: y };
        } }), vd = te2({ "src/language-js/print/literal.js"(e, r) {
          ne2();
          var { printString: t8, printNumber: s } = Ue2(), { replaceTextEndOfLine: a } = Yt(), { printDirective: n } = ct2();
          function u(y, h2) {
            let g = y.getNode();
            switch (g.type) {
              case "RegExpLiteral":
                return p(g);
              case "BigIntLiteral":
                return l(g.bigint || g.extra.raw);
              case "NumericLiteral":
                return s(g.extra.raw);
              case "StringLiteral":
                return a(t8(g.extra.raw, h2));
              case "NullLiteral":
                return "null";
              case "BooleanLiteral":
                return String(g.value);
              case "DecimalLiteral":
                return s(g.value) + "m";
              case "Literal": {
                if (g.regex)
                  return p(g.regex);
                if (g.bigint)
                  return l(g.raw);
                if (g.decimal)
                  return s(g.decimal) + "m";
                let { value: c } = g;
                return typeof c == "number" ? s(g.raw) : typeof c == "string" ? i(y) ? n(g.raw, h2) : a(t8(g.raw, h2)) : String(c);
              }
            }
          }
          function i(y) {
            if (y.getName() !== "expression")
              return;
            let h2 = y.getParentNode();
            return h2.type === "ExpressionStatement" && h2.directive;
          }
          function l(y) {
            return y.toLowerCase();
          }
          function p(y) {
            let { pattern: h2, flags: g } = y;
            return g = [...g].sort().join(""), `/${h2}/${g}`;
          }
          r.exports = { printLiteral: u };
        } }), Cd = te2({ "src/language-js/printer-estree.js"(e, r) {
          ne2();
          var { printDanglingComments: t8 } = et2(), { hasNewline: s } = Ue2(), { builders: { join: a, line: n, hardline: u, softline: i, group: l, indent: p }, utils: { replaceTextEndOfLine: y } } = qe2(), h2 = td(), g = rd(), { insertPragma: c } = Co2(), f2 = Eo2(), F2 = qt2(), _ = Fo(), { hasFlowShorthandAnnotationComment: w, hasComment: E2, CommentCheckFlags: N2, isTheOnlyJsxElementInMarkdown: x2, isLineComment: I2, isNextLineEmpty: P, needsHardlineAfterDanglingComment: $, hasIgnoreComment: D, isCallExpression: T2, isMemberExpression: m, markerForIfWithoutBlockAndSameLineComment: C } = Ke2(), { locStart: o, locEnd: d } = ut2(), v2 = Pt2(), { printHtmlBinding: S2, isVueEventBindingExpression: b2 } = pd(), { printAngular: B } = fd(), { printJsx: k2, hasJsxIgnoreComment: M } = Dd(), { printFlow: R2 } = dd(), { printTypescript: q } = yd(), { printOptionalToken: J2, printBindExpressionCallee: L2, printTypeAnnotation: Q2, adjustClause: V2, printRestSpread: j2, printDefiniteToken: Y2, printDirective: ie2 } = ct2(), { printImportDeclaration: ee2, printExportDeclaration: ce2, printExportAllDeclaration: W2, printModuleSpecifier: K2 } = To2(), { printTernary: de2 } = Bo(), { printTemplateLiteral: ue2 } = jt2(), { printArray: Fe2 } = er2(), { printObject: z2 } = uu(), { printClass: U2, printClassMethod: Z, printClassProperty: se2 } = nr2(), { printProperty: fe2 } = rr2(), { printFunction: ge2, printArrowFunction: he2, printMethod: we2, printReturnStatement: ke2, printThrowStatement: Re2 } = qr2(), { printCallExpression: Ne2 } = xo(), { printVariableDeclarator: Pe2, printAssignmentExpression: oe2 } = tr2(), { printBinaryishExpression: H2 } = ru(), { printSwitchCaseConsequent: pe2 } = No(), { printMemberExpression: X2 } = So2(), { printBlock: le2, printBlockBody: Ae2 } = wo2(), { printComment: Ee2 } = hd(), { printLiteral: De2 } = vd(), { printDecorators: A2 } = nu();
          function G2(Ce2, Be2, ve2, ze) {
            let be2 = re2(Ce2, Be2, ve2, ze);
            if (!be2)
              return "";
            let Ye2 = Ce2.getValue(), { type: Se2 } = Ye2;
            if (Se2 === "ClassMethod" || Se2 === "ClassPrivateMethod" || Se2 === "ClassProperty" || Se2 === "ClassAccessorProperty" || Se2 === "AccessorProperty" || Se2 === "TSAbstractAccessorProperty" || Se2 === "PropertyDefinition" || Se2 === "TSAbstractPropertyDefinition" || Se2 === "ClassPrivateProperty" || Se2 === "MethodDefinition" || Se2 === "TSAbstractMethodDefinition" || Se2 === "TSDeclareMethod")
              return be2;
            let Ie = [be2], Oe2 = A2(Ce2, Be2, ve2), Je2 = Ye2.type === "ClassExpression" && Oe2;
            if (Oe2 && (Ie = [...Oe2, be2], !Je2))
              return l(Ie);
            if (!F2(Ce2, Be2))
              return ze && ze.needsSemi && Ie.unshift(";"), Ie.length === 1 && Ie[0] === be2 ? be2 : Ie;
            if (Je2 && (Ie = [p([n, ...Ie])]), Ie.unshift("("), ze && ze.needsSemi && Ie.unshift(";"), w(Ye2)) {
              let [je2] = Ye2.trailingComments;
              Ie.push(" /*", je2.value.trimStart(), "*/"), je2.printed = true;
            }
            return Je2 && Ie.push(n), Ie.push(")"), Ie;
          }
          function re2(Ce2, Be2, ve2, ze) {
            let be2 = Ce2.getValue(), Ye2 = Be2.semi ? ";" : "";
            if (!be2)
              return "";
            if (typeof be2 == "string")
              return be2;
            for (let Ie of [De2, S2, B, k2, R2, q]) {
              let Oe2 = Ie(Ce2, Be2, ve2);
              if (typeof Oe2 < "u")
                return Oe2;
            }
            let Se2 = [];
            switch (be2.type) {
              case "JsExpressionRoot":
                return ve2("node");
              case "JsonRoot":
                return [ve2("node"), u];
              case "File":
                return be2.program && be2.program.interpreter && Se2.push(ve2(["program", "interpreter"])), Se2.push(ve2("program")), Se2;
              case "Program":
                return Ae2(Ce2, Be2, ve2);
              case "EmptyStatement":
                return "";
              case "ExpressionStatement": {
                if (Be2.parser === "__vue_event_binding" || Be2.parser === "__vue_ts_event_binding") {
                  let Oe2 = Ce2.getParentNode();
                  if (Oe2.type === "Program" && Oe2.body.length === 1 && Oe2.body[0] === be2)
                    return [ve2("expression"), b2(be2.expression) ? ";" : ""];
                }
                let Ie = t8(Ce2, Be2, true, (Oe2) => {
                  let { marker: Je2 } = Oe2;
                  return Je2 === C;
                });
                return [ve2("expression"), x2(Be2, Ce2) ? "" : Ye2, Ie ? [" ", Ie] : ""];
              }
              case "ParenthesizedExpression":
                return !E2(be2.expression) && (be2.expression.type === "ObjectExpression" || be2.expression.type === "ArrayExpression") ? ["(", ve2("expression"), ")"] : l(["(", p([i, ve2("expression")]), i, ")"]);
              case "AssignmentExpression":
                return oe2(Ce2, Be2, ve2);
              case "VariableDeclarator":
                return Pe2(Ce2, Be2, ve2);
              case "BinaryExpression":
              case "LogicalExpression":
                return H2(Ce2, Be2, ve2);
              case "AssignmentPattern":
                return [ve2("left"), " = ", ve2("right")];
              case "OptionalMemberExpression":
              case "MemberExpression":
                return X2(Ce2, Be2, ve2);
              case "MetaProperty":
                return [ve2("meta"), ".", ve2("property")];
              case "BindExpression":
                return be2.object && Se2.push(ve2("object")), Se2.push(l(p([i, L2(Ce2, Be2, ve2)]))), Se2;
              case "Identifier":
                return [be2.name, J2(Ce2), Y2(Ce2), Q2(Ce2, Be2, ve2)];
              case "V8IntrinsicIdentifier":
                return ["%", be2.name];
              case "SpreadElement":
              case "SpreadElementPattern":
              case "SpreadProperty":
              case "SpreadPropertyPattern":
              case "RestElement":
                return j2(Ce2, Be2, ve2);
              case "FunctionDeclaration":
              case "FunctionExpression":
                return ge2(Ce2, ve2, Be2, ze);
              case "ArrowFunctionExpression":
                return he2(Ce2, Be2, ve2, ze);
              case "YieldExpression":
                return Se2.push("yield"), be2.delegate && Se2.push("*"), be2.argument && Se2.push(" ", ve2("argument")), Se2;
              case "AwaitExpression": {
                if (Se2.push("await"), be2.argument) {
                  Se2.push(" ", ve2("argument"));
                  let Ie = Ce2.getParentNode();
                  if (T2(Ie) && Ie.callee === be2 || m(Ie) && Ie.object === be2) {
                    Se2 = [p([i, ...Se2]), i];
                    let Oe2 = Ce2.findAncestor((Je2) => Je2.type === "AwaitExpression" || Je2.type === "BlockStatement");
                    if (!Oe2 || Oe2.type !== "AwaitExpression")
                      return l(Se2);
                  }
                }
                return Se2;
              }
              case "ExportDefaultDeclaration":
              case "ExportNamedDeclaration":
                return ce2(Ce2, Be2, ve2);
              case "ExportAllDeclaration":
                return W2(Ce2, Be2, ve2);
              case "ImportDeclaration":
                return ee2(Ce2, Be2, ve2);
              case "ImportSpecifier":
              case "ExportSpecifier":
              case "ImportNamespaceSpecifier":
              case "ExportNamespaceSpecifier":
              case "ImportDefaultSpecifier":
              case "ExportDefaultSpecifier":
                return K2(Ce2, Be2, ve2);
              case "ImportAttribute":
                return [ve2("key"), ": ", ve2("value")];
              case "Import":
                return "import";
              case "BlockStatement":
              case "StaticBlock":
              case "ClassBody":
                return le2(Ce2, Be2, ve2);
              case "ThrowStatement":
                return Re2(Ce2, Be2, ve2);
              case "ReturnStatement":
                return ke2(Ce2, Be2, ve2);
              case "NewExpression":
              case "ImportExpression":
              case "OptionalCallExpression":
              case "CallExpression":
                return Ne2(Ce2, Be2, ve2);
              case "ObjectExpression":
              case "ObjectPattern":
              case "RecordExpression":
                return z2(Ce2, Be2, ve2);
              case "ObjectProperty":
              case "Property":
                return be2.method || be2.kind === "get" || be2.kind === "set" ? we2(Ce2, Be2, ve2) : fe2(Ce2, Be2, ve2);
              case "ObjectMethod":
                return we2(Ce2, Be2, ve2);
              case "Decorator":
                return ["@", ve2("expression")];
              case "ArrayExpression":
              case "ArrayPattern":
              case "TupleExpression":
                return Fe2(Ce2, Be2, ve2);
              case "SequenceExpression": {
                let Ie = Ce2.getParentNode(0);
                if (Ie.type === "ExpressionStatement" || Ie.type === "ForStatement") {
                  let Oe2 = [];
                  return Ce2.each((Je2, Te2) => {
                    Te2 === 0 ? Oe2.push(ve2()) : Oe2.push(",", p([n, ve2()]));
                  }, "expressions"), l(Oe2);
                }
                return l(a([",", n], Ce2.map(ve2, "expressions")));
              }
              case "ThisExpression":
                return "this";
              case "Super":
                return "super";
              case "Directive":
                return [ve2("value"), Ye2];
              case "DirectiveLiteral":
                return ie2(be2.extra.raw, Be2);
              case "UnaryExpression":
                return Se2.push(be2.operator), /[a-z]$/.test(be2.operator) && Se2.push(" "), E2(be2.argument) ? Se2.push(l(["(", p([i, ve2("argument")]), i, ")"])) : Se2.push(ve2("argument")), Se2;
              case "UpdateExpression":
                return Se2.push(ve2("argument"), be2.operator), be2.prefix && Se2.reverse(), Se2;
              case "ConditionalExpression":
                return de2(Ce2, Be2, ve2);
              case "VariableDeclaration": {
                let Ie = Ce2.map(ve2, "declarations"), Oe2 = Ce2.getParentNode(), Je2 = Oe2.type === "ForStatement" || Oe2.type === "ForInStatement" || Oe2.type === "ForOfStatement", Te2 = be2.declarations.some((Me2) => Me2.init), je2;
                return Ie.length === 1 && !E2(be2.declarations[0]) ? je2 = Ie[0] : Ie.length > 0 && (je2 = p(Ie[0])), Se2 = [be2.declare ? "declare " : "", be2.kind, je2 ? [" ", je2] : "", p(Ie.slice(1).map((Me2) => [",", Te2 && !Je2 ? u : n, Me2]))], Je2 && Oe2.body !== be2 || Se2.push(Ye2), l(Se2);
              }
              case "WithStatement":
                return l(["with (", ve2("object"), ")", V2(be2.body, ve2("body"))]);
              case "IfStatement": {
                let Ie = V2(be2.consequent, ve2("consequent")), Oe2 = l(["if (", l([p([i, ve2("test")]), i]), ")", Ie]);
                if (Se2.push(Oe2), be2.alternate) {
                  let Je2 = E2(be2.consequent, N2.Trailing | N2.Line) || $(be2), Te2 = be2.consequent.type === "BlockStatement" && !Je2;
                  Se2.push(Te2 ? " " : u), E2(be2, N2.Dangling) && Se2.push(t8(Ce2, Be2, true), Je2 ? u : " "), Se2.push("else", l(V2(be2.alternate, ve2("alternate"), be2.alternate.type === "IfStatement")));
                }
                return Se2;
              }
              case "ForStatement": {
                let Ie = V2(be2.body, ve2("body")), Oe2 = t8(Ce2, Be2, true), Je2 = Oe2 ? [Oe2, i] : "";
                return !be2.init && !be2.test && !be2.update ? [Je2, l(["for (;;)", Ie])] : [Je2, l(["for (", l([p([i, ve2("init"), ";", n, ve2("test"), ";", n, ve2("update")]), i]), ")", Ie])];
              }
              case "WhileStatement":
                return l(["while (", l([p([i, ve2("test")]), i]), ")", V2(be2.body, ve2("body"))]);
              case "ForInStatement":
                return l(["for (", ve2("left"), " in ", ve2("right"), ")", V2(be2.body, ve2("body"))]);
              case "ForOfStatement":
                return l(["for", be2.await ? " await" : "", " (", ve2("left"), " of ", ve2("right"), ")", V2(be2.body, ve2("body"))]);
              case "DoWhileStatement": {
                let Ie = V2(be2.body, ve2("body"));
                return Se2 = [l(["do", Ie])], be2.body.type === "BlockStatement" ? Se2.push(" ") : Se2.push(u), Se2.push("while (", l([p([i, ve2("test")]), i]), ")", Ye2), Se2;
              }
              case "DoExpression":
                return [be2.async ? "async " : "", "do ", ve2("body")];
              case "BreakStatement":
                return Se2.push("break"), be2.label && Se2.push(" ", ve2("label")), Se2.push(Ye2), Se2;
              case "ContinueStatement":
                return Se2.push("continue"), be2.label && Se2.push(" ", ve2("label")), Se2.push(Ye2), Se2;
              case "LabeledStatement":
                return be2.body.type === "EmptyStatement" ? [ve2("label"), ":;"] : [ve2("label"), ": ", ve2("body")];
              case "TryStatement":
                return ["try ", ve2("block"), be2.handler ? [" ", ve2("handler")] : "", be2.finalizer ? [" finally ", ve2("finalizer")] : ""];
              case "CatchClause":
                if (be2.param) {
                  let Ie = E2(be2.param, (Je2) => !v2(Je2) || Je2.leading && s(Be2.originalText, d(Je2)) || Je2.trailing && s(Be2.originalText, o(Je2), { backwards: true })), Oe2 = ve2("param");
                  return ["catch ", Ie ? ["(", p([i, Oe2]), i, ") "] : ["(", Oe2, ") "], ve2("body")];
                }
                return ["catch ", ve2("body")];
              case "SwitchStatement":
                return [l(["switch (", p([i, ve2("discriminant")]), i, ")"]), " {", be2.cases.length > 0 ? p([u, a(u, Ce2.map((Ie, Oe2, Je2) => {
                  let Te2 = Ie.getValue();
                  return [ve2(), Oe2 !== Je2.length - 1 && P(Te2, Be2) ? u : ""];
                }, "cases"))]) : "", u, "}"];
              case "SwitchCase": {
                be2.test ? Se2.push("case ", ve2("test"), ":") : Se2.push("default:"), E2(be2, N2.Dangling) && Se2.push(" ", t8(Ce2, Be2, true));
                let Ie = be2.consequent.filter((Oe2) => Oe2.type !== "EmptyStatement");
                if (Ie.length > 0) {
                  let Oe2 = pe2(Ce2, Be2, ve2);
                  Se2.push(Ie.length === 1 && Ie[0].type === "BlockStatement" ? [" ", Oe2] : p([u, Oe2]));
                }
                return Se2;
              }
              case "DebuggerStatement":
                return ["debugger", Ye2];
              case "ClassDeclaration":
              case "ClassExpression":
                return U2(Ce2, Be2, ve2);
              case "ClassMethod":
              case "ClassPrivateMethod":
              case "MethodDefinition":
                return Z(Ce2, Be2, ve2);
              case "ClassProperty":
              case "PropertyDefinition":
              case "ClassPrivateProperty":
              case "ClassAccessorProperty":
              case "AccessorProperty":
                return se2(Ce2, Be2, ve2);
              case "TemplateElement":
                return y(be2.value.raw);
              case "TemplateLiteral":
                return ue2(Ce2, ve2, Be2);
              case "TaggedTemplateExpression":
                return [ve2("tag"), ve2("typeParameters"), ve2("quasi")];
              case "PrivateIdentifier":
                return ["#", ve2("name")];
              case "PrivateName":
                return ["#", ve2("id")];
              case "InterpreterDirective":
                return Se2.push("#!", be2.value, u), P(be2, Be2) && Se2.push(u), Se2;
              case "TopicReference":
                return "%";
              case "ArgumentPlaceholder":
                return "?";
              case "ModuleExpression": {
                Se2.push("module {");
                let Ie = ve2("body");
                return Ie && Se2.push(p([u, Ie]), u), Se2.push("}"), Se2;
              }
              default:
                throw new Error("unknown type: " + JSON.stringify(be2.type));
            }
          }
          function ye(Ce2) {
            return Ce2.type && !v2(Ce2) && !I2(Ce2) && Ce2.type !== "EmptyStatement" && Ce2.type !== "TemplateElement" && Ce2.type !== "Import" && Ce2.type !== "TSEmptyBodyFunctionExpression";
          }
          r.exports = { preprocess: _, print: G2, embed: h2, insertPragma: c, massageAstNode: g, hasPrettierIgnore(Ce2) {
            return D(Ce2) || M(Ce2);
          }, willPrintOwnComments: f2.willPrintOwnComments, canAttachComment: ye, printComment: Ee2, isBlockComment: v2, handleComments: { avoidAstMutation: true, ownLine: f2.handleOwnLineComment, endOfLine: f2.handleEndOfLineComment, remaining: f2.handleRemainingComment }, getCommentChildNodes: f2.getCommentChildNodes };
        } }), Ed = te2({ "src/language-js/printer-estree-json.js"(e, r) {
          ne2();
          var { builders: { hardline: t8, indent: s, join: a } } = qe2(), n = Fo();
          function u(y, h2, g) {
            let c = y.getValue();
            switch (c.type) {
              case "JsonRoot":
                return [g("node"), t8];
              case "ArrayExpression": {
                if (c.elements.length === 0)
                  return "[]";
                let f2 = y.map(() => y.getValue() === null ? "null" : g(), "elements");
                return ["[", s([t8, a([",", t8], f2)]), t8, "]"];
              }
              case "ObjectExpression":
                return c.properties.length === 0 ? "{}" : ["{", s([t8, a([",", t8], y.map(g, "properties"))]), t8, "}"];
              case "ObjectProperty":
                return [g("key"), ": ", g("value")];
              case "UnaryExpression":
                return [c.operator === "+" ? "" : c.operator, g("argument")];
              case "NullLiteral":
                return "null";
              case "BooleanLiteral":
                return c.value ? "true" : "false";
              case "StringLiteral":
                return JSON.stringify(c.value);
              case "NumericLiteral":
                return i(y) ? JSON.stringify(String(c.value)) : JSON.stringify(c.value);
              case "Identifier":
                return i(y) ? JSON.stringify(c.name) : c.name;
              case "TemplateLiteral":
                return g(["quasis", 0]);
              case "TemplateElement":
                return JSON.stringify(c.value.cooked);
              default:
                throw new Error("unknown type: " + JSON.stringify(c.type));
            }
          }
          function i(y) {
            return y.getName() === "key" && y.getParentNode().type === "ObjectProperty";
          }
          var l = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
          function p(y, h2) {
            let { type: g } = y;
            if (g === "ObjectProperty") {
              let { key: c } = y;
              c.type === "Identifier" ? h2.key = { type: "StringLiteral", value: c.name } : c.type === "NumericLiteral" && (h2.key = { type: "StringLiteral", value: String(c.value) });
              return;
            }
            if (g === "UnaryExpression" && y.operator === "+")
              return h2.argument;
            if (g === "ArrayExpression") {
              for (let [c, f2] of y.elements.entries())
                f2 === null && h2.elements.splice(c, 0, { type: "NullLiteral" });
              return;
            }
            if (g === "TemplateLiteral")
              return { type: "StringLiteral", value: y.quasis[0].value.cooked };
          }
          p.ignoredProperties = l, r.exports = { preprocess: n, print: u, massageAstNode: p };
        } }), Mt2 = te2({ "src/common/common-options.js"(e, r) {
          ne2();
          var t8 = "Common";
          r.exports = { bracketSpacing: { since: "0.0.0", category: t8, type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: t8, type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: t8, type: "choice", default: [{ since: "1.8.2", value: true }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: t8, type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { since: "2.6.0", category: t8, type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
        } }), Fd = te2({ "src/language-js/options.js"(e, r) {
          ne2();
          var t8 = Mt2(), s = "JavaScript";
          r.exports = { arrowParens: { since: "1.9.0", category: s, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: t8.bracketSameLine, bracketSpacing: t8.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: s, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: s, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: t8.singleQuote, jsxSingleQuote: { since: "1.15.0", category: s, type: "boolean", default: false, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: s, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: s, type: "choice", default: [{ since: "0.0.0", value: false }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] }, singleAttributePerLine: t8.singleAttributePerLine };
        } }), Ad = te2({ "src/language-js/parse/parsers.js"() {
          ne2();
        } }), Ln2 = te2({ "node_modules/linguist-languages/data/JavaScript.json"(e, r) {
          r.exports = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 };
        } }), Sd = te2({ "node_modules/linguist-languages/data/TypeScript.json"(e, r) {
          r.exports = { name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 };
        } }), xd = te2({ "node_modules/linguist-languages/data/TSX.json"(e, r) {
          r.exports = { name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 };
        } }), wa2 = te2({ "node_modules/linguist-languages/data/JSON.json"(e, r) {
          r.exports = { name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 };
        } }), bd = te2({ "node_modules/linguist-languages/data/JSON with Comments.json"(e, r) {
          r.exports = { name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 };
        } }), Td = te2({ "node_modules/linguist-languages/data/JSON5.json"(e, r) {
          r.exports = { name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 };
        } }), Bd = te2({ "src/language-js/index.js"(e, r) {
          ne2();
          var t8 = _t2(), s = Cd(), a = Ed(), n = Fd(), u = Ad(), i = [t8(Ln2(), (p) => ({ since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...p.interpreters, "zx"], extensions: [...p.extensions.filter((y) => y !== ".jsx"), ".wxs"] })), t8(Ln2(), () => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] })), t8(Ln2(), () => ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 })), t8(Sd(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] })), t8(xd(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] })), t8(wa2(), () => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"] })), t8(wa2(), (p) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: p.extensions.filter((y) => y !== ".jsonl") })), t8(bd(), (p) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...p.filenames, ".eslintrc", ".swcrc"] })), t8(Td(), () => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }))], l = { estree: s, "estree-json": a };
          r.exports = { languages: i, options: n, printers: l, parsers: u };
        } }), Nd = te2({ "src/language-css/clean.js"(e, r) {
          ne2();
          var { isFrontMatterNode: t8 } = Ue2(), s = lt(), a = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
          function n(i, l, p) {
            if (t8(i) && i.lang === "yaml" && delete l.value, i.type === "css-comment" && p.type === "css-root" && p.nodes.length > 0 && ((p.nodes[0] === i || t8(p.nodes[0]) && p.nodes[1] === i) && (delete l.text, /^\*\s*@(?:format|prettier)\s*$/.test(i.text)) || p.type === "css-root" && s(p.nodes) === i))
              return null;
            if (i.type === "value-root" && delete l.text, (i.type === "media-query" || i.type === "media-query-list" || i.type === "media-feature-expression") && delete l.value, i.type === "css-rule" && delete l.params, i.type === "selector-combinator" && (l.value = l.value.replace(/\s+/g, " ")), i.type === "media-feature" && (l.value = l.value.replace(/ /g, "")), (i.type === "value-word" && (i.isColor && i.isHex || ["initial", "inherit", "unset", "revert"].includes(l.value.replace().toLowerCase())) || i.type === "media-feature" || i.type === "selector-root-invalid" || i.type === "selector-pseudo") && (l.value = l.value.toLowerCase()), i.type === "css-decl" && (l.prop = l.prop.toLowerCase()), (i.type === "css-atrule" || i.type === "css-import") && (l.name = l.name.toLowerCase()), i.type === "value-number" && (l.unit = l.unit.toLowerCase()), (i.type === "media-feature" || i.type === "media-keyword" || i.type === "media-type" || i.type === "media-unknown" || i.type === "media-url" || i.type === "media-value" || i.type === "selector-attribute" || i.type === "selector-string" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "value-string") && l.value && (l.value = u(l.value)), i.type === "selector-attribute" && (l.attribute = l.attribute.trim(), l.namespace && typeof l.namespace == "string" && (l.namespace = l.namespace.trim(), l.namespace.length === 0 && (l.namespace = true)), l.value && (l.value = l.value.trim().replace(/^["']|["']$/g, ""), delete l.quoted)), (i.type === "media-value" || i.type === "media-type" || i.type === "value-number" || i.type === "selector-root-invalid" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "selector-tag") && l.value && (l.value = l.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (y, h2, g) => {
              let c = Number(h2);
              return Number.isNaN(c) ? y : c + g.toLowerCase();
            })), i.type === "selector-tag") {
              let y = i.value.toLowerCase();
              ["from", "to"].includes(y) && (l.value = y);
            }
            if (i.type === "css-atrule" && i.name.toLowerCase() === "supports" && delete l.value, i.type === "selector-unknown" && delete l.value, i.type === "value-comma_group") {
              let y = i.groups.findIndex((h2) => h2.type === "value-number" && h2.unit === "...");
              y !== -1 && (l.groups[y].unit = "", l.groups.splice(y + 1, 0, { type: "value-word", value: "...", isColor: false, isHex: false }));
            }
            if (i.type === "value-comma_group" && i.groups.some((y) => y.type === "value-atword" && y.value.endsWith("[") || y.type === "value-word" && y.value.startsWith("]")))
              return { type: "value-atword", value: i.groups.map((y) => y.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
          }
          n.ignoredProperties = a;
          function u(i) {
            return i.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
          }
          r.exports = n;
        } }), su = te2({ "src/utils/front-matter/print.js"(e, r) {
          ne2();
          var { builders: { hardline: t8, markAsRoot: s } } = qe2();
          function a(n, u) {
            if (n.lang === "yaml") {
              let i = n.value.trim(), l = i ? u(i, { parser: "yaml" }, { stripTrailingHardline: true }) : "";
              return s([n.startDelimiter, t8, l, l ? t8 : "", n.endDelimiter]);
            }
          }
          r.exports = a;
        } }), wd = te2({ "src/language-css/embed.js"(e, r) {
          ne2();
          var { builders: { hardline: t8 } } = qe2(), s = su();
          function a(n, u, i) {
            let l = n.getValue();
            if (l.type === "front-matter") {
              let p = s(l, i);
              return p ? [p, t8] : "";
            }
          }
          r.exports = a;
        } }), _o2 = te2({ "src/utils/front-matter/parse.js"(e, r) {
          ne2();
          var t8 = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
          function s(a) {
            let n = a.match(t8);
            if (!n)
              return { content: a };
            let { startDelimiter: u, language: i, value: l = "", endDelimiter: p } = n.groups, y = i.trim() || "yaml";
            if (u === "+++" && (y = "toml"), y !== "yaml" && u !== p)
              return { content: a };
            let [h2] = n;
            return { frontMatter: { type: "front-matter", lang: y, value: l, startDelimiter: u, endDelimiter: p, raw: h2.replace(/\n$/, "") }, content: h2.replace(/[^\n]/g, " ") + a.slice(h2.length) };
          }
          r.exports = s;
        } }), _d = te2({ "src/language-css/pragma.js"(e, r) {
          ne2();
          var t8 = Co2(), s = _o2();
          function a(u) {
            return t8.hasPragma(s(u).content);
          }
          function n(u) {
            let { frontMatter: i, content: l } = s(u);
            return (i ? i.raw + `

` : "") + t8.insertPragma(l);
          }
          r.exports = { hasPragma: a, insertPragma: n };
        } }), Pd = te2({ "src/language-css/utils/index.js"(e, r) {
          ne2();
          var t8 = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
          function s(z2, U2) {
            let Z = Array.isArray(U2) ? U2 : [U2], se2 = -1, fe2;
            for (; fe2 = z2.getParentNode(++se2); )
              if (Z.includes(fe2.type))
                return se2;
            return -1;
          }
          function a(z2, U2) {
            let Z = s(z2, U2);
            return Z === -1 ? null : z2.getParentNode(Z);
          }
          function n(z2) {
            var U2;
            let Z = a(z2, "css-decl");
            return Z == null || (U2 = Z.prop) === null || U2 === void 0 ? void 0 : U2.toLowerCase();
          }
          var u = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
          function i(z2) {
            return u.has(z2.toLowerCase());
          }
          function l(z2, U2) {
            let Z = a(z2, "css-atrule");
            return (Z == null ? void 0 : Z.name) && Z.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(U2.toLowerCase());
          }
          function p(z2) {
            return z2.includes("$") || z2.includes("@") || z2.includes("#") || z2.startsWith("%") || z2.startsWith("--") || z2.startsWith(":--") || z2.includes("(") && z2.includes(")") ? z2 : z2.toLowerCase();
          }
          function y(z2, U2) {
            var Z;
            let se2 = a(z2, "value-func");
            return (se2 == null || (Z = se2.value) === null || Z === void 0 ? void 0 : Z.toLowerCase()) === U2;
          }
          function h2(z2) {
            var U2;
            let Z = a(z2, "css-rule"), se2 = Z == null || (U2 = Z.raws) === null || U2 === void 0 ? void 0 : U2.selector;
            return se2 && (se2.startsWith(":import") || se2.startsWith(":export"));
          }
          function g(z2, U2) {
            let Z = Array.isArray(U2) ? U2 : [U2], se2 = a(z2, "css-atrule");
            return se2 && Z.includes(se2.name.toLowerCase());
          }
          function c(z2) {
            let U2 = z2.getValue(), Z = a(z2, "css-atrule");
            return (Z == null ? void 0 : Z.name) === "import" && U2.groups[0].value === "url" && U2.groups.length === 2;
          }
          function f2(z2) {
            return z2.type === "value-func" && z2.value.toLowerCase() === "url";
          }
          function F2(z2, U2) {
            var Z;
            let se2 = (Z = z2.getParentNode()) === null || Z === void 0 ? void 0 : Z.nodes;
            return se2 && se2.indexOf(U2) === se2.length - 1;
          }
          function _(z2) {
            let { selector: U2 } = z2;
            return U2 ? typeof U2 == "string" && /^@.+:.*$/.test(U2) || U2.value && /^@.+:.*$/.test(U2.value) : false;
          }
          function w(z2) {
            return z2.type === "value-word" && ["from", "through", "end"].includes(z2.value);
          }
          function E2(z2) {
            return z2.type === "value-word" && ["and", "or", "not"].includes(z2.value);
          }
          function N2(z2) {
            return z2.type === "value-word" && z2.value === "in";
          }
          function x2(z2) {
            return z2.type === "value-operator" && z2.value === "*";
          }
          function I2(z2) {
            return z2.type === "value-operator" && z2.value === "/";
          }
          function P(z2) {
            return z2.type === "value-operator" && z2.value === "+";
          }
          function $(z2) {
            return z2.type === "value-operator" && z2.value === "-";
          }
          function D(z2) {
            return z2.type === "value-operator" && z2.value === "%";
          }
          function T2(z2) {
            return x2(z2) || I2(z2) || P(z2) || $(z2) || D(z2);
          }
          function m(z2) {
            return z2.type === "value-word" && ["==", "!="].includes(z2.value);
          }
          function C(z2) {
            return z2.type === "value-word" && ["<", ">", "<=", ">="].includes(z2.value);
          }
          function o(z2) {
            return z2.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(z2.name);
          }
          function d(z2) {
            var U2;
            return ((U2 = z2.raws) === null || U2 === void 0 ? void 0 : U2.params) && /^\(\s*\)$/.test(z2.raws.params);
          }
          function v2(z2) {
            return z2.name.startsWith("prettier-placeholder");
          }
          function S2(z2) {
            return z2.prop.startsWith("@prettier-placeholder");
          }
          function b2(z2, U2) {
            return z2.value === "$$" && z2.type === "value-func" && (U2 == null ? void 0 : U2.type) === "value-word" && !U2.raws.before;
          }
          function B(z2) {
            var U2, Z;
            return ((U2 = z2.value) === null || U2 === void 0 ? void 0 : U2.type) === "value-root" && ((Z = z2.value.group) === null || Z === void 0 ? void 0 : Z.type) === "value-value" && z2.prop.toLowerCase() === "composes";
          }
          function k2(z2) {
            var U2, Z, se2;
            return ((U2 = z2.value) === null || U2 === void 0 || (Z = U2.group) === null || Z === void 0 || (se2 = Z.group) === null || se2 === void 0 ? void 0 : se2.type) === "value-paren_group" && z2.value.group.group.open !== null && z2.value.group.group.close !== null;
          }
          function M(z2) {
            var U2;
            return ((U2 = z2.raws) === null || U2 === void 0 ? void 0 : U2.before) === "";
          }
          function R2(z2) {
            var U2, Z;
            return z2.type === "value-comma_group" && ((U2 = z2.groups) === null || U2 === void 0 || (Z = U2[1]) === null || Z === void 0 ? void 0 : Z.type) === "value-colon";
          }
          function q(z2) {
            var U2;
            return z2.type === "value-paren_group" && ((U2 = z2.groups) === null || U2 === void 0 ? void 0 : U2[0]) && R2(z2.groups[0]);
          }
          function J2(z2) {
            var U2;
            let Z = z2.getValue();
            if (Z.groups.length === 0)
              return false;
            let se2 = z2.getParentNode(1);
            if (!q(Z) && !(se2 && q(se2)))
              return false;
            let fe2 = a(z2, "css-decl");
            return !!(fe2 != null && (U2 = fe2.prop) !== null && U2 !== void 0 && U2.startsWith("$") || q(se2) || se2.type === "value-func");
          }
          function L2(z2) {
            return z2.type === "value-comment" && z2.inline;
          }
          function Q2(z2) {
            return z2.type === "value-word" && z2.value === "#";
          }
          function V2(z2) {
            return z2.type === "value-word" && z2.value === "{";
          }
          function j2(z2) {
            return z2.type === "value-word" && z2.value === "}";
          }
          function Y2(z2) {
            return ["value-word", "value-atword"].includes(z2.type);
          }
          function ie2(z2) {
            return (z2 == null ? void 0 : z2.type) === "value-colon";
          }
          function ee2(z2, U2) {
            if (!R2(U2))
              return false;
            let { groups: Z } = U2, se2 = Z.indexOf(z2);
            return se2 === -1 ? false : ie2(Z[se2 + 1]);
          }
          function ce2(z2) {
            return z2.value && ["not", "and", "or"].includes(z2.value.toLowerCase());
          }
          function W2(z2) {
            return z2.type !== "value-func" ? false : t8.has(z2.value.toLowerCase());
          }
          function K2(z2) {
            return /\/\//.test(z2.split(/[\n\r]/).pop());
          }
          function de2(z2) {
            return (z2 == null ? void 0 : z2.type) === "value-atword" && z2.value.startsWith("prettier-placeholder-");
          }
          function ue2(z2, U2) {
            var Z, se2;
            if (((Z = z2.open) === null || Z === void 0 ? void 0 : Z.value) !== "(" || ((se2 = z2.close) === null || se2 === void 0 ? void 0 : se2.value) !== ")" || z2.groups.some((fe2) => fe2.type !== "value-comma_group"))
              return false;
            if (U2.type === "value-comma_group") {
              let fe2 = U2.groups.indexOf(z2) - 1, ge2 = U2.groups[fe2];
              if ((ge2 == null ? void 0 : ge2.type) === "value-word" && ge2.value === "with")
                return true;
            }
            return false;
          }
          function Fe2(z2) {
            var U2, Z;
            return z2.type === "value-paren_group" && ((U2 = z2.open) === null || U2 === void 0 ? void 0 : U2.value) === "(" && ((Z = z2.close) === null || Z === void 0 ? void 0 : Z.value) === ")";
          }
          r.exports = { getAncestorCounter: s, getAncestorNode: a, getPropOfDeclNode: n, maybeToLowerCase: p, insideValueFunctionNode: y, insideICSSRuleNode: h2, insideAtRuleNode: g, insideURLFunctionInImportAtRuleNode: c, isKeyframeAtRuleKeywords: l, isWideKeywords: i, isLastNode: F2, isSCSSControlDirectiveNode: o, isDetachedRulesetDeclarationNode: _, isRelationalOperatorNode: C, isEqualityOperatorNode: m, isMultiplicationNode: x2, isDivisionNode: I2, isAdditionNode: P, isSubtractionNode: $, isModuloNode: D, isMathOperatorNode: T2, isEachKeywordNode: N2, isForKeywordNode: w, isURLFunctionNode: f2, isIfElseKeywordNode: E2, hasComposesNode: B, hasParensAroundNode: k2, hasEmptyRawBefore: M, isDetachedRulesetCallNode: d, isTemplatePlaceholderNode: v2, isTemplatePropNode: S2, isPostcssSimpleVarNode: b2, isKeyValuePairNode: R2, isKeyValuePairInParenGroupNode: q, isKeyInValuePairNode: ee2, isSCSSMapItemNode: J2, isInlineValueCommentNode: L2, isHashNode: Q2, isLeftCurlyBraceNode: V2, isRightCurlyBraceNode: j2, isWordNode: Y2, isColonNode: ie2, isMediaAndSupportsKeywords: ce2, isColorAdjusterFuncNode: W2, lastLineHasInlineComment: K2, isAtWordPlaceholderNode: de2, isConfigurationNode: ue2, isParenGroupNode: Fe2 };
        } }), Id = te2({ "src/utils/line-column-to-index.js"(e, r) {
          ne2(), r.exports = function(t8, s) {
            let a = 0;
            for (let n = 0; n < t8.line - 1; ++n)
              a = s.indexOf(`
`, a) + 1;
            return a + t8.column;
          };
        } }), kd = te2({ "src/language-css/loc.js"(e, r) {
          ne2();
          var { skipEverythingButNewLine: t8 } = Pr2(), s = lt(), a = Id();
          function n(c, f2) {
            return typeof c.sourceIndex == "number" ? c.sourceIndex : c.source ? a(c.source.start, f2) - 1 : null;
          }
          function u(c, f2) {
            if (c.type === "css-comment" && c.inline)
              return t8(f2, c.source.startOffset);
            let F2 = c.nodes && s(c.nodes);
            return F2 && c.source && !c.source.end && (c = F2), c.source && c.source.end ? a(c.source.end, f2) : null;
          }
          function i(c, f2) {
            c.source && (c.source.startOffset = n(c, f2), c.source.endOffset = u(c, f2));
            for (let F2 in c) {
              let _ = c[F2];
              F2 === "source" || !_ || typeof _ != "object" || (_.type === "value-root" || _.type === "value-unknown" ? l(_, p(c), _.text || _.value) : i(_, f2));
            }
          }
          function l(c, f2, F2) {
            c.source && (c.source.startOffset = n(c, F2) + f2, c.source.endOffset = u(c, F2) + f2);
            for (let _ in c) {
              let w = c[_];
              _ === "source" || !w || typeof w != "object" || l(w, f2, F2);
            }
          }
          function p(c) {
            let f2 = c.source.startOffset;
            return typeof c.prop == "string" && (f2 += c.prop.length), c.type === "css-atrule" && typeof c.name == "string" && (f2 += 1 + c.name.length + c.raws.afterName.match(/^\s*:?\s*/)[0].length), c.type !== "css-atrule" && c.raws && typeof c.raws.between == "string" && (f2 += c.raws.between.length), f2;
          }
          function y(c) {
            let f2 = "initial", F2 = "initial", _, w = false, E2 = [];
            for (let N2 = 0; N2 < c.length; N2++) {
              let x2 = c[N2];
              switch (f2) {
                case "initial":
                  if (x2 === "'") {
                    f2 = "single-quotes";
                    continue;
                  }
                  if (x2 === '"') {
                    f2 = "double-quotes";
                    continue;
                  }
                  if ((x2 === "u" || x2 === "U") && c.slice(N2, N2 + 4).toLowerCase() === "url(") {
                    f2 = "url", N2 += 3;
                    continue;
                  }
                  if (x2 === "*" && c[N2 - 1] === "/") {
                    f2 = "comment-block";
                    continue;
                  }
                  if (x2 === "/" && c[N2 - 1] === "/") {
                    f2 = "comment-inline", _ = N2 - 1;
                    continue;
                  }
                  continue;
                case "single-quotes":
                  if (x2 === "'" && c[N2 - 1] !== "\\" && (f2 = F2, F2 = "initial"), x2 === `
` || x2 === "\r")
                    return c;
                  continue;
                case "double-quotes":
                  if (x2 === '"' && c[N2 - 1] !== "\\" && (f2 = F2, F2 = "initial"), x2 === `
` || x2 === "\r")
                    return c;
                  continue;
                case "url":
                  if (x2 === ")" && (f2 = "initial"), x2 === `
` || x2 === "\r")
                    return c;
                  if (x2 === "'") {
                    f2 = "single-quotes", F2 = "url";
                    continue;
                  }
                  if (x2 === '"') {
                    f2 = "double-quotes", F2 = "url";
                    continue;
                  }
                  continue;
                case "comment-block":
                  x2 === "/" && c[N2 - 1] === "*" && (f2 = "initial");
                  continue;
                case "comment-inline":
                  (x2 === '"' || x2 === "'" || x2 === "*") && (w = true), (x2 === `
` || x2 === "\r") && (w && E2.push([_, N2]), f2 = "initial", w = false);
                  continue;
              }
            }
            for (let [N2, x2] of E2)
              c = c.slice(0, N2) + c.slice(N2, x2).replace(/["'*]/g, " ") + c.slice(x2);
            return c;
          }
          function h2(c) {
            return c.source.startOffset;
          }
          function g(c) {
            return c.source.endOffset;
          }
          r.exports = { locStart: h2, locEnd: g, calculateLoc: i, replaceQuotesInInlineComments: y };
        } }), Ld = te2({ "src/language-css/utils/is-less-parser.js"(e, r) {
          ne2();
          function t8(s) {
            return s.parser === "css" || s.parser === "less";
          }
          r.exports = t8;
        } }), Od = te2({ "src/language-css/utils/is-scss.js"(e, r) {
          ne2();
          function t8(s, a) {
            return s === "less" || s === "scss" ? s === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(a);
          }
          r.exports = t8;
        } }), jd = te2({ "src/language-css/utils/css-units.evaluate.js"(e, r) {
          r.exports = { em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x" };
        } }), qd = te2({ "src/language-css/utils/print-unit.js"(e, r) {
          ne2();
          var t8 = jd();
          function s(a) {
            let n = a.toLowerCase();
            return Object.prototype.hasOwnProperty.call(t8, n) ? t8[n] : a;
          }
          r.exports = s;
        } }), Md = te2({ "src/language-css/printer-postcss.js"(e, r) {
          ne2();
          var t8 = lt(), { printNumber: s, printString: a, hasNewline: n, isFrontMatterNode: u, isNextLineEmpty: i, isNonEmptyArray: l } = Ue2(), { builders: { join: p, line: y, hardline: h2, softline: g, group: c, fill: f2, indent: F2, dedent: _, ifBreak: w, breakParent: E2 }, utils: { removeLines: N2, getDocParts: x2 } } = qe2(), I2 = Nd(), P = wd(), { insertPragma: $ } = _d(), { getAncestorNode: D, getPropOfDeclNode: T2, maybeToLowerCase: m, insideValueFunctionNode: C, insideICSSRuleNode: o, insideAtRuleNode: d, insideURLFunctionInImportAtRuleNode: v2, isKeyframeAtRuleKeywords: S2, isWideKeywords: b2, isLastNode: B, isSCSSControlDirectiveNode: k2, isDetachedRulesetDeclarationNode: M, isRelationalOperatorNode: R2, isEqualityOperatorNode: q, isMultiplicationNode: J2, isDivisionNode: L2, isAdditionNode: Q2, isSubtractionNode: V2, isMathOperatorNode: j2, isEachKeywordNode: Y2, isForKeywordNode: ie2, isURLFunctionNode: ee2, isIfElseKeywordNode: ce2, hasComposesNode: W2, hasParensAroundNode: K2, hasEmptyRawBefore: de2, isKeyValuePairNode: ue2, isKeyInValuePairNode: Fe2, isDetachedRulesetCallNode: z2, isTemplatePlaceholderNode: U2, isTemplatePropNode: Z, isPostcssSimpleVarNode: se2, isSCSSMapItemNode: fe2, isInlineValueCommentNode: ge2, isHashNode: he2, isLeftCurlyBraceNode: we2, isRightCurlyBraceNode: ke2, isWordNode: Re2, isColonNode: Ne2, isMediaAndSupportsKeywords: Pe2, isColorAdjusterFuncNode: oe2, lastLineHasInlineComment: H2, isAtWordPlaceholderNode: pe2, isConfigurationNode: X2, isParenGroupNode: le2 } = Pd(), { locStart: Ae2, locEnd: Ee2 } = kd(), De2 = Ld(), A2 = Od(), G2 = qd();
          function re2(Te2) {
            return Te2.trailingComma === "es5" || Te2.trailingComma === "all";
          }
          function ye(Te2, je2, Me2) {
            let ae = Te2.getValue();
            if (!ae)
              return "";
            if (typeof ae == "string")
              return ae;
            switch (ae.type) {
              case "front-matter":
                return [ae.raw, h2];
              case "css-root": {
                let Ve2 = Ce2(Te2, je2, Me2), We = ae.raws.after.trim();
                return We.startsWith(";") && (We = We.slice(1).trim()), [Ve2, We ? ` ${We}` : "", x2(Ve2).length > 0 ? h2 : ""];
              }
              case "css-comment": {
                let Ve2 = ae.inline || ae.raws.inline, We = je2.originalText.slice(Ae2(ae), Ee2(ae));
                return Ve2 ? We.trimEnd() : We;
              }
              case "css-rule":
                return [Me2("selector"), ae.important ? " !important" : "", ae.nodes ? [ae.selector && ae.selector.type === "selector-unknown" && H2(ae.selector.value) ? y : " ", "{", ae.nodes.length > 0 ? F2([h2, Ce2(Te2, je2, Me2)]) : "", h2, "}", M(ae) ? ";" : ""] : ";"];
              case "css-decl": {
                let Ve2 = Te2.getParentNode(), { between: We } = ae.raws, Xe2 = We.trim(), st2 = Xe2 === ":", O2 = W2(ae) ? N2(Me2("value")) : Me2("value");
                return !st2 && H2(Xe2) && (O2 = F2([h2, _(O2)])), [ae.raws.before.replace(/[\s;]/g, ""), Ve2.type === "css-atrule" && Ve2.variable || o(Te2) ? ae.prop : m(ae.prop), Xe2.startsWith("//") ? " " : "", Xe2, ae.extend ? "" : " ", De2(je2) && ae.extend && ae.selector ? ["extend(", Me2("selector"), ")"] : "", O2, ae.raws.important ? ae.raws.important.replace(/\s*!\s*important/i, " !important") : ae.important ? " !important" : "", ae.raws.scssDefault ? ae.raws.scssDefault.replace(/\s*!default/i, " !default") : ae.scssDefault ? " !default" : "", ae.raws.scssGlobal ? ae.raws.scssGlobal.replace(/\s*!global/i, " !global") : ae.scssGlobal ? " !global" : "", ae.nodes ? [" {", F2([g, Ce2(Te2, je2, Me2)]), g, "}"] : Z(ae) && !Ve2.raws.semicolon && je2.originalText[Ee2(ae) - 1] !== ";" ? "" : je2.__isHTMLStyleAttribute && B(Te2, ae) ? w(";") : ";"];
              }
              case "css-atrule": {
                let Ve2 = Te2.getParentNode(), We = U2(ae) && !Ve2.raws.semicolon && je2.originalText[Ee2(ae) - 1] !== ";";
                if (De2(je2)) {
                  if (ae.mixin)
                    return [Me2("selector"), ae.important ? " !important" : "", We ? "" : ";"];
                  if (ae.function)
                    return [ae.name, Me2("params"), We ? "" : ";"];
                  if (ae.variable)
                    return ["@", ae.name, ": ", ae.value ? Me2("value") : "", ae.raws.between.trim() ? ae.raws.between.trim() + " " : "", ae.nodes ? ["{", F2([ae.nodes.length > 0 ? g : "", Ce2(Te2, je2, Me2)]), g, "}"] : "", We ? "" : ";"];
                }
                return ["@", z2(ae) || ae.name.endsWith(":") ? ae.name : m(ae.name), ae.params ? [z2(ae) ? "" : U2(ae) ? ae.raws.afterName === "" ? "" : ae.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(ae.raws.afterName) ? [h2, h2] : /^\s*\n/.test(ae.raws.afterName) ? h2 : " " : " ", Me2("params")] : "", ae.selector ? F2([" ", Me2("selector")]) : "", ae.value ? c([" ", Me2("value"), k2(ae) ? K2(ae) ? " " : y : ""]) : ae.name === "else" ? " " : "", ae.nodes ? [k2(ae) ? "" : ae.selector && !ae.selector.nodes && typeof ae.selector.value == "string" && H2(ae.selector.value) || !ae.selector && typeof ae.params == "string" && H2(ae.params) ? y : " ", "{", F2([ae.nodes.length > 0 ? g : "", Ce2(Te2, je2, Me2)]), g, "}"] : We ? "" : ";"];
              }
              case "media-query-list": {
                let Ve2 = [];
                return Te2.each((We) => {
                  let Xe2 = We.getValue();
                  Xe2.type === "media-query" && Xe2.value === "" || Ve2.push(Me2());
                }, "nodes"), c(F2(p(y, Ve2)));
              }
              case "media-query":
                return [p(" ", Te2.map(Me2, "nodes")), B(Te2, ae) ? "" : ","];
              case "media-type":
                return Oe2(Se2(ae.value, je2));
              case "media-feature-expression":
                return ae.nodes ? ["(", ...Te2.map(Me2, "nodes"), ")"] : ae.value;
              case "media-feature":
                return m(Se2(ae.value.replace(/ +/g, " "), je2));
              case "media-colon":
                return [ae.value, " "];
              case "media-value":
                return Oe2(Se2(ae.value, je2));
              case "media-keyword":
                return Se2(ae.value, je2);
              case "media-url":
                return Se2(ae.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), je2);
              case "media-unknown":
                return ae.value;
              case "selector-root":
                return c([d(Te2, "custom-selector") ? [D(Te2, "css-atrule").customSelector, y] : "", p([",", d(Te2, ["extend", "custom-selector", "nest"]) ? y : h2], Te2.map(Me2, "nodes"))]);
              case "selector-selector":
                return c(F2(Te2.map(Me2, "nodes")));
              case "selector-comment":
                return ae.value;
              case "selector-string":
                return Se2(ae.value, je2);
              case "selector-tag": {
                let Ve2 = Te2.getParentNode(), We = Ve2 && Ve2.nodes.indexOf(ae), Xe2 = We && Ve2.nodes[We - 1];
                return [ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", Xe2.type === "selector-nesting" ? ae.value : Oe2(S2(Te2, ae.value) ? ae.value.toLowerCase() : ae.value)];
              }
              case "selector-id":
                return ["#", ae.value];
              case "selector-class":
                return [".", Oe2(Se2(ae.value, je2))];
              case "selector-attribute": {
                var nt2;
                return ["[", ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", ae.attribute.trim(), (nt2 = ae.operator) !== null && nt2 !== void 0 ? nt2 : "", ae.value ? Ie(Se2(ae.value.trim(), je2), je2) : "", ae.insensitive ? " i" : "", "]"];
              }
              case "selector-combinator": {
                if (ae.value === "+" || ae.value === ">" || ae.value === "~" || ae.value === ">>>") {
                  let Xe2 = Te2.getParentNode();
                  return [Xe2.type === "selector-selector" && Xe2.nodes[0] === ae ? "" : y, ae.value, B(Te2, ae) ? "" : " "];
                }
                let Ve2 = ae.value.trim().startsWith("(") ? y : "", We = Oe2(Se2(ae.value.trim(), je2)) || y;
                return [Ve2, We];
              }
              case "selector-universal":
                return [ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", ae.value];
              case "selector-pseudo":
                return [m(ae.value), l(ae.nodes) ? c(["(", F2([g, p([",", y], Te2.map(Me2, "nodes"))]), g, ")"]) : ""];
              case "selector-nesting":
                return ae.value;
              case "selector-unknown": {
                let Ve2 = D(Te2, "css-rule");
                if (Ve2 && Ve2.isSCSSNesterProperty)
                  return Oe2(Se2(m(ae.value), je2));
                let We = Te2.getParentNode();
                if (We.raws && We.raws.selector) {
                  let st2 = Ae2(We), O2 = st2 + We.raws.selector.length;
                  return je2.originalText.slice(st2, O2).trim();
                }
                let Xe2 = Te2.getParentNode(1);
                if (We.type === "value-paren_group" && Xe2 && Xe2.type === "value-func" && Xe2.value === "selector") {
                  let st2 = Ee2(We.open) + 1, O2 = Ae2(We.close), me2 = je2.originalText.slice(st2, O2).trim();
                  return H2(me2) ? [E2, me2] : me2;
                }
                return ae.value;
              }
              case "value-value":
              case "value-root":
                return Me2("group");
              case "value-comment":
                return je2.originalText.slice(Ae2(ae), Ee2(ae));
              case "value-comma_group": {
                let Ve2 = Te2.getParentNode(), We = Te2.getParentNode(1), Xe2 = T2(Te2), st2 = Xe2 && Ve2.type === "value-value" && (Xe2 === "grid" || Xe2.startsWith("grid-template")), O2 = D(Te2, "css-atrule"), me2 = O2 && k2(O2), _e2 = ae.groups.some((at2) => ge2(at2)), He2 = Te2.map(Me2, "groups"), Ge2 = [], it2 = C(Te2, "url"), Qe2 = false, rt2 = false;
                for (let at2 = 0; at2 < ae.groups.length; ++at2) {
                  var tt2;
                  Ge2.push(He2[at2]);
                  let Ze2 = ae.groups[at2 - 1], Le2 = ae.groups[at2], $e2 = ae.groups[at2 + 1], sr2 = ae.groups[at2 + 2];
                  if (it2) {
                    ($e2 && Q2($e2) || Q2(Le2)) && Ge2.push(" ");
                    continue;
                  }
                  if (d(Te2, "forward") && Le2.type === "value-word" && Le2.value && Ze2 !== void 0 && Ze2.type === "value-word" && Ze2.value === "as" && $e2.type === "value-operator" && $e2.value === "*" || !$e2 || Le2.type === "value-word" && Le2.value.endsWith("-") && pe2($e2))
                    continue;
                  if (Le2.type === "value-string" && Le2.quoted) {
                    let $r2 = Le2.value.lastIndexOf("#{"), Vr2 = Le2.value.lastIndexOf("}");
                    $r2 !== -1 && Vr2 !== -1 ? Qe2 = $r2 > Vr2 : $r2 !== -1 ? Qe2 = true : Vr2 !== -1 && (Qe2 = false);
                  }
                  if (Qe2 || Ne2(Le2) || Ne2($e2) || Le2.type === "value-atword" && (Le2.value === "" || Le2.value.endsWith("[")) || $e2.type === "value-word" && $e2.value.startsWith("]") || Le2.value === "~" || Le2.value && Le2.value.includes("\\") && $e2 && $e2.type !== "value-comment" || Ze2 && Ze2.value && Ze2.value.indexOf("\\") === Ze2.value.length - 1 && Le2.type === "value-operator" && Le2.value === "/" || Le2.value === "\\" || se2(Le2, $e2) || he2(Le2) || we2(Le2) || ke2($e2) || we2($e2) && de2($e2) || ke2(Le2) && de2($e2) || Le2.value === "--" && he2($e2))
                    continue;
                  let Rr = j2(Le2), ou = j2($e2);
                  if ((Rr && he2($e2) || ou && ke2(Le2)) && de2($e2) || !Ze2 && L2(Le2) || C(Te2, "calc") && (Q2(Le2) || Q2($e2) || V2(Le2) || V2($e2)) && de2($e2))
                    continue;
                  let qo = (Q2(Le2) || V2(Le2)) && at2 === 0 && ($e2.type === "value-number" || $e2.isHex) && We && oe2(We) && !de2($e2), lu = sr2 && sr2.type === "value-func" || sr2 && Re2(sr2) || Le2.type === "value-func" || Re2(Le2), cu = $e2.type === "value-func" || Re2($e2) || Ze2 && Ze2.type === "value-func" || Ze2 && Re2(Ze2);
                  if (!(!(J2($e2) || J2(Le2)) && !C(Te2, "calc") && !qo && (L2($e2) && !lu || L2(Le2) && !cu || Q2($e2) && !lu || Q2(Le2) && !cu || V2($e2) || V2(Le2)) && (de2($e2) || Rr && (!Ze2 || Ze2 && j2(Ze2)))) && !((je2.parser === "scss" || je2.parser === "less") && Rr && Le2.value === "-" && le2($e2) && Ee2(Le2) === Ae2($e2.open) && $e2.open.value === "(")) {
                    if (ge2(Le2)) {
                      if (Ve2.type === "value-paren_group") {
                        Ge2.push(_(h2));
                        continue;
                      }
                      Ge2.push(h2);
                      continue;
                    }
                    if (me2 && (q($e2) || R2($e2) || ce2($e2) || Y2(Le2) || ie2(Le2))) {
                      Ge2.push(" ");
                      continue;
                    }
                    if (O2 && O2.name.toLowerCase() === "namespace") {
                      Ge2.push(" ");
                      continue;
                    }
                    if (st2) {
                      Le2.source && $e2.source && Le2.source.start.line !== $e2.source.start.line ? (Ge2.push(h2), rt2 = true) : Ge2.push(" ");
                      continue;
                    }
                    if (ou) {
                      Ge2.push(" ");
                      continue;
                    }
                    if (!($e2 && $e2.value === "...") && !(pe2(Le2) && pe2($e2) && Ee2(Le2) === Ae2($e2))) {
                      if (pe2(Le2) && le2($e2) && Ee2(Le2) === Ae2($e2.open)) {
                        Ge2.push(g);
                        continue;
                      }
                      if (Le2.value === "with" && le2($e2)) {
                        Ge2.push(" ");
                        continue;
                      }
                      (tt2 = Le2.value) !== null && tt2 !== void 0 && tt2.endsWith("#") && $e2.value === "{" && le2($e2.group) || Ge2.push(y);
                    }
                  }
                }
                return _e2 && Ge2.push(E2), rt2 && Ge2.unshift(h2), me2 ? c(F2(Ge2)) : v2(Te2) ? c(f2(Ge2)) : c(F2(f2(Ge2)));
              }
              case "value-paren_group": {
                let Ve2 = Te2.getParentNode();
                if (Ve2 && ee2(Ve2) && (ae.groups.length === 1 || ae.groups.length > 0 && ae.groups[0].type === "value-comma_group" && ae.groups[0].groups.length > 0 && ae.groups[0].groups[0].type === "value-word" && ae.groups[0].groups[0].value.startsWith("data:")))
                  return [ae.open ? Me2("open") : "", p(",", Te2.map(Me2, "groups")), ae.close ? Me2("close") : ""];
                if (!ae.open) {
                  let it2 = Te2.map(Me2, "groups"), Qe2 = [];
                  for (let rt2 = 0; rt2 < it2.length; rt2++)
                    rt2 !== 0 && Qe2.push([",", y]), Qe2.push(it2[rt2]);
                  return c(F2(f2(Qe2)));
                }
                let We = fe2(Te2), Xe2 = t8(ae.groups), st2 = Xe2 && Xe2.type === "value-comment", O2 = Fe2(ae, Ve2), me2 = X2(ae, Ve2), _e2 = me2 || We && !O2, He2 = me2 || O2, Ge2 = c([ae.open ? Me2("open") : "", F2([g, p([y], Te2.map((it2, Qe2) => {
                  let rt2 = it2.getValue(), at2 = Qe2 === ae.groups.length - 1, Ze2 = [Me2(), at2 ? "" : ","];
                  if (ue2(rt2) && rt2.type === "value-comma_group" && rt2.groups && rt2.groups[0].type !== "value-paren_group" && rt2.groups[2] && rt2.groups[2].type === "value-paren_group") {
                    let Le2 = x2(Ze2[0].contents.contents);
                    Le2[1] = c(Le2[1]), Ze2 = [c(_(Ze2))];
                  }
                  if (!at2 && rt2.type === "value-comma_group" && l(rt2.groups)) {
                    let Le2 = t8(rt2.groups);
                    !Le2.source && Le2.close && (Le2 = Le2.close), Le2.source && i(je2.originalText, Le2, Ee2) && Ze2.push(h2);
                  }
                  return Ze2;
                }, "groups"))]), w(!st2 && A2(je2.parser, je2.originalText) && We && re2(je2) ? "," : ""), g, ae.close ? Me2("close") : ""], { shouldBreak: _e2 });
                return He2 ? _(Ge2) : Ge2;
              }
              case "value-func":
                return [ae.value, d(Te2, "supports") && Pe2(ae) ? " " : "", Me2("group")];
              case "value-paren":
                return ae.value;
              case "value-number":
                return [Je2(ae.value), G2(ae.unit)];
              case "value-operator":
                return ae.value;
              case "value-word":
                return ae.isColor && ae.isHex || b2(ae.value) ? ae.value.toLowerCase() : ae.value;
              case "value-colon": {
                let Ve2 = Te2.getParentNode(), We = Ve2 && Ve2.groups.indexOf(ae), Xe2 = We && Ve2.groups[We - 1];
                return [ae.value, Xe2 && typeof Xe2.value == "string" && t8(Xe2.value) === "\\" || C(Te2, "url") ? "" : y];
              }
              case "value-comma":
                return [ae.value, " "];
              case "value-string":
                return a(ae.raws.quote + ae.value + ae.raws.quote, je2);
              case "value-atword":
                return ["@", ae.value];
              case "value-unicode-range":
                return ae.value;
              case "value-unknown":
                return ae.value;
              default:
                throw new Error(`Unknown postcss type ${JSON.stringify(ae.type)}`);
            }
          }
          function Ce2(Te2, je2, Me2) {
            let ae = [];
            return Te2.each((nt2, tt2, Ve2) => {
              let We = Ve2[tt2 - 1];
              if (We && We.type === "css-comment" && We.text.trim() === "prettier-ignore") {
                let Xe2 = nt2.getValue();
                ae.push(je2.originalText.slice(Ae2(Xe2), Ee2(Xe2)));
              } else
                ae.push(Me2());
              tt2 !== Ve2.length - 1 && (Ve2[tt2 + 1].type === "css-comment" && !n(je2.originalText, Ae2(Ve2[tt2 + 1]), { backwards: true }) && !u(Ve2[tt2]) || Ve2[tt2 + 1].type === "css-atrule" && Ve2[tt2 + 1].name === "else" && Ve2[tt2].type !== "css-comment" ? ae.push(" ") : (ae.push(je2.__isHTMLStyleAttribute ? y : h2), i(je2.originalText, nt2.getValue(), Ee2) && !u(Ve2[tt2]) && ae.push(h2)));
            }, "nodes"), ae;
          }
          var Be2 = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, ve2 = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, ze = /[A-Za-z]+/g, be2 = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, Ye2 = new RegExp(Be2.source + `|(${be2.source})?(${ve2.source})(${ze.source})?`, "g");
          function Se2(Te2, je2) {
            return Te2.replace(Be2, (Me2) => a(Me2, je2));
          }
          function Ie(Te2, je2) {
            let Me2 = je2.singleQuote ? "'" : '"';
            return Te2.includes('"') || Te2.includes("'") ? Te2 : Me2 + Te2 + Me2;
          }
          function Oe2(Te2) {
            return Te2.replace(Ye2, (je2, Me2, ae, nt2, tt2) => !ae && nt2 ? Je2(nt2) + m(tt2 || "") : je2);
          }
          function Je2(Te2) {
            return s(Te2).replace(/\.0(?=$|e)/, "");
          }
          r.exports = { print: ye, embed: P, insertPragma: $, massageAstNode: I2 };
        } }), Rd = te2({ "src/language-css/options.js"(e, r) {
          ne2();
          var t8 = Mt2();
          r.exports = { singleQuote: t8.singleQuote };
        } }), $d = te2({ "src/language-css/parsers.js"() {
          ne2();
        } }), Vd = te2({ "node_modules/linguist-languages/data/CSS.json"(e, r) {
          r.exports = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 };
        } }), Wd = te2({ "node_modules/linguist-languages/data/PostCSS.json"(e, r) {
          r.exports = { name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 };
        } }), Hd = te2({ "node_modules/linguist-languages/data/Less.json"(e, r) {
          r.exports = { name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 };
        } }), Gd = te2({ "node_modules/linguist-languages/data/SCSS.json"(e, r) {
          r.exports = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 };
        } }), Ud = te2({ "src/language-css/index.js"(e, r) {
          ne2();
          var t8 = _t2(), s = Md(), a = Rd(), n = $d(), u = [t8(Vd(), (l) => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...l.extensions, ".wxss"] })), t8(Wd(), () => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] })), t8(Hd(), () => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] })), t8(Gd(), () => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }))], i = { postcss: s };
          r.exports = { languages: u, options: a, printers: i, parsers: n };
        } }), Jd = te2({ "src/language-handlebars/loc.js"(e, r) {
          ne2();
          function t8(a) {
            return a.loc.start.offset;
          }
          function s(a) {
            return a.loc.end.offset;
          }
          r.exports = { locStart: t8, locEnd: s };
        } }), zd = te2({ "src/language-handlebars/clean.js"(e, r) {
          ne2();
          function t8(s, a) {
            if (s.type === "TextNode") {
              let n = s.chars.trim();
              if (!n)
                return null;
              a.chars = n.replace(/[\t\n\f\r ]+/g, " ");
            }
            s.type === "AttrNode" && s.name.toLowerCase() === "class" && delete a.value;
          }
          t8.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]), r.exports = t8;
        } }), Xd = te2({ "src/language-handlebars/html-void-elements.evaluate.js"(e, r) {
          r.exports = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
        } }), Kd = te2({ "src/language-handlebars/utils.js"(e, r) {
          ne2();
          var t8 = lt(), s = Xd();
          function a(x2) {
            let I2 = x2.getValue(), P = x2.getParentNode(0);
            return !!(g(x2, ["ElementNode"]) && t8(P.children) === I2 || g(x2, ["Block"]) && t8(P.body) === I2);
          }
          function n(x2) {
            return x2.toUpperCase() === x2;
          }
          function u(x2) {
            return h2(x2, ["ElementNode"]) && typeof x2.tag == "string" && !x2.tag.startsWith(":") && (n(x2.tag[0]) || x2.tag.includes("."));
          }
          var i = new Set(s);
          function l(x2) {
            return i.has(x2.toLowerCase()) && !n(x2[0]);
          }
          function p(x2) {
            return x2.selfClosing === true || l(x2.tag) || u(x2) && x2.children.every((I2) => y(I2));
          }
          function y(x2) {
            return h2(x2, ["TextNode"]) && !/\S/.test(x2.chars);
          }
          function h2(x2, I2) {
            return x2 && I2.includes(x2.type);
          }
          function g(x2, I2) {
            let P = x2.getParentNode(0);
            return h2(P, I2);
          }
          function c(x2, I2) {
            let P = _(x2);
            return h2(P, I2);
          }
          function f2(x2, I2) {
            let P = w(x2);
            return h2(P, I2);
          }
          function F2(x2, I2) {
            var P, $, D, T2;
            let m = x2.getValue(), C = (P = x2.getParentNode(0)) !== null && P !== void 0 ? P : {}, o = ($ = (D = (T2 = C.children) !== null && T2 !== void 0 ? T2 : C.body) !== null && D !== void 0 ? D : C.parts) !== null && $ !== void 0 ? $ : [], d = o.indexOf(m);
            return d !== -1 && o[d + I2];
          }
          function _(x2) {
            let I2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            return F2(x2, -I2);
          }
          function w(x2) {
            return F2(x2, 1);
          }
          function E2(x2) {
            return h2(x2, ["MustacheCommentStatement"]) && typeof x2.value == "string" && x2.value.trim() === "prettier-ignore";
          }
          function N2(x2) {
            let I2 = x2.getValue(), P = _(x2, 2);
            return E2(I2) || E2(P);
          }
          r.exports = { getNextNode: w, getPreviousNode: _, hasPrettierIgnore: N2, isLastNodeOfSiblings: a, isNextNodeOfSomeType: f2, isNodeOfSomeType: h2, isParentOfSomeType: g, isPreviousNodeOfSomeType: c, isVoid: p, isWhitespaceNode: y };
        } }), Yd = te2({ "src/language-handlebars/printer-glimmer.js"(e, r) {
          ne2();
          var { builders: { dedent: t8, fill: s, group: a, hardline: n, ifBreak: u, indent: i, join: l, line: p, softline: y }, utils: { getDocParts: h2, replaceTextEndOfLine: g } } = qe2(), { getPreferredQuote: c, isNonEmptyArray: f2 } = Ue2(), { locStart: F2, locEnd: _ } = Jd(), w = zd(), { getNextNode: E2, getPreviousNode: N2, hasPrettierIgnore: x2, isLastNodeOfSiblings: I2, isNextNodeOfSomeType: P, isNodeOfSomeType: $, isParentOfSomeType: D, isPreviousNodeOfSomeType: T2, isVoid: m, isWhitespaceNode: C } = Kd(), o = 2;
          function d(H2, pe2, X2) {
            let le2 = H2.getValue();
            if (!le2)
              return "";
            if (x2(H2))
              return pe2.originalText.slice(F2(le2), _(le2));
            let Ae2 = pe2.singleQuote ? "'" : '"';
            switch (le2.type) {
              case "Block":
              case "Program":
              case "Template":
                return a(H2.map(X2, "body"));
              case "ElementNode": {
                let Ee2 = a(S2(H2, X2)), De2 = pe2.htmlWhitespaceSensitivity === "ignore" && P(H2, ["ElementNode"]) ? y : "";
                if (m(le2))
                  return [Ee2, De2];
                let A2 = ["</", le2.tag, ">"];
                return le2.children.length === 0 ? [Ee2, i(A2), De2] : pe2.htmlWhitespaceSensitivity === "ignore" ? [Ee2, i(b2(H2, pe2, X2)), n, i(A2), De2] : [Ee2, i(a(b2(H2, pe2, X2))), i(A2), De2];
              }
              case "BlockStatement": {
                let Ee2 = H2.getParentNode(1);
                return Ee2 && Ee2.inverse && Ee2.inverse.body.length === 1 && Ee2.inverse.body[0] === le2 && Ee2.inverse.body[0].path.parts[0] === Ee2.path.parts[0] ? [ie2(H2, X2, Ee2.inverse.body[0].path.parts[0]), de2(H2, X2, pe2), ue2(H2, X2, pe2)] : [j2(H2, X2), a([de2(H2, X2, pe2), ue2(H2, X2, pe2), ee2(H2, X2, pe2)])];
              }
              case "ElementModifierStatement":
                return a(["{{", Re2(H2, X2), "}}"]);
              case "MustacheStatement":
                return a([k2(le2), Re2(H2, X2), M(le2)]);
              case "SubExpression":
                return a(["(", ke2(H2, X2), y, ")"]);
              case "AttrNode": {
                let Ee2 = le2.value.type === "TextNode";
                if (Ee2 && le2.value.chars === "" && F2(le2.value) === _(le2.value))
                  return le2.name;
                let A2 = Ee2 ? c(le2.value.chars, Ae2).quote : le2.value.type === "ConcatStatement" ? c(le2.value.parts.filter((re2) => re2.type === "TextNode").map((re2) => re2.chars).join(""), Ae2).quote : "", G2 = X2("value");
                return [le2.name, "=", A2, le2.name === "class" && A2 ? a(i(G2)) : G2, A2];
              }
              case "ConcatStatement":
                return H2.map(X2, "parts");
              case "Hash":
                return l(p, H2.map(X2, "pairs"));
              case "HashPair":
                return [le2.key, "=", X2("value")];
              case "TextNode": {
                let Ee2 = le2.chars.replace(/{{/g, "\\{{"), De2 = U2(H2);
                if (De2) {
                  if (De2 === "class") {
                    let Ye2 = Ee2.trim().split(/\s+/).join(" "), Se2 = false, Ie = false;
                    return D(H2, ["ConcatStatement"]) && (T2(H2, ["MustacheStatement"]) && /^\s/.test(Ee2) && (Se2 = true), P(H2, ["MustacheStatement"]) && /\s$/.test(Ee2) && Ye2 !== "" && (Ie = true)), [Se2 ? p : "", Ye2, Ie ? p : ""];
                  }
                  return g(Ee2);
                }
                let G2 = /^[\t\n\f\r ]*$/.test(Ee2), re2 = !N2(H2), ye = !E2(H2);
                if (pe2.htmlWhitespaceSensitivity !== "ignore") {
                  let Ye2 = /^[\t\n\f\r ]*/, Se2 = /[\t\n\f\r ]*$/, Ie = ye && D(H2, ["Template"]), Oe2 = re2 && D(H2, ["Template"]);
                  if (G2) {
                    if (Oe2 || Ie)
                      return "";
                    let ae = [p], nt2 = Z(Ee2);
                    return nt2 && (ae = ge2(nt2)), I2(H2) && (ae = ae.map((tt2) => t8(tt2))), ae;
                  }
                  let [Je2] = Ee2.match(Ye2), [Te2] = Ee2.match(Se2), je2 = [];
                  if (Je2) {
                    je2 = [p];
                    let ae = Z(Je2);
                    ae && (je2 = ge2(ae)), Ee2 = Ee2.replace(Ye2, "");
                  }
                  let Me2 = [];
                  if (Te2) {
                    if (!Ie) {
                      Me2 = [p];
                      let ae = Z(Te2);
                      ae && (Me2 = ge2(ae)), I2(H2) && (Me2 = Me2.map((nt2) => t8(nt2)));
                    }
                    Ee2 = Ee2.replace(Se2, "");
                  }
                  return [...je2, s(Fe2(Ee2)), ...Me2];
                }
                let Ce2 = Z(Ee2), Be2 = se2(Ee2), ve2 = fe2(Ee2);
                if ((re2 || ye) && G2 && D(H2, ["Block", "ElementNode", "Template"]))
                  return "";
                G2 && Ce2 ? (Be2 = Math.min(Ce2, o), ve2 = 0) : (P(H2, ["BlockStatement", "ElementNode"]) && (ve2 = Math.max(ve2, 1)), T2(H2, ["BlockStatement", "ElementNode"]) && (Be2 = Math.max(Be2, 1)));
                let ze = "", be2 = "";
                return ve2 === 0 && P(H2, ["MustacheStatement"]) && (be2 = " "), Be2 === 0 && T2(H2, ["MustacheStatement"]) && (ze = " "), re2 && (Be2 = 0, ze = ""), ye && (ve2 = 0, be2 = ""), Ee2 = Ee2.replace(/^[\t\n\f\r ]+/g, ze).replace(/[\t\n\f\r ]+$/, be2), [...ge2(Be2), s(Fe2(Ee2)), ...ge2(ve2)];
              }
              case "MustacheCommentStatement": {
                let Ee2 = F2(le2), De2 = _(le2), A2 = pe2.originalText.charAt(Ee2 + 2) === "~", G2 = pe2.originalText.charAt(De2 - 3) === "~", re2 = le2.value.includes("}}") ? "--" : "";
                return ["{{", A2 ? "~" : "", "!", re2, le2.value, re2, G2 ? "~" : "", "}}"];
              }
              case "PathExpression":
                return le2.original;
              case "BooleanLiteral":
                return String(le2.value);
              case "CommentStatement":
                return ["<!--", le2.value, "-->"];
              case "StringLiteral": {
                if (we2(H2)) {
                  let Ee2 = pe2.singleQuote ? '"' : "'";
                  return he2(le2.value, Ee2);
                }
                return he2(le2.value, Ae2);
              }
              case "NumberLiteral":
                return String(le2.value);
              case "UndefinedLiteral":
                return "undefined";
              case "NullLiteral":
                return "null";
              default:
                throw new Error("unknown glimmer type: " + JSON.stringify(le2.type));
            }
          }
          function v2(H2, pe2) {
            return F2(H2) - F2(pe2);
          }
          function S2(H2, pe2) {
            let X2 = H2.getValue(), le2 = ["attributes", "modifiers", "comments"].filter((Ee2) => f2(X2[Ee2])), Ae2 = le2.flatMap((Ee2) => X2[Ee2]).sort(v2);
            for (let Ee2 of le2)
              H2.each((De2) => {
                let A2 = Ae2.indexOf(De2.getValue());
                Ae2.splice(A2, 1, [p, pe2()]);
              }, Ee2);
            return f2(X2.blockParams) && Ae2.push(p, oe2(X2)), ["<", X2.tag, i(Ae2), B(X2)];
          }
          function b2(H2, pe2, X2) {
            let Ae2 = H2.getValue().children.every((Ee2) => C(Ee2));
            return pe2.htmlWhitespaceSensitivity === "ignore" && Ae2 ? "" : H2.map((Ee2, De2) => {
              let A2 = X2();
              return De2 === 0 && pe2.htmlWhitespaceSensitivity === "ignore" ? [y, A2] : A2;
            }, "children");
          }
          function B(H2) {
            return m(H2) ? u([y, "/>"], [" />", y]) : u([y, ">"], ">");
          }
          function k2(H2) {
            let pe2 = H2.escaped === false ? "{{{" : "{{", X2 = H2.strip && H2.strip.open ? "~" : "";
            return [pe2, X2];
          }
          function M(H2) {
            let pe2 = H2.escaped === false ? "}}}" : "}}";
            return [H2.strip && H2.strip.close ? "~" : "", pe2];
          }
          function R2(H2) {
            let pe2 = k2(H2), X2 = H2.openStrip.open ? "~" : "";
            return [pe2, X2, "#"];
          }
          function q(H2) {
            let pe2 = M(H2);
            return [H2.openStrip.close ? "~" : "", pe2];
          }
          function J2(H2) {
            let pe2 = k2(H2), X2 = H2.closeStrip.open ? "~" : "";
            return [pe2, X2, "/"];
          }
          function L2(H2) {
            let pe2 = M(H2);
            return [H2.closeStrip.close ? "~" : "", pe2];
          }
          function Q2(H2) {
            let pe2 = k2(H2), X2 = H2.inverseStrip.open ? "~" : "";
            return [pe2, X2];
          }
          function V2(H2) {
            let pe2 = M(H2);
            return [H2.inverseStrip.close ? "~" : "", pe2];
          }
          function j2(H2, pe2) {
            let X2 = H2.getValue(), le2 = [], Ae2 = Pe2(H2, pe2);
            return Ae2 && le2.push(a(Ae2)), f2(X2.program.blockParams) && le2.push(oe2(X2.program)), a([R2(X2), Ne2(H2, pe2), le2.length > 0 ? i([p, l(p, le2)]) : "", y, q(X2)]);
          }
          function Y2(H2, pe2) {
            return [pe2.htmlWhitespaceSensitivity === "ignore" ? n : "", Q2(H2), "else", V2(H2)];
          }
          function ie2(H2, pe2, X2) {
            let le2 = H2.getValue(), Ae2 = H2.getParentNode(1);
            return a([Q2(Ae2), ["else", " ", X2], i([p, a(Pe2(H2, pe2)), ...f2(le2.program.blockParams) ? [p, oe2(le2.program)] : []]), y, V2(Ae2)]);
          }
          function ee2(H2, pe2, X2) {
            let le2 = H2.getValue();
            return X2.htmlWhitespaceSensitivity === "ignore" ? [ce2(le2) ? y : n, J2(le2), pe2("path"), L2(le2)] : [J2(le2), pe2("path"), L2(le2)];
          }
          function ce2(H2) {
            return $(H2, ["BlockStatement"]) && H2.program.body.every((pe2) => C(pe2));
          }
          function W2(H2) {
            return K2(H2) && H2.inverse.body.length === 1 && $(H2.inverse.body[0], ["BlockStatement"]) && H2.inverse.body[0].path.parts[0] === H2.path.parts[0];
          }
          function K2(H2) {
            return $(H2, ["BlockStatement"]) && H2.inverse;
          }
          function de2(H2, pe2, X2) {
            let le2 = H2.getValue();
            if (ce2(le2))
              return "";
            let Ae2 = pe2("program");
            return X2.htmlWhitespaceSensitivity === "ignore" ? i([n, Ae2]) : i(Ae2);
          }
          function ue2(H2, pe2, X2) {
            let le2 = H2.getValue(), Ae2 = pe2("inverse"), Ee2 = X2.htmlWhitespaceSensitivity === "ignore" ? [n, Ae2] : Ae2;
            return W2(le2) ? Ee2 : K2(le2) ? [Y2(le2, X2), i(Ee2)] : "";
          }
          function Fe2(H2) {
            return h2(l(p, z2(H2)));
          }
          function z2(H2) {
            return H2.split(/[\t\n\f\r ]+/);
          }
          function U2(H2) {
            for (let pe2 = 0; pe2 < 2; pe2++) {
              let X2 = H2.getParentNode(pe2);
              if (X2 && X2.type === "AttrNode")
                return X2.name.toLowerCase();
            }
          }
          function Z(H2) {
            return H2 = typeof H2 == "string" ? H2 : "", H2.split(`
`).length - 1;
          }
          function se2(H2) {
            H2 = typeof H2 == "string" ? H2 : "";
            let pe2 = (H2.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
            return Z(pe2);
          }
          function fe2(H2) {
            H2 = typeof H2 == "string" ? H2 : "";
            let pe2 = (H2.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
            return Z(pe2);
          }
          function ge2() {
            let H2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return Array.from({ length: Math.min(H2, o) }).fill(n);
          }
          function he2(H2, pe2) {
            let { quote: X2, regex: le2 } = c(H2, pe2);
            return [X2, H2.replace(le2, `\\${X2}`), X2];
          }
          function we2(H2) {
            let pe2 = 0, X2 = H2.getParentNode(pe2);
            for (; X2 && $(X2, ["SubExpression"]); )
              pe2++, X2 = H2.getParentNode(pe2);
            return !!(X2 && $(H2.getParentNode(pe2 + 1), ["ConcatStatement"]) && $(H2.getParentNode(pe2 + 2), ["AttrNode"]));
          }
          function ke2(H2, pe2) {
            let X2 = Ne2(H2, pe2), le2 = Pe2(H2, pe2);
            return le2 ? i([X2, p, a(le2)]) : X2;
          }
          function Re2(H2, pe2) {
            let X2 = Ne2(H2, pe2), le2 = Pe2(H2, pe2);
            return le2 ? [i([X2, p, le2]), y] : X2;
          }
          function Ne2(H2, pe2) {
            return pe2("path");
          }
          function Pe2(H2, pe2) {
            let X2 = H2.getValue(), le2 = [];
            if (X2.params.length > 0) {
              let Ae2 = H2.map(pe2, "params");
              le2.push(...Ae2);
            }
            if (X2.hash && X2.hash.pairs.length > 0) {
              let Ae2 = pe2("hash");
              le2.push(Ae2);
            }
            return le2.length === 0 ? "" : l(p, le2);
          }
          function oe2(H2) {
            return ["as |", H2.blockParams.join(" "), "|"];
          }
          r.exports = { print: d, massageAstNode: w };
        } }), Qd = te2({ "src/language-handlebars/parsers.js"() {
          ne2();
        } }), Zd = te2({ "node_modules/linguist-languages/data/Handlebars.json"(e, r) {
          r.exports = { name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 };
        } }), eg = te2({ "src/language-handlebars/index.js"(e, r) {
          ne2();
          var t8 = _t2(), s = Yd(), a = Qd(), n = [t8(Zd(), () => ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }))], u = { glimmer: s };
          r.exports = { languages: n, printers: u, parsers: a };
        } }), tg = te2({ "src/language-graphql/pragma.js"(e, r) {
          ne2();
          function t8(a) {
            return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(a);
          }
          function s(a) {
            return `# @format

` + a;
          }
          r.exports = { hasPragma: t8, insertPragma: s };
        } }), rg = te2({ "src/language-graphql/loc.js"(e, r) {
          ne2();
          function t8(a) {
            return typeof a.start == "number" ? a.start : a.loc && a.loc.start;
          }
          function s(a) {
            return typeof a.end == "number" ? a.end : a.loc && a.loc.end;
          }
          r.exports = { locStart: t8, locEnd: s };
        } }), ng = te2({ "src/language-graphql/printer-graphql.js"(e, r) {
          ne2();
          var { builders: { join: t8, hardline: s, line: a, softline: n, group: u, indent: i, ifBreak: l } } = qe2(), { isNextLineEmpty: p, isNonEmptyArray: y } = Ue2(), { insertPragma: h2 } = tg(), { locStart: g, locEnd: c } = rg();
          function f2(P, $, D) {
            let T2 = P.getValue();
            if (!T2)
              return "";
            if (typeof T2 == "string")
              return T2;
            switch (T2.kind) {
              case "Document": {
                let m = [];
                return P.each((C, o, d) => {
                  m.push(D()), o !== d.length - 1 && (m.push(s), p($.originalText, C.getValue(), c) && m.push(s));
                }, "definitions"), [...m, s];
              }
              case "OperationDefinition": {
                let m = $.originalText[g(T2)] !== "{", C = Boolean(T2.name);
                return [m ? T2.operation : "", m && C ? [" ", D("name")] : "", m && !C && y(T2.variableDefinitions) ? " " : "", y(T2.variableDefinitions) ? u(["(", i([n, t8([l("", ", "), n], P.map(D, "variableDefinitions"))]), n, ")"]) : "", F2(P, D, T2), T2.selectionSet ? !m && !C ? "" : " " : "", D("selectionSet")];
              }
              case "FragmentDefinition":
                return ["fragment ", D("name"), y(T2.variableDefinitions) ? u(["(", i([n, t8([l("", ", "), n], P.map(D, "variableDefinitions"))]), n, ")"]) : "", " on ", D("typeCondition"), F2(P, D, T2), " ", D("selectionSet")];
              case "SelectionSet":
                return ["{", i([s, t8(s, _(P, $, D, "selections"))]), s, "}"];
              case "Field":
                return u([T2.alias ? [D("alias"), ": "] : "", D("name"), T2.arguments.length > 0 ? u(["(", i([n, t8([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", F2(P, D, T2), T2.selectionSet ? " " : "", D("selectionSet")]);
              case "Name":
                return T2.value;
              case "StringValue": {
                if (T2.block) {
                  let m = T2.value.replace(/"""/g, "\\$&").split(`
`);
                  return m.length === 1 && (m[0] = m[0].trim()), m.every((C) => C === "") && (m.length = 0), t8(s, ['"""', ...m, '"""']);
                }
                return ['"', T2.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
              }
              case "IntValue":
              case "FloatValue":
              case "EnumValue":
                return T2.value;
              case "BooleanValue":
                return T2.value ? "true" : "false";
              case "NullValue":
                return "null";
              case "Variable":
                return ["$", D("name")];
              case "ListValue":
                return u(["[", i([n, t8([l("", ", "), n], P.map(D, "values"))]), n, "]"]);
              case "ObjectValue":
                return u(["{", $.bracketSpacing && T2.fields.length > 0 ? " " : "", i([n, t8([l("", ", "), n], P.map(D, "fields"))]), n, l("", $.bracketSpacing && T2.fields.length > 0 ? " " : ""), "}"]);
              case "ObjectField":
              case "Argument":
                return [D("name"), ": ", D("value")];
              case "Directive":
                return ["@", D("name"), T2.arguments.length > 0 ? u(["(", i([n, t8([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : ""];
              case "NamedType":
                return D("name");
              case "VariableDefinition":
                return [D("variable"), ": ", D("type"), T2.defaultValue ? [" = ", D("defaultValue")] : "", F2(P, D, T2)];
              case "ObjectTypeExtension":
              case "ObjectTypeDefinition":
                return [D("description"), T2.description ? s : "", T2.kind === "ObjectTypeExtension" ? "extend " : "", "type ", D("name"), T2.interfaces.length > 0 ? [" implements ", ...N2(P, $, D)] : "", F2(P, D, T2), T2.fields.length > 0 ? [" {", i([s, t8(s, _(P, $, D, "fields"))]), s, "}"] : ""];
              case "FieldDefinition":
                return [D("description"), T2.description ? s : "", D("name"), T2.arguments.length > 0 ? u(["(", i([n, t8([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", ": ", D("type"), F2(P, D, T2)];
              case "DirectiveDefinition":
                return [D("description"), T2.description ? s : "", "directive ", "@", D("name"), T2.arguments.length > 0 ? u(["(", i([n, t8([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", T2.repeatable ? " repeatable" : "", " on ", t8(" | ", P.map(D, "locations"))];
              case "EnumTypeExtension":
              case "EnumTypeDefinition":
                return [D("description"), T2.description ? s : "", T2.kind === "EnumTypeExtension" ? "extend " : "", "enum ", D("name"), F2(P, D, T2), T2.values.length > 0 ? [" {", i([s, t8(s, _(P, $, D, "values"))]), s, "}"] : ""];
              case "EnumValueDefinition":
                return [D("description"), T2.description ? s : "", D("name"), F2(P, D, T2)];
              case "InputValueDefinition":
                return [D("description"), T2.description ? T2.description.block ? s : a : "", D("name"), ": ", D("type"), T2.defaultValue ? [" = ", D("defaultValue")] : "", F2(P, D, T2)];
              case "InputObjectTypeExtension":
              case "InputObjectTypeDefinition":
                return [D("description"), T2.description ? s : "", T2.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", D("name"), F2(P, D, T2), T2.fields.length > 0 ? [" {", i([s, t8(s, _(P, $, D, "fields"))]), s, "}"] : ""];
              case "SchemaExtension":
                return ["extend schema", F2(P, D, T2), ...T2.operationTypes.length > 0 ? [" {", i([s, t8(s, _(P, $, D, "operationTypes"))]), s, "}"] : []];
              case "SchemaDefinition":
                return [D("description"), T2.description ? s : "", "schema", F2(P, D, T2), " {", T2.operationTypes.length > 0 ? i([s, t8(s, _(P, $, D, "operationTypes"))]) : "", s, "}"];
              case "OperationTypeDefinition":
                return [D("operation"), ": ", D("type")];
              case "InterfaceTypeExtension":
              case "InterfaceTypeDefinition":
                return [D("description"), T2.description ? s : "", T2.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", D("name"), T2.interfaces.length > 0 ? [" implements ", ...N2(P, $, D)] : "", F2(P, D, T2), T2.fields.length > 0 ? [" {", i([s, t8(s, _(P, $, D, "fields"))]), s, "}"] : ""];
              case "FragmentSpread":
                return ["...", D("name"), F2(P, D, T2)];
              case "InlineFragment":
                return ["...", T2.typeCondition ? [" on ", D("typeCondition")] : "", F2(P, D, T2), " ", D("selectionSet")];
              case "UnionTypeExtension":
              case "UnionTypeDefinition":
                return u([D("description"), T2.description ? s : "", u([T2.kind === "UnionTypeExtension" ? "extend " : "", "union ", D("name"), F2(P, D, T2), T2.types.length > 0 ? [" =", l("", " "), i([l([a, "  "]), t8([a, "| "], P.map(D, "types"))])] : ""])]);
              case "ScalarTypeExtension":
              case "ScalarTypeDefinition":
                return [D("description"), T2.description ? s : "", T2.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", D("name"), F2(P, D, T2)];
              case "NonNullType":
                return [D("type"), "!"];
              case "ListType":
                return ["[", D("type"), "]"];
              default:
                throw new Error("unknown graphql type: " + JSON.stringify(T2.kind));
            }
          }
          function F2(P, $, D) {
            if (D.directives.length === 0)
              return "";
            let T2 = t8(a, P.map($, "directives"));
            return D.kind === "FragmentDefinition" || D.kind === "OperationDefinition" ? u([a, T2]) : [" ", u(i([n, T2]))];
          }
          function _(P, $, D, T2) {
            return P.map((m, C, o) => {
              let d = D();
              return C < o.length - 1 && p($.originalText, m.getValue(), c) ? [d, s] : d;
            }, T2);
          }
          function w(P) {
            return P.kind && P.kind !== "Comment";
          }
          function E2(P) {
            let $ = P.getValue();
            if ($.kind === "Comment")
              return "#" + $.value.trimEnd();
            throw new Error("Not a comment: " + JSON.stringify($));
          }
          function N2(P, $, D) {
            let T2 = P.getNode(), m = [], { interfaces: C } = T2, o = P.map((d) => D(d), "interfaces");
            for (let d = 0; d < C.length; d++) {
              let v2 = C[d];
              m.push(o[d]);
              let S2 = C[d + 1];
              if (S2) {
                let b2 = $.originalText.slice(v2.loc.end, S2.loc.start), B = b2.includes("#"), k2 = b2.replace(/#.*/g, "").trim();
                m.push(k2 === "," ? "," : " &", B ? a : " ");
              }
            }
            return m;
          }
          function x2(P, $) {
            P.kind === "StringValue" && P.block && !P.value.includes(`
`) && ($.value = $.value.trim());
          }
          x2.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
          function I2(P) {
            var $;
            let D = P.getValue();
            return D == null || ($ = D.comments) === null || $ === void 0 ? void 0 : $.some((T2) => T2.value.trim() === "prettier-ignore");
          }
          r.exports = { print: f2, massageAstNode: x2, hasPrettierIgnore: I2, insertPragma: h2, printComment: E2, canAttachComment: w };
        } }), ug = te2({ "src/language-graphql/options.js"(e, r) {
          ne2();
          var t8 = Mt2();
          r.exports = { bracketSpacing: t8.bracketSpacing };
        } }), sg = te2({ "src/language-graphql/parsers.js"() {
          ne2();
        } }), ig = te2({ "node_modules/linguist-languages/data/GraphQL.json"(e, r) {
          r.exports = { name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 };
        } }), ag = te2({ "src/language-graphql/index.js"(e, r) {
          ne2();
          var t8 = _t2(), s = ng(), a = ug(), n = sg(), u = [t8(ig(), () => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }))], i = { graphql: s };
          r.exports = { languages: u, options: a, printers: i, parsers: n };
        } }), Po = te2({ "node_modules/collapse-white-space/index.js"(e, r) {
          ne2(), r.exports = t8;
          function t8(s) {
            return String(s).replace(/\s+/g, " ");
          }
        } }), Io = te2({ "src/language-markdown/loc.js"(e, r) {
          ne2();
          function t8(a) {
            return a.position.start.offset;
          }
          function s(a) {
            return a.position.end.offset;
          }
          r.exports = { locStart: t8, locEnd: s };
        } }), og = te2({ "src/language-markdown/constants.evaluate.js"(e, r) {
          r.exports = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" };
        } }), iu = te2({ "src/language-markdown/utils.js"(e, r) {
          ne2();
          var { getLast: t8 } = Ue2(), { locStart: s, locEnd: a } = Io(), { cjkPattern: n, kPattern: u, punctuationPattern: i } = og(), l = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], p = [...l, "tableCell", "paragraph", "heading"], y = new RegExp(u), h2 = new RegExp(i);
          function g(E2, N2) {
            let x2 = "non-cjk", I2 = "cj-letter", P = "k-letter", $ = "cjk-punctuation", D = [], T2 = (N2.proseWrap === "preserve" ? E2 : E2.replace(new RegExp(`(${n})
(${n})`, "g"), "$1$2")).split(/([\t\n ]+)/);
            for (let [C, o] of T2.entries()) {
              if (C % 2 === 1) {
                D.push({ type: "whitespace", value: /\n/.test(o) ? `
` : " " });
                continue;
              }
              if ((C === 0 || C === T2.length - 1) && o === "")
                continue;
              let d = o.split(new RegExp(`(${n})`));
              for (let [v2, S2] of d.entries())
                if (!((v2 === 0 || v2 === d.length - 1) && S2 === "")) {
                  if (v2 % 2 === 0) {
                    S2 !== "" && m({ type: "word", value: S2, kind: x2, hasLeadingPunctuation: h2.test(S2[0]), hasTrailingPunctuation: h2.test(t8(S2)) });
                    continue;
                  }
                  m(h2.test(S2) ? { type: "word", value: S2, kind: $, hasLeadingPunctuation: true, hasTrailingPunctuation: true } : { type: "word", value: S2, kind: y.test(S2) ? P : I2, hasLeadingPunctuation: false, hasTrailingPunctuation: false });
                }
            }
            return D;
            function m(C) {
              let o = t8(D);
              o && o.type === "word" && (o.kind === x2 && C.kind === I2 && !o.hasTrailingPunctuation || o.kind === I2 && C.kind === x2 && !C.hasLeadingPunctuation ? D.push({ type: "whitespace", value: " " }) : !d(x2, $) && ![o.value, C.value].some((v2) => /\u3000/.test(v2)) && D.push({ type: "whitespace", value: "" })), D.push(C);
              function d(v2, S2) {
                return o.kind === v2 && C.kind === S2 || o.kind === S2 && C.kind === v2;
              }
            }
          }
          function c(E2, N2) {
            let [, x2, I2, P] = N2.slice(E2.position.start.offset, E2.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
            return { numberText: x2, marker: I2, leadingSpaces: P };
          }
          function f2(E2, N2) {
            if (!E2.ordered || E2.children.length < 2)
              return false;
            let x2 = Number(c(E2.children[0], N2.originalText).numberText), I2 = Number(c(E2.children[1], N2.originalText).numberText);
            if (x2 === 0 && E2.children.length > 2) {
              let P = Number(c(E2.children[2], N2.originalText).numberText);
              return I2 === 1 && P === 1;
            }
            return I2 === 1;
          }
          function F2(E2, N2) {
            let { value: x2 } = E2;
            return E2.position.end.offset === N2.length && x2.endsWith(`
`) && N2.endsWith(`
`) ? x2.slice(0, -1) : x2;
          }
          function _(E2, N2) {
            return function x2(I2, P, $) {
              let D = Object.assign({}, N2(I2, P, $));
              return D.children && (D.children = D.children.map((T2, m) => x2(T2, m, [D, ...$]))), D;
            }(E2, null, []);
          }
          function w(E2) {
            if ((E2 == null ? void 0 : E2.type) !== "link" || E2.children.length !== 1)
              return false;
            let [N2] = E2.children;
            return s(E2) === s(N2) && a(E2) === a(N2);
          }
          r.exports = { mapAst: _, splitText: g, punctuationPattern: i, getFencedCodeBlockValue: F2, getOrderedListItemInfo: c, hasGitDiffFriendlyOrderedList: f2, INLINE_NODE_TYPES: l, INLINE_NODE_WRAPPER_TYPES: p, isAutolink: w };
        } }), lg = te2({ "src/language-markdown/embed.js"(e, r) {
          ne2();
          var { inferParserByLanguage: t8, getMaxContinuousCount: s } = Ue2(), { builders: { hardline: a, markAsRoot: n }, utils: { replaceEndOfLine: u } } = qe2(), i = su(), { getFencedCodeBlockValue: l } = iu();
          function p(y, h2, g, c) {
            let f2 = y.getValue();
            if (f2.type === "code" && f2.lang !== null) {
              let F2 = t8(f2.lang, c);
              if (F2) {
                let _ = c.__inJsTemplate ? "~" : "`", w = _.repeat(Math.max(3, s(f2.value, _) + 1)), E2 = { parser: F2 };
                f2.lang === "tsx" && (E2.filepath = "dummy.tsx");
                let N2 = g(l(f2, c.originalText), E2, { stripTrailingHardline: true });
                return n([w, f2.lang, f2.meta ? " " + f2.meta : "", a, u(N2), a, w]);
              }
            }
            switch (f2.type) {
              case "front-matter":
                return i(f2, g);
              case "importExport":
                return [g(f2.value, { parser: "babel" }, { stripTrailingHardline: true }), a];
              case "jsx":
                return g(`<$>${f2.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: true });
            }
            return null;
          }
          r.exports = p;
        } }), ko = te2({ "src/language-markdown/pragma.js"(e, r) {
          ne2();
          var t8 = _o2(), s = ["format", "prettier"];
          function a(n) {
            let u = `@(${s.join("|")})`, i = new RegExp([`<!--\\s*${u}\\s*-->`, `{\\s*\\/\\*\\s*${u}\\s*\\*\\/\\s*}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${u}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "m"), l = n.match(i);
            return (l == null ? void 0 : l.index) === 0;
          }
          r.exports = { startWithPragma: a, hasPragma: (n) => a(t8(n).content.trimStart()), insertPragma: (n) => {
            let u = t8(n), i = `<!-- @${s[0]} -->`;
            return u.frontMatter ? `${u.frontMatter.raw}

${i}

${u.content}` : `${i}

${u.content}`;
          } };
        } }), cg = te2({ "src/language-markdown/print-preprocess.js"(e, r) {
          ne2();
          var t8 = lt(), { getOrderedListItemInfo: s, mapAst: a, splitText: n } = iu(), u = /^.$/su;
          function i(w, E2) {
            return w = y(w, E2), w = c(w), w = p(w, E2), w = F2(w, E2), w = _(w, E2), w = f2(w, E2), w = l(w), w = h2(w), w;
          }
          function l(w) {
            return a(w, (E2) => E2.type !== "import" && E2.type !== "export" ? E2 : Object.assign(Object.assign({}, E2), {}, { type: "importExport" }));
          }
          function p(w, E2) {
            return a(w, (N2) => N2.type !== "inlineCode" || E2.proseWrap === "preserve" ? N2 : Object.assign(Object.assign({}, N2), {}, { value: N2.value.replace(/\s+/g, " ") }));
          }
          function y(w, E2) {
            return a(w, (N2) => N2.type !== "text" || N2.value === "*" || N2.value === "_" || !u.test(N2.value) || N2.position.end.offset - N2.position.start.offset === N2.value.length ? N2 : Object.assign(Object.assign({}, N2), {}, { value: E2.originalText.slice(N2.position.start.offset, N2.position.end.offset) }));
          }
          function h2(w) {
            return g(w, (E2, N2) => E2.type === "importExport" && N2.type === "importExport", (E2, N2) => ({ type: "importExport", value: E2.value + `

` + N2.value, position: { start: E2.position.start, end: N2.position.end } }));
          }
          function g(w, E2, N2) {
            return a(w, (x2) => {
              if (!x2.children)
                return x2;
              let I2 = x2.children.reduce((P, $) => {
                let D = t8(P);
                return D && E2(D, $) ? P.splice(-1, 1, N2(D, $)) : P.push($), P;
              }, []);
              return Object.assign(Object.assign({}, x2), {}, { children: I2 });
            });
          }
          function c(w) {
            return g(w, (E2, N2) => E2.type === "text" && N2.type === "text", (E2, N2) => ({ type: "text", value: E2.value + N2.value, position: { start: E2.position.start, end: N2.position.end } }));
          }
          function f2(w, E2) {
            return a(w, (N2, x2, I2) => {
              let [P] = I2;
              if (N2.type !== "text")
                return N2;
              let { value: $ } = N2;
              return P.type === "paragraph" && (x2 === 0 && ($ = $.trimStart()), x2 === P.children.length - 1 && ($ = $.trimEnd())), { type: "sentence", position: N2.position, children: n($, E2) };
            });
          }
          function F2(w, E2) {
            return a(w, (N2, x2, I2) => {
              if (N2.type === "code") {
                let P = /^\n?(?: {4,}|\t)/.test(E2.originalText.slice(N2.position.start.offset, N2.position.end.offset));
                if (N2.isIndented = P, P)
                  for (let $ = 0; $ < I2.length; $++) {
                    let D = I2[$];
                    if (D.hasIndentedCodeblock)
                      break;
                    D.type === "list" && (D.hasIndentedCodeblock = true);
                  }
              }
              return N2;
            });
          }
          function _(w, E2) {
            return a(w, (I2, P, $) => {
              if (I2.type === "list" && I2.children.length > 0) {
                for (let D = 0; D < $.length; D++) {
                  let T2 = $[D];
                  if (T2.type === "list" && !T2.isAligned)
                    return I2.isAligned = false, I2;
                }
                I2.isAligned = x2(I2);
              }
              return I2;
            });
            function N2(I2) {
              return I2.children.length === 0 ? -1 : I2.children[0].position.start.column - 1;
            }
            function x2(I2) {
              if (!I2.ordered)
                return true;
              let [P, $] = I2.children;
              if (s(P, E2.originalText).leadingSpaces.length > 1)
                return true;
              let T2 = N2(P);
              if (T2 === -1)
                return false;
              if (I2.children.length === 1)
                return T2 % E2.tabWidth === 0;
              let m = N2($);
              return T2 !== m ? false : T2 % E2.tabWidth === 0 ? true : s($, E2.originalText).leadingSpaces.length > 1;
            }
          }
          r.exports = i;
        } }), pg = te2({ "src/language-markdown/clean.js"(e, r) {
          ne2();
          var t8 = Po(), { isFrontMatterNode: s } = Ue2(), { startWithPragma: a } = ko(), n = /* @__PURE__ */ new Set(["position", "raw"]);
          function u(i, l, p) {
            if ((i.type === "front-matter" || i.type === "code" || i.type === "yaml" || i.type === "import" || i.type === "export" || i.type === "jsx") && delete l.value, i.type === "list" && delete l.isAligned, (i.type === "list" || i.type === "listItem") && (delete l.spread, delete l.loose), i.type === "text" || (i.type === "inlineCode" && (l.value = i.value.replace(/[\t\n ]+/g, " ")), i.type === "wikiLink" && (l.value = i.value.trim().replace(/[\t\n]+/g, " ")), (i.type === "definition" || i.type === "linkReference" || i.type === "imageReference") && (l.label = t8(i.label)), (i.type === "definition" || i.type === "link" || i.type === "image") && i.title && (l.title = i.title.replace(/\\(["')])/g, "$1")), p && p.type === "root" && p.children.length > 0 && (p.children[0] === i || s(p.children[0]) && p.children[1] === i) && i.type === "html" && a(i.value)))
              return null;
          }
          u.ignoredProperties = n, r.exports = u;
        } }), fg = te2({ "src/language-markdown/printer-markdown.js"(e, r) {
          ne2();
          var t8 = Po(), { getLast: s, getMinNotPresentContinuousCount: a, getMaxContinuousCount: n, getStringWidth: u, isNonEmptyArray: i } = Ue2(), { builders: { breakParent: l, join: p, line: y, literalline: h2, markAsRoot: g, hardline: c, softline: f2, ifBreak: F2, fill: _, align: w, indent: E2, group: N2, hardlineWithoutBreakParent: x2 }, utils: { normalizeDoc: I2, replaceTextEndOfLine: P }, printer: { printDocToString: $ } } = qe2(), D = lg(), { insertPragma: T2 } = ko(), { locStart: m, locEnd: C } = Io(), o = cg(), d = pg(), { getFencedCodeBlockValue: v2, hasGitDiffFriendlyOrderedList: S2, splitText: b2, punctuationPattern: B, INLINE_NODE_TYPES: k2, INLINE_NODE_WRAPPER_TYPES: M, isAutolink: R2 } = iu(), q = /* @__PURE__ */ new Set(["importExport"]), J2 = ["heading", "tableCell", "link", "wikiLink"], L2 = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
          function Q2(oe2, H2, pe2) {
            let X2 = oe2.getValue();
            if (ge2(oe2))
              return b2(H2.originalText.slice(X2.position.start.offset, X2.position.end.offset), H2).map((le2) => le2.type === "word" ? le2.value : le2.value === "" ? "" : W2(oe2, le2.value, H2));
            switch (X2.type) {
              case "front-matter":
                return H2.originalText.slice(X2.position.start.offset, X2.position.end.offset);
              case "root":
                return X2.children.length === 0 ? "" : [I2(de2(oe2, H2, pe2)), q.has(z2(X2).type) ? "" : c];
              case "paragraph":
                return ue2(oe2, H2, pe2, { postprocessor: _ });
              case "sentence":
                return ue2(oe2, H2, pe2);
              case "word": {
                let le2 = X2.value.replace(/\*/g, "\\$&").replace(new RegExp([`(^|${B})(_+)`, `(_+)(${B}|$)`].join("|"), "g"), (De2, A2, G2, re2, ye) => (G2 ? `${A2}${G2}` : `${re2}${ye}`).replace(/_/g, "\\_")), Ae2 = (De2, A2, G2) => De2.type === "sentence" && G2 === 0, Ee2 = (De2, A2, G2) => R2(De2.children[G2 - 1]);
                return le2 !== X2.value && (oe2.match(void 0, Ae2, Ee2) || oe2.match(void 0, Ae2, (De2, A2, G2) => De2.type === "emphasis" && G2 === 0, Ee2)) && (le2 = le2.replace(/^(\\?[*_])+/, (De2) => De2.replace(/\\/g, ""))), le2;
              }
              case "whitespace": {
                let le2 = oe2.getParentNode(), Ae2 = le2.children.indexOf(X2), Ee2 = le2.children[Ae2 + 1], De2 = Ee2 && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(Ee2.value) ? "never" : H2.proseWrap;
                return W2(oe2, X2.value, { proseWrap: De2 });
              }
              case "emphasis": {
                let le2;
                if (R2(X2.children[0]))
                  le2 = H2.originalText[X2.position.start.offset];
                else {
                  let Ae2 = oe2.getParentNode(), Ee2 = Ae2.children.indexOf(X2), De2 = Ae2.children[Ee2 - 1], A2 = Ae2.children[Ee2 + 1];
                  le2 = De2 && De2.type === "sentence" && De2.children.length > 0 && s(De2.children).type === "word" && !s(De2.children).hasTrailingPunctuation || A2 && A2.type === "sentence" && A2.children.length > 0 && A2.children[0].type === "word" && !A2.children[0].hasLeadingPunctuation || ce2(oe2, "emphasis") ? "*" : "_";
                }
                return [le2, ue2(oe2, H2, pe2), le2];
              }
              case "strong":
                return ["**", ue2(oe2, H2, pe2), "**"];
              case "delete":
                return ["~~", ue2(oe2, H2, pe2), "~~"];
              case "inlineCode": {
                let le2 = a(X2.value, "`"), Ae2 = "`".repeat(le2 || 1), Ee2 = le2 && !/^\s/.test(X2.value) ? " " : "";
                return [Ae2, Ee2, X2.value, Ee2, Ae2];
              }
              case "wikiLink": {
                let le2 = "";
                return H2.proseWrap === "preserve" ? le2 = X2.value : le2 = X2.value.replace(/[\t\n]+/g, " "), ["[[", le2, "]]"];
              }
              case "link":
                switch (H2.originalText[X2.position.start.offset]) {
                  case "<": {
                    let le2 = "mailto:";
                    return ["<", X2.url.startsWith(le2) && H2.originalText.slice(X2.position.start.offset + 1, X2.position.start.offset + 1 + le2.length) !== le2 ? X2.url.slice(le2.length) : X2.url, ">"];
                  }
                  case "[":
                    return ["[", ue2(oe2, H2, pe2), "](", he2(X2.url, ")"), we2(X2.title, H2), ")"];
                  default:
                    return H2.originalText.slice(X2.position.start.offset, X2.position.end.offset);
                }
              case "image":
                return ["![", X2.alt || "", "](", he2(X2.url, ")"), we2(X2.title, H2), ")"];
              case "blockquote":
                return ["> ", w("> ", ue2(oe2, H2, pe2))];
              case "heading":
                return ["#".repeat(X2.depth) + " ", ue2(oe2, H2, pe2)];
              case "code": {
                if (X2.isIndented) {
                  let Ee2 = " ".repeat(4);
                  return w(Ee2, [Ee2, ...P(X2.value, c)]);
                }
                let le2 = H2.__inJsTemplate ? "~" : "`", Ae2 = le2.repeat(Math.max(3, n(X2.value, le2) + 1));
                return [Ae2, X2.lang || "", X2.meta ? " " + X2.meta : "", c, ...P(v2(X2, H2.originalText), c), c, Ae2];
              }
              case "html": {
                let le2 = oe2.getParentNode(), Ae2 = le2.type === "root" && s(le2.children) === X2 ? X2.value.trimEnd() : X2.value, Ee2 = /^<!--.*-->$/s.test(Ae2);
                return P(Ae2, Ee2 ? c : g(h2));
              }
              case "list": {
                let le2 = Y2(X2, oe2.getParentNode()), Ae2 = S2(X2, H2);
                return ue2(oe2, H2, pe2, { processor: (Ee2, De2) => {
                  let A2 = re2(), G2 = Ee2.getValue();
                  if (G2.children.length === 2 && G2.children[1].type === "html" && G2.children[0].position.start.column !== G2.children[1].position.start.column)
                    return [A2, V2(Ee2, H2, pe2, A2)];
                  return [A2, w(" ".repeat(A2.length), V2(Ee2, H2, pe2, A2))];
                  function re2() {
                    let ye = X2.ordered ? (De2 === 0 ? X2.start : Ae2 ? 1 : X2.start + De2) + (le2 % 2 === 0 ? ". " : ") ") : le2 % 2 === 0 ? "- " : "* ";
                    return X2.isAligned || X2.hasIndentedCodeblock ? j2(ye, H2) : ye;
                  }
                } });
              }
              case "thematicBreak": {
                let le2 = ee2(oe2, "list");
                return le2 === -1 ? "---" : Y2(oe2.getParentNode(le2), oe2.getParentNode(le2 + 1)) % 2 === 0 ? "***" : "---";
              }
              case "linkReference":
                return ["[", ue2(oe2, H2, pe2), "]", X2.referenceType === "full" ? Ne2(X2) : X2.referenceType === "collapsed" ? "[]" : ""];
              case "imageReference":
                switch (X2.referenceType) {
                  case "full":
                    return ["![", X2.alt || "", "]", Ne2(X2)];
                  default:
                    return ["![", X2.alt, "]", X2.referenceType === "collapsed" ? "[]" : ""];
                }
              case "definition": {
                let le2 = H2.proseWrap === "always" ? y : " ";
                return N2([Ne2(X2), ":", E2([le2, he2(X2.url), X2.title === null ? "" : [le2, we2(X2.title, H2, false)]])]);
              }
              case "footnote":
                return ["[^", ue2(oe2, H2, pe2), "]"];
              case "footnoteReference":
                return Pe2(X2);
              case "footnoteDefinition": {
                let le2 = oe2.getParentNode().children[oe2.getName() + 1], Ae2 = X2.children.length === 1 && X2.children[0].type === "paragraph" && (H2.proseWrap === "never" || H2.proseWrap === "preserve" && X2.children[0].position.start.line === X2.children[0].position.end.line);
                return [Pe2(X2), ": ", Ae2 ? ue2(oe2, H2, pe2) : N2([w(" ".repeat(4), ue2(oe2, H2, pe2, { processor: (Ee2, De2) => De2 === 0 ? N2([f2, pe2()]) : pe2() })), le2 && le2.type === "footnoteDefinition" ? f2 : ""])];
              }
              case "table":
                return K2(oe2, H2, pe2);
              case "tableCell":
                return ue2(oe2, H2, pe2);
              case "break":
                return /\s/.test(H2.originalText[X2.position.start.offset]) ? ["  ", g(h2)] : ["\\", c];
              case "liquidNode":
                return P(X2.value, c);
              case "importExport":
                return [X2.value, c];
              case "esComment":
                return ["{/* ", X2.value, " */}"];
              case "jsx":
                return X2.value;
              case "math":
                return ["$$", c, X2.value ? [...P(X2.value, c), c] : "", "$$"];
              case "inlineMath":
                return H2.originalText.slice(m(X2), C(X2));
              case "tableRow":
              case "listItem":
              default:
                throw new Error(`Unknown markdown type ${JSON.stringify(X2.type)}`);
            }
          }
          function V2(oe2, H2, pe2, X2) {
            let le2 = oe2.getValue(), Ae2 = le2.checked === null ? "" : le2.checked ? "[x] " : "[ ] ";
            return [Ae2, ue2(oe2, H2, pe2, { processor: (Ee2, De2) => {
              if (De2 === 0 && Ee2.getValue().type !== "list")
                return w(" ".repeat(Ae2.length), pe2());
              let A2 = " ".repeat(ke2(H2.tabWidth - X2.length, 0, 3));
              return [A2, w(A2, pe2())];
            } })];
          }
          function j2(oe2, H2) {
            let pe2 = X2();
            return oe2 + " ".repeat(pe2 >= 4 ? 0 : pe2);
            function X2() {
              let le2 = oe2.length % H2.tabWidth;
              return le2 === 0 ? 0 : H2.tabWidth - le2;
            }
          }
          function Y2(oe2, H2) {
            return ie2(oe2, H2, (pe2) => pe2.ordered === oe2.ordered);
          }
          function ie2(oe2, H2, pe2) {
            let X2 = -1;
            for (let le2 of H2.children)
              if (le2.type === oe2.type && pe2(le2) ? X2++ : X2 = -1, le2 === oe2)
                return X2;
          }
          function ee2(oe2, H2) {
            let pe2 = Array.isArray(H2) ? H2 : [H2], X2 = -1, le2;
            for (; le2 = oe2.getParentNode(++X2); )
              if (pe2.includes(le2.type))
                return X2;
            return -1;
          }
          function ce2(oe2, H2) {
            let pe2 = ee2(oe2, H2);
            return pe2 === -1 ? null : oe2.getParentNode(pe2);
          }
          function W2(oe2, H2, pe2) {
            if (pe2.proseWrap === "preserve" && H2 === `
`)
              return c;
            let X2 = pe2.proseWrap === "always" && !ce2(oe2, J2);
            return H2 !== "" ? X2 ? y : " " : X2 ? f2 : "";
          }
          function K2(oe2, H2, pe2) {
            let X2 = oe2.getValue(), le2 = [], Ae2 = oe2.map((ye) => ye.map((Ce2, Be2) => {
              let ve2 = $(pe2(), H2).formatted, ze = u(ve2);
              return le2[Be2] = Math.max(le2[Be2] || 3, ze), { text: ve2, width: ze };
            }, "children"), "children"), Ee2 = A2(false);
            if (H2.proseWrap !== "never")
              return [l, Ee2];
            let De2 = A2(true);
            return [l, N2(F2(De2, Ee2))];
            function A2(ye) {
              let Ce2 = [re2(Ae2[0], ye), G2(ye)];
              return Ae2.length > 1 && Ce2.push(p(x2, Ae2.slice(1).map((Be2) => re2(Be2, ye)))), p(x2, Ce2);
            }
            function G2(ye) {
              return `| ${le2.map((Be2, ve2) => {
                let ze = X2.align[ve2], be2 = ze === "center" || ze === "left" ? ":" : "-", Ye2 = ze === "center" || ze === "right" ? ":" : "-", Se2 = ye ? "-" : "-".repeat(Be2 - 2);
                return `${be2}${Se2}${Ye2}`;
              }).join(" | ")} |`;
            }
            function re2(ye, Ce2) {
              return `| ${ye.map((ve2, ze) => {
                let { text: be2, width: Ye2 } = ve2;
                if (Ce2)
                  return be2;
                let Se2 = le2[ze] - Ye2, Ie = X2.align[ze], Oe2 = 0;
                Ie === "right" ? Oe2 = Se2 : Ie === "center" && (Oe2 = Math.floor(Se2 / 2));
                let Je2 = Se2 - Oe2;
                return `${" ".repeat(Oe2)}${be2}${" ".repeat(Je2)}`;
              }).join(" | ")} |`;
            }
          }
          function de2(oe2, H2, pe2) {
            let X2 = [], le2 = null, { children: Ae2 } = oe2.getValue();
            for (let [Ee2, De2] of Ae2.entries())
              switch (U2(De2)) {
                case "start":
                  le2 === null && (le2 = { index: Ee2, offset: De2.position.end.offset });
                  break;
                case "end":
                  le2 !== null && (X2.push({ start: le2, end: { index: Ee2, offset: De2.position.start.offset } }), le2 = null);
                  break;
              }
            return ue2(oe2, H2, pe2, { processor: (Ee2, De2) => {
              if (X2.length > 0) {
                let A2 = X2[0];
                if (De2 === A2.start.index)
                  return [Fe2(Ae2[A2.start.index]), H2.originalText.slice(A2.start.offset, A2.end.offset), Fe2(Ae2[A2.end.index])];
                if (A2.start.index < De2 && De2 < A2.end.index)
                  return false;
                if (De2 === A2.end.index)
                  return X2.shift(), false;
              }
              return pe2();
            } });
          }
          function ue2(oe2, H2, pe2) {
            let X2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { postprocessor: le2 } = X2, Ae2 = X2.processor || (() => pe2()), Ee2 = oe2.getValue(), De2 = [], A2;
            return oe2.each((G2, re2) => {
              let ye = G2.getValue(), Ce2 = Ae2(G2, re2);
              if (Ce2 !== false) {
                let Be2 = { parts: De2, prevNode: A2, parentNode: Ee2, options: H2 };
                Z(ye, Be2) && (De2.push(c), A2 && q.has(A2.type) || (se2(ye, Be2) || fe2(ye, Be2)) && De2.push(c), fe2(ye, Be2) && De2.push(c)), De2.push(Ce2), A2 = ye;
              }
            }, "children"), le2 ? le2(De2) : De2;
          }
          function Fe2(oe2) {
            if (oe2.type === "html")
              return oe2.value;
            if (oe2.type === "paragraph" && Array.isArray(oe2.children) && oe2.children.length === 1 && oe2.children[0].type === "esComment")
              return ["{/* ", oe2.children[0].value, " */}"];
          }
          function z2(oe2) {
            let H2 = oe2;
            for (; i(H2.children); )
              H2 = s(H2.children);
            return H2;
          }
          function U2(oe2) {
            let H2;
            if (oe2.type === "html")
              H2 = oe2.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
            else {
              let pe2;
              oe2.type === "esComment" ? pe2 = oe2 : oe2.type === "paragraph" && oe2.children.length === 1 && oe2.children[0].type === "esComment" && (pe2 = oe2.children[0]), pe2 && (H2 = pe2.value.match(/^prettier-ignore(?:-(start|end))?$/));
            }
            return H2 ? H2[1] || "next" : false;
          }
          function Z(oe2, H2) {
            let pe2 = H2.parts.length === 0, X2 = k2.includes(oe2.type), le2 = oe2.type === "html" && M.includes(H2.parentNode.type);
            return !pe2 && !X2 && !le2;
          }
          function se2(oe2, H2) {
            var pe2, X2, le2;
            let Ee2 = (H2.prevNode && H2.prevNode.type) === oe2.type && L2.has(oe2.type), De2 = H2.parentNode.type === "listItem" && !H2.parentNode.loose, A2 = ((pe2 = H2.prevNode) === null || pe2 === void 0 ? void 0 : pe2.type) === "listItem" && H2.prevNode.loose, G2 = U2(H2.prevNode) === "next", re2 = oe2.type === "html" && ((X2 = H2.prevNode) === null || X2 === void 0 ? void 0 : X2.type) === "html" && H2.prevNode.position.end.line + 1 === oe2.position.start.line, ye = oe2.type === "html" && H2.parentNode.type === "listItem" && ((le2 = H2.prevNode) === null || le2 === void 0 ? void 0 : le2.type) === "paragraph" && H2.prevNode.position.end.line + 1 === oe2.position.start.line;
            return A2 || !(Ee2 || De2 || G2 || re2 || ye);
          }
          function fe2(oe2, H2) {
            let pe2 = H2.prevNode && H2.prevNode.type === "list", X2 = oe2.type === "code" && oe2.isIndented;
            return pe2 && X2;
          }
          function ge2(oe2) {
            let H2 = ce2(oe2, ["linkReference", "imageReference"]);
            return H2 && (H2.type !== "linkReference" || H2.referenceType !== "full");
          }
          function he2(oe2) {
            let H2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], pe2 = [" ", ...Array.isArray(H2) ? H2 : [H2]];
            return new RegExp(pe2.map((X2) => `\\${X2}`).join("|")).test(oe2) ? `<${oe2}>` : oe2;
          }
          function we2(oe2, H2) {
            let pe2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
            if (!oe2)
              return "";
            if (pe2)
              return " " + we2(oe2, H2, false);
            if (oe2 = oe2.replace(/\\(["')])/g, "$1"), oe2.includes('"') && oe2.includes("'") && !oe2.includes(")"))
              return `(${oe2})`;
            let X2 = oe2.split("'").length - 1, le2 = oe2.split('"').length - 1, Ae2 = X2 > le2 ? '"' : le2 > X2 || H2.singleQuote ? "'" : '"';
            return oe2 = oe2.replace(/\\/, "\\\\"), oe2 = oe2.replace(new RegExp(`(${Ae2})`, "g"), "\\$1"), `${Ae2}${oe2}${Ae2}`;
          }
          function ke2(oe2, H2, pe2) {
            return oe2 < H2 ? H2 : oe2 > pe2 ? pe2 : oe2;
          }
          function Re2(oe2) {
            let H2 = Number(oe2.getName());
            if (H2 === 0)
              return false;
            let pe2 = oe2.getParentNode().children[H2 - 1];
            return U2(pe2) === "next";
          }
          function Ne2(oe2) {
            return `[${t8(oe2.label)}]`;
          }
          function Pe2(oe2) {
            return `[^${oe2.label}]`;
          }
          r.exports = { preprocess: o, print: Q2, embed: D, massageAstNode: d, hasPrettierIgnore: Re2, insertPragma: T2 };
        } }), Dg = te2({ "src/language-markdown/options.js"(e, r) {
          ne2();
          var t8 = Mt2();
          r.exports = { proseWrap: t8.proseWrap, singleQuote: t8.singleQuote };
        } }), mg = te2({ "src/language-markdown/parsers.js"() {
          ne2();
        } }), _a2 = te2({ "node_modules/linguist-languages/data/Markdown.json"(e, r) {
          r.exports = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 };
        } }), dg = te2({ "src/language-markdown/index.js"(e, r) {
          ne2();
          var t8 = _t2(), s = fg(), a = Dg(), n = mg(), u = [t8(_a2(), (l) => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...l.filenames, "README"], extensions: l.extensions.filter((p) => p !== ".mdx") })), t8(_a2(), () => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }))], i = { mdast: s };
          r.exports = { languages: u, options: a, printers: i, parsers: n };
        } }), gg = te2({ "src/language-html/clean.js"(e, r) {
          ne2();
          var { isFrontMatterNode: t8 } = Ue2(), s = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
          function a(n, u) {
            if (n.type === "text" || n.type === "comment" || t8(n) || n.type === "yaml" || n.type === "toml")
              return null;
            n.type === "attribute" && delete u.value, n.type === "docType" && delete u.value;
          }
          a.ignoredProperties = s, r.exports = a;
        } }), yg = te2({ "src/language-html/constants.evaluate.js"(e, r) {
          r.exports = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" };
        } }), hg = te2({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
          ne2();
          function t8(s) {
            return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace);
          }
          r.exports = t8;
        } }), Rt2 = te2({ "src/language-html/utils/index.js"(e, r) {
          ne2();
          var { inferParserByLanguage: t8, isFrontMatterNode: s } = Ue2(), { builders: { line: a, hardline: n, join: u }, utils: { getDocParts: i, replaceTextEndOfLine: l } } = qe2(), { CSS_DISPLAY_TAGS: p, CSS_DISPLAY_DEFAULT: y, CSS_WHITE_SPACE_TAGS: h2, CSS_WHITE_SPACE_DEFAULT: g } = yg(), c = hg(), f2 = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), F2 = (A2) => A2.replace(/^[\t\n\f\r ]+/, ""), _ = (A2) => A2.replace(/[\t\n\f\r ]+$/, ""), w = (A2) => F2(_(A2)), E2 = (A2) => A2.replace(/^[\t\f\r ]*\n/g, ""), N2 = (A2) => E2(_(A2)), x2 = (A2) => A2.split(/[\t\n\f\r ]+/), I2 = (A2) => A2.match(/^[\t\n\f\r ]*/)[0], P = (A2) => {
            let [, G2, re2, ye] = A2.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
            return { leadingWhitespace: G2, trailingWhitespace: ye, text: re2 };
          }, $ = (A2) => /[\t\n\f\r ]/.test(A2);
          function D(A2, G2) {
            return !!(A2.type === "ieConditionalComment" && A2.lastChild && !A2.lastChild.isSelfClosing && !A2.lastChild.endSourceSpan || A2.type === "ieConditionalComment" && !A2.complete || se2(A2) && A2.children.some((re2) => re2.type !== "text" && re2.type !== "interpolation") || X2(A2, G2) && !o(A2) && A2.type !== "interpolation");
          }
          function T2(A2) {
            return A2.type === "attribute" || !A2.parent || !A2.prev ? false : m(A2.prev);
          }
          function m(A2) {
            return A2.type === "comment" && A2.value.trim() === "prettier-ignore";
          }
          function C(A2) {
            return A2.type === "text" || A2.type === "comment";
          }
          function o(A2) {
            return A2.type === "element" && (A2.fullName === "script" || A2.fullName === "style" || A2.fullName === "svg:style" || c(A2) && (A2.name === "script" || A2.name === "style"));
          }
          function d(A2) {
            return A2.children && !o(A2);
          }
          function v2(A2) {
            return o(A2) || A2.type === "interpolation" || S2(A2);
          }
          function S2(A2) {
            return we2(A2).startsWith("pre");
          }
          function b2(A2, G2) {
            let re2 = ye();
            if (re2 && !A2.prev && A2.parent && A2.parent.tagDefinition && A2.parent.tagDefinition.ignoreFirstLf)
              return A2.type === "interpolation";
            return re2;
            function ye() {
              return s(A2) ? false : (A2.type === "text" || A2.type === "interpolation") && A2.prev && (A2.prev.type === "text" || A2.prev.type === "interpolation") ? true : !A2.parent || A2.parent.cssDisplay === "none" ? false : se2(A2.parent) ? true : !(!A2.prev && (A2.parent.type === "root" || se2(A2) && A2.parent || o(A2.parent) || H2(A2.parent, G2) || !ue2(A2.parent.cssDisplay)) || A2.prev && !U2(A2.prev.cssDisplay));
            }
          }
          function B(A2, G2) {
            return s(A2) ? false : (A2.type === "text" || A2.type === "interpolation") && A2.next && (A2.next.type === "text" || A2.next.type === "interpolation") ? true : !A2.parent || A2.parent.cssDisplay === "none" ? false : se2(A2.parent) ? true : !(!A2.next && (A2.parent.type === "root" || se2(A2) && A2.parent || o(A2.parent) || H2(A2.parent, G2) || !Fe2(A2.parent.cssDisplay)) || A2.next && !z2(A2.next.cssDisplay));
          }
          function k2(A2) {
            return Z(A2.cssDisplay) && !o(A2);
          }
          function M(A2) {
            return s(A2) || A2.next && A2.sourceSpan.end && A2.sourceSpan.end.line + 1 < A2.next.sourceSpan.start.line;
          }
          function R2(A2) {
            return q(A2) || A2.type === "element" && A2.children.length > 0 && (["body", "script", "style"].includes(A2.name) || A2.children.some((G2) => ee2(G2))) || A2.firstChild && A2.firstChild === A2.lastChild && A2.firstChild.type !== "text" && V2(A2.firstChild) && (!A2.lastChild.isTrailingSpaceSensitive || j2(A2.lastChild));
          }
          function q(A2) {
            return A2.type === "element" && A2.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(A2.name) || A2.cssDisplay.startsWith("table") && A2.cssDisplay !== "table-cell");
          }
          function J2(A2) {
            return Y2(A2) || A2.prev && L2(A2.prev) || Q2(A2);
          }
          function L2(A2) {
            return Y2(A2) || A2.type === "element" && A2.fullName === "br" || Q2(A2);
          }
          function Q2(A2) {
            return V2(A2) && j2(A2);
          }
          function V2(A2) {
            return A2.hasLeadingSpaces && (A2.prev ? A2.prev.sourceSpan.end.line < A2.sourceSpan.start.line : A2.parent.type === "root" || A2.parent.startSourceSpan.end.line < A2.sourceSpan.start.line);
          }
          function j2(A2) {
            return A2.hasTrailingSpaces && (A2.next ? A2.next.sourceSpan.start.line > A2.sourceSpan.end.line : A2.parent.type === "root" || A2.parent.endSourceSpan && A2.parent.endSourceSpan.start.line > A2.sourceSpan.end.line);
          }
          function Y2(A2) {
            switch (A2.type) {
              case "ieConditionalComment":
              case "comment":
              case "directive":
                return true;
              case "element":
                return ["script", "select"].includes(A2.name);
            }
            return false;
          }
          function ie2(A2) {
            return A2.lastChild ? ie2(A2.lastChild) : A2;
          }
          function ee2(A2) {
            return A2.children && A2.children.some((G2) => G2.type !== "text");
          }
          function ce2(A2) {
            let { type: G2, lang: re2 } = A2.attrMap;
            if (G2 === "module" || G2 === "text/javascript" || G2 === "text/babel" || G2 === "application/javascript" || re2 === "jsx")
              return "babel";
            if (G2 === "application/x-typescript" || re2 === "ts" || re2 === "tsx")
              return "typescript";
            if (G2 === "text/markdown")
              return "markdown";
            if (G2 === "text/html")
              return "html";
            if (G2 && (G2.endsWith("json") || G2.endsWith("importmap")) || G2 === "speculationrules")
              return "json";
            if (G2 === "text/x-handlebars-template")
              return "glimmer";
          }
          function W2(A2, G2) {
            let { lang: re2 } = A2.attrMap;
            if (!re2 || re2 === "postcss" || re2 === "css")
              return "css";
            if (re2 === "scss")
              return "scss";
            if (re2 === "less")
              return "less";
            if (re2 === "stylus")
              return t8("stylus", G2);
          }
          function K2(A2, G2) {
            if (A2.name === "script" && !A2.attrMap.src)
              return !A2.attrMap.lang && !A2.attrMap.type ? "babel" : ce2(A2);
            if (A2.name === "style")
              return W2(A2, G2);
            if (G2 && X2(A2, G2))
              return ce2(A2) || !("src" in A2.attrMap) && t8(A2.attrMap.lang, G2);
          }
          function de2(A2) {
            return A2 === "block" || A2 === "list-item" || A2.startsWith("table");
          }
          function ue2(A2) {
            return !de2(A2) && A2 !== "inline-block";
          }
          function Fe2(A2) {
            return !de2(A2) && A2 !== "inline-block";
          }
          function z2(A2) {
            return !de2(A2);
          }
          function U2(A2) {
            return !de2(A2);
          }
          function Z(A2) {
            return !de2(A2) && A2 !== "inline-block";
          }
          function se2(A2) {
            return we2(A2).startsWith("pre");
          }
          function fe2(A2, G2) {
            let re2 = 0;
            for (let ye = A2.stack.length - 1; ye >= 0; ye--) {
              let Ce2 = A2.stack[ye];
              Ce2 && typeof Ce2 == "object" && !Array.isArray(Ce2) && G2(Ce2) && re2++;
            }
            return re2;
          }
          function ge2(A2, G2) {
            let re2 = A2;
            for (; re2; ) {
              if (G2(re2))
                return true;
              re2 = re2.parent;
            }
            return false;
          }
          function he2(A2, G2) {
            if (A2.prev && A2.prev.type === "comment") {
              let ye = A2.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
              if (ye)
                return ye[1];
            }
            let re2 = false;
            if (A2.type === "element" && A2.namespace === "svg")
              if (ge2(A2, (ye) => ye.fullName === "svg:foreignObject"))
                re2 = true;
              else
                return A2.name === "svg" ? "inline-block" : "block";
            switch (G2.htmlWhitespaceSensitivity) {
              case "strict":
                return "inline";
              case "ignore":
                return "block";
              default:
                return G2.parser === "vue" && A2.parent && A2.parent.type === "root" ? "block" : A2.type === "element" && (!A2.namespace || re2 || c(A2)) && p[A2.name] || y;
            }
          }
          function we2(A2) {
            return A2.type === "element" && (!A2.namespace || c(A2)) && h2[A2.name] || g;
          }
          function ke2(A2) {
            let G2 = Number.POSITIVE_INFINITY;
            for (let re2 of A2.split(`
`)) {
              if (re2.length === 0)
                continue;
              if (!f2.has(re2[0]))
                return 0;
              let ye = I2(re2).length;
              re2.length !== ye && ye < G2 && (G2 = ye);
            }
            return G2 === Number.POSITIVE_INFINITY ? 0 : G2;
          }
          function Re2(A2) {
            let G2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke2(A2);
            return G2 === 0 ? A2 : A2.split(`
`).map((re2) => re2.slice(G2)).join(`
`);
          }
          function Ne2(A2, G2) {
            let re2 = 0;
            for (let ye = 0; ye < A2.length; ye++)
              A2[ye] === G2 && re2++;
            return re2;
          }
          function Pe2(A2) {
            return A2.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
          }
          var oe2 = /* @__PURE__ */ new Set(["template", "style", "script"]);
          function H2(A2, G2) {
            return pe2(A2, G2) && !oe2.has(A2.fullName);
          }
          function pe2(A2, G2) {
            return G2.parser === "vue" && A2.type === "element" && A2.parent.type === "root" && A2.fullName.toLowerCase() !== "html";
          }
          function X2(A2, G2) {
            return pe2(A2, G2) && (H2(A2, G2) || A2.attrMap.lang && A2.attrMap.lang !== "html");
          }
          function le2(A2) {
            let G2 = A2.fullName;
            return G2.charAt(0) === "#" || G2 === "slot-scope" || G2 === "v-slot" || G2.startsWith("v-slot:");
          }
          function Ae2(A2, G2) {
            let re2 = A2.parent;
            if (!pe2(re2, G2))
              return false;
            let ye = re2.fullName, Ce2 = A2.fullName;
            return ye === "script" && Ce2 === "setup" || ye === "style" && Ce2 === "vars";
          }
          function Ee2(A2) {
            let G2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : A2.value;
            return A2.parent.isWhitespaceSensitive ? A2.parent.isIndentationSensitive ? l(G2) : l(Re2(N2(G2)), n) : i(u(a, x2(G2)));
          }
          function De2(A2, G2) {
            return pe2(A2, G2) && A2.name === "script";
          }
          r.exports = { htmlTrim: w, htmlTrimPreserveIndentation: N2, hasHtmlWhitespace: $, getLeadingAndTrailingHtmlWhitespace: P, canHaveInterpolation: d, countChars: Ne2, countParents: fe2, dedentString: Re2, forceBreakChildren: q, forceBreakContent: R2, forceNextEmptyLine: M, getLastDescendant: ie2, getNodeCssStyleDisplay: he2, getNodeCssStyleWhiteSpace: we2, hasPrettierIgnore: T2, inferScriptParser: K2, isVueCustomBlock: H2, isVueNonHtmlBlock: X2, isVueScriptTag: De2, isVueSlotAttribute: le2, isVueSfcBindingsAttribute: Ae2, isVueSfcBlock: pe2, isDanglingSpaceSensitiveNode: k2, isIndentationSensitiveNode: S2, isLeadingSpaceSensitiveNode: b2, isPreLikeNode: se2, isScriptLikeTag: o, isTextLikeNode: C, isTrailingSpaceSensitiveNode: B, isWhitespaceSensitiveNode: v2, isUnknownNamespace: c, preferHardlineAsLeadingSpaces: J2, preferHardlineAsTrailingSpaces: L2, shouldPreserveContent: D, unescapeQuoteEntities: Pe2, getTextValueParts: Ee2 };
        } }), vg = te2({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
          function r(i) {
            return i >= e.$TAB && i <= e.$SPACE || i == e.$NBSP;
          }
          e.isWhitespace = r;
          function t8(i) {
            return e.$0 <= i && i <= e.$9;
          }
          e.isDigit = t8;
          function s(i) {
            return i >= e.$a && i <= e.$z || i >= e.$A && i <= e.$Z;
          }
          e.isAsciiLetter = s;
          function a(i) {
            return i >= e.$a && i <= e.$f || i >= e.$A && i <= e.$F || t8(i);
          }
          e.isAsciiHexDigit = a;
          function n(i) {
            return i === e.$LF || i === e.$CR;
          }
          e.isNewLine = n;
          function u(i) {
            return e.$0 <= i && i <= e.$7;
          }
          e.isOctalDigit = u;
        } }), Cg = te2({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = class {
            constructor(s, a, n) {
              this.filePath = s, this.name = a, this.members = n;
            }
            assertNoMembers() {
              if (this.members.length)
                throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
            }
          };
          e.StaticSymbol = r;
          var t8 = class {
            constructor() {
              this.cache = /* @__PURE__ */ new Map();
            }
            get(s, a, n) {
              n = n || [];
              let u = n.length ? `.${n.join(".")}` : "", i = `"${s}".${a}${u}`, l = this.cache.get(i);
              return l || (l = new r(s, a, n), this.cache.set(i, l)), l;
            }
          };
          e.StaticSymbolCache = t8;
        } }), Eg = te2({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = /-+([a-z0-9])/g;
          function t8(o) {
            return o.replace(r, function() {
              for (var d = arguments.length, v2 = new Array(d), S2 = 0; S2 < d; S2++)
                v2[S2] = arguments[S2];
              return v2[1].toUpperCase();
            });
          }
          e.dashCaseToCamelCase = t8;
          function s(o, d) {
            return n(o, ":", d);
          }
          e.splitAtColon = s;
          function a(o, d) {
            return n(o, ".", d);
          }
          e.splitAtPeriod = a;
          function n(o, d, v2) {
            let S2 = o.indexOf(d);
            return S2 == -1 ? v2 : [o.slice(0, S2).trim(), o.slice(S2 + 1).trim()];
          }
          function u(o, d, v2) {
            return Array.isArray(o) ? d.visitArray(o, v2) : E2(o) ? d.visitStringMap(o, v2) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? d.visitPrimitive(o, v2) : d.visitOther(o, v2);
          }
          e.visitValue = u;
          function i(o) {
            return o != null;
          }
          e.isDefined = i;
          function l(o) {
            return o === void 0 ? null : o;
          }
          e.noUndefined = l;
          var p = class {
            visitArray(o, d) {
              return o.map((v2) => u(v2, this, d));
            }
            visitStringMap(o, d) {
              let v2 = {};
              return Object.keys(o).forEach((S2) => {
                v2[S2] = u(o[S2], this, d);
              }), v2;
            }
            visitPrimitive(o, d) {
              return o;
            }
            visitOther(o, d) {
              return o;
            }
          };
          e.ValueTransformer = p, e.SyncAsync = { assertSync: (o) => {
            if (P(o))
              throw new Error("Illegal state: value cannot be a promise");
            return o;
          }, then: (o, d) => P(o) ? o.then(d) : d(o), all: (o) => o.some(P) ? Promise.all(o) : o };
          function y(o) {
            throw new Error(`Internal Error: ${o}`);
          }
          e.error = y;
          function h2(o, d) {
            let v2 = Error(o);
            return v2[g] = true, d && (v2[c] = d), v2;
          }
          e.syntaxError = h2;
          var g = "ngSyntaxError", c = "ngParseErrors";
          function f2(o) {
            return o[g];
          }
          e.isSyntaxError = f2;
          function F2(o) {
            return o[c] || [];
          }
          e.getParseErrors = F2;
          function _(o) {
            return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
          }
          e.escapeRegExp = _;
          var w = Object.getPrototypeOf({});
          function E2(o) {
            return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === w;
          }
          function N2(o) {
            let d = "";
            for (let v2 = 0; v2 < o.length; v2++) {
              let S2 = o.charCodeAt(v2);
              if (S2 >= 55296 && S2 <= 56319 && o.length > v2 + 1) {
                let b2 = o.charCodeAt(v2 + 1);
                b2 >= 56320 && b2 <= 57343 && (v2++, S2 = (S2 - 55296 << 10) + b2 - 56320 + 65536);
              }
              S2 <= 127 ? d += String.fromCharCode(S2) : S2 <= 2047 ? d += String.fromCharCode(S2 >> 6 & 31 | 192, S2 & 63 | 128) : S2 <= 65535 ? d += String.fromCharCode(S2 >> 12 | 224, S2 >> 6 & 63 | 128, S2 & 63 | 128) : S2 <= 2097151 && (d += String.fromCharCode(S2 >> 18 & 7 | 240, S2 >> 12 & 63 | 128, S2 >> 6 & 63 | 128, S2 & 63 | 128));
            }
            return d;
          }
          e.utf8Encode = N2;
          function x2(o) {
            if (typeof o == "string")
              return o;
            if (o instanceof Array)
              return "[" + o.map(x2).join(", ") + "]";
            if (o == null)
              return "" + o;
            if (o.overriddenName)
              return `${o.overriddenName}`;
            if (o.name)
              return `${o.name}`;
            if (!o.toString)
              return "object";
            let d = o.toString();
            if (d == null)
              return "" + d;
            let v2 = d.indexOf(`
`);
            return v2 === -1 ? d : d.substring(0, v2);
          }
          e.stringify = x2;
          function I2(o) {
            return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
          }
          e.resolveForwardRef = I2;
          function P(o) {
            return !!o && typeof o.then == "function";
          }
          e.isPromise = P;
          var $ = class {
            constructor(o) {
              this.full = o;
              let d = o.split(".");
              this.major = d[0], this.minor = d[1], this.patch = d.slice(2).join(".");
            }
          };
          e.Version = $;
          var D = typeof window < "u" && window, T2 = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, m = typeof globalThis < "u" && globalThis, C = m || D || T2;
          e.global = C;
        } }), Fg = te2({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Cg(), t8 = Eg(), s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
          function a(v2) {
            return v2.replace(/\W/g, "_");
          }
          e.sanitizeIdentifier = a;
          var n = 0;
          function u(v2) {
            if (!v2 || !v2.reference)
              return null;
            let S2 = v2.reference;
            if (S2 instanceof r.StaticSymbol)
              return S2.name;
            if (S2.__anonymousType)
              return S2.__anonymousType;
            let b2 = t8.stringify(S2);
            return b2.indexOf("(") >= 0 ? (b2 = `anonymous_${n++}`, S2.__anonymousType = b2) : b2 = a(b2), b2;
          }
          e.identifierName = u;
          function i(v2) {
            let S2 = v2.reference;
            return S2 instanceof r.StaticSymbol ? S2.filePath : `./${t8.stringify(S2)}`;
          }
          e.identifierModuleUrl = i;
          function l(v2, S2) {
            return `View_${u({ reference: v2 })}_${S2}`;
          }
          e.viewClassName = l;
          function p(v2) {
            return `RenderType_${u({ reference: v2 })}`;
          }
          e.rendererTypeName = p;
          function y(v2) {
            return `HostView_${u({ reference: v2 })}`;
          }
          e.hostViewClassName = y;
          function h2(v2) {
            return `${u({ reference: v2 })}NgFactory`;
          }
          e.componentFactoryName = h2;
          var g;
          (function(v2) {
            v2[v2.Pipe = 0] = "Pipe", v2[v2.Directive = 1] = "Directive", v2[v2.NgModule = 2] = "NgModule", v2[v2.Injectable = 3] = "Injectable";
          })(g = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
          function c(v2) {
            return v2.value != null ? a(v2.value) : u(v2.identifier);
          }
          e.tokenName = c;
          function f2(v2) {
            return v2.identifier != null ? v2.identifier.reference : v2.value;
          }
          e.tokenReference = f2;
          var F2 = class {
            constructor() {
              let { moduleUrl: v2, styles: S2, styleUrls: b2 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              this.moduleUrl = v2 || null, this.styles = P(S2), this.styleUrls = P(b2);
            }
          };
          e.CompileStylesheetMetadata = F2;
          var _ = class {
            constructor(v2) {
              let { encapsulation: S2, template: b2, templateUrl: B, htmlAst: k2, styles: M, styleUrls: R2, externalStylesheets: q, animations: J2, ngContentSelectors: L2, interpolation: Q2, isInline: V2, preserveWhitespaces: j2 } = v2;
              if (this.encapsulation = S2, this.template = b2, this.templateUrl = B, this.htmlAst = k2, this.styles = P(M), this.styleUrls = P(R2), this.externalStylesheets = P(q), this.animations = J2 ? D(J2) : [], this.ngContentSelectors = L2 || [], Q2 && Q2.length != 2)
                throw new Error("'interpolation' should have a start and an end symbol.");
              this.interpolation = Q2, this.isInline = V2, this.preserveWhitespaces = j2;
            }
            toSummary() {
              return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
            }
          };
          e.CompileTemplateMetadata = _;
          var w = class {
            static create(v2) {
              let { isHost: S2, type: b2, isComponent: B, selector: k2, exportAs: M, changeDetection: R2, inputs: q, outputs: J2, host: L2, providers: Q2, viewProviders: V2, queries: j2, guards: Y2, viewQueries: ie2, entryComponents: ee2, template: ce2, componentViewType: W2, rendererType: K2, componentFactory: de2 } = v2, ue2 = {}, Fe2 = {}, z2 = {};
              L2 != null && Object.keys(L2).forEach((se2) => {
                let fe2 = L2[se2], ge2 = se2.match(s);
                ge2 === null ? z2[se2] = fe2 : ge2[1] != null ? Fe2[ge2[1]] = fe2 : ge2[2] != null && (ue2[ge2[2]] = fe2);
              });
              let U2 = {};
              q != null && q.forEach((se2) => {
                let fe2 = t8.splitAtColon(se2, [se2, se2]);
                U2[fe2[0]] = fe2[1];
              });
              let Z = {};
              return J2 != null && J2.forEach((se2) => {
                let fe2 = t8.splitAtColon(se2, [se2, se2]);
                Z[fe2[0]] = fe2[1];
              }), new w({ isHost: S2, type: b2, isComponent: !!B, selector: k2, exportAs: M, changeDetection: R2, inputs: U2, outputs: Z, hostListeners: ue2, hostProperties: Fe2, hostAttributes: z2, providers: Q2, viewProviders: V2, queries: j2, guards: Y2, viewQueries: ie2, entryComponents: ee2, template: ce2, componentViewType: W2, rendererType: K2, componentFactory: de2 });
            }
            constructor(v2) {
              let { isHost: S2, type: b2, isComponent: B, selector: k2, exportAs: M, changeDetection: R2, inputs: q, outputs: J2, hostListeners: L2, hostProperties: Q2, hostAttributes: V2, providers: j2, viewProviders: Y2, queries: ie2, guards: ee2, viewQueries: ce2, entryComponents: W2, template: K2, componentViewType: de2, rendererType: ue2, componentFactory: Fe2 } = v2;
              this.isHost = !!S2, this.type = b2, this.isComponent = B, this.selector = k2, this.exportAs = M, this.changeDetection = R2, this.inputs = q, this.outputs = J2, this.hostListeners = L2, this.hostProperties = Q2, this.hostAttributes = V2, this.providers = P(j2), this.viewProviders = P(Y2), this.queries = P(ie2), this.guards = ee2, this.viewQueries = P(ce2), this.entryComponents = P(W2), this.template = K2, this.componentViewType = de2, this.rendererType = ue2, this.componentFactory = Fe2;
            }
            toSummary() {
              return { summaryKind: g.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
            }
          };
          e.CompileDirectiveMetadata = w;
          var E2 = class {
            constructor(v2) {
              let { type: S2, name: b2, pure: B } = v2;
              this.type = S2, this.name = b2, this.pure = !!B;
            }
            toSummary() {
              return { summaryKind: g.Pipe, type: this.type, name: this.name, pure: this.pure };
            }
          };
          e.CompilePipeMetadata = E2;
          var N2 = class {
          };
          e.CompileShallowModuleMetadata = N2;
          var x2 = class {
            constructor(v2) {
              let { type: S2, providers: b2, declaredDirectives: B, exportedDirectives: k2, declaredPipes: M, exportedPipes: R2, entryComponents: q, bootstrapComponents: J2, importedModules: L2, exportedModules: Q2, schemas: V2, transitiveModule: j2, id: Y2 } = v2;
              this.type = S2 || null, this.declaredDirectives = P(B), this.exportedDirectives = P(k2), this.declaredPipes = P(M), this.exportedPipes = P(R2), this.providers = P(b2), this.entryComponents = P(q), this.bootstrapComponents = P(J2), this.importedModules = P(L2), this.exportedModules = P(Q2), this.schemas = P(V2), this.id = Y2 || null, this.transitiveModule = j2 || null;
            }
            toSummary() {
              let v2 = this.transitiveModule;
              return { summaryKind: g.NgModule, type: this.type, entryComponents: v2.entryComponents, providers: v2.providers, modules: v2.modules, exportedDirectives: v2.exportedDirectives, exportedPipes: v2.exportedPipes };
            }
          };
          e.CompileNgModuleMetadata = x2;
          var I2 = class {
            constructor() {
              this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
            }
            addProvider(v2, S2) {
              this.providers.push({ provider: v2, module: S2 });
            }
            addDirective(v2) {
              this.directivesSet.has(v2.reference) || (this.directivesSet.add(v2.reference), this.directives.push(v2));
            }
            addExportedDirective(v2) {
              this.exportedDirectivesSet.has(v2.reference) || (this.exportedDirectivesSet.add(v2.reference), this.exportedDirectives.push(v2));
            }
            addPipe(v2) {
              this.pipesSet.has(v2.reference) || (this.pipesSet.add(v2.reference), this.pipes.push(v2));
            }
            addExportedPipe(v2) {
              this.exportedPipesSet.has(v2.reference) || (this.exportedPipesSet.add(v2.reference), this.exportedPipes.push(v2));
            }
            addModule(v2) {
              this.modulesSet.has(v2.reference) || (this.modulesSet.add(v2.reference), this.modules.push(v2));
            }
            addEntryComponent(v2) {
              this.entryComponentsSet.has(v2.componentType) || (this.entryComponentsSet.add(v2.componentType), this.entryComponents.push(v2));
            }
          };
          e.TransitiveCompileNgModuleMetadata = I2;
          function P(v2) {
            return v2 || [];
          }
          var $ = class {
            constructor(v2, S2) {
              let { useClass: b2, useValue: B, useExisting: k2, useFactory: M, deps: R2, multi: q } = S2;
              this.token = v2, this.useClass = b2 || null, this.useValue = B, this.useExisting = k2, this.useFactory = M || null, this.dependencies = R2 || null, this.multi = !!q;
            }
          };
          e.ProviderMeta = $;
          function D(v2) {
            return v2.reduce((S2, b2) => {
              let B = Array.isArray(b2) ? D(b2) : b2;
              return S2.concat(B);
            }, []);
          }
          e.flatten = D;
          function T2(v2) {
            return v2.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
          }
          function m(v2, S2, b2) {
            let B;
            return b2.isInline ? S2.type.reference instanceof r.StaticSymbol ? B = `${S2.type.reference.filePath}.${S2.type.reference.name}.html` : B = `${u(v2)}/${u(S2.type)}.html` : B = b2.templateUrl, S2.type.reference instanceof r.StaticSymbol ? B : T2(B);
          }
          e.templateSourceUrl = m;
          function C(v2, S2) {
            let b2 = v2.moduleUrl.split(/\/\\/g), B = b2[b2.length - 1];
            return T2(`css/${S2}${B}.ngstyle.js`);
          }
          e.sharedStylesheetJitUrl = C;
          function o(v2) {
            return T2(`${u(v2.type)}/module.ngfactory.js`);
          }
          e.ngModuleJitUrl = o;
          function d(v2, S2) {
            return T2(`${u(v2)}/${u(S2.type)}.ngfactory.js`);
          }
          e.templateJitUrl = d;
        } }), Ag = te2({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
          ne2(), Object.defineProperty(e, "__esModule", { value: true });
          var r = vg(), t8 = Fg(), s = class {
            constructor(y, h2, g, c) {
              this.file = y, this.offset = h2, this.line = g, this.col = c;
            }
            toString() {
              return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
            }
            moveBy(y) {
              let h2 = this.file.content, g = h2.length, c = this.offset, f2 = this.line, F2 = this.col;
              for (; c > 0 && y < 0; )
                if (c--, y++, h2.charCodeAt(c) == r.$LF) {
                  f2--;
                  let w = h2.substr(0, c - 1).lastIndexOf(String.fromCharCode(r.$LF));
                  F2 = w > 0 ? c - w : c;
                } else
                  F2--;
              for (; c < g && y > 0; ) {
                let _ = h2.charCodeAt(c);
                c++, y--, _ == r.$LF ? (f2++, F2 = 0) : F2++;
              }
              return new s(this.file, c, f2, F2);
            }
            getContext(y, h2) {
              let g = this.file.content, c = this.offset;
              if (c != null) {
                c > g.length - 1 && (c = g.length - 1);
                let f2 = c, F2 = 0, _ = 0;
                for (; F2 < y && c > 0 && (c--, F2++, !(g[c] == `
` && ++_ == h2)); )
                  ;
                for (F2 = 0, _ = 0; F2 < y && f2 < g.length - 1 && (f2++, F2++, !(g[f2] == `
` && ++_ == h2)); )
                  ;
                return { before: g.substring(c, this.offset), after: g.substring(this.offset, f2 + 1) };
              }
              return null;
            }
          };
          e.ParseLocation = s;
          var a = class {
            constructor(y, h2) {
              this.content = y, this.url = h2;
            }
          };
          e.ParseSourceFile = a;
          var n = class {
            constructor(y, h2) {
              let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
              this.start = y, this.end = h2, this.details = g;
            }
            toString() {
              return this.start.file.content.substring(this.start.offset, this.end.offset);
            }
          };
          e.ParseSourceSpan = n, e.EMPTY_PARSE_LOCATION = new s(new a("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new n(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
          var u;
          (function(y) {
            y[y.WARNING = 0] = "WARNING", y[y.ERROR = 1] = "ERROR";
          })(u = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
          var i = class {
            constructor(y, h2) {
              let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.ERROR;
              this.span = y, this.msg = h2, this.level = g;
            }
            contextualMessage() {
              let y = this.span.start.getContext(100, 3);
              return y ? `${this.msg} ("${y.before}[${u[this.level]} ->]${y.after}")` : this.msg;
            }
            toString() {
              let y = this.span.details ? `, ${this.span.details}` : "";
              return `${this.contextualMessage()}: ${this.span.start}${y}`;
            }
          };
          e.ParseError = i;
          function l(y, h2) {
            let g = t8.identifierModuleUrl(h2), c = g != null ? `in ${y} ${t8.identifierName(h2)} in ${g}` : `in ${y} ${t8.identifierName(h2)}`, f2 = new a("", c);
            return new n(new s(f2, -1, -1, -1), new s(f2, -1, -1, -1));
          }
          e.typeSourceSpan = l;
          function p(y, h2, g) {
            let c = `in ${y} ${h2} in ${g}`, f2 = new a("", c);
            return new n(new s(f2, -1, -1, -1), new s(f2, -1, -1, -1));
          }
          e.r3JitTypeSourceSpan = p;
        } }), Sg = te2({ "src/language-html/print-preprocess.js"(e, r) {
          ne2();
          var { ParseSourceSpan: t8 } = Ag(), { htmlTrim: s, getLeadingAndTrailingHtmlWhitespace: a, hasHtmlWhitespace: n, canHaveInterpolation: u, getNodeCssStyleDisplay: i, isDanglingSpaceSensitiveNode: l, isIndentationSensitiveNode: p, isLeadingSpaceSensitiveNode: y, isTrailingSpaceSensitiveNode: h2, isWhitespaceSensitiveNode: g, isVueScriptTag: c } = Rt2(), f2 = [_, w, N2, I2, P, T2, $, D, m, x2, C];
          function F2(o, d) {
            for (let v2 of f2)
              v2(o, d);
            return o;
          }
          function _(o) {
            o.walk((d) => {
              if (d.type === "element" && d.tagDefinition.ignoreFirstLf && d.children.length > 0 && d.children[0].type === "text" && d.children[0].value[0] === `
`) {
                let v2 = d.children[0];
                v2.value.length === 1 ? d.removeChild(v2) : v2.value = v2.value.slice(1);
              }
            });
          }
          function w(o) {
            let d = (v2) => v2.type === "element" && v2.prev && v2.prev.type === "ieConditionalStartComment" && v2.prev.sourceSpan.end.offset === v2.startSourceSpan.start.offset && v2.firstChild && v2.firstChild.type === "ieConditionalEndComment" && v2.firstChild.sourceSpan.start.offset === v2.startSourceSpan.end.offset;
            o.walk((v2) => {
              if (v2.children)
                for (let S2 = 0; S2 < v2.children.length; S2++) {
                  let b2 = v2.children[S2];
                  if (!d(b2))
                    continue;
                  let B = b2.prev, k2 = b2.firstChild;
                  v2.removeChild(B), S2--;
                  let M = new t8(B.sourceSpan.start, k2.sourceSpan.end), R2 = new t8(M.start, b2.sourceSpan.end);
                  b2.condition = B.condition, b2.sourceSpan = R2, b2.startSourceSpan = M, b2.removeChild(k2);
                }
            });
          }
          function E2(o, d, v2) {
            o.walk((S2) => {
              if (S2.children)
                for (let b2 = 0; b2 < S2.children.length; b2++) {
                  let B = S2.children[b2];
                  if (B.type !== "text" && !d(B))
                    continue;
                  B.type !== "text" && (B.type = "text", B.value = v2(B));
                  let k2 = B.prev;
                  !k2 || k2.type !== "text" || (k2.value += B.value, k2.sourceSpan = new t8(k2.sourceSpan.start, B.sourceSpan.end), S2.removeChild(B), b2--);
                }
            });
          }
          function N2(o) {
            return E2(o, (d) => d.type === "cdata", (d) => `<![CDATA[${d.value}]]>`);
          }
          function x2(o) {
            let d = (v2) => v2.type === "element" && v2.attrs.length === 0 && v2.children.length === 1 && v2.firstChild.type === "text" && !n(v2.children[0].value) && !v2.firstChild.hasLeadingSpaces && !v2.firstChild.hasTrailingSpaces && v2.isLeadingSpaceSensitive && !v2.hasLeadingSpaces && v2.isTrailingSpaceSensitive && !v2.hasTrailingSpaces && v2.prev && v2.prev.type === "text" && v2.next && v2.next.type === "text";
            o.walk((v2) => {
              if (v2.children)
                for (let S2 = 0; S2 < v2.children.length; S2++) {
                  let b2 = v2.children[S2];
                  if (!d(b2))
                    continue;
                  let B = b2.prev, k2 = b2.next;
                  B.value += `<${b2.rawName}>` + b2.firstChild.value + `</${b2.rawName}>` + k2.value, B.sourceSpan = new t8(B.sourceSpan.start, k2.sourceSpan.end), B.isTrailingSpaceSensitive = k2.isTrailingSpaceSensitive, B.hasTrailingSpaces = k2.hasTrailingSpaces, v2.removeChild(b2), S2--, v2.removeChild(k2);
                }
            });
          }
          function I2(o, d) {
            if (d.parser === "html")
              return;
            let v2 = /{{(.+?)}}/s;
            o.walk((S2) => {
              if (u(S2))
                for (let b2 of S2.children) {
                  if (b2.type !== "text")
                    continue;
                  let B = b2.sourceSpan.start, k2 = null, M = b2.value.split(v2);
                  for (let R2 = 0; R2 < M.length; R2++, B = k2) {
                    let q = M[R2];
                    if (R2 % 2 === 0) {
                      k2 = B.moveBy(q.length), q.length > 0 && S2.insertChildBefore(b2, { type: "text", value: q, sourceSpan: new t8(B, k2) });
                      continue;
                    }
                    k2 = B.moveBy(q.length + 4), S2.insertChildBefore(b2, { type: "interpolation", sourceSpan: new t8(B, k2), children: q.length === 0 ? [] : [{ type: "text", value: q, sourceSpan: new t8(B.moveBy(2), k2.moveBy(-2)) }] });
                  }
                  S2.removeChild(b2);
                }
            });
          }
          function P(o) {
            o.walk((d) => {
              if (!d.children)
                return;
              if (d.children.length === 0 || d.children.length === 1 && d.children[0].type === "text" && s(d.children[0].value).length === 0) {
                d.hasDanglingSpaces = d.children.length > 0, d.children = [];
                return;
              }
              let v2 = g(d), S2 = p(d);
              if (!v2)
                for (let b2 = 0; b2 < d.children.length; b2++) {
                  let B = d.children[b2];
                  if (B.type !== "text")
                    continue;
                  let { leadingWhitespace: k2, text: M, trailingWhitespace: R2 } = a(B.value), q = B.prev, J2 = B.next;
                  M ? (B.value = M, B.sourceSpan = new t8(B.sourceSpan.start.moveBy(k2.length), B.sourceSpan.end.moveBy(-R2.length)), k2 && (q && (q.hasTrailingSpaces = true), B.hasLeadingSpaces = true), R2 && (B.hasTrailingSpaces = true, J2 && (J2.hasLeadingSpaces = true))) : (d.removeChild(B), b2--, (k2 || R2) && (q && (q.hasTrailingSpaces = true), J2 && (J2.hasLeadingSpaces = true)));
                }
              d.isWhitespaceSensitive = v2, d.isIndentationSensitive = S2;
            });
          }
          function $(o) {
            o.walk((d) => {
              d.isSelfClosing = !d.children || d.type === "element" && (d.tagDefinition.isVoid || d.startSourceSpan === d.endSourceSpan);
            });
          }
          function D(o, d) {
            o.walk((v2) => {
              v2.type === "element" && (v2.hasHtmComponentClosingTag = v2.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(d.originalText.slice(v2.endSourceSpan.start.offset, v2.endSourceSpan.end.offset)));
            });
          }
          function T2(o, d) {
            o.walk((v2) => {
              v2.cssDisplay = i(v2, d);
            });
          }
          function m(o, d) {
            o.walk((v2) => {
              let { children: S2 } = v2;
              if (S2) {
                if (S2.length === 0) {
                  v2.isDanglingSpaceSensitive = l(v2);
                  return;
                }
                for (let b2 of S2)
                  b2.isLeadingSpaceSensitive = y(b2, d), b2.isTrailingSpaceSensitive = h2(b2, d);
                for (let b2 = 0; b2 < S2.length; b2++) {
                  let B = S2[b2];
                  B.isLeadingSpaceSensitive = (b2 === 0 || B.prev.isTrailingSpaceSensitive) && B.isLeadingSpaceSensitive, B.isTrailingSpaceSensitive = (b2 === S2.length - 1 || B.next.isLeadingSpaceSensitive) && B.isTrailingSpaceSensitive;
                }
              }
            });
          }
          function C(o, d) {
            if (d.parser === "vue") {
              let v2 = o.children.find((b2) => c(b2, d));
              if (!v2)
                return;
              let { lang: S2 } = v2.attrMap;
              (S2 === "ts" || S2 === "typescript") && (d.__should_parse_vue_template_with_ts = true);
            }
          }
          r.exports = F2;
        } }), xg = te2({ "src/language-html/pragma.js"(e, r) {
          ne2();
          function t8(a) {
            return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(a);
          }
          function s(a) {
            return `<!-- @format -->

` + a.replace(/^\s*\n/, "");
          }
          r.exports = { hasPragma: t8, insertPragma: s };
        } }), au = te2({ "src/language-html/loc.js"(e, r) {
          ne2();
          function t8(a) {
            return a.sourceSpan.start.offset;
          }
          function s(a) {
            return a.sourceSpan.end.offset;
          }
          r.exports = { locStart: t8, locEnd: s };
        } }), ur2 = te2({ "src/language-html/print/tag.js"(e, r) {
          ne2();
          var t8 = Zt2(), { isNonEmptyArray: s } = Ue2(), { builders: { indent: a, join: n, line: u, softline: i, hardline: l }, utils: { replaceTextEndOfLine: p } } = qe2(), { locStart: y, locEnd: h2 } = au(), { isTextLikeNode: g, getLastDescendant: c, isPreLikeNode: f2, hasPrettierIgnore: F2, shouldPreserveContent: _, isVueSfcBlock: w } = Rt2();
          function E2(L2, Q2) {
            return [L2.isSelfClosing ? "" : N2(L2, Q2), x2(L2, Q2)];
          }
          function N2(L2, Q2) {
            return L2.lastChild && o(L2.lastChild) ? "" : [I2(L2, Q2), $(L2, Q2)];
          }
          function x2(L2, Q2) {
            return (L2.next ? m(L2.next) : C(L2.parent)) ? "" : [D(L2, Q2), P(L2, Q2)];
          }
          function I2(L2, Q2) {
            return C(L2) ? D(L2.lastChild, Q2) : "";
          }
          function P(L2, Q2) {
            return o(L2) ? $(L2.parent, Q2) : d(L2) ? q(L2.next) : "";
          }
          function $(L2, Q2) {
            if (t8(!L2.isSelfClosing), T2(L2, Q2))
              return "";
            switch (L2.type) {
              case "ieConditionalComment":
                return "<!";
              case "element":
                if (L2.hasHtmComponentClosingTag)
                  return "<//";
              default:
                return `</${L2.rawName}`;
            }
          }
          function D(L2, Q2) {
            if (T2(L2, Q2))
              return "";
            switch (L2.type) {
              case "ieConditionalComment":
              case "ieConditionalEndComment":
                return "[endif]-->";
              case "ieConditionalStartComment":
                return "]><!-->";
              case "interpolation":
                return "}}";
              case "element":
                if (L2.isSelfClosing)
                  return "/>";
              default:
                return ">";
            }
          }
          function T2(L2, Q2) {
            return !L2.isSelfClosing && !L2.endSourceSpan && (F2(L2) || _(L2.parent, Q2));
          }
          function m(L2) {
            return L2.prev && L2.prev.type !== "docType" && !g(L2.prev) && L2.isLeadingSpaceSensitive && !L2.hasLeadingSpaces;
          }
          function C(L2) {
            return L2.lastChild && L2.lastChild.isTrailingSpaceSensitive && !L2.lastChild.hasTrailingSpaces && !g(c(L2.lastChild)) && !f2(L2);
          }
          function o(L2) {
            return !L2.next && !L2.hasTrailingSpaces && L2.isTrailingSpaceSensitive && g(c(L2));
          }
          function d(L2) {
            return L2.next && !g(L2.next) && g(L2) && L2.isTrailingSpaceSensitive && !L2.hasTrailingSpaces;
          }
          function v2(L2) {
            let Q2 = L2.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
            return Q2 ? Q2[1] ? Q2[1].split(/\s+/) : true : false;
          }
          function S2(L2) {
            return !L2.prev && L2.isLeadingSpaceSensitive && !L2.hasLeadingSpaces;
          }
          function b2(L2, Q2, V2) {
            let j2 = L2.getValue();
            if (!s(j2.attrs))
              return j2.isSelfClosing ? " " : "";
            let Y2 = j2.prev && j2.prev.type === "comment" && v2(j2.prev.value), ie2 = typeof Y2 == "boolean" ? () => Y2 : Array.isArray(Y2) ? (ue2) => Y2.includes(ue2.rawName) : () => false, ee2 = L2.map((ue2) => {
              let Fe2 = ue2.getValue();
              return ie2(Fe2) ? p(Q2.originalText.slice(y(Fe2), h2(Fe2))) : V2();
            }, "attrs"), ce2 = j2.type === "element" && j2.fullName === "script" && j2.attrs.length === 1 && j2.attrs[0].fullName === "src" && j2.children.length === 0, K2 = Q2.singleAttributePerLine && j2.attrs.length > 1 && !w(j2, Q2) ? l : u, de2 = [a([ce2 ? " " : u, n(K2, ee2)])];
            return j2.firstChild && S2(j2.firstChild) || j2.isSelfClosing && C(j2.parent) || ce2 ? de2.push(j2.isSelfClosing ? " " : "") : de2.push(Q2.bracketSameLine ? j2.isSelfClosing ? " " : "" : j2.isSelfClosing ? u : i), de2;
          }
          function B(L2) {
            return L2.firstChild && S2(L2.firstChild) ? "" : J2(L2);
          }
          function k2(L2, Q2, V2) {
            let j2 = L2.getValue();
            return [M(j2, Q2), b2(L2, Q2, V2), j2.isSelfClosing ? "" : B(j2)];
          }
          function M(L2, Q2) {
            return L2.prev && d(L2.prev) ? "" : [R2(L2, Q2), q(L2)];
          }
          function R2(L2, Q2) {
            return S2(L2) ? J2(L2.parent) : m(L2) ? D(L2.prev, Q2) : "";
          }
          function q(L2) {
            switch (L2.type) {
              case "ieConditionalComment":
              case "ieConditionalStartComment":
                return `<!--[if ${L2.condition}`;
              case "ieConditionalEndComment":
                return "<!--<!";
              case "interpolation":
                return "{{";
              case "docType":
                return "<!DOCTYPE";
              case "element":
                if (L2.condition)
                  return `<!--[if ${L2.condition}]><!--><${L2.rawName}`;
              default:
                return `<${L2.rawName}`;
            }
          }
          function J2(L2) {
            switch (t8(!L2.isSelfClosing), L2.type) {
              case "ieConditionalComment":
                return "]>";
              case "element":
                if (L2.condition)
                  return "><!--<![endif]-->";
              default:
                return ">";
            }
          }
          r.exports = { printClosingTag: E2, printClosingTagStart: N2, printClosingTagStartMarker: $, printClosingTagEndMarker: D, printClosingTagSuffix: P, printClosingTagEnd: x2, needsToBorrowLastChildClosingTagEndMarker: C, needsToBorrowParentClosingTagStartMarker: o, needsToBorrowPrevClosingTagEndMarker: m, printOpeningTag: k2, printOpeningTagStart: M, printOpeningTagPrefix: R2, printOpeningTagStartMarker: q, printOpeningTagEndMarker: J2, needsToBorrowNextOpeningTagStartMarker: d, needsToBorrowParentOpeningTagEndMarker: S2 };
        } }), bg = te2({ "node_modules/parse-srcset/src/parse-srcset.js"(e, r) {
          ne2(), function(t8, s) {
            typeof define == "function" && define.amd ? define([], s) : typeof r == "object" && r.exports ? r.exports = s() : t8.parseSrcset = s();
          }(e, function() {
            return function(t8, s) {
              var a = s && s.logger || console;
              function n($) {
                return $ === " " || $ === "	" || $ === `
` || $ === "\f" || $ === "\r";
              }
              function u($) {
                var D, T2 = $.exec(t8.substring(N2));
                if (T2)
                  return D = T2[0], N2 += D.length, D;
              }
              for (var i = t8.length, l = /^[ \t\n\r\u000c]+/, p = /^[, \t\n\r\u000c]+/, y = /^[^ \t\n\r\u000c]+/, h2 = /[,]+$/, g = /^\d+$/, c = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, f2, F2, _, w, E2, N2 = 0, x2 = []; ; ) {
                if (u(p), N2 >= i)
                  return x2;
                f2 = u(y), F2 = [], f2.slice(-1) === "," ? (f2 = f2.replace(h2, ""), P()) : I2();
              }
              function I2() {
                for (u(l), _ = "", w = "in descriptor"; ; ) {
                  if (E2 = t8.charAt(N2), w === "in descriptor")
                    if (n(E2))
                      _ && (F2.push(_), _ = "", w = "after descriptor");
                    else if (E2 === ",") {
                      N2 += 1, _ && F2.push(_), P();
                      return;
                    } else if (E2 === "(")
                      _ = _ + E2, w = "in parens";
                    else if (E2 === "") {
                      _ && F2.push(_), P();
                      return;
                    } else
                      _ = _ + E2;
                  else if (w === "in parens")
                    if (E2 === ")")
                      _ = _ + E2, w = "in descriptor";
                    else if (E2 === "") {
                      F2.push(_), P();
                      return;
                    } else
                      _ = _ + E2;
                  else if (w === "after descriptor" && !n(E2))
                    if (E2 === "") {
                      P();
                      return;
                    } else
                      w = "in descriptor", N2 -= 1;
                  N2 += 1;
                }
              }
              function P() {
                var $ = false, D, T2, m, C, o = {}, d, v2, S2, b2, B;
                for (C = 0; C < F2.length; C++)
                  d = F2[C], v2 = d[d.length - 1], S2 = d.substring(0, d.length - 1), b2 = parseInt(S2, 10), B = parseFloat(S2), g.test(S2) && v2 === "w" ? ((D || T2) && ($ = true), b2 === 0 ? $ = true : D = b2) : c.test(S2) && v2 === "x" ? ((D || T2 || m) && ($ = true), B < 0 ? $ = true : T2 = B) : g.test(S2) && v2 === "h" ? ((m || T2) && ($ = true), b2 === 0 ? $ = true : m = b2) : $ = true;
                $ ? a && a.error && a.error("Invalid srcset descriptor found in '" + t8 + "' at '" + d + "'.") : (o.url = f2, D && (o.w = D), T2 && (o.d = T2), m && (o.h = m), x2.push(o));
              }
            };
          });
        } }), Tg = te2({ "src/language-html/syntax-attribute.js"(e, r) {
          ne2();
          var t8 = bg(), { builders: { ifBreak: s, join: a, line: n } } = qe2();
          function u(l) {
            let p = t8(l, { logger: { error(I2) {
              throw new Error(I2);
            } } }), y = p.some((I2) => {
              let { w: P } = I2;
              return P;
            }), h2 = p.some((I2) => {
              let { h: P } = I2;
              return P;
            }), g = p.some((I2) => {
              let { d: P } = I2;
              return P;
            });
            if (y + h2 + g > 1)
              throw new Error("Mixed descriptor in srcset is not supported");
            let c = y ? "w" : h2 ? "h" : "d", f2 = y ? "w" : h2 ? "h" : "x", F2 = (I2) => Math.max(...I2), _ = p.map((I2) => I2.url), w = F2(_.map((I2) => I2.length)), E2 = p.map((I2) => I2[c]).map((I2) => I2 ? I2.toString() : ""), N2 = E2.map((I2) => {
              let P = I2.indexOf(".");
              return P === -1 ? I2.length : P;
            }), x2 = F2(N2);
            return a([",", n], _.map((I2, P) => {
              let $ = [I2], D = E2[P];
              if (D) {
                let T2 = w - I2.length + 1, m = x2 - N2[P], C = " ".repeat(T2 + m);
                $.push(s(C, " "), D + f2);
              }
              return $;
            }));
          }
          function i(l) {
            return l.trim().split(/\s+/).join(" ");
          }
          r.exports = { printImgSrcset: u, printClassNames: i };
        } }), Bg = te2({ "src/language-html/syntax-vue.js"(e, r) {
          ne2();
          var { builders: { group: t8 } } = qe2();
          function s(i, l) {
            let { left: p, operator: y, right: h2 } = a(i);
            return [t8(l(`function _(${p}) {}`, { parser: "babel", __isVueForBindingLeft: true })), " ", y, " ", l(h2, { parser: "__js_expression" }, { stripTrailingHardline: true })];
          }
          function a(i) {
            let l = /(.*?)\s+(in|of)\s+(.*)/s, p = /,([^,\]}]*)(?:,([^,\]}]*))?$/, y = /^\(|\)$/g, h2 = i.match(l);
            if (!h2)
              return;
            let g = {};
            if (g.for = h2[3].trim(), !g.for)
              return;
            let c = h2[1].trim().replace(y, ""), f2 = c.match(p);
            f2 ? (g.alias = c.replace(p, ""), g.iterator1 = f2[1].trim(), f2[2] && (g.iterator2 = f2[2].trim())) : g.alias = c;
            let F2 = [g.alias, g.iterator1, g.iterator2];
            if (!F2.some((_, w) => !_ && (w === 0 || F2.slice(w + 1).some(Boolean))))
              return { left: F2.filter(Boolean).join(","), operator: h2[2], right: g.for };
          }
          function n(i, l) {
            return l(`function _(${i}) {}`, { parser: "babel", __isVueBindings: true });
          }
          function u(i) {
            let l = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, p = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, y = i.trim();
            return l.test(y) || p.test(y);
          }
          r.exports = { isVueEventBindingExpression: u, printVueFor: s, printVueBindings: n };
        } }), Lo = te2({ "src/language-html/get-node-content.js"(e, r) {
          ne2();
          var { needsToBorrowParentClosingTagStartMarker: t8, printClosingTagStartMarker: s, needsToBorrowLastChildClosingTagEndMarker: a, printClosingTagEndMarker: n, needsToBorrowParentOpeningTagEndMarker: u, printOpeningTagEndMarker: i } = ur2();
          function l(p, y) {
            let h2 = p.startSourceSpan.end.offset;
            p.firstChild && u(p.firstChild) && (h2 -= i(p).length);
            let g = p.endSourceSpan.start.offset;
            return p.lastChild && t8(p.lastChild) ? g += s(p, y).length : a(p) && (g -= n(p.lastChild, y).length), y.originalText.slice(h2, g);
          }
          r.exports = l;
        } }), Ng = te2({ "src/language-html/embed.js"(e, r) {
          ne2();
          var { builders: { breakParent: t8, group: s, hardline: a, indent: n, line: u, fill: i, softline: l }, utils: { mapDoc: p, replaceTextEndOfLine: y } } = qe2(), h2 = su(), { printClosingTag: g, printClosingTagSuffix: c, needsToBorrowPrevClosingTagEndMarker: f2, printOpeningTagPrefix: F2, printOpeningTag: _ } = ur2(), { printImgSrcset: w, printClassNames: E2 } = Tg(), { printVueFor: N2, printVueBindings: x2, isVueEventBindingExpression: I2 } = Bg(), { isScriptLikeTag: P, isVueNonHtmlBlock: $, inferScriptParser: D, htmlTrimPreserveIndentation: T2, dedentString: m, unescapeQuoteEntities: C, isVueSlotAttribute: o, isVueSfcBindingsAttribute: d, getTextValueParts: v2 } = Rt2(), S2 = Lo();
          function b2(k2, M, R2) {
            let q = (ee2) => new RegExp(ee2.join("|")).test(k2.fullName), J2 = () => C(k2.value), L2 = false, Q2 = (ee2, ce2) => {
              let W2 = ee2.type === "NGRoot" ? ee2.node.type === "NGMicrosyntax" && ee2.node.body.length === 1 && ee2.node.body[0].type === "NGMicrosyntaxExpression" ? ee2.node.body[0].expression : ee2.node : ee2.type === "JsExpressionRoot" ? ee2.node : ee2;
              W2 && (W2.type === "ObjectExpression" || W2.type === "ArrayExpression" || ce2.parser === "__vue_expression" && (W2.type === "TemplateLiteral" || W2.type === "StringLiteral")) && (L2 = true);
            }, V2 = (ee2) => s(ee2), j2 = function(ee2) {
              let ce2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
              return s([n([l, ee2]), ce2 ? l : ""]);
            }, Y2 = (ee2) => L2 ? V2(ee2) : j2(ee2), ie2 = (ee2, ce2) => M(ee2, Object.assign({ __onHtmlBindingRoot: Q2, __embeddedInHtml: true }, ce2));
            if (k2.fullName === "srcset" && (k2.parent.fullName === "img" || k2.parent.fullName === "source"))
              return j2(w(J2()));
            if (k2.fullName === "class" && !R2.parentParser) {
              let ee2 = J2();
              if (!ee2.includes("{{"))
                return E2(ee2);
            }
            if (k2.fullName === "style" && !R2.parentParser) {
              let ee2 = J2();
              if (!ee2.includes("{{"))
                return j2(ie2(ee2, { parser: "css", __isHTMLStyleAttribute: true }));
            }
            if (R2.parser === "vue") {
              if (k2.fullName === "v-for")
                return N2(J2(), ie2);
              if (o(k2) || d(k2, R2))
                return x2(J2(), ie2);
              let ee2 = ["^@", "^v-on:"], ce2 = ["^:", "^v-bind:"], W2 = ["^v-"];
              if (q(ee2)) {
                let K2 = J2(), de2 = I2(K2) ? "__js_expression" : R2.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
                return Y2(ie2(K2, { parser: de2 }));
              }
              if (q(ce2))
                return Y2(ie2(J2(), { parser: "__vue_expression" }));
              if (q(W2))
                return Y2(ie2(J2(), { parser: "__js_expression" }));
            }
            if (R2.parser === "angular") {
              let ee2 = (z2, U2) => ie2(z2, Object.assign(Object.assign({}, U2), {}, { trailingComma: "none" })), ce2 = ["^\\*"], W2 = ["^\\(.+\\)$", "^on-"], K2 = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], de2 = ["^i18n(-.+)?$"];
              if (q(W2))
                return Y2(ee2(J2(), { parser: "__ng_action" }));
              if (q(K2))
                return Y2(ee2(J2(), { parser: "__ng_binding" }));
              if (q(de2)) {
                let z2 = J2().trim();
                return j2(i(v2(k2, z2)), !z2.includes("@@"));
              }
              if (q(ce2))
                return Y2(ee2(J2(), { parser: "__ng_directive" }));
              let ue2 = /{{(.+?)}}/s, Fe2 = J2();
              if (ue2.test(Fe2)) {
                let z2 = [];
                for (let [U2, Z] of Fe2.split(ue2).entries())
                  if (U2 % 2 === 0)
                    z2.push(y(Z));
                  else
                    try {
                      z2.push(s(["{{", n([u, ee2(Z, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), u, "}}"]));
                    } catch {
                      z2.push("{{", y(Z), "}}");
                    }
                return s(z2);
              }
            }
            return null;
          }
          function B(k2, M, R2, q) {
            let J2 = k2.getValue();
            switch (J2.type) {
              case "element": {
                if (P(J2) || J2.type === "interpolation")
                  return;
                if (!J2.isSelfClosing && $(J2, q)) {
                  let L2 = D(J2, q);
                  if (!L2)
                    return;
                  let Q2 = S2(J2, q), V2 = /^\s*$/.test(Q2), j2 = "";
                  return V2 || (j2 = R2(T2(Q2), { parser: L2, __embeddedInHtml: true }, { stripTrailingHardline: true }), V2 = j2 === ""), [F2(J2, q), s(_(k2, q, M)), V2 ? "" : a, j2, V2 ? "" : a, g(J2, q), c(J2, q)];
                }
                break;
              }
              case "text": {
                if (P(J2.parent)) {
                  let L2 = D(J2.parent, q);
                  if (L2) {
                    let Q2 = L2 === "markdown" ? m(J2.value.replace(/^[^\S\n]*\n/, "")) : J2.value, V2 = { parser: L2, __embeddedInHtml: true };
                    if (q.parser === "html" && L2 === "babel") {
                      let j2 = "script", { attrMap: Y2 } = J2.parent;
                      Y2 && (Y2.type === "module" || Y2.type === "text/babel" && Y2["data-type"] === "module") && (j2 = "module"), V2.__babelSourceType = j2;
                    }
                    return [t8, F2(J2, q), R2(Q2, V2, { stripTrailingHardline: true }), c(J2, q)];
                  }
                } else if (J2.parent.type === "interpolation") {
                  let L2 = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
                  return q.parser === "angular" ? (L2.parser = "__ng_interpolation", L2.trailingComma = "none") : q.parser === "vue" ? L2.parser = q.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : L2.parser = "__js_expression", [n([u, R2(J2.value, L2, { stripTrailingHardline: true })]), J2.parent.next && f2(J2.parent.next) ? " " : u];
                }
                break;
              }
              case "attribute": {
                if (!J2.value)
                  break;
                if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(q.originalText.slice(J2.valueSpan.start.offset, J2.valueSpan.end.offset)))
                  return [J2.rawName, "=", J2.value];
                if (q.parser === "lwc" && /^{.*}$/s.test(q.originalText.slice(J2.valueSpan.start.offset, J2.valueSpan.end.offset)))
                  return [J2.rawName, "=", J2.value];
                let L2 = b2(J2, (Q2, V2) => R2(Q2, Object.assign({ __isInHtmlAttribute: true, __embeddedInHtml: true }, V2), { stripTrailingHardline: true }), q);
                if (L2)
                  return [J2.rawName, '="', s(p(L2, (Q2) => typeof Q2 == "string" ? Q2.replace(/"/g, "&quot;") : Q2)), '"'];
                break;
              }
              case "front-matter":
                return h2(J2, R2);
            }
          }
          r.exports = B;
        } }), Oo = te2({ "src/language-html/print/children.js"(e, r) {
          ne2();
          var { builders: { breakParent: t8, group: s, ifBreak: a, line: n, softline: u, hardline: i }, utils: { replaceTextEndOfLine: l } } = qe2(), { locStart: p, locEnd: y } = au(), { forceBreakChildren: h2, forceNextEmptyLine: g, isTextLikeNode: c, hasPrettierIgnore: f2, preferHardlineAsLeadingSpaces: F2 } = Rt2(), { printOpeningTagPrefix: _, needsToBorrowNextOpeningTagStartMarker: w, printOpeningTagStartMarker: E2, needsToBorrowPrevClosingTagEndMarker: N2, printClosingTagEndMarker: x2, printClosingTagSuffix: I2, needsToBorrowParentClosingTagStartMarker: P } = ur2();
          function $(m, C, o) {
            let d = m.getValue();
            return f2(d) ? [_(d, C), ...l(C.originalText.slice(p(d) + (d.prev && w(d.prev) ? E2(d).length : 0), y(d) - (d.next && N2(d.next) ? x2(d, C).length : 0))), I2(d, C)] : o();
          }
          function D(m, C) {
            return c(m) && c(C) ? m.isTrailingSpaceSensitive ? m.hasTrailingSpaces ? F2(C) ? i : n : "" : F2(C) ? i : u : w(m) && (f2(C) || C.firstChild || C.isSelfClosing || C.type === "element" && C.attrs.length > 0) || m.type === "element" && m.isSelfClosing && N2(C) ? "" : !C.isLeadingSpaceSensitive || F2(C) || N2(C) && m.lastChild && P(m.lastChild) && m.lastChild.lastChild && P(m.lastChild.lastChild) ? i : C.hasLeadingSpaces ? n : u;
          }
          function T2(m, C, o) {
            let d = m.getValue();
            if (h2(d))
              return [t8, ...m.map((S2) => {
                let b2 = S2.getValue(), B = b2.prev ? D(b2.prev, b2) : "";
                return [B ? [B, g(b2.prev) ? i : ""] : "", $(S2, C, o)];
              }, "children")];
            let v2 = d.children.map(() => Symbol(""));
            return m.map((S2, b2) => {
              let B = S2.getValue();
              if (c(B)) {
                if (B.prev && c(B.prev)) {
                  let Q2 = D(B.prev, B);
                  if (Q2)
                    return g(B.prev) ? [i, i, $(S2, C, o)] : [Q2, $(S2, C, o)];
                }
                return $(S2, C, o);
              }
              let k2 = [], M = [], R2 = [], q = [], J2 = B.prev ? D(B.prev, B) : "", L2 = B.next ? D(B, B.next) : "";
              return J2 && (g(B.prev) ? k2.push(i, i) : J2 === i ? k2.push(i) : c(B.prev) ? M.push(J2) : M.push(a("", u, { groupId: v2[b2 - 1] }))), L2 && (g(B) ? c(B.next) && q.push(i, i) : L2 === i ? c(B.next) && q.push(i) : R2.push(L2)), [...k2, s([...M, s([$(S2, C, o), ...R2], { id: v2[b2] })]), ...q];
            }, "children");
          }
          r.exports = { printChildren: T2 };
        } }), wg = te2({ "src/language-html/print/element.js"(e, r) {
          ne2();
          var { builders: { breakParent: t8, dedentToRoot: s, group: a, ifBreak: n, indentIfBreak: u, indent: i, line: l, softline: p }, utils: { replaceTextEndOfLine: y } } = qe2(), h2 = Lo(), { shouldPreserveContent: g, isScriptLikeTag: c, isVueCustomBlock: f2, countParents: F2, forceBreakContent: _ } = Rt2(), { printOpeningTagPrefix: w, printOpeningTag: E2, printClosingTagSuffix: N2, printClosingTag: x2, needsToBorrowPrevClosingTagEndMarker: I2, needsToBorrowLastChildClosingTagEndMarker: P } = ur2(), { printChildren: $ } = Oo();
          function D(T2, m, C) {
            let o = T2.getValue();
            if (g(o, m))
              return [w(o, m), a(E2(T2, m, C)), ...y(h2(o, m)), ...x2(o, m), N2(o, m)];
            let d = o.children.length === 1 && o.firstChild.type === "interpolation" && o.firstChild.isLeadingSpaceSensitive && !o.firstChild.hasLeadingSpaces && o.lastChild.isTrailingSpaceSensitive && !o.lastChild.hasTrailingSpaces, v2 = Symbol("element-attr-group-id"), S2 = (M) => a([a(E2(T2, m, C), { id: v2 }), M, x2(o, m)]), b2 = (M) => d ? u(M, { groupId: v2 }) : (c(o) || f2(o, m)) && o.parent.type === "root" && m.parser === "vue" && !m.vueIndentScriptAndStyle ? M : i(M), B = () => d ? n(p, "", { groupId: v2 }) : o.firstChild.hasLeadingSpaces && o.firstChild.isLeadingSpaceSensitive ? l : o.firstChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive ? s(p) : p, k2 = () => (o.next ? I2(o.next) : P(o.parent)) ? o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? " " : "" : d ? n(p, "", { groupId: v2 }) : o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? l : (o.lastChild.type === "comment" || o.lastChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${m.tabWidth * F2(T2, (R2) => R2.parent && R2.parent.type !== "root")}}$`).test(o.lastChild.value) ? "" : p;
            return o.children.length === 0 ? S2(o.hasDanglingSpaces && o.isDanglingSpaceSensitive ? l : "") : S2([_(o) ? t8 : "", b2([B(), $(T2, m, C)]), k2()]);
          }
          r.exports = { printElement: D };
        } }), _g = te2({ "src/language-html/printer-html.js"(e, r) {
          ne2();
          var { builders: { fill: t8, group: s, hardline: a, literalline: n }, utils: { cleanDoc: u, getDocParts: i, isConcat: l, replaceTextEndOfLine: p } } = qe2(), y = gg(), { countChars: h2, unescapeQuoteEntities: g, getTextValueParts: c } = Rt2(), f2 = Sg(), { insertPragma: F2 } = xg(), { locStart: _, locEnd: w } = au(), E2 = Ng(), { printClosingTagSuffix: N2, printClosingTagEnd: x2, printOpeningTagPrefix: I2, printOpeningTagStart: P } = ur2(), { printElement: $ } = wg(), { printChildren: D } = Oo();
          function T2(m, C, o) {
            let d = m.getValue();
            switch (d.type) {
              case "front-matter":
                return p(d.raw);
              case "root":
                return C.__onHtmlRoot && C.__onHtmlRoot(d), [s(D(m, C, o)), a];
              case "element":
              case "ieConditionalComment":
                return $(m, C, o);
              case "ieConditionalStartComment":
              case "ieConditionalEndComment":
                return [P(d), x2(d)];
              case "interpolation":
                return [P(d, C), ...m.map(o, "children"), x2(d, C)];
              case "text": {
                if (d.parent.type === "interpolation") {
                  let S2 = /\n[^\S\n]*$/, b2 = S2.test(d.value), B = b2 ? d.value.replace(S2, "") : d.value;
                  return [...p(B), b2 ? a : ""];
                }
                let v2 = u([I2(d, C), ...c(d), N2(d, C)]);
                return l(v2) || v2.type === "fill" ? t8(i(v2)) : v2;
              }
              case "docType":
                return [s([P(d, C), " ", d.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), x2(d, C)];
              case "comment":
                return [I2(d, C), ...p(C.originalText.slice(_(d), w(d)), n), N2(d, C)];
              case "attribute": {
                if (d.value === null)
                  return d.rawName;
                let v2 = g(d.value), S2 = h2(v2, "'"), b2 = h2(v2, '"'), B = S2 < b2 ? "'" : '"';
                return [d.rawName, "=", B, ...p(B === '"' ? v2.replace(/"/g, "&quot;") : v2.replace(/'/g, "&apos;")), B];
              }
              default:
                throw new Error(`Unexpected node type ${d.type}`);
            }
          }
          r.exports = { preprocess: f2, print: T2, insertPragma: F2, massageAstNode: y, embed: E2 };
        } }), Pg = te2({ "src/language-html/options.js"(e, r) {
          ne2();
          var t8 = Mt2(), s = "HTML";
          r.exports = { bracketSameLine: t8.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: s, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: t8.singleAttributePerLine, vueIndentScriptAndStyle: { since: "1.19.0", category: s, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
        } }), Ig = te2({ "src/language-html/parsers.js"() {
          ne2();
        } }), On2 = te2({ "node_modules/linguist-languages/data/HTML.json"(e, r) {
          r.exports = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 };
        } }), kg = te2({ "node_modules/linguist-languages/data/Vue.json"(e, r) {
          r.exports = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 };
        } }), Lg = te2({ "src/language-html/index.js"(e, r) {
          ne2();
          var t8 = _t2(), s = _g(), a = Pg(), n = Ig(), u = [t8(On2(), () => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] })), t8(On2(), (l) => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...l.extensions, ".mjml"] })), t8(On2(), () => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] })), t8(kg(), () => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }))], i = { html: s };
          r.exports = { languages: u, printers: i, options: a, parsers: n };
        } }), Og = te2({ "src/language-yaml/pragma.js"(e, r) {
          ne2();
          function t8(n) {
            return /^\s*@(?:prettier|format)\s*$/.test(n);
          }
          function s(n) {
            return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(n);
          }
          function a(n) {
            return `# @format

${n}`;
          }
          r.exports = { isPragma: t8, hasPragma: s, insertPragma: a };
        } }), jg = te2({ "src/language-yaml/loc.js"(e, r) {
          ne2();
          function t8(a) {
            return a.position.start.offset;
          }
          function s(a) {
            return a.position.end.offset;
          }
          r.exports = { locStart: t8, locEnd: s };
        } }), qg = te2({ "src/language-yaml/embed.js"(e, r) {
          ne2();
          function t8(s, a, n, u) {
            if (s.getValue().type === "root" && u.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(u.filepath))
              return n(u.originalText, Object.assign(Object.assign({}, u), {}, { parser: "json" }));
          }
          r.exports = t8;
        } }), $t2 = te2({ "src/language-yaml/utils.js"(e, r) {
          ne2();
          var { getLast: t8, isNonEmptyArray: s } = Ue2();
          function a(D, T2) {
            let m = 0, C = D.stack.length - 1;
            for (let o = 0; o < C; o++) {
              let d = D.stack[o];
              n(d) && T2(d) && m++;
            }
            return m;
          }
          function n(D, T2) {
            return D && typeof D.type == "string" && (!T2 || T2.includes(D.type));
          }
          function u(D, T2, m) {
            return T2("children" in D ? Object.assign(Object.assign({}, D), {}, { children: D.children.map((C) => u(C, T2, D)) }) : D, m);
          }
          function i(D, T2, m) {
            Object.defineProperty(D, T2, { get: m, enumerable: false });
          }
          function l(D, T2) {
            let m = 0, C = T2.length;
            for (let o = D.position.end.offset - 1; o < C; o++) {
              let d = T2[o];
              if (d === `
` && m++, m === 1 && /\S/.test(d))
                return false;
              if (m === 2)
                return true;
            }
            return false;
          }
          function p(D) {
            switch (D.getValue().type) {
              case "tag":
              case "anchor":
              case "comment":
                return false;
            }
            let m = D.stack.length;
            for (let C = 1; C < m; C++) {
              let o = D.stack[C], d = D.stack[C - 1];
              if (Array.isArray(d) && typeof o == "number" && o !== d.length - 1)
                return false;
            }
            return true;
          }
          function y(D) {
            return s(D.children) ? y(t8(D.children)) : D;
          }
          function h2(D) {
            return D.value.trim() === "prettier-ignore";
          }
          function g(D) {
            let T2 = D.getValue();
            if (T2.type === "documentBody") {
              let m = D.getParentNode();
              return N2(m.head) && h2(t8(m.head.endComments));
            }
            return F2(T2) && h2(t8(T2.leadingComments));
          }
          function c(D) {
            return !s(D.children) && !f2(D);
          }
          function f2(D) {
            return F2(D) || _(D) || w(D) || E2(D) || N2(D);
          }
          function F2(D) {
            return s(D == null ? void 0 : D.leadingComments);
          }
          function _(D) {
            return s(D == null ? void 0 : D.middleComments);
          }
          function w(D) {
            return D == null ? void 0 : D.indicatorComment;
          }
          function E2(D) {
            return D == null ? void 0 : D.trailingComment;
          }
          function N2(D) {
            return s(D == null ? void 0 : D.endComments);
          }
          function x2(D) {
            let T2 = [], m;
            for (let C of D.split(/( +)/))
              C !== " " ? m === " " ? T2.push(C) : T2.push((T2.pop() || "") + C) : m === void 0 && T2.unshift(""), m = C;
            return m === " " && T2.push((T2.pop() || "") + " "), T2[0] === "" && (T2.shift(), T2.unshift(" " + (T2.shift() || ""))), T2;
          }
          function I2(D, T2, m) {
            let C = T2.split(`
`).map((o, d, v2) => d === 0 && d === v2.length - 1 ? o : d !== 0 && d !== v2.length - 1 ? o.trim() : d === 0 ? o.trimEnd() : o.trimStart());
            return m.proseWrap === "preserve" ? C.map((o) => o.length === 0 ? [] : [o]) : C.map((o) => o.length === 0 ? [] : x2(o)).reduce((o, d, v2) => v2 !== 0 && C[v2 - 1].length > 0 && d.length > 0 && !(D === "quoteDouble" && t8(t8(o)).endsWith("\\")) ? [...o.slice(0, -1), [...t8(o), ...d]] : [...o, d], []).map((o) => m.proseWrap === "never" ? [o.join(" ")] : o);
          }
          function P(D, T2) {
            let { parentIndent: m, isLastDescendant: C, options: o } = T2, d = D.position.start.line === D.position.end.line ? "" : o.originalText.slice(D.position.start.offset, D.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], v2;
            if (D.indent === null) {
              let B = d.match(/^(?<leadingSpace> *)[^\n\r ]/m);
              v2 = B ? B.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
            } else
              v2 = D.indent - 1 + m;
            let S2 = d.split(`
`).map((B) => B.slice(v2));
            if (o.proseWrap === "preserve" || D.type === "blockLiteral")
              return b2(S2.map((B) => B.length === 0 ? [] : [B]));
            return b2(S2.map((B) => B.length === 0 ? [] : x2(B)).reduce((B, k2, M) => M !== 0 && S2[M - 1].length > 0 && k2.length > 0 && !/^\s/.test(k2[0]) && !/^\s|\s$/.test(t8(B)) ? [...B.slice(0, -1), [...t8(B), ...k2]] : [...B, k2], []).map((B) => B.reduce((k2, M) => k2.length > 0 && /\s$/.test(t8(k2)) ? [...k2.slice(0, -1), t8(k2) + " " + M] : [...k2, M], [])).map((B) => o.proseWrap === "never" ? [B.join(" ")] : B));
            function b2(B) {
              if (D.chomping === "keep")
                return t8(B).length === 0 ? B.slice(0, -1) : B;
              let k2 = 0;
              for (let M = B.length - 1; M >= 0 && B[M].length === 0; M--)
                k2++;
              return k2 === 0 ? B : k2 >= 2 && !C ? B.slice(0, -(k2 - 1)) : B.slice(0, -k2);
            }
          }
          function $(D) {
            if (!D)
              return true;
            switch (D.type) {
              case "plain":
              case "quoteDouble":
              case "quoteSingle":
              case "alias":
              case "flowMapping":
              case "flowSequence":
                return true;
              default:
                return false;
            }
          }
          r.exports = { getLast: t8, getAncestorCount: a, isNode: n, isEmptyNode: c, isInlineNode: $, mapNode: u, defineShortcut: i, isNextLineEmpty: l, isLastDescendantNode: p, getBlockValueLineContents: P, getFlowScalarLineContents: I2, getLastDescendantNode: y, hasPrettierIgnore: g, hasLeadingComments: F2, hasMiddleComments: _, hasIndicatorComment: w, hasTrailingComment: E2, hasEndComments: N2 };
        } }), Mg = te2({ "src/language-yaml/print-preprocess.js"(e, r) {
          ne2();
          var { defineShortcut: t8, mapNode: s } = $t2();
          function a(u) {
            return s(u, n);
          }
          function n(u) {
            switch (u.type) {
              case "document":
                t8(u, "head", () => u.children[0]), t8(u, "body", () => u.children[1]);
                break;
              case "documentBody":
              case "sequenceItem":
              case "flowSequenceItem":
              case "mappingKey":
              case "mappingValue":
                t8(u, "content", () => u.children[0]);
                break;
              case "mappingItem":
              case "flowMappingItem":
                t8(u, "key", () => u.children[0]), t8(u, "value", () => u.children[1]);
                break;
            }
            return u;
          }
          r.exports = a;
        } }), Mr2 = te2({ "src/language-yaml/print/misc.js"(e, r) {
          ne2();
          var { builders: { softline: t8, align: s } } = qe2(), { hasEndComments: a, isNextLineEmpty: n, isNode: u } = $t2(), i = /* @__PURE__ */ new WeakMap();
          function l(h2, g) {
            let c = h2.getValue(), f2 = h2.stack[0], F2;
            return i.has(f2) ? F2 = i.get(f2) : (F2 = /* @__PURE__ */ new Set(), i.set(f2, F2)), !F2.has(c.position.end.line) && (F2.add(c.position.end.line), n(c, g) && !p(h2.getParentNode())) ? t8 : "";
          }
          function p(h2) {
            return a(h2) && !u(h2, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
          }
          function y(h2, g) {
            return s(" ".repeat(h2), g);
          }
          r.exports = { alignWithSpaces: y, shouldPrintEndComments: p, printNextEmptyLine: l };
        } }), Rg = te2({ "src/language-yaml/print/flow-mapping-sequence.js"(e, r) {
          ne2();
          var { builders: { ifBreak: t8, line: s, softline: a, hardline: n, join: u } } = qe2(), { isEmptyNode: i, getLast: l, hasEndComments: p } = $t2(), { printNextEmptyLine: y, alignWithSpaces: h2 } = Mr2();
          function g(f2, F2, _) {
            let w = f2.getValue(), E2 = w.type === "flowMapping", N2 = E2 ? "{" : "[", x2 = E2 ? "}" : "]", I2 = a;
            E2 && w.children.length > 0 && _.bracketSpacing && (I2 = s);
            let P = l(w.children), $ = P && P.type === "flowMappingItem" && i(P.key) && i(P.value);
            return [N2, h2(_.tabWidth, [I2, c(f2, F2, _), _.trailingComma === "none" ? "" : t8(","), p(w) ? [n, u(n, f2.map(F2, "endComments"))] : ""]), $ ? "" : I2, x2];
          }
          function c(f2, F2, _) {
            let w = f2.getValue();
            return f2.map((N2, x2) => [F2(), x2 === w.children.length - 1 ? "" : [",", s, w.children[x2].position.start.line !== w.children[x2 + 1].position.start.line ? y(N2, _.originalText) : ""]], "children");
          }
          r.exports = { printFlowMapping: g, printFlowSequence: g };
        } }), $g = te2({ "src/language-yaml/print/mapping-item.js"(e, r) {
          ne2();
          var { builders: { conditionalGroup: t8, group: s, hardline: a, ifBreak: n, join: u, line: i } } = qe2(), { hasLeadingComments: l, hasMiddleComments: p, hasTrailingComment: y, hasEndComments: h2, isNode: g, isEmptyNode: c, isInlineNode: f2 } = $t2(), { alignWithSpaces: F2 } = Mr2();
          function _(x2, I2, P, $, D) {
            let { key: T2, value: m } = x2, C = c(T2), o = c(m);
            if (C && o)
              return ": ";
            let d = $("key"), v2 = E2(x2) ? " " : "";
            if (o)
              return x2.type === "flowMappingItem" && I2.type === "flowMapping" ? d : x2.type === "mappingItem" && w(T2.content, D) && !y(T2.content) && (!I2.tag || I2.tag.value !== "tag:yaml.org,2002:set") ? [d, v2, ":"] : ["? ", F2(2, d)];
            let S2 = $("value");
            if (C)
              return [": ", F2(2, S2)];
            if (l(m) || !f2(T2.content))
              return ["? ", F2(2, d), a, u("", P.map($, "value", "leadingComments").map((q) => [q, a])), ": ", F2(2, S2)];
            if (N2(T2.content) && !l(T2.content) && !p(T2.content) && !y(T2.content) && !h2(T2) && !l(m.content) && !p(m.content) && !h2(m) && w(m.content, D))
              return [d, v2, ": ", S2];
            let b2 = Symbol("mappingKey"), B = s([n("? "), s(F2(2, d), { id: b2 })]), k2 = [a, ": ", F2(2, S2)], M = [v2, ":"];
            l(m.content) || h2(m) && m.content && !g(m.content, ["mapping", "sequence"]) || I2.type === "mapping" && y(T2.content) && f2(m.content) || g(m.content, ["mapping", "sequence"]) && m.content.tag === null && m.content.anchor === null ? M.push(a) : m.content && M.push(i), M.push(S2);
            let R2 = F2(D.tabWidth, M);
            return w(T2.content, D) && !l(T2.content) && !p(T2.content) && !h2(T2) ? t8([[d, R2]]) : t8([[B, n(k2, R2, { groupId: b2 })]]);
          }
          function w(x2, I2) {
            if (!x2)
              return true;
            switch (x2.type) {
              case "plain":
              case "quoteSingle":
              case "quoteDouble":
                break;
              case "alias":
                return true;
              default:
                return false;
            }
            if (I2.proseWrap === "preserve")
              return x2.position.start.line === x2.position.end.line;
            if (/\\$/m.test(I2.originalText.slice(x2.position.start.offset, x2.position.end.offset)))
              return false;
            switch (I2.proseWrap) {
              case "never":
                return !x2.value.includes(`
`);
              case "always":
                return !/[\n ]/.test(x2.value);
              default:
                return false;
            }
          }
          function E2(x2) {
            return x2.key.content && x2.key.content.type === "alias";
          }
          function N2(x2) {
            if (!x2)
              return true;
            switch (x2.type) {
              case "plain":
              case "quoteDouble":
              case "quoteSingle":
                return x2.position.start.line === x2.position.end.line;
              case "alias":
                return true;
              default:
                return false;
            }
          }
          r.exports = _;
        } }), Vg = te2({ "src/language-yaml/print/block.js"(e, r) {
          ne2();
          var { builders: { dedent: t8, dedentToRoot: s, fill: a, hardline: n, join: u, line: i, literalline: l, markAsRoot: p }, utils: { getDocParts: y } } = qe2(), { getAncestorCount: h2, getBlockValueLineContents: g, hasIndicatorComment: c, isLastDescendantNode: f2, isNode: F2 } = $t2(), { alignWithSpaces: _ } = Mr2();
          function w(E2, N2, x2) {
            let I2 = E2.getValue(), P = h2(E2, (C) => F2(C, ["sequence", "mapping"])), $ = f2(E2), D = [I2.type === "blockFolded" ? ">" : "|"];
            I2.indent !== null && D.push(I2.indent.toString()), I2.chomping !== "clip" && D.push(I2.chomping === "keep" ? "+" : "-"), c(I2) && D.push(" ", N2("indicatorComment"));
            let T2 = g(I2, { parentIndent: P, isLastDescendant: $, options: x2 }), m = [];
            for (let [C, o] of T2.entries())
              C === 0 && m.push(n), m.push(a(y(u(i, o)))), C !== T2.length - 1 ? m.push(o.length === 0 ? n : p(l)) : I2.chomping === "keep" && $ && m.push(s(o.length === 0 ? n : l));
            return I2.indent === null ? D.push(t8(_(x2.tabWidth, m))) : D.push(s(_(I2.indent - 1 + P, m))), D;
          }
          r.exports = w;
        } }), Wg = te2({ "src/language-yaml/printer-yaml.js"(e, r) {
          ne2();
          var { builders: { breakParent: t8, fill: s, group: a, hardline: n, join: u, line: i, lineSuffix: l, literalline: p }, utils: { getDocParts: y, replaceTextEndOfLine: h2 } } = qe2(), { isPreviousLineEmpty: g } = Ue2(), { insertPragma: c, isPragma: f2 } = Og(), { locStart: F2 } = jg(), _ = qg(), { getFlowScalarLineContents: w, getLastDescendantNode: E2, hasLeadingComments: N2, hasMiddleComments: x2, hasTrailingComment: I2, hasEndComments: P, hasPrettierIgnore: $, isLastDescendantNode: D, isNode: T2, isInlineNode: m } = $t2(), C = Mg(), { alignWithSpaces: o, printNextEmptyLine: d, shouldPrintEndComments: v2 } = Mr2(), { printFlowMapping: S2, printFlowSequence: b2 } = Rg(), B = $g(), k2 = Vg();
          function M(j2, Y2, ie2) {
            let ee2 = j2.getValue(), ce2 = [];
            ee2.type !== "mappingValue" && N2(ee2) && ce2.push([u(n, j2.map(ie2, "leadingComments")), n]);
            let { tag: W2, anchor: K2 } = ee2;
            W2 && ce2.push(ie2("tag")), W2 && K2 && ce2.push(" "), K2 && ce2.push(ie2("anchor"));
            let de2 = "";
            T2(ee2, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !D(j2) && (de2 = d(j2, Y2.originalText)), (W2 || K2) && (T2(ee2, ["sequence", "mapping"]) && !x2(ee2) ? ce2.push(n) : ce2.push(" ")), x2(ee2) && ce2.push([ee2.middleComments.length === 1 ? "" : n, u(n, j2.map(ie2, "middleComments")), n]);
            let ue2 = j2.getParentNode();
            return $(j2) ? ce2.push(h2(Y2.originalText.slice(ee2.position.start.offset, ee2.position.end.offset).trimEnd(), p)) : ce2.push(a(R2(ee2, ue2, j2, Y2, ie2))), I2(ee2) && !T2(ee2, ["document", "documentHead"]) && ce2.push(l([ee2.type === "mappingValue" && !ee2.content ? "" : " ", ue2.type === "mappingKey" && j2.getParentNode(2).type === "mapping" && m(ee2) ? "" : t8, ie2("trailingComment")])), v2(ee2) && ce2.push(o(ee2.type === "sequenceItem" ? 2 : 0, [n, u(n, j2.map((Fe2) => [g(Y2.originalText, Fe2.getValue(), F2) ? n : "", ie2()], "endComments"))])), ce2.push(de2), ce2;
          }
          function R2(j2, Y2, ie2, ee2, ce2) {
            switch (j2.type) {
              case "root": {
                let { children: W2 } = j2, K2 = [];
                ie2.each((ue2, Fe2) => {
                  let z2 = W2[Fe2], U2 = W2[Fe2 + 1];
                  Fe2 !== 0 && K2.push(n), K2.push(ce2()), J2(z2, U2) ? (K2.push(n, "..."), I2(z2) && K2.push(" ", ce2("trailingComment"))) : U2 && !I2(U2.head) && K2.push(n, "---");
                }, "children");
                let de2 = E2(j2);
                return (!T2(de2, ["blockLiteral", "blockFolded"]) || de2.chomping !== "keep") && K2.push(n), K2;
              }
              case "document": {
                let W2 = Y2.children[ie2.getName() + 1], K2 = [];
                return L2(j2, W2, Y2, ee2) === "head" && ((j2.head.children.length > 0 || j2.head.endComments.length > 0) && K2.push(ce2("head")), I2(j2.head) ? K2.push(["---", " ", ce2(["head", "trailingComment"])]) : K2.push("---")), q(j2) && K2.push(ce2("body")), u(n, K2);
              }
              case "documentHead":
                return u(n, [...ie2.map(ce2, "children"), ...ie2.map(ce2, "endComments")]);
              case "documentBody": {
                let { children: W2, endComments: K2 } = j2, de2 = "";
                if (W2.length > 0 && K2.length > 0) {
                  let ue2 = E2(j2);
                  T2(ue2, ["blockFolded", "blockLiteral"]) ? ue2.chomping !== "keep" && (de2 = [n, n]) : de2 = n;
                }
                return [u(n, ie2.map(ce2, "children")), de2, u(n, ie2.map(ce2, "endComments"))];
              }
              case "directive":
                return ["%", u(" ", [j2.name, ...j2.parameters])];
              case "comment":
                return ["#", j2.value];
              case "alias":
                return ["*", j2.value];
              case "tag":
                return ee2.originalText.slice(j2.position.start.offset, j2.position.end.offset);
              case "anchor":
                return ["&", j2.value];
              case "plain":
                return Q2(j2.type, ee2.originalText.slice(j2.position.start.offset, j2.position.end.offset), ee2);
              case "quoteDouble":
              case "quoteSingle": {
                let W2 = "'", K2 = '"', de2 = ee2.originalText.slice(j2.position.start.offset + 1, j2.position.end.offset - 1);
                if (j2.type === "quoteSingle" && de2.includes("\\") || j2.type === "quoteDouble" && /\\[^"]/.test(de2)) {
                  let Fe2 = j2.type === "quoteDouble" ? K2 : W2;
                  return [Fe2, Q2(j2.type, de2, ee2), Fe2];
                }
                if (de2.includes(K2))
                  return [W2, Q2(j2.type, j2.type === "quoteDouble" ? de2.replace(/\\"/g, K2).replace(/'/g, W2.repeat(2)) : de2, ee2), W2];
                if (de2.includes(W2))
                  return [K2, Q2(j2.type, j2.type === "quoteSingle" ? de2.replace(/''/g, W2) : de2, ee2), K2];
                let ue2 = ee2.singleQuote ? W2 : K2;
                return [ue2, Q2(j2.type, de2, ee2), ue2];
              }
              case "blockFolded":
              case "blockLiteral":
                return k2(ie2, ce2, ee2);
              case "mapping":
              case "sequence":
                return u(n, ie2.map(ce2, "children"));
              case "sequenceItem":
                return ["- ", o(2, j2.content ? ce2("content") : "")];
              case "mappingKey":
              case "mappingValue":
                return j2.content ? ce2("content") : "";
              case "mappingItem":
              case "flowMappingItem":
                return B(j2, Y2, ie2, ce2, ee2);
              case "flowMapping":
                return S2(ie2, ce2, ee2);
              case "flowSequence":
                return b2(ie2, ce2, ee2);
              case "flowSequenceItem":
                return ce2("content");
              default:
                throw new Error(`Unexpected node type ${j2.type}`);
            }
          }
          function q(j2) {
            return j2.body.children.length > 0 || P(j2.body);
          }
          function J2(j2, Y2) {
            return I2(j2) || Y2 && (Y2.head.children.length > 0 || P(Y2.head));
          }
          function L2(j2, Y2, ie2, ee2) {
            return ie2.children[0] === j2 && /---(?:\s|$)/.test(ee2.originalText.slice(F2(j2), F2(j2) + 4)) || j2.head.children.length > 0 || P(j2.head) || I2(j2.head) ? "head" : J2(j2, Y2) ? false : Y2 ? "root" : false;
          }
          function Q2(j2, Y2, ie2) {
            let ee2 = w(j2, Y2, ie2);
            return u(n, ee2.map((ce2) => s(y(u(i, ce2)))));
          }
          function V2(j2, Y2) {
            if (T2(Y2))
              switch (delete Y2.position, Y2.type) {
                case "comment":
                  if (f2(Y2.value))
                    return null;
                  break;
                case "quoteDouble":
                case "quoteSingle":
                  Y2.type = "quote";
                  break;
              }
          }
          r.exports = { preprocess: C, embed: _, print: M, massageAstNode: V2, insertPragma: c };
        } }), Hg = te2({ "src/language-yaml/options.js"(e, r) {
          ne2();
          var t8 = Mt2();
          r.exports = { bracketSpacing: t8.bracketSpacing, singleQuote: t8.singleQuote, proseWrap: t8.proseWrap };
        } }), Gg = te2({ "src/language-yaml/parsers.js"() {
          ne2();
        } }), Ug = te2({ "node_modules/linguist-languages/data/YAML.json"(e, r) {
          r.exports = { name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 };
        } }), Jg = te2({ "src/language-yaml/index.js"(e, r) {
          ne2();
          var t8 = _t2(), s = Wg(), a = Hg(), n = Gg(), u = [t8(Ug(), (i) => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...i.filenames.filter((l) => l !== "yarn.lock"), ".prettierrc", ".stylelintrc", ".lintstagedrc"] }))];
          r.exports = { languages: u, printers: { yaml: s }, options: a, parsers: n };
        } }), zg = te2({ "src/languages.js"(e, r) {
          ne2(), r.exports = [Bd(), Ud(), eg(), ag(), dg(), Lg(), Jg()];
        } });
        ne2();
        var { version: Xg } = Ia(), Ot2 = Gm(), { getSupportInfo: Kg } = Xn2(), Yg = Um(), Qg = zg(), Zg = qe2();
        function Nt2(e) {
          let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return function() {
            for (var t8 = arguments.length, s = new Array(t8), a = 0; a < t8; a++)
              s[a] = arguments[a];
            let n = s[r] || {}, u = n.plugins || [];
            return s[r] = Object.assign(Object.assign({}, n), {}, { plugins: [...Qg, ...Array.isArray(u) ? u : Object.values(u)] }), e(...s);
          };
        }
        var jn2 = Nt2(Ot2.formatWithCursor);
        jo.exports = { formatWithCursor: jn2, format(e, r) {
          return jn2(e, r).formatted;
        }, check(e, r) {
          let { formatted: t8 } = jn2(e, r);
          return t8 === e;
        }, doc: Zg, getSupportInfo: Nt2(Kg, 0), version: Xg, util: Yg, __debug: { parse: Nt2(Ot2.parse), formatAST: Nt2(Ot2.formatAST), formatDoc: Nt2(Ot2.formatDoc), printToDoc: Nt2(Ot2.printToDoc), printDocToString: Nt2(Ot2.printDocToString) } };
      });
      return e0();
    });
  }
});
var Ks = Object.defineProperty;
var Yr = (t8, e) => {
  for (var r in e)
    Ks(t8, r, { get: e[r], enumerable: true });
};
var jr = (t8, e, r) => {
  if (!e.has(t8))
    throw TypeError("Cannot " + r);
};
var Q = (t8, e, r) => (jr(t8, e, "read from private field"), r ? r.call(t8) : e.get(t8));
var Kr = (t8, e, r) => {
  if (e.has(t8))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t8) : e.set(t8, r);
};
var Qr = (t8, e, r, n) => (jr(t8, e, "write to private field"), n ? n.call(t8, r) : e.set(t8, r), r);
var Ur = {};
Yr(Ur, { languages: () => zs, options: () => Ys, parsers: () => Hr, printers: () => To });
var Qs = (t8, e, r, n) => {
  if (!(t8 && e == null))
    return e.replaceAll ? e.replaceAll(r, n) : r.global ? e.replace(r, n) : e.split(r).join(n);
};
var v = Qs;
var we = "string";
var be = "array";
var Te = "cursor";
var oe = "indent";
var ue = "align";
var xe = "trim";
var ee = "group";
var le = "fill";
var ce = "if-break";
var pe = "indent-if-break";
var ke = "line-suffix";
var Be = "line-suffix-boundary";
var G = "line";
var Le = "label";
var he = "break-parent";
var ft = /* @__PURE__ */ new Set([Te, oe, ue, xe, ee, le, ce, pe, ke, Be, G, Le, he]);
function Xs(t8) {
  if (typeof t8 == "string")
    return we;
  if (Array.isArray(t8))
    return be;
  if (!t8)
    return;
  let { type: e } = t8;
  if (ft.has(e))
    return e;
}
var Fe = Xs;
var Js = (t8) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t8);
function Zs(t8) {
  let e = t8 === null ? "null" : typeof t8;
  if (e !== "string" && e !== "object")
    return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (Fe(t8))
    throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(t8);
  if (r !== "[object Object]")
    return `Unexpected doc '${r}'.`;
  let n = Js([...ft].map((s) => `'${s}'`));
  return `Unexpected doc.type '${t8.type}'.
Expected it to be ${n}.`;
}
var rr = class extends Error {
  name = "InvalidDocError";
  constructor(e) {
    super(Zs(e)), this.doc = e;
  }
};
var mt = rr;
var Xr = () => {
};
var dt = Xr;
function R(t8) {
  return { type: oe, contents: t8 };
}
function Jr(t8, e) {
  return { type: ue, contents: e, n: t8 };
}
function E(t8, e = {}) {
  return dt(e.expandedStates), { type: ee, id: e.id, contents: t8, break: !!e.shouldBreak, expandedStates: e.expandedStates };
}
function Zr(t8) {
  return Jr(Number.NEGATIVE_INFINITY, t8);
}
function en(t8) {
  return Jr({ type: "root" }, t8);
}
function gt(t8) {
  return { type: le, parts: t8 };
}
function fe(t8, e = "", r = {}) {
  return { type: ce, breakContents: t8, flatContents: e, groupId: r.groupId };
}
function tn(t8, e) {
  return { type: pe, contents: t8, groupId: e.groupId, negate: e.negate };
}
var re = { type: he };
var ei = { type: G, hard: true };
var ti = { type: G, hard: true, literal: true };
var A = { type: G };
var b = { type: G, soft: true };
var S = [ei, re];
var rn = [ti, re];
function Y(t8, e) {
  let r = [];
  for (let n = 0; n < e.length; n++)
    n !== 0 && r.push(t8), r.push(e[n]);
  return r;
}
var ri = (t8, e, r) => {
  if (!(t8 && e == null))
    return Array.isArray(e) || typeof e == "string" ? e[r < 0 ? e.length + r : r] : e.at(r);
};
var me = ri;
function Ct(t8, e) {
  if (typeof t8 == "string")
    return e(t8);
  let r = /* @__PURE__ */ new Map();
  return n(t8);
  function n(i) {
    if (r.has(i))
      return r.get(i);
    let a = s(i);
    return r.set(i, a), a;
  }
  function s(i) {
    switch (Fe(i)) {
      case be:
        return e(i.map(n));
      case le:
        return e({ ...i, parts: i.parts.map(n) });
      case ce:
        return e({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case ee: {
        let { expandedStates: a, contents: o } = i;
        return a ? (a = a.map(n), o = a[0]) : o = n(o), e({ ...i, contents: o, expandedStates: a });
      }
      case ue:
      case oe:
      case pe:
      case Le:
      case ke:
        return e({ ...i, contents: n(i.contents) });
      case we:
      case Te:
      case xe:
      case Be:
      case G:
      case he:
        return e(i);
      default:
        throw new mt(i);
    }
  }
}
function ni(t8) {
  switch (Fe(t8)) {
    case le:
      if (t8.parts.every((e) => e === ""))
        return "";
      break;
    case ee:
      if (!t8.contents && !t8.id && !t8.break && !t8.expandedStates)
        return "";
      if (t8.contents.type === ee && t8.contents.id === t8.id && t8.contents.break === t8.break && t8.contents.expandedStates === t8.expandedStates)
        return t8.contents;
      break;
    case ue:
    case oe:
    case pe:
    case ke:
      if (!t8.contents)
        return "";
      break;
    case ce:
      if (!t8.flatContents && !t8.breakContents)
        return "";
      break;
    case be: {
      let e = [];
      for (let r of t8) {
        if (!r)
          continue;
        let [n, ...s] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof me(false, e, -1) == "string" ? e[e.length - 1] += n : e.push(n), e.push(...s);
      }
      return e.length === 0 ? "" : e.length === 1 ? e[0] : e;
    }
    case we:
    case Te:
    case xe:
    case Be:
    case G:
    case Le:
    case he:
      break;
    default:
      throw new mt(t8);
  }
  return t8;
}
function nn(t8) {
  return Ct(t8, (e) => ni(e));
}
function T(t8, e = rn) {
  return Ct(t8, (r) => typeof r == "string" ? Y(e, r.split(`
`)) : r);
}
var nr = class extends Error {
  name = "UnexpectedNodeError";
  constructor(e, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(e[n])}.`), this.node = e;
  }
};
var sn = nr;
var St = "'";
var an = '"';
function si(t8, e) {
  let r = e === true || e === St ? St : an, n = r === St ? an : St, s = 0, i = 0;
  for (let a of t8)
    a === r ? s++ : a === n && i++;
  return s > i ? n : r;
}
var on = si;
function sr(t8) {
  if (typeof t8 != "string")
    throw new TypeError("Expected a string");
  return t8.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var O;
var ir = class {
  constructor(e) {
    Kr(this, O, void 0);
    Qr(this, O, new Set(e));
  }
  getLeadingWhitespaceCount(e) {
    let r = Q(this, O), n = 0;
    for (let s = 0; s < e.length && r.has(e.charAt(s)); s++)
      n++;
    return n;
  }
  getTrailingWhitespaceCount(e) {
    let r = Q(this, O), n = 0;
    for (let s = e.length - 1; s >= 0 && r.has(e.charAt(s)); s--)
      n++;
    return n;
  }
  getLeadingWhitespace(e) {
    let r = this.getLeadingWhitespaceCount(e);
    return e.slice(0, r);
  }
  getTrailingWhitespace(e) {
    let r = this.getTrailingWhitespaceCount(e);
    return e.slice(e.length - r);
  }
  hasLeadingWhitespace(e) {
    return Q(this, O).has(e.charAt(0));
  }
  hasTrailingWhitespace(e) {
    return Q(this, O).has(me(false, e, -1));
  }
  trimStart(e) {
    let r = this.getLeadingWhitespaceCount(e);
    return e.slice(r);
  }
  trimEnd(e) {
    let r = this.getTrailingWhitespaceCount(e);
    return e.slice(0, e.length - r);
  }
  trim(e) {
    return this.trimEnd(this.trimStart(e));
  }
  split(e, r = false) {
    let n = `[${sr([...Q(this, O)].join(""))}]+`, s = new RegExp(r ? `(${n})` : n);
    return e.split(s);
  }
  hasWhitespaceCharacter(e) {
    let r = Q(this, O);
    return Array.prototype.some.call(e, (n) => r.has(n));
  }
  hasNonWhitespaceCharacter(e) {
    let r = Q(this, O);
    return Array.prototype.some.call(e, (n) => !r.has(n));
  }
  isWhitespaceOnly(e) {
    let r = Q(this, O);
    return Array.prototype.every.call(e, (n) => r.has(n));
  }
};
O = /* @__PURE__ */ new WeakMap();
var un = ir;
var ii = ["	", `
`, "\f", "\r", " "];
var ai = new un(ii);
var H = ai;
function oi(t8) {
  return (t8 == null ? void 0 : t8.type) === "front-matter";
}
var Pe = oi;
var ui = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens"]);
var li = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function ln(t8, e) {
  var r;
  if (t8.type === "text" || t8.type === "comment" || Pe(t8) || t8.type === "yaml" || t8.type === "toml")
    return null;
  if (t8.type === "attribute" && delete e.value, t8.type === "docType" && delete e.value, t8.type === "angularControlFlowBlock" && ((r = e.parameters) != null && r.children))
    for (let n of e.parameters.children)
      li.has(t8.name) ? delete n.expression : n.expression = n.expression.trim();
}
ln.ignoredProperties = ui;
var cn = ln;
var ci = (t8) => String(t8).split(/[/\\]/).pop();
function pn(t8, e) {
  if (!e)
    return;
  let r = ci(e).toLowerCase();
  return t8.find((n) => {
    var s, i;
    return ((s = n.extensions) == null ? void 0 : s.some((a) => r.endsWith(a))) || ((i = n.filenames) == null ? void 0 : i.some((a) => a.toLowerCase() === r));
  });
}
function pi(t8, e) {
  if (e)
    return t8.find(({ name: r }) => r.toLowerCase() === e) ?? t8.find(({ aliases: r }) => r == null ? void 0 : r.includes(e)) ?? t8.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${e}`));
}
function hi(t8, e) {
  let r = t8.plugins.flatMap((s) => s.languages ?? []), n = pi(r, e.language) ?? pn(r, e.physicalFile) ?? pn(r, e.file) ?? (e.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var Ne = hi;
var hn = "inline";
var fn = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", marquee: "inline-block", source: "block", track: "block", details: "block", summary: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" };
var mn = "normal";
var dn = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function fi(t8) {
  return t8.type === "element" && !t8.hasExplicitNamespace && !["html", "svg"].includes(t8.namespace);
}
var de = fi;
var mi = (t8) => v(false, t8, /^[\t\f\r ]*\n/g, "");
var ar = (t8) => mi(H.trimEnd(t8));
var gn = (t8) => {
  let e = t8, r = H.getLeadingWhitespace(e);
  r && (e = e.slice(r.length));
  let n = H.getTrailingWhitespace(e);
  return n && (e = e.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: e };
};
function _t(t8, e) {
  return !!(t8.type === "ieConditionalComment" && t8.lastChild && !t8.lastChild.isSelfClosing && !t8.lastChild.endSourceSpan || t8.type === "ieConditionalComment" && !t8.complete || ge(t8) && t8.children.some((r) => r.type !== "text" && r.type !== "interpolation") || Dt(t8, e) && !V(t8) && t8.type !== "interpolation");
}
function Ge(t8) {
  return t8.type === "attribute" || !t8.parent || !t8.prev ? false : di(t8.prev);
}
function di(t8) {
  return t8.type === "comment" && t8.value.trim() === "prettier-ignore";
}
function N(t8) {
  return t8.type === "text" || t8.type === "comment";
}
function V(t8) {
  return t8.type === "element" && (t8.fullName === "script" || t8.fullName === "style" || t8.fullName === "svg:style" || t8.fullName === "svg:script" || de(t8) && (t8.name === "script" || t8.name === "style"));
}
function Cn(t8) {
  return t8.children && !V(t8);
}
function Sn(t8) {
  return V(t8) || t8.type === "interpolation" || or(t8);
}
function or(t8) {
  return kn(t8).startsWith("pre");
}
function _n(t8, e) {
  var s, i;
  let r = n();
  if (r && !t8.prev && ((i = (s = t8.parent) == null ? void 0 : s.tagDefinition) != null && i.ignoreFirstLf))
    return t8.type === "interpolation";
  return r;
  function n() {
    return Pe(t8) || t8.type === "angularControlFlowBlock" ? false : (t8.type === "text" || t8.type === "interpolation") && t8.prev && (t8.prev.type === "text" || t8.prev.type === "interpolation") ? true : !t8.parent || t8.parent.cssDisplay === "none" ? false : ge(t8.parent) ? true : !(!t8.prev && (t8.parent.type === "root" || ge(t8) && t8.parent || V(t8.parent) || Ke(t8.parent, e) || !Ai(t8.parent.cssDisplay)) || t8.prev && !yi(t8.prev.cssDisplay));
  }
}
function En(t8, e) {
  return Pe(t8) || t8.type === "angularControlFlowBlock" ? false : (t8.type === "text" || t8.type === "interpolation") && t8.next && (t8.next.type === "text" || t8.next.type === "interpolation") ? true : !t8.parent || t8.parent.cssDisplay === "none" ? false : ge(t8.parent) ? true : !(!t8.next && (t8.parent.type === "root" || ge(t8) && t8.parent || V(t8.parent) || Ke(t8.parent, e) || !Di(t8.parent.cssDisplay)) || t8.next && !vi(t8.next.cssDisplay));
}
function An(t8) {
  return wi(t8.cssDisplay) && !V(t8);
}
function Ye(t8) {
  return Pe(t8) || t8.next && t8.sourceSpan.end && t8.sourceSpan.end.line + 1 < t8.next.sourceSpan.start.line;
}
function Dn(t8) {
  return ur(t8) || t8.type === "element" && t8.children.length > 0 && (["body", "script", "style"].includes(t8.name) || t8.children.some((e) => Ci(e))) || t8.firstChild && t8.firstChild === t8.lastChild && t8.firstChild.type !== "text" && yn(t8.firstChild) && (!t8.lastChild.isTrailingSpaceSensitive || wn(t8.lastChild));
}
function ur(t8) {
  return t8.type === "element" && t8.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(t8.name) || t8.cssDisplay.startsWith("table") && t8.cssDisplay !== "table-cell");
}
function Et(t8) {
  return bn(t8) || t8.prev && gi(t8.prev) || vn(t8);
}
function gi(t8) {
  return bn(t8) || t8.type === "element" && t8.fullName === "br" || vn(t8);
}
function vn(t8) {
  return yn(t8) && wn(t8);
}
function yn(t8) {
  return t8.hasLeadingSpaces && (t8.prev ? t8.prev.sourceSpan.end.line < t8.sourceSpan.start.line : t8.parent.type === "root" || t8.parent.startSourceSpan.end.line < t8.sourceSpan.start.line);
}
function wn(t8) {
  return t8.hasTrailingSpaces && (t8.next ? t8.next.sourceSpan.start.line > t8.sourceSpan.end.line : t8.parent.type === "root" || t8.parent.endSourceSpan && t8.parent.endSourceSpan.start.line > t8.sourceSpan.end.line);
}
function bn(t8) {
  switch (t8.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(t8.name);
  }
  return false;
}
function At(t8) {
  return t8.lastChild ? At(t8.lastChild) : t8;
}
function Ci(t8) {
  var e;
  return (e = t8.children) == null ? void 0 : e.some((r) => r.type !== "text");
}
function Tn(t8) {
  if (t8)
    switch (t8) {
      case "module":
      case "text/javascript":
      case "text/babel":
      case "application/javascript":
        return "babel";
      case "application/x-typescript":
        return "typescript";
      case "text/markdown":
        return "markdown";
      case "text/html":
        return "html";
      case "text/x-handlebars-template":
        return "glimmer";
      default:
        if (t8.endsWith("json") || t8.endsWith("importmap") || t8 === "speculationrules")
          return "json";
    }
}
function Si(t8, e) {
  let { name: r, attrMap: n } = t8;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src"))
    return;
  let { type: s, lang: i } = t8.attrMap;
  return !i && !s ? "babel" : Ne(e, { language: i }) ?? Tn(s);
}
function _i(t8, e) {
  if (!Dt(t8, e))
    return;
  let { attrMap: r } = t8;
  if (Object.prototype.hasOwnProperty.call(r, "src"))
    return;
  let { type: n, lang: s } = r;
  return Ne(e, { language: s }) ?? Tn(n);
}
function Ei(t8, e) {
  if (t8.name !== "style")
    return;
  let { lang: r } = t8.attrMap;
  return r ? Ne(e, { language: r }) : "css";
}
function lr(t8, e) {
  return Si(t8, e) ?? Ei(t8, e) ?? _i(t8, e);
}
function je(t8) {
  return t8 === "block" || t8 === "list-item" || t8.startsWith("table");
}
function Ai(t8) {
  return !je(t8) && t8 !== "inline-block";
}
function Di(t8) {
  return !je(t8) && t8 !== "inline-block";
}
function vi(t8) {
  return !je(t8);
}
function yi(t8) {
  return !je(t8);
}
function wi(t8) {
  return !je(t8) && t8 !== "inline-block";
}
function ge(t8) {
  return kn(t8).startsWith("pre");
}
function bi(t8, e) {
  let r = t8;
  for (; r; ) {
    if (e(r))
      return true;
    r = r.parent;
  }
  return false;
}
function xn(t8, e) {
  var n;
  if (Ce(t8, e))
    return "block";
  if (((n = t8.prev) == null ? void 0 : n.type) === "comment") {
    let s = t8.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
    if (s)
      return s[1];
  }
  let r = false;
  if (t8.type === "element" && t8.namespace === "svg")
    if (bi(t8, (s) => s.fullName === "svg:foreignObject"))
      r = true;
    else
      return t8.name === "svg" ? "inline-block" : "block";
  switch (e.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return t8.type === "element" && (!t8.namespace || r || de(t8)) && fn[t8.name] || hn;
  }
}
function kn(t8) {
  return t8.type === "element" && (!t8.namespace || de(t8)) && dn[t8.name] || mn;
}
function Ti(t8) {
  let e = Number.POSITIVE_INFINITY;
  for (let r of t8.split(`
`)) {
    if (r.length === 0)
      continue;
    let n = H.getLeadingWhitespaceCount(r);
    if (n === 0)
      return 0;
    r.length !== n && n < e && (e = n);
  }
  return e === Number.POSITIVE_INFINITY ? 0 : e;
}
function cr(t8, e = Ti(t8)) {
  return e === 0 ? t8 : t8.split(`
`).map((r) => r.slice(e)).join(`
`);
}
function pr(t8) {
  return v(false, v(false, t8, "&apos;", "'"), "&quot;", '"');
}
function L(t8) {
  return pr(t8.value);
}
var xi = /* @__PURE__ */ new Set(["template", "style", "script"]);
function Ke(t8, e) {
  return Ce(t8, e) && !xi.has(t8.fullName);
}
function Ce(t8, e) {
  return e.parser === "vue" && t8.type === "element" && t8.parent.type === "root" && t8.fullName.toLowerCase() !== "html";
}
function Dt(t8, e) {
  return Ce(t8, e) && (Ke(t8, e) || t8.attrMap.lang && t8.attrMap.lang !== "html");
}
function Bn(t8) {
  let e = t8.fullName;
  return e.charAt(0) === "#" || e === "slot-scope" || e === "v-slot" || e.startsWith("v-slot:");
}
function Ln(t8, e) {
  let r = t8.parent;
  if (!Ce(r, e))
    return false;
  let n = r.fullName, s = t8.fullName;
  return n === "script" && s === "setup" || n === "style" && s === "vars";
}
function vt(t8, e = t8.value) {
  return t8.parent.isWhitespaceSensitive ? t8.parent.isIndentationSensitive ? T(e) : T(cr(ar(e)), S) : Y(A, H.split(e));
}
function yt(t8, e) {
  return Ce(t8, e) && t8.name === "script";
}
function wt(t8) {
  return t8 >= 9 && t8 <= 32 || t8 == 160;
}
function hr(t8) {
  return 48 <= t8 && t8 <= 57;
}
function bt(t8) {
  return t8 >= 97 && t8 <= 122 || t8 >= 65 && t8 <= 90;
}
function Fn(t8) {
  return t8 >= 97 && t8 <= 102 || t8 >= 65 && t8 <= 70 || hr(t8);
}
function fr(t8) {
  return t8 === 10 || t8 === 13;
}
function mr(t8) {
  return 48 <= t8 && t8 <= 55;
}
function dr(t8) {
  return t8 === 39 || t8 === 34 || t8 === 96;
}
var ki = /-+([a-z0-9])/g;
function Nn(t8) {
  return t8.replace(ki, (...e) => e[1].toUpperCase());
}
var ne = class t {
  constructor(e, r, n, s) {
    this.file = e, this.offset = r, this.line = n, this.col = s;
  }
  toString() {
    return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
  moveBy(e) {
    let r = this.file.content, n = r.length, s = this.offset, i = this.line, a = this.col;
    for (; s > 0 && e < 0; )
      if (s--, e++, r.charCodeAt(s) == 10) {
        i--;
        let u = r.substring(0, s - 1).lastIndexOf(String.fromCharCode(10));
        a = u > 0 ? s - u : s;
      } else
        a--;
    for (; s < n && e > 0; ) {
      let o = r.charCodeAt(s);
      s++, e--, o == 10 ? (i++, a = 0) : a++;
    }
    return new t(this.file, s, i, a);
  }
  getContext(e, r) {
    let n = this.file.content, s = this.offset;
    if (s != null) {
      s > n.length - 1 && (s = n.length - 1);
      let i = s, a = 0, o = 0;
      for (; a < e && s > 0 && (s--, a++, !(n[s] == `
` && ++o == r)); )
        ;
      for (a = 0, o = 0; a < e && i < n.length - 1 && (i++, a++, !(n[i] == `
` && ++o == r)); )
        ;
      return { before: n.substring(s, this.offset), after: n.substring(this.offset, i + 1) };
    }
    return null;
  }
};
var Se = class {
  constructor(e, r) {
    this.content = e, this.url = r;
  }
};
var f = class {
  constructor(e, r, n = e, s = null) {
    this.start = e, this.end = r, this.fullStart = n, this.details = s;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
};
var Tt;
(function(t8) {
  t8[t8.WARNING = 0] = "WARNING", t8[t8.ERROR = 1] = "ERROR";
})(Tt || (Tt = {}));
var Re = class {
  constructor(e, r, n = Tt.ERROR) {
    this.span = e, this.msg = r, this.level = n;
  }
  contextualMessage() {
    let e = this.span.start.getContext(100, 3);
    return e ? `${this.msg} ("${e.before}[${Tt[this.level]} ->]${e.after}")` : this.msg;
  }
  toString() {
    let e = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e}`;
  }
};
var Bi = [Fi, Pi, Ii, $i, Oi, Hi, Mi, qi, Vi, Ri];
function Li(t8, e) {
  for (let r of Bi)
    r(t8, e);
  return t8;
}
function Fi(t8) {
  t8.walk((e) => {
    if (e.type === "element" && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && e.children[0].type === "text" && e.children[0].value[0] === `
`) {
      let r = e.children[0];
      r.value.length === 1 ? e.removeChild(r) : r.value = r.value.slice(1);
    }
  });
}
function Pi(t8) {
  let e = (r) => {
    var n, s;
    return r.type === "element" && ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && ((s = r.firstChild) == null ? void 0 : s.type) === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  };
  t8.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let s = r.children[n];
        if (!e(s))
          continue;
        let i = s.prev, a = s.firstChild;
        r.removeChild(i), n--;
        let o = new f(i.sourceSpan.start, a.sourceSpan.end), u = new f(o.start, s.sourceSpan.end);
        s.condition = i.condition, s.sourceSpan = u, s.startSourceSpan = o, s.removeChild(a);
      }
  });
}
function Ni(t8, e, r) {
  t8.walk((n) => {
    if (n.children)
      for (let s = 0; s < n.children.length; s++) {
        let i = n.children[s];
        if (i.type !== "text" && !e(i))
          continue;
        i.type !== "text" && (i.type = "text", i.value = r(i));
        let a = i.prev;
        !a || a.type !== "text" || (a.value += i.value, a.sourceSpan = new f(a.sourceSpan.start, i.sourceSpan.end), n.removeChild(i), s--);
      }
  });
}
function Ii(t8) {
  return Ni(t8, (e) => e.type === "cdata", (e) => `<![CDATA[${e.value}]]>`);
}
function Ri(t8) {
  let e = (r) => {
    var n, s;
    return r.type === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.type === "text" && !H.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && ((n = r.prev) == null ? void 0 : n.type) === "text" && ((s = r.next) == null ? void 0 : s.type) === "text";
  };
  t8.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let s = r.children[n];
        if (!e(s))
          continue;
        let i = s.prev, a = s.next;
        i.value += `<${s.rawName}>` + s.firstChild.value + `</${s.rawName}>` + a.value, i.sourceSpan = new f(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(s), n--, r.removeChild(a);
      }
  });
}
function $i(t8, e) {
  if (e.parser === "html")
    return;
  let r = /{{(.+?)}}/s;
  t8.walk((n) => {
    if (Cn(n))
      for (let s of n.children) {
        if (s.type !== "text")
          continue;
        let i = s.sourceSpan.start, a = null, o = s.value.split(r);
        for (let u = 0; u < o.length; u++, i = a) {
          let p = o[u];
          if (u % 2 === 0) {
            a = i.moveBy(p.length), p.length > 0 && n.insertChildBefore(s, { type: "text", value: p, sourceSpan: new f(i, a) });
            continue;
          }
          a = i.moveBy(p.length + 4), n.insertChildBefore(s, { type: "interpolation", sourceSpan: new f(i, a), children: p.length === 0 ? [] : [{ type: "text", value: p, sourceSpan: new f(i.moveBy(2), a.moveBy(-2)) }] });
        }
        n.removeChild(s);
      }
  });
}
function Oi(t8) {
  t8.walk((e) => {
    if (!e.children)
      return;
    if (e.children.length === 0 || e.children.length === 1 && e.children[0].type === "text" && H.trim(e.children[0].value).length === 0) {
      e.hasDanglingSpaces = e.children.length > 0, e.children = [];
      return;
    }
    let r = Sn(e), n = or(e);
    if (!r)
      for (let s = 0; s < e.children.length; s++) {
        let i = e.children[s];
        if (i.type !== "text")
          continue;
        let { leadingWhitespace: a, text: o, trailingWhitespace: u } = gn(i.value), p = i.prev, l = i.next;
        o ? (i.value = o, i.sourceSpan = new f(i.sourceSpan.start.moveBy(a.length), i.sourceSpan.end.moveBy(-u.length)), a && (p && (p.hasTrailingSpaces = true), i.hasLeadingSpaces = true), u && (i.hasTrailingSpaces = true, l && (l.hasLeadingSpaces = true))) : (e.removeChild(i), s--, (a || u) && (p && (p.hasTrailingSpaces = true), l && (l.hasLeadingSpaces = true)));
      }
    e.isWhitespaceSensitive = r, e.isIndentationSensitive = n;
  });
}
function Mi(t8) {
  t8.walk((e) => {
    e.isSelfClosing = !e.children || e.type === "element" && (e.tagDefinition.isVoid || e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end);
  });
}
function qi(t8, e) {
  t8.walk((r) => {
    r.type === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(e.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function Hi(t8, e) {
  t8.walk((r) => {
    r.cssDisplay = xn(r, e);
  });
}
function Vi(t8, e) {
  t8.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = An(r);
        return;
      }
      for (let s of n)
        s.isLeadingSpaceSensitive = _n(s, e), s.isTrailingSpaceSensitive = En(s, e);
      for (let s = 0; s < n.length; s++) {
        let i = n[s];
        i.isLeadingSpaceSensitive = (s === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive, i.isTrailingSpaceSensitive = (s === n.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive;
      }
    }
  });
}
var In = Li;
function Rn(t8) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(t8);
}
function $n(t8) {
  return `<!-- @format -->

` + t8;
}
function se(t8) {
  return t8.sourceSpan.start.offset;
}
function ie(t8) {
  return t8.sourceSpan.end.offset;
}
async function Ui(t8, e) {
  if (t8.lang === "yaml") {
    let r = t8.value.trim(), n = r ? await e(r, { parser: "yaml" }) : "";
    return en([t8.startDelimiter, S, n, n ? S : "", t8.endDelimiter]);
  }
}
var On = Ui;
var Mn = new Proxy(() => {
}, { get: () => Mn });
var gr = Mn;
function Wi(t8) {
  return Array.isArray(t8) && t8.length > 0;
}
var xt = Wi;
function Qe(t8, e) {
  return [t8.isSelfClosing ? "" : zi(t8, e), Xe(t8, e)];
}
function zi(t8, e) {
  return t8.lastChild && Ae(t8.lastChild) ? "" : [Gi(t8, e), kt(t8, e)];
}
function Xe(t8, e) {
  return (t8.next ? j(t8.next) : Ee(t8.parent)) ? "" : [_e(t8, e), U(t8, e)];
}
function Gi(t8, e) {
  return Ee(t8) ? _e(t8.lastChild, e) : "";
}
function U(t8, e) {
  return Ae(t8) ? kt(t8.parent, e) : Je(t8) ? Bt(t8.next) : "";
}
function kt(t8, e) {
  if (gr(!t8.isSelfClosing), qn(t8, e))
    return "";
  switch (t8.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (t8.hasHtmComponentClosingTag)
        return "<//";
    default:
      return `</${t8.rawName}`;
  }
}
function _e(t8, e) {
  if (qn(t8, e))
    return "";
  switch (t8.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "element":
      if (t8.isSelfClosing)
        return "/>";
    default:
      return ">";
  }
}
function qn(t8, e) {
  return !t8.isSelfClosing && !t8.endSourceSpan && (Ge(t8) || _t(t8.parent, e));
}
function j(t8) {
  return t8.prev && t8.prev.type !== "docType" && t8.type !== "angularControlFlowBlock" && !N(t8.prev) && t8.isLeadingSpaceSensitive && !t8.hasLeadingSpaces;
}
function Ee(t8) {
  var e;
  return ((e = t8.lastChild) == null ? void 0 : e.isTrailingSpaceSensitive) && !t8.lastChild.hasTrailingSpaces && !N(At(t8.lastChild)) && !ge(t8);
}
function Ae(t8) {
  return !t8.next && !t8.hasTrailingSpaces && t8.isTrailingSpaceSensitive && N(At(t8));
}
function Je(t8) {
  return t8.next && !N(t8.next) && N(t8) && t8.isTrailingSpaceSensitive && !t8.hasTrailingSpaces;
}
function Yi(t8) {
  let e = t8.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
  return e ? e[1] ? e[1].split(/\s+/) : true : false;
}
function Ze(t8) {
  return !t8.prev && t8.isLeadingSpaceSensitive && !t8.hasLeadingSpaces;
}
function ji(t8, e, r) {
  var m;
  let { node: n } = t8;
  if (!xt(n.attrs))
    return n.isSelfClosing ? " " : "";
  let s = ((m = n.prev) == null ? void 0 : m.type) === "comment" && Yi(n.prev.value), i = typeof s == "boolean" ? () => s : Array.isArray(s) ? (d) => s.includes(d.rawName) : () => false, a = t8.map(({ node: d }) => i(d) ? T(e.originalText.slice(se(d), ie(d))) : r(), "attrs"), o = n.type === "element" && n.fullName === "script" && n.attrs.length === 1 && n.attrs[0].fullName === "src" && n.children.length === 0, p = e.singleAttributePerLine && n.attrs.length > 1 && !Ce(n, e) ? S : A, l = [R([o ? " " : A, Y(p, a)])];
  return n.firstChild && Ze(n.firstChild) || n.isSelfClosing && Ee(n.parent) || o ? l.push(n.isSelfClosing ? " " : "") : l.push(e.bracketSameLine ? n.isSelfClosing ? " " : "" : n.isSelfClosing ? A : b), l;
}
function Ki(t8) {
  return t8.firstChild && Ze(t8.firstChild) ? "" : Lt(t8);
}
function et(t8, e, r) {
  let { node: n } = t8;
  return [tt(n, e), ji(t8, e, r), n.isSelfClosing ? "" : Ki(n)];
}
function tt(t8, e) {
  return t8.prev && Je(t8.prev) ? "" : [W(t8, e), Bt(t8)];
}
function W(t8, e) {
  return Ze(t8) ? Lt(t8.parent) : j(t8) ? _e(t8.prev, e) : "";
}
function Bt(t8) {
  switch (t8.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${t8.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType":
      return t8.value === "html" ? "<!doctype" : "<!DOCTYPE";
    case "element":
      if (t8.condition)
        return `<!--[if ${t8.condition}]><!--><${t8.rawName}`;
    default:
      return `<${t8.rawName}`;
  }
}
function Lt(t8) {
  switch (gr(!t8.isSelfClosing), t8.type) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (t8.condition)
        return "><!--<![endif]-->";
    default:
      return ">";
  }
}
var Cr = /* @__PURE__ */ new WeakMap();
function Qi(t8, e) {
  let { root: r } = t8;
  return Cr.has(r) || Cr.set(r, r.children.some((n) => yt(n, e) && ["ts", "typescript"].includes(n.attrMap.lang))), Cr.get(r);
}
var $e = Qi;
function Xi(t8, e) {
  if (!t8.endSourceSpan)
    return "";
  let r = t8.startSourceSpan.end.offset;
  t8.firstChild && Ze(t8.firstChild) && (r -= Lt(t8).length);
  let n = t8.endSourceSpan.start.offset;
  return t8.lastChild && Ae(t8.lastChild) ? n += kt(t8, e).length : Ee(t8) && (n -= _e(t8.lastChild, e).length), e.originalText.slice(r, n);
}
var Ft = Xi;
function Hn(t8) {
  return t8 === "	" || t8 === `
` || t8 === "\f" || t8 === "\r" || t8 === " ";
}
var Ji = /^[ \t\n\r\u000c]+/;
var Zi = /^[, \t\n\r\u000c]+/;
var ea = /^[^ \t\n\r\u000c]+/;
var ta = /[,]+$/;
var Vn = /^\d+$/;
var ra = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function na(t8) {
  let e = t8.length, r, n, s, i, a, o = 0, u;
  function p(C) {
    let _, D = C.exec(t8.substring(o));
    if (D)
      return [_] = D, o += _.length, _;
  }
  let l = [];
  for (; ; ) {
    if (p(Zi), o >= e) {
      if (l.length === 0)
        throw new Error("Must contain one or more image candidate strings.");
      return l;
    }
    u = o, r = p(ea), n = [], r.slice(-1) === "," ? (r = r.replace(ta, ""), d()) : m();
  }
  function m() {
    for (p(Ji), s = "", i = "in descriptor"; ; ) {
      if (a = t8.charAt(o), i === "in descriptor")
        if (Hn(a))
          s && (n.push(s), s = "", i = "after descriptor");
        else if (a === ",") {
          o += 1, s && n.push(s), d();
          return;
        } else if (a === "(")
          s += a, i = "in parens";
        else if (a === "") {
          s && n.push(s), d();
          return;
        } else
          s += a;
      else if (i === "in parens")
        if (a === ")")
          s += a, i = "in descriptor";
        else if (a === "") {
          n.push(s), d();
          return;
        } else
          s += a;
      else if (i === "after descriptor" && !Hn(a))
        if (a === "") {
          d();
          return;
        } else
          i = "in descriptor", o -= 1;
      o += 1;
    }
  }
  function d() {
    let C = false, _, D, P, B, c = {}, g, y, $, w, q;
    for (B = 0; B < n.length; B++)
      g = n[B], y = g[g.length - 1], $ = g.substring(0, g.length - 1), w = parseInt($, 10), q = parseFloat($), Vn.test($) && y === "w" ? ((_ || D) && (C = true), w === 0 ? C = true : _ = w) : ra.test($) && y === "x" ? ((_ || D || P) && (C = true), q < 0 ? C = true : D = q) : Vn.test($) && y === "h" ? ((P || D) && (C = true), w === 0 ? C = true : P = w) : C = true;
    if (!C)
      c.source = { value: r, startOffset: u }, _ && (c.width = { value: _ }), D && (c.density = { value: D }), P && (c.height = { value: P }), l.push(c);
    else
      throw new Error(`Invalid srcset descriptor found in "${t8}" at "${g}".`);
  }
}
var Un = na;
function De(t8, e = true) {
  return [R([b, t8]), e ? b : ""];
}
function K(t8, e) {
  let r = t8.type === "NGRoot" ? t8.node.type === "NGMicrosyntax" && t8.node.body.length === 1 && t8.node.body[0].type === "NGMicrosyntaxExpression" ? t8.node.body[0].expression : t8.node : t8.type === "JsExpressionRoot" ? t8.node : t8;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (e.parser === "__vue_expression" || e.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function x(t8, e, r, n) {
  r = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r };
  let s = true;
  n && (r.__onHtmlBindingRoot = (a, o) => {
    s = n(a, o);
  });
  let i = await e(t8, r, e);
  return s ? E(i) : De(i);
}
function sa(t8) {
  if (t8.node.fullName === "srcset" && (t8.parent.fullName === "img" || t8.parent.fullName === "source"))
    return () => aa(L(t8.node));
}
var Wn = { width: "w", height: "h", density: "x" };
var ia = Object.keys(Wn);
function aa(t8) {
  let e = Un(t8), r = ia.filter((l) => e.some((m) => Object.prototype.hasOwnProperty.call(m, l)));
  if (r.length > 1)
    throw new Error("Mixed descriptor in srcset is not supported");
  let [n] = r, s = Wn[n], i = e.map((l) => l.source.value), a = Math.max(...i.map((l) => l.length)), o = e.map((l) => l[n] ? String(l[n].value) : ""), u = o.map((l) => {
    let m = l.indexOf(".");
    return m === -1 ? l.length : m;
  }), p = Math.max(...u);
  return De(Y([",", A], i.map((l, m) => {
    let d = [l], C = o[m];
    if (C) {
      let _ = a - l.length + 1, D = p - u[m], P = " ".repeat(_ + D);
      d.push(fe(P, " "), C + s);
    }
    return d;
  })));
}
var zn = sa;
function oa(t8, e) {
  let { node: r } = t8, n = L(r);
  if (r.fullName === "class" && !e.parentParser && !n.includes("{{"))
    return () => n.trim().split(/\s+/).join(" ");
}
var Gn = oa;
function Yn(t8, e) {
  let { node: r } = t8, n = L(t8.node).trim();
  if (r.fullName === "style" && !e.parentParser && !n.includes("{{"))
    return async (s) => De(await s(n, { parser: "css", __isHTMLStyleAttribute: true }));
}
async function jn(t8, e, r, n) {
  let s = L(r.node), { left: i, operator: a, right: o } = ua(s), u = $e(r, n);
  return [E(await x(`function _(${i}) {}`, t8, { parser: u ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await x(o, t8, { parser: u ? "__ts_expression" : "__js_expression" })];
}
function ua(t8) {
  let e = /(.*?)\s+(in|of)\s+(.*)/s, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/, n = /^\(|\)$/g, s = t8.match(e);
  if (!s)
    return;
  let i = {};
  if (i.for = s[3].trim(), !i.for)
    return;
  let a = v(false, s[1].trim(), n, ""), o = a.match(r);
  o ? (i.alias = a.replace(r, ""), i.iterator1 = o[1].trim(), o[2] && (i.iterator2 = o[2].trim())) : i.alias = a;
  let u = [i.alias, i.iterator1, i.iterator2];
  if (!u.some((p, l) => !p && (l === 0 || u.slice(l + 1).some(Boolean))))
    return { left: u.filter(Boolean).join(","), operator: s[2], right: i.for };
}
function Kn(t8, e, r) {
  let { node: n } = r, s = L(n);
  return x(`type T<${s}> = any`, t8, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, K);
}
function Qn(t8, e, { parseWithTs: r }) {
  return x(`function _(${t8}) {}`, e, { parser: r ? "babel-ts" : "babel", __isVueBindings: true });
}
function Xn(t8) {
  let e = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, r = /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$_a-z][\w$]*])*$/i, n = t8.trim();
  return e.test(n) || r.test(n);
}
function la(t8, e) {
  if (e.parser !== "vue")
    return;
  let { node: r } = t8, n = r.fullName;
  if (n === "v-for")
    return jn;
  if (n === "generic" && yt(r.parent, e))
    return Kn;
  let s = L(r), i = $e(t8, e);
  if (Bn(r) || Ln(r, e))
    return (a) => Qn(s, a, { parseWithTs: i });
  if (n.startsWith("@") || n.startsWith("v-on:"))
    return (a) => ca(s, a, { parseWithTs: i });
  if (n.startsWith(":") || n.startsWith("v-bind:"))
    return (a) => pa(s, a, { parseWithTs: i });
  if (n.startsWith("v-"))
    return (a) => Jn(s, a, { parseWithTs: i });
}
function ca(t8, e, { parseWithTs: r }) {
  return Xn(t8) ? Jn(t8, e, { parseWithTs: r }) : x(t8, e, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, K);
}
function pa(t8, e, { parseWithTs: r }) {
  return x(t8, e, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, K);
}
function Jn(t8, e, { parseWithTs: r }) {
  return x(t8, e, { parser: r ? "__ts_expression" : "__js_expression" }, K);
}
var Zn = la;
var Sr = /{{(.+?)}}/s;
async function es(t8, e) {
  let r = [];
  for (let [n, s] of t8.split(Sr).entries())
    if (n % 2 === 0)
      r.push(T(s));
    else
      try {
        r.push(E(["{{", R([A, await x(s, e, { parser: "__ng_interpolation", __isInHtmlInterpolation: true, trailingComma: "none" })]), A, "}}"]));
      } catch {
        r.push("{{", T(s), "}}");
      }
  return r;
}
function _r({ parser: t8 }) {
  return (e, r, n) => x(L(n.node), e, { parser: t8, trailingComma: "none" }, K);
}
var ha = _r({ parser: "__ng_action" });
var fa = _r({ parser: "__ng_binding" });
var ma = _r({ parser: "__ng_directive" });
function da(t8, e) {
  if (e.parser !== "angular")
    return;
  let { node: r } = t8, n = r.fullName;
  if (n.startsWith("(") && n.endsWith(")") || n.startsWith("on-"))
    return ha;
  if (n.startsWith("[") && n.endsWith("]") || /^bind(?:on)?-/.test(n) || /^ng-(?:if|show|hide|class|style)$/.test(n))
    return fa;
  if (n.startsWith("*"))
    return ma;
  let s = L(r);
  if (/^i18n(?:-.+)?$/.test(n))
    return () => De(gt(vt(r, s.trim())), !s.includes("@@"));
  if (Sr.test(s))
    return (i) => es(s, i);
}
var ts = da;
function ga(t8, e) {
  let { node: r } = t8;
  if (r.value) {
    if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(e.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || e.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}"))
      return [r.rawName, "=", r.value];
    for (let n of [zn, Yn, Gn, Zn, ts]) {
      let s = n(t8, e);
      if (s)
        return Ca(s);
    }
  }
}
function Ca(t8) {
  return async (e, r, n, s) => {
    let i = await t8(e, r, n, s);
    if (i)
      return i = Ct(i, (a) => typeof a == "string" ? v(false, a, '"', "&quot;") : a), [n.node.rawName, '="', E(i), '"'];
  };
}
var rs = ga;
function Sa(t8, e, r, n) {
  let { node: s } = r, i = n.originalText.slice(s.sourceSpan.start.offset, s.sourceSpan.end.offset);
  return /^\s*$/.test(i) ? "" : x(i, t8, { parser: "__ng_directive", __isInHtmlAttribute: false, trailingComma: "none" }, K);
}
var ns = Sa;
var _a = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function Ea(t8, e) {
  let { node: r } = t8;
  switch (r.type) {
    case "element":
      if (V(r) || r.type === "interpolation")
        return;
      if (!r.isSelfClosing && Dt(r, e)) {
        let n = lr(r, e);
        return n ? async (s, i) => {
          let a = Ft(r, e), o = /^\s*$/.test(a), u = "";
          return o || (u = await s(ar(a), { parser: n, __embeddedInHtml: true }), o = u === ""), [W(r, e), E(et(t8, e, i)), o ? "" : S, u, o ? "" : S, Qe(r, e), U(r, e)];
        } : void 0;
      }
      break;
    case "text":
      if (V(r.parent)) {
        let n = lr(r.parent, e);
        if (n)
          return async (s) => {
            let i = n === "markdown" ? cr(r.value.replace(/^[^\S\n]*\n/, "")) : r.value, a = { parser: n, __embeddedInHtml: true };
            if (e.parser === "html" && n === "babel") {
              let o = "script", { attrMap: u } = r.parent;
              u && (u.type === "module" || u.type === "text/babel" && u["data-type"] === "module") && (o = "module"), a.__babelSourceType = o;
            }
            return [re, W(r, e), await s(i, a, { stripTrailingHardline: true }), U(r, e)];
          };
      } else if (r.parent.type === "interpolation")
        return async (n) => {
          let s = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
          return e.parser === "angular" ? (s.parser = "__ng_interpolation", s.trailingComma = "none") : e.parser === "vue" ? s.parser = $e(t8, e) ? "__vue_ts_expression" : "__vue_expression" : s.parser = "__js_expression", [R([A, await n(r.value, s)]), r.parent.next && j(r.parent.next) ? " " : A];
        };
      break;
    case "attribute":
      return rs(t8, e);
    case "front-matter":
      return (n) => On(r, n);
    case "angularControlFlowBlockParameters":
      return _a.has(t8.parent.name) ? ns : void 0;
  }
}
var ss = Ea;
function rt(t8, e, r) {
  let n = t8.node;
  return Ge(n) ? [W(n, e), T(e.originalText.slice(se(n) + (n.prev && Je(n.prev) ? Bt(n).length : 0), ie(n) - (n.next && j(n.next) ? _e(n, e).length : 0))), U(n, e)] : r();
}
function Pt(t8, e) {
  return N(t8) && N(e) ? t8.isTrailingSpaceSensitive ? t8.hasTrailingSpaces ? Et(e) ? S : A : "" : Et(e) ? S : b : Je(t8) && (Ge(e) || e.firstChild || e.isSelfClosing || e.type === "element" && e.attrs.length > 0) || t8.type === "element" && t8.isSelfClosing && j(e) ? "" : !e.isLeadingSpaceSensitive || Et(e) || j(e) && t8.lastChild && Ae(t8.lastChild) && t8.lastChild.lastChild && Ae(t8.lastChild.lastChild) ? S : e.hasLeadingSpaces ? A : b;
}
function Oe(t8, e, r) {
  let { node: n } = t8;
  if (ur(n))
    return [re, ...t8.map((i) => {
      let a = i.node, o = a.prev ? Pt(a.prev, a) : "";
      return [o ? [o, Ye(a.prev) ? S : ""] : "", rt(i, e, r)];
    }, "children")];
  let s = n.children.map(() => Symbol(""));
  return t8.map((i, a) => {
    let o = i.node;
    if (N(o)) {
      if (o.prev && N(o.prev)) {
        let _ = Pt(o.prev, o);
        if (_)
          return Ye(o.prev) ? [S, S, rt(i, e, r)] : [_, rt(i, e, r)];
      }
      return rt(i, e, r);
    }
    let u = [], p = [], l = [], m = [], d = o.prev ? Pt(o.prev, o) : "", C = o.next ? Pt(o, o.next) : "";
    return d && (Ye(o.prev) ? u.push(S, S) : d === S ? u.push(S) : N(o.prev) ? p.push(d) : p.push(fe("", b, { groupId: s[a - 1] }))), C && (Ye(o) ? N(o.next) && m.push(S, S) : C === S ? N(o.next) && m.push(S) : l.push(C)), [...u, E([...p, E([rt(i, e, r), ...l], { id: s[a] })]), ...m];
  }, "children");
}
function is(t8, e, r) {
  let { node: n } = t8;
  if (_t(n, e))
    return [W(n, e), E(et(t8, e, r)), T(Ft(n, e)), ...Qe(n, e), U(n, e)];
  let s = n.children.length === 1 && n.firstChild.type === "interpolation" && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id"), a = (l) => E([E(et(t8, e, r), { id: i }), l, Qe(n, e)]), o = (l) => s ? tn(l, { groupId: i }) : (V(n) || Ke(n, e)) && n.parent.type === "root" && e.parser === "vue" && !e.vueIndentScriptAndStyle ? l : R(l), u = () => s ? fe(b, "", { groupId: i }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? A : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? Zr(b) : b, p = () => (n.next ? j(n.next) : Ee(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : s ? fe(b, "", { groupId: i }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? A : (n.lastChild.type === "comment" || n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${e.tabWidth * (t8.ancestors.length - 1)}}$`).test(n.lastChild.value) ? "" : b;
  return n.children.length === 0 ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? A : "") : a([Dn(n) ? re : "", o([u(), Oe(t8, e, r)]), p()]);
}
var as = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
function os(t8, e, r) {
  let { node: n } = t8, s = [];
  Aa(t8) && s.push("} "), s.push("@", n.name), n.parameters && s.push(" (", E(r("parameters")), ")"), s.push(" {");
  let i = us(n);
  return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = true, n.lastChild.hasTrailingSpaces = true, s.push(R([S, Oe(t8, e, r)])), i && s.push(S, "}")) : i && s.push("}"), E(s, { shouldBreak: true });
}
function us(t8) {
  var e, r;
  return !(((e = t8.next) == null ? void 0 : e.type) === "angularControlFlowBlock" && ((r = as.get(t8.name)) != null && r.has(t8.next.name)));
}
function Aa(t8) {
  let { previous: e } = t8;
  return (e == null ? void 0 : e.type) === "angularControlFlowBlock" && !us(t8.previous);
}
function ls(t8, e, r) {
  return [R([b, Y([";", A], t8.map(r, "children"))]), b];
}
var nt = null;
function st(t8) {
  if (nt !== null && typeof nt.property) {
    let e = nt;
    return nt = st.prototype = null, e;
  }
  return nt = st.prototype = t8 ?? /* @__PURE__ */ Object.create(null), new st();
}
var Da = 10;
for (let t8 = 0; t8 <= Da; t8++)
  st();
function Er(t8) {
  return st(t8);
}
function va(t8, e = "type") {
  Er(t8);
  function r(n) {
    let s = n[e], i = t8[s];
    if (!Array.isArray(i))
      throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
    return i;
  }
  return r;
}
var cs = va;
var ya = { "front-matter": [], root: ["children"], element: ["attrs", "children"], ieConditionalComment: ["children"], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: ["children"], text: ["children"], docType: [], comment: [], attribute: [], cdata: [], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: ["children"], angularControlFlowBlockParameter: [] };
var ps = ya;
var wa = cs(ps);
var hs = wa;
function ba(t8, e, r) {
  let { node: n } = t8;
  switch (n.type) {
    case "front-matter":
      return T(n.raw);
    case "root":
      return e.__onHtmlRoot && e.__onHtmlRoot(n), [E(Oe(t8, e, r)), S];
    case "element":
    case "ieConditionalComment":
      return is(t8, e, r);
    case "angularControlFlowBlock":
      return os(t8, e, r);
    case "angularControlFlowBlockParameters":
      return ls(t8, e, r);
    case "angularControlFlowBlockParameter":
      return H.trim(n.expression);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [tt(n), Xe(n)];
    case "interpolation":
      return [tt(n, e), ...t8.map(r, "children"), Xe(n, e)];
    case "text": {
      if (n.parent.type === "interpolation") {
        let i = /\n[^\S\n]*$/, a = i.test(n.value), o = a ? n.value.replace(i, "") : n.value;
        return [T(o), a ? S : ""];
      }
      let s = nn([W(n, e), ...vt(n), U(n, e)]);
      return Array.isArray(s) ? gt(s) : s;
    }
    case "docType":
      return [E([tt(n, e), " ", v(false, n.value.replace(/^html\b/i, "html"), /\s+/g, " ")]), Xe(n, e)];
    case "comment":
      return [W(n, e), T(e.originalText.slice(se(n), ie(n))), U(n, e)];
    case "attribute": {
      if (n.value === null)
        return n.rawName;
      let s = pr(n.value), i = on(s, '"');
      return [n.rawName, "=", i, T(i === '"' ? v(false, s, '"', "&quot;") : v(false, s, "'", "&apos;")), i];
    }
    case "cdata":
    default:
      throw new sn(n, "HTML");
  }
}
var Ta = { preprocess: In, print: ba, insertPragma: $n, massageAstNode: cn, embed: ss, getVisitorKeys: hs };
var fs = Ta;
var Hr = {};
Yr(Hr, { angular: () => vo, html: () => Do, lwc: () => wo, vue: () => yo });
var ms;
(function(t8) {
  t8[t8.Emulated = 0] = "Emulated", t8[t8.None = 2] = "None", t8[t8.ShadowDom = 3] = "ShadowDom";
})(ms || (ms = {}));
var ds;
(function(t8) {
  t8[t8.OnPush = 0] = "OnPush", t8[t8.Default = 1] = "Default";
})(ds || (ds = {}));
var Ar = { name: "custom-elements" };
var Dr = { name: "no-errors-schema" };
var X;
(function(t8) {
  t8[t8.NONE = 0] = "NONE", t8[t8.HTML = 1] = "HTML", t8[t8.STYLE = 2] = "STYLE", t8[t8.SCRIPT = 3] = "SCRIPT", t8[t8.URL = 4] = "URL", t8[t8.RESOURCE_URL = 5] = "RESOURCE_URL";
})(X || (X = {}));
var gs;
(function(t8) {
  t8[t8.Error = 0] = "Error", t8[t8.Warning = 1] = "Warning", t8[t8.Ignore = 2] = "Ignore";
})(gs || (gs = {}));
var F;
(function(t8) {
  t8[t8.RAW_TEXT = 0] = "RAW_TEXT", t8[t8.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t8[t8.PARSABLE_DATA = 2] = "PARSABLE_DATA";
})(F || (F = {}));
function it(t8) {
  if (t8[0] != ":")
    return [null, t8];
  let e = t8.indexOf(":", 1);
  if (e === -1)
    throw new Error(`Unsupported format "${t8}" expecting ":namespace:name"`);
  return [t8.slice(1, e), t8.slice(e + 1)];
}
function vr(t8) {
  return it(t8)[1] === "ng-container";
}
function yr(t8) {
  return it(t8)[1] === "ng-content";
}
function Me(t8) {
  return t8 === null ? null : it(t8)[0];
}
function qe(t8, e) {
  return t8 ? `:${t8}:${e}` : e;
}
var It;
function wr() {
  return It || (It = {}, Nt(X.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Nt(X.STYLE, ["*|style"]), Nt(X.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Nt(X.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), It;
}
function Nt(t8, e) {
  for (let r of e)
    It[r.toLowerCase()] = t8;
}
var Rt = class {
};
var xa = "boolean";
var ka = "number";
var Ba = "string";
var La = "object";
var Fa = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|"];
var Cs = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" }));
var Pa = Array.from(Cs).reduce((t8, [e, r]) => (t8.set(e, r), t8), /* @__PURE__ */ new Map());
var $t = class extends Rt {
  constructor() {
    super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), Fa.forEach((e) => {
      let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), [s, i] = e.split("|"), a = i.split(","), [o, u] = s.split("^");
      o.split(",").forEach((l) => {
        this._schema.set(l.toLowerCase(), r), this._eventSchema.set(l.toLowerCase(), n);
      });
      let p = u && this._schema.get(u.toLowerCase());
      if (p) {
        for (let [l, m] of p)
          r.set(l, m);
        for (let l of this._eventSchema.get(u.toLowerCase()))
          n.add(l);
      }
      a.forEach((l) => {
        if (l.length > 0)
          switch (l[0]) {
            case "*":
              n.add(l.substring(1));
              break;
            case "!":
              r.set(l.substring(1), xa);
              break;
            case "#":
              r.set(l.substring(1), ka);
              break;
            case "%":
              r.set(l.substring(1), La);
              break;
            default:
              r.set(l, Ba);
          }
      });
    });
  }
  hasProperty(e, r, n) {
    if (n.some((i) => i.name === Dr.name))
      return true;
    if (e.indexOf("-") > -1) {
      if (vr(e) || yr(e))
        return false;
      if (n.some((i) => i.name === Ar.name))
        return true;
    }
    return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(r);
  }
  hasElement(e, r) {
    return r.some((n) => n.name === Dr.name) || e.indexOf("-") > -1 && (vr(e) || yr(e) || r.some((n) => n.name === Ar.name)) ? true : this._schema.has(e.toLowerCase());
  }
  securityContext(e, r, n) {
    n && (r = this.getMappedPropName(r)), e = e.toLowerCase(), r = r.toLowerCase();
    let s = wr()[e + "|" + r];
    return s || (s = wr()["*|" + r], s || X.NONE);
  }
  getMappedPropName(e) {
    return Cs.get(e) ?? e;
  }
  getDefaultComponentElementName() {
    return "ng-component";
  }
  validateProperty(e) {
    return e.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: false };
  }
  validateAttribute(e) {
    return e.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: false };
  }
  allKnownElementNames() {
    return Array.from(this._schema.keys());
  }
  allKnownAttributesOfElement(e) {
    let r = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
    return Array.from(r.keys()).map((n) => Pa.get(n) ?? n);
  }
  allKnownEventsOfElement(e) {
    return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
  }
  normalizeAnimationStyleProperty(e) {
    return Nn(e);
  }
  normalizeAnimationStyleValue(e, r, n) {
    let s = "", i = n.toString().trim(), a = null;
    if (Na(e) && n !== 0 && n !== "0")
      if (typeof n == "number")
        s = "px";
      else {
        let o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
        o && o[1].length == 0 && (a = `Please provide a CSS unit value for ${r}:${n}`);
      }
    return { error: a, value: i + s };
  }
};
function Na(t8) {
  switch (t8) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return true;
    default:
      return false;
  }
}
var h = class {
  constructor({ closedByChildren: e, implicitNamespacePrefix: r, contentType: n = F.PARSABLE_DATA, closedByParent: s = false, isVoid: i = false, ignoreFirstLf: a = false, preventNamespaceInheritance: o = false, canSelfClose: u = false } = {}) {
    this.closedByChildren = {}, this.closedByParent = false, e && e.length > 0 && e.forEach((p) => this.closedByChildren[p] = true), this.isVoid = i, this.closedByParent = s || i, this.implicitNamespacePrefix = r || null, this.contentType = n, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o, this.canSelfClose = u ?? i;
  }
  isClosedByChild(e) {
    return this.isVoid || e.toLowerCase() in this.closedByChildren;
  }
  getContentType(e) {
    return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
  }
};
var Ss;
var at;
function He(t8) {
  return at || (Ss = new h({ canSelfClose: true }), at = Object.assign(/* @__PURE__ */ Object.create(null), { base: new h({ isVoid: true }), meta: new h({ isVoid: true }), area: new h({ isVoid: true }), embed: new h({ isVoid: true }), link: new h({ isVoid: true }), img: new h({ isVoid: true }), input: new h({ isVoid: true }), param: new h({ isVoid: true }), hr: new h({ isVoid: true }), br: new h({ isVoid: true }), source: new h({ isVoid: true }), track: new h({ isVoid: true }), wbr: new h({ isVoid: true }), p: new h({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new h({ closedByChildren: ["tbody", "tfoot"] }), tbody: new h({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new h({ closedByChildren: ["tbody"], closedByParent: true }), tr: new h({ closedByChildren: ["tr"], closedByParent: true }), td: new h({ closedByChildren: ["td", "th"], closedByParent: true }), th: new h({ closedByChildren: ["td", "th"], closedByParent: true }), col: new h({ isVoid: true }), svg: new h({ implicitNamespacePrefix: "svg" }), foreignObject: new h({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new h({ implicitNamespacePrefix: "math" }), li: new h({ closedByChildren: ["li"], closedByParent: true }), dt: new h({ closedByChildren: ["dt", "dd"] }), dd: new h({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new h({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new h({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new h({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new h({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new h({ closedByChildren: ["optgroup"], closedByParent: true }), option: new h({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new h({ ignoreFirstLf: true }), listing: new h({ ignoreFirstLf: true }), style: new h({ contentType: F.RAW_TEXT }), script: new h({ contentType: F.RAW_TEXT }), title: new h({ contentType: { default: F.ESCAPABLE_RAW_TEXT, svg: F.PARSABLE_DATA } }), textarea: new h({ contentType: F.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), new $t().allKnownElementNames().forEach((e) => {
    !at[e] && Me(e) === null && (at[e] = new h({ canSelfClose: false }));
  })), at[t8] ?? Ss;
}
var ve = class {
  constructor(e, r) {
    this.sourceSpan = e, this.i18n = r;
  }
};
var Ot = class extends ve {
  constructor(e, r, n, s) {
    super(r, s), this.value = e, this.tokens = n, this.type = "text";
  }
  visit(e, r) {
    return e.visitText(this, r);
  }
};
var Mt = class extends ve {
  constructor(e, r, n, s) {
    super(r, s), this.value = e, this.tokens = n, this.type = "cdata";
  }
  visit(e, r) {
    return e.visitCdata(this, r);
  }
};
var qt = class extends ve {
  constructor(e, r, n, s, i, a) {
    super(s, a), this.switchValue = e, this.type = r, this.cases = n, this.switchValueSourceSpan = i;
  }
  visit(e, r) {
    return e.visitExpansion(this, r);
  }
};
var Ht = class {
  constructor(e, r, n, s, i) {
    this.value = e, this.expression = r, this.sourceSpan = n, this.valueSourceSpan = s, this.expSourceSpan = i;
  }
  visit(e, r) {
    return e.visitExpansionCase(this, r);
  }
};
var Vt = class extends ve {
  constructor(e, r, n, s, i, a, o) {
    super(n, o), this.name = e, this.value = r, this.keySpan = s, this.valueSpan = i, this.valueTokens = a, this.type = "attribute";
  }
  visit(e, r) {
    return e.visitAttribute(this, r);
  }
  get nameSpan() {
    return this.keySpan;
  }
};
var z = class extends ve {
  constructor(e, r, n, s, i, a = null, o = null, u) {
    super(s, u), this.name = e, this.attrs = r, this.children = n, this.startSourceSpan = i, this.endSourceSpan = a, this.nameSpan = o, this.type = "element";
  }
  visit(e, r) {
    return e.visitElement(this, r);
  }
};
var Ut = class {
  constructor(e, r) {
    this.value = e, this.sourceSpan = r, this.type = "comment";
  }
  visit(e, r) {
    return e.visitComment(this, r);
  }
};
var Wt = class {
  constructor(e, r) {
    this.value = e, this.sourceSpan = r, this.type = "docType";
  }
  visit(e, r) {
    return e.visitDocType(this, r);
  }
};
var J = class {
  constructor(e, r, n, s, i, a = null) {
    this.name = e, this.parameters = r, this.children = n, this.sourceSpan = s, this.startSourceSpan = i, this.endSourceSpan = a, this.type = "block";
  }
  visit(e, r) {
    return e.visitBlock(this, r);
  }
};
var ot = class {
  constructor(e, r) {
    this.expression = e, this.sourceSpan = r, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, r) {
    return e.visitBlockParameter(this, r);
  }
};
function zt(t8, e, r = null) {
  let n = [], s = t8.visit ? (i) => t8.visit(i, r) || i.visit(t8, r) : (i) => i.visit(t8, r);
  return e.forEach((i) => {
    let a = s(i);
    a && n.push(a);
  }), n;
}
var ut = class {
  constructor() {
  }
  visitElement(e, r) {
    this.visitChildren(r, (n) => {
      n(e.attrs), n(e.children);
    });
  }
  visitAttribute(e, r) {
  }
  visitText(e, r) {
  }
  visitCdata(e, r) {
  }
  visitComment(e, r) {
  }
  visitDocType(e, r) {
  }
  visitExpansion(e, r) {
    return this.visitChildren(r, (n) => {
      n(e.cases);
    });
  }
  visitExpansionCase(e, r) {
  }
  visitBlock(e, r) {
    this.visitChildren(r, (n) => {
      n(e.parameters), n(e.children);
    });
  }
  visitBlockParameter(e, r) {
  }
  visitChildren(e, r) {
    let n = [], s = this;
    function i(a) {
      a && n.push(zt(s, a, e));
    }
    return r(i), Array.prototype.concat.apply([], n);
  }
};
var Ve = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
var Ra = "\uE500";
Ve.ngsp = Ra;
var $a = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function _s(t8, e) {
  if (e != null && !(Array.isArray(e) && e.length == 2))
    throw new Error(`Expected '${t8}' to be an array, [start, end].`);
  if (e != null) {
    let r = e[0], n = e[1];
    $a.forEach((s) => {
      if (s.test(r) || s.test(n))
        throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
    });
  }
}
var br = class t2 {
  static fromArray(e) {
    return e ? (_s("interpolation", e), new t2(e[0], e[1])) : Tr;
  }
  constructor(e, r) {
    this.start = e, this.end = r;
  }
};
var Tr = new br("{{", "}}");
var ct = class extends Re {
  constructor(e, r, n) {
    super(n, e), this.tokenType = r;
  }
};
var Fr = class {
  constructor(e, r, n) {
    this.tokens = e, this.errors = r, this.nonNormalizedIcuExpressions = n;
  }
};
function Ps(t8, e, r, n = {}) {
  let s = new Pr(new Se(t8, e), r, n);
  return s.tokenize(), new Fr(lo(s.tokens), s.errors, s.nonNormalizedIcuExpressions);
}
var ro = /\r\n?/g;
function Ue(t8) {
  return `Unexpected character "${t8 === 0 ? "EOF" : String.fromCharCode(t8)}"`;
}
function ws(t8) {
  return `Unknown entity "${t8}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function no(t8, e) {
  return `Unable to parse entity "${e}" - ${t8} character reference entities must end with ";"`;
}
var jt;
(function(t8) {
  t8.HEX = "hexadecimal", t8.DEC = "decimal";
})(jt || (jt = {}));
var pt = class {
  constructor(e) {
    this.error = e;
  }
};
var Pr = class {
  constructor(e, r, n) {
    this._getTagContentType = r, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = n.tokenizeExpansionForms || false, this._interpolationConfig = n.interpolationConfig || Tr, this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = n.canSelfClose || false, this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || false;
    let s = n.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
    this._cursor = n.escapedString ? new Nr(e, s) : new Kt(e, s), this._preserveLineEndings = n.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = n.tokenizeBlocks ?? true;
    try {
      this._cursor.init();
    } catch (i) {
      this.handleError(i);
    }
  }
  _processCarriageReturns(e) {
    return this._preserveLineEndings ? e : e.replace(ro, `
`);
  }
  tokenize() {
    for (; this._cursor.peek() !== 0; ) {
      let e = this._cursor.clone();
      try {
        if (this._attemptCharCode(60))
          if (this._attemptCharCode(33))
            this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
          else if (this._attemptCharCode(47))
            this._consumeTagClose(e);
          else {
            let r = this._cursor.clone();
            this._attemptCharCode(63) ? (this._cursor = r, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
          }
        else
          this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
      } catch (r) {
        this.handleError(r);
      }
    }
    this._beginToken(30), this._endToken([]);
  }
  _getBlockName() {
    let e = false, r = this._cursor.clone();
    return this._attemptCharCodeUntilFn((n) => wt(n) ? !e : xs(n) ? (e = true, false) : true), this._cursor.getChars(r).trim();
  }
  _consumeBlockStart(e) {
    this._beginToken(25, e);
    let r = this._endToken([this._getBlockName()]);
    if (this._cursor.peek() === 40)
      if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(k), this._attemptCharCode(41))
        this._attemptCharCodeUntilFn(k);
      else {
        r.type = 29;
        return;
      }
    this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : r.type = 29;
  }
  _consumeBlockEnd(e) {
    this._beginToken(27, e), this._endToken([]);
  }
  _consumeBlockParameters() {
    for (this._attemptCharCodeUntilFn(ks); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
      this._beginToken(28);
      let e = this._cursor.clone(), r = null, n = 0;
      for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || r !== null; ) {
        let s = this._cursor.peek();
        if (s === 92)
          this._cursor.advance();
        else if (s === r)
          r = null;
        else if (r === null && dr(s))
          r = s;
        else if (s === 40 && r === null)
          n++;
        else if (s === 41 && r === null) {
          if (n === 0)
            break;
          n > 0 && n--;
        }
        this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(ks);
    }
  }
  _tokenizeExpansionForm() {
    if (this.isExpansionFormStart())
      return this._consumeExpansionFormStart(), true;
    if (oo(this._cursor.peek()) && this._isInExpansionForm())
      return this._consumeExpansionCaseStart(), true;
    if (this._cursor.peek() === 125) {
      if (this._isInExpansionCase())
        return this._consumeExpansionCaseEnd(), true;
      if (this._isInExpansionForm())
        return this._consumeExpansionFormEnd(), true;
    }
    return false;
  }
  _beginToken(e, r = this._cursor.clone()) {
    this._currentTokenStart = r, this._currentTokenType = e;
  }
  _endToken(e, r) {
    if (this._currentTokenStart === null)
      throw new ct("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(r));
    if (this._currentTokenType === null)
      throw new ct("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
    let n = { type: this._currentTokenType, parts: e, sourceSpan: (r ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
    return this.tokens.push(n), this._currentTokenStart = null, this._currentTokenType = null, n;
  }
  _createError(e, r) {
    this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
    let n = new ct(e, this._currentTokenType, r);
    return this._currentTokenStart = null, this._currentTokenType = null, new pt(n);
  }
  handleError(e) {
    if (e instanceof ht && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof pt)
      this.errors.push(e.error);
    else
      throw e;
  }
  _attemptCharCode(e) {
    return this._cursor.peek() === e ? (this._cursor.advance(), true) : false;
  }
  _attemptCharCodeCaseInsensitive(e) {
    return uo(this._cursor.peek(), e) ? (this._cursor.advance(), true) : false;
  }
  _requireCharCode(e) {
    let r = this._cursor.clone();
    if (!this._attemptCharCode(e))
      throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptStr(e) {
    let r = e.length;
    if (this._cursor.charsLeft() < r)
      return false;
    let n = this._cursor.clone();
    for (let s = 0; s < r; s++)
      if (!this._attemptCharCode(e.charCodeAt(s)))
        return this._cursor = n, false;
    return true;
  }
  _attemptStrCaseInsensitive(e) {
    for (let r = 0; r < e.length; r++)
      if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(r)))
        return false;
    return true;
  }
  _requireStr(e) {
    let r = this._cursor.clone();
    if (!this._attemptStr(e))
      throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _requireStrCaseInsensitive(e) {
    let r = this._cursor.clone();
    if (!this._attemptStrCaseInsensitive(e))
      throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptCharCodeUntilFn(e) {
    for (; !e(this._cursor.peek()); )
      this._cursor.advance();
  }
  _requireCharCodeUntilFn(e, r) {
    let n = this._cursor.clone();
    if (this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < r)
      throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(n));
  }
  _attemptUntilChar(e) {
    for (; this._cursor.peek() !== e; )
      this._cursor.advance();
  }
  _readChar() {
    let e = String.fromCodePoint(this._cursor.peek());
    return this._cursor.advance(), e;
  }
  _consumeEntity(e) {
    this._beginToken(9);
    let r = this._cursor.clone();
    if (this._cursor.advance(), this._attemptCharCode(35)) {
      let n = this._attemptCharCode(120) || this._attemptCharCode(88), s = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(io), this._cursor.peek() != 59) {
        this._cursor.advance();
        let a = n ? jt.HEX : jt.DEC;
        throw this._createError(no(a, this._cursor.getChars(r)), this._cursor.getSpan());
      }
      let i = this._cursor.getChars(s);
      this._cursor.advance();
      try {
        let a = parseInt(i, n ? 16 : 10);
        this._endToken([String.fromCharCode(a), this._cursor.getChars(r)]);
      } catch {
        throw this._createError(ws(this._cursor.getChars(r)), this._cursor.getSpan());
      }
    } else {
      let n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(ao), this._cursor.peek() != 59)
        this._beginToken(e, r), this._cursor = n, this._endToken(["&"]);
      else {
        let s = this._cursor.getChars(n);
        this._cursor.advance();
        let i = Ve[s];
        if (!i)
          throw this._createError(ws(s), this._cursor.getSpan(r));
        this._endToken([i, `&${s};`]);
      }
    }
  }
  _consumeRawText(e, r) {
    this._beginToken(e ? 6 : 7);
    let n = [];
    for (; ; ) {
      let s = this._cursor.clone(), i = r();
      if (this._cursor = s, i)
        break;
      e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(n.join(""))]), n.length = 0, this._consumeEntity(6), this._beginToken(6)) : n.push(this._readChar());
    }
    this._endToken([this._processCarriageReturns(n.join(""))]);
  }
  _consumeComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]);
  }
  _consumeBogusComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
  }
  _consumeCdata(e) {
    this._beginToken(12, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]);
  }
  _consumeDocType(e) {
    this._beginToken(18, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(19), this._cursor.advance(), this._endToken([]);
  }
  _consumePrefixAndName() {
    let e = this._cursor.clone(), r = "";
    for (; this._cursor.peek() !== 58 && !so(this._cursor.peek()); )
      this._cursor.advance();
    let n;
    this._cursor.peek() === 58 ? (r = this._cursor.getChars(e), this._cursor.advance(), n = this._cursor.clone()) : n = e, this._requireCharCodeUntilFn(bs, r === "" ? 0 : 1);
    let s = this._cursor.getChars(n);
    return [r, s];
  }
  _consumeTagOpen(e) {
    let r, n, s, i = [];
    try {
      if (!bt(this._cursor.peek()))
        throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(e));
      for (s = this._consumeTagOpenStart(e), n = s.parts[0], r = s.parts[1], this._attemptCharCodeUntilFn(k); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0; ) {
        let [o, u] = this._consumeAttributeName();
        if (this._attemptCharCodeUntilFn(k), this._attemptCharCode(61)) {
          this._attemptCharCodeUntilFn(k);
          let p = this._consumeAttributeValue();
          i.push({ prefix: o, name: u, value: p });
        } else
          i.push({ prefix: o, name: u });
        this._attemptCharCodeUntilFn(k);
      }
      this._consumeTagOpenEnd();
    } catch (o) {
      if (o instanceof pt) {
        s ? s.type = 4 : (this._beginToken(5, e), this._endToken(["<"]));
        return;
      }
      throw o;
    }
    if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2)
      return;
    let a = this._getTagContentType(r, n, this._fullNameStack.length > 0, i);
    this._handleFullNameStackForTagOpen(n, r), a === F.RAW_TEXT ? this._consumeRawTextWithTagClose(n, r, false) : a === F.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, r, true);
  }
  _consumeRawTextWithTagClose(e, r, n) {
    this._consumeRawText(n, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(k), !this._attemptStrCaseInsensitive(e ? `${e}:${r}` : r)) ? false : (this._attemptCharCodeUntilFn(k), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn((s) => s === 62, 3), this._cursor.advance(), this._endToken([e, r]), this._handleFullNameStackForTagClose(e, r);
  }
  _consumeTagOpenStart(e) {
    this._beginToken(0, e);
    let r = this._consumePrefixAndName();
    return this._endToken(r);
  }
  _consumeAttributeName() {
    let e = this._cursor.peek();
    if (e === 39 || e === 34)
      throw this._createError(Ue(e), this._cursor.getSpan());
    this._beginToken(14);
    let r = this._consumePrefixAndName();
    return this._endToken(r), r;
  }
  _consumeAttributeValue() {
    let e;
    if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
      let r = this._cursor.peek();
      this._consumeQuote(r);
      let n = () => this._cursor.peek() === r;
      e = this._consumeWithInterpolation(16, 17, n, n), this._consumeQuote(r);
    } else {
      let r = () => bs(this._cursor.peek());
      e = this._consumeWithInterpolation(16, 17, r, r);
    }
    return e;
  }
  _consumeQuote(e) {
    this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
  }
  _consumeTagOpenEnd() {
    let e = this._attemptCharCode(47) ? 2 : 1;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeTagClose(e) {
    if (this._beginToken(3, e), this._attemptCharCodeUntilFn(k), this._allowHtmComponentClosingTags && this._attemptCharCode(47))
      this._attemptCharCodeUntilFn(k), this._requireCharCode(62), this._endToken([]);
    else {
      let [r, n] = this._consumePrefixAndName();
      this._attemptCharCodeUntilFn(k), this._requireCharCode(62), this._endToken([r, n]), this._handleFullNameStackForTagClose(r, n);
    }
  }
  _consumeExpansionFormStart() {
    this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
    let e = this._readUntil(44), r = this._processCarriageReturns(e);
    if (this._i18nNormalizeLineEndingsInICUs)
      this._endToken([r]);
    else {
      let s = this._endToken([e]);
      r !== e && this.nonNormalizedIcuExpressions.push(s);
    }
    this._requireCharCode(44), this._attemptCharCodeUntilFn(k), this._beginToken(7);
    let n = this._readUntil(44);
    this._endToken([n]), this._requireCharCode(44), this._attemptCharCodeUntilFn(k);
  }
  _consumeExpansionCaseStart() {
    this._beginToken(21);
    let e = this._readUntil(123).trim();
    this._endToken([e]), this._attemptCharCodeUntilFn(k), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(k), this._expansionCaseStack.push(22);
  }
  _consumeExpansionCaseEnd() {
    this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(k), this._expansionCaseStack.pop();
  }
  _consumeExpansionFormEnd() {
    this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
  }
  _consumeWithInterpolation(e, r, n, s) {
    this._beginToken(e);
    let i = [];
    for (; !n(); ) {
      let o = this._cursor.clone();
      this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], o), i.length = 0, this._consumeInterpolation(r, o, s), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
    }
    this._inInterpolation = false;
    let a = this._processCarriageReturns(i.join(""));
    return this._endToken([a]), a;
  }
  _consumeInterpolation(e, r, n) {
    let s = [];
    this._beginToken(e, r), s.push(this._interpolationConfig.start);
    let i = this._cursor.clone(), a = null, o = false;
    for (; this._cursor.peek() !== 0 && (n === null || !n()); ) {
      let u = this._cursor.clone();
      if (this._isTagStart()) {
        this._cursor = u, s.push(this._getProcessedChars(i, u)), this._endToken(s);
        return;
      }
      if (a === null)
        if (this._attemptStr(this._interpolationConfig.end)) {
          s.push(this._getProcessedChars(i, u)), s.push(this._interpolationConfig.end), this._endToken(s);
          return;
        } else
          this._attemptStr("//") && (o = true);
      let p = this._cursor.peek();
      this._cursor.advance(), p === 92 ? this._cursor.advance() : p === a ? a = null : !o && a === null && dr(p) && (a = p);
    }
    s.push(this._getProcessedChars(i, this._cursor)), this._endToken(s);
  }
  _getProcessedChars(e, r) {
    return this._processCarriageReturns(r.getChars(e));
  }
  _isTextEnd() {
    return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 125));
  }
  _isTagStart() {
    if (this._cursor.peek() === 60) {
      let e = this._cursor.clone();
      e.advance();
      let r = e.peek();
      if (97 <= r && r <= 122 || 65 <= r && r <= 90 || r === 47 || r === 33)
        return true;
    }
    return false;
  }
  _isBlockStart() {
    if (this._tokenizeBlocks && this._cursor.peek() === 64) {
      let e = this._cursor.clone();
      if (e.advance(), xs(e.peek()))
        return true;
    }
    return false;
  }
  _readUntil(e) {
    let r = this._cursor.clone();
    return this._attemptUntilChar(e), this._cursor.getChars(r);
  }
  _isInExpansion() {
    return this._isInExpansionCase() || this._isInExpansionForm();
  }
  _isInExpansionCase() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
  }
  _isInExpansionForm() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
  }
  isExpansionFormStart() {
    if (this._cursor.peek() !== 123)
      return false;
    if (this._interpolationConfig) {
      let e = this._cursor.clone(), r = this._attemptStr(this._interpolationConfig.start);
      return this._cursor = e, !r;
    }
    return true;
  }
  _handleFullNameStackForTagOpen(e, r) {
    let n = qe(e, r);
    (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
  }
  _handleFullNameStackForTagClose(e, r) {
    let n = qe(e, r);
    this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
  }
};
function k(t8) {
  return !wt(t8) || t8 === 0;
}
function bs(t8) {
  return wt(t8) || t8 === 62 || t8 === 60 || t8 === 47 || t8 === 39 || t8 === 34 || t8 === 61 || t8 === 0;
}
function so(t8) {
  return (t8 < 97 || 122 < t8) && (t8 < 65 || 90 < t8) && (t8 < 48 || t8 > 57);
}
function io(t8) {
  return t8 === 59 || t8 === 0 || !Fn(t8);
}
function ao(t8) {
  return t8 === 59 || t8 === 0 || !bt(t8);
}
function oo(t8) {
  return t8 !== 125;
}
function uo(t8, e) {
  return Ts(t8) === Ts(e);
}
function Ts(t8) {
  return t8 >= 97 && t8 <= 122 ? t8 - 97 + 65 : t8;
}
function xs(t8) {
  return bt(t8) || hr(t8) || t8 === 95;
}
function ks(t8) {
  return t8 !== 59 && k(t8);
}
function lo(t8) {
  let e = [], r;
  for (let n = 0; n < t8.length; n++) {
    let s = t8[n];
    r && r.type === 5 && s.type === 5 || r && r.type === 16 && s.type === 16 ? (r.parts[0] += s.parts[0], r.sourceSpan.end = s.sourceSpan.end) : (r = s, e.push(r));
  }
  return e;
}
var Kt = class t3 {
  constructor(e, r) {
    if (e instanceof t3) {
      this.file = e.file, this.input = e.input, this.end = e.end;
      let n = e.state;
      this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
    } else {
      if (!r)
        throw new Error("Programming error: the range argument must be provided with a file argument.");
      this.file = e, this.input = e.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
    }
  }
  clone() {
    return new t3(this);
  }
  peek() {
    return this.state.peek;
  }
  charsLeft() {
    return this.end - this.state.offset;
  }
  diff(e) {
    return this.state.offset - e.state.offset;
  }
  advance() {
    this.advanceState(this.state);
  }
  init() {
    this.updatePeek(this.state);
  }
  getSpan(e, r) {
    e = e || this;
    let n = e;
    if (r)
      for (; this.diff(e) > 0 && r.indexOf(e.peek()) !== -1; )
        n === e && (e = e.clone()), e.advance();
    let s = this.locationFromCursor(e), i = this.locationFromCursor(this), a = n !== e ? this.locationFromCursor(n) : s;
    return new f(s, i, a);
  }
  getChars(e) {
    return this.input.substring(e.state.offset, this.state.offset);
  }
  charAt(e) {
    return this.input.charCodeAt(e);
  }
  advanceState(e) {
    if (e.offset >= this.end)
      throw this.state = e, new ht('Unexpected character "EOF"', this);
    let r = this.charAt(e.offset);
    r === 10 ? (e.line++, e.column = 0) : fr(r) || e.column++, e.offset++, this.updatePeek(e);
  }
  updatePeek(e) {
    e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
  }
  locationFromCursor(e) {
    return new ne(e.file, e.state.offset, e.state.line, e.state.column);
  }
};
var Nr = class t4 extends Kt {
  constructor(e, r) {
    e instanceof t4 ? (super(e), this.internalState = { ...e.internalState }) : (super(e, r), this.internalState = this.state);
  }
  advance() {
    this.state = this.internalState, super.advance(), this.processEscapeSequence();
  }
  init() {
    super.init(), this.processEscapeSequence();
  }
  clone() {
    return new t4(this);
  }
  getChars(e) {
    let r = e.clone(), n = "";
    for (; r.internalState.offset < this.internalState.offset; )
      n += String.fromCodePoint(r.peek()), r.advance();
    return n;
  }
  processEscapeSequence() {
    let e = () => this.internalState.peek;
    if (e() === 92)
      if (this.internalState = { ...this.state }, this.advanceState(this.internalState), e() === 110)
        this.state.peek = 10;
      else if (e() === 114)
        this.state.peek = 13;
      else if (e() === 118)
        this.state.peek = 11;
      else if (e() === 116)
        this.state.peek = 9;
      else if (e() === 98)
        this.state.peek = 8;
      else if (e() === 102)
        this.state.peek = 12;
      else if (e() === 117)
        if (this.advanceState(this.internalState), e() === 123) {
          this.advanceState(this.internalState);
          let r = this.clone(), n = 0;
          for (; e() !== 125; )
            this.advanceState(this.internalState), n++;
          this.state.peek = this.decodeHexDigits(r, n);
        } else {
          let r = this.clone();
          this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 4);
        }
      else if (e() === 120) {
        this.advanceState(this.internalState);
        let r = this.clone();
        this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 2);
      } else if (mr(e())) {
        let r = "", n = 0, s = this.clone();
        for (; mr(e()) && n < 3; )
          s = this.clone(), r += String.fromCodePoint(e()), this.advanceState(this.internalState), n++;
        this.state.peek = parseInt(r, 8), this.internalState = s.internalState;
      } else
        fr(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
  }
  decodeHexDigits(e, r) {
    let n = this.input.slice(e.internalState.offset, e.internalState.offset + r), s = parseInt(n, 16);
    if (isNaN(s))
      throw e.state = e.internalState, new ht("Invalid hexadecimal escape sequence", e);
    return s;
  }
};
var ht = class {
  constructor(e, r) {
    this.msg = e, this.cursor = r;
  }
};
var I = class t5 extends Re {
  static create(e, r, n) {
    return new t5(e, r, n);
  }
  constructor(e, r, n) {
    super(r, n), this.elementName = e;
  }
};
var $r = class {
  constructor(e, r) {
    this.rootNodes = e, this.errors = r;
  }
};
var Qt = class {
  constructor(e) {
    this.getTagDefinition = e;
  }
  parse(e, r, n, s = false, i) {
    let a = (D) => (P, ...B) => D(P.toLowerCase(), ...B), o = s ? this.getTagDefinition : a(this.getTagDefinition), u = (D) => o(D).getContentType(), p = s ? i : a(i), m = Ps(e, r, i ? (D, P, B, c) => {
      let g = p(D, P, B, c);
      return g !== void 0 ? g : u(D);
    } : u, n), d = n && n.canSelfClose || false, C = n && n.allowHtmComponentClosingTags || false, _ = new Or(m.tokens, o, d, C, s);
    return _.build(), new $r(_.rootNodes, m.errors.concat(_.errors));
  }
};
var Or = class t6 {
  constructor(e, r, n, s, i) {
    this.tokens = e, this.getTagDefinition = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = s, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
  }
  build() {
    for (; this._peek.type !== 30; )
      this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._advance();
    for (let e of this._containerStack)
      e instanceof J && this.errors.push(I.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
  }
  _advance() {
    let e = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e;
  }
  _advanceIf(e) {
    return this._peek.type === e ? this._advance() : null;
  }
  _consumeCdata(e) {
    let r = this._advance(), n = this._getText(r), s = this._advanceIf(13);
    this._addToParent(new Mt(n, new f(e.sourceSpan.start, (s || r).sourceSpan.end), [r]));
  }
  _consumeComment(e) {
    let r = this._advanceIf(7), n = this._advanceIf(11), s = r != null ? r.parts[0].trim() : null, i = new f(e.sourceSpan.start, (n || r || e).sourceSpan.end);
    this._addToParent(new Ut(s, i));
  }
  _consumeDocType(e) {
    let r = this._advanceIf(7), n = this._advanceIf(19), s = r != null ? r.parts[0].trim() : null, i = new f(e.sourceSpan.start, (n || r || e).sourceSpan.end);
    this._addToParent(new Wt(s, i));
  }
  _consumeExpansion(e) {
    let r = this._advance(), n = this._advance(), s = [];
    for (; this._peek.type === 21; ) {
      let a = this._parseExpansionCase();
      if (!a)
        return;
      s.push(a);
    }
    if (this._peek.type !== 24) {
      this.errors.push(I.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      return;
    }
    let i = new f(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
    this._addToParent(new qt(r.parts[0], n.parts[0], s, i, r.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    let e = this._advance();
    if (this._peek.type !== 22)
      return this.errors.push(I.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    let r = this._advance(), n = this._collectExpansionExpTokens(r);
    if (!n)
      return null;
    let s = this._advance();
    n.push({ type: 30, parts: [], sourceSpan: s.sourceSpan });
    let i = new t6(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
    if (i.build(), i.errors.length > 0)
      return this.errors = this.errors.concat(i.errors), null;
    let a = new f(e.sourceSpan.start, s.sourceSpan.end, e.sourceSpan.fullStart), o = new f(r.sourceSpan.start, s.sourceSpan.end, r.sourceSpan.fullStart);
    return new Ht(e.parts[0], i.rootNodes, a, e.sourceSpan, o);
  }
  _collectExpansionExpTokens(e) {
    let r = [], n = [22];
    for (; ; ) {
      if ((this._peek.type === 20 || this._peek.type === 22) && n.push(this._peek.type), this._peek.type === 23)
        if (Ns(n, 22)) {
          if (n.pop(), n.length === 0)
            return r;
        } else
          return this.errors.push(I.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 24)
        if (Ns(n, 20))
          n.pop();
        else
          return this.errors.push(I.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 30)
        return this.errors.push(I.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      r.push(this._advance());
    }
  }
  _getText(e) {
    let r = e.parts[0];
    if (r.length > 0 && r[0] == `
`) {
      let n = this._getClosestParentElement();
      n != null && n.children.length == 0 && this.getTagDefinition(n.name).ignoreFirstLf && (r = r.substring(1));
    }
    return r;
  }
  _consumeText(e) {
    let r = [e], n = e.sourceSpan, s = e.parts[0];
    if (s.length > 0 && s[0] === `
`) {
      let i = this._getContainer();
      i != null && i.children.length === 0 && this.getTagDefinition(i.name).ignoreFirstLf && (s = s.substring(1), r[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [s] });
    }
    for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; )
      e = this._advance(), r.push(e), e.type === 8 ? s += e.parts.join("").replace(/&([^;]+);/g, Is) : e.type === 9 ? s += e.parts[0] : s += e.parts.join("");
    if (s.length > 0) {
      let i = e.sourceSpan;
      this._addToParent(new Ot(s, new f(n.start, i.end, n.fullStart, n.details), r));
    }
  }
  _closeVoidElement() {
    let e = this._getContainer();
    e instanceof z && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
  }
  _consumeStartTag(e) {
    let [r, n] = e.parts, s = [];
    for (; this._peek.type === 14; )
      s.push(this._consumeAttr(this._advance()));
    let i = this._getElementFullName(r, n, this._getClosestParentElement()), a = false;
    if (this._peek.type === 2) {
      this._advance(), a = true;
      let C = this.getTagDefinition(i);
      this.canSelfClose || C.canSelfClose || Me(i) !== null || C.isVoid || this.errors.push(I.create(i, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
    } else
      this._peek.type === 1 && (this._advance(), a = false);
    let o = this._peek.sourceSpan.fullStart, u = new f(e.sourceSpan.start, o, e.sourceSpan.fullStart), p = new f(e.sourceSpan.start, o, e.sourceSpan.fullStart), l = new f(e.sourceSpan.start.moveBy(1), e.sourceSpan.end), m = new z(i, s, [], u, p, void 0, l), d = this._getContainer();
    this._pushContainer(m, d instanceof z && this.getTagDefinition(d.name).isClosedByChild(m.name)), a ? this._popContainer(i, z, u) : e.type === 4 && (this._popContainer(i, z, null), this.errors.push(I.create(i, u, `Opening tag "${i}" not terminated.`)));
  }
  _pushContainer(e, r) {
    r && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
  }
  _consumeEndTag(e) {
    let r = this.allowHtmComponentClosingTags && e.parts.length === 0 ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
    if (r && this.getTagDefinition(r).isVoid)
      this.errors.push(I.create(r, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
    else if (!this._popContainer(r, z, e.sourceSpan)) {
      let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
      this.errors.push(I.create(r, e.sourceSpan, n));
    }
  }
  _popContainer(e, r, n) {
    let s = false;
    for (let i = this._containerStack.length - 1; i >= 0; i--) {
      let a = this._containerStack[i];
      if (Me(a.name) ? a.name === e : (e == null || a.name.toLowerCase() === e.toLowerCase()) && a instanceof r)
        return a.endSourceSpan = n, a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !s;
      (a instanceof J || a instanceof z && !this.getTagDefinition(a.name).closedByParent) && (s = true);
    }
    return false;
  }
  _consumeAttr(e) {
    let r = qe(e.parts[0], e.parts[1]), n = e.sourceSpan.end, s;
    this._peek.type === 15 && (s = this._advance());
    let i = "", a = [], o, u;
    if (this._peek.type === 16)
      for (o = this._peek.sourceSpan, u = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9; ) {
        let m = this._advance();
        a.push(m), m.type === 17 ? i += m.parts.join("").replace(/&([^;]+);/g, Is) : m.type === 9 ? i += m.parts[0] : i += m.parts.join(""), u = n = m.sourceSpan.end;
      }
    this._peek.type === 15 && (u = n = this._advance().sourceSpan.end);
    let l = o && u && new f((s == null ? void 0 : s.sourceSpan.start) ?? o.start, u, (s == null ? void 0 : s.sourceSpan.fullStart) ?? o.fullStart);
    return new Vt(r, i, new f(e.sourceSpan.start, n, e.sourceSpan.fullStart), e.sourceSpan, l, a.length > 0 ? a : void 0, void 0);
  }
  _consumeBlockOpen(e) {
    let r = [];
    for (; this._peek.type === 28; ) {
      let o = this._advance();
      r.push(new ot(o.parts[0], o.sourceSpan));
    }
    this._peek.type === 26 && this._advance();
    let n = this._peek.sourceSpan.fullStart, s = new f(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new f(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new J(e.parts[0], r, [], s, i);
    this._pushContainer(a, false);
  }
  _consumeBlockClose(e) {
    this._popContainer(null, J, e.sourceSpan) || this.errors.push(I.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
  }
  _consumeIncompleteBlock(e) {
    let r = [];
    for (; this._peek.type === 28; ) {
      let o = this._advance();
      r.push(new ot(o.parts[0], o.sourceSpan));
    }
    let n = this._peek.sourceSpan.fullStart, s = new f(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new f(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new J(e.parts[0], r, [], s, i);
    this._pushContainer(a, false), this._popContainer(null, J, null), this.errors.push(I.create(e.parts[0], s, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
  }
  _getContainer() {
    return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
  }
  _getClosestParentElement() {
    for (let e = this._containerStack.length - 1; e > -1; e--)
      if (this._containerStack[e] instanceof z)
        return this._containerStack[e];
    return null;
  }
  _addToParent(e) {
    let r = this._getContainer();
    r === null ? this.rootNodes.push(e) : r.children.push(e);
  }
  _getElementFullName(e, r, n) {
    if (e === "" && (e = this.getTagDefinition(r).implicitNamespacePrefix || "", e === "" && n != null)) {
      let s = it(n.name)[1];
      this.getTagDefinition(s).preventNamespaceInheritance || (e = Me(n.name));
    }
    return qe(e, r);
  }
};
function Ns(t8, e) {
  return t8.length > 0 && t8[t8.length - 1] === e;
}
function Is(t8, e) {
  return Ve[e] !== void 0 ? Ve[e] || t8 : /^#x[a-f0-9]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : /^#\d+$/.test(e) ? String.fromCodePoint(parseInt(e.slice(1), 10)) : t8;
}
var Xt = class extends Qt {
  constructor() {
    super(He);
  }
  parse(e, r, n, s = false, i) {
    return super.parse(e, r, n, s, i);
  }
};
var Mr = null;
var co = () => (Mr || (Mr = new Xt()), Mr);
function qr(t8, e = {}) {
  let { canSelfClose: r = false, allowHtmComponentClosingTags: n = false, isTagNameCaseSensitive: s = false, getTagContentType: i, tokenizeAngularBlocks: a = false } = e;
  return co().parse(t8, "angular-html-parser", { tokenizeExpansionForms: false, interpolationConfig: void 0, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: a }, s, i);
}
var po = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
function ho(t8) {
  let e = t8.match(po);
  if (!e)
    return { content: t8 };
  let { startDelimiter: r, language: n, value: s = "", endDelimiter: i } = e.groups, a = n.trim() || "yaml";
  if (r === "+++" && (a = "toml"), a !== "yaml" && r !== i)
    return { content: t8 };
  let [o] = e;
  return { frontMatter: { type: "front-matter", lang: a, value: s, startDelimiter: r, endDelimiter: i, raw: o.replace(/\n$/, "") }, content: v(false, o, /[^\n]/g, " ") + t8.slice(o.length) };
}
var Rs = ho;
function fo(t8, e) {
  let r = new SyntaxError(t8 + " (" + e.loc.start.line + ":" + e.loc.start.column + ")");
  return Object.assign(r, e);
}
var $s = fo;
var Os = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
var Jt = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootdelegatesfocus", "shadowrootmode"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
var Zt = { attrs: true, children: true };
var Ms = /* @__PURE__ */ new Set(["parent"]);
var er = class t7 {
  constructor(e = {}) {
    for (let r of /* @__PURE__ */ new Set([...Ms, ...Object.keys(e)]))
      this.setProperty(r, e[r]);
  }
  setProperty(e, r) {
    if (this[e] !== r) {
      if (e in Zt && (r = r.map((n) => this.createChild(n))), !Ms.has(e)) {
        this[e] = r;
        return;
      }
      Object.defineProperty(this, e, { value: r, enumerable: false, configurable: true });
    }
  }
  map(e) {
    let r;
    for (let n in Zt) {
      let s = this[n];
      if (s) {
        let i = mo(s, (a) => a.map(e));
        r !== s && (r || (r = new t7({ parent: this.parent })), r.setProperty(n, i));
      }
    }
    if (r)
      for (let n in this)
        n in Zt || (r[n] = this[n]);
    return e(r || this);
  }
  walk(e) {
    for (let r in Zt) {
      let n = this[r];
      if (n)
        for (let s = 0; s < n.length; s++)
          n[s].walk(e);
    }
    e(this);
  }
  createChild(e) {
    let r = e instanceof t7 ? e.clone() : new t7(e);
    return r.setProperty("parent", this), r;
  }
  insertChildBefore(e, r) {
    this.children.splice(this.children.indexOf(e), 0, this.createChild(r));
  }
  removeChild(e) {
    this.children.splice(this.children.indexOf(e), 1);
  }
  replaceChild(e, r) {
    this.children[this.children.indexOf(e)] = this.createChild(r);
  }
  clone() {
    return new t7(this);
  }
  get firstChild() {
    var e;
    return (e = this.children) == null ? void 0 : e[0];
  }
  get lastChild() {
    var e;
    return (e = this.children) == null ? void 0 : e[this.children.length - 1];
  }
  get prev() {
    var e;
    return (e = this.parent) == null ? void 0 : e.children[this.parent.children.indexOf(this) - 1];
  }
  get next() {
    var e;
    return (e = this.parent) == null ? void 0 : e.children[this.parent.children.indexOf(this) + 1];
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
  get attrMap() {
    return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
  }
};
function mo(t8, e) {
  let r = t8.map(e);
  return r.some((n, s) => n !== t8[s]) ? r : t8;
}
var go = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: Co }, { regex: /^\[if([^\]]*)]><!$/, parse: So }, { regex: /^<!\s*\[endif]$/, parse: _o }];
function qs(t8, e) {
  if (t8.value)
    for (let { regex: r, parse: n } of go) {
      let s = t8.value.match(r);
      if (s)
        return n(t8, e, s);
    }
  return null;
}
function Co(t8, e, r) {
  let [, n, s, i] = r, a = 4 + n.length, o = t8.sourceSpan.start.moveBy(a), u = o.moveBy(i.length), [p, l] = (() => {
    try {
      return [true, e(i, o).children];
    } catch {
      return [false, [{ type: "text", value: i, sourceSpan: new f(o, u) }]];
    }
  })();
  return { type: "ieConditionalComment", complete: p, children: l, condition: v(false, s.trim(), /\s+/g, " "), sourceSpan: t8.sourceSpan, startSourceSpan: new f(t8.sourceSpan.start, o), endSourceSpan: new f(u, t8.sourceSpan.end) };
}
function So(t8, e, r) {
  let [, n] = r;
  return { type: "ieConditionalStartComment", condition: v(false, n.trim(), /\s+/g, " "), sourceSpan: t8.sourceSpan };
}
function _o(t8) {
  return { type: "ieConditionalEndComment", sourceSpan: t8.sourceSpan };
}
function Eo(t8) {
  if (t8.type === "block") {
    if (t8.name = v(false, t8.name.toLowerCase(), /\s+/g, " ").trim(), t8.type = "angularControlFlowBlock", !xt(t8.parameters)) {
      delete t8.parameters;
      return;
    }
    for (let e of t8.parameters)
      e.type = "angularControlFlowBlockParameter";
    t8.parameters = { type: "angularControlFlowBlockParameters", children: t8.parameters, sourceSpan: new f(t8.parameters[0].sourceSpan.start, me(false, t8.parameters, -1).sourceSpan.end) };
  }
}
function Vs(t8, e, r) {
  let { name: n, canSelfClose: s = true, normalizeTagName: i = false, normalizeAttributeName: a = false, allowHtmComponentClosingTags: o = false, isTagNameCaseSensitive: u = false, shouldParseAsRawText: p } = e, { rootNodes: l, errors: m } = qr(t8, { canSelfClose: s, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: u, getTagContentType: p ? (...c) => p(...c) ? F.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: n === "angular" ? true : void 0 });
  if (n === "vue") {
    if (l.some((w) => w.type === "docType" && w.value === "html" || w.type === "element" && w.name.toLowerCase() === "html"))
      return Vs(t8, Ws, r);
    let g, y = () => g ?? (g = qr(t8, { canSelfClose: s, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: u })), $ = (w) => y().rootNodes.find(({ startSourceSpan: q }) => q && q.start.offset === w.startSourceSpan.start.offset) ?? w;
    for (let [w, q] of l.entries()) {
      let { endSourceSpan: Wr, startSourceSpan: js } = q;
      if (Wr === null)
        m = y().errors, l[w] = $(q);
      else if (Ao(q, r)) {
        let zr = y().errors.find((Gr) => Gr.span.start.offset > js.start.offset && Gr.span.start.offset < Wr.end.offset);
        zr && Hs(zr), l[w] = $(q);
      }
    }
  }
  m.length > 0 && Hs(m[0]);
  let d = (c) => {
    let g = c.name.startsWith(":") ? c.name.slice(1).split(":")[0] : null, y = c.nameSpan.toString(), $ = g !== null && y.startsWith(`${g}:`), w = $ ? y.slice(g.length + 1) : y;
    c.name = w, c.namespace = g, c.hasExplicitNamespace = $;
  }, C = (c) => {
    switch (c.type) {
      case "element":
        d(c);
        for (let g of c.attrs)
          d(g), g.valueSpan ? (g.value = g.valueSpan.toString(), /["']/.test(g.value[0]) && (g.value = g.value.slice(1, -1))) : g.value = null;
        break;
      case "comment":
        c.value = c.sourceSpan.toString().slice(4, -3);
        break;
      case "text":
        c.value = c.sourceSpan.toString();
        break;
    }
  }, _ = (c, g) => {
    let y = c.toLowerCase();
    return g(y) ? y : c;
  }, D = (c) => {
    if (c.type === "element" && (i && (!c.namespace || c.namespace === c.tagDefinition.implicitNamespacePrefix || de(c)) && (c.name = _(c.name, (g) => Os.has(g))), a))
      for (let g of c.attrs)
        g.namespace || (g.name = _(g.name, (y) => Jt.has(c.name) && (Jt.get("*").has(y) || Jt.get(c.name).has(y))));
  }, P = (c) => {
    c.sourceSpan && c.endSourceSpan && (c.sourceSpan = new f(c.sourceSpan.start, c.endSourceSpan.end));
  }, B = (c) => {
    if (c.type === "element") {
      let g = He(u ? c.name : c.name.toLowerCase());
      !c.namespace || c.namespace === g.implicitNamespacePrefix || de(c) ? c.tagDefinition = g : c.tagDefinition = He("");
    }
  };
  return zt(new class extends ut {
    visit(c) {
      C(c), B(c), D(c), P(c);
    }
  }(), l), l;
}
function Ao(t8, e) {
  var n;
  if (t8.type !== "element" || t8.name !== "template")
    return false;
  let r = (n = t8.attrs.find((s) => s.name === "lang")) == null ? void 0 : n.value;
  return !r || Ne(e, { language: r }) === "html";
}
function Hs(t8) {
  let { msg: e, span: { start: r, end: n } } = t8;
  throw $s(e, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: t8 });
}
function Us(t8, e, r = {}, n = true) {
  let { frontMatter: s, content: i } = n ? Rs(t8) : { frontMatter: null, content: t8 }, a = new Se(t8, r.filepath), o = new ne(a, 0, 0, 0), u = o.moveBy(t8.length), p = { type: "root", sourceSpan: new f(o, u), children: Vs(i, e, r) };
  if (s) {
    let d = new ne(a, 0, 0, 0), C = d.moveBy(s.raw.length);
    s.sourceSpan = new f(d, C), p.children.unshift(s);
  }
  let l = new er(p), m = (d, C) => {
    let { offset: _ } = C, D = v(false, t8.slice(0, _), /[^\n\r]/g, " "), B = Us(D + d, e, r, false);
    B.sourceSpan = new f(C, me(false, B.children, -1).sourceSpan.end);
    let c = B.children[0];
    return c.length === _ ? B.children.shift() : (c.sourceSpan = new f(c.sourceSpan.start.moveBy(_), c.sourceSpan.end), c.value = c.value.slice(_)), B;
  };
  return l.walk((d) => {
    if (d.type === "comment") {
      let C = qs(d, m);
      C && d.parent.replaceChild(d, C);
    }
    Eo(d);
  }), l;
}
function tr(t8) {
  return { parse: (e, r) => Us(e, t8, r), hasPragma: Rn, astFormat: "html", locStart: se, locEnd: ie };
}
var Ws = { name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true };
var Do = tr(Ws);
var vo = tr({ name: "angular" });
var yo = tr({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(t8, e, r, n) {
  return t8.toLowerCase() !== "html" && !r && (t8 !== "template" || n.some(({ name: s, value: i }) => s === "lang" && i !== "html" && i !== "" && i !== void 0));
} });
var wo = tr({ name: "lwc", canSelfClose: false });
var zs = [{ linguistLanguageId: 146, name: "Angular", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".component.html"], parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 146, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"], parsers: ["html"], vscodeLanguageIds: ["html"] }, { linguistLanguageId: 146, name: "Lightning Web Components", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [], parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] }];
var Vr = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var Gs = "HTML";
var bo = { bracketSameLine: Vr.bracketSameLine, htmlWhitespaceSensitivity: { category: Gs, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: Vr.singleAttributePerLine, vueIndentScriptAndStyle: { category: Gs, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
var Ys = bo;
var To = { html: fs };
var dh = Ur;
var import_standalone = __toESM2(require_standalone());
function dedent(templ) {
  var values = [];
  for (var _i2 = 1; _i2 < arguments.length; _i2++) {
    values[_i2 - 1] = arguments[_i2];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match) {
        var _a2, _b;
        return (_b = (_a2 = match.match(/[\t ]/g)) === null || _a2 === void 0 ? void 0 : _a2.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  values.forEach(function(value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value;
    if (typeof value === "string" && value.includes("\n")) {
      indentedValue = String(value).split("\n").map(function(str, i2) {
        return i2 === 0 ? str : "" + endentation + str;
      }).join("\n");
    }
    string += indentedValue + strings[i + 1];
  });
  return string;
}
var formatter = (0, import_memoizerific.default)(2)(async (type, source) => {
  if (type === false) {
    return source;
  }
  if (type === "dedent" || type === true) {
    return dedent(source);
  }
  return (await import_standalone.default.format(source, {
    parser: type,
    plugins: [dh],
    htmlWhitespaceSensitivity: "ignore"
  })).trim();
});
export {
  formatter
};
