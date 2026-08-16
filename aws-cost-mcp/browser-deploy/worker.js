var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/unenv/dist/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(PerformanceEntry, "PerformanceEntry");
    PerformanceMark = /* @__PURE__ */ __name(class PerformanceMark2 extends PerformanceEntry {
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    }, "PerformanceMark");
    PerformanceMeasure = class extends PerformanceEntry {
      entryType = "measure";
    };
    __name(PerformanceMeasure, "PerformanceMeasure");
    PerformanceResourceTiming = class extends PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    __name(PerformanceResourceTiming, "PerformanceResourceTiming");
    PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    __name(PerformanceObserverEntryList, "PerformanceObserverEntryList");
    Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e2) => e2.name !== markName) : this._entries.filter((e2) => e2.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e2) => e2.name !== measureName) : this._entries.filter((e2) => e2.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e2) => e2.entryType !== "resource" || e2.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e2) => e2.name === name && (!type || e2.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e2) => e2.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    __name(Performance, "Performance");
    PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    __name(PerformanceObserver, "PerformanceObserver");
    __publicField(PerformanceObserver, "supportedEntryTypes", []);
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
import { Socket } from "node:net";
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class extends Socket {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      isRaw = false;
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
      isTTY = false;
    };
    __name(ReadStream, "ReadStream");
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
import { Socket as Socket2 } from "node:net";
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class extends Socket2 {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      columns = 80;
      rows = 24;
      isTTY = false;
    };
    __name(WriteStream, "WriteStream");
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    Process = class extends EventEmitter {
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return "";
      }
      get versions() {
        return {};
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: () => 0 });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    __name(Process, "Process");
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
var init_endpoint = __esm({
  "node_modules/@smithy/types/dist-es/endpoint.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    (function(EndpointURLScheme2) {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
    })(EndpointURLScheme || (EndpointURLScheme = {}));
  }
});

// node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
var init_checksum = __esm({
  "node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    (function(AlgorithmId2) {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
    })(AlgorithmId || (AlgorithmId = {}));
  }
});

// node_modules/@smithy/types/dist-es/extensions/index.js
var init_extensions = __esm({
  "node_modules/@smithy/types/dist-es/extensions/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_checksum();
  }
});

// node_modules/@smithy/types/dist-es/middleware.js
var SMITHY_CONTEXT_KEY;
var init_middleware = __esm({
  "node_modules/@smithy/types/dist-es/middleware.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    SMITHY_CONTEXT_KEY = "__smithy_context";
  }
});

// node_modules/@smithy/types/dist-es/index.js
var init_dist_es = __esm({
  "node_modules/@smithy/types/dist-es/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_endpoint();
    init_extensions();
    init_middleware();
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/getSmithyContext.js
var getSmithyContext;
var init_getSmithyContext = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/getSmithyContext.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_dist_es();
    getSmithyContext = /* @__PURE__ */ __name((context2) => context2[SMITHY_CONTEXT_KEY] || (context2[SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/httpRequest.js
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
var HttpRequest;
var init_httpRequest = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/httpRequest.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    HttpRequest = class {
      method;
      protocol;
      hostname;
      port;
      path;
      query;
      headers;
      username;
      password;
      fragment;
      body;
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      static clone(request) {
        const cloned = new HttpRequest({
          ...request,
          headers: { ...request.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      static isInstance(request) {
        if (!request) {
          return false;
        }
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      clone() {
        return HttpRequest.clone(this);
      }
    };
    __name(HttpRequest, "HttpRequest");
    __name(cloneQuery, "cloneQuery");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/httpResponse.js
var HttpResponse;
var init_httpResponse = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/httpResponse.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    HttpResponse = class {
      statusCode;
      reason;
      headers;
      body;
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
    __name(HttpResponse, "HttpResponse");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/isValidHostLabel.js
var VALID_HOST_LABEL_REGEX, isValidHostLabel;
var init_isValidHostLabel = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/isValidHostLabel.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    }, "isValidHostLabel");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/isValidHostname.js
function isValidHostname(hostname) {
  const hostPattern = /^[a-z0-9][a-z0-9.-]*[a-z0-9]$/;
  return hostPattern.test(hostname);
}
var init_isValidHostname = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/isValidHostname.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(isValidHostname, "isValidHostname");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/normalizeProvider.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    normalizeProvider = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/parseQueryString.js
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
var init_parseQueryString = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/parseQueryString.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(parseQueryString, "parseQueryString");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/parseUrl.js
var parseUrl;
var init_parseUrl = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/parseUrl.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_parseQueryString();
    parseUrl = /* @__PURE__ */ __name((url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    }, "parseUrl");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/toEndpointV1.js
var toEndpointV1;
var init_toEndpointV1 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/toEndpointV1.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_parseUrl();
    toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          const v1Endpoint = parseUrl(endpoint.url);
          if (endpoint.headers) {
            v1Endpoint.headers = {};
            for (const name in endpoint.headers) {
              v1Endpoint.headers[name.toLowerCase()] = endpoint.headers[name].join(", ");
            }
          }
          return v1Endpoint;
        }
        return endpoint;
      }
      return parseUrl(endpoint);
    }, "toEndpointV1");
  }
});

// node_modules/@smithy/core/dist-es/submodules/transport/index.js
var init_transport = __esm({
  "node_modules/@smithy/core/dist-es/submodules/transport/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_getSmithyContext();
    init_httpRequest();
    init_httpResponse();
    init_isValidHostLabel();
    init_isValidHostname();
    init_normalizeProvider();
    init_parseUrl();
    init_toEndpointV1();
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/deref.js
var deref;
var init_deref = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/deref.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    deref = /* @__PURE__ */ __name((schemaRef) => {
      if (typeof schemaRef === "function") {
        return schemaRef();
      }
      return schemaRef;
    }, "deref");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js
var operation;
var init_operation = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    operation = /* @__PURE__ */ __name((namespace, name, traits, input, output) => ({
      name,
      namespace,
      traits,
      input,
      output
    }), "operation");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
var schemaDeserializationMiddleware, findHeader;
var init_schemaDeserializationMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_transport();
    init_operation();
    schemaDeserializationMiddleware = /* @__PURE__ */ __name((config2) => (next, context2) => async (args) => {
      const { response } = await next(args);
      const { operationSchema } = getSmithyContext(context2);
      const [, ns, n2, t, i2, o] = operationSchema ?? [];
      try {
        const parsed = await config2.protocol.deserializeResponse(operation(ns, n2, t, i2, o), {
          ...config2,
          ...context2
        }, response);
        return {
          response,
          output: parsed
        };
      } catch (error3) {
        Object.defineProperty(error3, "$response", {
          value: response,
          enumerable: false,
          writable: false,
          configurable: false
        });
        if (!("$metadata" in error3)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error3.message += "\n  " + hint;
          } catch (ignored) {
            if (!context2.logger || context2.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context2.logger?.warn?.(hint);
            }
          }
          if (typeof error3.$responseBodyText !== "undefined") {
            if (error3.$response) {
              error3.$response.body = error3.$responseBodyText;
            }
          }
          try {
            if (HttpResponse.isInstance(response)) {
              const { headers = {}, statusCode } = response;
              const headerEntries = Object.entries(headers);
              error3.$metadata = {
                httpStatusCode: statusCode,
                requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (ignored) {
          }
        }
        throw error3;
      }
    }, "schemaDeserializationMiddleware");
    findHeader = /* @__PURE__ */ __name((pattern, headers) => {
      return (headers.find(([k2]) => {
        return k2.match(pattern);
      }) || [void 0, void 0])[1];
    }, "findHeader");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
var schemaSerializationMiddleware;
var init_schemaSerializationMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_transport();
    init_operation();
    schemaSerializationMiddleware = /* @__PURE__ */ __name((config2) => (next, context2) => async (args) => {
      const { operationSchema } = getSmithyContext(context2);
      const [, ns, n2, t, i2, o] = operationSchema ?? [];
      const endpoint = context2.endpointV2 ? async () => toEndpointV1(context2.endpointV2) : config2.endpoint;
      const request = await config2.protocol.serializeRequest(operation(ns, n2, t, i2, o), args.input, {
        ...config2,
        ...context2,
        endpoint
      });
      return next({
        ...args,
        request
      });
    }, "schemaSerializationMiddleware");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
function getSchemaSerdePlugin(config2) {
  return {
    applyToStack: (commandStack) => {
      commandStack.add(schemaSerializationMiddleware(config2), serializerMiddlewareOption);
      commandStack.add(schemaDeserializationMiddleware(config2), deserializerMiddlewareOption);
      config2.protocol.setSerdeContext(config2);
    }
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption;
var init_getSchemaSerdePlugin = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_schemaDeserializationMiddleware();
    init_schemaSerializationMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    __name(getSchemaSerdePlugin, "getSchemaSerdePlugin");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js
function translateTraits(indicator) {
  if (typeof indicator === "object") {
    return indicator;
  }
  indicator = indicator | 0;
  if (traitsCache[indicator]) {
    return traitsCache[indicator];
  }
  const traits = {};
  let i2 = 0;
  for (const trait of [
    "httpLabel",
    "idempotent",
    "idempotencyToken",
    "sensitive",
    "httpPayload",
    "httpResponseCode",
    "httpQueryParams"
  ]) {
    if ((indicator >> i2++ & 1) === 1) {
      traits[trait] = 1;
    }
  }
  return traitsCache[indicator] = traits;
}
var traitsCache;
var init_translateTraits = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    traitsCache = [];
    __name(translateTraits, "translateTraits");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
function member(memberSchema, memberName) {
  if (memberSchema instanceof NormalizedSchema) {
    return Object.assign(memberSchema, {
      memberName,
      _isMemberSchema: true
    });
  }
  const internalCtorAccess = NormalizedSchema;
  return new internalCtorAccess(memberSchema, memberName);
}
var anno, simpleSchemaCacheN, simpleSchemaCacheS, _NormalizedSchema, NormalizedSchema, isMemberSchema, isStaticSchema;
var init_NormalizedSchema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_deref();
    init_translateTraits();
    anno = {
      it: Symbol.for("@smithy/nor-struct-it"),
      ns: Symbol.for("@smithy/ns")
    };
    simpleSchemaCacheN = [];
    simpleSchemaCacheS = {};
    _NormalizedSchema = class {
      ref;
      memberName;
      symbol = _NormalizedSchema.symbol;
      name;
      schema;
      _isMemberSchema;
      traits;
      memberTraits;
      normalizedTraits;
      constructor(ref, memberName) {
        this.ref = ref;
        this.memberName = memberName;
        const traitStack = [];
        let _ref = ref;
        let schema = ref;
        this._isMemberSchema = false;
        while (isMemberSchema(_ref)) {
          traitStack.push(_ref[1]);
          _ref = _ref[0];
          schema = deref(_ref);
          this._isMemberSchema = true;
        }
        if (traitStack.length > 0) {
          this.memberTraits = {};
          for (let i2 = traitStack.length - 1; i2 >= 0; --i2) {
            const traitSet = traitStack[i2];
            Object.assign(this.memberTraits, translateTraits(traitSet));
          }
        } else {
          this.memberTraits = 0;
        }
        if (schema instanceof _NormalizedSchema) {
          const computedMemberTraits = this.memberTraits;
          Object.assign(this, schema);
          this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
          this.normalizedTraits = void 0;
          this.memberName = memberName ?? schema.memberName;
          return;
        }
        this.schema = deref(schema);
        if (isStaticSchema(this.schema)) {
          this.name = `${this.schema[1]}#${this.schema[2]}`;
          this.traits = this.schema[3];
        } else {
          this.name = this.memberName ?? String(schema);
          this.traits = 0;
        }
        if (this._isMemberSchema && !memberName) {
          throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
        }
      }
      static [Symbol.hasInstance](lhs) {
        const isPrototype = this.prototype.isPrototypeOf(lhs);
        if (!isPrototype && typeof lhs === "object" && lhs !== null) {
          const ns = lhs;
          return ns.symbol === this.symbol;
        }
        return isPrototype;
      }
      static of(ref) {
        const keyAble = typeof ref === "function" || typeof ref === "object" && ref !== null;
        if (typeof ref === "number") {
          if (simpleSchemaCacheN[ref]) {
            return simpleSchemaCacheN[ref];
          }
        } else if (typeof ref === "string") {
          if (simpleSchemaCacheS[ref]) {
            return simpleSchemaCacheS[ref];
          }
        } else if (keyAble) {
          if (ref[anno.ns]) {
            return ref[anno.ns];
          }
        }
        const sc = deref(ref);
        if (sc instanceof _NormalizedSchema) {
          return sc;
        }
        if (isMemberSchema(sc)) {
          const [ns2, traits] = sc;
          if (ns2 instanceof _NormalizedSchema) {
            Object.assign(ns2.getMergedTraits(), translateTraits(traits));
            return ns2;
          }
          throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
        }
        const ns = new _NormalizedSchema(sc);
        if (keyAble) {
          return ref[anno.ns] = ns;
        }
        if (typeof sc === "string") {
          return simpleSchemaCacheS[sc] = ns;
        }
        if (typeof sc === "number") {
          return simpleSchemaCacheN[sc] = ns;
        }
        return ns;
      }
      getSchema() {
        const sc = this.schema;
        if (Array.isArray(sc) && sc[0] === 0) {
          return sc[4];
        }
        return sc;
      }
      getName(withNamespace = false) {
        const { name } = this;
        const short = !withNamespace && name && name.includes("#");
        return short ? name.split("#")[1] : name || void 0;
      }
      getMemberName() {
        return this.memberName;
      }
      isMemberSchema() {
        return this._isMemberSchema;
      }
      isListSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
      }
      isMapSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
      }
      isStructSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
          return false;
        }
        const id = sc[0];
        return id === 3 || id === -3 || id === 4;
      }
      isUnionSchema() {
        const sc = this.getSchema();
        if (typeof sc !== "object") {
          return false;
        }
        return sc[0] === 4;
      }
      isBlobSchema() {
        const sc = this.getSchema();
        return sc === 21 || sc === 42;
      }
      isTimestampSchema() {
        const sc = this.getSchema();
        return typeof sc === "number" && sc >= 4 && sc <= 7;
      }
      isUnitSchema() {
        return this.getSchema() === "unit";
      }
      isDocumentSchema() {
        return this.getSchema() === 15;
      }
      isStringSchema() {
        return this.getSchema() === 0;
      }
      isBooleanSchema() {
        return this.getSchema() === 2;
      }
      isNumericSchema() {
        return this.getSchema() === 1;
      }
      isBigIntegerSchema() {
        return this.getSchema() === 17;
      }
      isBigDecimalSchema() {
        return this.getSchema() === 19;
      }
      isStreaming() {
        const { streaming } = this.getMergedTraits();
        return !!streaming || this.getSchema() === 42;
      }
      isIdempotencyToken() {
        return !!this.getMergedTraits().idempotencyToken;
      }
      getMergedTraits() {
        return this.normalizedTraits ?? (this.normalizedTraits = {
          ...this.getOwnTraits(),
          ...this.getMemberTraits()
        });
      }
      getMemberTraits() {
        return translateTraits(this.memberTraits);
      }
      getOwnTraits() {
        return translateTraits(this.traits);
      }
      getKeySchema() {
        const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
        if (!isDoc && !isMap) {
          throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
        }
        const schema = this.getSchema();
        const memberSchema = isDoc ? 15 : schema[4] ?? 0;
        return member([memberSchema, 0], "key");
      }
      getValueSchema() {
        const sc = this.getSchema();
        const [isDoc, isMap, isList] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()];
        const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
        if (memberSchema != null) {
          return member([memberSchema, 0], isMap ? "value" : "member");
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
      }
      getMemberSchema(memberName) {
        const struct = this.getSchema();
        if (this.isStructSchema() && struct[4].includes(memberName)) {
          const i2 = struct[4].indexOf(memberName);
          const memberSchema = struct[5][i2];
          return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
        }
        if (this.isDocumentSchema()) {
          return member([15, 0], memberName);
        }
        throw new Error(`@smithy/core/schema - ${this.getName(true)} has no member=${memberName}.`);
      }
      getMemberSchemas() {
        const buffer = {};
        try {
          for (const [k2, v] of this.structIterator()) {
            buffer[k2] = v;
          }
        } catch (ignored) {
        }
        return buffer;
      }
      getEventStreamMember() {
        if (this.isStructSchema()) {
          for (const [memberName, memberSchema] of this.structIterator()) {
            if (memberSchema.isStreaming() && memberSchema.isStructSchema()) {
              return memberName;
            }
          }
        }
        return "";
      }
      *structIterator() {
        if (this.isUnitSchema()) {
          return;
        }
        if (!this.isStructSchema()) {
          throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        }
        const struct = this.getSchema();
        const z = struct[4].length;
        let it = struct[anno.it];
        if (it && z === it.length) {
          yield* it;
          return;
        }
        it = Array(z);
        for (let i2 = 0; i2 < z; ++i2) {
          const k2 = struct[4][i2];
          const v = member([struct[5][i2], 0], k2);
          yield it[i2] = [k2, v];
        }
        struct[anno.it] = it;
      }
    };
    NormalizedSchema = _NormalizedSchema;
    __name(NormalizedSchema, "NormalizedSchema");
    __publicField(NormalizedSchema, "symbol", Symbol.for("@smithy/nor"));
    __name(member, "member");
    isMemberSchema = /* @__PURE__ */ __name((sc) => Array.isArray(sc) && sc.length === 2, "isMemberSchema");
    isStaticSchema = /* @__PURE__ */ __name((sc) => Array.isArray(sc) && sc.length >= 5, "isStaticSchema");
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
var _TypeRegistry, TypeRegistry;
var init_TypeRegistry = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    _TypeRegistry = class {
      namespace;
      schemas;
      exceptions;
      constructor(namespace, schemas = /* @__PURE__ */ new Map(), exceptions = /* @__PURE__ */ new Map()) {
        this.namespace = namespace;
        this.schemas = schemas;
        this.exceptions = exceptions;
      }
      static for(namespace) {
        if (!_TypeRegistry.registries.has(namespace)) {
          _TypeRegistry.registries.set(namespace, new _TypeRegistry(namespace));
        }
        return _TypeRegistry.registries.get(namespace);
      }
      copyFrom(other) {
        const { schemas, exceptions } = this;
        for (const [k2, v] of other.schemas) {
          if (!schemas.has(k2)) {
            schemas.set(k2, v);
          }
        }
        for (const [k2, v] of other.exceptions) {
          if (!exceptions.has(k2)) {
            exceptions.set(k2, v);
          }
        }
      }
      register(shapeId, schema) {
        const qualifiedName = this.normalizeShapeId(shapeId);
        for (const r2 of [this, _TypeRegistry.for(qualifiedName.split("#")[0])]) {
          r2.schemas.set(qualifiedName, schema);
        }
      }
      getSchema(shapeId) {
        const id = this.normalizeShapeId(shapeId);
        if (!this.schemas.has(id)) {
          if (!shapeId.includes("#")) {
            const suffix = "#" + shapeId;
            const candidates = [];
            for (const [shapeId2, schema] of this.schemas.entries()) {
              if (shapeId2.endsWith(suffix)) {
                candidates.push(schema);
              }
            }
            if (candidates.length === 1) {
              return candidates[0];
            }
          }
          throw new Error(`@smithy/core/schema - schema not found for ${id}`);
        }
        return this.schemas.get(id);
      }
      registerError(es, ctor) {
        const $error = es;
        const ns = $error[1];
        for (const r2 of [this, _TypeRegistry.for(ns)]) {
          r2.schemas.set(ns + "#" + $error[2], $error);
          r2.exceptions.set($error, ctor);
        }
      }
      getErrorCtor(es) {
        const $error = es;
        if (this.exceptions.has($error)) {
          return this.exceptions.get($error);
        }
        const registry = _TypeRegistry.for($error[1]);
        return registry.exceptions.get($error);
      }
      getBaseException() {
        for (const exceptionKey of this.exceptions.keys()) {
          if (Array.isArray(exceptionKey)) {
            const [, ns, name] = exceptionKey;
            const id = ns + "#" + name;
            if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) {
              return exceptionKey;
            }
          }
        }
        return void 0;
      }
      find(predicate) {
        for (const schema of this.schemas.values()) {
          if (predicate(schema)) {
            return schema;
          }
        }
        return void 0;
      }
      clear() {
        this.schemas.clear();
        this.exceptions.clear();
      }
      normalizeShapeId(shapeId) {
        if (shapeId.includes("#")) {
          return shapeId;
        }
        return this.namespace + "#" + shapeId;
      }
    };
    TypeRegistry = _TypeRegistry;
    __name(TypeRegistry, "TypeRegistry");
    __publicField(TypeRegistry, "registries", /* @__PURE__ */ new Map());
  }
});

// node_modules/@smithy/core/dist-es/submodules/schema/index.js
var init_schema = __esm({
  "node_modules/@smithy/core/dist-es/submodules/schema/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_deref();
    init_getSchemaSerdePlugin();
    init_NormalizedSchema();
    init_translateTraits();
    init_TypeRegistry();
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-base64/constants-for-browser.js
var chars, alphabetByEncoding, alphabetByValue, bitsPerLetter, bitsPerByte, maxLetterValue;
var init_constants_for_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-base64/constants-for-browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
    alphabetByEncoding = Object.entries(chars).reduce((acc, [i2, c2]) => {
      acc[c2] = Number(i2);
      return acc;
    }, {});
    alphabetByValue = chars.split("");
    bitsPerLetter = 6;
    bitsPerByte = 8;
    maxLetterValue = 63;
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-base64/fromBase64.browser.js
var fromBase64;
var init_fromBase64_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-base64/fromBase64.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_constants_for_browser();
    fromBase64 = /* @__PURE__ */ __name((input) => {
      let totalByteLength = input.length / 4 * 3;
      if (input.slice(-2) === "==") {
        totalByteLength -= 2;
      } else if (input.slice(-1) === "=") {
        totalByteLength--;
      }
      const out = new ArrayBuffer(totalByteLength);
      const dataView = new DataView(out);
      for (let i2 = 0; i2 < input.length; i2 += 4) {
        let bits = 0;
        let bitLength = 0;
        for (let j2 = i2, limit = i2 + 3; j2 <= limit; j2++) {
          if (input[j2] !== "=") {
            if (!(input[j2] in alphabetByEncoding)) {
              throw new TypeError(`Invalid character ${input[j2]} in base64 string.`);
            }
            bits |= alphabetByEncoding[input[j2]] << (limit - j2) * bitsPerLetter;
            bitLength += bitsPerLetter;
          } else {
            bits >>= bitsPerLetter;
          }
        }
        const chunkOffset = i2 / 4 * 3;
        bits >>= bitLength % bitsPerByte;
        const byteLength = Math.floor(bitLength / bitsPerByte);
        for (let k2 = 0; k2 < byteLength; k2++) {
          const offset = (byteLength - k2 - 1) * bitsPerByte;
          dataView.setUint8(chunkOffset + k2, (bits & 255 << offset) >> offset);
        }
      }
      return new Uint8Array(out);
    }, "fromBase64");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/fromUtf8.browser.js
var fromUtf8;
var init_fromUtf8_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/fromUtf8.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    fromUtf8 = /* @__PURE__ */ __name((input) => new TextEncoder().encode(input), "fromUtf8");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-base64/toBase64.browser.js
function toBase64(_input) {
  let input;
  if (typeof _input === "string") {
    input = fromUtf8(_input);
  } else {
    input = _input;
  }
  const isArrayLike = typeof input === "object" && typeof input.length === "number";
  const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
  if (!isArrayLike && !isUint8Array) {
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
  }
  let str = "";
  for (let i2 = 0; i2 < input.length; i2 += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j2 = i2, limit = Math.min(i2 + 3, input.length); j2 < limit; j2++) {
      bits |= input[j2] << (limit - j2 - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k2 = 1; k2 <= bitClusterCount; k2++) {
      const offset = (bitClusterCount - k2) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
    str += "==".slice(0, 4 - bitClusterCount);
  }
  return str;
}
var init_toBase64_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-base64/toBase64.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_fromUtf8_browser();
    init_constants_for_browser();
    __name(toBase64, "toBase64");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-stream/blob/Uint8ArrayBlobAdapter.js
function bindUint8ArrayBlobAdapter(toUtf82, fromUtf82, toBase642, fromBase642) {
  return /* @__PURE__ */ __name(class Uint8ArrayBlobAdapter2 extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
      if (typeof source === "string") {
        if (encoding === "base64") {
          return Uint8ArrayBlobAdapter2.mutate(fromBase642(source));
        }
        return Uint8ArrayBlobAdapter2.mutate(fromUtf82(source));
      }
      throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
    static mutate(source) {
      Object.setPrototypeOf(source, Uint8ArrayBlobAdapter2.prototype);
      return source;
    }
    transformToString(encoding = "utf-8") {
      if (encoding === "base64") {
        return toBase642(this);
      }
      return toUtf82(this);
    }
  }, "Uint8ArrayBlobAdapter");
}
var init_Uint8ArrayBlobAdapter = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-stream/blob/Uint8ArrayBlobAdapter.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(bindUint8ArrayBlobAdapter, "bindUint8ArrayBlobAdapter");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUtf8.browser.js
var toUtf8;
var init_toUtf8_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUtf8.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    toUtf8 = /* @__PURE__ */ __name((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return new TextDecoder("utf-8").decode(input);
    }, "toUtf8");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/uuid/v4.js
function bindV4(getRandomValues) {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return () => crypto.randomUUID();
  }
  return () => {
    const rnds = new Uint8Array(16);
    getRandomValues(rnds);
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    return decimalToHex[rnds[0]] + decimalToHex[rnds[1]] + decimalToHex[rnds[2]] + decimalToHex[rnds[3]] + "-" + decimalToHex[rnds[4]] + decimalToHex[rnds[5]] + "-" + decimalToHex[rnds[6]] + decimalToHex[rnds[7]] + "-" + decimalToHex[rnds[8]] + decimalToHex[rnds[9]] + "-" + decimalToHex[rnds[10]] + decimalToHex[rnds[11]] + decimalToHex[rnds[12]] + decimalToHex[rnds[13]] + decimalToHex[rnds[14]] + decimalToHex[rnds[15]];
  };
}
var decimalToHex;
var init_v4 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/uuid/v4.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    decimalToHex = Array.from({ length: 256 }, (_, i2) => i2.toString(16).padStart(2, "0"));
    __name(bindV4, "bindV4");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var expectNumber, MAX_FLOAT, expectFloat32, expectLong, expectShort, expectByte, expectSizedInt, castInt, strictParseDouble, strictParseFloat32, NUMBER_REGEX, parseNumber, strictParseShort, strictParseByte, stackTraceWarning, logger;
var init_parse_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    expectNumber = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    }, "expectNumber");
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat32 = /* @__PURE__ */ __name((value) => {
      const expected = expectNumber(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    }, "expectFloat32");
    expectLong = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    }, "expectLong");
    expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
    expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
    expectSizedInt = /* @__PURE__ */ __name((value, size) => {
      const expected = expectLong(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    }, "expectSizedInt");
    castInt = /* @__PURE__ */ __name((value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    }, "castInt");
    strictParseDouble = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectNumber(parseNumber(value));
      }
      return expectNumber(value);
    }, "strictParseDouble");
    strictParseFloat32 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
      }
      return expectFloat32(value);
    }, "strictParseFloat32");
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = /* @__PURE__ */ __name((value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    }, "parseNumber");
    strictParseShort = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectShort(parseNumber(value));
      }
      return expectShort(value);
    }, "strictParseShort");
    strictParseByte = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectByte(parseNumber(value));
      }
      return expectByte(value);
    }, "strictParseByte");
    stackTraceWarning = /* @__PURE__ */ __name((message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s) => !s.includes("stackTraceWarning")).join("\n");
    }, "stackTraceWarning");
    logger = {
      warn: console.warn
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
function dateToUtcString(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var DAYS, MONTHS, RFC3339, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseRfc7231DateTime, parseEpochTimestamp, buildDate, parseTwoDigitYear, FIFTY_YEARS_IN_MILLIS, adjustRfc850Year, parseMonthByShortName, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
var init_date_utils = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_parse_utils();
    DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    __name(dateToUtcString, "dateToUtcString");
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}:\d{2})|[zZ])$/);
    parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = strictParseShort(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    }, "parseRfc3339DateTimeWithOffset");
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    parseRfc7231DateTime = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
          hours,
          minutes,
          seconds,
          fractionalMilliseconds
        }));
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    }, "parseRfc7231DateTime");
    parseEpochTimestamp = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
      } else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
      } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    }, "parseEpochTimestamp");
    buildDate = /* @__PURE__ */ __name((year, month, day, time3) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time3.hours, "hour", 0, 23), parseDateValue(time3.minutes, "minute", 0, 59), parseDateValue(time3.seconds, "seconds", 0, 60), parseMilliseconds(time3.fractionalMilliseconds)));
    }, "buildDate");
    parseTwoDigitYear = /* @__PURE__ */ __name((value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    }, "parseTwoDigitYear");
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    adjustRfc850Year = /* @__PURE__ */ __name((input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
      }
      return input;
    }, "adjustRfc850Year");
    parseMonthByShortName = /* @__PURE__ */ __name((value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    }, "parseMonthByShortName");
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    }, "validateDayOfMonth");
    isLeapYear = /* @__PURE__ */ __name((year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }, "isLeapYear");
    parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
      const dateVal = strictParseByte(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    }, "parseDateValue");
    parseMilliseconds = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat32("0." + value) * 1e3;
    }, "parseMilliseconds");
    parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    }, "parseOffsetToMilliseconds");
    stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    }, "stripLeadingZeroes");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
var LazyJsonString;
var init_lazy_json = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    LazyJsonString = /* @__PURE__ */ __name(function LazyJsonString2(val) {
      const str = Object.assign(new String(val), {
        deserializeJSON() {
          return JSON.parse(String(val));
        },
        toString() {
          return String(val);
        },
        toJSON() {
          return String(val);
        }
      });
      return str;
    }, "LazyJsonString");
    LazyJsonString.from = (object) => {
      if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
        return object;
      } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString(String(object));
      }
      return LazyJsonString(JSON.stringify(object));
    };
    LazyJsonString.fromObject = LazyJsonString.from;
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
var format, NumericValue;
var init_NumericValue = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    format = /^-?((0|[1-9]\d*)(\.\d+)?|\.\d+)([eE][+-]?\d+)?$/;
    NumericValue = class {
      string;
      type;
      constructor(string, type) {
        this.string = string;
        this.type = type;
        if (!format.test(string)) {
          throw new Error(`@smithy/core/serde - NumericValue string must conform to the Smithy bigDecimal format. Received: "${string}"`);
        }
      }
      toString() {
        return this.string;
      }
      static [Symbol.hasInstance](object) {
        if (!object || typeof object !== "object") {
          return false;
        }
        const _nv = object;
        return NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
      }
    };
    __name(NumericValue, "NumericValue");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i2 = 0; i2 < encoded.length; i2 += 2) {
    const encodedByte = encoded.slice(i2, i2 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i2 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
function toHex(bytes) {
  let out = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2++) {
    out += SHORT_TO_HEX[bytes[i2]];
  }
  return out;
}
var SHORT_TO_HEX, HEX_TO_SHORT;
var init_hex_encoding = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-hex-encoding/hex-encoding.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    SHORT_TO_HEX = {};
    HEX_TO_SHORT = {};
    for (let i2 = 0; i2 < 256; i2++) {
      let encodedByte = i2.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i2] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i2;
    }
    __name(fromHex, "fromHex");
    __name(toHex, "toHex");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-body-length/calculateBodyLength.browser.js
