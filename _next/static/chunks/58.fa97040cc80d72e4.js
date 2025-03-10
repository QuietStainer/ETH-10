"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [58],
  {
    86058: function (e, t, n) {
      n.d(t, {
        WalletConnectModal: function () {
          return d;
        },
      });
      var r = n(50531),
        a = Object.defineProperty,
        s = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        o = (e, t, n) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        c = (e, t) => {
          for (var n in t || (t = {})) i.call(t, n) && o(e, n, t[n]);
          if (s) for (var n of s(t)) l.call(t, n) && o(e, n, t[n]);
          return e;
        };
      class d {
        constructor(e) {
          (this.openModal = r.jb.open),
            (this.closeModal = r.jb.close),
            (this.subscribeModal = r.jb.subscribe),
            (this.setTheme = r.ThemeCtrl.setThemeConfig),
            r.ThemeCtrl.setThemeConfig(e),
            r.ConfigCtrl.setConfig(c({ enableStandaloneMode: !0 }, e)),
            this.initUi();
        }
        async initUi() {
          if ("u" > typeof window) {
            await n.e(850).then(n.bind(n, 77850));
            let e = document.createElement("w3m-modal");
            document.body.insertAdjacentElement("beforeend", e),
              r.OptionsCtrl.setIsUiLoaded(!0);
          }
        }
      }
    },
    50531: function (e, t, n) {
      let r;
      n.d(t, {
        AccountCtrl: function () {
          return _;
        },
        Id: function () {
          return O;
        },
        ConfigCtrl: function () {
          return U;
        },
        zv: function () {
          return L;
        },
        uA: function () {
          return M;
        },
        ExplorerCtrl: function () {
          return q;
        },
        jb: function () {
          return Z;
        },
        OptionsCtrl: function () {
          return D;
        },
        AV: function () {
          return A;
        },
        ThemeCtrl: function () {
          return el;
        },
        ToastCtrl: function () {
          return ec;
        },
        WcConnectionCtrl: function () {
          return X;
        },
      });
      let a = Symbol(),
        s = Symbol(),
        i = (e, t) => new Proxy(e, t),
        l = Object.getPrototypeOf,
        o = new WeakMap(),
        c = (e) =>
          e &&
          (o.has(e)
            ? o.get(e)
            : l(e) === Object.prototype || l(e) === Array.prototype),
        d = (e) => "object" == typeof e && null !== e,
        u = (e) => {
          if (Array.isArray(e)) return Array.from(e);
          let t = Object.getOwnPropertyDescriptors(e);
          return (
            Object.values(t).forEach((e) => {
              e.configurable = !0;
            }),
            Object.create(l(e), t)
          );
        },
        f = (e) => e[s] || e,
        p = (e, t, n, r) => {
          if (!c(e)) return e;
          let l = r && r.get(e);
          if (!l) {
            let t = f(e);
            (l = Object.values(Object.getOwnPropertyDescriptors(t)).some(
              (e) => !e.configurable && !e.writable
            )
              ? [t, u(t)]
              : [t]),
              null == r || r.set(e, l);
          }
          let [o, d] = l,
            g = n && n.get(o);
          return (
            (g && !!d === g[1].f) ||
              (((g = ((e, t) => {
                let n = { f: t },
                  r = !1,
                  i = (t, a) => {
                    if (!r) {
                      let r = n.a.get(e);
                      if ((r || ((r = {}), n.a.set(e, r)), "w" === t)) r.w = !0;
                      else {
                        let e = r[t];
                        e || ((e = new Set()), (r[t] = e)), e.add(a);
                      }
                    }
                  },
                  l = {
                    get: (t, r) =>
                      r === s
                        ? e
                        : (i("k", r), p(Reflect.get(t, r), n.a, n.c, n.t)),
                    has: (t, s) =>
                      s === a
                        ? ((r = !0), n.a.delete(e), !0)
                        : (i("h", s), Reflect.has(t, s)),
                    getOwnPropertyDescriptor: (e, t) => (
                      i("o", t), Reflect.getOwnPropertyDescriptor(e, t)
                    ),
                    ownKeys: (e) => (i("w"), Reflect.ownKeys(e)),
                  };
                return t && (l.set = l.deleteProperty = () => !1), [l, n];
              })(o, !!d))[1].p = i(d || o, g[0])),
              n && n.set(o, g)),
            (g[1].a = t),
            (g[1].c = n),
            (g[1].t = r),
            g[1].p
          );
        },
        g = (e, t, n, r) => {
          if (Object.is(e, t)) return !1;
          if (!d(e) || !d(t)) return !0;
          let a = n.get(f(e));
          if (!a) return !0;
          if (r) {
            let n = r.get(e);
            if (n && n.n === t) return n.g;
            r.set(e, { n: t, g: !1 });
          }
          let s = null;
          try {
            for (let n of a.h || [])
              if ((s = Reflect.has(e, n) !== Reflect.has(t, n))) return s;
            if (!0 === a.w) {
              if (
                (s = ((e, t) => {
                  let n = Reflect.ownKeys(e),
                    r = Reflect.ownKeys(t);
                  return n.length !== r.length || n.some((e, t) => e !== r[t]);
                })(e, t))
              )
                return s;
            } else
              for (let n of a.o || [])
                if (
                  (s =
                    !!Reflect.getOwnPropertyDescriptor(e, n) !=
                    !!Reflect.getOwnPropertyDescriptor(t, n))
                )
                  return s;
            for (let i of a.k || []) if ((s = g(e[i], t[i], n, r))) return s;
            return null === s && (s = !0), s;
          } finally {
            r && r.set(e, { n: t, g: s });
          }
        },
        h = (e) => (c(e) && e[s]) || null,
        b = (e, t = !0) => {
          o.set(e, t);
        },
        w = (e) => "object" == typeof e && null !== e,
        m = new WeakMap(),
        y = new WeakSet(),
        v = (
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          n = (e) =>
            w(e) &&
            !y.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          r = (e) => {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw e;
            }
          },
          a = new WeakMap(),
          s = (e, t, n = r) => {
            let i = a.get(e);
            if ((null == i ? void 0 : i[0]) === t) return i[1];
            let l = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              b(l, !0),
              a.set(e, [t, l]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(l, t)) return;
                let r = Reflect.get(e, t),
                  a = { value: r, enumerable: !0, configurable: !0 };
                if (y.has(r)) b(r, !1);
                else if (r instanceof Promise)
                  delete a.value, (a.get = () => n(r));
                else if (m.has(r)) {
                  let [e, t] = m.get(r);
                  a.value = s(e, t(), n);
                }
                Object.defineProperty(l, t, a);
              }),
              l
            );
          },
          i = new WeakMap(),
          l = [1, 1],
          o = (r) => {
            if (!w(r)) throw Error("object required");
            let a = i.get(r);
            if (a) return a;
            let c = l[0],
              d = new Set(),
              u = (e, t = ++l[0]) => {
                c !== t && ((c = t), d.forEach((n) => n(e, t)));
              },
              f = l[1],
              p = (e = ++l[1]) => (
                f === e ||
                  d.size ||
                  ((f = e),
                  b.forEach(([t]) => {
                    let n = t[1](e);
                    n > c && (c = n);
                  })),
                c
              ),
              g = (e) => (t, n) => {
                let r = [...t];
                (r[1] = [e, ...r[1]]), u(r, n);
              },
              b = new Map(),
              v = (e, t) => {
                if (b.has(e)) throw Error("prop listener already exists");
                if (d.size) {
                  let n = t[3](g(e));
                  b.set(e, [t, n]);
                } else b.set(e, [t]);
              },
              C = (e) => {
                var t;
                let n = b.get(e);
                n && (b.delete(e), null == (t = n[1]) || t.call(n));
              },
              I = (e) => {
                d.add(e),
                  1 === d.size &&
                    b.forEach(([e, t], n) => {
                      if (t) throw Error("remove already exists");
                      let r = e[3](g(n));
                      b.set(n, [e, r]);
                    });
                let t = () => {
                  d.delete(e),
                    0 === d.size &&
                      b.forEach(([e, t], n) => {
                        t && (t(), b.set(n, [e]));
                      });
                };
                return t;
              },
              E = Array.isArray(r)
                ? []
                : Object.create(Object.getPrototypeOf(r)),
              j = {
                deleteProperty(e, t) {
                  let n = Reflect.get(e, t);
                  C(t);
                  let r = Reflect.deleteProperty(e, t);
                  return r && u(["delete", [t], n]), r;
                },
                set(t, r, a, s) {
                  let l = Reflect.has(t, r),
                    c = Reflect.get(t, r, s);
                  if (l && (e(c, a) || (i.has(a) && e(c, i.get(a))))) return !0;
                  C(r), w(a) && (a = h(a) || a);
                  let d = a;
                  if (a instanceof Promise)
                    a.then((e) => {
                      (a.status = "fulfilled"),
                        (a.value = e),
                        u(["resolve", [r], e]);
                    }).catch((e) => {
                      (a.status = "rejected"),
                        (a.reason = e),
                        u(["reject", [r], e]);
                    });
                  else {
                    !m.has(a) && n(a) && (d = o(a));
                    let e = !y.has(d) && m.get(d);
                    e && v(r, e);
                  }
                  return Reflect.set(t, r, d, s), u(["set", [r], a, c]), !0;
                },
              },
              O = t(E, j);
            i.set(r, O);
            let W = [E, p, s, I];
            return (
              m.set(O, W),
              Reflect.ownKeys(r).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(r, e);
                "value" in t &&
                  ((O[e] = r[e]), delete t.value, delete t.writable),
                  Object.defineProperty(E, e, t);
              }),
              O
            );
          }
        ) => [o, m, y, e, t, n, r, a, s, i, l],
        [C] = v();
      function I(e = {}) {
        return C(e);
      }
      function E(e, t, n) {
        let r;
        let a = m.get(e);
        a || console.warn("Please use proxy object");
        let s = [],
          i = a[3],
          l = !1,
          o = i((e) => {
            if ((s.push(e), n)) {
              t(s.splice(0));
              return;
            }
            r ||
              (r = Promise.resolve().then(() => {
                (r = void 0), l && t(s.splice(0));
              }));
          });
        return (
          (l = !0),
          () => {
            (l = !1), o();
          }
        );
      }
      var j = n(48764);
      let O = {
          ethereumClient: void 0,
          setEthereumClient(e) {
            r = e;
          },
          client() {
            if (r) return r;
            throw Error("ClientCtrl has no client set");
          },
        },
        W = I({
          history: ["ConnectWallet"],
          view: "ConnectWallet",
          data: void 0,
        }),
        A = {
          state: W,
          subscribe: (e) => E(W, () => e(W)),
          push(e, t) {
            e !== W.view &&
              ((W.view = e), t && (W.data = t), W.history.push(e));
          },
          reset(e) {
            (W.view = e), (W.history = [e]);
          },
          replace(e) {
            W.history.length > 1 &&
              ((W.history[W.history.length - 1] = e), (W.view = e));
          },
          goBack() {
            if (W.history.length > 1) {
              W.history.pop();
              let [e] = W.history.slice(-1);
              W.view = e;
            }
          },
          setData(e) {
            W.data = e;
          },
        },
        L = {
          WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
          W3M_VERSION: "W3M_VERSION",
          W3M_PREFER_INJECTED_URL_FLAG: "w3mPreferInjected",
          RECOMMENDED_WALLET_AMOUNT: 9,
          isMobile: () =>
            "u" > typeof window &&
            !!(
              window.matchMedia("(pointer:coarse)").matches ||
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                navigator.userAgent
              )
            ),
          isAndroid: () =>
            L.isMobile() &&
            navigator.userAgent.toLowerCase().includes("android"),
          isIos() {
            let e = navigator.userAgent.toLowerCase();
            return L.isMobile() && (e.includes("iphone") || e.includes("ipad"));
          },
          isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
          isArray: (e) => Array.isArray(e) && e.length > 0,
          formatNativeUrl(e, t, n) {
            if (L.isHttpUrl(e)) return this.formatUniversalUrl(e, t, n);
            let r = e;
            r.includes("://") ||
              (r = `${(r = e.replaceAll("/", "").replaceAll(":", ""))}://`),
              r.endsWith("/") || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, n);
            let a = encodeURIComponent(t);
            return `${r}wc?uri=${a}`;
          },
          formatUniversalUrl(e, t, n) {
            if (!L.isHttpUrl(e)) return this.formatNativeUrl(e, t, n);
            let r = e;
            r.endsWith("/") || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, n);
            let a = encodeURIComponent(t);
            return `${r}wc?uri=${a}`;
          },
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          openHref(e, t) {
            window.open(e, t, "noreferrer noopener");
          },
          setWalletConnectDeepLink(e, t) {
            localStorage.setItem(
              L.WALLETCONNECT_DEEPLINK_CHOICE,
              JSON.stringify({ href: e, name: t })
            );
          },
          setWalletConnectAndroidDeepLink(e) {
            let [t] = e.split("?");
            localStorage.setItem(
              L.WALLETCONNECT_DEEPLINK_CHOICE,
              JSON.stringify({ href: t, name: "Android" })
            );
          },
          removeWalletConnectDeepLink() {
            localStorage.removeItem(L.WALLETCONNECT_DEEPLINK_CHOICE);
          },
          setWeb3ModalVersionInStorage() {
            "u" > typeof localStorage &&
              localStorage.setItem(L.W3M_VERSION, "2.4.4");
          },
          getWalletRouterData() {
            var e;
            let t = null == (e = A.state.data) ? void 0 : e.Wallet;
            if (!t) throw Error('Missing "Wallet" view data');
            return t;
          },
          getSwitchNetworkRouterData() {
            var e;
            let t = null == (e = A.state.data) ? void 0 : e.SwitchNetwork;
            if (!t) throw Error('Missing "SwitchNetwork" view data');
            return t;
          },
          isPreferInjectedFlag: () =>
            "u" > typeof location &&
            new URLSearchParams(location.search).has(
              L.W3M_PREFER_INJECTED_URL_FLAG
            ),
        },
        P =
          "u" > typeof location &&
          (location.hostname.includes("localhost") ||
            location.protocol.includes("https")),
        S = I({
          enabled: P,
          userSessionId: "",
          events: [],
          connectedWalletId: void 0,
        }),
        M = {
          state: S,
          subscribe: (e) =>
            E(S.events, () =>
              e(
                (function (e, t) {
                  let n = m.get(e);
                  n || console.warn("Please use proxy object");
                  let [r, a, s] = n;
                  return s(r, a(), void 0);
                })(S.events[S.events.length - 1])
              )
            ),
          initialize() {
            S.enabled &&
              "u" > typeof crypto &&
              (S.userSessionId = crypto.randomUUID());
          },
          setConnectedWalletId(e) {
            S.connectedWalletId = e;
          },
          click(e) {
            if (S.enabled) {
              let t = {
                type: "CLICK",
                name: e.name,
                userSessionId: S.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              S.events.push(t);
            }
          },
          track(e) {
            if (S.enabled) {
              let t = {
                type: "TRACK",
                name: e.name,
                userSessionId: S.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              S.events.push(t);
            }
          },
          view(e) {
            if (S.enabled) {
              let t = {
                type: "VIEW",
                name: e.name,
                userSessionId: S.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              S.events.push(t);
            }
          },
        },
        k = I({
          selectedChain: void 0,
          chains: void 0,
          standaloneChains: void 0,
          standaloneUri: void 0,
          isStandalone: !1,
          isAuth: !1,
          isCustomDesktop: !1,
          isCustomMobile: !1,
          isDataLoaded: !1,
          isUiLoaded: !1,
          isPreferInjected: !1,
          walletConnectVersion: 1,
        }),
        D = {
          state: k,
          subscribe: (e) => E(k, () => e(k)),
          setChains(e) {
            k.chains = e;
          },
          setStandaloneChains(e) {
            k.standaloneChains = e;
          },
          setStandaloneUri(e) {
            k.standaloneUri = e;
          },
          getSelectedChain() {
            let e = O.client().getNetwork().chain;
            return e && (k.selectedChain = e), k.selectedChain;
          },
          setSelectedChain(e) {
            k.selectedChain = e;
          },
          setIsStandalone(e) {
            k.isStandalone = e;
          },
          setIsCustomDesktop(e) {
            k.isCustomDesktop = e;
          },
          setIsCustomMobile(e) {
            k.isCustomMobile = e;
          },
          setIsDataLoaded(e) {
            k.isDataLoaded = e;
          },
          setIsUiLoaded(e) {
            k.isUiLoaded = e;
          },
          setWalletConnectVersion(e) {
            k.walletConnectVersion = e;
          },
          setIsPreferInjected(e) {
            k.isPreferInjected = e;
          },
          setIsAuth(e) {
            k.isAuth = e;
          },
        },
        N = I({
          projectId: "",
          mobileWallets: void 0,
          desktopWallets: void 0,
          walletImages: void 0,
          chainImages: void 0,
          tokenImages: void 0,
          tokenContracts: void 0,
          standaloneChains: void 0,
          enableStandaloneMode: !1,
          enableAuthMode: !1,
          enableNetworkView: !1,
          enableAccountView: !0,
          enableExplorer: !0,
          defaultChain: void 0,
          explorerExcludedWalletIds: void 0,
          explorerRecommendedWalletIds: void 0,
          termsOfServiceUrl: void 0,
          privacyPolicyUrl: void 0,
        }),
        U = {
          state: N,
          subscribe: (e) => E(N, () => e(N)),
          setConfig(e) {
            var t, n, r, a;
            M.initialize(),
              D.setStandaloneChains(e.standaloneChains),
              D.setIsStandalone(
                !!(null != (t = e.standaloneChains) && t.length) ||
                  !!e.enableStandaloneMode
              ),
              D.setIsAuth(!!e.enableAuthMode),
              D.setIsCustomMobile(
                !!(null != (n = e.mobileWallets) && n.length)
              ),
              D.setIsCustomDesktop(
                !!(null != (r = e.desktopWallets) && r.length)
              ),
              D.setWalletConnectVersion(
                null != (a = e.walletConnectVersion) ? a : 1
              ),
              D.state.isStandalone ||
                (D.setChains(O.client().chains),
                D.setIsPreferInjected(
                  O.client().isInjectedProviderInstalled() &&
                    L.isPreferInjectedFlag()
                )),
              e.defaultChain && D.setSelectedChain(e.defaultChain),
              L.setWeb3ModalVersionInStorage(),
              Object.assign(N, e);
          },
        },
        R = I({
          address: void 0,
          profileName: void 0,
          profileAvatar: void 0,
          profileLoading: !1,
          balanceLoading: !1,
          balance: void 0,
          isConnected: !1,
        }),
        _ = {
          state: R,
          subscribe: (e) => E(R, () => e(R)),
          getAccount() {
            let e = O.client().getAccount();
            (R.address = e.address), (R.isConnected = e.isConnected);
          },
          async fetchProfile(e, t) {
            var n;
            try {
              R.profileLoading = !0;
              let r = t ?? R.address,
                a =
                  null == (n = D.state.chains)
                    ? void 0
                    : n.find((e) => 1 === e.id);
              if (r && a) {
                let t = await O.client().fetchEnsName({
                  address: r,
                  chainId: 1,
                });
                if (t) {
                  let n = await O.client().fetchEnsAvatar({
                    name: t,
                    chainId: 1,
                  });
                  n && (await e(n)), (R.profileAvatar = n);
                }
                R.profileName = t;
              }
            } finally {
              R.profileLoading = !1;
            }
          },
          async fetchBalance(e) {
            try {
              let t;
              let { chain: n } = O.client().getNetwork(),
                { tokenContracts: r } = U.state;
              n && r && (t = r[n.id]), (R.balanceLoading = !0);
              let a = e ?? R.address;
              if (a) {
                let e = await O.client().fetchBalance({ address: a, token: t });
                R.balance = { amount: e.formatted, symbol: e.symbol };
              }
            } finally {
              R.balanceLoading = !1;
            }
          },
          setAddress(e) {
            R.address = e;
          },
          setIsConnected(e) {
            R.isConnected = e;
          },
          resetBalance() {
            R.balance = void 0;
          },
          resetAccount() {
            (R.address = void 0),
              (R.isConnected = !1),
              (R.profileName = void 0),
              (R.profileAvatar = void 0),
              (R.balance = void 0);
          },
        },
        T = "https://explorer-api.walletconnect.com";
      async function x(e, t) {
        let n = new URL(e, T);
        return (
          n.searchParams.append("projectId", U.state.projectId),
          Object.entries(t).forEach(([e, t]) => {
            t && n.searchParams.append(e, String(t));
          }),
          (await fetch(n)).json()
        );
      }
      let V = {
        getDesktopListings: async (e) => x("/w3m/v1/getDesktopListings", e),
        getMobileListings: async (e) => x("/w3m/v1/getMobileListings", e),
        getInjectedListings: async (e) => x("/w3m/v1/getInjectedListings", e),
        getAllListings: async (e) => x("/w3m/v1/getAllListings", e),
        getWalletImageUrl: (e) =>
          `${T}/w3m/v1/getWalletImage/${e}?projectId=${U.state.projectId}`,
        getAssetImageUrl: (e) =>
          `${T}/w3m/v1/getAssetImage/${e}?projectId=${U.state.projectId}`,
      };
      var K = Object.defineProperty,
        $ = Object.getOwnPropertySymbols,
        B = Object.prototype.hasOwnProperty,
        H = Object.prototype.propertyIsEnumerable,
        z = (e, t, n) =>
          t in e
            ? K(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        F = (e, t) => {
          for (var n in t || (t = {})) B.call(t, n) && z(e, n, t[n]);
          if ($) for (var n of $(t)) H.call(t, n) && z(e, n, t[n]);
          return e;
        };
      let J = L.isMobile(),
        G = I({
          wallets: { listings: [], total: 0, page: 1 },
          injectedWallets: [],
          search: { listings: [], total: 0, page: 1 },
          recomendedWallets: [],
        }),
        q = {
          state: G,
          async getRecomendedWallets() {
            let {
              explorerRecommendedWalletIds: e,
              explorerExcludedWalletIds: t,
            } = U.state;
            if ("NONE" === e || ("ALL" === t && !e)) return G.recomendedWallets;
            if (L.isArray(e)) {
              let t = { recommendedIds: e.join(",") },
                { listings: n } = await V.getAllListings(t),
                r = Object.values(n);
              r.sort((t, n) => {
                let r = e.indexOf(t.id),
                  a = e.indexOf(n.id);
                return r - a;
              }),
                (G.recomendedWallets = r);
            } else {
              let {
                  standaloneChains: e,
                  walletConnectVersion: n,
                  isAuth: r,
                } = D.state,
                a = e?.join(","),
                s = L.isArray(t),
                i = {
                  page: 1,
                  sdks: r ? "auth_v1" : void 0,
                  entries: L.RECOMMENDED_WALLET_AMOUNT,
                  chains: a,
                  version: n,
                  excludedIds: s ? t.join(",") : void 0,
                },
                { listings: l } = J
                  ? await V.getMobileListings(i)
                  : await V.getDesktopListings(i);
              G.recomendedWallets = Object.values(l);
            }
            return G.recomendedWallets;
          },
          async getWallets(e) {
            let t = F({}, e),
              {
                explorerRecommendedWalletIds: n,
                explorerExcludedWalletIds: r,
              } = U.state,
              { recomendedWallets: a } = G;
            if ("ALL" === r) return G.wallets;
            t.search ||
              (a.length
                ? (t.excludedIds = a.map((e) => e.id).join(","))
                : L.isArray(n) && (t.excludedIds = n.join(","))),
              L.isArray(r) &&
                (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")),
              D.state.isAuth && (t.sdks = "auth_v1");
            let { page: s, search: i } = e,
              { listings: l, total: o } = J
                ? await V.getMobileListings(t)
                : await V.getDesktopListings(t),
              c = Object.values(l),
              d = i ? "search" : "wallets";
            return (
              (G[d] = {
                listings: [...G[d].listings, ...c],
                total: o,
                page: s ?? 1,
              }),
              { listings: c, total: o }
            );
          },
          async getInjectedWallets() {
            let { listings: e } = await V.getInjectedListings({}),
              t = Object.values(e);
            return (G.injectedWallets = t), G.injectedWallets;
          },
          getWalletImageUrl: (e) => V.getWalletImageUrl(e),
          getAssetImageUrl: (e) => V.getAssetImageUrl(e),
          resetSearch() {
            G.search = { listings: [], total: 0, page: 1 };
          },
        },
        Q = I({ pairingEnabled: !1, pairingUri: "", pairingError: !1 }),
        X = {
          state: Q,
          subscribe: (e) => E(Q, () => e(Q)),
          setPairingUri(e) {
            Q.pairingUri = e;
          },
          setPairingError(e) {
            Q.pairingError = e;
          },
          setPairingEnabled(e) {
            Q.pairingEnabled = e;
          },
        },
        Y = I({ open: !1 }),
        Z = {
          state: Y,
          subscribe: (e) => E(Y, () => e(Y)),
          open: async (e) =>
            new Promise((t) => {
              let {
                  isStandalone: n,
                  isUiLoaded: r,
                  isDataLoaded: a,
                  isPreferInjected: s,
                  selectedChain: i,
                } = D.state,
                { isConnected: l } = _.state,
                { enableNetworkView: o } = U.state;
              if ((n || X.setPairingEnabled(!0), n))
                D.setStandaloneUri(e?.uri),
                  D.setStandaloneChains(e?.standaloneChains),
                  A.reset("ConnectWallet");
              else if (null != e && e.route) A.reset(e.route);
              else if (l) A.reset("Account");
              else if (o) A.reset("SelectNetwork");
              else if (s) {
                O.client()
                  .connectConnector("injected", i?.id)
                  .catch((e) => console.error(e)),
                  t();
                return;
              } else A.reset("ConnectWallet");
              let { pairingUri: c } = X.state;
              if (r && a && (n || c || l)) (Y.open = !0), t();
              else {
                let e = setInterval(() => {
                  let n = D.state,
                    r = X.state;
                  n.isUiLoaded &&
                    n.isDataLoaded &&
                    (n.isStandalone || r.pairingUri || l) &&
                    (clearInterval(e), (Y.open = !0), t());
                }, 200);
              }
            }),
          close() {
            Y.open = !1;
          },
        };
      var ee = Object.defineProperty,
        et = Object.getOwnPropertySymbols,
        en = Object.prototype.hasOwnProperty,
        er = Object.prototype.propertyIsEnumerable,
        ea = (e, t, n) =>
          t in e
            ? ee(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        es = (e, t) => {
          for (var n in t || (t = {})) en.call(t, n) && ea(e, n, t[n]);
          if (et) for (var n of et(t)) er.call(t, n) && ea(e, n, t[n]);
          return e;
        };
      let ei = I({
          themeMode:
            "u" > typeof matchMedia &&
            matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        }),
        el = {
          state: ei,
          subscribe: (e) => E(ei, () => e(ei)),
          setThemeConfig(e) {
            let { themeMode: t, themeVariables: n } = e;
            t && (ei.themeMode = t), n && (ei.themeVariables = es({}, n));
          },
        },
        eo = I({ open: !1, message: "", variant: "success" }),
        ec = {
          state: eo,
          subscribe: (e) => E(eo, () => e(eo)),
          openToast(e, t) {
            (eo.open = !0), (eo.message = e), (eo.variant = t);
          },
          closeToast() {
            eo.open = !1;
          },
        };
      "u" > typeof window &&
        (window.Buffer || (window.Buffer = j.Buffer),
        window.global || (window.global = window),
        window.process || (window.process = { env: {} }));
    },
  },
]);
