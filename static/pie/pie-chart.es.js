var Vl = Object.defineProperty;
var la = (t) => {
  throw TypeError(t);
};
var zl = (t, e, n) => e in t ? Vl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var dt = (t, e, n) => zl(t, typeof e != "symbol" ? e + "" : e, n), ts = (t, e, n) => e.has(t) || la("Cannot " + n);
var v = (t, e, n) => (ts(t, e, "read from private field"), n ? n.call(t) : e.get(t)), B = (t, e, n) => e.has(t) ? la("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), z = (t, e, n, r) => (ts(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), $t = (t, e, n) => (ts(t, e, "access private method"), n);
var Ha;
typeof window < "u" && ((Ha = window.__svelte ?? (window.__svelte = {})).v ?? (Ha.v = /* @__PURE__ */ new Set())).add("5");
const Hl = 1, Yl = 2, Wa = 4, Bl = 8, Xl = 16, Wl = 1, Ul = 4, Gl = 8, Kl = 16, jl = 1, Jl = 2, Ns = "[", Fi = "[!", ks = "]", fr = {}, Rt = Symbol(), Ua = "http://www.w3.org/1999/xhtml", os = !1;
var Ga = Array.isArray, Zl = Array.prototype.indexOf, cr = Array.prototype.includes, Ii = Array.from, $i = Object.keys, Ai = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, Ql = Object.getOwnPropertyDescriptors, tu = Object.prototype, eu = Array.prototype, Ka = Object.getPrototypeOf, ua = Object.isExtensible;
const nu = () => {
};
function ru(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function ja() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
function iu(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const St = 2, Fr = 4, Li = 8, Ja = 1 << 24, hn = 16, Re = 32, En = 64, Za = 128, ge = 512, Et = 1024, Nt = 2048, Te = 4096, se = 8192, ln = 16384, yr = 32768, hr = 65536, fa = 1 << 17, Qa = 1 << 18, Jn = 1 << 19, su = 1 << 20, an = 1 << 25, Un = 65536, ls = 1 << 21, Ms = 1 << 22, wn = 1 << 23, Pr = Symbol("$state"), to = Symbol("legacy props"), au = Symbol(""), Mn = new class extends Error {
  constructor() {
    super(...arguments);
    dt(this, "name", "StaleReactionError");
    dt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ya;
const ou = ((Ya = globalThis.document) == null ? void 0 : /* @__PURE__ */ Ya.contentType.includes("xml")) ?? !1, Ur = 3, wr = 8;
function lu(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function uu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function fu(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function cu(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function hu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function du(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function pu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vu() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function gu(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function _u() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function mu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function wu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function qi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function xu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let j = !1;
function on(t) {
  j = t;
}
let W;
function qt(t) {
  if (t === null)
    throw qi(), fr;
  return W = t;
}
function Vi() {
  return qt(/* @__PURE__ */ Be(W));
}
function It(t) {
  if (j) {
    if (/* @__PURE__ */ Be(W) !== null)
      throw qi(), fr;
    W = t;
  }
}
function us(t = 1) {
  if (j) {
    for (var e = t, n = W; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Be(n);
    W = n;
  }
}
function Ei(t = !0) {
  for (var e = 0, n = W; ; ) {
    if (n.nodeType === wr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ks) {
        if (e === 0) return n;
        e -= 1;
      } else (r === Ns || r === Fi || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(n)
    );
    t && n.remove(), n = i;
  }
}
function eo(t) {
  if (!t || t.nodeType !== wr)
    throw qi(), fr;
  return (
    /** @type {Comment} */
    t.data
  );
}
function no(t) {
  return t === this.v;
}
function bu(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ro(t) {
  return !bu(t, this.v);
}
let $u = !1, oe = null;
function dr(t) {
  oe = t;
}
function zi(t, e = !1, n) {
  oe = {
    p: oe,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Hi(t) {
  var e = (
    /** @type {ComponentContext} */
    oe
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      So(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, oe = e.p, t ?? /** @type {T} */
  {};
}
function io() {
  return !0;
}
let Pn = [];
function so() {
  var t = Pn;
  Pn = [], ru(t);
}
function xn(t) {
  if (Pn.length === 0 && !Dr) {
    var e = Pn;
    queueMicrotask(() => {
      e === Pn && so();
    });
  }
  Pn.push(t);
}
function Au() {
  for (; Pn.length > 0; )
    so();
}
function ao(t) {
  var e = J;
  if (e === null)
    return X.f |= wn, t;
  if ((e.f & yr) === 0 && (e.f & Fr) === 0)
    throw t;
  pr(t, e);
}
function pr(t, e) {
  for (; e !== null; ) {
    if ((e.f & Za) !== 0) {
      if ((e.f & yr) === 0)
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
const Eu = -7169;
function vt(t, e) {
  t.f = t.f & Eu | e;
}
function Ps(t) {
  (t.f & ge) !== 0 || t.deps === null ? vt(t, Et) : vt(t, Te);
}
function oo(t) {
  if (t !== null)
    for (const e of t)
      (e.f & St) === 0 || (e.f & Un) === 0 || (e.f ^= Un, oo(
        /** @type {Derived} */
        e.deps
      ));
}
function lo(t, e, n) {
  (t.f & Nt) !== 0 ? e.add(t) : (t.f & Te) !== 0 && n.add(t), oo(t.deps), vt(t, Et);
}
const ri = /* @__PURE__ */ new Set();
let K = null, Ct = null, Gt = [], Yi = null, fs = !1, Dr = !1;
var rr, ir, In, sr, Hr, Yr, Ln, tn, ar, Ye, cs, hs, uo;
const Js = class Js {
  constructor() {
    B(this, Ye);
    dt(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    dt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    dt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    B(this, rr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    B(this, ir, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    B(this, In, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    B(this, sr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    B(this, Hr, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    B(this, Yr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    B(this, Ln, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    B(this, tn, /* @__PURE__ */ new Map());
    dt(this, "is_fork", !1);
    B(this, ar, !1);
  }
  is_deferred() {
    return this.is_fork || v(this, sr) > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, tn).has(e) || v(this, tn).set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var n = v(this, tn).get(e);
    if (n) {
      v(this, tn).delete(e);
      for (var r of n.d)
        vt(r, Nt), Ae(r);
      for (r of n.m)
        vt(r, Te), Ae(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    Gt = [], this.apply();
    var n = [], r = [];
    for (const s of e)
      $t(this, Ye, cs).call(this, s, n, r);
    if (this.is_deferred()) {
      $t(this, Ye, hs).call(this, r), $t(this, Ye, hs).call(this, n);
      for (const [s, a] of v(this, tn))
        po(s, a);
    } else {
      for (const s of v(this, rr)) s();
      v(this, rr).clear(), v(this, In) === 0 && $t(this, Ye, uo).call(this), K = null, ca(r), ca(n), (i = v(this, Hr)) == null || i.resolve();
    }
    Ct = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    n !== Rt && !this.previous.has(e) && this.previous.set(e, n), (e.f & wn) === 0 && (this.current.set(e, e.v), Ct == null || Ct.set(e, e.v));
  }
  activate() {
    K = this, this.apply();
  }
  deactivate() {
    K === this && (K = null, Ct = null);
  }
  flush() {
    if (this.activate(), Gt.length > 0) {
      if (fo(), K !== null && K !== this)
        return;
    } else v(this, In) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of v(this, ir)) e(this);
    v(this, ir).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    z(this, In, v(this, In) + 1), e && z(this, sr, v(this, sr) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    z(this, In, v(this, In) - 1), e && z(this, sr, v(this, sr) - 1), !v(this, ar) && (z(this, ar, !0), xn(() => {
      z(this, ar, !1), this.is_deferred() ? Gt.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of v(this, Yr))
      v(this, Ln).delete(e), vt(e, Nt), Ae(e);
    for (const e of v(this, Ln))
      vt(e, Te), Ae(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    v(this, rr).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    v(this, ir).add(e);
  }
  settled() {
    return (v(this, Hr) ?? z(this, Hr, ja())).promise;
  }
  static ensure() {
    if (K === null) {
      const e = K = new Js();
      ri.add(K), Dr || xn(() => {
        K === e && e.flush();
      });
    }
    return K;
  }
  apply() {
  }
};
rr = new WeakMap(), ir = new WeakMap(), In = new WeakMap(), sr = new WeakMap(), Hr = new WeakMap(), Yr = new WeakMap(), Ln = new WeakMap(), tn = new WeakMap(), ar = new WeakMap(), Ye = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
cs = function(e, n, r) {
  e.f ^= Et;
  for (var i = e.first, s = null; i !== null; ) {
    var a = i.f, o = (a & (Re | En)) !== 0, l = o && (a & Et) !== 0, u = l || (a & se) !== 0 || v(this, tn).has(i);
    if (!u && i.fn !== null) {
      o ? i.f ^= Et : s !== null && (a & (Fr | Li | Ja)) !== 0 ? s.b.defer_effect(i) : (a & Fr) !== 0 ? n.push(i) : Gr(i) && ((a & hn) !== 0 && v(this, Ln).add(i), gr(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    var p = i.parent;
    for (i = i.next; i === null && p !== null; )
      p === s && (s = null), i = p.next, p = p.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
hs = function(e) {
  for (var n = 0; n < e.length; n += 1)
    lo(e[n], v(this, Yr), v(this, Ln));
}, uo = function() {
  var i;
  if (ri.size > 1) {
    this.previous.clear();
    var e = Ct, n = !0;
    for (const s of ri) {
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
        var r = Gt;
        Gt = [];
        const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of a)
          co(f, o, l, u);
        if (Gt.length > 0) {
          K = s, s.apply();
          for (const f of Gt)
            $t(i = s, Ye, cs).call(i, f, [], []);
          s.deactivate();
        }
        Gt = r;
      }
    }
    K = null, Ct = e;
  }
  this.committed = !0, ri.delete(this);
};
let un = Js;
function rt(t) {
  var e = Dr;
  Dr = !0;
  try {
    for (var n; ; ) {
      if (Au(), Gt.length === 0 && (K == null || K.flush(), Gt.length === 0))
        return Yi = null, /** @type {T} */
        n;
      fo();
    }
  } finally {
    Dr = e;
  }
}
function fo() {
  fs = !0;
  var t = null;
  try {
    for (var e = 0; Gt.length > 0; ) {
      var n = un.ensure();
      if (e++ > 1e3) {
        var r, i;
        Tu();
      }
      n.process(Gt), bn.clear();
    }
  } finally {
    Gt = [], fs = !1, Yi = null;
  }
}
function Tu() {
  try {
    pu();
  } catch (t) {
    pr(t, Yi);
  }
}
let xe = null;
function ca(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (ln | se)) === 0 && Gr(r) && (xe = /* @__PURE__ */ new Set(), gr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Mo(r), (xe == null ? void 0 : xe.size) > 0)) {
        bn.clear();
        for (const i of xe) {
          if ((i.f & (ln | se)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            xe.has(a) && (xe.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (ln | se)) === 0 && gr(l);
          }
        }
        xe.clear();
      }
    }
    xe = null;
  }
}
function co(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & St) !== 0 ? co(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (Ms | hn)) !== 0 && (s & Nt) === 0 && ho(i, e, r) && (vt(i, Nt), Ae(
        /** @type {Effect} */
        i
      ));
    }
}
function ho(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (cr.call(e, i))
        return !0;
      if ((i.f & St) !== 0 && ho(
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
function Ae(t) {
  for (var e = Yi = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (fs && e === J && (n & hn) !== 0 && (n & Qa) === 0)
      return;
    if ((n & (En | Re)) !== 0) {
      if ((n & Et) === 0) return;
      e.f ^= Et;
    }
  }
  Gt.push(e);
}
function po(t, e) {
  if (!((t.f & Re) !== 0 && (t.f & Et) !== 0)) {
    (t.f & Nt) !== 0 ? e.d.push(t) : (t.f & Te) !== 0 && e.m.push(t), vt(t, Et);
    for (var n = t.first; n !== null; )
      po(n, e), n = n.next;
  }
}
function Ru(t) {
  let e = 0, n = Gn(0), r;
  return () => {
    Fs() && (x(n), Ls(() => (e === 0 && (r = Wi(() => t(() => Or(n)))), e += 1, () => {
      xn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Or(n));
      });
    })));
  };
}
var Cu = hr | Jn | Za;
function Su(t, e, n) {
  new Nu(t, e, n);
}
var re, Br, Fe, qn, Ie, de, Wt, Le, en, yn, Vn, nn, or, zn, lr, ur, rn, Di, gt, vo, go, ds, ci, hi, ps;
class Nu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    B(this, gt);
    /** @type {Boundary | null} */
    dt(this, "parent");
    dt(this, "is_pending", !1);
    /** @type {TemplateNode} */
    B(this, re);
    /** @type {TemplateNode | null} */
    B(this, Br, j ? W : null);
    /** @type {BoundaryProps} */
    B(this, Fe);
    /** @type {((anchor: Node) => void)} */
    B(this, qn);
    /** @type {Effect} */
    B(this, Ie);
    /** @type {Effect | null} */
    B(this, de, null);
    /** @type {Effect | null} */
    B(this, Wt, null);
    /** @type {Effect | null} */
    B(this, Le, null);
    /** @type {DocumentFragment | null} */
    B(this, en, null);
    /** @type {TemplateNode | null} */
    B(this, yn, null);
    B(this, Vn, 0);
    B(this, nn, 0);
    B(this, or, !1);
    B(this, zn, !1);
    /** @type {Set<Effect>} */
    B(this, lr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    B(this, ur, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    B(this, rn, null);
    B(this, Di, Ru(() => (z(this, rn, Gn(v(this, Vn))), () => {
      z(this, rn, null);
    })));
    z(this, re, e), z(this, Fe, n), z(this, qn, r), this.parent = /** @type {Effect} */
    J.b, this.is_pending = !!v(this, Fe).pending, z(this, Ie, qs(() => {
      if (J.b = this, j) {
        const s = v(this, Br);
        Vi(), /** @type {Comment} */
        s.nodeType === wr && /** @type {Comment} */
        s.data === Fi ? $t(this, gt, go).call(this) : ($t(this, gt, vo).call(this), v(this, nn) === 0 && (this.is_pending = !1));
      } else {
        var i = $t(this, gt, ds).call(this);
        try {
          z(this, de, ve(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        v(this, nn) > 0 ? $t(this, gt, hi).call(this) : this.is_pending = !1;
      }
      return () => {
        var s;
        (s = v(this, yn)) == null || s.remove();
      };
    }, Cu)), j && z(this, re, W);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    lo(e, v(this, lr), v(this, ur));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, Fe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    $t(this, gt, ps).call(this, e), z(this, Vn, v(this, Vn) + e), !(!v(this, rn) || v(this, or)) && (z(this, or, !0), xn(() => {
      z(this, or, !1), v(this, rn) && vr(v(this, rn), v(this, Vn));
    }));
  }
  get_effect_pending() {
    return v(this, Di).call(this), x(
      /** @type {Source<number>} */
      v(this, rn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = v(this, Fe).onerror;
    let r = v(this, Fe).failed;
    if (v(this, zn) || !n && !r)
      throw e;
    v(this, de) && (Vt(v(this, de)), z(this, de, null)), v(this, Wt) && (Vt(v(this, Wt)), z(this, Wt, null)), v(this, Le) && (Vt(v(this, Le)), z(this, Le, null)), j && (qt(
      /** @type {TemplateNode} */
      v(this, Br)
    ), us(), qt(Ei()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        xu();
        return;
      }
      i = !0, s && wu(), un.ensure(), z(this, Vn, 0), v(this, Le) !== null && Bn(v(this, Le), () => {
        z(this, Le, null);
      }), this.is_pending = this.has_pending_snippet(), z(this, de, $t(this, gt, ci).call(this, () => (z(this, zn, !1), ve(() => v(this, qn).call(this, v(this, re)))))), v(this, nn) > 0 ? $t(this, gt, hi).call(this) : this.is_pending = !1;
    };
    xn(() => {
      try {
        s = !0, n == null || n(e, a), s = !1;
      } catch (o) {
        pr(o, v(this, Ie) && v(this, Ie).parent);
      }
      r && z(this, Le, $t(this, gt, ci).call(this, () => {
        un.ensure(), z(this, zn, !0);
        try {
          return ve(() => {
            r(
              v(this, re),
              () => e,
              () => a
            );
          });
        } catch (o) {
          return pr(
            o,
            /** @type {Effect} */
            v(this, Ie).parent
          ), null;
        } finally {
          z(this, zn, !1);
        }
      }));
    });
  }
}
re = new WeakMap(), Br = new WeakMap(), Fe = new WeakMap(), qn = new WeakMap(), Ie = new WeakMap(), de = new WeakMap(), Wt = new WeakMap(), Le = new WeakMap(), en = new WeakMap(), yn = new WeakMap(), Vn = new WeakMap(), nn = new WeakMap(), or = new WeakMap(), zn = new WeakMap(), lr = new WeakMap(), ur = new WeakMap(), rn = new WeakMap(), Di = new WeakMap(), gt = new WeakSet(), vo = function() {
  try {
    z(this, de, ve(() => v(this, qn).call(this, v(this, re))));
  } catch (e) {
    this.error(e);
  }
}, go = function() {
  const e = v(this, Fe).pending;
  e && (z(this, Wt, ve(() => e(v(this, re)))), xn(() => {
    var n = $t(this, gt, ds).call(this);
    z(this, de, $t(this, gt, ci).call(this, () => (un.ensure(), ve(() => v(this, qn).call(this, n))))), v(this, nn) > 0 ? $t(this, gt, hi).call(this) : (Bn(
      /** @type {Effect} */
      v(this, Wt),
      () => {
        z(this, Wt, null);
      }
    ), this.is_pending = !1);
  }));
}, ds = function() {
  var e = v(this, re);
  return this.is_pending && (z(this, yn, ae()), v(this, re).before(v(this, yn)), e = v(this, yn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ci = function(e) {
  var n = J, r = X, i = oe;
  He(v(this, Ie)), me(v(this, Ie)), dr(v(this, Ie).ctx);
  try {
    return e();
  } catch (s) {
    return ao(s), null;
  } finally {
    He(n), me(r), dr(i);
  }
}, hi = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    v(this, Fe).pending
  );
  v(this, de) !== null && (z(this, en, document.createDocumentFragment()), v(this, en).append(
    /** @type {TemplateNode} */
    v(this, yn)
  ), Oo(v(this, de), v(this, en))), v(this, Wt) === null && z(this, Wt, ve(() => e(v(this, re))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ps = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && $t(n = this.parent, gt, ps).call(n, e);
    return;
  }
  if (z(this, nn, v(this, nn) + e), v(this, nn) === 0) {
    this.is_pending = !1;
    for (const r of v(this, lr))
      vt(r, Nt), Ae(r);
    for (const r of v(this, ur))
      vt(r, Te), Ae(r);
    v(this, lr).clear(), v(this, ur).clear(), v(this, Wt) && Bn(v(this, Wt), () => {
      z(this, Wt, null);
    }), v(this, en) && (v(this, re).before(v(this, en)), z(this, en, null));
  }
};
function ku(t, e, n, r) {
  const i = Bi;
  var s = t.filter((h) => !h.settled);
  if (n.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var a = K, o = (
    /** @type {Effect} */
    J
  ), l = Mu(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    l();
    try {
      r(h);
    } catch (d) {
      (o.f & ln) === 0 && pr(d, o);
    }
    a == null || a.deactivate(), vs();
  }
  if (n.length === 0) {
    u.then(() => f(e.map(i)));
    return;
  }
  function p() {
    l(), Promise.all(n.map((h) => /* @__PURE__ */ Pu(h))).then((h) => f([...e.map(i), ...h])).catch((h) => pr(h, o));
  }
  u ? u.then(p) : p();
}
function Mu() {
  var t = J, e = X, n = oe, r = K;
  return function(s = !0) {
    He(t), me(e), dr(n), s && (r == null || r.activate());
  };
}
function vs() {
  He(null), me(null), dr(null);
}
// @__NO_SIDE_EFFECTS__
function Bi(t) {
  var e = St | Nt, n = X !== null && (X.f & St) !== 0 ? (
    /** @type {Derived} */
    X
  ) : null;
  return J !== null && (J.f |= Jn), {
    ctx: oe,
    deps: null,
    effects: null,
    equals: no,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Rt
    ),
    wv: 0,
    parent: n ?? J,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Pu(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    J
  );
  r === null && uu();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Gn(
    /** @type {V} */
    Rt
  ), o = !X, l = /* @__PURE__ */ new Map();
  return Yu(() => {
    var d;
    var u = ja();
    s = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(() => {
        f === K && f.committed && f.deactivate(), vs();
      });
    } catch (y) {
      u.reject(y), vs();
    }
    var f = (
      /** @type {Batch} */
      K
    );
    if (o) {
      var p = i.is_rendered();
      i.update_pending_count(1), f.increment(p), (d = l.get(f)) == null || d.reject(Mn), l.delete(f), l.set(f, u);
    }
    const h = (y, b = void 0) => {
      if (f.activate(), b)
        b !== Mn && (a.f |= wn, vr(a, b));
      else {
        (a.f & wn) !== 0 && (a.f ^= wn), vr(a, y);
        for (const [m, $] of l) {
          if (l.delete(m), m === f) break;
          $.reject(Mn);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(p));
    };
    u.promise.then(h, (y) => h(null, y || "unknown"));
  }), Vu(() => {
    for (const u of l.values())
      u.reject(Mn);
  }), new Promise((u) => {
    function f(p) {
      function h() {
        p === s ? u(a) : f(s);
      }
      p.then(h, h);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function vn(t) {
  const e = /* @__PURE__ */ Bi(t);
  return Fo(e), e;
}
// @__NO_SIDE_EFFECTS__
function _o(t) {
  const e = /* @__PURE__ */ Bi(t);
  return e.equals = ro, e;
}
function Du(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Vt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ou(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & St) === 0)
      return (e.f & ln) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Ds(t) {
  var e, n = J;
  He(Ou(t));
  try {
    t.f &= ~Un, Du(t), e = Vo(t);
  } finally {
    He(n);
  }
  return e;
}
function mo(t) {
  var e = Ds(t);
  if (!t.equals(e) && (t.wv = Lo(), (!(K != null && K.is_fork) || t.deps === null) && (t.v = e, t.deps === null))) {
    vt(t, Et);
    return;
  }
  An || (Ct !== null ? (Fs() || K != null && K.is_fork) && Ct.set(t, e) : Ps(t));
}
function Fu(t) {
  var e, n;
  if (t.effects !== null)
    for (const r of t.effects)
      (r.teardown || r.ac) && ((e = r.teardown) == null || e.call(r), (n = r.ac) == null || n.abort(Mn), r.teardown = nu, r.ac = null, Ir(r, 0), Vs(r));
}
function yo(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && gr(e);
}
let gs = /* @__PURE__ */ new Set();
const bn = /* @__PURE__ */ new Map();
let wo = !1;
function Gn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: no,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function At(t, e) {
  const n = Gn(t);
  return Fo(n), n;
}
// @__NO_SIDE_EFFECTS__
function xo(t, e = !1, n = !0) {
  const r = Gn(t);
  return e || (r.equals = ro), r;
}
function pt(t, e, n = !1) {
  X !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ee || (X.f & fa) !== 0) && io() && (X.f & (St | hn | Ms | fa)) !== 0 && (_e === null || !cr.call(_e, t)) && yu();
  let r = n ? Dn(e) : e;
  return vr(t, r);
}
function vr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    An ? bn.set(t, e) : bn.set(t, n), t.v = e;
    var r = un.ensure();
    if (r.capture(t, n), (t.f & St) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & Nt) !== 0 && Ds(i), Ps(i);
    }
    t.wv = Lo(), bo(t, Nt), J !== null && (J.f & Et) !== 0 && (J.f & (Re | En)) === 0 && (he === null ? Wu([t]) : he.push(t)), !r.is_fork && gs.size > 0 && !wo && Iu();
  }
  return e;
}
function Iu() {
  wo = !1;
  for (const t of gs)
    (t.f & Et) !== 0 && vt(t, Te), Gr(t) && gr(t);
  gs.clear();
}
function Or(t) {
  pt(t, t.v + 1);
}
function bo(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & Nt) === 0;
      if (o && vt(s, e), (a & St) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        Ct == null || Ct.delete(l), (a & Un) === 0 && (a & ge && (s.f |= Un), bo(l, Te));
      } else o && ((a & hn) !== 0 && xe !== null && xe.add(
        /** @type {Effect} */
        s
      ), Ae(
        /** @type {Effect} */
        s
      ));
    }
}
function Dn(t) {
  if (typeof t != "object" || t === null || Pr in t)
    return t;
  const e = Ka(t);
  if (e !== tu && e !== eu)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ga(t), i = /* @__PURE__ */ At(0), s = Xn, a = (o) => {
    if (Xn === s)
      return o();
    var l = X, u = Xn;
    me(null), pa(s);
    var f = o();
    return me(l), pa(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ At(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && _u();
        var f = n.get(l);
        return f === void 0 ? a(() => {
          var p = /* @__PURE__ */ At(u.value);
          return n.set(l, p), p;
        }) : pt(f, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const f = a(() => /* @__PURE__ */ At(Rt));
            n.set(l, f), Or(i);
          }
        } else
          pt(u, Rt), Or(i);
        return !0;
      },
      get(o, l, u) {
        var d;
        if (l === Pr)
          return t;
        var f = n.get(l), p = l in o;
        if (f === void 0 && (!p || (d = Yn(o, l)) != null && d.writable) && (f = a(() => {
          var y = Dn(p ? o[l] : Rt), b = /* @__PURE__ */ At(y);
          return b;
        }), n.set(l, f)), f !== void 0) {
          var h = x(f);
          return h === Rt ? void 0 : h;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var f = n.get(l);
          f && (u.value = x(f));
        } else if (u === void 0) {
          var p = n.get(l), h = p == null ? void 0 : p.v;
          if (p !== void 0 && h !== Rt)
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
        if (l === Pr)
          return !0;
        var u = n.get(l), f = u !== void 0 && u.v !== Rt || Reflect.has(o, l);
        if (u !== void 0 || J !== null && (!f || (h = Yn(o, l)) != null && h.writable)) {
          u === void 0 && (u = a(() => {
            var d = f ? Dn(o[l]) : Rt, y = /* @__PURE__ */ At(d);
            return y;
          }), n.set(l, u));
          var p = x(u);
          if (p === Rt)
            return !1;
        }
        return f;
      },
      set(o, l, u, f) {
        var M;
        var p = n.get(l), h = l in o;
        if (r && l === "length")
          for (var d = u; d < /** @type {Source<number>} */
          p.v; d += 1) {
            var y = n.get(d + "");
            y !== void 0 ? pt(y, Rt) : d in o && (y = a(() => /* @__PURE__ */ At(Rt)), n.set(d + "", y));
          }
        if (p === void 0)
          (!h || (M = Yn(o, l)) != null && M.writable) && (p = a(() => /* @__PURE__ */ At(void 0)), pt(p, Dn(u)), n.set(l, p));
        else {
          h = p.v !== Rt;
          var b = a(() => Dn(u));
          pt(p, b);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if (m != null && m.set && m.set.call(f, u), !h) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(l);
            Number.isInteger(D) && D >= $.v && pt($, D + 1);
          }
          Or(i);
        }
        return !0;
      },
      ownKeys(o) {
        x(i);
        var l = Reflect.ownKeys(o).filter((p) => {
          var h = n.get(p);
          return h === void 0 || h.v !== Rt;
        });
        for (var [u, f] of n)
          f.v !== Rt && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        mu();
      }
    }
  );
}
var ha, $o, Ao, Eo;
function _s() {
  if (ha === void 0) {
    ha = window, $o = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Ao = Yn(e, "firstChild").get, Eo = Yn(e, "nextSibling").get, ua(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ua(n) && (n.__t = void 0);
  }
}
function ae(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function fn(t) {
  return (
    /** @type {TemplateNode | null} */
    Ao.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Be(t) {
  return (
    /** @type {TemplateNode | null} */
    Eo.call(t)
  );
}
function Xt(t, e) {
  if (!j)
    return /* @__PURE__ */ fn(t);
  var n = /* @__PURE__ */ fn(W);
  if (n === null)
    n = W.appendChild(ae());
  else if (e && n.nodeType !== Ur) {
    var r = ae();
    return n == null || n.before(r), qt(r), r;
  }
  return e && Xi(
    /** @type {Text} */
    n
  ), qt(n), n;
}
function _n(t, e = !1) {
  if (!j) {
    var n = /* @__PURE__ */ fn(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Be(n) : n;
  }
  if (e) {
    if ((W == null ? void 0 : W.nodeType) !== Ur) {
      var r = ae();
      return W == null || W.before(r), qt(r), r;
    }
    Xi(
      /** @type {Text} */
      W
    );
  }
  return W;
}
function ee(t, e = 1, n = !1) {
  let r = j ? W : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(r);
  if (!j)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Ur) {
      var s = ae();
      return r === null ? i == null || i.after(s) : r.before(s), qt(s), s;
    }
    Xi(
      /** @type {Text} */
      r
    );
  }
  return qt(r), r;
}
function To(t) {
  t.textContent = "";
}
function Ro() {
  return !1;
}
function Os(t, e, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ua, t, void 0)
  );
}
function Xi(t) {
  if (
    /** @type {string} */
    t.nodeValue.length < 65536
  )
    return;
  let e = t.nextSibling;
  for (; e !== null && e.nodeType === Ur; )
    e.remove(), t.nodeValue += /** @type {string} */
    e.nodeValue, e = t.nextSibling;
}
function Co(t) {
  var e = X, n = J;
  me(null), He(null);
  try {
    return t();
  } finally {
    me(e), He(n);
  }
}
function Lu(t) {
  J === null && (X === null && du(), hu()), An && cu();
}
function qu(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Xe(t, e, n) {
  var r = J;
  r !== null && (r.f & se) !== 0 && (t |= se);
  var i = {
    ctx: oe,
    deps: null,
    nodes: null,
    f: t | Nt | ge,
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
      gr(i);
    } catch (o) {
      throw Vt(i), o;
    }
  else e !== null && Ae(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Jn) === 0 && (s = s.first, (t & hn) !== 0 && (t & hr) !== 0 && s !== null && (s.f |= hr)), s !== null && (s.parent = r, r !== null && qu(s, r), X !== null && (X.f & St) !== 0 && (t & En) === 0)) {
    var a = (
      /** @type {Derived} */
      X
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function Fs() {
  return X !== null && !Ee;
}
function Vu(t) {
  const e = Xe(Li, null, !1);
  return vt(e, Et), e.teardown = t, e;
}
function Is(t) {
  Lu();
  var e = (
    /** @type {Effect} */
    J.f
  ), n = !X && (e & Re) !== 0 && (e & yr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      oe
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return So(t);
}
function So(t) {
  return Xe(Fr | su, t, !1);
}
function zu(t) {
  un.ensure();
  const e = Xe(En | Jn, t, !0);
  return () => {
    Vt(e);
  };
}
function Hu(t) {
  un.ensure();
  const e = Xe(En | Jn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Bn(e, () => {
      Vt(e), r(void 0);
    }) : (Vt(e), r(void 0));
  });
}
function No(t) {
  return Xe(Fr, t, !1);
}
function Yu(t) {
  return Xe(Ms | Jn, t, !0);
}
function Ls(t, e = 0) {
  return Xe(Li | e, t, !0);
}
function Qe(t, e = [], n = [], r = []) {
  ku(r, e, n, (i) => {
    Xe(Li, () => t(...i.map(x)), !0);
  });
}
function qs(t, e = 0) {
  var n = Xe(hn | e, t, !0);
  return n;
}
function ve(t) {
  return Xe(Re | Jn, t, !0);
}
function ko(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = An, r = X;
    da(!0), me(null);
    try {
      e.call(null);
    } finally {
      da(n), me(r);
    }
  }
}
function Vs(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Co(() => {
      i.abort(Mn);
    });
    var r = n.next;
    (n.f & En) !== 0 ? n.parent = null : Vt(n, e), n = r;
  }
}
function Bu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & Re) === 0 && Vt(e), e = n;
  }
}
function Vt(t, e = !0) {
  var n = !1;
  (e || (t.f & Qa) !== 0) && t.nodes !== null && t.nodes.end !== null && (Xu(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), Vs(t, e && !n), Ir(t, 0), vt(t, ln);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  ko(t);
  var i = t.parent;
  i !== null && i.first !== null && Mo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function Xu(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Be(t);
    t.remove(), t = n;
  }
}
function Mo(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Bn(t, e, n = !0) {
  var r = [];
  Po(t, r, !0);
  var i = () => {
    n && Vt(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function Po(t, e, n) {
  if ((t.f & se) === 0) {
    t.f ^= se;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & hr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Re) !== 0 && (t.f & hn) !== 0;
      Po(i, e, a ? n : !1), i = s;
    }
  }
}
function zs(t) {
  Do(t, !0);
}
function Do(t, e) {
  if ((t.f & se) !== 0) {
    t.f ^= se, (t.f & Et) === 0 && (vt(t, Nt), Ae(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & hr) !== 0 || (n.f & Re) !== 0;
      Do(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function Oo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Be(n);
      e.append(n), n = i;
    }
}
let di = !1, An = !1;
function da(t) {
  An = t;
}
let X = null, Ee = !1;
function me(t) {
  X = t;
}
let J = null;
function He(t) {
  J = t;
}
let _e = null;
function Fo(t) {
  X !== null && (_e === null ? _e = [t] : _e.push(t));
}
let Kt = null, ne = 0, he = null;
function Wu(t) {
  he = t;
}
let Io = 1, On = 0, Xn = On;
function pa(t) {
  Xn = t;
}
function Lo() {
  return ++Io;
}
function Gr(t) {
  var e = t.f;
  if ((e & Nt) !== 0)
    return !0;
  if (e & St && (t.f &= ~Un), (e & Te) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Gr(
        /** @type {Derived} */
        s
      ) && mo(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & ge) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ct === null && vt(t, Et);
  }
  return !1;
}
function qo(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(_e !== null && cr.call(_e, t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & St) !== 0 ? qo(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? vt(s, Nt) : (s.f & Et) !== 0 && vt(s, Te), Ae(
        /** @type {Effect} */
        s
      ));
    }
}
function Vo(t) {
  var b;
  var e = Kt, n = ne, r = he, i = X, s = _e, a = oe, o = Ee, l = Xn, u = t.f;
  Kt = /** @type {null | Value[]} */
  null, ne = 0, he = null, X = (u & (Re | En)) === 0 ? t : null, _e = null, dr(t.ctx), Ee = !1, Xn = ++On, t.ac !== null && (Co(() => {
    t.ac.abort(Mn);
  }), t.ac = null);
  try {
    t.f |= ls;
    var f = (
      /** @type {Function} */
      t.fn
    ), p = f();
    t.f |= yr;
    var h = t.deps, d = K == null ? void 0 : K.is_fork;
    if (Kt !== null) {
      var y;
      if (d || Ir(t, ne), h !== null && ne > 0)
        for (h.length = ne + Kt.length, y = 0; y < Kt.length; y++)
          h[ne + y] = Kt[y];
      else
        t.deps = h = Kt;
      if (Fs() && (t.f & ge) !== 0)
        for (y = ne; y < h.length; y++)
          ((b = h[y]).reactions ?? (b.reactions = [])).push(t);
    } else !d && h !== null && ne < h.length && (Ir(t, ne), h.length = ne);
    if (io() && he !== null && !Ee && h !== null && (t.f & (St | Te | Nt)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      he.length; y++)
        qo(
          he[y],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (On++, i.deps !== null)
        for (let m = 0; m < n; m += 1)
          i.deps[m].rv = On;
      if (e !== null)
        for (const m of e)
          m.rv = On;
      he !== null && (r === null ? r = he : r.push(.../** @type {Source[]} */
      he));
    }
    return (t.f & wn) !== 0 && (t.f ^= wn), p;
  } catch (m) {
    return ao(m);
  } finally {
    t.f ^= ls, Kt = e, ne = n, he = r, X = i, _e = s, dr(a), Ee = o, Xn = l;
  }
}
function Uu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Zl.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (e.f & St) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Kt === null || !cr.call(Kt, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & ge) !== 0 && (s.f ^= ge, s.f &= ~Un), Ps(s), Fu(s), Ir(s, 0);
  }
}
function Ir(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Uu(t, n[r]);
}
function gr(t) {
  var e = t.f;
  if ((e & ln) === 0) {
    vt(t, Et);
    var n = J, r = di;
    J = t, di = !0;
    try {
      (e & (hn | Ja)) !== 0 ? Bu(t) : Vs(t), ko(t);
      var i = Vo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Io;
      var s;
      os && $u && (t.f & Nt) !== 0 && t.deps;
    } finally {
      di = r, J = n;
    }
  }
}
function x(t) {
  var e = t.f, n = (e & St) !== 0;
  if (X !== null && !Ee) {
    var r = J !== null && (J.f & ln) !== 0;
    if (!r && (_e === null || !cr.call(_e, t))) {
      var i = X.deps;
      if ((X.f & ls) !== 0)
        t.rv < On && (t.rv = On, Kt === null && i !== null && i[ne] === t ? ne++ : Kt === null ? Kt = [t] : Kt.push(t));
      else {
        (X.deps ?? (X.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [X] : cr.call(s, X) || s.push(X);
      }
    }
  }
  if (An && bn.has(t))
    return bn.get(t);
  if (n) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (An) {
      var o = a.v;
      return ((a.f & Et) === 0 && a.reactions !== null || Ho(a)) && (o = Ds(a)), bn.set(a, o), o;
    }
    var l = (a.f & ge) === 0 && !Ee && X !== null && (di || (X.f & ge) !== 0), u = (a.f & yr) === 0;
    Gr(a) && (l && (a.f |= ge), mo(a)), l && !u && (yo(a), zo(a));
  }
  if (Ct != null && Ct.has(t))
    return Ct.get(t);
  if ((t.f & wn) !== 0)
    throw t.v;
  return t.v;
}
function zo(t) {
  if (t.f |= ge, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & St) !== 0 && (e.f & ge) === 0 && (yo(
        /** @type {Derived} */
        e
      ), zo(
        /** @type {Derived} */
        e
      ));
}
function Ho(t) {
  if (t.v === Rt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (bn.has(e) || (e.f & St) !== 0 && Ho(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Wi(t) {
  var e = Ee;
  try {
    return Ee = !0, t();
  } finally {
    Ee = e;
  }
}
const Yo = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function Gu(t) {
  for (var e = 0; e < t.length; e++)
    Yo.add(t[e]);
  for (var n of ms)
    n(t);
}
let va = null;
function ga(t) {
  var m;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((m = t.composedPath) == null ? void 0 : m.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  va = t;
  var a = 0, o = va === t && t.__root;
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
    Ai(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var f = X, p = J;
    me(null), He(null);
    try {
      for (var h, d = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var b = s["__" + r];
          b != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && b.call(s, t);
        } catch ($) {
          h ? d.push($) : h = $;
        }
        if (t.cancelBubble || y === e || y === null)
          break;
        s = y;
      }
      if (h) {
        for (let $ of d)
          queueMicrotask(() => {
            throw $;
          });
        throw h;
      }
    } finally {
      t.__root = e, delete t.currentTarget, me(f), He(p);
    }
  }
}
var Ba, Xa;
const es = (Xa = (Ba = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ba.trustedTypes) == null ? void 0 : /* @__PURE__ */ Xa.createPolicy(
  "svelte-trusted-html",
  {
    /** @param {string} html */
    createHTML: (t) => t
  }
);
function Ku(t) {
  return (
    /** @type {string} */
    (es == null ? void 0 : es.createHTML(t)) ?? t
  );
}
function Bo(t, e = !1) {
  var n = Os("template");
  return t = t.replaceAll("<!>", "<!---->"), n.innerHTML = e ? Ku(t) : t, n.content;
}
function $n(t, e) {
  var n = (
    /** @type {Effect} */
    J
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function We(t, e) {
  var n = (e & jl) !== 0, r = (e & Jl) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (j)
      return $n(W, null), W;
    i === void 0 && (i = Bo(s ? t : "<!>" + t, !0), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ fn(i)));
    var a = (
      /** @type {TemplateNode} */
      r || $o ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fn(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      $n(o, l);
    } else
      $n(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function ju(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (j)
      return $n(W, null), W;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Bo(i, !0)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ fn(a)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ fn(o);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return $n(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ju(t, e) {
  return /* @__PURE__ */ ju(t, e, "svg");
}
function _a(t = "") {
  if (!j) {
    var e = ae(t + "");
    return $n(e, e), e;
  }
  var n = W;
  return n.nodeType !== Ur ? (n.before(n = ae()), qt(n)) : Xi(
    /** @type {Text} */
    n
  ), $n(n, n), n;
}
function Ut(t, e) {
  if (j) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      J
    );
    ((n.f & yr) === 0 || n.nodes.end === null) && (n.nodes.end = W), Vi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Zu = ["touchstart", "touchmove"];
function Qu(t) {
  return Zu.includes(t);
}
function mn(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Xo(t, e) {
  return Wo(t, e);
}
function tf(t, e) {
  _s(), e.intro = e.intro ?? !1;
  const n = e.target, r = j, i = W;
  try {
    for (var s = /* @__PURE__ */ fn(n); s && (s.nodeType !== wr || /** @type {Comment} */
    s.data !== Ns); )
      s = /* @__PURE__ */ Be(s);
    if (!s)
      throw fr;
    on(!0), qt(
      /** @type {Comment} */
      s
    );
    const a = Wo(t, { ...e, anchor: s });
    return on(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== fr && console.warn("Failed to hydrate: ", a), e.recover === !1 && vu(), _s(), To(n), on(!1), Xo(t, e);
  } finally {
    on(r), qt(i);
  }
}
const ii = /* @__PURE__ */ new Map();
function Wo(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  _s();
  var o = /* @__PURE__ */ new Set(), l = (p) => {
    for (var h = 0; h < p.length; h++) {
      var d = p[h];
      if (!o.has(d)) {
        o.add(d);
        var y = Qu(d);
        for (const $ of [e, document]) {
          var b = ii.get($);
          b === void 0 && (b = /* @__PURE__ */ new Map(), ii.set($, b));
          var m = b.get(d);
          m === void 0 ? ($.addEventListener(d, ga, { passive: y }), b.set(d, 1)) : b.set(d, m + 1);
        }
      }
    }
  };
  l(Ii(Yo)), ms.add(l);
  var u = void 0, f = Hu(() => {
    var p = n ?? e.appendChild(ae());
    return Su(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (h) => {
        zi({});
        var d = (
          /** @type {ComponentContext} */
          oe
        );
        if (s && (d.c = s), i && (r.$$events = i), j && $n(
          /** @type {TemplateNode} */
          h,
          null
        ), u = t(h, r) || {}, j && (J.nodes.end = W, W === null || W.nodeType !== wr || /** @type {Comment} */
        W.data !== ks))
          throw qi(), fr;
        Hi();
      }
    ), () => {
      var b;
      for (var h of o)
        for (const m of [e, document]) {
          var d = (
            /** @type {Map<string, number>} */
            ii.get(m)
          ), y = (
            /** @type {number} */
            d.get(h)
          );
          --y == 0 ? (m.removeEventListener(h, ga), d.delete(h), d.size === 0 && ii.delete(m)) : d.set(h, y);
        }
      ms.delete(l), p !== n && ((b = p.parentNode) == null || b.removeChild(p));
    };
  });
  return ys.set(u, f), u;
}
let ys = /* @__PURE__ */ new WeakMap();
function ef(t, e) {
  const n = ys.get(t);
  return n ? (ys.delete(t), n(e)) : Promise.resolve();
}
var be, qe, ie, Hn, Xr, Wr, Oi;
class nf {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    dt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    B(this, be, /* @__PURE__ */ new Map());
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
    B(this, qe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    B(this, ie, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    B(this, Hn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    B(this, Xr, !0);
    B(this, Wr, () => {
      var e = (
        /** @type {Batch} */
        K
      );
      if (v(this, be).has(e)) {
        var n = (
          /** @type {Key} */
          v(this, be).get(e)
        ), r = v(this, qe).get(n);
        if (r)
          zs(r), v(this, Hn).delete(n);
        else {
          var i = v(this, ie).get(n);
          i && (v(this, qe).set(n, i.effect), v(this, ie).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of v(this, be)) {
          if (v(this, be).delete(s), s === e)
            break;
          const o = v(this, ie).get(a);
          o && (Vt(o.effect), v(this, ie).delete(a));
        }
        for (const [s, a] of v(this, qe)) {
          if (s === n || v(this, Hn).has(s)) continue;
          const o = () => {
            if (Array.from(v(this, be).values()).includes(s)) {
              var u = document.createDocumentFragment();
              Oo(a, u), u.append(ae()), v(this, ie).set(s, { effect: a, fragment: u });
            } else
              Vt(a);
            v(this, Hn).delete(s), v(this, qe).delete(s);
          };
          v(this, Xr) || !r ? (v(this, Hn).add(s), Bn(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    B(this, Oi, (e) => {
      v(this, be).delete(e);
      const n = Array.from(v(this, be).values());
      for (const [r, i] of v(this, ie))
        n.includes(r) || (Vt(i.effect), v(this, ie).delete(r));
    });
    this.anchor = e, z(this, Xr, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      K
    ), i = Ro();
    if (n && !v(this, qe).has(e) && !v(this, ie).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = ae();
        s.append(a), v(this, ie).set(e, {
          effect: ve(() => n(a)),
          fragment: s
        });
      } else
        v(this, qe).set(
          e,
          ve(() => n(this.anchor))
        );
    if (v(this, be).set(r, e), i) {
      for (const [o, l] of v(this, qe))
        o === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of v(this, ie))
        o === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, Wr)), r.ondiscard(v(this, Oi));
    } else
      j && (this.anchor = W), v(this, Wr).call(this);
  }
}
be = new WeakMap(), qe = new WeakMap(), ie = new WeakMap(), Hn = new WeakMap(), Xr = new WeakMap(), Wr = new WeakMap(), Oi = new WeakMap();
function rf(t) {
  oe === null && lu(), Is(() => {
    const e = Wi(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function tr(t, e, n = !1) {
  j && Vi();
  var r = new nf(t), i = n ? hr : 0;
  function s(a, o) {
    if (j) {
      const f = eo(t);
      var l;
      if (f === Ns ? l = 0 : f === Fi ? l = !1 : l = parseInt(f.substring(1)), a !== l) {
        var u = Ei();
        qt(u), r.anchor = u, on(!1), r.ensure(a, o), on(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  qs(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function pi(t, e) {
  return e;
}
function sf(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let p = e[o];
    Bn(
      p,
      () => {
        if (s) {
          if (s.pending.delete(p), s.done.add(p), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            ws(Ii(s.done)), h.delete(s), h.size === 0 && (t.outrogroups = null);
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
      To(f), f.append(u), t.items.clear();
    }
    ws(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ws(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    Vt(t[n], e);
}
var ma;
function vi(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map(), l = (e & Wa) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    a = j ? qt(/* @__PURE__ */ fn(u)) : u.appendChild(ae());
  }
  j && Vi();
  var f = null, p = /* @__PURE__ */ _o(() => {
    var $ = n();
    return Ga($) ? $ : $ == null ? [] : Ii($);
  }), h, d = !0;
  function y() {
    m.fallback = f, af(m, h, a, e, r), f !== null && (h.length === 0 ? (f.f & an) === 0 ? zs(f) : (f.f ^= an, Sr(f, null, a)) : Bn(f, () => {
      f = null;
    }));
  }
  var b = qs(() => {
    h = /** @type {V[]} */
    x(p);
    var $ = h.length;
    let D = !1;
    if (j) {
      var M = eo(a) === Fi;
      M !== ($ === 0) && (a = Ei(), qt(a), on(!1), D = !0);
    }
    for (var S = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      K
    ), L = Ro(), U = 0; U < $; U += 1) {
      j && W.nodeType === wr && /** @type {Comment} */
      W.data === ks && (a = /** @type {Comment} */
      W, D = !0, on(!1));
      var at = h[U], tt = r(at, U), G = d ? null : o.get(tt);
      G ? (G.v && vr(G.v, at), G.i && vr(G.i, U), L && I.unskip_effect(G.e)) : (G = of(
        o,
        d ? a : ma ?? (ma = ae()),
        at,
        tt,
        U,
        i,
        e,
        n
      ), d || (G.e.f |= an), o.set(tt, G)), S.add(tt);
    }
    if ($ === 0 && s && !f && (d ? f = ve(() => s(a)) : (f = ve(() => s(ma ?? (ma = ae()))), f.f |= an)), $ > S.size && fu(), j && $ > 0 && qt(Ei()), !d)
      if (L) {
        for (const [ot, ut] of o)
          S.has(ot) || I.skip_effect(ut.e);
        I.oncommit(y), I.ondiscard(() => {
        });
      } else
        y();
    D && on(!0), x(p);
  }), m = { effect: b, items: o, outrogroups: null, fallback: f };
  d = !1, j && (a = W);
}
function Rr(t) {
  for (; t !== null && (t.f & Re) === 0; )
    t = t.next;
  return t;
}
function af(t, e, n, r, i) {
  var G, ot, ut, O, F, kt, ue, yt, wt;
  var s = (r & Bl) !== 0, a = e.length, o = t.items, l = Rr(t.effect.first), u, f = null, p, h = [], d = [], y, b, m, $;
  if (s)
    for ($ = 0; $ < a; $ += 1)
      y = e[$], b = i(y, $), m = /** @type {EachItem} */
      o.get(b).e, (m.f & an) === 0 && ((ot = (G = m.nodes) == null ? void 0 : G.a) == null || ot.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(m));
  for ($ = 0; $ < a; $ += 1) {
    if (y = e[$], b = i(y, $), m = /** @type {EachItem} */
    o.get(b).e, t.outrogroups !== null)
      for (const et of t.outrogroups)
        et.pending.delete(m), et.done.delete(m);
    if ((m.f & an) !== 0)
      if (m.f ^= an, m === l)
        Sr(m, null, n);
      else {
        var D = f ? f.next : l;
        m === t.effect.last && (t.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), gn(t, f, m), gn(t, m, D), Sr(m, D, n), f = m, h = [], d = [], l = Rr(f.next);
        continue;
      }
    if ((m.f & se) !== 0 && (zs(m), s && ((O = (ut = m.nodes) == null ? void 0 : ut.a) == null || O.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (h.length < d.length) {
          var M = d[0], S;
          f = M.prev;
          var I = h[0], L = h[h.length - 1];
          for (S = 0; S < h.length; S += 1)
            Sr(h[S], M, n);
          for (S = 0; S < d.length; S += 1)
            u.delete(d[S]);
          gn(t, I.prev, L.next), gn(t, f, I), gn(t, L, M), l = M, f = L, $ -= 1, h = [], d = [];
        } else
          u.delete(m), Sr(m, l, n), gn(t, m.prev, m.next), gn(t, m, f === null ? t.effect.first : f.next), gn(t, f, m), f = m;
        continue;
      }
      for (h = [], d = []; l !== null && l !== m; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), d.push(l), l = Rr(l.next);
      if (l === null)
        continue;
    }
    (m.f & an) === 0 && h.push(m), f = m, l = Rr(m.next);
  }
  if (t.outrogroups !== null) {
    for (const et of t.outrogroups)
      et.pending.size === 0 && (ws(Ii(et.done)), (F = t.outrogroups) == null || F.delete(et));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var U = [];
    if (u !== void 0)
      for (m of u)
        (m.f & se) === 0 && U.push(m);
    for (; l !== null; )
      (l.f & se) === 0 && l !== t.fallback && U.push(l), l = Rr(l.next);
    var at = U.length;
    if (at > 0) {
      var tt = (r & Wa) !== 0 && a === 0 ? n : null;
      if (s) {
        for ($ = 0; $ < at; $ += 1)
          (ue = (kt = U[$].nodes) == null ? void 0 : kt.a) == null || ue.measure();
        for ($ = 0; $ < at; $ += 1)
          (wt = (yt = U[$].nodes) == null ? void 0 : yt.a) == null || wt.fix();
      }
      sf(t, U, tt);
    }
  }
  s && xn(() => {
    var et, Mt;
    if (p !== void 0)
      for (m of p)
        (Mt = (et = m.nodes) == null ? void 0 : et.a) == null || Mt.apply();
  });
}
function of(t, e, n, r, i, s, a, o) {
  var l = (a & Hl) !== 0 ? (a & Xl) === 0 ? /* @__PURE__ */ xo(n, !1, !1) : Gn(n) : null, u = (a & Yl) !== 0 ? Gn(i) : null;
  return {
    v: l,
    i: u,
    e: ve(() => (s(e, l ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Sr(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & an) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function gn(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Hs(t, e) {
  No(() => {
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
      const i = Os("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
const ya = [...` 	
\r\f \v\uFEFF`];
function lf(t, e, n) {
  var r = t == null ? "" : "" + t;
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
function wa(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (r += " " + i + ": " + s + n);
  }
  return r;
}
function uf(t, e) {
  if (e) {
    var n = "", r, i;
    return Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, r && (n += wa(r)), i && (n += wa(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return String(t);
}
function si(t, e, n, r, i, s) {
  var a = t.__className;
  if (j || a !== n || a === void 0) {
    var o = lf(n, r, s);
    (!j || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = n;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return s;
}
function ns(t, e = {}, n, r) {
  for (var i in n) {
    var s = n[i];
    e[i] !== s && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, r));
  }
}
function xa(t, e, n, r) {
  var i = t.__style;
  if (j || i !== e) {
    var s = uf(e, r);
    (!j || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  } else r && (Array.isArray(r) ? (ns(t, n == null ? void 0 : n[0], r[0]), ns(t, n == null ? void 0 : n[1], r[1], "important")) : ns(t, n, r));
  return r;
}
const ff = Symbol("is custom element"), cf = Symbol("is html"), hf = ou ? "link" : "LINK";
function ba(t, e, n, r) {
  var i = df(t);
  j && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === hf) || i[e] !== (i[e] = n) && (e === "loading" && (t[au] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && pf(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function df(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [ff]: t.nodeName.includes("-"),
      [cf]: t.namespaceURI === Ua
    })
  );
}
var $a = /* @__PURE__ */ new Map();
function pf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = $a.get(e);
  if (n) return n;
  $a.set(e, n = []);
  for (var r, i = t, s = Element.prototype; s !== i; ) {
    r = Ql(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = Ka(i);
  }
  return n;
}
function Aa(t, e) {
  return t === e || (t == null ? void 0 : t[Pr]) === e;
}
function gi(t = {}, e, n, r) {
  return No(() => {
    var i, s;
    return Ls(() => {
      i = s, s = [], Wi(() => {
        t !== n(...s) && (e(t, ...s), i && Aa(n(...i), t) && e(null, ...i));
      });
    }), () => {
      xn(() => {
        s && Aa(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
let ai = !1;
function vf(t) {
  var e = ai;
  try {
    return ai = !1, [t(), ai];
  } finally {
    ai = e;
  }
}
function st(t, e, n, r) {
  var D;
  var i = (n & Gl) !== 0, s = (n & Kl) !== 0, a = (
    /** @type {V} */
    r
  ), o = !0, l = () => (o && (o = !1, a = s ? Wi(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), u;
  if (i) {
    var f = Pr in t || to in t;
    u = ((D = Yn(t, e)) == null ? void 0 : D.set) ?? (f && e in t ? (M) => t[e] = M : void 0);
  }
  var p, h = !1;
  i ? [p, h] = vf(() => (
    /** @type {V} */
    t[e]
  )) : p = /** @type {V} */
  t[e], p === void 0 && r !== void 0 && (p = l(), u && (gu(), u(p)));
  var d;
  if (d = () => {
    var M = (
      /** @type {V} */
      t[e]
    );
    return M === void 0 ? l() : (o = !0, M);
  }, (n & Ul) === 0)
    return d;
  if (u) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(M, S) {
        return arguments.length > 0 ? ((!S || y || h) && u(S ? d() : M), M) : d();
      })
    );
  }
  var b = !1, m = ((n & Wl) !== 0 ? Bi : _o)(() => (b = !1, d()));
  i && x(m);
  var $ = (
    /** @type {Effect} */
    J
  );
  return (
    /** @type {() => V} */
    (function(M, S) {
      if (arguments.length > 0) {
        const I = S ? x(m) : i ? Dn(M) : M;
        return pt(m, I), b = !0, a !== void 0 && (a = I), M;
      }
      return An && b || ($.f & ln) !== 0 ? m.v : x(m);
    })
  );
}
function gf(t) {
  return new _f(t);
}
var sn, pe;
class _f {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    B(this, sn);
    /** @type {Record<string, any>} */
    B(this, pe);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ xo(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return x(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === to ? !0 : (x(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return pt(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    z(this, pe, (e.hydrate ? tf : Xo)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && rt(), z(this, sn, i.$$events);
    for (const a of Object.keys(v(this, pe)))
      a === "$set" || a === "$destroy" || a === "$on" || Ai(this, a, {
        get() {
          return v(this, pe)[a];
        },
        /** @param {any} value */
        set(o) {
          v(this, pe)[a] = o;
        },
        enumerable: !0
      });
    v(this, pe).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, v(this, pe).$destroy = () => {
      ef(v(this, pe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    v(this, pe).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    v(this, sn)[e] = v(this, sn)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return v(this, sn)[e].push(r), () => {
      v(this, sn)[e] = v(this, sn)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    v(this, pe).$destroy();
  }
}
sn = new WeakMap(), pe = new WeakMap();
let Uo;
typeof HTMLElement == "function" && (Uo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    dt(this, "$$ctor");
    /** Slots */
    dt(this, "$$s");
    /** @type {any} The Svelte component instance */
    dt(this, "$$c");
    /** Whether or not the custom element is connected */
    dt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    dt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    dt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    dt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    dt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    dt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    dt(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    dt(this, "$$shadowRoot", null);
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
          const o = Os("slot");
          s !== "default" && (o.name = s), Ut(a, o);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = mf(this);
      for (const s of this.$$s)
        s in i && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = _i(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = gf({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = zu(() => {
        Ls(() => {
          var s;
          this.$$r = !0;
          for (const a of $i(this.$$c)) {
            if (!((s = this.$$p_d[a]) != null && s.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = _i(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = _i(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return $i(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function _i(t, e, n, r) {
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
function mf(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function Ys(t, e, n, r, i, s) {
  let a = class extends Uo {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return $i(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return $i(e).forEach((o) => {
    Ai(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var p;
        l = _i(o, l, e), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var f = (p = Yn(u, o)) == null ? void 0 : p.get;
          f ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    Ai(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var yf = { value: () => {
} };
function Go() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new mi(n);
}
function mi(t) {
  this._ = t;
}
function wf(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
mi.prototype = Go.prototype = {
  constructor: mi,
  on: function(t, e) {
    var n = this._, r = wf(t + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((i = (t = r[s]).type) && (i = xf(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t = r[s]).type) n[i] = Ea(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Ea(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new mi(t);
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
function xf(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Ea(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = yf, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var xs = "http://www.w3.org/1999/xhtml";
const Ta = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ui(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Ta.hasOwnProperty(e) ? { space: Ta[e], local: t } : t;
}
function bf(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === xs && e.documentElement.namespaceURI === xs ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function $f(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ko(t) {
  var e = Ui(t);
  return (e.local ? $f : bf)(e);
}
function Af() {
}
function Bs(t) {
  return t == null ? Af : function() {
    return this.querySelector(t);
  };
}
function Ef(t) {
  typeof t != "function" && (t = Bs(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = s[f]) && (u = t.call(l, l.__data__, f, s)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new le(r, this._parents);
}
function Tf(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Rf() {
  return [];
}
function jo(t) {
  return t == null ? Rf : function() {
    return this.querySelectorAll(t);
  };
}
function Cf(t) {
  return function() {
    return Tf(t.apply(this, arguments));
  };
}
function Sf(t) {
  typeof t == "function" ? t = Cf(t) : t = jo(t);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var a = e[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new le(r, i);
}
function Jo(t) {
  return function() {
    return this.matches(t);
  };
}
function Zo(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Nf = Array.prototype.find;
function kf(t) {
  return function() {
    return Nf.call(this.children, t);
  };
}
function Mf() {
  return this.firstElementChild;
}
function Pf(t) {
  return this.select(t == null ? Mf : kf(typeof t == "function" ? t : Zo(t)));
}
var Df = Array.prototype.filter;
function Of() {
  return Array.from(this.children);
}
function Ff(t) {
  return function() {
    return Df.call(this.children, t);
  };
}
function If(t) {
  return this.selectAll(t == null ? Of : Ff(typeof t == "function" ? t : Zo(t)));
}
function Lf(t) {
  typeof t != "function" && (t = Jo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new le(r, this._parents);
}
function Qo(t) {
  return new Array(t.length);
}
function qf() {
  return new le(this._enter || this._groups.map(Qo), this._parents);
}
function Ti(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Ti.prototype = {
  constructor: Ti,
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
function Vf(t) {
  return function() {
    return t;
  };
}
function zf(t, e, n, r, i, s) {
  for (var a = 0, o, l = e.length, u = s.length; a < u; ++a)
    (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new Ti(t, s[a]);
  for (; a < l; ++a)
    (o = e[a]) && (i[a] = o);
}
function Hf(t, e, n, r, i, s, a) {
  var o, l, u = /* @__PURE__ */ new Map(), f = e.length, p = s.length, h = new Array(f), d;
  for (o = 0; o < f; ++o)
    (l = e[o]) && (h[o] = d = a.call(l, l.__data__, o, e) + "", u.has(d) ? i[o] = l : u.set(d, l));
  for (o = 0; o < p; ++o)
    d = a.call(t, s[o], o, s) + "", (l = u.get(d)) ? (r[o] = l, l.__data__ = s[o], u.delete(d)) : n[o] = new Ti(t, s[o]);
  for (o = 0; o < f; ++o)
    (l = e[o]) && u.get(h[o]) === l && (i[o] = l);
}
function Yf(t) {
  return t.__data__;
}
function Bf(t, e) {
  if (!arguments.length) return Array.from(this, Yf);
  var n = e ? Hf : zf, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Vf(t));
  for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), u = 0; u < s; ++u) {
    var f = r[u], p = i[u], h = p.length, d = Xf(t.call(f, f && f.__data__, u, r)), y = d.length, b = o[u] = new Array(y), m = a[u] = new Array(y), $ = l[u] = new Array(h);
    n(f, p, b, m, $, d, e);
    for (var D = 0, M = 0, S, I; D < y; ++D)
      if (S = b[D]) {
        for (D >= M && (M = D + 1); !(I = m[M]) && ++M < y; ) ;
        S._next = I || null;
      }
  }
  return a = new le(a, r), a._enter = o, a._exit = l, a;
}
function Xf(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Wf() {
  return new le(this._exit || this._groups.map(Qo), this._parents);
}
function Uf(t, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Gf(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
    for (var u = n[l], f = r[l], p = u.length, h = o[l] = new Array(p), d, y = 0; y < p; ++y)
      (d = u[y] || f[y]) && (h[y] = d);
  for (; l < i; ++l)
    o[l] = n[l];
  return new le(o, this._parents);
}
function Kf() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], a; --i >= 0; )
      (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function jf(t) {
  t || (t = Jf);
  function e(p, h) {
    return p && h ? t(p.__data__, h.__data__) : !p - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var a = n[s], o = a.length, l = i[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(e);
  }
  return new le(i, this._parents).order();
}
function Jf(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Zf() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Qf() {
  return Array.from(this);
}
function tc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ec() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function nc() {
  return !this.node();
}
function rc(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
      (o = i[s]) && t.call(o, o.__data__, s, i);
  return this;
}
function ic(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function sc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ac(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function oc(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function lc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function uc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function fc(t, e) {
  var n = Ui(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? sc : ic : typeof e == "function" ? n.local ? uc : lc : n.local ? oc : ac)(n, e));
}
function tl(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function cc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function hc(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function dc(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function pc(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? cc : typeof e == "function" ? dc : hc)(t, e, n ?? "")) : _r(this.node(), t);
}
function _r(t, e) {
  return t.style.getPropertyValue(e) || tl(t).getComputedStyle(t, null).getPropertyValue(e);
}
function vc(t) {
  return function() {
    delete this[t];
  };
}
function gc(t, e) {
  return function() {
    this[t] = e;
  };
}
function _c(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function mc(t, e) {
  return arguments.length > 1 ? this.each((e == null ? vc : typeof e == "function" ? _c : gc)(t, e)) : this.node()[t];
}
function el(t) {
  return t.trim().split(/^|\s+/);
}
function Xs(t) {
  return t.classList || new nl(t);
}
function nl(t) {
  this._node = t, this._names = el(t.getAttribute("class") || "");
}
nl.prototype = {
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
function rl(t, e) {
  for (var n = Xs(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function il(t, e) {
  for (var n = Xs(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function yc(t) {
  return function() {
    rl(this, t);
  };
}
function wc(t) {
  return function() {
    il(this, t);
  };
}
function xc(t, e) {
  return function() {
    (e.apply(this, arguments) ? rl : il)(this, t);
  };
}
function bc(t, e) {
  var n = el(t + "");
  if (arguments.length < 2) {
    for (var r = Xs(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? xc : e ? yc : wc)(n, e));
}
function $c() {
  this.textContent = "";
}
function Ac(t) {
  return function() {
    this.textContent = t;
  };
}
function Ec(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Tc(t) {
  return arguments.length ? this.each(t == null ? $c : (typeof t == "function" ? Ec : Ac)(t)) : this.node().textContent;
}
function Rc() {
  this.innerHTML = "";
}
function Cc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Sc(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Nc(t) {
  return arguments.length ? this.each(t == null ? Rc : (typeof t == "function" ? Sc : Cc)(t)) : this.node().innerHTML;
}
function kc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Mc() {
  return this.each(kc);
}
function Pc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Dc() {
  return this.each(Pc);
}
function Oc(t) {
  var e = typeof t == "function" ? t : Ko(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Fc() {
  return null;
}
function Ic(t, e) {
  var n = typeof t == "function" ? t : Ko(t), r = e == null ? Fc : typeof e == "function" ? e : Bs(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Lc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function qc() {
  return this.each(Lc);
}
function Vc() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function zc() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Hc(t) {
  return this.select(t ? zc : Vc);
}
function Yc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Bc(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Xc(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Wc(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Uc(t, e, n) {
  return function() {
    var r = this.__on, i, s = Bc(e);
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
function Gc(t, e, n) {
  var r = Xc(t + ""), i, s = r.length, a;
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
  for (o = e ? Uc : Wc, i = 0; i < s; ++i) this.each(o(r[i], e, n));
  return this;
}
function sl(t, e, n) {
  var r = tl(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Kc(t, e) {
  return function() {
    return sl(this, t, e);
  };
}
function jc(t, e) {
  return function() {
    return sl(this, t, e.apply(this, arguments));
  };
}
function Jc(t, e) {
  return this.each((typeof e == "function" ? jc : Kc)(t, e));
}
function* Zc() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, a; i < s; ++i)
      (a = r[i]) && (yield a);
}
var al = [null];
function le(t, e) {
  this._groups = t, this._parents = e;
}
function xr() {
  return new le([[document.documentElement]], al);
}
function Qc() {
  return this;
}
le.prototype = xr.prototype = {
  constructor: le,
  select: Ef,
  selectAll: Sf,
  selectChild: Pf,
  selectChildren: If,
  filter: Lf,
  data: Bf,
  enter: qf,
  exit: Wf,
  join: Uf,
  merge: Gf,
  selection: Qc,
  order: Kf,
  sort: jf,
  call: Zf,
  nodes: Qf,
  node: tc,
  size: ec,
  empty: nc,
  each: rc,
  attr: fc,
  style: pc,
  property: mc,
  classed: bc,
  text: Tc,
  html: Nc,
  raise: Mc,
  lower: Dc,
  append: Oc,
  insert: Ic,
  remove: qc,
  clone: Hc,
  datum: Yc,
  on: Gc,
  dispatch: Jc,
  [Symbol.iterator]: Zc
};
function ct(t) {
  return typeof t == "string" ? new le([[document.querySelector(t)]], [document.documentElement]) : new le([[t]], al);
}
function Ws(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function ol(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Kr() {
}
var Lr = 0.7, Ri = 1 / Lr, nr = "\\s*([+-]?\\d+)\\s*", qr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ze = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", th = /^#([0-9a-f]{3,8})$/, eh = new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`), nh = new RegExp(`^rgb\\(${ze},${ze},${ze}\\)$`), rh = new RegExp(`^rgba\\(${nr},${nr},${nr},${qr}\\)$`), ih = new RegExp(`^rgba\\(${ze},${ze},${ze},${qr}\\)$`), sh = new RegExp(`^hsl\\(${qr},${ze},${ze}\\)$`), ah = new RegExp(`^hsla\\(${qr},${ze},${ze},${qr}\\)$`), Ra = {
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
Ws(Kr, Kn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ca,
  // Deprecated! Use color.formatHex.
  formatHex: Ca,
  formatHex8: oh,
  formatHsl: lh,
  formatRgb: Sa,
  toString: Sa
});
function Ca() {
  return this.rgb().formatHex();
}
function oh() {
  return this.rgb().formatHex8();
}
function lh() {
  return ll(this).formatHsl();
}
function Sa() {
  return this.rgb().formatRgb();
}
function Kn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = th.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Na(e) : n === 3 ? new jt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? oi(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? oi(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = eh.exec(t)) ? new jt(e[1], e[2], e[3], 1) : (e = nh.exec(t)) ? new jt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = rh.exec(t)) ? oi(e[1], e[2], e[3], e[4]) : (e = ih.exec(t)) ? oi(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = sh.exec(t)) ? Pa(e[1], e[2] / 100, e[3] / 100, 1) : (e = ah.exec(t)) ? Pa(e[1], e[2] / 100, e[3] / 100, e[4]) : Ra.hasOwnProperty(t) ? Na(Ra[t]) : t === "transparent" ? new jt(NaN, NaN, NaN, 0) : null;
}
function Na(t) {
  return new jt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function oi(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new jt(t, e, n, r);
}
function uh(t) {
  return t instanceof Kr || (t = Kn(t)), t ? (t = t.rgb(), new jt(t.r, t.g, t.b, t.opacity)) : new jt();
}
function bs(t, e, n, r) {
  return arguments.length === 1 ? uh(t) : new jt(t, e, n, r ?? 1);
}
function jt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Ws(jt, bs, ol(Kr, {
  brighter(t) {
    return t = t == null ? Ri : Math.pow(Ri, t), new jt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lr : Math.pow(Lr, t), new jt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new jt(Wn(this.r), Wn(this.g), Wn(this.b), Ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ka,
  // Deprecated! Use color.formatHex.
  formatHex: ka,
  formatHex8: fh,
  formatRgb: Ma,
  toString: Ma
}));
function ka() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}`;
}
function fh() {
  return `#${Fn(this.r)}${Fn(this.g)}${Fn(this.b)}${Fn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ma() {
  const t = Ci(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Wn(this.r)}, ${Wn(this.g)}, ${Wn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ci(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Wn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Fn(t) {
  return t = Wn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Pa(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new $e(t, e, n, r);
}
function ll(t) {
  if (t instanceof $e) return new $e(t.h, t.s, t.l, t.opacity);
  if (t instanceof Kr || (t = Kn(t)), !t) return new $e();
  if (t instanceof $e) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
  return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new $e(a, o, l, t.opacity);
}
function ch(t, e, n, r) {
  return arguments.length === 1 ? ll(t) : new $e(t, e, n, r ?? 1);
}
function $e(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Ws($e, ch, ol(Kr, {
  brighter(t) {
    return t = t == null ? Ri : Math.pow(Ri, t), new $e(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Lr : Math.pow(Lr, t), new $e(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new jt(
      rs(t >= 240 ? t - 240 : t + 120, i, r),
      rs(t, i, r),
      rs(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new $e(Da(this.h), li(this.s), li(this.l), Ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ci(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Da(this.h)}, ${li(this.s) * 100}%, ${li(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Da(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function li(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function rs(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Us = (t) => () => t;
function hh(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function dh(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ph(t) {
  return (t = +t) == 1 ? ul : function(e, n) {
    return n - e ? dh(e, n, t) : Us(isNaN(e) ? n : e);
  };
}
function ul(t, e) {
  var n = e - t;
  return n ? hh(t, n) : Us(isNaN(t) ? e : t);
}
const Si = (function t(e) {
  var n = ph(e);
  function r(i, s) {
    var a = n((i = bs(i)).r, (s = bs(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), u = ul(i.opacity, s.opacity);
    return function(f) {
      return i.r = a(f), i.g = o(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function vh(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function gh(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function _h(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), s = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Ze(t[a], e[a]);
  for (; a < n; ++a) s[a] = e[a];
  return function(o) {
    for (a = 0; a < r; ++a) s[a] = i[a](o);
    return s;
  };
}
function mh(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Ve(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function yh(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ze(t[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var $s = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, is = new RegExp($s.source, "g");
function wh(t) {
  return function() {
    return t;
  };
}
function xh(t) {
  return function(e) {
    return t(e) + "";
  };
}
function fl(t, e) {
  var n = $s.lastIndex = is.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = $s.exec(t)) && (i = is.exec(e)); )
    (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Ve(r, i) })), n = is.lastIndex;
  return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? xh(l[0].x) : wh(e) : (e = l.length, function(u) {
    for (var f = 0, p; f < e; ++f) o[(p = l[f]).i] = p.x(u);
    return o.join("");
  });
}
function Ze(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Us(e) : (n === "number" ? Ve : n === "string" ? (r = Kn(e)) ? (e = r, Si) : fl : e instanceof Kn ? Si : e instanceof Date ? mh : gh(e) ? vh : Array.isArray(e) ? _h : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? yh : Ve)(t, e);
}
var Oa = 180 / Math.PI, As = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function cl(t, e, n, r, i, s) {
  var a, o, l;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
    translateX: i,
    translateY: s,
    rotate: Math.atan2(e, t) * Oa,
    skewX: Math.atan(l) * Oa,
    scaleX: a,
    scaleY: o
  };
}
var ui;
function bh(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? As : cl(e.a, e.b, e.c, e.d, e.e, e.f);
}
function $h(t) {
  return t == null || (ui || (ui = document.createElementNS("http://www.w3.org/2000/svg", "g")), ui.setAttribute("transform", t), !(t = ui.transform.baseVal.consolidate())) ? As : (t = t.matrix, cl(t.a, t.b, t.c, t.d, t.e, t.f));
}
function hl(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, p, h, d, y) {
    if (u !== p || f !== h) {
      var b = d.push("translate(", null, e, null, n);
      y.push({ i: b - 4, x: Ve(u, p) }, { i: b - 2, x: Ve(f, h) });
    } else (p || h) && d.push("translate(" + p + e + h + n);
  }
  function a(u, f, p, h) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), h.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: Ve(u, f) })) : f && p.push(i(p) + "rotate(" + f + r);
  }
  function o(u, f, p, h) {
    u !== f ? h.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: Ve(u, f) }) : f && p.push(i(p) + "skewX(" + f + r);
  }
  function l(u, f, p, h, d, y) {
    if (u !== p || f !== h) {
      var b = d.push(i(d) + "scale(", null, ",", null, ")");
      y.push({ i: b - 4, x: Ve(u, p) }, { i: b - 2, x: Ve(f, h) });
    } else (p !== 1 || h !== 1) && d.push(i(d) + "scale(" + p + "," + h + ")");
  }
  return function(u, f) {
    var p = [], h = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, p, h), a(u.rotate, f.rotate, p, h), o(u.skewX, f.skewX, p, h), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, p, h), u = f = null, function(d) {
      for (var y = -1, b = h.length, m; ++y < b; ) p[(m = h[y]).i] = m.x(d);
      return p.join("");
    };
  };
}
var Ah = hl(bh, "px, ", "px)", "deg)"), Eh = hl($h, ", ", ")", ")"), mr = 0, Nr = 0, Cr = 0, dl = 1e3, Ni, kr, ki = 0, jn = 0, Gi = 0, Vr = typeof performance == "object" && performance.now ? performance : Date, pl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Gs() {
  return jn || (pl(Th), jn = Vr.now() + Gi);
}
function Th() {
  jn = 0;
}
function Mi() {
  this._call = this._time = this._next = null;
}
Mi.prototype = vl.prototype = {
  constructor: Mi,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Gs() : +n) + (e == null ? 0 : +e), !this._next && kr !== this && (kr ? kr._next = this : Ni = this, kr = this), this._call = t, this._time = n, Es();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Es());
  }
};
function vl(t, e, n) {
  var r = new Mi();
  return r.restart(t, e, n), r;
}
function Rh() {
  Gs(), ++mr;
  for (var t = Ni, e; t; )
    (e = jn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --mr;
}
function Fa() {
  jn = (ki = Vr.now()) + Gi, mr = Nr = 0;
  try {
    Rh();
  } finally {
    mr = 0, Sh(), jn = 0;
  }
}
function Ch() {
  var t = Vr.now(), e = t - ki;
  e > dl && (Gi -= e, ki = t);
}
function Sh() {
  for (var t, e = Ni, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ni = n);
  kr = t, Es(r);
}
function Es(t) {
  if (!mr) {
    Nr && (Nr = clearTimeout(Nr));
    var e = t - jn;
    e > 24 ? (t < 1 / 0 && (Nr = setTimeout(Fa, t - Vr.now() - Gi)), Cr && (Cr = clearInterval(Cr))) : (Cr || (ki = Vr.now(), Cr = setInterval(Ch, dl)), mr = 1, pl(Fa));
  }
}
function Ia(t, e, n) {
  var r = new Mi();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Nh = Go("start", "end", "cancel", "interrupt"), kh = [], gl = 0, La = 1, Ts = 2, yi = 3, qa = 4, Rs = 5, wi = 6;
function Ki(t, e, n, r, i, s) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Mh(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Nh,
    tween: kh,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: gl
  });
}
function Ks(t, e) {
  var n = Ce(t, e);
  if (n.state > gl) throw new Error("too late; already scheduled");
  return n;
}
function Ue(t, e) {
  var n = Ce(t, e);
  if (n.state > yi) throw new Error("too late; already running");
  return n;
}
function Ce(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Mh(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = vl(s, 0, n.time);
  function s(u) {
    n.state = La, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var f, p, h, d;
    if (n.state !== La) return l();
    for (f in r)
      if (d = r[f], d.name === n.name) {
        if (d.state === yi) return Ia(a);
        d.state === qa ? (d.state = wi, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[f]) : +f < e && (d.state = wi, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[f]);
      }
    if (Ia(function() {
      n.state === yi && (n.state = qa, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Ts, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ts) {
      for (n.state = yi, i = new Array(h = n.tween.length), f = 0, p = -1; f < h; ++f)
        (d = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (i[++p] = d);
      i.length = p + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Rs, 1), p = -1, h = i.length; ++p < h; )
      i[p].call(t, f);
    n.state === Rs && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = wi, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Ph(t, e) {
  var n = t.__transition, r, i, s = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        s = !1;
        continue;
      }
      i = r.state > Ts && r.state < Rs, r.state = wi, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    s && delete t.__transition;
  }
}
function Dh(t) {
  return this.each(function() {
    Ph(this, t);
  });
}
function Oh(t, e) {
  var n, r;
  return function() {
    var i = Ue(this, t), s = i.tween;
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
function Fh(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = Ue(this, t), a = s.tween;
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
function Ih(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Ce(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Oh : Fh)(n, t, e));
}
function js(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Ue(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return Ce(i, r).value[e];
  };
}
function _l(t, e) {
  var n;
  return (typeof e == "number" ? Ve : e instanceof Kn ? Si : (n = Kn(e)) ? (e = n, Si) : fl)(t, e);
}
function Lh(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function qh(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Vh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function zh(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function Hh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function Yh(t, e, n) {
  var r, i, s;
  return function() {
    var a, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
  };
}
function Bh(t, e) {
  var n = Ui(t), r = n === "transform" ? Eh : _l;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Yh : Hh)(n, r, js(this, "attr." + t, e)) : e == null ? (n.local ? qh : Lh)(n) : (n.local ? zh : Vh)(n, r, e));
}
function Xh(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Wh(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Uh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Wh(t, s)), n;
  }
  return i._value = e, i;
}
function Gh(t, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && Xh(t, s)), n;
  }
  return i._value = e, i;
}
function Kh(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ui(t);
  return this.tween(n, (r.local ? Uh : Gh)(r, e));
}
function jh(t, e) {
  return function() {
    Ks(this, t).delay = +e.apply(this, arguments);
  };
}
function Jh(t, e) {
  return e = +e, function() {
    Ks(this, t).delay = e;
  };
}
function Zh(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? jh : Jh)(e, t)) : Ce(this.node(), e).delay;
}
function Qh(t, e) {
  return function() {
    Ue(this, t).duration = +e.apply(this, arguments);
  };
}
function td(t, e) {
  return e = +e, function() {
    Ue(this, t).duration = e;
  };
}
function ed(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qh : td)(e, t)) : Ce(this.node(), e).duration;
}
function nd(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Ue(this, t).ease = e;
  };
}
function rd(t) {
  var e = this._id;
  return arguments.length ? this.each(nd(e, t)) : Ce(this.node(), e).ease;
}
function id(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ue(this, t).ease = n;
  };
}
function sd(t) {
  if (typeof t != "function") throw new Error();
  return this.each(id(this._id, t));
}
function ad(t) {
  typeof t != "function" && (t = Jo(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, o = r[i] = [], l, u = 0; u < a; ++u)
      (l = s[u]) && t.call(l, l.__data__, u, s) && o.push(l);
  return new cn(r, this._parents, this._name, this._id);
}
function od(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
    for (var l = e[o], u = n[o], f = l.length, p = a[o] = new Array(f), h, d = 0; d < f; ++d)
      (h = l[d] || u[d]) && (p[d] = h);
  for (; o < r; ++o)
    a[o] = e[o];
  return new cn(a, this._parents, this._name, this._id);
}
function ld(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ud(t, e, n) {
  var r, i, s = ld(e) ? Ks : Ue;
  return function() {
    var a = s(this, t), o = a.on;
    o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
  };
}
function fd(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Ce(this.node(), n).on.on(t) : this.each(ud(n, t, e));
}
function cd(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function hd() {
  return this.on("end.remove", cd(this._id));
}
function dd(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Bs(t));
  for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, u = s[a] = new Array(l), f, p, h = 0; h < l; ++h)
      (f = o[h]) && (p = t.call(f, f.__data__, h, o)) && ("__data__" in f && (p.__data__ = f.__data__), u[h] = p, Ki(u[h], e, n, h, u, Ce(f, n)));
  return new cn(s, this._parents, e, n);
}
function pd(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = jo(t));
  for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, f, p = 0; p < u; ++p)
      if (f = l[p]) {
        for (var h = t.call(f, f.__data__, p, l), d, y = Ce(f, n), b = 0, m = h.length; b < m; ++b)
          (d = h[b]) && Ki(d, e, n, b, h, y);
        s.push(h), a.push(f);
      }
  return new cn(s, a, e, n);
}
var vd = xr.prototype.constructor;
function gd() {
  return new vd(this._groups, this._parents);
}
function _d(t, e) {
  var n, r, i;
  return function() {
    var s = _r(this, t), a = (this.style.removeProperty(t), _r(this, t));
    return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
  };
}
function ml(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function md(t, e, n) {
  var r, i = n + "", s;
  return function() {
    var a = _r(this, t);
    return a === i ? null : a === r ? s : s = e(r = a, n);
  };
}
function yd(t, e, n) {
  var r, i, s;
  return function() {
    var a = _r(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), _r(this, t))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
  };
}
function wd(t, e) {
  var n, r, i, s = "style." + e, a = "end." + s, o;
  return function() {
    var l = Ue(this, t), u = l.on, f = l.value[s] == null ? o || (o = ml(e)) : void 0;
    (u !== n || i !== f) && (r = (n = u).copy()).on(a, i = f), l.on = r;
  };
}
function xd(t, e, n) {
  var r = (t += "") == "transform" ? Ah : _l;
  return e == null ? this.styleTween(t, _d(t, r)).on("end.style." + t, ml(t)) : typeof e == "function" ? this.styleTween(t, yd(t, r, js(this, "style." + t, e))).each(wd(this._id, t)) : this.styleTween(t, md(t, r, e), n).on("end.style." + t, null);
}
function bd(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function $d(t, e, n) {
  var r, i;
  function s() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && bd(t, a, n)), r;
  }
  return s._value = e, s;
}
function Ad(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, $d(t, e, n ?? ""));
}
function Ed(t) {
  return function() {
    this.textContent = t;
  };
}
function Td(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Rd(t) {
  return this.tween("text", typeof t == "function" ? Td(js(this, "text", t)) : Ed(t == null ? "" : t + ""));
}
function Cd(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Sd(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Cd(i)), e;
  }
  return r._value = t, r;
}
function Nd(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Sd(t));
}
function kd() {
  for (var t = this._name, e = this._id, n = yl(), r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      if (l = a[u]) {
        var f = Ce(l, e);
        Ki(l, t, n, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new cn(r, this._parents, t, n);
}
function Md() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, a) {
    var o = { value: a }, l = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = Ue(this, r), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && s();
  });
}
var Pd = 0;
function cn(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function xi(t) {
  return xr().transition(t);
}
function yl() {
  return ++Pd;
}
var Je = xr.prototype;
cn.prototype = xi.prototype = {
  constructor: cn,
  select: dd,
  selectAll: pd,
  selectChild: Je.selectChild,
  selectChildren: Je.selectChildren,
  filter: ad,
  merge: od,
  selection: gd,
  transition: kd,
  call: Je.call,
  nodes: Je.nodes,
  node: Je.node,
  size: Je.size,
  empty: Je.empty,
  each: Je.each,
  on: fd,
  attr: Bh,
  attrTween: Kh,
  style: xd,
  styleTween: Ad,
  text: Rd,
  textTween: Nd,
  remove: hd,
  tween: Ih,
  delay: Zh,
  duration: ed,
  ease: rd,
  easeVarying: sd,
  end: Md,
  [Symbol.iterator]: Je[Symbol.iterator]
};
function Dd(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Od = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Dd
};
function Fd(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Id(t) {
  var e, n;
  t instanceof cn ? (e = t._id, t = t._name) : (e = yl(), (n = Od).time = Gs(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var a = r[s], o = a.length, l, u = 0; u < o; ++u)
      (l = a[u]) && Ki(l, t, e, u, a, n || Fd(l, e));
  return new cn(r, this._parents, t, e);
}
xr.prototype.interrupt = Dh;
xr.prototype.transition = Id;
const Cs = Math.PI, Ss = 2 * Cs, kn = 1e-6, Ld = Ss - kn;
function wl(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function qd(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return wl;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, s = r.length; i < s; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Vd {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? wl : qd(e);
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
    let a = this._x1, o = this._y1, l = r - e, u = i - n, f = a - e, p = o - n, h = f * f + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > kn) if (!(Math.abs(p * l - u * f) > kn) || !s)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - a, y = i - o, b = l * l + u * u, m = d * d + y * y, $ = Math.sqrt(b), D = Math.sqrt(h), M = s * Math.tan((Cs - Math.acos((b + h - m) / (2 * $ * D))) / 2), S = M / D, I = M / $;
      Math.abs(S - 1) > kn && this._append`L${e + S * f},${n + S * p}`, this._append`A${s},${s},0,0,${+(p * d > f * y)},${this._x1 = e + I * l},${this._y1 = n + I * u}`;
    }
  }
  arc(e, n, r, i, s, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, f = n + l, p = 1 ^ a, h = a ? i - s : s - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > kn || Math.abs(this._y1 - f) > kn) && this._append`L${u},${f}`, r && (h < 0 && (h = h % Ss + Ss), h > Ld ? this._append`A${r},${r},0,1,${p},${e - o},${n - l}A${r},${r},0,1,${p},${this._x1 = u},${this._y1 = f}` : h > kn && this._append`A${r},${r},0,${+(h >= Cs)},${p},${this._x1 = e + r * Math.cos(s)},${this._y1 = n + r * Math.sin(s)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function zd(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const Hd = zd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function Lt(t) {
  return function() {
    return t;
  };
}
const Va = Math.abs, Dt = Math.atan2, Nn = Math.cos, Yd = Math.max, ss = Math.min, Oe = Math.sin, er = Math.sqrt, Bt = 1e-12, zr = Math.PI, Pi = zr / 2, bi = 2 * zr;
function Bd(t) {
  return t > 1 ? 0 : t < -1 ? zr : Math.acos(t);
}
function za(t) {
  return t >= 1 ? Pi : t <= -1 ? -Pi : Math.asin(t);
}
function Xd(t) {
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
  }, () => new Vd(e);
}
function Wd(t) {
  return t.innerRadius;
}
function Ud(t) {
  return t.outerRadius;
}
function Gd(t) {
  return t.startAngle;
}
function Kd(t) {
  return t.endAngle;
}
function jd(t) {
  return t && t.padAngle;
}
function Jd(t, e, n, r, i, s, a, o) {
  var l = n - t, u = r - e, f = a - i, p = o - s, h = p * l - f * u;
  if (!(h * h < Bt))
    return h = (f * (e - s) - p * (t - i)) / h, [t + h * l, e + h * u];
}
function fi(t, e, n, r, i, s, a) {
  var o = t - n, l = e - r, u = (a ? s : -s) / er(o * o + l * l), f = u * l, p = -u * o, h = t + f, d = e + p, y = n + f, b = r + p, m = (h + y) / 2, $ = (d + b) / 2, D = y - h, M = b - d, S = D * D + M * M, I = i - s, L = h * b - y * d, U = (M < 0 ? -1 : 1) * er(Yd(0, I * I * S - L * L)), at = (L * M - D * U) / S, tt = (-L * D - M * U) / S, G = (L * M + D * U) / S, ot = (-L * D + M * U) / S, ut = at - m, O = tt - $, F = G - m, kt = ot - $;
  return ut * ut + O * O > F * F + kt * kt && (at = G, tt = ot), {
    cx: at,
    cy: tt,
    x01: -f,
    y01: -p,
    x11: at * (i / I - 1),
    y11: tt * (i / I - 1)
  };
}
function we() {
  var t = Wd, e = Ud, n = Lt(0), r = null, i = Gd, s = Kd, a = jd, o = null, l = Xd(u);
  function u() {
    var f, p, h = +t.apply(this, arguments), d = +e.apply(this, arguments), y = i.apply(this, arguments) - Pi, b = s.apply(this, arguments) - Pi, m = Va(b - y), $ = b > y;
    if (o || (o = f = l()), d < h && (p = d, d = h, h = p), !(d > Bt)) o.moveTo(0, 0);
    else if (m > bi - Bt)
      o.moveTo(d * Nn(y), d * Oe(y)), o.arc(0, 0, d, y, b, !$), h > Bt && (o.moveTo(h * Nn(b), h * Oe(b)), o.arc(0, 0, h, b, y, $));
    else {
      var D = y, M = b, S = y, I = b, L = m, U = m, at = a.apply(this, arguments) / 2, tt = at > Bt && (r ? +r.apply(this, arguments) : er(h * h + d * d)), G = ss(Va(d - h) / 2, +n.apply(this, arguments)), ot = G, ut = G, O, F;
      if (tt > Bt) {
        var kt = za(tt / h * Oe(at)), ue = za(tt / d * Oe(at));
        (L -= kt * 2) > Bt ? (kt *= $ ? 1 : -1, S += kt, I -= kt) : (L = 0, S = I = (y + b) / 2), (U -= ue * 2) > Bt ? (ue *= $ ? 1 : -1, D += ue, M -= ue) : (U = 0, D = M = (y + b) / 2);
      }
      var yt = d * Nn(D), wt = d * Oe(D), et = h * Nn(I), Mt = h * Oe(I);
      if (G > Bt) {
        var q = d * Nn(M), Ot = d * Oe(M), Se = h * Nn(S), it = h * Oe(S), Jt;
        if (m < zr)
          if (Jt = Jd(yt, wt, Se, it, q, Ot, et, Mt)) {
            var Zt = yt - Jt[0], Qt = wt - Jt[1], Tn = q - Jt[0], _t = Ot - Jt[1], Ne = 1 / Oe(Bd((Zt * Tn + Qt * _t) / (er(Zt * Zt + Qt * Qt) * er(Tn * Tn + _t * _t))) / 2), Ge = er(Jt[0] * Jt[0] + Jt[1] * Jt[1]);
            ot = ss(G, (h - Ge) / (Ne - 1)), ut = ss(G, (d - Ge) / (Ne + 1));
          } else
            ot = ut = 0;
      }
      U > Bt ? ut > Bt ? (O = fi(Se, it, yt, wt, d, ut, $), F = fi(q, Ot, et, Mt, d, ut, $), o.moveTo(O.cx + O.x01, O.cy + O.y01), ut < G ? o.arc(O.cx, O.cy, ut, Dt(O.y01, O.x01), Dt(F.y01, F.x01), !$) : (o.arc(O.cx, O.cy, ut, Dt(O.y01, O.x01), Dt(O.y11, O.x11), !$), o.arc(0, 0, d, Dt(O.cy + O.y11, O.cx + O.x11), Dt(F.cy + F.y11, F.cx + F.x11), !$), o.arc(F.cx, F.cy, ut, Dt(F.y11, F.x11), Dt(F.y01, F.x01), !$))) : (o.moveTo(yt, wt), o.arc(0, 0, d, D, M, !$)) : o.moveTo(yt, wt), !(h > Bt) || !(L > Bt) ? o.lineTo(et, Mt) : ot > Bt ? (O = fi(et, Mt, q, Ot, h, -ot, $), F = fi(yt, wt, Se, it, h, -ot, $), o.lineTo(O.cx + O.x01, O.cy + O.y01), ot < G ? o.arc(O.cx, O.cy, ot, Dt(O.y01, O.x01), Dt(F.y01, F.x01), !$) : (o.arc(O.cx, O.cy, ot, Dt(O.y01, O.x01), Dt(O.y11, O.x11), !$), o.arc(0, 0, h, Dt(O.cy + O.y11, O.cx + O.x11), Dt(F.cy + F.y11, F.cx + F.x11), $), o.arc(F.cx, F.cy, ot, Dt(F.y11, F.x11), Dt(F.y01, F.x01), !$))) : o.arc(0, 0, h, I, S, $);
    }
    if (o.closePath(), f) return o = null, f + "" || null;
  }
  return u.centroid = function() {
    var f = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, p = (+i.apply(this, arguments) + +s.apply(this, arguments)) / 2 - zr / 2;
    return [Nn(p) * f, Oe(p) * f];
  }, u.innerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Lt(+f), u) : t;
  }, u.outerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Lt(+f), u) : e;
  }, u.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Lt(+f), u) : n;
  }, u.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Lt(+f), u) : r;
  }, u.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Lt(+f), u) : i;
  }, u.endAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Lt(+f), u) : s;
  }, u.padAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Lt(+f), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (o = f ?? null, u) : o;
  }, u;
}
function Zd(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Qd(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tp(t) {
  return t;
}
function as() {
  var t = tp, e = Qd, n = null, r = Lt(0), i = Lt(bi), s = Lt(0);
  function a(o) {
    var l, u = (o = Zd(o)).length, f, p, h = 0, d = new Array(u), y = new Array(u), b = +r.apply(this, arguments), m = Math.min(bi, Math.max(-bi, i.apply(this, arguments) - b)), $, D = Math.min(Math.abs(m) / u, s.apply(this, arguments)), M = D * (m < 0 ? -1 : 1), S;
    for (l = 0; l < u; ++l)
      (S = y[d[l] = l] = +t(o[l], l, o)) > 0 && (h += S);
    for (e != null ? d.sort(function(I, L) {
      return e(y[I], y[L]);
    }) : n != null && d.sort(function(I, L) {
      return n(o[I], o[L]);
    }), l = 0, p = h ? (m - u * M) / h : 0; l < u; ++l, b = $)
      f = d[l], S = y[f], $ = b + (S > 0 ? S * p : 0) + M, y[f] = {
        data: o[f],
        index: l,
        value: S,
        startAngle: b,
        endAngle: $,
        padAngle: D
      };
    return y;
  }
  return a.value = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Lt(+o), a) : t;
  }, a.sortValues = function(o) {
    return arguments.length ? (e = o, n = null, a) : e;
  }, a.sort = function(o) {
    return arguments.length ? (n = o, e = null, a) : n;
  }, a.startAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Lt(+o), a) : r;
  }, a.endAngle = function(o) {
    return arguments.length ? (i = typeof o == "function" ? o : Lt(+o), a) : i;
  }, a.padAngle = function(o) {
    return arguments.length ? (s = typeof o == "function" ? o : Lt(+o), a) : s;
  }, a;
}
function Mr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Mr.prototype = {
  constructor: Mr,
  scale: function(t) {
    return t === 1 ? this : new Mr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Mr(this.k, this.x + this.k * t, this.y + this.k * e);
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
Mr.prototype;
var ep = /* @__PURE__ */ Ju('<svg class="pie-chart-svg svelte-80ulj4"><defs><filter id="text-top-filter"><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImage"></feBlend></filter><pattern id="cross-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="transparent"></rect><circle cx="1.75" cy="1.75" r="1.5" fill="lightgray"></circle><circle cx="5.25" cy="5.25" r="1.5" fill="lightgray"></circle></pattern></defs></svg>');
const np = {
  hash: "svelte-80ulj4",
  code: `.pie-chart-svg.svelte-80ulj4 {width:100%;height:100%;max-width:700px;max-height:60vh;aspect-ratio:1 / 1; /* For a perfect circle, use 1:1 ratio */margin:0 auto;display:block;}

@media (max-width: 768px) {.pie-chart-svg.svelte-80ulj4 {max-height:60vh;}
}`
};
function xl(t, e) {
  zi(e, !0), Hs(t, np);
  let n = st(e, "jsonData", 7), r = st(e, "currentRound", 7, 1), i = st(e, "mouseEventType", 15), s = st(e, "mouseData", 15), a = st(e, "mouseX", 15), o = st(e, "mouseY", 15), l = st(e, "requestRoundChange", 7, (c) => {
  }), u = st(e, "candidateColors", 23, () => []), f = st(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), p = st(e, "firstRoundDeterminesPercentages", 7, !1), h = st(e, "randomizeOrder", 7, !1), d = st(e, "displayPhase", 15, 0);
  function y(c) {
    return c.isTransfer ? `${c.label}__transfer` : c.transferIndex != null ? `${c.label}__${c.transferIndex}` : c.label;
  }
  const b = 800, m = 800, $ = Math.min(b, m) * 0.3, D = b / 2, M = m / 2, S = "Pie", I = "PieOutline", L = "Donut", U = "TextLayer", at = "url(#cross-hatch)", tt = 1.15, G = 750, ot = 800, ut = "white", O = 1, F = "#ff00ff", kt = 3;
  function ue(c) {
    return "hatch-" + c.replace(/[^a-zA-Z0-9]/g, "-");
  }
  let yt = [], wt = [], et = [], Mt = 0, q = 0;
  const Ot = {}, Se = "No Further Rankings";
  let it = /* @__PURE__ */ At(null);
  function Jt() {
    const c = ct(x(it));
    c.select("#" + S).remove(), c.select("#" + I).remove(), c.select("#" + L).remove(), c.select("#" + U).remove();
  }
  function Zt(c) {
    l() && (ft = c, l()(c));
  }
  function Qt(c) {
    Jt(), et = Tn(c), yt = ea(c, S, et, D, M, 0, _t()), ea(c, I, et, D, M, 0, _t(), !1, !1, !0), Er();
  }
  rf(() => {
    Ht(), setTimeout(
      () => {
        Qt(r());
      },
      0
    );
  });
  function Tn(c) {
    const g = Pe(c);
    return Mt = Zn(c), g;
  }
  function _t() {
    return $;
  }
  function Ne() {
    return _t() * 1.41;
  }
  function Ge(c) {
    let g = 0;
    for (let _ = 1; _ < c; _++) {
      const A = n().results[_ - 1].tallyResults;
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
  function jr(c, g) {
    if (c === "exhausted") return Ge(g);
    {
      const _ = n().results[g - 1].tally;
      return Number(_[c]);
    }
  }
  function Jr(c, g) {
    return jr(c, g).toLocaleString("en-US");
  }
  function Zr(c, g) {
    const _ = p() ? Mt : ji(g);
    return (jr(c, g) / _).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 1 });
  }
  function Zn(c) {
    const g = n().results[c - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      _ += Number(E);
    return _;
  }
  function ke(c) {
    return c === "exhausted" || c === "Inactive Ballots";
  }
  function ji(c) {
    const g = n().results[c - 1].tally;
    let _ = 0;
    for (let [A, E] of Object.entries(g))
      ke(A) || (_ += Number(E));
    return _;
  }
  function Qr(c, g) {
    if (!c || c < 1 || c > n().results.length)
      return console.warn("In chosenCandidates: round ${round} is out of range."), [];
    if (f() && c === n().results.length)
      return [];
    const _ = n().results[c - 1].tallyResults, A = [];
    for (let E = 0; E < _.length; E++) {
      const T = _[E][g];
      T != null && A.push(T);
    }
    return A;
  }
  function dn(c) {
    return Qr(c, "eliminated");
  }
  function br(c) {
    let g = [];
    for (let _ = 1; _ <= c; _++) g = g.concat(Qr(_, "elected"));
    return [...new Set(g)];
  }
  function w(c, g) {
    const _ = n().results[g - 1].tallyResults;
    let A = 0;
    const E = _.findIndex((T) => (T == null ? void 0 : T.elected) && c == T.elected);
    if (E >= 0) {
      const T = _[E].transfers;
      if (T)
        for (let [P, Y] of Object.entries(T)) A += Number(Y);
    } else
      return 0;
    return A;
  }
  function H(c) {
    if (c < 1 || c > n().results.length) return !1;
    const g = n().results[c - 1].tallyResults;
    return g.length > 0 && g.some((_) => Object.keys(_.transfers).length > 0);
  }
  function Z(c) {
    const g = n().results.length;
    for (let _ = c; _ < g; _++)
      if (H(_)) return _;
    return g;
  }
  function ht(c, g) {
    c.some((_) => ke(_.label)) || c.push({ label: "exhausted", value: Ge(g) });
  }
  function xt(c) {
    let g = c | 0;
    return () => {
      g = g + 1831565813 | 0;
      let _ = Math.imul(g ^ g >>> 15, 1 | g);
      return _ = _ + Math.imul(_ ^ _ >>> 7, 61 | _) ^ _, ((_ ^ _ >>> 14) >>> 0) / 4294967296;
    };
  }
  function lt(c) {
    let g = 5381;
    for (let _ = 0; _ < c.length; _++)
      g = (g << 5) + g + c.charCodeAt(_) | 0;
    return g;
  }
  function zt(c) {
    var E;
    if (c.length <= 3) return c;
    const g = lt(((E = n().config) == null ? void 0 : E.contest) ?? ""), _ = xt(g), A = [...c];
    for (let T = A.length - 1; T > 0; T--) {
      const P = Math.floor(_() * (T + 1));
      [A[T], A[P]] = [A[P], A[T]];
    }
    return A;
  }
  function Me() {
    const c = Object.keys(n().results[0].tally), g = c.filter((E) => !ke(E)), _ = c.filter((E) => ke(E));
    return [...h() ? zt(g) : g, ..._];
  }
  function Pe(c) {
    const g = n().results[c - 1].tally, _ = [];
    for (const A of Me())
      A in g && _.push({ label: A, value: Number(g[A]) });
    return ht(_, c), _;
  }
  function Rn(c) {
    const g = n().results[c - 1].tally, _ = [];
    for (const A of Me())
      _.push({ label: A, value: Number(g[A] ?? 0) });
    return ht(_, c), _;
  }
  function pn(c, g) {
    const _ = [];
    for (const A of c) {
      if (A.label === "exhausted" || A.isTransfer) {
        _.push(A);
        continue;
      }
      const E = w(A.label, g);
      E > 0 ? (_.push({
        label: A.label,
        value: E,
        isTransfer: !0
      }), _.push({ ...A, value: A.value - E })) : _.push(A);
    }
    return _;
  }
  function Ht() {
    const c = ct(x(it)).select("defs").select("#cross-hatch");
    let g = 0;
    for (let [_, A] of Object.entries(n().results[0].tally)) {
      !u() || u().length === 0 ? g < 10 ? Ot[_] = Hd[g] : Ot[_] = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0") : Ot[_] = u()[g % u().length], g++;
      {
        const E = c.clone(!0);
        E.attr("id", ue(_)).select("rect").attr("fill", Ot[_]), E.selectAll("circle").attr("fill", "#383838");
      }
    }
    Ot.exhausted = at, Ot["Inactive Ballots"] = at;
  }
  function De() {
    ct(x(it)).select("#" + L).remove();
  }
  function Ft(c, g) {
    const _ = xi("global").duration(ot);
    g && _.on("end", g);
    const A = pn(et, c), T = as().sort(null).value((P) => P.value)(A);
    sa(c, S, T, 0, _t()), sa(c, I, T, 0, _t(), !0), et = A, yt = T, De(), El(c), Ml(), Dl(0, _t()), Er();
  }
  function fe(c, g) {
    const _ = xi("global").duration(ot);
    g && _.on("end", g), Tl(c);
  }
  function ye(c, g) {
    const _ = xi("global").duration(ot);
    g && _.on("end", g), $l(c), Al(_t(), Ne());
  }
  let bt = !1, te = [];
  function mt() {
    if (Er(), bt = !1, te.length === 0 && r() < n().results.length && !H(r())) {
      const c = Z(r());
      Zt(c);
    }
    ce();
  }
  function ce() {
    if (te.length === 0) {
      ft !== r() && (r() === ft + 1 && ft > 0 && r() <= n().results.length ? (ft = r(), Cn(r())) : r() >= 1 && r() <= n().results.length && (ft = r(), d(0), Qt(r())));
      return;
    }
    const c = te.shift();
    switch (c.type) {
      case "round": {
        const g = c.round;
        g === ft + 1 && ft > 0 && g <= n().results.length ? (ft = g, Cn(g)) : (g !== ft && g >= 1 && g <= n().results.length && (ft = g, d(0), Qt(g)), ce());
        break;
      }
      case "step":
        Zs();
        break;
    }
  }
  function Cn(c) {
    if (c <= 1 || c > n().results.length) {
      ce();
      return;
    }
    if (bt = !0, q = c, d(0), !H(q - 1)) {
      const g = Z(q - 1);
      g > q && (q = g, Zt(q)), mt();
      return;
    }
    Ft(q - 1, () => {
      d(1), fe(q - 1, () => {
        d(2), ye(q, () => {
          d(0), mt();
        });
      });
    });
  }
  function $r() {
    bt || (bt = !0, q = r(), Sn());
  }
  function Sn() {
    if (d(
      0
      // if in the middle of "one small step" animation, reset to 0.
    ), te.length > 0) {
      mt();
      return;
    }
    if (!H(q)) {
      q = Z(q), Zt(q), Qt(q), q < n().results.length ? Sn() : (d(0), mt());
      return;
    }
    const c = q < n().results.length - 1 ? Sn : () => {
      d(0), mt();
    };
    Ft(q, () => {
      d(1), fe(q, () => {
        d(2), q++, Zt(q), ye(q, c);
      });
    });
  }
  Is(() => {
    Ke();
  });
  let ft = 0;
  function Ke() {
    if (ft != r()) {
      if (bt) {
        te.push({ type: "round", round: r() });
        return;
      }
      if (ft == r() - 1 && ft > 0) {
        if (!H(ft)) {
          const c = Z(ft);
          ft = c, r(c + 1), ti(), Zt(r());
          return;
        }
        ti();
      } else
        je(r());
      ft = r();
    }
  }
  function je(c) {
    if (bt) {
      te.push({ type: "round", round: c });
      return;
    }
    d(0), Qt(c);
  }
  function ti() {
    if (bt) {
      te.push({ type: "round", round: r() });
      return;
    }
    if (r() <= 1) {
      console.warn(`animateOneRoundFn: can't animate to round ${r()}`);
      return;
    }
    if (q = r(), q > n().results.length) {
      Er(), bt = !1;
      return;
    }
    bt = !0, d() === 0 ? Ft(q - 1, () => {
      d(1), fe(q - 1, () => {
        d(2), ye(q, () => {
          d(0), mt();
        });
      });
    }) : d() === 1 ? fe(q - 1, () => {
      d(2), ye(q, () => {
        d(0), mt();
      });
    }) : d() === 2 && ye(q, () => {
      d(0), mt();
    });
  }
  function Zs() {
    if (r() > n().results.length) {
      Er(), bt = !1;
      return;
    }
    if (bt) {
      te.push({ type: "step" });
      return;
    }
    bt = !0, q = r(), d() === 0 ? Ft(q, () => {
      d(1), mt();
    }) : d() === 1 ? fe(q, () => {
      d(2), mt();
    }) : d() === 2 ? (q++, Zt(q), ye(q, () => {
      d(0), mt();
    })) : (bt = !1, console.warn("displayPhase out of range at ", d()));
  }
  function $l(c) {
    et = Rn(c), yt = ra(c, S, et, 0, _t(), !0), ra(c, I, et, 0, _t(), !1, !0);
  }
  function Al(c, g) {
    const _ = ct(x(it)).select("#" + L), E = ct(x(it)).select("#" + S), T = {};
    for (const N of yt) {
      const k = N.data.label;
      if (N.data.isTransfer) continue;
      const R = E.select("#" + CSS.escape(y(N.data)));
      R.empty() || (T[k] = {
        oldStart: Number(R.attr("prevStart")),
        oldEnd: Number(R.attr("prevEnd")),
        newStart: N.startAngle,
        newEnd: N.endAngle
      });
    }
    const P = _.selectAll(".slice");
    let Y = P.size();
    function V() {
      Y--, Y === 0 && Pl();
    }
    P.select("path").transition("global").duration(G).attrTween("d", function(N) {
      const k = N.startAngle, R = N.endAngle, C = R - k, Pt = T[N.data.label];
      let Q, Yt;
      if (Pt) {
        const Qn = (Pt.oldStart + Pt.oldEnd) / 2, Ll = (Pt.newStart + Pt.newEnd) / 2, ql = k - Qn;
        Q = Ll + ql, Yt = Q + C;
      } else
        Q = k, Yt = R;
      const nt = Ze(k, Q), Tt = Ze(R, Yt), ni = Ze(g, c), Tr = we();
      return function(Qn) {
        return Tr.innerRadius(Math.min(ni(Qn), c) - 1).outerRadius(ni(Qn)).startAngle(nt(Qn)).endAngle(Tt(Qn)), Tr(N);
      };
    }).on("end", (N) => V());
  }
  function El(c) {
    const g = Cl(c, yt);
    wt = na(c, L, g, D, M, _t(), Ne(), !1, !0);
    const _ = ct(x(it));
    _.select("#" + S).raise(), _.select("#" + I).raise();
  }
  function Tl(c) {
    const g = Nl(c, wt, yt);
    wt = aa(c, L, g, _t(), Ne(), !1);
  }
  function Ar(c) {
    return Ot[c.data.label];
  }
  function Rl(c) {
    const g = {}, _ = n().results[c - 1].tallyResults;
    for (let A = 0; A < _.length; A++) {
      let E = _[A].eliminated;
      if (E === void 0 && (E = _[A].elected), E === void 0) {
        console.warn("getTransferVotes: Eliminated and Elected undefined...");
        continue;
      }
      const T = _[A].transfers;
      if (T === void 0) {
        console.warn("getTransferVotes: transfers undefined...");
        continue;
      }
      for (let [P, Y] of Object.entries(T))
        g[P] === void 0 ? g[P] = Number(Y) : g[P] += Number(Y);
    }
    return g;
  }
  function Cl(c, g) {
    const _ = [], A = Mt, E = n().results[c - 1].tallyResults;
    for (let T = 0; T < E.length; T++) {
      let P = E[T].eliminated;
      if (P === void 0 && (P = E[T].elected), P === void 0) {
        console.warn("MakeDonutInfo: Eliminated and Elected undefined...");
        continue;
      }
      const Y = E[T].transfers;
      if (Y === void 0) {
        console.warn("makeDonutInfo: transfers undefined...");
        continue;
      }
      let V = g.find((k) => k.data.label == P && k.data.isTransfer);
      V === void 0 && (V = g.find((k) => k.data.label == P && !k.data.isTransfer));
      let N = 0;
      if (V) N = V.startAngle;
      else {
        console.warn("makeDonutInfo: No transfers");
        continue;
      }
      for (let [k, R] of Object.entries(Y)) {
        let C;
        const Pt = g.find((nt) => nt.data.label == k);
        if (Pt)
          C = structuredClone(Pt);
        else if (k == "exhausted")
          C = {
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
        const Yt = Number(R) / A * 2 * Math.PI;
        C.startAngle = N, N = C.endAngle = N + Yt, C.index = T, C.data.transferIndex = T, _.push(C);
      }
    }
    return _;
  }
  function Sl(c, g, _) {
    const A = {};
    for (let [E, T] of Object.entries(c)) {
      const P = _.find((N) => E == N.data.label);
      if (P === void 0) {
        E !== "residual surplus" && console.warn("getTransferStartAngles: mainPieObj not found for ", E);
        continue;
      }
      const Y = (P.startAngle + P.endAngle) / 2, V = c[P.data.label] / g * 2 * Math.PI;
      A[P.data.label] = Y - V / 2;
    }
    return A;
  }
  function Nl(c, g, _) {
    const A = [], E = Mt, T = Rl(c), P = Sl(T, E, _);
    for (let [Y, V] of g.entries()) {
      const N = structuredClone(V), k = V.endAngle - V.startAngle, R = _.find((C) => V.data.label === C.data.label && !C.data.isTransfer);
      if (R) {
        const C = R.data.label;
        N.startAngle = P[C], P[C] += k, N.endAngle = N.startAngle + k;
      } else if (V.data.label === "exhausted")
        N.startAngle = V.startAngle, N.endAngle = V.endAngle;
      else {
        console.warn("updateDonutInfo: unrecognized slice name ", V.data.label);
        continue;
      }
      N.index = Y, A.push(N);
    }
    return A;
  }
  function Qs(c, g, _, A) {
    const E = we().innerRadius(_ * tt).outerRadius(_ * tt), T = g.filter((k) => !k.data.isTransfer && k.data.value > 0), P = [], Y = A.append("g").attr("opacity", 0);
    for (const k of T) {
      const R = k.data.label === "exhausted" ? Se : k.data.label, C = E.centroid(k), Pt = ei(k.startAngle, k.endAngle), Q = Jr(k.data.label, c);
      let Yt;
      !p() && ke(k.data.label) ? Yt = Q : Yt = Q + " (" + Zr(k.data.label, c) + ")";
      const nt = Y.append("text").attr("transform", `translate(${C})`).attr("text-anchor", Pt).text(R);
      nt.append("tspan").attr("x", 0).attr("dy", "1.2em").text(Yt);
      const Tt = nt.node().getBBox();
      P.push({
        label: k.data.label,
        value: k.data.value,
        bbox: new DOMRect(Tt.x + C[0], Tt.y + C[1], Tt.width, Tt.height)
      });
    }
    Y.remove(), P.sort((k, R) => R.value - k.value);
    const V = [], N = /* @__PURE__ */ new Set();
    for (const k of P)
      V.some((C) => k.bbox.left < C.right && k.bbox.right > C.left && k.bbox.top < C.bottom && k.bbox.bottom > C.top) || (N.add(k.label), V.push(k.bbox));
    return N;
  }
  function ta(c, g, _, A, E, T) {
    const Y = ct(x(it)).append("g").attr("id", U).attr("transform", `translate(${_}, ${A})`), V = we().innerRadius(E * tt).outerRadius(E * tt), N = Qs(c, g, E, Y);
    Y.selectAll("text").data(g).enter().each(function(k) {
      !k.data.isTransfer && N.has(k.data.label) && ct(this).append("g").attr("id", (R) => y(R.data)).classed("eliminated", (R) => T.includes(R.data.label) || R.data.isTransfer === !0).each(function(R, C) {
        R.data.label === "exhausted" && ct(this).on("mouseenter", (Pt, Q) => Ol(Pt)).on("mouseleave", (Pt, Q) => Fl());
      }).append("text").attr("transform", (R) => `translate(${V.centroid(R)})`).attr("text-anchor", (R) => ei(R.startAngle, R.endAngle)).text((R) => R.data.label === "exhausted" ? Se : R.data.label).append("tspan").attr("x", 0).attr("dy", "1.2em").text((R) => {
        const C = Jr(R.data.label, c);
        return !p() && ke(R.data.label) ? C : C + " (" + Zr(R.data.label, c) + ")";
      });
    });
  }
  function kl(c, g, _, A) {
    const T = ct(x(it)).select("#" + U), P = Qs(c, g, _, T);
    T.selectAll("g").each(function(C) {
      C && C.data && !C.data.isTransfer && !P.has(C.data.label) && ct(this).remove();
    });
    const Y = T.selectAll("tspan"), V = T.selectAll("g").data(g, (C) => y(C.data)).classed("eliminated", (C) => A.includes(C.data.label) || C.data.isTransfer === !0), N = we().innerRadius(_ * tt).outerRadius(_ * tt + 1);
    Y.transition("global").duration(G).attr("transform", (C) => `translate(${N.centroid(C)})`).attr("text-anchor", (C) => ei(C.startAngle, C.endAngle)), V.select("text").transition("global").duration(G).attr("transform", (C) => `translate(${N.centroid(C)})`).attr("text-anchor", (C) => ei(C.startAngle, C.endAngle)).on("end", (C) => R());
    let k = V.size();
    function R(C) {
      k--, k === 0 && (T.remove(), ta(c, g, D, M, _, A));
    }
  }
  function ea(c, g, _, A, E, T, P, Y = !0, V = !1, N = !1) {
    const R = as().sort(null).value((C) => C.value)(_);
    return na(c, g, R, A, E, T, P, Y, V, N), R;
  }
  function Er() {
    ct(x(it)).select("#" + I).selectAll(".elected").select("path").style("stroke", F).style("stroke-width", `${kt}px`);
  }
  function na(c, g, _, A, E, T, P, Y, V, N = !1) {
    const k = dn(c), R = br(c), Q = ct(x(it)).attr("viewBox", `0 0 ${b} ${m}`).attr("preserveAspectRatio", "xMidYMid meet").classed("pie-chart-svg", !0).append("g").attr("id", g).attr("transform", `translate(${A}, ${E})`).selectAll(".slice").data(_).enter().append("g").attr("class", "slice").classed("eliminated", (nt) => k.includes(nt.data.label) || nt.data.isTransfer === !0).classed("elected", (nt) => R.includes(nt.data.label) && !nt.data.isTransfer).attr("id", (nt) => y(nt.data));
    N ? Q.style("pointer-events", "none") : Q.on("mouseenter", (nt, Tt) => Zi(nt, Tt)).on("mouseleave", (nt, Tt) => Qi(nt, Tt));
    const Yt = we().outerRadius(P).innerRadius(T);
    if (V) {
      const nt = we().outerRadius(T + 1).innerRadius(T);
      Q.append("path").attr("d", nt).attr("stroke", N ? "none" : T === 0 ? ut : "none").attr("stroke-width", N ? 0 : T === 0 ? O : 0).attr("fill", N ? "none" : (Tt) => Ar(Tt)).transition("global").duration(G).attr("d", (Tt) => Yt(Tt)).on("end", (Tt) => {
        N || Ji();
      });
    } else
      Q.append("path").attr("d", (nt) => Yt(nt)).attr("fill", N ? "none" : (nt) => Ar(nt)).attr("stroke", N ? "none" : ut).attr("stroke-width", N ? 0 : O), N || Ji();
    return Y && !N && ta(c, _, A, E, P, k), _;
  }
  function Ml() {
    const _ = ct(x(it)).select("#" + U).selectAll(".eliminated");
    _.size() > 0 && _.classed("finished", !0);
  }
  function Pl() {
    const _ = ct(x(it)).select("#" + U).selectAll(".finished");
    _.size() > 0 && _.remove();
  }
  function Dl(c, g) {
    const E = ct(x(it)).select("#" + S).selectAll(".eliminated"), T = we().innerRadius(c), P = we().outerRadius(g);
    E.classed("finished", !0).select("path").attr("stroke", "none").transition("global").duration(G).attrTween("d", function(Y) {
      const V = Ze(g, c);
      return function(N) {
        return P.innerRadius(V(N)), P(Y);
      };
    }).attr("fill", (Y) => `url(#${ue(Y.data.label)})`), E.clone(!0).classed("finished", !0).select("path").transition("global").duration(G).attrTween("d", function(Y) {
      const V = Ze(g, c);
      return function(N) {
        return T.outerRadius(V(N)), T(Y);
      };
    }).attr("fill", (Y) => Ar(Y));
  }
  function ei(c, g) {
    const _ = (c + g) / 2;
    return _ > Math.PI * 11 / 6 || _ < Math.PI * 1 / 6 || _ > Math.PI * 5 / 6 && _ < Math.PI * 7 / 6 ? "middle" : _ < Math.PI ? "start" : "end";
  }
  function Ji() {
    ct(x(
      it
      // force redisplay of text labels
    )).select("#" + U).raise().append("g").remove();
  }
  function ra(c, g, _, A, E, T, P = !1) {
    const V = as().sort(null).value((N) => N.value)(_);
    return aa(c, g, V, A, E, T, P), V;
  }
  function ia(c, g, _, A, E = !1) {
    const T = dn(c), P = br(c), N = ct(x(it)).select("#" + g).selectAll(".slice").data(_, (R) => y(R.data));
    N.exit().remove();
    const k = N.enter().append("g").attr("class", "slice").attr("id", (R) => y(R.data)).classed("eliminated", !0);
    return E ? k.style("pointer-events", "none") : k.on("mouseenter", (R, C) => Zi(R, C)).on("mouseleave", (R, C) => Qi(R, C)), k.append("path").attr("d", (R) => A(R)).attr("fill", E ? "none" : (R) => Ar(R)).attr("stroke", E ? "none" : ut).attr("stroke-width", E ? 0 : O), N.classed("eliminated", (R) => T.includes(R.data.label)).classed("elected", (R) => P.includes(R.data.label)), E || N.on("mouseenter", (R, C) => Zi(R, C)).on("mouseleave", (R, C) => Qi(R, C)), N;
  }
  function sa(c, g, _, A, E, T = !1) {
    const P = we().outerRadius(E).innerRadius(A);
    ia(c, g, _, P, T).select("path").attr("d", (V) => P(V)).attr("fill", T ? "none" : (V) => Ar(V));
  }
  function aa(c, g, _, A, E, T, P = !1) {
    const Y = we().outerRadius(E).innerRadius(A).startAngle((Q) => Q.startAngle).endAngle((Q) => Q.endAngle), V = we().outerRadius(E).innerRadius(A);
    ct(x(it)).select("#" + g).selectAll(".slice").attr("prevStart", (Q) => Q.startAngle).attr("prevEnd", (Q) => Q.endAngle);
    const R = ia(c, g, _, V, P);
    let C = R.size();
    function Pt() {
      C--, C <= 0 && (P || Ji());
    }
    return R.select("path").transition("global").duration(G).attrTween("d", function(Q) {
      const Yt = Number(ct(this.parentNode).attr("prevStart")), nt = Number(ct(this.parentNode).attr("prevEnd")), Tt = Ze(Yt, Q.startAngle), ni = Ze(nt, Q.endAngle);
      return (Tr) => (Y.startAngle(Tt(Tr)).endAngle(ni(Tr)), Y(Q));
    }).on("end", function(Q) {
      Q.startAngle === Q.endAngle && ct(this).attr("stroke", "none"), Pt();
    }), T && !P && kl(c, _, E, dn(c)), _;
  }
  function Zi(c, g) {
    s(g.data.label), i("enter"), a(c.clientX), o(c.clientY);
  }
  function Qi(c, g) {
    s(g.data.label), i("leave");
  }
  function Ol(c, g) {
    i("show-exhausted"), a(c.clientX), o(c.clientY);
  }
  function Fl(c, g) {
    i("hide-exhausted");
  }
  var Il = {
    pieColors: Ot,
    exhaustedLabel: Se,
    countExhaustedVotes: Ge,
    getEliminatedCandidates: dn,
    getElectedCandidates: br,
    runFullAnimationFn: $r,
    animateOnePhaseFn: Zs,
    get jsonData() {
      return n();
    },
    set jsonData(c) {
      n(c), rt();
    },
    get currentRound() {
      return r();
    },
    set currentRound(c = 1) {
      r(c), rt();
    },
    get mouseEventType() {
      return i();
    },
    set mouseEventType(c) {
      i(c), rt();
    },
    get mouseData() {
      return s();
    },
    set mouseData(c) {
      s(c), rt();
    },
    get mouseX() {
      return a();
    },
    set mouseX(c) {
      a(c), rt();
    },
    get mouseY() {
      return o();
    },
    set mouseY(c) {
      o(c), rt();
    },
    get requestRoundChange() {
      return l();
    },
    set requestRoundChange(c = (g) => {
    }) {
      l(c), rt();
    },
    get candidateColors() {
      return u();
    },
    set candidateColors(c = []) {
      u(c), rt();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return f();
    },
    set excludeFinalWinnerAndEliminatedCandidate(c = !1) {
      f(c), rt();
    },
    get firstRoundDeterminesPercentages() {
      return p();
    },
    set firstRoundDeterminesPercentages(c = !1) {
      p(c), rt();
    },
    get randomizeOrder() {
      return h();
    },
    set randomizeOrder(c = !1) {
      h(c), rt();
    },
    get displayPhase() {
      return d();
    },
    set displayPhase(c = 0) {
      d(c), rt();
    }
  }, oa = ep();
  return gi(oa, (c) => pt(it, c), () => x(it)), Ut(t, oa), Hi(Il);
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
var rp = /* @__PURE__ */ We("<div></div>"), ip = /* @__PURE__ */ We('<!> <div class="step svelte-1l4eyw0"><div></div> <span> </span></div>', 1), sp = /* @__PURE__ */ We('<div role="button" aria-label="Advance animation phase"></div>');
const ap = {
  hash: "svelte-1l4eyw0",
  code: ".stepper.svelte-1l4eyw0 {display:inline-flex;align-items:center;cursor:pointer;user-select:none;padding:4px 8px;border-radius:4px;}.stepper.svelte-1l4eyw0:hover:not(.disabled) {background-color:#f0f0f0;}.stepper.disabled.svelte-1l4eyw0 {cursor:default;opacity:0.4;}.step.svelte-1l4eyw0 {display:flex;align-items:center;gap:4px;}.dot.svelte-1l4eyw0 {width:10px;height:10px;border-radius:50%;border:2px solid #ccc;background:white;transition:background-color 0.3s, border-color 0.3s;}.dot.active.svelte-1l4eyw0 {background:#4747ff;border-color:#4747ff;}.dot.completed.svelte-1l4eyw0 {background:#8888ff;border-color:#8888ff;}.label.svelte-1l4eyw0 {font-size:0.75rem;color:#888;transition:color 0.3s, font-weight 0.3s;}.label.active.svelte-1l4eyw0 {color:#4747ff;font-weight:bold;}.label.completed.svelte-1l4eyw0 {color:#8888ff;}.connector.svelte-1l4eyw0 {width:20px;height:2px;background:#ccc;margin:0 4px;transition:background-color 0.3s;}.connector.completed.svelte-1l4eyw0 {background:#8888ff;}"
};
function bl(t, e) {
  zi(e, !0), Hs(t, ap);
  let n = st(e, "labels", 23, () => ["Eliminate", "Transfer", "Consolidate"]), r = st(e, "currentStep", 7, 0), i = st(e, "disabled", 7, !1), s = st(e, "onAdvance", 7, () => {
  });
  function a() {
    i() || s()();
  }
  function o(p) {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), a());
  }
  var l = {
    get labels() {
      return n();
    },
    set labels(p = ["Eliminate", "Transfer", "Consolidate"]) {
      n(p), rt();
    },
    get currentStep() {
      return r();
    },
    set currentStep(p = 0) {
      r(p), rt();
    },
    get disabled() {
      return i();
    },
    set disabled(p = !1) {
      i(p), rt();
    },
    get onAdvance() {
      return s();
    },
    set onAdvance(p = () => {
    }) {
      s(p), rt();
    }
  }, u = sp();
  let f;
  return u.__click = a, u.__keydown = o, vi(u, 21, n, pi, (p, h, d) => {
    var y = ip(), b = _n(y);
    {
      var m = (U) => {
        var at = rp();
        let tt;
        Qe(() => tt = si(at, 1, "connector svelte-1l4eyw0", null, tt, { completed: !i() && d <= r() })), Ut(U, at);
      };
      tr(b, (U) => {
        d > 0 && U(m);
      });
    }
    var $ = ee(b, 2), D = Xt($);
    let M;
    var S = ee(D, 2);
    let I;
    var L = Xt(S, !0);
    It(S), It($), Qe(() => {
      M = si(D, 1, "dot svelte-1l4eyw0", null, M, {
        active: !i() && d === r(),
        completed: !i() && d < r()
      }), I = si(S, 1, "label svelte-1l4eyw0", null, I, {
        active: !i() && d === r(),
        completed: !i() && d < r()
      }), mn(L, x(h));
    }), Ut(p, y);
  }), It(u), Qe(() => {
    f = si(u, 1, "stepper svelte-1l4eyw0", null, f, { disabled: i() }), ba(u, "tabindex", i() ? -1 : 0), ba(u, "aria-disabled", i());
  }), Ut(t, u), Hi(l);
}
Gu(["click", "keydown"]);
Ys(bl, { labels: {}, currentStep: {}, disabled: {}, onAdvance: {} }, [], [], { mode: "open" });
var op = /* @__PURE__ */ We("<span> </span> <!>", 1), lp = /* @__PURE__ */ We("About to eliminate: <!>", 1), up = /* @__PURE__ */ We("<span> </span> <!>", 1), fp = /* @__PURE__ */ We(" <!>", 1), cp = /* @__PURE__ */ We('<h3 class="svelte-1r6y5gl"> </h3> <h4 class="svelte-1r6y5gl"><!> <!></h4>', 1), hp = /* @__PURE__ */ We("<span> </span> <br/>", 1), dp = /* @__PURE__ */ We('<div class="animation-button-container svelte-1r6y5gl"><!></div> <div class="common-header svelte-1r6y5gl"></div> <div class="page-container svelte-1r6y5gl"><div class="visualizations-container svelte-1r6y5gl"><div class="pie-chart-container svelte-1r6y5gl"><!></div></div> <!></div> <div class="tooltip svelte-1r6y5gl"><h3 class="svelte-1r6y5gl"> </h3> <!></div> <div class="tooltip svelte-1r6y5gl"> <br/> these ballots have already been eliminated.</div>', 1);
const pp = {
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
function vp(t, e) {
  zi(e, !0), Hs(t, pp);
  const n = 0.85;
  let r = st(e, "electionSummary", 7), i = st(e, "currentRound", 7, 1), s = st(e, "requestRoundChange", 7, (w) => {
  }), a = st(e, "candidateColors", 23, () => []), o = st(e, "textForWinner", 7, "elected"), l = st(e, "excludeFinalWinnerAndEliminatedCandidate", 7, !1), u = st(e, "firstRoundDeterminesPercentages", 7, !1), f = st(e, "randomizeOrder", 7, !1), p = st(e, "showCaptions", 7, !1);
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
  let d = /* @__PURE__ */ vn(() => h[o()] ?? h.elected), y = /* @__PURE__ */ At(null), b = /* @__PURE__ */ At(null), m = /* @__PURE__ */ At(""), $ = /* @__PURE__ */ At(Dn([])), D = /* @__PURE__ */ At(""), M = /* @__PURE__ */ At(""), S = /* @__PURE__ */ At(0), I = /* @__PURE__ */ At(0), L = /* @__PURE__ */ vn(() => U(r()));
  function U(w) {
    if (typeof w == "string")
      try {
        w = JSON.parse(w);
      } catch (H) {
        return console.error("Failed to parse JSON string:", H), {};
      }
    return w || {};
  }
  function at(w) {
    s() ? s()(w) : console.warn("onRoundChange in PieChart: requestRoundChange is null");
  }
  function tt(w, H, Z) {
    w.style.left = H + "px", w.style.top = Z + 20 + "px", w.style.transform = "none", requestAnimationFrame(() => {
      const lt = w.getBoundingClientRect();
      let zt = H, Me = Z + 20;
      zt + lt.width > window.innerWidth - 12 && (zt = window.innerWidth - lt.width - 12), zt < 12 && (zt = 12), Me + lt.height > window.innerHeight - 12 && (Me = Z - lt.height - 12), w.style.left = zt + "px", w.style.top = Me + "px";
    });
  }
  function G() {
    switch (x(D)) {
      case "enter":
        ((w) => {
          var H = iu(w, 2);
          pt($, H[0], !0), pt(m, H[1], !0);
        })(ut(x(M), i())), x(y) && (tt(x(y), x(S) || 0, x(I) || 0), x(y).style.opacity = String(n));
        break;
      case "leave":
        x(y) && (x(y).style.opacity = "0"), pt($, [], !0), pt(m, "");
        break;
      case "show-exhausted":
        x(b) && (tt(x(b), x(S) || 0, x(I) || 0), x(b).style.opacity = String(n));
        break;
      case "hide-exhausted":
        x(b) && (x(b).style.opacity = "0");
        break;
      case "":
        break;
      default:
        console.log("Unknown mouse event: ", x(D));
        break;
    }
  }
  Is(() => G());
  function ot(w, H) {
    return w === 1 ? H ? "vote was" : "vote will be" : H ? "votes were" : "votes will be";
  }
  function ut(w, H) {
    const Z = [], ht = w === "exhausted" ? Se() : w;
    let xt;
    w === "exhausted" ? xt = q(1) : xt = x(L).results[0].tally[w], Z.push(`${ht} started with ${xt} votes.`);
    for (let lt = 1; lt <= H; lt++) {
      lt === H && (w === "exhausted" ? xt = q(H) : xt = x(L).results[H - 1].tally[w], Z.push(`${ht} has ${xt} votes at round ${H}.`));
      const zt = x(L).results[lt - 1].tallyResults, Me = wt(lt);
      for (let Pe = 0; Pe < zt.length; Pe++) {
        const Rn = zt[Pe].transfers, pn = zt[Pe].eliminated, Ht = zt[Pe].elected;
        if (!Me) {
          if (pn)
            pn === w && Z.push(`${ht} will be eliminated on round ${lt}.`);
          else if (w === Ht && (Z.push(`${ht} ${x(d).event} on round ${lt}.`), Rn))
            for (let [Ft, fe] of Object.entries(Rn))
              Z.push(`${fe} ${ot(Number(fe), lt < H)} transferred to ${Ft} on round ${lt}.`);
        }
        const De = pn || Ht;
        if (De) {
          const Ft = Number(Rn[w]);
          Ft && Z.push(`${Ft} ${ot(Ft, lt < H)} transferred from ${De} on round ${lt}.`);
        }
      }
    }
    return [Z, ht];
  }
  function O() {
    let w = 0;
    for (let H = 1; H <= x(L).results.length; H++) {
      if (wt(H)) continue;
      const Z = x(L).results[H - 1].tallyResults;
      for (let ht = 0; ht < Z.length; ht++)
        Z[ht].elected && w++;
    }
    return w;
  }
  let F, kt = /* @__PURE__ */ At(0);
  function ue(w) {
    var xt;
    return !((xt = x(L)) != null && xt.results) || w < 1 || w > x(L).results.length ? ["Eliminate", "Transfer", "Consolidate"] : [x(L).results[w - 1].tallyResults.some((lt) => lt.eliminated) ? "Eliminate" : "Surplus", "Transfer", "Consolidate"];
  }
  function yt(w) {
    var Z;
    if (!((Z = x(L)) != null && Z.results) || w < 1 || w > x(L).results.length || w === x(L).results.length) return !0;
    const H = x(L).results[w - 1].tallyResults;
    return H.length === 0 || H.every((ht) => Object.keys(ht.transfers).length === 0);
  }
  function wt(w) {
    return l() && x(L).results && w === x(L).results.length;
  }
  function et(w) {
    return wt(w) ? [] : F ? F.getEliminatedCandidates(w) : [];
  }
  function Mt(w) {
    return wt(w) ? [] : F ? F.getElectedCandidates(w) : [];
  }
  function q(w) {
    return F ? F.countExhaustedVotes(w) : 0;
  }
  function Ot() {
    F && F.animateOnePhaseFn && F.animateOnePhaseFn();
  }
  function Se() {
    return F ? F.exhaustedLabel : "";
  }
  function it() {
    return F ? F.pieColors : {};
  }
  var Jt = {
    get electionSummary() {
      return r();
    },
    set electionSummary(w) {
      r(w), rt();
    },
    get currentRound() {
      return i();
    },
    set currentRound(w = 1) {
      i(w), rt();
    },
    get requestRoundChange() {
      return s();
    },
    set requestRoundChange(w = (H) => {
    }) {
      s(w), rt();
    },
    get candidateColors() {
      return a();
    },
    set candidateColors(w = []) {
      a(w), rt();
    },
    get textForWinner() {
      return o();
    },
    set textForWinner(w = "elected") {
      o(w), rt();
    },
    get excludeFinalWinnerAndEliminatedCandidate() {
      return l();
    },
    set excludeFinalWinnerAndEliminatedCandidate(w = !1) {
      l(w), rt();
    },
    get firstRoundDeterminesPercentages() {
      return u();
    },
    set firstRoundDeterminesPercentages(w = !1) {
      u(w), rt();
    },
    get randomizeOrder() {
      return f();
    },
    set randomizeOrder(w = !1) {
      f(w), rt();
    },
    get showCaptions() {
      return p();
    },
    set showCaptions(w = !1) {
      p(w), rt();
    }
  }, Zt = dp(), Qt = _n(Zt), Tn = Xt(Qt);
  {
    let w = /* @__PURE__ */ vn(() => ue(i())), H = /* @__PURE__ */ vn(() => yt(i()));
    bl(Tn, {
      get labels() {
        return x(w);
      },
      get currentStep() {
        return x(kt);
      },
      get disabled() {
        return x(H);
      },
      onAdvance: Ot
    });
  }
  It(Qt);
  var _t = ee(Qt, 4), Ne = Xt(_t), Ge = Xt(Ne), jr = Xt(Ge);
  gi(
    xl(jr, {
      get jsonData() {
        return x(L);
      },
      get currentRound() {
        return i();
      },
      requestRoundChange: at,
      get candidateColors() {
        return a();
      },
      get excludeFinalWinnerAndEliminatedCandidate() {
        return l();
      },
      get firstRoundDeterminesPercentages() {
        return u();
      },
      get randomizeOrder() {
        return f();
      },
      get mouseEventType() {
        return x(D);
      },
      set mouseEventType(w) {
        pt(D, w, !0);
      },
      get mouseData() {
        return x(M);
      },
      set mouseData(w) {
        pt(M, w, !0);
      },
      get mouseX() {
        return x(S);
      },
      set mouseX(w) {
        pt(S, w, !0);
      },
      get mouseY() {
        return x(I);
      },
      set mouseY(w) {
        pt(I, w, !0);
      },
      get displayPhase() {
        return x(kt);
      },
      set displayPhase(w) {
        pt(kt, w, !0);
      }
    }),
    (w) => F = w,
    () => F
  ), It(Ge), It(Ne);
  var Jr = ee(Ne, 2);
  {
    var Zr = (w) => {
      var H = cp(), Z = _n(H), ht = Xt(Z);
      It(Z);
      var xt = ee(Z, 2), lt = Xt(xt);
      {
        var zt = (Ht) => {
          var De = lp(), Ft = ee(_n(De));
          vi(Ft, 17, () => et(i()), pi, (fe, ye, bt) => {
            var te = op(), mt = _n(te);
            let ce;
            var Cn = Xt(mt, !0);
            It(mt);
            var $r = ee(mt, 2);
            {
              var Sn = (Ke) => {
                var je = _a(", ");
                Ut(Ke, je);
              }, ft = /* @__PURE__ */ vn(() => bt < et(i()).length - 1);
              tr($r, (Ke) => {
                x(ft) && Ke(Sn);
              });
            }
            Qe(
              (Ke) => {
                ce = xa(mt, "", ce, Ke), mn(Cn, x(ye));
              },
              [() => ({ color: it()[x(ye)] })]
            ), Ut(fe, te);
          }), Ut(Ht, De);
        }, Me = /* @__PURE__ */ vn(() => et(i()).length > 0);
        tr(lt, (Ht) => {
          x(Me) && Ht(zt);
        });
      }
      var Pe = ee(lt, 2);
      {
        var Rn = (Ht) => {
          var De = fp(), Ft = _n(De), fe = ee(Ft);
          vi(fe, 17, () => Mt(i()), pi, (ye, bt, te) => {
            var mt = up(), ce = _n(mt);
            let Cn;
            var $r = Xt(ce, !0);
            It(ce);
            var Sn = ee(ce, 2);
            {
              var ft = (je) => {
                var ti = _a(", ");
                Ut(je, ti);
              }, Ke = /* @__PURE__ */ vn(() => te < Mt(i()).length - 1);
              tr(Sn, (je) => {
                x(Ke) && je(ft);
              });
            }
            Qe(
              (je) => {
                Cn = xa(ce, "", Cn, je), mn($r, x(bt));
              },
              [() => ({ color: it()[x(bt)] })]
            ), Ut(ye, mt);
          }), Qe(() => mn(Ft, `${x(d).caption ?? ""}: `)), Ut(Ht, De);
        }, pn = /* @__PURE__ */ vn(() => Mt(i()).length > 0);
        tr(Pe, (Ht) => {
          x(pn) && Ht(Rn);
        });
      }
      It(xt), Qe((Ht) => mn(ht, `${x(L).config.contest ?? ""}, ${Ht ?? ""} ${x(d).infinitive ?? ""}, Round ${i() ?? ""}.`), [O]), Ut(w, H);
    };
    tr(Jr, (w) => {
      p() && w(Zr);
    });
  }
  It(_t);
  var Zn = ee(_t, 2), ke = Xt(Zn), ji = Xt(ke, !0);
  It(ke);
  var Qr = ee(ke, 2);
  vi(Qr, 17, () => x($), pi, (w, H) => {
    var Z = hp(), ht = _n(Z), xt = Xt(ht, !0);
    It(ht), us(2), Qe(() => mn(xt, x(H))), Ut(w, Z);
  }), It(Zn), gi(Zn, (w) => pt(y, w), () => x(y));
  var dn = ee(Zn, 2), br = Xt(dn);
  return us(2), It(dn), gi(dn, (w) => pt(b, w), () => x(b)), Qe(
    (w) => {
      mn(ji, x(m)), mn(br, `"${w ?? ""}" means all the candidates ranked on `);
    },
    [Se]
  ), Ut(t, Zt), Hi(Jt);
}
customElements.define("pie-chart", Ys(
  vp,
  {
    electionSummary: {},
    currentRound: {},
    requestRoundChange: {},
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
