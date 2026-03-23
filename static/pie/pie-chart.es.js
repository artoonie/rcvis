var yl = Object.defineProperty;
var Qs = (t) => {
  throw TypeError(t);
};
var wl = (t, e, n) => e in t ? yl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var it = (t, e, n) => wl(t, typeof e != "symbol" ? e + "" : e, n), Xi = (t, e, n) => e.has(t) || Qs("Cannot " + n);
var v = (t, e, n) => (Xi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => e.has(t) ? Qs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), O = (t, e, n, r) => (Xi(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), _t = (t, e, n) => (Xi(t, e, "access private method"), n);
var Sa;
typeof window < "u" && ((Sa = window.__svelte ?? (window.__svelte = {})).v ?? (Sa.v = /* @__PURE__ */ new Set())).add("5");
const xl = 1, bl = 2, $l = 16, Al = 1, El = 4, Rl = 8, Cl = 16, Tl = 2, bs = "[", Ei = "[!", $s = "]", ar = {}, $t = Symbol(), Nl = "http://www.w3.org/1999/xhtml", Qi = !1;
var Ma = Array.isArray, Sl = Array.prototype.indexOf, or = Array.prototype.includes, Ri = Array.from, hi = Object.keys, di = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, kl = Object.prototype, Pl = Array.prototype, Ml = Object.getPrototypeOf, ta = Object.isExtensible;
const Dl = () => {
};
function Fl(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Da() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function Il(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const Et = 2, Mr = 4, Ci = 8, Fa = 1 << 24, Qe = 16, xe = 32, hn = 64, Ia = 128, le = 512, yt = 1024, Rt = 2048, we = 4096, te = 8192, Je = 16384, vr = 32768, lr = 65536, ea = 1 << 17, Oa = 1 << 18, Yn = 1 << 19, Ol = 1 << 20, ln = 1 << 25, Fn = 65536, ts = 1 << 21, As = 1 << 22, un = 1 << 23, Sr = Symbol("$state"), La = Symbol("legacy props"), yn = new class extends Error {
  constructor() {
    super(...arguments);
    it(this, "name", "StaleReactionError");
    it(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Xr = 3, gr = 8;
function Ll(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ql() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Vl(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Yl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zl(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Wl(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Kl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Jl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ti(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Zl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let J = !1;
function Ke(t) {
  J = t;
}
let H;
function zt(t) {
  if (t === null)
    throw Ti(), ar;
  return H = t;
}
function Ni() {
  return zt(/* @__PURE__ */ Ie(H));
}
function Kt(t) {
  if (J) {
    if (/* @__PURE__ */ Ie(H) !== null)
      throw Ti(), ar;
    H = t;
  }
}
function es(t = 1) {
  if (J) {
    for (var e = t, n = H; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(n);
    H = n;
  }
}
function pi(t = !0) {
  for (var e = 0, n = H; ; ) {
    if (n.nodeType === gr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === $s) {
        if (e === 0) return n;
        e -= 1;
      } else (r === bs || r === Ei || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(n)
    );
    t && n.remove(), n = i;
  }
}
function qa(t) {
  if (!t || t.nodeType !== gr)
    throw Ti(), ar;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Va(t) {
  return t === this.v;
}
function jl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ya(t) {
  return !jl(t, this.v);
}
let Ql = !1, ee = null;
function ur(t) {
  ee = t;
}
function Es(t, e = !1, n) {
  ee = {
    p: ee,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Rs(t) {
  var e = (
    /** @type {ComponentContext} */
    ee
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      ho(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, ee = e.p, t ?? /** @type {T} */
  {};
}
function Ha() {
  return !0;
}
let wn = [];
function za() {
  var t = wn;
  wn = [], Fl(t);
}
function kn(t) {
  if (wn.length === 0 && !kr) {
    var e = wn;
    queueMicrotask(() => {
      e === wn && za();
    });
  }
  wn.push(t);
}
function tu() {
  for (; wn.length > 0; )
    za();
}
function Xa(t) {
  var e = W;
  if (e === null)
    return Y.f |= un, t;
  if ((e.f & vr) === 0 && (e.f & Mr) === 0)
    throw t;
  fr(t, e);
}
function fr(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ia) !== 0) {
      if ((e.f & vr) === 0)
        throw t;
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    }
    e = e.parent;
  }
  throw t;
}
const eu = -7169;
function at(t, e) {
  t.f = t.f & eu | e;
}
function Cs(t) {
  (t.f & le) !== 0 || t.deps === null ? at(t, yt) : at(t, we);
}
function Ba(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Et) === 0 || (e.f & Fn) === 0 || (e.f ^= Fn, Ba(
        /** @type {Derived} */
        e.deps
      ));
}
function Wa(t, e, n) {
  (t.f & Rt) !== 0 ? e.add(t) : (t.f & we) !== 0 && n.add(t), Ba(t.deps), at(t, yt);
}
const Kr = /* @__PURE__ */ new Set();
let X = null, At = null, Vt = [], Si = null, ns = !1, kr = !1;
var Qn, tr, An, er, qr, Vr, En, Xe, nr, Fe, rs, is, Ua;
const zs = class zs {
  constructor() {
    L(this, Fe);
    it(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    it(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    it(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    L(this, Qn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, tr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    L(this, An, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    L(this, er, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    L(this, qr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    L(this, Vr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    L(this, En, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    L(this, Xe, /* @__PURE__ */ new Map());
    it(this, "is_fork", !1);
    L(this, nr, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, er) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, Xe).has(e) || v(this, Xe).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = v(this, Xe).get(e);
    if (n) {
      v(this, Xe).delete(e);
      for (var r of n.d)
        at(r, Rt), me(r);
      for (r of n.m)
        at(r, we), me(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Vt = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      _t(this, Fe, rs).call(this, s, n, r);
    if (this.is_deferred()) {
      _t(this, Fe, is).call(this, r), _t(this, Fe, is).call(this, n);
      for (const [s, a] of v(this, Xe))
        Za(s, a);
    } else {
      for (const s of v(this, Qn)) s();
      v(this, Qn).clear(), v(this, An) === 0 && _t(this, Fe, Ua).call(this), X = null, na(r), na(n), (i = v(this, qr)) == null || i.resolve();
    }
    At = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== $t && !this.previous.has(e) && this.previous.set(e, n), (e.f & un) === 0 && (this.current.set(e, e.v), At == null || At.set(e, e.v));
  }
  activate() {
    X = this, this.apply();
  }
  deactivate() {
    X === this && (X = null, At = null);
  }
  flush() {
    if (this.activate(), Vt.length > 0) {
      if (Ga(), X !== null && X !== this)
        return;
    } else v(this, An) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of v(this, tr)) e(this);
    v(this, tr).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    O(this, An, v(this, An) + 1), e && O(this, er, v(this, er) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    O(this, An, v(this, An) - 1), e && O(this, er, v(this, er) - 1), !v(this, nr) && (O(this, nr, !0), kn(() => {
      O(this, nr, !1), this.is_deferred() ? Vt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of v(this, Vr))
      v(this, En).delete(e), at(e, Rt), me(e);
    for (const e of v(this, En))
      at(e, we), me(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    v(this, Qn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    v(this, tr).add(e);
  }
  settled() {
    return (v(this, qr) ?? O(this, qr, Da())).promise;
  }
  static ensure() {
    if (X === null) {
      const e = X = new zs();
      Kr.add(X), kr || kn(() => {
        X === e && e.flush();
      });
    }
    return X;
  }
  apply() {
  }
};
Qn = new WeakMap(), tr = new WeakMap(), An = new WeakMap(), er = new WeakMap(), qr = new WeakMap(), Vr = new WeakMap(), En = new WeakMap(), Xe = new WeakMap(), nr = new WeakMap(), Fe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
rs = function(e, n, r) {
  e.f ^= yt;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (xe | hn)) !== 0, l = o && (a & yt) !== 0, u = l || (a & te) !== 0 || v(this, Xe).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= yt : s !== null && (a & (Mr | Ci | Fa)) !== 0 ? s.b.defer_effect(i) : (a & Mr) !== 0 ? n.push(i) : Br(i) && ((a & Qe) !== 0 && v(this, En).add(i), hr(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    var h = i.parent;
    for (i = i.next; i === null && h !== null; )
      h === s && (s = null), i = h.next, h = h.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
is = function(e) {
  for (var n = 0; n < e.length; n += 1)
    Wa(e[n], v(this, Vr), v(this, En));
}, Ua = function() {
  var i;
  if (Kr.size > 1) {
    this.previous.clear();
    var e = At, n = !0;
    for (const s of Kr) {
      if (s === this) {
        n = !1;
        continue;
      }
      const a = [];
      for (const [l, u] of this.current) {
        if (s.current.has(l))
          if (n && u !== s.current.get(l))
            s.current.set(l, u);
          else
            continue;
        a.push(l);
      }
      if (a.length === 0)
        continue;
      const o = [...s.current.keys()].filter((l) => !this.current.has(l));
      if (o.length > 0) {
        var r = Vt;
        Vt = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          Ka(f, o, l, u);
        if (Vt.length > 0) {
          X = s, s.apply();
          for (const f of Vt)
            _t(i = s, Fe, rs).call(i, f, [], []);
          s.deactivate();
        }
        Vt = r;
      }
    }
    X = null, At = e;
  }
  this.committed = !0, Kr.delete(this);
};
let Ze = zs;
function ft(t) {
  var e = kr;
  kr = !0;
  try {
    for (var n; ; ) {
      if (tu(), Vt.length === 0 && (X == null || X.flush(), Vt.length === 0))
        return Si = null, /** @type {T} */
        n;
      Ga();
    }
  } finally {
    kr = e;
  }
}
function Ga() {
  ns = !0;
  var t = null;
  try {
    for (var e = 0; Vt.length > 0; ) {
      var n = Ze.ensure();
      if (e++ > 1e3) {
        var r, i;
        nu();
      }
      n.process(Vt), fn.clear();
    }
  } finally {
    Vt = [], ns = !1, Si = null;
  }
}
function nu() {
  try {
    Xl();
  } catch (t) {
    fr(t, Si);
  }
}
let pe = null;
function na(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Je | te)) === 0 && Br(r) && (pe = /* @__PURE__ */ new Set(), hr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && go(r), (pe == null ? void 0 : pe.size) > 0)) {
        fn.clear();
        for (const i of pe) {
          if ((i.f & (Je | te)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            pe.has(a) && (pe.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (Je | te)) === 0 && hr(l);
          }
        }
        pe.clear();
      }
    }
    pe = null;
  }
}
function Ka(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & Et) !== 0 ? Ka(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (As | Qe)) !== 0 && (s & Rt) === 0 && Ja(i, e, r) && (at(i, Rt), me(
        /** @type {Effect} */
        i
      ));
    }
}
function Ja(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (or.call(e, i))
        return !0;
      if ((i.f & Et) !== 0 && Ja(
        /** @type {Derived} */
        i,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function me(t) {
  for (var e = Si = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ns && e === W && (n & Qe) !== 0 && (n & Oa) === 0)
      return;
    if ((n & (hn | xe)) !== 0) {
      if ((n & yt) === 0) return;
      e.f ^= yt;
    }
  }
  Vt.push(e);
}
function Za(t, e) {
  if (!((t.f & xe) !== 0 && (t.f & yt) !== 0)) {
    (t.f & Rt) !== 0 ? e.d.push(t) : (t.f & we) !== 0 && e.m.push(t), at(t, yt);
    for (var n = t.first; n !== null; )
      Za(n, e), n = n.next;
  }
}
function ru(t) {
  let e = 0, n = In(0), r;
  return () => {
    Ss() && (x(n), Ps(() => (e === 0 && (r = Mi(() => t(() => Pr(n)))), e += 1, () => {
      kn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Pr(n));
      });
    })));
  };
}
var iu = lr | Yn | Ia;
function su(t, e, n) {
  new au(t, e, n);
}
var jt, Yr, Te, Rn, Ne, se, qt, Se, Be, on, Cn, We, rr, Tn, ir, sr, Ue, $i, ct, ja, Qa, ss, ni, ri, as;
class au {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    L(this, ct);
    /** @type {Boundary | null} */
    it(this, "parent");
    it(this, "is_pending", !1);
    /** @type {TemplateNode} */
    L(this, jt);
    /** @type {TemplateNode | null} */
    L(this, Yr, J ? H : null);
    /** @type {BoundaryProps} */
    L(this, Te);
    /** @type {((anchor: Node) => void)} */
    L(this, Rn);
    /** @type {Effect} */
    L(this, Ne);
    /** @type {Effect | null} */
    L(this, se, null);
    /** @type {Effect | null} */
    L(this, qt, null);
    /** @type {Effect | null} */
    L(this, Se, null);
    /** @type {DocumentFragment | null} */
    L(this, Be, null);
    /** @type {TemplateNode | null} */
    L(this, on, null);
    L(this, Cn, 0);
    L(this, We, 0);
    L(this, rr, !1);
    L(this, Tn, !1);
    /** @type {Set<Effect>} */
    L(this, ir, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    L(this, sr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    L(this, Ue, null);
    L(this, $i, ru(() => (O(this, Ue, In(v(this, Cn))), () => {
      O(this, Ue, null);
    })));
    O(this, jt, e), O(this, Te, n), O(this, Rn, r), this.parent = /** @type {Effect} */
    W.b, this.is_pending = !!v(this, Te).pending, O(this, Ne, Ms(() => {
      if (W.b = this, J) {
        const s = v(this, Yr);
        Ni(), /** @type {Comment} */
        s.nodeType === gr && /** @type {Comment} */
        s.data === Ei ? _t(this, ct, Qa).call(this) : (_t(this, ct, ja).call(this), v(this, We) === 0 && (this.is_pending = !1));
      } else {
        var i = _t(this, ct, ss).call(this);
        try {
          O(this, se, oe(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, We) > 0 ? _t(this, ct, ri).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, on)) == null || s.remove();
      };
    }, iu)), J && O(this, jt, H);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Wa(e, v(this, ir), v(this, sr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, Te).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    _t(this, ct, as).call(this, e), O(this, Cn, v(this, Cn) + e), !(!v(this, Ue) || v(this, rr)) && (O(this, rr, !0), kn(() => {
      O(this, rr, !1), v(this, Ue) && cr(v(this, Ue), v(this, Cn));
    }));
  }
  get_effect_pending() {
    return v(this, $i).call(this), x(
      /** @type {Source<number>} */
      v(this, Ue)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = v(this, Te).onerror;
    let r = v(this, Te).failed;
    if (v(this, Tn) || !n && !r)
      throw e;
    v(this, se) && (Ft(v(this, se)), O(this, se, null)), v(this, qt) && (Ft(v(this, qt)), O(this, qt, null)), v(this, Se) && (Ft(v(this, Se)), O(this, Se, null)), J && (zt(
      /** @type {TemplateNode} */
      v(this, Yr)
    ), es(), zt(pi()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        Zl();
        return;
      }
      i = !0, s && Jl(), Ze.ensure(), O(this, Cn, 0), v(this, Se) !== null && Pn(v(this, Se), () => {
        O(this, Se, null);
      }), this.is_pending = this.has_pending_snippet(), O(this, se, _t(this, ct, ni).call(this, () => (O(this, Tn, !1), oe(() => v(this, Rn).call(this, v(this, jt)))))), v(this, We) > 0 ? _t(this, ct, ri).call(this) : this.is_pending = !1;
    };
    kn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        fr(o, v(this, Ne) && v(this, Ne).parent);
      }
      r && O(this, Se, _t(this, ct, ni).call(this, () => {
        Ze.ensure(), O(this, Tn, !0);
        try {
          return oe(() => {
            r(
              v(this, jt),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return fr(
            o,
            /** @type {Effect} */
            v(this, Ne).parent
          ), null;
        } finally {
          O(this, Tn, !1);
        }
      }));
    });
  }
}
jt = new WeakMap(), Yr = new WeakMap(), Te = new WeakMap(), Rn = new WeakMap(), Ne = new WeakMap(), se = new WeakMap(), qt = new WeakMap(), Se = new WeakMap(), Be = new WeakMap(), on = new WeakMap(), Cn = new WeakMap(), We = new WeakMap(), rr = new WeakMap(), Tn = new WeakMap(), ir = new WeakMap(), sr = new WeakMap(), Ue = new WeakMap(), $i = new WeakMap(), ct = new WeakSet(), ja = function() {
  try {
    O(this, se, oe(() => v(this, Rn).call(this, v(this, jt))));
  } catch (e) {
    this.error(e);
  }
}, Qa = function() {
  const e = v(this, Te).pending;
  e && (O(this, qt, oe(() => e(v(this, jt)))), kn(() => {
    var n = _t(this, ct, ss).call(this);
    O(this, se, _t(this, ct, ni).call(this, () => (Ze.ensure(), oe(() => v(this, Rn).call(this, n))))), v(this, We) > 0 ? _t(this, ct, ri).call(this) : (Pn(
      /** @type {Effect} */
      v(this, qt),
      () => {
        O(this, qt, null);
      }
    ), this.is_pending = !1);
  }));
}, ss = function() {
  var e = v(this, jt);
  return this.is_pending && (O(this, on, fe()), v(this, jt).before(v(this, on)), e = v(this, on)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ni = function(e) {
  var n = W, r = Y, i = ee;
  De(v(this, Ne)), ce(v(this, Ne)), ur(v(this, Ne).ctx);
  try {
    return e();
  } catch (s) {
    return Xa(s), null;
  } finally {
    De(n), ce(r), ur(i);
  }
}, ri = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    v(this, Te).pending
  );
  v(this, se) !== null && (O(this, Be, document.createDocumentFragment()), v(this, Be).append(
    /** @type {TemplateNode} */
    v(this, on)
  ), yo(v(this, se), v(this, Be))), v(this, qt) === null && O(this, qt, oe(() => e(v(this, jt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
as = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && _t(n = this.parent, ct, as).call(n, e);
    return;
  }
  if (O(this, We, v(this, We) + e), v(this, We) === 0) {
    this.is_pending = !1;
    for (const r of v(this, ir))
      at(r, Rt), me(r);
    for (const r of v(this, sr))
      at(r, we), me(r);
    v(this, ir).clear(), v(this, sr).clear(), v(this, qt) && Pn(v(this, qt), () => {
      O(this, qt, null);
    }), v(this, Be) && (v(this, jt).before(v(this, Be)), O(this, Be, null));
  }
};
function ou(t, e, n, r) {
  const i = ki;
  var s = t.filter((c) => !c.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = X, o = (
    /** @type {Effect} */
    W
  ), l = lu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    l();
    try {
      r(c);
    } catch (p) {
      (o.f & Je) === 0 && fr(p, o);
    }
    a == null || a.deactivate(), os();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function h() {
    l(), Promise.all(n.map((c) => /* @__PURE__ */ uu(c))).then((c) => f([...e.map(i), ...c])).catch((c) => fr(c, o));
  }
  u ? u.then(h) : h();
}
function lu() {
  var t = W, e = Y, n = ee, r = X;
  return function(s = !0) {
    De(t), ce(e), ur(n), s && (r == null || r.activate());
  };
}
function os() {
  De(null), ce(null), ur(null);
}
// @__NO_SIDE_EFFECTS__
function ki(t) {
  var e = Et | Rt, n = Y !== null && (Y.f & Et) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return W !== null && (W.f |= Yn), {
    ctx: ee,
    deps: null,
    effects: null,
    equals: Va,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      $t
    ),
    wv: 0,
    parent: n ?? W,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function uu(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    W
  );
  r === null && ql();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = In(
    /** @type {V} */
    $t
  ), o = !Y, l = /* @__PURE__ */ new Map();
  return yu(() => {
    var p;
    var u = Da();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === X && f.committed && f.deactivate(), os();
      });
    } catch (g) {
      u.reject(g), os();
    }
    var f = (
      /** @type {Batch} */
      X
    );
    if (o) {
      var h = i.is_rendered();
      i.update_pending_count(1), f.increment(h), (p = l.get(f)) == null || p.reject(yn), l.delete(f), l.set(f, u);
    }
    const c = (g, y = void 0) => {
      if (f.activate(), y)
        y !== yn && (a.f |= un, cr(a, y));
      else {
        (a.f & un) !== 0 && (a.f ^= un), cr(a, g);
        for (const [$, E] of l) {
          if (l.delete($), $ === f) break;
          E.reject(yn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(h));
    };
    u.promise.then(c, (g) => c(null, g || "unknown"));
  }), gu(() => {
    for (const u of l.values())
      u.reject(yn);
  }), new Promise((u) => {
    function f(h) {
      function c() {
        h === s ? u(a) : f(s);
      }
      h.then(c, c);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Gn(t) {
  const e = /* @__PURE__ */ ki(t);
  return wo(e), e;
}
// @__NO_SIDE_EFFECTS__
function to(t) {
  const e = /* @__PURE__ */ ki(t);
  return e.equals = Ya, e;
}
function fu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Ft(
        /** @type {Effect} */
        e[n]
      );
  }
}
function cu(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & Et) === 0)
      return (e.f & Je) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Ts(t) {
  var e, n = W;
  De(cu(t));
  try {
    t.f &= ~Fn, fu(t), e = Ao(t);
  } finally {
    De(n);
  }
  return e;
}
function eo(t) {
  var e = Ts(t);
  if (!t.equals(e) && (t.wv = bo(), (!(X != null && X.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    at(t, yt);
    return;
  }
  cn || (At !== null ? (Ss() || X != null && X.is_fork) && At.set(t, e) : Cs(t));
}
function hu(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(yn), r.teardown = Dl, r.ac = null, Dr(r, 0), Ds(r));
}
function no(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && hr(e);
}
let ls = /* @__PURE__ */ new Set();
const fn = /* @__PURE__ */ new Map();
let ro = !1;
function In(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Va,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function mt(t, e) {
  const n = In(t);
  return wo(n), n;
}
// @__NO_SIDE_EFFECTS__
function io(t, e = !1, n = !0) {
  const r = In(t);
  return e || (r.equals = Ya), r;
}
function st(t, e, n = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ye || (Y.f & ea) !== 0) && Ha() && (Y.f & (Et | Qe | As | ea)) !== 0 && (ue === null || !or.call(ue, t)) && Kl();
  let r = n ? xn(e) : e;
  return cr(t, r);
}
function cr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    cn ? fn.set(t, e) : fn.set(t, n), t.v = e;
    var r = Ze.ensure();
    if (r.capture(t, n), (t.f & Et) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & Rt) !== 0 && Ts(i), Cs(i);
    }
    t.wv = bo(), so(t, Rt), W !== null && (W.f & yt) !== 0 && (W.f & (xe | hn)) === 0 && (ie === null ? bu([t]) : ie.push(t)), !r.is_fork && ls.size > 0 && !ro && du();
  }
  return e;
}
function du() {
  ro = !1;
  for (const t of ls)
    (t.f & yt) !== 0 && at(t, we), Br(t) && hr(t);
  ls.clear();
}
function Pr(t) {
  st(t, t.v + 1);
}
function so(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Rt) === 0;
      if (o && at(s, e), (a & Et) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        At == null || At.delete(l), (a & Fn) === 0 && (a & le && (s.f |= Fn), so(l, we));
      } else o && ((a & Qe) !== 0 && pe !== null && pe.add(
        /** @type {Effect} */
        s
      ), me(
        /** @type {Effect} */
        s
      ));
    }
}
function xn(t) {
  if (typeof t != "object" || t === null || Sr in t)
    return t;
  const e = Ml(t);
  if (e !== kl && e !== Pl)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ma(t), i = /* @__PURE__ */ mt(0), s = Mn, a = (o) => {
    if (Mn === s)
      return o();
    var l = Y, u = Mn;
    ce(null), sa(s);
    var f = o();
    return ce(l), sa(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ mt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ul();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var h = /* @__PURE__ */ mt(u.value);
          return n.set(l, h), h;
        }) : st(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ mt($t));
            n.set(l, f), Pr(i);
          }
        } else
          st(u, $t), Pr(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Sr)
          return t;
        var f = n.get(l), h = l in o;
        if (f === void 0 && (!h || (p = Sn(o, l)) != null && p.writable) && (f = a(() => {
          var g = xn(h ? o[l] : $t), y = /* @__PURE__ */ mt(g);
          return y;
        }), n.set(l, f)), f !== void 0) {
          var c = x(f);
          return c === $t ? void 0 : c;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = x(f));
        } else if (u === void 0) {
          var h = n.get(l), c = h == null ? void 0 : h.v;
          if (h !== void 0 && c !== $t)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        var c;
        if (l === Sr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== $t || Reflect.has(o, l);
        if (u !== void 0 || W !== null && (!f || (c = Sn(o, l)) != null && c.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? xn(o[l]) : $t, g = /* @__PURE__ */ mt(p);
            return g;
          }), n.set(l, u));
          var h = x(u);
          if (h === $t)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var C;
        var h = n.get(l), c = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var g = n.get(p + "");
            g !== void 0 ? st(g, $t) : p in o && (g = a(() => /* @__PURE__ */ mt($t)), n.set(p + "", g));
          }
        if (h === void 0)
          (!c || (C = Sn(o, l)) != null && C.writable) && (h = a(() => /* @__PURE__ */ mt(void 0)), st(h, xn(u)), n.set(l, h));
        else {
          c = h.v !== $t;
          var y = a(() => xn(u));
          st(h, y);
        }
        var $ = Reflect.getOwnPropertyDescriptor(o, l);
        if ($ != null && $.set && $.set.call(f, u), !c) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= E.v && st(E, S + 1);
          }
          Pr(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var c = n.get(h);
          return c === void 0 || c.v !== $t;
        });
        for (var [u, f] of n)
          f.v !== $t && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Gl();
      }
    }
  );
}
var ra, ao, oo, lo;
function us() {
  if (ra === void 0) {
    ra = window, ao = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    oo = Sn(e, "firstChild").get, lo = Sn(e, "nextSibling").get, ta(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ta(n) && (n.__t = void 0);
  }
}
function fe(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function On(t) {
  return (
    /** @type {TemplateNode | null} */
    oo.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Ie(t) {
  return (
    /** @type {TemplateNode | null} */
    lo.call(t)
  );
}
function Jt(t, e) {
  if (!J)
    return /* @__PURE__ */ On(t);
  var n = /* @__PURE__ */ On(H);
  if (n === null)
    n = H.appendChild(fe());
  else if (e && n.nodeType !== Xr) {
    var r = fe();
    return n == null || n.before(r), zt(r), r;
  }
  return e && Pi(
    /** @type {Text} */
    n
  ), zt(n), n;
}
function gn(t, e = !1) {
  if (!J) {
    var n = /* @__PURE__ */ On(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ie(n) : n;
  }
  if (e) {
    if ((H == null ? void 0 : H.nodeType) !== Xr) {
      var r = fe();
      return H == null || H.before(r), zt(r), r;
    }
    Pi(
      /** @type {Text} */
      H
    );
  }
  return H;
}
function de(t, e = 1, n = !1) {
  let r = J ? H : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(r);
  if (!J)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Xr) {
      var s = fe();
      return r === null ? i == null || i.after(s) : r.before(s), zt(s), s;
    }
    Pi(
      /** @type {Text} */
      r
    );
  }
  return zt(r), r;
}
function uo(t) {
  t.textContent = "";
}
function fo() {
  return !1;
}
function Ns(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Nl, t, void 0)
  );
}
function Pi(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Xr; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function co(t) {
  var e = Y, n = W;
  ce(null), De(null);
  try {
    return t();
  } finally {
    ce(e), De(n);
  }
}
function pu(t) {
  W === null && (Y === null && zl(), Hl()), cn && Yl();
}
function vu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Oe(t, e, n) {
  var r = W;
  r !== null && (r.f & te) !== 0 && (t |= te);
  var i = {
    ctx: ee,
    deps: null,
    nodes: null,
    f: t | Rt | le,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      hr(i);
    } catch (o) {
      throw Ft(i), o;
    }
  else e !== null && me(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Yn) === 0 && (s = s.first, (t & Qe) !== 0 && (t & lr) !== 0 && s !== null && (s.f |= lr)), s !== null && (s.parent = r, r !== null && vu(s, r), Y !== null && (Y.f & Et) !== 0 && (t & hn) === 0)) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Ss() {
  return Y !== null && !ye;
}
function gu(t) {
  const e = Oe(Ci, null, !1);
  return at(e, yt), e.teardown = t, e;
}
function ks(t) {
  pu();
  var e = (
    /** @type {Effect} */
    W.f
  ), n = !Y && (e & xe) !== 0 && (e & vr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ee
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return ho(t);
}
function ho(t) {
  return Oe(Mr | Ol, t, !1);
}
function _u(t) {
  Ze.ensure();
  const e = Oe(hn | Yn, t, !0);
  return () => {
    Ft(e);
  };
}
function mu(t) {
  Ze.ensure();
  const e = Oe(hn | Yn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Pn(e, () => {
      Ft(e), r(void 0);
    }) : (Ft(e), r(void 0));
  });
}
function po(t) {
  return Oe(Mr, t, !1);
}
function yu(t) {
  return Oe(As | Yn, t, !0);
}
function Ps(t, e = 0) {
  return Oe(Ci | e, t, !0);
}
function Kn(t, e = [], n = [], r = []) {
  ou(r, e, n, (i) => {
    Oe(Ci, () => t(...i.map(x)), !0);
  });
}
function Ms(t, e = 0) {
  var n = Oe(Qe | e, t, !0);
  return n;
}
function oe(t) {
  return Oe(xe | Yn, t, !0);
}
function vo(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = cn, r = Y;
    ia(!0), ce(null);
    try {
      e.call(null);
    } finally {
      ia(n), ce(r);
    }
  }
}
function Ds(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && co(() => {
      i.abort(yn);
    });
    var r = n.next;
    (n.f & hn) !== 0 ? n.parent = null : Ft(n, e), n = r;
  }
}
function wu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & xe) === 0 && Ft(e), e = n;
  }
}
function Ft(t, e = !0) {
  var n = !1;
  (e || (t.f & Oa) !== 0) && t.nodes !== null && t.nodes.end !== null && (xu(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Ds(t, e && !n), Dr(t, 0), at(t, Je);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  vo(t);
  var i = t.parent;
  i !== null && i.first !== null && go(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function xu(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Ie(t);
    t.remove(), t = n;
  }
}
function go(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Pn(t, e, n = !0) {
  var r = [];
  _o(t, r, !0);
  var i = () => {
    n && Ft(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function _o(t, e, n) {
  if ((t.f & te) === 0) {
    t.f ^= te;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & lr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & xe) !== 0 && (t.f & Qe) !== 0;
      _o(i, e, a ? n : !1), i = s;
    }
  }
}
function Fs(t) {
  mo(t, !0);
}
function mo(t, e) {
  if ((t.f & te) !== 0) {
    t.f ^= te, (t.f & yt) === 0 && (at(t, Rt), me(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & lr) !== 0 || (n.f & xe) !== 0;
      mo(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function yo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ie(n);
      e.append(n), n = i;
    }
}
let ii = !1, cn = !1;
function ia(t) {
  cn = t;
}
let Y = null, ye = !1;
function ce(t) {
  Y = t;
}
let W = null;
function De(t) {
  W = t;
}
let ue = null;
function wo(t) {
  Y !== null && (ue === null ? ue = [t] : ue.push(t));
}
let Yt = null, Zt = 0, ie = null;
function bu(t) {
  ie = t;
}
let xo = 1, bn = 0, Mn = bn;
function sa(t) {
  Mn = t;
}
function bo() {
  return ++xo;
}
function Br(t) {
  var e = t.f;
  if ((e & Rt) !== 0)
    return !0;
  if (e & Et && (t.f &= ~Fn), (e & we) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Br(
        /** @type {Derived} */
        s
      ) && eo(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & le) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    At === null && at(t, yt);
  }
  return !1;
}
function $o(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(ue !== null && or.call(ue, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Et) !== 0 ? $o(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? at(s, Rt) : (s.f & yt) !== 0 && at(s, we), me(
        /** @type {Effect} */
        s
      ));
    }
}
function Ao(t) {
  var y;
  var e = Yt, n = Zt, r = ie, i = Y, s = ue, a = ee, o = ye, l = Mn, u = t.f;
  Yt = /** @type {null | Value[]} */
  null, Zt = 0, ie = null, Y = (u & (xe | hn)) === 0 ? t : null, ue = null, ur(t.ctx), ye = !1, Mn = ++bn, t.ac !== null && (co(() => {
    t.ac.abort(yn);
  }), t.ac = null);
  try {
    t.f |= ts;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f();
    t.f |= vr;
    var c = t.deps, p = X == null ? void 0 : X.is_fork;
    if (Yt !== null) {
      var g;
      if (p || Dr(t, Zt), c !== null && Zt > 0)
        for (c.length = Zt + Yt.length, g = 0; g < Yt.length; g++)
          c[Zt + g] = Yt[g];
      else
        t.deps = c = Yt;
      if (Ss() && (t.f & le) !== 0)
        for (g = Zt; g < c.length; g++)
          ((y = c[g]).reactions ?? (y.reactions = [])).push(t);
    } else !p && c !== null && Zt < c.length && (Dr(t, Zt), c.length = Zt);
    if (Ha() && ie !== null && !ye && c !== null && (t.f & (Et | we | Rt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ie.length; g++)
        $o(
          ie[g],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (bn++, i.deps !== null)
        for (let $ = 0; $ < n; $ += 1)
          i.deps[$].rv = bn;
      if (e !== null)
        for (const $ of e)
          $.rv = bn;
      ie !== null && (r === null ? r = ie : r.push(.../** @type {Source[]} */
      ie));
    }
    return (t.f & un) !== 0 && (t.f ^= un), h;
  } catch ($) {
    return Xa($);
  } finally {
    t.f ^= ts, Yt = e, Zt = n, ie = r, Y = i, ue = s, ur(a), ye = o, Mn = l;
  }
}
function $u(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Sl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & Et) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Yt === null || !or.call(Yt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & le) !== 0 && (s.f ^= le, s.f &= ~Fn), Cs(s), hu(s), Dr(s, 0);
  }
}
function Dr(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      $u(t, n[r]);
}
function hr(t) {
  var e = t.f;
  if ((e & Je) === 0) {
    at(t, yt);
    var n = W, r = ii;
    W = t, ii = !0;
    try {
      (e & (Qe | Fa)) !== 0 ? wu(t) : Ds(t), vo(t);
      var i = Ao(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = xo;
      var s;
      Qi && Ql && (t.f & Rt) !== 0 && t.deps;
    } finally {
      ii = r, W = n;
    }
  }
}
function x(t) {
  var e = t.f, n = (e & Et) !== 0;
  if (Y !== null && !ye) {
    var r = W !== null && (W.f & Je) !== 0;
    if (!r && (ue === null || !or.call(ue, t))) {
      var i = Y.deps;
      if ((Y.f & ts) !== 0)
        t.rv < bn && (t.rv = bn, Yt === null && i !== null && i[Zt] === t ? Zt++ : Yt === null ? Yt = [t] : Yt.push(t));
      else {
        (Y.deps ?? (Y.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [Y] : or.call(s, Y) || s.push(Y);
      }
    }
  }
  if (cn && fn.has(t))
    return fn.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (cn) {
      var o = a.v;
      return ((a.f & yt) === 0 && a.reactions !== null || Ro(a)) && (o = Ts(a)), fn.set(a, o), o;
    }
    var l = (a.f & le) === 0 && !ye && Y !== null && (ii || (Y.f & le) !== 0), u = (a.f & vr) === 0;
    Br(a) && (l && (a.f |= le), eo(a)), l && !u && (no(a), Eo(a));
  }
  if (At != null && At.has(t))
    return At.get(t);
  if ((t.f & un) !== 0)
    throw t.v;
  return t.v;
}
function Eo(t) {
  if (t.f |= le, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Et) !== 0 && (e.f & le) === 0 && (no(
        /** @type {Derived} */
        e
      ), Eo(
        /** @type {Derived} */
        e
      ));
}
function Ro(t) {
  if (t.v === $t) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (fn.has(e) || (e.f & Et) !== 0 && Ro(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Mi(t) {
  var e = ye;
  try {
    return ye = !0, t();
  } finally {
    ye = e;
  }
}
const Co = /* @__PURE__ */ new Set(), fs = /* @__PURE__ */ new Set();
function Au(t) {
  for (var e = 0; e < t.length; e++)
    Co.add(t[e]);
  for (var n of fs)
    n(t);
}
let aa = null;
function oa(t) {
  var $;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = (($ = t.composedPath) == null ? void 0 : $.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  aa = t;
  var a = 0, o = aa === t && t.__root;
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    l <= u && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || t.target, s !== e) {
    di(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = Y, h = W;
    ce(null), De(null);
    try {
      for (var c, p = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + r];
          y != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && y.call(s, t);
        } catch (E) {
          c ? p.push(E) : c = E;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        s = g;
      }
      if (c) {
        for (let E of p)
          queueMicrotask(() => {
            throw E;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ce(f), De(h);
    }
  }
}
var ka, Pa;
const Bi = (Pa = (ka = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : ka.trustedTypes) == null ? void 0 : /* @__PURE__ */ Pa.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function Eu(t) {
  return (
    /** @type {string} */
    (Bi == null ? void 0 : Bi.createHTML(t)) ?? t
  );
}
function To(t, e = !1) {
  var n = Ns("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? Eu(t) : t, n.content;
}
function Ln(t, e) {
  var n = (
    /** @type {Effect} */
    W
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Hn(t, e) {
  var n = (e & Tl) !== 0, r, i = !t.startsWith("<!>");
  return () => {
    if (J)
      return Ln(H, null), H;
    r === void 0 && (r = To(i ? t : "<!>" + t, !0));
    var s = (
      /** @type {TemplateNode} */
      n || ao ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ On(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ln(a, o);
    }
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ru(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (J)
      return Ln(H, null), H;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        To(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ On(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ On(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return Ln(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Cu(t, e) {
  return /* @__PURE__ */ Ru(t, e, "svg");
}
function la(t = "") {
  if (!J) {
    var e = fe(t + "");
    return Ln(e, e), e;
  }
  var n = H;
  return n.nodeType !== Xr ? (n.before(n = fe()), zt(n)) : Pi(
    /** @type {Text} */
    n
  ), Ln(n, n), n;
}
function ve(t, e) {
  if (J) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      W
    );
    ((n.f & vr) === 0 || n.nodes.end === null) && (n.nodes.end = H), Ni();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Tu = ["touchstart", "touchmove"];
function Nu(t) {
  return Tu.includes(t);
}
function sn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function No(t, e) {
  return So(t, e);
}
function Su(t, e) {
  us(), e.intro = e.intro ?? !1;
  const n = e.target, r = J, i = H;
  try {
    for (var s = /* @__PURE__ */ On(n); s && (s.nodeType !== gr || /** @type {Comment} */
    s.data !== bs); )
      s = /* @__PURE__ */ Ie(s);
    if (!s)
      throw ar;
    Ke(!0), zt(
      /** @type {Comment} */
      s
    );
    const a = So(t, { ...e, anchor: s });
    return Ke(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== ar && console.warn("Failed to hydrate: ", a), e.recover === !1 && Bl(), us(), uo(n), Ke(!1), No(t, e);
  } finally {
    Ke(r), zt(i);
  }
}
const Jr = /* @__PURE__ */ new Map();
function So(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  us();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var c = 0; c < h.length; c++) {
      var p = h[c];
      if (!o.has(p)) {
        o.add(p);
        var g = Nu(p);
        for (const E of [e, document]) {
          var y = Jr.get(E);
          y === void 0 && (y = /* @__PURE__ */ new Map(), Jr.set(E, y));
          var $ = y.get(p);
          $ === void 0 ? (E.addEventListener(p, oa, { passive: g }), y.set(p, 1)) : y.set(p, $ + 1);
        }
      }
    }
  };
  l(Ri(Co)), fs.add(l);
  var u = void 0, f = mu(() => {
    var h = n ?? e.appendChild(fe());
    return su(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (c) => {
        Es({});
        var p = (
          /** @type {ComponentContext} */
          ee
        );
        if (s && (p.c = s), i && (r.$$events = i), J && Ln(
          /** @type {TemplateNode} */
          c,
          null
        ), u = t(c, r) || {}, J && (W.nodes.end = H, H === null || H.nodeType !== gr || /** @type {Comment} */
        H.data !== $s))
          throw Ti(), ar;
        Rs();
      }
    ), () => {
      var y;
      for (var c of o)
        for (const $ of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Jr.get($)
          ), g = (
            /** @type {number} */
            p.get(c)
          );
          --g == 0 ? ($.removeEventListener(c, oa), p.delete(c), p.size === 0 && Jr.delete($)) : p.set(c, g);
        }
      fs.delete(l), h !== n && ((y = h.parentNode) == null || y.removeChild(h));
    };
  });
  return cs.set(u, f), u;
}
let cs = /* @__PURE__ */ new WeakMap();
function ku(t, e) {
  const n = cs.get(t);
  return n ? (cs.delete(t), n(e)) : Promise.resolve();
}
var ge, ke, Qt, Nn, Hr, zr, Ai;
class Pu {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    it(this, "anchor");
    /** @type {Map<Batch, Key>} */
    L(this, ge, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    L(this, ke, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    L(this, Qt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    L(this, Nn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    L(this, Hr, !0);
    L(this, zr, () => {
      var e = (
        /** @type {Batch} */
        X
      );
      if (v(this, ge).has(e)) {
        var n = (
          /** @type {Key} */
          v(this, ge).get(e)
        ), r = v(this, ke).get(n);
        if (r)
          Fs(r), v(this, Nn).delete(n);
        else {
          var i = v(this, Qt).get(n);
          i && (v(this, ke).set(n, i.effect), v(this, Qt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, ge)) {
          if (v(this, ge).delete(s), s === e)
            break;
          const o = v(this, Qt).get(a);
          o && (Ft(o.effect), v(this, Qt).delete(a));
        }
        for (const [s, a] of v(this, ke)) {
          if (s === n || v(this, Nn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, ge).values()).includes(s)) {
              var u = document.createDocumentFragment();
              yo(a, u), u.append(fe()), v(this, Qt).set(s, { effect: a, fragment: u });
            } else
              Ft(a);
            v(this, Nn).delete(s), v(this, ke).delete(s);
          };
          v(this, Hr) || !r ? (v(this, Nn).add(s), Pn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    L(this, Ai, (e) => {
      v(this, ge).delete(e);
      const n = Array.from(v(this, ge).values());
      for (const [r, i] of v(this, Qt))
        n.includes(r) || (Ft(i.effect), v(this, Qt).delete(r));
    });
    this.anchor = e, O(this, Hr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      X
    ), i = fo();
    if (n && !v(this, ke).has(e) && !v(this, Qt).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = fe();
        s.append(a), v(this, Qt).set(e, {
          effect: oe(() => n(a)),
          fragment: s
        });
      } else
        v(this, ke).set(
          e,
          oe(() => n(this.anchor))
        );
    if (v(this, ge).set(r, e), i) {
      for (const [o, l] of v(this, ke))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, Qt))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, zr)), r.ondiscard(v(this, Ai));
    } else
      J && (this.anchor = H), v(this, zr).call(this);
  }
}
ge = new WeakMap(), ke = new WeakMap(), Qt = new WeakMap(), Nn = new WeakMap(), Hr = new WeakMap(), zr = new WeakMap(), Ai = new WeakMap();
function Mu(t) {
  ee === null && Ll(), ks(() => {
    const e = Mi(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function $r(t, e, n = !1) {
  J && Ni();
  var r = new Pu(t), i = n ? lr : 0;
  function s(a, o) {
    if (J) {
      const f = qa(t);
      var l;
      if (f === bs ? l = 0 : f === Ei ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = pi();
        zt(u), r.anchor = u, Ke(!1), r.ensure(a, o), Ke(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Ms(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function Wi(t, e) {
  return e;
}
function Du(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let h = e[o];
    Pn(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            hs(Ri(s.done)), c.delete(s), c.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), f = (
        /** @type {Element} */
        u.parentNode
      );
      uo(f), f.append(u), t.items.clear();
    }
    hs(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function hs(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    Ft(t[n], e);
}
var ua;
function Ui(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  J && Ni();
  var l = null, u = /* @__PURE__ */ to(() => {
    var y = n();
    return Ma(y) ? y : y == null ? [] : Ri(y);
  }), f, h = !0;
  function c() {
    g.fallback = l, Fu(g, f, a, e, r), l !== null && (f.length === 0 ? (l.f & ln) === 0 ? Fs(l) : (l.f ^= ln, Rr(l, null, a)) : Pn(l, () => {
      l = null;
    }));
  }
  var p = Ms(() => {
    f = /** @type {V[]} */
    x(u);
    var y = f.length;
    let $ = !1;
    if (J) {
      var E = qa(a) === Ei;
      E !== (y === 0) && (a = pi(), zt(a), Ke(!1), $ = !0);
    }
    for (var S = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      X
    ), P = fo(), k = 0; k < y; k += 1) {
      J && H.nodeType === gr && /** @type {Comment} */
      H.data === $s && (a = /** @type {Comment} */
      H, $ = !0, Ke(!1));
      var G = f[k], ot = r(G, k), K = h ? null : o.get(ot);
      K ? (K.v && cr(K.v, G), K.i && cr(K.i, k), P && C.unskip_effect(K.e)) : (K = Iu(
        o,
        h ? a : ua ?? (ua = fe()),
        G,
        ot,
        k,
        i,
        e,
        n
      ), h || (K.e.f |= ln), o.set(ot, K)), S.add(ot);
    }
    if (y === 0 && s && !l && (h ? l = oe(() => s(a)) : (l = oe(() => s(ua ?? (ua = fe()))), l.f |= ln)), y > S.size && Vl(), J && y > 0 && zt(pi()), !h)
      if (P) {
        for (const [nt, Q] of o)
          S.has(nt) || C.skip_effect(Q.e);
        C.oncommit(c), C.ondiscard(() => {
        });
      } else
        c();
    $ && Ke(!0), x(u);
  }), g = { effect: p, items: o, outrogroups: null, fallback: l };
  h = !1, J && (a = H);
}
function Ar(t) {
  for (; t !== null && (t.f & xe) === 0; )
    t = t.next;
  return t;
}
function Fu(t, e, n, r, i) {
  var K;
  var s = e.length, a = t.items, o = Ar(t.effect.first), l, u = null, f = [], h = [], c, p, g, y;
  for (y = 0; y < s; y += 1) {
    if (c = e[y], p = i(c, y), g = /** @type {EachItem} */
    a.get(p).e, t.outrogroups !== null)
      for (const nt of t.outrogroups)
        nt.pending.delete(g), nt.done.delete(g);
    if ((g.f & ln) !== 0)
      if (g.f ^= ln, g === o)
        Rr(g, null, n);
      else {
        var $ = u ? u.next : o;
        g === t.effect.last && (t.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), an(t, u, g), an(t, g, $), Rr(g, $, n), u = g, f = [], h = [], o = Ar(u.next);
        continue;
      }
    if ((g.f & te) !== 0 && Fs(g), g !== o) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < h.length) {
          var E = h[0], S;
          u = E.prev;
          var C = f[0], P = f[f.length - 1];
          for (S = 0; S < f.length; S += 1)
            Rr(f[S], E, n);
          for (S = 0; S < h.length; S += 1)
            l.delete(h[S]);
          an(t, C.prev, P.next), an(t, u, C), an(t, P, E), o = E, u = P, y -= 1, f = [], h = [];
        } else
          l.delete(g), Rr(g, o, n), an(t, g.prev, g.next), an(t, g, u === null ? t.effect.first : u.next), an(t, u, g), u = g;
        continue;
      }
      for (f = [], h = []; o !== null && o !== g; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), h.push(o), o = Ar(o.next);
      if (o === null)
        continue;
    }
    (g.f & ln) === 0 && f.push(g), u = g, o = Ar(g.next);
  }
  if (t.outrogroups !== null) {
    for (const nt of t.outrogroups)
      nt.pending.size === 0 && (hs(Ri(nt.done)), (K = t.outrogroups) == null || K.delete(nt));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var k = [];
    if (l !== void 0)
      for (g of l)
        (g.f & te) === 0 && k.push(g);
    for (; o !== null; )
      (o.f & te) === 0 && o !== t.fallback && k.push(o), o = Ar(o.next);
    var G = k.length;
    if (G > 0) {
      var ot = null;
      Du(t, k, ot);
    }
  }
}
function Iu(t, e, n, r, i, s, a, o) {
  var l = (a & xl) !== 0 ? (a & $l) === 0 ? /* @__PURE__ */ io(n, !1, !1) : In(n) : null, u = (a & bl) !== 0 ? In(i) : null;
  return {
    v: l,
    i: u,
    e: oe(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Rr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & ln) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function an(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function ko(t, e) {
  po(() => {
    var n = t.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const i = Ns("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function fa(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function Ou(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += fa(r)), i && (n += fa(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function Gi(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function ca(t, e, n, r) {
  var i = t.__style;
  if (J || i !== e) {
    var s = Ou(e, r);
    (!J || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (Gi(t, n == null ? void 0 : n[0], r[0]), Gi(t, n == null ? void 0 : n[1], r[1], "important")) : Gi(t, n, r));
  return r;
}
function ha(t, e) {
  return t === e || (t == null ? void 0 : t[Sr]) === e;
}
function si(t = {}, e, n, r) {
  return po(() => {
    var i, s;
    return Ps(() => {
      i = s, s = [], Mi(() => {
        t !== n(...s) && (e(t, ...s), i && ha(n(...i), t) && e(null, ...i));
      });
    }), () => {
      kn(() => {
        s && ha(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let Zr = !1;
function Lu(t) {
  var e = Zr;
  try {
    return Zr = !1, [t(), Zr];
  } finally {
    Zr = e;
  }
}
function pt(t, e, n, r) {
  var S;
  var i = (n & Rl) !== 0, s = (n & Cl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Mi(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Sr in t || La in t;
    u = ((S = Sn(t, e)) == null ? void 0 : S.set) ?? (f && e in t ? (C) => t[e] = C : void 0);
  }
  var h, c = !1;
  i ? [h, c] = Lu(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = l(), u && (Wl(), u(h)));
  var p;
  if (p = () => {
    var C = (
      /** @type {V} */
      t[e]
    );
    return C === void 0 ? l() : (o = !0, C);
  }, (n & El) === 0)
    return p;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(C, P) {
        return arguments.length > 0 ? ((!P || g || c) && u(P ? p() : C), C) : p();
      })
    );
  }
  var y = !1, $ = ((n & Al) !== 0 ? ki : to)(() => (y = !1, p()));
  i && x($);
  var E = (
    /** @type {Effect} */
    W
  );
  return (
    /** @type {() => V} */
    (function(C, P) {
      if (arguments.length > 0) {
        const k = P ? x($) : i ? xn(C) : C;
        return st($, k), y = !0, a !== void 0 && (a = k), C;
      }
      return cn && y || (E.f & Je) !== 0 ? $.v : x($);
    })
  );
}
function qu(t) {
  return new Vu(t);
}
var Ge, ae;
class Vu {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    L(this, Ge);
    /** @type {Record<string, any>} */
    L(this, ae);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ io(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === La ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return st(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    O(this, ae, (e.hydrate ? Su : No)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && ft(), O(this, Ge, i.$$events);
    for (const a of Object.keys(v(this, ae)))
      a === "$set" || a === "$destroy" || a === "$on" || di(this, a, {
        get() {
          return v(this, ae)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, ae)[a] = o;
        },
        enumerable: !0
      });
    v(this, ae).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, ae).$destroy = () => {
      ku(v(this, ae));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    v(this, ae).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    v(this, Ge)[e] = v(this, Ge)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, Ge)[e].push(r), () => {
      v(this, Ge)[e] = v(this, Ge)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, ae).$destroy();
  }
}
Ge = new WeakMap(), ae = new WeakMap();
let Po;
typeof HTMLElement == "function" && (Po = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    it(this, "$$ctor");
    /** Slots */
    it(this, "$$s");
    /** @type {any} The Svelte component instance */
    it(this, "$$c");
    /** Whether or not the custom element is connected */
    it(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    it(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    it(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    it(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    it(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    it(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    it(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    it(this, "$$shadowRoot", null);
    this.$$ctor = e, this.$$s = n, r && (this.$$shadowRoot = this.attachShadow(r));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, n, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const i = this.$$c.$on(e, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(e, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, n, r) {
    if (super.removeEventListener(e, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return (a) => {
          const o = Ns("slot");
          s !== "default" && (o.name = s), ve(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Yu(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = ai(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = qu({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = _u(() => {
        Ps(() => {
          var s;
          this.$$r = !0;
          for (const a of hi(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = ai(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const o = this.$$c.$on(s, a);
          this.$$l_u.set(a, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, n, r) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ai(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return hi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function ai(t, e, n, r) {
  var s;
  const i = (s = n[t]) == null ? void 0 : s.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Yu(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Mo(t, e, n, r, i, s) {
  let a = class extends Po {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return hi(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return hi(e).forEach((o) => {
    di(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = ai(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (h = Sn(u, o)) == null ? void 0 : h.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    di(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Hu = { value: () => {
} };
function Do() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new oi(n);
}
function oi(t) {
  this._ = t;
}
function zu(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
oi.prototype = Do.prototype = {
  constructor: oi,
  on: function(t, e) {
    var n = this._, r = zu(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = Xu(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = da(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = da(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new oi(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r) s[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i) r[i].value.apply(e, n);
  }
};
function Xu(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function da(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Hu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var ds = "http://www.w3.org/1999/xhtml";
const pa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ds,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Di(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), pa.hasOwnProperty(e) ? { space: pa[e], local: t } : t;
}
function Bu(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ds && e.documentElement.namespaceURI === ds ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Wu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Fo(t) {
  var e = Di(t);
  return (e.local ? Wu : Bu)(e);
}
function Uu() {
}
function Is(t) {
  return t == null ? Uu : function() {
    return this.querySelector(t);
  };
}
function Gu(t) {
  typeof t != "function" && (t = Is(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new ne(r, this._parents);
}
function Ku(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ju() {
  return [];
}
function Io(t) {
  return t == null ? Ju : function() {
    return this.querySelectorAll(t);
  };
}
function Zu(t) {
  return function() {
    return Ku(t.apply(this, arguments));
  };
}
function ju(t) {
  typeof t == "function" ? t = Zu(t) : t = Io(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new ne(r, i);
}
function Oo(t) {
  return function() {
    return this.matches(t);
  };
}
function Lo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Qu = Array.prototype.find;
function tf(t) {
  return function() {
    return Qu.call(this.children, t);
  };
}
function ef() {
  return this.firstElementChild;
}
function nf(t) {
  return this.select(t == null ? ef : tf(typeof t == "function" ? t : Lo(t)));
}
var rf = Array.prototype.filter;
function sf() {
  return Array.from(this.children);
}
function af(t) {
  return function() {
    return rf.call(this.children, t);
  };
}
function of(t) {
  return this.selectAll(t == null ? sf : af(typeof t == "function" ? t : Lo(t)));
}
function lf(t) {
  typeof t != "function" && (t = Oo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new ne(r, this._parents);
}
function qo(t) {
  return new Array(t.length);
}
function uf() {
  return new ne(this._enter || this._groups.map(qo), this._parents);
}
function vi(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
vi.prototype = {
  constructor: vi,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function ff(t) {
  return function() {
    return t;
  };
}
function cf(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new vi(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function hf(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, h = s.length, c = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (c[o] = p = a.call(l, l.__data__, o, e) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < h; ++o)
    p = a.call(t, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new vi(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(c[o]) === l && (i[o] = l);
}
function df(t) {
  return t.__data__;
}
function pf(t, e) {
  if (!arguments.length) return Array.from(this, df);
  var n = e ? hf : cf, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ff(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], h = i[u], c = h.length, p = vf(t.call(f, f && f.__data__, u, r)), g = p.length, y = o[u] = new Array(g), $ = a[u] = new Array(g), E = l[u] = new Array(c);
    n(f, h, y, $, E, p, e);
    for (var S = 0, C = 0, P, k; S < g; ++S)
      if (P = y[S]) {
        for (S >= C && (C = S + 1); !(k = $[C]) && ++C < g; ) ;
        P._next = k || null;
      }
  }
  return a = new ne(a, r), a._enter = o, a._exit = l, a;
}
function vf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function gf() {
  return new ne(this._exit || this._groups.map(qo), this._parents);
}
function _f(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function mf(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], h = u.length, c = o[l] = new Array(h), p, g = 0; g < h; ++g)
      (p = u[g] || f[g]) && (c[g] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new ne(o, this._parents);
}
function yf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function wf(t) {
  t || (t = xf);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new ne(i, this._parents).order();
}
function xf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function bf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function $f() {
  return Array.from(this);
}
function Af() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Ef() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Rf() {
  return !this.node();
}
function Cf(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function Tf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Nf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Sf(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function kf(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Pf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Mf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Df(t, e) {
  var n = Di(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Nf : Tf : typeof e == "function" ? n.local ? Mf : Pf : n.local ? kf : Sf)(n, e));
}
function Vo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ff(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function If(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Of(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Lf(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ff : typeof e == "function" ? Of : If)(t, e, n ?? "")) : dr(this.node(), t);
}
function dr(t, e) {
  return t.style.getPropertyValue(e) || Vo(t).getComputedStyle(t, null).getPropertyValue(e);
}
function qf(t) {
  return function() {
    delete this[t];
  };
}
function Vf(t, e) {
  return function() {
    this[t] = e;
  };
}
function Yf(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Hf(t, e) {
  return arguments.length > 1 ? this.each((e == null ? qf : typeof e == "function" ? Yf : Vf)(t, e)) : this.node()[t];
}
function Yo(t) {
  return t.trim().split(/^|\s+/);
}
function Os(t) {
  return t.classList || new Ho(t);
}
function Ho(t) {
  this._node = t, this._names = Yo(t.getAttribute("class") || "");
}
Ho.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function zo(t, e) {
  for (var n = Os(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Xo(t, e) {
  for (var n = Os(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function zf(t) {
  return function() {
    zo(this, t);
  };
}
function Xf(t) {
  return function() {
    Xo(this, t);
  };
}
function Bf(t, e) {
  return function() {
    (e.apply(this, arguments) ? zo : Xo)(this, t);
  };
}
function Wf(t, e) {
  var n = Yo(t + "");
  if (arguments.length < 2) {
    for (var r = Os(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Bf : e ? zf : Xf)(n, e));
}
function Uf() {
  this.textContent = "";
}
function Gf(t) {
  return function() {
    this.textContent = t;
  };
}
function Kf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Jf(t) {
  return arguments.length ? this.each(t == null ? Uf : (typeof t == "function" ? Kf : Gf)(t)) : this.node().textContent;
}
function Zf() {
  this.innerHTML = "";
}
function jf(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Qf(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function tc(t) {
  return arguments.length ? this.each(t == null ? Zf : (typeof t == "function" ? Qf : jf)(t)) : this.node().innerHTML;
}
function ec() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function nc() {
  return this.each(ec);
}
function rc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ic() {
  return this.each(rc);
}
function sc(t) {
  var e = typeof t == "function" ? t : Fo(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function ac() {
  return null;
}
function oc(t, e) {
  var n = typeof t == "function" ? t : Fo(t), r = e == null ? ac : typeof e == "function" ? e : Is(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function lc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function uc() {
  return this.each(lc);
}
function fc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function cc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function hc(t) {
  return this.select(t ? cc : fc);
}
function dc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function pc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function vc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function gc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function _c(t, e, n) {
  return function() {
    var r = this.__on, i, s = pc(e);
    if (r) {
      for (var a = 0, o = r.length; a < o; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), i = { type: t.type, name: t.name, value: e, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function mc(t, e, n) {
  var r = vc(t + ""), i, s = r.length, a;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var l = 0, u = o.length, f; l < u; ++l)
        for (i = 0, f = o[l]; i < s; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (o = e ? _c : gc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function Bo(t, e, n) {
  var r = Vo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function yc(t, e) {
  return function() {
    return Bo(this, t, e);
  };
}
function wc(t, e) {
  return function() {
    return Bo(this, t, e.apply(this, arguments));
  };
}
function xc(t, e) {
  return this.each((typeof e == "function" ? wc : yc)(t, e));
}
function* bc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var Wo = [null];
function ne(t, e) {
  this._groups = t, this._parents = e;
}
function _r() {
  return new ne([[document.documentElement]], Wo);
}
function $c() {
  return this;
}
ne.prototype = _r.prototype = {
  constructor: ne,
  select: Gu,
  selectAll: ju,
  selectChild: nf,
  selectChildren: of,
  filter: lf,
  data: pf,
  enter: uf,
  exit: gf,
  join: _f,
  merge: mf,
  selection: $c,
  order: yf,
  sort: wf,
  call: bf,
  nodes: $f,
  node: Af,
  size: Ef,
  empty: Rf,
  each: Cf,
  attr: Df,
  style: Lf,
  property: Hf,
  classed: Wf,
  text: Jf,
  html: tc,
  raise: nc,
  lower: ic,
  append: sc,
  insert: oc,
  remove: uc,
  clone: hc,
  datum: dc,
  on: mc,
  dispatch: xc,
  [Symbol.iterator]: bc
};
function ut(t) {
  return typeof t == "string" ? new ne([[document.querySelector(t)]], [document.documentElement]) : new ne([[t]], Wo);
}
function Ls(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Uo(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Wr() {
}
var Fr = 0.7, gi = 1 / Fr, jn = "\\s*([+-]?\\d+)\\s*", Ir = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ac = /^#([0-9a-f]{3,8})$/, Ec = new RegExp(`^rgb\\(${jn},${jn},${jn}\\)$`), Rc = new RegExp(`^rgb\\(${Me},${Me},${Me}\\)$`), Cc = new RegExp(`^rgba\\(${jn},${jn},${jn},${Ir}\\)$`), Tc = new RegExp(`^rgba\\(${Me},${Me},${Me},${Ir}\\)$`), Nc = new RegExp(`^hsl\\(${Ir},${Me},${Me}\\)$`), Sc = new RegExp(`^hsla\\(${Ir},${Me},${Me},${Ir}\\)$`), va = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ls(Wr, qn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ga,
  // Deprecated! Use color.formatHex.
  formatHex: ga,
  formatHex8: kc,
  formatHsl: Pc,
  formatRgb: _a,
  toString: _a
});
function ga() {
  return this.rgb().formatHex();
}
function kc() {
  return this.rgb().formatHex8();
}
function Pc() {
  return Go(this).formatHsl();
}
function _a() {
  return this.rgb().formatRgb();
}
function qn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Ac.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ma(e) : n === 3 ? new Ht(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? jr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? jr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Ec.exec(t)) ? new Ht(e[1], e[2], e[3], 1) : (e = Rc.exec(t)) ? new Ht(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Cc.exec(t)) ? jr(e[1], e[2], e[3], e[4]) : (e = Tc.exec(t)) ? jr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Nc.exec(t)) ? xa(e[1], e[2] / 100, e[3] / 100, 1) : (e = Sc.exec(t)) ? xa(e[1], e[2] / 100, e[3] / 100, e[4]) : va.hasOwnProperty(t) ? ma(va[t]) : t === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function ma(t) {
  return new Ht(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function jr(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new Ht(t, e, n, r);
}
function Mc(t) {
  return t instanceof Wr || (t = qn(t)), t ? (t = t.rgb(), new Ht(t.r, t.g, t.b, t.opacity)) : new Ht();
}
function ps(t, e, n, r) {
  return arguments.length === 1 ? Mc(t) : new Ht(t, e, n, r ?? 1);
}
function Ht(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Ls(Ht, ps, Uo(Wr, {
  brighter(t) {
    return t = t == null ? gi : Math.pow(gi, t), new Ht(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fr : Math.pow(Fr, t), new Ht(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(Dn(this.r), Dn(this.g), Dn(this.b), _i(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ya,
  // Deprecated! Use color.formatHex.
  formatHex: ya,
  formatHex8: Dc,
  formatRgb: wa,
  toString: wa
}));
function ya() {
  return `#${$n(this.r)}${$n(this.g)}${$n(this.b)}`;
}
function Dc() {
  return `#${$n(this.r)}${$n(this.g)}${$n(this.b)}${$n((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function wa() {
  const t = _i(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Dn(this.r)}, ${Dn(this.g)}, ${Dn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function _i(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Dn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function $n(t) {
  return t = Dn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function xa(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new _e(t, e, n, r);
}
function Go(t) {
  if (t instanceof _e) return new _e(t.h, t.s, t.l, t.opacity);
  if (t instanceof Wr || (t = qn(t)), !t) return new _e();
  if (t instanceof _e) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new _e(a, o, l, t.opacity);
}
function Fc(t, e, n, r) {
  return arguments.length === 1 ? Go(t) : new _e(t, e, n, r ?? 1);
}
function _e(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Ls(_e, Fc, Uo(Wr, {
  brighter(t) {
    return t = t == null ? gi : Math.pow(gi, t), new _e(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fr : Math.pow(Fr, t), new _e(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new Ht(
      Ki(t >= 240 ? t - 240 : t + 120, i, r),
      Ki(t, i, r),
      Ki(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new _e(ba(this.h), Qr(this.s), Qr(this.l), _i(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = _i(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ba(this.h)}, ${Qr(this.s) * 100}%, ${Qr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ba(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Qr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ki(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const qs = (t) => () => t;
function Ic(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Oc(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Lc(t) {
  return (t = +t) == 1 ? Ko : function(e, n) {
    return n - e ? Oc(e, n, t) : qs(isNaN(e) ? n : e);
  };
}
function Ko(t, e) {
  var n = e - t;
  return n ? Ic(t, n) : qs(isNaN(t) ? e : t);
}
const mi = (function t(e) {
  var n = Lc(e);
  function r(i, s) {
    var a = n((i = ps(i)).r, (s = ps(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = Ko(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function qc(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Vc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Yc(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Jn(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function Hc(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Pe(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function zc(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Jn(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var vs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ji = new RegExp(vs.source, "g");
function Xc(t) {
  return function() {
    return t;
  };
}
function Bc(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Jo(t, e) {
  var n = vs.lastIndex = Ji.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = vs.exec(t)) && (i = Ji.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Pe(r, i) })), n = Ji.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? Bc(l[0].x) : Xc(e) : (e = l.length, function(u) {
    for (var f = 0, h; f < e; ++f) o[(h = l[f]).i] = h.x(u);
    return o.join("");
  });
}
function Jn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? qs(e) : (n === "number" ? Pe : n === "string" ? (r = qn(e)) ? (e = r, mi) : Jo : e instanceof qn ? mi : e instanceof Date ? Hc : Vc(e) ? qc : Array.isArray(e) ? Yc : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? zc : Pe)(t, e);
}
var $a = 180 / Math.PI, gs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zo(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * $a,
    skewX: Math.atan(l) * $a,
    scaleX: a,
    scaleY: o
  };
}
var ti;
function Wc(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? gs : Zo(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Uc(t) {
  return t == null || (ti || (ti = document.createElementNS("http://www.w3.org/2000/svg", "g")), ti.setAttribute("transform", t), !(t = ti.transform.baseVal.consolidate())) ? gs : (t = t.matrix, Zo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function jo(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, p, g) {
    if (u !== h || f !== c) {
      var y = p.push("translate(", null, e, null, n);
      g.push({ i: y - 4, x: Pe(u, h) }, { i: y - 2, x: Pe(f, c) });
    } else (h || c) && p.push("translate(" + h + e + c + n);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Pe(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Pe(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, p, g) {
    if (u !== h || f !== c) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: Pe(u, h) }, { i: y - 2, x: Pe(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), o(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var g = -1, y = c.length, $; ++g < y; ) h[($ = c[g]).i] = $.x(p);
      return h.join("");
    };
  };
}
var Gc = jo(Wc, "px, ", "px)", "deg)"), Kc = jo(Uc, ", ", ")", ")"), pr = 0, Cr = 0, Er = 0, Qo = 1e3, yi, Tr, wi = 0, Vn = 0, Fi = 0, Or = typeof performance == "object" && performance.now ? performance : Date, tl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Vs() {
  return Vn || (tl(Jc), Vn = Or.now() + Fi);
}
function Jc() {
  Vn = 0;
}
function xi() {
  this._call = this._time = this._next = null;
}
xi.prototype = el.prototype = {
  constructor: xi,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Vs() : +n) + (e == null ? 0 : +e), !this._next && Tr !== this && (Tr ? Tr._next = this : yi = this, Tr = this), this._call = t, this._time = n, _s();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, _s());
  }
};
function el(t, e, n) {
  var r = new xi();
  return r.restart(t, e, n), r;
}
function Zc() {
  Vs(), ++pr;
  for (var t = yi, e; t; )
    (e = Vn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --pr;
}
function Aa() {
  Vn = (wi = Or.now()) + Fi, pr = Cr = 0;
  try {
    Zc();
  } finally {
    pr = 0, Qc(), Vn = 0;
  }
}
function jc() {
  var t = Or.now(), e = t - wi;
  e > Qo && (Fi -= e, wi = t);
}
function Qc() {
  for (var t, e = yi, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : yi = n);
  Tr = t, _s(r);
}
function _s(t) {
  if (!pr) {
    Cr && (Cr = clearTimeout(Cr));
    var e = t - Vn;
    e > 24 ? (t < 1 / 0 && (Cr = setTimeout(Aa, t - Or.now() - Fi)), Er && (Er = clearInterval(Er))) : (Er || (wi = Or.now(), Er = setInterval(jc, Qo)), pr = 1, tl(Aa));
  }
}
function Ea(t, e, n) {
  var r = new xi();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var th = Do("start", "end", "cancel", "interrupt"), eh = [], nl = 0, Ra = 1, ms = 2, li = 3, Ca = 4, ys = 5, ui = 6;
function Ii(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  nh(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: th,
    tween: eh,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: nl
  });
}
function Ys(t, e) {
  var n = be(t, e);
  if (n.state > nl) throw new Error("too late; already scheduled");
  return n;
}
function Le(t, e) {
  var n = be(t, e);
  if (n.state > li) throw new Error("too late; already running");
  return n;
}
function be(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function nh(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = el(s, 0, n.time);
  function s(u) {
    n.state = Ra, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, h, c, p;
    if (n.state !== Ra) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === li) return Ea(a);
        p.state === Ca ? (p.state = ui, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < e && (p.state = ui, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (Ea(function() {
      n.state === li && (n.state = Ca, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = ms, n.on.call("start", t, t.__data__, n.index, n.group), n.state === ms) {
      for (n.state = li, i = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (p = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ys, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    n.state === ys && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ui, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function rh(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > ms && r.state < ys, r.state = ui, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function ih(t) {
  return this.each(function() {
    rh(this, t);
  });
}
function sh(t, e) {
  var n, r;
  return function() {
    var i = Le(this, t), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var a = 0, o = r.length; a < o; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function ah(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Le(this, t), a = s.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var o = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === e) {
          i[l] = o;
          break;
        }
      l === u && i.push(o);
    }
    s.tween = i;
  };
}
function oh(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = be(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? sh : ah)(n, t, e));
}
function Hs(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Le(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return be(i, r).value[e];
  };
}
function rl(t, e) {
  var n;
  return (typeof e == "number" ? Pe : e instanceof qn ? mi : (n = qn(e)) ? (e = n, mi) : Jo)(t, e);
}
function lh(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function uh(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function fh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function ch(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function hh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function dh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function ph(t, e) {
  var n = Di(t), r = n === "transform" ? Kc : rl;
  return this.attrTween(t, typeof e == "function" ? (n.local ? dh : hh)(n, r, Hs(this, "attr." + t, e)) : e == null ? (n.local ? uh : lh)(n) : (n.local ? ch : fh)(n, r, e));
}
function vh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function gh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function _h(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && gh(t, s)), n;
  }
  return i._value = e, i;
}
function mh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && vh(t, s)), n;
  }
  return i._value = e, i;
}
function yh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Di(t);
  return this.tween(n, (r.local ? _h : mh)(r, e));
}
function wh(t, e) {
  return function() {
    Ys(this, t).delay = +e.apply(this, arguments);
  };
}
function xh(t, e) {
  return e = +e, function() {
    Ys(this, t).delay = e;
  };
}
function bh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? wh : xh)(e, t)) : be(this.node(), e).delay;
}
function $h(t, e) {
  return function() {
    Le(this, t).duration = +e.apply(this, arguments);
  };
}
function Ah(t, e) {
  return e = +e, function() {
    Le(this, t).duration = e;
  };
}
function Eh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? $h : Ah)(e, t)) : be(this.node(), e).duration;
}
function Rh(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Le(this, t).ease = e;
  };
}
function Ch(t) {
  var e = this._id;
  return arguments.length ? this.each(Rh(e, t)) : be(this.node(), e).ease;
}
function Th(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Le(this, t).ease = n;
  };
}
function Nh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Th(this._id, t));
}
function Sh(t) {
  typeof t != "function" && (t = Oo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new je(r, this._parents, this._name, this._id);
}
function kh(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, h = a[o] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (h[p] = c);
  for (; o < r; ++o)
    a[o] = e[o];
  return new je(a, this._parents, this._name, this._id);
}
function Ph(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Mh(t, e, n) {
  var r, i, s = Ph(e) ? Ys : Le;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function Dh(t, e) {
  var n = this._id;
  return arguments.length < 2 ? be(this.node(), n).on.on(t) : this.each(Mh(n, t, e));
}
function Fh(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ih() {
  return this.on("end.remove", Fh(this._id));
}
function Oh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Is(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = o[c]) && (h = t.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Ii(u[c], e, n, c, u, be(f, n)));
  return new je(s, this._parents, e, n);
}
function Lh(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Io(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), p, g = be(f, n), y = 0, $ = c.length; y < $; ++y)
          (p = c[y]) && Ii(p, e, n, y, c, g);
        s.push(c), a.push(f);
      }
  return new je(s, a, e, n);
}
var qh = _r.prototype.constructor;
function Vh() {
  return new qh(this._groups, this._parents);
}
function Yh(t, e) {
  var n, r, i;
  return function() {
    var s = dr(this, t), a = (this.style.removeProperty(t), dr(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function il(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Hh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = dr(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function zh(t, e, n) {
  var r, i, s;
  return function() {
    var a = dr(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), dr(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function Xh(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Le(this, t), u = l.on, f = l.value[s] == null ? o || (o = il(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function Bh(t, e, n) {
  var r = (t += "") == "transform" ? Gc : rl;
  return e == null ? this.styleTween(t, Yh(t, r)).on("end.style." + t, il(t)) : typeof e == "function" ? this.styleTween(t, zh(t, r, Hs(this, "style." + t, e))).each(Xh(this._id, t)) : this.styleTween(t, Hh(t, r, e), n).on("end.style." + t, null);
}
function Wh(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Uh(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Wh(t, a, n)), r;
  }
  return s._value = e, s;
}
function Gh(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Uh(t, e, n ?? ""));
}
function Kh(t) {
  return function() {
    this.textContent = t;
  };
}
function Jh(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Zh(t) {
  return this.tween("text", typeof t == "function" ? Jh(Hs(this, "text", t)) : Kh(t == null ? "" : t + ""));
}
function jh(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Qh(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && jh(i)), e;
  }
  return r._value = t, r;
}
function td(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Qh(t));
}
function ed() {
  for (var t = this._name, e = this._id, n = sl(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = be(l, e);
        Ii(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new je(r, this._parents, t, n);
}
function nd() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Le(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var rd = 0;
function je(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function fi(t) {
  return _r().transition(t);
}
function sl() {
  return ++rd;
}
var ze = _r.prototype;
je.prototype = fi.prototype = {
  constructor: je,
  select: Oh,
  selectAll: Lh,
  selectChild: ze.selectChild,
  selectChildren: ze.selectChildren,
  filter: Sh,
  merge: kh,
  selection: Vh,
  transition: ed,
  call: ze.call,
  nodes: ze.nodes,
  node: ze.node,
  size: ze.size,
  empty: ze.empty,
  each: ze.each,
  on: Dh,
  attr: ph,
  attrTween: yh,
  style: Bh,
  styleTween: Gh,
  text: Zh,
  textTween: td,
  remove: Ih,
  tween: oh,
  delay: bh,
  duration: Eh,
  ease: Ch,
  easeVarying: Nh,
  end: nd,
  [Symbol.iterator]: ze[Symbol.iterator]
};
function id(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var sd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: id
};
function ad(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function od(t) {
  var e, n;
  t instanceof je ? (e = t._id, t = t._name) : (e = sl(), (n = sd).time = Vs(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Ii(l, t, e, u, a, n || ad(l, e));
  return new je(r, this._parents, t, e);
}
_r.prototype.interrupt = ih;
_r.prototype.transition = od;
const ws = Math.PI, xs = 2 * ws, mn = 1e-6, ld = xs - mn;
function al(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function ud(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return al;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class fd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? al : ud(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, s, a) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +s},${this._y1 = +a}`;
  }
  arcTo(e, n, r, i, s) {
    if (e = +e, n = +n, r = +r, i = +i, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let a = this._x1, o = this._y1, l = r - e, u = i - n, f = a - e, h = o - n, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (c > mn) if (!(Math.abs(h * l - u * f) > mn) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - a, g = i - o, y = l * l + u * u, $ = p * p + g * g, E = Math.sqrt(y), S = Math.sqrt(c), C = s * Math.tan((ws - Math.acos((y + c - $) / (2 * E * S))) / 2), P = C / S, k = C / E;
      Math.abs(P - 1) > mn && this._append`L${e + P * f},${n + P * h}`, this._append`A${s},${s},0,0,${+(h * p > f * g)},${this._x1 = e + k * l},${this._y1 = n + k * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, h = 1 ^ a, c = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > mn || Math.abs(this._y1 - f) > mn) && this._append`L${u},${f}`, r && (c < 0 && (c = c % xs + xs), c > ld ? this._append`A${r},${r},0,1,${h},${e - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > mn && this._append`A${r},${r},0,${+(c >= ws)},${h},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function cd(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const hd = cd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Dt(t) {
  return function() {
    return t;
  };
}
const Ta = Math.abs, St = Math.atan2, _n = Math.cos, dd = Math.max, Zi = Math.min, Re = Math.sin, Zn = Math.sqrt, Lt = 1e-12, Lr = Math.PI, bi = Lr / 2, ci = 2 * Lr;
function pd(t) {
  return t > 1 ? 0 : t < -1 ? Lr : Math.acos(t);
}
function Na(t) {
  return t >= 1 ? bi : t <= -1 ? -bi : Math.asin(t);
}
function vd(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length) return e;
    if (n == null)
      e = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      e = r;
    }
    return t;
  }, () => new fd(e);
}
function gd(t) {
  return t.innerRadius;
}
function _d(t) {
  return t.outerRadius;
}
function md(t) {
  return t.startAngle;
}
function yd(t) {
  return t.endAngle;
}
function wd(t) {
  return t && t.padAngle;
}
function xd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, h = o - s, c = h * l - f * u;
  if (!(c * c < Lt))
    return c = (f * (e - s) - h * (t - i)) / c, [t + c * l, e + c * u];
}
function ei(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / Zn(o * o + l * l), f = u * l, h = -u * o, c = t + f, p = e + h, g = n + f, y = r + h, $ = (c + g) / 2, E = (p + y) / 2, S = g - c, C = y - p, P = S * S + C * C, k = i - s, G = c * y - g * p, ot = (C < 0 ? -1 : 1) * Zn(dd(0, k * k * P - G * G)), K = (G * C - S * ot) / P, nt = (-G * S - C * ot) / P, Q = (G * C + S * ot) / P, vt = (-G * S + C * ot) / P, gt = K - $, M = nt - E, D = Q - $, Xt = vt - E;
  return gt * gt + M * M > D * D + Xt * Xt && (K = Q, nt = vt), {
    cx: K,
    cy: nt,
    x01: -f,
    y01: -h,
    x11: K * (i / k - 1),
    y11: nt * (i / k - 1)
  };
}
function Ce() {
  var t = gd, e = _d, n = Dt(0), r = null, i = md, s = yd, a = wd, o = null, l = vd(u);
  function u() {
    var f, h, c = +t.apply(this, arguments), p = +e.apply(this, arguments), g = i.apply(this, arguments) - bi, y = s.apply(this, arguments) - bi, $ = Ta(y - g), E = y > g;
    if (o || (o = f = l()), p < c && (h = p, p = c, c = h), !(p > Lt)) o.moveTo(0, 0);
    else if ($ > ci - Lt)
      o.moveTo(p * _n(g), p * Re(g)), o.arc(0, 0, p, g, y, !E), c > Lt && (o.moveTo(c * _n(y), c * Re(y)), o.arc(0, 0, c, y, g, E));
    else {
      var S = g, C = y, P = g, k = y, G = $, ot = $, K = a.apply(this, arguments) / 2, nt = K > Lt && (r ? +r.apply(this, arguments) : Zn(c * c + p * p)), Q = Zi(Ta(p - c) / 2, +n.apply(this, arguments)), vt = Q, gt = Q, M, D;
      if (nt > Lt) {
        var Xt = Na(nt / c * Re(K)), re = Na(nt / p * Re(K));
        (G -= Xt * 2) > Lt ? (Xt *= E ? 1 : -1, P += Xt, k -= Xt) : (G = 0, P = k = (g + y) / 2), (ot -= re * 2) > Lt ? (re *= E ? 1 : -1, S += re, C -= re) : (ot = 0, S = C = (g + y) / 2);
      }
      var Ct = p * _n(S), It = p * Re(S), Tt = c * _n(k), he = c * Re(k);
      if (Q > Lt) {
        var z = p * _n(C), Nt = p * Re(C), tn = c * _n(P), Z = c * Re(P), kt;
        if ($ < Lr)
          if (kt = xd(Ct, It, tn, Z, z, Nt, Tt, he)) {
            var $e = Ct - kt[0], Ae = It - kt[1], qe = z - kt[0], ht = Nt - kt[1], en = 1 / Re(pd(($e * qe + Ae * ht) / (Zn($e * $e + Ae * Ae) * Zn(qe * qe + ht * ht))) / 2), nn = Zn(kt[0] * kt[0] + kt[1] * kt[1]);
            vt = Zi(Q, (c - nn) / (en - 1)), gt = Zi(Q, (p - nn) / (en + 1));
          } else
            vt = gt = 0;
      }
      ot > Lt ? gt > Lt ? (M = ei(tn, Z, Ct, It, p, gt, E), D = ei(z, Nt, Tt, he, p, gt, E), o.moveTo(M.cx + M.x01, M.cy + M.y01), gt < Q ? o.arc(M.cx, M.cy, gt, St(M.y01, M.x01), St(D.y01, D.x01), !E) : (o.arc(M.cx, M.cy, gt, St(M.y01, M.x01), St(M.y11, M.x11), !E), o.arc(0, 0, p, St(M.cy + M.y11, M.cx + M.x11), St(D.cy + D.y11, D.cx + D.x11), !E), o.arc(D.cx, D.cy, gt, St(D.y11, D.x11), St(D.y01, D.x01), !E))) : (o.moveTo(Ct, It), o.arc(0, 0, p, S, C, !E)) : o.moveTo(Ct, It), !(c > Lt) || !(G > Lt) ? o.lineTo(Tt, he) : vt > Lt ? (M = ei(Tt, he, z, Nt, c, -vt, E), D = ei(Ct, It, tn, Z, c, -vt, E), o.lineTo(M.cx + M.x01, M.cy + M.y01), vt < Q ? o.arc(M.cx, M.cy, vt, St(M.y01, M.x01), St(D.y01, D.x01), !E) : (o.arc(M.cx, M.cy, vt, St(M.y01, M.x01), St(M.y11, M.x11), !E), o.arc(0, 0, c, St(M.cy + M.y11, M.cx + M.x11), St(D.cy + D.y11, D.cx + D.x11), E), o.arc(D.cx, D.cy, vt, St(D.y11, D.x11), St(D.y01, D.x01), !E))) : o.arc(0, 0, c, k, P, E);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Lr / 2;
    return [_n(h) * f, Re(h) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Dt(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Dt(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Dt(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Dt(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Dt(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Dt(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Dt(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function bd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function $d(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ad(t) {
  return t;
}
function ji() {
  var t = Ad, e = $d, n = null, r = Dt(0), i = Dt(ci), s = Dt(0);
  function a(o) {
    var l, u = (o = bd(o)).length, f, h, c = 0, p = new Array(u), g = new Array(u), y = +r.apply(this, arguments), $ = Math.min(ci, Math.max(-ci, i.apply(this, arguments) - y)), E, S = Math.min(Math.abs($) / u, s.apply(this, arguments)), C = S * ($ < 0 ? -1 : 1), P;
    for (l = 0; l < u; ++l)
      (P = g[p[l] = l] = +t(o[l], l, o)) > 0 && (c += P);
    for (e != null ? p.sort(function(k, G) {
      return e(g[k], g[G]);
    }) : n != null && p.sort(function(k, G) {
      return n(o[k], o[G]);
    }), l = 0, h = c ? ($ - u * C) / c : 0; l < u; ++l, y = E)
      f = p[l], P = g[f], E = y + (P > 0 ? P * h : 0) + C, g[f] = {
        data: o[f],
        index: l,
        value: P,
        startAngle: y,
        endAngle: E,
        padAngle: S
      };
    return g;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Dt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Dt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Dt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Dt(+o), a) : s;
  }, a;
}
function Nr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Nr.prototype = {
  constructor: Nr,
  scale: function(t) {
    return t === 1 ? this : new Nr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Nr(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Nr.prototype;
var Ed = /* @__PURE__ */ Cu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const Rd = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function ol(t, e) {
  Es(e, !0), ko(t, Rd);
  let n = pt(e, "jsonData", 7), r = pt(e, "currentRound", 7, 1), i = pt(e, "mouseEventType", 15), s = pt(e, "mouseData", 15), a = pt(e, "mouseX", 15), o = pt(e, "mouseY", 15), l = pt(e, "requestRoundChange", 7, (d) => {
  }), u = pt(e, "candidateColors", 23, () => []), f = pt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = pt(e, "firstRoundDeterminesPercentages", 7, !1), c = pt(e, "displayPhase", 15, 0);
  function p(d) {
    return d.isTransfer ? `${d.label}__transfer` : d.transferIndex != null ? `${d.label}__${d.transferIndex}` : d.label;
  }
  const g = 800, y = 800, $ = Math.min(g, y) * 0.3, E = g / 2, S = y / 2, C = "Pie", P = "PieOutline", k = "Donut", G = "TextLayer", ot = "url(#cross-hatch)", K = 1.15, nt = 0.1, Q = 750, vt = 800, gt = "white", M = 1, D = "#ff00ff", Xt = 3;
  function re(d) {
    return "hatch-" + d.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let Ct = [], It = [], Tt = [], he = 0, z = 0;
  const Nt = {}, tn = "No Further Rankings";
  let Z = /* @__PURE__ */ mt(null);
  function kt() {
    const d = ut(x(Z));
    d.select("#" + C).remove(), d.select("#" + P).remove(), d.select("#" + k).remove(), d.select("#" + G).remove();
  }
  function $e(d) {
    l() && (lt = d, l()(d));
  }
  function Ae(d) {
    kt(), Tt = qe(d), Ct = Bs(d, C, Tt, E, S, 0, ht()), Bs(d, P, Tt, E, S, 0, ht(), !1, !1, !0), br();
  }
  Mu(() => {
    Pt(), setTimeout(
      () => {
        Ae(r());
      },
      0
    );
  });
  function qe(d) {
    const _ = j(d);
    return he = mr(d), _;
  }
  function ht() {
    return $;
  }
  function en() {
    return ht() * 1.41;
  }
  function nn(d) {
    let _ = 0;
    for (let m = 1; m < d; m++) {
      const A = n().results[m - 1].tallyResults;
      for (let b = 0; b < A.length; b++) {
        const R = A[b].transfers;
        if (R) {
          const N = R.exhausted;
          N && (_ += Number(N));
        }
      }
    }
    return _;
  }
  function Ur(d, _) {
    if (d === "exhausted") return nn(_);
    {
      const m = n().results[_ - 1].tally;
      return Number(m[d]);
    }
  }
  function Oi(d, _) {
    return Ur(d, _).toLocaleString("en-US");
  }
  function zn(d, _) {
    const m = h() ? he : Li(_);
    return (Ur(d, _) / m).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function mr(d) {
    const _ = n().results[d - 1].tally;
    let m = 0;
    for (let [A, b] of Object.entries(_))
      m += Number(b);
    return m;
  }
  function Gr(d) {
    return d === "exhausted" || d === "Inactive Ballots";
  }
  function Li(d) {
    const _ = n().results[d - 1].tally;
    let m = 0;
    for (let [A, b] of Object.entries(_))
      Gr(A) || (m += Number(b));
    return m;
  }
  function Xn(d, _) {
    if (!d || d < 1 || d > n().results.length)
      return console.warn("In chsoenCandidates: round ${round} is out of range."), [];
    if (f() && d === n().results.length)
      return [];
    const m = n().results[d - 1].tallyResults, A = [];
    for (let b = 0; b < m.length; b++) {
      const R = m[b][_];
      R != null && A.push(R);
    }
    return A;
  }
  function Bn(d) {
    return Xn(d, "eliminated");
  }
  function w(d) {
    let _ = [];
    for (let m = 1; m <= d; m++) _ = _.concat(Xn(m, "elected"));
    return [...new Set(_)];
  }
  function B(d, _) {
    const m = n().results[_ - 1].tallyResults;
    let A = 0;
    const b = m.findIndex((R) => (R == null ? void 0 : R.elected) && d == R.elected);
    if (b >= 0) {
      const R = m[b].transfers;
      if (R)
        for (let [N, q] of Object.entries(R)) A += Number(q);
    } else
      return 0;
    return A;
  }
  function j(d) {
    const _ = n().results;
    let m = _[Math.max(0, d - 2)].tally;
    const A = [], b = [];
    for (let [N, q] of Object.entries(m))
      A.push({ label: N, value: 0 });
    m = _[d - 1].tally;
    for (let N of A)
      N.value = Number(m[N.label]), b.push(N);
    const R = nn(d);
    return b.push({ label: "exhausted", value: R }), b;
  }
  function wt(d, _) {
    const m = [];
    for (const A of d) {
      if (A.label === "exhausted" || A.isTransfer) {
        m.push(A);
        continue;
      }
      const b = B(A.label, _);
      b > 0 ? (m.push({
        label: A.label,
        value: b,
        isTransfer: !0
      }), m.push({ ...A, value: A.value - b })) : m.push(A);
    }
    return m;
  }
  function Pt() {
    const d = ut(x(Z)).select("defs").select("#cross-hatch");
    let _ = 0;
    for (let [m, A] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? _ < 10 ? Nt[m] = hd[_] : Nt[m] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Nt[m] = u()[_ % u().length], _++;
      {
        const b = d.clone(!0);
        b.attr("id", re(m)).select("rect").attr("fill", Nt[m]), b.selectAll("circle").attr("fill", "#383838");
      }
    }
    Nt.exhausted = ot, Nt["Inactive Ballots"] = ot;
  }
  function tt() {
    ut(x(Z)).select("#" + k).remove();
  }
  function xt(d, _) {
    const m = fi("global").duration(vt);
    _ && m.on("end", _);
    const A = wt(Tt, d), R = ji().sort(null).value((N) => N.value)(A);
    Ks(d, C, R, 0, ht()), Ks(d, P, R, 0, ht(), !0), Tt = A, Ct = R, tt(), xr(d), hl(), pl(0, ht()), br();
  }
  function Bt(d, _) {
    const m = fi("global").duration(vt);
    _ && m.on("end", _), He(d);
  }
  function Mt(d, _) {
    const m = fi("global").duration(vt);
    _ && m.on("end", _), yr(d), wr(ht());
  }
  let dt = !1, Ot = [];
  function et() {
    br(), dt = !1, Wt();
  }
  function Wt() {
    if (Ot.length === 0) {
      lt !== r() && (r() === lt + 1 && lt > 0 && r() <= n().results.length ? (lt = r(), Ut(r())) : r() >= 1 && r() <= n().results.length && (lt = r(), c(0), Ae(r())));
      return;
    }
    const d = Ot.shift();
    switch (d.type) {
      case "round": {
        const _ = d.round;
        _ === lt + 1 && lt > 0 && _ <= n().results.length ? (lt = _, Ut(_)) : (_ !== lt && _ >= 1 && _ <= n().results.length && (lt = _, c(0), Ae(_)), Wt());
        break;
      }
      case "step":
        pn();
        break;
    }
  }
  function Ut(d) {
    if (d <= 1 || d > n().results.length) {
      Wt();
      return;
    }
    dt = !0, z = d, c(0), xt(z - 1, () => {
      Bt(z - 1, () => {
        Mt(z, et);
      });
    });
  }
  function rn() {
    dt || (dt = !0, z = r(), dn());
  }
  function dn() {
    if (c(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), Ot.length > 0) {
      et();
      return;
    }
    const d = z < n().results.length - 1 ? dn : et;
    xt(z, () => {
      Bt(z, () => {
        z++, $e(z), Mt(z, d);
      });
    });
  }
  ks(() => {
    Wn();
  });
  let lt = 0;
  function Wn() {
    if (lt != r()) {
      if (dt) {
        Ot.push({ type: "round", round: r() });
        return;
      }
      lt == r() - 1 && lt > 0 ? Ye() : Ve(r()), lt = r();
    }
  }
  function Ve(d) {
    if (dt) {
      Ot.push({ type: "round", round: d });
      return;
    }
    c(0), Ae(d);
  }
  function Ye() {
    if (dt) {
      Ot.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (z = r(), z > n().results.length) {
      br(), dt = !1;
      return;
    }
    dt = !0, c() === 0 ? xt(z - 1, () => {
      Bt(z - 1, () => {
        Mt(z, et);
      });
    }) : c() === 1 ? Bt(z - 1, () => {
      Mt(z, et);
    }) : c() === 2 && Mt(z, et), c(0);
  }
  function pn() {
    if (r() > n().results.length) {
      br(), dt = !1;
      return;
    }
    if (dt) {
      Ot.push({ type: "step" });
      return;
    }
    dt = !0, c((c() + 1) % 3), z = r(), c() === 1 ? xt(z, et) : c() === 2 ? Bt(z, et) : c() === 0 ? (z++, $e(z), Mt(z, et)) : (dt = !1, console.warn("displayPhase out of range at ", c()));
  }
  function yr(d) {
    Tt = j(d), Ct = Us(d, C, Tt, 0, ht(), !0), Us(d, P, Tt, 0, ht(), !1, !0), ut(x(Z)).select("#" + P).selectAll(".eliminated").remove();
  }
  function wr(d, _) {
    const m = ut(x(Z)).select("#" + k), A = Ce().outerRadius(d).innerRadius(d - 1), b = m.selectAll(".slice");
    let R = b.size();
    function N() {
      R--, R === 0 && dl();
    }
    b.select("path").transition("global").duration(Q).attr("d", (q) => A(q)).on("end", (q) => N());
  }
  function xr(d) {
    const _ = ll(d, Ct);
    It = Ws(d, k, _, E, S, ht(), en(), !1, !0);
    const m = ut(x(Z));
    m.select("#" + C).raise(), m.select("#" + P).raise();
  }
  function He(d) {
    const _ = fl(d, It, Ct);
    It = Js(d, k, _, ht(), en(), !1);
  }
  function Gt(d) {
    return Nt[d.data.label];
  }
  function qi(d) {
    const _ = {}, m = n().results[d - 1].tallyResults;
    for (let A = 0; A < m.length; A++) {
      let b = m[A].eliminated;
      if (b === void 0 && (b = m[A].elected), b === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const R = m[A].transfers;
      if (R === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [N, q] of Object.entries(R))
        _[N] === void 0 ? _[N] = Number(q) : _[N] += Number(q);
    }
    return _;
  }
  function ll(d, _) {
    const m = [], A = he, b = n().results[d - 1].tallyResults;
    for (let R = 0; R < b.length; R++) {
      let N = b[R].eliminated;
      if (N === void 0 && (N = b[R].elected), N === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const q = b[R].transfers;
      if (q === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let V = _.find((I) => I.data.label == N && I.data.isTransfer);
      V === void 0 && (V = _.find((I) => I.data.label == N && !I.data.isTransfer));
      let F = 0;
      if (V) F = V.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [I, T] of Object.entries(q)) {
        let U;
        const vn = _.find((rt) => rt.data.label == I);
        if (vn)
          U = structuredClone(vn);
        else if (I == "exhausted")
          U = {
            data: { label: I, value: Number(T) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else if (I == "residual surplus") {
          console.warn("makeDonutInfo: residual surplus = ", T);
          continue;
        } else {
          console.warn("makeDonutInfo: unrecognized name in transfers ", I);
          continue;
        }
        const Un = Number(T) / A * 2 * Math.PI;
        U.startAngle = F, F = U.endAngle = F + Un, U.index = R, U.data.transferIndex = R, m.push(U);
      }
    }
    return m;
  }
  function ul(d, _, m) {
    const A = {};
    for (let [b, R] of Object.entries(d)) {
      const N = m.find((F) => b == F.data.label);
      if (N === void 0) {
        console.warn("getTransferStartAngles: mainPieObj not found for ", b);
        continue;
      }
      const q = (N.startAngle + N.endAngle) / 2, V = d[N.data.label] / _ * 2 * Math.PI;
      A[N.data.label] = q - V / 2;
    }
    return A;
  }
  function fl(d, _, m) {
    const A = [], b = he, R = qi(d), N = ul(R, b, m);
    for (let [q, V] of _.entries()) {
      const F = structuredClone(V), I = V.endAngle - V.startAngle, T = m.find((U) => V.data.label === U.data.label && !U.data.isTransfer);
      if (T) {
        const U = T.data.label;
        F.startAngle = N[U], N[U] += I, F.endAngle = F.startAngle + I;
      } else if (V.data.label === "exhausted")
        F.startAngle = V.startAngle, F.endAngle = V.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", V.data.label);
        continue;
      }
      F.index = q, A.push(F);
    }
    return A;
  }
  function Xs(d, _, m, A, b, R) {
    const q = ut(x(Z)).append("g").attr("id", G).attr("transform", `translate(${m}, ${A})`), V = Ce().innerRadius(b * K).outerRadius(b * K);
    q.selectAll("text").data(_).enter().each(function(F) {
      F.endAngle - F.startAngle < nt || F.data.isTransfer || ut(this).append("g").attr("id", (I) => p(I.data)).classed("eliminated", (I) => R.includes(I.data.label) || I.data.isTransfer === !0).each(function(I, T) {
        I.data.label === "exhausted" && ut(this).on("mouseenter", (U, vn) => vl(U)).on("mouseleave", (U, vn) => gl());
      }).append("text").attr("transform", (I) => `translate(${V.centroid(I)})`).attr("text-anchor", (I) => Vi(I.startAngle, I.endAngle)).text((I) => I.data.label === "exhausted" ? tn : I.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((I) => {
        const T = Oi(I.data.label, d);
        return !h() && Gr(I.data.label) ? T : T + " (" + zn(I.data.label, d) + ")";
      });
    });
  }
  function cl(d, _, m, A) {
    const R = ut(x(Z)).select("#" + G), N = R.selectAll("tspan"), q = R.selectAll("g").data(_, (T) => p(T.data)).classed("eliminated", (T) => A.includes(T.data.label) || T.data.isTransfer === !0), V = Ce().innerRadius(m * K).outerRadius(m * K + 1);
    N.transition("global").duration(Q).attr("transform", (T) => `translate(${V.centroid(T)})`).attr("text-anchor", (T) => Vi(T.startAngle, T.endAngle)), q.select("text").transition("global").duration(Q).attr("transform", (T) => `translate(${V.centroid(T)})`).attr("text-anchor", (T) => Vi(T.startAngle, T.endAngle)).on("end", (T) => I());
    let F = q.size();
    function I(T) {
      F--, F === 0 && (R.remove(), Xs(d, _, E, S, m, A));
    }
  }
  function Bs(d, _, m, A, b, R, N, q = !0, V = !1, F = !1) {
    const T = ji().sort(null).value((U) => U.value)(m);
    return Ws(d, _, T, A, b, R, N, q, V, F), T;
  }
  function br() {
    ut(x(Z)).select("#" + P).selectAll(".elected").select("path").style("stroke", D).style("stroke-width", `${Xt}px`);
  }
  function Ws(d, _, m, A, b, R, N, q, V, F = !1) {
    const I = Bn(d), T = w(d), bt = ut(x(Z)).attr("viewBox", `0 0 ${g} ${y}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", _).attr("transform", `translate(${A}, ${b})`).selectAll(".slice").data(m).enter().append("g").attr("class", "slice").classed("eliminated", (rt) => I.includes(rt.data.label) || rt.data.isTransfer === !0).classed("elected", (rt) => T.includes(rt.data.label) && !rt.data.isTransfer).attr("id", (rt) => p(rt.data));
    F ? bt.style("pointer-events", "none") : bt.on("mouseenter", (rt, Ee) => Hi(rt, Ee)).on("mouseleave", (rt, Ee) => zi(rt, Ee));
    const Un = Ce().outerRadius(N).innerRadius(R);
    if (V) {
      const rt = Ce().outerRadius(R + 1).innerRadius(R);
      bt.append("path").attr("d", rt).attr("stroke", F ? "none" : gt).attr("stroke-width", F ? 0 : M).attr("fill", "none").transition("global").duration(Q).attr("d", (Ee) => Un(Ee)).attr("fill", F ? "none" : (Ee) => Gt(Ee)).on("end", (Ee) => {
        F || Yi();
      });
    } else
      bt.append("path").attr("d", (rt) => Un(rt)).attr("fill", F ? "none" : (rt) => Gt(rt)).attr("stroke", F ? "none" : gt).attr("stroke-width", F ? 0 : M), F || Yi();
    return q && !F && Xs(d, m, A, b, N, I), m;
  }
  function hl() {
    const m = ut(x(Z)).select("#" + G).selectAll(".eliminated");
    m.size() > 0 && m.classed("finished", !0);
  }
  function dl() {
    const m = ut(x(Z)).select("#" + G).selectAll(".finished");
    m.size() > 0 && m.remove();
  }
  function pl(d, _) {
    const b = ut(x(Z)).select("#" + C).selectAll(".eliminated"), R = Ce().innerRadius(d), N = Ce().outerRadius(_);
    b.classed("finished", !0).select("path").transition("global").duration(Q).attrTween("d", function(q) {
      const V = Jn(_, d);
      return function(F) {
        return N.innerRadius(V(F)), N(q);
      };
    }).attr("fill", (q) => `url(#${re(q.data.label)})`), b.clone(!0).classed("finished", !0).select("path").transition("global").duration(Q).attrTween("d", function(q) {
      const V = Jn(_, d);
      return function(F) {
        return R.outerRadius(V(F)), R(q);
      };
    }).attr("fill", (q) => Gt(q));
  }
  function Vi(d, _) {
    const m = (d + _) / 2;
    return m > Math.PI * 11 / 6 || m < Math.PI * 1 / 6 || m > Math.PI * 5 / 6 && m < Math.PI * 7 / 6 ? "middle" : m < Math.PI ? "start" : "end";
  }
  function Yi() {
    ut(x(
      Z
      // force redisplay of text labels
    )).select("#" + G).raise().append("g").remove();
  }
  function Us(d, _, m, A, b, R, N = !1) {
    const V = ji().sort(null).value((F) => F.value)(m);
    return Js(d, _, V, A, b, R, N), V;
  }
  function Gs(d, _, m, A, b = !1) {
    const R = Bn(d), N = w(d), F = ut(x(Z)).select("#" + _).selectAll(".slice").data(m, (T) => p(T.data)), I = F.enter().append("g").attr("class", "slice").attr("id", (T) => p(T.data)).classed("eliminated", !0);
    return b ? I.style("pointer-events", "none") : I.on("mouseenter", (T, U) => Hi(T, U)).on("mouseleave", (T, U) => zi(T, U)), I.append("path").attr("d", (T) => A(T)).attr("fill", b ? "none" : (T) => Gt(T)).attr("stroke", b ? "none" : gt).attr("stroke-width", b ? 0 : M), F.classed("eliminated", (T) => R.includes(T.data.label)).classed("elected", (T) => N.includes(T.data.label)), b || F.on("mouseenter", (T, U) => Hi(T, U)).on("mouseleave", (T, U) => zi(T, U)), F;
  }
  function Ks(d, _, m, A, b, R = !1) {
    const N = Ce().outerRadius(b).innerRadius(A);
    Gs(d, _, m, N, R).select("path").attr("d", (V) => N(V)).attr("fill", R ? "none" : (V) => Gt(V));
  }
  function Js(d, _, m, A, b, R, N = !1) {
    const q = Ce().outerRadius(b).innerRadius(A).startAngle((bt) => bt.startAngle).endAngle((bt) => bt.endAngle), V = Ce().outerRadius(b).innerRadius(A), I = ut(x(Z)).select("#" + _);
    I.selectAll(".slice").attr("prevStart", (bt) => bt.startAngle).attr("prevEnd", (bt) => bt.endAngle);
    const T = Gs(d, _, m, V, N);
    let U = T.size();
    function vn() {
      U--, U <= 0 && (N || Yi(), I.selectAll(".finished").remove());
    }
    return T.select("path").transition("global").duration(Q).attrTween("d", function(bt) {
      const Un = Number(ut(this.parentNode).attr("prevStart")), rt = Number(ut(this.parentNode).attr("prevEnd")), Ee = Jn(Un, bt.startAngle), ml = Jn(rt, bt.endAngle);
      return (js) => (q.startAngle(Ee(js)).endAngle(ml(js)), q(bt));
    }).on("end", vn), R && !N && cl(d, m, b, Bn(d)), m;
  }
  function Hi(d, _) {
    s(_.data.label), i("enter"), a(d.clientX), o(d.clientY);
  }
  function zi(d, _) {
    s(_.data.label), i("leave");
  }
  function vl(d, _) {
    i("show-exhausted"), a(d.clientX), o(d.clientY);
  }
  function gl(d, _) {
    i("hide-exhausted");
  }
  var _l = {
    pieColors: Nt,
    exhaustedLabel: tn,
    countExhaustedVotes: nn,
    getEliminatedCandidates: Bn,
    getElectedCandidates: w,
    runFullAnimationFn: rn,
    animateOnePhaseFn: pn,
    get jsonData() {
      return n();
    },
    set jsonData(d) {
      n(d), ft();
    },
    get currentRound() {
      return r();
    },
    set currentRound(d = 1) {
      r(d), ft();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(d) {
      i(d), ft();
    },
    get mouseData() {
      return s();
    },
    set mouseData(d) {
      s(d), ft();
    },
    get mouseX() {
      return a();
    },
    set mouseX(d) {
      a(d), ft();
    },
    get mouseY() {
      return o();
    },
    set mouseY(d) {
      o(d), ft();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(d = (_) => {
    }) {
      l(d), ft();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(d = []) {
      u(d), ft();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(d = !1) {
      f(d), ft();
    },
    get firstRoundDeterminesPercentages() {
      return h();
    },
    set firstRoundDeterminesPercentages(d = !1) {
      h(d), ft();
    },
    get displayPhase() {
      return c();
    },
    set displayPhase(d = 0) {
      c(d), ft();
    }
  }, Zs = Ed();
  return si(Zs, (d) => st(Z, d), () => x(Z)), ve(t, Zs), Rs(_l);
}
Mo(
  ol,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
    mouseX: {},
    mouseY: {},
    requestRoundChange: {},
    candidateColors: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    displayPhase: {}
  },
  [],
  [
    "pieColors",
    "exhaustedLabel",
    "countExhaustedVotes",
    "getEliminatedCandidates",
    "getElectedCandidates",
    "runFullAnimationFn",
    "animateOnePhaseFn"
  ],
  { mode: "open" }
);
var Cd = /* @__PURE__ */ Hn("<span> </span> <!>", 1), Td = /* @__PURE__ */ Hn("About to eliminate: <!>", 1), Nd = /* @__PURE__ */ Hn("<span> </span> <!>", 1), Sd = /* @__PURE__ */ Hn(" <!>", 1), kd = /* @__PURE__ */ Hn('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), Pd = /* @__PURE__ */ Hn("<span> </span> <br/>", 1), Md = /* @__PURE__ */ Hn('<div class="animation-button-container svelte-1r6y5gl"><button class="next-button svelte-1r6y5gl"> </button></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const Dd = {
  hash: "svelte-1r6y5gl",
  code: `.page-container.svelte-1r6y5gl {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1r6y5gl {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1r6y5gl {position:fixed;width:max-content;max-width:calc(100vw - 24px);text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;font-weight:normal;opacity:0;z-index:100;}.tooltip.svelte-1r6y5gl h3:where(.svelte-1r6y5gl) {text-align:center;}.animation-button-container.svelte-1r6y5gl {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.animation-button-container.svelte-1r6y5gl button:where(.svelte-1r6y5gl) {background-color:#4747ff;color:#fff;padding:1px 7px;font-size:0.67rem;min-width:107px;border:none;border-radius:3px;cursor:pointer;}.animation-button-container.svelte-1r6y5gl button:where(.svelte-1r6y5gl):hover {background-color:#4747c2;}.pie-chart-container.svelte-1r6y5gl {width:100%;min-width:auto;flex-grow:0;margin:0 auto;margin-top:-3vh;}.visualizations-container.svelte-1r6y5gl {display:flex;justify-content:space-between;width:100%;padding:0 20px;gap:20px;}

/* Media query for smaller screens */
@media (max-width: 1300px) {.visualizations-container.svelte-1r6y5gl {flex-direction:column;align-items:center;}
}

@media (max-width: 768px) {.page-container.svelte-1r6y5gl {padding:0 10px; /* Reduce padding on smaller screens */}.visualizations-container.svelte-1r6y5gl {padding:0; /* Remove padding on small screens */}
}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.5rem;}

@media (max-width: 768px) {.common-header.svelte-1r6y5gl {margin-bottom:0.5rem;}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.3rem 0;font-size:0.9rem;}
  
}`
};
function Fd(t, e) {
  Es(e, !0), ko(t, Dd);
  const n = 0.85;
  let r = pt(e, "electionSummary", 7), i = pt(e, "currentRound", 7, 1), s = pt(e, "requestRoundChange", 7, (w) => {
  }), a = pt(e, "candidateColors", 23, () => []), o = pt(e, "textForWinner", 7, "elected"), l = pt(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = pt(e, "firstRoundDeterminesPercentages", 7, !1), f = pt(e, "showCaptions", 7, !1);
  const h = {
    elected: {
      caption: "Elected",
      event: "was elected",
      infinitive: "to be elected"
    },
    won: { caption: "Won", event: "won", infinitive: "to win" },
    advanced: {
      caption: "Advanced",
      event: "advanced to the general",
      infinitive: "to advance to the general"
    },
    leading: {
      caption: "Leading",
      event: "is in the lead",
      infinitive: "to take the lead"
    }
  };
  let c = /* @__PURE__ */ Gn(() => h[o()] ?? h.elected), p = /* @__PURE__ */ mt(null), g = /* @__PURE__ */ mt(null), y = /* @__PURE__ */ mt(""), $ = /* @__PURE__ */ mt(xn([])), E = /* @__PURE__ */ mt(""), S = /* @__PURE__ */ mt(""), C = /* @__PURE__ */ mt(0), P = /* @__PURE__ */ mt(0), k = /* @__PURE__ */ Gn(() => G(r()));
  function G(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (B) {
        return console.error("Failed to parse JSON string:", B), {};
      }
    return w || {};
  }
  function ot(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function K(w, B, j) {
    w.style.left = B + "px", w.style.top = j + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const tt = w.getBoundingClientRect();
      let xt = B, Bt = j + 20;
      xt + tt.width > window.innerWidth - 12 && (xt = window.innerWidth - tt.width - 12), xt < 12 && (xt = 12), Bt + tt.height > window.innerHeight - 12 && (Bt = j - tt.height - 12), w.style.left = xt + "px", w.style.top = Bt + "px";
    });
  }
  function nt() {
    switch (x(E)) {
      case "enter":
        ((w) => {
          var B = Il(w, 2);
          st($, B[0], !0), st(y, B[1], !0);
        })(vt(x(S), i())), x(p) && (K(x(p), x(C) || 0, x(P) || 0), x(p).style.opacity = String(n));
        break;
      case "leave":
        x(p) && (x(p).style.opacity = "0"), st($, [], !0), st(y, "");
        break;
      case "show-exhausted":
        x(g) && (K(x(g), x(C) || 0, x(P) || 0), x(g).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(g) && (x(g).style.opacity = "0");
        break;
      default:
        console.log("Unknown mouse event: ", x(E));
        break;
    }
  }
  ks(() => nt());
  function Q(w, B) {
    return w == 1 ? B ? "vote was" : "vote will be" : B ? "votes were" : "votes will be";
  }
  function vt(w, B) {
    const j = [], wt = w === "exhausted" ? z() : w;
    let Pt;
    w == "exhausted" ? Pt = Tt(1) : Pt = x(k).results[0].tally[w], j.push(`${wt} started with ${Pt} votes.`);
    for (let tt = 1; tt <= B; tt++) {
      tt === B && (w == "exhausted" ? Pt = Tt(B) : Pt = x(k).results[B - 1].tally[w], j.push(`${wt} has ${Pt} votes at round ${B}.`));
      const xt = x(k).results[tt - 1].tallyResults, Bt = re(tt);
      for (let Mt = 0; Mt < xt.length; Mt++) {
        const dt = xt[Mt].transfers, Ot = xt[Mt].eliminated, et = xt[Mt].elected;
        if (!Bt) {
          if (Ot)
            Ot === w && j.push(`${wt} will be eliminated on round ${tt}.`);
          else if (w === et && (j.push(`${wt} ${x(c).event} on round ${tt}.`), dt))
            for (let [Ut, rn] of Object.entries(dt))
              j.push(`${rn} ${Q(Number(rn), tt < B)} transferred to ${Ut} on round ${tt}.`);
        }
        const Wt = Ot || et;
        if (Wt) {
          const Ut = Number(dt[w]);
          Ut && j.push(`${Ut} ${Q(Ut, tt < B)} transferred from ${Wt} on round ${tt}.`);
        }
      }
    }
    return [j, wt];
  }
  function gt() {
    let w = 0;
    for (let B = 1; B <= x(k).results.length; B++) {
      if (re(B)) continue;
      const j = x(k).results[B - 1].tallyResults;
      for (let wt = 0; wt < j.length; wt++)
        j[wt].elected && w++;
    }
    return w;
  }
  const M = ["Eliminate", "Transfer", "Consolidate"];
  let D, Xt = /* @__PURE__ */ mt(0);
  function re(w) {
    return l() && x(k).results && w === x(k).results.length;
  }
  function Ct(w) {
    return re(w) ? [] : D ? D.getEliminatedCandidates(w) : [];
  }
  function It(w) {
    return re(w) ? [] : D ? D.getElectedCandidates(w) : [];
  }
  function Tt(w) {
    return D ? D.countExhaustedVotes(w) : 0;
  }
  function he() {
    D && D.animateOnePhaseFn && D.animateOnePhaseFn();
  }
  function z() {
    return D ? D.exhaustedLabel : "";
  }
  function Nt() {
    return D ? D.pieColors : {};
  }
  var tn = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), ft();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), ft();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (B) => {
    }) {
      s(w), ft();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), ft();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), ft();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), ft();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), ft();
    },
    get showCaptions() {
      return f();
    },
    set showCaptions(w = !1) {
      f(w), ft();
    }
  }, Z = Md(), kt = gn(Z), $e = Jt(kt);
  $e.__click = he;
  var Ae = Jt($e, !0);
  Kt($e), Kt(kt);
  var qe = de(kt, 4), ht = Jt(qe), en = Jt(ht), nn = Jt(en);
  si(
    ol(nn, {
      get jsonData() {
        return x(k);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: ot,
      get candidateColors() {
        return a();
      },
      get excludeFinalWinnerAndEliminatedCandidate() {
        return l();
      },
      get firstRoundDeterminesPercentages() {
        return u();
      },
      get mouseEventType() {
        return x(E);
      },
      set mouseEventType(w) {
        st(E, w, !0);
      },
      get mouseData() {
        return x(S);
      },
      set mouseData(w) {
        st(S, w, !0);
      },
      get mouseX() {
        return x(C);
      },
      set mouseX(w) {
        st(C, w, !0);
      },
      get mouseY() {
        return x(P);
      },
      set mouseY(w) {
        st(P, w, !0);
      },
      get displayPhase() {
        return x(Xt);
      },
      set displayPhase(w) {
        st(Xt, w, !0);
      }
    }),
    (w) => D = w,
    () => D
  ), Kt(en), Kt(ht);
  var Ur = de(ht, 2);
  {
    var Oi = (w) => {
      var B = kd(), j = gn(B), wt = Jt(j);
      Kt(j);
      var Pt = de(j, 2), tt = Jt(Pt);
      {
        var xt = (et) => {
          var Wt = Td(), Ut = de(gn(Wt));
          Ui(Ut, 17, () => Ct(i()), Wi, (rn, dn, lt) => {
            var Wn = Cd(), Ve = gn(Wn);
            let Ye;
            var pn = Jt(Ve, !0);
            Kt(Ve);
            var yr = de(Ve, 2);
            {
              var wr = (He) => {
                var Gt = la(", ");
                ve(He, Gt);
              }, xr = /* @__PURE__ */ Gn(() => lt < Ct(i()).length - 1);
              $r(yr, (He) => {
                x(xr) && He(wr);
              });
            }
            Kn(
              (He) => {
                Ye = ca(Ve, "", Ye, He), sn(pn, x(dn));
              },
              [() => ({ color: Nt()[x(dn)] })]
            ), ve(rn, Wn);
          }), ve(et, Wt);
        }, Bt = /* @__PURE__ */ Gn(() => Ct(i()).length > 0);
        $r(tt, (et) => {
          x(Bt) && et(xt);
        });
      }
      var Mt = de(tt, 2);
      {
        var dt = (et) => {
          var Wt = Sd(), Ut = gn(Wt), rn = de(Ut);
          Ui(rn, 17, () => It(i()), Wi, (dn, lt, Wn) => {
            var Ve = Nd(), Ye = gn(Ve);
            let pn;
            var yr = Jt(Ye, !0);
            Kt(Ye);
            var wr = de(Ye, 2);
            {
              var xr = (Gt) => {
                var qi = la(", ");
                ve(Gt, qi);
              }, He = /* @__PURE__ */ Gn(() => Wn < It(i()).length - 1);
              $r(wr, (Gt) => {
                x(He) && Gt(xr);
              });
            }
            Kn(
              (Gt) => {
                pn = ca(Ye, "", pn, Gt), sn(yr, x(lt));
              },
              [() => ({ color: Nt()[x(lt)] })]
            ), ve(dn, Ve);
          }), Kn(() => sn(Ut, `${x(c).caption ?? ""}: `)), ve(et, Wt);
        }, Ot = /* @__PURE__ */ Gn(() => It(i()).length > 0);
        $r(Mt, (et) => {
          x(Ot) && et(dt);
        });
      }
      Kt(Pt), Kn((et) => sn(wt, `${x(k).config.contest ?? ""}, ${et ?? ""} ${x(c).infinitive ?? ""}, Round ${i() ?? ""}.`), [gt]), ve(w, B);
    };
    $r(Ur, (w) => {
      f() && w(Oi);
    });
  }
  Kt(qe);
  var zn = de(qe, 2), mr = Jt(zn), Gr = Jt(mr, !0);
  Kt(mr);
  var Li = de(mr, 2);
  Ui(Li, 17, () => x($), Wi, (w, B) => {
    var j = Pd(), wt = gn(j), Pt = Jt(wt, !0);
    Kt(wt), es(2), Kn(() => sn(Pt, x(B))), ve(w, j);
  }), Kt(zn), si(zn, (w) => st(p, w), () => x(p));
  var Xn = de(zn, 2), Bn = Jt(Xn);
  return es(2), Kt(Xn), si(Xn, (w) => st(g, w), () => x(g)), Kn(
    (w) => {
      sn(Ae, M[x(Xt)]), sn(Gr, x(y)), sn(Bn, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [z]
  ), ve(t, Z), Rs(tn);
}
Au(["click"]);
customElements.define("pie-chart", Mo(
  Fd,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {},
    candidateColors: {},
    textForWinner: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    showCaptions: {}
  },
  [],
  [],
  { mode: "open" }
));
