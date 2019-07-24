export type IP = string | ((option: IDHCPMessage) => string);
export type IPs = string[] | ((option: IDHCPMessage) => string[]);
export type Int32 = number | ((option: IDHCPMessage) => number);
export type UInt16 = number | ((option: IDHCPMessage) => number);
export type UInt16s = number[] | ((option: IDHCPMessage) => number[]);
export type UInt32 = number | ((option: IDHCPMessage) => number);
export type UInt8 = number | ((option: IDHCPMessage) => number);
export type UInt8s = number[] | ((option: IDHCPMessage) => number[]);
export type ASCII = string | ((option: IDHCPMessage) => string);
export type ASCIIs = string[] | ((option: IDHCPMessage) => string[]);
export type Bool = boolean | ((option: IDHCPMessage) => boolean);
export type IPv4orDNS = string[] | string | ((option: IDHCPMessage) => string[] | string);

type _Bool = boolean;
type _IP = string;
type _IPs = string[];
type _Int32 = number;
type _UInt8s = number[];
type _UInt16 = number;
type _UInt16s = number[];
type _UInt32 = number;
type _UInt8 = number;
type _ASCII = string;
type _IPv4orDNS = string[] | string;

export interface IDHCPMessage {
  op: BootCode;
  htype: number; // UInt8 hardware addr type: 1 for 10mb ethernet
  hlen: number; // UInt8hardware addr length: 6 for 10mb ethernet
  hops: number; // UInt8relay hop count
  xid: number; // UInt32 session id, initialized by client
  secs: number; // UInt16 seconds since client began address acquistion
  flags: number; // UInt16
  ciaddr: string; // IP client IP when BOUND, RENEW, REBINDING state
  yiaddr: string; // IP 'your' client IP
  siaddr: string; // IP next server to use in boostrap, returned in OFFER & ACK
  giaddr: string; // IP gateway/relay agent IP
  chaddr: string; // MAC: client hardware address
  sname: string; // server host name
  file: string; // boot file name
  magicCookie?: number; // UInt32 contains 99, 130, 83, 99
  options: IOptionsId; // staticly populate options
}

// RFC1700, hardware
export enum HardwareType {
  Ethernet = 1,
  Experimental = 2,
  AX25 = 3,
  ProNETTokenRing = 4,
  Chaos = 5,
  Tokenring = 6,
  Arcnet = 7,
  FDDI = 8,
  Lanstar = 9,
}

export enum BootCode {
  BOOTREQUEST = 1,
  BOOTREPLY = 2,
}

export enum DHCP53Code {
  DHCPDISCOVER = 1,
  DHCPOFFER = 2,
  DHCPREQUEST = 3,
  DHCPDECLINE = 4,
  DHCPACK = 5,
  DHCPNAK = 6,
  DHCPRELEASE = 7,
  DHCPINFORM = 8, //  RFC 2131
}

export enum DHCP46Code {
  "B-node" = 0x1,
  "P-node" = 0x2,
  "M-node" = 0x4,
  "H-node" = 0x8,
}

export enum DHCP52Code {
  file = 1,
  sname = 2,
  both = 3,
}

export enum DHCP116Code {
  DoNotAutoConfigure = 0,
  AutoConfigure = 1,
}

export enum OptionId {
  netmask = 1,
  timeOffset = 2,
  router = 3,
  timeServer = 4,
  nameServer = 5,
  dns = 6,
  logServer = 7,
  cookieServer = 8,
  lprServer = 9,
  impressServer = 10,
  rscServer = 11,
  hostname = 12,
  bootFileSize = 13,
  dumpFile = 14,
  domainName = 15,
  swapServer = 16,
  rootPath = 17,
  extensionPath = 18,
  ipForwarding = 19,
  nonLocalSourceRouting = 20,
  policyFilter = 21,
  maxDatagramSize = 22,
  datagramTTL = 23,
  mtuTimeout = 24,
  mtuSizes = 25,
  mtuInterface = 26,
  subnetsAreLocal = 27,
  broadcast = 28,
  maskDiscovery = 29,
  maskSupplier = 30,
  routerDiscovery = 31,
  routerSolicitation = 32,
  staticRoutes = 33,
  trailerEncapsulation = 34,
  arpCacheTimeout = 35,
  ethernetEncapsulation = 36,
  tcpTTL = 37,
  nisDomain = 40,
  nisServer = 41,
  ntpServer = 42,
  vendor = 43,
  nbnsServer = 44,
  nbddServer = 45,
  nbNodeType = 46,
  nbScope = 47,
  xFontServer = 48,
  xDisplayManager = 49,
  requestedIpAddress = 50, // attr
  leaseTime = 51, // RFC 2132
  dhcpOptionOverload = 52,
  dhcpMessageType = 53,
  server = 54,
  dhcpParameterRequestList = 55, // Sent by client to show all things the client wants
  dhcpMessage = 56, // Error message sent in DHCPNAK on failure
  maxMessageSize = 57,
  renewalTime = 58,
  rebindingTime = 59,
  vendorClassId = 60, // RFC 2132: Sent by client to identify type of a client
  clientId = 61, // Sent by client to specify their unique identifier, to be used to disambiguate the lease on the server
  nisPlusDomain = 64,
  nisPlusServer = 65,
  tftpServer = 66,
  bootFile = 67,
  homeAgentAddresses = 68,
  smtpServer = 69,
  pop3Server = 70,
  nntpServer = 71,
  wwwServer = 72,
  fingerServer = 73,
  ircServer = 74,
  streetTalkServer = 75,
  streetTalkDAServer = 76,
  rapidCommit = 80, // RFC 4039: http://www.networksorcery.com/enp/rfc/rfc4039.txt

