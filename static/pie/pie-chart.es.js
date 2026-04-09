var zl = Object.defineProperty;
var la = (e) => {
  throw TypeError(e);
};
var Hl = (e, t, n) => t in e ? zl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => Hl(e, typeof t != "symbol" ? t + "" : t, n), es = (e, t, n) => t.has(e) || la("Cannot " + n);
var v = (e, t, n) => (es(e, t, "read from private field"), n ? n.call(e) : t.get(e)), z = (e, t, n) => t.has(e) ? la("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), q = (e, t, n, r) => (es(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), be = (e, t, n) => (es(e, t, "access private method"), n);
var Ha;
typeof window < "u" && ((Ha = window.__svelte ?? (window.__svelte = {})).v ?? (Ha.v = /* @__PURE__ */ new Set())).add("5");
const Yl = 1, Bl = 2, Wa = 4, Xl = 8, Wl = 16, Ul = 1, Gl = 4, Kl = 8, jl = 16, Jl = 1, Zl = 2, Ns = "[", Di = "[!", ks = "]", cr = {}, Re = Symbol(), Ua = "http://www.w3.org/1999/xhtml", os = !1;
var Ga = Array.isArray, Ql = Array.prototype.indexOf, hr = Array.prototype.includes, Oi = Array.from, xi = Object.keys, bi = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, eu = Object.getOwnPropertyDescriptors, tu = Object.prototype, nu = Array.prototype, Ka = Object.getPrototypeOf, ua = Object.isExtensible;
const ru = () => {
};
function iu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ja() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
function su(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ce = 2, Lr = 4, Fi = 8, Ja = 1 << 24, cn = 16, Tt = 32, An = 64, Za = 128, ht = 512, Ae = 1024, Ne = 2048, Et = 4096, nt = 8192, on = 16384, wr = 32768, dr = 65536, fa = 1 << 17, Qa = 1 << 18, jn = 1 << 19, au = 1 << 20, sn = 1 << 25, Wn = 65536, ls = 1 << 21, Ms = 1 << 22, yn = 1 << 23, Or = Symbol("$state"), eo = Symbol("legacy props"), ou = Symbol(""), kn = new class extends Error {
  constructor() {
    super(...arguments);
    pe(this, "name", "StaleReactionError");
    pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ya;
const lu = ((Ya = globalThis.document) == null ? void 0 : /* @__PURE__ */ Ya.contentType.includes("xml")) ?? !1, Kr = 3, xr = 8;
function uu(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function fu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function cu(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function hu(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function du() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function pu(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function gu() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function _u(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function mu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function yu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function wu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function xu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ii(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function bu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function an(e) {
  j = e;
}
let X;
function Ie(e) {
  if (e === null)
    throw Ii(), cr;
  return X = e;
}
function Li() {
  return Ie(/* @__PURE__ */ Ht(X));
}
function Oe(e) {
  if (j) {
    if (/* @__PURE__ */ Ht(X) !== null)
      throw Ii(), cr;
    X = e;
  }
}
function us(e = 1) {
  if (j) {
    for (var t = e, n = X; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ht(n);
    X = n;
  }
}
function $i(e = !0) {
  for (var t = 0, n = X; ; ) {
    if (n.nodeType === xr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ks) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Ns || r === Di || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ht(n)
    );
    e && n.remove(), n = i;
  }
}
function to(e) {
  if (!e || e.nodeType !== xr)
    throw Ii(), cr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function no(e) {
  return e === this.v;
}
function $u(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ro(e) {
  return !$u(e, this.v);
}
let Au = !1, it = null;
function pr(e) {
  it = e;
}
function qi(e, t = !1, n) {
  it = {
    p: it,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Vi(e) {
  var t = (
    /** @type {ComponentContext} */
    it
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Co(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, it = t.p, e ?? /** @type {T} */
  {};
}
function io() {
  return !0;
}
let Mn = [];
function so() {
  var e = Mn;
  Mn = [], iu(e);
}
function wn(e) {
  if (Mn.length === 0 && !Fr) {
    var t = Mn;
    queueMicrotask(() => {
      t === Mn && so();
    });
  }
  Mn.push(e);
}
function Eu() {
  for (; Mn.length > 0; )
    so();
}
function ao(e) {
  var t = J;
  if (t === null)
    return B.f |= yn, e;
  if ((t.f & wr) === 0 && (t.f & Lr) === 0)
    throw e;
  vr(e, t);
}
function vr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Za) !== 0) {
      if ((t.f & wr) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Tu = -7169;
function ge(e, t) {
  e.f = e.f & Tu | t;
}
function Ps(e) {
  (e.f & ht) !== 0 || e.deps === null ? ge(e, Ae) : ge(e, Et);
}
function oo(e) {
  if (e !== null)
    for (const t of e)
      (t.f & Ce) === 0 || (t.f & Wn) === 0 || (t.f ^= Wn, oo(
        /** @type {Derived} */
        t.deps
      ));
}
function lo(e, t, n) {
  (e.f & Ne) !== 0 ? t.add(e) : (e.f & Et) !== 0 && n.add(e), oo(e.deps), ge(e, Ae);
}
const ti = /* @__PURE__ */ new Set();
let K = null, Se = null, Ue = [], zi = null, fs = !1, Fr = !1;
var ir, sr, Fn, ar, Br, Xr, In, Qt, or, zt, cs, hs, uo;
const Js = class Js {
  constructor() {
    z(this, zt);
    pe(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    pe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    pe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    z(this, ir, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    z(this, sr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    z(this, Fn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    z(this, ar, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    z(this, Br, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    z(this, Xr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    z(this, In, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    z(this, Qt, /* @__PURE__ */ new Map());
    pe(this, "is_fork", !1);
    z(this, or, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, ar) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    v(this, Qt).has(t) || v(this, Qt).set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var n = v(this, Qt).get(t);
    if (n) {
      v(this, Qt).delete(t);
      for (var r of n.d)
        ge(r, Ne), $t(r);
      for (r of n.m)
        ge(r, Et), $t(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    Ue = [], this.apply();
    var n = [], r = [];
    for (const s of t)
      be(this, zt, cs).call(this, s, n, r);
    if (this.is_deferred()) {
      be(this, zt, hs).call(this, r), be(this, zt, hs).call(this, n);
      for (const [s, a] of v(this, Qt))
        po(s, a);
    } else {
      for (const s of v(this, ir)) s();
      v(this, ir).clear(), v(this, Fn) === 0 && be(this, zt, uo).call(this), K = null, ca(r), ca(n), (i = v(this, Br)) == null || i.resolve();
    }
    Se = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== Re && !this.previous.has(t) && this.previous.set(t, n), (t.f & yn) === 0 && (this.current.set(t, t.v), Se == null || Se.set(t, t.v));
  }
  activate() {
    K = this, this.apply();
  }
  deactivate() {
    K === this && (K = null, Se = null);
  }
  flush() {
    if (this.activate(), Ue.length > 0) {
      if (fo(), K !== null && K !== this)
        return;
    } else v(this, Fn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of v(this, sr)) t(this);
    v(this, sr).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    q(this, Fn, v(this, Fn) + 1), t && q(this, ar, v(this, ar) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    q(this, Fn, v(this, Fn) - 1), t && q(this, ar, v(this, ar) - 1), !v(this, or) && (q(this, or, !0), wn(() => {
      q(this, or, !1), this.is_deferred() ? Ue.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of v(this, Xr))
      v(this, In).delete(t), ge(t, Ne), $t(t);
    for (const t of v(this, In))
      ge(t, Et), $t(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    v(this, ir).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    v(this, sr).add(t);
  }
  settled() {
    return (v(this, Br) ?? q(this, Br, ja())).promise;
  }
  static ensure() {
    if (K === null) {
      const t = K = new Js();
      ti.add(K), Fr || wn(() => {
        K === t && t.flush();
      });
    }
    return K;
  }
  apply() {
  }
};
ir = new WeakMap(), sr = new WeakMap(), Fn = new WeakMap(), ar = new WeakMap(), Br = new WeakMap(), Xr = new WeakMap(), In = new WeakMap(), Qt = new WeakMap(), or = new WeakMap(), zt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
cs = function(t, n, r) {
  t.f ^= Ae;
  for (var i = t.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (Tt | An)) !== 0, l = o && (a & Ae) !== 0, u = l || (a & nt) !== 0 || v(this, Qt).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= Ae : s !== null && (a & (Lr | Fi | Ja)) !== 0 ? s.b.defer_effect(i) : (a & Lr) !== 0 ? n.push(i) : jr(i) && ((a & cn) !== 0 && v(this, In).add(i), _r(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    var d = i.parent;
    for (i = i.next; i === null && d !== null; )
      d === s && (s = null), i = d.next, d = d.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
hs = function(t) {
  for (var n = 0; n < t.length; n += 1)
    lo(t[n], v(this, Xr), v(this, In));
}, uo = function() {
  var i;
  if (ti.size > 1) {
    this.previous.clear();
    var t = Se, n = !0;
    for (const s of ti) {
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
        var r = Ue;
        Ue = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          co(f, o, l, u);
        if (Ue.length > 0) {
          K = s, s.apply();
          for (const f of Ue)
            be(i = s, zt, cs).call(i, f, [], []);
          s.deactivate();
        }
        Ue = r;
      }
    }
    K = null, Se = t;
  }
  this.committed = !0, ti.delete(this);
};
let ln = Js;
function ne(e) {
  var t = Fr;
  Fr = !0;
  try {
    for (var n; ; ) {
      if (Eu(), Ue.length === 0 && (K == null || K.flush(), Ue.length === 0))
        return zi = null, /** @type {T} */
        n;
      fo();
    }
  } finally {
    Fr = t;
  }
}
function fo() {
  fs = !0;
  var e = null;
  try {
    for (var t = 0; Ue.length > 0; ) {
      var n = ln.ensure();
      if (t++ > 1e3) {
        var r, i;
        Ru();
      }
      n.process(Ue), xn.clear();
    }
  } finally {
    Ue = [], fs = !1, zi = null;
  }
}
function Ru() {
  try {
    vu();
  } catch (e) {
    vr(e, zi);
  }
}
let wt = null;
function ca(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (on | nt)) === 0 && jr(r) && (wt = /* @__PURE__ */ new Set(), _r(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Mo(r), (wt == null ? void 0 : wt.size) > 0)) {
        xn.clear();
        for (const i of wt) {
          if ((i.f & (on | nt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            wt.has(a) && (wt.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (on | nt)) === 0 && _r(l);
          }
        }
        wt.clear();
      }
    }
    wt = null;
  }
}
function co(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & Ce) !== 0 ? co(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Ms | cn)) !== 0 && (s & Ne) === 0 && ho(i, t, r) && (ge(i, Ne), $t(
        /** @type {Effect} */
        i
      ));
    }
}
function ho(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (hr.call(t, i))
        return !0;
      if ((i.f & Ce) !== 0 && ho(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function $t(e) {
  for (var t = zi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (fs && t === J && (n & cn) !== 0 && (n & Qa) === 0)
      return;
    if ((n & (An | Tt)) !== 0) {
      if ((n & Ae) === 0) return;
      t.f ^= Ae;
    }
  }
  Ue.push(t);
}
function po(e, t) {
  if (!((e.f & Tt) !== 0 && (e.f & Ae) !== 0)) {
    (e.f & Ne) !== 0 ? t.d.push(e) : (e.f & Et) !== 0 && t.m.push(e), ge(e, Ae);
    for (var n = e.first; n !== null; )
      po(n, t), n = n.next;
  }
}
function Su(e) {
  let t = 0, n = Un(0), r;
  return () => {
    Fs() && ($(n), Ls(() => (t === 0 && (r = Bi(() => e(() => Ir(n)))), t += 1, () => {
      wn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Ir(n));
      });
    })));
  };
}
var Cu = dr | jn | Za;
function Nu(e, t, n) {
  new ku(e, t, n);
}
var et, Wr, Dt, Ln, Ot, ut, Xe, Ft, en, mn, qn, tn, lr, Vn, ur, fr, nn, Mi, me, vo, go, ds, ui, fi, ps;
class ku {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    z(this, me);
    /** @type {Boundary | null} */
    pe(this, "parent");
    pe(this, "is_pending", !1);
    /** @type {TemplateNode} */
    z(this, et);
    /** @type {TemplateNode | null} */
    z(this, Wr, j ? X : null);
    /** @type {BoundaryProps} */
    z(this, Dt);
    /** @type {((anchor: Node) => void)} */
    z(this, Ln);
    /** @type {Effect} */
    z(this, Ot);
    /** @type {Effect | null} */
    z(this, ut, null);
    /** @type {Effect | null} */
    z(this, Xe, null);
    /** @type {Effect | null} */
    z(this, Ft, null);
    /** @type {DocumentFragment | null} */
    z(this, en, null);
    /** @type {TemplateNode | null} */
    z(this, mn, null);
    z(this, qn, 0);
    z(this, tn, 0);
    z(this, lr, !1);
    z(this, Vn, !1);
    /** @type {Set<Effect>} */
    z(this, ur, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    z(this, fr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    z(this, nn, null);
    z(this, Mi, Su(() => (q(this, nn, Un(v(this, qn))), () => {
      q(this, nn, null);
    })));
    q(this, et, t), q(this, Dt, n), q(this, Ln, r), this.parent = /** @type {Effect} */
    J.b, this.is_pending = !!v(this, Dt).pending, q(this, Ot, qs(() => {
      if (J.b = this, j) {
        const s = v(this, Wr);
        Li(), /** @type {Comment} */
        s.nodeType === xr && /** @type {Comment} */
        s.data === Di ? be(this, me, go).call(this) : (be(this, me, vo).call(this), v(this, tn) === 0 && (this.is_pending = !1));
      } else {
        var i = be(this, me, ds).call(this);
        try {
          q(this, ut, ct(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, tn) > 0 ? be(this, me, fi).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, mn)) == null || s.remove();
      };
    }, Cu)), j && q(this, et, X);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    lo(t, v(this, ur), v(this, fr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, Dt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    be(this, me, ps).call(this, t), q(this, qn, v(this, qn) + t), !(!v(this, nn) || v(this, lr)) && (q(this, lr, !0), wn(() => {
      q(this, lr, !1), v(this, nn) && gr(v(this, nn), v(this, qn));
    }));
  }
  get_effect_pending() {
    return v(this, Mi).call(this), $(
      /** @type {Source<number>} */
      v(this, nn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = v(this, Dt).onerror;
    let r = v(this, Dt).failed;
    if (v(this, Vn) || !n && !r)
      throw t;
    v(this, ut) && (Le(v(this, ut)), q(this, ut, null)), v(this, Xe) && (Le(v(this, Xe)), q(this, Xe, null)), v(this, Ft) && (Le(v(this, Ft)), q(this, Ft, null)), j && (Ie(
      /** @type {TemplateNode} */
      v(this, Wr)
    ), us(), Ie($i()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        bu();
        return;
      }
      i = !0, s && xu(), ln.ensure(), q(this, qn, 0), v(this, Ft) !== null && Yn(v(this, Ft), () => {
        q(this, Ft, null);
      }), this.is_pending = this.has_pending_snippet(), q(this, ut, be(this, me, ui).call(this, () => (q(this, Vn, !1), ct(() => v(this, Ln).call(this, v(this, et)))))), v(this, tn) > 0 ? be(this, me, fi).call(this) : this.is_pending = !1;
    };
    wn(() => {
      try {
        s = !0, n == null || n(t, a), s = !1;
      } catch (o) {
        vr(o, v(this, Ot) && v(this, Ot).parent);
      }
      r && q(this, Ft, be(this, me, ui).call(this, () => {
        ln.ensure(), q(this, Vn, !0);
        try {
          return ct(() => {
            r(
              v(this, et),
              () => t,
              () => a
            );
          });
        } catch (o) {
          return vr(
            o,
            /** @type {Effect} */
            v(this, Ot).parent
          ), null;
        } finally {
          q(this, Vn, !1);
        }
      }));
    });
  }
}
et = new WeakMap(), Wr = new WeakMap(), Dt = new WeakMap(), Ln = new WeakMap(), Ot = new WeakMap(), ut = new WeakMap(), Xe = new WeakMap(), Ft = new WeakMap(), en = new WeakMap(), mn = new WeakMap(), qn = new WeakMap(), tn = new WeakMap(), lr = new WeakMap(), Vn = new WeakMap(), ur = new WeakMap(), fr = new WeakMap(), nn = new WeakMap(), Mi = new WeakMap(), me = new WeakSet(), vo = function() {
  try {
    q(this, ut, ct(() => v(this, Ln).call(this, v(this, et))));
  } catch (t) {
    this.error(t);
  }
}, go = function() {
  const t = v(this, Dt).pending;
  t && (q(this, Xe, ct(() => t(v(this, et)))), wn(() => {
    var n = be(this, me, ds).call(this);
    q(this, ut, be(this, me, ui).call(this, () => (ln.ensure(), ct(() => v(this, Ln).call(this, n))))), v(this, tn) > 0 ? be(this, me, fi).call(this) : (Yn(
      /** @type {Effect} */
      v(this, Xe),
      () => {
        q(this, Xe, null);
      }
    ), this.is_pending = !1);
  }));
}, ds = function() {
  var t = v(this, et);
  return this.is_pending && (q(this, mn, rt()), v(this, et).before(v(this, mn)), t = v(this, mn)), t;
}, /**
 * @param {() => Effect | null} fn
 */
ui = function(t) {
  var n = J, r = B, i = it;
  Vt(v(this, Ot)), pt(v(this, Ot)), pr(v(this, Ot).ctx);
  try {
    return t();
  } catch (s) {
    return ao(s), null;
  } finally {
    Vt(n), pt(r), pr(i);
  }
}, fi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    v(this, Dt).pending
  );
  v(this, ut) !== null && (q(this, en, document.createDocumentFragment()), v(this, en).append(
    /** @type {TemplateNode} */
    v(this, mn)
  ), Oo(v(this, ut), v(this, en))), v(this, Xe) === null && q(this, Xe, ct(() => t(v(this, et))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ps = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && be(n = this.parent, me, ps).call(n, t);
    return;
  }
  if (q(this, tn, v(this, tn) + t), v(this, tn) === 0) {
    this.is_pending = !1;
    for (const r of v(this, ur))
      ge(r, Ne), $t(r);
    for (const r of v(this, fr))
      ge(r, Et), $t(r);
    v(this, ur).clear(), v(this, fr).clear(), v(this, Xe) && Yn(v(this, Xe), () => {
      q(this, Xe, null);
    }), v(this, en) && (v(this, et).before(v(this, en)), q(this, en, null));
  }
};
function Mu(e, t, n, r) {
  const i = Hi;
  var s = e.filter((h) => !h.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var a = K, o = (
    /** @type {Effect} */
    J
  ), l = Pu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    l();
    try {
      r(h);
    } catch (p) {
      (o.f & on) === 0 && vr(p, o);
    }
    a == null || a.deactivate(), vs();
  }
  if (n.length === 0) {
    u.then(() => f(t.map(i)));
    return;
  }
  function d() {
    l(), Promise.all(n.map((h) => /* @__PURE__ */ Du(h))).then((h) => f([...t.map(i), ...h])).catch((h) => vr(h, o));
  }
  u ? u.then(d) : d();
}
function Pu() {
  var e = J, t = B, n = it, r = K;
  return function(s = !0) {
    Vt(e), pt(t), pr(n), s && (r == null || r.activate());
  };
}
function vs() {
  Vt(null), pt(null), pr(null);
}
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  var t = Ce | Ne, n = B !== null && (B.f & Ce) !== 0 ? (
    /** @type {Derived} */
    B
  ) : null;
  return J !== null && (J.f |= jn), {
    ctx: it,
    deps: null,
    effects: null,
    equals: no,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Re
    ),
    wv: 0,
    parent: n ?? J,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Du(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    J
  );
  r === null && fu();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Un(
    /** @type {V} */
    Re
  ), o = !B, l = /* @__PURE__ */ new Map();
  return Bu(() => {
    var p;
    var u = ja();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        f === K && f.committed && f.deactivate(), vs();
      });
    } catch (_) {
      u.reject(_), vs();
    }
    var f = (
      /** @type {Batch} */
      K
    );
    if (o) {
      var d = i.is_rendered();
      i.update_pending_count(1), f.increment(d), (p = l.get(f)) == null || p.reject(kn), l.delete(f), l.set(f, u);
    }
    const h = (_, x = void 0) => {
      if (f.activate(), x)
        x !== kn && (a.f |= yn, gr(a, x));
      else {
        (a.f & yn) !== 0 && (a.f ^= yn), gr(a, _);
        for (const [y, b] of l) {
          if (l.delete(y), y === f) break;
          b.reject(kn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(d));
    };
    u.promise.then(h, (_) => h(null, _ || "unknown"));
  }), zu(() => {
    for (const u of l.values())
      u.reject(kn);
  }), new Promise((u) => {
    function f(d) {
      function h() {
        d === s ? u(a) : f(s);
      }
      d.then(h, h);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  const t = /* @__PURE__ */ Hi(e);
  return Fo(t), t;
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  const t = /* @__PURE__ */ Hi(e);
  return t.equals = ro, t;
}
function Ou(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Le(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Fu(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ce) === 0)
      return (t.f & on) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Ds(e) {
  var t, n = J;
  Vt(Fu(e));
  try {
    e.f &= ~Wn, Ou(e), t = Vo(e);
  } finally {
    Vt(n);
  }
  return t;
}
function mo(e) {
  var t = Ds(e);
  if (!e.equals(t) && (e.wv = Lo(), (!(K != null && K.is_fork) || e.deps === null) && (e.v = t, e.deps === null))) {
    ge(e, Ae);
    return;
  }
  $n || (Se !== null ? (Fs() || K != null && K.is_fork) && Se.set(e, t) : Ps(e));
}
function Iu(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(kn), r.teardown = ru, r.ac = null, qr(r, 0), Vs(r));
}
function yo(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && _r(t);
}
let gs = /* @__PURE__ */ new Set();
const xn = /* @__PURE__ */ new Map();
let wo = !1;
function Un(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: no,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  const n = Un(e);
  return Fo(n), n;
}
// @__NO_SIDE_EFFECTS__
function xo(e, t = !1, n = !0) {
  const r = Un(e);
  return t || (r.equals = ro), r;
}
function ve(e, t, n = !1) {
  B !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!At || (B.f & fa) !== 0) && io() && (B.f & (Ce | cn | Ms | fa)) !== 0 && (dt === null || !hr.call(dt, e)) && wu();
  let r = n ? Pn(t) : t;
  return gr(e, r);
}
function gr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    $n ? xn.set(e, t) : xn.set(e, n), e.v = t;
    var r = ln.ensure();
    if (r.capture(e, n), (e.f & Ce) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & Ne) !== 0 && Ds(i), Ps(i);
    }
    e.wv = Lo(), bo(e, Ne), J !== null && (J.f & Ae) !== 0 && (J.f & (Tt | An)) === 0 && (lt === null ? Uu([e]) : lt.push(e)), !r.is_fork && gs.size > 0 && !wo && Lu();
  }
  return t;
}
function Lu() {
  wo = !1;
  for (const e of gs)
    (e.f & Ae) !== 0 && ge(e, Et), jr(e) && _r(e);
  gs.clear();
}
function Ir(e) {
  ve(e, e.v + 1);
}
function bo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Ne) === 0;
      if (o && ge(s, t), (a & Ce) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Se == null || Se.delete(l), (a & Wn) === 0 && (a & ht && (s.f |= Wn), bo(l, Et));
      } else o && ((a & cn) !== 0 && wt !== null && wt.add(
        /** @type {Effect} */
        s
      ), $t(
        /** @type {Effect} */
        s
      ));
    }
}
function Pn(e) {
  if (typeof e != "object" || e === null || Or in e)
    return e;
  const t = Ka(e);
  if (t !== tu && t !== nu)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ga(e), i = /* @__PURE__ */ $e(0), s = Bn, a = (o) => {
    if (Bn === s)
      return o();
    var l = B, u = Bn;
    pt(null), pa(s);
    var f = o();
    return pt(l), pa(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ $e(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && mu();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var d = /* @__PURE__ */ $e(u.value);
          return n.set(l, d), d;
        }) : ve(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ $e(Re));
            n.set(l, f), Ir(i);
          }
        } else
          ve(u, Re), Ir(i);
        return !0;
      },
      get(o, l, u) {
        var p;
        if (l === Or)
          return e;
        var f = n.get(l), d = l in o;
        if (f === void 0 && (!d || (p = Hn(o, l)) != null && p.writable) && (f = a(() => {
          var _ = Pn(d ? o[l] : Re), x = /* @__PURE__ */ $e(_);
          return x;
        }), n.set(l, f)), f !== void 0) {
          var h = $(f);
          return h === Re ? void 0 : h;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = $(f));
        } else if (u === void 0) {
          var d = n.get(l), h = d == null ? void 0 : d.v;
          if (d !== void 0 && h !== Re)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        var h;
        if (l === Or)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== Re || Reflect.has(o, l);
        if (u !== void 0 || J !== null && (!f || (h = Hn(o, l)) != null && h.writable)) {
          u === void 0 && (u = a(() => {
            var p = f ? Pn(o[l]) : Re, _ = /* @__PURE__ */ $e(p);
            return _;
          }), n.set(l, u));
          var d = $(u);
          if (d === Re)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var N;
        var d = n.get(l), h = l in o;
        if (r && l === "length")
          for (var p = u; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var _ = n.get(p + "");
            _ !== void 0 ? ve(_, Re) : p in o && (_ = a(() => /* @__PURE__ */ $e(Re)), n.set(p + "", _));
          }
        if (d === void 0)
          (!h || (N = Hn(o, l)) != null && N.writable) && (d = a(() => /* @__PURE__ */ $e(void 0)), ve(d, Pn(u)), n.set(l, d));
        else {
          h = d.v !== Re;
          var x = a(() => Pn(u));
          ve(d, x);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, l);
        if (y != null && y.set && y.set.call(f, u), !h) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), O = Number(l);
            Number.isInteger(O) && O >= b.v && ve(b, O + 1);
          }
          Ir(i);
        }
        return !0;
      },
      ownKeys(o) {
        $(i);
        var l = Reflect.ownKeys(o).filter((d) => {
          var h = n.get(d);
          return h === void 0 || h.v !== Re;
        });
        for (var [u, f] of n)
          f.v !== Re && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        yu();
      }
    }
  );
}
var ha, $o, Ao, Eo;
function _s() {
  if (ha === void 0) {
    ha = window, $o = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ao = Hn(t, "firstChild").get, Eo = Hn(t, "nextSibling").get, ua(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ua(n) && (n.__t = void 0);
  }
}
function rt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function un(e) {
  return (
    /** @type {TemplateNode | null} */
    Ao.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return (
    /** @type {TemplateNode | null} */
    Eo.call(e)
  );
}
function Be(e, t) {
  if (!j)
    return /* @__PURE__ */ un(e);
  var n = /* @__PURE__ */ un(X);
  if (n === null)
    n = X.appendChild(rt());
  else if (t && n.nodeType !== Kr) {
    var r = rt();
    return n == null || n.before(r), Ie(r), r;
  }
  return t && Yi(
    /** @type {Text} */
    n
  ), Ie(n), n;
}
function gn(e, t = !1) {
  if (!j) {
    var n = /* @__PURE__ */ un(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ht(n) : n;
  }
  if (t) {
    if ((X == null ? void 0 : X.nodeType) !== Kr) {
      var r = rt();
      return X == null || X.before(r), Ie(r), r;
    }
    Yi(
      /** @type {Text} */
      X
    );
  }
  return X;
}
function Ze(e, t = 1, n = !1) {
  let r = j ? X : e;
  for (var i; t--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ht(r);
  if (!j)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Kr) {
      var s = rt();
      return r === null ? i == null || i.after(s) : r.before(s), Ie(s), s;
    }
    Yi(
      /** @type {Text} */
      r
    );
  }
  return Ie(r), r;
}
function To(e) {
  e.textContent = "";
}
function Ro() {
  return !1;
}
function Os(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ua, e, void 0)
  );
}
function Yi(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Kr; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function So(e) {
  var t = B, n = J;
  pt(null), Vt(null);
  try {
    return e();
  } finally {
    pt(t), Vt(n);
  }
}
function qu(e) {
  J === null && (B === null && pu(), du()), $n && hu();
}
function Vu(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Yt(e, t, n) {
  var r = J;
  r !== null && (r.f & nt) !== 0 && (e |= nt);
  var i = {
    ctx: it,
    deps: null,
    nodes: null,
    f: e | Ne | ht,
    first: null,
    fn: t,
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
      _r(i);
    } catch (o) {
      throw Le(i), o;
    }
  else t !== null && $t(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & jn) === 0 && (s = s.first, (e & cn) !== 0 && (e & dr) !== 0 && s !== null && (s.f |= dr)), s !== null && (s.parent = r, r !== null && Vu(s, r), B !== null && (B.f & Ce) !== 0 && (e & An) === 0)) {
    var a = (
      /** @type {Derived} */
      B
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Fs() {
  return B !== null && !At;
}
function zu(e) {
  const t = Yt(Fi, null, !1);
  return ge(t, Ae), t.teardown = e, t;
}
function Is(e) {
  qu();
  var t = (
    /** @type {Effect} */
    J.f
  ), n = !B && (t & Tt) !== 0 && (t & wr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      it
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Co(e);
}
function Co(e) {
  return Yt(Lr | au, e, !1);
}
function Hu(e) {
  ln.ensure();
  const t = Yt(An | jn, e, !0);
  return () => {
    Le(t);
  };
}
function Yu(e) {
  ln.ensure();
  const t = Yt(An | jn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Yn(t, () => {
      Le(t), r(void 0);
    }) : (Le(t), r(void 0));
  });
}
function No(e) {
  return Yt(Lr, e, !1);
}
function Bu(e) {
  return Yt(Ms | jn, e, !0);
}
function Ls(e, t = 0) {
  return Yt(Fi | t, e, !0);
}
function Zt(e, t = [], n = [], r = []) {
  Mu(r, t, n, (i) => {
    Yt(Fi, () => e(...i.map($)), !0);
  });
}
function qs(e, t = 0) {
  var n = Yt(cn | t, e, !0);
  return n;
}
function ct(e) {
  return Yt(Tt | jn, e, !0);
}
function ko(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = $n, r = B;
    da(!0), pt(null);
    try {
      t.call(null);
    } finally {
      da(n), pt(r);
    }
  }
}
function Vs(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && So(() => {
      i.abort(kn);
    });
    var r = n.next;
    (n.f & An) !== 0 ? n.parent = null : Le(n, t), n = r;
  }
}
function Xu(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Tt) === 0 && Le(t), t = n;
  }
}
function Le(e, t = !0) {
  var n = !1;
  (t || (e.f & Qa) !== 0) && e.nodes !== null && e.nodes.end !== null && (Wu(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Vs(e, t && !n), qr(e, 0), ge(e, on);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  ko(e);
  var i = e.parent;
  i !== null && i.first !== null && Mo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Wu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ht(e);
    e.remove(), e = n;
  }
}
function Mo(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Yn(e, t, n = !0) {
  var r = [];
  Po(e, r, !0);
  var i = () => {
    n && Le(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function Po(e, t, n) {
  if ((e.f & nt) === 0) {
    e.f ^= nt;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var s = i.next, a = (i.f & dr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Tt) !== 0 && (e.f & cn) !== 0;
      Po(i, t, a ? n : !1), i = s;
    }
  }
}
function zs(e) {
  Do(e, !0);
}
function Do(e, t) {
  if ((e.f & nt) !== 0) {
    e.f ^= nt, (e.f & Ae) === 0 && (ge(e, Ne), $t(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & dr) !== 0 || (n.f & Tt) !== 0;
      Do(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Oo(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Ht(n);
      t.append(n), n = i;
    }
}
let ci = !1, $n = !1;
function da(e) {
  $n = e;
}
let B = null, At = !1;
function pt(e) {
  B = e;
}
let J = null;
function Vt(e) {
  J = e;
}
let dt = null;
function Fo(e) {
  B !== null && (dt === null ? dt = [e] : dt.push(e));
}
let Ge = null, Qe = 0, lt = null;
function Uu(e) {
  lt = e;
}
let Io = 1, Dn = 0, Bn = Dn;
function pa(e) {
  Bn = e;
}
function Lo() {
  return ++Io;
}
function jr(e) {
  var t = e.f;
  if ((t & Ne) !== 0)
    return !0;
  if (t & Ce && (e.f &= ~Wn), (t & Et) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (jr(
        /** @type {Derived} */
        s
      ) && mo(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & ht) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Se === null && ge(e, Ae);
  }
  return !1;
}
function qo(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(dt !== null && hr.call(dt, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & Ce) !== 0 ? qo(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? ge(s, Ne) : (s.f & Ae) !== 0 && ge(s, Et), $t(
        /** @type {Effect} */
        s
      ));
    }
}
function Vo(e) {
  var x;
  var t = Ge, n = Qe, r = lt, i = B, s = dt, a = it, o = At, l = Bn, u = e.f;
  Ge = /** @type {null | Value[]} */
  null, Qe = 0, lt = null, B = (u & (Tt | An)) === 0 ? e : null, dt = null, pr(e.ctx), At = !1, Bn = ++Dn, e.ac !== null && (So(() => {
    e.ac.abort(kn);
  }), e.ac = null);
  try {
    e.f |= ls;
    var f = (
      /** @type {Function} */
      e.fn
    ), d = f();
    e.f |= wr;
    var h = e.deps, p = K == null ? void 0 : K.is_fork;
    if (Ge !== null) {
      var _;
      if (p || qr(e, Qe), h !== null && Qe > 0)
        for (h.length = Qe + Ge.length, _ = 0; _ < Ge.length; _++)
          h[Qe + _] = Ge[_];
      else
        e.deps = h = Ge;
      if (Fs() && (e.f & ht) !== 0)
        for (_ = Qe; _ < h.length; _++)
          ((x = h[_]).reactions ?? (x.reactions = [])).push(e);
    } else !p && h !== null && Qe < h.length && (qr(e, Qe), h.length = Qe);
    if (io() && lt !== null && !At && h !== null && (e.f & (Ce | Et | Ne)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      lt.length; _++)
        qo(
          lt[_],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Dn++, i.deps !== null)
        for (let y = 0; y < n; y += 1)
          i.deps[y].rv = Dn;
      if (t !== null)
        for (const y of t)
          y.rv = Dn;
      lt !== null && (r === null ? r = lt : r.push(.../** @type {Source[]} */
      lt));
    }
    return (e.f & yn) !== 0 && (e.f ^= yn), d;
  } catch (y) {
    return ao(y);
  } finally {
    e.f ^= ls, Ge = t, Qe = n, lt = r, B = i, dt = s, pr(a), At = o, Bn = l;
  }
}
function Gu(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ql.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & Ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ge === null || !hr.call(Ge, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & ht) !== 0 && (s.f ^= ht, s.f &= ~Wn), Ps(s), Iu(s), qr(s, 0);
  }
}
function qr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Gu(e, n[r]);
}
function _r(e) {
  var t = e.f;
  if ((t & on) === 0) {
    ge(e, Ae);
    var n = J, r = ci;
    J = e, ci = !0;
    try {
      (t & (cn | Ja)) !== 0 ? Xu(e) : Vs(e), ko(e);
      var i = Vo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Io;
      var s;
      os && Au && (e.f & Ne) !== 0 && e.deps;
    } finally {
      ci = r, J = n;
    }
  }
}
function $(e) {
  var t = e.f, n = (t & Ce) !== 0;
  if (B !== null && !At) {
    var r = J !== null && (J.f & on) !== 0;
    if (!r && (dt === null || !hr.call(dt, e))) {
      var i = B.deps;
      if ((B.f & ls) !== 0)
        e.rv < Dn && (e.rv = Dn, Ge === null && i !== null && i[Qe] === e ? Qe++ : Ge === null ? Ge = [e] : Ge.push(e));
      else {
        (B.deps ?? (B.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [B] : hr.call(s, B) || s.push(B);
      }
    }
  }
  if ($n && xn.has(e))
    return xn.get(e);
  if (n) {
    var a = (
      /** @type {Derived} */
      e
    );
    if ($n) {
      var o = a.v;
      return ((a.f & Ae) === 0 && a.reactions !== null || Ho(a)) && (o = Ds(a)), xn.set(a, o), o;
    }
    var l = (a.f & ht) === 0 && !At && B !== null && (ci || (B.f & ht) !== 0), u = (a.f & wr) === 0;
    jr(a) && (l && (a.f |= ht), mo(a)), l && !u && (yo(a), zo(a));
  }
  if (Se != null && Se.has(e))
    return Se.get(e);
  if ((e.f & yn) !== 0)
    throw e.v;
  return e.v;
}
function zo(e) {
  if (e.f |= ht, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Ce) !== 0 && (t.f & ht) === 0 && (yo(
        /** @type {Derived} */
        t
      ), zo(
        /** @type {Derived} */
        t
      ));
}
function Ho(e) {
  if (e.v === Re) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (xn.has(t) || (t.f & Ce) !== 0 && Ho(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Bi(e) {
  var t = At;
  try {
    return At = !0, e();
  } finally {
    At = t;
  }
}
const Yo = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function Ku(e) {
  for (var t = 0; t < e.length; t++)
    Yo.add(e[t]);
  for (var n of ms)
    n(e);
}
let va = null;
function ga(e) {
  var y;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  va = e;
  var a = 0, o = va === e && e.__root;
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || e.target, s !== t) {
    bi(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = B, d = J;
    pt(null), Vt(null);
    try {
      for (var h, p = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + r];
          x != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && x.call(s, e);
        } catch (b) {
          h ? p.push(b) : h = b;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (h) {
        for (let b of p)
          queueMicrotask(() => {
            throw b;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, pt(f), Vt(d);
    }
  }
}
var Ba, Xa;
const ts = (Xa = (Ba = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ba.trustedTypes) == null ? void 0 : /* @__PURE__ */ Xa.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (e) => e
  }
);
function ju(e) {
  return (
    /** @type {string} */
    (ts == null ? void 0 : ts.createHTML(e)) ?? e
  );
}
function Bo(e, t = !1) {
  var n = Os("template");
  return e = e.replaceAll("<!>", "<!---->"), n.innerHTML = t ? ju(e) : e, n.content;
}
function bn(e, t) {
  var n = (
    /** @type {Effect} */
    J
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Bt(e, t) {
  var n = (t & Jl) !== 0, r = (t & Zl) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    if (j)
      return bn(X, null), X;
    i === void 0 && (i = Bo(s ? e : "<!>" + e, !0), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ un(i)));
    var a = (
      /** @type {TemplateNode} */
      r || $o ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ un(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      bn(o, l);
    } else
      bn(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Ju(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (j)
      return bn(X, null), X;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Bo(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ un(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ un(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return bn(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Zu(e, t) {
  return /* @__PURE__ */ Ju(e, t, "svg");
}
function _a(e = "") {
  if (!j) {
    var t = rt(e + "");
    return bn(t, t), t;
  }
  var n = X;
  return n.nodeType !== Kr ? (n.before(n = rt()), Ie(n)) : Yi(
    /** @type {Text} */
    n
  ), bn(n, n), n;
}
function We(e, t) {
  if (j) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      J
    );
    ((n.f & wr) === 0 || n.nodes.end === null) && (n.nodes.end = X), Li();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Qu = ["touchstart", "touchmove"];
function ef(e) {
  return Qu.includes(e);
}
function _n(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Xo(e, t) {
  return Wo(e, t);
}
function tf(e, t) {
  _s(), t.intro = t.intro ?? !1;
  const n = t.target, r = j, i = X;
  try {
    for (var s = /* @__PURE__ */ un(n); s && (s.nodeType !== xr || /** @type {Comment} */
    s.data !== Ns); )
      s = /* @__PURE__ */ Ht(s);
    if (!s)
      throw cr;
    an(!0), Ie(
      /** @type {Comment} */
      s
    );
    const a = Wo(e, { ...t, anchor: s });
    return an(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== cr && console.warn("Failed to hydrate: ", a), t.recover === !1 && gu(), _s(), To(n), an(!1), Xo(e, t);
  } finally {
    an(r), Ie(i);
  }
}
const ni = /* @__PURE__ */ new Map();
function Wo(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  _s();
  var o = /* @__PURE__ */ new Set(), l = (d) => {
    for (var h = 0; h < d.length; h++) {
      var p = d[h];
      if (!o.has(p)) {
        o.add(p);
        var _ = ef(p);
        for (const b of [t, document]) {
          var x = ni.get(b);
          x === void 0 && (x = /* @__PURE__ */ new Map(), ni.set(b, x));
          var y = x.get(p);
          y === void 0 ? (b.addEventListener(p, ga, { passive: _ }), x.set(p, 1)) : x.set(p, y + 1);
        }
      }
    }
  };
  l(Oi(Yo)), ms.add(l);
  var u = void 0, f = Yu(() => {
    var d = n ?? t.appendChild(rt());
    return Nu(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        qi({});
        var p = (
          /** @type {ComponentContext} */
          it
        );
        if (s && (p.c = s), i && (r.$$events = i), j && bn(
          /** @type {TemplateNode} */
          h,
          null
        ), u = e(h, r) || {}, j && (J.nodes.end = X, X === null || X.nodeType !== xr || /** @type {Comment} */
        X.data !== ks))
          throw Ii(), cr;
        Vi();
      }
    ), () => {
      var x;
      for (var h of o)
        for (const y of [t, document]) {
          var p = (
            /** @type {Map<string, number>} */
            ni.get(y)
          ), _ = (
            /** @type {number} */
            p.get(h)
          );
          --_ == 0 ? (y.removeEventListener(h, ga), p.delete(h), p.size === 0 && ni.delete(y)) : p.set(h, _);
        }
      ms.delete(l), d !== n && ((x = d.parentNode) == null || x.removeChild(d));
    };
  });
  return ys.set(u, f), u;
}
let ys = /* @__PURE__ */ new WeakMap();
function nf(e, t) {
  const n = ys.get(e);
  return n ? (ys.delete(e), n(t)) : Promise.resolve();
}
var xt, It, tt, zn, Ur, Gr, Pi;
class rf {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    z(this, xt, /* @__PURE__ */ new Map());
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
    z(this, It, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    z(this, tt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    z(this, zn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    z(this, Ur, !0);
    z(this, Gr, () => {
      var t = (
        /** @type {Batch} */
        K
      );
      if (v(this, xt).has(t)) {
        var n = (
          /** @type {Key} */
          v(this, xt).get(t)
        ), r = v(this, It).get(n);
        if (r)
          zs(r), v(this, zn).delete(n);
        else {
          var i = v(this, tt).get(n);
          i && (v(this, It).set(n, i.effect), v(this, tt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, xt)) {
          if (v(this, xt).delete(s), s === t)
            break;
          const o = v(this, tt).get(a);
          o && (Le(o.effect), v(this, tt).delete(a));
        }
        for (const [s, a] of v(this, It)) {
          if (s === n || v(this, zn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, xt).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Oo(a, u), u.append(rt()), v(this, tt).set(s, { effect: a, fragment: u });
            } else
              Le(a);
            v(this, zn).delete(s), v(this, It).delete(s);
          };
          v(this, Ur) || !r ? (v(this, zn).add(s), Yn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    z(this, Pi, (t) => {
      v(this, xt).delete(t);
      const n = Array.from(v(this, xt).values());
      for (const [r, i] of v(this, tt))
        n.includes(r) || (Le(i.effect), v(this, tt).delete(r));
    });
    this.anchor = t, q(this, Ur, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      K
    ), i = Ro();
    if (n && !v(this, It).has(t) && !v(this, tt).has(t))
      if (i) {
        var s = document.createDocumentFragment(), a = rt();
        s.append(a), v(this, tt).set(t, {
          effect: ct(() => n(a)),
          fragment: s
        });
      } else
        v(this, It).set(
          t,
          ct(() => n(this.anchor))
        );
    if (v(this, xt).set(r, t), i) {
      for (const [o, l] of v(this, It))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, tt))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Gr)), r.ondiscard(v(this, Pi));
    } else
      j && (this.anchor = X), v(this, Gr).call(this);
  }
}
xt = new WeakMap(), It = new WeakMap(), tt = new WeakMap(), zn = new WeakMap(), Ur = new WeakMap(), Gr = new WeakMap(), Pi = new WeakMap();
function sf(e) {
  it === null && uu(), Is(() => {
    const t = Bi(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function tr(e, t, n = !1) {
  j && Li();
  var r = new rf(e), i = n ? dr : 0;
  function s(a, o) {
    if (j) {
      const f = to(e);
      var l;
      if (f === Ns ? l = 0 : f === Di ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = $i();
        Ie(u), r.anchor = u, an(!1), r.ensure(a, o), an(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  qs(() => {
    var a = !1;
    t((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function hi(e, t) {
  return t;
}
function af(e, t, n) {
  for (var r = [], i = t.length, s, a = t.length, o = 0; o < i; o++) {
    let d = t[o];
    Yn(
      d,
      () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ws(Oi(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
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
      To(f), f.append(u), e.items.clear();
    }
    ws(t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ws(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Le(e[n], t);
}
var ma;
function di(e, t, n, r, i, s = null) {
  var a = e, o = /* @__PURE__ */ new Map(), l = (t & Wa) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = j ? Ie(/* @__PURE__ */ un(u)) : u.appendChild(rt());
  }
  j && Li();
  var f = null, d = /* @__PURE__ */ _o(() => {
    var b = n();
    return Ga(b) ? b : b == null ? [] : Oi(b);
  }), h, p = !0;
  function _() {
    y.fallback = f, of(y, h, a, t, r), f !== null && (h.length === 0 ? (f.f & sn) === 0 ? zs(f) : (f.f ^= sn, kr(f, null, a)) : Yn(f, () => {
      f = null;
    }));
  }
  var x = qs(() => {
    h = /** @type {V[]} */
    $(d);
    var b = h.length;
    let O = !1;
    if (j) {
      var N = to(a) === Di;
      N !== (b === 0) && (a = $i(), Ie(a), an(!1), O = !0);
    }
    for (var M = /* @__PURE__ */ new Set(), F = (
      /** @type {Batch} */
      K
    ), W = Ro(), I = 0; I < b; I += 1) {
      j && X.nodeType === xr && /** @type {Comment} */
      X.data === ks && (a = /** @type {Comment} */
      X, O = !0, an(!1));
      var ee = h[I], fe = r(ee, I), U = p ? null : o.get(fe);
      U ? (U.v && gr(U.v, ee), U.i && gr(U.i, I), W && F.unskip_effect(U.e)) : (U = lf(
        o,
        p ? a : ma ?? (ma = rt()),
        ee,
        fe,
        I,
        i,
        t,
        n
      ), p || (U.e.f |= sn), o.set(fe, U)), M.add(fe);
    }
    if (b === 0 && s && !f && (p ? f = ct(() => s(a)) : (f = ct(() => s(ma ?? (ma = rt()))), f.f |= sn)), b > M.size && cu(), j && b > 0 && Ie($i()), !p)
      if (W) {
        for (const [re, le] of o)
          M.has(re) || F.skip_effect(le.e);
        F.oncommit(_), F.ondiscard(() => {
        });
      } else
        _();
    O && an(!0), $(d);
  }), y = { effect: x, items: o, outrogroups: null, fallback: f };
  p = !1, j && (a = X);
}
function Cr(e) {
  for (; e !== null && (e.f & Tt) === 0; )
    e = e.next;
  return e;
}
function of(e, t, n, r, i) {
  var U, re, le, D, H, te, je, qe, de;
  var s = (r & Xl) !== 0, a = t.length, o = e.items, l = Cr(e.effect.first), u, f = null, d, h = [], p = [], _, x, y, b;
  if (s)
    for (b = 0; b < a; b += 1)
      _ = t[b], x = i(_, b), y = /** @type {EachItem} */
      o.get(x).e, (y.f & sn) === 0 && ((re = (U = y.nodes) == null ? void 0 : U.a) == null || re.measure(), (d ?? (d = /* @__PURE__ */ new Set())).add(y));
  for (b = 0; b < a; b += 1) {
    if (_ = t[b], x = i(_, b), y = /** @type {EachItem} */
    o.get(x).e, e.outrogroups !== null)
      for (const ce of e.outrogroups)
        ce.pending.delete(y), ce.done.delete(y);
    if ((y.f & sn) !== 0)
      if (y.f ^= sn, y === l)
        kr(y, null, n);
      else {
        var O = f ? f.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), vn(e, f, y), vn(e, y, O), kr(y, O, n), f = y, h = [], p = [], l = Cr(f.next);
        continue;
      }
    if ((y.f & nt) !== 0 && (zs(y), s && ((D = (le = y.nodes) == null ? void 0 : le.a) == null || D.unfix(), (d ?? (d = /* @__PURE__ */ new Set())).delete(y))), y !== l) {
      if (u !== void 0 && u.has(y)) {
        if (h.length < p.length) {
          var N = p[0], M;
          f = N.prev;
          var F = h[0], W = h[h.length - 1];
          for (M = 0; M < h.length; M += 1)
            kr(h[M], N, n);
          for (M = 0; M < p.length; M += 1)
            u.delete(p[M]);
          vn(e, F.prev, W.next), vn(e, f, F), vn(e, W, N), l = N, f = W, b -= 1, h = [], p = [];
        } else
          u.delete(y), kr(y, l, n), vn(e, y.prev, y.next), vn(e, y, f === null ? e.effect.first : f.next), vn(e, f, y), f = y;
        continue;
      }
      for (h = [], p = []; l !== null && l !== y; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), p.push(l), l = Cr(l.next);
      if (l === null)
        continue;
    }
    (y.f & sn) === 0 && h.push(y), f = y, l = Cr(y.next);
  }
  if (e.outrogroups !== null) {
    for (const ce of e.outrogroups)
      ce.pending.size === 0 && (ws(Oi(ce.done)), (H = e.outrogroups) == null || H.delete(ce));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var I = [];
    if (u !== void 0)
      for (y of u)
        (y.f & nt) === 0 && I.push(y);
    for (; l !== null; )
      (l.f & nt) === 0 && l !== e.fallback && I.push(l), l = Cr(l.next);
    var ee = I.length;
    if (ee > 0) {
      var fe = (r & Wa) !== 0 && a === 0 ? n : null;
      if (s) {
        for (b = 0; b < ee; b += 1)
          (je = (te = I[b].nodes) == null ? void 0 : te.a) == null || je.measure();
        for (b = 0; b < ee; b += 1)
          (de = (qe = I[b].nodes) == null ? void 0 : qe.a) == null || de.fix();
      }
      af(e, I, fe);
    }
  }
  s && wn(() => {
    var ce, _e;
    if (d !== void 0)
      for (y of d)
        (_e = (ce = y.nodes) == null ? void 0 : ce.a) == null || _e.apply();
  });
}
function lf(e, t, n, r, i, s, a, o) {
  var l = (a & Yl) !== 0 ? (a & Wl) === 0 ? /* @__PURE__ */ xo(n, !1, !1) : Un(n) : null, u = (a & Bl) !== 0 ? Un(i) : null;
  return {
    v: l,
    i: u,
    e: ct(() => (s(t, l ?? n, u ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function kr(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & sn) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ht(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function vn(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Hs(e, t) {
  No(() => {
    var n = e.getRootNode(), r = (
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
    if (!r.querySelector("#" + t.hash)) {
      const i = Os("style");
      i.id = t.hash, i.textContent = t.code, r.appendChild(i);
    }
  });
}
const ya = [...` 	
\r\f \v\uFEFF`];
function uf(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, a = 0; (a = r.indexOf(i, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || ya.includes(r[a - 1])) && (o === r.length || ya.includes(r[o])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(o + 1) : a = o;
        }
  }
  return r === "" ? null : r;
}
function wa(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var s = e[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function ff(e, t) {
  if (t) {
    var n = "", r, i;
    return Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, r && (n += wa(r)), i && (n += wa(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(e);
}
function ri(e, t, n, r, i, s) {
  var a = e.__className;
  if (j || a !== n || a === void 0) {
    var o = uf(n, r, s);
    (!j || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return s;
}
function ns(e, t = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    t[i] !== s && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, s, r));
  }
}
function xa(e, t, n, r) {
  var i = e.__style;
  if (j || i !== t) {
    var s = ff(t, r);
    (!j || s !== e.getAttribute("style")) && (s == null ? e.removeAttribute("style") : e.style.cssText = s), e.__style = t;
  } else r && (Array.isArray(r) ? (ns(e, n == null ? void 0 : n[0], r[0]), ns(e, n == null ? void 0 : n[1], r[1], "important")) : ns(e, n, r));
  return r;
}
const cf = Symbol("is custom element"), hf = Symbol("is html"), df = lu ? "link" : "LINK";
function ba(e, t, n, r) {
  var i = pf(e);
  j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === df) || i[t] !== (i[t] = n) && (t === "loading" && (e[ou] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && vf(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function pf(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [cf]: e.nodeName.includes("-"),
      [hf]: e.namespaceURI === Ua
    })
  );
}
var $a = /* @__PURE__ */ new Map();
function vf(e) {
  var t = e.getAttribute("is") || e.nodeName, n = $a.get(t);
  if (n) return n;
  $a.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = eu(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Ka(i);
  }
  return n;
}
function Aa(e, t) {
  return e === t || (e == null ? void 0 : e[Or]) === t;
}
function pi(e = {}, t, n, r) {
  return No(() => {
    var i, s;
    return Ls(() => {
      i = s, s = [], Bi(() => {
        e !== n(...s) && (t(e, ...s), i && Aa(n(...i), e) && t(null, ...i));
      });
    }), () => {
      wn(() => {
        s && Aa(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let ii = !1;
function gf(e) {
  var t = ii;
  try {
    return ii = !1, [e(), ii];
  } finally {
    ii = t;
  }
}
function ie(e, t, n, r) {
  var O;
  var i = (n & Kl) !== 0, s = (n & jl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Bi(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Or in e || eo in e;
    u = ((O = Hn(e, t)) == null ? void 0 : O.set) ?? (f && t in e ? (N) => e[t] = N : void 0);
  }
  var d, h = !1;
  i ? [d, h] = gf(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t], d === void 0 && r !== void 0 && (d = l(), u && (_u(), u(d)));
  var p;
  if (p = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? l() : (o = !0, N);
  }, (n & Gl) === 0)
    return p;
  if (u) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(N, M) {
        return arguments.length > 0 ? ((!M || _ || h) && u(M ? p() : N), N) : p();
      })
    );
  }
  var x = !1, y = ((n & Ul) !== 0 ? Hi : _o)(() => (x = !1, p()));
  i && $(y);
  var b = (
    /** @type {Effect} */
    J
  );
  return (
    /** @type {() => V} */
    (function(N, M) {
      if (arguments.length > 0) {
        const F = M ? $(y) : i ? Pn(N) : N;
        return ve(y, F), x = !0, a !== void 0 && (a = F), N;
      }
      return $n && x || (b.f & on) !== 0 ? y.v : $(y);
    })
  );
}
function _f(e) {
  return new mf(e);
}
var rn, ft;
class mf {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    z(this, rn);
    /** @type {Record<string, any>} */
    z(this, ft);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ xo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return $(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === eo ? !0 : ($(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return ve(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    q(this, ft, (t.hydrate ? tf : Xo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && ne(), q(this, rn, i.$$events);
    for (const a of Object.keys(v(this, ft)))
      a === "$set" || a === "$destroy" || a === "$on" || bi(this, a, {
        get() {
          return v(this, ft)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, ft)[a] = o;
        },
        enumerable: !0
      });
    v(this, ft).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, ft).$destroy = () => {
      nf(v(this, ft));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    v(this, ft).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    v(this, rn)[t] = v(this, rn)[t] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, rn)[t].push(r), () => {
      v(this, rn)[t] = v(this, rn)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, ft).$destroy();
  }
}
rn = new WeakMap(), ft = new WeakMap();
let Uo;
typeof HTMLElement == "function" && (Uo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    pe(this, "$$ctor");
    /** Slots */
    pe(this, "$$s");
    /** @type {any} The Svelte component instance */
    pe(this, "$$c");
    /** Whether or not the custom element is connected */
    pe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    pe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    pe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    pe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    pe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    pe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    pe(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    pe(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = n, r && (this.$$shadowRoot = this.attachShadow(r));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return (a) => {
          const o = Os("slot");
          s !== "default" && (o.name = s), We(a, o);
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = yf(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = vi(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = _f({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Hu(() => {
        Ls(() => {
          var s;
          this.$$r = !0;
          for (const a of xi(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = vi(
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
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = vi(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return xi(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function vi(e, t, n, r) {
  var s;
  const i = (s = n[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function yf(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Ys(e, t, n, r, i, s) {
  let a = class extends Uo {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return xi(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return xi(t).forEach((o) => {
    bi(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var d;
        l = vi(o, l, t), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (d = Hn(u, o)) == null ? void 0 : d.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    bi(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var wf = { value: () => {
} };
function Go() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new gi(n);
}
function gi(e) {
  this._ = e;
}
function xf(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
gi.prototype = Go.prototype = {
  constructor: gi,
  on: function(e, t) {
    var n = this._, r = xf(e + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (e = r[s]).type) && (i = bf(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < a; )
      if (i = (e = r[s]).type) n[i] = Ea(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = Ea(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new gi(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (s = this._[e], r = 0, i = s.length; r < i; ++r) s[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, s = r.length; i < s; ++i) r[i].value.apply(t, n);
  }
};
function bf(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function Ea(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = wf, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var xs = "http://www.w3.org/1999/xhtml";
const Ta = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Xi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ta.hasOwnProperty(t) ? { space: Ta[t], local: e } : e;
}
function $f(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === xs && t.documentElement.namespaceURI === xs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Af(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ko(e) {
  var t = Xi(e);
  return (t.local ? Af : $f)(t);
}
function Ef() {
}
function Bs(e) {
  return e == null ? Ef : function() {
    return this.querySelector(e);
  };
}
function Tf(e) {
  typeof e != "function" && (e = Bs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = e.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new st(r, this._parents);
}
function Rf(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Sf() {
  return [];
}
function jo(e) {
  return e == null ? Sf : function() {
    return this.querySelectorAll(e);
  };
}
function Cf(e) {
  return function() {
    return Rf(e.apply(this, arguments));
  };
}
function Nf(e) {
  typeof e == "function" ? e = Cf(e) : e = jo(e);
  for (var t = this._groups, n = t.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = t[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), i.push(l));
  return new st(r, i);
}
function Jo(e) {
  return function() {
    return this.matches(e);
  };
}
function Zo(e) {
  return function(t) {
    return t.matches(e);
  };
}
var kf = Array.prototype.find;
function Mf(e) {
  return function() {
    return kf.call(this.children, e);
  };
}
function Pf() {
  return this.firstElementChild;
}
function Df(e) {
  return this.select(e == null ? Pf : Mf(typeof e == "function" ? e : Zo(e)));
}
var Of = Array.prototype.filter;
function Ff() {
  return Array.from(this.children);
}
function If(e) {
  return function() {
    return Of.call(this.children, e);
  };
}
function Lf(e) {
  return this.selectAll(e == null ? Ff : If(typeof e == "function" ? e : Zo(e)));
}
function qf(e) {
  typeof e != "function" && (e = Jo(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new st(r, this._parents);
}
function Qo(e) {
  return new Array(e.length);
}
function Vf() {
  return new st(this._enter || this._groups.map(Qo), this._parents);
}
function Ai(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ai.prototype = {
  constructor: Ai,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function zf(e) {
  return function() {
    return e;
  };
}
function Hf(e, t, n, r, i, s) {
  for (var a = 0, o, l = t.length, u = s.length; a < u; ++a)
    (o = t[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Ai(e, s[a]);
  for (; a < l; ++a)
    (o = t[a]) && (i[a] = o);
}
function Yf(e, t, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = t.length, d = s.length, h = new Array(f), p;
  for (o = 0; o < f; ++o)
    (l = t[o]) && (h[o] = p = a.call(l, l.__data__, o, t) + "", u.has(p) ? i[o] = l : u.set(p, l));
  for (o = 0; o < d; ++o)
    p = a.call(e, s[o], o, s) + "", (l = u.get(p)) ? (r[o] = l, l.__data__ = s[o], u.delete(p)) : n[o] = new Ai(e, s[o]);
  for (o = 0; o < f; ++o)
    (l = t[o]) && u.get(h[o]) === l && (i[o] = l);
}
function Bf(e) {
  return e.__data__;
}
function Xf(e, t) {
  if (!arguments.length) return Array.from(this, Bf);
  var n = t ? Yf : Hf, r = this._parents, i = this._groups;
  typeof e != "function" && (e = zf(e));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], d = i[u], h = d.length, p = Wf(e.call(f, f && f.__data__, u, r)), _ = p.length, x = o[u] = new Array(_), y = a[u] = new Array(_), b = l[u] = new Array(h);
    n(f, d, x, y, b, p, t);
    for (var O = 0, N = 0, M, F; O < _; ++O)
      if (M = x[O]) {
        for (O >= N && (N = O + 1); !(F = y[N]) && ++N < _; ) ;
        M._next = F || null;
      }
  }
  return a = new st(a, r), a._enter = o, a._exit = l, a;
}
function Wf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Uf() {
  return new st(this._exit || this._groups.map(Qo), this._parents);
}
function Gf(e, t, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Kf(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], d = u.length, h = o[l] = new Array(d), p, _ = 0; _ < d; ++_)
      (p = u[_] || f[_]) && (h[_] = p);
  for (; l < i; ++l)
    o[l] = n[l];
  return new st(o, this._parents);
}
function jf() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function Jf(e) {
  e || (e = Zf);
  function t(d, h) {
    return d && h ? e(d.__data__, h.__data__) : !d - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(t);
  }
  return new st(i, this._parents).order();
}
function Zf(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Qf() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ec() {
  return Array.from(this);
}
function tc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function nc() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function rc() {
  return !this.node();
}
function ic(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && e.call(o, o.__data__, s, i);
  return this;
}
function sc(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ac(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function oc(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function lc(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function uc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function fc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function cc(e, t) {
  var n = Xi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? ac : sc : typeof t == "function" ? n.local ? fc : uc : n.local ? lc : oc)(n, t));
}
function el(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function hc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function dc(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function pc(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function vc(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? hc : typeof t == "function" ? pc : dc)(e, t, n ?? "")) : mr(this.node(), e);
}
function mr(e, t) {
  return e.style.getPropertyValue(t) || el(e).getComputedStyle(e, null).getPropertyValue(t);
}
function gc(e) {
  return function() {
    delete this[e];
  };
}
function _c(e, t) {
  return function() {
    this[e] = t;
  };
}
function mc(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function yc(e, t) {
  return arguments.length > 1 ? this.each((t == null ? gc : typeof t == "function" ? mc : _c)(e, t)) : this.node()[e];
}
function tl(e) {
  return e.trim().split(/^|\s+/);
}
function Xs(e) {
  return e.classList || new nl(e);
}
function nl(e) {
  this._node = e, this._names = tl(e.getAttribute("class") || "");
}
nl.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function rl(e, t) {
  for (var n = Xs(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function il(e, t) {
  for (var n = Xs(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function wc(e) {
  return function() {
    rl(this, e);
  };
}
function xc(e) {
  return function() {
    il(this, e);
  };
}
function bc(e, t) {
  return function() {
    (t.apply(this, arguments) ? rl : il)(this, e);
  };
}
function $c(e, t) {
  var n = tl(e + "");
  if (arguments.length < 2) {
    for (var r = Xs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? bc : t ? wc : xc)(n, t));
}
function Ac() {
  this.textContent = "";
}
function Ec(e) {
  return function() {
    this.textContent = e;
  };
}
function Tc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Rc(e) {
  return arguments.length ? this.each(e == null ? Ac : (typeof e == "function" ? Tc : Ec)(e)) : this.node().textContent;
}
function Sc() {
  this.innerHTML = "";
}
function Cc(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Nc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function kc(e) {
  return arguments.length ? this.each(e == null ? Sc : (typeof e == "function" ? Nc : Cc)(e)) : this.node().innerHTML;
}
function Mc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Pc() {
  return this.each(Mc);
}
function Dc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Oc() {
  return this.each(Dc);
}
function Fc(e) {
  var t = typeof e == "function" ? e : Ko(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ic() {
  return null;
}
function Lc(e, t) {
  var n = typeof e == "function" ? e : Ko(e), r = t == null ? Ic : typeof t == "function" ? t : Bs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function qc() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Vc() {
  return this.each(qc);
}
function zc() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Hc() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Yc(e) {
  return this.select(e ? Hc : zc);
}
function Bc(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Xc(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Wc(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Uc(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, s; n < i; ++n)
        s = t[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++r] = s;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Gc(e, t, n) {
  return function() {
    var r = this.__on, i, s = Xc(t);
    if (r) {
      for (var a = 0, o = r.length; a < o; ++a)
        if ((i = r[a]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, s, n), i = { type: e.type, name: e.name, value: t, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Kc(e, t, n) {
  var r = Wc(e + ""), i, s = r.length, a;
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
  for (o = t ? Gc : Uc, i = 0; i < s; ++i) this.each(o(r[i], t, n));
  return this;
}
function sl(e, t, n) {
  var r = el(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function jc(e, t) {
  return function() {
    return sl(this, e, t);
  };
}
function Jc(e, t) {
  return function() {
    return sl(this, e, t.apply(this, arguments));
  };
}
function Zc(e, t) {
  return this.each((typeof t == "function" ? Jc : jc)(e, t));
}
function* Qc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var al = [null];
function st(e, t) {
  this._groups = e, this._parents = t;
}
function br() {
  return new st([[document.documentElement]], al);
}
function eh() {
  return this;
}
st.prototype = br.prototype = {
  constructor: st,
  select: Tf,
  selectAll: Nf,
  selectChild: Df,
  selectChildren: Lf,
  filter: qf,
  data: Xf,
  enter: Vf,
  exit: Uf,
  join: Gf,
  merge: Kf,
  selection: eh,
  order: jf,
  sort: Jf,
  call: Qf,
  nodes: ec,
  node: tc,
  size: nc,
  empty: rc,
  each: ic,
  attr: cc,
  style: vc,
  property: yc,
  classed: $c,
  text: Rc,
  html: kc,
  raise: Pc,
  lower: Oc,
  append: Fc,
  insert: Lc,
  remove: Vc,
  clone: Yc,
  datum: Bc,
  on: Kc,
  dispatch: Zc,
  [Symbol.iterator]: Qc
};
function he(e) {
  return typeof e == "string" ? new st([[document.querySelector(e)]], [document.documentElement]) : new st([[e]], al);
}
function Ws(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ol(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Jr() {
}
var Vr = 0.7, Ei = 1 / Vr, rr = "\\s*([+-]?\\d+)\\s*", zr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", th = /^#([0-9a-f]{3,8})$/, nh = new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`), rh = new RegExp(`^rgb\\(${qt},${qt},${qt}\\)$`), ih = new RegExp(`^rgba\\(${rr},${rr},${rr},${zr}\\)$`), sh = new RegExp(`^rgba\\(${qt},${qt},${qt},${zr}\\)$`), ah = new RegExp(`^hsl\\(${zr},${qt},${qt}\\)$`), oh = new RegExp(`^hsla\\(${zr},${qt},${qt},${zr}\\)$`), Ra = {
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
Ws(Jr, Gn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Sa,
  // Deprecated! Use color.formatHex.
  formatHex: Sa,
  formatHex8: lh,
  formatHsl: uh,
  formatRgb: Ca,
  toString: Ca
});
function Sa() {
  return this.rgb().formatHex();
}
function lh() {
  return this.rgb().formatHex8();
}
function uh() {
  return ll(this).formatHsl();
}
function Ca() {
  return this.rgb().formatRgb();
}
function Gn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = th.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Na(t) : n === 3 ? new Ke(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? si(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? si(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = nh.exec(e)) ? new Ke(t[1], t[2], t[3], 1) : (t = rh.exec(e)) ? new Ke(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ih.exec(e)) ? si(t[1], t[2], t[3], t[4]) : (t = sh.exec(e)) ? si(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ah.exec(e)) ? Pa(t[1], t[2] / 100, t[3] / 100, 1) : (t = oh.exec(e)) ? Pa(t[1], t[2] / 100, t[3] / 100, t[4]) : Ra.hasOwnProperty(e) ? Na(Ra[e]) : e === "transparent" ? new Ke(NaN, NaN, NaN, 0) : null;
}
function Na(e) {
  return new Ke(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function si(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ke(e, t, n, r);
}
function fh(e) {
  return e instanceof Jr || (e = Gn(e)), e ? (e = e.rgb(), new Ke(e.r, e.g, e.b, e.opacity)) : new Ke();
}
function bs(e, t, n, r) {
  return arguments.length === 1 ? fh(e) : new Ke(e, t, n, r ?? 1);
}
function Ke(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ws(Ke, bs, ol(Jr, {
  brighter(e) {
    return e = e == null ? Ei : Math.pow(Ei, e), new Ke(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vr : Math.pow(Vr, e), new Ke(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ke(Xn(this.r), Xn(this.g), Xn(this.b), Ti(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ka,
  // Deprecated! Use color.formatHex.
  formatHex: ka,
  formatHex8: ch,
  formatRgb: Ma,
  toString: Ma
}));
function ka() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function ch() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ma() {
  const e = Ti(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xn(this.r)}, ${Xn(this.g)}, ${Xn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ti(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function On(e) {
  return e = Xn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Pa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new bt(e, t, n, r);
}
function ll(e) {
  if (e instanceof bt) return new bt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Jr || (e = Gn(e)), !e) return new bt();
  if (e instanceof bt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (t === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - t) / o + 2 : a = (t - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new bt(a, o, l, e.opacity);
}
function hh(e, t, n, r) {
  return arguments.length === 1 ? ll(e) : new bt(e, t, n, r ?? 1);
}
function bt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ws(bt, hh, ol(Jr, {
  brighter(e) {
    return e = e == null ? Ei : Math.pow(Ei, e), new bt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vr : Math.pow(Vr, e), new bt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Ke(
      rs(e >= 240 ? e - 240 : e + 120, i, r),
      rs(e, i, r),
      rs(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new bt(Da(this.h), ai(this.s), ai(this.l), Ti(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ti(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Da(this.h)}, ${ai(this.s) * 100}%, ${ai(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Da(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ai(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function rs(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Us = (e) => () => e;
function dh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ph(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function vh(e) {
  return (e = +e) == 1 ? ul : function(t, n) {
    return n - t ? ph(t, n, e) : Us(isNaN(t) ? n : t);
  };
}
function ul(e, t) {
  var n = t - e;
  return n ? dh(e, n) : Us(isNaN(e) ? t : e);
}
const Ri = (function e(t) {
  var n = vh(t);
  function r(i, s) {
    var a = n((i = bs(i)).r, (s = bs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = ul(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = e, r;
})(1);
function gh(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - s) + t[i] * s;
    return r;
  };
}
function _h(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function mh(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Jt(e[a], t[a]);
  for (; a < n; ++a) s[a] = t[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function yh(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Lt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function wh(e, t) {
  var n = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Jt(e[i], t[i]) : r[i] = t[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var $s = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, is = new RegExp($s.source, "g");
function xh(e) {
  return function() {
    return e;
  };
}
function bh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function fl(e, t) {
  var n = $s.lastIndex = is.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (e = e + "", t = t + ""; (r = $s.exec(e)) && (i = is.exec(t)); )
    (s = i.index) > n && (s = t.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Lt(r, i) })), n = is.lastIndex;
  return n < t.length && (s = t.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? bh(l[0].x) : xh(t) : (t = l.length, function(u) {
    for (var f = 0, d; f < t; ++f) o[(d = l[f]).i] = d.x(u);
    return o.join("");
  });
}
function Jt(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Us(t) : (n === "number" ? Lt : n === "string" ? (r = Gn(t)) ? (t = r, Ri) : fl : t instanceof Gn ? Ri : t instanceof Date ? yh : _h(t) ? gh : Array.isArray(t) ? mh : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? wh : Lt)(e, t);
}
var Oa = 180 / Math.PI, As = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function cl(e, t, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(t, e) * Oa,
    skewX: Math.atan(l) * Oa,
    scaleX: a,
    scaleY: o
  };
}
var oi;
function $h(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? As : cl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ah(e) {
  return e == null || (oi || (oi = document.createElementNS("http://www.w3.org/2000/svg", "g")), oi.setAttribute("transform", e), !(e = oi.transform.baseVal.consolidate())) ? As : (e = e.matrix, cl(e.a, e.b, e.c, e.d, e.e, e.f));
}
function hl(e, t, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, d, h, p, _) {
    if (u !== d || f !== h) {
      var x = p.push("translate(", null, t, null, n);
      _.push({ i: x - 4, x: Lt(u, d) }, { i: x - 2, x: Lt(f, h) });
    } else (d || h) && p.push("translate(" + d + t + h + n);
  }
  function a(u, f, d, h) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), h.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: Lt(u, f) })) : f && d.push(i(d) + "rotate(" + f + r);
  }
  function o(u, f, d, h) {
    u !== f ? h.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: Lt(u, f) }) : f && d.push(i(d) + "skewX(" + f + r);
  }
  function l(u, f, d, h, p, _) {
    if (u !== d || f !== h) {
      var x = p.push(i(p) + "scale(", null, ",", null, ")");
      _.push({ i: x - 4, x: Lt(u, d) }, { i: x - 2, x: Lt(f, h) });
    } else (d !== 1 || h !== 1) && p.push(i(p) + "scale(" + d + "," + h + ")");
  }
  return function(u, f) {
    var d = [], h = [];
    return u = e(u), f = e(f), s(u.translateX, u.translateY, f.translateX, f.translateY, d, h), a(u.rotate, f.rotate, d, h), o(u.skewX, f.skewX, d, h), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, d, h), u = f = null, function(p) {
      for (var _ = -1, x = h.length, y; ++_ < x; ) d[(y = h[_]).i] = y.x(p);
      return d.join("");
    };
  };
}
var Eh = hl($h, "px, ", "px)", "deg)"), Th = hl(Ah, ", ", ")", ")"), yr = 0, Mr = 0, Nr = 0, dl = 1e3, Si, Pr, Ci = 0, Kn = 0, Wi = 0, Hr = typeof performance == "object" && performance.now ? performance : Date, pl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Gs() {
  return Kn || (pl(Rh), Kn = Hr.now() + Wi);
}
function Rh() {
  Kn = 0;
}
function Ni() {
  this._call = this._time = this._next = null;
}
Ni.prototype = vl.prototype = {
  constructor: Ni,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Gs() : +n) + (t == null ? 0 : +t), !this._next && Pr !== this && (Pr ? Pr._next = this : Si = this, Pr = this), this._call = e, this._time = n, Es();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Es());
  }
};
function vl(e, t, n) {
  var r = new Ni();
  return r.restart(e, t, n), r;
}
function Sh() {
  Gs(), ++yr;
  for (var e = Si, t; e; )
    (t = Kn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --yr;
}
function Fa() {
  Kn = (Ci = Hr.now()) + Wi, yr = Mr = 0;
  try {
    Sh();
  } finally {
    yr = 0, Nh(), Kn = 0;
  }
}
function Ch() {
  var e = Hr.now(), t = e - Ci;
  t > dl && (Wi -= t, Ci = e);
}
function Nh() {
  for (var e, t = Si, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Si = n);
  Pr = e, Es(r);
}
function Es(e) {
  if (!yr) {
    Mr && (Mr = clearTimeout(Mr));
    var t = e - Kn;
    t > 24 ? (e < 1 / 0 && (Mr = setTimeout(Fa, e - Hr.now() - Wi)), Nr && (Nr = clearInterval(Nr))) : (Nr || (Ci = Hr.now(), Nr = setInterval(Ch, dl)), yr = 1, pl(Fa));
  }
}
function Ia(e, t, n) {
  var r = new Ni();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var kh = Go("start", "end", "cancel", "interrupt"), Mh = [], gl = 0, La = 1, Ts = 2, _i = 3, qa = 4, Rs = 5, mi = 6;
function Ui(e, t, n, r, i, s) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Ph(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: kh,
    tween: Mh,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: gl
  });
}
function Ks(e, t) {
  var n = Rt(e, t);
  if (n.state > gl) throw new Error("too late; already scheduled");
  return n;
}
function Xt(e, t) {
  var n = Rt(e, t);
  if (n.state > _i) throw new Error("too late; already running");
  return n;
}
function Rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Ph(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = vl(s, 0, n.time);
  function s(u) {
    n.state = La, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, d, h, p;
    if (n.state !== La) return l();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === _i) return Ia(a);
        p.state === qa ? (p.state = mi, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[f]) : +f < t && (p.state = mi, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[f]);
      }
    if (Ia(function() {
      n.state === _i && (n.state = qa, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Ts, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ts) {
      for (n.state = _i, i = new Array(h = n.tween.length), f = 0, d = -1; f < h; ++f)
        (p = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (i[++d] = p);
      i.length = d + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Rs, 1), d = -1, h = i.length; ++d < h; )
      i[d].call(e, f);
    n.state === Rs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = mi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Dh(e, t) {
  var n = e.__transition, r, i, s = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        s = !1;
        continue;
      }
      i = r.state > Ts && r.state < Rs, r.state = mi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    s && delete e.__transition;
  }
}
function Oh(e) {
  return this.each(function() {
    Dh(this, e);
  });
}
function Fh(e, t) {
  var n, r;
  return function() {
    var i = Xt(this, e), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var a = 0, o = r.length; a < o; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ih(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Xt(this, e), a = s.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var o = { name: t, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === t) {
          i[l] = o;
          break;
        }
      l === u && i.push(o);
    }
    s.tween = i;
  };
}
function Lh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Rt(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Fh : Ih)(n, e, t));
}
function js(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = Xt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Rt(i, r).value[t];
  };
}
function _l(e, t) {
  var n;
  return (typeof t == "number" ? Lt : t instanceof Gn ? Ri : (n = Gn(t)) ? (t = n, Ri) : fl)(e, t);
}
function qh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Vh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function zh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function Hh(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function Yh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Bh(e, t, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o)));
  };
}
function Xh(e, t) {
  var n = Xi(e), r = n === "transform" ? Th : _l;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Bh : Yh)(n, r, js(this, "attr." + e, t)) : t == null ? (n.local ? Vh : qh)(n) : (n.local ? Hh : zh)(n, r, t));
}
function Wh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Uh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Gh(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && Uh(e, s)), n;
  }
  return i._value = t, i;
}
function Kh(e, t) {
  var n, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (n = (r = s) && Wh(e, s)), n;
  }
  return i._value = t, i;
}
function jh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Xi(e);
  return this.tween(n, (r.local ? Gh : Kh)(r, t));
}
function Jh(e, t) {
  return function() {
    Ks(this, e).delay = +t.apply(this, arguments);
  };
}
function Zh(e, t) {
  return t = +t, function() {
    Ks(this, e).delay = t;
  };
}
function Qh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Jh : Zh)(t, e)) : Rt(this.node(), t).delay;
}
function ed(e, t) {
  return function() {
    Xt(this, e).duration = +t.apply(this, arguments);
  };
}
function td(e, t) {
  return t = +t, function() {
    Xt(this, e).duration = t;
  };
}
function nd(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ed : td)(t, e)) : Rt(this.node(), t).duration;
}
function rd(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Xt(this, e).ease = t;
  };
}
function id(e) {
  var t = this._id;
  return arguments.length ? this.each(rd(t, e)) : Rt(this.node(), t).ease;
}
function sd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Xt(this, e).ease = n;
  };
}
function ad(e) {
  if (typeof e != "function") throw new Error();
  return this.each(sd(this._id, e));
}
function od(e) {
  typeof e != "function" && (e = Jo(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && e.call(l, l.__data__, u, s) && o.push(l);
  return new fn(r, this._parents, this._name, this._id);
}
function ld(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = t[o], u = n[o], f = l.length, d = a[o] = new Array(f), h, p = 0; p < f; ++p)
      (h = l[p] || u[p]) && (d[p] = h);
  for (; o < r; ++o)
    a[o] = t[o];
  return new fn(a, this._parents, this._name, this._id);
}
function ud(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function fd(e, t, n) {
  var r, i, s = ud(t) ? Ks : Xt;
  return function() {
    var a = s(this, e), o = a.on;
    o !== r && (i = (r = o).copy()).on(t, n), a.on = i;
  };
}
function cd(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Rt(this.node(), n).on.on(e) : this.each(fd(n, e, t));
}
function hd(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function dd() {
  return this.on("end.remove", hd(this._id));
}
function pd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Bs(e));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = o[h]) && (d = e.call(f, f.__data__, h, o)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d, Ui(u[h], t, n, h, u, Rt(f, n)));
  return new fn(s, this._parents, t, n);
}
function vd(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = jo(e));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        for (var h = e.call(f, f.__data__, d, l), p, _ = Rt(f, n), x = 0, y = h.length; x < y; ++x)
          (p = h[x]) && Ui(p, t, n, x, h, _);
        s.push(h), a.push(f);
      }
  return new fn(s, a, t, n);
}
var gd = br.prototype.constructor;
function _d() {
  return new gd(this._groups, this._parents);
}
function md(e, t) {
  var n, r, i;
  return function() {
    var s = mr(this, e), a = (this.style.removeProperty(e), mr(this, e));
    return s === a ? null : s === n && a === r ? i : i = t(n = s, r = a);
  };
}
function ml(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function yd(e, t, n) {
  var r, i = n + "", s;
  return function() {
    var a = mr(this, e);
    return a === i ? null : a === r ? s : s = t(r = a, n);
  };
}
function wd(e, t, n) {
  var r, i, s;
  return function() {
    var a = mr(this, e), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), mr(this, e))), a === l ? null : a === r && l === i ? s : (i = l, s = t(r = a, o));
  };
}
function xd(e, t) {
  var n, r, i, s = "style." + t, a = "end." + s, o;
  return function() {
    var l = Xt(this, e), u = l.on, f = l.value[s] == null ? o || (o = ml(t)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function bd(e, t, n) {
  var r = (e += "") == "transform" ? Eh : _l;
  return t == null ? this.styleTween(e, md(e, r)).on("end.style." + e, ml(e)) : typeof t == "function" ? this.styleTween(e, wd(e, r, js(this, "style." + e, t))).each(xd(this._id, e)) : this.styleTween(e, yd(e, r, t), n).on("end.style." + e, null);
}
function $d(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Ad(e, t, n) {
  var r, i;
  function s() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && $d(e, a, n)), r;
  }
  return s._value = t, s;
}
function Ed(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Ad(e, t, n ?? ""));
}
function Td(e) {
  return function() {
    this.textContent = e;
  };
}
function Rd(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Sd(e) {
  return this.tween("text", typeof e == "function" ? Rd(js(this, "text", e)) : Td(e == null ? "" : e + ""));
}
function Cd(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Nd(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && Cd(i)), t;
  }
  return r._value = e, r;
}
function kd(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Nd(e));
}
function Md() {
  for (var e = this._name, t = this._id, n = yl(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Rt(l, t);
        Ui(l, e, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new fn(r, this._parents, e, n);
}
function Pd() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Xt(this, r), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), u.on = t;
    }), i === 0 && s();
  });
}
var Dd = 0;
function fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function yi(e) {
  return br().transition(e);
}
function yl() {
  return ++Dd;
}
var jt = br.prototype;
fn.prototype = yi.prototype = {
  constructor: fn,
  select: pd,
  selectAll: vd,
  selectChild: jt.selectChild,
  selectChildren: jt.selectChildren,
  filter: od,
  merge: ld,
  selection: _d,
  transition: Md,
  call: jt.call,
  nodes: jt.nodes,
  node: jt.node,
  size: jt.size,
  empty: jt.empty,
  each: jt.each,
  on: cd,
  attr: Xh,
  attrTween: jh,
  style: bd,
  styleTween: Ed,
  text: Sd,
  textTween: kd,
  remove: dd,
  tween: Lh,
  delay: Qh,
  duration: nd,
  ease: id,
  easeVarying: ad,
  end: Pd,
  [Symbol.iterator]: jt[Symbol.iterator]
};
function Od(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Fd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Od
};
function Id(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ld(e) {
  var t, n;
  e instanceof fn ? (t = e._id, e = e._name) : (t = yl(), (n = Fd).time = Gs(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Ui(l, e, t, u, a, n || Id(l, t));
  return new fn(r, this._parents, e, t);
}
br.prototype.interrupt = Oh;
br.prototype.transition = Ld;
const Ss = Math.PI, Cs = 2 * Ss, Nn = 1e-6, qd = Cs - Nn;
function wl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Vd(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return wl;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class zd {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? wl : Vd(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, i) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(t, n, r, i, s, a) {
    this._append`C${+t},${+n},${+r},${+i},${this._x1 = +s},${this._y1 = +a}`;
  }
  arcTo(t, n, r, i, s) {
    if (t = +t, n = +n, r = +r, i = +i, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let a = this._x1, o = this._y1, l = r - t, u = i - n, f = a - t, d = o - n, h = f * f + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > Nn) if (!(Math.abs(d * l - u * f) > Nn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = r - a, _ = i - o, x = l * l + u * u, y = p * p + _ * _, b = Math.sqrt(x), O = Math.sqrt(h), N = s * Math.tan((Ss - Math.acos((x + h - y) / (2 * b * O))) / 2), M = N / O, F = N / b;
      Math.abs(M - 1) > Nn && this._append`L${t + M * f},${n + M * d}`, this._append`A${s},${s},0,0,${+(d * p > f * _)},${this._x1 = t + F * l},${this._y1 = n + F * u}`;
    }
  }
  arc(t, n, r, i, s, a) {
    if (t = +t, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = t + o, f = n + l, d = 1 ^ a, h = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > Nn || Math.abs(this._y1 - f) > Nn) && this._append`L${u},${f}`, r && (h < 0 && (h = h % Cs + Cs), h > qd ? this._append`A${r},${r},0,1,${d},${t - o},${n - l}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = f}` : h > Nn && this._append`A${r},${r},0,${+(h >= Ss)},${d},${this._x1 = t + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(t, n, r, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Hd(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), r = 0; r < t; ) n[r] = "#" + e.slice(r * 6, ++r * 6);
  return n;
}
const Yd = Hd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Fe(e) {
  return function() {
    return e;
  };
}
const Va = Math.abs, Me = Math.atan2, Cn = Math.cos, Bd = Math.max, ss = Math.min, Pt = Math.sin, nr = Math.sqrt, Ye = 1e-12, Yr = Math.PI, ki = Yr / 2, wi = 2 * Yr;
function Xd(e) {
  return e > 1 ? 0 : e < -1 ? Yr : Math.acos(e);
}
function za(e) {
  return e >= 1 ? ki : e <= -1 ? -ki : Math.asin(e);
}
function Wd(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new zd(t);
}
function Ud(e) {
  return e.innerRadius;
}
function Gd(e) {
  return e.outerRadius;
}
function Kd(e) {
  return e.startAngle;
}
function jd(e) {
  return e.endAngle;
}
function Jd(e) {
  return e && e.padAngle;
}
function Zd(e, t, n, r, i, s, a, o) {
  var l = n - e, u = r - t, f = a - i, d = o - s, h = d * l - f * u;
  if (!(h * h < Ye))
    return h = (f * (t - s) - d * (e - i)) / h, [e + h * l, t + h * u];
}
function li(e, t, n, r, i, s, a) {
  var o = e - n, l = t - r, u = (a ? s : -s) / nr(o * o + l * l), f = u * l, d = -u * o, h = e + f, p = t + d, _ = n + f, x = r + d, y = (h + _) / 2, b = (p + x) / 2, O = _ - h, N = x - p, M = O * O + N * N, F = i - s, W = h * x - _ * p, I = (N < 0 ? -1 : 1) * nr(Bd(0, F * F * M - W * W)), ee = (W * N - O * I) / M, fe = (-W * O - N * I) / M, U = (W * N + O * I) / M, re = (-W * O + N * I) / M, le = ee - y, D = fe - b, H = U - y, te = re - b;
  return le * le + D * D > H * H + te * te && (ee = U, fe = re), {
    cx: ee,
    cy: fe,
    x01: -f,
    y01: -d,
    x11: ee * (i / F - 1),
    y11: fe * (i / F - 1)
  };
}
function yt() {
  var e = Ud, t = Gd, n = Fe(0), r = null, i = Kd, s = jd, a = Jd, o = null, l = Wd(u);
  function u() {
    var f, d, h = +e.apply(this, arguments), p = +t.apply(this, arguments), _ = i.apply(this, arguments) - ki, x = s.apply(this, arguments) - ki, y = Va(x - _), b = x > _;
    if (o || (o = f = l()), p < h && (d = p, p = h, h = d), !(p > Ye)) o.moveTo(0, 0);
    else if (y > wi - Ye)
      o.moveTo(p * Cn(_), p * Pt(_)), o.arc(0, 0, p, _, x, !b), h > Ye && (o.moveTo(h * Cn(x), h * Pt(x)), o.arc(0, 0, h, x, _, b));
    else {
      var O = _, N = x, M = _, F = x, W = y, I = y, ee = a.apply(this, arguments) / 2, fe = ee > Ye && (r ? +r.apply(this, arguments) : nr(h * h + p * p)), U = ss(Va(p - h) / 2, +n.apply(this, arguments)), re = U, le = U, D, H;
      if (fe > Ye) {
        var te = za(fe / h * Pt(ee)), je = za(fe / p * Pt(ee));
        (W -= te * 2) > Ye ? (te *= b ? 1 : -1, M += te, F -= te) : (W = 0, M = F = (_ + x) / 2), (I -= je * 2) > Ye ? (je *= b ? 1 : -1, O += je, N -= je) : (I = 0, O = N = (_ + x) / 2);
      }
      var qe = p * Cn(O), de = p * Pt(O), ce = h * Cn(F), _e = h * Pt(F);
      if (U > Ye) {
        var at = p * Cn(N), G = p * Pt(N), Pe = h * Cn(M), St = h * Pt(M), Z;
        if (y < Yr)
          if (Z = Zd(qe, de, Pe, St, at, G, ce, _e)) {
            var hn = qe - Z[0], Ct = de - Z[1], dn = at - Z[0], Wt = G - Z[1], vt = 1 / Pt(Xd((hn * dn + Ct * Wt) / (nr(hn * hn + Ct * Ct) * nr(dn * dn + Wt * Wt))) / 2), En = nr(Z[0] * Z[0] + Z[1] * Z[1]);
            re = ss(U, (h - En) / (vt - 1)), le = ss(U, (p - En) / (vt + 1));
          } else
            re = le = 0;
      }
      I > Ye ? le > Ye ? (D = li(Pe, St, qe, de, p, le, b), H = li(at, G, ce, _e, p, le, b), o.moveTo(D.cx + D.x01, D.cy + D.y01), le < U ? o.arc(D.cx, D.cy, le, Me(D.y01, D.x01), Me(H.y01, H.x01), !b) : (o.arc(D.cx, D.cy, le, Me(D.y01, D.x01), Me(D.y11, D.x11), !b), o.arc(0, 0, p, Me(D.cy + D.y11, D.cx + D.x11), Me(H.cy + H.y11, H.cx + H.x11), !b), o.arc(H.cx, H.cy, le, Me(H.y11, H.x11), Me(H.y01, H.x01), !b))) : (o.moveTo(qe, de), o.arc(0, 0, p, O, N, !b)) : o.moveTo(qe, de), !(h > Ye) || !(W > Ye) ? o.lineTo(ce, _e) : re > Ye ? (D = li(ce, _e, at, G, h, -re, b), H = li(qe, de, Pe, St, h, -re, b), o.lineTo(D.cx + D.x01, D.cy + D.y01), re < U ? o.arc(D.cx, D.cy, re, Me(D.y01, D.x01), Me(H.y01, H.x01), !b) : (o.arc(D.cx, D.cy, re, Me(D.y01, D.x01), Me(D.y11, D.x11), !b), o.arc(0, 0, h, Me(D.cy + D.y11, D.cx + D.x11), Me(H.cy + H.y11, H.cx + H.x11), b), o.arc(H.cx, H.cy, re, Me(H.y11, H.x11), Me(H.y01, H.x01), !b))) : o.arc(0, 0, h, F, M, b);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Yr / 2;
    return [Cn(d) * f, Pt(d) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Fe(+f), u) : e;
  }, u.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Fe(+f), u) : t;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Fe(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Fe(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Fe(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Fe(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Fe(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function Qd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ep(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function tp(e) {
  return e;
}
function as() {
  var e = tp, t = ep, n = null, r = Fe(0), i = Fe(wi), s = Fe(0);
  function a(o) {
    var l, u = (o = Qd(o)).length, f, d, h = 0, p = new Array(u), _ = new Array(u), x = +r.apply(this, arguments), y = Math.min(wi, Math.max(-wi, i.apply(this, arguments) - x)), b, O = Math.min(Math.abs(y) / u, s.apply(this, arguments)), N = O * (y < 0 ? -1 : 1), M;
    for (l = 0; l < u; ++l)
      (M = _[p[l] = l] = +e(o[l], l, o)) > 0 && (h += M);
    for (t != null ? p.sort(function(F, W) {
      return t(_[F], _[W]);
    }) : n != null && p.sort(function(F, W) {
      return n(o[F], o[W]);
    }), l = 0, d = h ? (y - u * N) / h : 0; l < u; ++l, x = b)
      f = p[l], M = _[f], b = x + (M > 0 ? M * d : 0) + N, _[f] = {
        data: o[f],
        index: l,
        value: M,
        startAngle: x,
        endAngle: b,
        padAngle: O
      };
    return _;
  }
  return a.value = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Fe(+o), a) : e;
  }, a.sortValues = function(o) {
    return arguments.length ? (t = o, n = null, a) : t;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, t = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Fe(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Fe(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Fe(+o), a) : s;
  }, a;
}
function Dr(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Dr.prototype = {
  constructor: Dr,
  scale: function(e) {
    return e === 1 ? this : new Dr(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Dr(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Dr.prototype;
var np = /* @__PURE__ */ Zu('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const rp = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function xl(e, t) {
  qi(t, !0), Hs(e, rp);
  let n = ie(t, "jsonData", 7), r = ie(t, "currentRound", 7, 1), i = ie(t, "mouseEventType", 15), s = ie(t, "mouseData", 15), a = ie(t, "mouseX", 15), o = ie(t, "mouseY", 15), l = ie(t, "requestRoundChange", 7, (c) => {
  }), u = ie(t, "requestSkipToRound", 7, (c) => {
  }), f = ie(t, "candidateColors", 23, () => []), d = ie(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), h = ie(t, "firstRoundDeterminesPercentages", 7, !1), p = ie(t, "randomizeOrder", 7, !1), _ = ie(t, "displayPhase", 15, 0);
  function x(c) {
    return c.isTransfer ? `${c.label}__transfer` : c.transferIndex != null ? `${c.label}__${c.transferIndex}` : c.label;
  }
  const y = 800, b = 800, O = Math.min(y, b) * 0.3, N = y / 2, M = b / 2, F = "Pie", W = "PieOutline", I = "Donut", ee = "TextLayer", fe = "url(#cross-hatch)", U = 1.15, re = 750, le = 800, D = "white", H = 1, te = "#ff00ff", je = 3;
  function qe(c) {
    return "hatch-" + c.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let de = [], ce = [], _e = [], at = 0, G = 0;
  const Pe = {}, St = "No Further Rankings";
  let Z = /* @__PURE__ */ $e(null);
  function hn() {
    const c = he($(Z));
    c.select("#" + F).remove(), c.select("#" + W).remove(), c.select("#" + I).remove(), c.select("#" + ee).remove();
  }
  function Ct(c) {
    l() && (oe = c, l()(c));
  }
  function dn(c) {
    var m;
    if (!((m = n()) != null && m.results) || c < 1 || c > n().results.length) return !1;
    const g = n().results[c - 1].tallyResults;
    return g.length > 0 && g.some((A) => Object.keys(A.transfers).length > 0);
  }
  function Wt(c) {
    for (let g = c; g < n().results.length; g++)
      if (dn(g)) return g;
    return n().results.length;
  }
  function vt(c) {
    hn(), _e = En(c), de = ta(c, F, _e, N, M, 0, Je()), ta(c, W, _e, N, M, 0, Je(), !1, !1, !0), Rr();
  }
  sf(() => {
    kt(), setTimeout(
      () => {
        vt(r());
      },
      0
    );
  });
  function En(c) {
    const g = Rn(c);
    return at = Gi(c), g;
  }
  function Je() {
    return O;
  }
  function $r() {
    return Je() * 1.41;
  }
  function Ar(c) {
    let g = 0;
    for (let m = 1; m < c; m++) {
      const A = n().results[m - 1].tallyResults;
      for (let E = 0; E < A.length; E++) {
        const T = A[E].transfers;
        if (T) {
          const P = T.exhausted;
          P && (g += Number(P));
        }
      }
    }
    return g;
  }
  function Tn(c, g) {
    if (c === "exhausted") return Ar(g);
    {
      const m = n().results[g - 1].tally;
      return Number(m[c]);
    }
  }
  function Jn(c, g) {
    return Tn(c, g).toLocaleString("en-US");
  }
  function Zr(c, g) {
    const m = h() ? at : Ki(g);
    return (Tn(c, g) / m).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function Gi(c) {
    const g = n().results[c - 1].tally;
    let m = 0;
    for (let [A, E] of Object.entries(g))
      m += Number(E);
    return m;
  }
  function Nt(c) {
    return c === "exhausted" || c === "Inactive Ballots";
  }
  function Ki(c) {
    const g = n().results[c - 1].tally;
    let m = 0;
    for (let [A, E] of Object.entries(g))
      Nt(A) || (m += Number(E));
    return m;
  }
  function w(c, g) {
    if (!c || c < 1 || c > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (d() && c === n().results.length)
      return [];
    const m = n().results[c - 1].tallyResults, A = [];
    for (let E = 0; E < m.length; E++) {
      const T = m[E][g];
      T != null && A.push(T);
    }
    return A;
  }
  function Y(c) {
    return w(c, "eliminated");
  }
  function se(c) {
    let g = [];
    for (let m = 1; m <= c; m++) g = g.concat(w(m, "elected"));
    return [...new Set(g)];
  }
  function we(c, g) {
    const m = n().results[g - 1].tallyResults;
    let A = 0;
    const E = m.findIndex((T) => (T == null ? void 0 : T.elected) && c == T.elected);
    if (E >= 0) {
      const T = m[E].transfers;
      if (T)
        for (let [P, V] of Object.entries(T)) A += Number(V);
    } else
      return 0;
    return A;
  }
  function ye(c, g) {
    c.some((m) => Nt(m.label)) || c.push({ label: "exhausted", value: Ar(g) });
  }
  function ue(c) {
    let g = c | 0;
    return () => {
      g = g + 1831565813 | 0;
      let m = Math.imul(g ^ g >>> 15, 1 | g);
      return m = m + Math.imul(m ^ m >>> 7, 61 | m) ^ m, ((m ^ m >>> 14) >>> 0) / 4294967296;
    };
  }
  function Ve(c) {
    let g = 5381;
    for (let m = 0; m < c.length; m++)
      g = (g << 5) + g + c.charCodeAt(m) | 0;
    return g;
  }
  function Ut(c) {
    var E;
    if (c.length <= 3) return c;
    const g = Ve(((E = n().config) == null ? void 0 : E.contest) ?? ""), m = ue(g), A = [...c];
    for (let T = A.length - 1; T > 0; T--) {
      const P = Math.floor(m() * (T + 1));
      [A[T], A[P]] = [A[P], A[T]];
    }
    return A;
  }
  function gt() {
    const c = Object.keys(n().results[0].tally), g = c.filter((E) => !Nt(E)), m = c.filter((E) => Nt(E));
    return [...p() ? Ut(g) : g, ...m];
  }
  function Rn(c) {
    const g = n().results[c - 1].tally, m = [];
    for (const A of gt())
      A in g && m.push({ label: A, value: Number(g[A]) });
    return ye(m, c), m;
  }
  function pn(c) {
    const g = n().results[c - 1].tally, m = [];
    for (const A of gt())
      m.push({ label: A, value: Number(g[A] ?? 0) });
    return ye(m, c), m;
  }
  function ze(c, g) {
    const m = [];
    for (const A of c) {
      if (A.label === "exhausted" || A.isTransfer) {
        m.push(A);
        continue;
      }
      const E = we(A.label, g);
      E > 0 ? (m.push({
        label: A.label,
        value: E,
        isTransfer: !0
      }), m.push({ ...A, value: A.value - E })) : m.push(A);
    }
    return m;
  }
  function kt() {
    const c = he($(Z)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [m, A] of Object.entries(n().results[0].tally)) {
      !f() || f().length === 0 ? g < 10 ? Pe[m] = Yd[g] : Pe[m] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Pe[m] = f()[g % f().length], g++;
      {
        const E = c.clone(!0);
        E.attr("id", qe(m)).select("rect").attr("fill", Pe[m]), E.selectAll("circle").attr("fill", "#383838");
      }
    }
    Pe.exhausted = fe, Pe["Inactive Ballots"] = fe;
  }
  function ot() {
    he($(Z)).select("#" + I).remove();
  }
  function _t(c, g) {
    const m = yi("global").duration(le);
    g && m.on("end", g);
    const A = ze(_e, c), T = as().sort(null).value((P) => P.value)(A);
    sa(c, F, T, 0, Je()), sa(c, W, T, 0, Je(), !0), _e = A, de = T, ot(), Tl(c), Pl(), Ol(0, Je()), Rr();
  }
  function Mt(c, g) {
    const m = yi("global").duration(le);
    g && m.on("end", g), Rl(c);
  }
  function mt(c, g) {
    const m = yi("global").duration(le);
    g && m.on("end", g), Al(c), El(Je(), $r());
  }
  let xe = !1, De = [];
  function Ee() {
    Rr(), xe = !1, Gt();
  }
  function Gt() {
    if (De.length === 0) {
      oe !== r() && (r() === oe + 1 && oe > 0 && r() <= n().results.length ? (oe = r(), Zn(r())) : r() >= 1 && r() <= n().results.length && (oe = r(), _(0), vt(r())));
      return;
    }
    const c = De.shift();
    switch (c.type) {
      case "round": {
        const g = c.round;
        g === oe + 1 && oe > 0 && g <= n().results.length ? (oe = g, Zn(g)) : (g !== oe && g >= 1 && g <= n().results.length && (oe = g, _(0), vt(g)), Gt());
        break;
      }
      case "step":
        Zs();
        break;
    }
  }
  function Zn(c) {
    if (c <= 1 || c > n().results.length) {
      Gt();
      return;
    }
    xe = !0, G = c, _(0), _t(G - 1, () => {
      _(1), Mt(G - 1, () => {
        _(2), mt(G, () => {
          _(0), Ee();
        });
      });
    });
  }
  function Er() {
    xe || (xe = !0, G = r(), Qn());
  }
  function Qn() {
    if (_(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), De.length > 0) {
      Ee();
      return;
    }
    const c = G < n().results.length - 1 ? Qn : () => {
      _(0), Ee();
    };
    _t(G, () => {
      _(1), Mt(G, () => {
        _(2), G++, Ct(G), mt(G, c);
      });
    });
  }
  Is(() => {
    Kt();
  });
  let oe = 0;
  function Kt() {
    if (oe != r()) {
      if (xe) {
        De.push({ type: "round", round: r() });
        return;
      }
      if (oe == r() - 1 && oe > 0)
        if (dn(oe))
          $l();
        else {
          const c = Wt(r());
          if (u()) {
            oe = c, c < n().results.length ? u()(c + 1) : u()(c);
            return;
          }
        }
      else
        ji(r());
      oe = r();
    }
  }
  function ji(c) {
    if (xe) {
      De.push({ type: "round", round: c });
      return;
    }
    _(0), vt(c);
  }
  function $l() {
    if (xe) {
      De.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (G = r(), G > n().results.length) {
      Rr(), xe = !1;
      return;
    }
    xe = !0, _() === 0 ? _t(G - 1, () => {
      _(1), Mt(G - 1, () => {
        _(2), mt(G, () => {
          _(0), Ee();
        });
      });
    }) : _() === 1 ? Mt(G - 1, () => {
      _(2), mt(G, () => {
        _(0), Ee();
      });
    }) : _() === 2 && mt(G, () => {
      _(0), Ee();
    });
  }
  function Zs() {
    if (r() > n().results.length) {
      Rr(), xe = !1;
      return;
    }
    if (xe) {
      De.push({ type: "step" });
      return;
    }
    xe = !0, G = r(), _() === 0 ? _t(G, () => {
      _(1), Ee();
    }) : _() === 1 ? Mt(G, () => {
      _(2), Ee();
    }) : _() === 2 ? (G++, Ct(G), mt(G, () => {
      _(0), Ee();
    })) : (xe = !1, console.warn("displayPhase out of range at ", _()));
  }
  function Al(c) {
    _e = pn(c), de = ra(c, F, _e, 0, Je(), !0), ra(c, W, _e, 0, Je(), !1, !0);
  }
  function El(c, g) {
    const m = he($(Z)).select("#" + I), E = he($(Z)).select("#" + F), T = {};
    for (const C of de) {
      const k = C.data.label;
      if (C.data.isTransfer) continue;
      const R = E.select("#" + CSS.escape(x(C.data)));
      R.empty() || (T[k] = {
        oldStart: Number(R.attr("prevStart")),
        oldEnd: Number(R.attr("prevEnd")),
        newStart: C.startAngle,
        newEnd: C.endAngle
      });
    }
    const P = m.selectAll(".slice");
    let V = P.size();
    function L() {
      V--, V === 0 && Dl();
    }
    P.select("path").transition("global").duration(re).attrTween("d", function(C) {
      const k = C.startAngle, R = C.endAngle, S = R - k, ke = T[C.data.label];
      let Q, He;
      if (ke) {
        const er = (ke.oldStart + ke.oldEnd) / 2, ql = (ke.newStart + ke.newEnd) / 2, Vl = k - er;
        Q = ql + Vl, He = Q + S;
      } else
        Q = k, He = R;
      const ae = Jt(k, Q), Te = Jt(R, He), ei = Jt(g, c), Sr = yt();
      return function(er) {
        return Sr.innerRadius(Math.min(ei(er), c) - 1).outerRadius(ei(er)).startAngle(ae(er)).endAngle(Te(er)), Sr(C);
      };
    }).on("end", (C) => L());
  }
  function Tl(c) {
    const g = Cl(c, de);
    ce = na(c, I, g, N, M, Je(), $r(), !1, !0);
    const m = he($(Z));
    m.select("#" + F).raise(), m.select("#" + W).raise();
  }
  function Rl(c) {
    const g = kl(c, ce, de);
    ce = aa(c, I, g, Je(), $r(), !1);
  }
  function Tr(c) {
    return Pe[c.data.label];
  }
  function Sl(c) {
    const g = {}, m = n().results[c - 1].tallyResults;
    for (let A = 0; A < m.length; A++) {
      let E = m[A].eliminated;
      if (E === void 0 && (E = m[A].elected), E === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const T = m[A].transfers;
      if (T === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [P, V] of Object.entries(T))
        g[P] === void 0 ? g[P] = Number(V) : g[P] += Number(V);
    }
    return g;
  }
  function Cl(c, g) {
    const m = [], A = at, E = n().results[c - 1].tallyResults;
    for (let T = 0; T < E.length; T++) {
      let P = E[T].eliminated;
      if (P === void 0 && (P = E[T].elected), P === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const V = E[T].transfers;
      if (V === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let L = g.find((k) => k.data.label == P && k.data.isTransfer);
      L === void 0 && (L = g.find((k) => k.data.label == P && !k.data.isTransfer));
      let C = 0;
      if (L) C = L.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [k, R] of Object.entries(V)) {
        let S;
        const ke = g.find((ae) => ae.data.label == k);
        if (ke)
          S = structuredClone(ke);
        else if (k == "exhausted")
          S = {
            data: { label: k, value: Number(R) },
            value: 0,
            index: 0,
            startAngle: 0,
            endAngle: 0,
            padAngle: 0
          };
        else {
          if (k == "residual surplus")
            continue;
          console.warn("makeDonutInfo: unrecognized name in transfers ", k);
          continue;
        }
        const He = Number(R) / A * 2 * Math.PI;
        S.startAngle = C, C = S.endAngle = C + He, S.index = T, S.data.transferIndex = T, m.push(S);
      }
    }
    return m;
  }
  function Nl(c, g, m) {
    const A = {};
    for (let [E, T] of Object.entries(c)) {
      const P = m.find((C) => E == C.data.label);
      if (P === void 0) {
        E !== "residual surplus" && console.warn("getTransferStartAngles: mainPieObj not found for ", E);
        continue;
      }
      const V = (P.startAngle + P.endAngle) / 2, L = c[P.data.label] / g * 2 * Math.PI;
      A[P.data.label] = V - L / 2;
    }
    return A;
  }
  function kl(c, g, m) {
    const A = [], E = at, T = Sl(c), P = Nl(T, E, m);
    for (let [V, L] of g.entries()) {
      const C = structuredClone(L), k = L.endAngle - L.startAngle, R = m.find((S) => L.data.label === S.data.label && !S.data.isTransfer);
      if (R) {
        const S = R.data.label;
        C.startAngle = P[S], P[S] += k, C.endAngle = C.startAngle + k;
      } else if (L.data.label === "exhausted")
        C.startAngle = L.startAngle, C.endAngle = L.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", L.data.label);
        continue;
      }
      C.index = V, A.push(C);
    }
    return A;
  }
  function Qs(c, g, m, A) {
    const E = yt().innerRadius(m * U).outerRadius(m * U), T = g.filter((k) => !k.data.isTransfer && k.data.value > 0), P = [], V = A.append("g").attr("opacity", 0);
    for (const k of T) {
      const R = k.data.label === "exhausted" ? St : k.data.label, S = E.centroid(k), ke = Qr(k.startAngle, k.endAngle), Q = Jn(k.data.label, c);
      let He;
      !h() && Nt(k.data.label) ? He = Q : He = Q + " (" + Zr(k.data.label, c) + ")";
      const ae = V.append("text").attr("transform", `translate(${S})`).attr("text-anchor", ke).text(R);
      ae.append("tspan").attr("x", 0).attr("dy", "1.2em").text(He);
      const Te = ae.node().getBBox();
      P.push({
        label: k.data.label,
        value: k.data.value,
        bbox: new DOMRect(Te.x + S[0], Te.y + S[1], Te.width, Te.height)
      });
    }
    V.remove(), P.sort((k, R) => R.value - k.value);
    const L = [], C = /* @__PURE__ */ new Set();
    for (const k of P)
      L.some((S) => k.bbox.left < S.right && k.bbox.right > S.left && k.bbox.top < S.bottom && k.bbox.bottom > S.top) || (C.add(k.label), L.push(k.bbox));
    return C;
  }
  function ea(c, g, m, A, E, T) {
    const V = he($(Z)).append("g").attr("id", ee).attr("transform", `translate(${m}, ${A})`), L = yt().innerRadius(E * U).outerRadius(E * U), C = Qs(c, g, E, V);
    V.selectAll("text").data(g).enter().each(function(k) {
      !k.data.isTransfer && C.has(k.data.label) && he(this).append("g").attr("id", (R) => x(R.data)).classed("eliminated", (R) => T.includes(R.data.label) || R.data.isTransfer === !0).each(function(R, S) {
        R.data.label === "exhausted" && he(this).on("mouseenter", (ke, Q) => Fl(ke)).on("mouseleave", (ke, Q) => Il());
      }).append("text").attr("transform", (R) => `translate(${L.centroid(R)})`).attr("text-anchor", (R) => Qr(R.startAngle, R.endAngle)).text((R) => R.data.label === "exhausted" ? St : R.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((R) => {
        const S = Jn(R.data.label, c);
        return !h() && Nt(R.data.label) ? S : S + " (" + Zr(R.data.label, c) + ")";
      });
    });
  }
  function Ml(c, g, m, A) {
    const T = he($(Z)).select("#" + ee), P = Qs(c, g, m, T);
    T.selectAll("g").each(function(S) {
      S && S.data && !S.data.isTransfer && !P.has(S.data.label) && he(this).remove();
    });
    const V = T.selectAll("tspan"), L = T.selectAll("g").data(g, (S) => x(S.data)).classed("eliminated", (S) => A.includes(S.data.label) || S.data.isTransfer === !0), C = yt().innerRadius(m * U).outerRadius(m * U + 1);
    V.transition("global").duration(re).attr("transform", (S) => `translate(${C.centroid(S)})`).attr("text-anchor", (S) => Qr(S.startAngle, S.endAngle)), L.select("text").transition("global").duration(re).attr("transform", (S) => `translate(${C.centroid(S)})`).attr("text-anchor", (S) => Qr(S.startAngle, S.endAngle)).on("end", (S) => R());
    let k = L.size();
    function R(S) {
      k--, k === 0 && (T.remove(), ea(c, g, N, M, m, A));
    }
  }
  function ta(c, g, m, A, E, T, P, V = !0, L = !1, C = !1) {
    const R = as().sort(null).value((S) => S.value)(m);
    return na(c, g, R, A, E, T, P, V, L, C), R;
  }
  function Rr() {
    he($(Z)).select("#" + W).selectAll(".elected").select("path").style("stroke", te).style("stroke-width", `${je}px`);
  }
  function na(c, g, m, A, E, T, P, V, L, C = !1) {
    const k = Y(c), R = se(c), Q = he($(Z)).attr("viewBox", `0 0 ${y} ${b}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${A}, ${E})`).selectAll(".slice").data(m).enter().append("g").attr("class", "slice").classed("eliminated", (ae) => k.includes(ae.data.label) || ae.data.isTransfer === !0).classed("elected", (ae) => R.includes(ae.data.label) && !ae.data.isTransfer).attr("id", (ae) => x(ae.data));
    C ? Q.style("pointer-events", "none") : Q.on("mouseenter", (ae, Te) => Zi(ae, Te)).on("mouseleave", (ae, Te) => Qi(ae, Te));
    const He = yt().outerRadius(P).innerRadius(T);
    if (L) {
      const ae = yt().outerRadius(T + 1).innerRadius(T);
      Q.append("path").attr("d", ae).attr("stroke", C ? "none" : T === 0 ? D : "none").attr("stroke-width", C ? 0 : T === 0 ? H : 0).attr("fill", C ? "none" : (Te) => Tr(Te)).transition("global").duration(re).attr("d", (Te) => He(Te)).on("end", (Te) => {
        C || Ji();
      });
    } else
      Q.append("path").attr("d", (ae) => He(ae)).attr("fill", C ? "none" : (ae) => Tr(ae)).attr("stroke", C ? "none" : D).attr("stroke-width", C ? 0 : H), C || Ji();
    return V && !C && ea(c, m, A, E, P, k), m;
  }
  function Pl() {
    const m = he($(Z)).select("#" + ee).selectAll(".eliminated");
    m.size() > 0 && m.classed("finished", !0);
  }
  function Dl() {
    const m = he($(Z)).select("#" + ee).selectAll(".finished");
    m.size() > 0 && m.remove();
  }
  function Ol(c, g) {
    const E = he($(Z)).select("#" + F).selectAll(".eliminated"), T = yt().innerRadius(c), P = yt().outerRadius(g);
    E.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(re).attrTween("d", function(V) {
      const L = Jt(g, c);
      return function(C) {
        return P.innerRadius(L(C)), P(V);
      };
    }).attr("fill", (V) => `url(#${qe(V.data.label)})`), E.clone(!0).classed("finished", !0).select("path").transition("global").duration(re).attrTween("d", function(V) {
      const L = Jt(g, c);
      return function(C) {
        return T.outerRadius(L(C)), T(V);
      };
    }).attr("fill", (V) => Tr(V));
  }
  function Qr(c, g) {
    const m = (c + g) / 2;
    return m > Math.PI * 11 / 6 || m < Math.PI * 1 / 6 || m > Math.PI * 5 / 6 && m < Math.PI * 7 / 6 ? "middle" : m < Math.PI ? "start" : "end";
  }
  function Ji() {
    he($(
      Z
      // force redisplay of text labels
    )).select("#" + ee).raise().append("g").remove();
  }
  function ra(c, g, m, A, E, T, P = !1) {
    const L = as().sort(null).value((C) => C.value)(m);
    return aa(c, g, L, A, E, T, P), L;
  }
  function ia(c, g, m, A, E = !1) {
    const T = Y(c), P = se(c), C = he($(Z)).select("#" + g).selectAll(".slice").data(m, (R) => x(R.data));
    C.exit().remove();
    const k = C.enter().append("g").attr("class", "slice").attr("id", (R) => x(R.data)).classed("eliminated", !0);
    return E ? k.style("pointer-events", "none") : k.on("mouseenter", (R, S) => Zi(R, S)).on("mouseleave", (R, S) => Qi(R, S)), k.append("path").attr("d", (R) => A(R)).attr("fill", E ? "none" : (R) => Tr(R)).attr("stroke", E ? "none" : D).attr("stroke-width", E ? 0 : H), C.classed("eliminated", (R) => T.includes(R.data.label)).classed("elected", (R) => P.includes(R.data.label)), E || C.on("mouseenter", (R, S) => Zi(R, S)).on("mouseleave", (R, S) => Qi(R, S)), C;
  }
  function sa(c, g, m, A, E, T = !1) {
    const P = yt().outerRadius(E).innerRadius(A);
    ia(c, g, m, P, T).select("path").attr("d", (L) => P(L)).attr("fill", T ? "none" : (L) => Tr(L));
  }
  function aa(c, g, m, A, E, T, P = !1) {
    const V = yt().outerRadius(E).innerRadius(A).startAngle((Q) => Q.startAngle).endAngle((Q) => Q.endAngle), L = yt().outerRadius(E).innerRadius(A);
    he($(Z)).select("#" + g).selectAll(".slice").attr("prevStart", (Q) => Q.startAngle).attr("prevEnd", (Q) => Q.endAngle);
    const R = ia(c, g, m, L, P);
    let S = R.size();
    function ke() {
      S--, S <= 0 && (P || Ji());
    }
    return R.select("path").transition("global").duration(re).attrTween("d", function(Q) {
      const He = Number(he(this.parentNode).attr("prevStart")), ae = Number(he(this.parentNode).attr("prevEnd")), Te = Jt(He, Q.startAngle), ei = Jt(ae, Q.endAngle);
      return (Sr) => (V.startAngle(Te(Sr)).endAngle(ei(Sr)), V(Q));
    }).on("end", function(Q) {
      Q.startAngle === Q.endAngle && he(this).attr("stroke", "none"), ke();
    }), T && !P && Ml(c, m, E, Y(c)), m;
  }
  function Zi(c, g) {
    s(g.data.label), i("enter"), a(c.clientX), o(c.clientY);
  }
  function Qi(c, g) {
    s(g.data.label), i("leave");
  }
  function Fl(c, g) {
    i("show-exhausted"), a(c.clientX), o(c.clientY);
  }
  function Il(c, g) {
    i("hide-exhausted");
  }
  var Ll = {
    pieColors: Pe,
    exhaustedLabel: St,
    countExhaustedVotes: Ar,
    getEliminatedCandidates: Y,
    getElectedCandidates: se,
    runFullAnimationFn: Er,
    animateOnePhaseFn: Zs,
    get jsonData() {
      return n();
    },
    set jsonData(c) {
      n(c), ne();
    },
    get currentRound() {
      return r();
    },
    set currentRound(c = 1) {
      r(c), ne();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(c) {
      i(c), ne();
    },
    get mouseData() {
      return s();
    },
    set mouseData(c) {
      s(c), ne();
    },
    get mouseX() {
      return a();
    },
    set mouseX(c) {
      a(c), ne();
    },
    get mouseY() {
      return o();
    },
    set mouseY(c) {
      o(c), ne();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(c = (g) => {
    }) {
      l(c), ne();
    },
    get requestSkipToRound() {
      return u();
    },
    set requestSkipToRound(c = (g) => {
    }) {
      u(c), ne();
    },
    get candidateColors() {
      return f();
    },
    set candidateColors(c = []) {
      f(c), ne();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return d();
    },
    set excludeFinalWinnerAndEliminatedCandidate(c = !1) {
      d(c), ne();
    },
    get firstRoundDeterminesPercentages() {
      return h();
    },
    set firstRoundDeterminesPercentages(c = !1) {
      h(c), ne();
    },
    get randomizeOrder() {
      return p();
    },
    set randomizeOrder(c = !1) {
      p(c), ne();
    },
    get displayPhase() {
      return _();
    },
    set displayPhase(c = 0) {
      _(c), ne();
    }
  }, oa = np();
  return pi(oa, (c) => ve(Z, c), () => $(Z)), We(e, oa), Vi(Ll);
}
Ys(
  xl,
  {
    jsonData: {},
    currentRound: {},
    mouseEventType: {},
    mouseData: {},
    mouseX: {},
    mouseY: {},
    requestRoundChange: {},
    requestSkipToRound: {},
    candidateColors: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    randomizeOrder: {},
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
var ip = /* @__PURE__ */ Bt("<div></div>"), sp = /* @__PURE__ */ Bt('<!> <div class="step svelte-1l4eyw0"><div></div> <span> </span></div>', 1), ap = /* @__PURE__ */ Bt('<div role="button" aria-label="Advance animation phase"></div>');
const op = {
  hash: "svelte-1l4eyw0",
  code: ".stepper.svelte-1l4eyw0 {display:inline-flex;align-items:center;cursor:pointer;user-select:none;padding:4px 8px;border-radius:4px;}.stepper.svelte-1l4eyw0:hover:not(.disabled) {background-color:#f0f0f0;}.stepper.disabled.svelte-1l4eyw0 {cursor:default;opacity:0.4;}.step.svelte-1l4eyw0 {display:flex;align-items:center;gap:4px;}.dot.svelte-1l4eyw0 {width:10px;height:10px;border-radius:50%;border:2px solid #ccc;background:white;transition:background-color 0.3s, border-color 0.3s;}.dot.active.svelte-1l4eyw0 {background:#4747ff;border-color:#4747ff;}.dot.completed.svelte-1l4eyw0 {background:#8888ff;border-color:#8888ff;}.label.svelte-1l4eyw0 {font-size:0.75rem;color:#888;transition:color 0.3s, font-weight 0.3s;}.label.active.svelte-1l4eyw0 {color:#4747ff;font-weight:bold;}.label.completed.svelte-1l4eyw0 {color:#8888ff;}.connector.svelte-1l4eyw0 {width:20px;height:2px;background:#ccc;margin:0 4px;transition:background-color 0.3s;}.connector.completed.svelte-1l4eyw0 {background:#8888ff;}"
};
function bl(e, t) {
  qi(t, !0), Hs(e, op);
  let n = ie(t, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = ie(t, "currentStep", 7, 0), i = ie(t, "disabled", 7, !1), s = ie(t, "onAdvance", 7, () => {
  });
  function a() {
    i() || s()();
  }
  function o(d) {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), a());
  }
  var l = {
    get labels() {
      return n();
    },
    set labels(d = ["Eliminate", "Transfer", "Consolidate"]) {
      n(d), ne();
    },
    get currentStep() {
      return r();
    },
    set currentStep(d = 0) {
      r(d), ne();
    },
    get disabled() {
      return i();
    },
    set disabled(d = !1) {
      i(d), ne();
    },
    get onAdvance() {
      return s();
    },
    set onAdvance(d = () => {
    }) {
      s(d), ne();
    }
  }, u = ap();
  let f;
  return u.__click = a, u.__keydown = o, di(u, 21, n, hi, (d, h, p) => {
    var _ = sp(), x = gn(_);
    {
      var y = (I) => {
        var ee = ip();
        let fe;
        Zt(() => fe = ri(ee, 1, "connector svelte-1l4eyw0", null, fe, { completed: !i() && p <= r() })), We(I, ee);
      };
      tr(x, (I) => {
        p > 0 && I(y);
      });
    }
    var b = Ze(x, 2), O = Be(b);
    let N;
    var M = Ze(O, 2);
    let F;
    var W = Be(M, !0);
    Oe(M), Oe(b), Zt(() => {
      N = ri(O, 1, "dot svelte-1l4eyw0", null, N, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), F = ri(M, 1, "label svelte-1l4eyw0", null, F, {
        active: !i() && p === r(),
        completed: !i() && p < r()
      }), _n(W, $(h));
    }), We(d, _);
  }), Oe(u), Zt(() => {
    f = ri(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), ba(u, "tabindex", i() ? -1 : 0), ba(u, "aria-disabled", i());
  }), We(e, u), Vi(l);
}
Ku(["click", "keydown"]);
Ys(bl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var lp = /* @__PURE__ */ Bt("<span> </span> <!>", 1), up = /* @__PURE__ */ Bt("About to eliminate: <!>", 1), fp = /* @__PURE__ */ Bt("<span> </span> <!>", 1), cp = /* @__PURE__ */ Bt(" <!>", 1), hp = /* @__PURE__ */ Bt('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), dp = /* @__PURE__ */ Bt("<span> </span> <br/>", 1), pp = /* @__PURE__ */ Bt('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const vp = {
  hash: "svelte-1r6y5gl",
  code: `.page-container.svelte-1r6y5gl {width:95%;max-width:1800px;margin:0 auto;padding:0 20px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;}.common-header.svelte-1r6y5gl {width:100%;margin-bottom:1rem;text-align:center;}.tooltip.svelte-1r6y5gl {position:fixed;width:max-content;max-width:calc(100vw - 24px);text-align:left;padding:.5rem;background:#FFFFFF;color:#313639;border:1px solid #313639;border-radius:8px;pointer-events:none;font-size:0.8rem;font-weight:normal;opacity:0;z-index:100;}.tooltip.svelte-1r6y5gl h3:where(.svelte-1r6y5gl) {text-align:center;}.animation-button-container.svelte-1r6y5gl {display:flex;justify-content:center;gap:10px;margin:0.5rem;}.pie-chart-container.svelte-1r6y5gl {width:100%;min-width:auto;flex-grow:0;margin:0 auto;margin-top:-3vh;}.visualizations-container.svelte-1r6y5gl {display:flex;justify-content:space-between;width:100%;padding:0 20px;gap:20px;}

/* Media query for smaller screens */
@media (max-width: 1300px) {.visualizations-container.svelte-1r6y5gl {flex-direction:column;align-items:center;}
}

@media (max-width: 768px) {.page-container.svelte-1r6y5gl {padding:0 10px; /* Reduce padding on smaller screens */}.visualizations-container.svelte-1r6y5gl {padding:0; /* Remove padding on small screens */}
}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.5rem;}

@media (max-width: 768px) {.common-header.svelte-1r6y5gl {margin-bottom:0.5rem;}h3.svelte-1r6y5gl, h4.svelte-1r6y5gl {margin:0.3rem 0;font-size:0.9rem;}
  
}`
};
function gp(e, t) {
  qi(t, !0), Hs(e, vp);
  const n = 0.85;
  let r = ie(t, "electionSummary", 7), i = ie(t, "currentRound", 7, 1), s = ie(t, "requestRoundChange", 7, (w) => {
  }), a = ie(t, "requestSkipToRound", 7, (w) => {
  }), o = ie(t, "candidateColors", 23, () => []), l = ie(t, "textForWinner", 7, "elected"), u = ie(t, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), f = ie(t, "firstRoundDeterminesPercentages", 7, !1), d = ie(t, "randomizeOrder", 7, !1), h = ie(t, "showCaptions", 7, !1);
  const p = {
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
  let _ = /* @__PURE__ */ Sn(() => p[l()] ?? p.elected), x = /* @__PURE__ */ $e(null), y = /* @__PURE__ */ $e(null), b = /* @__PURE__ */ $e(""), O = /* @__PURE__ */ $e(Pn([])), N = /* @__PURE__ */ $e(""), M = /* @__PURE__ */ $e(""), F = /* @__PURE__ */ $e(0), W = /* @__PURE__ */ $e(0), I = /* @__PURE__ */ Sn(() => ee(r()));
  function ee(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (Y) {
        return console.error("Failed to parse JSON string:", Y), {};
      }
    return w || {};
  }
  function fe(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function U(w, Y, se) {
    w.style.left = Y + "px", w.style.top = se + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const ue = w.getBoundingClientRect();
      let Ve = Y, Ut = se + 20;
      Ve + ue.width > window.innerWidth - 12 && (Ve = window.innerWidth - ue.width - 12), Ve < 12 && (Ve = 12), Ut + ue.height > window.innerHeight - 12 && (Ut = se - ue.height - 12), w.style.left = Ve + "px", w.style.top = Ut + "px";
    });
  }
  function re() {
    switch ($(N)) {
      case "enter":
        ((w) => {
          var Y = su(w, 2);
          ve(O, Y[0], !0), ve(b, Y[1], !0);
        })(D($(M), i())), $(x) && (U($(x), $(F) || 0, $(W) || 0), $(x).style.opacity = String(n));
        break;
      case "leave":
        $(x) && ($(x).style.opacity = "0"), ve(O, [], !0), ve(b, "");
        break;
      case "show-exhausted":
        $(y) && (U($(y), $(F) || 0, $(W) || 0), $(y).style.opacity = String(n));
        break;
      case "hide-exhausted":
        $(y) && ($(y).style.opacity = "0");
        break;
      case "":
        break;
      default:
        console.log("Unknown mouse event: ", $(N));
        break;
    }
  }
  Is(() => re());
  function le(w, Y) {
    return w === 1 ? Y ? "vote was" : "vote will be" : Y ? "votes were" : "votes will be";
  }
  function D(w, Y) {
    const se = [], we = w === "exhausted" ? Pe() : w;
    let ye;
    w === "exhausted" ? ye = at(1) : ye = $(I).results[0].tally[w], se.push(`${we} started with ${ye} votes.`);
    for (let ue = 1; ue <= Y; ue++) {
      ue === Y && (w === "exhausted" ? ye = at(Y) : ye = $(I).results[Y - 1].tally[w], se.push(`${we} has ${ye} votes at round ${Y}.`));
      const Ve = $(I).results[ue - 1].tallyResults, Ut = de(ue);
      for (let gt = 0; gt < Ve.length; gt++) {
        const Rn = Ve[gt].transfers, pn = Ve[gt].eliminated, ze = Ve[gt].elected;
        if (!Ut) {
          if (pn)
            pn === w && se.push(`${we} will be eliminated on round ${ue}.`);
          else if (w === ze && (se.push(`${we} ${$(_).event} on round ${ue}.`), Rn))
            for (let [ot, _t] of Object.entries(Rn))
              se.push(`${_t} ${le(Number(_t), ue < Y)} transferred to ${ot} on round ${ue}.`);
        }
        const kt = pn || ze;
        if (kt) {
          const ot = Number(Rn[w]);
          ot && se.push(`${ot} ${le(ot, ue < Y)} transferred from ${kt} on round ${ue}.`);
        }
      }
    }
    return [se, we];
  }
  function H() {
    let w = 0;
    for (let Y = 1; Y <= $(I).results.length; Y++) {
      if (de(Y)) continue;
      const se = $(I).results[Y - 1].tallyResults;
      for (let we = 0; we < se.length; we++)
        se[we].elected && w++;
    }
    return w;
  }
  let te, je = /* @__PURE__ */ $e(0);
  function qe(w) {
    var ye;
    return !((ye = $(I)) != null && ye.results) || w < 1 || w > $(I).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [$(I).results[w - 1].tallyResults.some((ue) => ue.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function de(w) {
    return u() && $(I).results && w === $(I).results.length;
  }
  function ce(w) {
    return de(w) ? [] : te ? te.getEliminatedCandidates(w) : [];
  }
  function _e(w) {
    return de(w) ? [] : te ? te.getElectedCandidates(w) : [];
  }
  function at(w) {
    return te ? te.countExhaustedVotes(w) : 0;
  }
  function G() {
    te && te.animateOnePhaseFn && te.animateOnePhaseFn();
  }
  function Pe() {
    return te ? te.exhaustedLabel : "";
  }
  function St() {
    return te ? te.pieColors : {};
  }
  var Z = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), ne();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), ne();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (Y) => {
    }) {
      s(w), ne();
    },
    get requestSkipToRound() {
      return a();
    },
    set requestSkipToRound(w = (Y) => {
    }) {
      a(w), ne();
    },
    get candidateColors() {
      return o();
    },
    set candidateColors(w = []) {
      o(w), ne();
    },
    get textForWinner() {
      return l();
    },
    set textForWinner(w = "elected") {
      l(w), ne();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return u();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      u(w), ne();
    },
    get firstRoundDeterminesPercentages() {
      return f();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      f(w), ne();
    },
    get randomizeOrder() {
      return d();
    },
    set randomizeOrder(w = !1) {
      d(w), ne();
    },
    get showCaptions() {
      return h();
    },
    set showCaptions(w = !1) {
      h(w), ne();
    }
  }, hn = pp(), Ct = gn(hn), dn = Be(Ct);
  {
    let w = /* @__PURE__ */ Sn(() => qe(i()));
    bl(dn, {
      get labels() {
        return $(w);
      },
      get currentStep() {
        return $(je);
      },
      disabled: !1,
      onAdvance: G
    });
  }
  Oe(Ct);
  var Wt = Ze(Ct, 4), vt = Be(Wt), En = Be(vt), Je = Be(En);
  pi(
    xl(Je, {
      get jsonData() {
        return $(I);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: fe,
      get requestSkipToRound() {
        return a();
      },
      get candidateColors() {
        return o();
      },
      get excludeFinalWinnerAndEliminatedCandidate() {
        return u();
      },
      get firstRoundDeterminesPercentages() {
        return f();
      },
      get randomizeOrder() {
        return d();
      },
      get mouseEventType() {
        return $(N);
      },
      set mouseEventType(w) {
        ve(N, w, !0);
      },
      get mouseData() {
        return $(M);
      },
      set mouseData(w) {
        ve(M, w, !0);
      },
      get mouseX() {
        return $(F);
      },
      set mouseX(w) {
        ve(F, w, !0);
      },
      get mouseY() {
        return $(W);
      },
      set mouseY(w) {
        ve(W, w, !0);
      },
      get displayPhase() {
        return $(je);
      },
      set displayPhase(w) {
        ve(je, w, !0);
      }
    }),
    (w) => te = w,
    () => te
  ), Oe(En), Oe(vt);
  var $r = Ze(vt, 2);
  {
    var Ar = (w) => {
      var Y = hp(), se = gn(Y), we = Be(se);
      Oe(se);
      var ye = Ze(se, 2), ue = Be(ye);
      {
        var Ve = (ze) => {
          var kt = up(), ot = Ze(gn(kt));
          di(ot, 17, () => ce(i()), hi, (_t, Mt, mt) => {
            var xe = lp(), De = gn(xe);
            let Ee;
            var Gt = Be(De, !0);
            Oe(De);
            var Zn = Ze(De, 2);
            {
              var Er = (oe) => {
                var Kt = _a(", ");
                We(oe, Kt);
              }, Qn = /* @__PURE__ */ Sn(() => mt < ce(i()).length - 1);
              tr(Zn, (oe) => {
                $(Qn) && oe(Er);
              });
            }
            Zt(
              (oe) => {
                Ee = xa(De, "", Ee, oe), _n(Gt, $(Mt));
              },
              [() => ({ color: St()[$(Mt)] })]
            ), We(_t, xe);
          }), We(ze, kt);
        }, Ut = /* @__PURE__ */ Sn(() => ce(i()).length > 0);
        tr(ue, (ze) => {
          $(Ut) && ze(Ve);
        });
      }
      var gt = Ze(ue, 2);
      {
        var Rn = (ze) => {
          var kt = cp(), ot = gn(kt), _t = Ze(ot);
          di(_t, 17, () => _e(i()), hi, (Mt, mt, xe) => {
            var De = fp(), Ee = gn(De);
            let Gt;
            var Zn = Be(Ee, !0);
            Oe(Ee);
            var Er = Ze(Ee, 2);
            {
              var Qn = (Kt) => {
                var ji = _a(", ");
                We(Kt, ji);
              }, oe = /* @__PURE__ */ Sn(() => xe < _e(i()).length - 1);
              tr(Er, (Kt) => {
                $(oe) && Kt(Qn);
              });
            }
            Zt(
              (Kt) => {
                Gt = xa(Ee, "", Gt, Kt), _n(Zn, $(mt));
              },
              [() => ({ color: St()[$(mt)] })]
            ), We(Mt, De);
          }), Zt(() => _n(ot, `${$(_).caption ?? ""}: `)), We(ze, kt);
        }, pn = /* @__PURE__ */ Sn(() => _e(i()).length > 0);
        tr(gt, (ze) => {
          $(pn) && ze(Rn);
        });
      }
      Oe(ye), Zt((ze) => _n(we, `${$(I).config.contest ?? ""}, ${ze ?? ""} ${$(_).infinitive ?? ""}, Round ${i() ?? ""}.`), [H]), We(w, Y);
    };
    tr($r, (w) => {
      h() && w(Ar);
    });
  }
  Oe(Wt);
  var Tn = Ze(Wt, 2), Jn = Be(Tn), Zr = Be(Jn, !0);
  Oe(Jn);
  var Gi = Ze(Jn, 2);
  di(Gi, 17, () => $(O), hi, (w, Y) => {
    var se = dp(), we = gn(se), ye = Be(we, !0);
    Oe(we), us(2), Zt(() => _n(ye, $(Y))), We(w, se);
  }), Oe(Tn), pi(Tn, (w) => ve(x, w), () => $(x));
  var Nt = Ze(Tn, 2), Ki = Be(Nt);
  return us(2), Oe(Nt), pi(Nt, (w) => ve(y, w), () => $(y)), Zt(
    (w) => {
      _n(Zr, $(b)), _n(Ki, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [Pe]
  ), We(e, hn), Vi(Z);
}
customElements.define("pie-chart", Ys(
  gp,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {},
    requestSkipToRound: {},
    candidateColors: {},
    textForWinner: {},
    excludeFinalWinnerAndEliminatedCandidate: {},
    firstRoundDeterminesPercentages: {},
    randomizeOrder: {},
    showCaptions: {}
  },
  [],
  [],
  { mode: "open" }
));