var TEXT_ENCODER, calculateBodyLength;
var init_calculateBodyLength_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-body-length/calculateBodyLength.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
    calculateBodyLength = /* @__PURE__ */ __name((body) => {
      if (typeof body === "string") {
        if (TEXT_ENCODER) {
          return TEXT_ENCODER.encode(body).byteLength;
        }
        let len = body.length;
        for (let i2 = len - 1; i2 >= 0; i2--) {
          const code = body.charCodeAt(i2);
          if (code > 127 && code <= 2047)
            len++;
          else if (code > 2047 && code <= 65535)
            len += 2;
          if (code >= 56320 && code <= 57343)
            i2--;
        }
        return len;
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    }, "calculateBodyLength");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.browser.js
var toUint8Array;
var init_toUint8Array_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-utf8/toUint8Array.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_fromUtf8_browser();
    toUint8Array = /* @__PURE__ */ __name((data) => {
      if (data instanceof Uint8Array) {
        return data;
      }
      if (typeof data === "string") {
        return fromUtf8(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/concatBytes.js
function concatBytes(arrays, length) {
  if (length === void 0) {
    length = 0;
    for (const bytes of arrays) {
      length += bytes.byteLength;
    }
  }
  const result = new Uint8Array(length);
  let offset = 0;
  for (const buf of arrays) {
    result.set(buf, offset);
    offset += buf.byteLength;
  }
  return result;
}
var init_concatBytes = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/concatBytes.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(concatBytes, "concatBytes");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/is-array-buffer/is-array-buffer.js
var isArrayBuffer;
var init_is_array_buffer = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/is-array-buffer/is-array-buffer.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromConfig.browser.js
var getEndpointFromConfig;
var init_getEndpointFromConfig_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromConfig.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    getEndpointFromConfig = /* @__PURE__ */ __name(async (serviceId) => void 0, "getEndpointFromConfig");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/s3.js
var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
var init_s3 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/s3.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    }, "resolveParamsForS3");
    DOMAIN_PATTERN = /^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/;
    IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    DOTS_PATTERN = /\.\./;
    isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
    isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
      const [arn, partition2, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition2 && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    }, "isArnBucketName");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/index.js
var init_service_customizations = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/service-customizations/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_s3();
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/createConfigValueProvider.js
var createConfigValueProvider;
var init_createConfigValueProvider = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/createConfigValueProvider.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config2, isClientContextParam = false) => {
      const configProvider = /* @__PURE__ */ __name(async () => {
        let configValue;
        if (isClientContextParam) {
          const clientContextParams = config2.clientContextParams;
          const nestedValue = clientContextParams?.[configKey];
          configValue = nestedValue ?? config2[configKey] ?? config2[canonicalEndpointParamKey];
        } else {
          configValue = config2[configKey] ?? config2[canonicalEndpointParamKey];
        }
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      }, "configProvider");
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
          const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
          const configValue = credentials?.accountId ?? credentials?.AccountId;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          if (config2.isCustomEndpoint === false) {
            return void 0;
          }
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    }, "createConfigValueProvider");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/toEndpointV1.js
var init_toEndpointV12 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/toEndpointV1.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_transport();
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromInstructions.js
function bindGetEndpointFromInstructions(getEndpointFromConfig2) {
  return async (commandInput, instructionsSupplier, clientConfig, context2) => {
    if (!clientConfig.isCustomEndpoint && !clientConfig.ignoreConfiguredEndpointUrls) {
      let endpointFromConfig;
      if (clientConfig.serviceConfiguredEndpoint) {
        endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
      } else {
        endpointFromConfig = await getEndpointFromConfig2(clientConfig.serviceId);
      }
      if (endpointFromConfig) {
        clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        clientConfig.isCustomEndpoint = true;
        context2?.logger?.debug?.(`@smithy/core/endpoints - resolved endpoint from config: ${endpointFromConfig}`);
      }
    }
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
      throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context2);
    if (clientConfig.isCustomEndpoint && clientConfig.endpoint) {
      const customEndpoint = await clientConfig.endpoint();
      if (customEndpoint?.headers) {
        endpoint.headers ??= {};
        for (const [name, value] of Object.entries(customEndpoint.headers)) {
          endpoint.headers[name] = Array.isArray(value) ? value : [value];
        }
      }
    }
    return endpoint;
  };
}
var resolveParams;
var init_getEndpointFromInstructions = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/adaptors/getEndpointFromInstructions.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_service_customizations();
    init_createConfigValueProvider();
    init_toEndpointV12();
    __name(bindGetEndpointFromInstructions, "bindGetEndpointFromInstructions");
    resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig, instruction.type !== "builtInParams")();
            break;
          case "operationContextParams":
            endpointParams[name] = instruction.get(commandInput);
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    }, "resolveParams");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/endpointMiddleware.js
function setFeature(context2, feature, value) {
  if (!context2.__smithy_context) {
    context2.__smithy_context = { features: {} };
  } else if (!context2.__smithy_context.features) {
    context2.__smithy_context.features = {};
  }
  context2.__smithy_context.features[feature] = value;
}
function bindEndpointMiddleware(getEndpointFromConfig2) {
  const getEndpointFromInstructions2 = bindGetEndpointFromInstructions(getEndpointFromConfig2);
  return ({ config: config2, instructions }) => {
    return (next, context2) => async (args) => {
      if (config2.isCustomEndpoint) {
        setFeature(context2, "ENDPOINT_OVERRIDE", "N");
      }
      const endpoint = await getEndpointFromInstructions2(args.input, {
        getEndpointParameterInstructions() {
          return instructions;
        }
      }, { ...config2 }, context2);
      context2.endpointV2 = endpoint;
      context2.authSchemes = endpoint.properties?.authSchemes;
      const authScheme = context2.authSchemes?.[0];
      if (authScheme) {
        context2["signing_region"] = authScheme.signingRegion;
        context2["signing_service"] = authScheme.signingName;
        const smithyContext = getSmithyContext(context2);
        const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
        if (httpAuthOption) {
          httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
            signing_region: authScheme.signingRegion,
            signingRegion: authScheme.signingRegion,
            signing_service: authScheme.signingName,
            signingName: authScheme.signingName,
            signingRegionSet: authScheme.signingRegionSet
          }, authScheme.properties);
        }
      }
      return next({
        ...args
      });
    };
  };
}
var init_endpointMiddleware = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/endpointMiddleware.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_transport();
    init_getEndpointFromInstructions();
    __name(setFeature, "setFeature");
    __name(bindEndpointMiddleware, "bindEndpointMiddleware");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/getEndpointPlugin.js
function bindGetEndpointPlugin(getEndpointFromConfig2) {
  const endpointMiddleware2 = bindEndpointMiddleware(getEndpointFromConfig2);
  return (config2, instructions) => ({
    applyToStack: (clientStack) => {
      clientStack.addRelativeTo(endpointMiddleware2({
        config: config2,
        instructions
      }), endpointMiddlewareOptions);
    }
  });
}
var serializerMiddlewareOption2, endpointMiddlewareOptions;
var init_getEndpointPlugin = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/getEndpointPlugin.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_endpointMiddleware();
    serializerMiddlewareOption2 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: serializerMiddlewareOption2.name
    };
    __name(bindGetEndpointPlugin, "bindGetEndpointPlugin");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/resolveEndpointConfig.js
function bindResolveEndpointConfig(getEndpointFromConfig2) {
  return (input) => {
    const tls = input.tls ?? true;
    const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
    const isCustomEndpoint = !!endpoint;
    const resolvedConfig = Object.assign(input, {
      endpoint: customEndpointProvider,
      tls,
      isCustomEndpoint,
      useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
      useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false),
      ignoreConfiguredEndpointUrls: !!input.ignoreConfiguredEndpointUrls
    });
    let configuredEndpointPromise = void 0;
    resolvedConfig.serviceConfiguredEndpoint = async () => {
      if (input.serviceId && !configuredEndpointPromise) {
        configuredEndpointPromise = getEndpointFromConfig2(input.serviceId);
      }
      return configuredEndpointPromise;
    };
    return resolvedConfig;
  };
}
var init_resolveEndpointConfig = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/middleware-endpoint/resolveEndpointConfig.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_transport();
    init_toEndpointV12();
    __name(bindResolveEndpointConfig, "bindResolveEndpointConfig");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/bdd/BinaryDecisionDiagram.js
var BinaryDecisionDiagram;
var init_BinaryDecisionDiagram = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/bdd/BinaryDecisionDiagram.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    BinaryDecisionDiagram = class {
      nodes;
      root;
      conditions;
      results;
      constructor(bdd2, root2, conditions, results) {
        this.nodes = bdd2;
        this.root = root2;
        this.conditions = conditions;
        this.results = results;
      }
      static from(bdd2, root2, conditions, results) {
        return new BinaryDecisionDiagram(bdd2, root2, conditions, results);
      }
    };
    __name(BinaryDecisionDiagram, "BinaryDecisionDiagram");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/cache/EndpointCache.js
var EndpointCache;
var init_EndpointCache = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/cache/EndpointCache.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    EndpointCache = class {
      capacity;
      data = /* @__PURE__ */ new Map();
      parameters = [];
      constructor({ size, params }) {
        this.capacity = size ?? 50;
        if (params) {
          this.parameters = params;
        }
      }
      get(endpointParams, resolver) {
        const key = this.hash(endpointParams);
        if (key === false) {
          return resolver();
        }
        if (!this.data.has(key)) {
          if (this.data.size > this.capacity + 10) {
            const keys = this.data.keys();
            let i2 = 0;
            while (true) {
              const { value, done } = keys.next();
              this.data.delete(value);
              if (done || ++i2 > 10) {
                break;
              }
            }
          }
          this.data.set(key, resolver());
        }
        return this.data.get(key);
      }
      size() {
        return this.data.size;
      }
      hash(endpointParams) {
        let buffer = "";
        const { parameters } = this;
        if (parameters.length === 0) {
          return false;
        }
        for (const param of parameters) {
          const val = String(endpointParams[param] ?? "");
          if (val.includes("|;")) {
            return false;
          }
          buffer += val + "|;";
        }
        return buffer;
      }
    };
    __name(EndpointCache, "EndpointCache");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/EndpointError.js
var EndpointError;
var init_EndpointError = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/EndpointError.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    EndpointError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
    __name(EndpointError, "EndpointError");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/index.js
var init_types = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/types/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_EndpointError();
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/debugId.js
var debugId;
var init_debugId = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/debugId.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    debugId = "endpoints";
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/toDebugString.js
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
var init_toDebugString = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/toDebugString.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(toDebugString, "toDebugString");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/index.js
var init_debug = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/debug/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_debugId();
    init_toDebugString();
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/customEndpointFunctions.js
var customEndpointFunctions;
var init_customEndpointFunctions = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/customEndpointFunctions.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    customEndpointFunctions = {};
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/booleanEquals.js
var booleanEquals;
var init_booleanEquals = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/booleanEquals.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/coalesce.js
function coalesce(...args) {
  for (const arg of args) {
    if (arg != null) {
      return arg;
    }
  }
  return void 0;
}
var init_coalesce = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/coalesce.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(coalesce, "coalesce");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/getAttrPathList.js
var getAttrPathList;
var init_getAttrPathList = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/getAttrPathList.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_types();
    getAttrPathList = /* @__PURE__ */ __name((path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    }, "getAttrPathList");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/getAttr.js
var getAttr;
var init_getAttr = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/getAttr.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_types();
    init_getAttrPathList();
    getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        const i2 = parseInt(index);
        return acc[i2 < 0 ? acc.length + i2 : i2];
      }
      return acc[index];
    }, value), "getAttr");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/isSet.js
var isSet;
var init_isSet = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/isSet.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/ite.js
function ite(condition, trueValue, falseValue) {
  return condition ? trueValue : falseValue;
}
var init_ite = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/ite.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(ite, "ite");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/not.js
var not;
var init_not = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/not.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    not = /* @__PURE__ */ __name((value) => !value, "not");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/isIpAddress.js
var IP_V4_REGEX, isIpAddress;
var init_isIpAddress = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/isIpAddress.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
    isIpAddress = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/parseURL.js
var DEFAULT_PORTS, parseURL;
var init_parseURL = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/parseURL.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_dist_es();
    init_isIpAddress();
    DEFAULT_PORTS = {
      [EndpointURLScheme.HTTP]: 80,
      [EndpointURLScheme.HTTPS]: 443
    };
    parseURL = /* @__PURE__ */ __name((value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k2, v]) => `${k2}=${v}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (ignored) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    }, "parseURL");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/split.js
function split(value, delimiter, limit) {
  if (limit === 1) {
    return [value];
  }
  if (value === "") {
    return [""];
  }
  const parts = value.split(delimiter);
  if (limit === 0) {
    return parts;
  }
  return parts.slice(0, limit - 1).concat(parts.slice(1).join(delimiter));
}
var init_split = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/split.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(split, "split");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/stringEquals.js
var stringEquals;
var init_stringEquals = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/stringEquals.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/substring.js
var substring;
var init_substring = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/substring.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
      if (input == null || start >= stop || input.length < stop || /[^\u0000-\u007f]/.test(input)) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    }, "substring");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/uriEncode.js
var uriEncode;
var init_uriEncode = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/uriEncode.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/index.js
var init_lib = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/lib/index.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_booleanEquals();
    init_coalesce();
    init_getAttr();
    init_isSet();
    init_transport();
    init_ite();
    init_not();
    init_parseURL();
    init_split();
    init_stringEquals();
    init_substring();
    init_uriEncode();
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/endpointFunctions.js
var endpointFunctions;
var init_endpointFunctions = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/endpointFunctions.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_lib();
    endpointFunctions = {
      booleanEquals,
      coalesce,
      getAttr,
      isSet,
      isValidHostLabel,
      ite,
      not,
      parseURL,
      split,
      stringEquals,
      substring,
      uriEncode
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateTemplate.js
var evaluateTemplate;
var init_evaluateTemplate = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateTemplate.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_lib();
    evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
      const evaluatedTemplateArr = [];
      const { referenceRecord, endpointParams } = options;
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(referenceRecord[refName] ?? endpointParams[refName], attrName));
        } else {
          evaluatedTemplateArr.push(referenceRecord[parameterName] ?? endpointParams[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    }, "evaluateTemplate");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getReferenceValue.js
var getReferenceValue;
var init_getReferenceValue = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getReferenceValue.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
      return options.referenceRecord[ref] ?? options.endpointParams[ref];
    }, "getReferenceValue");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateExpression.js
var evaluateExpression, callFunction, group3;
var init_evaluateExpression = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateExpression.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_types();
    init_customEndpointFunctions();
    init_endpointFunctions();
    init_evaluateTemplate();
    init_getReferenceValue();
    evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return group3.callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    }, "evaluateExpression");
    callFunction = /* @__PURE__ */ __name(({ fn, argv: argv2 }, options) => {
      const evaluatedArgs = Array(argv2.length);
      for (let i2 = 0; i2 < evaluatedArgs.length; ++i2) {
        const arg = argv2[i2];
        if (typeof arg === "boolean" || typeof arg === "number") {
          evaluatedArgs[i2] = arg;
        } else {
          evaluatedArgs[i2] = group3.evaluateExpression(arg, "arg", options);
        }
      }
      const namespaceSeparatorIndex = fn.indexOf(".");
      if (namespaceSeparatorIndex !== -1) {
        const namespaceFunctions = customEndpointFunctions[fn.slice(0, namespaceSeparatorIndex)];
        const customFunction = namespaceFunctions?.[fn.slice(namespaceSeparatorIndex + 1)];
        if (typeof customFunction === "function") {
          return customFunction(...evaluatedArgs);
        }
      }
      const callable = endpointFunctions[fn];
      if (typeof callable === "function") {
        return callable(...evaluatedArgs);
      }
      throw new Error(`function ${fn} not loaded in endpointFunctions.`);
    }, "callFunction");
    group3 = {
      evaluateExpression,
      callFunction
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/callFunction.js
var init_callFunction = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/callFunction.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_evaluateExpression();
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateCondition.js
var evaluateCondition;
var init_evaluateCondition = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/evaluateCondition.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_debug();
    init_types();
    init_callFunction();
    evaluateCondition = /* @__PURE__ */ __name((condition, options) => {
      const { assign } = condition;
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(condition, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(condition)} = ${toDebugString(value)}`);
      const result = value === "" ? true : !!value;
      if (assign != null) {
        return { result, toAssign: { name: assign, value } };
      }
      return { result };
    }, "evaluateCondition");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointHeaders.js
var getEndpointHeaders;
var init_getEndpointHeaders = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointHeaders.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_types();
    init_evaluateExpression();
    getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers ?? {}).reduce((acc, [headerKey, headerVal]) => {
      acc[headerKey] = headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      });
      return acc;
    }, {}), "getEndpointHeaders");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointProperties.js
var getEndpointProperties, getEndpointProperty, group4;
var init_getEndpointProperties = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointProperties.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_types();
    init_evaluateTemplate();
    getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => {
      acc[propertyKey] = group4.getEndpointProperty(propertyVal, options);
      return acc;
    }, {}), "getEndpointProperties");
    getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError(`Unexpected endpoint property: ${property}`);
          }
          return group4.getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
      }
    }, "getEndpointProperty");
    group4 = {
      getEndpointProperty,
      getEndpointProperties
    };
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointUrl.js
var getEndpointUrl;
var init_getEndpointUrl = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/utils/getEndpointUrl.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_types();
    init_evaluateExpression();
    getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error3) {
          console.error(`Failed to construct URL with ${expression}`, error3);
          throw error3;
        }
      }
      throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
    }, "getEndpointUrl");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/decideEndpoint.js
var RESULT, decideEndpoint;
var init_decideEndpoint = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/util-endpoints/decideEndpoint.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_types();
    init_evaluateCondition();
    init_evaluateExpression();
    init_getEndpointHeaders();
    init_getEndpointProperties();
    init_getEndpointUrl();
    RESULT = 1e8;
    decideEndpoint = /* @__PURE__ */ __name((bdd2, options) => {
      const { nodes: nodes2, root: root2, results, conditions } = bdd2;
      let ref = root2;
      const referenceRecord = {};
      const closure = {
        referenceRecord,
        endpointParams: options.endpointParams,
        logger: options.logger
      };
      while (ref !== 1 && ref !== -1 && ref < RESULT) {
        const node_i = 3 * (Math.abs(ref) - 1);
        const [condition_i, highRef, lowRef] = [nodes2[node_i], nodes2[node_i + 1], nodes2[node_i + 2]];
        const [fn, argv2, assign] = conditions[condition_i];
        const evaluation = evaluateCondition({ fn, assign, argv: argv2 }, closure);
        if (evaluation.toAssign) {
          const { name, value } = evaluation.toAssign;
          referenceRecord[name] = value;
        }
        ref = ref >= 0 === evaluation.result ? highRef : lowRef;
      }
      if (ref >= RESULT) {
        const result = results[ref - RESULT];
        if (result[0] === -1) {
          const [, errorExpression] = result;
          throw new EndpointError(evaluateExpression(errorExpression, "Error", closure));
        }
        const [url, properties, headers] = result;
        return {
          url: getEndpointUrl(url, closure),
          properties: getEndpointProperties(properties, closure),
          headers: getEndpointHeaders(headers ?? {}, closure)
        };
      }
      throw new EndpointError(`No matching endpoint.`);
    }, "decideEndpoint");
  }
});

// node_modules/@smithy/core/dist-es/submodules/endpoints/index.browser.js
var getEndpointFromInstructions, resolveEndpointConfig, endpointMiddleware, getEndpointPlugin;
var init_index_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/endpoints/index.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_getEndpointFromConfig_browser();
    init_getEndpointFromInstructions();
    init_endpointMiddleware();
    init_getEndpointPlugin();
    init_resolveEndpointConfig();
    init_BinaryDecisionDiagram();
    init_EndpointCache();
    init_decideEndpoint();
    init_isIpAddress();
    init_transport();
    init_customEndpointFunctions();
    getEndpointFromInstructions = bindGetEndpointFromInstructions(getEndpointFromConfig);
    resolveEndpointConfig = bindResolveEndpointConfig(getEndpointFromConfig);
    endpointMiddleware = bindEndpointMiddleware(getEndpointFromConfig);
    getEndpointPlugin = bindGetEndpointPlugin(getEndpointFromConfig);
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-stream/stream-type-check.js
var isBlob;
var init_stream_type_check = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-stream/stream-type-check.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    isBlob = /* @__PURE__ */ __name((blob) => {
      return typeof Blob === "function" && (blob?.constructor?.name === Blob.name || blob instanceof Blob);
    }, "isBlob");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/util-stream/stream-collector.browser.js
async function collectBlob(blob) {
  return blob.arrayBuffer().then((ab) => new Uint8Array(ab));
}
async function collectReadableStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    if (done) {
      break;
    }
  }
  return concatBytes(chunks, length);
}
var streamCollector;
var init_stream_collector_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/util-stream/stream-collector.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_concatBytes();
    init_stream_type_check();
    streamCollector = /* @__PURE__ */ __name(async (stream) => {
      if (isBlob(stream)) {
        return collectBlob(stream);
      }
      return collectReadableStream(stream);
    }, "streamCollector");
    __name(collectBlob, "collectBlob");
    __name(collectReadableStream, "collectReadableStream");
  }
});

// node_modules/@smithy/core/dist-es/submodules/serde/index.browser.js
var no, Uint8ArrayBlobAdapter, _getRandomValues, v4, generateIdempotencyToken;
var init_index_browser2 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/serde/index.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_fromBase64_browser();
    init_toBase64_browser();
    init_Uint8ArrayBlobAdapter();
    init_fromUtf8_browser();
    init_toUtf8_browser();
    init_v4();
    init_date_utils();
    init_lazy_json();
    init_NumericValue();
    init_hex_encoding();
    init_calculateBodyLength_browser();
    init_toUint8Array_browser();
    init_concatBytes();
    init_is_array_buffer();
    init_stream_collector_browser();
    no = Symbol.for("node-only");
    Uint8ArrayBlobAdapter = class extends bindUint8ArrayBlobAdapter(toUtf8, fromUtf8, toBase64, fromBase64) {
    };
    __name(Uint8ArrayBlobAdapter, "Uint8ArrayBlobAdapter");
    _getRandomValues = /* @__PURE__ */ __name((array) => crypto.getRandomValues(array), "_getRandomValues");
    v4 = bindV4(_getRandomValues);
    generateIdempotencyToken = v4;
  }
});

// node_modules/@smithy/core/dist-es/submodules/checksum/crc32/Crc32Js.js
var CRC32_TABLE, ONES, Crc32Js;
var init_Crc32Js = __esm({
  "node_modules/@smithy/core/dist-es/submodules/checksum/crc32/Crc32Js.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    CRC32_TABLE = new Uint32Array(256);
    for (let i2 = 0; i2 < 256; ++i2) {
      let c2 = i2;
      for (let j2 = 0; j2 < 8; ++j2) {
        c2 = c2 & 1 ? 3988292384 ^ c2 >>> 1 : c2 >>> 1;
      }
      CRC32_TABLE[i2] = c2 >>> 0;
    }
    ONES = 4294967295;
    Crc32Js = class {
      digestLength = 4;
      checksum = ONES;
      update(data) {
        for (let i2 = 0; i2 < data.length; ++i2) {
          this.checksum = this.checksum >>> 8 ^ CRC32_TABLE[(this.checksum ^ data[i2]) & 255];
        }
      }
      digestSync() {
        return (this.checksum ^ ONES) >>> 0;
      }
      async digest() {
        const value = this.digestSync();
        const out = new Uint8Array(4);
        new DataView(out.buffer).setUint32(0, value, false);
        return out;
      }
      reset() {
        this.checksum = ONES;
      }
    };
    __name(Crc32Js, "Crc32Js");
  }
});

// node_modules/@smithy/core/dist-es/submodules/checksum/sha256/Sha256Js.js
var BLOCK, DIGEST_LENGTH, MAX_HASHABLE_LENGTH, Sha256Js, INIT, K;
var init_Sha256Js = __esm({
  "node_modules/@smithy/core/dist-es/submodules/checksum/sha256/Sha256Js.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_browser2();
    BLOCK = 64;
    DIGEST_LENGTH = 32;
    MAX_HASHABLE_LENGTH = 2 ** 53 - 1;
    Sha256Js = class {
      digestLength = DIGEST_LENGTH;
      state = Int32Array.from(INIT);
      w;
      buffer = new Uint8Array(64);
      bufferLength = 0;
      bytesHashed = 0;
      finished = false;
      inner;
      outer;
      constructor(secret) {
        if (secret) {
          const key = Sha256Js.normalizeKey(secret);
          this.inner = new Sha256Js();
          this.outer = new Sha256Js();
          const { inner, outer } = this;
          const pad = new Uint8Array(BLOCK * 2);
          for (let i2 = 0; i2 < BLOCK; ++i2) {
            pad[i2] = 54 ^ key[i2];
            pad[i2 + BLOCK] = 92 ^ key[i2];
          }
          inner.update(pad.subarray(0, BLOCK));
          outer.update(pad.subarray(BLOCK));
        }
      }
      update(data) {
        if (this.finished) {
          throw new Error("Attempted to update an already finished HMAC.");
        }
        if (this.inner) {
          this.inner.update(data);
          return;
        }
        const chunk = toUint8Array(data);
        let position = 0;
        let { byteLength } = chunk;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
          this.buffer[this.bufferLength++] = chunk[position++];
          byteLength--;
          if (this.bufferLength === BLOCK) {
            this.hashBuffer();
            this.bufferLength = 0;
          }
        }
      }
      async digest() {
        const { inner, outer } = this;
        if (inner && outer) {
          if (this.finished) {
            throw new Error("Attempted to digest an already finished HMAC.");
          }
          this.finished = true;
          const innerDigest = inner.digestSync();
          outer.update(innerDigest);
          return outer.digestSync();
        }
        return this.digestSync();
      }
      reset() {
        this.state = Int32Array.from(INIT);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
      }
      digestSync() {
        const state = this.state.slice();
        const buffer = this.buffer.slice();
        let bufferLength = this.bufferLength;
        const bitsHashed = this.bytesHashed * 8;
        const bufferView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        bufferView.setUint8(bufferLength++, 128);
        if ((bufferLength - 1) % BLOCK >= BLOCK - 8) {
          for (let i2 = bufferLength; i2 < BLOCK; ++i2) {
            bufferView.setUint8(i2, 0);
          }
          this.hashBufferWith(state, buffer);
          bufferLength = 0;
        }
        for (let i2 = bufferLength; i2 < BLOCK - 8; ++i2) {
          bufferView.setUint8(i2, 0);
        }
        bufferView.setUint32(BLOCK - 8, Math.floor(bitsHashed / 4294967296), false);
        bufferView.setUint32(BLOCK - 4, bitsHashed, false);
        this.hashBufferWith(state, buffer);
        const out = new Uint8Array(DIGEST_LENGTH);
        for (let i2 = 0; i2 < 8; ++i2) {
          out[i2 * 4] = state[i2] >>> 24 & 255;
          out[i2 * 4 + 1] = state[i2] >>> 16 & 255;
          out[i2 * 4 + 2] = state[i2] >>> 8 & 255;
          out[i2 * 4 + 3] = state[i2] >>> 0 & 255;
        }
        return out;
      }
      static normalizeKey(secret) {
        const key = toUint8Array(secret);
        if (key.byteLength > BLOCK) {
          const h2 = new Sha256Js();
          h2.update(key);
          const out = h2.digestSync();
          const padded = new Uint8Array(BLOCK);
          padded.set(out);
          return padded;
        }
        if (key.byteLength < BLOCK) {
          const padded = new Uint8Array(BLOCK);
          padded.set(key);
          return padded;
        }
        return key;
      }
      hashBuffer() {
        this.hashBufferWith(this.state, this.buffer);
      }
      hashBufferWith(state, buffer) {
        const w = this.w ??= new Int32Array(64);
        let s0 = state[0], s1 = state[1], s2 = state[2], s3 = state[3], s4 = state[4], s5 = state[5], s6 = state[6], s7 = state[7];
        for (let i2 = 0; i2 < BLOCK; ++i2) {
          if (i2 < 16) {
            w[i2] = (buffer[i2 * 4] & 255) << 24 | (buffer[i2 * 4 + 1] & 255) << 16 | (buffer[i2 * 4 + 2] & 255) << 8 | buffer[i2 * 4 + 3] & 255;
          } else {
            let u = w[i2 - 2];
            const t12 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
            u = w[i2 - 15];
            const t22 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
            w[i2] = (t12 + w[i2 - 7] | 0) + (t22 + w[i2 - 16] | 0);
          }
          const t1 = (((s4 >>> 6 | s4 << 26) ^ (s4 >>> 11 | s4 << 21) ^ (s4 >>> 25 | s4 << 7)) + (s4 & s5 ^ ~s4 & s6) | 0) + (s7 + (K[i2] + w[i2] | 0) | 0) | 0;
          const t2 = ((s0 >>> 2 | s0 << 30) ^ (s0 >>> 13 | s0 << 19) ^ (s0 >>> 22 | s0 << 10)) + (s0 & s1 ^ s0 & s2 ^ s1 & s2) | 0;
          s7 = s6;
          s6 = s5;
          s5 = s4;
          s4 = s3 + t1 | 0;
          s3 = s2;
          s2 = s1;
          s1 = s0;
          s0 = t1 + t2 | 0;
        }
        state[0] += s0;
        state[1] += s1;
        state[2] += s2;
        state[3] += s3;
        state[4] += s4;
        state[5] += s5;
        state[6] += s6;
        state[7] += s7;
      }
    };
    __name(Sha256Js, "Sha256Js");
    INIT = new Int32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    K = new Int32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
  }
});

// node_modules/@smithy/core/dist-es/submodules/checksum/sha256/Sha256WebCrypto.js
var digest, sign, importKey, subtle, MAX_PENDING_BYTES, Sha256WebCrypto;
var init_Sha256WebCrypto = __esm({
  "node_modules/@smithy/core/dist-es/submodules/checksum/sha256/Sha256WebCrypto.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_browser2();
    init_Sha256Js();
    ({ digest, sign, importKey } = globalThis?.crypto?.subtle ?? {});
    subtle = typeof digest === "function" && typeof sign === "function" && typeof importKey === "function" ? globalThis.crypto.subtle : void 0;
    MAX_PENDING_BYTES = 8 * 1024 * 1024;
    Sha256WebCrypto = class {
      digestLength = 32;
      secret;
      pending = [];
      pendingBytes = 0;
      fallback;
      finished = false;
      constructor(secret) {
        if (secret) {
          this.secret = toUint8Array(secret);
        }
      }
      update(data) {
        if (this.finished) {
          throw new Error("Attempted to update an already finished HMAC.");
        }
        if (this.fallback) {
          this.fallback.update(data);
          return;
        }
        this.pending.push(data.slice());
        this.pendingBytes += data.byteLength;
        if (this.pendingBytes >= MAX_PENDING_BYTES) {
          this.switchToFallback();
        }
      }
      async digest() {
        if (this.fallback) {
          return this.fallback.digest();
        }
        if (this.secret && this.finished) {
          throw new Error("Attempted to digest an already finished HMAC.");
        }
        const data = concatBytes(this.pending);
        if (subtle) {
          if (this.secret) {
            this.finished = true;
            const key = await subtle.importKey("raw", this.secret, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
            const sig = await subtle.sign("HMAC", key, data);
            return new Uint8Array(sig);
          }
          const hash = await subtle.digest("SHA-256", data);
          return new Uint8Array(hash);
        }
        const sha256 = new Sha256Js(this.secret);
        sha256.update(data);
        return sha256.digest();
      }
      reset() {
        this.pending = [];
        this.pendingBytes = 0;
        this.fallback = void 0;
        this.finished = false;
      }
      switchToFallback() {
        const sha256Js = new Sha256Js(this.secret);
        for (const chunk of this.pending) {
          sha256Js.update(chunk);
        }
        this.fallback = sha256Js;
        this.pending = [];
        this.pendingBytes = 0;
      }
    };
    __name(Sha256WebCrypto, "Sha256WebCrypto");
  }
});

// node_modules/@smithy/core/dist-es/submodules/checksum/index.browser.js
var no2;
var init_index_browser3 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/checksum/index.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_Crc32Js();
    init_Sha256WebCrypto();
    no2 = Symbol.for("node-only");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/Int64.js
function negate(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}
var Int64;
var init_Int64 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/Int64.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_browser2();
    Int64 = class {
      bytes;
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
          bytes[i2] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    __name(Int64, "Int64");
    __name(negate, "negate");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/HeaderMarshaller.js
var HeaderMarshaller, HEADER_VALUE_TYPE, BOOLEAN_TAG, BYTE_TAG, SHORT_TAG, INT_TAG, LONG_TAG, BINARY_TAG, STRING_TAG, TIMESTAMP_TAG, UUID_TAG, UUID_PATTERN;
var init_HeaderMarshaller = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/HeaderMarshaller.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_browser2();
    init_Int64();
    HeaderMarshaller = class {
      toUtf8;
      fromUtf8;
      constructor(toUtf82, fromUtf82) {
        this.toUtf8 = toUtf82;
        this.fromUtf8 = fromUtf82;
      }
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = this.fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = this.fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(fromHex(header.value.replace(/-/g, "")), 1);
            return uuidBytes;
        }
      }
      parse(headers) {
        const out = {};
        let position = 0;
        while (position < headers.byteLength) {
          const nameLength = headers.getUint8(position++);
          const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
          position += nameLength;
          switch (headers.getUint8(position++)) {
            case 0:
              out[name] = {
                type: BOOLEAN_TAG,
                value: true
              };
              break;
            case 1:
              out[name] = {
                type: BOOLEAN_TAG,
                value: false
              };
              break;
            case 2:
              out[name] = {
                type: BYTE_TAG,
                value: headers.getInt8(position++)
              };
              break;
            case 3:
              out[name] = {
                type: SHORT_TAG,
                value: headers.getInt16(position, false)
              };
              position += 2;
              break;
            case 4:
              out[name] = {
                type: INT_TAG,
                value: headers.getInt32(position, false)
              };
              position += 4;
              break;
            case 5:
              out[name] = {
                type: LONG_TAG,
                value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
              };
              position += 8;
              break;
            case 6:
              const binaryLength = headers.getUint16(position, false);
              position += 2;
              out[name] = {
                type: BINARY_TAG,
                value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
              };
              position += binaryLength;
              break;
            case 7:
              const stringLength = headers.getUint16(position, false);
              position += 2;
              out[name] = {
                type: STRING_TAG,
                value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
              };
              position += stringLength;
              break;
            case 8:
              out[name] = {
                type: TIMESTAMP_TAG,
                value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
              };
              position += 8;
              break;
            case 9:
              const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
              position += 16;
              out[name] = {
                type: UUID_TAG,
                value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
              };
              break;
            default:
              throw new Error(`Unrecognized header type tag`);
          }
        }
        return out;
      }
    };
    __name(HeaderMarshaller, "HeaderMarshaller");
    (function(HEADER_VALUE_TYPE3) {
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
      HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
    })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
    BOOLEAN_TAG = "boolean";
    BYTE_TAG = "byte";
    SHORT_TAG = "short";
    INT_TAG = "integer";
    LONG_TAG = "long";
    BINARY_TAG = "binary";
    STRING_TAG = "string";
    TIMESTAMP_TAG = "timestamp";
    UUID_TAG = "uuid";
    UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/splitMessage.js