  PCode = 100,
  TCode = 101,
  SIPServersDHCPOption = 120, // TODO
  PXERemoteStat = 132, // TODO
  PXEVLanID = 133, // TODO
  // 150
  // 151
  // 159
  // 160
  autoConfig = 116, // RFC 2563: https://tools.ietf.org/html/rfc2563
  subnetSelection = 118,
  domainSearchList = 119,
  classlessRoute = 121,
  renewNonce = 145, // RFC 6704: https://tools.ietf.org/html/rfc6704
  pxeMagicOption = 208,
  pxeConfigFile = 209,
  pxePathPrefix = 210,
  pxeRebootTime = 211,
  wpad = 252,
}

export enum DHCPEnabled {
  Disabled = 0,
  Enabled = 1,
}

export interface IOptionsTxtOrId extends IOptionsTxt, IOptionsId { }

/**
 * generated by script/generator.ts
 */
export interface IOptionsTxt {
  netmask?: _IP;
  timeOffset?: _Int32;
  router?: _IPs;
  timeServer?: _IPs;
  nameServer?: _IPs;
  dns?: _IPs;
  logServer?: _IPs;
  cookieServer?: _IPs;
  lprServer?: _IPs;
  impressServer?: _IPs;
  rscServer?: _IPs;
  hostname?: _ASCII;
  bootFileSize?: _UInt16;
  dumpFile?: _ASCII;
  domainName?: _ASCII;
  swapServer?: _IP;
  rootPath?: _ASCII;
  extensionPath?: _ASCII;
  ipForwarding?: _UInt8;
  nonLocalSourceRouting?: _Bool;
  policyFilter?: _IPs;
  maxDatagramSize?: _UInt16;
  datagramTTL?: _UInt8;
  mtuTimeout?: _UInt32;
  mtuSizes?: _UInt16s;
  mtuInterface?: _UInt16;
  subnetsAreLocal?: _UInt8;
  broadcast?: _IP;
  maskDiscovery?: _UInt8;
  maskSupplier?: _UInt8;
  routerDiscovery?: _UInt8;
  routerSolicitation?: _IP;
  staticRoutes?: _IPs;
  trailerEncapsulation?: _Bool;
  arpCacheTimeout?: _UInt32;
  ethernetEncapsulation?: _Bool;
  tcpTTL?: _UInt8;
  tcpKeepalive?: _UInt32;
  tcpKeepaliveGarbage?: _Bool;
  nisDomain?: _ASCII;
  "NIS+Domain"?: _ASCII;
  "NIS+Server"?: _IPs;
  netwareIPDomainName?: _ASCII;
  netwareIPDomainInfp?: _ASCII;
  SLPDirectoryAgent?: _ASCII;
  userClass?: _ASCII;
  SLPServiceScope?: _ASCII;
  tftpServer?: string;
  bootfileName?: string;
  mobileIPHomeAgent?: _IPs;
  nisServer?: _IPs;
  ntpServer?: _IPs;
  vendor?: _UInt8s;
  nbnsServer?: _IPs;
  nbddServer?: _IP;
  nbNodeType?: _UInt8;
  dhcpClientIdentifier?: _UInt8;
  nbScope?: _ASCII;
  xFontServer?: _IPs;
  xDisplayManager?: _IPs;
  requestedIpAddress?: _IP;
  leaseTime?: _UInt32;
  dhcpOptionOverload?: _UInt8;
  dhcpMessageType?: _UInt8;
  server?: _IP;
  dhcpParameterRequestList?: _UInt8s;
  dhcpMessage?: _ASCII;
  maxMessageSize?: _UInt16;
  renewalTime?: _UInt32;
  rebindingTime?: _UInt32;
  vendorClassIdentifier?: _ASCII;
  pop3Server?: _IPs;
  nntpServer?: _IPs;
  wwwServer?: _IPs;
  fingerServer?: _IPs;
  ircServer?: _IPs;
  streetTalkServer?: _IPs;
  streetTalkDAServer?: _IPs;
  rapidCommit?: _Bool;
  netinfoServerAddress?: _ASCII;
  netinfoServerTag?: _ASCII;
  autoConfigure?: _UInt8;
  subnetSelection?: _IP;
  domainSearchList?: _ASCII;
  classlessRoute?: _IPs;
  vivso?: _ASCII;
  renewNonce?: _UInt8s;
  pxeMagicOption?: _UInt32;
  pxeConfigFile?: _ASCII;
  pxePathPrefix?: _ASCII;
  pxeRebootTime?: _UInt32;
  wpad?: _ASCII;
  PCode?: _ASCII;
  TCode?: _ASCII;
  SIPServerDHCPOption?: _IPv4orDNS;
  smtpServer?: _ASCII;
}

