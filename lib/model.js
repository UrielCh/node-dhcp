"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RFC1700, hardware
var HardwareType;
(function (HardwareType) {
    HardwareType[HardwareType["Ethernet"] = 1] = "Ethernet";
    HardwareType[HardwareType["Experimental"] = 2] = "Experimental";
    HardwareType[HardwareType["AX25"] = 3] = "AX25";
    HardwareType[HardwareType["ProNETTokenRing"] = 4] = "ProNETTokenRing";
    HardwareType[HardwareType["Chaos"] = 5] = "Chaos";
    HardwareType[HardwareType["Tokenring"] = 6] = "Tokenring";
    HardwareType[HardwareType["Arcnet"] = 7] = "Arcnet";
    HardwareType[HardwareType["FDDI"] = 8] = "FDDI";
    HardwareType[HardwareType["Lanstar"] = 9] = "Lanstar";
})(HardwareType = exports.HardwareType || (exports.HardwareType = {}));
var BootCode;
(function (BootCode) {
    BootCode[BootCode["BOOTREQUEST"] = 1] = "BOOTREQUEST";
    BootCode[BootCode["BOOTREPLY"] = 2] = "BOOTREPLY";
})(BootCode = exports.BootCode || (exports.BootCode = {}));
var DHCP53Code;
(function (DHCP53Code) {
    DHCP53Code[DHCP53Code["DHCPDISCOVER"] = 1] = "DHCPDISCOVER";
    DHCP53Code[DHCP53Code["DHCPOFFER"] = 2] = "DHCPOFFER";
    DHCP53Code[DHCP53Code["DHCPREQUEST"] = 3] = "DHCPREQUEST";
    DHCP53Code[DHCP53Code["DHCPDECLINE"] = 4] = "DHCPDECLINE";
    DHCP53Code[DHCP53Code["DHCPACK"] = 5] = "DHCPACK";
    DHCP53Code[DHCP53Code["DHCPNAK"] = 6] = "DHCPNAK";
    DHCP53Code[DHCP53Code["DHCPRELEASE"] = 7] = "DHCPRELEASE";
    DHCP53Code[DHCP53Code["DHCPINFORM"] = 8] = "DHCPINFORM";
})(DHCP53Code = exports.DHCP53Code || (exports.DHCP53Code = {}));
var DHCP46Code;
(function (DHCP46Code) {
    DHCP46Code[DHCP46Code["B-node"] = 1] = "B-node";
    DHCP46Code[DHCP46Code["P-node"] = 2] = "P-node";
    DHCP46Code[DHCP46Code["M-node"] = 4] = "M-node";
    DHCP46Code[DHCP46Code["H-node"] = 8] = "H-node";
})(DHCP46Code = exports.DHCP46Code || (exports.DHCP46Code = {}));
var DHCP52Code;
(function (DHCP52Code) {
    DHCP52Code[DHCP52Code["file"] = 1] = "file";
    DHCP52Code[DHCP52Code["sname"] = 2] = "sname";
    DHCP52Code[DHCP52Code["both"] = 3] = "both";
})(DHCP52Code = exports.DHCP52Code || (exports.DHCP52Code = {}));
var DHCP116Code;
(function (DHCP116Code) {
    DHCP116Code[DHCP116Code["DoNotAutoConfigure"] = 0] = "DoNotAutoConfigure";
    DHCP116Code[DHCP116Code["AutoConfigure"] = 1] = "AutoConfigure";
})(DHCP116Code = exports.DHCP116Code || (exports.DHCP116Code = {}));
var OptionId;
(function (OptionId) {
    OptionId[OptionId["netmask"] = 1] = "netmask";
    OptionId[OptionId["timeOffset"] = 2] = "timeOffset";
    OptionId[OptionId["router"] = 3] = "router";
    OptionId[OptionId["timeServer"] = 4] = "timeServer";
    OptionId[OptionId["nameServer"] = 5] = "nameServer";
    OptionId[OptionId["dns"] = 6] = "dns";
    OptionId[OptionId["logServer"] = 7] = "logServer";
    OptionId[OptionId["cookieServer"] = 8] = "cookieServer";
    OptionId[OptionId["lprServer"] = 9] = "lprServer";
    OptionId[OptionId["impressServer"] = 10] = "impressServer";
    OptionId[OptionId["rscServer"] = 11] = "rscServer";
    OptionId[OptionId["hostname"] = 12] = "hostname";
    OptionId[OptionId["bootFileSize"] = 13] = "bootFileSize";
    OptionId[OptionId["dumpFile"] = 14] = "dumpFile";
    OptionId[OptionId["domainName"] = 15] = "domainName";
    OptionId[OptionId["swapServer"] = 16] = "swapServer";
    OptionId[OptionId["rootPath"] = 17] = "rootPath";
    OptionId[OptionId["extensionPath"] = 18] = "extensionPath";
    OptionId[OptionId["ipForwarding"] = 19] = "ipForwarding";
    OptionId[OptionId["nonLocalSourceRouting"] = 20] = "nonLocalSourceRouting";
    OptionId[OptionId["policyFilter"] = 21] = "policyFilter";
    OptionId[OptionId["maxDatagramSize"] = 22] = "maxDatagramSize";
    OptionId[OptionId["datagramTTL"] = 23] = "datagramTTL";
    OptionId[OptionId["mtuTimeout"] = 24] = "mtuTimeout";
    OptionId[OptionId["mtuSizes"] = 25] = "mtuSizes";
    OptionId[OptionId["mtuInterface"] = 26] = "mtuInterface";
    OptionId[OptionId["subnetsAreLocal"] = 27] = "subnetsAreLocal";
    OptionId[OptionId["broadcast"] = 28] = "broadcast";
    OptionId[OptionId["maskDiscovery"] = 29] = "maskDiscovery";
    OptionId[OptionId["maskSupplier"] = 30] = "maskSupplier";
    OptionId[OptionId["routerDiscovery"] = 31] = "routerDiscovery";
    OptionId[OptionId["routerSolicitation"] = 32] = "routerSolicitation";
    OptionId[OptionId["staticRoutes"] = 33] = "staticRoutes";
    OptionId[OptionId["trailerEncapsulation"] = 34] = "trailerEncapsulation";
    OptionId[OptionId["arpCacheTimeout"] = 35] = "arpCacheTimeout";
    OptionId[OptionId["ethernetEncapsulation"] = 36] = "ethernetEncapsulation";
    OptionId[OptionId["tcpTTL"] = 37] = "tcpTTL";
    OptionId[OptionId["nisDomain"] = 40] = "nisDomain";
    OptionId[OptionId["nisServer"] = 41] = "nisServer";
    OptionId[OptionId["ntpServer"] = 42] = "ntpServer";
    OptionId[OptionId["vendor"] = 43] = "vendor";
    OptionId[OptionId["nbnsServer"] = 44] = "nbnsServer";
    OptionId[OptionId["nbddServer"] = 45] = "nbddServer";
    OptionId[OptionId["nbNodeType"] = 46] = "nbNodeType";
    OptionId[OptionId["nbScope"] = 47] = "nbScope";
    OptionId[OptionId["xFontServer"] = 48] = "xFontServer";
    OptionId[OptionId["xDisplayManager"] = 49] = "xDisplayManager";
    OptionId[OptionId["requestedIpAddress"] = 50] = "requestedIpAddress";
    OptionId[OptionId["leaseTime"] = 51] = "leaseTime";
    OptionId[OptionId["dhcpOptionOverload"] = 52] = "dhcpOptionOverload";
    OptionId[OptionId["dhcpMessageType"] = 53] = "dhcpMessageType";
    OptionId[OptionId["server"] = 54] = "server";
    OptionId[OptionId["dhcpParameterRequestList"] = 55] = "dhcpParameterRequestList";
    OptionId[OptionId["dhcpMessage"] = 56] = "dhcpMessage";
    OptionId[OptionId["maxMessageSize"] = 57] = "maxMessageSize";
    OptionId[OptionId["renewalTime"] = 58] = "renewalTime";
    OptionId[OptionId["rebindingTime"] = 59] = "rebindingTime";
    OptionId[OptionId["vendorClassIdentifier"] = 60] = "vendorClassIdentifier";
    OptionId[OptionId["dhcpClientIdentifier"] = 61] = "dhcpClientIdentifier";
    OptionId[OptionId["nisPlusDomain"] = 64] = "nisPlusDomain";
    OptionId[OptionId["nisPlusServer"] = 65] = "nisPlusServer";
    OptionId[OptionId["tftpServer"] = 66] = "tftpServer";
    OptionId[OptionId["bootFile"] = 67] = "bootFile";
    OptionId[OptionId["homeAgentAddresses"] = 68] = "homeAgentAddresses";
    OptionId[OptionId["smtpServer"] = 69] = "smtpServer";
    OptionId[OptionId["pop3Server"] = 70] = "pop3Server";
    OptionId[OptionId["nntpServer"] = 71] = "nntpServer";
    OptionId[OptionId["wwwServer"] = 72] = "wwwServer";
    OptionId[OptionId["fingerServer"] = 73] = "fingerServer";
    OptionId[OptionId["ircServer"] = 74] = "ircServer";
    OptionId[OptionId["streetTalkServer"] = 75] = "streetTalkServer";
    OptionId[OptionId["streetTalkDAServer"] = 76] = "streetTalkDAServer";
    OptionId[OptionId["rapidCommit"] = 80] = "rapidCommit";
    OptionId[OptionId["autoConfig"] = 116] = "autoConfig";
    OptionId[OptionId["subnetSelection"] = 118] = "subnetSelection";
    OptionId[OptionId["domainSearchList"] = 119] = "domainSearchList";
    OptionId[OptionId["classlessRoute"] = 121] = "classlessRoute";
    OptionId[OptionId["renewNonce"] = 145] = "renewNonce";
    OptionId[OptionId["pxeMagicOption"] = 208] = "pxeMagicOption";
    OptionId[OptionId["pxeConfigFile"] = 209] = "pxeConfigFile";
    OptionId[OptionId["pxePathPrefix"] = 210] = "pxePathPrefix";
    OptionId[OptionId["pxeRebootTime"] = 211] = "pxeRebootTime";
    OptionId[OptionId["wpad"] = 252] = "wpad";
})(OptionId = exports.OptionId || (exports.OptionId = {}));
var DHCPEnabled;
(function (DHCPEnabled) {
    DHCPEnabled[DHCPEnabled["Disabled"] = 0] = "Disabled";
    DHCPEnabled[DHCPEnabled["Enabled"] = 1] = "Enabled";
})(DHCPEnabled = exports.DHCPEnabled || (exports.DHCPEnabled = {}));
//# sourceMappingURL=model.js.map