function splitMessage({ byteLength, byteOffset, buffer }) {
  if (byteLength < MINIMUM_MESSAGE_LENGTH) {
    throw new Error("Provided message too short to accommodate event stream message overhead");
  }
  const view = new DataView(buffer, byteOffset, byteLength);
  const messageLength = view.getUint32(0, false);
  if (byteLength !== messageLength) {
    throw new Error("Reported message length does not match received message length");
  }
  const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
  const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
  const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
  const checksummer = new Crc32Js();
  checksummer.update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
  if (expectedPreludeChecksum !== checksummer.digestSync()) {
    throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digestSync()})`);
  }
  checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
  if (expectedMessageChecksum !== checksummer.digestSync()) {
    throw new Error(`The message checksum (${checksummer.digestSync()}) did not match the expected value of ${expectedMessageChecksum}`);
  }
  return {
    headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
    body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
  };
}
var PRELUDE_MEMBER_LENGTH, PRELUDE_LENGTH, CHECKSUM_LENGTH, MINIMUM_MESSAGE_LENGTH;
var init_splitMessage = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/splitMessage.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_browser3();
    PRELUDE_MEMBER_LENGTH = 4;
    PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
    CHECKSUM_LENGTH = 4;
    MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
    __name(splitMessage, "splitMessage");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/EventStreamCodec.js
var EventStreamCodec;
var init_EventStreamCodec = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/EventStreamCodec.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_index_browser3();
    init_HeaderMarshaller();
    init_splitMessage();
    EventStreamCodec = class {
      headerMarshaller;
      messageBuffer;
      isEndOfStream;
      constructor(toUtf82, fromUtf82) {
        this.headerMarshaller = new HeaderMarshaller(toUtf82, fromUtf82);
        this.messageBuffer = [];
        this.isEndOfStream = false;
      }
      feed(message) {
        this.messageBuffer.push(this.decode(message));
      }
      endOfStream() {
        this.isEndOfStream = true;
      }
      getMessage() {
        const message = this.messageBuffer.pop();
        const isEndOfStream = this.isEndOfStream;
        return {
          getMessage() {
            return message;
          },
          isEndOfStream() {
            return isEndOfStream;
          }
        };
      }
      getAvailableMessages() {
        const messages = this.messageBuffer;
        this.messageBuffer = [];
        const isEndOfStream = this.isEndOfStream;
        return {
          getMessages() {
            return messages;
          },
          isEndOfStream() {
            return isEndOfStream;
          }
        };
      }
      encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new Crc32Js();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        checksum.update(out.subarray(0, 8));
        view.setUint32(8, checksum.digestSync(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        checksum.update(out.subarray(8, length - 4));
        view.setUint32(length - 4, checksum.digestSync(), false);
        return out;
      }
      decode(message) {
        const { headers, body } = splitMessage(message);
        return { headers: this.headerMarshaller.parse(headers), body };
      }
      formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
      }
    };
    __name(EventStreamCodec, "EventStreamCodec");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageDecoderStream.js
var MessageDecoderStream;
var init_MessageDecoderStream = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageDecoderStream.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    MessageDecoderStream = class {
      options;
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const bytes of this.options.inputStream) {
          const decoded = this.options.decoder.decode(bytes);
          yield decoded;
        }
      }
    };
    __name(MessageDecoderStream, "MessageDecoderStream");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageEncoderStream.js
var MessageEncoderStream;
var init_MessageEncoderStream = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/MessageEncoderStream.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    MessageEncoderStream = class {
      options;
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const msg of this.options.messageStream) {
          const encoded = this.options.encoder.encode(msg);
          yield encoded;
        }
        if (this.options.includeEndFrame) {
          yield new Uint8Array(0);
        }
      }
    };
    __name(MessageEncoderStream, "MessageEncoderStream");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream;
var init_SmithyMessageDecoderStream = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageDecoderStream.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    SmithyMessageDecoderStream = class {
      options;
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const message of this.options.messageStream) {
          const deserialized = await this.options.deserializer(message);
          if (deserialized === void 0)
            continue;
          yield deserialized;
        }
      }
    };
    __name(SmithyMessageDecoderStream, "SmithyMessageDecoderStream");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream;
var init_SmithyMessageEncoderStream = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-codec/SmithyMessageEncoderStream.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    SmithyMessageEncoderStream = class {
      options;
      constructor(options) {
        this.options = options;
      }
      [Symbol.asyncIterator]() {
        return this.asyncIterator();
      }
      async *asyncIterator() {
        for await (const chunk of this.options.inputStream) {
          const payloadBuf = this.options.serializer(chunk);
          yield payloadBuf;
        }
      }
    };
    __name(SmithyMessageEncoderStream, "SmithyMessageEncoderStream");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getChunkedStream.js
function getChunkedStream(source) {
  let currentMessageTotalLength = 0;
  let currentMessagePendingLength = 0;
  let currentMessage = null;
  let messageLengthBuffer = null;
  const allocateMessage = /* @__PURE__ */ __name((size) => {
    if (typeof size !== "number") {
      throw new Error("Attempted to allocate an event message where size was not a number: " + size);
    }
    currentMessageTotalLength = size;
    currentMessagePendingLength = 4;
    currentMessage = new Uint8Array(size);
    const currentMessageView = new DataView(currentMessage.buffer);
    currentMessageView.setUint32(0, size, false);
  }, "allocateMessage");
  const iterator = /* @__PURE__ */ __name(async function* () {
    const sourceIterator = source[Symbol.asyncIterator]();
    while (true) {
      const { value, done } = await sourceIterator.next();
      if (done) {
        if (!currentMessageTotalLength) {
          return;
        } else if (currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
        } else {
          throw new Error("Truncated event message received.");
        }
        return;
      }
      const chunkLength = value.length;
      let currentOffset = 0;
      while (currentOffset < chunkLength) {
        if (!currentMessage) {
          const bytesRemaining = chunkLength - currentOffset;
          if (!messageLengthBuffer) {
            messageLengthBuffer = new Uint8Array(4);
          }
          const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
          messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
          currentMessagePendingLength += numBytesForTotal;
          currentOffset += numBytesForTotal;
          if (currentMessagePendingLength < 4) {
            break;
          }
          allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
          messageLengthBuffer = null;
        }
        const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
        currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
        currentMessagePendingLength += numBytesToWrite;
        currentOffset += numBytesToWrite;
        if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
          yield currentMessage;
          currentMessage = null;
          currentMessageTotalLength = 0;
          currentMessagePendingLength = 0;
        }
      }
    }
  }, "iterator");
  return {
    [Symbol.asyncIterator]: iterator
  };
}
var init_getChunkedStream = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getChunkedStream.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(getChunkedStream, "getChunkedStream");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getUnmarshalledStream.js
function getUnmarshalledStream(source, options) {
  const messageUnmarshaller = getMessageUnmarshaller(options.deserializer, options.toUtf8);
  return {
    [Symbol.asyncIterator]: async function* () {
      for await (const chunk of source) {
        const message = options.eventStreamCodec.decode(chunk);
        const type = await messageUnmarshaller(message);
        if (type === void 0)
          continue;
        yield type;
      }
    }
  };
}
function getMessageUnmarshaller(deserializer, toUtf82) {
  return async function(message) {
    const { value: messageType } = message.headers[":message-type"];
    if (messageType === "error") {
      const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
      unmodeledError.name = message.headers[":error-code"].value;
      throw unmodeledError;
    } else if (messageType === "exception") {
      const code = message.headers[":exception-type"].value;
      const exception = { [code]: message };
      const deserializedException = await deserializer(exception);
      if (deserializedException.$unknown) {
        const error3 = new Error(toUtf82(message.body));
        error3.name = code;
        throw error3;
      }
      throw deserializedException[code];
    } else if (messageType === "event") {
      const event = {
        [message.headers[":event-type"].value]: message
      };
      const deserialized = await deserializer(event);
      if (deserialized.$unknown)
        return;
      return deserialized;
    } else {
      throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
    }
  };
}
var init_getUnmarshalledStream = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/getUnmarshalledStream.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(getUnmarshalledStream, "getUnmarshalledStream");
    __name(getMessageUnmarshaller, "getMessageUnmarshaller");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/EventStreamMarshaller.js
var EventStreamMarshaller, eventStreamSerdeProvider;
var init_EventStreamMarshaller = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-universal/EventStreamMarshaller.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_EventStreamCodec();
    init_MessageDecoderStream();
    init_MessageEncoderStream();
    init_SmithyMessageDecoderStream();
    init_SmithyMessageEncoderStream();
    init_getChunkedStream();
    init_getUnmarshalledStream();
    EventStreamMarshaller = class {
      eventStreamCodec;
      utfEncoder;
      constructor({ utf8Encoder, utf8Decoder }) {
        this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
        this.utfEncoder = utf8Encoder;
      }
      deserialize(body, deserializer) {
        const inputStream = getChunkedStream(body);
        return new SmithyMessageDecoderStream({
          messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
          deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
        });
      }
      serialize(inputStream, serializer) {
        return new MessageEncoderStream({
          messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
          encoder: this.eventStreamCodec,
          includeEndFrame: true
        });
      }
    };
    __name(EventStreamMarshaller, "EventStreamMarshaller");
    eventStreamSerdeProvider = /* @__PURE__ */ __name((options) => new EventStreamMarshaller(options), "eventStreamSerdeProvider");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/utils.js
var readableStreamToIterable, iterableToReadableStream;
var init_utils2 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/utils.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    readableStreamToIterable = /* @__PURE__ */ __name((readableStream) => ({
      [Symbol.asyncIterator]: async function* () {
        const reader = readableStream.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done)
              return;
            yield value;
          }
        } finally {
          reader.releaseLock();
        }
      }
    }), "readableStreamToIterable");
    iterableToReadableStream = /* @__PURE__ */ __name((asyncIterable) => {
      const iterator = asyncIterable[Symbol.asyncIterator]();
      return new ReadableStream({
        async pull(controller) {
          const { done, value } = await iterator.next();
          if (done) {
            return controller.close();
          }
          controller.enqueue(value);
        }
      });
    }, "iterableToReadableStream");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/EventStreamMarshaller.browser.js
var EventStreamMarshaller2, isReadableStream, eventStreamSerdeProvider2;
var init_EventStreamMarshaller_browser = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde/EventStreamMarshaller.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_EventStreamMarshaller();
    init_utils2();
    EventStreamMarshaller2 = class {
      universalMarshaller;
      constructor({ utf8Encoder, utf8Decoder }) {
        this.universalMarshaller = new EventStreamMarshaller({
          utf8Decoder,
          utf8Encoder
        });
      }
      deserialize(body, deserializer) {
        const bodyIterable = isReadableStream(body) ? readableStreamToIterable(body) : body;
        return this.universalMarshaller.deserialize(bodyIterable, deserializer);
      }
      serialize(input, serializer) {
        const serializedIterable = this.universalMarshaller.serialize(input, serializer);
        return typeof ReadableStream === "function" ? iterableToReadableStream(serializedIterable) : serializedIterable;
      }
    };
    __name(EventStreamMarshaller2, "EventStreamMarshaller");
    isReadableStream = /* @__PURE__ */ __name((body) => typeof ReadableStream === "function" && body instanceof ReadableStream, "isReadableStream");
    eventStreamSerdeProvider2 = /* @__PURE__ */ __name((options) => new EventStreamMarshaller2(options), "eventStreamSerdeProvider");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-config-resolver/EventStreamSerdeConfig.js
var resolveEventStreamSerdeConfig;
var init_EventStreamSerdeConfig = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/eventstream-serde-config-resolver/EventStreamSerdeConfig.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    resolveEventStreamSerdeConfig = /* @__PURE__ */ __name((input) => Object.assign(input, {
      eventStreamMarshaller: input.eventStreamSerdeProvider(input)
    }), "resolveEventStreamSerdeConfig");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js
var EventStreamSerde;
var init_EventStreamSerde = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_schema();
    init_index_browser2();
    EventStreamSerde = class {
      marshaller;
      serializer;
      deserializer;
      serdeContext;
      defaultContentType;
      compositeErrorRegistry;
      constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType, compositeErrorRegistry }) {
        this.marshaller = marshaller;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.serdeContext = serdeContext;
        this.defaultContentType = defaultContentType;
        this.compositeErrorRegistry = compositeErrorRegistry;
      }
      async serializeEventStream({ eventStream, requestSchema, initialRequest, initialMessageType }) {
        const marshaller = this.marshaller;
        const eventStreamMember = requestSchema.getEventStreamMember();
        const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
        const serializer = this.serializer;
        const defaultContentType = this.defaultContentType;
        const initialRequestMarker = Symbol("initialRequestMarker");
        const eventStreamIterable = {
          async *[Symbol.asyncIterator]() {
            if (initialRequest) {
              const headers = {
                ":event-type": { type: "string", value: initialMessageType ?? "initial-request" },
                ":message-type": { type: "string", value: "event" },
                ":content-type": { type: "string", value: defaultContentType }
              };
              serializer.write(requestSchema, initialRequest);
              const body = serializer.flush();
              yield {
                [initialRequestMarker]: true,
                headers,
                body
              };
            }
            for await (const page of eventStream) {
              yield page;
            }
          }
        };
        return marshaller.serialize(eventStreamIterable, (event) => {
          if (event[initialRequestMarker]) {
            return {
              headers: event.headers,
              body: event.body
            };
          }
          let unionMember = "";
          for (const key in event) {
            if (key !== "__type") {
              unionMember = key;
              break;
            }
          }
          const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
          const headers = {
            ":event-type": { type: "string", value: eventType },
            ":message-type": { type: "string", value: "event" },
            ":content-type": { type: "string", value: explicitPayloadContentType ?? defaultContentType },
            ...additionalHeaders
          };
          return {
            headers,
            body
          };
        });
      }
      async deserializeEventStream({ response, responseSchema, initialResponseContainer, initialMessageType }) {
        const marshaller = this.marshaller;
        const eventStreamMember = responseSchema.getEventStreamMember();
        const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
        const memberSchemas = unionSchema.getMemberSchemas();
        const initialResponseMarker = Symbol("initialResponseMarker");
        const asyncIterable = marshaller.deserialize(response.body, async (event) => {
          let unionMember = "";
          for (const key in event) {
            if (key !== "__type") {
              unionMember = key;
              break;
            }
          }
          const body = event[unionMember].body;
          if (unionMember === (initialMessageType ?? "initial-response")) {
            const dataObject = await this.deserializer.read(responseSchema, body);
            delete dataObject[eventStreamMember];
            return {
              [initialResponseMarker]: true,
              ...dataObject
            };
          } else if (unionMember in memberSchemas) {
            const eventStreamSchema = memberSchemas[unionMember];
            if (eventStreamSchema.isStructSchema()) {
              const out = {};
              let hasBindings = false;
              for (const [name, member2] of eventStreamSchema.structIterator()) {
                const { eventHeader, eventPayload } = member2.getMergedTraits();
                hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
                if (eventPayload) {
                  if (member2.isBlobSchema()) {
                    out[name] = body;
                  } else if (member2.isStringSchema()) {
                    out[name] = (this.serdeContext?.utf8Encoder ?? toUtf8)(body);
                  } else if (member2.isStructSchema()) {
                    out[name] = await this.deserializer.read(member2, body);
                  }
                } else if (eventHeader) {
                  const value = event[unionMember].headers[name]?.value;
                  if (value != null) {
                    if (member2.isNumericSchema()) {
                      if (value && typeof value === "object" && "bytes" in value) {
                        out[name] = BigInt(value.toString());
                      } else {
                        out[name] = Number(value);
                      }
                    } else {
                      out[name] = value;
                    }
                  }
                }
              }
              return {
                [unionMember]: await this.readEventMember(eventStreamSchema, body, hasBindings, out)
              };
            }
            return {
              [unionMember]: await this.deserializer.read(eventStreamSchema, body)
            };
          } else {
            return {
              $unknown: event
            };
          }
        });
        const asyncIterator = asyncIterable[Symbol.asyncIterator]();
        const firstEvent = await asyncIterator.next();
        if (firstEvent.done) {
          return asyncIterable;
        }
        if (firstEvent.value?.[initialResponseMarker]) {
          if (!responseSchema) {
            throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
          }
          for (const key in firstEvent.value) {
            initialResponseContainer[key] = firstEvent.value[key];
          }
        }
        return {
          async *[Symbol.asyncIterator]() {
            if (!firstEvent?.value?.[initialResponseMarker]) {
              yield firstEvent.value;
            }
            while (true) {
              const { done, value } = await asyncIterator.next();
              if (done) {
                break;
              }
              yield value;
            }
          }
        };
      }
      async readEventMember(eventStreamSchema, body, hasBindings, out) {
        let ErrCtor;
        const staticStructuralSchema = eventStreamSchema.getSchema();
        if (Array.isArray(staticStructuralSchema) && staticStructuralSchema[0] === -3) {
          const namespace = staticStructuralSchema[1];
          const nsRegistry = TypeRegistry.for(namespace);
          this.compositeErrorRegistry?.copyFrom(nsRegistry);
          ErrCtor = (this.compositeErrorRegistry ?? nsRegistry)?.getErrorCtor(staticStructuralSchema);
        }
        const dataObject = hasBindings ? out : body.byteLength === 0 ? {} : await this.deserializer.read(eventStreamSchema, body);
        if (ErrCtor) {
          const message = dataObject.message ?? dataObject.Message ?? "Unknown";
          const metadata = {};
          const $fault = eventStreamSchema.getMergedTraits().error;
          if ($fault) {
            metadata.$fault = $fault;
          }
          return Object.assign(new ErrCtor({}), metadata, {
            message
          }, dataObject);
        }
        return dataObject;
      }
      writeEventBody(unionMember, unionSchema, event) {
        const serializer = this.serializer;
        let eventType = unionMember;
        let explicitPayloadMember = null;
        let explicitPayloadContentType;
        const isKnownSchema = (() => {
          const struct = unionSchema.getSchema();
          return struct[4].includes(unionMember);
        })();
        const additionalHeaders = {};
        if (!isKnownSchema) {
          const [type, value] = event[unionMember];
          eventType = type;
          serializer.write(15, value);
        } else {
          const eventSchema = unionSchema.getMemberSchema(unionMember);
          if (eventSchema.isStructSchema()) {
            for (const [memberName, memberSchema] of eventSchema.structIterator()) {
              const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
              if (eventPayload) {
                explicitPayloadMember = memberName;
              } else if (eventHeader) {
                const value = event[unionMember][memberName];
                let type = "binary";
                if (memberSchema.isNumericSchema()) {
                  if ((-2) ** 31 <= value && value <= 2 ** 31 - 1) {
                    type = "integer";
                  } else {
                    type = "long";
                  }
                } else if (memberSchema.isTimestampSchema()) {
                  type = "timestamp";
                } else if (memberSchema.isStringSchema()) {
                  type = "string";
                } else if (memberSchema.isBooleanSchema()) {
                  type = "boolean";
                }
                if (value != null) {
                  additionalHeaders[memberName] = {
                    type,
                    value
                  };
                  delete event[unionMember][memberName];
                }
              }
            }
            if (explicitPayloadMember !== null) {
              const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
              if (payloadSchema.isBlobSchema()) {
                explicitPayloadContentType = "application/octet-stream";
              } else if (payloadSchema.isStringSchema()) {
                explicitPayloadContentType = "text/plain";
              }
              serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
            } else {
              serializer.write(eventSchema, event[unionMember]);
            }
          } else if (eventSchema.isUnitSchema()) {
            serializer.write(eventSchema, {});
          } else {
            throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
          }
        }
        const messageSerialization = serializer.flush() ?? new Uint8Array();
        const body = typeof messageSerialization === "string" ? (this.serdeContext?.utf8Decoder ?? fromUtf8)(messageSerialization) : messageSerialization;
        return {
          body,
          eventType,
          explicitPayloadContentType,
          additionalHeaders
        };
      }
    };
    __name(EventStreamSerde, "EventStreamSerde");
  }
});

// node_modules/@smithy/core/dist-es/submodules/event-streams/index.browser.js
var index_browser_exports = {};
__export(index_browser_exports, {
  EventStreamCodec: () => EventStreamCodec,
  EventStreamMarshaller: () => EventStreamMarshaller2,
  EventStreamSerde: () => EventStreamSerde,
  HeaderMarshaller: () => HeaderMarshaller,
  Int64: () => Int64,
  MessageDecoderStream: () => MessageDecoderStream,
  MessageEncoderStream: () => MessageEncoderStream,
  SmithyMessageDecoderStream: () => SmithyMessageDecoderStream,
  SmithyMessageEncoderStream: () => SmithyMessageEncoderStream,
  UniversalEventStreamMarshaller: () => EventStreamMarshaller,
  eventStreamSerdeProvider: () => eventStreamSerdeProvider2,
  getChunkedStream: () => getChunkedStream,
  getMessageUnmarshaller: () => getMessageUnmarshaller,
  getUnmarshalledStream: () => getUnmarshalledStream,
  iterableToReadableStream: () => iterableToReadableStream,
  readableStreamToIterable: () => readableStreamToIterable,
  resolveEventStreamSerdeConfig: () => resolveEventStreamSerdeConfig,
  universalEventStreamSerdeProvider: () => eventStreamSerdeProvider
});
var init_index_browser4 = __esm({
  "node_modules/@smithy/core/dist-es/submodules/event-streams/index.browser.js"() {
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_EventStreamCodec();
    init_HeaderMarshaller();
    init_Int64();
    init_MessageDecoderStream();
    init_MessageEncoderStream();
    init_SmithyMessageDecoderStream();
    init_SmithyMessageEncoderStream();
    init_EventStreamMarshaller_browser();
    init_utils2();
    init_EventStreamMarshaller();
    init_getChunkedStream();
    init_getUnmarshalledStream();
    init_EventStreamSerdeConfig();
    init_EventStreamSerde();
  }
});

// src/index.ts
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-cost-explorer/dist-es/CostExplorerClient.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/client/index.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
__name(setCredentialFeature, "setCredentialFeature");

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/retry/index.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/isStreamingPayload/isStreamingPayload.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isStreamingPayload = /* @__PURE__ */ __name((request) => request?.body instanceof ReadableStream, "isStreamingPayload");

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/retryMiddleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/client/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/client/middleware-stack/MiddlewareStack.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
  const _aliases = [];
  if (name) {
    _aliases.push(name);
  }
  if (aliases) {
    for (const alias of aliases) {
      _aliases.push(alias);
    }
  }
  return _aliases;
}, "getAllAliases");
var getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
  return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
}, "getMiddlewareNameWithAliases");
var constructStack = /* @__PURE__ */ __name(() => {
  let absoluteEntries = [];
  let relativeEntries = [];
  let identifyOnResolve = false;
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = /* @__PURE__ */ __name((entries) => entries.sort((a2, b2) => stepWeights[b2.step] - stepWeights[a2.step] || priorityWeights[b2.priority || "normal"] - priorityWeights[a2.priority || "normal"]), "sort");
  const removeByName = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      const aliases = getAllAliases(entry.name, entry.aliases);
      if (aliases.includes(toRemove)) {
        isRemoved = true;
        for (const alias of aliases) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByName");
  const removeByReference = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        for (const alias of getAllAliases(entry.name, entry.aliases)) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByReference");
  const cloneTo = /* @__PURE__ */ __name((toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    toStack.identifyOnResolve?.(stack.identifyOnResolve());
    return toStack;
  }, "cloneTo");
  const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
    const expandedMiddlewareList = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddlewareList;
  }, "expandRelativeMiddlewareList");
  const getMiddlewareList = /* @__PURE__ */ __name((debug3 = false) => {
    const normalizedAbsoluteEntries = [];
    const normalizedRelativeEntries = [];
    const normalizedEntriesNameMap = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          if (debug3) {
            return;
          }
          throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
      wholeList.push(...expandedMiddlewareList);
      return wholeList;
    }, []);
    return mainChain;
  }, "getMiddlewareList");
  const stack = {
    add: (middleware, options = {}) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        step: "initialize",
        priority: "normal",
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = absoluteEntries[toOverrideIndex];
            if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
            }
            absoluteEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: (middleware, options) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a2) => a2 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = relativeEntries[toOverrideIndex];
            if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
            }
            relativeEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      relativeEntries.push(entry);
    },
    clone: () => cloneTo(constructStack()),
    use: (plugin) => {
      plugin.applyToStack(stack);
    },
    remove: (toRemove) => {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    },
    removeByTag: (toRemove) => {
      let isRemoved = false;
      const filterCb = /* @__PURE__ */ __name((entry) => {
        const { tags, name, aliases: _aliases } = entry;
        if (tags && tags.includes(toRemove)) {
          const aliases = getAllAliases(name, _aliases);
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          isRemoved = true;
          return false;
        }
        return true;
      }, "filterCb");
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    },
    concat: (from) => {
      const cloned = cloneTo(constructStack());
      cloned.use(from);
      cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
      return cloned;
    },
    applyToStack: cloneTo,
    identify: () => {
      return getMiddlewareList(true).map((mw) => {
        const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
        return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
      });
    },
    identifyOnResolve(toggle) {
      if (typeof toggle === "boolean")
        identifyOnResolve = toggle;
      return identifyOnResolve;
    },
    resolve: (handler, context2) => {
      for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
        handler = middleware(handler, context2);
      }
      if (identifyOnResolve) {
        console.log(stack.identify());
      }
      return handler;
    }
  };
  return stack;
}, "constructStack");
var stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights = {
  high: 3,
  normal: 2,
  low: 1
};

// node_modules/@smithy/core/dist-es/submodules/client/index.js
init_transport();
init_transport();

// node_modules/@smithy/core/dist-es/submodules/client/invalid-dependency/invalidProvider.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var invalidProvider = /* @__PURE__ */ __name((message) => () => Promise.reject(message), "invalidProvider");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/client.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Client = class {
  config;
  middlewareStack = constructStack();
  initConfig;
  handlers;
  constructor(config2) {
    this.config = config2;
    const { protocol, protocolSettings } = config2;
    if (protocolSettings) {
      if (typeof protocol === "function") {
        config2.protocol = new protocol(protocolSettings);
      }
    }
  }
  send(command2, optionsOrCb, cb) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
    const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
    let handler;
    if (useHandlerCache) {
      if (!this.handlers) {
        this.handlers = /* @__PURE__ */ new WeakMap();
      }
      const handlers = this.handlers;
      if (handlers.has(command2.constructor)) {
        handler = handlers.get(command2.constructor);
      } else {
        handler = command2.resolveMiddleware(this.middlewareStack, this.config, options);
        handlers.set(command2.constructor, handler);
      }
    } else {
      delete this.handlers;
      handler = command2.resolveMiddleware(this.middlewareStack, this.config, options);
    }
    if (callback) {
      handler(command2).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
      });
    } else {
      return handler(command2).then((result) => result.output);
    }
  }
  destroy() {
    this.config?.requestHandler?.destroy?.();
    delete this.handlers;
  }
};
__name(Client, "Client");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/command.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_dist_es();

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/schemaLogFilter.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();
var SENSITIVE_STRING = "***SensitiveInformation***";
function schemaLogFilter(schema, data) {
  if (data == null) {
    return data;
  }
  const ns = NormalizedSchema.of(schema);
  if (ns.getMergedTraits().sensitive) {
    return SENSITIVE_STRING;
  }
  if (ns.isListSchema()) {
    const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
    if (isSensitive) {
      return SENSITIVE_STRING;
    }
  } else if (ns.isMapSchema()) {
    const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
    if (isSensitive) {
      return SENSITIVE_STRING;
    }
  } else if (ns.isStructSchema() && typeof data === "object") {
    const object = data;
    const newObject = {};
    for (const [member2, memberNs] of ns.structIterator()) {
      if (object[member2] != null) {
        newObject[member2] = schemaLogFilter(memberNs, object[member2]);
      }
    }
    return newObject;
  }
  return data;
}
__name(schemaLogFilter, "schemaLogFilter");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/command.js
var Command = class {
  middlewareStack = constructStack();
  schema;
  static classBuilder() {
    return new ClassBuilder();
  }
  resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
    for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
      this.middlewareStack.use(mw);
    }
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        commandInstance: this,
        ...smithyContext
      },
      ...additionalContext
    };
    const { requestHandler } = configuration;
    let requestOptions = options ?? {};
    if (smithyContext.eventStream) {
      requestOptions = {
        isEventStream: true,
        ...requestOptions
      };
    }
    return stack.resolve((request) => requestHandler.handle(request.request, requestOptions), handlerExecutionContext);
  }
};
__name(Command, "Command");
var ClassBuilder = class {
  _init = () => {
  };
  _ep = {};
  _middlewareFn = () => [];
  _commandName = "";
  _clientName = "";
  _additionalContext = {};
  _smithyContext = {};
  _inputFilterSensitiveLog = void 0;
  _outputFilterSensitiveLog = void 0;
  _serializer = null;
  _deserializer = null;
  _operationSchema;
  init(cb) {
    this._init = cb;
  }
  ep(endpointParameterInstructions) {
    this._ep = endpointParameterInstructions;
    return this;
  }
  m(middlewareSupplier) {
    this._middlewareFn = middlewareSupplier;
    return this;
  }
  s(service, operation2, smithyContext = {}) {
    this._smithyContext = {
      service,
      operation: operation2,
      ...smithyContext
    };
    return this;
  }
  c(additionalContext = {}) {
    this._additionalContext = additionalContext;
    return this;
  }
  n(clientName, commandName) {
    this._clientName = clientName;
    this._commandName = commandName;
    return this;
  }
  f(inputFilter = (_) => _, outputFilter = (_) => _) {
    this._inputFilterSensitiveLog = inputFilter;
    this._outputFilterSensitiveLog = outputFilter;
    return this;
  }
  ser(serializer) {
    this._serializer = serializer;
    return this;
  }
  de(deserializer) {
    this._deserializer = deserializer;
    return this;
  }
  sc(operation2) {
    this._operationSchema = operation2;
    this._smithyContext.operationSchema = operation2;
    return this;
  }
  build() {
    const closure = this;
    let CommandRef;
    return CommandRef = /* @__PURE__ */ __name(class extends Command {
      input;
      static getEndpointParameterInstructions() {
        return closure._ep;
      }
      constructor(...[input]) {
        super();
        this.input = input ?? {};
        closure._init(this);
        this.schema = closure._operationSchema;
      }
      resolveMiddleware(stack, configuration, options) {
        const op = closure._operationSchema;
        const input = op?.[4] ?? op?.input;
        const output = op?.[5] ?? op?.output;
        return this.resolveMiddlewareWithContext(stack, configuration, options, {
          CommandCtor: CommandRef,
          middlewareFn: closure._middlewareFn,
          clientName: closure._clientName,
          commandName: closure._commandName,
          inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, input) : (_) => _),
          outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, output) : (_) => _),
          smithyContext: closure._smithyContext,
          additionalContext: closure._additionalContext
        });
      }
      serialize = closure._serializer;
      deserialize = closure._deserializer;
    }, "CommandRef");
  }
};
__name(ClassBuilder, "ClassBuilder");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/exceptions.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ServiceException = class extends Error {
  $fault;
  $response;
  $retryable;
  $metadata;
  constructor(options) {
    super(options.message);
    Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
  static isInstance(value) {
    if (!value)
      return false;
    const candidate = value;
    return ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
  }
  static [Symbol.hasInstance](instance) {
    if (!instance)
      return false;
    const candidate = instance;
    if (this === ServiceException) {
      return ServiceException.isInstance(instance);
    }
    if (ServiceException.isInstance(instance)) {
      if (candidate.name && this.name) {
        return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
      }
      return this.prototype.isPrototypeOf(instance);
    }
    return false;
  }
};
__name(ServiceException, "ServiceException");
var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
  Object.entries(additions).filter(([, v]) => v !== void 0).forEach(([k2, v]) => {
    if (exception[k2] == void 0 || exception[k2] === "") {
      exception[k2] = v;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
}, "decorateServiceException");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/defaults-mode.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
}, "loadConfigsForDefaultMode");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/extensions/defaultExtensionConfiguration.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/extensions/checksum.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_dist_es();
var knownAlgorithms = Object.values(AlgorithmId);
var getChecksumConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const checksumAlgorithms = [];
  for (const id in AlgorithmId) {
    const algorithmId = AlgorithmId[id];
    if (runtimeConfig[algorithmId] === void 0) {
      continue;
    }
    checksumAlgorithms.push({
      algorithmId: () => algorithmId,
      checksumConstructor: () => runtimeConfig[algorithmId]
    });
  }
  for (const [id, ChecksumCtor] of Object.entries(runtimeConfig.checksumAlgorithms ?? {})) {
    checksumAlgorithms.push({
      algorithmId: () => id,
      checksumConstructor: () => ChecksumCtor
    });
  }
  return {
    addChecksumAlgorithm(algo) {
      runtimeConfig.checksumAlgorithms = runtimeConfig.checksumAlgorithms ?? {};
      const id = algo.algorithmId();
      const ctor = algo.checksumConstructor();
      if (knownAlgorithms.includes(id)) {
        runtimeConfig.checksumAlgorithms[id.toUpperCase()] = ctor;
      } else {
        runtimeConfig.checksumAlgorithms[id] = ctor;
      }
      checksumAlgorithms.push(algo);
    },
    checksumAlgorithms() {
      return checksumAlgorithms;
    }
  };
}, "getChecksumConfiguration");
var resolveChecksumRuntimeConfig = /* @__PURE__ */ __name((clientConfig) => {
  const runtimeConfig = {};
  clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
    const id = checksumAlgorithm.algorithmId();
    if (knownAlgorithms.includes(id)) {
      runtimeConfig[id] = checksumAlgorithm.checksumConstructor();
    }
  });
  return runtimeConfig;
}, "resolveChecksumRuntimeConfig");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/extensions/retry.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setRetryStrategy(retryStrategy) {
      runtimeConfig.retryStrategy = retryStrategy;
    },
    retryStrategy() {
      return runtimeConfig.retryStrategy;
    }
  };
}, "getRetryConfiguration");
var resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
  const runtimeConfig = {};
  runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
  return runtimeConfig;
}, "resolveRetryRuntimeConfig");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
}, "getDefaultExtensionConfiguration");
var resolveDefaultRuntimeConfig2 = /* @__PURE__ */ __name((config2) => {
  return Object.assign(resolveChecksumRuntimeConfig(config2), resolveRetryRuntimeConfig(config2));
}, "resolveDefaultRuntimeConfig");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/NoOpLogger.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var NoOpLogger = class {
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};
__name(NoOpLogger, "NoOpLogger");

// node_modules/@smithy/core/dist-es/submodules/client/smithy-client/client-command-builder.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function makeBuilder(common, service, name, ep) {
  return /* @__PURE__ */ __name(function makeCommand(added, plugins, op, $, smithyContext = {}) {
    const epMerged = Object.assign({}, common, added);
    return Command.classBuilder().ep(epMerged).m(function(CommandCtor, clientStack, config2, options) {
      const list = plugins.call(this, CommandCtor, clientStack, config2, options);
      list.unshift(ep(config2, CommandCtor.getEndpointParameterInstructions()));
      return list;
    }).s(service, op, smithyContext).n(name, op.charAt(0).toUpperCase() + op.slice(1) + "Command").sc($).build();
  }, "makeCommand");
}
__name(makeBuilder, "makeBuilder");

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();
var collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context2) => {
  if (streamBody instanceof Uint8Array) {
    return Uint8ArrayBlobAdapter.mutate(streamBody);
  }
  if (!streamBody) {
    return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
  }
  const fromContext = context2.streamCollector(streamBody);
  return Uint8ArrayBlobAdapter.mutate(await fromContext);
}, "collectBody");

// node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();
init_transport();

// node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SerdeContext = class {
  serdeContext;
  setSerdeContext(serdeContext) {
    this.serdeContext = serdeContext;
  }
};
__name(SerdeContext, "SerdeContext");

// node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
var HttpProtocol = class extends SerdeContext {
  options;
  compositeErrorRegistry;
  constructor(options) {
    super();
    this.options = options;
    this.compositeErrorRegistry = TypeRegistry.for(options.defaultNamespace);
    for (const etr of options.errorTypeRegistries ?? []) {
      this.compositeErrorRegistry.copyFrom(etr);
    }
  }
  getRequestType() {
    return HttpRequest;
  }
  getResponseType() {
    return HttpResponse;
  }
  setSerdeContext(serdeContext) {
    this.serdeContext = serdeContext;
    this.serializer.setSerdeContext(serdeContext);
    this.deserializer.setSerdeContext(serdeContext);
    if (this.getPayloadCodec()) {
      this.getPayloadCodec().setSerdeContext(serdeContext);
    }
  }
  updateServiceEndpoint(request, endpoint) {
    if ("url" in endpoint) {
      request.protocol = endpoint.url.protocol;
      request.hostname = endpoint.url.hostname;
      request.port = endpoint.url.port ? Number(endpoint.url.port) : void 0;
      request.path = endpoint.url.pathname;
      request.fragment = endpoint.url.hash || void 0;
      request.username = endpoint.url.username || void 0;
      request.password = endpoint.url.password || void 0;
      if (!request.query) {
        request.query = {};
      }
      for (const [k2, v] of endpoint.url.searchParams.entries()) {
        request.query[k2] = v;
      }
      if (endpoint.headers) {
        for (const name in endpoint.headers) {
          request.headers[name] = endpoint.headers[name].join(", ");
        }
      }
      return request;
    } else {
      request.protocol = endpoint.protocol;
      request.hostname = endpoint.hostname;
      request.port = endpoint.port ? Number(endpoint.port) : void 0;
      request.path = endpoint.path;
      request.query = {
        ...endpoint.query
      };
      if (endpoint.headers) {
        for (const name in endpoint.headers) {
          request.headers[name] = endpoint.headers[name];
        }
      }
      return request;
    }
  }
  setHostPrefix(request, operationSchema, input) {
    if (this.serdeContext?.disableHostPrefix) {
      return;
    }
    const inputNs = NormalizedSchema.of(operationSchema.input);
    const opTraits = translateTraits(operationSchema.traits ?? {});
    if (opTraits.endpoint) {
      let hostPrefix = opTraits.endpoint?.[0];
      if (typeof hostPrefix === "string") {
        for (const [name, member2] of inputNs.structIterator()) {
          if (!member2.getMergedTraits().hostLabel) {
            continue;
          }
          const replacement = input[name];
          if (typeof replacement !== "string") {
            throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
          }
          hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
        }
        request.hostname = hostPrefix + request.hostname;
        if (!isValidHostname(request.hostname)) {
          throw new Error(`[${request.hostname}] is not a valid hostname.`);
        }
      }
    }
  }
  deserializeMetadata(output) {
    return {
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    };
  }
  async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
    const eventStreamSerde = await this.loadEventStreamCapability();
    return eventStreamSerde.serializeEventStream({
      eventStream,
      requestSchema,
      initialRequest
    });
  }
  async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
    const eventStreamSerde = await this.loadEventStreamCapability();
    return eventStreamSerde.deserializeEventStream({
      response,
      responseSchema,
      initialResponseContainer
    });
  }
  async loadEventStreamCapability() {
    const { EventStreamSerde: EventStreamSerde2, eventStreamSerdeProvider: eventStreamSerdeProvider3 } = await Promise.resolve().then(() => (init_index_browser4(), index_browser_exports));
    const marshaller = this.resolveEventStreamMarshaller(eventStreamSerdeProvider3);
    return new EventStreamSerde2({
      marshaller,
      serializer: this.serializer,
      deserializer: this.deserializer,
      serdeContext: this.serdeContext,
      defaultContentType: this.getDefaultContentType(),
      compositeErrorRegistry: this.compositeErrorRegistry
    });
  }
  resolveEventStreamMarshaller(importedProvider) {
    const context2 = this.serdeContext;
    if (context2.eventStreamMarshaller) {
      return context2.eventStreamMarshaller;
    }
    return importedProvider(this.serdeContext);
  }
  getDefaultContentType() {
    throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
  }
  async deserializeHttpMessage(schema, context2, response, arg4, arg5) {
    return [];
  }
  getEventStreamMarshaller() {
    const context2 = this.serdeContext;
    if (!context2.eventStreamMarshaller) {
      throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
    }
    return context2.eventStreamMarshaller;
  }
};
__name(HttpProtocol, "HttpProtocol");

// node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();
init_transport();
var RpcProtocol = class extends HttpProtocol {
  async serializeRequest(operationSchema, _input, context2) {
    const serializer = this.serializer;
    const query = {};
    const headers = {};
    const endpoint = await context2.endpoint();
    const ns = NormalizedSchema.of(operationSchema?.input);
    const schema = ns.getSchema();
    let payload;
    const input = _input && typeof _input === "object" ? _input : {};
    const request = new HttpRequest({
      protocol: "",
      hostname: "",
      port: void 0,
      path: "/",
      fragment: void 0,
      query,
      headers,
      body: void 0
    });
    if (endpoint) {
      this.updateServiceEndpoint(request, endpoint);
      this.setHostPrefix(request, operationSchema, input);
    }
    if (input) {
      const eventStreamMember = ns.getEventStreamMember();
      if (eventStreamMember) {
        if (input[eventStreamMember]) {
          const initialRequest = {};
          for (const [memberName] of ns.structIterator()) {
            if (memberName !== eventStreamMember && input[memberName] != null) {
              initialRequest[memberName] = input[memberName];
            }
          }
          payload = await this.serializeEventStream({
            eventStream: input[eventStreamMember],
            requestSchema: ns,
            initialRequest
          });
        }
      } else {
        serializer.write(schema, input);
        payload = serializer.flush();
      }
    }
    request.headers = Object.assign(request.headers, headers);
    request.query = query;
    request.body = payload;
    request.method = "POST";
    return request;
  }
  async deserializeResponse(operationSchema, context2, response) {
    const deserializer = this.deserializer;
    const ns = NormalizedSchema.of(operationSchema.output);
    const dataObject = {};
    if (response.statusCode >= 300) {
      const bytes = await collectBody(response.body, context2);
      if (bytes.byteLength > 0) {
        Object.assign(dataObject, await deserializer.read(15, bytes));
      }
      await this.handleError(operationSchema, context2, response, dataObject, this.deserializeMetadata(response));
      throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
    }
    for (const header in response.headers) {
      const value = response.headers[header];
      delete response.headers[header];
      response.headers[header.toLowerCase()] = value;
    }
    const eventStreamMember = ns.getEventStreamMember();
    if (eventStreamMember) {
      dataObject[eventStreamMember] = await this.deserializeEventStream({
        response,
        responseSchema: ns,
        initialResponseContainer: dataObject
      });
    } else {
      const bytes = await collectBody(response.body, context2);
      if (bytes.byteLength > 0) {
        Object.assign(dataObject, await deserializer.read(ns, bytes));
      }
    }
    dataObject.$metadata = this.deserializeMetadata(response);
    return dataObject;
  }
};
__name(RpcProtocol, "RpcProtocol");

// node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function determineTimestampFormat(ns, settings) {
  if (settings.timestampFormat.useTrait) {
    if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) {
      return ns.getSchema();
    }
  }
  const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
  const bindingFormat = settings.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : void 0 : void 0;
  return bindingFormat ?? settings.timestampFormat.default;
}
__name(determineTimestampFormat, "determineTimestampFormat");

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
init_transport();
init_transport();

// node_modules/@smithy/core/dist-es/submodules/protocols/protocol-http/extensions/httpExtensionConfiguration.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  if (runtimeConfig.logger && runtimeConfig.logger.constructor?.name !== "NoOpLogger") {
    runtimeConfig.requestHandler?.updateHttpClientConfig?.(Symbol.for("logger"), runtimeConfig.logger);
  }
  return {
    setHttpHandler(handler) {
      runtimeConfig.requestHandler = handler;
    },
    httpHandler() {
      return runtimeConfig.requestHandler;
    },
    updateHttpClientConfig(key, value) {
      runtimeConfig.requestHandler?.updateHttpClientConfig(key, value);
    },
    httpHandlerConfigs() {
      return runtimeConfig.requestHandler.httpHandlerConfigs();
    }
  };
}, "getHttpHandlerExtensionConfiguration");
var resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
  return {
    requestHandler: httpHandlerExtensionConfiguration.httpHandler()
  };
}, "resolveHttpHandlerRuntimeConfig");

// node_modules/@smithy/core/dist-es/submodules/protocols/middleware-content-length/contentLengthMiddleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_transport();
var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request = args.request;
    if (HttpRequest.isInstance(request)) {
      const { body, headers } = request;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
        try {
          const length = bodyLengthChecker(body);
          if (length != null) {
            request.headers = {
              ...request.headers,
              [CONTENT_LENGTH_HEADER]: String(length)
            };
          }
        } catch (ignored) {
        }
      }
    }
    return next({
      ...args,
      request
    });
  };
}
__name(contentLengthMiddleware, "contentLengthMiddleware");
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true
};
var getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
  }
}), "getContentLengthPlugin");

// node_modules/@smithy/core/dist-es/submodules/protocols/util-uri-escape/escape-uri.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var escapeUri = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode), "escapeUri");
var hexEncode = /* @__PURE__ */ __name((c2) => `%${c2.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");

// node_modules/@smithy/core/dist-es/submodules/protocols/querystring-builder/buildQueryString.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i2 = 0, iLen = value.length; i2 < iLen; i2++) {
        parts.push(`${key}=${escapeUri(value[i2])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
__name(buildQueryString, "buildQueryString");

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
init_transport();

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/retryMiddleware.js
init_index_browser2();

// node_modules/@smithy/core/dist-es/submodules/retry/service-error-classification/service-error-classification.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/retry/service-error-classification/constants.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND", "EAI_AGAIN"];

// node_modules/@smithy/core/dist-es/submodules/retry/service-error-classification/service-error-classification.js
var isRetryableByTrait = /* @__PURE__ */ __name((error3) => error3?.$retryable !== void 0, "isRetryableByTrait");
var isClockSkewCorrectedError = /* @__PURE__ */ __name((error3) => error3.$metadata?.clockSkewCorrected, "isClockSkewCorrectedError");
var isBrowserNetworkError = /* @__PURE__ */ __name((error3) => {
  const errorMessages = /* @__PURE__ */ new Set([
    "Failed to fetch",
    "NetworkError when attempting to fetch resource",
    "The Internet connection appears to be offline",
    "Load failed",
    "Network request failed"
  ]);
  const isValid = error3 && error3 instanceof TypeError;
  if (!isValid) {
    return false;
  }
  return errorMessages.has(error3.message);
}, "isBrowserNetworkError");
var isThrottlingError = /* @__PURE__ */ __name((error3) => error3.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error3.name) || error3.$retryable?.throttling == true, "isThrottlingError");
var isTransientError = /* @__PURE__ */ __name((error3, depth = 0) => isRetryableByTrait(error3) || isClockSkewCorrectedError(error3) || error3.name === "InvalidSignatureException" && error3.message?.includes("Signature expired") || TRANSIENT_ERROR_CODES.includes(error3.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error3?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error3?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error3.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error3) || isNodeJsHttp2TransientError(error3) || error3.cause !== void 0 && depth <= 10 && isTransientError(error3.cause, depth + 1), "isTransientError");
var isServerError = /* @__PURE__ */ __name((error3) => {
  if (error3.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error3.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error3)) {
      return true;
    }
    return false;
  }
  return false;
}, "isServerError");
function isNodeJsHttp2TransientError(error3) {
  return error3.code === "ERR_HTTP2_STREAM_ERROR" && error3.message.includes("NGHTTP2_REFUSED_STREAM");
}
__name(isNodeJsHttp2TransientError, "isNodeJsHttp2TransientError");

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/constants.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var INITIAL_RETRY_TOKENS = 500;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/parseRetryAfterHeader.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();
function parseRetryAfterHeader(response, logger2) {
  if (!HttpResponse.isInstance(response)) {
    return;
  }
  for (const header of Object.keys(response.headers)) {
    const h2 = header.toLowerCase();
    if (h2 === "retry-after") {
      const retryAfter = response.headers[header];
      let retryAfterSeconds = NaN;
      if (retryAfter.endsWith("GMT")) {
        try {
          const date = parseRfc7231DateTime(retryAfter);
          retryAfterSeconds = (date.getTime() - Date.now()) / 1e3;
        } catch (e2) {
          logger2?.trace?.("Failed to parse retry-after header");
          logger2?.trace?.(e2);
        }
      } else if (retryAfter.match(/ GMT, ((\d+)|(\d+\.\d+))$/)) {
        retryAfterSeconds = Number(retryAfter.match(/ GMT, ([\d.]+)$/)?.[1]);
      } else if (retryAfter.match(/^((\d+)|(\d+\.\d+))$/)) {
        retryAfterSeconds = Number(retryAfter);
      } else if (Date.parse(retryAfter) >= Date.now()) {
        retryAfterSeconds = (Date.parse(retryAfter) - Date.now()) / 1e3;
      }
      if (isNaN(retryAfterSeconds)) {
        return;
      }
      return new Date(Date.now() + retryAfterSeconds * 1e3);
    } else if (h2 === "x-amz-retry-after") {
      const v = response.headers[header];
      const backoffMilliseconds = Number(v);
      if (isNaN(backoffMilliseconds)) {
        logger2?.trace?.(`Failed to parse x-amz-retry-after=${v}`);
        return;
      }
      return new Date(Date.now() + backoffMilliseconds);
    }
  }
}
__name(parseRetryAfterHeader, "parseRetryAfterHeader");

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/util.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var asSdkError = /* @__PURE__ */ __name((error3) => {
  if (error3 instanceof Error)
    return error3;
  if (error3 instanceof Object)
    return Object.assign(new Error(), error3);
  if (typeof error3 === "string")
    return new Error(error3);
  return new Error(`AWS SDK error wrapper for ${error3}`);
}, "asSdkError");

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/retryMiddleware.js
function bindRetryMiddleware(isStreamingPayload2) {
  return (options) => (next, context2) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
      retryStrategy = retryStrategy;
      let retryToken = await retryStrategy.acquireInitialRetryToken((context2["partition_id"] ?? "") + (context2.__retryLongPoll ? ":longpoll" : ""));
      let lastError = new Error();
      let attempts = 0;
      let totalRetryDelay = 0;
      const { request } = args;
      const isRequest = HttpRequest.isInstance(request);
      if (isRequest) {
        request.headers[INVOCATION_ID_HEADER] = v4();
      }
      while (true) {
        try {
          if (isRequest) {
            request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
          }
          const { response, output } = await next(args);
          retryStrategy.recordSuccess(retryToken);
          output.$metadata.attempts = attempts + 1;
          output.$metadata.totalRetryDelay = totalRetryDelay;
          return { response, output };
        } catch (e2) {
          const retryErrorInfo = getRetryErrorInfo(e2, options.logger);
          lastError = asSdkError(e2);
          if (isRequest && isStreamingPayload2(request)) {
            (context2.logger instanceof NoOpLogger ? console : context2.logger)?.warn("An error was encountered in a non-retryable streaming request.");
            throw lastError;
          }
          try {
            retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
          } catch (ignoredRefreshError) {
            if (!lastError.$metadata) {
              lastError.$metadata = {};
            }
            lastError.$metadata.attempts = attempts + 1;
            lastError.$metadata.totalRetryDelay = totalRetryDelay;
            throw lastError;
          }
          attempts = retryToken.getRetryCount();
          const delay = retryToken.getRetryDelay();
          totalRetryDelay += (retryToken?.$retryLog?.acquisitionDelay ?? 0) + delay;
          if (delay > 0) {
            await cooldown(delay);
          }
        }
      }
    } else {
      retryStrategy = retryStrategy;
      if (retryStrategy?.mode) {
        context2.userAgent = [...context2.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
      }
      return retryStrategy.retry(next, args);
    }
  };
}
__name(bindRetryMiddleware, "bindRetryMiddleware");
var cooldown = /* @__PURE__ */ __name((ms) => new Promise((resolve) => setTimeout(resolve, ms)), "cooldown");
var isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
var getRetryErrorInfo = /* @__PURE__ */ __name((error3, logger2) => {
  const errorInfo = {
    error: error3,
    errorType: getRetryErrorType(error3)
  };
  const retryAfterHint = parseRetryAfterHeader(error3.$response, logger2);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
}, "getRetryErrorInfo");
var getRetryErrorType = /* @__PURE__ */ __name((error3) => {
  if (isThrottlingError(error3))
    return "THROTTLING";
  if (isTransientError(error3))
    return "TRANSIENT";
  if (isServerError(error3))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
}, "getRetryErrorType");
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
function bindGetRetryPlugin(isStreamingPayload2) {
  const retryMiddleware2 = bindRetryMiddleware(isStreamingPayload2);
  return (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(retryMiddleware2(options), retryMiddlewareOptions);
    }
  });
}
__name(bindGetRetryPlugin, "bindGetRetryPlugin");

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/AdaptiveRetryStrategy.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRateLimiter.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _DefaultRateLimiter = class {
  beta;
  minCapacity;
  minFillRate;
  scaleConstant;
  smooth;
  enabled = false;
  availableTokens = 0;
  lastMaxRate = 0;
  measuredTxRate = 0;
  requestCount = 0;
  fillRate;
  lastThrottleTime;
  lastTimestamp = 0;
  lastTxRateBucket;
  maxCapacity;
  timeWindow = 0;
  constructor(options) {
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;
    this.lastThrottleTime = this.getCurrentTimeInSeconds();
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    const retryErrorInfo = response;
    const isThrottling = retryErrorInfo?.errorType === "THROTTLING" || isThrottlingError(retryErrorInfo?.error ?? response);
    if (isThrottling) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    while (amount > this.availableTokens) {
      const delay = (amount - this.availableTokens) / this.fillRate * 1e3;
      await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
      this.refillTokenBucket();
    }
    this.availableTokens = this.availableTokens - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + fillAmount);
    this.lastTimestamp = timestamp;
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};
var DefaultRateLimiter = _DefaultRateLimiter;
__name(DefaultRateLimiter, "DefaultRateLimiter");
__publicField(DefaultRateLimiter, "setTimeoutFn", (fn, delay) => setTimeout(fn, delay));

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/StandardRetryStrategy.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRetryBackoffStrategy.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/retries-2026-config.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _Retry = class {
  static delay() {
    return _Retry.v2026 ? 50 : 100;
  }
  static throttlingDelay() {
    return _Retry.v2026 ? 1e3 : 500;
  }
  static cost() {
    return _Retry.v2026 ? 14 : 5;
  }
  static throttlingCost() {
    return _Retry.v2026 ? 5 : 10;
  }
  static modifiedCostType() {
    return _Retry.v2026 ? "THROTTLING" : "TRANSIENT";
  }
};
var Retry = _Retry;
__name(Retry, "Retry");
__publicField(Retry, "v2026", typeof process !== "undefined" && process.env?.SMITHY_NEW_RETRIES_2026 === "true");

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRetryBackoffStrategy.js
var DefaultRetryBackoffStrategy = class {
  x = Retry.delay();
  computeNextBackoffDelay(i2) {
    const b2 = Math.random();
    const r2 = 2;
    const t_i = b2 * Math.min(this.x * r2 ** i2, MAXIMUM_RETRY_DELAY);
    return Math.floor(t_i);
  }
  setDelayBase(delay) {
    this.x = delay;
  }
};
__name(DefaultRetryBackoffStrategy, "DefaultRetryBackoffStrategy");

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/DefaultRetryToken.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DefaultRetryToken = class {
  delay;
  count;
  cost;
  longPoll;
  $retryLog = {
    acquisitionDelay: 0
  };
  constructor(delay, count3, cost, longPoll) {
    this.delay = delay;
    this.count = count3;
    this.cost = cost;
    this.longPoll = longPoll;
  }
  getRetryCount() {
    return this.count;
  }
  getRetryDelay() {
    return Math.min(MAXIMUM_RETRY_DELAY, this.delay);
  }
  getRetryCost() {
    return this.cost;
  }
  isLongPoll() {
    return this.longPoll;
  }
};
__name(DefaultRetryToken, "DefaultRetryToken");

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/config.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/StandardRetryStrategy.js
var refusal = {
  incompatible: 1,
  attempts: 2,
  capacity: 3
};
var StandardRetryStrategy = class {
  mode = RETRY_MODES.STANDARD;
  retryBackoffStrategy;
  capacity = INITIAL_RETRY_TOKENS;
  maxAttemptsProvider;
  baseDelay;
  constructor(arg1) {
    if (typeof arg1 === "number") {
      this.maxAttemptsProvider = async () => arg1;
    } else if (typeof arg1 === "function") {
      this.maxAttemptsProvider = arg1;
    } else if (arg1 && typeof arg1 === "object") {
      this.maxAttemptsProvider = async () => arg1.maxAttempts;
      this.baseDelay = arg1.baseDelay;
      this.retryBackoffStrategy = arg1.backoff;
    }
    this.maxAttemptsProvider ??= async () => DEFAULT_MAX_ATTEMPTS;
    this.baseDelay ??= Retry.delay();
    this.retryBackoffStrategy ??= new DefaultRetryBackoffStrategy();
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return new DefaultRetryToken(Retry.delay(), 0, void 0, Retry.v2026 && retryTokenScope.includes(":longpoll"));
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    const retryCode = this.retryCode(token, errorInfo, maxAttempts);
    const shouldRetry = retryCode === 0;
    const isLongPoll = token.isLongPoll?.();
    if (shouldRetry || isLongPoll) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? Retry.throttlingDelay() : this.baseDelay);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      let retryDelay = delayFromErrorType;
      if (errorInfo.retryAfterHint instanceof Date) {
        retryDelay = Math.max(delayFromErrorType, Math.min(errorInfo.retryAfterHint.getTime() - Date.now(), delayFromErrorType + 5e3));
      }
      if (!shouldRetry) {
        const longPollBackoff = Retry.v2026 && retryCode === refusal.capacity && isLongPoll ? retryDelay : 0;
        if (longPollBackoff > 0) {
          await new Promise((r2) => setTimeout(r2, longPollBackoff));
        }
      } else {
        const capacityCost = this.getCapacityCost(errorType);
        this.capacity -= capacityCost;
        const nextToken = new DefaultRetryToken(0, token.getRetryCount() + 1, capacityCost, token.isLongPoll?.() ?? false);
        await new Promise((r2) => setTimeout(r2, retryDelay));
        nextToken.$retryLog.acquisitionDelay = retryDelay;
        return nextToken;
      }
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.min(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  getCapacity() {
    return this.capacity;
  }
  async maxAttempts() {
    return this.maxAttemptsProvider();
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (ignored) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  retryCode(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount() + 1;
    const retryableStatus = this.isRetryableError(errorInfo.errorType) ? 0 : refusal.incompatible;
    const attemptStatus = attempts < maxAttempts ? 0 : refusal.attempts;
    const capacityStatus = this.capacity >= this.getCapacityCost(errorInfo.errorType) ? 0 : refusal.capacity;
    return retryableStatus || attemptStatus || capacityStatus;
  }
  getCapacityCost(errorType) {
    return errorType === Retry.modifiedCostType() ? Retry.throttlingCost() : Retry.cost();
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};
__name(StandardRetryStrategy, "StandardRetryStrategy");

// node_modules/@smithy/core/dist-es/submodules/retry/util-retry/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  mode = RETRY_MODES.ADAPTIVE;
  rateLimiter;
  standardRetryStrategy;
  constructor(maxAttemptsProvider, options) {
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = options ? new StandardRetryStrategy({
      maxAttempts: typeof maxAttemptsProvider === "number" ? maxAttemptsProvider : 3,
      ...options
    }) : new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    const token = await this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    await this.rateLimiter.getSendToken();
    return token;
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    const token = await this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    await this.rateLimiter.getSendToken();
    return token;
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
  async maxAttemptsProvider() {
    return this.standardRetryStrategy.maxAttempts();
  }
};
__name(AdaptiveRetryStrategy, "AdaptiveRetryStrategy");

// node_modules/@smithy/core/dist-es/submodules/retry/middleware-retry/configurations.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveRetryConfig = /* @__PURE__ */ __name((input, defaults) => {
  const { retryStrategy, retryMode } = input;
  const { defaultMaxAttempts = DEFAULT_MAX_ATTEMPTS, defaultBaseDelay = Retry.delay() } = defaults ?? {};
  const maxAttemptsProvider = normalizeProvider(input.maxAttempts ?? defaultMaxAttempts);
  let controller = retryStrategy ? Promise.resolve(retryStrategy) : void 0;
  const getDefault = /* @__PURE__ */ __name(async () => {
    const maxAttempts = await maxAttemptsProvider();
    const adaptive = await normalizeProvider(retryMode)() === RETRY_MODES.ADAPTIVE;
    if (adaptive) {
      return new AdaptiveRetryStrategy(maxAttemptsProvider, {
        maxAttempts,
        baseDelay: defaultBaseDelay
      });
    }
    return new StandardRetryStrategy({
      maxAttempts,
      baseDelay: defaultBaseDelay
    });
  }, "getDefault");
  return Object.assign(input, {
    maxAttempts: maxAttemptsProvider,
    retryStrategy: () => controller ??= getDefault()
  });
}, "resolveRetryConfig");

// node_modules/@smithy/core/dist-es/submodules/retry/index.browser.js
var no3 = Symbol.for("node-only");
var retryMiddleware = bindRetryMiddleware(isStreamingPayload);
var getRetryPlugin = bindGetRetryPlugin(isStreamingPayload);

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
Retry.v2026 ||= typeof process === "object" && process.env?.AWS_NEW_RETRIES_2026 === "true";
function setFeature2(context2, feature, value) {
  if (!context2.__aws_sdk_context) {
    context2.__aws_sdk_context = {
      features: {}
    };
  } else if (!context2.__aws_sdk_context.features) {
    context2.__aws_sdk_context.features = {};
  }
  context2.__aws_sdk_context.features[feature] = value;
}
__name(setFeature2, "setFeature");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-host-header/hostHeaderMiddleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function resolveHostHeaderConfig(input) {
  return input;
}
__name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
var hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const { request } = args;
  const { handlerProtocol = "" } = options.requestHandler.metadata || {};
  if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
    delete request.headers["host"];
    request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
  } else if (!request.headers["host"]) {
    let host = request.hostname;
    if (request.port != null)
      host += `:${request.port}`;
    request.headers["host"] = host;
  }
  return next(args);
}, "hostHeaderMiddleware");
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }
}), "getHostHeaderPlugin");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-logger/loggerMiddleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var loggerMiddleware = /* @__PURE__ */ __name(() => (next, context2) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context2;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context2.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context2.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger2?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata
    });
    return response;
  } catch (error3) {
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context2;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context2.inputFilterSensitiveLog;
    logger2?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error: error3,
      metadata: error3.$metadata
    });
    throw error3;
  }
}, "loggerMiddleware");
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  }
}), "getLoggerPlugin");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-recursion-detection/getRecursionDetectionPlugin.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: (clientStack) => {
  }
}), "getRecursionDetectionPlugin");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/configurations.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_transport();

// node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/resolveAuthOptions.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveAuthOptions = /* @__PURE__ */ __name((candidateAuthOptions, authSchemePreference) => {
  if (!authSchemePreference || authSchemePreference.length === 0) {
    return candidateAuthOptions;
  }
  const preferredAuthOptions = [];
  for (const preferredSchemeName of authSchemePreference) {
    for (const candidateAuthOption of candidateAuthOptions) {
      const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
      if (candidateAuthSchemeName === preferredSchemeName) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
  }
  for (const candidateAuthOption of candidateAuthOptions) {
    if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
      preferredAuthOptions.push(candidateAuthOption);
    }
  }
  return preferredAuthOptions;
}, "resolveAuthOptions");

// node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
__name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
var httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config2, mwOptions) => (next, context2) => async (args) => {
  const options = config2.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config2, context2, args.input));
  const authSchemePreference = config2.authSchemePreference ? await config2.authSchemePreference() : [];
  const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
  const authSchemes = convertHttpAuthSchemesToMap(config2.httpAuthSchemes);
  const smithyContext = getSmithyContext(context2);
  const failureReasons = [];
  for (const option of resolvedOptions) {
    const scheme = authSchemes.get(option.schemeId);
    if (!scheme) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
      continue;
    }
    const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config2));
    if (!identityProvider) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
      continue;
    }
    const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config2, context2) || {};
    option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
    option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
    smithyContext.selectedHttpAuthScheme = {
      httpAuthOption: option,
      identity: await identityProvider(option.identityProperties),
      signer: scheme.signer
    };
    break;
  }
  if (!smithyContext.selectedHttpAuthScheme) {
    throw new Error(failureReasons.join("\n"));
  }
  return next(args);
}, "httpAuthSchemeMiddleware");

// node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};
var getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config2, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpAuthSchemeMiddleware(config2, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
  }
}), "getHttpAuthSchemeEndpointRuleSetPlugin");

// node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-signing/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-signing/httpSigningMiddleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_transport();
var defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error3) => {
  throw error3;
}, "defaultErrorHandler");
var defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
}, "defaultSuccessHandler");
var httpSigningMiddleware = /* @__PURE__ */ __name((config2) => (next, context2) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context2);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  const output = await next({
    ...args,
    request: await signer.sign(args.request, identity, signingProperties)
  }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
  (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
  return output;
}, "httpSigningMiddleware");

// node_modules/@smithy/core/dist-es/legacy-root-exports/middleware-http-signing/getHttpSigningMiddleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var httpSigningMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: true,
  relation: "after",
  toMiddleware: "retryMiddleware"
};
var getHttpSigningPlugin = /* @__PURE__ */ __name((config2) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpSigningMiddleware(config2), httpSigningMiddlewareOptions);
  }
}), "getHttpSigningPlugin");

// node_modules/@smithy/core/dist-es/normalizeProvider.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var normalizeProvider2 = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// node_modules/@smithy/core/dist-es/legacy-root-exports/util-identity-and-auth/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/legacy-root-exports/util-identity-and-auth/DefaultIdentityProviderConfig.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DefaultIdentityProviderConfig = class {
  authSchemes = /* @__PURE__ */ new Map();
  constructor(config2) {
    for (const key in config2) {
      const value = config2[key];
      if (value !== void 0) {
        this.authSchemes.set(key, value);
      }
    }
  }
  getIdentityProvider(schemeId) {
    return this.authSchemes.get(schemeId);
  }
};
__name(DefaultIdentityProviderConfig, "DefaultIdentityProviderConfig");

// node_modules/@smithy/core/dist-es/legacy-root-exports/util-identity-and-auth/memoizeIdentityProvider.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => /* @__PURE__ */ __name(function isIdentityExpired2(identity) {
  return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
}, "isIdentityExpired"), "createIsIdentityExpiredFunction");
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
var memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  if (provider === void 0) {
    return void 0;
  }
  const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
    if (!pending) {
      pending = normalizedProvider(options);
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider(options);
    }
    if (isConstant) {
      return resolved;
    }
    if (!requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider(options);
      return resolved;
    }
    return resolved;
  };
}, "memoizeIdentityProvider");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/configurations.js
var DEFAULT_UA_APP_ID = void 0;
function isValidUserAgentAppId(appId) {
  if (appId === void 0) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}
__name(isValidUserAgentAppId, "isValidUserAgentAppId");
function resolveUserAgentConfig(input) {
  const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  const { customUserAgent } = input;
  return Object.assign(input, {
    customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
    userAgentAppId: async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger2?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    }
  });
}
__name(resolveUserAgentConfig, "resolveUserAgentConfig");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/user-agent-middleware.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/partition.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/partitions.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var partitionsInfo = {
  "partitions": [
    {
      "id": "aws",
      "outputs": {
        "dnsSuffix": "amazonaws.com",
        "dualStackDnsSuffix": "api.aws",
        "implicitGlobalRegion": "us-east-1",
        "name": "aws",
        "supportsDualStack": true,
        "supportsFIPS": true
      },
      "regionRegex": "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
      "regions": {
        "af-south-1": {
          "description": "Africa (Cape Town)"
        },
        "ap-east-1": {
          "description": "Asia Pacific (Hong Kong)"
        },
        "ap-east-2": {
          "description": "Asia Pacific (Taipei)"
        },
        "ap-northeast-1": {
          "description": "Asia Pacific (Tokyo)"
        },
        "ap-northeast-2": {
          "description": "Asia Pacific (Seoul)"
        },
        "ap-northeast-3": {
          "description": "Asia Pacific (Osaka)"
        },
        "ap-south-1": {
          "description": "Asia Pacific (Mumbai)"
        },
        "ap-south-2": {
          "description": "Asia Pacific (Hyderabad)"
        },
        "ap-southeast-1": {
          "description": "Asia Pacific (Singapore)"
        },
        "ap-southeast-2": {
          "description": "Asia Pacific (Sydney)"
        },
        "ap-southeast-3": {
          "description": "Asia Pacific (Jakarta)"
        },
        "ap-southeast-4": {
          "description": "Asia Pacific (Melbourne)"
        },
        "ap-southeast-5": {
          "description": "Asia Pacific (Malaysia)"
        },
        "ap-southeast-6": {
          "description": "Asia Pacific (New Zealand)"
        },
        "ap-southeast-7": {
          "description": "Asia Pacific (Thailand)"
        },
        "aws-global": {
          "description": "aws global region"
        },
        "ca-central-1": {
          "description": "Canada (Central)"
        },
        "ca-west-1": {
          "description": "Canada West (Calgary)"
        },
        "eu-central-1": {
          "description": "Europe (Frankfurt)"
        },
        "eu-central-2": {
          "description": "Europe (Zurich)"
        },
        "eu-north-1": {
          "description": "Europe (Stockholm)"
        },
        "eu-south-1": {
          "description": "Europe (Milan)"
        },
        "eu-south-2": {
          "description": "Europe (Spain)"
        },
        "eu-west-1": {
          "description": "Europe (Ireland)"
        },
        "eu-west-2": {
          "description": "Europe (London)"
        },
        "eu-west-3": {
          "description": "Europe (Paris)"
        },
        "il-central-1": {
          "description": "Israel (Tel Aviv)"
        },
        "me-central-1": {
          "description": "Middle East (UAE)"
        },
        "me-south-1": {
          "description": "Middle East (Bahrain)"
        },
        "mx-central-1": {
          "description": "Mexico (Central)"
        },
        "sa-east-1": {
          "description": "South America (Sao Paulo)"
        },
        "us-east-1": {
          "description": "US East (N. Virginia)"
        },
        "us-east-2": {
          "description": "US East (Ohio)"
        },
        "us-west-1": {
          "description": "US West (N. California)"
        },
        "us-west-2": {
          "description": "US West (Oregon)"
        }
      }
    },
    {
      "id": "aws-cn",
      "outputs": {
        "dnsSuffix": "amazonaws.com.cn",
        "dualStackDnsSuffix": "api.amazonwebservices.com.cn",
        "implicitGlobalRegion": "cn-northwest-1",
        "name": "aws-cn",
        "supportsDualStack": true,
        "supportsFIPS": true
      },
      "regionRegex": "^cn\\-\\w+\\-\\d+$",
      "regions": {
        "aws-cn-global": {
          "description": "aws-cn global region"
        },
        "cn-north-1": {
          "description": "China (Beijing)"
        },
        "cn-northwest-1": {
          "description": "China (Ningxia)"
        }
      }
    },
    {
      "id": "aws-eusc",
      "outputs": {
        "dnsSuffix": "amazonaws.eu",
        "dualStackDnsSuffix": "api.amazonwebservices.eu",
        "implicitGlobalRegion": "eusc-de-east-1",
        "name": "aws-eusc",
        "supportsDualStack": true,
        "supportsFIPS": true
      },
      "regionRegex": "^eusc\\-(de)\\-\\w+\\-\\d+$",
      "regions": {
        "eusc-de-east-1": {
          "description": "AWS European Sovereign Cloud (Germany)"
        }
      }
    },
    {
      "id": "aws-iso",
      "outputs": {
        "dnsSuffix": "c2s.ic.gov",
        "dualStackDnsSuffix": "api.aws.ic.gov",
        "implicitGlobalRegion": "us-iso-east-1",
        "name": "aws-iso",
        "supportsDualStack": true,
        "supportsFIPS": true
      },
      "regionRegex": "^us\\-iso\\-\\w+\\-\\d+$",
      "regions": {
        "aws-iso-global": {
          "description": "aws-iso global region"
        },
        "us-iso-east-1": {
          "description": "US ISO East"
        },
        "us-iso-west-1": {
          "description": "US ISO WEST"
        }
      }
    },
    {
      "id": "aws-iso-b",
      "outputs": {
        "dnsSuffix": "sc2s.sgov.gov",
        "dualStackDnsSuffix": "api.aws.scloud",
        "implicitGlobalRegion": "us-isob-east-1",
        "name": "aws-iso-b",
        "supportsDualStack": true,
        "supportsFIPS": true
      },
      "regionRegex": "^us\\-isob\\-\\w+\\-\\d+$",
      "regions": {
        "aws-iso-b-global": {
          "description": "aws-iso-b global region"
        },
        "us-isob-east-1": {
          "description": "US ISOB East (Ohio)"
        },
        "us-isob-west-1": {
          "description": "US ISOB West"
        }
      }
    },
    {
      "id": "aws-iso-e",
      "outputs": {
        "dnsSuffix": "cloud.adc-e.uk",
        "dualStackDnsSuffix": "api.cloud-aws.adc-e.uk",
        "implicitGlobalRegion": "eu-isoe-west-1",
        "name": "aws-iso-e",
        "supportsDualStack": true,
        "supportsFIPS": true
      },
      "regionRegex": "^eu\\-isoe\\-\\w+\\-\\d+$",
      "regions": {
        "aws-iso-e-global": {
          "description": "aws-iso-e global region"
        },
        "eu-isoe-west-1": {
          "description": "EU ISOE West"
        }
      }
    },
    {
      "id": "aws-iso-f",
      "outputs": {
        "dnsSuffix": "csp.hci.ic.gov",
        "dualStackDnsSuffix": "api.aws.hci.ic.gov",
        "implicitGlobalRegion": "us-isof-south-1",
        "name": "aws-iso-f",
        "supportsDualStack": true,
        "supportsFIPS": true
      },
      "regionRegex": "^us\\-isof\\-\\w+\\-\\d+$",
      "regions": {
        "aws-iso-f-global": {
          "description": "aws-iso-f global region"
        },
        "us-isof-east-1": {
          "description": "US ISOF EAST"
        },
        "us-isof-south-1": {
          "description": "US ISOF SOUTH"
        }
      }
    },
    {
      "id": "aws-us-gov",
      "outputs": {
        "dnsSuffix": "amazonaws.com",
        "dualStackDnsSuffix": "api.aws",
        "implicitGlobalRegion": "us-gov-west-1",
        "name": "aws-us-gov",
        "supportsDualStack": true,
        "supportsFIPS": true
      },
      "regionRegex": "^us\\-gov\\-\\w+\\-\\d+$",
      "regions": {
        "aws-us-gov-global": {
          "description": "aws-us-gov global region"
        },
        "us-gov-east-1": {
          "description": "AWS GovCloud (US-East)"
        },
        "us-gov-west-1": {
          "description": "AWS GovCloud (US-West)"
        }
      }
    }
  ],
  "version": "1.1"
};

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/partition.js
var selectedPartitionsInfo = partitionsInfo;
var selectedUserAgentPrefix = "";
var partition = /* @__PURE__ */ __name((value) => {
  const { partitions } = selectedPartitionsInfo;
  for (const partition2 of partitions) {
    const { regions, outputs } = partition2;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value) {
        return {
          ...outputs,
          ...regionData
        };
      }
    }
  }
  for (const partition2 of partitions) {
    const { regionRegex, outputs } = partition2;
    if (new RegExp(regionRegex).test(value)) {
      return {
        ...outputs
      };
    }
  }
  const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
  if (!DEFAULT_PARTITION) {
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  }
  return {
    ...DEFAULT_PARTITION.outputs
  };
}, "partition");
var getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/check-features.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context2, config2, args) {
  const request = args.request;
  if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature2(context2, "PROTOCOL_RPC_V2_CBOR", "M");
  }
  if (typeof config2.retryStrategy === "function") {
    const retryStrategy = await config2.retryStrategy();
    if (typeof retryStrategy.mode === "string") {
      switch (retryStrategy.mode) {
        case RETRY_MODES.ADAPTIVE:
          setFeature2(context2, "RETRY_MODE_ADAPTIVE", "F");
          break;
        case RETRY_MODES.STANDARD:
          setFeature2(context2, "RETRY_MODE_STANDARD", "E");
          break;
      }
    }
  }
  if (typeof config2.accountIdEndpointMode === "function") {
    const endpointV2 = context2.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature2(context2, "ACCOUNT_ID_ENDPOINT", "O");
    }
    switch (await config2.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature2(context2, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature2(context2, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature2(context2, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const identity = context2.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (identity?.$source) {
    const credentials = identity;
    if (credentials.accountId) {
      setFeature2(context2, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature2(context2, key, value);
    }
  }
}
__name(checkFeatures, "checkFeatures");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/constants.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w#]/g;
var UA_ESCAPE_CHAR = "-";

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/encode-features.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BYTE_LIMIT = 1024;
function encodeFeatures(features2) {
  let buffer = "";
  for (const key in features2) {
    const val = features2[key];
    if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
      if (buffer.length) {
        buffer += "," + val;
      } else {
        buffer += val;
      }
      continue;
    }
    break;
  }
  return buffer;
}
__name(encodeFeatures, "encodeFeatures");

// node_modules/@aws-sdk/core/dist-es/submodules/client/middleware-user-agent/user-agent-middleware.js
var userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context2) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) {
    return next(args);
  }
  const { headers } = request;
  const userAgent = context2?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  await checkFeatures(context2, options, args);
  const awsContext = context2;
  defaultUserAgent2.push(`m/${encodeFeatures(Object.assign({}, context2.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const appId = await options.userAgentAppId();
  if (appId) {
    defaultUserAgent2.push(escapeUserAgent([`app`, `${appId}`]));
  }
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request
  });
}, "userAgentMiddleware");
var escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
  const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
  const version2 = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version2].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return item;
      case 1:
        return `${acc}/${item}`;
      default:
        return `${acc}#${item}`;
    }
  }, "");
}, "escapeUserAgent");
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = /* @__PURE__ */ __name((config2) => ({
  applyToStack: (clientStack) => {
    clientStack.add(userAgentMiddleware(config2), getUserAgentMiddlewareOptions);
  }
}), "getUserAgentPlugin");

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-user-agent-browser/defaultUserAgent.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createDefaultUserAgentProvider = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => async (config2) => {
  const navigator = typeof window !== "undefined" ? window.navigator : void 0;
  const uaString = navigator?.userAgent ?? "";
  const osName = navigator?.userAgentData?.platform ?? fallback.os(uaString) ?? "other";
  const osVersion = void 0;
  const brands = navigator?.userAgentData?.brands ?? [];
  const brand = brands[brands.length - 1];
  const browserName = brand?.brand ?? fallback.browser(uaString) ?? "unknown";
  const browserVersion = brand?.version ?? "unknown";
  const sections = [
    ["aws-sdk-js", clientVersion],
    ["ua", "2.1"],
    [`os/${osName}`, osVersion],
    ["lang/js"],
    ["md/browser", `${browserName}_${browserVersion}`]
  ];
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  const appId = await config2?.userAgentAppId?.();
  if (appId) {
    sections.push([`app/${appId}`]);
  }
  return sections;
}, "createDefaultUserAgentProvider");
var fallback = {
  os(ua) {
    if (/iPhone|iPad|iPod/.test(ua))
      return "iOS";
    if (/Macintosh|Mac OS X/.test(ua))
      return "macOS";
    if (/Windows NT/.test(ua))
      return "Windows";
    if (/Android/.test(ua))
      return "Android";
    if (/Linux/.test(ua))
      return "Linux";
    return void 0;
  },
  browser(ua) {
    if (/EdgiOS|EdgA|Edg\//.test(ua))
      return "Microsoft Edge";
    if (/Firefox\//.test(ua))
      return "Firefox";
    if (/Chrome\//.test(ua))
      return "Chrome";
    if (/Safari\//.test(ua))
      return "Safari";
    return void 0;
  }
};

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/aws.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser();

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/isVirtualHostableS3Bucket.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser();

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/isIpAddress.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser();

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value)) {
    return false;
  }
  if (value.length < 3 || value.length > 63) {
    return false;
  }
  if (value !== value.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value)) {
    return false;
  }
  return true;
}, "isVirtualHostableS3Bucket");

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/lib/aws/parseArn.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ARN_DELIMITER = ":";
var RESOURCE_DELIMITER = "/";
var parseArn = /* @__PURE__ */ __name((value) => {
  const segments = value.split(ARN_DELIMITER);
  if (segments.length < 6)
    return null;
  const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
  if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
    return null;
  const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
  return {
    partition: partition2,
    service,
    region,
    accountId,
    resourceId
  };
}, "parseArn");