/**
 * generated by script/generator.ts
 */
export interface IOptionsId {
  1?: _IP;
  2?: _Int32;
  3?: _IPs;
  4?: _IPs;
  5?: _IPs;
  6?: _IPs;
  7?: _IPs;
  8?: _IPs;
  9?: _IPs;
  10?: _IPs;
  11?: _IPs;
  12?: _ASCII;
  13?: _UInt16;
  14?: _ASCII;
  15?: _ASCII;
  16?: _IP;
  17?: _ASCII;
  18?: _ASCII;
  19?: _UInt8;
  20?: _Bool;
  21?: _IPs;
  22?: _UInt16;
  23?: _UInt8;
  24?: _UInt32;
  25?: _UInt16s;
  26?: _UInt16;
  27?: _UInt8;
  28?: _IP;
  29?: _UInt8;
  30?: _UInt8;
  31?: _UInt8;
  32?: _IP;
  33?: _IPs;
  34?: _Bool;
  35?: _UInt32;
  36?: _Bool;
  37?: _UInt8;
  38?: _UInt32;
  39?: _Bool;
  40?: _ASCII;
  41?: _IPs;
  42?: _IPs;
  43?: _UInt8s;
  44?: _IPs;
  45?: _IP;
  46?: _UInt8;
  47?: _ASCII;
  48?: _IPs;
  49?: _IPs;
  50?: _IP;
  51?: _UInt32;
  52?: _UInt8;
  53?: _UInt8;
  54?: _IP;
  55?: _UInt8s;
  56?: _ASCII;
  57?: _UInt16;
  58?: _UInt32;
  59?: _UInt32;
  60?: _ASCII;
  61?: _UInt8s;
  64?: _ASCII;
  65?: _IPs;
  66?: _ASCII;
  67?: _ASCII;
  68?: _ASCII;
  69?: _IPs;
  70?: _IPs;
  71?: _IPs;
  72?: _IPs;
  73?: _IPs;
  74?: _IPs;
  75?: _IPs;
  76?: _IPs;
  80?: _Bool;
  100?: _ASCII;
  101?: _ASCII;
  112?: _ASCII;
  113?: _ASCII;
  116?: _UInt8;
  118?: _IP;
  119?: _ASCII;
  120?: _IPv4orDNS;
  121?: _IPs;
  125?: _ASCII;
  145?: _UInt8s;
  208?: _UInt32;
  209?: _ASCII;
  210?: _ASCII;
  211?: _UInt32;
  252?: _ASCII;
}

/**
 * generated by script/generator.ts
 */
export interface IDHCPOptionsFncId {
  1?: IP;
  2?: Int32;
  3?: IPs;
  4?: IPs;
  5?: IPs;
  6?: IPs;
  7?: IPs;
  8?: IPs;
  9?: IPs;
  10?: IPs;
  11?: IPs;
  12?: ASCII;
  13?: UInt16;
  14?: ASCII;
  15?: ASCII;
  16?: IP;
  17?: ASCII;
  18?: ASCII;
  19?: UInt8;
  20?: Bool;
  21?: IPs;
  22?: UInt16;
  23?: UInt8;
  24?: UInt32;
  25?: UInt16s;
  26?: UInt16;
  27?: UInt8;
  28?: IP;
  29?: UInt8;
  30?: UInt8;
  31?: UInt8;
  32?: IP;
  33?: IPs;
  34?: Bool;
  35?: UInt32;
  36?: Bool;
  37?: UInt8;
  38?: UInt32;
  39?: Bool;
  40?: ASCII;
  41?: IPs;
  42?: IPs;
  43?: UInt8s;
  44?: IPs;
  45?: IP;
  46?: UInt8;
  47?: ASCII;
  48?: IPs;
  49?: IPs;
  50?: IP;
  51?: UInt32;
  52?: UInt8;
  53?: UInt8;
  54?: IP;
  55?: UInt8s;
  56?: ASCII;
  57?: UInt16;
  58?: UInt32;
  59?: UInt32;
  60?: ASCII;
  61?: ASCII;
  64?: ASCII;
  65?: IPs;
  66?: ASCII;
  67?: ASCII;
  68?: ASCII;
  69?: IPs;
  70?: IPs;
  71?: IPs;
  72?: IPs;
  73?: IPs;
  74?: IPs;
  75?: IPs;
  76?: IPs;
  80?: Bool;
  112?: ASCII;
  113?: ASCII;
  116?: UInt8;
  118?: IP;
  119?: ASCII;
  120?: IPv4orDNS;
  121?: IPs;
  125?: ASCII;
  145?: UInt8s;
  208?: UInt32;
  209?: ASCII;
  210?: ASCII;
  211?: UInt32;
  252?: ASCII;
}
