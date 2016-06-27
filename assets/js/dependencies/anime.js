var anime = function() {
    var t = {
            linear: function(t, n, e, r) {
                return n + t / r * e
            },
            easeInQuad: function(t, n, e, r) {
                return e * (t /= r) * t + n
            },
            easeOutQuad: function(t, n, e, r) {
                return -e * (t /= r) * (t - 2) + n
            },
            easeInOutQuad: function(t, n, e, r) {
                return (t /= r / 2) < 1 ? e / 2 * t * t + n : -e / 2 * (--t * (t - 2) - 1) + n
            },
            easeInCubic: function(t, n, e, r) {
                return e * (t /= r) * t * t + n
            },
            easeOutCubic: function(t, n, e, r) {
                return e * ((t = t / r - 1) * t * t + 1) + n
            },
            easeInOutCubic: function(t, n, e, r) {
                return (t /= r / 2) < 1 ? e / 2 * t * t * t + n : e / 2 * ((t -= 2) * t * t + 2) + n
            },
            easeInQuart: function(t, n, e, r) {
                return e * (t /= r) * t * t * t + n
            },
            easeOutQuart: function(t, n, e, r) {
                return -e * ((t = t / r - 1) * t * t * t - 1) + n
            },
            easeInOutQuart: function(t, n, e, r) {
                return (t /= r / 2) < 1 ? e / 2 * t * t * t * t + n : -e / 2 * ((t -= 2) * t * t * t - 2) + n
            },
            easeInQuint: function(t, n, e, r) {
                return e * (t /= r) * t * t * t * t + n
            },
            easeOutQuint: function(t, n, e, r) {
                return e * ((t = t / r - 1) * t * t * t * t + 1) + n
            },
            easeInOutQuint: function(t, n, e, r) {
                return (t /= r / 2) < 1 ? e / 2 * t * t * t * t * t + n : e / 2 * ((t -= 2) * t * t * t * t + 2) + n
            },
            easeInSine: function(t, n, e, r) {
                return -e * Math.cos(t / r * (Math.PI / 2)) + e + n
            },
            easeOutSine: function(t, n, e, r) {
                return e * Math.sin(t / r * (Math.PI / 2)) + n
            },
            easeInOutSine: function(t, n, e, r) {
                return -e / 2 * (Math.cos(Math.PI * t / r) - 1) + n
            },
            easeInExpo: function(t, n, e, r) {
                return 0 == t ? n : e * Math.pow(2, 10 * (t / r - 1)) + n
            },
            easeOutExpo: function(t, n, e, r) {
                return t == r ? n + e : e * (-Math.pow(2, -10 * t / r) + 1) + n
            },
            easeInOutExpo: function(t, n, e, r) {
                return 0 == t ? n : t == r ? n + e : (t /= r / 2) < 1 ? e / 2 * Math.pow(2, 10 * (t - 1)) + n : e / 2 * (-Math.pow(2, -10 * --t) + 2) + n
            },
            easeInCirc: function(t, n, e, r) {
                return -e * (Math.sqrt(1 - (t /= r) * t) - 1) + n
            },
            easeOutCirc: function(t, n, e, r) {
                return e * Math.sqrt(1 - (t = t / r - 1) * t) + n
            },
            easeInOutCirc: function(t, n, e, r) {
                return (t /= r / 2) < 1 ? -e / 2 * (Math.sqrt(1 - t * t) - 1) + n : e / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
            },
            easeInElastic: function(t, n, e, r, a) {
                var u = 1.70158,
                    i = r * (1 - Math.min(a, 99) / 100),
                    o = e;
                if (0 == t) return n;
                if (1 == (t /= r)) return n + e;
                if (o < Math.abs(e)) {
                    o = e;
                    var u = i / 4
                } else var u = i / (2 * Math.PI) * Math.asin(e / o);
                return -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - u) * (2 * Math.PI) / i)) + n
            },
            easeOutElastic: function(t, n, e, r, a) {
                var u = 1.70158,
                    i = r * (1 - Math.min(a, 999) / 1e3),
                    o = e;
                if (0 == t) return n;
                if (1 == (t /= r)) return n + e;
                if (o < Math.abs(e)) {
                    o = e;
                    var u = i / 4
                } else var u = i / (2 * Math.PI) * Math.asin(e / o);
                return o * Math.pow(2, -10 * t) * Math.sin((t * r - u) * (2 * Math.PI) / i) + e + n
            },
            easeInOutElastic: function(t, n, e, r, a) {
                var u = 1.70158,
                    i = r * (1 - Math.min(a, 99) / 100),
                    o = e;
                if (0 == t) return n;
                if (2 == (t /= r / 2)) return n + e;
                if (o < Math.abs(e)) {
                    o = e;
                    var u = i / 4
                } else var u = i / (2 * Math.PI) * Math.asin(e / o);
                return 1 > t ? -.5 * (o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - u) * (2 * Math.PI) / i)) + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - u) * (2 * Math.PI) / i) * .5 + e + n
            },
            easeInBack: function(t, n, e, r, a) {
                var a = 1.70158;
                return e * (t /= r) * t * ((a + 1) * t - a) + n
            },
            easeOutBack: function(t, n, e, r, a) {
                var a = 1.70158;
                return e * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + n
            },
            easeInOutBack: function(t, n, e, r, a) {
                var a = 1.70158;
                return (t /= r / 2) < 1 ? e / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + n : e / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + n
            },
            easeInBounce: function(t, n, e, r) {
                return e - jQuery.easing.easeOutBounce(r - t, 0, e, r) + n
            },
            easeOutBounce: function(t, n, e, r) {
                return (t /= r) < 1 / 2.75 ? e * (7.5625 * t * t) + n : 2 / 2.75 > t ? e * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? e * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : e * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
            },
            easeInOutBounce: function(n, e, r, a) {
                return a / 2 > n ? .5 * t.easeInBounce(2 * n, 0, r, a) + e : .5 * t.easeOutBounce(2 * n - a, 0, r, a) + .5 * r + e
            }
        },
        n = {
            duration: 1e3,
            delay: 0,
            loop: !1,
            autoPlay: !0,
            direction: "normal",
            easing: "easeInOutQuad",
            elasticity: 50,
            speed: 1,
            round: !1,
            begin: void 0,
            update: void 0,
            complete: void 0
        },
        e = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY"],
        r = function() {
            return {
                array: function(t) {
                    return Array.isArray(t)
                },
                object: function(t) {
                    return Object.prototype.toString.call(t).indexOf("Object") > -1
                },
                nodeList: function(t) {
                    return t instanceof NodeList || t instanceof HTMLCollection
                },
                html: function(t) {
                    return t.nodeType
                },
                svg: function(t) {
                    return t instanceof SVGElement
                },
                number: function(t) {
                    return !isNaN(parseInt(t))
                },
                string: function(t) {
                    return "string" == typeof t
                },
                func: function(t) {
                    return "function" == typeof t
                },
                undef: function(t) {
                    return "undefined" == typeof t
                },
                "null": function(t) {
                    return "null" == typeof t
                },
                hex: function(t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
                },
                rgb: function(t) {
                    return /^rgb/.test(t)
                },
                rgba: function(t) {
                    return /^rgba/.test(t)
                },
                hsl: function(t) {
                    return /^hsl/.test(t)
                },
                color: function(t) {
                    return r.hex(t) || r.rgb(t) || r.rgba(t) || r.hsl(t)
                }
            }
        }(),
        a = function(t, n) {
            return Math.floor(Math.random() * (n - t + 1)) + t
        },
        u = function(t) {
            return r.string(t) ? t : t + ""
        },
        i = function(t) {
            return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        },
        o = function(t) {
            for (var n = t.split(" "), e = /^[\#\.\[\]:>+~*A-Za-z][A-Za-z0-9\-_=:>+~*$|^()\"\'\[\]\.]*$/, r = 0; r < n.length; r++)
                if (!e.test(n[r])) return !1;
            return document.querySelectorAll(t).length ? document.querySelectorAll(t) : !1
        },
        s = function(t) {
            return t.reduce(function(t, n) {
                return t.concat(r.array(n) ? s(n) : n)
            }, [])
        },
        c = function(t) {
            return r.array(t) ? t : (r.string(t) && (t = o(t) || t), r.nodeList(t) ? [].slice.call(t) : [t])
        },
        f = function(t, n) {
            return t.some(function(t) {
                return t === n
            })
        },
        l = function(t, n) {
            var e = {};
            return t.forEach(function(t) {
                var r = JSON.stringify(n.map(function(n) {
                    return t[n]
                }));
                e[r] = e[r] || [], e[r].push(t)
            }), Object.keys(e).map(function(t) {
                return e[t]
            })
        },
        m = function(t) {
            var n = {};
            for (var e in t) n[e] = t[e];
            return n
        },
        p = function(t, n) {
            for (var e in n) t[e] = r.undef(t[e]) ? n[e] : t[e];
            return t
        },
        d = function(t) {
            var n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                t = t.replace(n, function(t, n, e, r) {
                    return n + n + e + e + r + r
                }),
                e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
                r = parseInt(e[1], 16),
                a = parseInt(e[2], 16),
                u = parseInt(e[3], 16);
            return "rgb(" + r + "," + a + "," + u + ")"
        },
        g = function(t) {
            var n, e, r, t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),
                a = parseInt(t[1]) / 360,
                u = parseInt(t[2]) / 100,
                i = parseInt(t[3]) / 100,
                o = function(t, n, e) {
                    return 0 > e && (e += 1), e > 1 && (e -= 1), 1 / 6 > e ? t + 6 * (n - t) * e : .5 > e ? n : 2 / 3 > e ? t + (n - t) * (2 / 3 - e) * 6 : t
                };
            if (0 == u) n = e = r = i;
            else var s = .5 > i ? i * (1 + u) : i + u - i * u;
            var c = 2 * i - s;
            return n = o(c, s, a + 1 / 3), e = o(c, s, a), r = o(c, s, a - 1 / 3), "rgb(" + 255 * n + "," + 255 * e + "," + 255 * r + ")"
        },
        h = function(t) {
            return r.rgb(t) || r.rgba(t) ? t : r.hex(t) ? d(t) : r.hsl(t) ? g(t) : void 0
        },
        v = function(t) {
            return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]
        },
        b = function(t, n, e) {
            return v(n) ? n : t.indexOf("translate") > -1 ? v(e) ? n + v(e) : n + "px" : t.indexOf("rotate") > -1 || t.indexOf("skew") > -1 ? n + "deg" : n
        },
        M = function(t, n) {
            return (r.html(t) || r.svg(t)) && f(e, n) ? "transform" : (r.html(t) || r.svg(t)) && y(t, n) ? "css" : (r.html(t) || r.svg(t)) && t.getAttribute(n) && !t[n] ? "attribute" : r["null"](t[n]) || r.undef(t[n]) ? void 0 : "object"
        },
        y = function(t, n) {
            return getComputedStyle(t).getPropertyValue(i(n))
        },
        I = function(t, n) {
            var e = n.indexOf("scale") > -1 ? 1 : 0,
                r = t.style.transform;
            if (!r) return e;
            for (var a = /(\w+)\((.+?)\)/g, u = [], i = [], o = []; u = a.exec(r);) i.push(u[1]), o.push(u[2]);
            var s = o.filter(function(t, e) {
                return i[e] === n
            });
            return s.length ? s[0] : e
        },
        O = function(t, n) {
            switch (M(t, n)) {
                case "transform":
                    return I(t, n);
                case "css":
                    return y(t, n);
                case "attribute":
                    return t.getAttribute(n)
            }
            return t[n] || 0
        },
        w = function(t, n, e) {
            if (r.color(n)) return h(n);
            if (v(n)) return n;
            var a = v(v(t.to) ? t.to : t.from);
            return !a && e && (a = v(e)), a ? n + a : n
        },
        x = function(t, n, e) {
            return n.reduce(function(n, r, a) {
                var r = r ? r : e[a - 1];
                return n + t[a - 1] + r
            })
        },
        A = function(t) {
            var n = /-?\d*\.?\d+/g;
            return {
                numbers: u(t).match(n) ? u(t).match(n).map(Number) : [0],
                strings: u(t).split(n)
            }
        },
        k = function(t) {
            return t.map(function(t, n) {
                return {
                    target: t,
                    id: n
                }
            })
        },
        E = function(t) {
            var e = p(t, n);
            return "alternate" !== e.direction || e.loop || (e.loop = 1), e
        },
        P = function(t, e) {
            var a = [];
            for (var u in t)
                if (!n.hasOwnProperty(u) && "targets" !== u) {
                    var i = r.object(t[u]) ? m(t[u]) : {
                        value: t[u]
                    };
                    i.name = u, a.push(p(i, e))
                }
            return a
        },
        Q = function(t, n, e, a) {
            var u = c(r.func(e) ? e(t, a) : e);
            return {
                from: u.length > 1 ? u[0] : O(t, n),
                to: u.length > 1 ? u[1] : u[0]
            }
        },
        D = function(t, n, e, r) {
            var a = {};
            if ("transform" === e) a.from = t + "(" + b(t, n.from, n.to) + ")", a.to = t + "(" + b(t, n.to) + ")";
            else {
                var u = "css" === e ? y(r, t) : void 0;
                a.from = w(n, n.from, u), a.to = w(n, n.to, u)
            }
            return {
                from: A(a.from),
                to: A(a.to)
            }
        },
        j = function(t, n) {
            var e = [];
            return t.forEach(function(a, u) {
                var i = a.target;
                n.forEach(function(n) {
                    var o = M(i, n.name);
                    if (o) {
                        var s = Q(i, n.name, n.value, u),
                            c = m(n);
                        c.animatables = a, c.type = o, c.round = r.color(s.from) ? !0 : c.round, c.delay = (r.func(c.delay) ? c.delay(u, t.length) : c.delay) / c.speed, c.duration = (r.func(c.duration) ? c.duration(u, t.length) : c.duration) / c.speed, c.from = D(n.name, s, c.type, i).from, c.to = D(n.name, s, c.type, i).to, e.push(c)
                    }
                })
            }), e
        },
        q = function(t, n) {
            var e = j(t, n),
                r = l(e, ["name", "from", "to", "delay", "duration"]);
            return r.map(function(t) {
                var n = m(t[0]);
                return n.animatables = t.map(function(t) {
                    return t.animatables
                }), n.totalDuration = n.delay + n.duration, n
            })
        },
        B = function(t) {
            var n = t.to,
                e = t.from;
            t.from = n, t.to = e
        },
        C = function(n, e) {
            var r = Math.min(Math.max(e - n.delay, 0), n.duration),
                a = n.to.numbers.map(function(e, a) {
                    var u = n.from.numbers[a],
                        i = e - u,
                        o = t[n.easing](r, u, i, n.duration, n.elasticity);
                    return n.round ? Math.round(o) : o
                });
            return n.currentValues = {
                progress: a,
                full: x(a, n.to.strings, n.from.strings)
            }, n.currentValues.full
        },
        S = function(t, n) {
            var e = void 0;
            if (t.currentTime = Math.min(n, t.totalDuration), t.progress = t.currentTime / t.totalDuration * 100, t.interpolations.forEach(function(r) {
                    var a = C(r, n);
                    t.values[r.name] = {}, r.animatables.forEach(function(n) {
                        var u = n.id;
                        switch (t.values[r.name][u] = r.currentValues, r.type) {
                            case "css":
                                n.target.style[r.name] = a;
                                break;
                            case "attribute":
                                n.target.setAttribute(r.name, a);
                                break;
                            case "object":
                                n.target[r.name] = a;
                                break;
                            case "transform":
                                e || (e = {}), e[u] || (e[u] = []), f(e[u], a) || e[u].push(a)
                        }
                    })
                }), e)
                for (var r in e) t.animatables[r].target.style.transform = e[r].join(" ");
            t.settings.update && t.settings.update(t)
        },
        $ = function(t) {
            var n = {};
            return n.targets = s(r.array(t.targets) ? t.targets.map(c) : c(t.targets)), n.animatables = k(n.targets), n.settings = E(t), n.properties = P(t, n.settings), n.interpolations = q(n.animatables, n.properties), n.totalDuration = Math.max.apply(Math, n.interpolations.map(function(t) {
                return t.totalDuration
            })), n.values = {}, n.currentTime = 0, n.progress = 0, n.running = !1, n.ended = !1, n
        },
        T = function(t) {
            if (t && t.targets) {
                var n = $(t),
                    e = {};
                return e.tick = function() {
                    n.running && (n.ended = !1, e.now = +new Date, e.current = e.last + e.now - e.start, S(n, e.current), e.current >= n.totalDuration ? (n.settings.loop ? (e.start = +new Date, r.number(n.settings.loop) && n.settings.loop--, "alternate" === n.settings.direction && n.interpolations.forEach(B), e.raf = requestAnimationFrame(e.tick)) : (n.ended = !0, n.settings.complete ? n.settings.complete(n) : n.pause()), e.last = 0) : e.raf = requestAnimationFrame(e.tick))
                }, n.set = function(t) {
                    var e = p(t, n.settings);
                    n = p($(e), n)
                }, n.seek = function(t) {
                    var e = r.number(t) ? t : r.number(t.time) ? t.time : t.percent / 100 * n.totalDuration;
                    S(n, e)
                }, n.play = function(t) {
                    t && n.set(t), n.running = !0, e.start = +new Date, e.last = n.ended ? 0 : n.currentTime, "reverse" === n.settings.direction && n.interpolations.forEach(B), n.settings.begin && n.settings.begin(n), e.raf = requestAnimationFrame(e.tick)
                }, n.pause = function(t) {
                    t && n.set(t), n.running = !1, cancelAnimationFrame(e.raf)
                }, n.restart = function(t) {
                    t && n.set(t), n.running = !1, n.currentTime = 0, n.play()
                }, n.settings.autoPlay && n.play(), n
            }
        };
    return T.easings = t, T.is = r, T.getInitialValue = O, T.random = a, T
}();