// node_modules/@aws-sdk/core/dist-es/submodules/client/util-endpoints/aws.js
var awsEndpointFunctions = {
  isVirtualHostableS3Bucket,
  parseArn,
  partition
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@smithy/core/dist-es/submodules/config/index.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/config/property-provider/memoize.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
}, "memoize");

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/resolveRegionConfig.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/checkRegion.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_transport();
var validRegions = /* @__PURE__ */ new Set();
var checkRegion = /* @__PURE__ */ __name((region, check = isValidHostLabel) => {
  if (!validRegions.has(region) && !check(region)) {
    if (region === "*") {
      console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
    } else {
      throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
    }
  } else {
    validRegions.add(region);
  }
}, "checkRegion");

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/getRealRegion.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/isFipsRegion.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/getRealRegion.js
var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");

// node_modules/@smithy/core/dist-es/submodules/config/config-resolver/regionConfig/resolveRegionConfig.js
var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return Object.assign(input, {
    region: async () => {
      const providedRegion = typeof region === "function" ? await region() : region;
      const realRegion = getRealRegion(providedRegion);
      checkRegion(realRegion);
      return realRegion;
    },
    useFipsEndpoint: async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }
  });
}, "resolveRegionConfig");

// node_modules/@smithy/core/dist-es/submodules/config/defaults-mode/resolveDefaultsModeConfig.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/config/defaults-mode/constants.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

