/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('local');

// Create a new document in the collection.
db.getCollection('startup_log').insertOne({
  _id: 'Seksicani-1710232761937',
  hostname: 'Seksicani',
  startTime: ISODate('2024-03-12T08:39:21.000Z'),
  startTimeLocal: 'Tue Mar 12 01:39:21.937',
  cmdLine: {
    config: 'C:\\Program Files\\MongoDB\\Server\\6.0\\bin\\mongod.cfg',
    net: {
      bindIp: '127.0.0.1',
      port: 27017
    },
    service: true,
    storage: {
      dbPath: 'C:\\Program Files\\MongoDB\\Server\\6.0\\data',
      journal: {
        enabled: true
      }
    },
    systemLog: {
      destination: 'file',
      logAppend: true,
      path: 'C:\\Program Files\\MongoDB\\Server\\6.0\\log\\mongod.log'
    }
  },
  pid: 5884,
  buildinfo: {
    version: '6.0.4',
    gitVersion: '44ff59461c1353638a71e710f385a566bcd2f547',
    targetMinOS: 'Windows 7/Windows Server 2008 R2',
    modules: [],
    allocator: 'tcmalloc',
    javascriptEngine: 'mozjs',
    sysInfo: 'deprecated',
    versionArray: [
      6,
      0,
      4,
      0
    ],
    openssl: {
      running: 'Windows SChannel'
    },
    buildEnvironment: {
      distmod: 'windows',
      distarch: 'x86_64',
      cc: 'cl: Microsoft (R) C/C++ Optimizing Compiler Version 19.31.31107 for x64',
      ccflags: '/nologo /WX /FImongo/platform/basic.h /fp:strict /EHsc /W3 /wd4068 /wd4244 /wd4267 /wd4290 /wd4351 /wd4355 /wd4373 /wd4800 /wd4251 /wd4291 /we4013 /we4099 /we4930 /errorReport:none /MD /O2 /Oy- /bigobj /utf-8 /permissive- /Zc:__cplusplus /Zc:sizedDealloc /volatile:iso /diagnostics:caret /std:c++17 /Gw /Gy /Zc:inline',
      cxx: 'cl: Microsoft (R) C/C++ Optimizing Compiler Version 19.31.31107 for x64',
      cxxflags: '/TP',
      linkflags: '/nologo /DEBUG /INCREMENTAL:NO /LARGEADDRESSAWARE /OPT:REF',
      target_arch: 'x86_64',
      target_os: 'windows',
      cppdefines: 'SAFEINT_USE_INTRINSICS 0 PCRE_STATIC NDEBUG BOOST_ALL_NO_LIB _UNICODE UNICODE _SILENCE_CXX17_ALLOCATOR_VOID_DEPRECATION_WARNING _SILENCE_CXX17_OLD_ALLOCATOR_MEMBERS_DEPRECATION_WARNING _SILENCE_CXX17_CODECVT_HEADER_DEPRECATION_WARNING _SILENCE_ALL_CXX20_DEPRECATION_WARNINGS _CONSOLE _CRT_SECURE_NO_WARNINGS _ENABLE_EXTENDED_ALIGNED_STORAGE _SCL_SECURE_NO_WARNINGS _WIN32_WINNT 0x0A00 BOOST_USE_WINAPI_VERSION 0x0A00 NTDDI_VERSION 0x0A000000 BOOST_THREAD_VERSION 5 BOOST_THREAD_USES_DATETIME BOOST_SYSTEM_NO_DEPRECATED BOOST_MATH_NO_LONG_DOUBLE_MATH_FUNCTIONS BOOST_ENABLE_ASSERT_DEBUG_HANDLER BOOST_LOG_NO_SHORTHAND_NAMES BOOST_LOG_USE_NATIVE_SYSLOG BOOST_LOG_WITHOUT_THREAD_ATTR ABSL_FORCE_ALIGNED_ACCESS'
    },
    bits: 64,
    debug: false,
    maxBsonObjectSize: 16777216,
    storageEngines: [
      'devnull',
      'ephemeralForTest',
      'wiredTiger'
    ]
  }
});