// node_modules/@smithy/core/dist-es/submodules/config/defaults-mode/resolveDefaultsModeConfig.browser.js
var resolveDefaultsModeConfig = /* @__PURE__ */ __name(({ defaultsMode } = {}) => memoize(async () => {
  const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
  switch (mode?.toLowerCase()) {
    case "auto":
      return Promise.resolve(useMobileConfiguration() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy":
      return Promise.resolve(mode?.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
  }
}), "resolveDefaultsModeConfig");
var useMobileConfiguration = /* @__PURE__ */ __name(() => {
  const navigator = window?.navigator;
  if (navigator?.connection) {
    const { effectiveType, rtt, downlink } = navigator.connection;
    const slow = typeof effectiveType === "string" && effectiveType !== "4g" || Number(rtt) > 100 || Number(downlink) < 10;
    if (slow) {
      return true;
    }
  }
  return navigator?.userAgentData?.mobile || typeof navigator?.maxTouchPoints === "number" && navigator?.maxTouchPoints > 1;
}, "useMobileConfiguration");

// node_modules/@smithy/core/dist-es/submodules/config/index.browser.js
var no4 = Symbol.for("node-only");
var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
var DEFAULT_USE_FIPS_ENDPOINT = false;

// node_modules/@aws-sdk/core/dist-es/submodules/client/region-config-resolver/extensions.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setRegion(region) {
      runtimeConfig.region = region;
    },
    region() {
      return runtimeConfig.region;
    }
  };
}, "getAwsRegionExtensionConfiguration");
var resolveAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((awsRegionExtensionConfiguration) => {
  return {
    region: awsRegionExtensionConfiguration.region()
  };
}, "resolveAwsRegionExtensionConfiguration");

// node_modules/@aws-sdk/core/dist-es/submodules/client/index.browser.js
var no5 = Symbol.for("node-only");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/CostExplorerClient.js
init_index_browser();
init_schema();

// node_modules/@aws-sdk/client-cost-explorer/dist-es/auth/httpAuthSchemeProvider.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getDateHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");
var getAgeHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.age ?? response.headers?.Age : void 0, "getAgeHeader");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset, timeRequestSent, ageHeader) => {
  if (ageHeader !== void 0) {
    return currentSystemClockOffset;
  }
  const serverTime = Date.parse(clockTime);
  const timeResponseReceived = Date.now();
  if (timeRequestSent !== void 0 && timeResponseReceived - timeRequestSent > 9e5) {
    return currentSystemClockOffset;
  }
  const candidateSkew = timeRequestSent !== void 0 ? serverTime - (timeRequestSent + timeResponseReceived) / 2 : serverTime - timeResponseReceived;
  return candidateSkew;
}, "getUpdatedSystemClockOffset");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
  if (!property) {
    throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
  }
  return property;
}, "throwSigningPropertyError");
var validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
  const context2 = throwSigningPropertyError("context", signingProperties.context);
  const config2 = throwSigningPropertyError("config", signingProperties.config);
  const authScheme = context2.endpointV2?.properties?.authSchemes?.[0];
  const signerFunction = throwSigningPropertyError("signer", config2.signer);
  const signer = await signerFunction(authScheme);
  const signingRegion = signingProperties?.signingRegion;
  const signingRegionSet = signingProperties?.signingRegionSet;
  const signingName = signingProperties?.signingName;
  return {
    config: config2,
    signer,
    signingRegion,
    signingRegionSet,
    signingName
  };
}, "validateSigningProperties");
var AwsSdkSigV4Signer = class {
  async sign(httpRequest, identity, signingProperties) {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const validatedProps = await validateSigningProperties(signingProperties);
    const { config: config2, signer } = validatedProps;
    let { signingRegion, signingName } = validatedProps;
    const handlerExecutionContext = signingProperties.context;
    if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
      const [first, second] = handlerExecutionContext.authSchemes;
      if (first?.name === "sigv4a" && second?.name === "sigv4") {
        signingRegion = second?.signingRegion ?? signingRegion;
        signingName = second?.signingName ?? signingName;
      }
    }
    const noSkewCorrection = await config2.disableClockSkewCorrection?.() === true;
    signingProperties._disableClockSkewCorrection = noSkewCorrection;
    if (!noSkewCorrection) {
      signingProperties._preRequestSystemClockOffset = config2.systemClockOffset;
      signingProperties._requestSentAt = Date.now();
    }
    const signedRequest = await signer.sign(httpRequest, {
      signingDate: noSkewCorrection ? /* @__PURE__ */ new Date() : getSkewCorrectedDate(config2.systemClockOffset),
      signingRegion,
      signingService: signingName
    });
    return signedRequest;
  }
  errorHandler(signingProperties) {
    return (error3) => {
      const errorException = error3;
      if (!signingProperties._disableClockSkewCorrection) {
        const serverTime = errorException.ServerTime ?? getDateHeader(errorException.$response);
        if (serverTime) {
          const config2 = throwSigningPropertyError("config", signingProperties.config);
          const preRequestOffset = signingProperties._preRequestSystemClockOffset;
          const timeRequestSent = signingProperties._requestSentAt;
          const ageHeader = getAgeHeader(errorException.$response);
          const newOffset = getUpdatedSystemClockOffset(serverTime, config2.systemClockOffset, timeRequestSent, ageHeader);
          config2.systemClockOffset = newOffset;
          const skewExceedsThreshold = Math.abs(newOffset) >= 24e4;
          const isLocalCorrection = newOffset !== preRequestOffset;
          const isConcurrentCorrection = preRequestOffset !== void 0 && preRequestOffset !== newOffset;
          if (skewExceedsThreshold && (isLocalCorrection || isConcurrentCorrection) && errorException.$metadata) {
            errorException.$metadata.clockSkewCorrected = true;
          }
        }
      }
      throw error3;
    };
  }
  successHandler(httpResponse, signingProperties) {
    if (signingProperties._disableClockSkewCorrection) {
      return;
    }
    const dateHeader = getDateHeader(httpResponse);
    if (dateHeader) {
      const config2 = throwSigningPropertyError("config", signingProperties.config);
      const timeRequestSent = signingProperties._requestSentAt;
      const ageHeader = getAgeHeader(httpResponse);
      config2.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config2.systemClockOffset, timeRequestSent, ageHeader);
    }
  }
};
__name(AwsSdkSigV4Signer, "AwsSdkSigV4Signer");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();
var HeaderFormatter = class {
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int642.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN2.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/-/g, "")), 1);
        return uuidBytes;
    }
  }
};
__name(HeaderFormatter, "HeaderFormatter");
var HEADER_VALUE_TYPE2;
(function(HEADER_VALUE_TYPE3) {
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["short"] = 3] = "short";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["long"] = 5] = "long";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["string"] = 7] = "string";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE3[HEADER_VALUE_TYPE3["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE2 || (HEADER_VALUE_TYPE2 = {}));
var UUID_PATTERN2 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Int642 = class {
  bytes;
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i2 = 7, remaining = Math.abs(Math.round(number)); i2 > -1 && remaining > 0; i2--, remaining /= 256) {
      bytes[i2] = remaining;
    }
    if (number < 0) {
      negate2(bytes);
    }
    return new Int642(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate2(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
__name(Int642, "Int64");
function negate2(bytes) {
  for (let i2 = 0; i2 < 8; i2++) {
    bytes[i2] ^= 255;
  }
  for (let i2 = 7; i2 > -1; i2--) {
    bytes[i2]++;
    if (bytes[i2] !== 0)
      break;
  }
}
__name(negate2, "negate");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/constants.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
var getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query)) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }
    const encodedKey = escapeUri(key);
    keys.push(encodedKey);
    const value = query[key];
    if (typeof value === "string") {
      serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
    } else if (Array.isArray(value)) {
      serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
    }
  }
  return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
}, "getCanonicalQuery");

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var iso8601 = /* @__PURE__ */ __name((time3) => toDate(time3).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
var toDate = /* @__PURE__ */ __name((time3) => {
  if (typeof time3 === "number") {
    return new Date(time3 * 1e3);
  }
  if (typeof time3 === "string") {
    if (Number(time3)) {
      return new Date(Number(time3) * 1e3);
    }
    return new Date(time3);
  }
  return time3;
}, "toDate");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
var SignatureV4Base = class {
  service;
  regionProvider;
  credentialProvider;
  sha256;
  uriEscapePath;
  applyChecksum;
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }
  createCanonicalRequest(request, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
    const hash = new this.sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = escapeUri(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
  formatDate(now) {
    const longDate = iso8601(now).replace(/[-:]/g, "");
    return {
      longDate,
      shortDate: longDate.slice(0, 8)
    };
  }
  getCanonicalHeaderList(headers) {
    return Object.keys(headers).sort().join(";");
  }
};
__name(SignatureV4Base, "SignatureV4Base");

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();
var signingKeyCache = {};
var cacheQueue = [];
var createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
var getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }
  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
    key = await hmac(sha256Constructor, key, signable);
  }
  return signingKeyCache[cacheKey] = key;
}, "getSigningKey");
var hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
}, "hmac");

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == void 0) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
}, "getCanonicalHeaders");

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();
var getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER) {
      return headers[headerName];
    }
  }
  if (body == void 0) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    const hashCtor = new hashConstructor();
    hashCtor.update(toUint8Array(body));
    return toHex(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD;
}, "getPayloadHash");

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
}, "hasHeader");

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var moveHeadersToQuery = /* @__PURE__ */ __name((request, options = {}) => {
  const { headers, query = {} } = HttpRequest.clone(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request,
    headers,
    query
  };
}, "moveHeadersToQuery");

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var prepareRequest = /* @__PURE__ */ __name((request) => {
  request = HttpRequest.clone(request);
  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }
  return request;
}, "prepareRequest");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4 = class extends SignatureV4Base {
  headerFormatter = new HeaderFormatter();
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    super({
      applyChecksum,
      credentials,
      region,
      service,
      sha256,
      uriEscapePath
    });
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = this.formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    }
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
    return request;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService, eventStreamCredentials }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, {
      signingDate,
      signingRegion: region,
      signingService,
      eventStreamCredentials
    });
  }
  async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials }) {
    const promise = this.signEvent({
      headers: this.headerFormatter.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature,
      eventStreamCredentials
    });
    return promise.then((signature) => {
      return { message: signableMessage.message, signature };
    });
  }
  async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService, eventStreamCredentials } = {}) {
    const credentials = eventStreamCredentials ?? await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = this.formatDate(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request = prepareRequest(requestToSign);
    const { longDate, shortDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
    request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
    return request;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }
};
__name(SignatureV4, "SignatureV4");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var bindResolveAwsSdkSigV4Config = /* @__PURE__ */ __name((defaultDisableClockSkewCorrection) => (config2) => {
  let inputCredentials = config2.credentials;
  let isUserSupplied = !!config2.credentials;
  let resolvedCredentials = void 0;
  Object.defineProperty(config2, "credentials", {
    set(credentials) {
      if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
        isUserSupplied = true;
      }
      inputCredentials = credentials;
      const memoizedProvider = normalizeCredentialProvider(config2, {
        credentials: inputCredentials,
        credentialDefaultProvider: config2.credentialDefaultProvider
      });
      const boundProvider = bindCallerConfig(config2, memoizedProvider);
      if (isUserSupplied && !boundProvider.attributed) {
        const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;
        resolvedCredentials = /* @__PURE__ */ __name(async (options) => {
          const creds = await boundProvider(options);
          const attributedCreds = creds;
          if (isCredentialObject && (!attributedCreds.$source || Object.keys(attributedCreds.$source).length === 0)) {
            return setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
          }
          return attributedCreds;
        }, "resolvedCredentials");
        resolvedCredentials.memoized = boundProvider.memoized;
        resolvedCredentials.configBound = boundProvider.configBound;
        resolvedCredentials.attributed = true;
      } else {
        resolvedCredentials = boundProvider;
      }
    },
    get() {
      return resolvedCredentials;
    },
    enumerable: true,
    configurable: true
  });
  config2.credentials = inputCredentials;
  const { signingEscapePath = true, systemClockOffset = config2.systemClockOffset || 0, sha256 } = config2;
  let signer;
  if (config2.signer) {
    signer = normalizeProvider2(config2.signer);
  } else if (config2.regionInfoProvider) {
    signer = /* @__PURE__ */ __name(() => normalizeProvider2(config2.region)().then(async (region) => [
      await config2.regionInfoProvider(region, {
        useFipsEndpoint: await config2.useFipsEndpoint(),
        useDualstackEndpoint: await config2.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      config2.signingRegion = config2.signingRegion || signingRegion || region;
      config2.signingName = config2.signingName || signingService || config2.serviceId;
      const params = {
        ...config2,
        credentials: config2.credentials,
        region: config2.signingRegion,
        service: config2.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config2.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }), "signer");
  } else {
    signer = /* @__PURE__ */ __name(async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: config2.signingName || config2.defaultSigningName,
        signingRegion: await normalizeProvider2(config2.region)(),
        properties: {}
      }, authScheme);
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      config2.signingRegion = config2.signingRegion || signingRegion;
      config2.signingName = config2.signingName || signingService || config2.serviceId;
      const params = {
        ...config2,
        credentials: config2.credentials,
        region: config2.signingRegion,
        service: config2.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config2.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }, "signer");
  }
  const resolvedConfig = Object.assign(config2, {
    systemClockOffset,
    signingEscapePath,
    signer,
    disableClockSkewCorrection: normalizeProvider2(config2.disableClockSkewCorrection ?? defaultDisableClockSkewCorrection)
  });
  return resolvedConfig;
}, "bindResolveAwsSdkSigV4Config");
function normalizeCredentialProvider(config2, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config2, {
        parentClientConfig: config2
      })));
    } else {
      credentialsProvider = /* @__PURE__ */ __name(async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      }, "credentialsProvider");
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
__name(normalizeCredentialProvider, "normalizeCredentialProvider");
function bindCallerConfig(config2, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = /* @__PURE__ */ __name(async (options) => credentialsProvider({ ...options, callerClientConfig: config2 }), "fn");
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
__name(bindCallerConfig, "bindCallerConfig");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/clock-skew-defaults.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION = false;

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.browser.js
var no6 = Symbol.for("node-only");
var resolveAwsSdkSigV4Config = bindResolveAwsSdkSigV4Config(DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION);

// node_modules/@aws-sdk/client-cost-explorer/dist-es/auth/httpAuthSchemeProvider.js
var defaultCostExplorerHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config2, context2, input) => {
  return {
    operation: getSmithyContext(context2).operation,
    region: await normalizeProvider(config2.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, "defaultCostExplorerHttpAuthSchemeParametersProvider");
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "ce",
      region: authParameters.region
    },
    propertiesExtractor: (config2, context2) => ({
      signingProperties: {
        config: config2,
        context: context2
      }
    })
  };
}
__name(createAwsAuthSigv4HttpAuthOption, "createAwsAuthSigv4HttpAuthOption");
var defaultCostExplorerHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
}, "defaultCostExplorerHttpAuthSchemeProvider");
var resolveHttpAuthSchemeConfig = /* @__PURE__ */ __name((config2) => {
  const config_0 = resolveAwsSdkSigV4Config(config2);
  return Object.assign(config_0, {
    authSchemePreference: normalizeProvider(config2.authSchemePreference ?? [])
  });
}, "resolveHttpAuthSchemeConfig");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/endpoint/EndpointParameters.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "ce"
  });
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-cost-explorer/dist-es/runtimeConfig.browser.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-cost-explorer/package.json
var package_default = {
  name: "@aws-sdk/client-cost-explorer",
  version: "3.1111.0",
  description: "AWS SDK for JavaScript Cost Explorer Client for Node.js, Browser and React Native",
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cost-explorer",
  license: "Apache-2.0",
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/sdk-for-javascript/"
  },
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-cost-explorer"
  },
  files: [
    "dist-*/**"
  ],
  sideEffects: false,
  main: "./dist-cjs/index.js",
  module: "./dist-es/index.js",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  types: "./dist-types/index.d.ts",
  typesVersions: {
    "<4.5": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  scripts: {
    build: "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
    "build:cjs": "node ../../scripts/compilation/inline",
    "build:es": "premove dist-es && tsc -p tsconfig.es.json",
    "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
    "build:types": "premove dist-types && tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "premove dist-cjs dist-es dist-types",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service",
    "test:index": "tsc -p tsconfig.test.json && node ./test/index-objects.spec.mjs"
  },
  dependencies: {
    "@aws-sdk/core": "^3.977.8",
    "@aws-sdk/credential-provider-node": "^3.972.80",
    "@aws-sdk/types": "^3.974.4",
    "@smithy/core": "^3.31.1",
    "@smithy/fetch-http-handler": "^5.6.13",
    "@smithy/node-http-handler": "^4.9.13",
    "@smithy/types": "^4.16.1",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@tsconfig/node20": "20.1.8",
    "@types/node": "^20.14.8",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    premove: "4.0.0",
    typescript: "~7.0.2"
  },
  engines: {
    node: ">=20.0.0"
  }
};

// node_modules/@aws-sdk/client-cost-explorer/dist-es/runtimeConfig.browser.js
init_index_browser2();

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createRequest(url, requestOptions) {
  return new Request(url, requestOptions);
}
__name(createRequest, "createRequest");

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function requestTimeout(timeoutInMs = 0) {
  return new Promise((resolve, reject) => {
    if (timeoutInMs) {
      setTimeout(() => {
        const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}
__name(requestTimeout, "requestTimeout");

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var keepAliveSupport = {
  supported: void 0
};
var FetchHttpHandler = class {
  config;
  configProvider;
  static create(instanceOrOptions) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new FetchHttpHandler(instanceOrOptions);
  }
  constructor(options) {
    if (typeof options === "function") {
      this.configProvider = options().then((opts) => opts || {});
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
    if (keepAliveSupport.supported === void 0) {
      keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
    }
  }
  destroy() {
  }
  async handle(request, { abortSignal, requestTimeout: requestTimeout2 } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    const requestTimeoutInMs = requestTimeout2 ?? this.config.requestTimeout;
    const keepAlive = this.config.keepAlive === true;
    const credentials = this.config.credentials;
    if (abortSignal?.aborted) {
      const abortError = buildAbortError(abortSignal);
      return Promise.reject(abortError);
    }
    let path = request.path;
    const queryString = buildQueryString(request.query || {});
    if (queryString) {
      path += `?${queryString}`;
    }
    if (request.fragment) {
      path += `#${request.fragment}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
      const username = request.username ?? "";
      const password = request.password ?? "";
      auth = `${username}:${password}@`;
    }
    const { port, method } = request;
    const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
    const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
    const requestOptions = {
      body,
      headers: new Headers(request.headers),
      method,
      credentials
    };
    if (this.config?.cache) {
      requestOptions.cache = this.config.cache;
    }
    if (body) {
      requestOptions.duplex = "half";
    }
    if (typeof AbortController !== "undefined") {
      requestOptions.signal = abortSignal;
    }
    if (keepAliveSupport.supported) {
      requestOptions.keepalive = keepAlive;
    }
    if (typeof this.config.requestInit === "function") {
      Object.assign(requestOptions, this.config.requestInit(request));
    }
    let removeSignalEventListener = /* @__PURE__ */ __name(() => {
    }, "removeSignalEventListener");
    const fetchRequest = createRequest(url, requestOptions);
    const raceOfPromises = [
      fetch(fetchRequest).then((response) => {
        const fetchHeaders = response.headers;
        const transformedHeaders = {};
        for (const pair of fetchHeaders.entries()) {
          transformedHeaders[pair[0]] = pair[1];
        }
        const hasReadableStream = response.body != void 0;
        if (!hasReadableStream) {
          return response.blob().then((body2) => ({
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: body2
            })
          }));
        }
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            reason: response.statusText,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(new Promise((resolve, reject) => {
        const onAbort = /* @__PURE__ */ __name(() => {
          const abortError = buildAbortError(abortSignal);
          reject(abortError);
        }, "onAbort");
        if (typeof abortSignal.addEventListener === "function") {
          const signal = abortSignal;
          signal.addEventListener("abort", onAbort, { once: true });
          removeSignalEventListener = /* @__PURE__ */ __name(() => signal.removeEventListener("abort", onAbort), "removeSignalEventListener");
        } else {
          abortSignal.onabort = onAbort;
        }
      }));
    }
    return Promise.race(raceOfPromises).finally(removeSignalEventListener);
  }
  updateHttpClientConfig(key, value) {
    this.config = void 0;
    this.configProvider = this.configProvider.then((config2) => {
      config2[key] = value;
      return config2;
    });
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
};
__name(FetchHttpHandler, "FetchHttpHandler");
function buildAbortError(abortSignal) {
  const reason = abortSignal && typeof abortSignal === "object" && "reason" in abortSignal ? abortSignal.reason : void 0;
  if (reason) {
    if (reason instanceof Error) {
      const abortError3 = new Error("Request aborted");
      abortError3.name = "AbortError";
      abortError3.cause = reason;
      return abortError3;
    }
    const abortError2 = new Error(String(reason));
    abortError2.name = "AbortError";
    return abortError2;
  }
  const abortError = new Error("Request aborted");
  abortError.name = "AbortError";
  return abortError;
}
__name(buildAbortError, "buildAbortError");

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
init_index_browser2();

// node_modules/@aws-sdk/client-cost-explorer/dist-es/runtimeConfig.shared.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();
var ProtocolLib = class {
  queryCompat;
  errorRegistry;
  constructor(queryCompat = false) {
    this.queryCompat = queryCompat;
  }
  resolveRestContentType(defaultContentType, inputSchema) {
    const members = inputSchema.getMemberSchemas();
    const httpPayloadMember = Object.values(members).find((m2) => {
      return !!m2.getMergedTraits().httpPayload;
    });
    if (httpPayloadMember) {
      const mediaType = httpPayloadMember.getMergedTraits().mediaType;
      if (mediaType) {
        return mediaType;
      } else if (httpPayloadMember.isStringSchema()) {
        return "text/plain";
      } else if (httpPayloadMember.isBlobSchema()) {
        return "application/octet-stream";
      } else {
        return defaultContentType;
      }
    } else if (!inputSchema.isUnitSchema()) {
      const hasBody = Object.values(members).find((m2) => {
        const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m2.getMergedTraits();
        const noPrefixHeaders = httpPrefixHeaders === void 0;
        return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
      });
      if (hasBody) {
        return defaultContentType;
      }
    }
  }
  async getErrorSchemaOrThrowBaseException(errorIdentifier, defaultNamespace, response, dataObject, metadata, getErrorSchema) {
    let errorName = errorIdentifier;
    if (errorIdentifier.includes("#")) {
      [, errorName] = errorIdentifier.split("#");
    }
    const errorMetadata = {
      $metadata: metadata,
      $fault: response.statusCode < 500 ? "client" : "server"
    };
    if (!this.errorRegistry) {
      throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
    }
    try {
      const errorSchema = getErrorSchema?.(this.errorRegistry, errorName) ?? this.errorRegistry.getSchema(errorIdentifier);
      return { errorSchema, errorMetadata };
    } catch (e2) {
      dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
      const synthetic = this.errorRegistry;
      const baseExceptionSchema = synthetic.getBaseException();
      if (baseExceptionSchema) {
        const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
        throw this.decorateServiceException(Object.assign(new ErrorCtor({ name: errorName }), errorMetadata), dataObject);
      }
      const d2 = dataObject;
      const message = d2?.message ?? d2?.Message ?? d2?.Error?.Message ?? d2?.Error?.message;
      throw this.decorateServiceException(Object.assign(new Error(message), {
        name: errorName
      }, errorMetadata), dataObject);
    }
  }
  compose(composite, errorIdentifier, defaultNamespace) {
    let namespace = defaultNamespace;
    if (errorIdentifier.includes("#")) {
      [namespace] = errorIdentifier.split("#");
    }
    const staticRegistry = TypeRegistry.for(namespace);
    const defaultSyntheticRegistry = TypeRegistry.for("smithy.ts.sdk.synthetic." + defaultNamespace);
    composite.copyFrom(staticRegistry);
    composite.copyFrom(defaultSyntheticRegistry);
    this.errorRegistry = composite;
  }
  decorateServiceException(exception, additions = {}) {
    if (this.queryCompat) {
      const msg = exception.Message ?? additions.Message;
      const error3 = decorateServiceException(exception, additions);
      if (msg) {
        error3.message = msg;
      }
      const errorObj = error3.Error ?? {};
      errorObj.Type = error3.Error?.Type;
      errorObj.Code = error3.Error?.Code;
      errorObj.Message = error3.Error?.message ?? error3.Error?.Message ?? msg;
      error3.Error = errorObj;
      const reqId = error3.$metadata.requestId;
      if (reqId) {
        error3.RequestId = reqId;
      }
      return error3;
    }
    return decorateServiceException(exception, additions);
  }
  setQueryCompatError(output, response) {
    const queryErrorHeader = response.headers?.["x-amzn-query-error"];
    if (output !== void 0 && queryErrorHeader != null) {
      const [Code, Type] = queryErrorHeader.split(";");
      const keys = Object.keys(output);
      const Error2 = {
        Code,
        Type
      };
      output.Code = Code;
      output.Type = Type;
      for (let i2 = 0; i2 < keys.length; i2++) {
        const k2 = keys[i2];
        Error2[k2 === "message" ? "Message" : k2] = output[k2];
      }
      delete Error2.__type;
      output.Error = Error2;
    }
  }
  queryCompatOutput(queryCompatErrorData, errorData) {
    if (queryCompatErrorData.Error) {
      errorData.Error = queryCompatErrorData.Error;
    }
    if (queryCompatErrorData.Type) {
      errorData.Type = queryCompatErrorData.Type;
    }
    if (queryCompatErrorData.Code) {
      errorData.Code = queryCompatErrorData.Code;
    }
  }
  findQueryCompatibleError(registry, errorName) {
    try {
      return registry.getSchema(errorName);
    } catch (e2) {
      return registry.find((schema) => NormalizedSchema.of(schema).getMergedTraits().awsQueryError?.[0] === errorName);
    }
  }
};
__name(ProtocolLib, "ProtocolLib");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/codec-v2/JsonCodec2.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SerdeContextConfig = class {
  serdeContext;
  setSerdeContext(serdeContext) {
    this.serdeContext = serdeContext;
  }
};
__name(SerdeContextConfig, "SerdeContextConfig");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/codec-v2/JsonShapeDeserializer2.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();
init_index_browser2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var UnionSerde = class {
  from;
  to;
  keys;
  constructor(from, to) {
    this.from = from;
    this.to = to;
    const keys = Object.keys(this.from);
    const set = new Set(keys);
    set.delete("__type");
    this.keys = set;
  }
  mark(key) {
    this.keys.delete(key);
  }
  hasUnknown() {
    return this.keys.size === 1 && Object.keys(this.to).length === 0;
  }
  writeUnknown() {
    if (this.hasUnknown()) {
      const k2 = this.keys.values().next().value;
      const v = this.from[k2];
      this.to.$unknown = [k2, v];
    }
  }
};
__name(UnionSerde, "UnionSerde");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/detectBufferParsing.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var canParseBuffer;
function detectBufferParsing() {
  if (canParseBuffer === void 0) {
    try {
      if (typeof Buffer !== "function") {
        canParseBuffer = false;
      } else {
        const result = JSON.parse(Buffer.from([123, 125]));
        canParseBuffer = result !== null && typeof result === "object";
      }
    } catch {
      canParseBuffer = false;
    }
  }
  return canParseBuffer;
}
__name(detectBufferParsing, "detectBufferParsing");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();
function jsonReviver(key, value, context2) {
  if (context2?.source) {
    const numericString = context2.source;
    if (typeof value === "number") {
      const inSafeRange = value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER;
      if (inSafeRange) {
        if (isRepresentable(numericString, value)) {
          return value;
        }
        return new NumericValue(numericString, "bigDecimal");
      } else {
        if (isFractionalBigNumeric(numericString)) {
          return new NumericValue(numericString, "bigDecimal");
        }
        if (/[eE]/.test(numericString)) {
          return expandExponentToBigInt(numericString);
        }
        return BigInt(numericString);
      }
    }
  }
  return value;
}
__name(jsonReviver, "jsonReviver");
function isFractionalBigNumeric(s) {
  const dotIndex = s.indexOf(".");
  if (dotIndex === -1) {
    return false;
  }
  const eIndex = s.search(/[eE]/);
  if (eIndex === -1) {
    return true;
  }
  const fracDigits = eIndex - dotIndex - 1;
  const exp = parseInt(s.slice(eIndex + 1), 10);
  return exp < fracDigits;
}
__name(isFractionalBigNumeric, "isFractionalBigNumeric");
function isRepresentable(numericString, value) {
  if (numericString === String(value)) {
    return true;
  }
  if (Object.is(value, -0)) {
    return true;
  }
  if (/[eE]/.test(numericString)) {
    return expandToDecimal(numericString) === expandToDecimal(String(value));
  }
  const normalized = numericString.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  const canonical = String(value);
  if (normalized === canonical) {
    return true;
  }
  if (/[eE]/.test(canonical)) {
    return normalized === expandToDecimal(canonical);
  }
  return false;
}
__name(isRepresentable, "isRepresentable");
function expandToDecimal(s) {
  const negative = s.startsWith("-");
  const abs = negative ? s.slice(1) : s;
  const eIndex = abs.search(/[eE]/);
  let result;
  if (eIndex === -1) {
    result = abs;
  } else {
    const exp = parseInt(abs.slice(eIndex + 1), 10);
    const mantissa = abs.slice(0, eIndex);
    const dotIndex = mantissa.indexOf(".");
    let digits;
    let intLen;
    if (dotIndex === -1) {
      digits = mantissa;
      intLen = mantissa.length;
    } else {
      digits = mantissa.slice(0, dotIndex) + mantissa.slice(dotIndex + 1);
      intLen = dotIndex;
    }
    digits = digits.replace(/0+$/, "") || "0";
    const newDotPos = intLen + exp;
    if (digits === "0") {
      result = "0";
    } else if (newDotPos <= 0) {
      result = "0." + "0".repeat(-newDotPos) + digits;
    } else if (newDotPos >= digits.length) {
      result = digits + "0".repeat(newDotPos - digits.length);
    } else {
      result = digits.slice(0, newDotPos) + "." + digits.slice(newDotPos);
    }
  }
  if (result.includes(".")) {
    result = result.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  }
  return (negative ? "-" : "") + result;
}
__name(expandToDecimal, "expandToDecimal");
function expandExponentToBigInt(s) {
  const eIndex = s.search(/[eE]/);
  const exp = parseInt(s.slice(eIndex + 1), 10);
  const negative = s.startsWith("-");
  const mantissa = s.slice(negative ? 1 : 0, eIndex);
  const dotIndex = mantissa.indexOf(".");
  let digits;
  let shift;
  if (dotIndex === -1) {
    digits = mantissa;
    shift = exp;
  } else {
    digits = mantissa.slice(0, dotIndex) + mantissa.slice(dotIndex + 1);
    const fracDigits = mantissa.length - dotIndex - 1;
    shift = exp - fracDigits;
  }
  digits = digits.replace(/0+$/, "") || "0";
  const result = BigInt(digits) * 10n ** BigInt(shift + (mantissa.replace(".", "").length - digits.length));
  return negative ? -result : result;
}
__name(expandExponentToBigInt, "expandExponentToBigInt");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/needsReviver.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();
var REVIVER_SYMBOL = Symbol.for("@aws-sdk/reviver");
function needsReviver(schema) {
  const ns = NormalizedSchema.of(schema);
  const raw = ns.getSchema();
  if (Array.isArray(raw) && ns.isStructSchema()) {
    if (REVIVER_SYMBOL in raw) {
      return raw[REVIVER_SYMBOL];
    }
    const result = _check(ns, /* @__PURE__ */ new Set());
    raw[REVIVER_SYMBOL] = result;
    return result;
  }
  return _check(ns, /* @__PURE__ */ new Set());
}
__name(needsReviver, "needsReviver");
function _check(ns, seen) {
  const raw = ns.getSchema();
  if (seen.has(raw)) {
    return false;
  }
  seen.add(raw);
  if (ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) {
    return true;
  }
  if (ns.isStructSchema()) {
    for (const [, memberSchema] of ns.structIterator()) {
      if (_check(memberSchema, seen)) {
        return true;
      }
    }
  } else if (ns.isListSchema() || ns.isMapSchema()) {
    if (_check(ns.getValueSchema(), seen)) {
      return true;
    }
  } else if (ns.isDocumentSchema()) {
    return true;
  }
  return false;
}
__name(_check, "_check");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();
var collectBodyString = /* @__PURE__ */ __name((streamBody, context2) => collectBody(streamBody, context2).then((body) => (context2?.utf8Encoder ?? toUtf8)(body)), "collectBodyString");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
async function parseJsonBody(streamBody, context2, schema) {
  let parsingInput;
  if (detectBufferParsing() && typeof streamBody?.[Symbol.asyncIterator] === "function") {
    const buffer = await collectBody(streamBody, context2);
    if (typeof Buffer === "function") {
      if (Buffer.isBuffer(buffer)) {
        parsingInput = buffer;
      } else {
        parsingInput = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
      }
    }
  }
  if (!parsingInput) {
    parsingInput = await collectBodyString(streamBody, context2);
  }
  if (parsingInput.length === 0) {
    return {};
  }
  const reviver = schema && needsReviver(schema) ? jsonReviver : void 0;
  try {
    return JSON.parse(parsingInput, reviver);
  } catch (e2) {
    if (e2?.name === "SyntaxError") {
      Object.defineProperty(e2, "$responseBodyText", {
        value: typeof parsingInput === "string" ? parsingInput : parsingInput.toString("utf8")
      });
    }
    throw e2;
  }
}
__name(parseJsonBody, "parseJsonBody");
var findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k2) => k2.toLowerCase() === key.toLowerCase()), "findKey");
var sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
  let cleanValue = rawValue;
  if (typeof cleanValue === "number") {
    cleanValue = cleanValue.toString();
  }
  if (cleanValue.indexOf(",") >= 0) {
    cleanValue = cleanValue.split(",")[0];
  }
  if (cleanValue.indexOf(":") >= 0) {
    cleanValue = cleanValue.split(":")[0];
  }
  if (cleanValue.indexOf("#") >= 0) {
    cleanValue = cleanValue.split("#")[1];
  }
  return cleanValue;
}, "sanitizeErrorCode");
var loadJsonRpcErrorCode = /* @__PURE__ */ __name((output, data, queryCompat = false) => {
  return loadErrorCode(output, data, queryCompat ? ["code", "header", "type"] : ["type", "code", "header"]);
}, "loadJsonRpcErrorCode");
var loadErrorCode = /* @__PURE__ */ __name(({ headers }, data, order) => {
  while (order.length > 0) {
    const location = order.shift();
    switch (location) {
      case "header":
        const headerKey = findKey(headers ?? {}, "x-amzn-errortype");
        if (headerKey !== void 0) {
          return sanitizeErrorCode(headers[headerKey]);
        }
        break;
      case "code":
        const codeKey = findKey(data ?? {}, "code");
        if (codeKey && data[codeKey] !== void 0) {
          return sanitizeErrorCode(data[codeKey]);
        }
        break;
      case "type":
        if (data?.__type !== void 0) {
          return sanitizeErrorCode(data.__type);
        }
        break;
    }
  }
}, "loadErrorCode");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/writeKey.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function writeKey(obj) {
  Object.defineProperty(obj, "__proto__", { value: void 0, writable: true, enumerable: true, configurable: true });
}
__name(writeKey, "writeKey");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/codec-v2/JsonShapeDeserializer2.js
var JsonShapeDeserializer2 = class extends SerdeContextConfig {
  settings;
  constructor(settings) {
    super();
    this.settings = settings;
  }
  async read(schema, data) {
    const reviver = needsReviver(schema) ? jsonReviver : void 0;
    let parsed;
    if (typeof data === "string") {
      if (data.length === 0) {
        return {};
      }
      parsed = JSON.parse(data, reviver);
    } else if (data instanceof Uint8Array && detectBufferParsing()) {
      if (data.byteLength === 0) {
        return {};
      }
      const buf = Buffer.isBuffer(data) ? data : Buffer.from(data.buffer, data.byteOffset, data.byteLength);
      parsed = JSON.parse(buf, reviver);
    } else {
      parsed = await parseJsonBody(data, this.serdeContext, schema);
    }
    return this._read(schema, parsed);
  }
  readObject(schema, data) {
    return this._read(schema, data);
  }
  _read(schema, value) {
    const isObject = value !== null && typeof value === "object";
    const ns = NormalizedSchema.of(schema);
    if (isObject) {
      if (ns.isStructSchema()) {
        return this._readStruct(ns, value);
      }
      if (Array.isArray(value) && ns.isListSchema()) {
        const listMember = ns.getValueSchema();
        if (this.needsTransform(listMember)) {
          for (let i2 = 0; i2 < value.length; ++i2) {
            value[i2] = this._read(listMember, value[i2]);
          }
        }
        return value;
      }
      if (ns.isMapSchema()) {
        const mapMember = ns.getValueSchema();
        const map = value;
        if (this.needsTransform(mapMember)) {
          for (const k2 in map) {
            if (k2 === "__proto__") {
              writeKey(map);
            }
            map[k2] = this._read(mapMember, map[k2]);
          }
        }
        return map;
      }
    }
    if (ns.isBlobSchema() && typeof value === "string") {
      return fromBase64(value);
    }
    const mediaType = ns.getMergedTraits().mediaType;
    if (ns.isStringSchema() && typeof value === "string" && mediaType) {
      const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
      if (isJson) {
        return LazyJsonString.from(value);
      }
      return value;
    }
    if (ns.isTimestampSchema() && value != null) {
      const format2 = determineTimestampFormat(ns, this.settings);
      switch (format2) {
        case 5:
          return parseRfc3339DateTimeWithOffset(value);
        case 6:
          return parseRfc7231DateTime(value);
        case 7:
          return parseEpochTimestamp(value);
        default:
          console.warn("Missing timestamp format, parsing value with Date constructor:", value);
          return new Date(value);
      }
    }
    if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
      return BigInt(value);
    }
    if (ns.isBigDecimalSchema() && value != void 0) {
      if (value instanceof NumericValue) {
        return value;
      }
      const untyped = value;
      if (untyped.type === "bigDecimal" && "string" in untyped) {
        return new NumericValue(untyped.string, untyped.type);
      }
      return new NumericValue(String(value), "bigDecimal");
    }
    if (ns.isNumericSchema() && typeof value === "string") {
      switch (value) {
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        case "NaN":
          return NaN;
      }
      return value;
    }
    if (ns.isDocumentSchema()) {
      if (isObject) {
        if (Array.isArray(value)) {
          for (let i2 = 0; i2 < value.length; ++i2) {
            const v = value[i2];
            if (!(v instanceof NumericValue)) {
              value[i2] = this._read(ns, v);
            }
          }
        } else {
          const doc = value;
          for (const k2 in doc) {
            if (k2 === "__proto__") {
              writeKey(doc);
            }
            const v = doc[k2];
            if (!(v instanceof NumericValue)) {
              doc[k2] = this._read(ns, v);
            }
          }
        }
      }
    }
    return value;
  }
  _readStruct(ns, record) {
    const union = ns.isUnionSchema();
    const out = {};
    let nameMap;
    const hasType = typeof record.__type === "string";
    const { jsonName } = this.settings;
    if (jsonName && hasType) {
      nameMap = {};
    }
    let unionSerde;
    if (union) {
      unionSerde = new UnionSerde(record, out);
    }
    for (const [memberName, memberSchema] of ns.structIterator()) {
      let fromKey = memberName;
      if (jsonName) {
        fromKey = memberSchema.getMergedTraits().jsonName ?? fromKey;
        if (hasType) {
          nameMap[fromKey] = memberName;
        }
      }
      if (union) {
        unionSerde.mark(fromKey);
      }
      if (record[fromKey] != null) {
        out[memberName] = this._read(memberSchema, record[fromKey]);
      }
    }
    if (union) {
      unionSerde.writeUnknown();
    } else if (hasType) {
      for (const k2 in record) {
        const v = record[k2];
        const t = jsonName ? nameMap[k2] ?? k2 : k2;
        if (!(t in out)) {
          out[t] = v;
        }
      }
    }
    return out;
  }
  needsTransform(ns) {
    if (ns.isBlobSchema() || ns.isTimestampSchema() || ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) {
      return true;
    }
    if (ns.isDocumentSchema() || ns.isStructSchema() || ns.isListSchema() || ns.isMapSchema()) {
      return true;
    }
    if (ns.isStringSchema() && ns.getMergedTraits().mediaType) {
      return true;
    }
    return false;
  }
};
__name(JsonShapeDeserializer2, "JsonShapeDeserializer2");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/codec-v2/JsonShapeSerializer2.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();
init_index_browser2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/codec-v2/JsonBytesStringAdapter.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser2();
var JsonBytesStringAdapter = class extends Uint8Array {
  string = null;
  static allocUnsafe(bytes) {
    if (typeof Buffer === "function") {
      const buffer = Buffer.allocUnsafe(bytes);
      return new JsonBytesStringAdapter(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    return new JsonBytesStringAdapter(bytes);
  }
  toString() {
    return this.s();
  }
  valueOf() {
    return this.s();
  }
  includes(searchString, position) {
    if (typeof searchString === "string") {
      return this.s().includes(searchString, position);
    }
    return Uint8Array.prototype.includes.call(this, searchString, position);
  }
  indexOf(searchString, position) {
    if (typeof searchString === "string") {
      return this.s().indexOf(searchString, position);
    }
    return Uint8Array.prototype.indexOf.call(this, searchString, position);
  }
  lastIndexOf(searchString, position) {
    if (typeof searchString === "string") {
      return this.s().lastIndexOf(searchString, position);
    }
    const fn = Uint8Array.prototype.lastIndexOf;
    if (position !== void 0) {
      return fn.call(this, searchString, position);
    }
    return fn.call(this, searchString);
  }
  startsWith(searchString, position) {
    return this.s().startsWith(searchString, position);
  }
  endsWith(searchString, endPosition) {
    return this.s().endsWith(searchString, endPosition);
  }
  match(regexp) {
    return this.s().match(regexp);
  }
  replace(searchValue, replaceValue) {
    return this.s().replace(searchValue, replaceValue);
  }
  search(regexp) {
    return this.s().search(regexp);
  }
  split(separator, limit) {
    return this.s().split(separator, limit);
  }
  substring(start, end) {
    return this.s().substring(start, end);
  }
  trim() {
    return this.s().trim();
  }
  trimStart() {
    return this.s().trimStart();
  }
  trimEnd() {
    return this.s().trimEnd();
  }
  charAt(pos) {
    return this.s().charAt(pos);
  }
  charCodeAt(index) {
    return this.s().charCodeAt(index);
  }
  padStart(maxLength, fillString) {
    return this.s().padStart(maxLength, fillString);
  }
  padEnd(maxLength, fillString) {
    return this.s().padEnd(maxLength, fillString);
  }
  repeat(count3) {
    return this.s().repeat(count3);
  }
  toUpperCase() {
    return this.s().toUpperCase();
  }
  toLowerCase() {
    return this.s().toLowerCase();
  }
  s() {
    if (this.string == null) {
      const n2 = Date.now();
      if (n2 > warned + 6e4) {
        console.warn("@aws-sdk/core/protocols - WARN - JsonCodec2: you have called a string method on a Uint8Array request body. It has been automatically converted to string. In a future version this will throw an error.");
        warned = n2;
      }
      this.string = toUtf8(this);
    }
    return this.string;
  }
};
__name(JsonBytesStringAdapter, "JsonBytesStringAdapter");
var warned = 0;

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/codec-v2/JsonShapeSerializer2.js
var encoder = new TextEncoder();
var OPEN_BRACE = 123;
var CLOSE_BRACE = 125;
var OPEN_BRACKET = 91;
var CLOSE_BRACKET = 93;
var QUOTE = 34;
var COLON = 58;
var COMMA = 44;
var BACKSLASH = 92;
var TRUE = new Uint8Array([116, 114, 117, 101]);
var FALSE = new Uint8Array([102, 97, 108, 115, 101]);
var NULL = new Uint8Array([110, 117, 108, 108]);
var ESCAPE_TABLE = new Array(128).fill(null);
ESCAPE_TABLE[8] = "b";
ESCAPE_TABLE[9] = "t";
ESCAPE_TABLE[10] = "n";
ESCAPE_TABLE[12] = "f";
ESCAPE_TABLE[13] = "r";
ESCAPE_TABLE[34] = '"';
ESCAPE_TABLE[92] = "\\";
for (let i2 = 0; i2 < 32; i2++) {
  if (ESCAPE_TABLE[i2] === null) {
    ESCAPE_TABLE[i2] = "u00" + i2.toString(16).padStart(2, "0");
  }
}
var INITIAL_BUFFER_SIZE = 2048;
function alloc(size) {
  return JsonBytesStringAdapter.allocUnsafe(size);
}
__name(alloc, "alloc");
var _JsonShapeSerializer2 = class extends SerdeContextConfig {
  settings;
  json;
  i = 0;
  rootSchema;
  rawValue;
  passthrough = false;
  constructor(settings) {
    super();
    this.settings = settings;
    this.json = alloc(INITIAL_BUFFER_SIZE);
  }
  write(schema, value) {
    this.i = 0;
    this.rawValue = value;
    this.rootSchema = NormalizedSchema.of(schema);
    this.passthrough = this.rootSchema.isBlobSchema() || this.rootSchema.isStringSchema();
    if (!this.passthrough) {
      this.writeValue(this.rootSchema, value, void 0);
    }
  }
  writeDiscriminatedDocument(schema, value) {
    this.i = 0;
    this.rootSchema = NormalizedSchema.of(schema);
    const ns = this.rootSchema;
    if (ns.isStructSchema() && value != null && typeof value === "object") {
      this.writeValue(ns, value, void 0);
      const prefix = `"__type":"${ns.getName(true) ?? "Unknown"}",`;
      const z = prefix.length;
      this.ensure(z);
      this.json.copyWithin(1 + z, 1, this.i);
      encoder.encodeInto(prefix, this.json.subarray(1));
      this.i += z;
    } else {
      this.writeValue(ns, value, void 0);
    }
  }
  flush() {
    this.rootSchema = void 0;
    const finalPosition = this.i;
    this.i = 0;
    const raw = this.rawValue;
    this.rawValue = void 0;
    if (finalPosition === 0) {
      return raw;
    }
    const result = this.json.subarray(0, finalPosition);
    this.json = alloc(INITIAL_BUFFER_SIZE);
    return result;
  }
  ensure(byteCount) {
    const { i: i2, json: json2 } = this;
    if (i2 + byteCount > json2.length) {
      let newSize = json2.length * 2;
      while (newSize < i2 + byteCount) {
        newSize *= 2;
      }
      const next = alloc(newSize);
      next.set(this.json);
      this.json = next;
    }
  }
  writeAscii(s) {
    const z = s.length;
    this.ensure(z);
    let { i: i2, json: json2 } = this;
    for (let j2 = 0; j2 < z; ++j2) {
      json2[i2] = s.charCodeAt(j2);
      i2 += 1;
    }
    this.i = i2;
  }
  writeAsciiQuoted(s) {
    const z = s.length;
    this.ensure(z + 4);
    let { json: json2, i: i2 } = this;
    json2[i2++] = QUOTE;
    for (let j2 = 0; j2 < z; ++j2) {
      json2[i2++] = s.charCodeAt(j2);
    }
    json2[i2++] = QUOTE;
    this.i = i2;
  }
  writeJsonString(s) {
    this.ensure(s.length * 3 + 2);
    this.json[this.i++] = QUOTE;
    const z = s.length;
    for (let j2 = 0; j2 < z; ++j2) {
      const c2 = s.charCodeAt(j2);
      if (c2 > 34 && c2 < 92) {
        this.json[this.i++] = c2;
      } else if (c2 < 128) {
        const esc = ESCAPE_TABLE[c2];
        if (esc !== null) {
          this.ensure(esc.length + 1);
          this.json[this.i++] = BACKSLASH;
          for (let k2 = 0; k2 < esc.length; k2++) {
            this.json[this.i++] = esc.charCodeAt(k2);
          }
        } else {
          this.json[this.i++] = c2;
        }
      } else if (c2 >= 55296 && c2 <= 56319) {
        const next = j2 + 1 < z ? s.charCodeAt(j2 + 1) : 0;
        if (next >= 56320 && next <= 57343) {
          this.ensure(4);
          const { written } = encoder.encodeInto(s.substring(j2, j2 + 2), this.json.subarray(this.i));
          this.i += written;
          ++j2;
        } else {
          this.ensure(6);
          this.writeUnicodeEscape(c2);
        }
      } else if (c2 >= 56320 && c2 <= 57343) {
        this.ensure(6);
        this.writeUnicodeEscape(c2);
      } else {
        let { i: i2, json: json2 } = this;
        if (c2 < 2048) {
          json2[i2++] = 192 | c2 >> 6;
          json2[i2++] = 128 | c2 & 63;
        } else {
          json2[i2++] = 224 | c2 >> 12;
          json2[i2++] = 128 | c2 >> 6 & 63;
          json2[i2++] = 128 | c2 & 63;
        }
        this.i = i2;
      }
    }
    this.json[this.i++] = QUOTE;
  }
  writeUnicodeEscape(code) {
    let { json: json2, i: i2 } = this;
    json2[i2++] = BACKSLASH;
    json2[i2++] = 117;
    const hex = code.toString(16).padStart(4, "0");
    for (let j2 = 0; j2 < 4; ++j2) {
      json2[i2++] = hex.charCodeAt(j2);
    }
    this.i = i2;
  }
  writeBase64(data) {
    const b64Len = Math.ceil(data.length / 3) * 4;
    this.ensure(b64Len + 2);
    const json2 = this.json;
    const B64 = _JsonShapeSerializer2.B64;
    let i2 = this.i;
    json2[i2++] = QUOTE;
    const len = data.length;
    const remainder = len % 3;
    const mainLen = len - remainder;
    for (let j2 = 0; j2 < mainLen; j2 += 3) {
      const a2 = data[j2];
      const b2 = data[j2 + 1];
      const c2 = data[j2 + 2];
      json2[i2++] = B64[a2 >> 2];
      json2[i2++] = B64[(a2 & 3) << 4 | b2 >> 4];
      json2[i2++] = B64[(b2 & 15) << 2 | c2 >> 6];
      json2[i2++] = B64[c2 & 63];
    }
    if (remainder === 2) {
      const a2 = data[mainLen];
      const b2 = data[mainLen + 1];
      json2[i2++] = B64[a2 >> 2];
      json2[i2++] = B64[(a2 & 3) << 4 | b2 >> 4];
      json2[i2++] = B64[(b2 & 15) << 2];
      json2[i2++] = 61;
    } else if (remainder === 1) {
      const a2 = data[mainLen];
      json2[i2++] = B64[a2 >> 2];
      json2[i2++] = B64[(a2 & 3) << 4];
      json2[i2++] = 61;
      json2[i2++] = 61;
    }
    json2[i2++] = QUOTE;
    this.i = i2;
  }
  writeValue(schema, value, container) {
    if (value == null) {
      if (container?.isStructSchema()) {
        if (value === void 0) {
          const ns2 = NormalizedSchema.of(schema);
          if (ns2.isIdempotencyToken()) {
            this.writeAsciiQuoted(generateIdempotencyToken());
            return;
          }
        }
        return;
      }
      this.ensure(4);
      this.json.set(NULL, this.i);
      this.i += 4;
      return;
    }
    const ns = NormalizedSchema.of(schema);
    const isObject = typeof value === "object";
    if (ns.isStringSchema()) {
      const mediaType = ns.getMergedTraits().mediaType;
      if (mediaType) {
        const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
        if (isJson) {
          this.writeJsonString(LazyJsonString.from(value).toString());
          return;
        }
      }
    }
    if (isObject) {
      if (ns.isStructSchema()) {
        this.writeStruct(ns, value);
        return;
      }
      if (Array.isArray(value) && (ns.isListSchema() || ns.isDocumentSchema())) {
        this.writeList(ns, value, ns.isDocumentSchema());
        return;
      }
      if (ns.isMapSchema()) {
        this.writeMap(ns, value, false);
        return;
      }
      if (value instanceof Uint8Array && (ns.isBlobSchema() || ns.isDocumentSchema())) {
        this.writeBase64(value);
        return;
      }
      if (value instanceof Date && (ns.isTimestampSchema() || ns.isDocumentSchema())) {
        this.writeTimestamp(ns, value);
        return;
      }
      if (value instanceof NumericValue) {
        this.writeAscii(value.string);
        return;
      }
      if (ns.isDocumentSchema()) {
        if (Array.isArray(value)) {
          this.writeList(ns, value, true);
        } else {
          this.writeMap(ns, value, true);
        }
        return;
      }
      const json2 = JSON.stringify(value);
      this.writeAscii(json2);
      return;
    }
    if (typeof value === "string") {
      if (ns.isBlobSchema()) {
        const b64 = (this.serdeContext?.base64Encoder ?? toBase64)(value);
        this.writeAsciiQuoted(b64);
        return;
      }
      this.writeJsonString(value);
      return;
    }
    if (typeof value === "number") {
      if (Math.abs(value) === Infinity || Number.isNaN(value)) {
        this.writeAsciiQuoted(String(value));
        return;
      }
      const numStr = String(value);
      this.writeAscii(numStr);
      return;
    }
    if (typeof value === "boolean") {
      this.ensure(5);
      let { i: i2, json: json2 } = this;
      if (value) {
        json2.set(TRUE, i2);
        i2 += 4;
      } else {
        json2.set(FALSE, i2);
        i2 += 5;
      }
      this.i = i2;
      return;
    }
    if (typeof value === "bigint") {
      this.writeAscii(value.toString());
      return;
    }
    this.writeAscii(String(value));
  }
  writeStruct(ns, value) {
    this.ensure(2);
    this.json[this.i++] = OPEN_BRACE;
    let wroteAny = false;
    const hasType = typeof value.__type === "string";
    let writtenKeys;
    if (hasType) {
      writtenKeys = /* @__PURE__ */ new Set();
    }
    for (const [memberName, memberSchema] of ns.structIterator()) {
      const item = value[memberName];
      if (item == null && !memberSchema.isIdempotencyToken()) {
        continue;
      }
      if (wroteAny) {
        this.ensure(1);
        this.json[this.i++] = COMMA;
      }
      wroteAny = true;
      const targetKey = this.settings.jsonName ? memberSchema.getMergedTraits().jsonName ?? memberName : memberName;
      if (writtenKeys) {
        writtenKeys.add(memberName);
        writtenKeys.add(targetKey);
      }
      this.writeAsciiQuoted(targetKey);
      this.json[this.i++] = COLON;
      this.writeValue(memberSchema, item, ns);
    }
    if (!wroteAny && ns.isUnionSchema()) {
      const { $unknown } = value;
      if (Array.isArray($unknown)) {
        const [k2, v] = $unknown;
        this.writeAsciiQuoted(k2);
        this.ensure(1);
        this.json[this.i++] = COLON;
        this.writeValue(15, v, ns);
      }
    } else if (hasType) {
      for (const k2 in value) {
        if (writtenKeys.has(k2)) {
          continue;
        }
        writtenKeys.add(k2);
        const v = value[k2];
        if (wroteAny) {
          this.ensure(1);
          this.json[this.i++] = COMMA;
        }
        wroteAny = true;
        this.writeAsciiQuoted(k2);
        this.ensure(1);
        this.json[this.i++] = COLON;
        this.writeValue(15, v, void 0);
      }
    }
    this.ensure(1);
    this.json[this.i++] = CLOSE_BRACE;
  }
  writeList(ns, value, isDocument) {
    const sparse = !!ns.getMergedTraits().sparse;
    const valueSchema = ns.getValueSchema();
    if (!isDocument) {
      if (valueSchema.isStringSchema() || valueSchema.isNumericSchema() || valueSchema.isBooleanSchema()) {
        let hasSpecials = false;
        for (let i2 = 0; i2 < value.length; ++i2) {
          const v = value[i2];
          if (Number.isNaN(v) || v === Infinity || v === -Infinity || v == null && !sparse) {
            hasSpecials = true;
            break;
          }
        }
        let json2;
        if (!hasSpecials) {
          json2 = JSON.stringify(value);
        } else {
          const out = [];
          for (let i2 = 0; i2 < value.length; ++i2) {
            const v = value[i2];
            if (v == null && !sparse)
              continue;
            if (Number.isNaN(v) || v === Infinity || v === -Infinity) {
              out.push(String(v));
            } else {
              out.push(v);
            }
          }
          json2 = JSON.stringify(out);
        }
        this.ensure(json2.length * 3);
        this.i += encoder.encodeInto(json2, this.json.subarray(this.i)).written;
        return;
      }
    }
    this.ensure(2);
    this.json[this.i++] = OPEN_BRACKET;
    let wroteFirstItem = false;
    for (let i2 = 0; i2 < value.length; ++i2) {
      const item = value[i2];
      if (isDocument ? item === void 0 : item == null && !sparse) {
        continue;
      }
      if (wroteFirstItem) {
        this.ensure(1);
        this.json[this.i++] = COMMA;
      }
      this.writeValue(valueSchema, item, void 0);
      wroteFirstItem = true;
    }
    this.ensure(1);
    this.json[this.i++] = CLOSE_BRACKET;
  }
  writeMap(ns, value, isDocument) {
    const sparse = !!ns.getMergedTraits().sparse;
    const valueSchema = ns.getValueSchema();
    if (!isDocument) {
      if (valueSchema.isStringSchema() || valueSchema.isNumericSchema() || valueSchema.isBooleanSchema()) {
        let modifications;
        for (const k2 in value) {
          const v = value[k2];
          if (Number.isNaN(v) || v === Infinity || v === -Infinity) {
            (modifications ??= {})[k2] = v;
            value[k2] = String(v);
          } else if (v === null && !sparse) {
            (modifications ??= {})[k2] = null;
            value[k2] = void 0;
          }
        }
        const json2 = JSON.stringify(value);
        if (modifications) {
          Object.assign(value, modifications);
        }
        this.ensure(json2.length * 3);
        this.i += encoder.encodeInto(json2, this.json.subarray(this.i)).written;
        return;
      }
    }
    this.ensure(2);
    this.json[this.i++] = OPEN_BRACE;
    let first = true;
    for (const k2 in value) {
      const v = value[k2];
      if (isDocument ? v === void 0 : v == null && !sparse) {
        continue;
      }
      if (!first) {
        this.ensure(1);
        this.json[this.i++] = COMMA;
      }
      first = false;
      this.writeJsonString(k2);
      this.ensure(1);
      this.json[this.i++] = COLON;
      this.writeValue(valueSchema, v, void 0);
    }
    this.ensure(1);
    this.json[this.i++] = CLOSE_BRACE;
  }
  writeTimestamp(ns, value) {
    const format2 = determineTimestampFormat(ns, this.settings);
    switch (format2) {
      case 5: {
        const iso = value.toISOString().replace(".000Z", "Z");
        this.writeAsciiQuoted(iso);
        return;
      }
      case 6: {
        this.writeAsciiQuoted(dateToUtcString(value));
        return;
      }
      case 7: {
        const epochSecs = String(value.getTime() / 1e3);
        this.writeAscii(epochSecs);
        return;
      }
      default: {
        const epochSecs = String(value.getTime() / 1e3);
        this.writeAscii(epochSecs);
        return;
      }
    }
  }
};
var JsonShapeSerializer2 = _JsonShapeSerializer2;
__name(JsonShapeSerializer2, "JsonShapeSerializer2");
__publicField(JsonShapeSerializer2, "B64", (() => {
  const chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const table3 = new Uint8Array(64);
  for (let i2 = 0; i2 < 64; ++i2) {
    table3[i2] = chars2.charCodeAt(i2);
  }
  return table3;
})());

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/codec-v2/JsonCodec2.js
var JsonCodec2 = class extends SerdeContextConfig {
  settings;
  constructor(settings) {
    super();
    this.settings = settings;
  }
  createSerializer() {
    const serializer = new JsonShapeSerializer2(this.settings);
    serializer.setSerdeContext(this.serdeContext);
    return serializer;
  }
  createDeserializer() {
    const deserializer = new JsonShapeDeserializer2(this.settings);
    deserializer.setSerdeContext(this.serdeContext);
    return deserializer;
  }
};
__name(JsonCodec2, "JsonCodec2");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js
var AwsJsonRpcProtocol = class extends RpcProtocol {
  serializer;
  deserializer;
  serviceTarget;
  codec;
  mixin;
  awsQueryCompatible;
  constructor({ defaultNamespace, errorTypeRegistries: errorTypeRegistries2, serviceTarget, awsQueryCompatible, jsonCodec }) {
    super({
      defaultNamespace,
      errorTypeRegistries: errorTypeRegistries2
    });
    this.serviceTarget = serviceTarget;
    this.codec = jsonCodec ?? new JsonCodec2({
      timestampFormat: {
        useTrait: true,
        default: 7
      },
      jsonName: false
    });
    this.serializer = this.codec.createSerializer();
    this.deserializer = this.codec.createDeserializer();
    this.awsQueryCompatible = !!awsQueryCompatible;
    this.mixin = new ProtocolLib(this.awsQueryCompatible);
  }
  async serializeRequest(operationSchema, input, context2) {
    const request = await super.serializeRequest(operationSchema, input, context2);
    if (!request.path.endsWith("/")) {
      request.path += "/";
    }
    request.headers["content-type"] = `application/x-amz-json-${this.getJsonRpcVersion()}`;
    request.headers["x-amz-target"] = `${this.serviceTarget}.${operationSchema.name}`;
    if (this.awsQueryCompatible) {
      request.headers["x-amzn-query-mode"] = "true";
    }
    if (deref(operationSchema.input) === "unit" || !request.body) {
      request.body = "{}";
    }
    return request;
  }
  getPayloadCodec() {
    return this.codec;
  }
  async handleError(operationSchema, context2, response, dataObject, metadata) {
    const { awsQueryCompatible } = this;
    if (awsQueryCompatible) {
      this.mixin.setQueryCompatError(dataObject, response);
    }
    const errorIdentifier = loadJsonRpcErrorCode(response, dataObject, awsQueryCompatible) ?? "Unknown";
    this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
    const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata, awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0);
    const ns = NormalizedSchema.of(errorSchema);
    const message = dataObject.message ?? dataObject.Message ?? "UnknownError";
    const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
    const exception = new ErrorCtor({});
    const output = {};
    const errorDeserializer = this.codec.createDeserializer();
    for (const [name, member2] of ns.structIterator()) {
      if (dataObject[name] != null) {
        output[name] = errorDeserializer.readObject(member2, dataObject[name]);
      }
    }
    if (awsQueryCompatible) {
      this.mixin.queryCompatOutput(dataObject, output);
    }
    throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
      $fault: ns.getMergedTraits().error,
      message
    }, output), dataObject);
  }
};
__name(AwsJsonRpcProtocol, "AwsJsonRpcProtocol");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var AwsJson1_1Protocol = class extends AwsJsonRpcProtocol {
  constructor({ defaultNamespace, errorTypeRegistries: errorTypeRegistries2, serviceTarget, awsQueryCompatible, jsonCodec }) {
    super({
      defaultNamespace,
      errorTypeRegistries: errorTypeRegistries2,
      serviceTarget,
      awsQueryCompatible,
      jsonCodec
    });
  }
  getShapeId() {
    return "aws.protocols#awsJson1_1";
  }
  getJsonRpcVersion() {
    return "1.1";
  }
  getDefaultContentType() {
    return "application/x-amz-json-1.1";
  }
};
__name(AwsJson1_1Protocol, "AwsJson1_1Protocol");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/runtimeConfig.shared.js
init_index_browser3();
init_index_browser2();

// node_modules/@aws-sdk/client-cost-explorer/dist-es/endpoint/endpointResolver.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser();

// node_modules/@aws-sdk/client-cost-explorer/dist-es/endpoint/bdd.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser();
var n = "ref";
var a = -1;
var b = true;
var c = "isSet";
var d = "PartitionResult";
var e = "booleanEquals";
var f = "getAttr";
var g = "stringEquals";
var h = "sigv4";
var i = { [n]: "Endpoint" };
var j = { [n]: d };
var k = { "fn": f, "argv": [j, "name"] };
var l = { "authSchemes": [{ "name": h, "signingRegion": "{PartitionResult#implicitGlobalRegion}" }] };
var m = [{ [n]: "Region" }];
var _data = {
  conditions: [
    [c, [i]],
    [c, m],
    ["aws.partition", m, d],
    [e, [{ [n]: "UseFIPS" }, b]],
    [e, [{ fn: f, argv: [j, "supportsFIPS"] }, b]],
    [e, [{ [n]: "UseDualStack" }, b]],
    [g, [k, "aws-iso"]],
    [g, [k, "aws-iso-b"]],
    [g, [k, "aws-iso-e"]],
    [g, [k, "aws"]],
    [g, [k, "aws-cn"]],
    [g, [k, "aws-iso-f"]],
    [g, [k, "aws-eusc"]],
    [e, [{ fn: f, argv: [j, "supportsDualStack"] }, b]]
  ],
  results: [
    [a],
    [a, "Invalid Configuration: FIPS and custom endpoint are not supported"],
    [a, "Invalid Configuration: Dualstack and custom endpoint are not supported"],
    [i, {}],
    ["https://ce.us-east-1.api.aws", { authSchemes: [{ name: h, signingRegion: "us-east-1" }] }],
    ["https://ce.cn-northwest-1.api.amazonwebservices.com.cn", { authSchemes: [{ name: h, signingRegion: "cn-northwest-1" }] }],
    ["https://ce.us-iso-east-1.c2s.ic.gov", { authSchemes: [{ name: h, signingRegion: "us-iso-east-1" }] }],
    ["https://ce.us-isob-east-1.sc2s.sgov.gov", { authSchemes: [{ name: h, signingRegion: "us-isob-east-1" }] }],
    ["https://ce.eu-isoe-west-1.cloud.adc-e.uk", { authSchemes: [{ name: h, signingRegion: "eu-isoe-west-1" }] }],
    ["https://ce.us-isof-south-1.csp.hci.ic.gov", { authSchemes: [{ name: h, signingRegion: "us-isof-south-1" }] }],
    ["https://ce.eusc-de-east-1.api.amazonwebservices.eu", { authSchemes: [{ name: h, signingRegion: "eusc-de-east-1" }] }],
    ["https://ce-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}", l],
    [a, "FIPS and DualStack are enabled, but this partition does not support one or both"],
    ["https://ce-fips.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}", l],
    [a, "FIPS is enabled but this partition does not support FIPS"],
    ["https://ce.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dualStackDnsSuffix}", l],
    [a, "DualStack is enabled but this partition does not support DualStack"],
    ["https://ce.{PartitionResult#implicitGlobalRegion}.{PartitionResult#dnsSuffix}", l],
    [a, "Invalid Configuration: Missing Region"]
  ]
};
var root = 2;
var r = 1e8;
var nodes = new Int32Array([
  -1,
  1,
  -1,
  0,
  20,
  3,
  1,
  4,
  r + 18,
  2,
  5,
  r + 18,
  3,
  16,
  6,
  5,
  12,
  7,
  6,
  r + 6,
  8,
  7,
  r + 7,
  9,
  8,
  r + 8,
  10,
  11,
  r + 9,
  11,
  12,
  r + 10,
  r + 17,
  9,
  r + 4,
  13,
  10,
  r + 5,
  14,
  12,
  r + 10,
  15,
  13,
  r + 15,
  r + 16,
  4,
  18,
  17,
  5,
  r + 12,
  r + 14,
  5,
  19,
  r + 13,
  13,
  r + 11,
  r + 12,
  3,
  r + 1,
  21,
  5,
  r + 2,
  r + 3
]);
var bdd = BinaryDecisionDiagram.from(nodes, root, _data.conditions, _data.results);

// node_modules/@aws-sdk/client-cost-explorer/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
  size: 50,
  params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
});
var defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context2 = {}) => {
  return cache.get(endpointParams, () => decideEndpoint(bdd, {
    endpointParams,
    logger: context2.logger
  }));
}, "defaultEndpointResolver");
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-cost-explorer/dist-es/schemas/schemas_0.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_schema();

// node_modules/@aws-sdk/client-cost-explorer/dist-es/models/CostExplorerServiceException.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var CostExplorerServiceException = class extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, CostExplorerServiceException.prototype);
  }
};
__name(CostExplorerServiceException, "CostExplorerServiceException");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/models/errors.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var AnalysisNotFoundException = class extends CostExplorerServiceException {
  name = "AnalysisNotFoundException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "AnalysisNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, AnalysisNotFoundException.prototype);
    this.Message = opts.Message;
  }
};
__name(AnalysisNotFoundException, "AnalysisNotFoundException");
var LimitExceededException = class extends CostExplorerServiceException {
  name = "LimitExceededException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
};
__name(LimitExceededException, "LimitExceededException");
var UnknownMonitorException = class extends CostExplorerServiceException {
  name = "UnknownMonitorException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "UnknownMonitorException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, UnknownMonitorException.prototype);
    this.Message = opts.Message;
  }
};
__name(UnknownMonitorException, "UnknownMonitorException");
var ServiceQuotaExceededException = class extends CostExplorerServiceException {
  name = "ServiceQuotaExceededException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
};
__name(ServiceQuotaExceededException, "ServiceQuotaExceededException");
var UnknownSubscriptionException = class extends CostExplorerServiceException {
  name = "UnknownSubscriptionException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "UnknownSubscriptionException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, UnknownSubscriptionException.prototype);
    this.Message = opts.Message;
  }
};
__name(UnknownSubscriptionException, "UnknownSubscriptionException");
var ResourceNotFoundException = class extends CostExplorerServiceException {
  name = "ResourceNotFoundException";
  $fault = "client";
  Message;
  ResourceName;
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
};
__name(ResourceNotFoundException, "ResourceNotFoundException");
var InvalidNextTokenException = class extends CostExplorerServiceException {
  name = "InvalidNextTokenException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
};
__name(InvalidNextTokenException, "InvalidNextTokenException");
var DataUnavailableException = class extends CostExplorerServiceException {
  name = "DataUnavailableException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "DataUnavailableException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, DataUnavailableException.prototype);
    this.Message = opts.Message;
  }
};
__name(DataUnavailableException, "DataUnavailableException");
var BillExpirationException = class extends CostExplorerServiceException {
  name = "BillExpirationException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "BillExpirationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, BillExpirationException.prototype);
    this.Message = opts.Message;
  }
};
__name(BillExpirationException, "BillExpirationException");
var BillingViewHealthStatusException = class extends CostExplorerServiceException {
  name = "BillingViewHealthStatusException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "BillingViewHealthStatusException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, BillingViewHealthStatusException.prototype);
    this.Message = opts.Message;
  }
};
__name(BillingViewHealthStatusException, "BillingViewHealthStatusException");
var RequestChangedException = class extends CostExplorerServiceException {
  name = "RequestChangedException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "RequestChangedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, RequestChangedException.prototype);
    this.Message = opts.Message;
  }
};
__name(RequestChangedException, "RequestChangedException");
var UnresolvableUsageUnitException = class extends CostExplorerServiceException {
  name = "UnresolvableUsageUnitException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "UnresolvableUsageUnitException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, UnresolvableUsageUnitException.prototype);
    this.Message = opts.Message;
  }
};
__name(UnresolvableUsageUnitException, "UnresolvableUsageUnitException");
var GenerationExistsException = class extends CostExplorerServiceException {
  name = "GenerationExistsException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "GenerationExistsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, GenerationExistsException.prototype);
    this.Message = opts.Message;
  }
};
__name(GenerationExistsException, "GenerationExistsException");
var BackfillLimitExceededException = class extends CostExplorerServiceException {
  name = "BackfillLimitExceededException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "BackfillLimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, BackfillLimitExceededException.prototype);
    this.Message = opts.Message;
  }
};
__name(BackfillLimitExceededException, "BackfillLimitExceededException");
var TooManyTagsException = class extends CostExplorerServiceException {
  name = "TooManyTagsException";
  $fault = "client";
  Message;
  ResourceName;
  constructor(opts) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
};
__name(TooManyTagsException, "TooManyTagsException");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/schemas/schemas_0.js
var _AC = "AmortizedCommitment";
var _ADp = "ApproximationDimension";
var _AIc = "AccountId";
var _AIna = "AnalysisIds";
var _ANFE = "AnalysisNotFoundException";
var _ARC = "AmortizedRecurringCommitment";
var _ARF = "AmortizedRecurringFee";
var _ASc = "AccountScope";
var _ASn = "AnalysisStatus";
var _ASnom = "AnomalySubscription";
var _AT = "AnalysisType";
var _AUC = "AmortizedUpfrontCommitment";
var _AUF = "AmortizedUpfrontFee";
var _Ad = "Address";
var _Am = "Amount";
var _An = "And";
var _At = "Attributes";
var _BEE = "BillExpirationException";
var _BLEE = "BackfillLimitExceededException";
var _BVA = "BillingViewArn";
var _BVHSE = "BillingViewHealthStatusException";
var _C = "Component";
var _CCA = "CostCategoryArn";
var _CCNo = "CostCategoryNames";
var _CCPS = "CostCategoryProcessingStatus";
var _CCPSL = "CostCategoryProcessingStatusList";
var _CCR = "CostCategoryReference";
var _CCSCR = "CostCategorySplitChargeRule";
var _CCSCRP = "CostCategorySplitChargeRuleParameter";
var _CCSCRPL = "CostCategorySplitChargeRuleParametersList";
var _CCV = "CostCategoryValues";
var _CCo = "CoverageCost";
var _CCos = "CostCategories";
var _CCu = "CurrencyCode";
var _CH = "CoverageHours";
var _CHP = "CoverageHoursPercentage";
var _CI = "CurrentInstance";
var _CNU = "CoverageNormalizedUnits";
var _CNUP = "CoverageNormalizedUnitsPercentage";
var _CP = "CoveragePercentage";
var _Co = "Coverage";
var _DI = "DateInterval";
var _DRBPS = "DiskReadBytesPerSecond";
var _DROPS = "DiskReadOpsPerSecond";
var _DRU = "DiskResourceUtilization";
var _DT = "DataType";
var _DTI = "DefaultTargetInstance";
var _DUE = "DataUnavailableException";
var _DVA = "DimensionValueAttributes";
var _DVWA = "DimensionValuesWithAttributes";
var _DVWAL = "DimensionValuesWithAttributesList";
var _DVe = "DefaultValue";
var _DVi = "DimensionValues";
var _DWBPS = "DiskWriteBytesPerSecond";
var _DWOPS = "DiskWriteOpsPerSecond";
var _Di = "Dimensions";
var _E = "End";
var _EBSRU = "EBSResourceUtilization";
var _ECRD = "EC2ResourceDetails";
var _ECRU = "EC2ResourceUtilization";
var _EE = "EffectiveEnd";
var _EMC = "EstimatedMonthlyCost";
var _EMS = "EstimatedMonthlySavings";
var _EO = "EffectiveOn";
var _ERBPS = "EbsReadBytesPerSecond";
var _EROPS = "EbsReadOpsPerSecond";
var _ERU = "ExpectedResourceUtilization";
var _ES = "EffectiveStart";
var _EWBPS = "EbsWriteBytesPerSecond";
var _EWOPS = "EbsWriteOpsPerSecond";
var _Es = "Estimated";
var _Ex = "Expression";
var _Exp = "Expressions";
var _FR = "ForecastResult";
var _FRBT = "ForecastResultsByTime";
var _FRC = "FindingReasonCodes";
var _Fi = "Filter";
var _Fr = "Frequency";
var _G = "Groups";
var _GAMR = "GetAnomalyMonitorsRequest";
var _GASR = "GetAnomalySubscriptionsRequest";
var _GAURR = "GetApproximateUsageRecordsRequest";
var _GAURRe = "GetApproximateUsageRecordsResponse";
var _GB = "GroupBy";
var _GCAU = "GetCostAndUsage";
var _GCAUR = "GetCostAndUsageRequest";
var _GCAURe = "GetCostAndUsageResponse";
var _GCAUWRR = "GetCostAndUsageWithResourcesRequest";
var _GCCRe = "GetCostCategoriesResponse";
var _GCF = "GetCostForecast";
var _GCFR = "GetCostForecastRequest";
var _GCFRe = "GetCostForecastResponse";
var _GD = "GroupDefinitions";
var _GDr = "GroupDefinition";
var _GEE = "GenerationExistsException";
var _GRCR = "GetReservationCoverageRequest";
var _GSPCR = "GetSavingsPlansCoverageRequest";
var _GSPUDR = "GetSavingsPlansUtilizationDetailsRequest";
var _GSe = "GenerationStatus";
var _GTRe = "GetTagsResponse";
var _Gr = "Granularity";
var _Gro = "Group";
var _HODR = "HourlyOnDemandRate";
var _IF = "InstanceFamily";
var _IN = "InstanceName";
var _INTE = "InvalidNextTokenException";
var _IT = "InstanceType";
var _K = "Key";
var _Ke = "Keys";
var _LBTP = "LookBackTimePeriod";
var _LCATR = "ListCostAllocationTagsRequest";
var _LCCDR = "ListCostCategoryDefinitionsRequest";
var _LCPAR = "ListCommitmentPurchaseAnalysesRequest";
var _LEE = "LimitExceededException";
var _LP = "LookbackPeriod";
var _LSPPRGR = "ListSavingsPlansPurchaseRecommendationGenerationRequest";
var _M = "Message";
var _MA = "MonitorArn";
var _MAL = "MonitorArnList";
var _MC = "MonthlyCost";
var _MCUP = "MaxCpuUtilizationPercentage";
var _MMUP = "MaxMemoryUtilizationPercentage";
var _MO = "MatchOptions";
var _MR = "MaxResults";
var _MRD = "ModifyRecommendationDetail";
var _MSUP = "MaxStorageUtilizationPercentage";
var _MV = "MeanValue";
var _MVe = "MetricValue";
var _Me = "Metrics";
var _Mem = "Memory";
var _Met = "Method";
var _Metr = "Metric";
var _N = "Name";
var _NIBPS = "NetworkInBytesPerSecond";
var _NOBPS = "NetworkOutBytesPerSecond";
var _NOR = "NumberOfRules";
var _NP = "NetworkPerformance";
var _NPIPS = "NetworkPacketsInPerSecond";
var _NPOPS = "NetworkPacketsOutPerSecond";
var _NPT = "NextPageToken";
var _NRIS = "NetRISavings";
var _NRU = "NetworkResourceUtilization";
var _NS = "NetSavings";
var _NTe = "NextToken";
var _No = "Not";
var _O = "Or";
var _ODC = "OnDemandCost";
var _ODCE = "OnDemandCostEquivalent";
var _ODCORIHU = "OnDemandCostOfRIHoursUsed";
var _ODH = "OnDemandHours";
var _ODHILP = "OnDemandHoursInLookbackPeriod";
var _ODNU = "OnDemandNormalizedUnits";
var _OI = "OfferingId";
var _P = "Parameters";
var _PDl = "PlatformDifferences";
var _PH = "PurchasedHours";
var _PIL = "PredictionIntervalLevel";
var _PILB = "PredictionIntervalLowerBound";
var _PIUB = "PredictionIntervalUpperBound";
var _PO = "PaymentOption";
var _PS = "ProcessingStatus";
var _PSa = "PageSize";
var _PU = "PurchasedUnits";
var _Pl = "Platform";
var _RAe = "ResourceArn";
var _RAes = "ReservationAggregates";
var _RBT = "ResultsByTime";
var _RBTe = "ResultByTime";
var _RCE = "RequestChangedException";
var _RCG = "ReservationCoverageGroup";
var _RCHILP = "ReservationCoveredHoursInLookbackPeriod";
var _RD = "ResourceDetails";
var _RH = "ReservedHours";
var _RI = "ResourceId";
var _RICFUH = "RICostForUnusedHours";
var _RIec = "RecommendationIds";
var _RN = "ResourceName";
var _RNFE = "ResourceNotFoundException";
var _RNU = "ReservedNormalizedUnits";
var _RRi = "RightsizingRecommendation";
var _RS = "ReturnSize";
var _RSe = "RealizedSavings";
var _RTK = "ResourceTagKeys";
var _RTi = "RightsizingType";
var _RU = "ResourceUtilization";
var _RUG = "ReservationUtilizationGroup";
var _Re = "Region";
var _S = "Subscribers";
var _SA = "SubscriptionArn";
var _SAL = "SubscriptionArnList";
var _SB = "SortBy";
var _SCBSP = "SpendCoveredBySavingsPlans";
var _SDo = "SortDefinition";
var _SN = "SubscriptionName";
var _SO = "SortOrder";
var _SPA = "SavingsPlanArn";
var _SPAC = "SavingsPlansAmortizedCommitment";
var _SPCD = "SavingsPlansCoverageData";
var _SPCHILP = "SavingsPlansCoveredHoursInLookbackPeriod";
var _SPCa = "SavingsPlansCommitment";
var _SPCav = "SavingsPlansCoverage";
var _SPPAC = "SavingsPlansPurchaseAnalysisConfiguration";
var _SPS = "SavingsPlansSavings";
var _SPT = "SavingsPlansType";
var _SPTA = "SavingsPlansToAdd";
var _SPTC = "SavingsPlansTargetCoverage";
var _SPTE = "SavingsPlansToExclude";
var _SPU = "SavingsPlansUtilization";
var _SPUDa = "SavingsPlansUtilizationDetail";
var _SPa = "SavingsPlans";
var _SQEE = "ServiceQuotaExceededException";
var _SRT = "SupportedResourceTypes";
var _Sa = "Savings";
var _Se = "Services";
var _Sk = "Sku";
var _So = "Source";
var _St = "Status";
var _Sta = "Start";
var _Sto = "Storage";
var _Sub = "Subscriber";
var _T = "Threshold";
var _TAC = "TotalAmortizedCommitment";
var _TAF = "TotalAmortizedFee";
var _TAH = "TotalActualHours";
var _TAU = "TotalActualUnits";
var _TC = "TotalCost";
var _TCo = "TotalCommitment";
var _TE = "ThresholdExpression";
var _TIL = "TargetInstancesList";
var _TIY = "TermInYears";
var _TIa = "TargetInstances";
var _TIar = "TargetInstance";
var _TKa = "TagKeys";
var _TMTE = "TooManyTagsException";
var _TP = "TimePeriod";
var _TPRIS = "TotalPotentialRISavings";
var _TR = "TotalRecords";
var _TRD = "TerminateRecommendationDetail";
var _TRH = "TotalRunningHours";
var _TRHILP = "TotalRunningHoursInLookbackPeriod";
var _TRNU = "TotalRunningNormalizedUnits";
var _TS = "TotalSize";
var _TV = "TagValues";
var _TVL = "TagValuesList";
var _Ta = "Targets";
var _Tag = "Tags";
var _To = "Total";
var _Ty = "Type";
var _U = "Unit";
var _UASR = "UpdateAnomalySubscriptionRequest";
var _UCn = "UnusedCommitment";
var _UCs = "UsedCommitment";
var _UH = "UnusedHours";
var _UME = "UnknownMonitorException";
var _UP = "UtilizationPercentage";
var _UPIU = "UtilizationPercentageInUnits";
var _URR = "UntagResourceRequest";
var _US = "UnrealizedSavings";
var _USE = "UnknownSubscriptionException";
var _UU = "UnusedUnits";
var _UUUE = "UnresolvableUsageUnitException";
var _Ut = "Utilization";
var _V = "Values";
var _Va = "Value";
var _Vc = "Vcpu";
var _c = "client";
var _e = "error";
var _hE = "httpError";
var _s = "smithy.ts.sdk.synthetic.com.amazonaws.costexplorer";
var n0 = "com.amazonaws.costexplorer";
var _s_registry = TypeRegistry.for(_s);
var CostExplorerServiceException$ = [-3, _s, "CostExplorerServiceException", 0, [], []];
_s_registry.registerError(CostExplorerServiceException$, CostExplorerServiceException);
var n0_registry = TypeRegistry.for(n0);
var AnalysisNotFoundException$ = [
  -3,
  n0,
  _ANFE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
n0_registry.registerError(AnalysisNotFoundException$, AnalysisNotFoundException);
var BackfillLimitExceededException$ = [
  -3,
  n0,
  _BLEE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
n0_registry.registerError(BackfillLimitExceededException$, BackfillLimitExceededException);
var BillExpirationException$ = [
  -3,
  n0,
  _BEE,
  { [_e]: _c },
  [_M],
  [0]
];
n0_registry.registerError(BillExpirationException$, BillExpirationException);
var BillingViewHealthStatusException$ = [
  -3,
  n0,
  _BVHSE,
  { [_e]: _c },
  [_M],
  [0]
];
n0_registry.registerError(BillingViewHealthStatusException$, BillingViewHealthStatusException);
var DataUnavailableException$ = [
  -3,
  n0,
  _DUE,
  { [_e]: _c },
  [_M],
  [0]
];
n0_registry.registerError(DataUnavailableException$, DataUnavailableException);
var GenerationExistsException$ = [
  -3,
  n0,
  _GEE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
n0_registry.registerError(GenerationExistsException$, GenerationExistsException);
var InvalidNextTokenException$ = [
  -3,
  n0,
  _INTE,
  { [_e]: _c },
  [_M],
  [0]
];
n0_registry.registerError(InvalidNextTokenException$, InvalidNextTokenException);
var LimitExceededException$ = [
  -3,
  n0,
  _LEE,
  { [_e]: _c },
  [_M],
  [0]
];
n0_registry.registerError(LimitExceededException$, LimitExceededException);
var RequestChangedException$ = [
  -3,
  n0,
  _RCE,
  { [_e]: _c },
  [_M],
  [0]
];
n0_registry.registerError(RequestChangedException$, RequestChangedException);
var ResourceNotFoundException$ = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M, _RN],
  [0, 0]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
var ServiceQuotaExceededException$ = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_M],
  [0]
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
var TooManyTagsException$ = [
  -3,
  n0,
  _TMTE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _RN],
  [0, 0]
];
n0_registry.registerError(TooManyTagsException$, TooManyTagsException);
var UnknownMonitorException$ = [
  -3,
  n0,
  _UME,
  { [_e]: _c, [_hE]: 404 },
  [_M],
  [0]
];
n0_registry.registerError(UnknownMonitorException$, UnknownMonitorException);
var UnknownSubscriptionException$ = [
  -3,
  n0,
  _USE,
  { [_e]: _c, [_hE]: 404 },
  [_M],
  [0]
];
n0_registry.registerError(UnknownSubscriptionException$, UnknownSubscriptionException);
var UnresolvableUsageUnitException$ = [
  -3,
  n0,
  _UUUE,
  { [_e]: _c },
  [_M],
  [0]
];
n0_registry.registerError(UnresolvableUsageUnitException$, UnresolvableUsageUnitException);
var errorTypeRegistries = [
  _s_registry,
  n0_registry
];
var AnomalySubscription$ = [
  3,
  n0,
  _ASnom,
  0,
  [_MAL, _S, _Fr, _SN, _SA, _AIc, _T, _TE],
  [64 | 0, () => Subscribers, 0, 0, 0, 0, 1, () => Expression$],
  4
];
var CostCategoryProcessingStatus$ = [
  3,
  n0,
  _CCPS,
  0,
  [_C, _St],
  [0, 0]
];
var CostCategoryReference$ = [
  3,
  n0,
  _CCR,
  0,
  [_CCA, _N, _ES, _EE, _NOR, _PS, _V, _DVe, _SRT],
  [0, 0, 0, 0, 1, () => CostCategoryProcessingStatusList, 64 | 0, 0, 64 | 0]
];
var CostCategorySplitChargeRule$ = [
  3,
  n0,
  _CCSCR,
  0,
  [_So, _Ta, _Met, _P],
  [0, 64 | 0, 0, () => CostCategorySplitChargeRuleParametersList],
  3
];
var CostCategorySplitChargeRuleParameter$ = [
  3,
  n0,
  _CCSCRP,
  0,
  [_Ty, _V],
  [0, 64 | 0],
  2
];
var CostCategoryValues$ = [
  3,
  n0,
  _CCV,
  0,
  [_K, _V, _MO],
  [0, 64 | 0, 64 | 0]
];
var Coverage$ = [
  3,
  n0,
  _Co,
  0,
  [_CH, _CNU, _CCo],
  [() => CoverageHours$, () => CoverageNormalizedUnits$, () => CoverageCost$]
];
var CoverageCost$ = [
  3,
  n0,
  _CCo,
  0,
  [_ODC],
  [0]
];
var CoverageHours$ = [
  3,
  n0,
  _CH,
  0,
  [_ODH, _RH, _TRH, _CHP],
  [0, 0, 0, 0]
];
var CoverageNormalizedUnits$ = [
  3,
  n0,
  _CNU,
  0,
  [_ODNU, _RNU, _TRNU, _CNUP],
  [0, 0, 0, 0]
];
var CurrentInstance$ = [
  3,
  n0,
  _CI,
  0,
  [_RI, _IN, _Tag, _RD, _RU, _RCHILP, _SPCHILP, _ODHILP, _TRHILP, _MC, _CCu],
  [0, 0, () => TagValuesList, () => ResourceDetails$, () => ResourceUtilization$, 0, 0, 0, 0, 0, 0]
];
var DateInterval$ = [
  3,
  n0,
  _DI,
  0,
  [_Sta, _E],
  [0, 0],
  2
];
var DimensionValues$ = [
  3,
  n0,
  _DVi,
  0,
  [_K, _V, _MO],
  [0, 64 | 0, 64 | 0]
];
var DimensionValuesWithAttributes$ = [
  3,
  n0,
  _DVWA,
  0,
  [_Va, _At],
  [0, 128 | 0]
];
var DiskResourceUtilization$ = [
  3,
  n0,
  _DRU,
  0,
  [_DROPS, _DWOPS, _DRBPS, _DWBPS],
  [0, 0, 0, 0]
];
var EBSResourceUtilization$ = [
  3,
  n0,
  _EBSRU,
  0,
  [_EROPS, _EWOPS, _ERBPS, _EWBPS],
  [0, 0, 0, 0]
];
var EC2ResourceDetails$ = [
  3,
  n0,
  _ECRD,
  0,
  [_HODR, _IT, _Pl, _Re, _Sk, _Mem, _NP, _Sto, _Vc],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var EC2ResourceUtilization$ = [
  3,
  n0,
  _ECRU,
  0,
  [_MCUP, _MMUP, _MSUP, _EBSRU, _DRU, _NRU],
  [0, 0, 0, () => EBSResourceUtilization$, () => DiskResourceUtilization$, () => NetworkResourceUtilization$]
];
var Expression$ = [
  3,
  n0,
  _Ex,
  0,
  [_O, _An, _No, _Di, _Tag, _CCos],
  [() => Expressions, () => Expressions, () => Expression$, () => DimensionValues$, () => TagValues$, () => CostCategoryValues$]
];
var ForecastResult$ = [
  3,
  n0,
  _FR,
  0,
  [_TP, _MV, _PILB, _PIUB],
  [() => DateInterval$, 0, 0, 0]
];
var GetAnomalyMonitorsRequest$ = [
  3,
  n0,
  _GAMR,
  0,
  [_MAL, _NPT, _MR],
  [64 | 0, 0, 1]
];
var GetAnomalySubscriptionsRequest$ = [
  3,
  n0,
  _GASR,
  0,
  [_SAL, _MA, _NPT, _MR],
  [64 | 0, 0, 0, 1]
];
var GetApproximateUsageRecordsRequest$ = [
  3,
  n0,
  _GAURR,
  0,
  [_Gr, _ADp, _Se],
  [0, 0, 64 | 0],
  2
];
var GetApproximateUsageRecordsResponse$ = [
  3,
  n0,
  _GAURRe,
  0,
  [_Se, _TR, _LP],
  [128 | 1, 1, () => DateInterval$]
];
var GetCostAndUsageRequest$ = [
  3,
  n0,
  _GCAUR,
  0,
  [_TP, _Gr, _Me, _Fi, _GB, _BVA, _NPT],
  [() => DateInterval$, 0, 64 | 0, () => Expression$, () => GroupDefinitions, 0, 0],
  3
];
var GetCostAndUsageResponse$ = [
  3,
  n0,
  _GCAURe,
  0,
  [_NPT, _GD, _RBT, _DVA],
  [0, () => GroupDefinitions, () => ResultsByTime, () => DimensionValuesWithAttributesList]
];
var GetCostAndUsageWithResourcesRequest$ = [
  3,
  n0,
  _GCAUWRR,
  0,
  [_TP, _Gr, _Fi, _Me, _GB, _BVA, _NPT],
  [() => DateInterval$, 0, () => Expression$, 64 | 0, () => GroupDefinitions, 0, 0],
  3
];
var GetCostCategoriesResponse$ = [
  3,
  n0,
  _GCCRe,
  0,
  [_RS, _TS, _NPT, _CCNo, _CCV],
  [1, 1, 0, 64 | 0, 64 | 0],
  2
];
var GetCostForecastRequest$ = [
  3,
  n0,
  _GCFR,
  0,
  [_TP, _Metr, _Gr, _Fi, _BVA, _PIL],
  [() => DateInterval$, 0, 0, () => Expression$, 0, 1],
  3
];
var GetCostForecastResponse$ = [
  3,
  n0,
  _GCFRe,
  0,
  [_To, _FRBT],
  [() => MetricValue$, () => ForecastResultsByTime]
];
var GetReservationCoverageRequest$ = [
  3,
  n0,
  _GRCR,
  0,
  [_TP, _GB, _Gr, _Fi, _Me, _NPT, _SB, _MR],
  [() => DateInterval$, () => GroupDefinitions, 0, () => Expression$, 64 | 0, 0, () => SortDefinition$, 1],
  1
];
var GetSavingsPlansCoverageRequest$ = [
  3,
  n0,
  _GSPCR,
  0,
  [_TP, _GB, _Gr, _Fi, _Me, _NTe, _MR, _SB],
  [() => DateInterval$, () => GroupDefinitions, 0, () => Expression$, 64 | 0, 0, 1, () => SortDefinition$],
  1
];
var GetSavingsPlansUtilizationDetailsRequest$ = [
  3,
  n0,
  _GSPUDR,
  0,
  [_TP, _Fi, _DT, _NTe, _MR, _SB],
  [() => DateInterval$, () => Expression$, 64 | 0, 0, 1, () => SortDefinition$],
  1
];
var GetTagsResponse$ = [
  3,
  n0,
  _GTRe,
  0,
  [_Tag, _RS, _TS, _NPT],
  [64 | 0, 1, 1, 0],
  3
];
var Group$ = [
  3,
  n0,
  _Gro,
  0,
  [_Ke, _Me],
  [64 | 0, () => Metrics]
];
var GroupDefinition$ = [
  3,
  n0,
  _GDr,
  0,
  [_Ty, _K],
  [0, 0]
];
var ListCommitmentPurchaseAnalysesRequest$ = [
  3,
  n0,
  _LCPAR,
  0,
  [_ASn, _NPT, _PSa, _AIna],
  [0, 0, 1, 64 | 0]
];
var ListCostAllocationTagsRequest$ = [
  3,
  n0,
  _LCATR,
  0,
  [_St, _TKa, _Ty, _NTe, _MR],
  [0, 64 | 0, 0, 0, 1]
];
var ListCostCategoryDefinitionsRequest$ = [
  3,
  n0,
  _LCCDR,
  0,
  [_EO, _NTe, _MR, _SRT],
  [0, 0, 1, 64 | 0]
];
var ListSavingsPlansPurchaseRecommendationGenerationRequest$ = [
  3,
  n0,
  _LSPPRGR,
  0,
  [_GSe, _RIec, _PSa, _NPT],
  [0, 64 | 0, 1, 0]
];
var MetricValue$ = [
  3,
  n0,
  _MVe,
  0,
  [_Am, _U],
  [0, 0]
];
var ModifyRecommendationDetail$ = [
  3,
  n0,
  _MRD,
  0,
  [_TIa],
  [() => TargetInstancesList]
];
var NetworkResourceUtilization$ = [
  3,
  n0,
  _NRU,
  0,
  [_NIBPS, _NOBPS, _NPIPS, _NPOPS],
  [0, 0, 0, 0]
];
var ReservationAggregates$ = [
  3,
  n0,
  _RAes,
  0,
  [_UP, _UPIU, _PH, _PU, _TAH, _TAU, _UH, _UU, _ODCORIHU, _NRIS, _TPRIS, _AUF, _ARF, _TAF, _RICFUH, _RSe, _US],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var ReservationCoverageGroup$ = [
  3,
  n0,
  _RCG,
  0,
  [_At, _Co],
  [128 | 0, () => Coverage$]
];
var ReservationUtilizationGroup$ = [
  3,
  n0,
  _RUG,
  0,
  [_K, _Va, _At, _Ut],
  [0, 0, 128 | 0, () => ReservationAggregates$]
];
var ResourceDetails$ = [
  3,
  n0,
  _RD,
  0,
  [_ECRD],
  [() => EC2ResourceDetails$]
];
var ResourceUtilization$ = [
  3,
  n0,
  _RU,
  0,
  [_ECRU],
  [() => EC2ResourceUtilization$]
];
var ResultByTime$ = [
  3,
  n0,
  _RBTe,
  0,
  [_TP, _To, _G, _Es],
  [() => DateInterval$, () => Metrics, () => Groups, 2]
];
var RightsizingRecommendation$ = [
  3,
  n0,
  _RRi,
  0,
  [_AIc, _CI, _RTi, _MRD, _TRD, _FRC],
  [0, () => CurrentInstance$, 0, () => ModifyRecommendationDetail$, () => TerminateRecommendationDetail$, 64 | 0]
];
var SavingsPlans$ = [
  3,
  n0,
  _SPa,
  0,
  [_PO, _SPT, _Re, _IF, _TIY, _SPCa, _OI],
  [0, 0, 0, 0, 0, 1, 0]
];
var SavingsPlansAmortizedCommitment$ = [
  3,
  n0,
  _SPAC,
  0,
  [_ARC, _AUC, _TAC],
  [0, 0, 0]
];
var SavingsPlansCoverage$ = [
  3,
  n0,
  _SPCav,
  0,
  [_At, _Co, _TP],
  [128 | 0, () => SavingsPlansCoverageData$, () => DateInterval$]
];
var SavingsPlansCoverageData$ = [
  3,
  n0,
  _SPCD,
  0,
  [_SCBSP, _ODC, _TC, _CP],
  [0, 0, 0, 0]
];
var SavingsPlansPurchaseAnalysisConfiguration$ = [
  3,
  n0,
  _SPPAC,
  0,
  [_AT, _SPTA, _LBTP, _ASc, _AIc, _SPTE, _SPTC],
  [0, () => SavingsPlansToAdd, () => DateInterval$, 0, 0, 64 | 0, 1],
  3
];
var SavingsPlansSavings$ = [
  3,
  n0,
  _SPS,
  0,
  [_NS, _ODCE],
  [0, 0]
];
var SavingsPlansUtilization$ = [
  3,
  n0,
  _SPU,
  0,
  [_TCo, _UCs, _UCn, _UP],
  [0, 0, 0, 0]
];
var SavingsPlansUtilizationDetail$ = [
  3,
  n0,
  _SPUDa,
  0,
  [_SPA, _At, _Ut, _Sa, _AC],
  [0, 128 | 0, () => SavingsPlansUtilization$, () => SavingsPlansSavings$, () => SavingsPlansAmortizedCommitment$]
];
var SortDefinition$ = [
  3,
  n0,
  _SDo,
  0,
  [_K, _SO],
  [0, 0],
  1
];
var Subscriber$ = [
  3,
  n0,
  _Sub,
  0,
  [_Ad, _Ty, _St],
  [0, 0, 0]
];
var TagValues$ = [
  3,
  n0,
  _TV,
  0,
  [_K, _V, _MO],
  [0, 64 | 0, 64 | 0]
];
var TargetInstance$ = [
  3,
  n0,
  _TIar,
  0,
  [_EMC, _EMS, _CCu, _DTI, _RD, _ERU, _PDl],
  [0, 0, 0, 2, () => ResourceDetails$, () => ResourceUtilization$, 64 | 0]
];
var TerminateRecommendationDetail$ = [
  3,
  n0,
  _TRD,
  0,
  [_EMS, _CCu],
  [0, 0]
];
var UntagResourceRequest$ = [
  3,
  n0,
  _URR,
  0,
  [_RAe, _RTK],
  [0, 64 | 0],
  2
];
var UpdateAnomalySubscriptionRequest$ = [
  3,
  n0,
  _UASR,
  0,
  [_SA, _T, _Fr, _MAL, _S, _SN, _TE],
  [0, 1, 0, 64 | 0, () => Subscribers, 0, () => Expression$],
  1
];
var AnalysisIds = 64 | 0;
var CostAllocationTagKeyList = 64 | 0;
var CostCategoryNamesList = 64 | 0;
var CostCategoryProcessingStatusList = [
  1,
  n0,
  _CCPSL,
  0,
  () => CostCategoryProcessingStatus$
];
var CostCategorySplitChargeRuleParametersList = [
  1,
  n0,
  _CCSCRPL,
  0,
  () => CostCategorySplitChargeRuleParameter$
];
var CostCategorySplitChargeRuleParameterValuesList = 64 | 0;
var CostCategorySplitChargeRuleTargetsList = 64 | 0;
var CostCategoryValuesList = 64 | 0;
var DimensionValuesWithAttributesList = [
  1,
  n0,
  _DVWAL,
  0,
  () => DimensionValuesWithAttributes$
];
var Expressions = [
  1,
  n0,
  _Exp,
  0,
  () => Expression$
];
var FindingReasonCodes = 64 | 0;
var ForecastResultsByTime = [
  1,
  n0,
  _FRBT,
  0,
  () => ForecastResult$
];
var GroupDefinitions = [
  1,
  n0,
  _GD,
  0,
  () => GroupDefinition$
];
var Groups = [
  1,
  n0,
  _G,
  0,
  () => Group$
];
var Keys = 64 | 0;
var MatchOptions = 64 | 0;
var MetricNames = 64 | 0;
var MonitorArnList = 64 | 0;
var PlatformDifferences = 64 | 0;
var RecommendationIdList = 64 | 0;
var ResourceTagKeyList = 64 | 0;
var ResourceTypes = 64 | 0;
var ResourceTypesFilterInput = 64 | 0;
var ResultsByTime = [
  1,
  n0,
  _RBT,
  0,
  () => ResultByTime$
];
var SavingsPlansDataTypes = 64 | 0;
var SavingsPlansToAdd = [
  1,
  n0,
  _SPTA,
  0,
  () => SavingsPlans$
];
var SavingsPlansToExclude = 64 | 0;
var Subscribers = [
  1,
  n0,
  _S,
  0,
  () => Subscriber$
];
var TagList = 64 | 0;
var TagValuesList = [
  1,
  n0,
  _TVL,
  0,
  () => TagValues$
];
var TargetInstancesList = [
  1,
  n0,
  _TIL,
  0,
  () => TargetInstance$
];
var UsageServices = 64 | 0;
var Values = 64 | 0;
var ApproximateUsageRecordsPerService = 128 | 1;
var Attributes = 128 | 0;
var Metrics = [
  2,
  n0,
  _Me,
  0,
  0,
  () => MetricValue$
];
var GetCostAndUsage$ = [
  9,
  n0,
  _GCAU,
  0,
  () => GetCostAndUsageRequest$,
  () => GetCostAndUsageResponse$
];
var GetCostForecast$ = [
  9,
  n0,
  _GCF,
  0,
  () => GetCostForecastRequest$,
  () => GetCostForecastResponse$
];

// node_modules/@aws-sdk/client-cost-explorer/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = /* @__PURE__ */ __name((config2) => {
  return {
    apiVersion: "2017-10-25",
    base64Decoder: config2?.base64Decoder ?? fromBase64,
    base64Encoder: config2?.base64Encoder ?? toBase64,
    disableHostPrefix: config2?.disableHostPrefix ?? false,
    endpointProvider: config2?.endpointProvider ?? defaultEndpointResolver,
    extensions: config2?.extensions ?? [],
    httpAuthSchemeProvider: config2?.httpAuthSchemeProvider ?? defaultCostExplorerHttpAuthSchemeProvider,
    httpAuthSchemes: config2?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer()
      }
    ],
    logger: config2?.logger ?? new NoOpLogger(),
    protocol: config2?.protocol ?? AwsJson1_1Protocol,
    protocolSettings: config2?.protocolSettings ?? {
      defaultNamespace: "com.amazonaws.costexplorer",
      errorTypeRegistries,
      version: "2017-10-25",
      serviceTarget: "AWSInsightsIndexService"
    },
    serviceId: config2?.serviceId ?? "Cost Explorer",
    sha256: config2?.sha256 ?? Sha256WebCrypto,
    urlParser: config2?.urlParser ?? parseUrl,
    utf8Decoder: config2?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config2?.utf8Encoder ?? toUtf8
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/runtimeConfig.browser.js
var getRuntimeConfig2 = /* @__PURE__ */ __name((config2) => {
  const defaultsMode = resolveDefaultsModeConfig(config2);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig(config2);
  return {
    ...clientSharedValues,
    ...config2,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config2?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config2?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config2?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    maxAttempts: config2?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config2?.region ?? invalidProvider("Region is missing"),
    requestHandler: FetchHttpHandler.create(config2?.requestHandler ?? defaultConfigProvider),
    retryMode: config2?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    streamCollector: config2?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config2?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config2?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/runtimeExtensions.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-cost-explorer/dist-es/auth/httpAuthExtensionConfiguration.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config2) => {
  return {
    httpAuthSchemes: config2.httpAuthSchemes(),
    httpAuthSchemeProvider: config2.httpAuthSchemeProvider(),
    credentials: config2.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig2(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
}, "resolveRuntimeExtensions");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/CostExplorerClient.js
var CostExplorerClient = class extends Client {
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig2(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultCostExplorerHttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: async (config2) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config2.credentials
      })
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};
__name(CostExplorerClient, "CostExplorerClient");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/commandBuilder.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_index_browser();
var command = makeBuilder(commonParams, "AWSInsightsIndexService", "CostExplorerClient", getEndpointPlugin);
var _ep0 = {};
var _mw0 = /* @__PURE__ */ __name((Command2, cs, config2, o) => [], "_mw0");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/commands/GetCostAndUsageCommand.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GetCostAndUsageCommand = class extends command(_ep0, _mw0, "GetCostAndUsage", GetCostAndUsage$) {
};
__name(GetCostAndUsageCommand, "GetCostAndUsageCommand");

// node_modules/@aws-sdk/client-cost-explorer/dist-es/commands/GetCostForecastCommand.js
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GetCostForecastCommand = class extends command(_ep0, _mw0, "GetCostForecast", GetCostForecast$) {
};
__name(GetCostForecastCommand, "GetCostForecastCommand");

// src/index.ts
var PROTOCOL_VERSION = "2025-06-18";
var SERVER_INFO = { name: "aws-cost-mcp", version: "0.1.0" };
function rpcResult(id, result) {
  return { jsonrpc: "2.0", id, result };
}
__name(rpcResult, "rpcResult");
function rpcError(id, code, message) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}
__name(rpcError, "rpcError");
function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" }
  });
}
__name(json, "json");
var TOOLS = [
  {
    name: "get_cost_by_service",
    description: "Total AWS cost grouped by service for a date range. Best first call to see where money goes. Dates are YYYY-MM-DD; `end` is exclusive.",
    inputSchema: {
      type: "object",
      properties: {
        start: { type: "string", description: "Start date YYYY-MM-DD (inclusive)." },
        end: { type: "string", description: "End date YYYY-MM-DD (exclusive)." },
        granularity: {
          type: "string",
          enum: ["DAILY", "MONTHLY"],
          description: "Defaults to MONTHLY."
        }
      },
      required: ["start", "end"]
    }
  },
  {
    name: "get_daily_costs",
    description: "Total AWS unblended cost per day for a date range (no grouping). Good for spotting spikes. Dates are YYYY-MM-DD; `end` is exclusive.",
    inputSchema: {
      type: "object",
      properties: {
        start: { type: "string", description: "Start date YYYY-MM-DD (inclusive)." },
        end: { type: "string", description: "End date YYYY-MM-DD (exclusive)." }
      },
      required: ["start", "end"]
    }
  },
  {
    name: "get_cost_forecast",
    description: "Forecasted AWS cost for a FUTURE date range, based on historical usage.",
    inputSchema: {
      type: "object",
      properties: {
        start: { type: "string", description: "Future start date YYYY-MM-DD (inclusive)." },
        end: { type: "string", description: "Future end date YYYY-MM-DD (exclusive)." }
      },
      required: ["start", "end"]
    }
  }
];
function makeClient(env2) {
  return new CostExplorerClient({
    region: env2.AWS_REGION || "us-east-1",
    credentials: {
      accessKeyId: env2.AWS_ACCESS_KEY_ID,
      secretAccessKey: env2.AWS_SECRET_ACCESS_KEY
    }
  });
}
__name(makeClient, "makeClient");
async function callTool(env2, name, args) {
  const client = makeClient(env2);
  switch (name) {
    case "get_cost_by_service": {
      const granularity = args.granularity ?? "MONTHLY";
      const out = await client.send(
        new GetCostAndUsageCommand({
          TimePeriod: { Start: args.start, End: args.end },
          Granularity: granularity,
          Metrics: ["UnblendedCost"],
          GroupBy: [{ Type: "DIMENSION", Key: "SERVICE" }]
        })
      );
      const rows = (out.ResultsByTime ?? []).map((r2) => ({
        period: r2.TimePeriod?.Start,
        services: (r2.Groups ?? []).map((g2) => ({
          service: g2.Keys?.[0],
          amount: Number(g2.Metrics?.UnblendedCost?.Amount ?? 0),
          unit: g2.Metrics?.UnblendedCost?.Unit
        })).filter((s) => s.amount > 0).sort((a2, b2) => b2.amount - a2.amount)
      }));
      return JSON.stringify(rows, null, 2);
    }
    case "get_daily_costs": {
      const out = await client.send(
        new GetCostAndUsageCommand({
          TimePeriod: { Start: args.start, End: args.end },
          Granularity: "DAILY",
          Metrics: ["UnblendedCost"]
        })
      );
      const rows = (out.ResultsByTime ?? []).map((r2) => ({
        date: r2.TimePeriod?.Start,
        amount: Number(r2.Total?.UnblendedCost?.Amount ?? 0),
        unit: r2.Total?.UnblendedCost?.Unit
      }));
      const total = rows.reduce((s, r2) => s + r2.amount, 0);
      const avg = rows.length ? total / rows.length : 0;
      return JSON.stringify(
        { days: rows, total, average_per_day: avg },
        null,
        2
      );
    }
    case "get_cost_forecast": {
      const out = await client.send(
        new GetCostForecastCommand({
          TimePeriod: { Start: args.start, End: args.end },
          Granularity: "MONTHLY",
          Metric: "UNBLENDED_COST"
        })
      );
      return JSON.stringify(
        {
          forecast_total: Number(out.Total?.Amount ?? 0),
          unit: out.Total?.Unit
        },
        null,
        2
      );
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}
__name(callTool, "callTool");
async function handleRpc(env2, req) {
  const { id = null, method, params = {} } = req;
  switch (method) {
    case "initialize":
      return rpcResult(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO
      });
    case "notifications/initialized":
      return null;
    case "ping":
      return rpcResult(id, {});
    case "tools/list":
      return rpcResult(id, { tools: TOOLS });
    case "tools/call": {
      const name = params.name;
      const args = params.arguments ?? {};
      try {
        const text = await callTool(env2, name, args);
        return rpcResult(id, { content: [{ type: "text", text }] });
      } catch (err) {
        return rpcResult(id, {
          isError: true,
          content: [{ type: "text", text: `AWS error: ${err?.message ?? String(err)}` }]
        });
      }
    }
    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}
__name(handleRpc, "handleRpc");
var src_default = {
  async fetch(request, env2) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true, server: SERVER_INFO });
    }
    if (url.pathname !== "/mcp") {
      return json({ error: "Not found. POST JSON-RPC to /mcp." }, 404);
    }
    const auth = request.headers.get("authorization") ?? "";
    const expected = `Bearer ${env2.MCP_AUTH_TOKEN}`;
    if (!env2.MCP_AUTH_TOKEN || auth !== expected) {
      return json({ error: "Unauthorized" }, 401);
    }
    if (request.method !== "POST") {
      return json({ error: "Method not allowed. Use POST." }, 405);
    }
    let payload;
    try {
      payload = await request.json();
    } catch {
      return json(rpcError(null, -32700, "Parse error"), 400);
    }
    if (Array.isArray(payload)) {
      const responses = (await Promise.all(payload.map((r2) => handleRpc(env2, r2)))).filter((r2) => r2 !== null);
      return responses.length ? json(responses) : new Response(null, { status: 202 });
    }
    const response = await handleRpc(env2, payload);
    return response === null ? new Response(null, { status: 202 }) : json(response);
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
